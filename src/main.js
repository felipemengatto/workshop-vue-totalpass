import VeeValidate from 'vee-validate';
import Vue from 'vue';
import VueTheMask from 'vue-the-mask';

Vue.use(VeeValidate);
Vue.use(VueTheMask);

import '@/scss/index.scss';
import store from '@store';
import router from './router';

Vue.config.productionTip = false;

window.addEventListener('load', () => {
    new Vue({
        el: 'SegFitness',
        store,
        router,
        template: `<div class="container-fluid h-100 l-segfitness">
                        <div class="row ml-sm-5 h-100">
                            <div class="col col-sm-8 col-md-5 shadow">
                                    <transition
                                        name="fade"
                                        mode="out-in"
                                    >
                                        <router-view />
                                    </transition>
                            </div>
                        </div>
                    </div>`
    });
});
