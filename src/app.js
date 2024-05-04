/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
let generateExcuse = () => {
  let who = [
    "My cat",
    "My Dog",
    "The mailman",
    "My girlfriend",
    "My spouse",
    "My coworker",
    "The janitor",
    "A clown"
  ];
  let action = [
    " ate",
    " destroyed",
    " took",
    " ripped",
    " broke",
    " crushed",
    " hid",
    " stole"
  ];
  let what = [
    " my homework",
    " my car",
    " my house",
    " my computer",
    " my grandma",
    " my hamster",
    " my pencil",
    " my water heater"
  ];
  let when = [
    " last night",
    " this morning",
    " before my shift",
    " before I woke up",
    " as I was driving",
    " yesterday",
    " at noon",
    " before I left"
  ];
  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return (
    who[whoindex] +
    "" +
    action[actionindex] +
    "" +
    what[whatindex] +
    "" +
    when[whenindex]
  );
};
