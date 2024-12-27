import "./style.css";
import home from "./home.js";
import {menu} from  "./menu.js";
import about from "./about.js";

home();
let homeBtn = document.querySelector('#home-btn');
let menuBtn = document.querySelector('#menu-btn');
let aboutBtn = document.querySelector('#about-btn');

homeBtn.addEventListener('click', home);
menuBtn.addEventListener('click', menu);
aboutBtn.addEventListener('click', about);

