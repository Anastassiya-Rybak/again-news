<template>
    <div class="topNews">
        <section class="binduz-er-top-news-area">
            <div class="container">
                <div class="row">
                    <div class=" col-lg-4">
                        <div class="binduz-er-top-news-title">
                            <h3 class="binduz-er-title">Top News</h3>
                        </div>
                        <div class="binduz-er-top-news-item" v-for="(slide, idx) in slides.slice(0, 3)" :key="idx">
                            <span>0{{idx + 1}}</span>
                            <h5 class="binduz-er-title"><a :href="slide.url">{{slide.title}}</a></h5>
                            <div class="binduz-er-meta-date">
                                <span>
                                    <i class="fa fa-calendar" aria-hidden="true"></i> 
                                    {{slide.publishedAt.slice(0, 10)}}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4">
                        <div class="binduz-er-top-news-title">
                            <h3 class="binduz-er-title">Most Viewed News</h3>
                        </div>
                        <Swiper class="binduz-er-news-viewed-most-slide"
                        :modules="modules"
                        :slides-per-view="1"
                        :navigation="true"
                        :loop="true"
                        :autoplay="{
                            delay: 3000,
                        }">
                            <SwiperSlide class="binduz-er-news-viewed-most"
                            v-for="(slide, slideIdx) in slides.slice(2, 4)" :key="slideIdx">
                                <div class="binduz-er-thumb">
                                    <img :src="slide.urlToImage" alt="">
                                </div>
                                <div class="binduz-er-content">
                                    <div class="binduz-er-meta-item">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span>
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                {{slide.publishedAt.slice(0,10)}}
                                            </span>
                                        </div>
                                    </div>
                                    <h4 class="binduz-er-title"><a :href="slide.url">{{slide.title}}</a></h4>
                                    <div class="binduz-er-meta-author">
                                        <img src="../assets/images/user-2.jpg" alt="">
                                        <span>By <span>{{slide.author}}</span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class=" col-lg-4">
                        <div class="binduz-er-top-news-faq"
                        v-for="slide in slides.slice(5, 6)" :key="slide">
                            <h4 class="binduz-er-title">{{slide.title}}</h4>
                            <div class="binduz-er-meta-author">
                                <span>By <span>{{slide.author}}</span></span>
                            </div>
                            <div class="binduz-er-answare">
                                <p>{{slide.description.slice(0, 100)}}</p>
                            </div>
                            <div class="binduz-er-client-thumb">
                                <img :src="slide.urlToImage" alt="">
                            </div>
                        </div>
                        <div class="binduz-er-social-list">
                            <div class="binduz-er-list">
                                <a href="#">
                                    <span>
                                        <i class="fa fa-facebook" aria-hidden="true"></i> 
                                        <span>15000</span> 
                                        Likes
                                    </span>
                                    <span>Like</span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <span>15000</span> 
                                        Likes
                                    </span>
                                    <span>Tweet</span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i class="fa fa-behance" aria-hidden="true"></i>
                                        <span>5k+</span> 
                                        Follower
                                    </span>
                                    <span>Follow</span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i class="fa fa-youtube-play" aria-hidden="true"></i> 
                                        <span>15000</span> 
                                        Subscribe
                                    </span>
                                    <span>Subscribe</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import '../../node_modules/swiper/swiper.scss';
    import '../../node_modules/swiper/modules/navigation/navigation.scss';

    import axios from 'axios';

    const slides = ref([]);
    onMounted(() => {
        axios
            .get('https://newsapi.org/v2/everything?q=everything&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
            .then(response => (slides.value = response.data.articles));
    });
</script>

<style lang="scss">
    .binduz-er-top-news-area{
    margin-top: 60px;
    padding-bottom: 60px;
    & .binduz-er-social-list{
        & .binduz-er-list{
            margin-top: 35px;
            & a{
                display: flex;
                justify-content: space-between;
                background: $white;
                border-radius: 0px;
                padding: 10px 30px 10px 10px;
                align-items: center;
                margin-bottom: 8px;
                & span{
                    font-size: 14px;
                    color: $black;
                    & span{
                        font-weight: 700;
                    }
                    & i{
                        height: 40px;
                        width: 40px;
                        background: #3B5999;
                        text-align: center;
                        line-height: 40px;
                        color: $white;
                        border-radius: 0px;
                        margin-right: 30px;
                        @media #{$laptop} {
                            margin-right: 5px;
                        }
                        @media #{$lg} {
                            margin-right: 5px;
                        }
                    }
                }
                &:nth-child(2){
                    & span{
                        & i{
                            background: #55ACEE;
                        }
                    }
                }
                &:nth-child(3){
                    & span{
                        & i{
                            background: #0057FF;
                        }
                    }
                }
                &:nth-child(4){
                    & span{
                        & i{
                            background: #CD201F;
                        }
                    }
                }
            }
        }
    }
}


.binduz-er-top-news-title{
    @media #{$md} {
        margin-top: 50px;
    }
    @media #{$xs} {
        margin-top: 30px;
    }
    & .binduz-er-title{
        font-size: 24px;
        position: relative;
        padding-top: 21px;
        margin-bottom: 33px;
        &::before{
            position: absolute;
            content: '';
            left: 0;
            top: 0;
            height: 4px;
            width: 260px;
            background: $theme-color-2;
            @media #{$laptop} {
                width: 235px;
            }
            @media #{$xs} {
                width: 200px;
            }
        }
    }
}

