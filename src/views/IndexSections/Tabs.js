import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  return (
    <div className="section section-tabs">
      <Container>
        <div className="title">
          <h3 className="mb-3">Team Biography</h3>
        </div>
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Amadu Kargbo
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Enoch is an accomplished Full Stack Developer with a
                      passion for crafting exceptional digital experiences. With
                      expertise in both web and mobile application development,
                      Enoch has been a driving force behind numerous successful
                      projects. His proficiency in languages such as JavaScript
                      and Python, combined with his mastery of frameworks like
                      React and Node.js, has allowed him to excel in both
                      front-end and back-end development. Enoch's innovative
                      approach and problem-solving skills are evident in his
                      work, and his commitment to staying at the forefront of
                      technology trends makes him an invaluable asset to any
                      project. With a strong portfolio of impactful projects,
                      Enoch continues to make a significant impact in the tech
                      industry
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Musa Nfa Turay
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Enoch is an accomplished Full Stack Developer with a
                      passion for crafting exceptional digital experiences. With
                      expertise in both web and mobile application development,
                      Enoch has been a driving force behind numerous successful
                      projects. His proficiency in languages such as JavaScript
                      and Python, combined with his mastery of frameworks like
                      React and Node.js, has allowed him to excel in both
                      front-end and back-end development. Enoch's innovative
                      approach and problem-solving skills are evident in his
                      work, and his commitment to staying at the forefront of
                      technology trends makes him an invaluable asset to any
                      project. With a strong portfolio of impactful projects,
                      Enoch continues to make a significant impact in the tech
                      industry
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Musa Enoch Ngawuja
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    <p>
                      Enoch is an accomplished Full Stack Developer with a
                      passion for crafting exceptional digital experiences. With
                      expertise in both web and mobile application development,
                      Enoch has been a driving force behind numerous successful
                      projects. His proficiency in languages such as JavaScript
                      and Python, combined with his mastery of frameworks like
                      React and Node.js, has allowed him to excel in both
                      front-end and back-end development. Enoch's innovative
                      approach and problem-solving skills are evident in his
                      work, and his commitment to staying at the forefront of
                      technology trends makes him an invaluable asset to any
                      project. With a strong portfolio of impactful projects,
                      Enoch continues to make a significant impact in the tech
                      industry
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Samuel Koroma
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                  <TabPane tabId="link1">
                    Samuel is an accomplished Full Stack Developer with a
                    passion for crafting exceptional digital experiences. With
                    expertise in both web and mobile application development,
                    Samuel has been a driving force behind numerous successful
                    projects. His proficiency in languages such as JavaScript
                    and Python, combined with his mastery of frameworks like
                    React and Node.js, has allowed him to excel in both
                    front-end and back-end development. Enoch's innovative
                    approach and problem-solving skills are evident in his work,
                    and his commitment to staying at the forefront of technology
                    trends makes him an invaluable asset to any project. With a
                    strong portfolio of impactful projects, Enoch continues to
                    make a significant impact in the tech industry
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>

          <Col className="ml-auto mr-auto" md="10" xl="6">
            <div className="mb-3">
              <small className="text-uppercase font-weight-bold">
                Morris Isreal Abu
              </small>
            </div>
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <p
                  
                    >
                      Frontend developer
                    </p>
                  </NavItem>
                  <NavItem>
                    <p
                    >
                      UI/UX designer
                    </p>
                  </NavItem>

                  
                  <NavItem>
                    <p
                    >
                      embedded system
                    </p>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <p>
                      Morris is an accomplished Full Stack Developer with a
                      passion for crafting exceptional digital experiences. With
                      expertise in both web and mobile application development,
                      Morris has been a driving force behind numerous successful
                      projects. His proficiency in languages such as JavaScript
                      and Python, combined with his mastery of frameworks like
                      React and Node.js, has allowed him to excel in both
                      front-end and back-end development. Enoch's innovative
                      approach and problem-solving skills are evident in his
                      work, and his commitment to staying at the forefront of
                      technology trends makes him an invaluable asset to any
                      project. With a strong portfolio of impactful projects,
                      Enoch continues to make a significant impact in the tech
                      industry
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
