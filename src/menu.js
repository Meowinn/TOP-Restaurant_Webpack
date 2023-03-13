import Meal1 from './meal_1.jpg';
import Meal2 from './meal_2.jpg';
import Meal3 from './meal_3.jpg';
import Meal4 from './meal_4.jpg';
import Meal5 from './meal_5.jpg';

const menu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');
    
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menuContainer.appendChild(menu);

    const upperText = document.createElement('div');
    upperText.setAttribute('id', 'upperText');
    menu.appendChild(upperText);

    const special = document.createElement('div');
    special.classList.add('special');
    special.textContent = "Special Selection";
    upperText.appendChild(special);

    const special2 = document.createElement('div');
    special2.textContent = "♓ From our Menu ♓";
    upperText.appendChild(special2);

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menuBtn');
    menuContainer.appendChild(menuBtn);

    const btn1 = document.createElement('button');
    btn1.setAttribute('id', 'mBtn');
    btn1.innerText = "Menu";
    menuBtn.appendChild(btn1);

    const btn2 = document.createElement('button');
    btn2.setAttribute('id', 'mBtn');
    btn2.innerText = "Wine";
    menuBtn.appendChild(btn2);

    const menuImgs = document.createElement('div');
    menuImgs.setAttribute('id', 'menuImgs');
    menuContainer.appendChild(menuImgs);

    const meal1 = document.createElement('img');
    meal1.setAttribute('id', 'foods');
    meal1.src = Meal1;
    menuImgs.appendChild(meal1);

    const meal2 = document.createElement('img');
    meal2.setAttribute('id', 'foods');
    meal2.src = Meal2;
    menuImgs.appendChild(meal2);

    const meal3 = document.createElement('img');
    meal3.setAttribute('id', 'foods');
    meal3.src = Meal3;
    menuImgs.appendChild(meal3);

    const meal4 = document.createElement('img');
    meal4.setAttribute('id', 'foods');
    meal4.src = Meal4;
    menuImgs.appendChild(meal4);

    const meal5 = document.createElement('img');
    meal5.setAttribute('id', 'foods');
    meal5.src = Meal5;
    menuImgs.appendChild(meal5);

    const bottomText = document.createElement('div');
    bottomText.classList.add('bottomText');
    menuContainer.appendChild(bottomText);

    const reserve = document.createElement('div');
    reserve.classList.add('reserve');
    bottomText.appendChild(reserve);

    const reserveText = document.createElement('div');
    reserveText.classList.add('reserveText');
    reserveText.textContent = "Reservations";
    reserve.appendChild(reserveText);

    const reserveText2 = document.createElement('div');
    reserveText2.textContent = "♓ Book a Table ♓";
    reserve.appendChild(reserveText2);

    const bookText = document.createElement('div');
    bookText.classList.add('bookText');
    bookText.textContent = "We limit bookings per timeslot to ensure seamless service. If your selected timeslot is fully booked, please select a different timeslot."
    menuContainer.appendChild(bookText);

    const moreText = document.createElement('div');
    moreText.classList.add('moreText');
    moreText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit placerat, pulvinar dolor sit amet, interdum ligula. Integer sollicitudin mollis est, eget ultricies leo hendrerit eu. Pellentesque porttitor enim nec erat vestibulum, vitae iaculis eros consequat. Cras facilisis eget est in mollis. Aliquam ac fermentum elit, eget dapibus odio. Donec ut consectetur risus. In semper nulla nisl. Cras condimentum massa sapien, in fermentum tortor facilisis a. Ut ullamcorper metus iaculis lacus vehicula, sit amet vestibulum turpis tempor. Nulla vestibulum dui sed enim lobortis pulvinar. Phasellus sed libero ac nulla vestibulum laoreet. Fusce imperdiet odio in erat lobortis fermentum. Morbi blandit sollicitudin dignissim.";
    menuContainer.appendChild(moreText);


    return menuContainer;
} 

export default menu;

