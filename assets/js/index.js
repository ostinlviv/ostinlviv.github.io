fetch("assets/data/menu.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const menuFrame = document.getElementById("menu");
    data.map((element) => {
      let link = document.createElement("a");
      link.className = "menu-item";
      link.href = `${element.route}.html`;
      link.innerHTML = `
        <div class="menu-item-wrapper">
          <div class="menu-item-title">
            <img src="assets/images/menu-icons/${element.icon}.svg" alt="${element.name}" />
            <div>${element.name}</div>
          </div>
          <img src="assets/images/arrow.svg" alt="arrow" />
        </div>`;
      menuFrame.appendChild(link);
    });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

fetch("assets/data/news.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const newsFrame = document.getElementById("news");
    data.map((element) => {
      let divEl = document.createElement("div");
      divEl.className = "news-item";
      divEl.innerHTML = `
        <div class="news-item-wrapper">
          <div class="news-item-title">
            <div class="news-title">${element.title}</div>
            <div class="thin-text">${new Date(
              element.date
            ).toLocaleDateString()}</div>
          </div>
          <div class="thin-text">${element.text}</div>
        </div>`;
      newsFrame.appendChild(divEl);
    });
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
