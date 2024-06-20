document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Sprečava slanje forme i ponovno učitavanje stranice

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulacija poruke o uspešnom slanju emaila
        alert(`Poruka je uspešno poslata!\n\nIme: ${name}\nE-mail: ${email}\nPoruka: ${message}`);
        
        form.reset(); // Resetuje formu nakon simuliranog slanja
    });
});
