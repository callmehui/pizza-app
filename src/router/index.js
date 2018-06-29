import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Login from "../components/Login";
import Menu from "../components/Menu";
import Register from "../components/Register";
import Admin from "../components/Admin";
import About from "../components/about/About";

// 定义二级路由
import History from "../components/about/History.vue";
import Contact from "../components/about/Contact.vue";
import Delivery from "../components/about/Delivery.vue";
import OrderingRecord from "../components/about/OrderingRecord.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      components: {
        default: Home,
        'orderingRecord': OrderingRecord,
        'delivery': Delivery,
        'history': History,
      }
    },
    {
      path: "/Login",
      component: Login
    },
    {
      path: "/Menu",
      component: Menu
    },
    {
      path: "/Register",
      component: Register
    },
    {
      path: "/Admin",
      component: Admin,
      // // 路由独享守卫
      // beforeEnter: (to, from, next) => {
      //   // 用法与全局导航守卫相同
      //   if (from.path != '/') {
      //     alert('请登录');
      //     next();
      //   } else {
      //     next();
      //   }
      // }
    },
    {
      path: "/About",
      redirect: "/Contact",
      component: About,
      children: [{
          path: "/History",
          name: "HistoryLink",
          component: History
        },
        {
          path: "/Contact",
          name: "ContactLink",
          component: Contact
        },
        {
          path: "/Delivery",
          name: "DeliveryLink",
          component: Delivery
        },
        {
          path: "/OrderingRecord",
          name: "OrderingLink",
          component: OrderingRecord
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
