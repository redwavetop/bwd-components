<template>
    <div class="bwd-echarts" ref="bwdEcharts">
        <bwdHead :headOption="echartsOption.headOption"></bwdHead>
        <div class="charContainer">
            <bwd-card :cardOption="echartsOption.charOption.data"
                v-if="echartsOption.charOption.seriesType == 'card'"></bwd-card>
            <bwd-pie :pieOption="echartsOption.charOption.data"
                v-if="echartsOption.charOption.seriesType == 'pie'"></bwd-pie>
            <bwd-bar :barOption="echartsOption.charOption.data"
                v-if="echartsOption.charOption.seriesType == 'bar'"></bwd-bar>
            <bwd-line :lineOption="echartsOption.charOption.data"
                v-if="echartsOption.charOption.seriesType == 'line'"></bwd-line>
            <bwd-gauge :gaugeOption="echartsOption.charOption.data"
                v-if="echartsOption.charOption.seriesType == 'gauge'"></bwd-gauge>
            <bwd-heatmap :heatmapOption="echartsOption.charOption.data"
                v-if="echartsOption.charOption.seriesType == 'heatmap'"></bwd-heatmap>
            <bwd-graph :graphOption="echartsOption.charOption.data"
                v-if="echartsOption.charOption.seriesType == 'graph'"></bwd-graph>
        </div>
    </div>
</template>
<script>
import bwdHead from '../../bwd-head/index.js'
import bwdPie from '../../bwd-pie/index.js'
import bwdBar from '../../bwd-bar/index.js'
import bwdLine from '../../bwd-line/index.js'
import bwdGauge from '../../bwd-gauge/index.js'
import bwdHeatmap from '../../bwd-heatmap/index.js'
import bwdGraph from '../../bwd-graph/index.js'
export default {
    name: 'bwd-echarts',
    components: {
        bwdHead,
        bwdPie,
        bwdBar,
        bwdLine,
        bwdGauge,
        bwdHeatmap,
        bwdGraph
    },
    props: {
        echartsOption: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>