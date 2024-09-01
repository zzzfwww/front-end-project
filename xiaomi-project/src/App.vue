<template>
  <div class="app">
    <!-- 头部 -->
    <div class="header">
      <div class="content">
        <ul>
          <li>登录</li>
          <li>|</li>
          <li>注册</li>
          <li @click="openOrder">我的订单</li>
          <li @click="openCollect">我的收藏</li>
          <li @click="openCart" class="shopcart">
            <el-icon><ShoppingCartFull /></el-icon>
            <span> 购物车(0) </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 头部end -->
    <!-- 导航 -->
    <div class="nav">
      <div class="content">
        <div class="logo">
          <img src="./assets/logo.png" />
        </div>
        <div class="menu">
          <el-menu
            :default-actvie="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/goods">全部商品</el-menu-item>
            <el-menu-item index="/about">关于我们</el-menu-item>
          </el-menu>
        </div>
        <div class="search">
          <el-input
            v-model="searchText"
            placeholder="请输入搜索内容"
            class="inputh-with-select"
          >
            <template #append>
              <el-button :icon="Search"></el-button>
            </template>
          </el-input>
        </div>
      </div>
    </div>
    <!-- 导航end -->
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="top">
        <a class="icon1" href="javascript:;">7天无理由退货</a>
        <a class="icon2" href="javascript:;">满99元全场包邮</a>
        <a class="icon3" href="javascript:;">100%品牌保证</a>
      </div>
      <div class="bottom">
        <p>
          <a href="javascript:;">首页</a>
          <span>|</span>
          <a href="javascript:;">全部商品</a>
          <span>|</span>
          <a href="javascript:;">关于我们</a>
        </p>
        <p>Copyright © 2023-2023 小米商城 All Rights Reserved.</p>
      </div>
    </div>
    <!-- 底部end -->
  </div>
</template>

<script setup>
// 导入图标
import { ShoppingCartFull, Search } from "@element-plus/icons-vue";
// 导入组合式api
import { ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();
// 高度菜单项
const activeIndex = ref("/");
const searchText = ref("");

const openOrder = () => {
  console.log("打开订单");
  router.push("/order");
};
const openCollect = () => {
  console.log("打开收藏");
  router.push("/collect");
};
const openCart = () => {
  console.log("打开购物车");
  router.push("/shoppingCart");
};
</script>
<style Lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-size: 14px;
}
.app {
  width: 100vw;
  .header {
    height: 40px;
    background-color: #3d3d3d;
    .content {
      width: 1226px;
      margin: 0 auto;
      color: #b0b0b0;
      display: flex;
      justify-content: flex-end;
      ul {
        display: flex;
        align-items: center;
        height: 40px;
        li {
          cursor: pointer;
          margin: 0 6px;
          &:hover {
            color: #fff;
          }
          &.shopcart {
            width: 120px;
            height: 40px;
            margin-left: 15px;
            background-color: #424242;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
              margin-left: 3px;
            }
            &:hover {
              color: #ff6700;
              background-color: #fff;
            }
          }
        }
      }
    }
  }
  .nav {
    margin-top: 20px;
    .content {
      width: 1226px;
      margin: 0 auto;
      border-bottom: 1px solid #b0b0b0;
      display: flex;
      align-items: center;
      .menu {
        flex: 1;
        margin-left: 100px;
        .el-menu--horizontal {
          border-bottom: none;
        }
      }
      .search {
        width: 300px;
        border: 1px solid;
      }
    }
  }
  .main {
    margin: 20px, 0;
    /* height: 600px; */
    background-color: #f5f5f5;
  }
  .footer {
    background-color: #2f2f2f;
    height: 210px;
    .top {
      width: 1226px;
      height: 145px;
      border-bottom: 1px solid #3d3d3d;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: white;
        font-size: 20px;
        width: 200px;
        height: 40px;
        background: url(./assets/bg.png) no-repeat;
        padding-left: 45px;
        line-height: 40px;
        &.icon1 {
          background-position: 0 0;
        }
        &.icon2 {
          background-position: 0 -40px;
          margin: 0 150px;
        }
        &.icon3 {
          background-position: 0 -80px;
        }
      }
    }
    .bottom {
      width: 1226px;
      margin: 0 auto;
      color: #888888;
      p {
        text-align: center;
        margin-top: 20px 0;
        a {
          color: #888888;
        }
        span {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>
