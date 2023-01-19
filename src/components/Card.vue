<template>
<section>
  <div class="row ">
    <div class="col-md-4 mt-2" v-for="info in cardInfo" :key="info.id">
      <div class="card h-100">
       <img src=../assets/card5.webp  alt="Not Found" class="card-img-top">
        <img :src="info.img"  alt="Not Found" class="card-img-top">
        <div class="card-body">

          <h5 class="card-title ">{{info.title}}</h5>
          <p class="card-text">{{ info.date }}</p>
          <p class="card-text">{{ info.location }}</p>
          <router-link :to="`/Description/${info.id}`" >
          <button  class="btn btn-dark mt-3 w-100">About event</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Card",
  props:{
    cardInfo:{
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>