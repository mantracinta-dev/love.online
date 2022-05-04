<template>
  <div class="section section--bg">
    <v-container>
      <v-col cols="12" class="mt-16 pt-16">
        <p class="font-title color-text--blue">Kenapa Memilih Kami ?</p>
        <h1 class="font-weight-bold text-3xl">
          Platform Undangan Online <br />
          Mewah gak harus mahal
        </h1>
      </v-col>
      <v-row class="my-16">
        <v-col v-for="s in 6" :key="s" cols="4">
          <v-card flat>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-text>
                  <p class="text-xl font-weight-bold">Fitur Lengkap</p>
                  <div class="text--secondary">
                    Hanya dengan 49k kamu sudah mendapatkan seluruh fitur
                    premium dari kami.
                  </div>
                </v-card-text>
              </div>
              <v-avatar class="ma-3" size="60" tile>
                <v-img
                  src="https://buildwithangga.com/themes/front/images/ic_konsultasi.svg"
                  alt="icon"
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
