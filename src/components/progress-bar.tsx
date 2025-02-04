import { memo } from 'react';
import { Slider } from './ui/slider';
import { formatDuration } from '@/lib/utils';

interface Props {
    curretProgress: number;
    totalDuration: number;
    handleSeek: (value: number) => void;
}

const ProgressBar = ({ curretProgress, handleSeek, totalDuration }: Props) => {
    return (
        <div>
            <Slider
                value={[curretProgress]}
                max={totalDuration}
                step={1}
                onValueChange={value => handleSeek(value[0])}
            />

            <div className="flex text-xs md:text-sm justify-between items-center mt-1.5 md:mt-2 text-muted-foreground">
                <span className="font-['Open_Sans']">{formatDuration(curretProgress)}</span>
                <span className="font-['Open_Sans']">{formatDuration(totalDuration)}</span>
            </div>
        </div>
    );
};

export default memo(ProgressBar);
