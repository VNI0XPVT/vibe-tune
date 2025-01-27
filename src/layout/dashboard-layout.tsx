import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar';
import { BottomNav } from '../components/bottom-nav';
import { ScrollArea } from '../components/ui/scroll-area';
import MiniPlayer from '../components/mini-player';

const DashboardLayout = () => {
    return (
        <div className="h-dvh overflow-hidden flex flex-col md:flex-row">
            <Sidebar />
            <main className="flex-1 relative max-md:h-[calc(100dvh-4rem)]">
                <ScrollArea className="h-full ">
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
