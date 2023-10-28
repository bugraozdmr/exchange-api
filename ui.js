class UI{
    static change(option1,option2){
        const card_deck = document.querySelector(".card-header");

        card_deck.innerHTML = `
            <span class="card-title" id = "outputFirst" style="margin-left: 20px;">${option1}</span>
            <span>-</span>
            <span class="card-title" id = "outputSecond">${option2}</span>
        `;

    }
}