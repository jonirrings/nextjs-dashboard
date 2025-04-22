import SideNav from "@/app/ui/dashboard/sidenav";
import {LayoutProps} from "@/app/lib/definitions";

export const experimental_ppr = true;

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {props.children}
      </div>
    </div>
  );
}
