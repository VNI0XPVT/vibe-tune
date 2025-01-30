import { Link, useLocation } from 'react-router';
import { cn } from '../lib/utils';
import NavLinks from '../config/nav-link';

const Sidebar = () => {
    const { pathname } = useLocation();
    return (
        <div className="w-72 max-md:hidden h-screen bg-card border-r ">
            <div className="p-2 px-6 border-b">
                <h2 className="font-semibold text-center">
                    <span className="text-gradient text-xl">Music Player</span>
                </h2>
            </div>

            <div className="flex flex-col gap-3 mt-4 p-4">
                {NavLinks.map(link => (
                    <Link
                        to={link.href}
                        key={link.name}
                        viewTransition
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
