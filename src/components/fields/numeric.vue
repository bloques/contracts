<template>
  {{contract.name}}:
  <input id='num' type="text" pattern="[0-9]*" v-model="contract.value" placeholder="edit me" number>
</template>

<script>

  export default {
    name: 'NumericField',
    props: {
      contract: {
        type: Object,
        required: true,
      },
      target: {
        type: Object,
        required: true,
      }
    }
  }
</script>
