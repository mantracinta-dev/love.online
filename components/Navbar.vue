<template>
  <div>
    <v-app-bar height="100" elevate-on-scroll fixed>
      <v-toolbar-title>
        <div class="d-flex align-center">
          <v-img
            max-height="83"
            max-width="83"
            :src="require('../static/logo.png')"
            alt="logo-epic"
          ></v-img>
          <div class="d-flex flex-column font-base ml-3">
            <span class="font-weight-bold text-2xl">EpicDay</span>
            <span class="text--secondary line-10px text-lg">
              #InvitationEnthusiast
            </span>
          </div>
        </div>
      </v-toolbar-title>

      <v-spacer />

      <v-app-bar-nav-icon v-if="isScreen" @click.stop="drawer = !drawer" />

      <div v-else>
        <v-btn
          v-for="item in itemCors"
          :key="item"
          text
          plain
          class="text-capitalize"
        >
          {{ item }}
        </v-btn>
        <!-- <v-btn text plain class="text-capitalize"> Fitur </v-btn>
        <v-btn text plain class="text-capitalize"> Harga </v-btn>
        <v-btn text plain class="text-capitalize"> Testimoni </v-btn> -->
        <v-btn outlined rounded class="font-weight-bold text-capitalize">
          Pesan Sekarang
        </v-btn>
      </div>
    </v-app-bar>
    <!-- drawer-panel -->
    <v-navigation-drawer v-model="drawer" fixed right>
      <v-list rounded>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="require('../static/logo.png')"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>EpicDay</v-list-item-title>
            <v-list-item-subtitle>#InvitationEnthusiast </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in itemSide" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      selectedItem: 0,
      drawer: false,
      isScreen: false,
      itemCors: ["Beranda", "Fitur", "Harga", "Testimoni"],
      itemSide: [
        { text: "Beranda", icon: "mdi-home" },
        { text: "Fitur", icon: "mdi-check-decagram" },
        { text: "Harga", icon: "mdi-creation" },
        { text: "Testimoni", icon: "mdi-emoticon-kiss-outline" },
        { text: "Pesan Sekarang", icon: "mdi-cursor-default-click" },
      ],
    };
  },
  watch: {
    isScreen(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isScreen = window.innerWidth < 992;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
