import React from 'react';
import Link from 'next/link'
import Cookies from 'universal-cookie';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import Head from 'next/head'
// https://react-dropzone.js.org/
import Dropzone from 'react-dropzone'
import { Button, Icon, Progress } from 'semantic-ui-react'


class AddRoom extends React.Component {
  onDrop(files) {
    console.log('total: '+files.length + ' files')
    this.setState({
      files: files
    });
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

  async handleUpload() {
    console.log('+handleUpload');
  //  console.log('@@ total: '+this.state.files.length + ' files')
    await this.uploadRoomPhotos(0, 5, this.state.files);
    console.log('-handleUpload');
  }

  constructor() {
    super()
    this.state = {
      files: [],
      current_file_index: 0,
      total_files: 1,
      uploading: false,
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
    return (
      <section>
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
        <Button color='green' onClick={this.handleUpload.bind(this)}><Icon name='upload' />upload</Button>
      </section>
    );
  }
}

export default AddRoom
