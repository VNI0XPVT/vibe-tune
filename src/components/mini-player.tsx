import { Play } from 'lucide-react';
import songs from '../data/songs';
import { Card } from './ui/card';

type Props = {};

const MiniPlayer = (props: Props) => {
    const song = songs[0];

    return (
        <div className="absolute -bottom-0 w-full z-10 p-2 ">
            <Card className="p-1.5 max-w-[calc(72rem-4rem)] overflow-hidden mx-auto  rounded-md md:rounded-lg relative grid grid-cols-[3rem_1fr_2rem] items-center gap-3 shadow-lg bg-card/75 backdrop-blur-md">
                <img src={song.image} alt="" className="rounded-lg border " />

                <div className="flex flex-col justify-evenly h-full">
                    <h4 className="md:text-lg">{song.name}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1 text-ellipsis">
                        {song.album.name} - {song.artists[0].name}
                    </p>
                </div>

                <Play className="size-6" />

                <div
                    className="absolute left-0 bottom-0 h-0.5 bg-primary"
                    style={{ width: `${(100 / 300) * 100}%` }}
                ></div>
            </Card>
        </div>
    );
};

export default MiniPlayer;
