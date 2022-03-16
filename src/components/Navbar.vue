<template>
  <nav class="navbar main-nav border-less fixed-top navbar-expand-lg p-0">
    <div class="container-fluid p-0">
      <!-- logo -->
      <a class="navbar-brand" href="index.html">
        <img src="@/assets/images/logo2022.png" alt="logo Wer 2022" />
      </a>
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
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Tracks
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#"
                  >Regular Research Track (WER-RT)</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Software Requirement Tools Track (WER-SRTT)</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Master's and Doctoral Track (WER-MDT)</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#">Tutorial Track (WER-TT)</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Journal First Track (WER-JFT)</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Organization
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Steering Committee</a></li>
              <li>
                <a class="dropdown-item" href="#">Local Organization Chairs</a>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Regular Track Program and Tutorial Chairs</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Software Requirement Tools Track Chair</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Master's and Doctoral Track Chairs</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#">Journal First Chairs</a>
              </li>
              <li><a class="dropdown-item" href="#">Proceedings Chair</a></li>
              <li><a class="dropdown-item" href="#">Publicity Chairs</a></li>
              <li><a class="dropdown-item" href="#">Program Committee</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
        <a href="pricing.html" class="ticket">
          <img src="@/assets/images/icon/ticket.png" alt="ticket" />
          <span>Registration</span>
        </a>
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