import React from 'react';
//import Link from 'next/link'
import { Link } from "../routes";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initStore, addCount, setUsername } from '../store'
import { translate } from 'react-i18next'
import Head from 'next/head'
import { Segment, Divider, List } from 'semantic-ui-react'


class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
    //console.log('@@ Header ctor isUserLoggedIn (' + Header.isUserLoggedIn + ')');
    this.t = props.t
  }

  handleLogout(event) {
      console.log ("logout");
      logoutUser();
  }

  render () {
    var footerDivStyle = {
    //    border: '1px solid red',
        width: '70%',
        height: '200px',
    //    height: '100px',
    //    backgroundColor: '#FFBB66',
        paddingTop: '40px',
        margin: '0 auto',
    }
    var dividerStyle = {
    //    border: '1px solid red',
        width: '100%',
        height: '3px',
        backgroundColor: '#DCDCDC',
    }
    return (
      <div style={footerDivStyle}>
      <Divider style={dividerStyle}/>
        <List horizontal>
          <List.Item><Link route='about' params={{id: '888'}}><a className="">關於我們</a></Link></List.Item>
          <List.Item>聯繫我們</List.Item>
          <List.Item>工作機會</List.Item>
          <List.Item>服務條款</List.Item>
          <List.Item>問與答</List.Item>
        </List>
        <List horizontal floated='right'>
          <List.Item>
            2018 InstRent. All Rights Reserved.
          </List.Item>
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

// export default Header
export default translate(['common'])(connect(null, null)(Footer))
