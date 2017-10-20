import React from 'react';
//import Link from 'next/link'
import { Link } from "../routes";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initStore, addCount, setUsername } from '../store'
import { translate } from 'react-i18next'
import Head from 'next/head'
import LoginDialog from './loginDialog'
//import ReactDOM from 'react-dom';

import {
    logoutUser
} from './loginDialog'

class Header extends React.Component {
  state = {
    login_dialog_active: false
  };

  handleToggleLogin = () => {
    this.setState({login_dialog_active: !this.state.login_dialog_active});
  }

  actions = [
    { label: "Dismiss", onClick: this.handleToggleLogin },
  //  { label: "Save", onClick: this.handleToggle }
  ];

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
    // var loginMsg = <FormattedMessage id='login' description='' defaultMessage='Login'/>
    var currentUserName = null;
    var loginDisplay = '';
    var isUserLoggedIn = false;

    return (
    <div className='header'>
        <img src="../static/img/react.png" width="80" height="80" alt="" />
        <ul className='header'>
        { /* user Link to avoid trigger server render */ }
         {
         <li className="top_menu"><Link route='/host'><a className="top_item">
         {this.t('roomhost')}
         </a></Link></li>
         }
         {
         <li className="top_menu"><Link route='/'><a className="top_item">
         {this.t('tenant')}
         </a></Link></li>
         }
         {
         <li className="top_menu"><Link route='/'><a className="top_item">
         {this.t('download_app')}
         </a></Link></li>
         }
         {
           this.props.username ? (
                   <li className="dropdown top_menu">
                       <a className="dropdown-toggle top_item" data-toggle="dropdown" href="#">
                           <span className="glyphicon glyphicon-user"></span>
                           { ' ' + this.props.username }
                       </a>
                       <ul className="dropdown-menu">
                         <li><a href="#">Profile</a></li>
                         <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
                       </ul>
                   </li>
           )
           : (
             //  loginDisplay = <li className="top_menu"><Link href='/login'><a className="top_item"> {this.t('login')} </a></Link></li>;
             //  loginDisplay = <li className="top_menu"><Button label={this.t('login')} onClick={this.handleToggle} /></li>;
             <li className="top_menu"><a className="top_item" href='#' onClick={this.handleToggleLogin}> {this.t('login')} </a></li>
           )
         }
        </ul>
        <LoginDialog
          actions={this.actions}
          active={this.state.login_dialog_active}
          onEscKeyDown={this.handleToggleLogin}
          onOverlayClick={this.handleToggleLogin}
        />
        <style jsx>{`
          div.header {
          /*    border: 1px solid red;  */
              margin-right: 30px;
          }
          ul.header {
            list-style: none;
          /*
            background-color: #FFF;
            padding: 0;
            border: 1px solid green;
          */
            float: right;
          }
          ul.header li.top_menu {
              display: inline-block;
              padding: 20px 0 20px;
              vertical-align: middle;
          /*    border: 1px solid red;  */
          }

          ul.header li.top_menu a.top_item:hover,
          ul.header li.top_menu a.top_item:focus,
          ul.header li.top_menu a.top_item:active {
              color: #999;
              text-decoration: none;
          }
          ul.header li.top_menu a.top_item {
              font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
              text-decoration: none;
              position: relative;
              display: block;
              padding: 16px 0;
              margin: 0 12px;
              letter-spacing: 1px;
              font-size: 12px;
              line-height: 16px;
              font-weight: 900;
              text-transform: uppercase;
              transition: color 0.1s,background-color 0.1s,padding 0.2s ease-in;
              color: #000;
          }
          ul.header li.top_menu a.top_item::before {
              content: '';
              display: block;
              position: absolute;
              bottom: 3px;
              left: 0;
              height: 3px;
              width: 100%;
              background-color: #000;
              transform-origin: left top;
              transform: scale(0, 1);
              transition: color 0.1s,transform 0.1s ease-out;
          }
          ul.header li.top_menu a.top_item:active::before {
              background-color: #000;
          }
          ul.header li.top_menu a.top_item:hover::before, a.top_item:focus::before {
              transform-origin: left top;
              transform: scale(1, 1);
          }

          ul.dropdown-menu {
              margin-top: -30px;
              margin-left: 5px;
              min-width: 0px;
          /*    border: 1px solid green; */
          }
`}</style>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    setUsername: bindActionCreators(setUsername, dispatch),
  }
}

// export default Header
export default translate(['common'])(connect(mapStateToProps, mapDispatchToProps)(Header))
