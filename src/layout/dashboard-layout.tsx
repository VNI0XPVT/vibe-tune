import Sidebar from "../components/sidebar";

type Props = {};

const DashboardLayout = (props: Props) => {
  return (
    <div className="h-screen w-screen grid grid-cols-[16rem_1fr]">
      <Sidebar />
      <main className="overscroll-y-auto p-4 md:p-8"></main>
    </div>
  );
};

export default DashboardLayout;
