function updateTime() {
  let newcastleElement = document.querySelector("#newcastle");
  let newcastleDateElement = newcastleElement.querySelector(".date");
  let newcastleTimeElement = newcastleElement.querySelector(".time");
  let newcastleTime = moment().tz("South-Africa/newcastle");

  newcastleDateElement.innerHTML = newcastleTime.format("MMMM Do YYYY");
  newcastleTimeElement.innerHTML = newcastleTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let kokstadElement = document.querySelector("#kokstad");
  let kokstadDateElement = kokstadElement.querySelector(".date");
  let kokstadTimeElement = kokstadElement.querySelector(".time");
  let kokstadTime = moment().tz("South-Africa/kokstad");

  kokstadDateElement.innerHTML = kokstadTime.format("MMMM Do YYYY");
  kokstadTimeElement.innerHTML = kokstadTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updatTime();
setInterval(updateTime, 1000);
