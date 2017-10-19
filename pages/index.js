import React from 'react'
// import Link from 'next/link'
import { Link } from "../routes"
import Layout from '../components/layout'
import Cookies from 'universal-cookie'
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
import { Grid, Card, Icon, Image, Label, Dropdown, Menu, Statistic, Loader, Header } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import ExternalLink from '../components/externalLink'  // for target='_blank'
import LazyLoad from 'react-lazyload';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroller';

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
    console.log("+retrieveRoomInfo client");
  //  const cookies = new Cookies();
    fetch(BACKEND_URL + '/rooms/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
  //        'Authorization': 'Token '+ cookies.get('token'),
        },
    }).then(res => {
      // res instanceof Response == true.
      if (res.ok) {
        res.json().then(data => {
        //  console.log(data);
          this.setState({
            room_data: data
          });
          console.log('room data retrieve complete....');

          var i;
          for (i = 0; i < data.length; i++) {
            console.log('data['+i+']:');
            console.log('data['+i+'].id: '+ data[i].id);
            console.log('data['+i+'].desc: '+ data[i].description);
            console.log('data['+i+'].room_photos: '+ data[i].room_photos.length);
            if (data[i].room_photos.length > 0) {
              var k;
              for (k = 0 ; k < data[i].room_photos.length ; k++) {
                console.log('data['+i+'].room_photos: '+ data[i].room_photos[k].photo);
              }
            }
          }

        });
      } else {
        console.log("Response wasn't perfect, status: ", res.status);
      }
    }, function(e) {
      console.log("Fetch failed!", e);
    });

    console.log("-retrieveRoomInfo client");
