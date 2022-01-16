<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <span>Apa bedanya layanan kami</span>
        <h1>T O P Fitur Terbaik Untuk Kamu</h1>
        <p>
          Gunakan semua fitur yang kami berikan agar undangan kamu jadi lebih
          oke.
        </p>
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col v-for="i in 4" :key="i">
            <v-img
              lazy-src="https://picsum.photos/id/11/10/6"
              height="200"
              width="150"
              src="https://picsum.photos/id/11/500/300"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
