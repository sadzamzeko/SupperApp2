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
                <img src="Icon Button.png" alt="arrow1" class="arrow1" id="arrow1">
                <img src="${item.imageURL}" alt="${item.name}">
                <img src="Frame 92.png" alt="arrow" class="arrow" id="arrow">
                <div class="card-content">
                    <h4>${item.name}</h4>
                    <p class="titleDesk">${item.desc}</p>
                    <span class="priceText">${item.price}</span>
                    <span>₾</span><br/>
                    <button type="button">კალათაში დამატება</button">
               
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}
