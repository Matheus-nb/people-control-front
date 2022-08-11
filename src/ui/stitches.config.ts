import {createStitches, PropertyValue, ScaleValue} from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            gray400: 'gainsboro',
            gray500: 'lightgray',
        },
        fontSizes: {
            100: "4.25rem",
            75: "3.5rem",
            50: "2.75rem",
            25: "1.5rem",
            10: "1rem",
            0: "0.75rem"
        }
    },
    media: {
        desktop: '(min-width: 1280px)',
    },
    utils: {
        marginX: (value: ScaleValue<'space'>) => ({ marginLeft: value, marginRight: value }),
        marginY: (value: PropertyValue<'marginTop'>) => ({ marginTop: value, marginBottom: value }),
    },
});

export const globalStyles = globalCss({
    "@import": "url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap')",

    '*': { margin: 0, padding: 0, boxSizing: "border-box", fontFamily: 'Roboto' }
});