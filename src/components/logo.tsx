/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Releases } from "@/types/release.type";
import { useState, useEffect } from "react";
import { Spinner } from "./ui/spinner";

export function Logo() {
  const [version, setVersion] = useState<any>(<Spinner w="3" h="3" />);

  async function getVersion() {
    let request = await fetch(
      "https://api.github.com/repos/raioramalho/raiodoro/releases"
    );
    let response: Releases = await request.json();
    if (request.ok) {
      let currentVersion = response[0].tag_name;
      setVersion(currentVersion);
      return currentVersion;
    } else {
      return;
    }
  }

  useEffect(() => {
    getVersion();
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <strong className="text-2xl">RAIO⚡️DORO</strong>
      <span className="text-xs flex flex-col justify-end italic text-green-900 dark:text-green-200 font-bold">
        {version}
      </span>
    </div>
  );
}
