<template>
    <div class="bwd-heatmap" ref="bwdHeatmap"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'bwd-heatmap',
    props: {
        heatmapOption: {
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
                    position: 'top'
                },
                grid: {
                    height: '50%',
                    top: '10%'
                },
                xAxis: {
                    type: 'category',
                    data: this.heatmapOption.data.xAxisData,
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: this.heatmapOption.data.yAxisData,
                    splitArea: {
                        show: true
                    }
                },
                visualMap: {
                    min: 0,
                    max: 10,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '15%'
                },
                series: [
                    {
                        type: 'heatmap',
                        data: this.heatmapOption.data.data,
                        label: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
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
        this.char = echarts.init(this.$refs.bwdHeatmap);
        this.drawEcharts()
    }
}
</script>