/**
 people: LiuTong,
 changeTime: 5/12/18,
 description: 滑动框组件，选择不同的方向，以及弹出动画;
 **/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class  extends Component {

    static propTypes = {
        direction: PropTypes.string,  // left | right

    }

    constructor(props) {
        super(props);
        this.state = {}

    }

    getSliderClassName = () => {
        let classArray = ['']
        const {direction} = this.props;
        return ''
    }

    render() {
        return <div className={this.getSliderClassName()}>

        </div>
    }
}