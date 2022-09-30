<template>
<div class="article-wrapper">

    <!-- TITLE -->
    <div class="title-wrapper col-12 col-lg-6">
        <h2 class="title-article">{{title}}</h2>
    </div>

    <!-- BODY TEXT -->
    <div class="body-wrapper d-flex flex-column flex-md-row justify-content-between">

        <!-- FIRST COLUMN TEXT -->
        <div class="first-wrapper col-12 col-md-6">
            <p class="body-article m-0">{{firstColumn}}</p>
        </div>

        <!-- SECOND COLUMN TEXT -->
        <div class="second-wrapper col-12 col-md-6">
            <p class="body-article m-0">{{secondColumn}}</p>
        </div>
    </div>
</div>
</template>






<script>
    export default {
        name: 'TextSectionTwoColumnsWhithTitle',

        props:{
            title:{
                type: String,
                required: true
            },
            firstColumn:{
                type: String,
                required: true
            },
            secondColumn:{
                type: String,
                required: true
            }
        }        
    }
</script>






<style lang="scss" scoped>
@import '~@/assets/scss/_common.scss';

.article-wrapper{
    padding: 50px 0;

    .title-wrapper{
        .title-article{
            @include titleArticle;
            margin-bottom: 60px;            
        }
    }

    .body-wrapper{
        .first-wrapper{
            max-width: 500px;
            padding-right: 30px;
        }

        .body-article{
            @include textBody;
        }

        @media screen and (max-width: 767px){
            .first-wrapper{
                max-width: none;
                padding-right: 0px;
            }
        }
    }
}
</style>