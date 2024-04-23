<template>
    <div class="mini-bar" ref="miniBar">
        
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
            let char = echarts.init(this.$refs.miniBar);
            let xData = this.data.xData;
            let yData = this.data.yData;
            let option = {
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
                        type: 'bar',
                    }
                ]
            };

            char.setOption(option);
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
.mini-bar{
    width: 100%;
    height: 100%;
}
</style>