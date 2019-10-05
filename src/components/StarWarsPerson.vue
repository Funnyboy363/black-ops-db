<template>
<div>
  
 <v-card
    class="mx-auto"
    max-width="350"
  >
     
 <v-img style="background-position: top center;"
      class="white--text"
      height="350px"
       :src="person.image">
      <!-- src="../assets/images/battery.jpg" -->
      <!-- :src="require(person.image[0])" -->
    </v-img>
     
    <v-card-text>
      <span class="text--primary">
         <span style="font-weight: bold;">Specialist Name:</span><span> {{ person.name }}</span><br>
        <span style="font-weight: bold;">Call Name:</span><span> {{ person.subname }}</span><br>
        <span style="font-weight: bold;">Ability:</span><span> {{ person.ability }} </span> <br>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-row style="margin-left: 10px;" justify="left">
    <v-btn small width="80px"
      color="orange" dark @click.stop="dialog = true">
      more
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">More about {{ person.name}} </v-card-title>

        <v-card-text>
        <h3>Equipment:</h3> {{ person.equipment }}
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
           Close
          </v-btn>

          <!-- <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </v-card-actions>
  </v-card>   


</div>

</template>



<script>
import { people } from '../assets/people';


export default {
    props: ["person", "operator"],


data () {
      return {
        dialog: false,
      }
    }
  

}
</script>




<style scoped>



 
</style>