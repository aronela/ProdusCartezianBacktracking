import Vue from 'vue';
import ProdusCartezian from './ProdusCartezian.vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap');

var app = new Vue ({
   el: '#app',
    render: r => r(ProdusCartezian),
});