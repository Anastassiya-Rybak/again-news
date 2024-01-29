<template>
    <div class="favoriteCategory">
        <section class="binduz-er-favorites-categories-area">
            <div class=" container">
                <div class="row">
                    <div class=" col-lg-12">
                        <div class="binduz-er-favorites-categories-box">
                            <div class="binduz-er-top-news-title">
                                <h3 class="binduz-er-title">Favorites Categories</h3>
                            </div>
                            <div class="binduz-er-favorites-categories-list">
                                <div class="binduz-er-item" v-for="categ in favoriteCateg" :key="categ">
                                    <figure class="fav-categ__img">
                                        <img :src="categ.img" :alt="categ.name">
                                        <figcaption>{{categ.name}}</figcaption>
                                    </figure>
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
    const favoriteCateg = [
        {
            name:'Sports',
            img: 'https://www.gannett-cdn.com/presto/2022/11/13/PGRB/1c8bccb3-a5bf-40ad-8749-59b750477dcb-MJS_APC_PackVSCowboys_1113221076djp.jpg.png?crop=3249,1828,x0,y0&width=660&height=370&format=pjpg&auto=webp',
        },
        {
            name:'Covid-19',
            img: 'https://www.iru.org/sites/default/files/styles/desktop_2x_736x460/public/2020-03/Coronavirus%20%28COVID-19%29%20IRU%20calls%20on%20governments%20to%20help%20keep%20road%20transport%20supply%20chains%20and%20mobility%20networks%20moving.jpg?h=d1f557c8&itok=fLEDIe4f',
        }, 
        {
            name:'Journal',
            img: 'https://cdn.wan-ifra.org/wp-content/uploads/2021/07/24134813/wsj.jpg'
        }, 
        {
            name:'Beating',
            img: 'https://i0.wp.com/flintbeat.com/wp-content/uploads/2022/05/IMG_7997.jpg?w=2000&ssl=1'
        }, 
        {
            name:'Movies',
            img: 'https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-curse-of-bridge-hollow-2022/widget_the-curse-of-bridge-hollow-movie-poster-2022.jpeg'
        }, 
        {
            name:'Magazine',
            img: 'https://pocketmagscovers.imgix.net/cosmopolitan-magazine-june-july-2022-cover.jpg?w=362&auto=format'
        }, 
        {
            name:'Film',
            img: 'https://images.ctfassets.net/22n7d68fswlw/6DPevwtmTp7AKheG8p7Bjh/6587bd27a50d6669357bba015bdbd328/Film_Heritage_filmstrip.jpg?w=1200&h=630'
        },
        {
            name:'Games',
            img: 'https://i.guim.co.uk/img/media/1185a81df568b47b3bb678ae0aa3c9d79aa2432c/211_0_3600_2160/master/3600.jpg?width=700&quality=85&auto=format&fit=max&s=aecdfc8e6755fdc7bd16709833146735'
        }, 
        {
            name:'Nature',
            img: 'https://i.insider.com/5beb30d166be503a3b513dd6?width=600&format=jpeg&auto=webp'
        }
    ];
</script>

<style lang="scss">
    @import "@/assets/styles/styles.scss";
    
    .binduz-er-favorites-categories-area{
        padding-bottom: 60px;
    }
    .binduz-er-favorites-categories-box{
        background: $white;
        padding: 60px;
        @media #{$md} {
            padding: 30px;
        }
        @media #{$xs} {
            padding: 30px;
        }
        .binduz-er-favorites-categories-list{
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            @media #{$lg} {
                flex-wrap: wrap;
            }
            @media #{$md} {
                flex-wrap: wrap;
            }
            @media #{$xs} {
                flex-wrap: wrap;
            }
            .binduz-er-item{
                margin-right: 40px;
                cursor: pointer;

                @media #{$laptop} {
                    margin-right: 20px;
                }
                @media #{$lg} {
                    margin-right: 5px;
                    margin-bottom: 15px;
                    width: 14% !important;

                    .fav-categ__img {
                        overflow: hidden;
                        width: 100% !important;
                        height: 100px;
                        position: relative;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover !important;
                        }

                        figcaption {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            font-size: 14px;
                            color: $black;
                        }
                    }
                }
                @media #{$md} {
                    margin-right: 20px;
                    margin-bottom: 15px;
                }
                @media #{$xs} {
                    margin-right: 13px;
                    margin-bottom: 15px;
                }
                &:last-child{
                    margin-right: 0;
                }
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
    .fav-categ__img {
        width: 92px;
        height: 100px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
        }
    }

</style>