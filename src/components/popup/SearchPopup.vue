<template>
    <div class="search-popup binduz-er-news-search-box open">
        <div class="binduz-er-news-search-header">
            <div class=" container mt-60">
                <div class="row">
                    <div class=" col-6">
                        <img src="../../assets/images/logo-4.png" alt="logo">
                    </div>
                    <div class=" col-6">
                        <div class="binduz-er-news-search-close float-end" @click="$emit('closeSearchPopup')">
                            <button class="binduz-er-news-search-close-btn d-flex align-items-center">Close
                                <span></span><span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        <div class="binduz-er-news-search-body">
            <div class="container">
                <div class="row">
                    <div class=" col-lg-12">
                        <div class="binduz-er-news-search-form">
                            <form action="#">
                                <input type="search" placeholder="Search for Item" v-model="searchValue" @input="onUserChange">
                                <button @click.prevent="search">
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'SearchPopup',
        data(){
            return{
                searchValue:'',
            }
        },
        methods: {
            search(){
                this.$emit('goSearch', this.searchValue);
                this.$emit('closeSearchPopup');
                this.searchValue = '';
            }
        },
    }
</script>

<style lang="scss">

.binduz-er-news-search-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 9999999;
    @include transform(translateY(-100%));
    @include transition(0.6s);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.04);

    .binduz-er-news-search-header {
        padding-top: 10vh;
        .binduz-er-news-search-close {
            button {
                background: none;
                border: 0;
                font-size: 24px;
                font-weight: 500;
                color: $white;
                padding-right: 35px;
                position: relative;

                span {
                    width: 21px;
                    height: 2px;
                    background-color: $white;
                    display: block;
                    position: absolute;
                    right: 0;

                    &:nth-child(1) {
                        top: 20px;
                        @include transform(rotate(45deg));
                    }

                    &:nth-child(2) {
                        @include transform(rotate(135deg));
                        top: 20px;
                    }
                }
            }
        }
    }

    .binduz-er-news-search-body {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        @include transform(translateY(-50%));

        .binduz-er-news-search-form {
            position: relative;

            input {
                width: 100%;
                border: 0;
                height: 80px;
                padding-left: 30px;
                border: 2px solid #fff;
                border-radius: 50px;
                font-size: 20px;
                color: #707070;

                &::placeholder {
                    color: #707070;
                    opacity: 1;
                }
            }

            button {
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                height: 60px;
                font-size: 36px;
                color: #707070;
                background: none;
                border: 0;
            }
        }
    }

    .binduz-er-news-search-footer {
        padding-bottom: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;

        .binduz-er-news-search-footer-content {
            h4 {
                color: #707070;
                font-size: 24px;
            }

            p {
                color: $black;
                font-size: 16px;
            }
        }
    }
}

.binduz-er-news-search-box.open {
    @include transform(translateY(0));
}

</style>