<template>
  <div>
    <v-app-bar height="80" elevate-on-scroll fixed class="set-pattern">
      <v-toolbar-title>
        <div
          class="d-flex align-center"
          @click="handleClickHome()"
          style="cursor: pointer"
        >
          <v-img
            max-height="60"
            max-width="60"
            :src="require('../static/logo.png')"
            alt="logo-brand-epic"
          ></v-img>
          <div class="d-flex flex-column font-base ml-3">
            <span class="font-weight-bold text-2xl">EpicDay</span>
            <span class="text--secondary line-10px text-base">
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
          class="text-capitalize text-base"
        >
          {{ item }}
        </v-btn>
        <!-- <v-btn text plain class="text-capitalize"> Fitur </v-btn>
        <v-btn text plain class="text-capitalize"> Harga </v-btn>
        <v-btn text plain class="text-capitalize"> Testimoni </v-btn> -->
        <v-btn
          outlined
          rounded
          color="red"
          class="font-weight-bold text-capitalize text-base"
        >
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
    handleClickHome() {
      window.open("/", "_self");
    },
    onResize() {
      this.isScreen = window.innerWidth < 992;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
