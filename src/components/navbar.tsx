import { ModeToggle } from "./ui-theme/toggle";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="dark:bg-zinc-950 border dark:border-zinc-850">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 ">
              <strong className="text-2xl">RAIO⚡️DORO</strong>
              <p className="text-xs flex flex-col justify-end italic dark:text-green-700">
                v0.1.3
              </p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Button>Home</Button>
                <Button>Download</Button>
                <Button>About</Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
