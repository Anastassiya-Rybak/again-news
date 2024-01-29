<template>
    <div class="latestNews">
        <section class="binduz-er-latest-news-area">
            <div class=" container">
                <div class="row">
                    <div class=" col-lg-8">
                        <div class="binduz-er-top-news-title">
                            <h3 class="binduz-er-title">Latest News</h3>
                        </div>
                        <div class="binduz-er-latest-news-item"
                        v-for="news in lastNews.slice(0, 4)" :key="news">
                            <div class="binduz-er-thumb">
                                <img :src="news.urlToImage" alt="">
                            </div>
                            <div class="binduz-er-content">
                                <div class="binduz-er-meta-categories">
                                    <a href="#">Technology</a>
                                </div>
                                <h5 class="binduz-er-title">
                                    <a href="#">{{news.title}}</a>
                                </h5>
                                <div class="binduz-er-meta-item">
                                    <div class="binduz-er-meta-author">
                                        <span>By <span>{{news.author}}</span></span>
                                    </div>
                                    <div class="binduz-er-meta-date">
                                        <span>
                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                            {{news.publishedAt.slice(0, 10)}}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4">
                        <div class="binduz-er-top-news-title">
                            <h3 class="binduz-er-title">Video Post</h3>
                        </div>
                        <div class="binduz-er-video-post">
                            <div class="binduz-er-latest-news-item">
                                <div class="binduz-er-thumb">
                                    <iframe width="100%" height="" src="https://www.youtube.com/embed/IrgGmaeYmdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="binduz-er-content">
                                    <div class="binduz-er-meta-item">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span>
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                24th February 2020
                                            </span>
                                        </div>
                                    </div>
                                    <h5 class="binduz-er-title">
                                        <a href="#">Spruce up your Business Profile for holiday shoppers</a>
                                    </h5>
                                </div>
                            </div>
                            <div class="binduz-er-latest-news-item">
                                <div class="binduz-er-thumb">
                                    <iframe width="100%" height="" src="https://www.youtube.com/embed/79pKwdiqcwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="binduz-er-content">
                                    <div class="binduz-er-meta-item">
                                        <div class="binduz-er-meta-categories">
                                            <a href="#">Technology</a>
                                        </div>
                                        <div class="binduz-er-meta-date">
                                            <span>
                                                <i class="fa fa-calendar" aria-hidden="true"></i>
                                                24th February 2020
                                            </span>
                                        </div>
                                    </div>
                                    <h5 class="binduz-er-title">
                                        <a href="#">The new conversational Search experience we’re thankful for</a>
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

    const lastNews = ref([]);
    const videoNews = ref([]);
    onMounted(() => {
        axios
            .get('https://newsapi.org/v2/everything?q=Technology&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
            .then(response => (lastNews.value = response.data.articles));
        axios
            .get('https://newsapi.org/v2/everything?q=video&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
            .then(response => (videoNews.value = response.data.articles));
    });
</script>

<style lang="scss">

.binduz-er-latest-news-area{
    padding-bottom: 60px;
}

.binduz-er-latest-news-item{
    background: $white;
    padding: 30px;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    @media #{$lg} {
        display: block;
    }
    @media #{$xs} {
        display: block;
    }
    &:last-child{
        margin-bottom: 0;
    }
    & .binduz-er-thumb{
        min-width: 240px;
        max-width: 240px;
        margin-right: 40px;
        overflow: hidden;
        @media #{$lg} {
            margin-right: 0px;
            margin-bottom: 20px;
        }
        @media #{$xs} {
            margin-right: 0px;
            margin-bottom: 20px;
            min-width: 100%;
        }
        & img{
            width: 100%; 
            transition: all linear 0.5s;
        }
    }
    & .binduz-er-content{
        & .binduz-er-meta-categories{
            & a{
                display: inline-block;
                background: #E6F4FF;
                line-height: 30px;
                padding: 0 14px;
                font-size: 14px;
                font-weight: 700;
                color: $theme-color-2;
            }
        }
        & .binduz-er-title{
            font-size: 18px;
            line-height: 28px;
            font-weight: 400;
            padding-top: 11px;
            @media #{$xs} {
                font-size: 16px;
                line-height: 26px;
            }
            & a{
                color: $black;
                &:hover{
                    color: $theme-color-2;
                }
            }
        }
        & .binduz-er-meta-item{
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
            & .binduz-er-meta-author{
                margin-right: 30px;
                & span{
                    & span{
                        color: $theme-color-2;
                    }
                }
            }
            & .binduz-er-meta-date{
                @media #{$xs} {
                    margin-top: 10px;
                    margin-left: 0;
                }
                @media #{$sm} {
                    margin-top: 0px;
                    margin-left: 10px;
                }
                & span{
                    & i{
                        padding-right: 5px;
                    }
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
            & .binduz-er-meta-categories{
                & a{
                    background: $theme-color-2;
                    color: $white;
                }
            }
        }

    }
}








