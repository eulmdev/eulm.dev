function onTouchscreenClick(el, callback) {
    el.addEventListener('touchstart', callback);
}

function touchscreenUseDoubleClick() {
    let clicked;

    const links = document.querySelectorAll('a');
    const warning = document.querySelector('#warning');

    links.forEach((link) => {
        onTouchscreenClick(link, (event) => {
            if (clicked !== link.href) {
                event.preventDefault();
                clicked = link.href;
                warning.classList.remove('hidden');
            }
        });
    });

    onTouchscreenClick(window, (event) => {
        let clickedLink;

        links.forEach((link) => {
            if ([...link.children].includes(event.target)) clickedLink = true;
        })

        if (!clickedLink) {
            clicked = null;
            warning.classList.add('hidden');
        }
    });
}

window.addEventListener('load', touchscreenUseDoubleClick);
