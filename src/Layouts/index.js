import React, {Component} from 'react';
import Menu from '../components/Menu'
import routes from '../common/routes'
import {getMenuData} from '../common/menu';
import NotFound from '../routes/Exception/404';
import {Link,Switch,Route} from 'react-router-dom';
import style from './index.scss'
import menuData from 'services/mock'

const MenuItem = Menu.Item;
const SubMenuItem = Menu.SubMenuItem;

export default class Lay extends Component {

    static propTypes = {}

    constructor(props) {
        super(props);
        this.menus = getMenuData();
        this.state = {
            location: this.props.location,
            collapsed: true,
            openKeys: [],
        };
    }

    getSubMenuOrItem = (item)=>{
        if (item.children && item.children.some(child => child.name)) {
            return (
                <SubMenu
                    title={
                        item.icon ? (
                            <span>
                                {getIcon(item.icon)}
                                <span>{item.name}</span>
                            </span>
                        ) : item.name
                    }
                    key={item.path}
                >
                    {this.getNavMenuItems(item.children)}
                </SubMenu>
            );
        } else {
            return (
                <Menu.Item key={item.key || item.path}>
                    <Link
                        to={item.path}
                        replace={item.path === this.props.location.pathname}
                    >
                        {getIcon(item.icon)}<span>{item.name}</span>
                    </Link>
                </Menu.Item>
            );
        }
    }

    getNavMenuItems = (menusData) => {}

    menuChange = (key) => {
        console.log('选中了'+key);
    }

    handleEmpty = ()=>{
        this.setState({
            openKeys:[]
        })
    }

    onCheckboxChange = ()=>{

    }

    getSubMenuData = (data)=>{
        console.log(data);
        return data.map((menuItem,key)=>{
            // 这里待优化，可以在subjectEngineers.map中累计数量，从而再次修改 subMenuItem 的 total, 后期使用引用完成
            let total = menuItem.subjectEngineers.reduce((pre,nex)=> pre + nex.num,0);
            if (menuItem.partName) {
                return <SubMenuItem key={menuItem.partId} title={menuItem.partName} render={()=>(<span className={style.menuNum}> {total} </span>)} >
                    {
                        menuItem.subjectEngineers.map((menu)=>{
                            return <MenuItem key={menu.engineerId} >
                                <div className={style.menuFlex}>
                                    { menu.postName }
                                    <span className={style.menuNum}> {menu.num} </span>
                                </div>
                            </MenuItem>
                        })
                    }
                </SubMenuItem>
            } else {
                return <MenuItem key={menuItem.engineerId}> { menuItem.postName } <span className={style.menuNum}> {menuItem.num} </span> </MenuItem>
            }
        })
    }

    render() {
        const {location} = this.props;
        const { openKeys } = this.state;

        return <React.Fragment>

            <div className={style.sideBar} key="sidebar" role="menu">

                <header className={style.header}>
                    <h2> 招聘职位 </h2>
                    <a onClick={this.handleEmpty}> <span> 清空 </span> </a>
                </header>

                <Menu
                    onChange={this.menuChange}
                    showCheckbox={true}
                    openKeys={openKeys}
                    onCheckboxChange={this.onCheckboxChange}
                    isRelevance={true}
                >
                    {this.getSubMenuData(menuData)}
                </Menu>
            </div>

            <div className={style.content}>
                {
                    routes.map(
                        (i,k)=> <Route path={i.path} key={i.path} component={i.component} exact={i.isExact} />
                    )
                }
                <Route render={NotFound} />
            </div>
        </React.Fragment>
    }
}