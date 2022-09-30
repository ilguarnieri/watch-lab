<template>
    <div class="dc-section d-flex flex-column flex-lg-row">

        <!-- TITLE + DESCRIPTION -->
        <div class="td-wrapper col-12 col-lg-6">

            <h1 class="title">{{galleryWithText.title}}</h1>

            <!-- DESCRIPTION -->
            <div class="description-wrapper col-12 col-lg-6">
                <p class="description-text">{{galleryWithText.description}}</p>
            </div>
        </div>


        <!-- INFO + CAROUSEL -->
        <div class="ic-wrapper col-12 col-lg-6 d-flex flex-column flex-md-row justify-content-end position-relative">

            <!-- CAROUSEL -->
            <div class="carousel-section col-12 col-md-6 col-lg-11 position-relative"
            @mouseenter="stopPlay()" @mouseleave="startPlay()">

                <div class="all-slides position-absolute"
                v-for="(img, i) in galleryWithText.photo" :key="i"
                :class="currentIndex === i ? 'active' : '' ">

                    <img :src="img" alt="img">

                </div>
            </div>
            
            <!-- INFO -->
            <div class="info-wrapper col-12 col-md-6 pt-5 pt-md-0">
                <h6 class="text-type text-uppercase">Press</h6>
                <h6 class="text-date text-uppercase mb-2 mb-md-5">{{galleryWithText.date}}</h6>

                <h4 class="text-caption mb-0 mb-md-5">{{galleryWithText.caption}}</h4>

                <!-- ARROW -->
                <div class="arrow-wrapper d-none d-md-block"
                @mouseenter="stopPlay()" @mouseleave="startPlay()">
                    <font-awesome-icon class="me-4" icon="fas fa-chevron-left" @click="clickPre" />
                    <font-awesome-icon icon="fas fa-chevron-right" @click="clickNext" />
                </div>
            </div>
        </div>
    </div>
</template>





<script>
    export default {
        name: 'PreviewArticleWithImage',

        props:{
            galleryWithText:{
                type: Object,
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
                if(this.currentIndex > this.galleryWithText.photo.length -1){this.currentIndex = 0}
            },

            /* FUNCTION CLICK PRE IMG */
            clickPre: function(){
                this.currentIndex--;
                if(this.currentIndex < 0){this.currentIndex = this.galleryWithText.photo.length - 1}
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

.dc-section{
    padding: 100px 0;

    /* STYLE TITLE + DESCRIPTION */
    .td-wrapper{
        .title{
            @include titleArticle;
        }

        .description-wrapper{
            .description-text{
                @include textBody;
                padding-top: 50px;
            }
        }
    }

    /* STYLE INFO + CAROUSEL */
    .ic-wrapper{
        background-color: $lightgray;
        padding: 160px 20px 35px 20px;
        letter-spacing: 2px;

        /* STYLE INFO */
        .info-wrapper{
            font-family: "MontBold";
            padding-left: 40px;
            
            /* DATA */
            .text-date{
                color: $beige;
                font-size: 14px;              
            }

            .text-type{
                font-size: 14px;
            }

            /* CAPTION */
            .text-caption{
                font-family: "Miller";
                font-size: 25px;
                line-height: 40px;
                font-weight: bold;
            }
            
            /* ARROW */
            .arrow-wrapper > *{
                cursor: pointer;
                transition: transform 300ms ease-in-out;

                &:hover{
                    transform: scale(1.3);
                }
            }
        }
        
        /* STYLE CAROUSEL */
        .carousel-section{            
            background-color: red;
            aspect-ratio: 6/5;


            /* SET CONTAINER WITH ALL SLIDES */
            .all-slides{
                bottom: 0;
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

                /* IMAGE IN CAROUSEL */
                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center;        
                }
            }
        }
    }


    @media screen and (max-width: 991px){
        .ic-wrapper{                
            padding-top: 35px;      

            /* STYLE CAROUSEL */
            .carousel-section{                    
                background-color: blue;                    
                right: 0;                    
            }
        }            
    }

    @media screen and (max-width: 767px){
        .ic-wrapper{                
                
            /* STYLE INFO */
            .info-wrapper{
                padding-left: 0;
            }
        }            
    }   
}

</style>