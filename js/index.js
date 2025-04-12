// grab all tabs and panels
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// grab hamburger btn + mobile menu
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const logo = document.querySelector('#logo');

// tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

// hamburger btn listener
btn.addEventListener('click', navToggle);

function onTabClick(e) {
    // deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })
    // hide all panels when tab clicked
    panels.forEach((panel) => panel.classList.add('hidden'));

    // activate a new tab
    e.target.classList.add('border-softRed', 'border-b-4');

    // activate correct panel based on data-target
    const classString = e.target.getAttribute('data-target');

    // from section with id 'panels'
    // show panel that matches the clicked tabs data-target
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden');
}

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    // if mobile menu is open
    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
}