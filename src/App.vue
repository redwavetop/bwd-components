<template>
  <div id="app">
    <!-- <div class="container" v-loading="load">
      <bwd-card :cardOption="cardOption"></bwd-card>
    </div> -->
    <!-- <div class="colorSelect">
      <bwd-colorSelect :colorList="colorList" v-model="color"></bwd-colorSelect>
    </div>
    <div class="container1">
      <bwd-pie :pieOption="pieOption" ref="bwdPie"></bwd-pie>
    </div>
    <br>
    <div class="container1">
      <bwd-bar :barOption="barOption" ref="bwdBar"></bwd-bar>
    </div>
    <br>
    <div class="container1">
      <bwd-line :lineOption="lineOption" ref="bwdLine"></bwd-line>
    </div>
    <br>
    <div class="container1">
      <bwd-scatter :scatterOption="scatterOption" ref="bwdScatter"></bwd-scatter>
    </div>
    <br>
    <div class="container1">
      <bwd-gauge :gaugeOption="gaugeOption" ref="bwdGauge"></bwd-gauge>
    </div>
    <br>
    <div class="container1">
      <bwd-heatmap :heatmapOption="heatmapOption" ref="bwdHeatmap"></bwd-heatmap>
    </div>
    <br>
    <div class="container1">
      <bwd-graph :graphOption="graphOption" ref="bwdGraph"></bwd-graph>
    </div>
    <br> -->
    <!-- <div class="container1">
      <bwd-bar :barOption="barOption" ref="bwdBar"></bwd-bar>
    </div>
    <div class="container2">
      <bwd-table :searchForm="searchForm" ref="bTable" :config="tableconfig"></bwd-table>
    </div>
    <div class="container2">
      <bwd-head :headOption="headOption"></bwd-head>
    </div> -->
    <!-- <div class="container2">
      <bwd-echarts :echartsOption="echartsOption"></bwd-echarts>
    </div> -->

    <div class="container2">
      <bwd-head :headOption="headOption"></bwd-head>
    </div>
  
    
  </div>
</template>

<script>

