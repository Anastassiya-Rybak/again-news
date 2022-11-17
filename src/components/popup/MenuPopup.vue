<template>
    <transition name="fade">
        <div class="menu-popup">
            <div class="binduz-er-news-off_canvars_overlay  binduz-er-news-active"
            @click="closePopup"
            ></div>
            <div class="binduz-er-news-offcanvas_menu binduz-er-news-offcanvas_menu_left">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="binduz-er-news-offcanvas_menu_wrapper binduz-er-news-active">
                                <div class="binduz-er-news-canvas_close">
                                    <a href="#"
                                    @click="closePopup">
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </a>
                                </div>
                                <div class="binduz-er-news-header-social">
                                    <ul class="text-center">
                                        <li v-for="sm in socialMedia" :key="sm">
                                            <a class="d-flex d-flex-row" :href="sm.url">{{sm.name}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="menu" class="text-left ">
                                    <ul class="binduz-er-news-offcanvas_main_menu">
                                        <li class="binduz-er-news-menu-item-has-children binduz-er-news-active">
                                            <a href="#" @click="openCategories">
                                                Categories
                                                <i class="fa fa-angle-down" aria-hidden="true" v-if="categoriesOpen"></i>
                                                <i class="fa fa-angle-right" aria-hidden="true" v-else></i>
                                            </a>
                                            <div v-if="categoriesOpen">
                                                <ul class="binduz-er-news-sub-menu" 
                                                v-for="categPage in categoriesPages" :key="categPage"
                                                >
                                                    <li>
                                                        <a :href="categPage.url">{{categPage.name}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li class="binduz-er-news-menu-item-has-children">
                                            <a href="/">Authors</a>
                                        </li>
                                        <li class="binduz-er-news-menu-item-has-children">
                                            <a href="/"> About</a>
                                        </li>
                                        <li class="binduz-er-news-menu-item-has-children">
                                            <a href="/"> Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="binduz-er-news-offcanvas_footer">
                                <div class="binduz-er-news-logo text-center mb-30 mt-30">
                                    <a href="index.html">
                                        <img src="../../assets/images/logo.png" alt="">
                                    </a>
                                </div>
                                    <p>I’m Michal Škvarenina, a multi-disciplinary designer currently working at Wild and as a freelance designer.</p>
                                    <ul>
                                        <li>
                                            <i class="fa fa-phone" aria-hidden="true"></i> 
                                            +212 34 45 45 98
                                        </li>
                                        <li>
                                            <i class="fa fa-home" aria-hidden="true"></i>
                                            Angle Bd Abdelmoumen & rue soumaya, Résidence
                                        </li>
                                        <li>
                                            <i class="fa fa-envelope" aria-hidden="true"></i> 
                                            hello@example.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'MenuuPopup',
    data(){
        return{
            socialMedia: [
                {
                    name: 'facebook',
                    url: '/'
                },
                {
                    name: 'Twitter',
                    url: '/'
                },
                {
                    name: 'Skype',
                    url: '/'
                },
            ],
            categoriesPages: [
                {
                    name: 'Breaking News',
                    url: '/'
                },
                {
                    name: 'Entertaiment',
                    url: '/'
                },                
                {
                    name: 'Sports',
                    url: '/'
                },                
                {
                    name: 'Politics',
                    url: '/'
                },                
                {
                    name: 'Trending',
                    url: '/'
                },                
                {
                    name: 'Football',
                    url: '/'
                },                
                {
                    name: 'Gaming',
                    url: '/'
                },                
                {
                    name: 'Technology',
                    url: '/'
                },                
                {
                    name: 'Covid-19',
                    url: '/'
                },                
                {
                    name: 'Movies',
                    url: '/'
                },                
                {
                    name: 'Nature',
                    url: '/'
                },
            ],
            categoriesOpen: false,
        }
    },
    methods: {
        closePopup(){
            this.$emit('closePopup');
        },
        openCategories(){
            if (this.categoriesOpen === false){
                this.categoriesOpen = true;
            } else {
                this.categoriesOpen =false;
            }
        }
    }
}
</script>

<style lang="scss">

@import '@/assets/styles/styles.scss';

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter-active {
    animation: stickyIn 2.6s;
}
.fade-leave-active {
    animation: stickyOut 2.6s;
}
// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }
@-webkit-keyframes stickyIn {
0% {
    top: -100%;
}

100% {
    top: 0;
}
}

@keyframes stickyIn {
0% {
    top: -100%;
}

100% {
    top: 0;
}
}
@-webkit-keyframes stickyOut {
0% {
    top: 0;
}

100% {
    top: -100%;
}
}

@keyframes stickyOut {
0% {
    top: 0;
}

100% {
    top: -100%;
}
}

.binduz-er-news-off_canvars_overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    cursor: crosshair;
    background: #232323;
    top: 0;
    &.binduz-er-news-active{
        opacity: .5;
        visibility: visible;
    }
}


