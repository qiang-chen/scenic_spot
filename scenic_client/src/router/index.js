import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/main',
    component: () => import("@/views/main/"),
    children: [{
        path: "home",
        component: () => import("@/views/main/home/")
      },
      {
        path: "detail",
        component: () =>
          import("@/views/main/detail/")
      },
      {
        path: "imgs",
        component: () =>
          import("@/views/main/detail/imgs")
      },
      {
        path: "jieshao",
        component: () =>
          import("@/views/main/detail/jieshao")
      },
      {
        path: "map",
        component: () =>
          import("@/views/main/detail/map")

      },
      {
        path: "allEval",
        component: () => import("@/views/main/allEval/")
      },
      {
        path: 'order',
        component: () => import("@/views/main/myorder/")
      },
      {
        path: 'arefund',
        component: () => import("@/views/main/arefund/")
      },
      {
        path: "submitOrder/:id",
        component: () => import("@/views/main/submitOrder")
      },
      {
        path: 'RefundSchedule',
        component: () => import("@/views/main/arefund/schedule")
      }, {
        path: "payment",
        component: () => import("@/views/main/payment")
      }, {
        path: "paymentEnd",
        component: () => import("@/views/main/paymentEnd")
      }, {
        path: "attractionsDetails",
        component: () => import("@/views/main/orderDetail")
      }, {
        path: "alreadYissued",
        component: () => import("@/views/main/alreadYissued")
      },
      {
        path: "/main",
        redirect: "home"
      }
    ],
  }, {
    path: "/",
    redirect: "/main"
  }, ]
})
