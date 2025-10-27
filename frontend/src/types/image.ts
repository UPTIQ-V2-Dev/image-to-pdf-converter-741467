export interface UploadedImage {
    id: string;
    file: File;
    name: string;
    size: number;
    type: string;
    url: string;
    preview: string;
    width?: number;
    height?: number;
}

export interface ImageValidationResult {
    isValid: boolean;
    errors: string[];
}

export interface ImageProcessingOptions {
    maxWidth?: number;
    maxHeight?: number;
    quality?: number;
    format?: 'jpeg' | 'png' | 'webp';
}

export interface ProcessedImage {
    id: string;
    originalFile: File;
    processedBlob: Blob;
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
}
