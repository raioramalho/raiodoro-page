/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Spinner } from "./ui/spinner";
import { ApiService } from "@/services/api.service";

export function Logo() {
  const api = new ApiService();
  const [version, setVersion] = useState<any>(<Spinner w="4" h="4" color="green"/>);

  async function getVersion() {
    setVersion(await api.getCurrentRelease());
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
