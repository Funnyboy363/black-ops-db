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

<br style="margin-top: 40px;"><br><br><br>
    <v-footer absolute class="font-weight-medium footer" style="background-color: rgb(241, 104, 0);">
    <div class="row" style="padding: 0 350px;">
      <div class="col-md-4"><a href="https://twitter.com/gs_webdev" target="_blank">Twitter</a></div>
      <div class="col-md-4"><a href="https://github.com/Funnyboy363" target="_blank">GitHub</a></div>
      <div class="col-md-4"><a href="https://favoritefruit.herokuapp.com/" target="_blank">Full Stack App</a></div>
    </div>
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
        people, operators,
     
    }
  },
  created() {
    this.$store.dispatch('tryAutoLogin')
  }
}

</script>

 
<style scoped>

.footer span {
  text-align: center;
}


.footer {
  padding: 20px 0;
  text-align: center;
}

footer a {
  color: rgb(54, 54, 54);
  text-decoration: none;
   opacity: 1;
   transition: .25s ease-in-out;
   -moz-transition: .25s ease-in-out;
   -webkit-transition: .25s ease-in-out;
}


footer a:hover {
  color: rgb(121, 51, 5);
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