import Vue from 'vue'
const MyButton = () => import('@/components/MyButton')

Vue.component('MyButton', MyButton)