.binduz-er-video-post{
    & .binduz-er-latest-news-item{
        display: block;
        padding-bottom: 10px;
        margin-bottom: 30px;
        & .binduz-er-thumb{
            width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
            position: relative;
            min-width: 100%;
            max-width: 100%;
            @media #{$laptop} {
                min-width: 100%;
            }
            @media #{$lg} {
                min-width: 100%;
            }
            & img{
                width: 100%;
            }
            & .binduz-er-play{
                position: absolute;
                right: 20px;
                top: 20px;
                & a{
                    display: inline-block;
                    height: 50px;
                    width: 50px;
                    text-align: center;
                    line-height: 50px;
                    background: $theme-color-2;
                    color: $white;
                    border-radius: 50%;
                }
            }
        }
        & .binduz-er-content{
            & .binduz-er-meta-date{
                margin-left: 20px;
                @media #{$laptop} {
                    margin-left: 6px;
                }
                @media #{$xs} {
                    margin-left: 0px;
                }
                @media #{$sm} {
                    margin-left: 10px;
                }
                & span{
                    font-size: 14px;
                    & i{
                        padding-right: 6px;
                    }
                }
            }
            & .binduz-er-title{
                font-size: 20px;
                line-height: 30px;
                font-weight: 700;
                @media #{$md} {
                    font-size: 18px;
                }
                @media #{$xs} {
                    font-size: 18px;
                }
            }
        }
    }
    &.binduz-er-recently-viewed-item{
        & .binduz-er-latest-news-item{
            padding: 0;
            & .binduz-er-content{
                padding-right: 10px;
                & .binduz-er-meta-item{
                    @media #{$xs} {
                        display: block;
                    }
                    & .binduz-er-meta-date{
                        @media #{$xs} {
                            margin-left: 0px;
                            margin-top: 10px;
                        }
                    }
                }
                & .binduz-er-title{
                    font-size: 19px;
                    line-height: 30px;
                    font-weight: 400;
                    @media #{$lg} {
                        font-size: 16px;
                        line-height: 26px;
                    }
                    @media #{$xs} {
                        font-size: 18px;
                    }
                }
            }
        }
    }
    &.binduz-er-newsletter-post{
        & .binduz-er-latest-news-item{
            padding: 0;
            & .binduz-er-thumb{
                margin: 0;
            }
            & .binduz-er-content{
                padding: 40px 40px 36px;
                @media #{$lg} {
                    padding: 20px;
                }
                @media #{$xs} {
                    padding: 20px;
                }
                & .binduz-er-meta-item{
                    display: block;
                    & .binduz-er-meta-date{
                        margin-left: 0;
                        margin-top: 10px;
                    }
                }
                & .binduz-er-title{
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 34px;
                    margin-bottom: 0;
                    @media #{$laptop} {
                        font-size: 20px;
                        line-height: 30px;
                    }
                    @media #{$lg} {
                        font-size: 18px;
                        line-height: 28px;
                    }
                    @media #{$xs} {
                        font-size: 17px;
                        line-height: 27px;
                    }
                }
            }
        }

    }
    &.binduz-er-top-news-2-slider{
        margin-right: 60px;
        @media #{$md} {
            margin-right: 0;
        }
        @media #{$xs} {
            margin-right: 0;
        }
        & .binduz-er-latest-news-item{
            padding: 0;
            & .binduz-er-content{
                padding: 20px 40px 35px;
                @media #{$laptop} {
                    padding: 10px 30px 25px;
                }
                @media #{$lg} {
                    padding: 10px 20px 25px;
                }
                @media #{$xs} {
                    padding: 0px 20px 15px;
                }
                & .binduz-er-meta-item{
                    @media #{$lg} {
                        display: block;
                    }
                    & .binduz-er-meta-categories{
                        & a{
                            background: #E74D58;
                            color: $white;
                        }
                    }
                    & .binduz-er-meta-date{
                        @media #{$lg} {
                            margin-left: 0;
                            margin-top: 10px;
                        }
                    }
                }
                & .binduz-er-title{
                    font-size: 24px;
                    line-height: 34px;
                    text-transform: inherit;
                    letter-spacing: -0.100px;
                    margin-bottom: 0;
                    & a{
                        &:hover{
                            color: $theme-color;
                        }
                    }
                    @media #{$lg} {
                        font-size: 18px;
                        line-height: 28px;
                    }
                }
            }
        }
        & .slick-arrow{
            position: absolute;
            top: 85px;
            cursor: pointer;
            z-index: 9;
            height: 50px;
            width: 50px;
            text-align: center;
            line-height: 50px;
            background: rgba(255, 255, 255, 0.2);
            color: $white;
            @include transition(0.3s);
            &:hover{
                background: #E74D58;
                
            }
            &.prev{
                left: 0;
            }
            &.next{
                right: -1px;
            }
        }
    }
}



