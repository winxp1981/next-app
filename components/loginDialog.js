import React from 'react';
import Router from 'next/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
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


// var backend_address = 'http://localhost:8000';
var backend_address = 'http://ec2-54-254-207-247.ap-southeast-1.compute.amazonaws.com:8000';


export function setUserCookie(username, email, token, valid) {
  jsCookie.set('username', username);
  jsCookie.set('email', email);
  jsCookie.set('token', token);
  jsCookie.set('valid', valid);
  console.log('@@ setUserCookie ('+ username + ', ' + email + ', ' + token + ', ' + valid + ')');
}

export function clearUserCookie() {
  jsCookie.remove('username');
  jsCookie.remove('email');
  jsCookie.remove('token');
  jsCookie.remove('valid');
  console.log('@@ clearUserCookie ');
}

export function logoutUser() {
    console.log("+logoutUser");

    clearUserCookie();

    var success = false;
    fetch(backend_address + '/rest-auth/logout/', {
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

function getUserProfile(key) {
    console.log("+getUserProfile (" + key + ")");

    var success = false;
    fetch(backend_address + '/rest-auth/user/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token '+ key
        },
    })
    .then(function checkStatus(response) {
        if (response.status === 200) {
            success = true;
        } else {
            success = false;
        }
        return response.json();
    /*
           if (response.status >= 200 && response.status < 300) {
               return response.json();
           } else {
               return response.json();
           }
    */
       })
       .then(function(data) {
       	//完成
       	  if (success) {
       	      console.log('getUserProfile success, username: '+ data.username);
              setUserCookie (data.username, data.email, key, true);
              //Header.isUserLoggedIn = true;
              // redirect to home
              Router.push('/');
       	      //history.push("/");  // go to root page
       	 //     var user_get = JSON.parse(sessionStorage.getItem('CurrentUser'));
       	 //     console.log("@@ email: " + user_get.email);
       	 //     console.log("@@ isloggedIn: " + user_get.valid);
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

       console.log("-getUserProfile submit");
};

function regularRegister(_email, _pswd) {
  console.log("+Register (regular) submit (" + _email + ", " + _pswd +")");
}

function regularLogin(_email, _pswd) {
    console.log("+Login (regular) submit (" + _email + ", " + _pswd +")");

    // clear the current user in session storage
    // sessionStorage.removeItem("CurrentUser");
    //console.log("@@@@ "+ sessionStorage.getItem('CurrentUser'));

    var token_acquired = false;
    fetch(backend_address + '/rest-auth/login/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email:_email, password:_pswd})
    })
    .then(function checkStatus(response) {
        if (response.status === 200) {
            token_acquired = true;
        } else {
            token_acquired = false;
        }
        return response.json();
       })
     .then(function(data) {
       	//完成
       	  if (token_acquired) {
       	      console.log('login success, key: '+ data.key);
       	      getUserProfile(data.key);
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

       console.log("-Login (regular) submit");
};


function facebookLogin(_access_token) {
    console.log("+Login (facebook) submit (" + _access_token + ")");

    // clear the current user in session storage
    clearUserCookie();

    var token_acquired = false;
    fetch(backend_address + '/rest-auth/facebook/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ access_token:_access_token})
    })
    .then(function checkStatus(response) {
        if (response.status === 200) {
            token_acquired = true;
        } else {
            token_acquired = false;
        }
        return response.json();
       })
     .then(function(data) {
       	//完成
       	  if (token_acquired) {
       	      console.log('login success, key: '+ data.key);
       	      getUserProfile(data.key);
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

       console.log("-Login (facebook)");
};

function googleLogin(_access_token) {
    console.log("+Login (Google) submit (" + _access_token + ")");

    // clear the current user in session storage
    clearUserCookie();

    var token_acquired = false;
    fetch(backend_address + '/rest-auth/google/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ access_token:_access_token})
    })
    .then(function checkStatus(response) {
        if (response.status === 200) {
            token_acquired = true;
        } else {
            token_acquired = false;
        }
        return response.json();
       })
     .then(function(data) {
       	//完成
       	  if (token_acquired) {
       	      console.log('login success, key: '+ data.key);
       	      getUserProfile(data.key);
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

       console.log("-Login (Google)");
};

class LoginDialog extends React.Component {

  state = {
    email: '',
    password: '',
    fixedIndex: 0,
  };

  constructor(props) {
    super(props);
//    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.t = props.t
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

  onGoogleSignInSuccess(googleUser) {
      console.log('+onGoogleSignInSuccess');
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

      var id_token = googleUser.getAuthResponse().id_token;
      console.log('id token: ' + id_token);

      var access_token = googleUser.getAuthResponse().access_token;
      console.log('access token: ' + access_token);

      googleLogin(access_token);
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

  handleLoginSubmit(event) {
    event.preventDefault();
    if (this.state.email.length ==0 || this.state.password.length == 0) {
      console.log('@@ invalid email or password');
      return;
    }
    regularLogin(this.state.email, this.state.password);
  }

  handleSignupSubmit(event) {
    event.preventDefault();
    if (this.state.email.length ==0 || this.state.password.length == 0) {
      console.log('@@ invalid email or password');
      return;
    }
    regularRegister(this.state.email, this.state.password);
  }

  handleFBLogin() {
      console.log('+handleFBLogin');
      window.FB.login(function(response) {
          if (response.authResponse) {
              console.log("Welcome, retrieving your information...");
              window.FB.api('/me', function(response) {
                  console.log("Good to see you, " + response.name + ".");
                  console.log(response);

                  var access_token = window.FB.getAuthResponse();
                  console.log(access_token.accessToken);
                  facebookLogin(access_token.accessToken);
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
    var normalLoginDivStyle = {
    //  border:'solid 1px red'
    };
    var socialLoginDivStyle = {
    //  border:'solid 1px blue'
    };

    return (
    <div>
    <Head>
      <link href='/static/theme.css' rel='stylesheet' />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={theme}>
    <Dialog
      actions={this.props.actions}
      active={this.props.active}
      onEscKeyDown={this.props.onEscKeyDown}
      onOverlayClick={this.props.onOverlayClick}
    >
    <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
      <Tab label={this.t('login')}>
      <div style={normalLoginDivStyle}>
        <h4>Log in with e-mail</h4>
        <Input type="email" label='Email address' icon='mail' required value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
        <Input type="password" label="Password" icon='lock' required value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
        <Button raised primary style={loginBtnStyle}  onClick={this.handleLoginSubmit}>Login</Button>
      </div>
      <hr style={{width:'100%', border: 'solid 1px #DDDDDD'}} />
      <div style={socialLoginDivStyle}>
        <h4>Log in with social network</h4>
        <Button raised primary style={fbLoginBtnStyle} onClick={this.handleFBLogin}>
          {
            // <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
          }
          {' Login with facebook'}
        </Button>
        <GoogleLogin style={googleLoginBtnStyle} clientId="161162238880-00kh7ilj9lucg6o267iq2mdo7kcvelk7.apps.googleusercontent.com"
          onSuccess={this.onGoogleSignInSuccess}
          onFailure={this.onGoogleSignInFailure}>
          {
           // <i className="fa fa-google-plus" aria-hidden="true"></i>{' Login with Google'}
          }
        </GoogleLogin>
      </div>
      </Tab>
      <Tab label={this.t('signup')}>
      <section>
        { /*<input type="email" name="email" placeholder="E-mail" required value={this.state.email} onChange={this.handleChange}/> */ }
        <Input type='email' label='Email address' icon='mail' required value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
        <Input type="password" label="Password" icon='lock' required value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
        <Button raised floating style={signupBtnStyle} onClick={this.handleSignupSubmit}>Sign Up</Button>
      </section>
      </Tab>
    </Tabs>

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
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    setUsername: bindActionCreators(setUsername, dispatch),
  }
}

export default translate(['common'])(connect(mapStateToProps, mapDispatchToProps)(LoginDialog))
