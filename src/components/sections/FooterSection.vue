<template>
    <footer class="w-container mb-4">
        <div class="footer-container">

            <!-- MAIN FOOTER -->
            <div class="footer-wrapper">
                <!-- LOGO -->
                <div class="logo mb-4">
                    <h1 class="logo text-uppercase ">Watch/Lab</h1>
                </div>

                <!-- LINK WRAPPER -->
                <div class="link-wrapper d-flex flex-wrap flex-lg-nowrap">
                    <div class="col-12 col-sm-6 order-1 order-sm-4 order-lg-1 pt-5 pt-sm-0">
                        <ul>
                            <li>Watch/Lab - Innovation brings success</li>
                            <li>Via Borgogna 5, Milan</li>
                            <li>Italy</li> 
                        </ul>                   
                    </div>
                    <div class="col-12 col-sm-6 order-sm-1 order-lg-2">
                        <ul>
                            <li><router-link to="/aboutus">About us</router-link></li>
                            <li><router-link to="/brand">Brand</router-link></li>
                            <li><router-link to="/projects">Projects</router-link></li>
                            <li><router-link to="/magazine">Magazine</router-link></li>
                        </ul>                    
                    </div>
                    <div class="col-12 col-sm-6 order-sm-3">
                        <ul>
                            <li><router-link to="/press">Press</router-link></li>
                            <li><router-link to="/Contacts">Contacts</router-link></li>
                            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                            <li><router-link to="/search">Search</router-link></li>  
                        </ul>                  
                    </div>
                    <div class="col-12 col-sm-6 order-sm-2 order-lg-4">
                        <ul>
                            <li><a href="tel:+393929133937">T. +39 392 9133937</a></li>
                            <li><a href="mailto:info@watch-lab.it">M. info@watch-lab.it</a></li>
                            <li class="text-social text-uppercase"><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>                 
                            <li class="text-social text-uppercase"><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- END FOOTER -->
            <div class="end-footer">
                <div class="end-wrapper d-flex flex-column justify-content-between flex-md-row">
                    <p class="m-0 mb-3">Copyright Watch/Lab all rights reserved</p>

                    <p class="m-0">website by nssfactory</p>
                </div>
            </div>
        </div>        
    </footer>
</template>





<script>
    export default {
        name:'FooterSection'        
    }
</script>






<style lang="scss" scoped>
@import '../../assets/scss/_common.scss';

footer{

    /* MAIN FOOTER */
    .footer-container{
        background-color: $black;
        color: $beige;
        font-family: "Miller";
        font-size: 15px;

        .footer-wrapper{
            max-width: 1025px;
            margin: 0 auto;
            padding: 120px 25px;            
            
            /* LOGO */
            .logo{
                @include logo;
                font-size: 30px;
            }       
            
            /* LINK */    
            .link-wrapper{
                line-height: 40px;                
                
                ul{
                    padding: 0;
                    margin: 0;
                }
                li{
                    list-style: none;
                    transition: 200ms color ease-in-out;
                }    
                a{
                    color: currentColor;
                }

                /* LINK SOCIAL */
                .text-social{
                    font-family: "MontBold";
                    letter-spacing: 3px;
                    font-size: 13px;
                }

                &>div:nth-of-type(n+2){
                    li:hover{
                        color: white;
                    }
                }
            }
        }

        /* END FOOTER */            
        .end-footer{
            background-color: $darkblack;

            .end-wrapper{
                max-width: 1025px;
                margin: 0 auto;
                padding: 25px;
            }
        }
    }



    @media screen and (max-width: 991px) {
        /* MAIN FOOTER */
        .footer-container{
            .footer-wrapper{
                padding: 25px;

                /* LINK */    
                .link-wrapper{
                    gap: 0;                    
                }
            }
        }        
    }

    @media screen and (min-width: 991px){
        /* MAIN FOOTER */
        .footer-container{
            .footer-wrapper{
                /* LINK */    
                .link-wrapper{
                    &>div:first-child{
                        width: 35%;
                    }

                    &>div:nth-of-type(1n+2){
                        width: 20%;
                    }                    
                }
            }        
        }
    }
}
</style>