export default {
  name: 'App',
  watch: {
    color(newVal) {
      this.pieOption.colorList = newVal;
      this.$refs.bwdPie.drawEcharts()
      this.barOption.colorList = newVal;
      this.$refs.bwdBar.drawEcharts()
      this.lineOption.colorList = newVal;
      this.$refs.bwdLine.drawEcharts()
    }
  },
  data() {
    return {
      load: false,

      echartsOption: {
        headOption: {
          title: '标题'
        },
        charOption: {
          seriesType: 'graph',
          data: {
            type: 'base',
            data: {
              categories: [
                { name: '分组A' },
                { name: '分组B' }
              ],
              nodes: [
                { category: 0, id: '0', name: '1-1' },  // category：0 0 表示categories中的索引匹配进行分组  id：唯一标识（必须）  name:名称
                { category: 0, id: '1', name: '1-2' },
                { category: 0, id: '2', name: '1-3' },
                { category: 1, id: '3', name: '1-4' },
                { category: 1, id: '4', name: '1-5' }
              ],
              links: [
                { source: "1", target: "0" },   // 与id进行匹配，source：起点目标  target：终点目标
                { source: "1", target: "2" },
                { source: "2", target: "0" },
                { source: "3", target: "0" },
                { source: "3", target: "1" },
                { source: "3", target: "2" },
                { source: "4", target: "3" },
                { source: "4", target: "1" },
                { source: "4", target: "2" },
                { source: "4", target: "0" },
              ]
            }
          },
          // seriesType: 'heatmap',
          // data: {
          //   type: 'base',
          //   data: {
          //     xAxisData: ['x1', 'x2', 'x3', 'x4', 'x5'],  // x方向数值
          //     yAxisData: ['y1', 'y2', 'y3', 'y4', 'y5', 'y6',], //y方向数值
          //     data: [
          //       [0, 0, 5],  // [ x的位置索引，y的位置索引，热力值 ]
          //       [0, 1, 1],
          //       [0, 2, 4],
          //       [0, 3, 2],
          //       [0, 4, 5],
          //       [3, 0, 5],
          //       [4, 1, 1],
          //       [5, 2, 4],
          //       [3, 3, 2],
          //       [2, 4, 5]
          //     ]
          //   }
          // },
          // seriesType: 'gauge',
          // data: {
          //   type: 'base',
          //   maxNum: 120, // 仪表盘的最大值限制
          //   unit: '单位', // 单位说明
          //   data: [
          //     {
          //       value: 100 //当前数值
          //     },
          //   ]
          // },
          // seriesType: 'line',
          // data: {
          //   type: 'base',
          //   xData: ['bwd-A', 'bwd-B', 'bwd-C', 'bwd-D', 'bwd-E'],
          //       yData: [
          //           [120, 200, 150, 80, 70],
          //       ],
          // },
          // seriesType: 'bar',
          // data: {
          //   type: 'group',
          //   data: {
          //     xData: ['bwd-A', 'bwd-B', 'bwd-C', 'bwd-D', 'bwd-E'],
          //     yData: [
          //       [120, 200, 150, 80, 70],
          //       [100, 140, 130, 90, 110],
          //       [90, 70, 110, 120, 140],
          //     ]
          //   },
          // },
          // seriesType: 'pie',
          // data: {
          //   type: 'ring',  //  'base':表示基础饼图  ring：表示基础环形图 rose：表示变形饼图（玫瑰图）leadLine：表示有引导线的饼图  symbol：符号饼图  参照下方示例图
          //   labelShow: false, //是否显示引导线 false或者不定义则不展示引导线
          //   colorList: [], // 颜色组选择
          //   data: [
          //     { value: 1048, name: 'bwd-A' },
          //     { value: 735, name: 'bwd-B' },
          //     { value: 580, name: 'bwd-C' },
          //     { value: 484, name: 'bwd-D' },
          //     { value: 300, name: 'bwd-E' }
          //   ]
          // },
          // seriesType: 'card',
          // data: {
          //   base: {
          //     content: '865', //内容
          //     description: '描述', //描述
          //   },
          // },
        }
      },

      headOption: {
        title: '标题',
        fontSize:30,
        fontColor:'red',
        fontStyle:['','']
      },

      searchForm: {
        leConditions: [
          {
            type: 'radioGroup',
            value: 'radioGroup1',
            list: [
              {
                value: 'radioGroup1',
                label: '单选按钮1'
              },
              {
                value: 'radioGroup2',
                label: '单选按钮2'
              }
            ]
          },
          {
            type: 'button',
            btnType: '',
            valueName: 'add',
            icon: 'el-icon-plus',
            label: '新增'
          },
          {
            type: 'dropdownButton',
            btnIcon: 'el-icon-arrow-down',
            label: '下拉按钮',
            dropdownMenu: [
              {
                value: '1',
                label: '下拉按钮1'
              }, {
                value: '2',
                label: '下拉按钮2'
              }

            ]
          }
        ],
        /**
         * riConditions 字段说明
         * type： 类型 是输入框，下拉框，时间选择框
         * label：placeholder显示内容
         * value：绑定的值
         * valueName：后台查询的字段
         * 
         * 下拉框说明  optionConfig：inter为下拉的接口 value：传递后台的字段 label：前端显示的字段
         * options：下拉数据
         */
        riConditions: [
          {
            type: 'checkbox',
            valueName: 'checkbox',
            value: '',
            label: '勾选'
          },
          {
            type: 'filterSelect',
            value: '',
            label: '请选择',
            options: [
              {
                value: '1',
                label: '过滤选择1'
              },
              {
                value: '2',
                label: '过滤选择2'
              },
            ]
          },
          {
            type: 'select',
            value: '',
            label: '表格对应字段名称搜索',
            options: []
          },
          {
            type: 'button',
            btnType: '',
            valueName: '',
            disabled: false,
            label: '按钮'
          },
          {
            type: 'input',
            label: '任务名称',
            value: "",
            valueName: 'name'
          },
          // {
          //   type: 'cascader',
          //   value: '',
          //   label: '表格对应字段名称搜索',
          //   // optionConfig: {
          //   //   inter: '',
          //   //   props: {
          //   //     value: 'value',
          //   //     label: 'label'
          //   //   },
          //   //   filterable: true
          //   // },
          //   // options: []
          // },
          {
            type: 'sCheckBoxGroup',
            value: '1',
            list: [
              {
                value: '1',
                label: 'label1'
              },
              {
                value: '2',
                label: 'label2'
              },
            ]
          },
          {
            type: 'datetimerange',
            startlabel: '开始时间',
            endLabel: '结束时间',
            value: '',
            pickerOptions: '',
            sLabel: 'beginTime',
            eLabel: 'endTime',
            valueFormat: "yyyy-MM-dd HH:mm:ss",
            format: "yyyy-MM-dd HH:mm:ss",
            defaultTime: ['00:00:00', '23:59:59'],
            label: '执行时间'
          },


        ]
      },
      //表格配置
      tableconfig: {
        //表格头部
        thead: [
          //key: 必填
          //visible: 控制列的显示与隐藏 必填
          //label: 头部标签
          //prop:绑定属性值
          //width:绑定宽度
          //align:left/center/right 对齐方式  默认左对齐
          //type:selection-->勾选框  index--> 序号
          //getOptions :为接口调用的数据请求，注意点，需要1.return promise   2.处理成value label对象数组
          //options:为静态数据 处理成value label对象数组
          { key: 0, visible: true, label: '勾选', prop: 'selection', width: '60', type: 'selection' },
          { key: 1, visible: true, label: '序号', prop: 'index', width: '60', type: 'index' },
          { key: 3, visible: true, label: '名称', prop: 'name' },
          { key: 4, visible: true, label: '时间', prop: 'time' },
        ],
        //表格操作列设置
        operation: {
          isShow: false, //是否显示操作列
          label: '操作',//列名
          width: '150',
          // fixed: 'right',
          align: ''
        },
        //功能数据
        btnList: [

          {
            type: 'text',
            label: '补传',
            value: 'config',
            // disabled: ({ count }) => count == 0,
          },
        ],
        pagesizes: [10, 20, 50],
        total: 5,
        tableData: [
          {
            name: 'AAAA',
            time: '2024-05-08'
          },
          {
            name: 'AAAA',
            time: '2024-05-08'
          },
          {
            name: 'AAAA',
            time: '2024-05-08'
          },
        ]
      },
      cardOption: {},

      graphOption: {
        type: 'base',
        data: {
          categories: [
            { name: '分组A' },
            { name: '分组B' }
          ],
          nodes: [
            { category: 0, id: '0', name: '1-1' },  // category：0 0 表示categories中的索引匹配进行分组  id：唯一标识（必须）  name:名称
            { category: 0, id: '1', name: '1-2' },
            { category: 0, id: '2', name: '1-3' },
            { category: 1, id: '3', name: '1-4' },
            { category: 1, id: '4', name: '1-5' }
          ],
          links: [
            { source: "1", target: "0" },   // 与id进行匹配，source：起点目标  target：终点目标
            { source: "1", target: "2" },
            { source: "2", target: "0" },
            { source: "3", target: "0" },
            { source: "3", target: "1" },
            { source: "3", target: "2" },
            { source: "4", target: "3" },
            { source: "4", target: "1" },
            { source: "4", target: "2" },
            { source: "4", target: "0" },
          ]
        }
      },

      heatmapOption: {
        type: 'base',
        data: {
          xAxisData: ['x1', 'x2', 'x3', 'x4', 'x5'],  // x方向数值
          yAxisData: ['y1', 'y2', 'y3', 'y4', 'y5', 'y6',], //y方向数值
          data: [
            [0, 0, 5],  // [ x的位置索引，y的位置索引，热力值 ]
            [0, 1, 1],
            [0, 2, 4],
            [0, 3, 2],
            [0, 4, 5],
            [3, 0, 5],
            [4, 1, 1],
            [5, 2, 4],
            [3, 3, 2],
            [2, 4, 5]
          ]
        }
      },

      gaugeOption: {
        type: 'base',
        maxNum: 120, // 仪表盘的最大值限制
        unit: '单位', // 单位说明
        data: [
          {
            value: 100 //当前数值
          },
        ]
      },
      scatterOption: {
        type: '',
        colorList: [], // 颜色组选择
        data: [
          [10.0, 8.04],
          [8.07, 6.95],
          [13.0, 7.58],
          [9.05, 8.81],
          [11.0, 8.33],
          [14.0, 7.66],
          [13.4, 6.81],
          [10.0, 6.33],
          [14.0, 8.96],
          [12.5, 6.82],
          [9.15, 7.2],
          [11.5, 7.2],
          [3.03, 4.23],
          [12.2, 7.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [12.0, 6.26],
          [12.0, 8.84],
          [7.08, 5.82],
          [5.02, 5.68]
        ]
      },

      pieOption: {
        type: 'leadLine',  //  'base':表示基础饼图  ring：表示基础环形图 rose：表示变形饼图（玫瑰图）leadLine：表示有引导线的饼图  symbol：符号饼图
        labelShow: false, //是否显示引导线 false或者不定义则不展示引导线
        colorList: [], // 颜色组选择
        data: [
          { value: 1048, name: 'bwd-A' },
          { value: 735, name: 'bwd-B' },
          { value: 580, name: 'bwd-C' },
          { value: 484, name: 'bwd-D' },
          { value: 300, name: 'bwd-E' }
        ]
      },
      barOption: {
        type: 'group', // base:基础柱状图  group:分组  stack：堆叠  symbol:符号
        colorList: [], // 颜色组选择
        data: {
          xData: ['bwd-A', 'bwd-B', 'bwd-C', 'bwd-D', 'bwd-E'],
          yData: [
            [120, 200, 150, 80, 70],
            [100, 140, 130, 90, 110],
            [90, 70, 110, 120, 140],
          ],
          // yData: ['bwd-A', 'bwd-B', 'bwd-C', 'bwd-D', 'bwd-E'],
          // xData: [
          //   {
          //     value: 157,
          //     symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
          //   },
          //   {
          //     value: 21,
          //     symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
          //   },
          //   {
          //     value: 66,
          //     symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
          //   },
          //   {
          //     value: 78,
          //     symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
          //   },
          //   {
          //     value: 123,
          //     symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
          //   }
          // ]
        },
      },

      lineOption: {
        type: 'smooth', // base:表示单折线图  polyLine:多折线  ladder:阶梯 smooth:曲线
        colorList: [], // 颜色组选择
        xData: ['bwd-A', 'bwd-B', 'bwd-C', 'bwd-D', 'bwd-E'],
        yData: [
          [120, 200, 150, 80, 70],
          [100, 140, 130, 90, 110],
          [90, 70, 110, 120, 140],
        ],
      },



      color: [],
      colorList: [
        ['rgb(91, 143, 249)', 'rgb(97, 221, 170)', 'rgb(101, 120, 155)', 'rgb(246, 189, 22)', 'rgb(114, 98, 253)', 'rgb(120, 211, 248)'],
        ['rgb(162, 228, 253)', 'rgb(146, 208, 248)', 'rgb(129, 188, 242)', 'rgb(112, 167, 232)', 'rgb(95, 147, 230)', 'rgb(79, 127, 223)'],
        ['rgb(124, 162, 238)', 'rgb(105, 105, 244)', 'rgb(197, 101, 245)', 'rgb(250, 127, 250)', 'rgb(243, 180, 222)', 'rgb(235, 222, 227)']
      ],
    }
  },
  mounted() {
    this.load = true;
    setTimeout(() => {
      this.cardOption = {
        // content:'865',
        // description:'m/s',
        miniCard: {
          type: 'line',
          data: {
            xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            yData: [150, 230, 224, 218, 135, 147, 260]
          }
        }
      }
      this.load = false;
    }, 1000)
  }
}
</script>

<style>
.container {
  width: 100px;
  height: 50px;

  /* width: 400px;
  height: 280px; */
  border: 1px solid #666;
  border-radius: 5px;
}

.container1 {
  width: 600px;
  height: 380px;
  border: 1px solid #666;
  border-radius: 5px;
}

.colorSelect {
  width: 260px;
  margin: 20px 0;
}

.container2 {
  padding: 10px;

  width: calc(100% - 20px);
  height: 600px;
  border: 1px solid #666;
}
</style>
