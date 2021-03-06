import React from 'react'

type HeaderProps = {
  title: string;
}

export default class Header extends React.Component<HeaderProps, object> {
  render() {
    return (
      <header>
        <div className="page-title">
          <div className="container">
            <div className="topbar">
              <div className="links">
                <a href="#/contribute">
                  如何贡献
                </a>
                <a href="#/about">
                  关于
                </a>
                <a href="https://github.com/AniNet-Project">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="container title">
            <p className="sub">
              <a href="/">
                AniNet
              </a>
            </p>
            <h1>{this.props.title}</h1>
          </div>
        </div>
      </header>
    )
  }
}
