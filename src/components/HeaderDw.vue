<template>
    <div class="headerDw">
        <header class="binduz-er-header-area binduz-er-header-area-2">
            <div class="binduz-er-header-nav">
                <div class=" container">
                    <div class="row">
                        <div class=" col-lg-12">
                            <div class="binduz-er-header-meddle-bar d-flex justify-content-between">
                                <div class="binduz-er-logo">
                                    <a href="#"><img src="../assets/images/logo-3.png" alt=""></a>
                                </div>
                                <div class="binduz-er-header-add">
                                    <img src="../assets/images/space-bg-3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class=" col-lg-12">
                            <div class="navigation">
                                <nav class="navbar navbar-expand-lg">
                                    <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul class="navbar-nav mr-auto">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="index.html">Home <i class="fa fa-angle-down"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="index-2.html">Home 2</a></li>
                                                    <li><a href="index-3.html">Home 3</a></li>
                                                    <li><a href="index-4.html">Home 4</a></li>
                                                    <li><a href="index-5.html">Home 5</a></li>
                                                    <li><a href="index-6.html">Home 6</a></li>
                                                    <li><a href="index-7.html">Home 7</a></li>
                                                    <li><a href="index-8.html">Home 8</a></li>
                                                    <li><a href="index-9.html">Home 9</a></li>
                                                    <li><a href="index-10.html">Home 10</a></li>
                                                    <li><a href="index-11.html">Home 11</a></li>
                                                    <li><a href="index-12.html">Home 12</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="archived.html">Archived </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="author.html">Author</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Pages<i class="fa fa-angle-down"></i></a>
                                                <ul class="sub-menu">
                                                    <li><a href="blog-details-1.html">Blog Details 1</a></li>
                                                    <li><a href="blog-details-2.html">Blog Details 2</a></li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a class="binduz-er-nav-link" href="about-us.html">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div> <!-- navbar collapse -->
                                    <div class="binduz-er-navbar-btn d-flex">
                                        <swiper class="binduz-er-topbar-headline-2"
                                            :direction="'vertical'"
                                            :modules="modules"
                                            :slides-per-view="1"
                                            :loop="true"
                                            :autoplay="{
                                                delay: 3000,
                                            }">
                                            <swiper-slide><p><span><i class="fas fa-bolt"></i> Trending News:</span> <a href="#">Making sense of 2020 through Search</a></p></swiper-slide>
                                            <swiper-slide><p><span><i class="fas fa-bolt"></i> Trending News:</span> <a href="#">2020: The new normals of daily life</a></p></swiper-slide>
                                            <swiper-slide><p><span><i class="fas fa-bolt"></i> Trending News:</span> <a href="#">Miranda halim was viral after finish his workout.</a></p></swiper-slide>
                                        </swiper>
                                    </div>
                                </nav>
                            </div> <!-- navigation -->
                        </div>
                    </div> <!-- row -->
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {Autoplay} from 'swiper';
    import '../../node_modules/swiper/swiper.scss';


export default {
    name: 'HeaderDw',
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
@import '@/assets/styles/styles.scss';
.binduz-er-header-area {
position: relative;
z-index: 99;

& .navigation {
    & .navbar {
        & .navbar-brand {
            width: 280px;
            margin: 0;
            padding: 0;
        }
    }
}

&.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: $black;
    animation: sticky 1.2s;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);
}

&.binduz-er-header-area-2 {
    & .binduz-er-header-nav {
        padding: 0;
        box-shadow: none;

        & .navigation {
            background: $theme-color-2;
            padding: 0 50px;

            @media #{$lg} {
                padding: 0 20px;
            }

            & .navbar {
                & .navbar-nav {
                    & .nav-item {
                        &.active,
                        &:hover{
                            & > a{
                                color: $white;
                            }
                        }
                        & > a {
                            @media #{$laptop} {
                                margin: 0 18px;
                            }
                        }

                        &:first-child {
                            & > a {
                                margin-left: 0;
                            }
                        }

                        &:last-child {
                            & > a {
                                margin-right: 0;
                            }
                        }
                    }
                }

                & .binduz-er-navbar-btn {
                    width: 62%;
                    @media #{$lg} {
                        width: 65%;
                    }
                    @media #{$md} {
                        display: none;
                    }
                    @media #{$xs} {
                        display: none;
                    }
                    & .binduz-er-topbar-headline-2{
                        & p{
                            margin-bottom: 0;
                            color: $white;
                            & a{
                                color: #9BBCD4;
                            }
                        }
                    }
                }
            }

        }

        & .nav-item {
            & a {
                line-height: 70px;
                color: #75A2C2;

                &.active,
                &:hover {
                    color: $white;
                }
            }

            &.active {
                & a {
                    color: $white;
                }
            }

            & .sub-menu {
                & > li {
                    & a {
                        color: $text-color;
                    }
                }
            }
        }
    }
}

