import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/**************/
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }


  AlertDismissible = () => {

    return (
      <>
        <Alert show={this.state.show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => this.setState({ show: false })} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>

        {!this.state.show && <Button onClick={() => this.setState({ show: true })}>Show Alert</Button>}
      </>
    );
  }

  render() {
    return (
      <div className="App">
        {/* {this.AlertDismissible()} */}

        {/* <Button variant="flat" size="xxl">
          flat button
        </Button> */}

        {/* <Button bsPrefix="super-btn" variant="primary">
          Super button
        </Button> */}

        {/* <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container> */}
{/* 
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))} */}



        {/* <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me!
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}




      </div>
    )
  }
}

export default App;
