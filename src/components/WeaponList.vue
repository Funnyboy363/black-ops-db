<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    
      :src="item.src"
    ></v-carousel-item>
  <p>test text</p>
  </v-carousel>
</template>




<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/10/12043158/Image-from-iOS-10.jpg',
          },
          {
            src: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/10/12043217/Image-from-iOS-11.jpg',
          },
          {
            src: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/10/12043505/Image-from-iOS-12.jpg',
          },
          {
            src: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/10/12043242/Image-from-iOS-13.jpg',
          },
           {
            src: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/10/12043304/Image-from-iOS-14.jpg',
          },
           {
            src: 'https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2018/12/17110247/Swat-RFT-1024x576.jpg',
          },
        ],
      }
    },
  }
</script>


<style scoped>
.v-responsive__content {
    width: 100%;
    height: 100%;
}

.v-responsive__content image {
    width: 100%;
    height: 100%;
}

.v-responsive__sizer {
   width: 100%;
    height: 100%;
}

.v-responsive__content.image {
  width: 100%;
  height: 100%;
}

.v-image {
 width: 100%;
}



</style>