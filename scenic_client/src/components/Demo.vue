<template>
  <div class="demo">
    <span></span>
    <span>{{this.name}}</span>
  </div>
</template>
<script>
export default {
    props: ['name'],
    components: {},
    data() {
        return {};
    },
    computed: {},
    methods: {},
    created() {},
    mounted() {}
};
</script>
<style scoped lang="scss">
.demo {
    width: 100%;
    height: 1rem;
    display: flex;
    font-size: 0.3rem;
    font-weight: 700;
    align-items: center;
    span:nth-child(1) {
        width: 0.08rem;
        height: 0.4rem;
        background: #53ab3a;
        margin-left: 0.3rem;
    }
    span:nth-child(2) {
        margin-left: 0.28rem;
    }
}
</style>