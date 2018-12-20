import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        lang: localStorage.getItem('lang'),
        token: localStorage.getItem('token'),
        id_session: localStorage.getItem('id_session'),
        img_session: localStorage.getItem('img_session'),
        user_name: localStorage.getItem('user_name'),
        bookingid: localStorage.getItem('bookingid'),
        eventid: localStorage.getItem('eventid')
    },
    mutations: {
        selectLang(state, selected) {
            state.lang = selected
        }
    }
})