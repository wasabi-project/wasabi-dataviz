<template>
  <!-- onchange of artist display artist -->
  <div v-if="artist" class="bg-neutral-200 rounded-lg p-4 hover:bg-neutral-300 transition-all duration-400 ">
    <div>
      <h2 class="text-xl font-bold uppercase">{{ artist.artist }}</h2>
    </div>
    <div class="flex flex-col gap-4">
      <span>Nombre d'albums: {{ artist.nbAlbums }}</span>
      <span>Nombre de chansons: {{ artist.nbSongs }}</span>
      <span>Nombre de fans Deezer: {{ formattedFans }}</span>
      <span>Durée de carrière: {{ lifeSpan.duration }}</span>
      <span>Début de carrière: {{ lifeSpan.begin }}</span>
      <span>Fin de carrière: {{ lifeSpan.end }}</span>
    </div>
  </div>
</template>

<script setup>
import { formatNumber } from '../../utils/functions';
const { artist, lifeSpan } = defineProps(['artist', 'lifeSpan']);

const formattedFans = formatNumber(artist.deezerFans);
</script>
