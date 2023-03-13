import MaxsLogo from './logo.png';

const topBar = () => {
   const topContainer = document.createElement('div');
    topContainer.setAttribute('id', 'topContainer');
    
    const logo = document.createElement('div');
    logo.classList.add('logo');
    topContainer.appendChild(logo);

    const maxLogo = document.createElement('img');
    maxLogo.src = MaxsLogo;
    maxLogo.setAttribute('id', 'maxLogo');
    logo.appendChild(maxLogo);

    const navbarCont = document.createElement('div');
    navbarCont.classList.add('navbarCont');
    topContainer.appendChild(navbarCont);

    for(let i=0; i<3; i++) {
    const navItems = document.createElement('div');
    navItems.classList.add('navbar');
    navbarCont.appendChild(navItems);

    const ul = document.createElement('ul');
    navItems.appendChild(ul);

    const list = document.createElement('li');
    ul.appendChild(list); 

    const tabs = document.createElement('button');
    tabs.setAttribute('id', 'tabs');
    list.appendChild(tabs);
    }

  return topContainer 
}

const background = () => {
    const bg = document.createElement('div');
    bg.setAttribute('id', 'backG');

    const descrip = document.createElement('div');
    descrip.classList.add('descrip');
    bg.appendChild(descrip);

    const cursive = document.createElement('p');
    cursive.classList.add('cursive');
    cursive.textContent = "the most delicious flavorful combos";
    descrip.appendChild(cursive);
    
    const greet = document.createElement('p');
    greet.classList.add('greet');
    greet.textContent = "Welcome to";
    descrip.appendChild(greet);

    const greet2 = document.createElement('p');
    greet2.classList.add('greet2');
    greet2.textContent = "Max's";
    descrip.appendChild(greet2);

    const greet3 = document.createElement('p');
    greet3.classList.add('greet3');
    greet3.textContent = "Restaurant";
    descrip.appendChild(greet3);

    const greet4 = document.createElement('p');
    greet4.classList.add('greet4');
    greet4.textContent = "Get ready for a “Sarap To The Bones” Fried Chicken experience.";
    descrip.appendChild(greet4);

    const greet5 = document.createElement('p');
    greet5.classList.add('greet5');
    greet5.textContent = "Real Food, Great Food, Everyday To The Max!";
    descrip.appendChild(greet5);

    return bg
}

const foot = () => {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = "images by Max's Group Inc."

    return footer
}

export {topBar, background, foot};

