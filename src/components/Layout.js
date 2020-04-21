import React, { Fragment } from 'react'

import { rhythm } from '../utils/typography'
import Header from './Header'
import Footer from './Footer'
import './layout.css'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)

    this.state = { darkMode: false }
  }

  // This method will be sent to the child component
  handler() {
    this.setState({
      darkMode: !this.state.darkMode,
    })
    this.state.darkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  }

  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Header darkMode={this.state.darkMode} action={this.handler} />
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
