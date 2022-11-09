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
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-1.png" alt="">
                                        <span>Sports</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-2.png" alt="">
                                        <span>Covid-19</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-3.png" alt="">
                                        <span>Journal</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-4.png" alt="">
                                        <span>Beating</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-5.png" alt="">
                                        <span>Movies</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-6.png" alt="">
                                        <span>Magazine</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-7.png" alt="">
                                        <span>Film</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-8.png" alt="">
                                        <span>Games</span>
                                    </a>
                                </div>
                                <div class="binduz-er-item">
                                    <a href="#">
                                        <img src="../assets/images/favorites-categories-9.png" alt="">
                                        <span>Nature</span>
                                    </a>
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
    name: 'FavoriteCategory',
}
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
    & .binduz-er-favorites-categories-list{
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
        & .binduz-er-item{
            margin-right: 40px;
            @media #{$laptop} {
                margin-right: 20px;
            }
            @media #{$lg} {
                margin-right: 5px;
                margin-bottom: 15px;
                width: 16%;
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
            & span{
                display: block;
                font-size: 14px;
                color: $black;
                padding-top: 12px;
            }
            &:last-child{
                margin-right: 0;
            }
        }
    }
}
</style>