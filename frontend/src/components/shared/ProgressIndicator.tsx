import { CheckCircle, Circle, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';
import { cn } from '../../lib/utils';
import type { ConversionProgress } from '../../types/pdf';

interface ProgressIndicatorProps {
    progress: ConversionProgress;
    className?: string;
}

const stageLabels = {
    preparing: 'Preparing PDF document',
    processing: 'Processing images',
    generating: 'Generating PDF file',
    complete: 'PDF generated successfully'
};

export const ProgressIndicator = ({ progress, className }: ProgressIndicatorProps) => {
    const progressPercentage = (progress.current / progress.total) * 100;
    const stages = Object.keys(stageLabels) as Array<keyof typeof stageLabels>;

    return (
        <Card className={cn('w-full', className)}>
            <CardContent className='p-6'>
                <div className='space-y-4'>
                    {/* Progress Bar */}
                    <div className='space-y-2'>
                        <div className='flex items-center justify-between text-sm'>
                            <span className='font-medium'>{progress.message}</span>
                            <span className='text-muted-foreground'>
                                {progress.current}/{progress.total}
                            </span>
                        </div>
                        <Progress
                            value={progressPercentage}
                            className='w-full'
                        />
                    </div>

                    {/* Stage Indicators */}
                    <div className='space-y-3'>
                        {stages.map((stage, index) => {
                            const isActive = progress.stage === stage;
                            const isComplete = stages.indexOf(progress.stage) > index;
                            const isPending = stages.indexOf(progress.stage) < index;

                            return (
                                <div
                                    key={stage}
                                    className={cn(
                                        'flex items-center gap-3 p-3 rounded-lg transition-colors',
                                        isActive && 'bg-primary/10 border border-primary/20',
                                        isComplete && 'bg-muted/50',
                                        isPending && 'opacity-50'
                                    )}
                                >
                                    <div className='flex-shrink-0'>
                                        {isComplete ? (
                                            <CheckCircle className='h-5 w-5 text-green-600' />
                                        ) : isActive ? (
                                            <Loader2 className='h-5 w-5 text-primary animate-spin' />
                                        ) : (
                                            <Circle className='h-5 w-5 text-muted-foreground' />
                                        )}
                                    </div>

                                    <div className='flex-1'>
                                        <p
                                            className={cn(
                                                'text-sm font-medium',
                                                isActive && 'text-primary',
                                                isComplete && 'text-muted-foreground',
                                                isPending && 'text-muted-foreground'
                                            )}
                                        >
                                            {stageLabels[stage]}
                                        </p>
                                    </div>

                                    <div className='flex-shrink-0 text-xs text-muted-foreground'>Step {index + 1}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
