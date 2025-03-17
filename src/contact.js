import phoneIcon from './assets/images/phone.png'
import emailIcon from './assets/images/email.png'
import locationIcon from './assets/images/location.png'
import mapImg from './assets/images/map.png'

export default function() {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';
    contactDiv.innerHTML = `
        <p class="contact-title">Get in touch with us</p>
        <div class="contact-info">
            <div class="contact-elem">
                <img class="contact-icon" src="${phoneIcon}" alt="Phone Icon">
                <p>123-456-789</p>
            </div>
            <div class="contact-elem">
                <img class="contact-icon" src="${emailIcon}" alt="Email Icon">
                <p>query@lepetitebistro.com</p>
            </div>
            <div class="contact-elem">
                <img class="contact-icon" src="${locationIcon}" alt="Location Icon">
                <p>123 street, ABC town, XYZ country</p>
            </div>
        </div>
        <div class="map-container">
            <img class="contact-map" src="${mapImg}" alt="Map">
        </div>
    `;
    return contactDiv;
}