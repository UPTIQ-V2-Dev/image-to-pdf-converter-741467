import { useState, useCallback } from 'react';
import type { UploadedImage } from '../types/image';
import type { PdfSettings, ConversionProgress, ConversionResult } from '../types/pdf';
import type { ConversionStatus } from '../types/conversion';
import { convertImagesToPDF, downloadPDF } from '../services/pdfService';

interface UsePdfConversionReturn {
    isConverting: boolean;
    progress: ConversionProgress | null;
    status: ConversionStatus;
    error: string | null;
    result: ConversionResult | null;
    convertToPDF: (images: UploadedImage[], settings: PdfSettings) => Promise<void>;
    downloadResult: () => void;
    reset: () => void;
}

export const usePdfConversion = (): UsePdfConversionReturn => {
    const [isConverting, setIsConverting] = useState(false);
    const [progress, setProgress] = useState<ConversionProgress | null>(null);
    const [status, setStatus] = useState<ConversionStatus>('idle');
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<ConversionResult | null>(null);

    const convertToPDF = useCallback(async (images: UploadedImage[], settings: PdfSettings) => {
        if (images.length === 0) {
            setError('No images selected for conversion');
            return;
        }

        setIsConverting(true);
        setStatus('preparing');
        setError(null);
        setResult(null);
        setProgress(null);

        try {
            const conversionResult = await convertImagesToPDF(images, settings, progressUpdate => {
                setProgress(progressUpdate);
                setStatus(progressUpdate.stage === 'complete' ? 'complete' : 'processing');
            });

            if (conversionResult.success) {
                setResult(conversionResult);
                setStatus('complete');
            } else {
                setError(conversionResult.error || 'Conversion failed');
                setStatus('error');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Conversion failed');
            setStatus('error');
        } finally {
            setIsConverting(false);
        }
    }, []);

    const downloadResult = useCallback(() => {
        if (result?.pdfBlob) {
            downloadPDF(result.pdfBlob, result.filename);
        }
    }, [result]);

    const reset = useCallback(() => {
        setIsConverting(false);
        setProgress(null);
        setStatus('idle');
        setError(null);
        setResult(null);
    }, []);

    return {
        isConverting,
        progress,
        status,
        error,
        result,
        convertToPDF,
        downloadResult,
        reset
    };
};
