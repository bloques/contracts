require("babel-polyfill")

import Vue from 'vue'

import Aloha from './components/aloha.vue'
import CodeArea from './components/code_area.vue'
import ComponentForm from './components/component_form.vue'
import Split from 'split.js'

window.Aloha = Aloha
window.CodeArea = CodeArea

window.app = new Vue({
  el:"#app",
  components: {
    CodeArea,
    Aloha,
    ComponentForm
  }
})

Split(['#left', '#center', '#right'], {
  gutterSize: 8,
  cursor: 'col-resize'
})
