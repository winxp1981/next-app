import React from 'react';
//import Link from 'next/link'
import jsCookie from 'js-cookie';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import Head from 'next/head'
// https://react-dropzone.js.org/
import Dropzone from 'react-dropzone'
import {
  Button, Icon, Progress, List, Input, TextArea, Label,
  Item, Divider, Dropdown, Checkbox, Message
} from 'semantic-ui-react'
import _ from 'lodash'

const building_type = [
  { key: 1, text: '電梯大樓', value: 1 },
  { key: 2, text: '公寓', value: 2 },
  { key: 3, text: '透天', value: 3 },
  { key: 4, text: '別墅', value: 4 },
]

const room_type = [
  { key: 1, text: '獨立套房', value: 1 },
  { key: 2, text: '分租套房', value: 2 },
  { key: 3, text: '雅房', value: 3 },
  { key: 4, text: '整層住家', value: 4 },
]

class AddRoom extends React.Component {
  onDrop(files) {
    console.log('total: '+files.length + ' files')
    this.setState({
      files: files
    });
  }

  async addRoom(userpk) {
    console.log("+addRoom");
    var response = await fetch(BACKEND_URL + '/rooms/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            host: userpk, // get pk from cookie
            location: this.state.location,
            title: this.state.title,
            description: this.state.description,
            area: this.state.area,
            layout: this.state.layout,
            floor: this.state.floor,
            direction: this.state.direction,
            age: this.state.age,
            building_type: this.state.building_type,
            room_type: this.state.room_type,
            price_month: this.state.price_month,
            price_quarter: this.state.price_quarter,
            price_year: this.state.price_year,
            deposit: this.state.deposit,
            mgmt_fee: this.state.mgmt_fee,
            parking: this.state.parking,
            balcony: this.state.balcony,
            pet: this.state.pet,
            cook: this.state.cook,
            mrt: this.state.mrt,
            tv: this.state.tv,
            ac: this.state.ac,
            ref: this.state.ref,
            water_hearter: this.state.water_hearter,
            natural_gas: this.state.natural_gas,
            cabel_tv: this.state.cabel_tv,
            network: this.state.network,
            wash_machine: this.state.wash_machine,
            bed: this.state.bed,
            wardrobe: this.state.wardrobe,
            table: this.state.table,
            sofa: this.state.sofa,
            chair: this.state.chair,
          }
        )
    });

    var room_id = -1;
    var data = await response.json();
    console.log(response.status);
    //console.log(data);
    if (response.status === 200 ||
        response.status === 201)   // 201: The request has been fulfilled and has resulted in one or more new resources being created.
    {
      console.log(data);
      // TODO: id 當做回傳值
      console.log('room id : ' + data.id);
      room_id = data.id;
    }
    else {
      console.log(data);
      room_id = -1;
    }

    console.log("-addRoom");
    return room_id;
  }

  async uploadRoomPhotos(_key, room_id, _files) {
    console.log("+uploadRoomPhotos (" + _files.length + " photos)");
    if (_files.length === 0)
        return true;

    this.setState({
      uploading: true
    });

    this.setState({
      total_files: _files.length
    });

    var i;
    for (i = 0 ; i < _files.length ; i++) {
      console.log ('uploading image: '+i)
      var fd  = new FormData();
      fd.append('room', room_id);
      fd.append('photo', _files[i]);

      var response = await fetch(BACKEND_URL + '/roomsimage/', {
          method: 'POST',
          headers: {
            //'Authorization': 'Token '+ userToken
          },
          body: fd
        });

      var result = false;
      var data = await response.json();
      console.log(response.status);
      //console.log(data);
      if (response.status === 200 ||
        response.status === 201)   // 201: The request has been fulfilled and has resulted in one or more new resources being created.
        {
          console.log(data);
          result = true;
        }
        else {
          console.log(data);
          result = false;
        }

      this.setState({
        current_file_index: i+1
      });
    }

    console.log("-uploadRoomPhotos");
    return result;
  }

    showInputState() {
      console.log('this.state.location: ' + this.state.location);
      console.log('this.state.title: ' + this.state.title);
      console.log('this.state.description: ' + this.state.description);
      console.log('this.state.area: ' + this.state.area);
      console.log('this.state.layout: ' + this.state.layout);
      console.log('this.state.floor: ' + this.state.floor);
      console.log('this.state.direction: ' + this.state.direction);
      console.log('this.state.age: ' + this.state.age);
      console.log('this.state.building_type: ' + this.state.building_type);
      console.log('this.state.room_type: ' + this.state.room_type);
      console.log('this.state.price_month: ' + this.state.price_month);
      console.log('this.state.price_quarter: ' + this.state.price_quarter);
      console.log('this.state.price_year: ' + this.state.price_year);
      console.log('this.state.deposit: ' + this.state.deposit);
      console.log('this.state.mgmt_fee: ' + this.state.mgmt_fee);
    }

    showCheckboxState() {
    console.log('this.state.parking: ' + this.state.parking);
    console.log('this.state.balcony: ' + this.state.balcony);
    console.log('this.state.pet: ' + this.state.pet);
    console.log('this.state.cook: ' + this.state.cook);
    console.log('this.state.mrt: ' + this.state.mrt);
    console.log('this.state.tv: ' + this.state.tv);
    console.log('this.state.ac: ' + this.state.ac);
    console.log('this.state.ref: ' + this.state.ref);
    console.log('this.state.water_hearter: ' + this.state.water_hearter);
    console.log('this.state.natural_gas: ' + this.state.natural_gas);
    console.log('this.state.cabel_tv: ' + this.state.cabel_tv);
    console.log('this.state.network: ' + this.state.network);
    console.log('this.state.wash_machine: ' + this.state.wash_machine);
    console.log('this.state.bed: ' + this.state.bed);
    console.log('this.state.wardrobe: ' + this.state.wardrobe);
    console.log('this.state.table: ' + this.state.table);
    console.log('this.state.sofa: ' + this.state.sofa);
    console.log('this.state.chair: ' + this.state.chair);
  }

  handleUpload = async () => {
    console.log('+handleUpload');
    // print state for debugging
    var userpk = jsCookie.get('userpk');
    console.log('pk: '+ userpk);
    if(userpk === undefined) {
      console.log('請先登入');
      this.setState({
        message_to_user: '請先登入'
      });
      return;
    } else {
      this.setState({
        message_to_user: ''
      });
    }

    this.showInputState();
    this.showCheckboxState();

    let room_id = await this.addRoom(userpk);

    if (room_id > 0) {
       //  console.log('@@ total: '+this.state.files.length + ' files')
      await this.uploadRoomPhotos(0, room_id, this.state.files);
    }
    console.log('-handleUpload');
  }

  handleCbClick = (ev, data) => {
//    console.log('+handleCbClick');
//    console.log(data.name +' : ' + data.value);
    this.setState({
      [data.name]: (1-data.value)
    });
//    console.log('-handleCbClick');
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log('['+name+'] :' + value);
  }

  handleBuildingTypeChange = (ev, data) => {
    // See https://lodash.com/docs/#find
    const option = _.find(building_type, { value: data.value })
    this.setState({
      building_type: option.text
    });
    console.log(option.text)
  }

  handleRoomTypeChange = (ev, data) => {
    const option = _.find(room_type, { value: data.value })
    this.setState({
      room_type: option.text
    });
    console.log(option.text)
  }

  constructor() {
    super()
    this.state = {
      files: [],
      current_file_index: 0,
      total_files: 1,
      uploading: false,
      message_to_user: '',

      location: '',
      title: '',
      description: '',
      area: 1,
      layout: '',
      floor: '',
      direction: '',
      age: 0,
      building_type: '電梯大樓',
      room_type: '獨立套房',
      price_month: 0,
      price_quarter: 0,
      price_year: 0,
      deposit: 0,
      mgmt_fee: 0,

      parking: 0,
      balcony: 0,
      pet: 0,
      cook: 0,
      mrt: 0,
      tv: 0,
      ac: 0,
      ref: 0,
      water_hearter: 0,
      natural_gas: 0,
      cabel_tv: 0,
      network: 0,
      wash_machine: 0,
      bed: 0,
      wardrobe: 0,
      table: 0,
      sofa: 0,
      chair: 0,
    }
    this.uploadRoomPhotos.bind(this);
  }

  render() {
    var dropzoneDivStyle = {
      border: '3px grey dashed',
      width: '100%',
      height: '100px',
      margin: '0 auto',
    }
    var dropzoneStyle = {
     // border: '3px red dashed',
      width: '100%',
      height: '100%',
      margin: '0 auto',
    }
    var infoDivStyle = {
    //  border: '1px green solid',
      width: '100%',
  //    height: '100%',
      margin: '0 auto',
    }
    var titleInputStyle = {
      //  float: 'right',
        width: '100%',
    }
    var checkboxSpanStyle = {
    //    border: '1px green solid',
        marginLeft: '30px',
    //    width: '100%',
    }
    return (
      <section>
      {
        /*
        <List>
          <List.Item><Label size='big' color='teal' horizontal>標題</Label><Input placeholder='' /></List.Item>
          <List.Item><Label size='big' color='teal' horizontal>描述</Label><TextArea placeholder='描述' /></List.Item>
          <List.Item>Oranges</List.Item>
        </List>
        */
      }
      <div style={infoDivStyle}>
        <Item><Label size='big' color='pink' horizontal>地址</Label><Input placeholder='' style={titleInputStyle} name='location' onChange={this.handleInputChange}/></Item>
        <br/>
        <Item><Label size='big' color='pink' horizontal>標題</Label><Input placeholder='' style={titleInputStyle} name='title' onChange={this.handleInputChange}/></Item>
        <br/>
        <Item><Label size='big' color='teal' horizontal>描述</Label><TextArea placeholder='' style={titleInputStyle} name='description' onChange={this.handleInputChange}/></Item>
        <br/>
        <Item><Label size='big' color='teal' horizontal>坪數</Label>
          <Input>
            <input type="number" min="1" className="vIntegerField" placeholder='20' name='area' onChange={this.handleInputChange}/>
          </Input>
        </Item>
        <br/>
        <Item><Label size='big' color='pink' horizontal>樓層</Label>
          <Input placeholder='5/15' name='floor' onChange={this.handleInputChange}/>
        </Item>
        <br/>
        <Item><Label size='big' color='teal' horizontal>格局</Label><Input placeholder='1/1/1' name='layout' onChange={this.handleInputChange}/></Item>
        <br/>
        <Item><Label size='big' color='teal' horizontal>屋齡</Label>
          <Input>
            <input type="number" min="1" name="age" className="vIntegerField" placeholder='5' name='age' onChange={this.handleInputChange}/>
          </Input>
        </Item>
        <br/>
        <Item><Label size='big' color='teal' horizontal>坐向</Label><Input placeholder='坐北朝南' name='direction' onChange={this.handleInputChange}/></Item>
        <br/>
        <Item><Label size='big' color='teal' horizontal>建築類型</Label>
          <Dropdown placeholder='電梯大樓' search selection options={building_type} onChange={this.handleBuildingTypeChange}/>
        </Item>
        <br/>
        <Item><Label size='big' color='teal' horizontal>房型</Label>
          <Dropdown placeholder='獨立套房' search selection options={room_type} onChange={this.handleRoomTypeChange}/>
        </Item>
        <br/>
        <Item><Label size='big' color='pink' horizontal>月租金</Label>
          <Input>
            <input type="number" min="0" className="vIntegerField" placeholder='20000' name='price_month' onChange={this.handleInputChange}/>
          </Input>
        </Item>
        <br/>
        <Item><Label size='big' color='pink' horizontal>季租金</Label>
          <Input>
            <input type="number" min="0" className="vIntegerField" placeholder='20000' name='price_quarter' onChange={this.handleInputChange}/>
          </Input>
        </Item>
        <br/>
        <Item><Label size='big' color='pink' horizontal>年租金</Label>
          <Input>
            <input type="number" min="0" className="vIntegerField" placeholder='20000' name='price_year' onChange={this.handleInputChange}/>
          </Input>
        </Item>
        <br/>
        <Item><Label size='big' color='pink' horizontal>押金 (單位:月)</Label>
          <Input>
            <input type="number" min="0" className="vIntegerField" placeholder='2' name='deposit' onChange={this.handleInputChange}/>
          </Input>
        </Item>
        <br/>
        <Item><Label size='big' color='pink' horizontal>管理費</Label>
          <Input>
            <input type="number" min="0" className="vIntegerField" placeholder='2000' name='mgmt_fee' onChange={this.handleInputChange}/>
          </Input>
        </Item>
        <br/>
          <span style={checkboxSpanStyle}><Checkbox label='車位' name="parking" value={this.state.parking} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='陽台' name="balcony" value={this.state.balcony} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='養寵物' name="pet" value={this.state.pet} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='開伙' name="cook" value={this.state.cook} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='近捷運' name="mrt" value={this.state.mrt} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='電視' name="tv" value={this.state.tv} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='冷氣' name="ac" value={this.state.ac} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='冰箱' name="ref" value={this.state.ref} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='熱水器' name="water_hearter" value={this.state.water_hearter} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='天然瓦斯' name="natural_gas" value={this.state.natural_gas} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='第四台' name="cabel_tv" value={this.state.cabel_tv} onClick={this.handleCbClick} /></span>
          <span style={checkboxSpanStyle}><Checkbox label='網路' name="network" value={this.state.network} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='洗衣機' name="wash_machine" value={this.state.wash_machine} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='床' name="bed" value={this.state.bed} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='衣櫃' name="wardrobe" value={this.state.wardrobe} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='桌子' name="table" value={this.state.table} onClick={this.handleCbClick} /></span>
          <span style={checkboxSpanStyle}><Checkbox label='沙發' name="sofa" value={this.state.sofa} onClick={this.handleCbClick}/></span>
          <span style={checkboxSpanStyle}><Checkbox label='椅子' name="chair" value={this.state.chair} onClick={this.handleCbClick}/></span>
      </div>
        <h3>上傳照片 (拖曳到下方)</h3>
        <div style={dropzoneDivStyle}>
          <Dropzone onDrop={this.onDrop.bind(this)} style={dropzoneStyle}>
            <p>Drag photos here</p>
          </Dropzone>
        </div>
        <aside>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
        { (this.state.files.length > 0 && this.state.uploading)? <Progress value={this.state.current_file_index} total={this.state.total_files} color='yellow' /> : ''}
        <Button color='green' onClick={this.handleUpload}><Icon name='plus' />add</Button>
        { (this.state.message_to_user.length > 0) ?
        <Message negative>
          <Message.Header>{ this.state.message_to_user } </Message.Header>
        </Message>
        : '' }
      </section>
    );
  }
}

export default AddRoom
