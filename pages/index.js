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
import Head from 'next/head'
import { Input, Button } from 'semantic-ui-react'
import { Grid, Card, Icon, Image, Label, Dropdown, Menu } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel';



const search_location = [
  { key: 1, text: '不限地區', value: 1 },
  { key: 2, text: '台北市', value: 2 },
  { key: 3, text: '新北市', value: 3 },
  { key: 4, text: '新竹市', value: 4 },
]

class Index extends React.Component {

  handleChange = (ev, data) => {
    //this.setState({value: value});
    this.setState({value: data.value});
    console.log(data.value);
  };

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
      FRONTEND_URL+'/static/locales/'
    )
    initProps.translations = translations;

    store.dispatch(setUsername(initProps.username));
    store.dispatch(setLocale(initProps.locale));

/*
    console.log("+retrieveRoomInfo");
    var response = await fetch(BACKEND_URL + '/roominfo/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    });

    var result = false;
    var data = await response.json();
    console.log(response.status);
    //console.log(data);
    if (response.status === 200) {
      var i;
      for (i = 0; i < data.length; i++) {
        console.log('data['+i+'].url: '+ data[i].url);
        console.log('data['+i+'].desc: '+ data[i].description);
        console.log('data['+i+'].photo: '+ data[i].photo);
      }
      initProps.room_data = data;
      result = true;
    }
    else {
      result = false;
    }

    console.log("-retrieveRoomInfo");
*/

    if (isServer) {
    }
    return initProps;
  }

  async fetchRoomDataSSR() {
    console.log("+fetchRoomDataSSR");
    var response = await fetch(BACKEND_URL + '/roominfo/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    });

    var result = false;
    var data = await response.json();
    console.log(response.status);
    //console.log(data);
    if (response.status === 200) {
      var i;
      for (i = 0; i < data.length; i++) {
        console.log('data['+i+'].url: '+ data[i].url);
        console.log('data['+i+'].desc: '+ data[i].description);
        console.log('data['+i+'].photo: '+ data[i].photo);
      }
    }
    else {
      data = [];
    }
    console.log("-fetchRoomDataSSR");
    return data;
  }

  async componentWillMount() {
    if (!process.browser) { // server
      console.log('Index componentWillMount on server');
    }
  }

  componentWillUnmount() {
    console.log('@@ componentWillUnmount');
  }

  async componentDidMount() {
    console.log('Index componentDidMount (client only)');
  /*
    var data = await this.fetchRoomDataSSR();

    this.setState({
      room_data: data
    });
  */

    console.log("+retrieveRoomInfo client");
    fetch(BACKEND_URL + '/roominfo/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    }).then(res => {
      // res instanceof Response == true.
      if (res.ok) {
        res.json().then(data => {
          this.setState({
            room_data: data
          });
          console.log('room data retrieve complete....');
        /*
          var i;
          for (i = 0; i < data.length; i++) {
            console.log('data['+i+']:');
            console.log('data['+i+'].url: '+ data[i].url);
            console.log('data['+i+'].desc: '+ data[i].description);
            console.log('data['+i+'].photo: '+ data[i].photo);
          }
        */
        });
      } else {
        console.log("Response wasn't perfect, status: ", res.status);
      }
    }, function(e) {
      console.log("Fetch failed!", e);
    });

    console.log("-retrieveRoomInfo client");
  }


  constructor (props) {
    console.log ('+Index ctor')
    super(props);
    this.i18n = startI18n(props.translations, props.locale);

    this.state = {
      room_data: [],
      offset: 0,
      value: 'Taipei City',
    }
    console.log ('-Index ctor')
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('['+name+'] :' + value);
  }


  render () {
    var searchDivStyle = {
    //    border: '1px solid green',
        position: 'absolute',
        width: '50%',
        height: '80px',
    //    top: '70%',
        bottom: '10px',
        left: '25%',
  //      marginLeft: '10%',
        paddingTop: '20px',
        paddingLeft: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '10px',
    }
    var inputStyle = {
      //  float: 'right',
        width: '70%',
    }
    var carouselDivStyle = {
        // https://stackoverflow.com/questions/10487292/position-absolute-but-relative-to-parent
        position: 'relative',
    //    border: '1px solid red',
    }
    var cardStyle = {
//        border: '1px solid blue',
  //      float: 'left',
        width: '100%',
  //      height: '100%',
        marginTop: '0',
        marginLeft: '0',
    }
    var gridDivStyle = {
//        border: '1px solid red',
        width: '80%',
        margin: '0 auto',
        marginTop: '50px',
    }
    var priceStyle = {
//        border: '1px solid red',
        color: '#666666',
  //      fontWeight: 'bold',
    }
    var dropDownStyle = {
    //   border: '1px solid yellow',
       width: '20px',
    //   height: '5px',
     //  marginLeft: '10%',
       marginTop: '0',
    }
    // render room infos
    let roomCards = this.state.room_data.map(function(room, index) {

        return (
        <Grid.Column key={index}>
        <Card style={cardStyle}>
          <Image src={ room.photo } />
          <Card.Content>
            <Card.Header>
              {room.description}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
              {
              //  租金: <Label color='orange'>10000/月</Label>
              }
                租金:<strong style={priceStyle}>  10000/月</strong>
              </span>
            </Card.Meta>
            <Card.Description>
              {
                //room.url
              }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              99 讚
            </a>
          </Card.Content>
        </Card>
        </Grid.Column>
      );

    });

    return (
    <I18nextProvider i18n={this.i18n}>
    <Layout title = "Welcome to InstRent">
        {
        //   <div className='jumbotron'><h1>HOME</h1></div>
        }
        <Head>
          <link rel="stylesheet" href="../static/react-responsive-carousel/carousel.min.css"/>
        </Head>
        <div>
          <div style={carouselDivStyle}>
            <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
              <div>
                  <img src="../static/img/ChAFD1muV8uAIP0DAAbtGK7EYFw715.jpg" />
              </div>
              <div>
                  <img src="../static/img/ChAFfVl--myAAxB2AAL5Ptj5lbA233.jpg" />
              </div>
              <div>
                  <img src="../static/img/ChAFfVlnG6GAVWDeAARBpjqMJy8753.jpg" />
              </div>
              <div>
                  <img src="../static/img/ChAFD1m5DSOAOcrUAANztihPK14300.jpg" />
              </div>
            </Carousel>
            <div style={searchDivStyle}>
              <Dropdown style={dropDownStyle} placeholder='不限地區' search selection options={search_location} onChange={this.handleChange}/>
              <Input style={inputStyle} size='medium' type='text' placeholder='搜尋好房屋' name='search' onChange={this.handleInputChange} action>
                <input />
                <Button type='submit' color='orange'><Icon name='search' /> Search</Button>
              </Input>
            </div>
        </div>
        <div style={gridDivStyle}>
          <Grid centered={false} columns={3} relaxed={true} stackable={true}>
          {roomCards}
          </Grid>
        </div>
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
