document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('div');

    divs.forEach(div => {
        const maxTop = window.innerHeight * 2;
        const maxLeft = window.innerWidth - div.clientWidth;

        const randomTop = Math.random() * maxTop;
        const randomLeft = Math.random() * maxLeft;

        div.style.position = 'absolute';
        div.style.top = `${randomTop}px`;
        div.style.left = `${randomLeft}px`;
    });
});
