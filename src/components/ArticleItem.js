import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardImg, CardBody } from 'reactstrap';
class ArticleItem extends Component{
    constructor() {
        super();
        this.state = {
            expanded: false
        }
    }

    toggleExpanded() {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    render() {
        return (
            <Card inverse={false} onClick={() => {this.toggleExpanded()}}>
                <CardImg src={this.props.article.urlToImage} />
                <CardBody>
                    <CardTitle>
                        {this.props.article.title}
                    </CardTitle>
                    <CardSubtitle>
                        Source: {this.props.article.source.id}
                    </CardSubtitle>
                    {this.state.expanded && <CardText>
                        Story: {this.props.article.description}
                    </CardText>}
                </CardBody>
            </Card>
        )
    }
}
export default ArticleItem;