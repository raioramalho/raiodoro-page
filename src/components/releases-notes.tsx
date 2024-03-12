import { Separator } from "@radix-ui/react-menu";
import { Card, CardHeader, CardContent } from "./ui/card";

export function ReleaseNotes() {
    return (
        <Card>
          <CardHeader>
            <strong className="w-[500px] flex flex-row justify-center">
              Release notes
            </strong>
            <Separator className="w-auto border" />
          </CardHeader>
          <CardContent>
            <div className="p-2 w-min-screen h-auto flex flex-col justify-center items-center">
              content
            </div>
          </CardContent>
        </Card>
    )
}