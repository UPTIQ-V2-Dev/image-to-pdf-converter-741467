import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import type { UploadedImage } from '../types/image';
import { validateImageBatch, createUploadedImage, cleanupImageUrls } from '../services/imageService';
import { supportedImageTypes } from '../data/converterMockData';

interface UseImageUploadReturn {
    images: UploadedImage[];
    isUploading: boolean;
    error: string | null;
    getRootProps: () => any;
    getInputProps: () => any;
    isDragActive: boolean;
    addImages: (files: File[]) => Promise<void>;
    removeImage: (imageId: string) => void;
    clearImages: () => void;
    reorderImages: (startIndex: number, endIndex: number) => void;
}

export const useImageUpload = (): UseImageUploadReturn => {
    const [images, setImages] = useState<UploadedImage[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const addImages = useCallback(async (files: File[]) => {
        setError(null);
        setIsUploading(true);

        try {
            // Validate files
            const validation = validateImageBatch(files);
            if (!validation.isValid) {
                setError(validation.errors.join(', '));
                return;
            }

            // Create uploaded images
            const newImages: UploadedImage[] = [];
            for (const file of files) {
                try {
                    const uploadedImage = await createUploadedImage(file);
                    newImages.push(uploadedImage);
                } catch (err) {
                    console.warn(`Failed to process ${file.name}:`, err);
                }
            }

            if (newImages.length > 0) {
                setImages(prev => [...prev, ...newImages]);
            }

            if (newImages.length < files.length) {
                setError(`${files.length - newImages.length} files could not be processed`);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to upload images');
        } finally {
            setIsUploading(false);
        }
    }, []);

    const removeImage = useCallback((imageId: string) => {
        setImages(prev => {
            const imageToRemove = prev.find(img => img.id === imageId);
            if (imageToRemove) {
                cleanupImageUrls([imageToRemove]);
            }
            return prev.filter(img => img.id !== imageId);
        });
    }, []);

    const clearImages = useCallback(() => {
        cleanupImageUrls(images);
        setImages([]);
        setError(null);
    }, [images]);

    const reorderImages = useCallback((startIndex: number, endIndex: number) => {
        setImages(prev => {
            const result = Array.from(prev);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            return result;
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'image/*': supportedImageTypes.map(type => type.split('/')[1])
        },
        multiple: true,
        onDrop: addImages
    });

    return {
        images,
        isUploading,
        error,
        getRootProps,
        getInputProps,
        isDragActive,
        addImages,
        removeImage,
        clearImages,
        reorderImages
    };
};
