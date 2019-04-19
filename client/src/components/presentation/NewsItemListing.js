import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class NewsItemListing extends Component {
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.teaser}</div>
            </div>
        )
    }
}

NewsItemListing.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string.isRequired
}