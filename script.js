function onTouchscreenClick(el, callback) {
    el.addEventListener('click', callback);
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

                links.forEach((link) => link.classList.remove('active'));
                link.classList.add('active');

                warning.classList.remove('hidden');
            } else {
                link.classList.remove('active');
                warning.classList.add('hidden');
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
            links.forEach((link) => link.classList.remove('active'));
            warning.classList.add('hidden');
        }
    });
}

window.addEventListener('load', touchscreenUseDoubleClick);
