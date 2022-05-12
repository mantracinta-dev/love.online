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
      <v-row class="my-10">
        <v-col v-for="(menu, i) in menus" :key="i.id" cols="12" md="6" lg="4">
          <v-card class="feature--card" flat>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-text>
                  <p class="text-xl font-weight-bold">{{ menu.title }}</p>
                  <div class="text--secondary">
                    {{ menu.desc }}
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
export default {
  name: "feature",
  data() {
    return {
      menus: [
        {
          id: "1",
          title: "Fitur Lengkap",
          desc: " Hanya dengan 99k kamu sudah mendapatkan seluruh fitur premium dari kami.",
        },
        {
          id: "2",
          title: "Bebas Revisi",
          desc: "Jika kamu merasa memerlukan perbaikan dengan undangan kamu, jangan ragu untuk hubungi kami.",
        },
        {
          id: "3",
          title: "Custom Desain",
          desc: "Kami bisa bantu wujudkan ide-ide kamu untuk membuat tema/desain yang kamu inginkan",
        },
        {
          id: "4",
          title: "Gratis Konsultasi",
          desc: "Jika kamu masih ragu dan bingung. Silahkan langsung tanyakan saja kepada kami",
        },
        {
          id: "5",
          title: "Selalu Diskon 50%",
          desc: "Ada potongan 50% untuk kamu yang mengadakan acara pada tanggal cantik*",
        },
        {
          id: "6",
          title: "Jaminan Kepuasan",
          desc: "Kami selalu menyelesaikan tugas penting ini dengan sungguh-sungguh dan selalu memberikan kejelasan.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
