import WebFont from 'webfontloader';

// Preload fonts using WebFont loader
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve // Resolve the promise once the fonts are loaded
        });
    });
};

// Generate a random number between min and max
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
    preloadFonts,
    randomNumber
};
