/* eslint-disable prefer-const */
import { Octokit } from "@octokit/rest";

export class ApiService {
  private readonly octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: `${import.meta.env.VITE_API_TOKEN}`
    });
  }

  async getCurrentRelease() {
    try {
      const response = await this.octokit.repos.listReleases({
        owner: "raioramalho",
        repo: "raiodoro"
      });
      
      if (response.data.length > 0) {
        return response.data[0].tag_name;
      } else {
        return "No releases found";
      }
    } catch (error) {
      console.error("Error fetching current release:", error);
      return "error";
    }
  }

  async getReleases() {
    try {
      const response = await this.octokit.repos.listReleases({
        owner: "raioramalho",
        repo: "raiodoro"
      });
      
      return response.data;
    } catch (error) {
      console.error("Error fetching releases:", error);
      return [];
    }
  }
}
