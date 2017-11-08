import React from 'react';
import Layout from '../../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername, setAvatar } from '../../store'
import withRedux from 'next-redux-wrapper'
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../../tools/startI18n'
import { getTranslations } from '../../tools/translationHelpers'
import Head from 'next/head'
import { Tab, Menu, Icon, Header, Image, Item, List, Input } from 'semantic-ui-react'
import PersonalProfile from '../../components/settings/personalProfile'


class Settings extends React.Component {
  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};
    let cookies = null;
    if (req && req.headers) {
      console.log("Settings getInitialProps @ server");
      cookies = new Cookies(req.headers.cookie);
    }
    else {
      console.log("@@ getInitialProps @ client");
      cookies = new Cookies();
    }

    console.log("@ Settings username = " + cookies.get('nickname'));
    console.log("@ Settings avatar = " + cookies.get('avatar'));
    console.log("@ Settings token = " + cookies.get('token'));
    initProps.username = cookies.get('nickname');
    initProps.avatar = cookies.get('avatar');
    let lang = cookies.get('lang');
    if (lang === undefined) {
      initProps.lang = 'tw';
    }
    else {
      initProps.lang = lang;
    }

    store.dispatch(setUsername(initProps.username));
    store.dispatch(setAvatar(initProps.avatar));
    console.log(query.id);
    return initProps;
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(this.props.lang)
    console.log('hello Settings');
  }

  render () {

    const panes = [
      {
        menuItem: <Menu.Item key='user'><Icon name='user' />個人資料</Menu.Item>,
        render: () =>
        <Tab.Pane><PersonalProfile></PersonalProfile></Tab.Pane>
      },
      {
        menuItem: <Menu.Item key='contract'><Icon name='file text outline' />合約資訊</Menu.Item>,
        render: () => <Tab.Pane></Tab.Pane>
      },
      {
        menuItem: <Menu.Item key='payment'><Icon name='payment' />我的帳單</Menu.Item>,
        render: () => <Tab.Pane></Tab.Pane>
      },
    ]

    var greetingDivStyle = {
      //  border: '1px solid red',
        width: '90%',
        margin: '0 auto',
        marginTop: '50px',
    }
    var settingsDivStyle = {
      //  border: '1px solid red',
        width: '90%',
        margin: '0 auto',
        marginTop: '50px',
    }
    return (
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to Roomoca" lang={this.props.lang}>
        <Head>
        </Head>
        <div style={greetingDivStyle}>
        {
          /*
          <Image shape='rounded' src={this.props.avatar} size='small'/>
          <Header as='h2'>
            {' '}{this.props.username}
          </Header>
          */
        }
        <Item.Group>
        <Item>
          <Item.Image size='small' src={this.props.avatar} />
          <Item.Content verticalAlign='middle'>
            <Item.Header>您好, {this.props.username}</Item.Header>
          </Item.Content>
        </Item>
        </Item.Group>
        </div>
        <div style={settingsDivStyle}>
          <Tab menu={{ fluid: true, vertical: true, tabular: true, attached: true }} grid={{ paneWidth: 12, tabWidth: 2 }} panes={panes} />
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
export default withRedux(initStore, mapStateToProps, null)(Settings)
