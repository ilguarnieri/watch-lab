<template>
    <div class="w-container page-wrapper d-flex flex-column justify-content-center align-items-center">

        <div class="error-container d-flex flex-column align-items-center position-relative">
            <h4 class="caption text-uppercase text-center">Oops! Page not Found</h4>
            <img class="pt-3" src="../assets/img/logo.png" alt="img">
            <p class="subtitle col-9 text-center">We are sorry, but the page you requested was not found!</p>
        </div>
    
    </div>
</template>





<script>
    export default {
        
    }
</script>





<style lang="scss" scoped>
@import '../assets/scss/_common.scss';

.page-wrapper{
    height: calc(100vh - 75px);

    .error-container{
        font-family: 'MontBold';
        letter-spacing: 2px;
        padding: 100px 20px;
        background-color: $lightgray;

        .caption{
            font-size: max(16px, 1.4vw);
        }

        .subtitle{
            font-size: max(13px, 1vw);
        }
        
        img{
            width: 250px;
        }

        .subtitle{
            color: $beige2;
        }
    }
}
</style>