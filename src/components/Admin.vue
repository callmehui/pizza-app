<template>
    <h1>Admin</h1>
</template>

<script>
export default {
    // 定义组件内守卫
    data(){
        return{
            name: 'ZhongHui',
        };
    },
    // 该导航守卫方法会在组件实例被渲染前调用，也就是说，在该方法内无法调用当前实例化后才能拿到的属性和方法(不能使用this)（比如data）
    beforeRouteEnter: (to,from,next) => {
        // alert("data:" + this.name);     // this.data为undefined,因为此时组件实例还未被创建
        // 但是可以通过next()方法的回到方法去异步访问当前实例
        next(vm => {
            alert("data:" + vm.name);
        });
    },

    // 该导航守卫会在导航离开当前组件的路由时被调用，此时组件已被实例化，所以可以访问当前组件的实例this
    beforeRouteLeave (to, from, next) {
        next();
    }

    // 总结：使用导航守卫但是不使用next()去释放当前路由状态的话，结果就是路由不会被释放，不会实现路由导航（路由不会发生变化）
}
</script>
