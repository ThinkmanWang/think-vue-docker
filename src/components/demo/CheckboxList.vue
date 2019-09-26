<template>
  <div>
    <input type="checkbox" id="jack" value="Jack" @click="onNameClick($event)">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" @click="onNameClick($event)">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" @click="onNameClick($event)">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ g_setVals }}</span>
    </div>
</template>

<script>



export default {
  name: 'CheckboxList'
  , props: {
    checkedNames: Set
    , lstData: Array
  }
  , data: function() {
    return {
      g_setVals: new Set()
    }
  }
  , methods: {
    func1: function() {
      
    }
    , onNameClick: function(event) {
        window.console.log("FXXK1");
        if (event.target.checked) {
            this.$data.g_setVals.add(event.target.value);
        } else {
            this.$data.g_setVals.delete(event.target.value);
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
