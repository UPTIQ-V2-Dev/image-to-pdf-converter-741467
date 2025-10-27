import type { ConversionHistory, ConversionJob } from '../types/conversion';
import type { PdfSettings } from '../types/pdf';

export const defaultPdfSettings: PdfSettings = {
    pageSize: 'a4',
    orientation: 'portrait',
    quality: 'high',
    margin: 20,
    imagesPerPage: 1,
    fitToPage: true,
    maintainAspectRatio: true
};

export const mockConversionJobs: ConversionJob[] = [
    {
        id: '1',
        images: [],
        settings: defaultPdfSettings,
        status: 'complete',
        createdAt: new Date('2024-01-15T10:30:00Z'),
        completedAt: new Date('2024-01-15T10:30:15Z'),
        result: {
            filename: 'vacation-photos.pdf',
            size: 2048576, // 2MB
            downloadUrl: '/downloads/vacation-photos.pdf'
        }
    },
    {
        id: '2',
        images: [],
        settings: { ...defaultPdfSettings, pageSize: 'letter', imagesPerPage: 2 },
        status: 'complete',
        createdAt: new Date('2024-01-14T15:45:00Z'),
        completedAt: new Date('2024-01-14T15:45:08Z'),
        result: {
            filename: 'documents-scan.pdf',
            size: 1536000, // 1.5MB
            downloadUrl: '/downloads/documents-scan.pdf'
        }
    },
    {
        id: '3',
        images: [],
        settings: { ...defaultPdfSettings, orientation: 'landscape' },
        status: 'error',
        createdAt: new Date('2024-01-14T09:20:00Z'),
        error: 'Failed to process image: corrupted file format'
    }
];

export const mockConversionHistory: ConversionHistory = {
    jobs: mockConversionJobs,
    totalJobs: mockConversionJobs.length
};

export const supportedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];

export const maxFileSize = 10 * 1024 * 1024; // 10MB
export const maxFiles = 50;
