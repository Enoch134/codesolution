import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <ExamplesNavbar />
              <section className="section section-lg section-coins" style={{marginTop:"40px"}}>
                <Container>
                  <Row>
                    <Col md="4">
                      <h1 className="text-center">Our Services</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("assets/img/web.jpg")}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Web Development</h4>
                              <hr className="line-primary" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>e-commerce</ListGroupItem>
                              <ListGroupItem>health</ListGroupItem>
                              <ListGroupItem>off app</ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col md="4">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("assets/img/mobile1.jpg")}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Mobile development</h4>
                              <hr className="line-primary" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>e-money</ListGroupItem>
                              <ListGroupItem>e-commerce</ListGroupItem>
                              <ListGroupItem>offices</ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col md="4">
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("assets/img/design.jpg")}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">System Design</h4>
                              <hr className="line-primary" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>e-money</ListGroupItem>
                              <ListGroupItem>e-commerce</ListGroupItem>
                              <ListGroupItem>offices</ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                        
                      </Card>
                    </Col>

                    <Col md="4" style={{marginTop:"70px"}}>
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("assets/img/db1.jpg")}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Database Management</h4>
                              <hr className="line-primary" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>e-money</ListGroupItem>
                              <ListGroupItem>e-commerce</ListGroupItem>
                              <ListGroupItem>offices</ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col md="4" style={{marginTop:"70px"}}>
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("assets/img/penetration.jpg")}
                            style={{height:"16vh"}}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Penetration Testing</h4>
                              <hr className="line-success" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>e-money</ListGroupItem>
                              <ListGroupItem>e-commerce</ListGroupItem>
                              <ListGroupItem>offices</ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                      
                      </Card>
                    </Col>
                    <Col md="4" style={{marginTop:"70px"}}>
                      <Card className="card-coin card-plain">
                        <CardHeader>
                          <img
                            alt="..."
                            className="img-center img-fluid"
                            src={require("assets/img/cloud1.jpg")}
                            style={{height:"16vh"}}
                          />
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col className="text-center" md="12">
                              <h4 className="text-uppercase">Cloud Hosting</h4>
                              <hr className="line-info" />
                            </Col>
                          </Row>
                          <Row>
                            <ListGroup>
                              <ListGroupItem>e-money</ListGroupItem>
                              <ListGroupItem>e-commerce</ListGroupItem>
                              <ListGroupItem>offices</ListGroupItem>
                            </ListGroup>
                          </Row>
                        </CardBody>
                     
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </section>
           
        <Footer />
      
    </>
  );
}
