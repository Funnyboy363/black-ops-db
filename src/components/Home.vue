<template>
<div class="container">
<person-grid :people="people"></person-grid>
<person-grid :operator="operators"></person-grid> 

</div>
</template>


<script>
import PersonGrid from '../components/PersonGrid';
import { people } from '../assets/people';
import { operators } from '../assets/operators';



export default {
  components: {
    PersonGrid
  },
  data: () => {
    return {
        people, operators
    }
  },
}
</script>

<style scoped>

h2 {
  font-size: 36px;
  color: #FF6D00;
  margin: 15px 0;
}

</style>