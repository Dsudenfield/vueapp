<template>
  <div id="app">
    <div v-for="slide in slides">
      <div v-for="(val, index) in slide">
        <slider>
          
        </slider>
      </div>
    </div>
  </div>
</template>

<script>

import slider from './components/slider.vue';
export default {
  name: 'app',
  data () {
    return {
      slides: [
        {
          article1: [
            { title: 'dsfdsf', desc: 'gfhfgtfbhfgbv' },
            { title: 'fgfg', desc: 'gfhfghfhgbv' },
            { title: 'ds45454fdsf', desc: 'gfgfhfghfgbv' },
            { title: 'dsfrt5dsf', desc: 'gfhfgvhfgbv' }
          ],
          article2: [
            { title: 'dsfdsf', desc: 'gfhfgtfbhfgbv' },
            { title: 'fgfg', desc: 'gfhfghfhgbv' },
            { title: 'ds45454fdsf', desc: 'gfgfhfghfgbv' },
            { title: 'dsfrt5dsf', desc: 'gfhfgvhfgbv' }
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
