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
    <FooterAdd />
    <FooterUp />
    <FooterDw />
  </div>
</template>

<script>
import HeaderUp from "@/components/HeaderUp.vue";
import HeaderDw from '../components/HeaderDw.vue';
import CategoryLine from '../components/CategoryLine.vue';
import NewsSlider from '../components/NewsSlider.vue';
import TopNews from '../components/TopNews.vue';
import FavoriteCategory from '../components/FavoriteCategory.vue';
import LatestNews from '../components/LatestNews.vue';
import RecentlyViewed from '../components/RecentlyViewed.vue';
import NewsLetter from '../components/NewsLetter.vue';
import FooterAdd from '../components/FooterAdd.vue';
import FooterUp from '../components/FooterUp.vue';
import FooterDw from '../components/FooterDw.vue';
import SearchResult from "@/components/SearchResult.vue";

export default {
  name: "HomeView",
  components: { HeaderUp, HeaderDw, CategoryLine, NewsSlider, TopNews, FavoriteCategory, 
    LatestNews, RecentlyViewed, NewsLetter, FooterAdd, FooterUp, FooterDw, SearchResult },
  data(){
    return{
      transit: '',
    }
  },
  methods: {
    readSearchInfo(searchInfo){
      this.transit = searchInfo;
    },
  },
};
</script>

<style lang="scss">
  .home {
  background-color:#F7F7F7;}
</style>