<template>
  <div class="home">
    <HeaderUp 
      @addSearchInfo="readSearchInfo"
    />
    <HeaderDw />
    <SearchResult 
      :showResultInfo="transit"
    />
    <CategoryLine />
    <NewsSlider />
    <TopNews />
    <FavoriteCategory />
    <LatestNews />
    <RecentlyViewed />
    <NewsLetter />
    <TheFooter />
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const transit = ref('');
  const readSearchInfo = (searchInfo) => {
    transit.value = searchInfo;
  };
</script>

<style lang="scss">
  .home {
    background-color:#F7F7F7;
    }
</style>