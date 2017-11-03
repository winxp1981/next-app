import React from 'react';
//import Link from 'next/link'
import jsCookie from 'js-cookie';
import { Link, Router } from "../../routes";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initStore, addCount, setUsername, setAvatar, setLocale } from '../../store'
import { translate } from 'react-i18next'
import Head from 'next/head'
import LoginDialog from '../loginDialog'
import { Input, Label, Button } from 'semantic-ui-react'
import _ from 'lodash'
//import ReactDOM from 'react-dom';


class PersonalProfile extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.t = props.t

    if (process.browser) {
      this.userid = jsCookie.get('userid')
      this.token = jsCookie.get('token')
      console.log("@ PProfile userid = " + this.userid);
      console.log("@ PProfile username = " + jsCookie.get('nickname'));
      console.log("@ PProfile avatar = " + jsCookie.get('avatar'));
      console.log("@ PersonalProfile token = " + this.token);

      let lang = jsCookie.get('lang');
      let lang_display = '正體中文'
      if (lang === 'tw') {
        lang_display = '正體中文'
      }
      else if (lang === 'en') {
        lang_display = 'English'
      }
      else {
      }
      console.log ('PProfile CTOR: ' + lang)
    }

    this.state = {
      nick_name: '',
      email: '',
      mobile_no: '',
      birth_date: '',
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name === 'email')
      return;

    this.setState({
      [name]: value
    });
    console.log('['+name+'] :' + value);
  }

  handleSaveProfile = async () => {
    console.log('+handleSaveProfile');
    // print state for debugging
    if (this.state.nick_name.length === 0) {
      console.log('使用者名稱不可為空');
      return;
    }

    // retrieve user profile
    console.log('PersonalProfile (id: ' + this.userid +')');
    var response = await fetch(BACKEND_URL + '/user/' + this.userid +'/edit_profile/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token '+ this.token
        },
        body: JSON.stringify({ nick_name:this.state.nick_name, mobile_no:this.state.mobile_no, birth_date:this.state.birth_date})
    });

    console.log(response.status);
    if (response.status === 200) {
      console.log('儲存成功');
    }
    else {
      console.log('儲存失敗');
    }

    console.log('-handleSaveProfile');
  }

  async componentWillMount() {
    if (!process.browser)
      return;

    console.log('PProfile componentWillMount');

    // retrieve user profile
    console.log('PersonalProfile (id: ' + this.userid +')');
    var response = await fetch(BACKEND_URL + '/user/' + this.userid +'/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token '+ this.token
        },
    });

    var data = await response.json();
    console.log(response.status);
    console.log(data);
    if (response.status === 200) {

      this.setState(
        {
          nick_name: data.profile.nick_name,
          email: data.email,
          mobile_no: data.profile.mobile_no,
          birth_date: data.profile.birth_date
        }
      )
    }
    else {
    }
  }

  render () {
    var mainDivStyle = {
       width: '100%',
    //   border: '1px solid blue',
       marginTop: '10px',
       marginRight: '0px',
    }
    var fieldDivStyle = {
       width: '100%',
    //   border: '1px solid blue',
       marginTop: '10px',
       marginLeft: '10px',
       marginRight: '0px',
    }
    var saveBtnDivStyle = {
       width: '100%',
    //   border: '1px solid blue',
       marginTop: '10px',
       marginLeft: '10px',
       marginRight: '0px',
    }
    return (
    <div style={mainDivStyle}>
      <div style={fieldDivStyle}><Input label={{ basic: true, content: '姓名' }} value={this.state.nick_name} name='nick_name' onChange={this.handleInputChange}/></div>
      <div style={fieldDivStyle}><Input label={{ basic: true, content: '信箱' }} value={this.state.email} name='email' onChange={this.handleInputChange}/></div>
      <div style={fieldDivStyle}><Input label={{ basic: true, content: '手機號碼' }} value={this.state.mobile_no} name='mobile_no' onChange={this.handleInputChange}/></div>
      <div style={fieldDivStyle}><Input label={{ basic: true, content: '生日' }} value={this.state.birth_date} name='birth_date' onChange={this.handleInputChange}/></div>
      <div style={saveBtnDivStyle}><Button primary size='small' onClick={this.handleSaveProfile}>儲存</Button></div>
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

export default translate(['common'])(connect(mapStateToProps, mapDispatchToProps)(PersonalProfile))
