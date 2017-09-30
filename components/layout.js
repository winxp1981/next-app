import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import { Segment, Divider } from 'semantic-ui-react'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    var footerStyle = {
    //    border: '1px solid red',
        width: '100%',
      //  height: '200px',
    //    height: '100px',
    //    backgroundColor: '#FFBB66',
        paddingTop: '40px',
    }

    return (
      <div>
        <Head>
          <title>{ this.props.title }</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          { /* bootstrap */ }
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
          { /* font-awesome */ }
          <link rel="stylesheet" href="../static/font-awesome/css/font-awesome.min.css" />
          { /* Google Map */ }
          <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBNKKAhKocKWQ43dc6NT3fCyaLPTdxmAX0" type="text/javascript"></script>

          { /* semantic-ui-react */ }
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        </Head>
        <Header />

        { this.props.children }

        <div style={footerStyle}>
        <Divider />
        <Segment.Group horizontal>
          <Segment>Left</Segment>
          <Segment>Middle</Segment>
          <Segment>Right</Segment>
        </Segment.Group>
        </div>
      </div>
    );
  }
}

export default Layout
/*
export default ({ children,                                                                                                                                     }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="../static/font-awesome/css/font-awesome.min.css" />
    </Head>
    <Header />
    { this.props.userName }

    { children }

    <footer>
      {'Footer'}
    </footer>
  </div>
)
*/
