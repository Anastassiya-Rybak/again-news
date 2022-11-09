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
                                    :data-btn="idx"
                                    @click="chooseCateg" 
                                >
                                    <a class="nav-link tab-btn" id="pills-1-tab" 
                                    data-bs-toggle="pill" 
                                    href="#pills-1" role="tab" 
                                    aria-controls="pills-1" 
                                    aria-selected="true"
                                   >{{category.name}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade active show" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab" data-content="0"
                            >
                                <div class="binduz-er-news-categories-box ">
                                    <div class="row">
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-1.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i>2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Five ways we’re making Google the safer way</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-2.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Bring iconic Japanese characters to life with</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-3.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Get ready for Hollywood’s big night with Google</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab" data-content="1"
                            >
                                <div class="binduz-er-news-categories-box ">
                                    <div class="row">
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-1.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> Entertaiment</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Five ways we’re making Google the safer way</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-2.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Bring iconic Japanese characters to life with</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-3.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Get ready for Hollywood’s big night with Google</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab" data-content="2"
                            >
                                <div class="binduz-er-news-categories-box ">
                                    <div class="row">
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-1.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Five ways we’re making Google the safer way</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-2.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Bring iconic Japanese characters to life with</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-3.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Get ready for Hollywood’s big night with Google</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab" data-content="3"
                            >
                                <div class="binduz-er-news-categories-box ">
                                    <div class="row">
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-1.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> POLITICS</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Five ways we’re making Google the safer way</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-2.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Bring iconic Japanese characters to life with</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-3.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Get ready for Hollywood’s big night with Google</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab" data-content="4"
                            >
                                <div class="binduz-er-news-categories-box " >
                                    <div class="row">
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-1.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Five ways we’re making Google the safer way</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-2.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Bring iconic Japanese characters to life with</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-3.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Get ready for Hollywood’s big night with Google</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab" data-content="5"
                            >
                                <div class="binduz-er-news-categories-box " >
                                    <div class="row">
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-1.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Five ways we’re making Google the safer way</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-2.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Bring iconic Japanese characters to life with</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-3.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Get ready for Hollywood’s big night with Google</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" 
                                id="pills-1" role="tabpanel" 
                                aria-labelledby="pills-1-tab"
                                data-content="6"
                            >
                                <div class="binduz-er-news-categories-box " >
                                    <div class="row">
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-1.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Five ways we’re making Google the safer way</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-2.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Bring iconic Japanese characters to life with</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" col-lg-4">
                                            <div class="binduz-er-news-categories-item">
                                                <div class="binduz-er-thumb">
                                                    <img src="../assets/images/categories-news-3.jpg" alt="">
                                                </div>
                                                <div class="binduz-er-content">
                                                    <div class="binduz-er-meta-date">
                                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                    </div>
                                                    <div class="binduz-er-news-categories-title">
                                                        <h4 class="binduz-er-title"><a href="#">Get ready for Hollywood’s big night with Google</a></h4>
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

<script>
export default {
    name: 'CategoryLine',
    data(){
        return {
            categories: [
                {name:'Breaking News'},
                {name:'Entertainment'},
                {name:'Sports'},
                {name:'Politics'},
                {name:'Trending'},
                {name:'Football'},
                {name:'Gaming'}
            ],
            activeTab: '',
            categoriesContent: [
                {BreakingNews: []},
                {Entertainment: []},
                {Sports: []},
                {Politics: []},
                {Trending: []},
                {Football: []},
                {Gaming: []}
            ],
        }
    },
    methods: {
        chooseCateg (e) {
            const tabs = document.querySelectorAll('.tab-btn');
            tabs.forEach(element => {
                element.classList.remove('active')
            });
            e.target.classList.add('active');


            const lines = document.querySelectorAll('.tab-pane');
            const currTab = e.target.dataset.btn;

            lines.forEach(element => {
                element.classList.add('d-none');
                if (element.dataset.content === currTab) {
                    element.classList.remove('d-none');
                    element.classList.add('active');
                    element.classList.add('show');
                }
            });
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/styles/styles.scss';

.active {
    display: flex;
}

.binduz-er-news-categories-tab {
    margin-top: 40px;
    margin-bottom: 40px;

    & ul {
        & li {
            & a {
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

                &.active {
                    color: #fff !important;
                    background-color: $theme-color-2 !important;
                }
            }
        }
    }
}

.binduz-er-news-categories-box {
    margin-bottom: 40px;
    & .binduz-er-news-categories-item {
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

        & .binduz-er-thumb {
            min-width: 120px;
            height: 100px;
            margin-right: 20px;
            @media #{$lg} {
                margin-bottom: 10px;
            }
            @media #{$xs} {
                margin-bottom: 10px;
            }
        }

        & .binduz-er-content {
            & .binduz-er-meta-date {
                & span {
                    color: #666;
                    font-size: 14px;
                }
            }

            & .binduz-er-news-categories-title {
                & .binduz-er-title {
                    margin-bottom: 0;
                    font-size: 20px;
                    line-height: 30px;
                    @media #{$laptop} {
                        font-size: 16px;
                        line-height: 26px;
                    }

                    & a {
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

.binduz-er-news-slider-box {
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
    & .binduz-er-item {
        padding-left: 80px;
        padding-right: 80px;
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