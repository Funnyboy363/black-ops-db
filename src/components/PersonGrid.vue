<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="3" md="4" sm="6" xs="12" v-for="person in people" :key="person.name">  
            <star-wars-person :person="person"></star-wars-person>
            </v-col>
        </v-row>
    </v-container>
</template>
<!-----------v for loop should go here---------->



<script>
import StarWarsPerson from "../components/StarWarsPerson";
import { people } from '../assets/people';

export default {
    data() {
        return {
            images: []
        }
    },
    props: ["people"],
    components: {
        StarWarsPerson
    }
}

</script>



<style scoped>



</style>