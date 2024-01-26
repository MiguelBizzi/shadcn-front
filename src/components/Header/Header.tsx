"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Svgs/Logo";
import { SearchButton } from "./SearchButton";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./Svgs/GithubIcon";
import { BarChart, Moon, Sun } from "lucide-react";
import { TwitterIcon } from "./Svgs/TwitterIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SideBar } from "./Sidebar";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideBar, setIsSideBarOpen] = useState(false);

  const { setTheme, theme } = useTheme();

  function handleThemeIcon() {
    let temp_theme = "";

    if (theme === "dark") {
      temp_theme = "dark";
    } else if (theme === "light") {
      temp_theme = "light";
    } else {
      const isDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isDarkMode) {
        temp_theme = "dark";
      } else {
        temp_theme = "light";
      }
    }

    return temp_theme === "dark" ? (
      <Sun className="h-4 w-4" />
    ) : (
      <Moon className="h-4 w-4" />
    );
  }
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((isSearchOpen) => !isSearchOpen);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <header className="max-w-screen-2xl w-full py-2 px-6 mx-auto">
        <div className="flex items-center justify-between gap-4">
          <button
            className="block sm:hidden"
            onClick={() => setIsSideBarOpen(true)}
          >
            <BarChart className="rotate-90" />
          </button>

          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-bold">shadcn/ui</span>
            </div>

            <span className="text-sm transition-colors hover:text-foreground/80 text-foreground/60">
              Docs
            </span>
            <span className="text-sm transition-colors hover:text-foreground/80 text-foreground/60">
              Components
            </span>
            <span className="text-sm transition-colors hover:text-foreground/80 text-foreground/60">
              Themes
            </span>
            <span className="text-sm text-foreground/80">Examples</span>
            <span className="text-sm transition-colors hover:text-foreground/80 text-foreground/60 hidden lg:block">
              Github
            </span>
          </div>

          <div className="flex items-center gap-2 flex-1 sm:flex-auto">
            <Button
              variant={"outline"}
              className={cn(
                "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
              )}
            >
              <span className="hidden lg:inline-flex">
                Search documentation...
              </span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            <div className="flex items-center">
              <Button variant={"ghost"} size={"sm"}>
                <GithubIcon />
              </Button>

              <Button variant={"ghost"} size={"sm"}>
                <div>
                  <TwitterIcon />
                </div>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant={"ghost"} size={"sm"}>
                    {handleThemeIcon()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <SearchButton open={isSearchOpen} setOpen={setIsSearchOpen} />
      </header>
      <SideBar open={isSideBar} setOpen={setIsSideBarOpen} />
    </>
  );
}
