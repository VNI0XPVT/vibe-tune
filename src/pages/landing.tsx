import { Link } from 'react-router';
import { Github, Rocket } from 'lucide-react';
import { AnimatedGridPattern } from '../components/ui/animated-grid-pattern';
import { AnimatedGradientText } from '../components/ui/animated-gradient-text';
import { cn } from '../lib/utils';

const LandingPage = () => {
    return (
        <div className="min-h-dvh text-center flex items-center justify-center p-4 relative">
            <AnimatedGridPattern
                width={35}
                height={35}
                maxOpacity={0.2}
                className={'[mask-image:linear-gradient(to_top,#fff9,transparent)]'}
            />
            <div className="max-w-5xl z-20 md:-translate-y-6">
                {/* <div className="flex items-center justify-center p-3 mx-auto rounded-md gradient w-fit mb-6">
                    <Music4 className="size-10" />
                </div> */}

                {/* <div
                    className={
                        'group relative z-10 w-fit mx-auto rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-6'
                    }
                >
                    <a href="https://github.com/devXprite/Chat-World/" target="_blank">
                        <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400  text-sm">
                            <span>
                                <Github className="size-4 mr-1 inline" />
                                View Source on GitHub
                            </span>
                        </AnimatedShinyText>
                    </a>
                </div> */}

                <div className="z-10 flex items-center justify-center mb-8">
                    <AnimatedGradientText>
                        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{' '}
                        <span
                            className={cn(
                                `inline animate-gradient gradient bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                            )}
                        >
                            Introducing Melody
                        </span>
                        {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
                    </AnimatedGradientText>
                </div>

                {/* <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Discover and Enjoy <span className="text-gradient">Music</span>
                </h1>  */}
                <h1 className="text-3xl md:text-7xl font-bold mb-4">
                    <span className="text-gradient">Melody</span> Player
                </h1>

                <p className="text-muted-foreground max-w-2xl text-lg md:text-2xl">
                    Melody is the ultimate music player app that lets you stream, download, and discover new music with
                    ease.
                </p>

                <div className="flex gap-x-6 gap-y-4 flex-col md:flex-row max-w-lg mx-auto mt-20">
                    <Link
                        to={'/home'}
                        className="gradient inline-block text-white py-2.5 px-10 rounded-full font-semibold w-full"
                    >
                        <Rocket className="size-5 inline mr-2" /> Get Started!
                    </Link>

                    <Link
                        to={'/home'}
                        className="bg-muted inline-block text-white py-2.5 px-10 rounded-full font-semibold w-full text-foreground/75 border border-muted-foreground/25"
                    >
                        <Github className="size-5 inline mr-2" /> View On Github
                    </Link>
                </div>
            </div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground w-full text-center">
                Made by{' '}
                <a href="http://" target="_blank" className="underline">
                    @devxprite
                </a>
            </p>
        </div>
    );
};

export default LandingPage;
