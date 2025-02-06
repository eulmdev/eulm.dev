function onTouchscreenClick(el, callback) {
    el.addEventListener('touchstart', callback);
}

function touchscreenUseDoubleClick() {
    let clicked;

    const links = document.querySelectorAll('a');

    links.forEach((link) => {
        onTouchscreenClick(link, (event) => {
            if (clicked !== link.href) {
                event.preventDefault();
                clicked = link.href;
            }
        });
    });

    onTouchscreenClick(window, (event) => {
        let clickedLink;

        links.forEach((link) => {
            if ([...link.children].includes(event.target)) clickedLink = true;
        })

        if (!clickedLink) clicked = null;
    });
}

window.addEventListener('load', touchscreenUseDoubleClick);
