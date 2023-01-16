<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-xxl">
<!--        <a class="navbar-brand" href="index.html">Eventika</a>-->
        <router-link class="navbar-brand" :to="{name: 'Main'}">Eventika</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#eventsection">Events</a>
<!--              <router-link :to="{name: 'description'}" class="nav-link">Events</router-link>-->
            </li>
            <li class="nav-item">
<!--              <a class="nav-link" href="calendar.html">Calendar</a>-->
              <router-link :to="{name: 'calendar'}" class="nav-link">Calendar</router-link>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li v-show="userState===false">
              <router-link :to="{name: 'login'}"><button type="button" class="btn text-light" id="login">Log in</button></router-link>
            </li>
            <li v-show="userState===false">
             <router-link :to="{name: 'register'}"><button type="button" class="btn text-light" id="signup">Sign up</button></router-link>
            </li>
            <li v-show="userState">
              <router-link :to="{name: 'profile'}"><button type="button" class="btn text-light" id="profile">Profile</button></router-link>
            </li>
            <li v-show="userState">
              <button type="button" class="btn btn-danger" @click.prevent="logout" id="logout">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>

// import userstate from '../store/user'
export default {
  name: "Header",
  data: function(){
  return{
      // userState: userstate
  }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$store.commit('updateUser', false)
    }
  }

}
</script>

<style scoped>

</style>