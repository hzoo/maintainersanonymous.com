import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'
import Subscribe from './Subscribe'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(3 / 4),
          paddingTop: rhythm(1 / 2),
          textAlign: 'center',
        }}
      >
        <Subscribe />
        <div>
          Hosted by <a href="https://twitter.com/left_pad">Henry Zhu</a>
        </div>
        <div>
          Cover art by <a href="https://twitter.com/Mappletons">Maggie Appleton</a>
        </div>
        <div>
          Supported by our <a href="https://github.com/babel/babel?sponsor=1">sponsors</a>
        </div>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          © All rights reserved
        </Link>
      </footer>
    )
  }
}

export default Footer
