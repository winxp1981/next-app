import React from 'react';
import Layout from '../components/layout'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
import withRedux from 'next-redux-wrapper'

class About extends React.Component {
  static async getInitialProps({ req, store}) {  // only support in server side if there is req in parameter
  const initProps = {};
  if (req && req.headers) {
    const cookies = new Cookies(req.headers.cookie);
    initProps.username = cookies.get('username');
  }
  else {
    const cookies = new Cookies();
    initProps.username = cookies.get('username');
  }

  store.dispatch(setUsername(initProps.username));
  return initProps;
}

  render () {
    return (
      <Layout title = "Welcome to InstRent">
        <div className='jumbotron'><h1>About us</h1></div>
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
// export default About
export default withRedux(initStore, null, null)(About)
