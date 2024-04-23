<template>
    <div class="mini-line" ref="miniLine">
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    props:{
        data:{
            type:Object,
            default:null
        }
    },
    data() {
        return {

        }
    },
    methods: {
        drawEcharts() {
            let char = echarts.init(this.$refs.miniLine);
            let xData = this.data.xData;
            let yData = this.data.yData;
            let options = {
                grid:{
                    top:10,
                    left:10,
                    right:10,
                    bottom:10
                },
                xAxis: {
                    type: 'category',
                    show:false,
                    data: xData
                },
                yAxis: {
                    type: 'value',
                    show:false,
                },
                series: [
                    {
                        data: yData,
                        type: 'line',
                        symbol: 'none',
                    }
                ]
            };

            char.setOption(options);
            window.addEventListener('resize', () => {
                char.resize()
            })

        }
    },
    mounted(){
        this.drawEcharts()
    }

}
</script>
<style lang="scss" scoped>
.mini-line{
    width: 100%;
    height: 100%;
}
</style>