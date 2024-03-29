/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Asset } from "@/types/release.type";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DownloadCloudIcon } from "lucide-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { ApiService } from "@/services/api.service";

export function ReleasesTable() {
  const api = new ApiService();
  const [releases, setReleases] = useState<any[]>([]);

  async function getReleases() {
    let data = await api.getReleases();
    setReleases(data);
  }

  useEffect(() => {
    getReleases();
  }, []);

  return (
    <Table>
      <TableCaption>The published releases</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Version</TableHead>
          <TableHead className="">Author</TableHead>
          <TableHead className="">Download</TableHead>
          <TableHead className="">Published</TableHead>
        </TableRow>
      </TableHeader>
      {releases.map((release) => (
        <TableBody key={release.id}>
          <TableCell className="font-medium">
            <span className="border p-1 rounded text-green-900 dark:text-green-200">
              {release.tag_name}
            </span>
          </TableCell>
          <TableCell className="flex flex-row gap-2">
            {/* <img className="w-5 h-5 rounded-sm flex flex-row justify-center" src={release.author.avatar_url}/>         */}
            Alan Ramalho
          </TableCell>
          <TableCell className="">
            <DropdownMenu>
              <DropdownMenuTrigger className="justify-center">
                <span className="font-medium flex flex-row items-center gap-1 text-green-900 dark:text-green-200">
                  <DownloadCloudIcon className="w-4 h-4" />
                  download
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col gap-1">
                {/* <Card className="p-2 m-2 flex flex-col justify-center items-center rounded-sm "> */}
                {release.assets.map((asset: Asset) => (
                  <Button key={asset.id}>{asset.name}</Button>
                ))}
                {/* </Card> */}
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
          <TableCell className="">{release.published_at}</TableCell>
        </TableBody>
      ))}
    </Table>
  );
}
