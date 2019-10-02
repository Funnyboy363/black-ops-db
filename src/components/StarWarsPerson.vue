<template>
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
</template>



<script>

export default {
    props: ["person"]

}
</script>




<style scoped>

</style>