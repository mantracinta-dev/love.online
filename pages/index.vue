<template>
  <div>
    <Navbar />
    <Header />
    <Feature />
    <!-- <Product /> -->
    <!-- <HowToOrder />
    <Faq />
    <Cta />
    <Footer /> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head: {
    title: process.env.TITLE,
    meta: [
      {
        hid: "og:title",
        property: "og:title",
        content: "Epicday | Undangan Online",
      },
      { hid: "og:type", property: "og:type", content: "product" },
      { hid: "og:site_name", property: "og:site_name", content: "Epicday" },
      {
        hid: "description",
        name: "description",
        content:
          "Buat Undangan Mewah dan murah bukan lagi persoalan hanya di Epicday",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Buat Undangan Mewah dan murah bukan lagi persoalan hanya di Epicday",
      },
      { hid: "og:url", name: "og:url", content: process.env.BASE_URL },
      {
        hid: "og:image",
        name: "og:image",
        content: "../static/logo.png",
      },
    ],
  },
  data() {
    return {};
  },
};
</script>
