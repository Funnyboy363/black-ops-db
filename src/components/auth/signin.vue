<template>
<div>


  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
         <h2>Sign In</h2>
        <div class="input">
          <label for="email">Email Address:</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
        this.$store.dispatch('login', {email: formData.email, password: formData.password})
      }
    }
  }
</script>

<style scoped>


h2 {
  color: #F16800;
  text-align: center;
}



  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(46, 46, 46);
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #F16800;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid rgb(117, 55, 8);
    color: white;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
     background-color: rgb(134, 63, 8);
  }

  .submit button:hover,
  .submit button:active {
    background-color: rgb(148, 69, 9);
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