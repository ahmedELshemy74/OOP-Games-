import { Ui } from "./Ui.module.js";

export class Details {
  constructor(id) {
    document.getElementById("btnClose").addEventListener("click", () => {
      document.getElementById("details").classList.add("d-none");
      document.getElementById("games").classList.remove("d-none");
    });
    this.loading = document.querySelector(".loading");
    this.getDetails(id);
  }

  async getDetails(id) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "58025a0927msh96e0b9d952b2185p154851jsne3d777388068",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const response = await api.json();
    this.loading.classList.add("d-none");
    console.log(response);
    new Ui().displayDetails(response);
  }
}
