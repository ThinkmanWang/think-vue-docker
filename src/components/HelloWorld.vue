<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <input ref="editText" ><br/>

    <input ref="editText1">

    <mt-button ref="btnFirst" type="default" @click="showToast()">default</mt-button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
    , message: String
  }
  , methods: {
    showToast: function() {
      window.console.log("FXXK");
      this.message = "HAHA";
      this.$refs.editText.value = "123";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
