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
        'Sink your teeth into our delicious Dino Nuggets, the ultimate treat for kids and adults alike! These golden, crispy nuggets are shaped like your favorite dinosaurs, bringing a playful twist to mealtime. Made with high-quality chicken and seasoned to perfection, they’re crunchy on the outside, juicy on the inside, and bursting with flavor. Perfect as a snack, meal, or party favorite, our Dino Nuggets are served with your choice of dipping sauces like tangy BBQ, creamy ranch, or classic ketchup. Grab a plate today and take a bite out of prehistoric perfection! 🦖✨',
        dinoNuggetsImg);
    menu.append(hding, dinoNuggets.makeHTML());
    content.appendChild(menu);
    document.body.appendChild(content);
};

export {menu, card};