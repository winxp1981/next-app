import React from 'react';
import Link from 'next/link'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initStore, addCount, setUsername } from '../store'
//import ReactDOM from 'react-dom';
/*
import {
    Button,
} from 'reactstrap';

import {
    Link,
} from 'react-router-dom'
*/
import {
    logoutUser
} from '../pages/login'
//import { FormattedMessage } from 'react-intl';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    //console.log('@@ Header ctor isUserLoggedIn (' + Header.isUserLoggedIn + ')');
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

    // check CurrentUser is not null (conditional rendering)
    /*
    if (process.browser) {
      const cookies = new Cookies();
      currentUserName = cookies.get('username');
      if (currentUserName) {
          isUserLoggedIn = true;
          console.log('current user: ' + currentUserName);
      }
    } else {
      // server side
      // TODO: how to get server cookies?
         currentUserName = 'morris';
         isUserLoggedIn = true;
    }
    */

    if (this.props.username) {
        // note: can only return "one" root element in a variable
        loginDisplay =
            <li className="dropdown top_menu">
                <a className="dropdown-toggle top_item" data-toggle="dropdown" href="#">
                    <span className="glyphicon glyphicon-user"></span>
                    { ' ' + this.props.username }
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
                </ul>
            </li>;
    }
    else {
        loginDisplay = <li className="top_menu"><Link href='/login'><a className="top_item"> Login </a></Link></li>;
    }

    return (
    <div className='header'>
        <img src="../static/img/react.png" width="80" height="80" alt="" />
        <ul className='header'>
        { /* user Link to avoid trigger server render */ }
        <li className="top_menu"><Link href='/about'><a className="top_item">
         {
         // <FormattedMessage id='about' description='' defaultMessage='About'/>
         }
         About
         </a></Link></li>
         <li className="top_menu"><Link href='/stuff'><a className="top_item">
         {
         // <FormattedMessage id='stuff' description='' defaultMessage='Stuff'/>
         }
         Search
         </a></Link></li>
             { loginDisplay }
        </ul>
        <style global jsx>{`
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
export default connect(mapStateToProps, mapDispatchToProps)(Header)
