import { Card, CardContent, CardHeader } from '../components/ui/card';
import songs from '../data/songs';
import { HeartIcon, PlayIcon, RepeatIcon, ShuffleIcon, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';

type Props = {};

const Player = (props: Props) => {
    const song = songs[0];
    return (
        <div className="">
            <Card className="w-full max-w-md overflow-hidden mx-auto pb-5 mt-[8vh] md:mt-[10vh]">
                <CardHeader className=" ">
                    <div className="h-64">
                        <img
                            className="w-full h-full border rounded-lg shadow-lg shadow-background/80 "
                            src={song.image}
                        />
                    </div>
                </CardHeader>

                <CardContent className="p-6 py-0">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold">{song.name}</h3>
                            <p className="text-sm text-muted-foreground">{song.album.name}</p>
                        </div>

                        <HeartIcon className="size-6" />
                    </div>

                    <div className="mt-5">
                        <Slider defaultValue={[120]} max={300} step={1} />

                        <div className="flex text-xs md:text-sm justify-between items-center mt-1.5 md:mt-2 text-muted-foreground">
                            <span>02:39</span>
                            <span>04:24</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 gap-6">
                        <ShuffleIcon className="size-4 text-muted-foreground" />
                        <div className="flex items-center justify-center gap-8">
                            <Button size={'icon'} variant={'ghost'}>
                                <SkipBack className="size-5" />
                            </Button>

                            <Button size={'icon'} variant={'default'} className="rounded-full p-5">
                                <PlayIcon className="md:size-6 " />
                            </Button>

                            <Button size={'icon'} variant={'ghost'}>
                                <SkipForward className="size-5" />
                            </Button>
                        </div>
                        <RepeatIcon className="size-4 text-muted-foreground" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Player;
