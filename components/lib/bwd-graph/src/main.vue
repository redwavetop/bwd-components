<template>
    <div class="bwd-graph" ref="bwdGraph"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name: 'bwd-graph',
    props: {
        graphOption: {
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
            let that = this;
            let option = {
                tooltip: {},
                legend: [
                    {
                        data: that.graphOption.data.categories.map(function (a) {
                            return a.name;
                        })
                    }
                ],
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'circular',
                        circular: {
                            rotateLabel: true
                        },
                        data: this.graphOption.data.nodes,
                        links: this.graphOption.data.links,
                        categories: this.graphOption.data.categories,
                        roam: true,
                        label: {
                            position: 'right',
                            formatter: '{b}'
                        },
                        lineStyle: {
                            color: 'source',
                            curveness: 0.3
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
        this.char = echarts.init(this.$refs.bwdGraph);
        this.drawEcharts()
    }
}
</script>