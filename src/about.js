import {card} from "./menu"
import birthday from "../media/birthday.png"

function about(){
    let content = document.querySelector('#content');
    content.remove();
    content = document.createElement('div');
    content.id = 'content';

    let hding = document.createElement('h1');
    hding.classList.add('hding');
    hding.textContent = 'About';

    let about = document.createElement('div');
    about.classList.add('about');
    let contact = new card('Contact Us', `HP: 9999 9999, Address: Dino Street`, birthday);
    about.append(hding, contact.makeHTML());
    content.appendChild(about);
    document.body.appendChild(content);
}

export default about;