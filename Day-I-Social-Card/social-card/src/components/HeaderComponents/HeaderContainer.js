import React, { Component } from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";
import { Container, Row, Col } from "reactstrap";

class HeaderContainer extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="1">
                            <ImageThumbnail />
                        </Col>
                        <Col xs="11">
                            <HeaderTitle />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderContainer;
