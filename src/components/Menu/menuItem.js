import React, {Component,PureComponent} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox'

export default class MenuItem extends Component {

    static propTypes = {}


    render() {
        const {children,isChecked,onChange,activeKey} = this.props;
        return <li className="menu-item" onClick={(e)=>{ e.stopPropagation(); onChange(activeKey) }}>
            <div className="menu-item-content">
                <Checkbox checked={isChecked} />
                {children}
            </div>
        </li>
    }
}