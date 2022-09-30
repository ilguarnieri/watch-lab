<template>
    <div class="article-section d-flex flex-column flex-md-row">

        <!-- INFO ARTICLE -->
        <div class="article-wrapper col-12 col-md-6 d-flex justify-content-center align-items-center"
        :class="article.firstImg ? 'order-md-1' : ''">

            <div class="article-texts d-flex flex-column justify-content-evenly text-center">
                
                <div class="caption-title text-center align-self-center pt-4">
                    <!-- CAPTION -->
                    <h5 class="caption-text text-uppercase m-0"
                    :class="article.caption == '' ? 'd-none' : ''">
                        {{ article.caption }}
                    </h5>

                    <!-- TITLE -->
                    <h3 class="title-text m-0"
                    :class="article.title == '' ? 'd-none' : ''">
                        {{ article.title }}
                    </h3>
                </div>

                <!-- BODY TEXT -->
                <h6 class="body-text m-0"
                :class="article.bodyText == '' ? 'd-none' : ''">
                    {{ article.bodyText }}
                </h6>

                <!-- BUTTON -->
                <button class="btn-jumbo align-self-center">
                    <a :href="article.linkBtn">
                        View
                    </a>
                </button>                
            </div>            
        </div>

        <!-- IMAGE ARTICLE -->
        <div class="article-img-wrapper col-12 col-md-6">
            <AdaptiveImage :photo="article.img"/>
        </div>
    </div>
</template>






<script>
import AdaptiveImage from './AdaptiveImage.vue'

    export default {
        name: 'PreviewArticleWithImage',

        components: {
            AdaptiveImage
        },

        props:{
            article:{
                type: Object,
                required: true
            }
        }        
    }
</script>






<style lang="scss" scoped>
@import '~@/assets/scss/_common.scss';

.article-section{
    .article-wrapper{

        .article-texts{
            max-width: 500px;
            aspect-ratio: 1;
            padding: 20px;

            /* CAPTION - TITLE WRAPPER */
            .caption-title{
                max-width: 350px;

                /* STYLE CAPTION ARTICLE */
                .caption-text{
                    padding-bottom: 30px;
                    font-family: "MontBold";
                    font-size: 16px;
                }

                /* STYLE TEXT ARTICLE */    
                .title-text{
                    font-family: "Miller";
                    font-size: 45px;
                    padding-bottom: 30px;
                }
            }

            /* STYLE BODY TEXT ARTICLE */
            .body-text{
                @include textBody;
                padding-bottom: 30px;
            }

            /* BTN LINK ARTICLE */
            .btn-jumbo{
                margin-bottom: 30px;
                @include watchBtn;
            }
        }
    }

    /* container img */
    .article-img-wrapper{
        @include heightSquare;
    }

}

</style>