import { Outlet, useLocation } from 'react-router';
import Sidebar from '../components/sidebar';
import { BottomNav } from '../components/bottom-nav';
import { ScrollArea } from '../components/ui/scroll-area';
import MiniPlayer from '../components/mini-player';
import { useEffect, useRef } from 'react';

const DashboardLayout = () => {
    const { pathname } = useLocation();
    const scrollAreaRef = useRef<any>(null);

    useEffect(() => {
        scrollAreaRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <div className="h-dvh overflow-hidden flex flex-col md:flex-row">
            <Sidebar />
            <main className="flex-1 relative max-md:h-[calc(100dvh-4rem)]">
                <ScrollArea ref={scrollAreaRef} className="h-full ">
                    <div className="max-w-6xl mx-auto p-2.5 md:p-5 !pb-28">
                        <Outlet />
                    </div>
                </ScrollArea>
                <MiniPlayer />
            </main>
            <BottomNav />
        </div>
    );
};

export default DashboardLayout;
