import React, { Component } from 'react';
import Decision from './docsComponents/Decision';
import Exit from './docsComponents/Exit';
import GettingStarted from './docsComponents/GettingStarted';
import Modify from './docsComponents/Modify';
import Process from './docsComponents/Process';
import Resource from './docsComponents/Resource';
import Source from './docsComponents/Source';
import '../styles/docs.css'

export default class Docs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'gettingStarted'
    }
    this.articles = {
      gettingStarted: (<GettingStarted/>),
      source: (<Source/>),
      process: (<Process/>),
      resource: (<Resource/>),
      decision: (<Decision/>),
      modify: (<Modify/>),
      exit: (<Exit/>),
    }
  }
  getArticle() {
    return this.articles[this.state.activePage]
  }
  setActive(page) {
    this.setState({activePage: page});
  }
  render() {
    return (
      <div className="docs-container">
        <div className="docs-nav">
          <ul className="docs-nav-ul">
            <li className="docs-nav-title"><strong>DOCS</strong></li>
            <li onClick={e => this.setActive('gettingStarted')} className="docs-nav-li">Getting Started</li>
            <li onClick={e => this.setActive('source')} className="docs-nav-li">Source</li>
            <li onClick={e => this.setActive('process')} className="docs-nav-li">Process</li>
            <li onClick={e => this.setActive('resource')} className="docs-nav-li">Resource</li>
            <li onClick={e => this.setActive('decision')} className="docs-nav-li">Decision</li>
            <li onClick={e => this.setActive('modify')} className="docs-nav-li">Modify</li>
            <li onClick={e => this.setActive('exit')} className="docs-nav-li">Exit</li>
          </ul>
        </div>
        <div className="docs-article">
          {this.getArticle()}
        </div>
      </div>
    );
  }
}
