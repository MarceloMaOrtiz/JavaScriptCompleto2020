import Vue from 'vue'
import App from './App.vue'

new Vue({
    // el: '#app', // É possível substituir essa linha pelo .$mount("#app")
    // render recebe um elemento Vue e renderiza na página. CreateElement (h) é outra função.
    // Sendo assim nesse caso o componente Raiz.
    // render(createElement) {
    //     return createElement(App)
    // }
    render: h => h(App) // Esse é o código criado com o vue create
}).$mount("#app")