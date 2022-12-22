<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>home</h3>
    <p>count={{ $store.getters.getCounter }}</p>
    <p>{{ getCounter }}</p>
    <button @click="addClickHandle">add</button>
    <button @click="addAsyncClickHandle">async</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters,mapMutations,mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
  },
  computed:{
    ...mapGetters(["getCounter"])
  },
  methods: {
    ...mapMutations(["addCounter"]),
    ...mapActions(["asyncAddCounter"]),
    // 固定调用方式
    addClickHandle(){
      //this.$store.commit("addCounter",10)
      this.addCounter(20)
    },
    addAsyncClickHandle(){
      //this.$store.dispatch("asyncAddCounter");
      this.asyncAddCounter()
    }
  },
}
</script>
