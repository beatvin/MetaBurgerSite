<template>
  
  <div class="globalBox">
    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/buy">Buy</router-link>
    </div>
    <div class="contentBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
* {
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.globalBox{

  width: 600px;
  margin: auto;

}

.contentBox{

  text-align: left;

}


.topnav {
  background-color: #333;
  overflow: hidden;
}


.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}


.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.contentBox {
  border: 2px solid black;
}
</style>