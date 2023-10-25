import React from "react";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo"> Get your IT services</h1>
          <p className="d-none d-sm-block">
            We offer different services for your business. We design
            website,mobile app, cloud hosting, digital marketing, software
            development, consultancy Do you need a website,mobile app, logistics
            and many more...
          </p>
        </div>
      </Container>
    </div>
  );
}
