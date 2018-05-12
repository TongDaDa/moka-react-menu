/**
 people: LiuTong,
 changeTime: 5/12/18,
 description: Menu 菜单包裹，使用子组件 MenuItem 进行添加组件，也可与其他组件配合使用;
 **/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem'
import classnames from 'classnames';

class Menu extends Component {

    static propTypes = {
        isRelevance: PropTypes.bool,

    }

    state = {
        
    }

    render() {
        const {isRelevance} = this.props;
        let menuClassObj = {menu:true}

        return <div className={classnames(menuClassObj)}>

        </div>
    }
}

Menu.Item = MenuItem;

export default Menu;