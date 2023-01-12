<template>
  <section style="margin-top: 50px;">
    <div class="card container-xxl col-5 p-5">
      <h2 class="text-center">Log in to Eventika</h2>

      <form onsubmit="login(event)" class="mt-5">

        <div class="mb-4">
          <label for="email" class="form-label">Enter your email</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
        </div>

        <div class="mb-4">
          <label for="password" class="form-label">Enter your password</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Password">
        </div>

        <button type="submit" class="btn btn-dark w-100 py-3 mt-4">Log in</button>

        <p class="text-center text-muted mt-5">Not a member?  <a href="sign_up.html" class="fw-bold text-body"><u>Register</u></a></p>

      </form>

    </div>
  </section>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>