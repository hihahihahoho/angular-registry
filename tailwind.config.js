// const fs = require('fs');
// const path = require('path');

// const presetsDirectory = path.join(__dirname, 'src/app/config_registry/destination/tailwind');
// const loadedPresets = [];

// try {
//   // Đọc tất cả các tệp trong thư mục presets
//   const presetFiles = fs.readdirSync(presetsDirectory);

//   // Lọc chỉ các tệp JavaScript và thêm chúng vào mảng loadedPresets
//   presetFiles.forEach(file => { // Sử dụng forEach
//     if (file.endsWith('.js')) {
//       const presetPath = path.join(presetsDirectory, file);
//       loadedPresets.push(require(presetPath));
//     }
//   });

//   // Hoặc dùng map (thường gọn hơn):
//   // const loadedPresets = presetFiles
//   //   .filter(file => file.endsWith('.js'))
//   //   .map(file => require(path.join(presetsDirectory, file)));

// } catch (error) {
//   console.error("Error loading Tailwind presets:", error);
//   // Tùy chọn: ném lỗi hoặc xử lý khác nếu thư mục không tồn tại/không đọc được
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  // presets: loadedPresets,
  content: ["./src/**/*.{html,scss,css,ts}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1280px",
        xl: "1024px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        xs: "425px",
        xxs: "360px",
        "-2xl": {
          max: "1279px",
        },
        "-xl": {
          max: "1023px",
        },
        "-lg": {
          max: "991px",
        },
        "-md": {
          max: "767px",
        },
        "-sm": {
          max: "575px",
        },
        "-xs": {
          max: "424px",
        },
        "-xxs": {
          max: "359px",
        },
      },
      borderRadius: {
        circle: "50%",
        "3xl": "24px",
        "2xl": "20px",
        xl: "16px",
        lg: "12px",
        md: "12px",
        sm: "8px",
        xs: "4px",
      },
      boxShadow: {
        "shadow-xs": "var(--shadow-shadow-xs)",
        "shadow-s": "var(--shadow-shadow-s)",
        "shadow-m": "var(--shadow-shadow-m)",
        "shadow-l": "var(--shadow-shadow-l)",
        "shadow-xl": "var(--shadow-shadow-xl)",
        "shadow-xxl": "var(--shadow-shadow-xxl)",
        "focus-ring": "var(--focus-ring-focus-ring)",
        "elevation-1": "var(--elevation-elevation-1)",
      },
      backgroundImage: {},
      divideColor: {
        DEFAULT: "var(--divider-divider)",
      },
      colors: {
        "brand-darkblue10": "var(--brand-darkblue10)",
        "brand-darkblue20": "var(--brand-darkblue20)",
        "brand-darkblue30": "var(--brand-darkblue30)",
        "brand-darkblue40": "var(--brand-darkblue40)",
        "brand-darkblue50": "var(--brand-darkblue50)",
        "brand-darkblue60": "var(--brand-darkblue60)",
        "brand-darkblue70": "var(--brand-darkblue70)",
        "brand-darkblue80": "var(--brand-darkblue80)",
        "brand-darkblue90": "var(--brand-darkblue90)",
        "brand-darkblue100": "var(--brand-darkblue100)",
        "brand-darkblue110": "var(--brand-darkblue110)",
        "semantic-blue20": "var(--semantic-blue20)",
        "semantic-blue30": "var(--semantic-blue30)",
        "semantic-blue40": "var(--semantic-blue40)",
        "semantic-blue50": "var(--semantic-blue50)",
        "semantic-blue60": "var(--semantic-blue60)",
        "semantic-blue70": "var(--semantic-blue70)",
        "semantic-blue80": "var(--semantic-blue80)",
        "semantic-blue90": "var(--semantic-blue90)",
        "semantic-blue100": "var(--semantic-blue100)",
        "semantic-blue110": "var(--semantic-blue110)",
        "semantic-green10": "var(--semantic-green10)",
        "semantic-green20": "var(--semantic-green20)",
        "semantic-green30": "var(--semantic-green30)",
        "semantic-green40": "var(--semantic-green40)",
        "semantic-green50": "var(--semantic-green50)",
        "semantic-green60": "var(--semantic-green60)",
        "semantic-green70": "var(--semantic-green70)",
        "semantic-green80": "var(--semantic-green80)",
        "semantic-green90": "var(--semantic-green90)",
        "semantic-green100": "var(--semantic-green100)",
        "semantic-green110": "var(--semantic-green110)",
        "semantic-red10": "var(--semantic-red10)",
        "semantic-red20": "var(--semantic-red20)",
        "semantic-red30": "var(--semantic-red30)",
        "semantic-red40": "var(--semantic-red40)",
        "semantic-red50": "var(--semantic-red50)",
        "semantic-red60": "var(--semantic-red60)",
        "semantic-red70": "var(--semantic-red70)",
        "semantic-red80": "var(--semantic-red80)",
        "semantic-red90": "var(--semantic-red90)",
        "semantic-red100": "var(--semantic-red100)",
        "semantic-red110": "var(--semantic-red110)",
        "semantic-orange10": "var(--semantic-orange10)",
        "semantic-orange20": "var(--semantic-orange20)",
        "semantic-orange30": "var(--semantic-orange30)",
        "semantic-orange40": "var(--semantic-orange40)",
        "semantic-orange50": "var(--semantic-orange50)",
        "semantic-orange60": "var(--semantic-orange60)",
        "semantic-orange70": "var(--semantic-orange70)",
        "semantic-orange80": "var(--semantic-orange80)",
        "semantic-orange90": "var(--semantic-orange90)",
        "semantic-orange100": "var(--semantic-orange100)",
        "semantic-orange-110": "var(--semantic-orange-110)",
        "neutral-white100": "var(--neutral-white100)",
        "neutral-white90": "var(--neutral-white90)",
        "neutral-white80": "var(--neutral-white80)",
        "neutral-white70": "var(--neutral-white70)",
        "neutral-white60": "var(--neutral-white60)",
        "neutral-white50": "var(--neutral-white50)",
        "neutral-white40": "var(--neutral-white40)",
        "neutral-white30": "var(--neutral-white30)",
        "neutral-white20": "var(--neutral-white20)",
        "neutral-white10": "var(--neutral-white10)",
        "neutral-white0": "var(--neutral-white0)",
        "neutral-gray10": "var(--neutral-gray10)",
        "neutral-gray20": "var(--neutral-gray20)",
        "neutral-gray30": "var(--neutral-gray30)",
        "neutral-gray40": "var(--neutral-gray40)",
        "neutral-gray50": "var(--neutral-gray50)",
        "neutral-gray60": "var(--neutral-gray60)",
        "neutral-gray70": "var(--neutral-gray70)",
        "neutral-gray80": "var(--neutral-gray80)",
        "neutral-gray90": "var(--neutral-gray90)",
        "neutral-gray100": "var(--neutral-gray100)",
        "neutral-gray110": "var(--neutral-gray110)",
        "neutral-black100": "var(--neutral-black100)",
        "neutral-black90": "var(--neutral-black90)",
        "neutral-black80": "var(--neutral-black80)",
        "neutral-black70": "var(--neutral-black70)",
        "neutral-black60": "var(--neutral-black60)",
        "neutral-black50": "var(--neutral-black50)",
        "neutral-black40": "var(--neutral-black40)",
        "neutral-black30": "var(--neutral-black30)",
        "neutral-black20": "var(--neutral-black20)",
        "neutral-black10": "var(--neutral-black10)",
        "neutral-black0": "var(--neutral-black0)",
        "neutral-black5": "var(--neutral-black5)",
        "priority-sandal-sandal10": "var(--priority-sandal-sandal10)",
        "priority-sandal-sandal20": "var(--priority-sandal-sandal20)",
        "priority-sandal-sandal30": "var(--priority-sandal-sandal30)",
        "priority-sandal-sandal40": "var(--priority-sandal-sandal40)",
        "priority-sandal-sandal50": "var(--priority-sandal-sandal50)",
        "priority-sandal-sandal60": "var(--priority-sandal-sandal60)",
        "priority-sandal-sandal70": "var(--priority-sandal-sandal70)",
        "priority-sandal-sandal80": "var(--priority-sandal-sandal80)",
        "priority-sandal-sandal90": "var(--priority-sandal-sandal90)",
        "priority-sandal-sandal100": "var(--priority-sandal-sandal100)",
        "priority-sandal-sandal110": "var(--priority-sandal-sandal110)",
        "priority-blue-blue10": "var(--priority-blue-blue10)",
        "priority-blue-blue20": "var(--priority-blue-blue20)",
        "priority-blue-blue30": "var(--priority-blue-blue30)",
        "priority-blue-blue40": "var(--priority-blue-blue40)",
        "priority-blue-blue50": "var(--priority-blue-blue50)",
        "priority-blue-blue60": "var(--priority-blue-blue60)",
        "priority-blue-blue70": "var(--priority-blue-blue70)",
        "priority-blue-blue80": "var(--priority-blue-blue80)",
        "priority-blue-blue90": "var(--priority-blue-blue90)",
        "priority-blue-blue100": "var(--priority-blue-blue100)",
        "priority-blue-blue110": "var(--priority-blue-blue110)",
        "brand-brandprimary60": "var(--brand-brandprimary60)",
        "brand-brandprimary40": "var(--brand-brandprimary40)",
        "brand-brandprimary90": "var(--brand-brandprimary90)",
        "brand-brandprimary80": "var(--brand-brandprimary80)",
        "brand-brandprimary100": "var(--brand-brandprimary100)",
        "brand-brandprimary20": "var(--brand-brandprimary20)",
        "brand-brandprimary110": "var(--brand-brandprimary110)",
        "brand-brandprimary70": "var(--brand-brandprimary70)",
        "brand-brandprimary50": "var(--brand-brandprimary50)",
        "brand-brandprimary30": "var(--brand-brandprimary30)",
        "brand-brandprimary10": "var(--brand-brandprimary10)",
        "icon-iconbrandprimary": "var(--icon-iconbrandprimary)",
        "icon-iconbrandsecondary": "var(--icon-iconbrandsecondary)",
        "icon-iconneutralprimary": "var(--icon-iconneutralprimary)",
        "icon-iconneutralsecondary": "var(--icon-iconneutralsecondary)",
        "icon-iconneutraltertiary": "var(--icon-iconneutraltertiary)",
        "icon-iconbrandtertiary": "var(--icon-iconbrandtertiary)",
        "background-backgroundfeature": "var(--background-backgroundfeature)",
        "background-backgroundwhite": "var(--background-backgroundwhite)",
        "background-backgroundprimary": "var(--background-backgroundprimary)",
        "text-textneutralprimary": "var(--text-textneutralprimary)",
        "text-textneutralsecondary": "var(--text-textneutralsecondary)",
        "text-textneutraltertiary": "var(--text-textneutraltertiary)",
        "background-backgroundsecondary":
          "var(--background-backgroundsecondary)",
        "border-borderdefault": "var(--border-borderdefault)",
        "border-borderactive": "var(--border-borderactive)",
        "divider-divider": "var(--divider-divider)",
        "text-textoncolorprimary": "var(--text-textoncolorprimary)",
        "text-textoncolorsecondary": "var(--text-textoncolorsecondary)",
        "icon-icononcolorprimary": "var(--icon-icononcolorprimary)",
        "icon-icondisable": "var(--icon-icondisable)",
        "background-backgroundtertiary": "var(--background-backgroundtertiary)",
        "text-textdisable": "var(--text-textdisable)",
        "text-texterror": "var(--text-texterror)",
        "text-textwarning": "var(--text-textwarning)",
        "text-textsuccess": "var(--text-textsuccess)",
        "text-textinfo": "var(--text-textinfo)",
        "text-textlink": "var(--text-textlink)",
        "icon-iconerror": "var(--icon-iconerror)",
        "icon-iconwarning": "var(--icon-iconwarning)",
        "icon-iconsuccess": "var(--icon-iconsuccess)",
        "icon-iconinfo": "var(--icon-iconinfo)",
        "background-backgrounderrorprimary":
          "var(--background-backgrounderrorprimary)",
        "background-backgrounderrorsecondary":
          "var(--background-backgrounderrorsecondary)",
        "background-backgroundwarningprimary":
          "var(--background-backgroundwarningprimary)",
        "background-backgroundwarningsecondary":
          "var(--background-backgroundwarningsecondary)",
        "background-backgroundsuccesssecondary":
          "var(--background-backgroundsuccesssecondary)",
        "background-backgroundsuccessprimary":
          "var(--background-backgroundsuccessprimary)",
        "background-backgroundinfoprimary":
          "var(--background-backgroundinfoprimary)",
        "background-backgroundbrandprimary":
          "var(--background-backgroundbrandprimary)",
        "border-borderbrand": "var(--border-borderbrand)",
        "border-bordererror": "var(--border-bordererror)",
        "border-borderwarning": "var(--border-borderwarning)",
        "border-bordersuccess": "var(--border-bordersuccess)",
        "icon-icononcolorsecondary": "var(--icon-icononcolorsecondary)",
        "background-backgrounddisable": "var(--background-backgrounddisable)",
        "border-borderdisbale": "var(--border-borderdisbale)",
        "border-borderwhite": "var(--border-borderwhite)",
        "text-primary": "var(--text-primary)",
        "hover": "var(--hover)",
        primary: "#123456",
        secondary: "#abcdef",
        "primary-ducanh-test": "#123456",
        "secondary-ducanh-test": "#abcdef",
        "semantic-blue10": "var(--semantic-blue10)",
        "background-backgroundinfosecondary":
          "var(--background-backgroundinfosecondary)",
      },
      fontFamily: {
        sans: ["PG Sans", "sans-serif"],
        light: ["PG Sans", "sans-serif"],
      },
      fontSize: {
        display: [
          "var(--display-display-size)",
          {
            lineHeight: "var(--display-display-line-height)",
            fontWeight: "var(--display-display-weight)",
          },
        ],
        "heading-large": [
          "var(--heading-heading-large-size)",
          {
            lineHeight: "var(--heading-heading-large-line-height)",
            fontWeight: "var(--heading-heading-large-weight)",
          },
        ],
        "heading-medium": [
          "var(--heading-heading-medium-size)",
          {
            lineHeight: "var(--heading-heading-medium-line-height)",
            fontWeight: "var(--heading-heading-medium-weight)",
          },
        ],
        "heading-small": [
          "var(--heading-heading-small-size)",
          {
            lineHeight: "var(--heading-heading-small-line-height)",
            fontWeight: "var(--heading-heading-small-weight)",
          },
        ],
        "title-xl": [
          "var(--title-title-xl-size)",
          {
            lineHeight: "var(--title-title-xl-line-height)",
            fontWeight: "var(--title-title-xl-weight)",
          },
        ],
        "title-large": [
          "var(--title-title-large-size)",
          {
            lineHeight: "var(--title-title-large-line-height)",
            fontWeight: "var(--title-title-large-weight)",
          },
        ],
        "title-medium": [
          "var(--title-title-medium-size)",
          {
            lineHeight: "var(--title-title-medium-line-height)",
            fontWeight: "var(--title-title-medium-weight)",
          },
        ],
        "title-small": [
          "var(--title-title-small-size)",
          {
            lineHeight: "var(--title-title-small-line-height)",
            fontWeight: "var(--title-title-small-weight)",
          },
        ],
        "title-xs": [
          "var(--title-title-xs-size)",
          {
            lineHeight: "var(--title-title-xs-line-height)",
            fontWeight: "var(--title-title-xs-weight)",
          },
        ],
        "body-xl-semibold": [
          "var(--body-body-xl-semibold-size)",
          {
            lineHeight: "var(--body-body-xl-semibold-line-height)",
            fontWeight: "var(--body-body-xl-semibold-weight)",
          },
        ],
        "body-xl-regular": [
          "var(--body-body-xl-regular-size)",
          {
            lineHeight: "var(--body-body-xl-regular-line-height)",
            fontWeight: "var(--body-body-xl-regular-weight)",
          },
        ],
        "body-large-semibold": [
          "var(--body-body-large-semibold-size)",
          {
            lineHeight: "var(--body-body-large-semibold-line-height)",
            fontWeight: "var(--body-body-large-semibold-weight)",
          },
        ],
        "body-large-regular": [
          "var(--body-body-large-regular-size)",
          {
            lineHeight: "var(--body-body-large-regular-line-height)",
            fontWeight: "var(--body-body-large-regular-weight)",
          },
        ],
        "body-large-pominent": [
          "var(--body-body-large-pominent-size)",
          {
            lineHeight: "var(--body-body-large-pominent-line-height)",
            fontWeight: "var(--body-body-large-pominent-weight)",
          },
        ],
        "body-medium-semibold": [
          "var(--body-body-medium-semibold-size)",
          {
            lineHeight: "var(--body-body-medium-semibold-line-height)",
            fontWeight: "var(--body-body-medium-semibold-weight)",
          },
        ],
        "body-medium-regular": [
          "var(--body-body-medium-regular-size)",
          {
            lineHeight: "var(--body-body-medium-regular-line-height)",
            fontWeight: "var(--body-body-medium-regular-weight)",
          },
        ],
        "body-medium-pominent": [
          "var(--body-body-medium-pominent-size)",
          {
            lineHeight: "var(--body-body-medium-pominent-line-height)",
            fontWeight: "var(--body-body-medium-pominent-weight)",
          },
        ],
        "body-small-semibold": [
          "var(--body-body-small-semibold-size)",
          {
            lineHeight: "var(--body-body-small-semibold-line-height)",
            fontWeight: "var(--body-body-small-semibold-weight)",
          },
        ],
        "body-small-regular": [
          "var(--body-body-small-regular-size)",
          {
            lineHeight: "var(--body-body-small-regular-line-height)",
            fontWeight: "var(--body-body-small-regular-weight)",
          },
        ],
        "body-small-pominent": [
          "var(--body-body-small-pominent-size)",
          {
            lineHeight: "var(--body-body-small-pominent-line-height)",
            fontWeight: "var(--body-body-small-pominent-weight)",
          },
        ],
        "label-xl": [
          "var(--label-label-xl-size)",
          {
            lineHeight: "var(--label-label-xl-line-height)",
            fontWeight: "var(--label-label-xl-weight)",
          },
        ],
        "label-large": [
          "var(--label-label-large-size)",
          {
            lineHeight: "var(--label-label-large-line-height)",
            fontWeight: "var(--label-label-large-weight)",
          },
        ],
        "label-medium": [
          "var(--label-label-medium-size)",
          {
            lineHeight: "var(--label-label-medium-line-height)",
            fontWeight: "var(--label-label-medium-weight)",
          },
        ],
        "label-small": [
          "var(--label-label-small-size)",
          {
            lineHeight: "var(--label-label-small-line-height)",
            fontWeight: "var(--label-label-small-weight)",
          },
        ],
      },
      spacing: {
        72: "18rem",
      },
    },
  },
};
