import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DataActions from '../actions/DataActions';
import DataShow from './../components/DataShow';
import '../styles/data.css'

class Data extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: 'Open Data',
      compare: '+ Compare',
      index: 0,
    }
  }
  componentDidMount() {
    this.props.DataActions.importData();
  }
  openData(datum) {
    this.props.DataActions.openData(datum, this.state.index)
  }
  getData() {
    return this.props.data.map((datum , index)=> {
      return (
        <div key={index} onClick={e=>this.openData(datum)} className="data-datum">
          <p className="data-name">{datum.boardName}</p>
          <p className="data-time">{moment(datum.date).format("MMM Do YY, h:mm a")}</p>
        </div>
      )
    })
  }
  getOpenData() {
    if (!this.props.dataShow[0]) {
      // If there's no data to show
      return (
        <div className="data-show">
          <div className="data-tab">{this.state.open}</div>
          <div className="data-article">

          </div>
        </div>
      )
    } else {
      const primaryData = {
        name: this.props.dataShow[0].boardName,
        data: JSON.parse(this.props.dataShow[0].data),
      };

      if (!this.props.dataShow[1]) {
        // If there's only one data to show
        console.log(this.props);
        return (
          <div className="data-show">
            <div
              onClick={e=>this.setState({index:0})}
              className="data-tab"
            >
              {this.props.dataShow[0].boardName}
            </div>
            <div
              onClick={e=>this.setState({index:1})}
              style={{ marginLeft:'40%', height:'33px'}}
              className="data-tab pointer"
            >
              {this.state.compare}
            </div>
            <div
              onClick={e=>this.setState({index:0})}
              style={{width: '100%'}}
              className="data-article"
            >
              <DataShow
                data={primaryData}
                close={() => {console.log('closing')}}
              />
            </div>
          </div>
        )
      } else {
        // If we're comparing two datas
        const secondaryData = {
          name: this.props.dataShow[1].boardName,
          data: JSON.parse(this.props.dataShow[1].data),
        };
        return (
          <div className="data-show">
            <div
              onClick={e=>this.setState({index:0})}
              className="data-tab"
            >
              {this.props.dataShow[0].boardName}
            </div>
            <div
              style={{marginLeft:'40%'}}
              onClick={e=>this.setState({index:1})}
              className="data-tab"
            >
              {this.props.dataShow[1].boardName}
            </div>
            <div
              onClick={e=>this.setState({index:0})}
              className="data-article"
            >
              <DataShow
                data={primaryData}
                close={() => {console.log('closing')}}
              />
            </div>
            <div
              onClick={e=>this.setState({index:1})}
              className="data-article"
            >
              <DataShow
                data={secondaryData}
                close={() => {console.log('closing')}}
              />
            </div>
          </div>
        )
      }
    }

  }
  filter(e) {
    this.props.DataActions.filterData(e.target.value);
  }
  render() {
    const { loginActions, user } = this.props;
    return (
      <div>
        <div className="data-sidebar">
          <h2 className="data-sidebar-title">Your Data</h2>
          <input onChange={e=>this.filter(e)}className="data-search" type="text" placeholder="Search..."/>
          <div className="data">
            {this.getData()}
          </div>
        </div>

        <div className="data-container">
          <div className="data-topbar"></div>
          {this.getOpenData()}
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    data: state.data,
    dataShow: state.dataShow
  };
}

function mapDispatchToProps(dispatch) {
  return {
    DataActions: bindActionCreators(DataActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Data);
