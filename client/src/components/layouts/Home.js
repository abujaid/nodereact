import React, { Component } from 'react'
import News from '../containers/News'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to MadOwlNews.com</h1>
                <News />
            </div>
        )
    }
}
