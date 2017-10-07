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
import Head from 'next/head'


class About extends React.Component {
  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};
    initProps.locale = 'tw';
    const translations = await getTranslation(
      initProps.locale,
      ['common', 'namespace1'],
      FRONTEND_URL+'/static/locales/'
    )
    initProps.translations = translations;
    console.log(query.id);
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
        <div className='jumbotron'><h1>{this.props.url.query.id}</h1></div>
        <Head>
        </Head>
        <div>

        </div>
      </Layout>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    count: state.count,
  }
}
// export default About
export default withRedux(initStore, mapStateToProps, null)(About)
