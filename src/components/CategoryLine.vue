<template>
    <div class="categoryLine">
        <section class="binduz-er-news-categories-area">
            <div class="container">
                <div class="row">
                    <div class=" col-lg-12">
                        <div class="binduz-er-news-categories-tab">
                            <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation"
                                    v-for="(category, idx) in categories" :key="idx"
                                    :data-btn="idx" @click="chooseCateg(idx)" 
                                >
                                    <a :class="'nav-link tab-btn ' + (activeTab == idx ? 'active' : '')"
                                        role="tab" aria-controls="pills-1" aria-selected="true" 
                                        @click.prevent>{{ category.name }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content" id="pills-tabContent">
                            <div v-for="(category, idx) in categories" :key="idx"
                                :class="'tab-pane fade ' + (activeTab == idx ? 'active show' : 'd-none')" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab" data-content="0"
                            >
                                <div class="binduz-er-news-categories-box ">
                                    <div class="row">
                                        <div class="col-lg-4" v-for="(content, contentIndex) in category.content.slice(0, 3)" :key="contentIndex">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img :src="content.urlToImage" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span>
                                                            <i class="fa fa-calendar" aria-hidden="true"></i>
                                                            {{content.publishedAt.slice(0, 10)}}
                                                        </span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a :href="content.url">{{content.title.slice(0, 53)}}</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    const categories = ref([
                    {
                        name: 'Breaking News',
                        content: [],
                        link: 'https://newsapi.org/v2/everything?q=everything&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6'
                    },
                    {
                        name: 'Entertainment',
                        content: [],
                        link: 'https://newsapi.org/v2/everything?q=Entertainment&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6'
                    },
                    {
                        name: 'Sports',
                        content: [],
                        link: 'https://newsapi.org/v2/everything?q=Sport&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6'
                    },
                    {
                        name: 'Politics',
                        content: [],
                        link: 'https://newsapi.org/v2/everything?q=Politics&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6'
                    },
                    {
                        name: 'Trending',
                        content: [],
                        link: 'https://newsapi.org/v2/everything?q=everything&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6'
                    },
                    {
                        name: 'Football',
                        content: [],
                        link: 'https://newsapi.org/v2/everything?q=Football&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6'
                    },
                    {
                        name: 'Gaming',
                        content: [],
                        link: 'https://newsapi.org/v2/everything?q=Gaming&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6'
                    }
                ]);
    const activeTab = ref(0);

    const chooseCateg = (index) => {
        activeTab.value = index;
        getContent();
    };
    const getContent = async() => {
        if (categories.value[activeTab.value].lenght !== 0) {
            axios
                .get(categories.value[activeTab.value].link)
                .then(response => (categories.value[activeTab.value].content = response.data.articles));
        }
    }
    onMounted(() => {
        getContent();    
    });
</script>

<style lang="scss">

    .active {
        display: flex;
    }

    .tab-btn {
        cursor: pointer;
    }

    .binduz-er-news-categories-tab {
        margin-top: 40px;
        margin-bottom: 40px;

        ul {
            li {
                a {
                    background-color: $white !important;
                    color: $text-color !important;
                    border-radius: 0 !important;
                    margin: 0 8px;
                    @media #{$md} {
                        margin: 0 6px;
                        font-size: 14px;
                    }
                    @media #{$xs} {
                        margin: 0 2px 4px;
                    }

                    .active {
                        color: #fff !important;
                        background-color: $theme-color-2 !important;
                    }
                }
            }
        }
    }

    .binduz-er-news-categories-box {
        margin-bottom: 40px;
        .binduz-er-news-categories-item {
            background: $white;
            padding: 30px;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            align-items: center;
            @media #{$lg} {
                display: block;
            }
            @media #{$md} {
                padding: 10px;
                margin-bottom: 10px;
            }
            @media #{$xs} {
                display: block;
            }

            .binduz-er-thumb {
                min-width: 120px;
                max-width: 120px;
                overflow: hidden;
                height: 100px;
                margin-right: 20px;

                @media #{$md} {
                        max-width: 100%;
                    }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                @media #{$lg} {
                    margin-bottom: 10px;
                }
                @media #{$xs} {
                    margin-bottom: 10px;
                }
            }

            .binduz-er-content {
                .binduz-er-meta-date {
                    span {
                        color: #666;
                        font-size: 14px;
                    }
                }

                .binduz-er-news-categories-title {
                    .binduz-er-title {
                        margin-bottom: 0;
                        font-size: 20px;
                        line-height: 30px;
                        @media #{$laptop} {
                            font-size: 16px;
                            line-height: 26px;
                        }

                        a {
                            color: $black;

                            &:hover {
                                color: $theme-color-2;
                            }
                        }
                    }
                }
            }
        }
    }
</style>