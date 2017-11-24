import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CardGroup } from 'reactstrap'
import ArticleItem from './ArticleItem';
import * as action_articles from '../actions/action_articles';
import * as action_sources from '../actions/action_sources';

class ArticleList extends Component{
    constructor() {
        super();
        this.state={
            source: ''
        }
    }

    componentWillMount() {
        this.props.actions.fetch_sources();
    }

    updateSource(e) {
        this.setState({
            source: e.target.value
        })
    }

    getArticles() {
        this.props.actions.fetch_articles('sources', this.state.source)
    }

    articleList() {
        return this.props.articles.map((article, index) => {
            return <ArticleItem key={index} article={article}></ArticleItem>
        })
    }

    sourceList() {
        return this.props.sources.map((source, index) => {
            return <option key={index} value={source.id}>{source.id}</option>
        })
    }
    render (){
        return (
            <div>
                Which source do you want to see? 
                <select value={this.state.source} name='source' onChange={this.updateSource.bind(this)}>
                    <option />
                    {this.sourceList()}
                </select>
                <button type='submit' onClick={() => {this.getArticles()}}>Submit</button>
                {this.props.articles ? <CardGroup>{this.articleList()}</CardGroup> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        sources: state.sources
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, action_articles, action_sources), dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);