import Vue from 'vue'
import Router from 'vue-router'
import Language from '@/pages/language'
import Home from '@/pages/home'
import Destination from '@/pages/destination'
import Faqs from '@/pages/faqs'
import Termsandconditions from '@/pages/termsandconditions'
import Terms2 from '@/pages/terms2'
import Session from '@/pages/session'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'language',
            component: Language
        }, {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/destination/:id',
            name: 'destination',
            component: Destination
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: Faqs
        },
        {
            path: '/termsandconditions',
            name: 'termsandconditions',
            component: Termsandconditions
        },
        {
            path: '/terms2',
            name: 'terms2',
            component: Terms2
        },
        {
            path: '/session',
            name: 'session',
            component: Session
        } 
    ]
})