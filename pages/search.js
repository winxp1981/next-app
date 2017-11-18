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
import ExternalLink from '../components/externalLink'
import { Divider, Menu, Icon, Transition, List, Image,
       Dimmer, Loader, Segment, Header, Grid, Container, Label, Statistic
} from 'semantic-ui-react'

const ITEMS_PER_PAGE = 10;
const PAGES_IN_A_ROW = 10;

class Search extends React.Component {

  handleSpanClick = (ev) => {
    console.log("handleSpanClick: " + ev.target.id);
  }

  handleLocation = (ev) => {
    console.log("handleLocation: " + ev.target.id);
    this.setState({location: ev.target.id});
  }

  handleRoomCount = (ev) => {
    console.log("handleRoomCount: " + ev.target.id);
    this.setState({room_count: ev.target.id});
  }

  handleBuildingType = (ev) => {
    console.log("handleBuildingType: " + ev.target.id);
    this.setState({building_type: ev.target.id});
  }

  handlePrice = (ev) => {
    console.log("handlePrice: " + ev.target.id);
    this.setState({price: ev.target.id});
  }

  handleArea = (ev) => {
    console.log("handleArea: " + ev.target.id);
    this.setState({area: ev.target.id});
  }

  handlePageItemClick = async (e, { name }) => {
    console.log("handlePageItemClick: " + name);
    var _page = parseInt(name);
    if (this.state.active_page === _page) {
      // click on the same page, do nothing
     return;
    }
    this.setState({ active_page: _page })

    await this.queryRooms(ITEMS_PER_PAGE, (_page-1)*ITEMS_PER_PAGE);
  }

