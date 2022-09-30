<template>
    <div class="adaptiveimage-wrapper">
        <img :src="photo" alt="img">
    </div>
</template>






<script>
    export default {
        name: 'AdaptiveImage',

        props:{
            photo:{
                type: String,
                required: true
            }
        }
    }
</script>






<style lang="scss" scoped>
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
}
</style>