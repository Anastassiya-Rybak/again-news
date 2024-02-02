<template>
  <div class="home">
    <HeaderUp 
      @addSearchInfo="readSearchInfo"
    />
    <!-- <HeaderDw />
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
    <TheFooter /> -->
  </div>
</template>

<script setup>
  import HeaderUp from '@/components/HeaderUp.vue';
  import HeaderDw from '@/components/HeaderDw.vue';
  import SearchResult from '@/components/SearchResult.vue';
  import CategoryLine from '@/components/CategoryLine.vue';
  import NewsSlider from '@/components/NewsSlider.vue';
  import TopNews from '@/components/TopNews.vue';
  import FavoriteCategory from '@/components/FavoriteCategory.vue';
  import LatestNews from '@/components/LatestNews.vue';
  import RecentlyViewed from '@/components/RecentlyViewed.vue';
  import NewsLetter from '@/components/NewsLetter.vue';
  import TheFooter from '@/components/footer/TheFooter.vue';

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