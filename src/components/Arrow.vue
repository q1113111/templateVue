<template>
    <div class="arrow">
        <a href="#" v-scroll-to="'#app'" class="arrow-link"><i class="fas fa-arrow-circle-up"></i></a>
    </div>
</template>

<style lang="scss">
.arrow{
    position: fixed;
    bottom: $spacer;
    right: $spacer;
    z-index: 1;
    &-link{
        font-size: 3rem;
        position: relative;
        line-height: 0;
        &::before{
            content: '';
            width: 40px;
            height: 40px;
            bottom: 10px;
            left: 3px;
            z-index: -1;
            position: absolute;
            border-radius:50% ;
            background-color: $white;
        }
    }
}
</style>
