<template>
<section>
  <div class="container-xxl col-9" style="margin-top: 50px;">
    <div class="row justify-content-center">
      <div class="col-md-3">
        <div class="py-5 bg-dark rounded-top">
          <img src="../assets/avatar.svg" class="w-50 mx-auto d-block">
          <h5 class="text-white text-center mt-4">Kyunney Nikiforova</h5>
        </div>
        <ul class="list-group">
          <li class="list-group-item">
            <a class="text-decoration-none link-dark" href="#">My profile</a>
          </li>
          <li class="list-group-item list-group-item-secondary">
            <a class="text-decoration-none link-dark active" aria-current="true" href="#">My events</a>
          </li>
          <li class="list-group-item">
            <a class="text-danger text-decoration-none link-dark" href="index.html">Log out</a>
          </li>
        </ul>
      </div>

      <div class="col-md-9" style="padding-left: 50px;">
        <h3>My events</h3>
        <div class="row mt-4">
          <div class="col">
            <div class="card card2">
              <img src="../assets/card1.webp" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Frontend Development Lightning Talks</h5>
                <p class="card-event-date pt-2">Thu, Oct 13 · 8:45 PM</p>
                <p class="card-event-location">2 Bankside, London</p>
                <a href="#" class="btn btn-dark mt-3">About event</a>
                <a href="#" class="btn btn-outline-dark mt-3">Cancel</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card2">
              <img src="../assets/card2.webp" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">What is the Metaverse? Meta explains it all.</h5>
                <p class="card-event-date pt-2">Wed, Oct 19 · 6:00 PM</p>
                <p class="card-event-location">Online</p>
                <a href="#" class="btn btn-dark mt-3">About event</a>
                <a href="#" class="btn btn-outline-dark mt-3">Cancel</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card card2">
              <img src="../assets/card6.webp" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">On Kotlin: #4</h5>
                <p class="card-event-date pt-2">Thu, Oct 20 · 8:00 PM</p>
                <p class="card-event-location">WeWork - Office Space & Coworking, London</p>
                <a href="#" class="btn btn-dark mt-3">About event</a>
                <a href="#" class="btn btn-outline-dark mt-3">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>