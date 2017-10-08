import React from 'react';
import Layout from '../components/layout'
import { bindActionCreators } from 'redux'
import { initStore, addCount, setUsername } from '../store'
import withRedux from 'next-redux-wrapper'
import { translate } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'
import startI18n from '../tools/startI18n'
import { getTranslation } from '../tools/translationHelpers'
import Head from 'next/head'
import { Grid, Card, Icon, Image, Label, Dropdown, Menu, Statistic, Header} from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'


class RoomDetail extends React.Component {

  static async getInitialProps({ req, store, query }) {  // only support in server side if there is req in parameter
    const initProps = {};
    initProps.locale = 'tw';
    const translations = await getTranslation(
      initProps.locale,
      ['common', 'namespace1'],
      FRONTEND_URL+'/static/locales/'
    )
    initProps.translations = translations;

    // fetch room detail
    console.log('RoomDetail (id: ' + query.id +')');
    var response = await fetch(BACKEND_URL + '/rooms/' + query.id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
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

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, props.locale)
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
      //  border: '1px solid red',
        width: '80%',
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
    }
    return (
      <I18nextProvider i18n={this.i18n}>
      <Layout title = "Welcome to Roomoca">
      <Head>
        <link rel="stylesheet" href="../static/react-responsive-carousel/carousel.min.css"/>
      </Head>
        <div>
          <div style={gridDivStyle}>
            <Grid centered={false} relaxed={true} stackable={true}>
              <Grid.Row style={testBorder}>
                <Grid.Column style={testBorder}>
                  <Header as='h1'>{ this.props.room_detail.title }</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={testBorder}>
                <Grid.Column width={10} style={testBorder}>
                <div style={carouselDivStyle}>
                  <Carousel showStatus={true} showIndicators={true} showThumbs={false} infiniteLoop={false} autoPlay={false} dynamicHeight={true}>
                    { roomPhotos }
                  </Carousel>
                </div>
                </Grid.Column>
                <Grid.Column width={6} style={testBorder}>
                <div>
                    <div>暫時留白</div>
                    <div><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_month} label='/月' size='mini' /></div>
                    <div><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_quarter} label='/季' size='mini' /></div>
                    <div><Statistic horizontal color='red' value={'$'+this.props.room_detail.price_year} label='/年' size='mini' /></div>
                </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={testBorder}>
                <Grid.Column width={8} style={testBorder}>
                  <Header as='h3'>{ this.props.room_detail.description }</Header>
                </Grid.Column>
                <Grid.Column width={8} style={testBorder}>
                <div>
                  { this.props.room_detail.balcony ?
                    <Label content='陽台' icon='checkmark' color='green' size='large'/> :
                    <Label content='陽台' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.pet ?
                    <Label content='養寵物' icon='checkmark' color='green' size='large'/> :
                    <Label content='養寵物' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.cook ?
                    <Label content='開伙' icon='checkmark' color='green' size='large'/> :
                    <Label content='開伙' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.tv ?
                    <Label content='電視' icon='checkmark' color='green' size='large'/> :
                    <Label content='電視' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.ac ?
                    <Label content='冷氣' icon='checkmark' color='green' size='large'/> :
                    <Label content='冷氣' icon='remove' size='large'/>
                  }
                </div>
                <br />
                <div>
                  { this.props.room_detail.ref ?
                    <Label content='冰箱' icon='checkmark' color='green' size='large'/> :
                    <Label content='冰箱' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.water_hearter ?
                    <Label content='熱水器' icon='checkmark' color='green' size='large'/> :
                    <Label content='熱水器' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.natural_gas ?
                    <Label content='天然瓦斯' icon='checkmark' color='green' size='large'/> :
                    <Label content='天然瓦斯' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.cabel_tv ?
                    <Label content='第四台' icon='checkmark' color='green' size='large'/> :
                    <Label content='第四台' icon='remove' size='large'/>
                  }
                  { this.props.room_detail.network ?
                    <Label content='網路' icon='checkmark' color='green' size='large'/> :
                    <Label content='網路' icon='remove' size='large'/>
                  }
                  </div>
                  <br />
                  <div>
                    { this.props.room_detail.wash_machine ?
                      <Label content='洗衣機' icon='checkmark' color='green' size='large'/> :
                      <Label content='洗衣機' icon='remove' size='large'/>
                    }
                    { this.props.room_detail.bed ?
                      <Label content='床' icon='checkmark' color='green' size='large'/> :
                      <Label content='床' icon='remove' size='large'/>
                    }
                    { this.props.room_detail.wardrobe ?
                      <Label content='衣櫃' icon='checkmark' color='green' size='large'/> :
                      <Label content='衣櫃' icon='remove' size='large'/>
                    }
                    { this.props.room_detail.table ?
                      <Label content='桌子' icon='checkmark' color='green' size='large'/> :
                      <Label content='桌子' icon='remove' size='large'/>
                    }
                    { this.props.room_detail.sofa ?
                      <Label content='沙發' icon='checkmark' color='green' size='large'/> :
                      <Label content='沙發' icon='remove' size='large'/>
                    }
                    </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row style={testBorder}>
                <Grid.Column style={testBorder}>
                  <Header as='h4'>{ this.props.room_detail.location }</Header>
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
    count: state.count,
  }
}
// export default About
export default withRedux(initStore, mapStateToProps, null)(RoomDetail)
