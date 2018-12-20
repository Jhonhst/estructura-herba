// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
// import VueScrollTo from 'vue-scrollto'
import Scrollspy from 'vue2-scrollspy'
import { store } from './store'
import MultiLanguage from 'vue-multilanguage'

Vue.config.productionTip = false
Vue.config.source = process.env

Vue.use(VueResource)
// Vue.use(VueScrollTo)
Vue.use(Scrollspy);

// menu
Vue.use( MultiLanguage, {
  default: 'en',
  en: {
    home: 'home',
    lenguage: 'Language',
    destinations: 'destinations',
    videoH: 'video',
    booknow: 'book now',
    starqualifiers: 'star qualifiers',
    starrewards: 'star rewards',
    contactus: 'contact us',
    Howtoqualify:'How to qualify',
    mybooking: 'My Booking',
    close: 'close'
  },
  // aleman
  de: {
    home: 'home',
    lenguage: 'Sprache',
    destinations: 'Reiseziel',
    videoH: 'video',
    booknow: 'Buche jetzt',
    starqualifiers: 'Sterne Qualifikanten',
    starrewards: 'Sterne Anerkennungen',
    contactus: 'KONTAKTIERE UNS',
    Howtoqualify:'So qualifizieren Sie sich',
    mybooking: 'My Booking',
    close: 'Schließen'
  }, 
  // español  
  es: {
    home: 'Inicio',
    lenguage: 'Idioma',
    destinations: 'destinos',
    videoH: 'video',
    booknow: 'reservar ahora',
    starqualifiers: 'calificados con estrella',
    starrewards: 'recompensas estrellas',
    contactus: 'contactanos',
    Howtoqualify:'Cómo calificar',
    mybooking: 'Mi reserva',
    close: 'cerrar'
  },  
  // checo
  cs: {
    home: 'HLAVNÍ STRÁNKA',
    lenguage: 'Jazyk',
    destinations: 'Destinace',
    videoH: 'video',
    booknow: 'Zarezervovat hned',
    starqualifiers: 'Hvězdní kvalifikovaní',
    starrewards: 'Hvězdné odměny',
    contactus: 'KONTAKT',
    Howtoqualify:'Jak se kvalifikovat',
    mybooking: 'Moje rezervace',
    close: 'Zavřít '
  }, 
  // portuges
  'pt-pt': {
    home: 'INÍCIO',
    lenguage: 'Língua',
    destinations: 'Destinos',
    videoH: 'video',
    booknow: 'Reserve agora',
    starqualifiers: 'STAR QUALIFIERS',
    starrewards: 'Prémios Estrela',
    contactus: 'Contacte-nos',
    Howtoqualify:'Como se qualificar',
    mybooking: 'A minha reserva',
    close: 'Fechar'
  },   
  // itaiano
  it: {
    home: 'Inicio',
    lenguage: 'Lingua',
    destinations: 'Destinazione',
    videoH: 'video',
    booknow: 'Prenota ora',
    starqualifiers: 'Star Qualifier',
    starrewards: 'Premi Star',
    contactus: 'Contattaci',
    Howtoqualify:'Come qualificarsi',
    mybooking: 'La mia prenotazione',
    close: 'Chiudi'
  },  
  // frances
  fr: {
    home: 'ACCUEIL',
    lenguage: 'Langue',
    destinations: 'Destinations',
    videoH: 'VIDÉO',
    booknow: 'Réservez maintenant',
    starqualifiers: 'Qualifiés Étoile',
    starrewards: 'Récompenses Étoile',
    contactus: 'Contactez-nous',
    Howtoqualify:'Comment se qualifier',
    mybooking: 'Ma réservation',
    close: 'Fermer'
  },  
  // turco
  tr: {
    home: 'ANA SAYFA',
    lenguage: 'Dil',
    destinations: 'Destinasyonlar',
    videoH: 'video',
    booknow: 'Rezervasyon yapın',
    starqualifiers: 'Yıldız Sahipleri',
    starrewards: 'Yıldız Ödülleri',
    contactus: 'Bizimle iletişime geçin',
    Howtoqualify:'Nasıl kalifiye olunur',
    mybooking: 'Rezervasyonum',
    close: 'Kapat'
  },  
  // polaco
  pl: {
    home: 'Inicio',
    lenguage: 'Język',
    destinations: 'Miejsca podróży',
    videoH: 'WIDEO',
    booknow: 'Rezerwuj teraz',
    starqualifiers: 'Osoby zakwalifikowane na Gwiazki',
    starrewards: 'Nagrody za Gwiazdki',
    contactus: 'Skontaktuj się z nami',
    Howtoqualify:'Co zrobić, by się zakwalifikować',
    mybooking: 'Moja Rezerwacja',
    close: 'Zamknij Stronę'
  },  
  // rumano
  ro: {
    home: 'ACASĂ',
    lenguage: 'Limba',
    destinations: 'DESTINAȚIE',
    videoH: 'video',
    booknow: 'Rezerva acum',
    starqualifiers: 'CALIFICĂRI STAR',
    starrewards: 'RECOMPENSE STAR',
    contactus: 'CONTACTEAZĂ-NE',
    Howtoqualify:'Cum să te califici',
    mybooking: 'Rezervarea Mea',
    close: 'Închide'
  },  
});



/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
}).$mount('#app')