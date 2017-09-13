import React from 'react';
import Router from 'next/router'
//import ReactDOM from 'react-dom';
//import './css/login.css';
//import history from './history'
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
import withRedux from 'next-redux-wrapper'
import GoogleLogin from 'react-google-login';
import jsCookie from 'js-cookie';
import Layout from '../components/layout'
import Header from '../components/header'

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

/*
class User {
    constructor(username, email, token, valid) {
        this.username = username;
        this.email = email;
        this.token = token;
        this.valid = valid;
        console.log('User instantiated(' + this.username + ', ' + this.email + ', ' + this.token + ')');
    }
}
*/

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

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    regularLogin(this.state.email, this.state.password);
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
    return (
    <Layout title='Login in'>
      <div id="login-box" className="col-6">
        <div className="left">
          <h1>Log in</h1>
          <input type="email" name="email" placeholder="E-mail" required value={this.state.email} onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" name="login_submit" value="Log in" onClick={this.handleSubmit}/>
        </div>

       <div className="right">
         <span className="loginwith">Sign in with<br />social network</span>
         <button className="social-signin facebook" onClick={this.handleFBLogin}>
         <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i> log in</button>
         <GoogleLogin clientId="161162238880-00kh7ilj9lucg6o267iq2mdo7kcvelk7.apps.googleusercontent.com"
             onSuccess={this.onGoogleSignInSuccess}
             onFailure={this.onGoogleSignInFailure}>
             <i className="fa fa-google-plus" aria-hidden="true"></i>
         </GoogleLogin>
       </div>
      <div className="or">OR</div>
    </div>
    <style jsx>{`
      @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
      *:focus {
        outline: none;
      }

      #login-box {
        position: relative;
        margin: 5% auto;
        width: 600px;
        height: 400px;
        background: #FFF;
        border-radius: 2px;
       /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); */
       /* border: 2px solid yellow; */
      }

      .left {
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 40px;
        width: 300px;
        height: 400px;
      }

      h1 {
        margin: 0 0 20px 0;
        font-weight: 300;
        font-size: 28px;
        color: #606060;
      }

      input[type="email"],
      input[type="password"] {
        display: block;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 4px;
        width: 220px;
        height: 32px;
        border: none;
        border-bottom: 1px solid #AAA;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 15px;
        transition: 0.2s ease;
      }

      input[type="email"]:focus,
      input[type="password"]:focus {
        border-bottom: 2px solid #16a085;
        color: #16a085;
        transition: 0.2s ease;
      }

      input[type="submit"] {
        margin-top: 28px;
        width: 120px;
        height: 32px;
        background: #16a085;
        border: none;
        border-radius: 2px;
        color: #FFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        transition: 0.1s ease;
        cursor: pointer;
      }

      input[type="submit"]:hover,
      input[type="submit"]:focus {
        opacity: 0.8;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: 0.1s ease;
      }

      input[type="submit"]:active {
        opacity: 1;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        transition: 0.1s ease;
      }

      .or {
        position: absolute;
        top: 180px;
        left: 280px;
        width: 40px;
        height: 40px;
        background: #DDD;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        line-height: 40px;
        text-align: center;
      }

      .right {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        padding: 40px;
        width: 300px;
        height: 400px;
       /* background: url('https://goo.gl/YbktSj'); */
        background-size: cover;
        background-position: center;
        border-radius: 0 2px 2px 0;
      }

      .right .loginwith {
        display: block;
        margin-bottom: 40px;
        font-size: 28px;
        color: #606060;
        text-align: center;
      }

      button.social-signin {
        margin-bottom: 20px;
        width: 220px;
        height: 36px;
        border: none;
        border-radius: 2px;
        color: #FFF;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        transition: 0.2s ease;
        cursor: pointer;
      }

      button.social-signin:hover,
      button.social-signin:focus {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: 0.2s ease;
      }

      button.social-signin:active {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        transition: 0.2s ease;
      }

      button.social-signin.facebook {
        background: #32508E;
      }

      button.social-signin.twitter {
        background: #55ACEE;
      }

      button.social-signin.google {
        background: #DD4B39;
      }
    `}</style>
    </Layout>
    );
  }
}

export default withRedux(initStore, null, null)(Login)