&.binduz-er-header-area-3 {
    background: #0C0C0C;

    & .binduz-er-header-nav {
        padding: 0;
        background-color: transparent;
    }

    & .navigation {
        & .navbar {
            & .navbar-brand {
                margin-bottom: -20px;
            }

            & .navbar-nav {
                & .nav-item {
                    & > a {
                        color: #999999;
                        @media #{$lg} {
                            margin: 0 10px;
                        }
                    }

                    &.active,
                    &:hover {
                        & > a {
                            color: $white;
                        }
                    }
                }
            }

            & .binduz-er-navbar-btn {
                display: -webkit-flex;
                display: -moz-flex;
                display: -ms-flex;
                display: -o-flex;
                display: flex;
                align-items: center;

                & .binduz-er-widget {
                    & a {
                        height: 100px;
                        width: 100px;
                        margin: 0;
                        padding: 0;
                        text-align: center;
                        line-height: 100px;
                        background: #111;
                        font-size: 20px;
                        color: #666;
                    }
                }

                & .binduz-er-toggle-btn {
                    height: 100px;
                    width: 100px;
                    border-radius: 0;
                    padding: 0;
                    line-height: 100px;
                    font-size: 20px;
                    background: #191919;
                    margin-left: 0;
                    color: #666;
                }

                & .binduz-er-header-dropdown-select {
                    & > .nice-select {
                        background-color: transparent;
                        color: #999999;
                        border: 0;
                        margin-right: 45px;
                        width: 70px;
                        padding: 0;
                        &::after{
                            right: 6px;
                        }
                    }
                }
            }


        }
    }
}
&.binduz-er-header-area-4{
    & .binduz-er-header-nav{
        box-shadow: none;
        padding: 0;
        background: transparent;
        & .binduz-er-header-meddle-bar{
            padding: 7px 0 0;
            align-items: center;
            background-color: transparent;
            &.binduz-er-page{
                padding: 40px 0;
            }
            & .navigation{
                background: $white;
                width: 100%;
                margin-left: 30px;
                padding-left: 50px;
                & .navbar{
                    & .navbar-nav{
                        & .nav-item {
                            & > a{
                                line-height: 80px;
                                color: #999;
                            }
                            &.active,
                            &:hover{
                                & > a{
                                    color: $black;
                                }
                            }
                            & .sub-menu{
                                & >{
                                    & li{
                                        & a{
                                            color: #999;
                                            &:hover{
                                                color: $black;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    & .binduz-er-navbar-btn{
                        & .binduz-er-search-btn{
                            background: #E74D58;
                            & a{
                                display: inline-block;
                                height: 80px;
                                width: 80px;
                                text-align: center;
                                line-height: 80px;
                                color: $white;
                                font-size: 20px;
                            }
                        }
                        & .binduz-er-toggle-btn{
                            margin-left: 2px;
                            border-radius: 0;
                            height: 80px;
                            width: 80px;
                            line-height: 80px; 
                            background: #E74D58;
                        }
                    }
                }
            }
            & .binduz-er-logo{
                margin: 0;
                width: 260px;
                @media #{$xs} {
                    min-width: 160px;
                }
            }
        }
    }
}
}












.binduz-er-header-nav {
padding: 22px 0;
box-shadow: 0px -10px 38px 0 rgba(46, 63, 99, 0.15);
background: #fff;

@media #{$md} {
    padding: 15px 0;
    top: 0;
}

@media #{$xs} {
    padding: 15px 0;
    top: 0;
}

&.binduz-er-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: $white;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);
    z-index: 999;
    animation: sticky 1.2s;

    & .navbar {
        & .navbar-brand {
            & a {}
        }

        & .navbar-nav {
            & .nav-item {
                & a {
                    line-height: 80px;
                    color: $black;

                    @media #{$md} {
                        line-height: 40px;
                        color: $white;
                    }

                    @media #{$xs} {
                        line-height: 40px;
                        color: $white;
                    }
                }

                & .sub-menu {
                    & li {
                        & a {
                            line-height: 2.5;
                            color: $black;
                        }
                    }
                }
            }
        }

        & .binduz-er-navbar-toggler {
            & .binduz-er-toggler-icon {
                background: $black;
            }
        }
    }
}


}


