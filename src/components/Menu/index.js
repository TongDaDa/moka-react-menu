/**
 people: LiuTong,
 changeTime: 5/12/18,
 description: Menu 菜单包裹，使用子组件 MenuItem 进行添加组件，也可与其他组件配合使用;
 **/

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import SubMenuItem from './SubMenuItem'
import classnames from 'classnames';
import './index.scss'

class Menu extends Component {

    static propTypes = {
        isRelevance: PropTypes.bool,
        showCheckbox: PropTypes.bool,
        openKeys: PropTypes.array
    }

    static Item = MenuItem;

    static SubMenuItem = SubMenuItem;

    constructor(){
        super();
    }

    componentDidMount(){
        const openKeys = this.props.openKeys;
        this.props.children.map((i)=> {
            if (openKeys.indexOf(i.key)) {
            }
        })
    }

    state = {}

    render() {
        const {isRelevance,children,openKeys} = this.props;
        let menuClassObj = {menu:true}
        return <div className={classnames(menuClassObj)}>
            { children }
        </div>
    }
}

export default Menu;