.binduz-er-recently-viewed-area{
    padding-bottom: 60px;
    & .binduz-er-recently-viewed-box{
        background: $white;
        padding: 60px 0 60px 60px;
        @media #{$lg} {
            padding: 30px 0 30px 30px;
        }
        @media #{$md} {
            padding: 0px 30px 0px 30px;
        }
        @media #{$xs} {
            padding: 0px 30px 0px 30px;
        }
    }
}

.binduz-er-newsletter-box{
    padding: 72px 65px;
    background: #004E87;
    position: relative;
    z-index: 10;
    @media #{$lg} {
        padding: 40px 20px;
    }
    @media #{$md} {
        margin-bottom: 30px;
    }
    @media #{$xs} {
        margin-bottom: 30px;
        padding: 20px;
    }
    @media #{$sm} {
        margin-bottom: 30px;
        padding: 72px 65px;
    }
    &::before{
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-image: url(../assets/images/newsletter-news.jpg);
        z-index: -1;
        opacity: .1;
    }
    & .binduz-er-title{
        color: $white;
        font-size: 24px;
        font-weight: 400;
        padding-top: 22px;
        margin-bottom: 4px;
    }
    & p{
        color: #A1BBCE;
        font-size: 14px;
        margin-bottom: 24px;
    }
    & .binduz-er-input-box{
        position: relative;
        & button{
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            border: 0;
            background-color: transparent;
            color: $white;
            line-height: 60px;
            padding: 0 30px;
            font-size: 20px;
            @media #{$lg} {
                right: -1px;
            }
        }
        & input{
            width: 92%;
            height: 58px;
            padding: 0;
            background: #0C568C;
            color: #fff;
            border: 0;
            padding-left: 30px;
            &::placeholder{
                opacity: 1;
                color: #79A2C0;
            }
        }
    }
}

</style>