<template>
  <div class="hello">
   <h3>列表渲染</h3>
   <ul>
    <li v-for="item in newsList" :key="item.id">
      {{ item.title }}
    </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      newsList:[
        {
          id:1001,
          title:"news daily 1"
        },
        {
          id:1002,
          title:"news daily 2"
        },
        {
          id:1003,
          title:"news daily 3"
        },
        {
          id:1004,
          title:"news daily 4"
        }
      ]
    }
  }
}
</script>

