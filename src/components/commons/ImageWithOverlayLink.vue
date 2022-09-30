<template>
    <div class="adaptiveimage-wrapper position-relative">
        <img :src="photo" alt="img">

        <div class="overlay-wrapper position-absolute d-flex justify-content-center align-items-center">
            <button class="gallery-btn"><a :href="link">View</a></button>
        </div>
    </div>
</template>






<script>
    export default {
        name: 'ImageWithOverlayLink',

        props:{
            photo:{
                type: String,
                required: true
            },
            link:{
                type: String,
                required: true
            }
        }
    }
</script>






<style lang="scss" scoped>
@import '../../assets/scss/_common.scss';

.adaptiveimage-wrapper{
    width: 100%;
    height: 100%;
    aspect-ratio: 1;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .overlay-wrapper {
        @include overlay;
        opacity: 0;
        transition: opacity 300ms ease-in-out;

        &:hover{
            opacity: 1;
        }

        .gallery-btn{
            @include watchBtn;
            width: 100px;
        }
    }
}
</style>