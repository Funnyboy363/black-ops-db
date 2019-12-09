<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <h2>Sign Up</h2>
        <div class="input" :class="{invalid: $v.email.$error}">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
                  <p v-if="!$v.email.email">Please Provide a valid email</p>
        </div>
        <div class="input">
          <label for="name">Name</label>
          <input
                  type="text"
                  id="name"
                  v-model="name">
        </div>
        <div class="input" :class="{invalid: $v.password.$error}">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
                   <p v-if="!$v.password.minLength">Password must be 6 characters</p>
        </div>
        <div class="input" :class="{invalid: $v.confirmPassword.$error}">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  @input="$v.confirmPassword.$touch()"
                  v-model="confirmPassword">
                  <p v-if="!$v.confirmPassword.sameAs">Passwords do not match</p>
        </div>
        <div class="submit">
          <button type="submit" @click="snackbar = true" :disabled="$v.$invalid">Submit</button>
        </div>
      </form>
      <v-snackbar
      v-model="snackbar"
    >
      {{ text }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    </div>
  </div>
</template>

<script>
import axios from '../../axios-auth';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
  export default {
    data () {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false,
        snackbar: false,
      text: 'Success! Sign In to Get Started',
      }
    },
    validations: {
      email: {
 required,
 email
},
password: {
  required,
  minLength: minLength(6)
},
confirmPassword: {
sameAs: sameAs('password')
}
    },
    methods: {
      onSubmit () {
        const formData = {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        }
        console.log(formData)
        axios.post('/signupNewUser?key=AIzaSyDzMY1R5XT_ytoKRjjbsGoAKLxghQZuDAY', {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
          
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }
  }
</script>

<style scoped>


h2 {
  color: #F16800;
  text-align: center;
}

  .signup-form {
    width: 400px;
    margin: 30px auto;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
    background-color: rgb(46, 46, 46);
      border-radius: 10px;
      color: white;
  }

  .input {
    margin: 10px auto;
    color: white;
  }

  .input label {
    display: block;
     color: #F16800;
    
    margin-bottom: 6px;
  }

  .input.inline label {
    display: inline;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input.inline input {
    width: auto;
  }

  .input input:focus {
    outline: none;
   
    background-color: #eee;
  }


input.invalid input {
  border: 1px solid red important!;
  background-color: #ffc99a !important;
}

input.invalid label {
  border: 1px solid red !important;
}


  .input select {
    border: 1px solid #ccc;
    font: inherit;
  }

  .hobbies button {
    border: 1px solid #521751;
    background: #521751;
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: #8d4288;
  }

  .hobbies input {
    width: 90%;
  }

  .submit button {
   border: 1px solid rgb(117, 55, 8);
    color: rgb(117, 55, 8);
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: rgb(168, 78, 9);
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
</style>