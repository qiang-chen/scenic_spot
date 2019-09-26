<template>
  <div class="eval">
    <div class="evals" v-for="(item,index) in list" :key="index">
      <div class="portrait"></div>
      <div class="evalCont">
        <p>{{item.username}}</p>
        <div class="star">
          <Rate v-model="item.star" readonly allow-half :size="16" />
          <span>{{item.time}}</span>
        </div>
        <div class="neirong">{{item.cont}}</div>
        <div class="picture">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="allEval" @click="handelClick">
      <p>查看更多</p>
      <Icon name="arrow" />
    </div>
  </div>
</template>

<script>
import { Rate, Icon } from "vant";
import { getEvalImg, loadEvalImg } from "@/api/index";
export default {
  components: { Rate, Icon },
  data() {
    return {
      value: 4.5,
      list: [],
      pageSize: 1,
      pageCount: 2
    };
  },
  methods: {
    handelClick() {
      console.log("我在那");
      this.pageSize += 1;
      const start = (this.pageSize - 1) * this.pageCount;
      loadEvalImg(start, this.pageCount).then(res => {
        console.log(res, "ressssss");
        this.list = [...this.list, ...res.result];
      });
    }
  },
  created() {
    getEvalImg().then(res => {
      this.list = res.result;
    });
  }
};
</script>

<style lang="scss">
.evals {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 20px;
  border-bottom: 1px solid rgb(231, 231, 231);
  .portrait {
    width: 1rem;
    height: 1rem;
    background-color: lightsalmon;
    border-radius: 50%;
  }
  .evalCont {
    flex: 1;
    box-sizing: border-box;
    padding: 5px 3px;
    .star {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      margin-top: 5px;
      span {
        color: rgb(151, 151, 151);
      }
    }
    .neirong {
      height: 1.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .picture {
      width: 100%;
      height: 1.7rem;
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      div {
        width: 30%;
        background-color: lightcoral;
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