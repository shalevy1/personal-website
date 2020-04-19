import React from 'react'
import { Link } from 'gatsby'
import logo from './../../content/assets/logo.svg'

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
            maxWidth: `130px`,
            height: `83px`,
          }}
          to=""
        >
          <img src={logo} style={{ maxWidth: `100%` }} />
        </Link>
        <div
          style={{
            borderBottomColor: `black`,
            borderBottomStyle: `solid`,
            borderBottomWidth: 4,
            width: `100%`,
            marginBottom: `59px`,
            marginTop: `18px`,
          }}
        >
          <Link className="layout-link header" to="blog">
            blog
          </Link>
          <Link className="layout-link header" to="about">
            about
          </Link>
        </div>
      </header>
    )
  }
}

export default Header
