import React from 'react';
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername, setAvatar } from '../store'
import withRedux from 'next-redux-wrapper'
import GoogleLogin from 'react-google-login';
import jsCookie from 'js-cookie';
import { translate } from 'react-i18next'
import PropTypes from 'prop-types';
import Head from 'next/head'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from '../static/theme'
import Dialog from 'react-toolbox/lib/dialog/Dialog'
import Button from 'react-toolbox/lib/button/Button'
import Tab from 'react-toolbox/lib/tabs/Tab'
import Tabs from 'react-toolbox/lib/tabs/Tabs'
import Input from 'react-toolbox/lib/input/Input';
import ReactLoading from 'react-loading';

export function cookieSetUserProfile(pk, nickname, avatar, token) {
  jsCookie.set('userid', pk);
  jsCookie.set('nickname', nickname);
  jsCookie.set('avatar', avatar);
  jsCookie.set('token', token);
  console.log('@@ cookieSetUserProfile (' + pk + ', ' + nickname + ', ' + avatar + ', ' + token + ')');
}

export function cookieClearUserProfile() {
  jsCookie.remove('userid');
  jsCookie.remove('nickname');
  jsCookie.remove('avatar');
  jsCookie.remove('token');
  console.log('@@ cookieClearUserProfile ');
}

export function logoutUser() {
    console.log("+logoutUser");

    cookieClearUserProfile();

    var success = false;
    fetch(BACKEND_URL + '/rest-auth/logout/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    })
    .then(function checkStatus(response) {
        if (response.status === 200) {
            success = true;
        } else {
            success = false;
        }
        return response.json();
       })
     .then(function(data) {
       	//完成
       	  if (success) {
       	      console.log('logout success');
              Router.push('/');
       	      console.log(JSON.stringify(data));
       	  }
       	  else {
       	      console.log(JSON.stringify(data));
       	  }
       }).catch(function(error) {
           console.log('request failed: ', error);
       }).then(function(errorData){
          //失敗
          console.log(JSON.stringify(errorData));
       });

       console.log("-logoutUser submit");
}

async function getUserProfile(key) {
    console.log("+getUserProfile (" + key + ")");

    // retrieve pk first
    var response = await fetch(BACKEND_URL + '/rest-auth/user/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token '+ key
        },
    });

    var result = false;
    var data = await response.json();
    console.log(response.status);
    //console.log(data);
    if (response.status === 200) {
      console.log('User id = ' + data.pk);
      result = true;
    }
    else {
      result = false;
    }


    // retrieve extended user profile
    var user_id = data.pk;
    var response = await fetch(BACKEND_URL + '/user/' + user_id +'/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token '+ key
        },
    });

    data = await response.json();
    console.log(response.status);
    console.log(data);
    if (response.status === 200) {
      cookieSetUserProfile(user_id, data.profile.nick_name, data.profile.avatar_url, key)
      // redirect to home
      Router.push('/');
      result = true;
    }
    else {
      result = false;
    }

    console.log("-getUserProfile");
    return result;
}



async function regularRegister(_email, _pswd) {
  console.log("+Register (regular) submit (" + _email + ", " + _pswd +")");
  var response = await fetch(BACKEND_URL + '/rest-auth/registration/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email:_email, password1:_pswd, password2:_pswd})
  });

  var result = false;
  var data = await response.json();
  console.log(response.status);
  //console.log(data);
  if (response.status === 200 ||
      response.status === 201)   // 201: The request has been fulfilled and has resulted in one or more new resources being created.
  {
    console.log(data.key);
    result = await getUserProfile(data.key);
  }
  else {
    result = false;
  }

  console.log("-Register (regular) submit");
  return result;
}


async function regularLogin(_email, _pswd) {
  console.log("+Login (regular) submit (" + _email + ", " + _pswd +")");
  var response = await fetch(BACKEND_URL + '/rest-auth/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email:_email, password:_pswd})
  });

  var result = false;
  var data = await response.json();
  console.log(response.status);
  //console.log(data);
  if (response.status === 200)
  {
    console.log(data.key);
    result = await getUserProfile(data.key);
  }
  else {
    result = false;
  }

  console.log("-Login (regular) submit");
  return result;
}


