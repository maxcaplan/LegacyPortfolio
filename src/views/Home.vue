<template>
  <div id="home">
    <splash />

    <navbar />

    <div id="content" class="bg-dark">
      <div id="nav-spacer"></div>

      <hero />
    </div>
  </div>
</template>

<script>
import Splash from "@/components/Splash.vue";

import Navbar from "../components/Navbar.vue";
import Hero from "../components/Header.vue";

export default {
  name: "Home",

  components: {
    Splash,
    Navbar,
    Hero,
  },

  mounted() {
    let welcome = `
 __  __                      
|  \\/  |__ ___ __            
| |\\/| / _  \\ \\ /            
|_|__|_\\__,_/_\\_\\_           
  / __|__ _ _ __| |__ _ _ _  
 | (__/ _  | '_ \\ / _  | ' \\ 
  \\___\\__,_| .__/_\\__,_|_||_|
           |_|

/ Developer and Designer /           
           `;

    console.log(welcome);
  },
};
</script>
