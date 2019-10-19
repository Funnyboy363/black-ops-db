<template>
  <v-app>
<v-content>
    <v-toolbar height="250"
      dark
      prominent
      src="https://hdwallsource.com/img/2018/5/call-of-duty-black-ops-4-logo-wallpaper-65180-67395-hd-wallpapers.jpg"
    >
      <v-app-bar-nav>

      </v-app-bar-nav>

      
     
      <!-- <div class="flex-grow-1"></div> -->
      <v-row style="align-self: center;">
<v-col cols="12" xs="12" sm="5" md="5" lg="4">
      <v-toolbar-title><p style="font-size: 25px; text-align: center;">Black Ops DB</p></v-toolbar-title>
</v-col>
<v-col cols="12" xs="12" sm="2" md="2" lg="4"></v-col>
<v-col cols="12" xs="12" sm="5" md="5" lg="4">
  <p class="subtitle">Information Database</p>
</v-col>
      </v-row>
    </v-toolbar>
<app-nav></app-nav>
   

    <router-view></router-view>


<!-- <person-grid :people="people"></person-grid>
<person-grid :operator="operators"></person-grid> -->

<v-card height="150">
    <v-footer style="background-color: rgb(58, 58, 58);"
      absolute
      class="font-weight-medium"
    >
      <v-col style="color: white;"
        class="text-center"
        cols="12"
      >
        <strong>GSWEBDEV</strong> {{ new Date().getFullYear() }} 
      </v-col>
    </v-footer>
  </v-card>
    </v-content>
  </v-app>
</template>

<script>

import PersonGrid from './components/PersonGrid';
import { people } from './assets/people';
import { operators } from './assets/operators';
import Nav from './components/Nav';
import { ValidationProvider } from 'vee-validate';
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
    // PersonGrid
  },
  data: () => {
    return {
        people, operators
    }
  },
}


console.log (people);

</script>

 
<style scoped>


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