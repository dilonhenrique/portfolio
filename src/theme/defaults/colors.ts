const defaultColors = {
  warning: {
    x050: '#FFFBEA',
    x100: '#FFF3C4',
    x200: '#FCE588',
    x300: '#FADB5F',
    x400: '#F7C948',
    x500: '#F0B429',
    x600: '#DE911D',
    x700: '#CB6E17',
    x800: '#B44D12',
    x900: '#8D2B0B',
  },
  negative: {
    x050: '#FFE3E3',
    x100: '#FFBDBD',
    x200: '#FF9B9B',
    x300: '#F86A6A',
    x400: '#EF4E4E',
    x500: '#E12D39',
    x600: '#CF1124',
    x700: '#AB091E',
    x800: '#8A041A',
    x900: '#610316',
  },
  positive: {
    x050: '#E3F9E5',
    x100: '#C1F2C7',
    x200: '#91E697',
    x300: '#51CA58',
    x400: '#31B237',
    x500: '#18981D',
    x600: '#0F8613',
    x700: '#0E7817',
    x800: '#07600E',
    x900: '#014807',
  },
  accent: {
    x050: '#6EDDD0',
    x100: '#50D6C6',
    x200: '#2CCDBA',
    x300: '#00C2AB',
    x400: '#00B9A3',
    x500: '#00A894',
    x600: '#008B7B',
    x700: '#007366',
    x800: '#005F55',
    x900: '#004E46',
  },
  primary: {
    x050: '#D2B6FA',
    x100: '#C39EFA',
    x200: '#B689FA',
    x300: '#A770FA',
    x400: '#9452F9',
    x500: '#7D2EF7',
    x600: '#6826CD',
    x700: '#5620A9',
    x800: '#471A8C',
    x900: '#3B1673',
  },  
};

const neutralLight = {
  x000: '#FFFFFF',
  x050: '#F7F7F7',
  x100: '#E1E1E1',
  x200: '#CFCFCF',
  x300: '#B1B1B1',
  x400: '#9E9E9E',
  x500: '#7E7E7E',
  x600: '#626262',
  x700: '#515151',
  x800: '#3B3B3B',
  x900: '#222222',
  x999: '#111111',
}

const neutralDark = {
  x999: '#FFFFFF',
  x900: '#F7F7F7',
  x800: '#E1E1E1',
  x700: '#CFCFCF',
  x600: '#B1B1B1',
  x500: '#9E9E9E',
  x400: '#7E7E7E',
  x300: '#626262',
  x200: '#515151',
  x100: '#3B3B3B',
  x050: '#222222',
  x000: '#111111',
}

export const lightColors = {
  ...defaultColors,
  neutral: {...neutralLight},
}

export const darkColors = {
  ...defaultColors,
  neutral: {...neutralDark},
}