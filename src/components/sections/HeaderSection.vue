<template>
<header>

    <div class="navbar d-flex justify-content-between align-items-center align-items-lg-stretch p-0">

        <!-- LOGO -->
        <div class="logo" @click="burgerActive = false">
            <router-link to="/">
                <h2 class="m-0">
                    WATCH/LAB
                </h2>
            </router-link>
        </div>

        <!-- NAVBAR FULL -->
        <div class="navbar-full d-none d-lg-flex align-items-center flex-grow-1">
            <!-- MENU -->
            <ul class="links-wrapper m-0 p-0 d-flex justify-content-evenly flex-grow-1">
                <li v-for="(link,i) in links" :key="i" class="item-menu d-flex align-items-center">
                    <router-link :to="link.linkPage">
                        {{ link.namePage }}
                    </router-link>
                </li>
            </ul>

            <!-- SEARCH -->
            <div class="search-wrapper flex-grow-1">
                <form class="d-flex justify-content-center" role="search">
                    <!-- SEARCH INPUT -->
                    <input class="form-control b-0 me-2" type="search" aria-label="Search">
                    <!-- SEARCH BUTTON -->
                    <button class="cta-search align-self-end" type="submit">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </button>                    
                </form>
            </div>
        </div>

        <!-- BURGER MENU -->
        <div class="burger-wrapper d-flex align-items-center d-lg-none"
        @click="burgerActive ? burgerActive = false : burgerActive = true">
            <div class="burger-icon-menu d-flex flex-column justify-content-between"
            :class="burgerActive ? 'open' : ''">
                <div class="line-menu half start"></div>
                <div class="line-menu"></div>
                <div class="line-menu half end"></div>
            </div>
        </div>
    </div>

    <!-- MENU BURGER MENU DEVICE -->
    <div class="burger-menu d-lg-none w-100 position-relative"
    :class="burgerActive ? 'open' : ''">
        <!-- MENU -->
        <ul class="links-wrapper m-0 p-0 w-100 position-absolute">
            <li v-for="(link,i) in links" :key="i" class="item-menu d-flex flex-grow-1"
            @click="burgerActive ? burgerActive = false : burgerActive = true">
                <router-link :to="link.linkPage" class="text-center flex-grow-1">
                    {{ link.namePage }}
                </router-link>
            </li>
        </ul>
    </div>

</header>
</template>





<script>
    export default {
        name: 'HeaderSection',

        data(){
            return{

                /* --- LINK NAVBAR --- */
                links: [
                    {
                        namePage: 'About us',
                        linkPage: '/aboutus'
                    },
                    {
                        namePage: 'Brand',
                        linkPage: '/brand'
                    },
                    {
                        namePage: 'Project',
                        linkPage: '/project'
                    },
                    {
                        namePage: 'Magazine',
                        linkPage: '/magazine'
                    },
                    {
                        namePage: 'Press',
                        linkPage: '/press'
                    },
                    {
                        namePage: 'Contacts',
                        linkPage: '/contacts'
                    }
                ],

                /* BOOL STATE BURGER - DEFAULT CLOSE*/
                burgerActive: false,
            }
        }        
    }
</script>





<style lang="scss" scoped>
@import '~@/assets/scss/_common.scss';

header{    
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    user-select: none;

    .navbar{
        @include deleteCrossInput;
        height: 75px;

        /* BACKGROUD LOGO */
        background-color: $beige;
    
        /* STYLE LOGO */
        .logo{
            @include logo;
            padding: 20px;
            padding-right: 35px;
        }
    
        /* STYLE NAVBAR FULL */
        .navbar-full{    
            background-color: $white;
            font-family: "MontBold";
            font-size: 14px;
            height: 75px;    
    
            .links-wrapper{
                height: 100%;
    
                .item-menu{
                    list-style: none;
                    height: 100%;

                    a{
                        color: currentColor;
                        transition: all 300ms ease-in-out;

                        /* HOVER E SELECT */
                        &:hover, &.router-link-active{
                            color: $beige2;
                            letter-spacing: 2px;
                        }
                    }
                }
            }
    
            /* STYLE SEARCH WRAPPER */
            .search-wrapper{
                max-width: 270px;
                padding-right: 20px;
    
                /* SEARCH INPUT */
                .form-control{
                    font-weight: normal;
                    font-family: 'Miller';
                    border-radius: 0;
                    border: 0;
                    border-bottom: 1px solid black;
                    width: 90px;
                    transition: all 250ms ease-in-out;
    
                    &:focus{
                        box-shadow: 0px 1px 0px 0px #000000;
                        width: 55%;
                    }
                }
    
                /* SEARCH BUTTON */
                .cta-search{
                    border: 0;
                    background-color: transparent;
                }
            }
        }
    
        /* STYLE BURGER MENU */
        .burger-wrapper{
            margin-right: 20px;
            padding: 8px 15px;
            border: 1px solid $white;
            border-radius: 10px;
            background-color: rgba($color: $white, $alpha: 0.2);
    
            .burger-icon-menu {
                width: 30px;
                height: 30px;
                cursor: pointer;
                transition: transform 330ms ease-out;
    
                &.open {
                    transform: rotate(-45deg);
    
                    .line-menu.start {
                        transform: rotate(-90deg) translateX(3px);
                    }
    
                    .line-menu.end {
                        transform: rotate(-90deg) translateX(-3px);
                    }
                }
    
                .line-menu {
                    background-color: $white;
                    border-radius: 5px;
                    width: 100%;
                    height: 4px;
    
                    &.half {
                        width: 50%;
                    }
    
                    &.start {
                        transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
                        transform-origin: right;
                    }
    
                    &.end {
                        align-self: flex-end;
                        transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
                        transform-origin: left;
                    }
                }
            }        
        }
    }

    /* STYLE LIST MENU BURGER */
    .burger-menu{
        font-family: "MontRegular";
        font-size: 25px;
        box-shadow: 0px 600px 0px 600px rgba($color: #000000, $alpha: 0.7);
        opacity: 0;
        transition: 300ms opacity ease-in-out;   

        .links-wrapper{
            background-color: $beige;
            display: none;
            
            .item-menu{
                list-style: none;                
                line-height: 50px;                

                a{
                    color: black;             
                    border-bottom: 2px solid $beige2;

                    &.router-link-active{
                    
                        background-color: rgba($color: $white, $alpha: 0.6);
                        color: $beige2;
                        letter-spacing: 3px;
                        font-family: "MontBold";
                    }               
                } 
            }
        }

        &.open{
            opacity: 1;            
            transition-delay: 0ms;
            
            .links-wrapper{
                display: block;
            }
        }
    }
}
</style>