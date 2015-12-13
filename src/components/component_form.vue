<template>
  <pre>Compoinent form {{greeting}}</pre>
  <div v-for="entity in contractEntities">
    name: {{entity.name}} type: {{entity.type}} required: {{entity.required}}
  <div>
</template>

<script>
  import Aloha from './aloha.vue'
  import { parseContract } from './contract_parser.js'
  export default {
    name: 'ComponentForm',
    inspect: function(x){
      console.log("INSPECTING",x)
    },
    props: {
      contract: {
        type: Object,
        required: true,
        default: function(){
          return Aloha.props
        }
      }
    },
    computed: {
      greeting: function(){
        return "ALOHA!"
      },
      contractEntities: function(){
        //console.log("----***")
        //console.log(this)
        return parseContract(this.contract)
      }
    }
  }
</script>
