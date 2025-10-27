import type { UploadedImage } from './image';
import type { PdfSettings, ConversionProgress } from './pdf';

export type ConversionStatus = 'idle' | 'preparing' | 'uploading' | 'processing' | 'generating' | 'complete' | 'error';

export interface ConversionState {
    status: ConversionStatus;
    images: UploadedImage[];
    settings: PdfSettings;
    progress: ConversionProgress;
    error?: string;
}

export interface ConversionJob {
    id: string;
    images: UploadedImage[];
    settings: PdfSettings;
    status: ConversionStatus;
    createdAt: Date;
    completedAt?: Date;
    result?: {
        filename: string;
        size: number;
        downloadUrl: string;
    };
    error?: string;
}

export interface ConversionHistory {
    jobs: ConversionJob[];
    totalJobs: number;
}
