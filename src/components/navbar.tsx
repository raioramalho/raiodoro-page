/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import { ModeToggle } from "./ui-theme/toggle";
import { Spinner } from "./ui/spinner";
import { Releases } from "@/types/release.type";

export function Navbar() {
  const [version, setVersion] = useState<any>(<Spinner w="3" h="3"/>);

  async function getVersion() {
    let request = await fetch("https://api.github.com/repos/raioramalho/raiodoro/releases");
    let response: Releases = await request.json();
    if(request.ok) {
      let currentVersion = response[0].tag_name;
      setVersion(currentVersion);
      return currentVersion;
    }else {
      return;
    }
  }
  
  useEffect(() => {
    getVersion();
  },[])


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
              <span className="text-xs flex flex-col justify-end italic text-green-900 dark:text-green-200 font-bold">
                {version}
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* buttons */}
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
