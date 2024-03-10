/* eslint-disable prefer-const */
import { Releases } from "@/types/release.type";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { DownloadCloudIcon } from "lucide-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

export function ReleasesCard() {

    // let temporary = [
    //   {
    //     "url": "https://api.github.com/repos/raioramalho/raiodoro/releases/145382615",
    //     "assets_url": "https://api.github.com/repos/raioramalho/raiodoro/releases/145382615/assets",
    //     "upload_url": "https://uploads.github.com/repos/raioramalho/raiodoro/releases/145382615/assets{?name,label}",
    //     "html_url": "https://github.com/raioramalho/raiodoro/releases/tag/v0.1.3",
    //     "id": 145382615,
    //     "author": {
    //       "login": "raioramalho",
    //       "id": 13089323,
    //       "node_id": "MDQ6VXNlcjEzMDg5MzIz",
    //       "avatar_url": "https://avatars.githubusercontent.com/u/13089323?v=4",
    //       "gravatar_id": "",
    //       "url": "https://api.github.com/users/raioramalho",
    //       "html_url": "https://github.com/raioramalho",
    //       "followers_url": "https://api.github.com/users/raioramalho/followers",
    //       "following_url": "https://api.github.com/users/raioramalho/following{/other_user}",
    //       "gists_url": "https://api.github.com/users/raioramalho/gists{/gist_id}",
    //       "starred_url": "https://api.github.com/users/raioramalho/starred{/owner}{/repo}",
    //       "subscriptions_url": "https://api.github.com/users/raioramalho/subscriptions",
    //       "organizations_url": "https://api.github.com/users/raioramalho/orgs",
    //       "repos_url": "https://api.github.com/users/raioramalho/repos",
    //       "events_url": "https://api.github.com/users/raioramalho/events{/privacy}",
    //       "received_events_url": "https://api.github.com/users/raioramalho/received_events",
    //       "type": "User",
    //       "site_admin": false
    //     },
    //     "node_id": "RE_kwDOLcMeZ84IqlzX",
    //     "tag_name": "v0.1.3",
    //     "target_commitish": "main",
    //     "name": "raiodoro_0.1.3",
    //     "draft": false,
    //     "prerelease": false,
    //     "created_at": "2024-03-07T23:55:34Z",
    //     "published_at": "2024-03-08T00:09:22Z",
    //     "assets": [
    //       {
    //         "url": "https://api.github.com/repos/raioramalho/raiodoro/releases/assets/155516822",
    //         "id": 155516822,
    //         "node_id": "RA_kwDOLcMeZ84JRP-W",
    //         "name": "raiodoro_0.1.3_x64-setup.exe",
    //         "label": null,
    //         "uploader": {
    //           "login": "raioramalho",
    //           "id": 13089323,
    //           "node_id": "MDQ6VXNlcjEzMDg5MzIz",
    //           "avatar_url": "https://avatars.githubusercontent.com/u/13089323?v=4",
    //           "gravatar_id": "",
    //           "url": "https://api.github.com/users/raioramalho",
    //           "html_url": "https://github.com/raioramalho",
    //           "followers_url": "https://api.github.com/users/raioramalho/followers",
    //           "following_url": "https://api.github.com/users/raioramalho/following{/other_user}",
    //           "gists_url": "https://api.github.com/users/raioramalho/gists{/gist_id}",
    //           "starred_url": "https://api.github.com/users/raioramalho/starred{/owner}{/repo}",
    //           "subscriptions_url": "https://api.github.com/users/raioramalho/subscriptions",
    //           "organizations_url": "https://api.github.com/users/raioramalho/orgs",
    //           "repos_url": "https://api.github.com/users/raioramalho/repos",
    //           "events_url": "https://api.github.com/users/raioramalho/events{/privacy}",
    //           "received_events_url": "https://api.github.com/users/raioramalho/received_events",
    //           "type": "User",
    //           "site_admin": false
    //         },
    //         "content_type": "application/x-msdownload",
    //         "state": "uploaded",
    //         "size": 3597301,
    //         "download_count": 1,
    //         "created_at": "2024-03-08T00:07:29Z",
    //         "updated_at": "2024-03-08T00:07:57Z",
    //         "browser_download_url": "https://github.com/raioramalho/raiodoro/releases/download/v0.1.3/raiodoro_0.1.3_x64-setup.exe"
    //       },
    //       {
    //         "url": "https://api.github.com/repos/raioramalho/raiodoro/releases/assets/155516893",
    //         "id": 155516893,
    //         "node_id": "RA_kwDOLcMeZ84JRP_d",
    //         "name": "raiodoro_0.1.3_x64.dmg",
    //         "label": null,
    //         "uploader": {
    //           "login": "raioramalho",
    //           "id": 13089323,
    //           "node_id": "MDQ6VXNlcjEzMDg5MzIz",
    //           "avatar_url": "https://avatars.githubusercontent.com/u/13089323?v=4",
    //           "gravatar_id": "",
    //           "url": "https://api.github.com/users/raioramalho",
    //           "html_url": "https://github.com/raioramalho",
    //           "followers_url": "https://api.github.com/users/raioramalho/followers",
    //           "following_url": "https://api.github.com/users/raioramalho/following{/other_user}",
    //           "gists_url": "https://api.github.com/users/raioramalho/gists{/gist_id}",
    //           "starred_url": "https://api.github.com/users/raioramalho/starred{/owner}{/repo}",
    //           "subscriptions_url": "https://api.github.com/users/raioramalho/subscriptions",
    //           "organizations_url": "https://api.github.com/users/raioramalho/orgs",
    //           "repos_url": "https://api.github.com/users/raioramalho/repos",
    //           "events_url": "https://api.github.com/users/raioramalho/events{/privacy}",
    //           "received_events_url": "https://api.github.com/users/raioramalho/received_events",
    //           "type": "User",
    //           "site_admin": false
    //         },
    //         "content_type": "application/x-apple-diskimage",
    //         "state": "uploaded",
    //         "size": 4152280,
    //         "download_count": 2,
    //         "created_at": "2024-03-08T00:07:57Z",
    //         "updated_at": "2024-03-08T00:09:08Z",
    //         "browser_download_url": "https://github.com/raioramalho/raiodoro/releases/download/v0.1.3/raiodoro_0.1.3_x64.dmg"
    //       },
    //       {
    //         "url": "https://api.github.com/repos/raioramalho/raiodoro/releases/assets/155516744",
    //         "id": 155516744,
    //         "node_id": "RA_kwDOLcMeZ84JRP9I",
    //         "name": "raiodoro_0.1.3_x64_en-US.msi",
    //         "label": null,
    //         "uploader": {
    //           "login": "raioramalho",
    //           "id": 13089323,
    //           "node_id": "MDQ6VXNlcjEzMDg5MzIz",
    //           "avatar_url": "https://avatars.githubusercontent.com/u/13089323?v=4",
    //           "gravatar_id": "",
    //           "url": "https://api.github.com/users/raioramalho",
    //           "html_url": "https://github.com/raioramalho",
    //           "followers_url": "https://api.github.com/users/raioramalho/followers",
    //           "following_url": "https://api.github.com/users/raioramalho/following{/other_user}",
    //           "gists_url": "https://api.github.com/users/raioramalho/gists{/gist_id}",
    //           "starred_url": "https://api.github.com/users/raioramalho/starred{/owner}{/repo}",
    //           "subscriptions_url": "https://api.github.com/users/raioramalho/subscriptions",
    //           "organizations_url": "https://api.github.com/users/raioramalho/orgs",
    //           "repos_url": "https://api.github.com/users/raioramalho/repos",
    //           "events_url": "https://api.github.com/users/raioramalho/events{/privacy}",
    //           "received_events_url": "https://api.github.com/users/raioramalho/received_events",
    //           "type": "User",
    //           "site_admin": false
    //         },
    //         "content_type": "application/octet-stream",
    //         "state": "uploaded",
    //         "size": 4214784,
    //         "download_count": 0,
    //         "created_at": "2024-03-08T00:06:39Z",
    //         "updated_at": "2024-03-08T00:07:29Z",
    //         "browser_download_url": "https://github.com/raioramalho/raiodoro/releases/download/v0.1.3/raiodoro_0.1.3_x64_en-US.msi"
    //       }
    //     ],
    //     "tarball_url": "https://api.github.com/repos/raioramalho/raiodoro/tarball/v0.1.3",
    //     "zipball_url": "https://api.github.com/repos/raioramalho/raiodoro/zipball/v0.1.3",
    //     "body": "# Lançamento da Versão 0.1.3 do Raio⚡️Doro | Pomodoro App\r\n\r\nEstamos felizes em anunciar o lançamento da versão 0.1.3 do Raio⚡️Doro\r\nEsta atualização traz melhorias significativas, incluindo correções de bugs e um novo recurso emocionante.\r\n\r\n**Novidades:**\r\n\r\n- **Correção de Bug:** Detalhes visuais na title bar corrigidos.\r\n\r\n- **Correção de Bug:** Bug ao fechar a aplicação.\r\n\r\n- **Novo Recurso Visual:**  Alteramos o icone do app.\r\n\r\n- **Novo Recurso:**  integramos o sistema CI do github.\r\n\r\nContinuamos comprometidos em fornecer uma experiência de usuário excepcional e estamos ansiosos para trazer mais melhorias e recursos emocionantes em futuras atualizações.\r\n\r\nAtualize seu aplicativo Raio⚡️Doro agora mesmo para desfrutar dessas melhorias e nos ajude a compartilhar o poder da técnica Pomodoro com o mundo!\r\n\r\nObrigado por seu apoio contínuo!\r\n\r\nAtenciosamente,\r\nAlan Ramalho\r\n(Autor do Raio⚡️Doro | Pomodoro App)\r\n"
    //   },
    //   {
    //     "url": "https://api.github.com/repos/raioramalho/raiodoro/releases/145097237",
    //     "assets_url": "https://api.github.com/repos/raioramalho/raiodoro/releases/145097237/assets",
    //     "upload_url": "https://uploads.github.com/repos/raioramalho/raiodoro/releases/145097237/assets{?name,label}",
    //     "html_url": "https://github.com/raioramalho/raiodoro/releases/tag/v0.1.2",
    //     "id": 145097237,
    //     "author": {
    //       "login": "raioramalho",
    //       "id": 13089323,
    //       "node_id": "MDQ6VXNlcjEzMDg5MzIz",
    //       "avatar_url": "https://avatars.githubusercontent.com/u/13089323?v=4",
    //       "gravatar_id": "",
    //       "url": "https://api.github.com/users/raioramalho",
    //       "html_url": "https://github.com/raioramalho",
    //       "followers_url": "https://api.github.com/users/raioramalho/followers",
    //       "following_url": "https://api.github.com/users/raioramalho/following{/other_user}",
    //       "gists_url": "https://api.github.com/users/raioramalho/gists{/gist_id}",
    //       "starred_url": "https://api.github.com/users/raioramalho/starred{/owner}{/repo}",
    //       "subscriptions_url": "https://api.github.com/users/raioramalho/subscriptions",
    //       "organizations_url": "https://api.github.com/users/raioramalho/orgs",
    //       "repos_url": "https://api.github.com/users/raioramalho/repos",
    //       "events_url": "https://api.github.com/users/raioramalho/events{/privacy}",
    //       "received_events_url": "https://api.github.com/users/raioramalho/received_events",
    //       "type": "User",
    //       "site_admin": false
    //     },
    //     "node_id": "RE_kwDOLcMeZ84IpgIV",
    //     "tag_name": "v0.1.2",
    //     "target_commitish": "main",
    //     "name": "raiodoro_0.1.2",
    //     "draft": false,
    //     "prerelease": false,
    //     "created_at": "2024-03-06T16:30:50Z",
    //     "published_at": "2024-03-06T16:35:39Z",
    //     "assets": [
    //       {
    //         "url": "https://api.github.com/repos/raioramalho/raiodoro/releases/assets/155250281",
    //         "id": 155250281,
    //         "node_id": "RA_kwDOLcMeZ84JQO5p",
    //         "name": "raiodoro_0.1.2_x64.dmg",
    //         "label": null,
    //         "uploader": {
    //           "login": "raioramalho",
    //           "id": 13089323,
    //           "node_id": "MDQ6VXNlcjEzMDg5MzIz",
    //           "avatar_url": "https://avatars.githubusercontent.com/u/13089323?v=4",
    //           "gravatar_id": "",
    //           "url": "https://api.github.com/users/raioramalho",
    //           "html_url": "https://github.com/raioramalho",
    //           "followers_url": "https://api.github.com/users/raioramalho/followers",
    //           "following_url": "https://api.github.com/users/raioramalho/following{/other_user}",
    //           "gists_url": "https://api.github.com/users/raioramalho/gists{/gist_id}",
    //           "starred_url": "https://api.github.com/users/raioramalho/starred{/owner}{/repo}",
    //           "subscriptions_url": "https://api.github.com/users/raioramalho/subscriptions",
    //           "organizations_url": "https://api.github.com/users/raioramalho/orgs",
    //           "repos_url": "https://api.github.com/users/raioramalho/repos",
    //           "events_url": "https://api.github.com/users/raioramalho/events{/privacy}",
    //           "received_events_url": "https://api.github.com/users/raioramalho/received_events",
    //           "type": "User",
    //           "site_admin": false
    //         },
    //         "content_type": "application/x-apple-diskimage",
    //         "state": "uploaded",
    //         "size": 4339369,
    //         "download_count": 1,
    //         "created_at": "2024-03-06T16:32:04Z",
    //         "updated_at": "2024-03-06T16:32:08Z",
    //         "browser_download_url": "https://github.com/raioramalho/raiodoro/releases/download/v0.1.2/raiodoro_0.1.2_x64.dmg"
    //       }
    //     ],
    //     "tarball_url": "https://api.github.com/repos/raioramalho/raiodoro/tarball/v0.1.2",
    //     "zipball_url": "https://api.github.com/repos/raioramalho/raiodoro/zipball/v0.1.2",
    //     "body": "# Lançamento da Versão 0.1.2 do Raio⚡️Doro | Pomodoro App\r\n\r\nEstamos felizes em anunciar o lançamento da versão 0.1.2 do Raio⚡️Doro | Pomodoro App! Esta atualização traz melhorias significativas, incluindo correções de bugs e um novo recurso emocionante.\r\n\r\n**Novidades:**\r\n\r\n- **Correção de Bug:** Resolvemos detalhes visuais que afetavam a experiência do usuário no tema dark. Agora, o aplicativo oferece uma experiência visual mais consistente e agradável em todos os modos de visualização.\r\n\r\n- **Novo Recurso:** Implementamos uma notificação ao término do pomodoro. Agora, os usuários receberão uma notificação clara quando sua sessão de pomodoro for concluída, ajudando a manter o foco e a produtividade.\r\n\r\nContinuamos comprometidos em fornecer uma experiência de usuário excepcional e estamos ansiosos para trazer mais melhorias e recursos emocionantes em futuras atualizações.\r\n\r\nAtualize seu aplicativo Raio⚡️Doro agora mesmo para desfrutar dessas melhorias e nos ajude a compartilhar o poder da técnica Pomodoro com o mundo!\r\n\r\nObrigado por seu apoio contínuo!\r\n\r\nAtenciosamente,\r\nAlan Ramalho\r\n(Autor do Raio⚡️Doro | Pomodoro App)\r\n"
    //   }
    // ]

    const [releases, setReleases] = useState<Releases>([]);

    async function getReleases() {
    let request = await fetch("https://api.github.com/repos/raioramalho/raiodoro/releases");
    let response: Releases = await request.json();
    if(request.ok) {
      let publishedReleases = response;
      setReleases(publishedReleases)
      return publishedReleases;
    }else {
      return;
    }
    }

    useEffect(() => {
        getReleases();
    },[])

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
              <TableCell className="font-medium"><span className="border p-1 rounded text-green-900 dark:text-green-200">{release.tag_name}</span></TableCell>
              <TableCell className="">
                Alan Ramalho
              {/* {release.author.avatar_url} */}
              </TableCell>
              <TableCell className="">
                <DropdownMenu>
                  <DropdownMenuTrigger className="justify-center">
                    <span className="font-medium flex flex-row items-center gap-1 text-green-900 dark:text-green-200">
                      <DownloadCloudIcon className="w-4 h-4"/>
                      download
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col gap-1">
                    {/* <Card className="p-2 m-2 flex flex-col justify-center items-center rounded-sm "> */}
                      {release.assets.map((asset) => (
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
    )
}
