import React, { Component } from 'react';
import DataSource from '../utils/httpUtil';

const HOCSubscription = (WrappedComponent, selectData) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            };
        }

        componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, props)
            });
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    };
};

export default HOCSubscription;