const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple', 'orange']

module.exports = {
    darkMode: 'class',
    content: [
        './docs/**/*.{html,js,vue,ts,md}',
        './docs/.vitepress/**/*.{html,js,vue,ts,md}',
    ],
    purge: {
        //Because we made a dynamic class with the label we need to add those classes
        // to the safe list so the purge does not remove them
        safelist: [
            ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
            ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
            ...labelsClasses.map((lbl) => `text-${lbl}-400`),
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            gridTemplateColumns: {
                '1/5': '1fr 5fr',
            },
        }
    }
};