import React from "react";
import "./Header.css";
import moment from "moment";
import { Container, Row, Col } from "reactstrap";
import HeaderContent from './HeaderContent';

const Header = () => {
    let timestamp = moment().format("26 01", "DD MM");
    return (
        <Container>
            <Row>
                <Col xs="4">
                    <p>Lambda School</p>
                </Col>
                <Col>
                    <p>@LambdaSchool</p>
                </Col>
                <Col>
                    <p>&#183; 26 jan</p>
                </Col>
            </Row>
            <Row>
                <HeaderContent/>
            </Row>
        </Container>
    );
};

export default Header;
