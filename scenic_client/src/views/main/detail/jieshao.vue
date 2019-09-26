<template>
  <div class="jieshao">
    <Header title="景点介绍"></Header>
    <div class="box">
      <Demo :name="name1" />
      <div class="shijian">
        <p>{{obj.wang}}</p>
        <p>{{obj.dan}}</p>
      </div>
      <Demo :name="name2" />
      <p class="det">{{obj.desc}}</p>
      <Demo :name="name3" />
      <p class="jt">{{obj.jtmsg}}</p>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Head.vue";
import Demo from "@/components/Demo.vue";
import { jisShao } from "@/api/index";
export default {
  props: {},
  components: { Header, Demo },
  data() {
    return {
      obj: {},
      name1: "开放时间",
      name2: "景点详情",
      name3: "交通信息"
    };
  },
  computed: {},
  methods: {},
  created() {
    let { id } = this.$route.query;
    jisShao(id).then(res => {
      console.log(res.result);
      this.obj = res.result[0];
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.jieshao {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.box {
  flex: 1;
  overflow: auto;
  .shijian {
    font-size: 0.3rem;
    margin-left: 0.65rem;
    p {
      line-height: 0.5rem;
    }
  }
  .det {
    font-size: 0.28rem;
    padding: 0 0.65rem;
    line-height: 0.45rem;
  }
  .jt {
    font-size: 0.28rem;
    padding: 0 0.65rem;
    line-height: 0.45rem;
  }
}
</style>