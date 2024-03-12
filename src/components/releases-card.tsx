import { Suspense } from "react";
import { ReleasesTable } from "./releases-table";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Spinner } from "./ui/spinner";
import { Separator } from "./ui/separator";

export function ReleasesCard() {
  return (
    <Card>
      <CardHeader>
        <strong className="w-auto flex flex-row justify-center">
          Latest Release Download
        </strong>
        <Separator className="w-auto border"/>
      </CardHeader>
      <CardContent>
      <div className="p-2 w-min-screen h-auto flex flex-col justify-center items-center">
        <Suspense fallback={<Spinner w={"8"} h={"8"} color="zinc" />}>
          <ReleasesTable />
        </Suspense>
      </div>
      </CardContent>
    </Card>
  );
}
