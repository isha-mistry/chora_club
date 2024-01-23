import Sidebar from "@/components/Sidebar/Sidebar";
// import { NextUIProvider } from "@nextui-org/react";

export default function DaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="grid grid-cols-12">
        <div className="col-span-1 bg-blue-shade-100 h-screen mr-8">
          {/* <NextUIProvider> */}
            <Sidebar />
          {/* </NextUIProvider> */}
        </div>
        <div className="col-span-11 p-6">{children}</div>
      </div>
    </main>
  );
}
