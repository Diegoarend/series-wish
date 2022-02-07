<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
      class="navbar-brand"
      :to="{ name: 'home' }"
    >
      Series Wished
    </router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link
          v-for="(route, i) in routes"
          :key="i"
          exact
          tag="li"
          class="nav-item"
          exact-active-class="active"
          :to="{ name: route.name }"
        >
          <a
            href="#"
            class="nav-link"
          >
            {{ route.meta.title }}
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }
  }
}
</script>