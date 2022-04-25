<template>
  <div class="header section">
    <v-container>
      <v-row align="center">
        <v-col cols="6">
          <h1>Kabar Gembira untuk orang tercinta</h1>
          <p>
            Kabar Gembira untuk orang tercinta. Sebarkan hari paling epic anda
            dengan undangan online
          </p>
          <v-btn> Yuk Buat </v-btn>
        </v-col>
        <v-col cols="6">
          <div class="img-ab-header">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              :src="require('../assets/img/img-main.png')"
              alt="image"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
