<template>
<div>
    <v-card>
<v-card-title>
<div>
    <h3> {{ person.name }} </h3>
    <p>Birth Year: {{ person.birth_year }} </p>
    <p>Gender: {{ person.gender }} </p>
</div>

</v-card-title>
<v-card-actions>

</v-card-actions>
    </v-card>



 <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title class="align-end fill-height">{{ person.name }} </v-card-title>
    </v-img>

    <v-card-text>
      <span>Number 10</span><br>
      <span class="text--primary">
        <span> {{ person.birth_year }}</span><br>
        <span>  {{ person.gender }} </span>
      </span>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>   


</div>

</template>



<script>

export default {
    props: ["person"],


}
</script>




<style scoped>


</style>