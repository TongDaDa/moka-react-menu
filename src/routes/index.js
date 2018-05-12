import React,{Component} from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Layout from '../Layouts'


/**
 * 此处只用一个Layout组件，通常情况下，使用更多的Layout来做权限认证.(方便扩展)
 */
export default ()=>(
    <HashRouter>
        <Switch>
            <Route path="/" render={(location) => <Layout {...location} />}/>
        </Switch>
    </HashRouter>
)