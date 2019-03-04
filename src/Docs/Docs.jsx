import React, { Component } from 'react';
import SideBarView from './SideBar';
import Index from './Index'
import GettingStarted from './GettingStarted';
import FooterView from './Containers/FooterView';

export default class Docs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      path: 'index'
    }
  }
  setPath = (path) => {
    this.setState({ path })
  }
  render() {
    const { path } = this.state
    switch (path) {
      case 'index':
        return <DocsWrapper setPath={this.setPath}>
          <Index />
        </DocsWrapper>
      case 'started':
        return <DocsWrapper setPath={this.setPath}>
          <GettingStarted />
        </DocsWrapper>
      case 'footer':
        return <DocsWrapper setPath={this.setPath}>
          <FooterView />
        </DocsWrapper>
      default:
        return <DocsWrapper setPath={this.setPath}>
          <Index />
        </DocsWrapper>
    }

  }
}

const DocsWrapper = ({ setPath, children }) => {
  return (
    <div className="container-fluid" id="main" style={{ marginTop: '25px', marginBottom: '35px' }}>
      <div className="row row-offcanvas row-offcanvas-left">
        <SideBarView setPath={setPath} />
        <div className="col main pt-3 mt-3">
          {children}
        </div>
      </div>
    </div>
  )
}