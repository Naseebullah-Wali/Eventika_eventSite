<template>
<section>
  <section style="margin-top: 50px;">
    <div class="container-xxl pt-5">
      <div class="row">
        <div class="col-6 pt-4">
          <h1>Find your event</h1>
          <p class="w-75 pt-3">with Eventika people organize events, make friends, find support, grow a business, and explore their interests. Hundreds of events are happening every day—join the fun.</p>
        </div>
        <div class="col-6">
<!--          <img class="w-100" src="./img/event.jpg">-->
          <img class="w-100" alt="Not Found" src="../assets/event.jpg">
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container-xxl" style="margin-top: 160px;">
      <h2>Upcoming events</h2>
      <div class="d-flex justify-content-end" style="margin-right: 80px" onchange="filter()">
        <div class="dropdown  ms-3">
          <select class="form-select" aria-label=".form-select-lg example" id="event-type">
            <option>Any type</option>
            <option value="online">Online</option>
            <option value="inperson">In person</option>
          </select>
        </div>
        <div class="dropdown  ms-3">
          <select class="form-select" aria-label=".form-select-lg example" id="category">
            <option>Any category</option>
            <option value="technology">Technology</option>
            <option value="career">Career & Business</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
          </select>
        </div>
      </div>

      <div class="row mt-4" id="event_cards">
      </div>

    </div>
  </section>
</section>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

</style>