import React from 'react';
import Layout from '../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
import withRedux from 'next-redux-wrapper'
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import Head from 'next/head'
import theme from '../static/theme'
import Button from 'react-toolbox/lib/button/Button'


class About extends React.Component {
  static async getInitialProps({ req, store}) {  // only support in server side if there is req in parameter
    const initProps = {};
    initProps.locale = 'tw';   // 只是初值, 會被store裡的locale override
    const translations = await getTranslation(
      initProps.locale,
      ['common', 'namespace1'],
      'http://localhost:3000/static/locales/'
    )
    initProps.translations = translations;
    return initProps;
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, props.locale)
    console.log('hello about');
  }

  render () {
    return (
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to InstRent">
        <div className='jumbotron'><h1>About us</h1></div>
        <Head>
          <link href='/static/theme.css' rel='stylesheet' />
        </Head>
        <ThemeProvider theme={theme}>
        <div>
        <Button raised primary>Hello</Button>
        </div>
        </ThemeProvider>
      </Layout>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    count: state.count,
    locale: state.locale
  }
}
// export default About
export default withRedux(initStore, mapStateToProps, null)(About)
