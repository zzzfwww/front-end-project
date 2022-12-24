<template>
  <div class="hello">
    请输入：<input v-model="msg"> 
    <button @click="requestClick">Send</button>
    <p>{{ resMsg }}</p>
  </div>
</template>

<script>
import api from "../api/index";

export default {
  name: 'HelloWorld',
  data(){
    return{
      msg:"你好",
      resMsg:"",
    }
  },
  mounted() {
    // api.getChengpin().then(res =>{
    //   console.log(res.data);
    // })
    // api.postLogin().then(res=>{
    //   console.log(res.data)
    // })
  },

  methods:{
    requestClick(){
      api.chatBot(this.msg).then(res=>{
        this.resMsg = res.data.message ? res.data.message : "此词难到了我，请换个词"
      })
    }
  }
}
</script>
