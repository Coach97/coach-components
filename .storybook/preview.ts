import type { Decorator, Preview } from "@storybook/react";
import '../src/index.css';
import { withThemeByDataAttribute } from "@storybook/addon-styling";

const allThemes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro",
  "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe",
  "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
]

export const decorators: Decorator[] = [
  // temporary type checking fix until sb 7.1 is stable and addon-styling is updated (currently using alpha preview of sb7.1)
  // @ts-ignore
  withThemeByDataAttribute({
    themes: Object.fromEntries(allThemes.map(v => ([v, v]))),
    defaultTheme: 'dark',
    attributeName: 'data-theme',
  }),
];

const preview: Preview = {
  parameters: {
    backgrounds: false,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
        select: /^iconName$/,
      },
    },
  },
};

export default preview;
