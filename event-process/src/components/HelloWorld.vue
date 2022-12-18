<template>
  <div class="hello">
    <button @click="counter += 1">click:counter={{ counter }}</button>
    <button @click="clickHandle">menuClick</button>
    <p> {{ message }}</p>
    <button @click="say('hi')">say hi</button>
    <button @click="say('what')">say what</button>
    <ul>
      <li @click="clickItem(item)" v-for="(item,index) in names" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      counter:1,
      message:"send message",
      names:["iwen","ime","frank"]
    }
  },
  methods:{
    clickHandle(event){
      // 在事件中，读取data中的属性，是需要通过this.属性
      this.message = "message is recall"
      // `event` 是原生DOM event
      console.log(event)
      event.target.innerHTML= "点击之后"
    },
    say(data){
      console.log(data)
    },
    clickItem(item){
      console.log(item)
    }
  }
}
</script>
