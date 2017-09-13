import React from 'react';
import Link from 'next/link'
import Layout from '../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
import withRedux from 'next-redux-wrapper'

class Index extends React.Component {
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
    }
    else {
      console.log("@@ getInitialProps @ client");
      const cookies = new Cookies();
      console.log("@@ Header username = " + cookies.get('username'));
      initProps.username = cookies.get('username');
    }

    store.dispatch(setUsername(initProps.username));
    return initProps;
  }

  render () {
    return (
    <Layout title = "Welcome to InstRent">
        <div className='jumbotron'><h1>HOME</h1></div>
        <div className='jumbotron'><h1>{ this.props.username }</h1></div>
        <div className='jumbotron'><h1>{ this.props.count }</h1></div>
    </Layout>
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

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)

// export default Index
