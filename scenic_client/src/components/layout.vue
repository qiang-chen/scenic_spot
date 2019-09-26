<template>
  <div class="wraper">
    <!-- <div class="wrap"></div> -->
    <Header :title="title" :isShow="isShow"></Header>
    <div class="wrapper">
      <slot> </slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Head.vue";
export default {
  name: "Layout",
  props: {
    title: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Header
  }
};
</script>

<style>



</style>