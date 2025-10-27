import type { UploadedImage, ImageValidationResult, ImageProcessingOptions, ProcessedImage } from '../types/image';
import { supportedImageTypes, maxFileSize, maxFiles } from '../data/converterMockData';

export const validateImage = (file: File): ImageValidationResult => {
    const errors: string[] = [];

    // Check file type
    if (!supportedImageTypes.includes(file.type)) {
        errors.push(`Unsupported file type: ${file.type}. Supported types: ${supportedImageTypes.join(', ')}`);
    }

    // Check file size
    if (file.size > maxFileSize) {
        errors.push(
            `File size too large: ${(file.size / 1024 / 1024).toFixed(2)}MB. Maximum size: ${maxFileSize / 1024 / 1024}MB`
        );
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

export const validateImageBatch = (files: File[]): ImageValidationResult => {
    const errors: string[] = [];

    if (files.length > maxFiles) {
        errors.push(`Too many files: ${files.length}. Maximum allowed: ${maxFiles}`);
    }

    for (const file of files) {
        const validation = validateImage(file);
        errors.push(...validation.errors);
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};

export const createUploadedImage = async (file: File): Promise<UploadedImage> => {
    const url = URL.createObjectURL(file);
    const preview = url; // For now, use the same URL for preview

    // Get image dimensions
    const { width, height } = await getImageDimensions(file);

    return {
        id: crypto.randomUUID(),
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        url,
        preview,
        width,
        height
    };
};

export const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);

        img.onload = () => {
            URL.revokeObjectURL(url);
            resolve({
                width: img.naturalWidth,
                height: img.naturalHeight
            });
        };

        img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('Failed to load image'));
        };

        img.src = url;
    });
};

export const processImage = async (image: UploadedImage, options: ImageProcessingOptions): Promise<ProcessedImage> => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Unable to create canvas context');
    }

    const img = new Image();
    img.src = image.url;

    await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
    });

    // Calculate new dimensions
    let { width, height } = img;

    if (options.maxWidth && width > options.maxWidth) {
        height = (height * options.maxWidth) / width;
        width = options.maxWidth;
    }

    if (options.maxHeight && height > options.maxHeight) {
        width = (width * options.maxHeight) / height;
        height = options.maxHeight;
    }

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Draw image on canvas
    ctx.drawImage(img, 0, 0, width, height);

    // Convert to blob
    const quality = options.quality || 0.9;
    const format = options.format || 'jpeg';

    const processedBlob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
            blob => {
                if (blob) {
                    resolve(blob);
                } else {
                    reject(new Error('Failed to create blob'));
                }
            },
            `image/${format}`,
            quality
        );
    });

    return {
        id: image.id,
        originalFile: image.file,
        processedBlob,
        canvas,
        width,
        height
    };
};

export const cleanupImageUrls = (images: UploadedImage[]): void => {
    images.forEach(image => {
        URL.revokeObjectURL(image.url);
        if (image.preview !== image.url) {
            URL.revokeObjectURL(image.preview);
        }
    });
};
