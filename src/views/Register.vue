<template>
  <section style="margin-top: 50px;">
    <div class="card container-xxl col-5 p-5">
      <h2 class="text-center">Create an account</h2>

      <form onsubmit="signup(event)" class="mt-5">

        <div class="mb-4">
          <label for="firstname" class="form-label">First name</label>
          <input type="text" class="form-control" id="firstname" name="firstname" placeholder="Your first name">
        </div>

        <div class="mb-4">
          <label for="lastname" class="form-label">Last name</label>
          <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Your last name">
        </div>

        <div class="mb-4">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
        </div>

        <div class="mb-4">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Your password">
        </div>

        <button type="submit" class="btn btn-dark w-100 py-3 mt-4">Register</button>

        <p class="text-center text-muted mt-5">Have already an account?  <a href="log_in.html" class="fw-bold text-body"><u>Log in here</u></a></p>

      </form>

    </div>
  </section>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>