import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="max-w-screen-2xl w-full py-4 px-8 border-b">
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
    </header>
  );
}
