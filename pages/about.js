import React from 'react';
import Layout from '../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername, setAvatar } from '../store'
import withRedux from 'next-redux-wrapper'
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslations } from '../tools/translationHelpers'
import Head from 'next/head'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: '關於Roomoca', render: () => <Tab.Pane attached={false}>.</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>..</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>...</Tab.Pane> },
]

class About extends React.Component {
  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};
    let cookies = null;
    if (req && req.headers) {
      console.log("About getInitialProps @ server");
      cookies = new Cookies(req.headers.cookie);
    }
    else {
      console.log("@@ getInitialProps @ client");
      cookies = new Cookies();
    }

    console.log("@ About username = " + cookies.get('nickname'));
    console.log("@ About avatar = " + cookies.get('avatar'));
    console.log("@ About token = " + cookies.get('token'));
    initProps.username = cookies.get('nickname');
    initProps.avatar = cookies.get('avatar');
    let lang = cookies.get('lang');
    if (lang === undefined) {
      initProps.lang = 'tw';
    }
    else {
      initProps.lang = lang;
    }

    const translations = await getTranslations(
      '',
      ['common', 'namespace1'],
      FRONTEND_URL+'/static/locales/'
    )
    initProps.translations = translations;
    // console.log (translations)

    store.dispatch(setUsername(initProps.username));
    store.dispatch(setAvatar(initProps.avatar));
    console.log(query.id);
    return initProps;
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, props.lang)
    console.log('hello about');
  }

  render () {
    const panes = [
      { menuItem: '關於 Roomoca', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
      { menuItem: 'Test 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Test 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]
    var aboutDivStyle = {
      //  border: '1px solid red',
        width: '70%',
        margin: '0 auto',
        marginTop: '50px',
    }
    return (
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to Roomoca" lang={this.props.lang}>
        <Head>
        </Head>
        {
        // <div className='jumbotron'><h1>About param: {this.props.url.query.id}</h1></div>
        }
        <div style={aboutDivStyle}>
          <Tab panes={panes} defaultActiveIndex={0} />
        </div>
      </Layout>
      </I18nextProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    avatar: state.avatar,
    count: state.count,
  }
}
// export default About
export default withRedux(initStore, mapStateToProps, null)(About)
