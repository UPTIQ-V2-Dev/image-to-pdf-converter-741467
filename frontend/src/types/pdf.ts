export type PdfPageSize = 'a4' | 'a3' | 'a5' | 'letter' | 'legal' | 'custom';
export type PdfOrientation = 'portrait' | 'landscape';
export type PdfQuality = 'low' | 'medium' | 'high';

export interface PdfSettings {
    pageSize: PdfPageSize;
    orientation: PdfOrientation;
    quality: PdfQuality;
    margin: number;
    imagesPerPage: number;
    fitToPage: boolean;
    maintainAspectRatio: boolean;
    customWidth?: number;
    customHeight?: number;
}

export interface PdfDimensions {
    width: number;
    height: number;
}

export interface PdfPageLayout {
    pageWidth: number;
    pageHeight: number;
    contentWidth: number;
    contentHeight: number;
    margin: number;
}

export interface ConversionProgress {
    current: number;
    total: number;
    stage: 'preparing' | 'processing' | 'generating' | 'complete';
    message: string;
}

export interface ConversionResult {
    success: boolean;
    pdfBlob?: Blob;
    filename: string;
    size: number;
    error?: string;
}