*/
  }


  constructor (props) {
    console.log ('+Index ctor')
    super(props);
    this.i18n = startI18n(props.translations, props.locale);

    this.state = {
      rooms: [],
      hasMoreItems: true,
      nextHref: null,

      value: 'Taipei City',
    }
    console.log ('-Index ctor')
  }

  loadRooms(page) {
    var url = BACKEND_URL + '/rooms/?limit=3'
    if(this.state.nextHref) {
        url = this.state.nextHref;
    }

    fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
  //        'Authorization': 'Token '+ cookies.get('token'),
        },
    }).then(res => {
      // res instanceof Response == true.
      if (res.ok) {
        console.log('loadRooms res OK');
        res.json().then(data => {
        console.log(data);
        var rooms = this.state.rooms;
        data.results.map((room) => {
          rooms.push(room);
        });

        if(data.next) {
            this.setState({
                rooms: rooms,
                nextHref: data.next
            });
        } else {
            this.setState({
                hasMoreItems: false,
                // being: test infinite items
                /*
                hasMoreItems: true,
                nextHref: null
                */
                // end: test infinite items
            });
        }
        /*
          var i;
          for (i = 0; i < data.length; i++) {
            console.log('data['+i+']:');
            console.log('data['+i+'].id: '+ data[i].id);
            console.log('data['+i+'].desc: '+ data[i].description);
            console.log('data['+i+'].room_photos: '+ data[i].room_photos.length);
            if (data[i].room_photos.length > 0) {
              var k;
              for (k = 0 ; k < data[i].room_photos.length ; k++) {
                console.log('data['+i+'].room_photos: '+ data[i].room_photos[k].photo);
              }
            }
          }
        */

        });
      } else {
        console.log("Response wasn't perfect, status: ", res.status);
      }
    }, function(e) {
      console.log("Fetch failed!", e);
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log('['+name+'] :' + value);
  }


  render () {
    var carouselDivStyle = {
        // https://stackoverflow.com/questions/10487292/position-absolute-but-relative-to-parent
        position: 'relative',
      //  border: '1px solid red',
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
        width: '70%',
        margin: '0 auto',
        marginTop: '50px',
    }
    var searchDivStyle = {
    //    border: '1px solid green',
        position: 'absolute',
        width: '40%',
        minWidth: '400px',
    //    height: '140px',
    //    top: '70%',
        bottom: '10px',
        left: '25%',
  //      marginLeft: '10%',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '10px',
    }
    var inputStyle = {
      //  float: 'right',
        width: '100%',
    }
    var locationDivStyle = {
       display: 'inline-block',
       border: '1px solid blue',
       width: '110px',
       height: '105px',
     //  marginLeft: '10%',
       marginTop: '0',
    }
    var inputDivStyle = {
       display: 'inline',
    //   border: '1px solid blue',
       width: '100%',
    //   height: '100%',
     //  marginLeft: '10%',
       marginTop: '0',
    }
    var roomPhotoMainDivStyle ={
      position: 'relative',
    //  border: '1px solid blue',
    }
    var roomPhotoMainTitleDivStyle ={
      position: 'absolute',
      width: '100%',
      bottom: '0px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'rgba(255, 255, 255, 0.9)',
      paddingTop: '3px',
      paddingLeft: '3px',
      paddingBottom: '3px',
    }
    // render room infos
    let roomCards = this.state.rooms.map(function(room, index) {

        return (
        <Grid.Column key={index}>
        <Card style={cardStyle}>
        <div style={roomPhotoMainDivStyle}>
        {
          (room.room_photos.length > 0) ?
            <ExternalLink route='room_detail' params={{id: room.id}} target='_blank'>
              <LazyLoad placeholder={<ReactLoading type='bars' color='#444' height={80} width={80} delay={0} />}
              height={100}><img src={room.room_photos[0].photo} width='100%' className='roomCardImg' /></LazyLoad>
            </ExternalLink> :
        //    <a href={'room/'+room.id} target='_blank'><Image src={room.room_photos[0].photo} /></a> :
            <Icon name='image' size='massive'/>
        }
           <div style={roomPhotoMainTitleDivStyle}>
             <h2>{room.title}</h2>
           </div>
          </div>
          <Card.Content>
            <Card.Header>
            </Card.Header>
            <Card.Description>
              <span>
                <Statistic color='red' value={'$'+room.price_month} label='/月' size='mini' floated='right'/>
              </span>
              {room.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button label={<Label>{parseInt(Math.random()*100)}</Label>} color='orange' icon='heart' content='' size='mini' />
          </Card.Content>
        </Card>
        <style jsx>{`
          img.roomCardImg {
          	opacity: 1;
          	-webkit-transition: .3s ease-in-out;
          	transition: .3s ease-in-out;
          }
          img.roomCardImg:hover {
        	  opacity: .8;
          }
  `}</style>
        </Grid.Column>
      );

    });

    return (
    <I18nextProvider i18n={this.i18n}>
    <Layout title = "Welcome to Roomoca">
        <Head>
          <link rel="stylesheet" href="../static/react-responsive-carousel/carousel.min.css"/>
       </Head>
        <div>
          <div style={carouselDivStyle}>
          <div>
            <img src="../static/img/ChAFD1muV8uAIP0DAAbtGK7EYFw715.jpg" width='100%'/>
          </div>
          {
            /*
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
            */
          }
            <div style={searchDivStyle}>
            {
              /*
              <div style={locationDivStyle}>
                <Dropdown placeholder='不限地區' size='large' fluid selection options={search_location} onChange={this.handleChange}/>
              </div>
              */
            }
              <div style={inputDivStyle}>
                <Input style={inputStyle} size='large' type='text' placeholder='搜尋好房屋' name='search' onChange={this.handleInputChange} action>
                  <input />
                  <Button type='submit' color='orange'><Icon name='search' /> Search</Button>
                </Input>
              </div>
            </div>
        </div>
        <div style={gridDivStyle}>
          <InfiniteScroll
           pageStart={0}
           loadMore={this.loadRooms.bind(this)}
           hasMore={this.state.hasMoreItems}
           loader={<ReactLoading type='spinningBubbles' color='#99BBFF' height={64} width={64} delay={0} />}
           threshold={-50} >
             <Grid centered={false} columns={3} relaxed={true} stackable={true}>
               { roomCards }
             </Grid>
          </InfiniteScroll>
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
