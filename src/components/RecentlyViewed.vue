<template>
    <div class="recentlyViewed">
        <section class="binduz-er-recently-viewed-area">
            <div class=" container">
                <div class="binduz-er-recently-viewed-box">
                    <div class="row">
                        <div class=" col-lg-12">
                            <div class="binduz-er-top-news-title">
                                <h3 class="binduz-er-title">Recently Viewed</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="recentlyNews.length > 0">
                        <div class=" col-lg-3" 
                            v-for="news in recentlyNews" :key="news">
                            <div class="binduz-er-video-post binduz-er-recently-viewed-item">
                                <div class="binduz-er-latest-news-item">
                                    <div class="binduz-er-thumb">
                                        <img :src="news.urlToImage" :alt="news.title">
                                    </div>
                                    <div class="binduz-er-content">
                                        <div class="binduz-er-meta-item">
                                            <div class="binduz-er-meta-categories">
                                                <a href="#">Technology</a>
                                            </div>
                                            <div class="binduz-er-meta-date">
                                                <span>
                                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    {{news.publishedAt.slice(0, 10)}}
                                                </span>
                                            </div>
                                        </div>
                                        <h5 class="binduz-er-title">
                                            <a href="#">{{news.title}}</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'RecentlyViewed',
    data(){
        return{
            recentlyNews:[],
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/styles/styles.scss";


</style>