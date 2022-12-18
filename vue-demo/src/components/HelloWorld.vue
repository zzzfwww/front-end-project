<template>
  <div class="hello">
    <h3>Study Vue</h3>
    <p>{{ message}}</p>
    <div>{{ rawHtml}}</div>
    <div v-html="rawHtml"></div>
    <div :id="dynamicId"></div>
    <p> {{ num+100 }}</p>
    <p> {{flag ? "美眉":"抠脚汉"}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      message: "Day Day up",
      rawHtml: "<a href='https://www.baidu.com'>Baidu</a>",
      dynamicId: 8888,
      num: 100,
      flag: false
    }
  }
}
</script>

