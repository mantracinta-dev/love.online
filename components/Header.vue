<template>
  <div class="header set-pattern section d-flex align-center">
    <v-container>
      <v-row align="center">
        <v-col cols="6">
          <h1 class="text-4xl font-weight-bold mb-3 color-text--blue line-6px">
            Sebarkan Kabar Bahagiamu.
          </h1>
          <p class="text-4xl font-weight-bold text--secondary mb-6">
            Murah, Mudah & Mewah
          </p>
          <p class="mb-6 text--primary">
            Kabar Gembira untuk orang tercinta. Sebarkan kabar bahagiamu
            keseluruh teman dan kerabat dengan sentuhan teknologi. Bersama
            EpicDay yang membuat undangan kamu jauh lebih Epic dari yang
            lainnya.
          </p>
          <v-btn
            rounded
            dark
            class="font-weight-bold text-capitalize text-base color-bg--red"
          >
            Yuk Buat Sekarang
          </v-btn>
        </v-col>
        <v-col cols="6">
          <div class="img-ab-header">
            <v-img
              :src="require('../assets/img/img-main.png')"
              lazy-src="https://picsum.photos/id/1013/4256/2832"
              max-height="600"
              max-width="100%"
              alt="image-unsplash-epicday"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
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
