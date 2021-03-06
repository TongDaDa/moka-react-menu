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
            openKeys: ["01-1","01-2"],
            selected:{'01-1':true,"01-2":true},
        };
    }

    menuChange = (key) => {
        console.log('选中了'+key);
    }

    handleEmpty = ()=>{
        this.setState({
            openKeys:[],
            selected:{}
        })
    }

    onSubMenuChange = (key) => {
        // 查找数据结构，把key下面所有的子级清空
        const selected = this.state.selected
        const child = menuData.find(i=>i.partId === key)
        if (!child) { return; }
        const childKeys = child.subjectEngineers.map(i=>i.engineerId)
        const status = !selected[key]
        selected[key] = status;
        childKeys.forEach((k)=>{
            selected[k] = status
        })
        this.menuChange(key)
        this.setState({ selected: this.state.selected })
    }

    onChange = (key)=>{
        this.state.selected[key] = !this.state.selected[key];
        this.menuChange(key)
        this.setState({
            selected:this.state.selected
        })
    }

    getSubMenuData = (data)=>{
        const {selected} = this.state
        return data.map((menuItem,key)=>{
            // 这里待优化，可以在subjectEngineers.map中累计数量，从而再次修改 subMenuItem 的 total, 后期使用引用完成
            let total = menuItem.subjectEngineers.reduce((pre,nex)=> pre + nex.num,0);
            if (menuItem.partName) {
                return <SubMenuItem key={menuItem.partId}
                                    activeKey={menuItem.partId}
                                    onChange={this.onSubMenuChange}
                                    isChecked={selected[menuItem.partId]}
                                    title={menuItem.partName}
                                    render={()=>(<span className={style.menuNum}> {total} </span>)}
                >
                    {
                        menuItem.subjectEngineers.map((menu)=>{
                            return <MenuItem key={menu.engineerId} activeKey={menu.engineerId} isChecked={selected[menu.engineerId]} onChange={this.onChange}>
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
                   <span  onClick={this.handleEmpty} > 清空 </span>
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