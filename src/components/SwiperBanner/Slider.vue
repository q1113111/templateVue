<template>
  <div
    class="slider__inner"
    :style="`background-image:url(${banner.src})`"
    data-swiper-parallax-opacity="0.5"
  >
    <div class="bg"></div>
    <div :class="dataClass">
      <h2 class="slider__title">{{ banner.title }}</h2>
      <h3 class="slider__date">{{ banner.date }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: Object,
    dataClass: String
  }
}
</script>

<style lang="scss" scoped>
.slider {
  &__inner {
    @include absoluteBg();
    background: no-repeat center center / cover;
  }
  &__text {
    position: absolute;
    opacity: 0;
    transition: opacity 1s;
    left: 50%;
    top: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    text-align: center;
    letter-spacing: 3rem;
    line-height: 15rem;
    &--show {
      opacity: 1;
    }
  }
  &__title {
    color: $white;
  }
  &__date {
    color: $primary;
    font-size: 4rem;
  }
}
</style>
