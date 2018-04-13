import React, { Component } from 'react';
//import BlogPost from '.';
import HOCSubscription from './HOCSubscription';

export default class BlogPost extends Component {
    constructor(props) {
        super(props);
    }

    renderHOCSubscription() {
        return HOCSubscription();
    }

    render() {
        <div>
            <h3>BlogPost</h3>
            { this.renderHOCSubscription() }
        </div>
    }
} 