<template>
  <div class="container-fluid">
    <h1 class="mt-3">
      Watchlist
    </h1>
    <hr>

    <div class="row">
      <div
        v-for="item in watchlist"
        :key="item.id"
        class="col-3"
      >
        <serie-box :serie="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SerieBox from '../../components/Seriebox.vue'
export default {
  name: 'Watchlist',
  components: {
    SerieBox
  },
  computed: {
    ...mapState('watchlist', ['watchlist'])
  },
  mounted () {
    this.ActionFindWatchlist()
  },
  methods: {
    ...mapActions('watchlist', ['ActionFindWatchlist'])
  }
}
</script>

<style>
</style>