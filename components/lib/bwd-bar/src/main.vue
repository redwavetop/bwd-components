<template>
    <div class="bwd-bar" ref="bwdBar"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'bwd-bar',
    props: {
        barOption: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            char: null,

        }
    },
    methods: {
        drawElseEcharts() {
            let newData = this.barOption.data.yData.map((item,index) => {
                return {
                    name: '',
                    type: 'bar',
                    label: {
                        show: true,
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    stack: this.barOption.type == 'stack' ? 'total' : '',
                    data: item,
                    itemStyle:{
                        color:this.barOption.colorList ? this.barOption.colorList[index % 6] : ''
                    }
                }
            })
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        data: this.barOption.xData,
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
                        boundaryGap: [0, 0.01],
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
        },
        drawSymbolEcharts() {
            let newData = this.barOption.data.xData.map((item,index) => {
                return {
                    ...item,
                    itemStyle:{
                        color:this.barOption.colorList ? this.barOption.colorList[index % 6] : ''
                    }
                }
            })
            let option = {

                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    } 
                },

                yAxis: {
                    data: this.barOption.data.yData,
                    inverse: true,
                    axisLine: { show: false },
                    axisTick: { show: false },
                    axisPointer: {
                        label: {
                            show: true,
                            margin: 30
                        }
                    }
                },
                xAxis: {
                    splitLine: { show: false },
                    axisLabel: { show: false },
                    axisTick: { show: false },
                    axisLine: { show: false }
                },
                animationDurationUpdate: 500,
                series: [
                    {
                        id: '',
                        type: 'pictorialBar',
                        label: {
                            show: true,
                            position: 'right',
                        },
                        symbolRepeat: true,
                        universalTransition: {
                            enabled: true,
                            delay: function (idx, total) {
                                return (idx / total) * 1000;
                            }
                        },
                        data: newData
                    }
                ]
            };
            this.char.setOption(option);
            window.addEventListener('resize', () => {
                this.char.resize()
            })
        },
        drawEcharts(){
            if (this.barOption.type == 'symbol') {
            this.drawSymbolEcharts()
        } else {
            this.drawElseEcharts()
        }
        }
    },
    mounted() {
        this.char = echarts.init(this.$refs.bwdBar);
        this.drawEcharts()
    }

}

</script>