  handlePageItemNavigation = async (e, { name }) => {
    console.log("handlePageItemClick: " + name);
    console.log("starting page= " + this.state.pages[0])
    console.log("ending page= " + this.state.pages[this.state.pages.length-1])

    if (name === 'prev') {
      if ((this.state.starting_page-1) > 0) {
        // there is previous page
        var _new_starting_page = this.state.starting_page - PAGES_IN_A_ROW;
        console.log(_new_starting_page)
        this.setState({
            starting_page: _new_starting_page
        });
        var _target_page = _new_starting_page+PAGES_IN_A_ROW-1;
        this.setState({ active_page: _target_page })
        await this.queryRooms(ITEMS_PER_PAGE, (_target_page-1)*ITEMS_PER_PAGE);
      }
    }
    else if (name === 'next') {
      if ((this.state.starting_page+PAGES_IN_A_ROW) <= this.state.total_pages) {
        var _new_starting_page = this.state.starting_page + PAGES_IN_A_ROW;
        console.log(_new_starting_page)
        this.setState({
            starting_page: _new_starting_page
        });
        this.setState({ active_page: _new_starting_page })
        await this.queryRooms(ITEMS_PER_PAGE, (_new_starting_page-1)*ITEMS_PER_PAGE);
      }
    }
  }

  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};
    let cookies = null;
    if (req && req.headers) {
      console.log("Search getInitialProps @ server");
      cookies = new Cookies(req.headers.cookie);
    }
    else {
      console.log("Search getInitialProps @ client");
      cookies = new Cookies();
    }

    console.log("@ Search username = " + cookies.get('nickname'));
    console.log("@ Search avatar = " + cookies.get('avatar'));
    console.log("@ Search token = " + cookies.get('token'));
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
    console.log(query.keyword);
    return initProps;
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(this.props.lang);

    this.handleSpanClick = this.handleSpanClick.bind(this);

    this.state = {
      location: 'any',
      room_count: 'any',
      building_type: 'any',
      price: 'any',
      area: 'any',

      active_page: 1,

      rooms: [],
      total_rooms: 0,

      pages: [],
      starting_page: 1,
      ending_page: 1,
      total_pages: 0,
      page_loading: false,
    }
  }

  queryRooms = async (limit, offset) => {

    this.setState({
        page_loading: true,
    });

    var queryUrl = '/rooms/?limit='+limit+'&offset=' + offset
    var response = await fetch(BACKEND_URL + queryUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    });

    var data = await response.json();
    console.log(response.status);
    console.log(data);
    if (response.status === 200) {
      // console.log(data.count);
      this.setState({
          total_rooms: data.count,
      });
      var rooms = [];
      data.results.map((room) => {
        rooms.push(room);
      });
      this.setState({
          rooms: rooms,
      });

      var _total_pages = Math.floor(this.state.total_rooms/limit);
      var _reminder = this.state.total_rooms % limit;
      if (_reminder > 0) {
        _total_pages++;
      }

      console.log (_total_pages)
      this.setState({
          total_pages: _total_pages,
      });

      var i;
      var _pages = [];
      var _pages_in_this_row = PAGES_IN_A_ROW;
      if ((this.state.starting_page+PAGES_IN_A_ROW-1) > this.state.total_pages) {
        _pages_in_this_row = this.state.total_pages % PAGES_IN_A_ROW;
      }
      for (i=this.state.starting_page ; i <= (this.state.starting_page+_pages_in_this_row-1) ; i++)
      {
        _pages.push(i)
      }
      this.setState({
          pages: _pages,
          page_loading: false,
      });
/*
      this.setState({
          total_rooms: data.count,
      });
*/
      /*
      var i = 0
      for (i=0 ; i < this.state.rooms.length ; i++)
      {
        console.log (this.state.rooms[i].title)
      }
      */
    }
    else {
    }
  }

  async componentWillMount() {

    this.setState({
        page_loading: true,
    });

    if (!process.browser) {
      console.log("componentWillMount @server")
      return;
    }
    else {
      console.log("componentWillMount @client")
      this.setState({ active_page: 1 })
      await this.queryRooms(ITEMS_PER_PAGE, 0);
    }
  }

  render () {
    var containerDivStyle = {
    //  border: '1px solid green',
      width: '90%',
      margin: '0 auto',
    }
    // filter control
    var filterOptionHeaderSpanStyle = {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      fontWeight: 'bold',
      fontSize: '120%',
    }
    var filterOptionSpanStyle = {
    //  backgroundColor: '#FFFFFF',
      cursor: 'pointer',
      marginLeft: '10px',
      fontSize: '110%',
      color: '#000000',
      cursor: 'pointer',
      borderRadius: '5px',
      marginLeft: '10px',
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '5px',
      paddingRight: '5px',
    }
    var filterOptionSpanSelectedStyle = {
      backgroundColor: '#FF8800',
      fontSize: '110%',
      color: '#FFFFFF',
      borderRadius: '5px',
      marginLeft: '10px',
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '5px',
      paddingRight: '5px',
    }
    var dividerDivStyle = {
    //  border: '1px solid red',
      width: '100%',
      marginTop: '3px',
      marginBottom: '3px',
    }
    var searchFilterDivStyle = {
    //  border: '1px solid grey',
      width: '60%',
    //  margin: '0 auto',
      marginTop: '50px',
      marginLeft: '10%',
    }
    // room list
    var roomListDivStyle = {
    //  border: '2px solid orange',
      width: '60%',
    //  margin: '0 auto',
      minWidth: '600px',
      marginTop: '100px',
      marginLeft: '10%',
    }
    // pagination
    var paginationDivStyle = {
  //    border: '1px solid blue',
      width: '50%',
      margin: '0 auto',
      marginTop: '50px',
      minWidth: '460xpx',
    }
    var menuDivStyle = {
    //  border: '1px solid red',
      margin: '0 auto',
    }
    var itemStyle = {
  //    backgroundColor: 'white',
  //    color: '#C0C0C0',
      width: '40px',
      height: '36px',
      border: '1px solid #D3D3D3',
      marginLeft: '6px',
      paddingLeft: '11px',
      fontWeight: 'bold',
      fontSize: '120%',
    }
    var itemActiveStyle = {
      backgroundColor: '#FF8800',
      color: 'white',
      width: '40px',
      height: '36px',
      border: '1px solid #D3D3D3',
      marginLeft: '6px',
      paddingLeft: '10px',
      fontWeight: 'bold',
      fontSize: '120%',
    }

    // render room infos
    let roomList = this.state.rooms.map(function(room, index) {
      let _layout = room.layout.split("/");
      return (
        <Grid.Row key={index}>
          <Grid.Column width={4}>
            <ExternalLink route='room_detail' params={{id: room.id}} target='_blank'>
              <Image src={room.room_thumb.photo} width='300px'/>
            </ExternalLink>
          </Grid.Column>
          <Grid.Column width={9}>
            <ExternalLink route='room_detail' params={{id: room.id}} target='_blank'>
              <Header size='large'>{room.title}</Header>
            </ExternalLink>
            <Header size='medium' color='grey'>
              <Label basic size='large' color='orange'>{room.room_type}</Label>
              <Label basic size='large' color='orange'>{room.area}坪</Label>
              <Label basic size='large' color='orange'>{_layout[0]}房{_layout[1]}廳{_layout[2]}衛</Label>
              <Label basic size='large' color='orange'>樓層: {room.floor}</Label>
            </Header>
            <Header size='small' color='grey'>{room.location}</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Statistic horizontal size='tiny' color='orange'>
              <Statistic.Value>{room.price_month}</Statistic.Value>
              <Statistic.Label>/月</Statistic.Label>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      );
    });

    let pageMenuItemList = this.state.pages.map(function(page, index) {
      return (
        <Menu.Item key={index} name={page.toString()} style={this.state.active_page === page ? itemActiveStyle : itemStyle} active={this.state.active_page === page} onClick={this.handlePageItemClick} />
      );
    }.bind(this));

    return (
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to Roomoca" lang={this.props.lang}>
        <Head>
        </Head>
        <div style={containerDivStyle}>
        <div style={searchFilterDivStyle}>
          <span style={filterOptionHeaderSpanStyle}>地區</span>
          <span style={(this.state.location === 'any') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleLocation} id='any'>不限</span>
          <span style={(this.state.location === 'taipei') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleLocation} id='taipei'>台北市</span>
          <span style={(this.state.location === 'new_taipei') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleLocation} id='new_taipei'>新北市</span>
            <div style={dividerDivStyle}><Divider fitted /></div>
          <span style={filterOptionHeaderSpanStyle}>類型</span>
          <span style={(this.state.building_type === 'any') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleBuildingType} id='any'>不限</span>
          <span style={(this.state.building_type === 'evelator') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleBuildingType} id='evelator'>電梯大樓</span>
          <span style={(this.state.building_type === 'apartment') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleBuildingType} id='apartment'>公寓</span>
          <span style={(this.state.building_type === 'standalone') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleBuildingType} id='standalone'>透天厝</span>
          <span style={(this.state.building_type === 'villa') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleBuildingType} id='villa'>別墅</span>
            <div style={dividerDivStyle}><Divider fitted /></div>
          <span style={filterOptionHeaderSpanStyle}>房間</span>
          <span style={(this.state.room_count === 'any') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleRoomCount} id='any'>不限</span>
          <span style={(this.state.room_count === 'one') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleRoomCount} id='one'>1 房</span>
          <span style={(this.state.room_count === 'two') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleRoomCount} id='two'>2 房</span>
          <span style={(this.state.room_count === 'three') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleRoomCount} id='three'>3 房</span>
          <span style={(this.state.room_count === 'four') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleRoomCount} id='four'>4 房</span>
          <span style={(this.state.room_count === 'five') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleRoomCount} id='five'>5 房以上</span>
            <div style={dividerDivStyle}><Divider fitted /></div>
          <span style={filterOptionHeaderSpanStyle}>租金</span>
          <span style={(this.state.price === 'any') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handlePrice} id='any'>不限</span>
          <span style={(this.state.price === '_1W') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handlePrice} id='_1W'>10000 元以下</span>
          <span style={(this.state.price === '1W_2W') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handlePrice} id='1W_2W'>10000-20000 元</span>
          <span style={(this.state.price === '2W_3W') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handlePrice} id='2W_3W'>20000-30000 元</span>
          <span style={(this.state.price === '3W_4W') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handlePrice} id='3W_4W'>30000-40000 元</span>
          <span style={(this.state.price === '4W') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handlePrice} id='4W'>40000 元以上</span>
            <div style={dividerDivStyle}><Divider fitted /></div>
          <span style={filterOptionHeaderSpanStyle}>坪數</span>
          <span style={(this.state.area === 'any') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleArea} id='any'>不限</span>
          <span style={(this.state.area === '_10P') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleArea} id='_10P'>10 坪以下</span>
          <span style={(this.state.area === '10P_20P') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleArea} id='10P_20P'>10-20 坪</span>
          <span style={(this.state.area === '20P_30P') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleArea} id='20P_30P'>20-30 坪</span>
          <span style={(this.state.area === '30P_40P') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleArea} id='30P_40P'>30-40 坪</span>
          <span style={(this.state.area === '40P_50P') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleArea} id='40P_50P'>40-50 坪</span>
          <span style={(this.state.area === '50P') ? filterOptionSpanSelectedStyle: filterOptionSpanStyle} onClick={this.handleArea} id='50P'>50 坪以上</span>
          <style jsx>{`
            span:hover {
                color: #EE7700;
            }
    `}</style>
        </div>
        <div style={roomListDivStyle}>
        <Dimmer.Dimmable as={Container} blurring dimmed={this.state.page_loading}>
        <Dimmer active={this.state.page_loading} inverted>
        <Loader active size='huge'/>
        </Dimmer>
          <Grid divided='vertically'>
            {
              roomList
            }
          </Grid>
        </Dimmer.Dimmable>
        </div>
        <div style={paginationDivStyle}>
          <Menu style={menuDivStyle} text>
            <Menu.Item name='prev' style={itemStyle} active={false} onClick={this.handlePageItemNavigation}>
              <Icon name='chevron left' />
            </Menu.Item>
              {
                pageMenuItemList
              }
            <Menu.Item name='next' style={itemStyle} active={false} onClick={this.handlePageItemNavigation}>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
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
    avatar: state.avatar,
    count: state.count,
  }
}
// export default About
export default withRedux(initStore, mapStateToProps, null)(Search)
