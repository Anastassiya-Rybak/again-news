<template>
    <div class="footerUp">
        <footer class="binduz-er-footer-2-area">
            <div class=" container">
                <div class="row">
                    <div class=" col-lg-12">
                        <div class="binduz-er-footer-box">
                            <div class="row">
                                <div class=" col-lg-4">
                                    <div class="binduz-er-footer-about text-center">
                                        <div class="binduz-er-logo">
                                            <a href="#">
                                                <img src="../assets/images/logo-4.png" alt="">
                                            </a>
                                        </div>
                                        <p>Michael Madigan on Sunday was confronted with the reality that he lacks support from nearly a third.</p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i class="fa fa-behance" aria-hidden="true"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class=" col-lg-4">
                                <div class="binduz-er-footer-gallery ml-50">
                                        <div class="binduz-er-footer-title">
                                            <h4 class="binduz-er-title">Photo Showcase</h4>
                                        </div>
                                        <div class="binduz-er-footer-gallery-widget d-flex">
                                            <div class="binduz-er-item"
                                            v-for="one in 3" :key="one">
                                                <a href="#">
                                                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-advertisement-design-template-cfd149289a4f241f8bbde6277ac6960c_screen.jpg?ts=1622237544" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="binduz-er-footer-gallery-widget d-flex">
                                            <div class="binduz-er-item"
                                            v-for="one in 3" :key="one">
                                                <a href="#">
                                                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-delivery-advertisement-design-template-cfd149289a4f241f8bbde6277ac6960c_screen.jpg?ts=1622237544" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" col-lg-4">
                                    <div class="binduz-er-footer-navigation">
                                        <div class="binduz-er-footer-title">
                                            <h3 class="binduz-er-title">Company Info</h3>
                                        </div>
                                        <div class="binduz-er-footer-list">
                                            <ul>
                                                <li><a href="#">About us</a></li>
                                                <li><a href="#">Terms of Service</a></li>
                                                <li><a href="#">Contact us</a></li>
                                                <li><a href="#">Local print ads</a></li>
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Media kit</a></li>
                                            </ul>
                                            <ul>
                                                <li><a href="#">Careers</a></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                                <li><a href="#">Archives</a></li>
                                                <li><a href="#">Coupons</a></li>
                                                <li><a href="#">Manage Web Notifications</a></li>
                                                <li><a href="#">Chicago Tribune Store</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    @import "@/assets/styles/styles.scss";

    .binduz-er-footer-area {
        padding-top: 75px;
        margin-top: 60px;
        padding-bottom: 60px;
        background: $black;
        position: relative;
        z-index: 10;
        overflow: hidden;

        &::before {
            position: absolute;
            z-index: -1;
            content: '';
            right: 0;
            top: 0;
            height: 100%;
            width: 30%;
            background: #111111;

            @media #{$laptop} {
                width: 23%;
            }

            @media #{$lg} {
                width: 26%;
            }

            @media #{$md} {
                width: 0%;
            }

            @media #{$xs} {
                width: 0%;
            }
        }
    }


.binduz-er-footer-widget-style-1 {
    margin-right: 20px;

    @media #{$xs} {
        margin-bottom: 30px;
        margin-right: 0;
    }
}

.binduz-er-footer-widget-style-3 {
    margin-right: 15px;

    @media #{$laptop} {
        margin-right: 0;
    }

    @media #{$xs} {
        margin-bottom: 30px;
        margin-right: 0;
    }

    .binduz-er-footer-title {
        .binduz-er-title {
            &::before {
                width: 56%;

                @media #{$lg} {
                    width: 34%;
                }
            }
        }
    }
}


.binduz-er-footer-title {
    & .binduz-er-title {
        font-size: 18px;
        color: $white;
        position: relative;
        margin-bottom: 30px;

        &::before {
            position: absolute;
            content: '';
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 2px;
            width: 65%;
            background: $theme-color;

            @media #{$lg} {
                width: 40%;
            }

            @media #{$xs} {
                display: none;
            }
        }
    }
}


.binduz-er-footer-menu-list {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;

    & ul {
        margin: 0 50px 0 0;
        padding: 0;
        list-style-type: none;

        @media #{$laptop} {
            margin: 0 15px 0 0;
        }

        @media #{$lg} {
            margin: 0 15px 0 0;
        }

        @media #{$xs} {
            margin: 0 30px 0 0;
        }

        & li {
            & a {
                color: #999;
                margin-bottom: 16px;
                display: inline-block;

                &:hover {
                    color: $theme-color;
                }
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }
}



.binduz-er-footer-widget-form {
    & .binduz-er-input-box {
        position: relative;
        margin-bottom: 15px;

        & > i {
            position: absolute;
            left: 25px;
            top: 50%;
            transform: translateY(-50%);
            color: #686868;
        }

        & input {
            width: 100%;
            background: #0D0D0D;
            color: #686868;
            border: 0;
            height: 60px;
            border-radius: 10px;
            font-size: 14px;
            padding-left: 48px;

            &::placeholder {
                color: #686868;
                opacity: 1;
            }
        }

        & button {
            width: 100%;
            background: $theme-color;
            color: $white;
            line-height: 60px;
            border-color: $theme-color;
            border-radius: 10px;
            border: 0;

            & i {
                padding-right: 6px;
            }
        }
    }
}

