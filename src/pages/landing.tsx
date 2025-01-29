import { Music4, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';

type Props = {};

const LandingPage = (props: Props) => {
    return (
        <div className="min-h-screen text-center flex items-center justify-center p-4">
            <div className="max-w-lg">
                <div className="flex items-center justify-center p-3 mx-auto rounded-md gradient w-fit">
                    <Music4 className="size-10" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-4">
                    <span className="text-gradient">Music Player</span>
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati magnam Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Modi,
                </p>

                <Link
                    to={'/home'}
                    className="gradient inline-block text-white mt-20 py-2 px-10 rounded-full font-semibold"
                >
                    <Rocket className="size-5 inline mr-2" /> Get Started!
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