.binduz-er-top-news-item{
    background: $white;
    padding-top: 24px;
    padding-bottom: 26px;
    padding-right: 45px;
    position: relative;
    padding-left: 54px;
    margin-bottom: 10px;
    @media #{$xs} {
        padding-right: 30px;
    }
    &:last-child{
        margin-bottom: 0;
    }
    & > span{
        position: absolute;
        left: 0;
        top: 30px;
        display: inline-block;
        height: 30px;
        width: 30px;
        text-align: center;
        line-height: 30px;
        background: $theme-color-2;
        color: $white;
        font-weight: 700;
        font-size: 14px;
    }
    & .binduz-er-title{
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
        text-transform: inherit;
        margin-bottom: 6px;
        @media #{$laptop} {
            font-size: 16px;
        }
        @media #{$lg} {
            font-size: 15px;
            line-height: 25px;
            
        }
        @media #{$xs} {
            font-size: 15px;
            line-height: 25px;
            
        }
        & a{
            color: $black;
            &:hover{
                color: $theme-color-2;
            }
        }
    }
    & .binduz-er-meta-date{
        & span{
            font-size: 14px;
        }
    }
}

.binduz-er-news-viewed-most-slide{
    & .swiper-button-prev, .swiper-button-next {
        position: absolute;
        top: -82px;
        cursor: pointer;
        height: 60px;
        width: 60px;
        background: $white;
        text-align: center;
        line-height: 60px;
        font-size: 20px;
        @include transition(0.3s);
        &:hover{
            background: $theme-color-2;
            color: $white;
        }
        .swiper-button-prev{
            right: 61px;
        }
        .swiper-button-next{
            right: 0;
        }
    }
}

.binduz-er-news-viewed-most{
    background: $white;
    & .binduz-er-thumb{
        & img{
            transition: all linear 0.5s;
        }
    }
    & .binduz-er-content{
        padding: 40px 30px;
        text-align: center;
        @media #{$lg} {
            padding: 20px 20px;
        }
        & .binduz-er-meta-item {
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            justify-content: center;
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
                    @media #{$xs} {
                        margin-bottom: 10px;
                    }
                    @media #{$sm} {
                        margin-bottom: 0px;
                    }
                }
            }

            & .binduz-er-meta-date {
                & span {
                    color: $text-color;
                    margin-left: 20px;
                    @media #{$lg} {
                        font-size: 12px;
                        margin-left: 5px;
                    }

                    & i {
                        padding-right: 6px;
                    }
                }
            }
        }
        & .binduz-er-title{
            font-size: 24px;
            line-height: 34px;
            padding-top: 13px;
            margin-bottom: 19px;
            @media #{$laptop} {
                font-size: 20px;
                line-height: 30px;
            }
            @media #{$lg} {
                font-size: 17px;
                line-height: 27px;
            }
            @media #{$xs} {
                font-size: 18px;
                line-height: 28px;
            }
            @media #{$sm} {
                font-size: 24px;
                line-height: 34px;
            }
            & a{
                color: $black;
                &:hover{
                    color: $theme-color-2;
                }
            }
        }
        & .binduz-er-meta-author{
            & > span{
                margin-left: 20px;
                & span{
                    font-weight: 700;
                    color: $black;
                }
            }
        }
    }
    &:hover{
        & .binduz-er-thumb{
            & img{
                transform: scale(1.1);
            }
        }
        & .binduz-er-content{
            & .binduz-er-meta-item{
                & .binduz-er-meta-categories{
                    & a{
                        background: $theme-color-2;
                        color: $white;
                    }
                }
            }
        }
    }
}
.binduz-er-top-news-faq{
    background: $white;
    padding: 35px 35px 10px 35px;
    position: relative;
    z-index: 10;
    width: 100%;
    @media #{$md} {
        margin-top: 30px;
    }
    @media #{$xs} {
        margin-top: 30px;
    }
    & .binduz-er-client-thumb{
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: -1;
        & img{
            @media #{$laptop} {
                width: 156px;
                height: 157px;
                object-fit: cover;
            }
            @media #{$lg} {
                width: 85px;
            }
            @media #{$xs} {
                width: 0px;
            }
            @media #{$sm} {
                width: auto;
            }
        }
    }
    & .binduz-er-title{
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 10px;
        @media #{$lg} {
            font-size: 18px;
            line-height: 28px;
        }
        @media #{$xs} {
            font-size: 18px;
            line-height: 28px;
        }
        @media #{$sm} {
            font-size: 24px;
            line-height: 34px;
        }
    }
    & .binduz-er-meta-author{
        & span{
            & span{
                font-weight: 700;
                color: $theme-color-2;
            }
        }
    }
    & .binduz-er-answare{
        border-top: 1px solid #E4E4E4;
        padding-top: 18px;
        margin-top: 20px;
        width: 80% !important;
        & p {
            width: 75%;
        }
    }
}
.binduz-er-top-news-2-item{
    margin-left: -60px;
    margin-right: -60px;
    @media #{$md} {
        margin-left: 0;
        margin-right: 0;
    }
    @media #{$xs} {
        margin-left: 0;
        margin-right: 0;
    }
    & .binduz-er-trending-news-item{
        background-image: url(../assets/images/top-news-item-2.jpg);
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        height: 404px;
        border-radius: 0;
        transition: all linear 0.5s;
        & .binduz-er-trending-news-overlay{
            & .binduz-er-trending-news-meta{
                & .binduz-er-meta-categories{
                    & a{
                        background: #E74D58;
                        border-radius: 0;
                    }
                }
            }
        }
        &:hover{
            background-size: 110% 110%;
        }
    }
    &.binduz-er-top-news-2-1-item{
        margin-right: 0;
        margin-left: 60px;
        @media #{$md} {
            margin-left: 0;
        }
        @media #{$xs} {
            margin-left: 0;
        }
        & .binduz-er-trending-news-item{
            background-image: url(../assets/images/top-news-item-3.jpg);
            height: 188px;
            &.item-2{
                background-image: url(../assets/images/populer-news-9.jpg);
            }
        }
    }
}
</style>