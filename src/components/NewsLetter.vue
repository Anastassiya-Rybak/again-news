<template>
    <div class="newsLetter">
        <section class="binduz-er-newsletter-area pb-30">
            <div class=" container">
                <div class="row">
                    <div class=" col-lg-4">
                        <div class="binduz-er-video-post binduz-er-newsletter-post">
                            <div class="binduz-er-latest-news-item"
                                v-for="news in letterNews.slice(5, 6)" :key="news">
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
                                        <a :href="news.url">{{news.title}}</a>
                                    </h5>
                                </div>
                                <div class="binduz-er-thumb">
                                    <img :src="news.urlToImage" :alt="news.title">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4">
                        <div class="binduz-er-newsletter-box text-center">
                            <img src="../assets/images/icon/icon-3.png" alt="">
                            <h3 class="binduz-er-title">Get Every Newsletter</h3>
                            <p>Don’t worry we are not gonna make spamming</p>
                            <div class="binduz-er-input-box">
                                <input type="text" placeholder="Enter your email">
                                <button>
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4">
                        <div class="binduz-er-video-post binduz-er-newsletter-post">
                            <div class="binduz-er-latest-news-item"
                                v-for="news2 in letterNews.slice(6, 7)" :key="news2">
                                <div class="binduz-er-thumb">
                                    <img :src="news2.urlToImage" :alt="news2.title">
                                </div>
                                <div class="binduz-er-content">
                                    <div class="binduz-er-meta-item">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span>
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                {{news2.publishedAt.slice(0, 10)}}
                                            </span>
                                        </div>
                                    </div>
                                    <h5 class="binduz-er-title">
                                        <a :href="news2.url">{{news2.title}}</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    const letterNews = ref([]);
    onMounted(() => {
        axios
        .get('https://newsapi.org/v2/everything?q=Technology&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
        .then(response => (letterNews.value = response.data.articles));
    })
</script>

<style lang="scss">


</style>