.binduz-er-news-offcanvas_menu {
    &.binduz-er-news-offcanvas_menu_left{
        & .binduz-er-news-offcanvas_menu_wrapper{
            left: 0;
            right: auto;
            margin-right: 0;
            margin-left: -310px;
            &.binduz-er-news-active{
                margin-left: 0;
            }
        }
    }
}


.binduz-er-news-offcanvas_menu_wrapper {
    width: 310px;
    position: fixed;
    background: #fff;
    z-index: 9999;
    top: 0;
    height: 100vh;
    transition: .5s;
    right: 0;
    margin-right: -310px;
    padding: 50px 15px 30px;
    overflow-y: auto;
    &.binduz-er-news-active{
        margin-right: 0;
    }

    & .binduz-er-news-header-btn{
        margin-bottom: 30px;
        & a{
            color: $black;
            &:hover{
                color: $black;
            }
        }
    }
    & .binduz-er-news-header-social{
        padding-bottom: 30px;
        & ul{
            margin: 0;
            padding: 0;
            list-style-type: none;
            & li{
                display: inline-block;
                & a{
                    font-size: 14px;
                    margin: 0 5px;
                    color: $text-color;
                }
            }
        }
    }
}



.binduz-er-news-offcanvas_main_menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
    & li{
        position: relative;
        &:last-child{
            margin: 0;
        }
        & span{
            &.menu-expand{
                position: absolute;
                right: 0;
                cursor: pointer;

            }
        }
        & a{
            font-size: 15px;
            font-weight: 400;
            text-transform: capitalize;
            display: block;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #ededed;
            color: $text-color;
            @include transition(0.3s);
            &:hover{
                color: $theme-color;
            }

        }
        & ul{
            list-style-type:none;
            &.binduz-er-news-sub-menu{
                padding-left: 20px;
                list-style-type: none;
            }
        }
    }
}


.binduz-er-news-offcanvas_footer {
    margin-top: 30px;
    padding-bottom: 50px;
    text-align: left;
    & p{
        font-size: 14px;
        padding-top: 30px;
        padding-bottom: 30px;
        line-height: 24px;
    }
    & ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
        & li{
            font-size: 14px;
            line-height: 30px;
            padding-bottom: 15px;
            position: relative;
            padding-left: 24px;
            
            & i{
                color: $theme-color;
                position: absolute;
                left: 0;
                top: 7px;
            }
        }
    }
}





.binduz-er-news-canvas_close {
    position: absolute;
    top: 10px;
    right: 13px;
    & a{
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 500;
        width: 32px;
        height: 32px;
        display: block;
        text-align: center;
        line-height: 32px;
        border: 1px solid #ededed;
        border-radius: 50%;
        color: $black;
        @include transition(0.3s);
        &:hover{
            background: $theme-color;
            border-color: $theme-color;
            color: #fff;

        }
    }
}

.binduz-er-news-canvas_open {
    & a{
        text-align: center;
    }
}

</style>