import Typography from 'typography'
import sternGroveTheme from 'typography-theme-stern-grove'

sternGroveTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      color: `#c30064`,
    },
    'a:hover': {
      color: `#d61779`,
    },
  }
}

delete sternGroveTheme.googleFonts

const typography = new Typography(sternGroveTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
