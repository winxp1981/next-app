import React from 'react';
import Layout from '../../components/layout'
import { bindActionCreators } from 'redux'
// import { initStore, addCount, setUsername } from '../store'
import withRedux from 'next-redux-wrapper'
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../../tools/startI18n'
import { getTranslation } from '../../tools/translationHelpers'
import Head from 'next/head'

async function sendVerifyEmail(_key) {
  console.log("+sendVerifyEmail");

  var response = await fetch(BACKEND_URL + '/rest-auth/registration/verify-email/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key:_key })
  });

  var result = false;
  var data = await response.json();
  console.log(data);
  if (data.detail === 'ok') {
    result = true;
  }

  console.log("-sendVerifyEmail result="+result);
  return result;
}

class Verify extends React.Component {
  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};

    console.log(query.key);
    initProps.account_verified_success = await sendVerifyEmail(query.key);
  //  console.log(initProps.account_verified_success);
    return initProps;
  }

  constructor(props) {
    super(props);
    console.log('hello verify');
  }

  render () {
    return (
      <I18nextProvider i18n={this.i18n}>
      <div>
        <div className='jumbotron'><h1>{ this.props.account_verified_success===true ? 'Account confirmation success' : 'Account confirmation failure'} </h1></div>
        <Head>
          <link href='/static/theme.css' rel='stylesheet' />
        </Head>
      </div>
      </I18nextProvider>
    );
  }
}

/*
const mapStateToProps = (state) => {
  return {
    username: state.username,
    count: state.count,
  }
}
*/
export default Verify
//export default withRedux(initStore, mapStateToProps, null)(About)
