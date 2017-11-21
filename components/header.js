import React from 'react';
//import Link from 'next/link'
import jsCookie from 'js-cookie';
import { Link, Router } from "../routes";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initStore, addCount, setUsername, setAvatar, setLocale } from '../store'
import { translate } from 'react-i18next'
import Head from 'next/head'
import LoginDialog from './loginDialog'
import { Icon, Image, Dropdown } from 'semantic-ui-react'
import _ from 'lodash'
//import ReactDOM from 'react-dom';

import {
    logoutUser
} from './loginDialog'

const langOptions = [
  { key: 'TradChinese', text: '正體中文', value:1 },
  { key: 'English', text: 'English', value:2 },
]

/*
const profileOptions = [
  { key: 'account', text: '我的帳戶', value:1, icon: 'user' },
  { key: 'sign-out', text: '登出', value:2, icon: 'sign out' },
]
*/

class Header extends React.Component {

  handleToggleLogin = () => {
    this.setState({login_dialog_active: !this.state.login_dialog_active});
  }

  actions = [
    { label: "Dismiss", onClick: this.handleToggleLogin },
  //  { label: "Save", onClick: this.handleToggle }
  ];

  constructor(props, context) {
    super(props, context);
    this.t = props.t
    let lang = props.lang;
    let lang_display = '正體中文'
    if (lang === 'tw') {
      lang_display = '正體中文'
    }
    else if (lang === 'en') {
      lang_display = 'English'
    }
    else {
    }

    console.log ('header CTOR: ' + lang)

    this.state = {
      langDisplay: lang_display,
      login_dialog_active: false,
    }
  }


  // handleLogout(event) {
  handleLogout() {
      console.log ("logout");
      logoutUser();
  }

  handleLangOptionChange = (ev, data) => {
    // See https://lodash.com/docs/#find
    const option = _.find(langOptions, { value: data.value })
    console.log(option.key)
    if (option.key === 'TradChinese') {
      console.log('hello Chinese')
      jsCookie.set('lang', 'tw');
      this.setState({ langDisplay: '正體中文'})
      this.props.i18n.changeLanguage('tw');
    //  window.location.reload();
    }
    else if (option.key === 'English') {
      console.log('hello English')
      jsCookie.set('lang', 'en');
      this.setState({ langDisplay: 'English'})
      this.props.i18n.changeLanguage('en');
      //  Router.pushRoute('room_detail', {id: 13})
      // console.log (window.location.href)
      // console.log (document.location.pathname)
      // window.location.reload();
    }
    else {
    }

    // update currrent page
    Router.pushRoute(document.location.pathname)
  }

  handleProfileOptionChange = (ev, data) => {
    // See https://lodash.com/docs/#find
    /*
    const option = _.find(profileOptions, { value: data.value })
    console.log(option.key)
    if (option.key === 'sign-out')
      this.handleLogout();
    */
    if (data.value === 1) {
      console.log("我的帳戶");
      Router.pushRoute('/account')
    }
    else if (data.value === 2) {
      console.log("我的收藏");
    }
    else if (data.value === 3) {
      console.log("登出");
      this.handleLogout();
    }
  }

  render () {

    const profileOptions = [
      { key: 'account', text: this.t('account'), value:1, icon: 'user' },
      { key: 'collection', text: this.t('collection'), value:2, icon: 'like' },
      { key: 'sign-out', text: this.t('logout'), value:3, icon: 'sign out' },
    ]

    const langTrigger = (
      <span>
        <Icon name='world' size='large'/> {this.state.langDisplay}
      </span>
    )

    const profileMenuTrigger = (
      <span>
        <Image avatar src={this.props.avatar} size='mini'/>
      </span>
    )

    var localeDivStyle = {
       display: 'inline-block',
    //   border: '1px solid blue',
       width: '110px',
       float: 'right',
       marginTop: '33px',
       marginRight: '0px',
    }

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
            <Dropdown trigger={profileMenuTrigger} options={profileOptions} pointing='top right' onChange={this.handleProfileOptionChange} icon={null} />
           )
           : (
             <li className="top_menu"><a className="top_item" href='#' onClick={this.handleToggleLogin}> {this.t('login')} </a></li>
           )
         }
         </ul>
        <div style={localeDivStyle}><Dropdown trigger={langTrigger} options={langOptions} onChange={this.handleLangOptionChange}/></div>
        <LoginDialog
          actions={this.actions}
          active={this.state.login_dialog_active}
          onEscKeyDown={this.handleToggleLogin}
          onOverlayClick={this.handleToggleLogin}
        />
        <style jsx>{`
          div.header {
          //    border: 1px solid red;
              margin-right: 30px;
              fontFamily: 'Microsoft JhengHei',
          }
          ul.header {
            list-style: none;
          /*
            background-color: #FFF;
            padding: 0;
          */
          //  border: 1px solid green;
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
              font-family: 'Microsoft JhengHei', Arial, 'Helvetica Neue', Helvetica, sans-serif;
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
    avatar: state.avatar,
    count: state.count,
    locale: state.locale,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    setUsername: bindActionCreators(setUsername, dispatch),
    setAvatar: bindActionCreators(setAvatar, dispatch),
    setLocale: bindActionCreators(setLocale, dispatch),
  }
}

// export default Header
export default translate(['common'])(connect(mapStateToProps, mapDispatchToProps)(Header))
