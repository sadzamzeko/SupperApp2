const cardsData = () => {
    return fetch('cards.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    cardsData().then(jsonData => {
        generateCardsHTML(jsonData);
    });
    faqAnswer();
    burgerMenu();
 
});

function generateCardsHTML(data) {
    let html = '';
    const container = document.getElementById('cards-container');

    data.forEach(item => {
        html += `
            <div class="card">
                <img src="${item.imageURL}" alt="${item.name}">
                <div class="card-content">
                    <h2>${item.name}</h2>
                    <p>${item.desc}</p>
                    <a href="${item.link}" target="_blank" class="content-link">
                      <img src="./assets/arrow.svg" alt="arrow" class="arrow" id="arrow">
                        <p> კურსის დეტალები</p>
                    </a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}




