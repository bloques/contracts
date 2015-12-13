<template lang='jade!unindent'>
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
      }
    },
    replace: false
  }
</script>
