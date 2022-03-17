<template>
  <nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
    <div class="container-fluid p-0">
      <!-- logo -->
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/logo2022.png" alt="logo Wer 2022" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="calls">Calls</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="organization">Organization</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="contact">Contact</router-link>
          </li>
        </ul>
        <router-link class="nav-link ticket" to="pricing">
          <img src="@/assets/images/icon/ticket.png" alt="ticket" />
          <span>Registration</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style>
</style>