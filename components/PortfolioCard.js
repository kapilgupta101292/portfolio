import React from 'react'
import { Col, Card, CardHeader, CardTitle, CardText, CardBody } from "reactstrap";

export default function PortfolioCard({portfolio}) {
    return (
        <Col key={portfolio._id} md="4">
            <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">{portfolio.jobTitle}</CardHeader>
                <CardBody>
                    <p className="portfolio-card-city">{portfolio.location}</p>
                    <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                    <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}
