import React, { Component } from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
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
            <Card onClick={() => {this.toggleExpanded()}}>
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