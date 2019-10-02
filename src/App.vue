<template>
  <v-app>
<v-content>
<person-grid :people="people"></person-grid>
    </v-content>
  </v-app>
</template>

<script>
import PersonGrid from './components/PersonGrid';
import { people } from './assets/people';

export default {
  name: 'App',
  components: {
    PersonGrid,
  },
  data: () => {
    return {
        people
    }
  },
}

console.log (people);

</script>
