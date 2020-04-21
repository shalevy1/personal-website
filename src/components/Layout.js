import React, { Fragment } from 'react'

import { rhythm } from '../utils/typography'
import Header from './Header'
import Footer from './Footer'
import './layout.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Header />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
