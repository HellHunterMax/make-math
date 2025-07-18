"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bars3Icon, HomeIcon, CalculatorIcon, TrophyIcon } from "@heroicons/react/24/outline";

const menuItems = [
  { title: "Home", url: "/", icon: HomeIcon },
  { title: "Sommen Maken", url: "/exercises", icon: CalculatorIcon },
  { title: "Wedstrijd", url: "/contest", icon: TrophyIcon },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden fixed left-4 top-4 z-50" size="icon">
            <Bars3Icon className="h-6 w-6" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-4">
          <div className="flex flex-col gap-4 mt-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.url}>
                  <Button variant={pathname === item.url ? "default" : "ghost"} className="w-full justify-start gap-2">
                    <Icon className="h-5 w-5" />
                    {item.title}
                  </Button>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <nav className={cn("hidden md:flex flex-col gap-4 fixed left-0 top-0 z-30 h-full w-60 bg-slate-50 p-4 shadow-sm", className)}>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link key={index} href={item.url}>
              <Button variant={pathname === item.url ? "default" : "ghost"} className="w-full justify-start gap-2">
                <Icon className="h-5 w-5" />
                {item.title}
              </Button>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
