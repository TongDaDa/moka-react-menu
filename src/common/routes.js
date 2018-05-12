import NotFound500 from "../routes/Exception/500";
import NotFound403 from "../routes/Exception/403";
import NotFound404 from "../routes/Exception/404";

const routes = [
    {
        name: '异常页面', path:'/exception', children: [
            {name: '500', component: NotFound500, path:"500", isExact:true},
            {name: '403', component: NotFound403, path:"403", isExact:true},
            {name: '404', component: NotFound404, path:"404", isExact:true}
        ]
    }
];

/**
 * @param routeData
 * @param routes quote Array
 * @return undefined
 */
const getChildren = (routeData,quote,route)=>{
    const parentPath = route.path;
    for (let i = 0; i < routeData.length; i++) {
        let child = routeData[i];
        child.path = parentPath + "/"+child.path;
        child.authorityId = route.authorityId
        quote.push(child)
        if (Array.isArray(child.children)) {
            getChildren(child.children,quote,child)
            delete child.children
        }
    }
}

for (let i = 0; i < routes.length; i++) {
    let route = routes[i];
    const quote = [route];
    if (Array.isArray(route.children)) {
        getChildren(route.children,quote,route)
    }
    delete route.children;
    quote.shift();
    routes.push(...quote)
}

export default routes