import dinoNuggetsImg from "../media/dino-nuggets.png";

class card {
    constructor(hding, subhding, imgUrl){
        this.info = {hding, subhding, imgUrl};
    }

    makeHTML(){
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', `background-image: url(${this.info.imgUrl})`)
    
        let cardTxt = document.createElement('div');
        cardTxt.classList.add('card-txt');
        let cardName = document.createElement('h2');
        cardName.classList.add('card-hding');
        cardName.textContent = this.info.hding;
    
        let cardDesc = document.createElement('p');
        cardDesc.classList.add('card-desc');
        cardDesc.textContent = this.info.subhding;

        cardTxt.append(cardName, cardDesc);
        card.appendChild(cardTxt);
        return card;
    }
}


function menu(){
    let content = document.querySelector('#content');
    content.remove();
    content = document.createElement('div');
    content.id = 'content';

    let menu = document.createElement('div');
    menu.classList.add('menu');

    let hding = document.createElement('h1');
    hding.classList.add('hding');
    hding.textContent = 'Menu';

    let dinoNuggets = new card('Dino Nuggets: A Roaringly Good Snack!',
        "Sink your teeth into our Dino Nuggets—crispy, golden treats shaped like dinosaurs! Made with high-quality chicken, they’re juicy, flavorful, and perfect for kids and adults. Enjoy as a snack, meal, or party favorite with dipping sauces like BBQ, ranch, or ketchup. Take a bite out of prehistoric perfection today! 🦖✨", 
        dinoNuggetsImg)
    menu.append(hding, dinoNuggets.makeHTML());
    content.appendChild(menu);
    document.body.appendChild(content);
};

export {menu, card};