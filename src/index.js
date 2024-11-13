function updateTime() {
  let newcastleElement = document.querySelector("#newcastle");
  if (newcastleElement) {
    let newcastleDateElement = newcastleElement.querySelector(".date");
    let newcastleTimeElement = newcastleElement.querySelector(".time");
    let newcastleTime = moment().tz("Africa/Johannesburg");

    newcastleDateElement.innerHTML = newcastleTime.format("MMMM Do YYYY");
    newcastleTimeElement.innerHTML = newcastleTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let kokstadElement = document.querySelector("#kokstad");
  if (kokstadElement) {
    let kokstadDateElement = kokstadElement.querySelector(".date");
    let kokstadTimeElement = kokstadElement.querySelector(".time");
    let kokstadTime = moment().tz("Africa/Johannesburg");

    kokstadDateElement.innerHTML = kokstadTime.format("MMMM Do YYYY");
    kokstadTimeElement.innerHTML = kokstadTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updatecity(event) {
  let cityTimeZone = event.target.value || "Africa/Johannesburg";
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
  <div>
  <h2>${cityName}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
  </div>
  <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updatecity);
