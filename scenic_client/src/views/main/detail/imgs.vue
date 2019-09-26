<template>
    <div class="imgs">
        <Header title="景点图集"></Header>
        <div class="box">
            <img
                v-for="(item) in list"
                :key="item.id"
                :src="baseUrl()+'/public/img/'+item.picurl+'.jpg'"
                @click="look(item)"
                alt=""
            >
        </div>
    </div>
</template>
<script>
import Header from '@/components/Head.vue';
import { getImgs } from '@/api/index';
import { ImagePreview } from 'vant';
export default {
    props: {},
    components: { Header, ImagePreview },
    data() {
        return {
            list: []
        };
    },
    computed: {},
    methods: {
        look(item) {
            ImagePreview([
                this.baseUrl() + '/public/img/' + this.list[0].picurl + '.jpg',
                this.baseUrl() + '/public/img/' + this.list[1].picurl + '.jpg',
                this.baseUrl() + '/public/img/' + this.list[2].picurl + '.jpg',
                this.baseUrl() + '/public/img/' + this.list[3].picurl + '.jpg'
            ]);
        }
    },
    created() {
        let { id } = this.$route.query;
        getImgs(id).then(res => {
            console.log(res.result);
            this.list = res.result;
        });
    },
    mounted() {}
};
</script>
<style scoped lang="scss">
.imgs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .box {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        img {
            margin-top: 0.3rem;
            width: 45%;
            height: 2rem;
        }
    }
}
</style>