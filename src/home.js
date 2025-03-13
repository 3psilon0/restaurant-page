export default function() {
    const title = document.createElement('div');
    title.className = 'home-title';
    title.innerHTML = `
        <p class="title-text title-upper-text">Welcome to</p>
        <p class="title-text title-lower-text">Le Petit Bistro</p>
    `;
    return title;
}