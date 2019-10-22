<template>
  <v-app>
<v-content>
    <v-parallax height="550"
      dark
      prominent
      src="https://i.ytimg.com/vi/avv97ZFhZTo/maxresdefault.jpg"
    >
      <!-- <v-app-bar-nav>

      </v-app-bar-nav> -->

      

       <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Black Ops 4</h1>
        <h4 class="subheading">Information Database</h4>
      </v-col>
    </v-row>
    </v-parallax>
<app-nav style="position: sticky; top: 0; z-index: 1;"></app-nav>
   

    <router-view></router-view>

<br style="margin-top: 10px;"><br><br><br>
    <v-footer absolute class="font-weight-medium footer" style="background-color: rgb(241, 104, 0);">
      <v-col cols="4"> </v-col>
     <v-col cols="4">  <strong>GSWEBDEV</strong> {{ new Date().getFullYear() }} </v-col>
     <v-col cols="4"></v-col>
    </v-footer>

    </v-content>
  </v-app>
</template>

<script>

import { people } from './assets/people';
import { operators } from './assets/operators';
import Nav from './components/Nav';
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});


export default {
  name: 'App',
  components: {
    appNav: Nav,
   
  },
  data: () => {
    return {
        people, operators
    }
  },
}

</script>

 
<style scoped>

.footer span {
  text-align: center;
}


.footer {
  padding: 30px 0;
  text-align: center;
}

 .v-card {
  background-color: rgb(241, 104, 0);
}


.v-content {
  background-color: rgb(58, 58, 58);
}



.subtitle {
  font-size: 25px;
 text-align: center;
}


</style>