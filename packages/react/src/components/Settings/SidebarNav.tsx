import { cn } from "@/lib/utils";
import { Button } from "@/shadcn/ui/Button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
  pathname: string;
  setPathname: (pathname: string) => void;
}

export function SidebarNav({
  className,
  items,
  pathname,
  setPathname,
  ...props
}: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          key={item.href}
          onClick={() => setPathname(item.href)}
          variant="ghost"
          className={cn(
            pathname === item.href
              ? "bg-[#f4f4f5] hover:bg-[#f4f4f5]"
              : "hover:bg-transparent hover:underline",
            "justify-start text-sm"
          )}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}
