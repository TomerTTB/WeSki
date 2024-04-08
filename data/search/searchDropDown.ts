export const searchDropDownElements = [
    {
        functionType: 'getByDataTestId',
        text: 'desktop\\:home\\:origin-airport-search-select',
        text2: 'Any London Airport',
    },
    {
        functionType: 'getByDataTestId',
        text: 'desktop\\:home\\:destination-search-select',
        text2: 'Tignes',
    },
    {
        // Important - This will cause a BUG, text2 will change and need to find diffrent selector for this element/
        functionType: 'getByFilteredText',
        text: '[data-test-id="desktop\\:home\\:dates-search-select"] div',
        text2: 'Dec 2 - Dec',
        nth: 2,
    },
    {
        functionType: 'getByFilteredText',
        text: '[data-test-id="desktop\\:home\\:guests-search-select"] div',
        text2: 'adults',
        nth: 2,
    },
    {
        functionType: 'getByFilteredText',
        text: '#search-component-select div',
        text2: 'Stay+ Flights+Transfers',
        nth: 0,
    },
];
