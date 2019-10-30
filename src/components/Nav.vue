<template>


    
    <ul class="nav nav-pills">
        <li><router-link to="/">Home</router-link></li>
         <li> <router-link to="/WeaponList">Weapons</router-link></li>
           <li> <router-link to="/Contact">Contact</router-link></li>
             <li> <router-link to="/signup">Sign Up</router-link> </li>
     <li> <router-link to="/signin">Sign In</router-link> </li>
     <li><router-link to="#"> Hello {{ name }} ! </router-link></li>
     <li><button @click="onLogout" class="logout">Logout</button></li>
    </ul>
    

</template>


<script>
import axios from 'axios';
export default {
data () {
  return {
    name: ''
  }
},


  created () {
    axios.get('https://black-ops-database.firebaseio.com/users.json')
    .then(res => {
     console.log(res)
     const data = res.data
     const users = []
     for (let key in data) {
      const user = data[key]
      user.id = key
      users.push(user)
     }
     console.log(users)
     this.name = users[0].name
    })
    .catch(error => console.log(error))
    
  },



}
</script>








<style scoped>



ul {
    background-color: #000000;
    padding: 15px 0;
   display: flex;

}


ul li:nth-child(1) {
    margin-left: 85px;
}

ul li {
    margin-right: 15px;
    border-right: 2px solid darkgray;
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