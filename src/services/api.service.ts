/* eslint-disable prefer-const */
import axios from "axios";
import { Releases } from "@/types/release.type";

export class ApiService {
  private readonly releasesUrl = "https://api.github.com/repos/raioramalho/raiodoro/releases";
  constructor() {}

  async getCurrentRelease(): Promise<string> {
    return await axios
      .get(this.releasesUrl, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        let data: Releases = response.data;
        return data[0].tag_name;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  async getReleases(): Promise<Releases> {
    return await axios
      .get(this.releasesUrl, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((response) => {
        let data: Releases = response.data;
        return data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }
  
}