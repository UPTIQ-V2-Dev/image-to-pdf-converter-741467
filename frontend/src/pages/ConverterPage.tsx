import { useState, useEffect } from 'react';
import { FileText, Download, RefreshCw, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { Alert, AlertDescription } from '../components/ui/alert';
import { ImageUploader } from '../components/shared/ImageUploader';
import { ImagePreview } from '../components/shared/ImagePreview';
import { PdfSettingsForm } from '../components/forms/PdfSettingsForm';
import { ProgressIndicator } from '../components/shared/ProgressIndicator';
import { useImageUpload } from '../hooks/useImageUpload';
import { usePdfConversion } from '../hooks/usePdfConversion';
import { defaultPdfSettings } from '../data/converterMockData';
import type { PdfSettings } from '../types/pdf';

export const ConverterPage = () => {
    const [pdfSettings, setPdfSettings] = useState<PdfSettings>(defaultPdfSettings);

    const {
        images,
        isUploading,
        error: uploadError,
        getRootProps,
        getInputProps,
        isDragActive,
        removeImage,
        clearImages,
        reorderImages
    } = useImageUpload();

    const {
        isConverting,
        progress,
        status,
        error: conversionError,
        result,
        convertToPDF,
        downloadResult,
        reset
    } = usePdfConversion();

    // Reset conversion state when images change
    useEffect(() => {
        if (status !== 'idle') {
            reset();
        }
    }, [images.length, status, reset]);

    const handleConvert = () => {
        if (images.length > 0) {
            convertToPDF(images, pdfSettings);
        }
    };

    const handleReset = () => {
        clearImages();
        reset();
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className='min-h-screen bg-background'>
            <div className='container mx-auto px-4 py-8 max-w-6xl'>
                {/* Header */}
                <div className='text-center mb-8'>
                    <div className='flex items-center justify-center mb-4'>
                        <FileText className='h-12 w-12 text-primary mr-3' />
                        <h1 className='text-4xl font-bold text-foreground'>Image to PDF Converter</h1>
                    </div>
                    <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                        Convert your images to PDF documents with customizable settings. Drag and drop multiple images,
                        configure your preferences, and download your PDF.
                    </p>
                </div>

                <div className='grid lg:grid-cols-3 gap-6'>
                    {/* Left Column - Upload & Preview */}
                    <div className='lg:col-span-2 space-y-6'>
                        {/* Image Uploader */}
                        {images.length === 0 && (
                            <ImageUploader
                                onUpload={() => {}} // handled by useDropzone
                                isUploading={isUploading}
                                error={uploadError}
                                getRootProps={getRootProps}
                                getInputProps={getInputProps}
                                isDragActive={isDragActive}
                            />
                        )}

                        {/* Image Preview */}
                        <ImagePreview
                            images={images}
                            onRemove={removeImage}
                            onReorder={reorderImages}
                            showReorder={true}
                        />

                        {/* Add More Images Button */}
                        {images.length > 0 && !isConverting && status !== 'complete' && (
                            <Card>
                                <CardContent className='p-4'>
                                    <div
                                        {...getRootProps()}
                                        className='border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors'
                                    >
                                        <input {...getInputProps()} />
                                        <p className='text-muted-foreground'>
                                            Drop more images here or{' '}
                                            <span className='text-primary hover:underline'>click to browse</span>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Progress Indicator */}
                        {(isConverting || progress) && <ProgressIndicator progress={progress!} />}

                        {/* Conversion Result */}
                        {status === 'complete' && result && (
                            <Card className='border-green-200 bg-green-50/50'>
                                <CardHeader>
                                    <CardTitle className='text-green-800 flex items-center gap-2'>
                                        <Download className='h-5 w-5' />
                                        PDF Ready for Download
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='space-y-4'>
                                        <div className='flex items-center justify-between p-3 bg-background rounded-lg'>
                                            <div>
                                                <p className='font-medium'>{result.filename}</p>
                                                <p className='text-sm text-muted-foreground'>
                                                    {formatFileSize(result.size)} • {images.length} image
                                                    {images.length !== 1 ? 's' : ''}
                                                </p>
                                            </div>
                                            <Button
                                                onClick={downloadResult}
                                                className='gap-2'
                                            >
                                                <Download className='h-4 w-4' />
                                                Download
                                            </Button>
                                        </div>
                                        <Button
                                            variant='outline'
                                            onClick={handleReset}
                                            className='w-full gap-2'
                                        >
                                            <RefreshCw className='h-4 w-4' />
                                            Convert More Images
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Error Display */}
                        {(uploadError || conversionError) && (
                            <Alert variant='destructive'>
                                <AlertDescription>{uploadError || conversionError}</AlertDescription>
                            </Alert>
                        )}
                    </div>

                    {/* Right Column - Settings & Actions */}
                    <div className='space-y-6'>
                        {/* PDF Settings */}
                        <PdfSettingsForm
                            settings={pdfSettings}
                            onChange={setPdfSettings}
                        />

                        {/* Action Buttons */}
                        {images.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className='text-lg'>Actions</CardTitle>
                                </CardHeader>
                                <CardContent className='space-y-3'>
                                    <Button
                                        onClick={handleConvert}
                                        disabled={isConverting || images.length === 0}
                                        className='w-full gap-2'
                                        size='lg'
                                    >
                                        {isConverting ? (
                                            <>
                                                <RefreshCw className='h-4 w-4 animate-spin' />
                                                Converting...
                                            </>
                                        ) : (
                                            <>
                                                <FileText className='h-4 w-4' />
                                                Convert to PDF
                                            </>
                                        )}
                                    </Button>

                                    <Separator />

                                    <Button
                                        variant='outline'
                                        onClick={clearImages}
                                        disabled={isConverting}
                                        className='w-full gap-2'
                                    >
                                        <Trash2 className='h-4 w-4' />
                                        Clear All Images
                                    </Button>
                                </CardContent>
                            </Card>
                        )}

                        {/* Conversion Summary */}
                        {images.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className='text-lg'>Summary</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='space-y-2 text-sm'>
                                        <div className='flex justify-between'>
                                            <span>Images:</span>
                                            <span className='font-medium'>{images.length}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span>Total Size:</span>
                                            <span className='font-medium'>
                                                {formatFileSize(images.reduce((sum, img) => sum + img.size, 0))}
                                            </span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span>Page Size:</span>
                                            <span className='font-medium capitalize'>
                                                {pdfSettings.pageSize === 'custom'
                                                    ? `${pdfSettings.customWidth || 210} × ${pdfSettings.customHeight || 297} mm`
                                                    : pdfSettings.pageSize}
                                            </span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span>Orientation:</span>
                                            <span className='font-medium capitalize'>{pdfSettings.orientation}</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span>Quality:</span>
                                            <span className='font-medium capitalize'>{pdfSettings.quality}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
