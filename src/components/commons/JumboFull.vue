<template>
<section class="jumbo position-relative">

    <div class="all-slides position-absolute"
        v-for="(object, i) in setImagesJumbo" :key="i"
        :class="currentIndex === i ? 'active' : '' ">


        <div class="slide-wrapper position-relative">

            <!-- IMAGE -->
            <img :src="object.imgBackground" alt="background_image">

            <!-- OVERLAY + FIRST TITLE + BTN -->
            <div class="first-overlay position-absolute d-flex flex-column align-items-center justify-content-center h-100 w-100">

                <!-- TEXT WRAPPER -->
                <div class="text-wrapper text-center"
                @mouseenter="stopPlay()" @mouseleave="startPlay()">

                    <!-- CAPTION -->
                    <h5 class="caption-text text-uppercase m-0"
                    :class="object.caption == '' ? 'd-none' : ''">
                        {{ object.caption }}
                    </h5>

                    <!-- TITLE -->
                    <h2 class="title-text m-0"
                    :class="object.title == '' ? 'd-none' : ''">
                        {{ object.title }}
                    </h2>

                    <!-- SUBTITLE -->
                    <h6 class="subtitle-text m-0"
                    :class="object.subtitle == '' ? 'd-none' : ''">
                        {{ object.subtitle }}
                    </h6>

                    <!-- BUTTON -->
                    <button class="btn-jumbo position-relative">
                        <a :href="object.linkBtn">
                            {{ object.button }}
                        </a>
                    </button>
                </div>
            </div>

            <!-- SECOND WRAPPERR -->
            <div class="second-wrapper-jumbo position-absolute"
            :class="object.secondImg == '' ? 'd-none' : ''">

                <div class="img-container position-relative">

                    <!-- SECOND IMAGE -->
                    <img :src="object.secondImg" alt="second_image">

                    <!-- SECOND OVERLAY -->
                    <div class="second-overlay">
                        <div class="second-text-container">
                            <h6>{{ object.secondImgDescripption }}</h6>
                        </div>
                    </div>
                </div>
            </div> 

            <!-- NEXT -->
            <div class="btn-next d-none d-sm-flex position-absolute align-items-center gap-2"
            @click="clickNext" @mouseenter="stopPlay()" @mouseleave="startPlay()">
                <h6 class="text-arrow-next text-uppercase m-0">Next</h6>
                <font-awesome-icon icon="fas fa-chevron-right" />
            </div>
            
        </div>
    </div>
</section>
</template>






<script>
    export default {
        name: 'JumboFull',

        props:{
            setImagesJumbo:{
                type: Array,
                required: true
            }
        },

        data(){
            return{
                currentIndex: 0,
                clock: undefined
            }
        },

        methods:{
            /* FUNCTION CLICK NEXT IMG */
            clickNext: function(){
                this.currentIndex++;
                if(this.currentIndex > this.setImagesJumbo.length -1){this.currentIndex = 0}
            },

            /* FUNCTION STOP CAROUSEL */
            stopPlay: function(){
                clearInterval(this.clock)
            },

            /* FUNCTION START CAROUSEL */
            startPlay: function(){
                this.clock = setInterval(this.clickNext, 4000)
            }
        },

        /* START CAROUSEL AT OPEN PAGE */
        mounted(){
            this.startPlay()
        }        
    }
</script>






<style lang="scss" scoped>
@import '~@/assets/scss/_common.scss';

.jumbo{
    height: calc(100vh - 75px);
    min-height: 380px;
    
    /* SET CONTAINER WITH ALL SLIDES */
    .all-slides{
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: 300ms opacity ease-in-out;
        transition-delay: 300ms;

        /* SLIDE ACTIVE */
        &.active{
            opacity: 1;            
            transition-delay: 0ms;
            z-index: 2;
        }        

        /* SINGLE SLIDE CONTAINER */
        .slide-wrapper{
            height: 100%;
            width: 100%;        
            color: $white;
            user-select: none;
            overflow: hidden; 

            /* BG IMAGE */
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;        
            }

            /* OVERLAY */
            .first-overlay{
                @include overlay;
                padding: 20px;

                /* TEXT */
                .text-wrapper{
                    max-width: 530px;

                    .caption-text {
                        padding-bottom: 40px;
                        font-family: "MontRegular";
                        font-size: 16px;
                    }

                    .title-text{
                        @include titleArticle;
                    }

                    .subtitle-text{
                        font-family: "MontRegular";
                        font-size: 13px;
                        padding-top: 20px;                
                    }

                    /* SET BTN ON OVERLAY */
                    .btn-jumbo{
                        @include watchBtn;
                        margin-top: 50px;
                    }
                }
            }

            /* SECOND SMALL-CONTAINER */
            .second-wrapper-jumbo{
                bottom: 0;
                right: 55px;        

                .img-container{
                    width: 350px;
                    height: 250px;

                    /* SECOND IMG */
                    img{
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        object-position: center;
                    }

                    /* OVERLAY */
                    .second-overlay{
                        @include overlay;
                        padding: 30px 20px;

                        .second-text-container{
                            font-family: "Merry";
                            max-width: 160px;

                            & > *{
                                line-height: 25px;
                                font-size: 16px;
                            }
                        }
                    }
                }        
            }

            /* HIDE SECOND CONTAINER */
            @media screen and (max-width: 1355px){
                .second-wrapper-jumbo{
                    display: none;
                }
            }

            /* STYLE BTN NEXT */
            .btn-next{
                bottom: 40px;
                right: 90px;
                font-size: 13px;
                cursor: pointer;
                opacity: 0.5;
                transition: all 300ms linear;
                z-index: 3;

                .text-arrow-next {
                    font-family: "MontBold";
                    font-size: 13px;
                }

                &:hover{
                    letter-spacing: 3px;
                    opacity: 1;
                }
            }

            /* HIDE BTN NEXT */
            @media screen and (max-width: 992px){
                .btn-next{
                    right: 30px;
                }
            }
        }
    }
}

</style>