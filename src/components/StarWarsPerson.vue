<template>
<div>
  

  
 <v-card
    class="mx-auto"
    max-width="350"
    height="350px"
  >
     
 <v-img style="background-position: top center;"
      class="white--text"
      height="150px"
       :src="person.image[0]">
      <!-- src="../assets/images/battery.jpg" -->
      <!-- :src="require(person.image[0])" -->
     <v-card-title class="align-end fill-height card-title"> {{ person.name }} </v-card-title>
    </v-img>
     
    <v-card-text>
      <span class="text--primary">
         <!-- <span style="font-weight: bold;">Specialist Name:</span><span> {{ person.name }}</span><br> -->
        <span style="font-weight: bold;">Call Name:</span><span> {{ person.subname }}</span><br>
        <span style="font-weight: bold;">Ability:</span><span style="font-size: 12px;"> {{ person.ability }} </span> <br>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-row style="margin-left: 10px;" justify="left">
    <v-btn small width="80px"
      color="#F8740F" dark @click="togglePlayable()">
      more
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="500">
      <v-card>
        
        <LazyYoutubeVideo v-if="playable" :url="person.video"></LazyYoutubeVideo>
                <!-- <v-img :src="person.image[1]"></v-img> -->
        <v-card-title class="headline"><span style="font-size: 15px; border-bottom: 2px solid black;">More about {{ person.name}}</span></v-card-title>


        <v-card-text>
        <h3>Equipment:</h3> {{ person.equipment }}
        </v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn class="" id="video"
            color="green darken-1"
            text 
            @click="togglePlayable()">
           Close
          </v-btn>

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
import LazyYoutubeVideo from 'vue-lazy-youtube-video';




export default {

    props: ["person", "operator"],


data () {
      return {
        dialog: false,
        toggleVideo: false,
        playable: false
      }
    },

methods: {
  togglePlayable() {
    this.dialog = !this.dialog,
    this.playable = !this.playable
  }
},

   name: 'YourAwesomeComponent',
  components: {
    LazyYoutubeVideo
  },





}






</script>




<style scoped>



 
</style>