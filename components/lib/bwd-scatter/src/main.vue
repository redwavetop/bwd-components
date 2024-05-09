<template>
    <div class="bwd-scatter" ref="bwdScatter"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'bwd-scatter',
    props: {
        scatterOption: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            char: null,

        }
    },
    methods: {
        drawEcharts() {
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {},
                yAxis: {},
                series: [
                    {
                        symbolSize: 20,
                        data: this.scatterOption.data,
                        type: 'scatter'
                    }
                ]
            };
            this.char.setOption(option);
            window.addEventListener('resize', () => {
                this.char.resize()
            })
        }
    },
    mounted() {
        this.char = echarts.init(this.$refs.bwdScatter);
        this.drawEcharts()
    }
}
</script>