async function facebookLogin(_access_token) {
  console.log("+Login (facebook) submit (" + _access_token + ")");
  var response = await fetch(BACKEND_URL + '/rest-auth/facebook/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access_token:_access_token})
  });

  var result = false;
  var data = await response.json();
  console.log(response.status);
  //console.log(data);
  if (response.status === 200)
  {
    console.log(data.key);
    result = await getUserProfile(data.key);
  }
  else {
    result = false;
  }

  console.log("-Login (facebook) submit");
  return result;
}


async function googleLogin(_access_token) {
  console.log("+Login (Google) submit (" + _access_token + ")");
  var response = await fetch(BACKEND_URL + '/rest-auth/google/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ access_token:_access_token})
  });

  var result = false;
  var data = await response.json();
  console.log(response.status);
  //console.log(data);
  if (response.status === 200)
  {
    console.log(data.key);
    result = await getUserProfile(data.key);
  }
  else {
    result = false;
  }

  console.log("-Login (Google) submit");
  return result;
}


class LoginDialog extends React.Component {

  state = {
    email: '',
    password: '',
    fixedIndex: 0,
    loading: false,
    fbLoading: false,
    googleLoading: false,
  };

  actions = [
    { label: "關閉", onClick: this.props.onEscKeyDown },
  ];

  constructor(props) {
    super(props);
//    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleFBLogin = this.handleFBLogin.bind(this);
    this.onGoogleSignInSuccess = this.onGoogleSignInSuccess.bind(this);
    this.t = props.t;
    console.log('LoginDialog');
  }

  componentDidMount() {
    // init facebook api
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : '962212920572860',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10'
      });
      window.FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  onGoogleSignInFailure (response) {
     console.log(response);
  }

  async onGoogleSignInSuccess(googleUser) {
      console.log('+onGoogleSignInSuccess');
      this.setState({ googleLoading: true });
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

      var id_token = googleUser.getAuthResponse().id_token;
      console.log('id token: ' + id_token);

      var access_token = googleUser.getAuthResponse().access_token;
      console.log('access token: ' + access_token);

      await googleLogin(access_token);
      this.setState({ googleLoading: false });
      this.props.onEscKeyDown();
  }

