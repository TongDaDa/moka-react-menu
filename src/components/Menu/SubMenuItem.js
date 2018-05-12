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

    state = {
        isHidden: true
    }

    handleItemClick = (e) => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        const {isShowSubject,onChange,isChecked,activeKey,render} = this.props;
        const {isHidden} = this.state;
        return <div className="menu-sub-item" onClick={this.handleItemClick} >
            <Checkbox checked={isChecked} onChange={(value,e)=>{ e.stopPropagation(); onChange(activeKey) }} />
            { this.props.title }
            { isShowSubject && <span className={classnames({['menu-pulldown-icon']:true, ['menu-pulldown-icon-active']: !isHidden})}>  </span> }
            { render && render() }
            <ul className={classnames({'menu-item-list':true, 'menu-item-list-hidden': isHidden})}>
                {this.props.children}
            </ul>
        </div>
    }
}