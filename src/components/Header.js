import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link
          style={{
            display: `inline-block`,
            boxShadow: `none`,
            outline: `none`,
            width: `100%`,
            minWidth: `130px`,
            maxWidth: `130px`,
            height: `83px`,
          }}
          to="/"
        >
          <svg
            id="logo"
            data-name="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 78.67 50"
          >
            <title>logo</title>
            <path d="M35.21,32.93c0,.13,0,.27,0,.41a4.61,4.61,0,0,1-1.32,3.4,5.16,5.16,0,0,1-3.82,1.33,6.52,6.52,0,0,1-3.26-.77,5.57,5.57,0,0,1-2.07-1.95,5.74,5.74,0,0,1-.86-2.43h-4a8.21,8.21,0,0,0,1.56,4.21A9.08,9.08,0,0,0,25,40,12,12,0,0,0,30.2,41.1a10.35,10.35,0,0,0,5-1.12,7.47,7.47,0,0,0,3-2.91,7.72,7.72,0,0,0,1-3.86v-.28Z" />
            <path d="M47.83,8.9H43.35L36.48,27.09a7.37,7.37,0,0,0-1.36-.85,38,38,0,0,0-4.54-1.74,37.12,37.12,0,0,1-3.66-1.35,6.35,6.35,0,0,1-2.22-1.66,4.18,4.18,0,0,1-.89-2.76,4.18,4.18,0,0,1,1.37-3.34,5.38,5.38,0,0,1,3.65-1.19,5.67,5.67,0,0,1,4,1.33,5.55,5.55,0,0,1,1.78,3.07h4.07a8,8,0,0,0-3-5.33,10.4,10.4,0,0,0-6.85-2.09,11.31,11.31,0,0,0-4.83,1,7.3,7.3,0,0,0-3.16,2.7,7.39,7.39,0,0,0-1.1,4,7.09,7.09,0,0,0,1.19,4.28,7.62,7.62,0,0,0,2.86,2.43,38.16,38.16,0,0,0,4.46,1.72A31.86,31.86,0,0,1,32,28.67a6.85,6.85,0,0,1,2,1.42h5.42l6-17.11,9.47,26.08h4.07Z" />
          </svg>
        </Link>
        <div className="actions">
          <nav>
            <Link className="layout-link header" to="/blog">
              blog
            </Link>
            <Link className="layout-link header" to="/about">
              about
            </Link>
          </nav>
          <div>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label style={{ display: `flex` }}>
                  <input
                    style={{ opacity: 0 }}
                    type="checkbox"
                    onChange={e =>
                      toggleTheme(e.target.checked ? 'dark' : 'light')
                    }
                    checked={theme === 'dark'}
                  />{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-sun"
                    display={theme === 'dark' ? 'block' : 'none'}
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-moon"
                    display={theme === 'dark' ? 'none' : 'block'}
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </label>
              )}
            </ThemeToggler>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
