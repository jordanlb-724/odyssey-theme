const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            slate: {
                DEFAULT: '#64748B',
                50: '#F0F2F4',
                100: '#DEE2E8',
                200: '#C1C8D2',
                300: '#A0ABBB',
                400: '#8291A5',
                500: '#64748B',
                600: '#515E71',
                700: '#3C4553',
                800: '#292F38',
                900: '#13161B',
                950: '#0B0C0F',
            },
            sky: {
                DEFAULT: '#0EA5E9',
                50: '#E7F6FE',
                100: '#CFEEFC',
                200: '#9ADBF9',
                300: '#6ACAF6',
                400: '#3AB8F3',
                500: '#0EA5E9',
                600: '#0B84BC',
                700: '#08628C',
                800: '#05405B',
                900: '#032230',
                950: '#011118',
            },
            yellow: {
                DEFAULT: '#EAB308',
                50: '#FEF8E6',
                100: '#FDF1CE',
                200: '#FBE297',
                300: '#FAD566',
                400: '#F8C630',
                500: '#EAB308',
                600: '#BB8E06',
                700: '#8F6C05',
                800: '#5E4703',
                900: '#312502',
                950: '#191301',
            },
            blue: {
                DEFAULT: '#3B82F6',
                50: '#EBF3FE',
                100: '#D8E6FD',
                200: '#B1CEFB',
                300: '#8AB5FA',
                400: '#639CF8',
                500: '#3B82F6',
                600: '#0B60EA',
                700: '#0848B0',
                800: '#053075',
                900: '#03183B',
                950: '#010C1D',
            },
            green: {
                DEFAULT: '#22C55E',
                50: '#E9FBF0',
                100: '#CFF7DE',
                200: '#9FEFBC',
                300: '#6FE69B',
                400: '#40DE7A',
                500: '#22C55E',
                600: '#1B9D4B',
                700: '#147538',
                800: '#0D4E25',
                900: '#072713',
                950: '#04160A',
            },
            red: {
                DEFAULT: '#EF4444',
                50: '#FDECEC',
                100: '#FCD9D9',
                200: '#F9B4B4',
                300: '#F58E8E',
                400: '#F26969',
                500: '#EF4444',
                600: '#E11313',
                700: '#A90F0F',
                800: '#710A0A',
                900: '#380505',
                950: '#1C0202',
            },
            black: {
                DEFAULT: '#000000',
                50: '#E6E6E6',
                100: '#CCCCCC',
                200: '#999999',
                300: '#666666',
                400: '#333333',
                500: '#000000',
                600: '#000000',
                700: '#000000',
                800: '#000000',
                900: '#000000',
                950: '#000000',
            },
            white: {
                DEFAULT: '#FFFFFF',
                50: '#FFFFFF',
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#FFFFFF',
                500: '#FFFFFF',
                600: '#CCCCCC',
                700: '#999999',
                800: '#666666',
                900: '#333333',
                950: '#1A1A1A',
            },
            gray: {
                DEFAULT: '#6B7280',
                50: '#F1F2F3',
                100: '#E0E2E5',
                200: '#C2C5CC',
                300: '#A6ABB5',
                400: '#888E9B',
                500: '#6B7280',
                600: '#565C67',
                700: '#41454E',
                800: '#2A2D32',
                900: '#151619',
                950: '#0C0C0E',
            },
            zinc: {
                DEFAULT: '#71717A',
                50: '#F2F2F3',
                100: '#E2E2E4',
                200: '#C5C5C9',
                300: '#AAAAB1',
                400: '#8D8D96',
                500: '#71717A',
                600: '#5B5B62',
                700: '#45454A',
                800: '#2C2C30',
                900: '#161618',
                950: '#0C0C0D',
            },
            neutral: {
                DEFAULT: '#737373',
                50: '#F2F2F2',
                100: '#E3E3E3',
                200: '#C7C7C7',
                300: '#ABABAB',
                400: '#8F8F8F',
                500: '#737373',
                600: '#5C5C5C',
                700: '#454545',
                800: '#2E2E2E',
                900: '#171717',
                950: '#0D0D0D',
            },
            stone: {
                DEFAULT: '#78716C',
                50: '#F1F0EF',
                100: '#E4E3E1',
                200: '#CAC6C4',
                300: '#AFAAA6',
                400: '#958E89',
                500: '#78716C',
                600: '#615B57',
                700: '#484441',
                800: '#302D2B',
                900: '#181716',
                950: '#0B0A0A',
            },
            orange: {
                DEFAULT: '#F97316',
                50: '#FEF0E6',
                100: '#FEE4D2',
                200: '#FDC7A1',
                300: '#FBAC74',
                400: '#FA8F42',
                500: '#F97316',
                600: '#D15A05',
                700: '#9F4504',
                800: '#682D03',
                900: '#371801',
                950: '#190B01',
            },
            amber: {
                DEFAULT: '#F59E0B',
                50: '#FEF5E7',
                100: '#FDECCE',
                200: '#FBD99D',
                300: '#F9C56C',
                400: '#F7B23B',
                500: '#F59E0B',
                600: '#C47F08',
                700: '#935F06',
                800: '#624004',
                900: '#312002',
                950: '#181001',
            },
            lime: {
                DEFAULT: '#84CC16',
                50: '#F2FCE3',
                100: '#E7FACC',
                200: '#D0F49A',
                300: '#B8EF67',
                400: '#9FE930',
                500: '#84CC16',
                600: '#68A111',
                700: '#507C0D',
                800: '#355309',
                900: '#1B2904',
                950: '#0C1202',
            },
            cyan: {
                DEFAULT: '#06B6D4',
                50: '#E1FAFE',
                100: '#C8F6FD',
                200: '#8DEBFC',
                300: '#56E2FA',
                400: '#1BD7F9',
                500: '#06B6D4',
                600: '#0590A9',
                700: '#046E81',
                800: '#024854',
                900: '#01262D',
                950: '#011114',
            },
            emerald: {
                DEFAULT: '#10B981',
                50: '#E3FDF4',
                100: '#C7FAE9',
                200: '#8EF5D3',
                300: '#56F0BD',
                400: '#1EECA7',
                500: '#10B981',
                600: '#0D9668',
                700: '#0A714E',
                800: '#064B34',
                900: '#03261A',
                950: '#02130D',
            },
            teal: {
                DEFAULT: '#14B8A6',
                50: '#E3FCF9',
                100: '#C8F9F3',
                200: '#91F3E8',
                300: '#59EDDC',
                400: '#22E7D0',
                500: '#14B8A6',
                600: '#109384',
                700: '#0C6E63',
                800: '#084A42',
                900: '#042521',
                950: '#021210',
            },
            indigo: {
                DEFAULT: '#6366F1',
                50: '#F1F1FE',
                100: '#DEDFFC',
                200: '#C2C3FA',
                300: '#A1A3F7',
                400: '#8183F4',
                500: '#6366F1',
                600: '#2326EB',
                700: '#1114BB',
                800: '#0B0D7E',
                900: '#05063D',
                950: '#030321',
            },
            violet: {
                DEFAULT: '#8B5CF6',
                50: '#F5F1FE',
                100: '#E7DDFD',
                200: '#D2C0FC',
                300: '#BA9EFA',
                400: '#A27DF8',
                500: '#8B5CF6',
                600: '#5C1CF2',
                700: '#410BC1',
                800: '#2C0782',
                900: '#15033F',
                950: '#0B0222',
            },
            purple: {
                DEFAULT: '#A855F7',
                50: '#F8F0FE',
                100: '#EEDDFD',
                200: '#DCBBFC',
                300: '#CB99FA',
                400: '#BA77F9',
                500: '#A855F7',
                600: '#8815F4',
                700: '#6609BE',
                800: '#44067F',
                900: '#22033F',
                950: '#120222',
            },
            fuchsia: {
                DEFAULT: '#D946EF',
                50: '#FBECFD',
                100: '#F7D9FC',
                200: '#EFB4F9',
                300: '#E88EF5',
                400: '#E069F2',
                500: '#D946EF',
                600: '#C613E1',
                700: '#940FA9',
                800: '#630A71',
                900: '#310538',
                950: '#19021C',
            },
            pink: {
                DEFAULT: '#EC4899',
                50: '#FDEDF5',
                100: '#FBDAEB',
                200: '#F7B5D6',
                300: '#F390C2',
                400: '#F06BAD',
                500: '#EC4899',
                600: '#DE177A',
                700: '#A6115C',
                800: '#6F0C3D',
                900: '#37061F',
                950: '#1C030F',
            },
            rose: {
                DEFAULT: '#F43F5E',
                50: '#FEECEF',
                100: '#FDD8DE',
                200: '#FBB2BE',
                300: '#F88B9D',
                400: '#F6657D',
                500: '#F43F5E',
                600: '#E80D32',
                700: '#AE0A25',
                800: '#740719',
                900: '#3A030C',
                950: '#1D0206',
            },
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00177D',
                    50: '#D6DEFF',
                    100: '#B3C1FF',
                    200: '#6682FF',
                    300: '#1A44FF',
                    400: '#0025CC',
                    500: '#00177D',
                    600: '#001366',
                    700: '#000E4D',
                    800: '#000933',
                    900: '#000519',
                    950: '#00020A',
                },
                secondary: {
                    DEFAULT: '#800000',
                    50: '#FFDBDB',
                    100: '#FFB3B3',
                    200: '#FF6666',
                    300: '#FF1A1A',
                    400: '#CC0000',
                    500: '#800000',
                    600: '#660000',
                    700: '#4D0000',
                    800: '#330000',
                    900: '#190000',
                    950: '#0F0000',
                },
                dark: {
                    DEFAULT: '#1F2937',
                    50: '#E5EAF0',
                    100: '#C8D2E0',
                    200: '#93A7C2',
                    300: '#5C7AA3',
                    400: '#3F536F',
                    500: '#1F2937',
                    600: '#1A222E',
                    700: '#121821',
                    800: '#0D1117',
                    900: '#06070A',
                    950: '#040507',
                },
                warning: {
                    DEFAULT: '#E4A11B',
                    50: '#FCF6E8',
                    100: '#FAECD1',
                    200: '#F4D9A4',
                    300: '#EFC776',
                    400: '#E9B449',
                    500: '#E4A11B',
                    600: '#B68116',
                    700: '#896110',
                    800: '#5B400B',
                    900: '#2E2005',
                    950: '#171003',
                },
                light: {
                    DEFAULT: '#F9FAFB',
                    50: '#FFFFFF',
                    100: '#FFFFFF',
                    200: '#FCFCFD',
                    300: '#FCFCFD',
                    400: '#F9FAFB',
                    500: '#F9FAFB',
                    600: '#BCC7D2',
                    700: '#8296AB',
                    800: '#506377',
                    900: '#29333D',
                    950: '#141A1F',
                },
                success: {
                    DEFAULT: '#0E7235',
                    50: '#DFFBEA',
                    100: '#BBF7D2',
                    200: '#77EEA5',
                    300: '#33E677',
                    400: '#16B653',
                    500: '#0E7235',
                    600: '#0B5B2A',
                    700: '#08441F',
                    800: '#062D15',
                    900: '#03170A',
                    950: '#020E06',
                },
                danger: {
                    DEFAULT: '#800000',
                    50: '#FFDBDB',
                    100: '#FFB3B3',
                    200: '#FF6666',
                    300: '#FF1A1A',
                    400: '#CC0000',
                    500: '#800000',
                    600: '#660000',
                    700: '#4D0000',
                    800: '#330000',
                    900: '#190000',
                    950: '#0F0000',
                },
                info: {
                    DEFAULT: '#54B4D3',
                    50: '#EFF8FB',
                    100: '#DFF1F7',
                    200: '#BAE0ED',
                    300: '#9AD2E5',
                    400: '#75C2DC',
                    500: '#54B4D3',
                    600: '#3098BB',
                    700: '#25748E',
                    800: '#184C5D',
                    900: '#0D2831',
                    950: '#061418',
                },
            },
        },
    },
    plugins: [],
});
