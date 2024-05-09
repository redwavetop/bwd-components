<template>
    <div class="bwd-line" ref="bwdLine"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'bwd-line',
    props: {
        lineOption: {
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
            let newData = this.lineOption.yData.map((item,index) => {
                return {
                    type:'line',
                    step: this.lineOption.type == 'ladder' ? 'start' : '',
                    smooth: this.lineOption.type == 'smooth',
                    data:item,
                    itemStyle:{
                        color:this.lineOption.colorList ? this.lineOption.colorList[index % 6] : ''
                    }
                }
            });

            let option = {
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.lineOption.xData,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            interval: 0,
                            width: 80,
                            overflow: 'truncate',
                            ellipsis: '...'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            show: true
                        },

                    }
                ],
                series: newData

            };
            this.char.setOption(option);
            window.addEventListener('resize', () => {
                this.char.resize()
            })
        }
    },
    mounted() {
        this.char = echarts.init(this.$refs.bwdLine);
        this.drawEcharts()
    }
}
</script>