/*
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
*/

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  async handleLoginSubmit(event) {
    event.preventDefault();
    if (this.state.email.length ==0 || this.state.password.length == 0) {
      console.log('@@ invalid email or password');
      return;
    }

    this.setState({ loading: true });
    await regularLogin(this.state.email, this.state.password);
    this.setState({ loading: false });
    this.props.onEscKeyDown();
  }

  async handleSignupSubmit(event) {
    event.preventDefault();
    if (this.state.email.length ==0 || this.state.password.length == 0) {
      console.log('@@ invalid email or password');
      return;
    }
    // in log-in state, show loading icon
    this.setState({ loading: true });
    await regularRegister(this.state.email, this.state.password);
    this.setState({ loading: false });
  }

  handleFBLogin() {
      console.log('+handleFBLogin');
      let self = this
      window.FB.login(function(response) {
          if (response.authResponse) {
              console.log("Welcome, retrieving your information...");
              self.setState({ fbLoading: true });
              window.FB.api('/me', async function(response) {
                  console.log("Good to see you, " + response.name + ".");
                  console.log(response);

                  var access_token = window.FB.getAuthResponse();
                  console.log(access_token.accessToken);
                  await facebookLogin(access_token.accessToken);
                  self.setState({ fbLoading: false });
                  self.props.onEscKeyDown();
              });
          }
          else {
              console.log("User cancelled login...");
          }
      });

  }


  render () {
    var loginBtnStyle = {
      width: '100%',
      color: '#FFFFFF',
      backgroundColor: '#55AA00',
      textTransform: 'none',
    };
    var fbLoginBtnStyle = {
      width: '100%',
    //  height: '50px',
      color: '#FFFFFF',
      backgroundColor: '#3b5998',
      textTransform: 'none',
    //  verticalAlign: 'middle'
    };
    var googleLoginBtnStyle = {
      width: '100%',
      height: '38px',
      color: '#FFFFFF',
      backgroundColor: '#dd4b39',
      textTransform: 'none',
      border: 'none',
      marginTop: '5px'
    //  verticalAlign: 'middle'
    };
    var signupBtnStyle = {
      width: '100%',
      color: '#FFFFFF',
      backgroundColor: '#55AA00',
      textTransform: 'none',
    };
    var innerTabDivStyle = {
    //  border:'solid 1px blue',
      width: '80%',
      height: '80%',
      margin: '0 auto',
    };
    var normalLoginDivStyle = {
    //  border:'solid 1px red'
    };
    var socialLoginDivStyle = {
    //  border:'solid 1px blue'
    };
    var loadingIconStyle = {
    //  border:'solid 1px blue',
      width: '30px',
      height: '30px',
      margin: '0 auto',
      fill: '#FFF'
    };
    return (
    <div>
    <Head>
      <link href='/static/theme.css' rel='stylesheet' />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={theme}>
    <Dialog
      actions={this.actions}
      active={this.props.active}
      onEscKeyDown={this.props.onEscKeyDown}
      onOverlayClick={this.props.onOverlayClick}
    >
    <div style={innerTabDivStyle}>
    <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
      <Tab label={this.t('login')}>
      <div style={normalLoginDivStyle}>
        <h4>Log in with e-mail</h4>
        <Input type="email" label={this.t('email_address')} icon='mail' required value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
        <Input type="password" label={this.t('password')} icon='lock' required value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
        <Button raised primary style={loginBtnStyle} onClick={this.handleLoginSubmit} disabled={this.state.loading}>
            { this.state.loading ? <ReactLoading style={loadingIconStyle} type="spokes" delay={100} /> : this.t('login') }
        </Button>
      </div>
      <hr style={{width:'100%', border: 'solid 1px #DDDDDD'}} />
      <div style={socialLoginDivStyle}>
        <h4>Log in with social network</h4>
        <Button raised primary style={fbLoginBtnStyle} onClick={this.handleFBLogin} disabled={this.state.fbLoading}>
        { this.state.fbLoading ? <ReactLoading style={loadingIconStyle} type="spokes" delay={100} /> : this.t('login_facebook')}
          {
            // <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
          }
        </Button>
        <GoogleLogin style={googleLoginBtnStyle} clientId="161162238880-00kh7ilj9lucg6o267iq2mdo7kcvelk7.apps.googleusercontent.com"
          onSuccess={this.onGoogleSignInSuccess}
          onFailure={this.onGoogleSignInFailure}>
          { this.state.googleLoading ? <ReactLoading style={loadingIconStyle} type="spokes" delay={100} /> : this.t('login_google')}
        </GoogleLogin>
      </div>
      </Tab>
      <Tab label={this.t('signup')}>
      <section>
        { /*<input type="email" name="email" placeholder="E-mail" required value={this.state.email} onChange={this.handleChange}/> */ }
        <Input type='email' label={this.t('email_address')} icon='mail' required value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <Input type="password" label={this.t('password')} icon='lock' required value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
        <Button raised floating style={signupBtnStyle} onClick={this.handleSignupSubmit} disabled={this.state.loading}>
            { this.state.loading ? <ReactLoading style={loadingIconStyle} type="spokes" delay={100} /> : this.t('signup') }
        </Button>
      </section>
      </Tab>
    </Tabs>
    </div>
  <style jsx>{`
    @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
  `}</style>
    </Dialog>
    </ThemeProvider>
    </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    username: state.username,
    avatar: state.avatar,
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    setUsername: bindActionCreators(setUsername, dispatch),
    setAvatar: bindActionCreators(setAvatar, dispatch),
  }
}

export default translate(['common'])(connect(mapStateToProps, mapDispatchToProps)(LoginDialog))
