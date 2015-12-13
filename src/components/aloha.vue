<template lang='jade!unindent'>
div
  pre This is the Aloha component
  h1 {{ greeting }}
</template>

<script>
  export default {
    name: 'Aloha',
    props: {
      greeting: {
        type: String,
        required: true
      },
      tel: {
        type: Number,
        required: false
      },
      owner: {
        type: String,
        required: true
      }
    },
    replace: false
  }
</script>
