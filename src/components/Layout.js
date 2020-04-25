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
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
