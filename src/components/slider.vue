<template id="slider-template">
    <carousel-3d>
    {{ slide }}
        <!-- <div v-for="(slide, index) in ">
            <slide :index="index">
              <h1>{{ slide.title }}</h1>
              <h2>{{ slide.desc }}</h2>
            </slide>
        </div> -->
    </carousel-3d>
</template>

<script>

//const slides = require('./slider.data.js')
export default {
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
    // v-for="(slide, index) in slides"
</style>
