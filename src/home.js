function home(){
    let content = document.querySelector('#content');
    content.remove();
    content = document.createElement('div');
    content.id = 'content';

    let hero = document.createElement('div');
    hero.classList.add('hero');
    
    let heroTxt = document.createElement('div');
    heroTxt.classList.add('txt');
    
    let hding = document.createElement('h1');
    hding.classList.add('hding');
    hding.textContent = "Feed that ROARSOME appetite!";
    
    let subhding = document.createElement('p');
    subhding.classList.add('subhding');
    subhding.textContent = ' Step into a world of prehistoric delights, where every bite is a journey through time.';
    
    heroTxt.appendChild(hding);
    heroTxt.appendChild(subhding);
    hero.appendChild(heroTxt);
    content.appendChild(hero);    
    document.body.appendChild(content);
}

export default home; 