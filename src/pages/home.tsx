import { ScrollArea } from '../components/ui/scroll-area';

type Props = {};

const Home = (props: Props) => {
    return (
        <div className="space-y-6 ">
            {/* <h2 className="text-3xl font-bold text-foreground/90">
                Good Afternoon <span className="text-gradient">User</span>
            </h2> */}

            <div className=" bg-gradient-to-b rounded-md py-6 from-neutral-800/60 to-card w-full relative box-border ">
                <h3 className="pl-5 text-xl  font-bold text-foreground/90 ">Populare Artists</h3>

                <div className="whitespace-nowrap overflow-auto w-full space-x-4 p-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div className="p-1.5 inline-block">
                            <img
                                className="size-32 block rounded-full shadow-lg  shadow-black/50"
                                src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                            />

                            <h4 className="mt-2.5 font-medium">Pritam</h4>
                            <p className="text-sm text-muted-foreground">Artist</p>
                        </div>
                    ))}
                </div>

                <h3 className="pl-5 text-xl  mt-5 font-bold text-foreground/90 ">Populare Albums</h3>

                <div className="whitespace-nowrap overflow-auto w-full space-x-4 p-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div className="p-1.5 inline-block">
                            <img
                                className="size-32 block rounded-md shadow-lg  shadow-black/50"
                                src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                            />

                            <h4 className="mt-2.5 font-medium">Pritam</h4>
                            <p className="text-sm text-muted-foreground">Artist</p>
                        </div>
                    ))}
                </div>

                {/* <h3 className="text-xl mb-5 font-bold text-foreground/90 ">Populare Artists</h3>

                <div className="overflow-hidden w-full">
                    <div className="overflow-x-auto space-x-5 whitespace-nowrap gap-8">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div className="inline-flex flex-col p-1.5">
                                <img
                                    className="size-32 block rounded-full shadow-lg  shadow-black/50"
                                    src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                                />

                                <h4 className="mt-2.5 font-medium">Pritam</h4>
                                <p className="text-sm text-muted-foreground">Artist</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* 

                <h3 className="text-xl mt-10 mb-5 font-bold text-foreground/90 ">Populare Artists</h3>

                <div className="overflow-x-auto  space-x-5  whitespace-nowrap w-full gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div className="inline-flex flex-col p-1.5">
                            <img
                                className="size-32 block rounded-md shadow-lg  shadow-black/50"
                                src="https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca"
                            />

                            <h4 className="mt-2.5 font-medium">Pritam</h4>
                            <p className="text-sm text-muted-foreground">Artist</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default Home;
