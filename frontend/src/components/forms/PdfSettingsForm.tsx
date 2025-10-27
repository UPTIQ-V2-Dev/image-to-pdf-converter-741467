import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import type { PdfSettings, PdfPageSize, PdfOrientation, PdfQuality } from '../../types/pdf';

interface PdfSettingsFormProps {
    settings: PdfSettings;
    onChange: (settings: PdfSettings) => void;
    className?: string;
}

const pageSizeOptions: { value: PdfPageSize; label: string; dimensions?: string }[] = [
    { value: 'a4', label: 'A4', dimensions: '210 × 297 mm' },
    { value: 'a3', label: 'A3', dimensions: '297 × 420 mm' },
    { value: 'a5', label: 'A5', dimensions: '148 × 210 mm' },
    { value: 'letter', label: 'Letter', dimensions: '8.5 × 11 in' },
    { value: 'legal', label: 'Legal', dimensions: '8.5 × 14 in' },
    { value: 'custom', label: 'Custom', dimensions: 'Set your own' }
];

const qualityOptions: { value: PdfQuality; label: string; description: string }[] = [
    { value: 'low', label: 'Low', description: 'Smaller file size' },
    { value: 'medium', label: 'Medium', description: 'Balanced quality' },
    { value: 'high', label: 'High', description: 'Best quality' }
];

export const PdfSettingsForm = ({ settings, onChange, className }: PdfSettingsFormProps) => {
    const [showAdvanced, setShowAdvanced] = useState(false);

    const handleSettingChange = <K extends keyof PdfSettings>(key: K, value: PdfSettings[K]) => {
        onChange({ ...settings, [key]: value });
    };

    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className='text-lg'>PDF Settings</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
                {/* Page Size */}
                <div className='space-y-2'>
                    <Label>Page Size</Label>
                    <Select
                        value={settings.pageSize}
                        onValueChange={(value: PdfPageSize) => handleSettingChange('pageSize', value)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {pageSizeOptions.map(option => (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    <div className='flex items-center justify-between w-full'>
                                        <span>{option.label}</span>
                                        {option.dimensions && (
                                            <Badge
                                                variant='secondary'
                                                className='ml-2 text-xs'
                                            >
                                                {option.dimensions}
                                            </Badge>
                                        )}
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Custom Size Inputs */}
                    {settings.pageSize === 'custom' && (
                        <div className='grid grid-cols-2 gap-3 mt-3'>
                            <div className='space-y-1'>
                                <Label className='text-xs'>Width (mm)</Label>
                                <Input
                                    type='number'
                                    placeholder='210'
                                    value={settings.customWidth || ''}
                                    onChange={e => handleSettingChange('customWidth', Number(e.target.value))}
                                />
                            </div>
                            <div className='space-y-1'>
                                <Label className='text-xs'>Height (mm)</Label>
                                <Input
                                    type='number'
                                    placeholder='297'
                                    value={settings.customHeight || ''}
                                    onChange={e => handleSettingChange('customHeight', Number(e.target.value))}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Orientation */}
                <div className='space-y-2'>
                    <Label>Orientation</Label>
                    <Select
                        value={settings.orientation}
                        onValueChange={(value: PdfOrientation) => handleSettingChange('orientation', value)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='portrait'>Portrait</SelectItem>
                            <SelectItem value='landscape'>Landscape</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Quality */}
                <div className='space-y-2'>
                    <Label>Image Quality</Label>
                    <Select
                        value={settings.quality}
                        onValueChange={(value: PdfQuality) => handleSettingChange('quality', value)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {qualityOptions.map(option => (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    <div className='flex flex-col'>
                                        <span>{option.label}</span>
                                        <span className='text-xs text-muted-foreground'>{option.description}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Basic Layout Options */}
                <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                        <div className='space-y-1'>
                            <Label>Fit Images to Page</Label>
                            <p className='text-xs text-muted-foreground'>
                                Automatically resize images to fit within page bounds
                            </p>
                        </div>
                        <Switch
                            checked={settings.fitToPage}
                            onCheckedChange={checked => handleSettingChange('fitToPage', checked)}
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='space-y-1'>
                            <Label>Maintain Aspect Ratio</Label>
                            <p className='text-xs text-muted-foreground'>Preserve original image proportions</p>
                        </div>
                        <Switch
                            checked={settings.maintainAspectRatio}
                            onCheckedChange={checked => handleSettingChange('maintainAspectRatio', checked)}
                        />
                    </div>
                </div>

                {/* Advanced Settings Toggle */}
                <div className='border-t pt-4'>
                    <button
                        type='button'
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className='text-sm text-primary hover:underline'
                    >
                        {showAdvanced ? 'Hide' : 'Show'} Advanced Settings
                    </button>
                </div>

                {/* Advanced Settings */}
                {showAdvanced && (
                    <div className='space-y-4 border-t pt-4'>
                        {/* Margin */}
                        <div className='space-y-3'>
                            <div className='flex items-center justify-between'>
                                <Label>Page Margin</Label>
                                <Badge variant='outline'>{settings.margin}mm</Badge>
                            </div>
                            <Slider
                                value={[settings.margin]}
                                onValueChange={value => handleSettingChange('margin', value[0])}
                                max={50}
                                min={0}
                                step={1}
                                className='w-full'
                            />
                            <div className='flex justify-between text-xs text-muted-foreground'>
                                <span>0mm</span>
                                <span>50mm</span>
                            </div>
                        </div>

                        {/* Images per Page */}
                        <div className='space-y-3'>
                            <div className='flex items-center justify-between'>
                                <Label>Images per Page</Label>
                                <Badge variant='outline'>{settings.imagesPerPage}</Badge>
                            </div>
                            <Slider
                                value={[settings.imagesPerPage]}
                                onValueChange={value => handleSettingChange('imagesPerPage', value[0])}
                                max={4}
                                min={1}
                                step={1}
                                className='w-full'
                            />
                            <div className='flex justify-between text-xs text-muted-foreground'>
                                <span>1 image</span>
                                <span>4 images</span>
                            </div>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};
