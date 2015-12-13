<template>
  <pre>Compoinent form</pre>
  <div v-for="entity in contractEntities">

    <component :is="entity.type" :contract="entity">
    </component>
  </div>
  <hr/>
  <div>
    {{contractValue | json }}
  </div>
</template>

<script>
  import Aloha from './aloha.vue'

  import StringField from './fields/string.vue'
  import OtherField from './fields/other.vue'
  import NumericField from './fields/numeric.vue'

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
    data: function(){
      // const dataTargets = _.mapObject(this.contract, function(val,key){
      //   return {}
      // })
      return {
        //targets: dataTargets,
        contractEntities: parseContract(this.contract)
      }
    },
    computed: {
      contractValue: function(){
        return _.mapObject(this.contractEntities,function(v,k){
          return v.value
        })
      }
    },
    components: { StringField, OtherField, NumericField }
  }
</script>