.navbar {
position: relative;
padding: 0;
flex-wrap: inherit;

& .navbar-brand {
    & span {}
}

& .binduz-er-country-flag {
    & img {
        border: 5px solid $white;
        border-radius: 6px;
        box-shadow: 0px 8px 16px 0px rgba(60, 110, 203, 0.2);
    }
}


& .navbar-nav {
    list-style-type: none;
    margin: 0;
    padding: 0;


    @media #{$md} {
        margin-right: 0;
    }

    @media #{$xs} {
        margin-right: 0;
    }

    &.right-menu {
        & .nav-item {
            & a {
                text-align: center;
            }

            & .sub-menu {
                & > li {
                    & a {
                        & i {
                            float: left;
                        }
                    }

                    & .sub-menu {
                        left: auto;
                        right: 100%;

                        & li {
                            & .sub-menu {
                                left: auto;
                                right: 100%;

                            }
                        }
                    }
                }
            }
        }
    }

    & .nav-item {
        position: relative;

        &:hover,
        &.active {
            & a {
                color: $black;
            }
        }

        & a {
            font-size: 16px;
            font-weight: 700;
            color: #666666;
            text-transform: capitalize;
            position: relative;
            @include transition(0.3s);
            margin: 0 32px;
            line-height: 45px;
            padding: 0;

            @media #{$lg} {
                margin: 0 15px;
            }

            @media #{$md} {
                color: $black;
            }

            @media #{$xs} {
                color: $black;
            }

            & > i {
                @media #{$md} {
                    display: none;
                }

                @media #{$xs} {
                    display: none;
                }

            }

            @media #{$md} {
                padding: 0;
                display: block;
                border: 0;
                margin: 0;
                line-height: 40px;
            }

            @media #{$xs} {
                padding: 0;
                display: block;
                border: 0;
                margin: 0;
                line-height: 40px;
            }

            & span {
                padding-left: 5px;
                font-size: 15px;

                @media #{$md} {
                    display: none;
                }

                @media #{$xs} {
                    display: none;
                }
            }

            & i {
                padding-left: 6px;
            }
        }

        &:first-child {
            & a {
                margin-left: 0;
            }
        }

        &:last-child {
            & a {
                margin-right: 0;
            }
        }

        & .sub-menu {
            position: absolute;
            left: 0;
            top: 110%;
            width: auto;
            min-width: 205px;
            max-width: 300px;
            background-color: $white;
            opacity: 0;
            visibility: hidden;
            transition: all linear 0.3s;
            z-index: 99;
            @include box-shadow (11px 10px 38px 0 rgba(46, 63, 99, 0.15));
            list-style-type: none;
            margin: 0;
            padding: 15px 0;
            border-radius: 5px;

            @media #{$laptop} {
                width: 150px;
            }

            @media #{$lg} {
                width: 150px;
            }


            @media #{$md} {
                position: relative;
                width: 100%;
                left: 0;
                top: auto;
                opacity: 1;
                visibility: visible;
                display: none;
                right: auto;
                @include transform(translateX(0%));
                @include transition(none);
                @include box-shadow(none);
                text-align: left;
                border-top: 0;
                transition: 0s;
                padding: 0;
            }

            @media #{$xs} {
                position: relative;
                width: 100%;
                left: 0;
                top: auto;
                opacity: 1;
                visibility: visible;
                display: none;
                right: auto;
                @include transform(translateX(0%));
                @include transition(none);
                @include box-shadow(none);
                text-align: left;
                border-top: 0;
                transition: 0s;
                padding: 0;
            }

            & > li {
                position: relative;

                & .sub-menu {
                    margin-left: 0px;

                    @media #{$md} {
                        margin-left: 0;
                    }

                    @media #{$xs} {
                        margin-left: 0;
                    }
                }

                & .sub-nav-toggler {
                    color: $heading-color;
                    @include transition(0.3s);
                }

                & a {
                    display: block;
                    padding: 0px 30px;
                    position: relative;
                    color: $text-color;
                    @include transition(0.3s);
                    border-radius: 4px;
                    margin: 0 0;
                    line-height: 2.5;

                    @media #{$laptop} {
                        padding: 0 20px;
                    }

                    @media #{$lg} {
                        padding: 0 20px;
                    }

                    & i {
                        float: right;
                        font-size: 16px;
                        margin-top: 10px;

                        @media #{$md} {
                            display: none;
                        }

                        @media #{$xs} {
                            display: none;
                        }
                    }

                    & .sub-nav-toggler {
                        & i {
                            display: inline-block;
                        }
                    }
                }

                & .sub-menu {
                    right: auto;
                    left: 100%;
                    top: 50%;
                    opacity: 0;
                    visibility: hidden;
                    @include transition(0.3s);

                    @media #{$md} {
                        padding-left: 30px;
                        @include transition(0s);
                    }

                    @media #{$xs} {
                        padding-left: 30px;
                        @include transition(0s);
                    }

                    & li {
                        position: relative;

                        & .sub-menu {
                            right: auto;
                            left: 100%;
                            top: 50%;
                            opacity: 0;
                            visibility: hidden;
                            @include transition(0.3s);


                        }

                        &:hover {
                            & .sub-menu {
                                top: 0%;
                                opacity: 1;
                                visibility: visible;
                            }
                        }
                    }
                }

                &:hover {
                    & .sub-menu {
                        top: 0%;
                        opacity: 1;
                        visibility: visible;
                    }

                    & .sub-nav-toggler {
                        color: $theme-color;
                    }

                    & > a {
                        color: $theme-color;
                    }
                }
            }
        }

        &:hover {
            & .sub-menu {
                opacity: 1;
                visibility: visible;
                top: 100%;
            }
        }

        .sub-nav-toggler {
            display: none;

            @media #{$md} {
                display: inline-block;
                position: absolute;
                top: 0;
                right: 0;
                padding: 0px;
                font-size: 16px;
                background: none;
                border: 0;
                color: $black;
            }

            @media #{$xs} {
                display: inline-block;
                position: absolute;
                top: 0;
                right: 0;
                padding: 0px;
                font-size: 16px;
                background: none;
                border: 0;
                color: $black;
            }
        }
    }
}

