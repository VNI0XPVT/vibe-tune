import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar';
import { BottomNav } from '../components/bottom-nav';
import { ScrollArea } from '../components/ui/scroll-area';

type Props = {};

const DashboardLayout = (props: Props) => {
    return (
        <div className="h-screen overflow-hidden flex">
            <Sidebar />
            <main className="flex-1">
                <ScrollArea className="h-full ">
                    <div className="max-w-6xl mx-auto p-4 md:p-8">
                        <Outlet />
                    </div>
                </ScrollArea>
            </main>
            <BottomNav />
        </div>
    );
};

// const DashboardLayout = (props: Props) => {
//     return (
//         <div className="h-screen overflow-hidden flex">
//             <Sidebar />
//             <ScrollArea className="flex-1 relative p-4 md:p-8 w-full overflow-y-auto">
//                 <div className="max-w-5xl mx-auto">
//                     <Outlet />
//                 </div>
//             </ScrollArea>
//             <BottomNav />
//         </div>
//     );
// };

export default DashboardLayout;
