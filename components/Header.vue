<template>
  <div class="header">
    <v-container>
      <v-row align="center">
        <v-col cols="6">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos,
            blanditiis suscipit esse sint distinctio.
          </p>
          <v-btn> Yuk Buat </v-btn>
        </v-col>
        <v-col cols="6">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="300"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 100vh;
  display: flex;
  align-items: center;
  //   background-color: red;
}
</style>
