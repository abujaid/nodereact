import React, { Component } from 'react'
import NewsItemListing from '../presentation/NewsItemListing'

export default class News extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li> <NewsItemListing id="1" title="Mad owl torments drivers" teaser="An owl has been seen chasing cars in Bridlington" /></li>
                    <li><NewsItemListing id="2" title="" teaser="Letters have gone missing in Wigan. Owl suspected." /></li>
                </ul>
            </div>
        )
    }
}
