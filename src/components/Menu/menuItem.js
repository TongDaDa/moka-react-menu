import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends Component {

    static propTypes = {}

    state = {}

    render() {
        const {children} = this.props;

        return <React.Fragment>
            { children }
        </React.Fragment>
    }
}