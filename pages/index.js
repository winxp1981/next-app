import React from 'react';
import Link from 'next/link'
import Layout from '../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import {
  initStore,
  addCount,
  setUsername,
  setLocale
} from '../store'
import withRedux from 'next-redux-wrapper'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import Head from 'next/head'
import theme from '../static/theme'
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';

const cities = [
  { value: 'New-Taipei City', label: '新北市' },
  { value: 'Taipei City', label: '台北市'},
  { value: 'HsinChu City', label: '新竹市' },
];


class Index extends React.Component {

  state = { value: 'Taipei City' };

  handleChange = (value) => {
    this.setState({value: value});
  };
 /*
  constructor() {
    super();
  }
  */
  static async getInitialProps({ req , store, isServer}) {  // only support in server side if there is req in parameter
    const initProps = {};
    if (req && req.headers) {
      console.log("@@ getInitialProps @ server");
      const cookies = new Cookies(req.headers.cookie);
      console.log("@@ Header username = " + cookies.get('username'));
      console.log("@@ Header email = " + cookies.get('email'));
      console.log("@@ Header token = " + cookies.get('token'));
      initProps.username = cookies.get('username');
      console.log(req.headers['accept-language']);
  //    cookies.set('locale', lang);
    }
    else {
      console.log("@@ getInitialProps @ client");
      const cookies = new Cookies();
      console.log("@@ Header username = " + cookies.get('username'));
      initProps.username = cookies.get('username');
    }

    initProps.locale = 'tw';

    const translations = await getTranslation(
      initProps.locale,
      ['common', 'namespace1'],
      'http://localhost:3000/static/locales/'
    )
    initProps.translations = translations;

    store.dispatch(setUsername(initProps.username));
    store.dispatch(setLocale(initProps.locale));
    return initProps;
  }

  constructor (props) {
    super(props)
    this.i18n = startI18n(props.translations, props.locale)
  }

  render () {
    var cityDropdownStyle = {
        width: '100%',
    }
    var cityDropdownDivStyle = {
        width: '10%',
    }
    return (
    <I18nextProvider i18n={this.i18n}>
    <Layout title = "Welcome to InstRent">
        <div className='jumbotron'><h1>HOME</h1></div>
        <Head>
          <link href='/static/theme.css' rel='stylesheet' />
        </Head>
        <ThemeProvider theme={theme}>
        <div style={cityDropdownDivStyle}>
        <Dropdown
          auto
          onChange={this.handleChange}
          source={cities}
          value={this.state.value}
          style={cityDropdownStyle}
        />
        </div>
        </ThemeProvider>
        <div className='jumbotron'><h1>{ this.props.username }</h1></div>
    </Layout>
    </I18nextProvider>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    username: state.username,
    count: state.count,
    locale: state.locale,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    setUsername: bindActionCreators(setUsername, dispatch),
    setLocale: bindActionCreators(setLocale, dispatch),
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)

// export default Index
