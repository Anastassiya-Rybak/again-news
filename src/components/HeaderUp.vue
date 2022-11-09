<template>
  <div class="headerUp">
    <div class="binduz-er-news-off_canvars_overlay"></div>
    <div class="binduz-er-news-offcanvas_menu binduz-er-news-offcanvas_menu_left">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="binduz-er-news-offcanvas_menu_wrapper">
                        <div class="binduz-er-news-canvas_close">
                            <a href="javascript:void(0)"><i class="fal fa-times"></i></a>
                        </div>
                        <div class="binduz-er-news-header-social">
                            <ul class="text-center">
                                <li><a href="#">facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Skype</a></li>
                            </ul>
                        </div>
                        <div id="menu" class="text-left ">
                            <ul class="binduz-er-news-offcanvas_main_menu">
                                <li class="binduz-er-news-menu-item-has-children binduz-er-news-active">
                                    <a href="#">Home</a>
                                    <ul class="binduz-er-news-sub-menu">
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
                                <li class="binduz-er-news-menu-item-has-children">
                                    <a href="archived.html">Archived </a>
                                </li>
                                <li class="binduz-er-news-menu-item-has-children">
                                    <a href="author.html">Author</a>
                                </li>
                                <li class="binduz-er-news-menu-item-has-children">
                                    <a href="#"> Pages</a>
                                    <ul class="binduz-er-news-sub-menu">
                                        <li><a href="blog-details-1.html">Blog Details 1</a></li>
                                        <li><a href="blog-details-2.html">Blog Details 2</a></li>
                                    </ul>
                                </li>
                                <li class="binduz-er-news-menu-item-has-children">
                                    <a href="about-us.html"> About</a>
                                </li>
                                <li class="binduz-er-news-menu-item-has-children">
                                    <a href="contact.html"> Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div class="binduz-er-news-offcanvas_footer">
                           <div class="binduz-er-news-logo text-center mb-30 mt-30">
                               <a href="index.html">
                                   <img src="../assets/images/logo.png" alt="">
                               </a>
                           </div>
                            <p>I’m Michal Škvarenina, a multi-disciplinary designer currently working at Wild and as a freelance designer.</p>
                            <ul>
                                <li><i class="fas fa-phone"></i> +212 34 45 45 98</li>
                                <li><i class="fas fa-home"></i> Angle Bd Abdelmoumen & rue soumaya, Résidence</li>
                                <li><i class="fas fa-envelope"></i> hello@example.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--====== OFFCANVAS MENU PART ENDS ======-->
    
    <!--====== SEARCH PART START ======-->

    <div class="binduz-er-news-search-box">
        <div class="binduz-er-news-search-header">
            <div class=" container mt-60">
                <div class="row">
                    <div class=" col-6">
                        <img src="../assets/images/logo-4.png" alt=""> <!-- search title -->
                    </div>
                    <div class=" col-6">
                        <div class="binduz-er-news-search-close float-end">
                            <button class="binduz-er-news-search-close-btn">Close <span></span><span></span></button>
                        </div> <!-- search close -->
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- search header -->
        <div class="binduz-er-news-search-body">
            <div class=" container">
                <div class="row">
                    <div class=" col-lg-12">
                        <div class="binduz-er-news-search-form">
                            <form action="#">
                                <input type="text" placeholder="Search for Products">
                                <button><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- search body -->
    </div>

    <!--====== SEARCH PART ENDS ======-->

    <!--====== BINDUZ TOP HEADER PART START ======-->

    <div class="binduz-er-news-top-header-area-2 bg_cover">
        <div class=" container">
            <div class="row align-items-center">
                <div class=" col-lg-6 col-md-5">
                    <div class="binduz-er-news-top-header-btns">
                        <ul>
                            <li>
                                <span class="binduz-er-toggle-btn binduz-er-news-canvas_open"><i class="fal fa-bars"></i> Menu</span>
                            </li>
                            <li>
                                <a class="binduz-er-news-search-open" href="#"><i class="fal fa-search"></i> Search</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class=" col-lg-6 col-md-7">
                    <div class="binduz-er-news-top-header-weather">
                        <ul>
                            <li><a href="#"><i class="fal fa-cloud"></i> 22°F</a></li>
                            <li><a href="#"><i class="fal fa-cloud"></i> 22°F</a></li>
                            <li><a href="#"><i class="fal fa-user"></i> Login/Sign</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   name: 'HeaderUp', 
}
</script>

<style lang="scss">
@import '../assets/styles/styles.scss';

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