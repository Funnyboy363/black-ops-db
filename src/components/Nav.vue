<template>


    
    <ul class="nav nav-pills">
          <li v-if="auth"><router-link to="/dashboard">Home</router-link></li>
        <li v-if="auth"><router-link  to="/">Operators</router-link></li>
         <li v-if="auth"> <router-link to="/WeaponList">Weapons</router-link></li>
             <li v-if="!auth"> <router-link to="/signup">Sign Up</router-link> </li>
     <li v-if="!auth"> <router-link to="/signin">Sign In</router-link> </li>
     <li v-if="auth"><router-link to="/signin"> <button @click="onLogout" class="logout">Logout</button></router-link></li>
    </ul>
</template>


<script>
export default {
computed: {
  auth () {
    return this.$store.getters.isAuthenticated
  }
},
methods: {
  onLogout() {
    this.$store.dispatch('logout')
  }
}


}
</script>








<style scoped>



ul {
    background-color: #000000;
    padding: 15px 0;
   display: flex;
   justify-content: flex-end;
    padding-right: 85px;
  
    

}


ul li {
    margin-right: 35px;
padding-right: 15px;
display: block;
}

ul li > a {
    color: #FF6D00;
    opacity: 1;
   transition: .25s ease-in-out;
   -moz-transition: .25s ease-in-out;
   -webkit-transition: .25s ease-in-out;
     text-decoration: none;
}

ul li > a:hover {
    color: white;
    
    text-decoration: none;
}

.logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color:  #FF6D00;
    cursor: pointer;
}



</style>