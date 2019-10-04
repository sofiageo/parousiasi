const defaultTheme = {
  global: {
    hover: {
      color: {"dark": "white", "light": "black"}
    },
    focus: {
      border: {
        color: { "dark": "#0082b9", "light": "#0082b9" }
      }
    },
    control: {
      border: {
        color: "#0082b9",
        radius: '4px',
        width: '1px'
      }
    },
    font: {
      family: ""
    },
    colors: {
      brand: 'brand',
      dark: 'black',
      active: 'active',
      border: 'border',
      control: 'blue',
      text: { "dark": "white", "light": "#464646"}
    },
  },
  button: {
    color: { "dark": "white", "light": "white" },
    primary: {
      color: { "dark": "#0082b9", "light": "#0082b9" }
    },
    border: {
      width: '1px',
      color: 'black',
      radius: '4px',
    }
  },
  layer: {
    background: 'grey'
  },
  heading: {
    font: {
      family: ''
    },
    level: {
      1: {
        font: {
          // family: undefined,
          // weight: undefined,
        },
        "small": {
          "size": "34px",
          "height": "40px",
          "maxWidth": "816px"
        },
        "medium": {
          "size": "61px",
          "height": "56px",
          "maxWidth": "1200px"
        },
        "large": {
          "size": "82px",
          "height": "88px",
          "maxWidth": "1968px"
        },
        "xlarge": {
          "size": "114px",
          "height": "120px",
          "maxWidth": "2736px"
        }
      },
    },
  },
  paragraph: {
    small: {
      "size": "14px",
      "height": "20px",
      "maxWidth": "336px"
    },
    medium: {
      "size": "18px",
      "height": "24px",
      "maxWidth": "732px"
    },
    large: {
      "size": "22px",
      "height": "28px",
      "maxWidth": "732px"
    },
    xlarge: {
      "size": "26px",
      "height": "32px",
      "maxWidth": "624px"
    },
    xxlarge: {
      "size": "34px",
      "height": "40px",
      "maxWidth": "816px"
    }
  }
};

export default defaultTheme;