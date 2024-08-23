import { Separator } from "@/shadcn/ui/Separator";
import { SidebarNav } from "@/components/Settings/SidebarNav";
import { useSettings } from "@/context/SettingsContext";
import Display from "@/components/Settings/Display";
import General from "@/components/Settings/General";
import { DialogTitle } from "@/shadcn/ui/Dialog";

const sidebarNavItems = [
  {
    title: "General",
    href: "general"
  },
  {
    title: "Display",
    href: "display"
  }
];

interface SettingsLayoutProps {}

export default function Settings({}: SettingsLayoutProps) {
  const { pathname, setPathname } = useSettings();

  const renderSettingsContent = () => {
    if (pathname === "display") {
      return <Display />;
    }
    return <General />;
  };

  return (
    <div className="pb-16">
      <DialogTitle>Settings</DialogTitle>
      <Separator className="my-4" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav
            items={sidebarNavItems}
            pathname={pathname}
            setPathname={setPathname}
          />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{renderSettingsContent()}</div>
      </div>
    </div>
  );
}
