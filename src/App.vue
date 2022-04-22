<template>
  <h1 :style="{ color: activeColor, fontSize: fontSize + 'px' }" @click="increase">{{ count }}</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      activeColor: 'red',
      fontSize: 30,
    }
  },
  methods: {
    increase() {
      this.count += 1
    },
  },
}
</script>
