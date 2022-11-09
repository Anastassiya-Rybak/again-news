<template>
    <div class="newsSlider">
        <div class="binduz-er-news-slider-area pt-30 pb-60">
            <div class="container">
                <div class="binduz-er-news-slider-box">
                    <div class="row g-0 align-items-center">
                        <div class=" col-lg-6">
                            <div class="binduz-er-news-slider-item">
                                <div class="binduz-er-item">
                                    <img src="../assets/images/news-slider-1.jpg" alt="">
                                </div>
                                <div class="binduz-er-item d-none">
                                    <img src="../assets/images/news-slider-2.jpg" alt="">
                                </div>
                            </div>
                        </div>
                        <div class=" col-lg-6">
                            <Swiper class="binduz-er-news-slider-content-slider"
                            :modules="modules"
                            :slides-per-view="1"
                            :loop="true"
                            :autoplay="{
                                delay: 3000,
                            }"
                            >
                                <SwiperSlide class="binduz-er-item">
                                    <div class="binduz-er-meta-item">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                        </div>
                                    </div>
                                    <div class="binduz-er-news-slider-content">
                                        <h3 class="binduz-er-title"><a href="#">Spot misinformation online with these tips</a></h3>
                                        <p>How effectively the massive shopping center can repurpose more than 300,000 square feet soon to be vacated</p>
                                    </div>
                                    <div class="binduz-er-meta-author">
                                        <div class="binduz-er-author">
                                            <img src="../assets/images/user-2.jpg" alt="">
                                            <span>By <span>Rosalina D.</span></span>
                                        </div>
                                        <div class="binduz-er-meta-list">
                                            <ul>
                                                <li><i class="fal fa-eye"></i> 5k</li>
                                                <li><i class="fal fa-heart"></i> 5k</li>
                                                <li><i class="fal fa-comments"></i> 5k</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide class="binduz-er-item">
                                    <div class="binduz-er-meta-item">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                        </div>
                                    </div>
                                    <div class="binduz-er-news-slider-content">
                                        <h3 class="binduz-er-title"><a href="#">Take a look at these pandemic pastimes</a></h3>
                                        <p>How effectively the massive shopping center can repurpose more than 300,000 square feet soon to be vacated</p>
                                    </div>
                                    <div class="binduz-er-meta-author">
                                        <div class="binduz-er-author">
                                            <img src="../assets/images/user-2.jpg" alt="">
                                            <span>By <span>Rosalina D.</span></span>
                                        </div>
                                        <div class="binduz-er-meta-list">
                                            <ul>
                                                <li><i class="fal fa-eye"></i> 5k</li>
                                                <li><i class="fal fa-heart"></i> 5k</li>
                                                <li><i class="fal fa-comments"></i> 5k</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Autoplay} from 'swiper';
    import '../../node_modules/swiper/swiper.scss';

export default {
    name: 'NewsSlider',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
}
</script>

<style lang="scss">

</style>