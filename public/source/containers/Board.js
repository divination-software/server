import React, { Component } from 'react';
import Loading from '../components/Loading';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }
  handleLoad() {
    console.log('supppp');
    this.setState({loading: false});
  }
  render() {
    if (this.state.loading === true) {
      return (<div>
        <Loading />
        <iframe style={{display: 'none'}} className='board' onLoad={e => this.handleLoad()} src="/www/index.html"></iframe>
        </div>
      )
    }
    return (<iframe className='board' onLoad={e => this.handleLoad()} src="/www/index.html"></iframe>)
  }
}
