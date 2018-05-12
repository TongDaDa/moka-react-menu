import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox'
import classnames from 'classnames';

export default class SubMenuItem extends Component {

    static propTypes = {
        isShowSubject: PropTypes.bool,  //
        isRelativeAll: PropTypes.bool,  // 取消选中时，是否关联所有下级菜单选项 (取消subMenu，下级全部取消)
    }

    static defaultProps = {
        isShowSubject: true,
        isRelativeAll: true
    }

    static childContextTypes = {
        is: PropTypes.bool,
    };

    static contextTypes = {
        siderCollapsed: PropTypes.bool,
    };

    state = {
        isHidden: true,
        checked: false
    }

    componentDidMount(){
        console.log(this);
    }

    handleCheckboxChange = (value,e) => {
        e.stopPropagation();
        if (value) {
            // 遍历 children 取消掉多选框
            // this.props.children.map((i,key)=>{
            //     console.log(i);
            // })
        }  else {
            //取消选中
        }
        this.setState({ isHidden: value })
    }

    handleItemClick = (e) => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        const {isShowSubject,render,key} = this.props;
        const {isHidden,checked} = this.state;
        return <div className="menu-sub-item" onClick={this.handleItemClick} >
            <Checkbox checked={checked} onChange={this.handleCheckboxChange} />
            { this.props.title }
            { isShowSubject && <span className={classnames({['menu-pulldown-icon']:true, ['menu-pulldown-icon-active']: !isHidden})}>   </span> }
            { render && render() }
            <ul className={classnames({'menu-item-list':true, 'menu-item-list-hidden': isHidden})}>
                {this.props.children}
            </ul>
        </div>
    }
}