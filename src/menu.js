import menuLogo from './assets/images/menu-logo.png'

export default function() {
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `<div class="menu-logo-container">"<img class="menu-logo" src="${menuLogo}" alt="Menu Logo"></div>`;
    menuDiv.className = 'menu';

    const menu = [  
        {
            category: "Appetizers",
            items: [
                { title: "French Onion Soup - $9", description: "Caramelized onions slow-cooked in a rich beef broth, topped with melted Gruyère and served with a toasted baguette." },
                { title: "Brie en Croûte - $12", description: "Warm Brie cheese wrapped in flaky puff pastry, drizzled with honey, and served with fig jam and apple slices." },
                { title: "Escargots de Bourgogne - $14", description: "Classic Burgundy snails baked in garlic-herb butter, served with a toasted baguette." },
                { title: "Niçoise Salad - $16", description: "Seared tuna, baby potatoes, green beans, olives, cherry tomatoes, and a hard-boiled egg with Dijon vinaigrette." }
            ]
        },
        {
            category: "Mains",
            items: [
                { title: "Steak Frites - $28", description: "Juicy 10oz sirloin steak, topped with herb butter and served with crispy hand-cut fries and peppercorn sauce." },
                { title: "Coq au Vin - $24", description: "Tender chicken slow-braised in red wine with mushrooms, pearl onions, and bacon, over mashed potatoes." },
                { title: "Duck Confit - $26", description: "Crispy, fall-off-the-bone duck leg confit, with garlic-roasted potatoes and a cherry-port reduction." },
                { title: "Moules Marinières - $22", description: "Fresh mussels steamed in a white wine, garlic, and shallot broth, served with fries and aioli." }
            ]
        },
        {
            category: "Drinks",
            items: [
                { title: "Château Bordeaux (Red Wine) - $15", description: "A rich, full-bodied Bordeaux with notes of black cherry, tobacco, and oak. Perfect for pairing with steak." },
                { title: "Sancerre (White Wine) - $14", description: "A crisp, citrusy white wine from the Loire Valley, ideal for seafood and salads." },
                { title: "Classic French 75 - $12", description: "A refreshing gin cocktail with lemon juice, Champagne, and a touch of sugar." },
                { title: "Espresso Martini - $13", description: "A smooth, velvety espresso cocktail with vodka, coffee liqueur, and a hint of vanilla." },
            ]
        },
        {
            category: "Desserts",
            items: [
                { title: "Crème Brûlée - $10", description: "Silky vanilla bean custard with a crisp caramelized sugar crust, served with fresh berries." },
                { title: "Chocolate Fondant - $12", description: "Molten chocolate cake with a gooey center, paired with raspberry coulis and Chantilly cream." }
            ]
        }
    ];

    menu.forEach(element => {
        const menuCategory = document.createElement('div');
        menuCategory.className = 'menu-category';
        menuCategory.innerHTML = `
            <p class="menu-category-name">${element.category}</p>
        `;
        
        const menuItems = document.createElement('div');
        menuItems.innerHTML = '';
        menuItems.className = 'menu-item-container';
        element.items.forEach(item => {
            const menuItem = `
            <div class="menu-item">
                <p class="menu-item-title">${item.title}</p>
                <p class="menu-item-desc">${item.description}</p>
            </div>
            `;
            menuItems.innerHTML += menuItem;
        });
        menuCategory.appendChild(menuItems);
        menuDiv.appendChild(menuCategory);
    });

    return menuDiv;
}