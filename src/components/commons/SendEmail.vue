<template>
    <div class="send-wrapper position-relative">
        <div class="email-overlay position-absolute h-100 w-100 d-flex justify-content-center">

            <div class="overlay-content text-center h-100 d-flex flex-column justify-content-evenly">

                <h2 class="title-wrapper">Get in Touch</h2>
                <p class="subtitle-wrapper text-uppercase">Discover more about news, exclusive events and discount</p>

                <!-- FORM INPUT -->
                <form>
                    <div class="form-send d-flex gap-3">
                        <input type="email" class="input-email flex-grow-1" id="inputEmail" aria-describedby="emailHelp" placeholder="type your email" v-model="inputSearch">
                        <button type="submit" class="btn-send" :class="inputSearch == '' ? 'inactive' : ''" :disabled="!inputSearch">ok</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>





<script>
    export default {
        name: 'SendEmail',

        data(){
            return{
                inputSearch: '',
            }
        }
    }
</script>





<style lang="scss" scoped>
@import '~@/assets/scss/_common.scss';

.send-wrapper{
    min-height: 280px;
    background-image: url('~@/assets/img/sendemail.jpg');
    background-position: bottom;
    background-size: cover;
    overflow: hidden;

    .email-overlay{
        top: 0;
        background-color: rgba($color:  $beige, $alpha: 0.8);
        padding: 20px;

        /* OVERLAY */
        .overlay-content{
            color: $white;
            max-width: 400px;

            /* TITLE */
            .title-wrapper{
                font-family: "Miller";
                font-size: calc(40px + 3vmin);
            }

            /* SUBTITLE */
            .subtitle-wrapper{
                font-family: "MontRegular";
                font-weight: bold;
                font-size: 14px;
                letter-spacing: 3px;
                line-height: 20px;                
            }

            /* FORM */
            .form-send{
                .input-email{ 
                    padding: 10px;
                    @include w-btn;

                    &:focus-visible {
                        outline: white auto 2px;
                    }
                    &::placeholder{
                        color: $white;
                    }                   
                }

                .btn-send{
                    @include w-btn;
                    color: white;
                    padding: 0 15px;
                    transition: background-color 300ms ease-in-out;

                    &:hover{
                        background-color: white;
                        color: $beige;
                    }
                    
                    &.inactive{
                        background-color: rgba($color: #000000, $alpha: 0.1);
                        opacity: 0.4;
                        color: white;
                    }
                }
            }
        }
    }
}


</style>