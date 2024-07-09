export class Ui {
  constructor() {}
  displayGames(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
            <div class="col">
            <div data-id="${data[i].id}" class="card h-100 bg-transparent" role="button">
              <div class="card-body">
                <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" alt=""/>
                </figure>
                <figcaption>
                  <div class="d-flex justify-content-between text-white">
                    <h3 class="h6 small">${data[i].title}</h3>
                    <span class="badge text-bg-primary p-2">free</span>
                  </div>
                  <p class="card-text small text-center opacity-50 text-white"> ${data[i].short_description}</p>
                </figcaption>
              </div>
    
              <div class="card-footer small d-flex justify-content-between">
                <span class="badge badge-color">${data[i].genre}</span>
                <span class="badge badge-color">${data[i].platform}</span>
              </div>
    
            </div>
          </div>
            `;
    }
    document.getElementById("gameData").innerHTML = gamesBox;
  }

  displayDetails(data) {
    const detailsBox = `
      <div class="col-md-4">
              <img src="${data.thumbnail}" class="w-100" alt="">
            </div>
            <div class="col-md-8">
              <h3>Title: ${data.title}</h3>
              <p>Category: <span class="badge text-bg-info">${data.genre}</span></p>
              <p>Platform: <span class="badge text-bg-info">${data.platform}</span></p>
              <p>Status: <span class="badge text-bg-info">${data.status}</span></p>
              <p class="small">${data.description}</p>
              <a href="${data.game_url}" class="btn btn-outline-warning text-white" target="_blank">Show Game</a>
            </div>  
    `;
    document.getElementById("detailsContent").innerHTML = detailsBox;
  }
}
