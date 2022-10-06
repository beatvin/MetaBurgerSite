<template>
  
  <div class="globalBox">
    <div class="topnav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/notes">Notes</router-link>
      <router-link to="/metaburger">MetaBurger</router-link>
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

  width: 500px;
  margin: auto;

}

.contentBox{

  text-align: left;

}

/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04aa6d;
  color: white;
}

.contentBox {
  border: 2px solid black;
}
</style>