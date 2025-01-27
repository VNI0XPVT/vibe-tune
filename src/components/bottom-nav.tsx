import { Link, useLocation } from 'react-router';
import NavLinks from '../config/nav-link';
import { cn } from '../lib/utils';

export function BottomNav() {
    const { pathname } = useLocation();

    return (
        <nav className="md:hidden  bg-card">
            <div className="flex justify-around py-3">
                {NavLinks.map(link => (
                    <Link
                        to={link.href}
                        key={link.name}
                        className={cn(
                            'flex flex-col items-center text-muted-foreground',
                            pathname === link.href && 'text-primary'
                        )}
                    >
                        <link.icons className="size-5" />

                        <span className="text-xs mt-1 font-semibold">{link.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}
