import { Logo } from "./logo";
import { ModeToggle } from "./ui-theme/toggle";
export function Navbar() {
  return (
    <nav className="w-full p-4 flex flex-row justify-between border rounded-md">
      <Logo />
      <ModeToggle />
    </nav>
  );
}
