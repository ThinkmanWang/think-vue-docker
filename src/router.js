import Vue from 'vue'
import Router from 'vue-router'

import MainPage from "@/components/pages/main-page"

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active'
    , routes: [
        {
            path: '/'
            , redirect: '/main'
        }
        , {
            path: '/main'
            , name: "main"
            , component: MainPage
            , meta: {
                keepAlive: true
            }

        }
    ]
})