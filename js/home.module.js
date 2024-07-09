import { Details } from "./details.module.js";
import { Ui } from "./Ui.module.js";

export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeActiveLink(link);
        const category = link.dataset.category;
        this.getGames(category);
      });
    });
    this.loading = document.querySelector(".loading");
    this.details = document.getElementById("details");
    this.games = document.getElementById("games");
    this.ui = new Ui();
    this.getGames("mmorpg");
  }

  changeActiveLink(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
  }

  async getGames(cat) {
    this.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "58025a0927msh96e0b9d952b2185p154851jsne3d777388068",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
      options
    );
    const response = await api.json();
    this.loading.classList.add("d-none");
    this.ui.displayGames(response);
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        this.details.classList.remove("d-none");
        this.games.classList.add("d-none");
        new Details(card.dataset.id);
      });
    });
  }
}
