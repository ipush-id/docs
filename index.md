---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Ipush"
  tagline: Real-time communication framework
  actions:
    - theme: alt
      text: Dashboard
      link: https://app.ipush.id
    - theme: brand
      text: Documentation
      link: /docs/index.html

---

<script setup>
import Pricing from './components/Pricing.vue'
import IpushFooter from './components/IpushFooter.vue'
</script>

<section>

## About Us

We're here to help you build real-time applications effortlessly. Similar to Pusher, our platform provides the tools you need to create apps that communicate instantly. Whether you're designing a chat app, collaborative tool, or live data dashboard, we've got you covered. Our easy-to-use interface and clear guides make development a breeze for everyone. Join us and bring your real-time ideas to life!

</section>

<Pricing/>

<IpushFooter/>