.binduz-er-footer-widget-feeds {
    & .binduz-er-sidebar-latest-post-box {
        & .binduz-er-sidebar-latest-post-item {
            & .binduz-er-title {
                font-size: 18px;
                line-height: 28px;

                @media #{$laptop} {
                    font-size: 15px;
                    line-height: 25px;
                }

                & a {
                    color: $white;
                }
            }
        }
    }
}



.binduz-er-footer-widget-info {
    margin-left: 60px;

    @media #{$lg} {
        margin-left: 0;
    }

    @media #{$md} {
        margin-left: 0;
        margin-top: 30px;
    }

    @media #{$xs} {
        margin-left: 0;
        margin-top: 30px;
    }

    & .binduz-er-text {
        padding-top: 22px;
        font-size: 14px;
    }

    & .binduz-er-social {
        padding-top: 9px;

        & ul {
            margin: 0;
            padding: 0;
            list-style-type: none;

            & li {
                display: inline-block;

                & a {
                    font-size: 14px;
                    color: $white;
                    display: inline-block;
                    background: #3B5999;
                    height: 40px;
                    width: 40px;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 5px;
                    margin-right: 4px;

                }

                &:nth-child(2) {
                    & a {
                        background: #55ACEE;
                    }
                }

                &:nth-child(3) {
                    & a {
                        background: #0056FF;
                    }
                }

                &:nth-child(4) {
                    & a {
                        background: #CD201F;
                    }
                }
            }
        }
    }
}

.binduz-er-footer-copyright-area {
    background: #111111;
    padding: 25px 0;
    position: relative;

    & .binduz-er-footer-logo {
        position: absolute;
        left: 0;
        bottom: 0;

        @media #{$laptop} {
            display: none;
        }

        @media #{$lg} {
            display: none;
        }

        @media #{$md} {
            display: none;
        }

        @media #{$xs} {
            display: none;
        }
    }

    & .binduz-er-copyright-text {
        @media #{$md} {
            text-align: center;
        }

        @media #{$xs} {
            text-align: center;
        }

        & p {
            color: #999;
            margin-bottom: 0;

            & span {
                font-weight: 700;
                color: $white;
            }
        }
    }

    &.binduz-er-footer-copyright-area-2 {
        background-color: transparent;
        padding: 0;

        & .binduz-er-footer-copyright-box {
            background: #004578;
            padding: 25px 40px;

            & .binduz-er-copyright-text {
                & p {
                    color: #9EB9CE;
                }
            }

            & .binduz-er-copyright-menu {
                & ul {
                    & li {
                        & a {
                            color: #9EB9CE;

                            &:hover {
                                color: $white;
                            }
                        }
                    }
                }
            }
        }
    }
    &.binduz-er-footer-copyright-area-4{
        background: #222;
    }
}



.binduz-er-copyright-menu {
    @media #{$md} {
        text-align: center;
    }

    @media #{$xs} {
        text-align: center;
    }

    & ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        @media #{$md} {
            margin-top: 10px;
        }

        @media #{$xs} {
            margin-top: 10px;
        }

        & li {
            display: inline-block;
            margin-left: 30px;

            @media #{$laptop} {
                margin-left: 26px;
            }

            @media #{$md} {
                margin: 4px 10px;
            }

            @media #{$xs} {
                margin: 4px 10px;
            }

            & a {
                color: #999;

                &:hover {
                    color: $theme-color;
                }
            }
        }
    }
}


.binduz-er-back-to-top {
    position: fixed;
    right: -72px;
    bottom: 220px;
    background: $theme-color;
    color: $white;
    cursor: pointer;
    z-index: 9;
    border-radius: 10px 10px 0 0;
    transform: rotate(-90deg);
    display: none;

    @media #{$laptop} {
        right: -88px;
    }

    @media #{$lg} {
        right: -88px;
        bottom: 100px;
    }

    @media #{$xs} {
        right: -88px;
        bottom: 100px;
    }

    & p {
        margin-bottom: 0;
        line-height: 60px;
        padding: 0 40px;

        @media #{$laptop} {
            line-height: 30px;
        }

        @media #{$lg} {
            line-height: 30px;
        }

        @media #{$xs} {
            line-height: 30px;
        }

        & i {
            padding-left: 6px;
        }
    }
}





.binduz-er-footer-2-area {
    & .binduz-er-footer-box {
        background: #004E87;
        padding-top: 60px;
        padding-bottom: 60px;
    }
}

.binduz-er-footer-box {
    position: relative;
    z-index: 10;

    &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        height: 100%;
        width: 32%;
        background: #004578;
        z-index: -1;

        @media #{$lg} {
            width: 31%;
        }

        @media #{$md} {
            width: 0;
        }

        @media #{$xs} {
            width: 0;
        }
    }

}

