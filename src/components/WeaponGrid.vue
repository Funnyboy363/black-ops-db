<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="3" md="4" sm="6" xs="12" v-for="person in people" :key="person.name">  
            <weapon-gun :weapon="weapon"></weapon-gun>
            </v-col>
        </v-row>
    </v-container>
</template>
<!-----------v for loop should go here---------->



<script>

import { weapon } from '../assets/weapons';

export default {
    data() {
        return {
            images: []
        }
    },
    props: ["weapon"],
    components: {
        WeaponGun
    }
}

</script>



<style scoped>



</style>