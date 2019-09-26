<template>
    <Layout title="支付">
        <div class="information">
            <p>正背包西部营私城成人门票</p>
            <p>支付倒计时 59:30</p>
            <p style="margin-top:14px;margin-bottom:14px">支付金额</p>
            <p style="font-size:20px">￥200</p>
            <div>
                <van-radio-group v-model="radio" style="margin-top:20px">
                    <van-cell-group>
                        <van-cell title="支付方式" clickable @click="radio = '1'"></van-cell>
                        <van-cell title="单选框 1" clickable @click="radio = '1'">
                            <van-radio slot="right-icon" name="1"/>
                        </van-cell>
                        <van-cell title="单选框 2" clickable @click="radio = '2'">
                            <van-radio slot="right-icon" name="2"/>
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </div>
            <div style="text-align:center;margin-top:30px;">
                <van-button
                    color="linear-gradient(to right, #4bb0ff, #6149f6)"
                    @click="tijiao"
                >渐变色按钮</van-button>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '@/components/layout';
import { RadioGroup, Radio, Cell, CellGroup, Button } from 'vant';
export default {
    name: 'payment2',
    data() {
        return {
            radio: '1'
        };
    },
    components: {
        Layout,
        VanRadioGroup: RadioGroup,
        VanRadio: Radio,
        VanCellGroup: CellGroup,
        VanCell: Cell,
        VanButton: Button
    },
    methods: {
        tijiao() {
            this.$router.history.push('/main/paymentEnd');
        }
    }
};
</script>

<style scoped>
.information {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
.information p {
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 30px;
    font-size: 12px;
}
</style>