.binduz-er-footer-about {
    padding: 0 70px;
    color: #9EB9CE;

    @media #{$laptop} {
        padding: 0 50px;
    }

    @media #{$lg} {
        padding: 0 20px;
    }

    @media #{$xs} {
        padding: 0 10px;
    }

    @media #{$sm} {
        padding: 0 70px;
    }

    & .binduz-er-logo {
        margin-bottom: 23px;
        width: 100%;
        & img {
            width: 100%;
        }
    }

    & ul {
        margin: 0;
        padding: 18px 0 0;
        list-style-type: none;

        & li {
            display: inline-block;

            & a {
                height: 50px;
                width: 50px;
                text-align: center;
                line-height: 50px;
                color: $white;
                display: inline-block;
                background: #004E87;
                margin: 0 4px;
                font-size: 18px;

                @media #{$md} {
                    background: #004578;
                }

                @media #{$xs} {
                    background: #004578;
                }

                &:hover {
                    background: $white;
                    color: $theme-color-2;
                }
            }
        }
    }

    &.binduz-er-footer-about-4 {
        background-color: transparent;
        padding: 0;
        color: #999;
        @media #{$md} {
            text-align: center;
            padding: 0 200px;
        }
        @media #{$xs} {
            text-align: center;
            padding: 0 20px;
        }
        @media #{$sm} {
            text-align: center;
            padding: 0 100px;
        }
        & ul{
            & li{
                & a{
                    background: #1F1F1F;
                    margin-bottom: 10px;
                    &:hover{
                        background: #E74D58;
                        color: $white;
                    }
                }
            }
        }
    }
}

.binduz-er-logo {
        margin: 0 auto;
        margin-bottom: 23px;
        max-width: 100% !important;

        & a {
            width: 100%;

            & img {
            width: 100%;
            height: 100%;
            object-fit: contain !important;
        }
    }
}
.binduz-er-footer-gallery {
    @media #{$lg} {
        margin-left: 0;
    }

    @media #{$md} {
        text-align: center;
        margin-left: 0;
        margin-top: 30px;
    }

    @media #{$xs} {
        text-align: center;
        margin-left: 0;
        margin-top: 30px;
    }

    & .binduz-er-footer-title {
        & .binduz-er-title {
            font-size: 20px;
            color: $white;
            margin-bottom: 38px;
            &::before{
                display: none;
            }
        }
    }

    & .binduz-er-footer-gallery-widget {
        @media #{$md} {
            justify-content: center;
        }

        @media #{$xs} {
            justify-content: center;
        }

        & .binduz-er-item {
            margin-right: 20px;
            margin-bottom: 20px;

            @media #{$xs} {
                margin: 0 10px 20px;
            }
        }
    }
}




.binduz-er-footer-navigation {
    margin-left: -30px;

    @media #{$laptop} {
        margin-left: 0;
    }

    @media #{$lg} {
        margin-left: -20px;
    }

    @media #{$md} {
        text-align: center;
        margin-left: 0;
    }

    @media #{$xs} {
        text-align: center;
        margin-left: 0;
        margin-top: 30px;
    }

    & .binduz-er-footer-title {
        & .binduz-er-title {
            font-size: 20px;
            color: $white;
            margin-bottom: 38px;
            &::before{
                display: none;
            }
        }
    }

    & .binduz-er-footer-list {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        @media #{$md} {
            justify-content: center;
        }

        @media #{$xs} {
            justify-content: center;
            display: block;
        }

        @media #{$sm} {
            justify-content: center;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
        }

        & ul {
            margin: 0 50px 0 0;
            padding: 0;
            list-style-type: none;

            @media #{$lg} {
                margin: 0 20px 0 0;
            }

            @media #{$xs} {
                margin: 0;
            }

            &:last-child {
                margin-right: 0;
            }

            & li {
                padding-bottom: 15px;

                & a {
                    color: #AAC0D0;
                }
            }
        }
    }
    &.binduz-er-footer-navigation-4{
        & ul{
            & li{
                & a{
                    color: #999;
                    &:hover{
                        color: $theme-color;
                    }
                }
            }
        }
    }
}

.binduz-er-footer-3-area {
    background: $black;
    padding-top: 27px;
    padding-bottom: 47px;
}
.binduz-er-footer-navigation-widget {
    & .binduz-er-footer-title {
        & .binduz-er-title {
            color: $white;
            font-size: 18px;
            margin-bottom: 30px;
            &::before{
                display: none;
            }
        }
    }

    & .binduz-er-navigarion-list {
        & ul {
            margin: 0;
            padding: 0;
            list-style-type: none;

            & li {
                & a {
                    color: #999;
                    display: inline-block;
                    margin-bottom: 10px;
                    &:hover{
                        color: $theme-color;
                    }
                }
            }
        }
    }
}
.binduz-er-footer-area-4 {
    padding-top: 60px;
    padding-bottom: 60px;
    background: #111111 ;
}

</style>