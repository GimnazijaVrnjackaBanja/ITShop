document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const totalPrice = document.getElementById('total-price');
    const demo = document.getElementById('demo');

    form.addEventListener('change', () => {
        const graphicsPrice = parseFloat(form.graphics.value);
        const cpuPrice = parseFloat(form.cpu.value);
        const motherboardPrice = parseFloat(form.motherboard.value);
        const memoryPrice = parseFloat(form.memory.value);
        const HardDiskprice = parseFloat(form.HardDisk.value);

        const total = graphicsPrice + cpuPrice + motherboardPrice + memoryPrice + HardDiskprice;
        totalPrice.textContent = total + '€';
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Sprečava slanje forme i ponovno učitavanje stranice
        demo.textContent = "Vaša porudžbina je uspešno poslata. Hvala Vam na kupovini.";
    });
});
