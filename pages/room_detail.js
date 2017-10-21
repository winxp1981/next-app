import React from 'react';
import Layout from '../components/layout'
import jsCookie from 'js-cookie';
import Cookies from 'universal-cookie'
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername, setLocale} from '../store'
import withRedux from 'next-redux-wrapper'
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import Head from 'next/head'
import { Grid, Card, Icon, Image, Label, Dropdown, Menu, Statistic, Header, List, Divider, Segment, Button, Table, Popup } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import RoomMap from '../components/roomMap'

const popup_timeout = 1000

class RoomDetail extends React.Component {

  static async getInitialProps({ req, store, query, isServer }) {  // only support in server side if there is req in parameter
    const initProps = {};
    initProps.locale = 'tw';
    const translations = await getTranslation(
      initProps.locale,
      ['common', 'namespace1'],
      FRONTEND_URL+'/static/locales/'
    )
    initProps.translations = translations;

    if (isServer) {
      console.log("RoomDetail getInitialProps isSserver: "+ isServer);
      const cookies = new Cookies(req.headers.cookie);
      console.log("@@ cookies username = " + cookies.get('username'));
      console.log("@@ cookies email = " + cookies.get('email'));
      console.log("@@ cookies token = " + cookies.get('token'));
      initProps.username = cookies.get('username');
      initProps.token = cookies.get('token')
      if (initProps.token === undefined) {
        initProps.loggedIn = false;
      } else {
        initProps.loggedIn = true;
      }

      store.dispatch(setUsername(initProps.username));
      store.dispatch(setLocale(initProps.locale));
    }

    initProps.room_id = query.id;
    // fetch room detail
    console.log('RoomDetail (id: ' + query.id +')');
    var response = await fetch(BACKEND_URL + '/rooms/' + query.id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': (initProps.loggedIn ? 'Token '+ initProps.token : ''),
        },
    });

    var data = await response.json();
    console.log(response.status);
    //console.log(data);
    if (response.status === 200) {
      console.log('title: '+ data.title);
      console.log('description: '+ data.description);
      console.log('location: '+ data.location);
      initProps.room_detail = data;
    }
    else {
    }

    return initProps;
  }

  // handle favorite (like/dislike) for current user
  async likeThisRoom(isLike) {
      console.log("+likeThisRoom (" + isLike + ")");
      var response = await fetch(BACKEND_URL + '/rooms/' + this.props.room_id + (isLike ? '/like/' : '/dislike/'), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': (this.props.loggedIn ? 'Token '+ this.props.token : ''),
          },
      });

      var result = false;
      console.log(response.status);
      //console.log(data);
      if (response.status === 200) {
        console.log('OK');
        result = true;
      }
      else {
        result = false;
      }

      console.log("-likeThisRoom");
      return result;
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, props.locale)
    console.log('CTOR')
    this.state = {
      openPopup: false,
      popUpMsg: '請先登入',
      isUserLike: this.props.room_detail.is_user_like,
    }
  }

  handleOpen = async() => {
    if (this.props.loggedIn) {
      console.log('已登入....')

      await this.likeThisRoom(!this.state.isUserLike)

      this.setState({ isUserLike: !this.state.isUserLike })

      if (this.state.isUserLike) {
        this.setState({ openPopup: true, popUpMsg: '已加入收藏'})
      }
      else {
        this.setState({ openPopup: true, popUpMsg: '已取消收藏'})
      }

      this.timeout = setTimeout(() => {
        this.setState({ openPopup: false })
      }, popup_timeout)
    }
    else {
      console.log('請先登入');
      this.setState({ openPopup: true, popUpMsg: '請先登入'})

      this.timeout = setTimeout(() => {
        this.setState({ openPopup: false })
      }, popup_timeout)
    }
  }

  handleClose = () => {
    console.log('on close')
    this.setState({ openPopup: false })

    clearTimeout(this.timeout)
  }

  render () {
    let roomPhotos = this.props.room_detail.room_photos.map(function(room_photos, index) {

        return (
          <div key={index}>
            <img src={room_photos.photo} />
          </div>
      );

    });

    var gridDivStyle = {
    //    border: '1px solid red',
        width: '75%',
        margin: '0 auto',
        marginTop: '100px',
    }
    var carouselDivStyle = {
        // https://stackoverflow.com/questions/10487292/position-absolute-but-relative-to-parent
    //    position: 'relative',
        width: '100%',
      //  height: '300px',
      //  border: '1px solid green',
        marginTop: '0px',
    }
    var testBorder = {
    //    border: '1px solid blue',
    //    position: 'relative',
    }
    var attrDivStyle = {
    //  border: '1px solid red',
    //  backgroundColor: 'rgba(240, 240, 240, 1)',
    }
    var attrLabelColor = 'orange'

    var btnDivStyle = {
  //    border: '1px solid red',
        marginTop: '50px',
    //  backgroundColor: 'rgba(240, 240, 240, 1)',
    //  position: 'absolute',
    //  bottom: '50px',
    }
    let likeButton = this.state.isUserLike ?
        <Button circular icon='heart' size='large' color='pink' /> : <Button circular icon='empty heart' size='large' />
    return (
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to Roomoca">
      <Head>
        <link rel="stylesheet" href="../static/react-responsive-carousel/carousel.min.css"/>
        <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBNKKAhKocKWQ43dc6NT3fCyaLPTdxmAX0" type="text/javascript"></script>
      </Head>
        <div>
          <div style={gridDivStyle}>
            <Grid centered={false} relaxed={true} stackable={true}>
              <Grid.Row style={testBorder}>
                <Grid.Column width={10} style={testBorder}>
                  <Header as='h1'>{ this.props.room_detail.title }</Header>
                </Grid.Column>
                <Grid.Column width={6} style={testBorder}>
                {
                //  <Button circular icon='empty heart' size='large' color='pink'/>
                }
                  <Popup
                    trigger={likeButton}
                    content={this.state.popUpMsg}
                    on='click'
                    open={this.state.openPopup}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    position='top right'
                    inverted
                  />
                  <Button circular icon='facebook f' size='large' color='blue'/>
                  <Button circular icon='wechat' size='large' color='green'/>
                  <Button circular icon='twitter' size='large' color='teal'/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={testBorder}>
                <Grid.Column width={10} style={testBorder}>
                <div style={carouselDivStyle}>
                  <Carousel showStatus={true} showIndicators={true} showThumbs={true} infiniteLoop={false} autoPlay={false} dynamicHeight={true}>
                    { roomPhotos }
                  </Carousel>
                </div>
                </Grid.Column>
                <Grid.Column width={6} style={testBorder}>
                <div>
                  <List divided>
                    <List.Item>
                      <Label color='orange' horizontal size='large'>坪數</Label>
                      {this.props.room_detail.area}
                    </List.Item>
                    <List.Item>
                      <Label color='orange' horizontal size='large'>格局</Label>
                      {this.props.room_detail.layout}
                    </List.Item>
                    <List.Item>
                      <Label color='orange' horizontal size='large'>樓層</Label>
                      {this.props.room_detail.floor}
                    </List.Item>
                    <List.Item>
                      <Label color='orange' horizontal size='large'>屋齡</Label>
                      {this.props.room_detail.age}
                    </List.Item>
                    <List.Item>
                      <Label color='orange' horizontal size='large'>類型</Label>
                      {this.props.room_detail.building_type}
                    </List.Item>
                    <List.Item>
                      <Label color='orange' horizontal size='large'>房型</Label>
                      {this.props.room_detail.room_type}
                    </List.Item>
                    <List.Item>
                      <Label color='orange' horizontal size='large'>車位</Label>
                      {this.props.room_detail.parking ? '有':'無'}
                    </List.Item>
                  </List>
                </div>
                <Divider />
                <div>
                {
                  /*
                    <div><Header as='h2' disabled>租金</Header>
                      <div><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} label='/月' size='mini' /></div>
                      <div><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_quarter} label='/季' size='mini' /></div>
                      <div><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_year} label='/年' size='mini' /></div>
                    </div>
                  */
                }
                <Table size='large' unstackable color='orange'>
                  <Table.Header>
                    <Table.Row textAlign='center'>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell>租金</Table.HeaderCell>
                      <Table.HeaderCell>押金</Table.HeaderCell>
                      <Table.HeaderCell>服務費</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row textAlign='center'>
                      <Table.Cell>月繳</Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} label='/月' size='mini'/></Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} size='mini'/></Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} label='/年' size='mini'/></Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign='center'>
                      <Table.Cell>季繳</Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+(this.props.room_detail.price_quarter/3).toFixed(0)} label='/月' size='mini' /></Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} size='mini'/></Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} label='/年' size='mini'/></Table.Cell>
                    </Table.Row>
                    <Table.Row textAlign='center'>
                      <Table.Cell>年繳</Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+(this.props.room_detail.price_year/12).toFixed(0)} label='/月' size='mini' /></Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} size='mini'/></Table.Cell>
                      <Table.Cell><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} label='/年' size='mini'/></Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                </div>
                <div style={btnDivStyle}>
                  <Button color='brown' size='huge'>我要看房</Button>
                  <Button color='green' size='huge'>我要租</Button>
                </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={testBorder}>
                <Grid.Column width={8} style={testBorder}>
                <Segment color='yellow'>
                  <Header as='h3'>{ this.props.room_detail.description }</Header>
                </Segment>
                </Grid.Column>
                <Grid.Column width={8} style={testBorder}>
                <Segment color='yellow'>
                <div style={attrDivStyle}>
                  <div>
                  { this.props.room_detail.balcony ?
                    <Label content='陽台' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='陽台' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.pet ?
                    <Label content='養寵物' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='養寵物' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.cook ?
                    <Label content='開伙' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='開伙' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.tv ?
                    <Label content='電視' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='電視' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.ac ?
                    <Label content='冷氣' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='冷氣' icon='remove' size='medium' circular={true}/>
                  }
                </div>
                <br />
                <div>
                  { this.props.room_detail.ref ?
                    <Label content='冰箱' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='冰箱' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.water_hearter ?
                    <Label content='熱水器' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='熱水器' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.natural_gas ?
                    <Label content='天然瓦斯' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='天然瓦斯' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.cabel_tv ?
                    <Label content='第四台' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='第四台' icon='remove' size='medium' circular={true}/>
                  }
                  { this.props.room_detail.network ?
                    <Label content='網路' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                    <Label content='網路' icon='remove' size='medium' circular={true}/>
                  }
                  </div>
                  <br />
                  <div>
                    { this.props.room_detail.wash_machine ?
                      <Label content='洗衣機' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                      <Label content='洗衣機' icon='remove' size='medium' circular={true}/>
                    }
                    { this.props.room_detail.bed ?
                      <Label content='床' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                      <Label content='床' icon='remove' size='medium' circular={true}/>
                    }
                    { this.props.room_detail.wardrobe ?
                      <Label content='衣櫃' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                      <Label content='衣櫃' icon='remove' size='medium' circular={true}/>
                    }
                    { this.props.room_detail.table ?
                      <Label content='桌子' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                      <Label content='桌子' icon='remove' size='medium' circular={true}/>
                    }
                    { this.props.room_detail.sofa ?
                      <Label content='沙發' icon='checkmark' color={attrLabelColor} size='medium' circular={true}/> :
                      <Label content='沙發' icon='remove' size='medium' circular={true}/>
                    }
                    </div>
                  </div>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={testBorder}>
                <Grid.Column style={testBorder}>
                  <Header as='h2' disabled >{ this.props.room_detail.location }</Header>
                  <RoomMap width='720px' height='350px' address={ this.props.room_detail.location } />
                </Grid.Column>
              </Grid.Row>
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
// export default About
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(RoomDetail)
