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
import AddRoom from '../components/addRoom'
import { Header, Image, Item, Icon } from 'semantic-ui-react'

class RoomHost extends React.Component {
  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};
    let cookies = null;
    if (req && req.headers) {
      console.log("RoomHost getInitialProps @ server");
      cookies = new Cookies(req.headers.cookie);
    }
    else {
      console.log("@@ getInitialProps @ client");
      cookies = new Cookies();
    }

    console.log("@ RoomHost username = " + cookies.get('nickname'));
    console.log("@ RoomHost avatar = " + cookies.get('avatar'));
    console.log("@ RoomHost token = " + cookies.get('token'));
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
    return initProps;
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, props.lang)
    console.log('hello room_host');
  }

  render () {
    var headerDivStyle = {
    //  border: '1px red solid',
      width: '20%',
      margin: '0 auto',
    }
    var addRoomDivStyle = {
    //  border: '1px red solid',
      width: '80%',
      margin: '0 auto',
    }
    return (
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to Roomoca" lang={this.props.lang}>
        <div style={headerDivStyle}>
          <Header as='h1' icon >
            <Icon name='home' color='orange' size='huge' />
            <Header.Content>
              {this.i18n.t('room_host')}
            </Header.Content>
          </Header>
        </div>
        <Head>
        </Head>
        <div style={addRoomDivStyle}>
        <AddRoom></AddRoom>
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
export default withRedux(initStore, mapStateToProps, null)(RoomHost)
