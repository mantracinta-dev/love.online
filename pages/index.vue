<template>
  <div>
    <v-container>
      <v-row align="center" justify-center>
        <v-col cols="12">
          <v-card max-width="344">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            >
            </v-img>

            <v-card-title>
              Coming Soon
            </v-card-title>
            <v-card-subtitle>
              Kabar Gembira untuk orang Tercinta. Sebarkan Hari Paling Epic Anda
              dengan Undangan Online
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>

              <a target="_blank"
                href="https://www.instagram.com/undanganepic/"
                style="text-decoration: none;"
              >
                <v-btn large fab icon>
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </a>

              <!-- <nuxt-link large icon> </nuxt-link> -->
            </v-card-actions>

            <v-card-actions @click="show = !show">
              <v-btn color="orange lighten-2" text>
                Promo Murmer
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text> Butuh Cepet dan Murah ? <b>Dm</b> </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
