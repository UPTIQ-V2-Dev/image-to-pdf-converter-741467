import { X, GripVertical, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import type { UploadedImage } from '../../types/image';

interface ImagePreviewProps {
    images: UploadedImage[];
    onRemove: (imageId: string) => void;
    onReorder?: (startIndex: number, endIndex: number) => void;
    showReorder?: boolean;
}

const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const ImagePreview = ({ images, onRemove, onReorder, showReorder = true }: ImagePreviewProps) => {
    if (images.length === 0) {
        return null;
    }

    return (
        <div className='space-y-4'>
            <div className='flex items-center justify-between'>
                <h3 className='text-lg font-medium'>Selected Images ({images.length})</h3>
                <Badge
                    variant='secondary'
                    className='text-xs'
                >
                    Total Size: {formatFileSize(images.reduce((sum, img) => sum + img.size, 0))}
                </Badge>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {images.map((image, index) => (
                    <Card
                        key={image.id}
                        className='group relative'
                    >
                        <CardContent className='p-4'>
                            <div className='relative'>
                                {/* Image Preview */}
                                <div className='aspect-square rounded-lg overflow-hidden bg-muted'>
                                    <img
                                        src={image.preview}
                                        alt={image.name}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                {/* Overlay Controls */}
                                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2'>
                                    <Button
                                        size='sm'
                                        variant='secondary'
                                        className='h-8 w-8 p-0'
                                        onClick={() => window.open(image.url, '_blank')}
                                    >
                                        <Eye className='h-4 w-4' />
                                    </Button>
                                    <Button
                                        size='sm'
                                        variant='destructive'
                                        className='h-8 w-8 p-0'
                                        onClick={() => onRemove(image.id)}
                                    >
                                        <X className='h-4 w-4' />
                                    </Button>
                                </div>

                                {/* Reorder Handle */}
                                {showReorder && onReorder && (
                                    <div className='absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                        <div className='bg-background/80 rounded p-1 cursor-move'>
                                            <GripVertical className='h-4 w-4' />
                                        </div>
                                    </div>
                                )}

                                {/* Image Index */}
                                <div className='absolute top-2 right-2 bg-primary text-primary-foreground text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium'>
                                    {index + 1}
                                </div>
                            </div>

                            {/* Image Info */}
                            <div className='mt-3 space-y-1'>
                                <p
                                    className='text-sm font-medium truncate'
                                    title={image.name}
                                >
                                    {image.name}
                                </p>
                                <div className='flex items-center justify-between text-xs text-muted-foreground'>
                                    <span>{formatFileSize(image.size)}</span>
                                    {image.width && image.height && (
                                        <span>
                                            {image.width} × {image.height}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
