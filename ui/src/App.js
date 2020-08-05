import React, { Component } from 'react';
import './App.css';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        open: 1,
        high: 1,
        low: 1,
        close: 1,
        volume: 1,
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    fetch('http://localhost:5000/prediction/',
    /*fetch('http://0.0.0.0:5000/prediction/',*/ 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <Container>
        <div className="title">
          <Row>
            <Col md={4}>
              <Image src="https://s2.glbimg.com/IB1ApjkeD11UnquoIUa-fc4jN0I=/0x0:660x371/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/i/A/TUBKYgRmKfbNo8K5ADBQ/111156812-dolargettyimages-1136006361.jpg" fluid/>
            </Col>
            <Col>
              <h1>Market Value Bitcoin Pretictor</h1>
              <p>
                  Predicting the Market Value of Bitcoin.
              </p>
            </Col>
          </Row>
        </div>

        <div className="content">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Open (number)</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.open}
                  name="open"
                  onChange={this.handleChange}>{}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>High (number)</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.high}
                  name="high"
                  onChange={this.handleChange}>{}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Low (number)</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.low}
                  name="low"
                  onChange={this.handleChange}>{}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Close (number)</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.close}
                  name="close"
                  onChange={this.handleChange}>{}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Volume (number)</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.volume}
                  name="volume"
                  onChange={this.handleChange}>{}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? this.handlePredictClick : null}>
                  { isLoading ? 'Making prediction' : 'Predict' }
                </Button>
              </Col>
              <Col>
                <Button
                  block
                  variant="danger"
                  disabled={isLoading}
                  onClick={this.handleCancelClick}>
                  Reset prediction
                </Button>                
              </Col>
              <Col>
                <Button
                  block
                  variant="primary"
                  disabled={isLoading}
                  onClick={this.handleCurrentClick}>
                  Get current
                </Button>                
              </Col>
            </Row>
          </Form>
          {result === "" ? null :
            (<Row>
              <Col className="result-container">
                <h5 id="result">{result}</h5>
              </Col>
            </Row>)
          }
        </div>
      </Container>
    );
  }
}

export default App;