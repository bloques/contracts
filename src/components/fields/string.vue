<template>
  {{contract.name}}:
  <input type="text" v-model="contract.value" placeholder="edit me">
</template>

<script>

  export default {
    name: 'StringField',
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
