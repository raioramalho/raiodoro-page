import { Suspense } from "react";
import { ReleasesTable } from "./releases-table";
import { Card } from "./ui/card";
import { Spinner } from "./ui/spinner";

export function ReleasesCard() {
  return (
    <Card>
      <div className="m-2 p-2 w-min-screen flex flex-col justify-center items-center">
        <Suspense fallback={<Spinner w={"8"} h={"8"} color="zinc" />}>
          <ReleasesTable />
        </Suspense>
      </div>
    </Card>
  );
}
