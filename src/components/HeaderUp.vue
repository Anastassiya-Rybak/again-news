<template>
  <div class="headerUp">
    <transition name="fade">
        <SearchPopup 
            v-if="searchWindowVisible"
            @closeSearchPopup="closeWindowSearch"
            @goSearch="$emit('addSearchInfo')"
        />
    </transition>
    <MenuPopup 
        v-if="menuWindowVisible"
        @closePopup="closeWindowMenu"
    />
    <div class="binduz-er-news-top-header-area-2 bg_cover">
        <div class=" container">
            <div class="row align-items-center">
                <div class=" col-lg-6 col-md-5">
                    <div class="binduz-er-news-top-header-btns">
                        <ul>
                            <li>
                                <span class="binduz-er-toggle-btn binduz-er-news-canvas_open"
                                    @click="menuWindowVisible = !menuWindowVisible"
                                >
                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                    Menu
                                </span>
                            </li>
                            <li>
                                <a class="binduz-er-news-search-open" href="#"
                                    @click="searchWindowVisible = !searchWindowVisible"
                                >
                                    <i class="fa fa-search" aria-hidden="true"></i> 
                                    Search
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class=" col-lg-6 col-md-7">
                    <div class="binduz-er-news-top-header-weather">
                        <ul>
                            <li>
                                <a href="#">
                                    <i class="fa fa-cloud" aria-hidden="true"></i>
                                     {{toRound(weather)}}°C
                                    </a>
                                </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-cloud" aria-hidden="true"></i> 
                                    {{toRoundF(weather)}}°F
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fa fa-user-o" aria-hidden="true"></i> 
                                    Login/Sign
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    // import axios from 'axios';
    import SearchPopup from './popup/SearchPopup.vue';
    import MenuPopup from './popup/MenuPopup.vue';
    import { ref, onMounted } from 'vue';

    const searchWindowVisible = ref(false);
    const menuWindowVisible = ref(false);
    const weather = ref([]);

    const closeWindowSearch = () => {
        searchWindowVisible.value = false;
    };
    const closeWindowMenu = () => {
        menuWindowVisible.value = false;
    };
    const toRound = (ele) => {
        let tempUnform = ele - 273;
        let temp = Math.round(tempUnform);
        return temp;
    };
    const toRoundF = (ele) => {
        let tempUnform = (ele - 273) * 9 / 5 + 32;
        let temp = Math.round(tempUnform);
        return temp;
    };

    onMounted(() => {
        axios
        .get ('http://api.openweathermap.org/data/2.5/weather?q=Karaganda&appid=0aba706e4dcac03de2493c0fa21fd9cf')
        .then (response => (weather.value = response.data.main.temp));
    })
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter-active {
    animation: stickyIn 0.6s;
}
.fade-leave-active {
    animation: stickyOut 0.6s;
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

.binduz-er-top-header-area {

padding: 15px 0;
position: relative;
z-index: 10;

@media #{$md} {
    display: none;
}

@media #{$xs} {
    display: none;
}

& .binduz-er-bg-cover {
    left: 0;
    top: 0;
    background-image: url(../assets/images/top-bar-bg.jpg);
}

}

.binduz-er-topbar-headline {
margin-left: 85px;

p {
    margin: 0;
    color: $white;

    & span {
        font-weight: 700;
        text-decoration: underline;

        & i {
            padding-right: 5px;
        }
    }
    & a{
        color: $white;
    }
}

& .slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 30px;
    width: 30px;
    background: #01409E;
    color: $white;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    cursor: pointer;
    z-index: 9;
    @include transition(0.3s);

    &:hover {
        background: $theme-color;
    }

    &.prev {
        left: -85px;
    }

    &.next {
        left: -48px;
    }
}
}





.binduz-er-topbar-social {
& .binduz-er-news-social {
    & ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        & li {
            display: inline-block;

            & a {
                color: $white;
                font-size: 14px;
                display: inline-block;
                margin-left: 10px;

                &:hover {
                    color: $theme-color;
                }
            }
        }
    }
}

& .binduz-er-news-subscribe-btn {
    margin-left: 30px;
}
}


.binduz-er-news-top-header-area-2 {
background: $theme-color-2;
padding: 22px 0;

& .binduz-er-news-top-header-btns {
    & ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        & li {
            display: inline-block;
            color: $white;
            margin-right: 40px;

            & span {
                font-weight: 700;
                cursor: pointer;

                & i {
                    font-weight: 100;
                    padding-right: 5px;
                }
            }

            & a {
                color: $white;
            }
        }
    }
}

& .binduz-er-news-top-header-weather {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: flex-end;

    @media #{$xs} {
        display: none;
    }

    & ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        & li {
            display: inline-block;
            margin-left: 40px;

            & a {
                color: $white;

                & i {
                    padding-right: 6px;
                }
            }
        }
    }
}
}


.binduz-er-header-meddle-bar {
background: $white;
padding: 60px 75px;

@media #{$md} {
    padding: 20px;
}

@media #{$xs} {
    padding: 20px;
}

& .logo {
    margin-right: 100px;
}

& .header-add {
    @media #{$xs} {
        display: none;
    }
}
}


.binduz-er-top-header-area-4{
position: relative;
background: $white;
z-index: 100;
& .binduz-er-top-header-lang{
    
    & .nice-select{
        background: #E74D58;
        color: $white;
        border: 0;
        border-radius: 0;
        font-weight: 500;
        text-transform: capitalize;
        height: 60px;
        width: 140px;
        text-align: center !important;
        padding: 0;
        padding-top: 10px;
        margin-right: 50px;
        &::after{
            border-bottom-color: $white;
            border-right-color: $white;
            right: 35px;
        }
        & ul{
            width: 100%;
            top: 95%;
            border-radius: 0;
            & li{
                color: $text-color;   
            }
        }
    }
}
& .binduz-er-top-header-weather{
    & ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
        & li{
            display: inline-block;
            line-height: 60px;
            & a{
                color: #999;
                margin-right: 20px;
                display: inline-block;
                & i{
                    color: $theme-color;
                    padding-right: 6px;
                }
            }
        }
    }
}
& .binduz-er-topbar-headline{
    text-align: right;
    padding-right: 95px;
    margin-left: 0;
    & p{
        color: $text-color;
        & span{
            color: $black;
        }
        & a{
            color: $text-color;
        }
    }
    & .slick-arrow{
        border-radius: 0;
        background: #FFEEEF;
        color: $theme-color;
        &:hover{
            background: $theme-color;
            color: $white;
        }
        &.prev{
            left: auto;
            right: 35px;
        }
        &.next{
            left: auto;
            right: 0;
        }
    }
}
}

</style>