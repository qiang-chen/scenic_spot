<template>
  <div class="detail">
    <Header title="全部点评"></Header>
    <div class="remark">
      <div class="tagscloud-ul">
        <div class="statistics">有{{evalLength}}人评价过</div>
        <Tabs v-model="active" class="uls">
          <Tab class="lis" title="全部">
            <Eval></Eval>
          </Tab>
          <Tab class="lis" title="有图">
            <EvalImg></EvalImg>
          </Tab>
          <Tab class="lis" title="好评">
            <GoodEval></GoodEval>
          </Tab>
          <Tab class="lis" title="差评">
            <BadEval></BadEval>
          </Tab>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Head.vue";
import Eval from "@/components/Eval.vue";
import EvalImg from "@/components/EvalImg.vue";
import GoodEval from "@/components/GoodEval.vue";
import BadEval from "@/components/BadEval.vue";
import { Tab, Tabs, Icon } from "vant";
import { getEvalList, getEvalImg, getGoodEval, getBadEval } from "@/api/index";

export default {
  components: { Header, Eval, EvalImg, GoodEval, BadEval, Tab, Tabs, Icon },
  data() {
    return {
      active: "",
      evalLength: 0,
      allEval: [],
      evalList: [], //所有的评价
      evalImg: [], //有图评价
      goodEval: [], //好评
      badEval: [] //差评
    };
  },
  created() {
    //获取所有列表数据
    getEvalList().then(res => {
      this.evalLength = res.allEval.length;
    });
  }
};
</script>
<style lang="scss">
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.remark {
  flex: 1;
  overflow: auto;
  margin-top: 10px;
  font-size: 16px;
  background-color: #fff;
  .remark_title {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid rgb(238, 238, 238);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 8px;
    span {
      width: 0.8rem;
      text-align: right;
      border-left: 5px solid rgb(0, 252, 42);
    }
  }
  .tagscloud-ul {
    width: 100%;
    height: 2rem;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .statistics {
      width: 100%;
      background-color: rgb(218, 218, 218);
      border-radius: 5px;
      line-height: 0.6rem;
      box-sizing: border-box;
      padding: 0 10px;
    }
    .uls {
      width: 100%;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;

      .lis {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.allEval {
  width: 100%;
  height: 1rem;
  position: absolute;
  bottom: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(155, 155, 155);
  font-size: 14px;
  p {
    margin-right: 5px;
  }
}
</style>