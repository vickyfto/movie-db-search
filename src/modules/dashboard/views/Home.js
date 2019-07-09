/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  Card, CardBody, CardHeader, Row, Col,
} from 'reactstrap';

class DashboardHome extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>Home</strong>
              </CardHeader>
              <CardBody>
            Welcome
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardHome;
