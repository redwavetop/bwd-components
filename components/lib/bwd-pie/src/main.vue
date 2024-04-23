<template>
    <div class="bwd-pie" ref="bwdPie"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'bwd-pie',
    props: {
        pieOption: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            char: null,
            type:{
                base:{
                    radius: ['0', '70%'], //内外半径
                },
                ring:{
                    radius: ['50%', '70%'], //内外半径
                },
                rose:{
                    radius: ['0', '70%'], //内外半径
                    roseType:'radius', //玫瑰图
                },
                leadLine:{
                    radius: ['0', '70%'], //内外半径
                }
            }
        }
    },
    methods: {
        drawEcharts() {
            let newData = [];
            this.pieOption.data.forEach((item, index) => {
                newData.push({
                    ...item,
                    itemStyle: {
                        color: this.pieOption.colorList[index % 6]
                    }
                })
            })

            let option = {
                grid:{
                    top:10,
                    left:10,
                    right:10,
                    bottom:10
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'horizontal',
                    left: 'center',
                    type: 'scroll',
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        ...this.type[this.pieOption.type],
                        
                        labelLine: {
                            show: this.pieOption.labelShow || this.pieOption.type == 'leadLine',
                        },
                        label:{
                            show:this.pieOption.labelShow || this.pieOption.type == 'leadLine',
                        },
                        padAngle: 1,//扇形间隙
                        itemStyle: {
                            borderRadius: 5 // 扇形圆角
                        },
                        data: newData,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
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
        this.char = echarts.init(this.$refs.bwdPie);
        this.drawEcharts()
    }
}
</script>