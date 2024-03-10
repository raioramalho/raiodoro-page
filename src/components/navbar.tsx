import { Logo } from "./logo";
import { ModeToggle } from "./ui-theme/toggle";
export function Navbar() {
  return (
    <nav className="w-min-screen border rounded-md">
      <div className="p-2 flex flex-row justify-between">
        <Logo />
        <ModeToggle />
      </div>
    </nav>
  );
}
