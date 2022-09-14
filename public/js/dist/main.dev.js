"use strict";

var city_Name = document.getElementById("city_Name");
var submitbtn = document.getElementById("submitbtn");
var city_name = document.getElementById("city_name");

var getInfo = function getInfo(event) {
  var cityVal, url, responce;
  return regeneratorRuntime.async(function getInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cityVal = city_Name.value;
          event.preventDefault();

          if (!(cityVal === "")) {
            _context.next = 5;
            break;
          }

          _context.next = 9;
          break;

        case 5:
          url = "https://api.openweathermap.org/data/2.5/weather?q=Ajmer&lat={lat}&lon={lon}&appid=8bfd3cf45f4fc2bf5954a06ac4e6249f";
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch(url));

        case 8:
          responce = _context.sent;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}; // console.log(url.json())


submitbtn.addEventListener('click', getInfo);