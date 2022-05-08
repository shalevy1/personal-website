import React, { Fragment } from 'react'

import { rhythm } from '../utils/typography'
import Header from './Header'
import Footer from './Footer'
import './layout.css'
import { Helmet } from 'react-helmet'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Helmet>
          <script defer data-domain="sarahabd.com" src="https://plausible.io/js/plausible.js"></script>
        </Helmet>
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
