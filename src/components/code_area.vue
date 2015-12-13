<template>
  <pre>This is code mirror</pre>
  <div v-el:editor>Aloha</div>
</template>

<style>
  @import '~codemirror/lib/codemirror.css';
  .CodeMirror {
    border: solid thin #999;
  }
</style>

<script>
  import _ from 'underscore'
  import CodeMirror from 'codemirror'
  export default {
    name: 'CodeArea',
    props: {
      greeting: {
        type: String,
        required: true
      }
    },
    replace: false,
    attached: function(){
      let $editor = this.$els.editor
      window.cm = CodeMirror($editor, {
        mode:  "javascript",
        lineNumbers: true,
        value: "{}"
      })
    }
  }
</script>
