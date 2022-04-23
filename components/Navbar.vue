<template>
  <div>
    <v-app-bar elevate-on-scroll fixed class="navbar__height">
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-img
            max-height="83"
            max-width="83"
            :src="require('../static/logo.png')"
            alt="logo-epic"
          ></v-img>
          <div class="d-flex flex-column font-base ml-3">
            <span class="font-weight-bold text-3xl">EpicDay</span>
            <span class="text--secondary line-height"
              >#InvitationEnthusiast</span
            >
          </div>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text> Beranda </v-btn>
      <v-btn text> Fitur </v-btn>
      <v-btn text> Harga </v-btn>
      <v-btn text> Testimoni </v-btn>
      <v-btn> Pesan Sekarang </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
