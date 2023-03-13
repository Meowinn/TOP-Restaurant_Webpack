console.log("ur gae")

const content = document.querySelector('#content');

const header = document.createElement('div');


const home = () => {
    const topContainer = document.createElement('div');
    topContainer.setAttribute('id', 'topContainer')
    topContainer.textContent = "Top Container"
    content.appendChild(topContainer);

    const logo = document.createElement('div');
    logo.textContent = "insert logo here";
    topContainer.appendChild(logo);

}

const para = document.createElement('p');

// let br = document.createElement('br');

para.textContent = "Hello Fool fucker";

document.body.appendChild(para);

document.body.appendChild(document.createElement("br"))

let para2 = document.createElement('p');
para2.textContent = "Max's Resto";
document.body.appendChild(para2)


home();