.swiper-pointer-events.swiper-vertical {
    height: 25px;
}
& .binduz-er-navbar-btn {
    & .binduz-er-widget {
        @media #{$xs} {
            display: none !important;
        }

        @media #{$sm} {
            display: flex !important;
        }

        & a {
            margin-left: 20px;
            padding-left: 20px;
            border-left: 1px solid #E0E0E0;
            line-height: 15px;

            &:first-child {
                border-left: 0;
            }
        }
    }

    & .binduz-er-toggle-btn {
        display: inline-block;
        height: 45px;
        width: 45px;
        background: $theme-color;
        color: $white;
        font-size: 20px;
        text-align: center;
        line-height: 45px;
        border-radius: 50%;
        margin-left: 20px;
        cursor: pointer;
    }


    @media #{$md} {
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        align-items: center;

    }

    @media #{$xs} {
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        align-items: center;

    }
}
}




@-webkit-keyframes sticky {
0% {
    top: -200px;
}

100% {
    top: 0;
}
}

@keyframes sticky {
0% {
    top: -200px;
}

100% {
    top: 0;
}
}




.binduz-er-breadcrumb-area{
margin-bottom: 40px;
border-top: 2px solid #ededed;
border-bottom: 2px solid #ededed;
& .binduz-er-breadcrumb-box{
    padding: 26px 0;
    & nav{
        & ol{
            margin: 0;
            & li{
                color: #000;
                & a{
                    color: #999;
                }
                &.breadcrumb-item {
                    & + .breadcrumb-item{
                        margin-left: 21px;
                        &::before{
                            color: #999;
                            content: var(--bs-breadcrumb-divider, ">");
                            padding-right: 21px;
                        }
                    }
                }
            }
        }
    }
}
}

</style>