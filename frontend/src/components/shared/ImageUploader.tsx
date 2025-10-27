import { Upload, Image as ImageIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ImageUploaderProps {
    onUpload: (files: File[]) => void;
    isUploading: boolean;
    error?: string | null;
    getRootProps: () => any;
    getInputProps: () => any;
    isDragActive: boolean;
}

export const ImageUploader = ({
    onUpload,
    isUploading,
    error,
    getRootProps,
    getInputProps,
    isDragActive
}: ImageUploaderProps) => {
    return (
        <div className='w-full'>
            <div
                {...getRootProps()}
                className={cn(
                    'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
                    'hover:border-primary/50 hover:bg-primary/5',
                    isDragActive && 'border-primary bg-primary/10',
                    isUploading && 'pointer-events-none opacity-50',
                    error && 'border-destructive/50 bg-destructive/5'
                )}
            >
                <input {...getInputProps()} />

                <div className='flex flex-col items-center justify-center space-y-4'>
                    {isUploading ? (
                        <>
                            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary'></div>
                            <p className='text-muted-foreground'>Uploading images...</p>
                        </>
                    ) : (
                        <>
                            {isDragActive ? (
                                <>
                                    <Upload className='h-12 w-12 text-primary' />
                                    <p className='text-primary font-medium'>Drop images here!</p>
                                </>
                            ) : (
                                <>
                                    <ImageIcon className='h-12 w-12 text-muted-foreground' />
                                    <div className='space-y-2'>
                                        <p className='text-lg font-medium'>
                                            Drag & drop images here, or{' '}
                                            <span className='text-primary hover:underline'>click to browse</span>
                                        </p>
                                        <p className='text-sm text-muted-foreground'>
                                            Supports JPEG, PNG, GIF, BMP, and WebP formats
                                        </p>
                                        <p className='text-xs text-muted-foreground'>
                                            Maximum file size: 10MB | Maximum files: 50
                                        </p>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {error && (
                <div className='mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg'>
                    <p className='text-sm text-destructive'>{error}</p>
                </div>
            )}
        </div>
    );
};
