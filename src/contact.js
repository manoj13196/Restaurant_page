export default function loadContact() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
    
    const phone = document.createElement('p');
    phone.textContent = "📞 123-456-7890";
    
    const address = document.createElement('p');
    address.textContent = "📍 456 Food Street, Flavortown";
  
    container.appendChild(heading);
    container.appendChild(phone);
    container.appendChild(address);
    content.appendChild(container);
  }
  