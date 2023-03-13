const contact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contactContainer');

    const upperContact = document.createElement('div');
    upperContact.setAttribute('id', 'upperContact');
    contactContainer.appendChild(upperContact);

    const formDetails = document.createElement('div');
    formDetails.setAttribute('id', 'formDetails');
    contactContainer.appendChild(formDetails);

    const upperText = document.createElement('div');
    upperText.setAttribute('id', 'upperText1');
    upperText.textContent = "Contact us";
    upperContact.appendChild(upperText);

    const upperText2 = document.createElement('div');
    upperText2.classList.add('upperText2');
    upperText2.textContent = "Contact Max's";
    upperContact.appendChild(upperText2);

    const details = document.createElement('div');
    details.setAttribute('id', 'details');
    formDetails.appendChild(details);

    const para1 = document.createElement('p');
    para1.classList.add('bold');
    para1.textContent = "Address"
    details.appendChild(para1);

    const para2 = document.createElement('p');
    para2.textContent = "123 Fifth Avenue, New War, NW 109269, Callisto"
    details.appendChild(para2);

    const para3 = document.createElement('p');
    para3.classList.add('bold');
    para3.textContent = "Phone Number"
    details.appendChild(para3);

    const para4 = document.createElement('p');
    para4.textContent = "+1 969-626-96969"
    details.appendChild(para4);

    const para5 = document.createElement('p');
    para5.classList.add('bold');
    para5.textContent = "Email Address"
    details.appendChild(para5);

    const para6 = document.createElement('p');
    para6.textContent = "totallyLegitemail@gsnail.com"
    details.appendChild(para6);

    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    formDetails.appendChild(form);

    const yourName = document.createElement('input');
    yourName.setAttribute('type', 'text');
    yourName.setAttribute('id', 'yourName');
    yourName.placeholder = "Your Name:";
    form.appendChild(yourName);

    const yourEmail = document.createElement('input');
    yourEmail.setAttribute('type', 'text');
    yourEmail.setAttribute('id', 'yourEmail');
    yourEmail.placeholder = "Your Email:";
    form.appendChild(yourEmail);

    const textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'textarea');
    textArea.placeholder = "Message:";
    textArea.cols = '30';
    textArea.rows = '10';
    form.appendChild(textArea);

    const bookBtn = document.createElement('button');
    bookBtn.setAttribute('type', 'button');
    bookBtn.setAttribute('id', 'bookBtn');
    bookBtn.innerText = "Book a Table";
    form.appendChild(bookBtn);

    return contactContainer
}

export default contact;