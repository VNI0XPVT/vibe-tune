import { Link, useLocation } from 'react-router';
import { cn } from '../lib/utils';
import NavLinks from '../config/nav-link';

type Props = {};

const Sidebar = (props: Props) => {
    const { pathname } = useLocation();
    return (
        <div className="w-72 max-md:hidden h-screen bg-card p-4">
            <h2 className="font-semibold text-center">
                <span className="text-gradient text-2xl">Music Player</span>
            </h2>

            <div className="flex flex-col gap-3 mt-10">
                {NavLinks.map(link => (
                    <Link
                        to={link.href}
                        key={link.name}
                        className={cn(
                            'flex py-2 px-5 rounded-full items-center gap-2 text-muted-foreground transition ',
                            'hover:bg-muted/50 ',
                            pathname.startsWith(link.href) && 'text-primary bg-muted hover:bg-muted'
                        )}
                    >
                        <link.icons className="size-4" />
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
