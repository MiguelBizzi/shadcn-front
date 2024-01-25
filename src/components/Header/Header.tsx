"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Svgs/Logo";
import { SearchButton } from "./SearchButton";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./Svgs/GithubIcon";
import { Moon } from "lucide-react";
import { TwitterIcon } from "./Svgs/TwitterIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="max-w-screen-2xl w-full py-4 px-8 mx-auto">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-lg">shadcn/ui</span>
          </div>

          <span>Docs</span>
          <span>Components</span>
          <span>Themes</span>
          <span>Examples</span>
          <span>Github</span>
        </div>

        <div className="flex items-center gap-2">
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

            <Button variant={"ghost"} size={"sm"}>
              <Moon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <SearchButton open={open} setOpen={setOpen} />
    </header>
  );
}
