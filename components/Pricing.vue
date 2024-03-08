<script setup>
import { onMounted, ref } from "vue";
const pricing = ref([]);
const getAllSubscriptions = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_PRICING_API_URL)
            const json = await response.json()
            pricing.value = json
        }catch(err){
            if (err) {
                throw err 
            }
        }
        throw new Error("Failed to fetch subscriptions");
}
onMounted(() => {
    getAllSubscriptions()
});
</script>
<template>
  <section class="pricing">
    <h2>Pricing</h2>
    <div class="row">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="grid-item" v-for="data in pricing">
          <div class="card">
            <h3 class="card-title">{{ data.name }}</h3>
            <hr />
            <ul>
              <li>Limit: {{  Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 }).format(data.limit)  }}</li>
              <li>Price: Rp {{  Intl.NumberFormat('id-ID', { currency: 'IDR'}).format(data.price)  }}</li>
            </ul>
            <hr />
            <a
              href="https://bisacash.com/beli/ipush"
              target="_blank"
              class="btn-block"
              >Buy Now</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.grid {
  display: grid;
  gap: 1rem;
}
.grid-cols-1 {
  grid-template-columns: 1fr;
}
@media screen and (min-width: 768px) {
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
.pricing .card {
  box-shadow: 1px 2px 5px #e2e2e26d;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 0.2rem;
}
h3.card-title {
  margin: 0;
}
.card .btn-block {
  background: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border-color: var(--vp-button-brand-border);
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  border-radius: 0.3rem;
  width: 100%;
  display: block;
  text-align: center;
}
.card .btn-block:hover {
  color: var(--vp-button-brand-text) !important;
}
</style>
