document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const totalPrice = document.getElementById('total-price');

    form.addEventListener('change', () => {
        const graphicsPrice = parseFloat(form.graphics.value);
        const cpuPrice = parseFloat(form.cpu.value);
        const motherboardPrice = parseFloat(form.motherboard.value);
        const memoryPrice = parseFloat(form.memory.value);

        const total = graphicsPrice + cpuPrice + motherboardPrice + memoryPrice;
        totalPrice.textContent = total + '€';
    });
});
