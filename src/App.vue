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

      <v-toolbar-title><p style="font-size: 35px; border-bottom: 8px solid #F16800;">Black Ops DB</p></v-toolbar-title>
     
      <div class="flex-grow-1"></div>
  <p class="subtitle">Information Database</p>
     
    </v-toolbar>
<person-grid :people="people"></person-grid>
<person-grid :operator="operators"></person-grid>
    </v-content>
  </v-app>
</template>

<script>

import PersonGrid from './components/PersonGrid';
import { people } from './assets/people';
import { operators } from './assets/operators';



export default {
  name: 'App',
  components: {
    PersonGrid,
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
.v-content {
  background-color: rgb(58, 58, 58);
}

.v-toolbar__title {
 margin: auto 0;
 padding-left: 180px;
}


.subtitle {
  font-size: 35px;
  border-bottom: 8px solid #F16800;
  justify-content: flex-end;
  align-self: center;
  margin-right: 100px;
}

</style>