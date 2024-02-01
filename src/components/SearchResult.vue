<template>
    <section class="search-result binduz-er-news-categories-area"
        v-if="showResultInfo" 
    >
        <div class="container">
            <div class="row">
                <div class=" col-lg-12">
                    <div class=" content" id="pills-tabContent">
                        <div class="binduz-er-news-categories-box ">
                            <h1 class="text-center m-4 fgv">Results of search: </h1>
                            <p class="text-center" 
                                v-show="sortingResult.length = 0"
                            >
                                Nothing found for your request
                            </p>
                            <div class="row">
                                <div class="col-lg-4" 
                                    v-for="content in sortingResult" :key="content"
                                >
                                    <div class="binduz-er-news-categories-item">
                                        <div class="binduz-er-thumb">
                                            <img :src="content.urlToImage" alt="">
                                        </div>
                                        <div class="binduz-er-content">
                                            <div class="binduz-er-meta-date">
                                                <span>
                                                    <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    {{content.publishedAt.slice(0, 10)}}
                                                </span>
                                            </div>
                                            <div class="binduz-er-news-categories-title">
                                                <h4 class="binduz-er-title">
                                                    <a :href="content.url">
                                                        {{content.title.slice(0, 53)}}
                                                    </a>
                                                </h4>
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

</template>

<script setup>
    import { ref, onMounted, computed, defineProps } from 'vue';
    const props = defineProps({
        showResultInfo: { type: String },
    })
    const news = ref([]);
    const sortingResult = computed(() => {
        return news.value.find(elem => { elem.description.includes(props.showResultInfo); })
    });
    onMounted(() => {
        axios
            .get('https://newsapi.org/v2/everything?q=everything&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
            .then(response => (news.value = response.data.articles));
    })
</script>

<style lang="scss">
    .fgv {
        color: rgba(0, 0, 0, 0.537);
    }
</style>