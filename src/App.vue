<template>
  <v-app>
<v-content>
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

</style>