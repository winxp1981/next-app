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
import AddRoom from '../components/addRoom'
import { Header, Image, Item, Icon } from 'semantic-ui-react'


class RoomHost extends React.Component {
  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};
    initProps.locale = 'tw';
    const translations = await getTranslation(
      initProps.locale,
      ['common', 'namespace1'],
      FRONTEND_URL+'/static/locales/'
    )
    initProps.translations = translations;
    return initProps;
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, props.locale)
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
      <Layout title = "Welcome to Roomoca">
        <div style={headerDivStyle}>
          <Header as='h1' icon >
            <Icon name='home' color='orange' size='huge' />
            <Header.Content>
              房東專區
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
    count: state.count,
  }
}
// export default About
export default withRedux(initStore, mapStateToProps, null)(RoomHost)
