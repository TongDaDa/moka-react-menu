
## 实现细节
最初想使用

## 用时

start 4.31
1. 项目搭建
2. 路由配置
3. 创建基础组件
   1. Checkbox
   2. Menu SubMenuItem MenuItem
   3. Slider
4. 使用store做数据传递之后，发现条件中说明不能使用相关库
6. 改回普通方式，每个组件使用单独的Props
6.00 - 7.30 stop for eat
end 0: 00

## 欠缺的功能
1. Menu 会根据当前的数据层级结构与 MenuItem 告知什么时候不需要使用 下拉图标，这是自动的，但目前通过MenuItem
的Props实现，未免有些冗余
2. Menu,Checkbox 使用场景低(disabled等等)并且组件没有写 demo 与使用文档
3. html 可读性有待提高，很多 role 以及 aria 没有使用，以及标签语意话有待优化
4. 打包功能，没有优化，可以提取公共部分做缓存，以及页面组件做异步加载.
5. subMenu组件展开收缩的动画是可供选择的，但目前是死的none方式，后期优化
6. 没有明确的给出Change钩子
7. 响应式布局，需要考虑无线端用户
8. 根据需求没有弹出要求，Slider做为后期可扩展的组件，支持弹出方向等.

## Unresolved of Bug

## 主体功能实现
1. 点击清空:清空所有选项(所有选项都变成unchecked)
2. 点击部门左侧checkbox:toggle所有子目录下checkbox以及部门的checkbox 3. 点击单个岗位checkbox:toggle点击的checkbox


## 我的收获
1. 写组件之前，一定要试想以及规划使用场景与方式，保证共用性，低耦合的模式.
2. 在抽象组件中如果处理能极低时，考虑把这部分逻辑暴露给外部承担
3. 为了简洁使用跨组件通信把大部分钩子放到顶层组件上(Menu),这种方式分发给子组件的props必须要通过 Provider + store 方式
除此之外的唯一方式，就是把逻辑迁至外部，每个组件(SubMenuItem,MenuItem)使用单独的props
