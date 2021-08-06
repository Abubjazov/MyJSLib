(() => {
    const $ = function(selector) {
        const elements = document.querySelectorAll(selector);
        const object = {};

        object.hide = () => {
            elements.forEach(elem => {
                elem.style.display = 'none';
            });
            return object;
        };

        object.show = () => {
            elements.forEach(elem => {
                elem.style.display = '';
            });
            return object;
        };

        return object;
    };

    window.$ = $;
})();
