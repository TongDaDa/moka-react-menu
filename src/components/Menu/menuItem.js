import React, {Component,PureComponent} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox'

export default class MenuItem extends Component {

    static propTypes = {}

    state = { isChecked:false }

    menuItemClick = (e)=>{
        e.stopPropagation();
        this.handleClickCallBack && this.handleClickCallBack(this.props.key);
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        const {isChecked} = this.state;
        const {children} = this.props;
        return <li className="menu-item" onClick={this.menuItemClick}>
            <div className="menu-item-content">
                <Checkbox checked={isChecked} />
                {children}
            </div>
        </li>
    }
}