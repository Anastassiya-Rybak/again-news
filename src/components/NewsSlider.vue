<template>
    <div class="newsSlider">
        <div class="binduz-er-news-slider-area pt-30 pb-60">
            <div class="container">
                <div class="binduz-er-news-slider-box ">
                    <div class="row g-0 align-items-center">
                        <div class=" col-lg-6">
                            <Swiper class="binduz-er-news-slider-item d-flex flex-row align-items-center"
                                :modules="modules"
                                :slides-per-view="1"
                                :loop="true"
                                :thumbs="{ swiper: thumbsSwiper }"
                                :navigation="true"
                                :autoplay="{
                                    delay: 3000,
                                }">
                                <SwiperSlide class="binduz-er-item d-flex flex-row align-items-center" v-for="(slide, slideImgIdx) in slides.slice(0, 2)"
                                 :key="slideImgIdx">
                                    <img class="binduz-er-item__img" :src="slide.urlToImage" alt="">
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div class=" col-lg-6">
                            <Swiper class="binduz-er-news-slider-content-slider "
                            :modules="modules"
                            :slides-per-view="1"
                            :loop="true"
                            @swiper="setThumbsSwiper"
                            :autoplay="{
                                delay: 3000,
                            }">
                                <SwiperSlide class="binduz-er-item d-flex flex-column" 
                                v-for="(slide, slideIdx) in slides.slice(0, 2)" :key="slideIdx">
                                    <div class="binduz-er-meta-item ">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span>
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                {{slide.publishedAt.slice(0, 10)}}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="binduz-er-news-slider-content">
                                        <h3 class="binduz-er-title">
                                            <a href="#">{{slide.title.slice(0, 50)}}</a>
                                        </h3>
                                        <p>{{slide.description.slice(0, 100)}}</p>
                                    </div>
                                    <div class="binduz-er-meta-author">
                                        <div class="binduz-er-author">
                                            <img src="../assets/images/user-2.jpg" alt="">
                                            <span>By <span>{{slide.author}}</span></span>
                                        </div>
                                        <div class="binduz-er-meta-list">
                                            <ul>
                                                <li><i class="fa fa-eye" aria-hidden="true"></i> 5k</li>
                                                <li><i class="fa fa-heart-o" aria-hidden="true"></i> 5k</li>
                                                <li><i class="fa fa-comment" aria-hidden="true"></i> 5k</li>
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

<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    const slides = ref([]);
    onMounted(() => {
        axios
            .get('https://newsapi.org/v2/everything?q=Technology&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
            .then(response => (slides.value = response.data.articles));
    });
</script>

<style lang="scss">
@import '@/assets/styles/styles.scss';

.binduz-er-news-slider-box {

    .swiper-slide {
        overflow: hidden;

        & .binduz-er-item__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    }
    background: $white;
    & .binduz-er-news-slider-item{
        & .slick-arrow{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            z-index: 9;
            height: 60px;
            width: 60px;
            text-align: center;
            line-height: 60px;
            background: rgba(0, 0, 0, 0.5);
            color: $white;
            @include transition(0.3s);
            font-size: 18px;
            &:hover{
                background: $theme-color-2;
            }
            &.prev{
                left: 0;
            }
            &.next{
                right: 0;
            }
        }
    }
}

.binduz-er-news-slider-content-slider {
    height: 450px !important;
    
    & .binduz-er-item {
        padding-left: 80px;
        padding-right: 80px;
        padding-top: 80px;

        @media #{$laptop} {
            padding-left: 50px;
            padding-right: 50px;
        }
        @media #{$lg} {
            padding-left: 20px;
            padding-right: 20px;
        }
        @media #{$md} {
            padding: 30px;
        }
        @media #{$xs} {
            padding: 30px;
        }

        & .binduz-er-meta-item {
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            @media #{$xs} {
                display: block;
            }
            @media #{$sm} {
                display: flex;
            }

            & .binduz-er-meta-categories {
                & a {
                    background: #E6F4FF;
                    display: inline-block;
                    line-height: 30px;
                    padding: 0 15px;
                    color: $theme-color-2;
                    font-weight: 700;
                }
            }

            & .binduz-er-meta-date {
                & span {
                    color: $text-color;
                    margin-left: 20px;
                    display: inline-block;
                    @media #{$xs} {
                        margin-left: 0;
                        margin-top: 10px;
                    }
                    @media #{$sm} {
                        margin-left: 20px;
                        margin-top: 0;
                    }

                    & i {
                        padding-right: 6px;
                    }
                }
            }
        }
        & .binduz-er-news-slider-content {

            & .binduz-er-title {
                font-size: 48px;
                line-height: 58px;
                padding-top: 18px;
                margin-bottom: 10px;
                @media #{$laptop} {
                    font-size: 36px;
                    line-height: 46px;
                }
                @media #{$lg} {
                    font-size: 30px;
                    line-height: 40px;
                }
                @media #{$md} {
                    font-size: 40px;
                    line-height: 50px;
                }
                @media #{$xs} {
                    font-size: 23px;
                    line-height: 33px;
                }
                @media #{$sm} {
                    font-size: 40px;
                    line-height: 50px;
                }

                & a {
                    color: $black;

                    &:hover {
                        color: $theme-color-2;
                    }
                }
            }

            & p {
                font-size: 18px;
                line-height: 30px;
            }
        }

        & .binduz-er-meta-author {
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            align-items: center;
            padding-top: 20px;

            @media #{$xs} {
                display: block;
            }

            @media #{$sm} {
                display: flex;
            }

            & .binduz-er-author {
                & img {
                    margin-right: 15px;
                }

                & span {
                    color: $text-color;

                    & span {
                        color: $black;
                        font-weight: 700;
                    }
                }
            }

            & .binduz-er-meta-list {
                @media #{$xs} {
                    margin-top: 20px;
                }

                @media #{$sm} {
                    margin-top: 0px;
                }

                & ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;

                    & li {
                        display: inline-block;
                        margin-left: 15px;
                        padding-left: 15px;
                        line-height: 14px;
                        border-left: 1px solid #DDDDDD;

                        @media #{$lg} {
                            margin-left: 10px;
                            padding-left: 10px;
                        }

                        @media #{$xs} {
                            border-left: 0;
                            margin-left: 0;
                        }

                        @media #{$sm} {
                            border-left: 1px solid #DDDDDD;
                            margin-left: 15px;
                        }
                    }
                }
            }
        }
    }

}

.binduz-er-news-slider-box{
    &:hover{
        & .binduz-er-meta-item{
            & .binduz-er-meta-categories{
                & a{
                    background:  $theme-color-2;
                    color: $white;
                }
            }
        }
    }
}


</style>