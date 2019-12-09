# final-project
Make sure to login with username: test1@gmail.com password: qwertyu
if the signup page doesn't work.
See [Black Ops 4 Database Site](https://blackops4db.netlify.com).

 ## Effectively use conditional logic and JavaScript array methods to render large lists.
Information was taken from operator.js and put into the person grid component to start the 
for loop. After wards, it's pushed into star wars person component and then the view router sees the loop
 ## Encapsulate your code as VueJS single-file components.
 Using the View Router, the components are seen as a single file component
## Work with the Vue-CLI to create and manage your project within a real development toolset.
```Javascript

```
## Properly use Git for your source version control with an established record of at least 4 days of commits each week from October 15th through December 6th.
Commits have been done as much as possible. 

## Allow communication between components using props, custom events, or local store.
Person component is one of the components using props. Local store is a part of the project. (store.js)
```Javascript
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
```
## Present a form for user input that provides useful form validation and feedback.
The create account and user sign in component should have form validation and feedback.
## Create a custom directive and use it on at least one of your components.
```Javascript

```
## Use a mix of animations and transitions to enhance some aspects of your project.
```Javascript

```
## Connect to a server using HTTP and display retrieved data (use vue-resource or Axios).
```Javascript

```
##  Provide at least 3 different routes with navigation between them using vue-router.
This is done in the navigation. Vue Router is used in app.vue
```Javascript
 <li v-if="auth"><router-link to="/signin"> <button @click="onLogout" class="logout">Logout</button></router-link></li>
```
##   Manage your application's state using vuex.
```Javascript

```
 ##   Structure, document, and deploy your final project code according to common industry practices.

npm run build

sent to github repo

pulled into netlify

### Use of Web-App
```
Welcome to my Rich Internet Applications final project. This website is a fan made Database website for Black Ops 4. To access the site all you have to do is create an account and then login. The website should be responsive. You should be able to see everything on phone. 
``` 


### Author's Information
```
Web Creator: Grant Shoop
Email Contact: grantshoop@gmail.com
Grant Shoop is currently attending Utah Valley University and working on attaining his 
Major in Web Development
```


