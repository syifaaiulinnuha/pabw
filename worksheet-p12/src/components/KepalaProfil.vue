<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
});
</script>

<template>
  <div class="kepala-profil">
    <img :src="props.profil.foto" alt="Foto Profil" class="foto-profil" />
    <h1>{{ props.profil.nama }}</h1>
    <p>{{ props.profil.peran }}</p>
  </div>
</template>
