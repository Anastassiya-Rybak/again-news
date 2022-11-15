<template>
    <div class="footerAdd">
        <div class="binduz-er-footer-add pb-60">
            <div class=" container">
                <div class="row">
                    <div class=" col-lg-12">
                        <div class="binduz-er-footer-add-item text-center">
                            <span class="mb-10 d-inline-block">ADVERTISEMENT</span>
                            <img src="https://sixads.net/blog/advertisement-examples/?gen=twitterjpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterAdd',
}
</script>

<style lang="scss">
    @import "@/assets/styles/styles.scss";

    .binduz-er-footer-add {
        padding-bottom: 60px;
        & .binduz-er-footer-add-item{
            max-height: 210px;
            max-width: 100%;
            & span {
                margin: 20px;
                opacity: 0.8;
            }
            & img {
                height: 160px;
                width: 100%;
                object-fit: cover;
                margin-bottom: 20px;
            }
        }
    }
</style>