import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, Container, Row, Col,CardBody,CardTitle } from "reactstrap";

export default function Examples() {
  return (
    <>
    <div className="section section-examples" data-background-color="black">
      <section className="section">
        <img
          alt="..."
          className="path"
          src={require("assets/img/path4.png")} />
        <Container>
          <Row className="row-grid justify-content-between">
            <Col className="mt-lg-5" md="5">
              <Row>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-trophy text-warning" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">100%</CardTitle>
                            <p />
                            <p className="card-category">Cloud Hosting</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats upper bg-default">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-coins text-white" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">100%</CardTitle>
                            <p />
                            <p className="card-category">web app</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-gift-2 text-info" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">100%</CardTitle>
                            <p />
                            <p className="card-category">mobile app</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-credit-card text-success" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">100%</CardTitle>
                            <p />
                            <p className="card-category">Database Management</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-credit-card text-success" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">100%</CardTitle>
                            <p />
                            <p className="card-category">Penetration Testing</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col className="px-2 py-2" lg="6" sm="12">
                  <Card className="card-stats">
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <i className="tim-icons icon-credit-card text-success" />
                          </div>
                        </Col>
                        <Col md="8" xs="7">
                          <div className="numbers">
                            <CardTitle tag="p">100%</CardTitle>
                            <p />
                            <p className="card-category">System Design</p>
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="6" style={{marginTop:"50px"}}>
              <div className="pl-md-5">
                <h1>What We do</h1>
                <p>
                  Our team is dedicated to understanding your unique needs.
                  We believe in providing personalized solutions that align
                  perfectly with your requirements.
                </p>
                <br />
                <p>
                  Our team uses their expertise they have acquired many
                  years to solve your needs. We're excellent at it.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
       <section className="section section-lg">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12">
              <h1 className="text-center">Core Values</h1>
              <Row className="row-grid justify-content-center">
                <Col lg="3">
                  <div className="info">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-money-coins" />
                    </div>
                    <h4 className="info-title">Expertise</h4>
                    <hr className="line-primary" />
                    <p>
                      We have a team of seasoned professionals who excel in
                      their respective fields. They are well-equipped to
                      address any questions or concerns you may have.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info">
                    <div className="icon icon-warning">
                      <i className="tim-icons icon-chart-pie-36" />
                    </div>
                    <h4 className="info-title"> Transparent Communication</h4>
                    <hr className="line-warning" />
                    <p>
                      We value open and clear communication. If you have any
                      questions, please don't hesitate to ask. We are here to
                      provide the information and support you need.
                    </p>
                  </div>
                </Col>
                <Col lg="3">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="tim-icons icon-single-02" />
                    </div>
                    <h4 className="info-title">Exceptional Service</h4>
                    <hr className="line-success" />
                    <p>
                      Your experience is important to us. Our commitment to
                      excellent customer service extends to every aspect of
                      our company, from the moment you walk in the door.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    </>
  );
}
