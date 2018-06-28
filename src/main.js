import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 全局导航守卫
// router.beforeEach(
//   (to, from, next) => {
//     // alert("没有登录，请先登录！");
//     // next();
//     // console.log(to);

//     if (to.path == '/Login' || to.path == '/Register') {
//       // 将要跳转的路径是/Login或者/Register时，继续执行跳转
//       next();
//     } else {
//       // 否则跳转至/Login
//       alert('还没有登录，请先登录！');
//       next('/Login');
//     }
//   }
// );

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
