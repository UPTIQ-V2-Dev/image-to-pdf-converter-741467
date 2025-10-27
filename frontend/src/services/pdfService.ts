import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import type { UploadedImage } from '../types/image';
import type { PdfSettings, ConversionResult, ConversionProgress } from '../types/pdf';
import type { ConversionHistory } from '../types/conversion';
import { mockConversionHistory } from '../data/converterMockData';

export const convertImagesToPDF = async (
    images: UploadedImage[],
    settings: PdfSettings,
    onProgress?: (progress: ConversionProgress) => void
): Promise<ConversionResult> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        // Mock conversion process
        const stages = ['preparing', 'processing', 'generating', 'complete'] as const;

        for (let i = 0; i < stages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            onProgress?.({
                current: i + 1,
                total: stages.length,
                stage: stages[i],
                message: `${stages[i].charAt(0).toUpperCase() + stages[i].slice(1)} PDF...`
            });
        }

        // Create mock PDF blob
        const pdf = new jsPDF({
            orientation: settings.orientation,
            unit: 'mm',
            format: settings.pageSize
        });
        pdf.text('Mock PDF - Images converted successfully!', 20, 20);
        const pdfBlob = pdf.output('blob');

        return {
            success: true,
            pdfBlob,
            filename: `converted-images-${Date.now()}.pdf`,
            size: pdfBlob.size
        };
    }

    try {
        onProgress?.({
            current: 1,
            total: 4,
            stage: 'preparing',
            message: 'Preparing PDF document...'
        });

        // Create PDF with specified settings
        const pdf = new jsPDF({
            orientation: settings.orientation,
            unit: 'mm',
            format:
                settings.pageSize === 'custom'
                    ? [settings.customWidth || 210, settings.customHeight || 297]
                    : settings.pageSize
        });

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const contentWidth = pageWidth - settings.margin * 2;
        const contentHeight = pageHeight - settings.margin * 2;

        onProgress?.({
            current: 2,
            total: 4,
            stage: 'processing',
            message: 'Processing images...'
        });

        for (let i = 0; i < images.length; i++) {
            const image = images[i];

            if (i > 0 && i % settings.imagesPerPage === 0) {
                pdf.addPage();
            }

            try {
                const img = new Image();
                img.src = image.url;

                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });

                let imgWidth = img.width;
                let imgHeight = img.height;

                if (settings.fitToPage) {
                    const widthRatio = contentWidth / imgWidth;
                    const heightRatio = contentHeight / imgHeight;
                    const ratio = Math.min(widthRatio, heightRatio);

                    if (settings.maintainAspectRatio) {
                        imgWidth *= ratio;
                        imgHeight *= ratio;
                    } else {
                        imgWidth = contentWidth;
                        imgHeight = contentHeight;
                    }
                }

                // Calculate position to center image
                const x = settings.margin + (contentWidth - imgWidth) / 2;
                const y = settings.margin + (contentHeight - imgHeight) / 2;

                // Convert pixel dimensions to mm (assuming 96 DPI)
                const mmWidth = imgWidth * 0.264583;
                const mmHeight = imgHeight * 0.264583;

                pdf.addImage(image.url, 'JPEG', x, y, mmWidth, mmHeight);
            } catch (error) {
                console.warn(`Failed to add image ${image.name}:`, error);
            }
        }

        onProgress?.({
            current: 3,
            total: 4,
            stage: 'generating',
            message: 'Generating PDF file...'
        });

        const pdfBlob = pdf.output('blob');
        const filename = `converted-images-${Date.now()}.pdf`;

        onProgress?.({
            current: 4,
            total: 4,
            stage: 'complete',
            message: 'PDF generated successfully!'
        });

        return {
            success: true,
            pdfBlob,
            filename,
            size: pdfBlob.size
        };
    } catch (error) {
        console.error('PDF conversion error:', error);
        return {
            success: false,
            filename: '',
            size: 0,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};

export const downloadPDF = (pdfBlob: Blob, filename: string): void => {
    saveAs(pdfBlob, filename);
};

export const getConversionHistory = async (): Promise<ConversionHistory> => {
    if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockConversionHistory;
    }

    // In a real app, this would make an API call
    return mockConversionHistory;
};
