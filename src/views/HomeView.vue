<template>
    <div class="home-wrapper">
        <!-- JUMBO CAROUSEL -->
        <JumboFull :setImagesJumbo="setImagesJumbo"/>

        <div class="w-container">
            <!-- SECTION 1 -->
            <TextSectionTwoColumnsWhithTitle class="mb-5"
            title='History and Patriarcal season'
            firstColumn='On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.'
            secondColumn='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No that are extremely painful.' />

            <!-- SECTION 2-3 -->
            <PreviewArticleWithImage v-for="(article, i) in previewArticlesPhotos" :key="i" :article='article'/>

            <!-- SECTION 4 + CAROUSEL -->
            <DescriptionWithCarousel :galleryWithText="galleryWithText" />

            <!-- SECTION 5 - GALLERY -->
            <div class="gallery-wrapper d-flex flex-column flex-md-row mb-5">

                <!-- IMG 1 -->
                <div class="image-principal col-12 col-md-6 position-relative">
                    <AdaptiveImage class="col-6" :photo="require('../assets/img/gallery_1.jpg')" />

                    <!-- OVERLAY -->
                    <div class="gallery-name d-flex flex-column justify-content-center text-center align-items-center">
                        <!-- SOCIAL -->
                        <h6 class="text-social text-uppercase mb-5">Instagram</h6>
                        <!-- TITLE -->
                        <h3 class="gallery-title col-9 col-sm-6 col-md-7">Discover Watch Lab</h3>
                    </div>
                </div>

                <!-- OTHER IMG -->
                <div class="col-12 col-md-6  d-flex flex-wrap">
                    <!-- IMG 2 -->
                    <div class="col-6">
                        <ImageWithOverlayLink class="col-6" :photo="require('../assets/img/gallery_2.jpg')"
                        :link="('#g1')" />
                    </div>
                    <!-- IMG 3 -->
                    <div class="col-6">
                        <ImageWithOverlayLink class="col-6" :photo="require('../assets/img/gallery_3.jpg')"
                        :link="('#g2')" />
                    </div>
                    <!-- IMG 4 -->
                    <div class="col-6">
                        <ImageWithOverlayLink class="col-6" :photo="require('../assets/img/gallery_4.jpg')"
                        :link="('#g3')" />
                    </div>
                    <!-- IMG 5 -->
                    <div class="col-6">
                        <ImageWithOverlayLink class="col-6" :photo="require('../assets/img/gallery_5.jpg')"
                        :link="('#g4')" />
                    </div>
                </div>
            </div>

            <!-- SEND EMAIL -->
            <SendEmail />

        </div>
    </div>
</template>





<script>
import JumboFull from '../components/commons/JumboFull.vue'
import PreviewArticleWithImage from '../components/commons/PreviewArticleWithImage.vue'
import TextSectionTwoColumnsWhithTitle from '../components/commons/TextSectionTwoColumnsWhithTitle.vue'
import DescriptionWithCarousel from '../components/commons/DescriptionWithCarousel.vue'
import AdaptiveImage from '../components/commons/AdaptiveImage'
import ImageWithOverlayLink from '../components/commons/ImageWithOverlayLink.vue'
import SendEmail from '../components/commons/SendEmail.vue'

    export default {
        name: 'HomeView',

        components: {
            JumboFull,
            TextSectionTwoColumnsWhithTitle,
            PreviewArticleWithImage,
            DescriptionWithCarousel,
            AdaptiveImage,
            ImageWithOverlayLink,
            SendEmail
        },

        data(){
            return{
                setImagesJumbo:[
                    {
                        title: 'New Selection Of Henry London',
                        caption: 'London Collection Season',
                        subtitle: 'An estimable experience in the modern collection house',
                        button: 'Discover',
                        linkBtn: '#1',
                        imgBackground: require('../assets/img/jumbo_lab.jpg'),
                        secondImg: require('../assets/img/jumbo_watch1.jpg'),
                        secondImgDescripption: 'The Path to Success with Watchlab',
                    },
                    {
                        title: 'New Collection Henry London',
                        caption: 'London Collection Season',
                        subtitle: '',
                        button: 'View',
                        linkBtn: '#2',
                        imgBackground: require('../assets/img/new_collection.jpg'),
                        secondImg: '',
                        secondImgDescripption: '',
                    },
                    {
                        title: 'Watch Lab Studio',
                        caption: '',
                        subtitle: 'On the other hand of pleasure of the moment',
                        button: 'Watch',
                        linkBtn: '#3',
                        imgBackground: require('../assets/img/watch_lab_jumbo.jpg'),
                        secondImg: require('../assets/img/lab_second.jpg'),
                        secondImgDescripption: 'Most Important Days',
                    }
                ],

                previewArticlesPhotos:[
                    {
                        caption: 'London Collection Season',
                        title: 'Temporary Store',
                        bodyText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.',
                        linkBtn: '#4',
                        img: require('../assets/img/sect_2.jpg'),
                        firstImg: false
                    },
                    {
                        caption: 'London Collection Season',
                        title: 'New Collection Henry London',
                        bodyText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.',
                        linkBtn: '#5',
                        img: require('../assets/img/sect_3.jpg'),
                        firstImg: true
                    }
                ],

                galleryWithText:{
                    title: 'Press from Watch Lab Studio',
                    description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain trouble.',
                    date: '18 Settembre 2015',
                    caption: 'Most Important Days on Watchlab',
                    photo:[
                        require('../assets/img/watchlab_c4.jpg'),
                        require('../assets/img/watchlab_c1.jpg'),
                        require('../assets/img/watchlab_c3.jpg'),
                        require('../assets/img/watchlab_c2.jpg')
                    ]
                }
            }
        }
    }
</script>





<style lang="scss" scoped>
@import '../assets/scss/_common.scss';

.home-wrapper{

    /* GALLERY */
    .gallery-wrapper{

        /* IMG NAME GALLERY */
        .image-principal{
            .gallery-name{
                @include overlay;
                color: $white;
                top: 0;

                .text-social{
                    letter-spacing: 2px;
                    font-family: "MontBold";
                }

                .gallery-title{
                    font-family: "Miller";
                    font-size: 60px;
                }
            }
        }
    }
}
</style>