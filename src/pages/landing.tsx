import { Rocket } from "lucide-react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div className="min-h-screen text-center flex items-center justify-center p-4">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-5">
          <span className="text-gradient">Music Player</span>
        </h1>
        <p className="text-muted-foreground text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          obcaecati magnam Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Modi,
        </p>

        {/* <Button className="mt-20 gradient text-white">
          <Rocket className="size-4" /> Get Started!
        </Button> */}

        <button className="gradient text-white mt-20 py-2 px-10 rounded-full font-semibold">
          <Rocket className="size-5 inline mr-2" /> Get Started!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
