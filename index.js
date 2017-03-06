module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

// Syntax scheme
const backgroundColor   = 'rgba(48, 56, 69, .60)';
const overlap = 'rgba(0, 0, 0, .15)';
const foregroundColor   = '#D0D4E6';
const cursorColor       = '#2C85F7';
const borderColor       = '#3E4756';
const green             = '#8FCA9A';

const colors            = {
      black             : backgroundColor,
      red               : '#E39194',
      green             : green,
      yellow            : '#F7EFAE',
      blue              : '#77ABE7',
      magenta           : '#CAA6EC',
      cyan              : '#A2C6EF',
      white             : foregroundColor,
      lightBlack        : '#515A6F',
      lightRed          : '#E39194',
      lightGreen        : '#8FCA9A',
      lightYellow       : '#EFAA8E',
      lightBlue         : '#77ABE7',
      lightMagenta      : '#CAA6EC',
      lightCyan         : '#A2C6EF',
      lightWhite        : foregroundColor
};

// Config
exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor: overlap,
        colors,
        cursorColor: config.cursorColor || cursorColor,
        cursorShape: config.cursorShape || 'BEAM',
        fontSize: config.fontSize || 12,
        fontFamily: config.fontFamily || '"Fira Code"',
        termCSS: `
            ${config.termCSS || ''}
            ::selection {
                background: #9198A2 !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial;
            }
            .cursor-node[focus=true]:not([hyper-blink-moving]) {
                animation: blink 1s ease infinite;
            }
            @keyframes blink {
                50% { opacity: 0 }
            }
            span {
                font-weight: normal !important;
            }
        `,
        css: `
            ${config.css || ''}
            .hyper_main {
                border: none !important;
            }
            .header_header {
                background-color: ${overlap} !important;
            }
            ::selection {
                background: #9198A2 !important;
            }
            .tab_tab {
                border: 0;
            }
            .tab_textActive {
                border-bottom: 2px solid ${green};
            }
        `
    });
};
