/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
// import Header from "../../../ui/Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import headphones from "../../../assets/images/headphones.jpg";

function Product() {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={headphones} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Product;
