<template>
    <div class="bwd-searchTable" ref="bwdSearchTable">
        <!-- 搜索条件区 -->
        <div class="searchFrom" v-if="searchForm.leConditions.length || searchForm.riConditions.length">
            <div class="le_condition">
                <div class="le_condition_item showMargin" 
                    v-for="(itemLe, indexLe) in searchForm.leConditions" :key="indexLe">
                    <el-radio-group v-model="itemLe.value" v-if="itemLe.type == 'radioGroup'" @change="submit">
                        <el-radio-button :label="itRadio.value" v-for="itRadio in itemLe.list" :key="itRadio.value"> <i
                                style="font-size: 12px;margin-right: 5px;" v-if="itRadio.icon" class="iconfont"
                                :class="itRadio.icon"></i>{{
            itRadio.label }}</el-radio-button>
                    </el-radio-group>
                    <el-button v-if="itemLe.type == 'button'" :type="itemLe.btnType"
                        @click="leBtnOperate(itemLe.valueName)" :disabled="itemLe.disabled"><span
                            style="margin-right:5px" v-if="itemLe.icon" :class="itemLe.icon"></span>{{
            itemLe.label
        }}</el-button>
                    <el-dropdown v-if="itemLe.type == 'dropdownButton'">
                        <el-button type="primary" size="small" pain :class="itemLe.btnIcon">
                            {{ itemLe.label }}<i class="el-icon--right" :class="itemLe.iCon"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown" class="buttonDrop">
                            <el-dropdown-item v-for="itemDrop in itemLe.dropdownMenu" :key="itemDrop.value"
                                @click.native="changeDropMenu(itemLe, itemDrop)">{{ itemDrop.label
                                }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>

                </div>
            </div>
            <div class="ri_condition">
                <div :class="indexRi == searchForm.riConditions.length - 1 ? 'last_condition_item' : ''"
                    class="ri_condition_item" v-for="(itemRi, indexRi) in searchForm.riConditions" :key="indexRi">
                    <el-button v-if="itemRi.type == 'button'" :type="itemRi.btnType"
                        @click="riBtnOperate(itemRi.valueName)" :disabled="itemRi.disabled">{{
            itemRi.label
        }}</el-button>
                    <el-checkbox v-model="itemRi.value" v-if="itemRi.type == 'checkbox'">{{itemRi.label}}</el-checkbox>
                    <el-input v-model="itemRi.value" :placeholder="itemRi.label" v-if="itemRi.type == 'input'"
                        clearable></el-input>

                    <el-select v-if="itemRi.type == 'filterSelect'" v-model="itemRi.value" filterable
                        :placeholder="itemRi.label" clearable>
                        <el-option v-for="item in itemRi.options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>

                    <el-select v-if="itemRi.type == 'select'" v-model="itemRi.value" :placeholder="itemRi.label"
                        clearable>
                        <el-option v-for="item in itemRi.options" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <div v-if="itemRi.type == 'datetimerange'">
                        <span v-if="itemRi.label" style="margin-right:10px;color:#606266">{{ itemRi.label }}</span>
                        <el-date-picker v-model="itemRi.value" type="datetimerange"
                            :picker-options="itemRi.pickerOptions" range-separator="至"
                            :start-placeholder="itemRi.startlabel" :end-placeholder="itemRi.endLabel" align="right"
                            clearable :value-format="itemRi.valueFormat" :default-time="itemRi.defaultTime">
                        </el-date-picker>
                    </div>
                    <div class="active-main" v-if="itemRi.type == 'sCheckBoxGroup'">
                        <div v-for="it in itemRi.list" class="active-list" :key="it.value">
                            <div :class="{ 'active-module-choise': it.value == itemRi.value }" class="every-set-content"
                                @click="itemRi.value = it.value" slot="reference">
                                <span>{{ it.label }}</span>
                                <span class="active-img" v-if="it.value == itemRi.value">
                                    <i class="el-icon-check"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <el-checkbox v-if="itemRi.type == 'checkBox'" v-model="itemRi.value" @change="submit">{{
            itemRi.label
        }}</el-checkbox>

                    <el-cascader v-if="itemRi.type == 'cascader'" :options="itemRi.options" v-model="itemRi.value"
                        :props="itemRi.optionConfig.props" :placeholder="itemRi.label" clearable></el-cascader>
                </div>
                <div class="self-search-but" @click="loading ? null : submit()">
                    <i class="el-icon-search"></i>
                </div>
            </div>
        </div>
        <!-- 表格区 -->
        <div ref="table" class="table" v-loading="loading">
            <el-table ref="elTable" :data="tableData" v-if="headslotLoading" :max-height="maxHeight" empty-text="暂无数据"
                @selection-change="handleSelectionChange" @select="handleSelect" @select-all="handleSelectAll" stripe
                :row-key="getRowKeys">
                <template v-for="item in config.thead">
                    <!-- 序列 -->
                    <el-table-column v-if="item.type == 'index' && item.visible" type="index" :label="item.label"
                        :width="item.width" :key="item.prop" :align="item.align ? item.align : 'left'" />
                    <!-- 勾选框 -->
                    <el-table-column v-if="item.type == 'selection' && item.visible" type="selection" :key="item.prop"
                        :width="item.width" :align="item.align ? item.align : 'center'" />
                    <!-- 插槽自定义内容-->
                    <el-table-column v-if="item.templateSlot && item.visible && (!item.headSlot)" :key="item.prop"
                        v-bind="item" show-overflow-tooltip :align="item.align ? item.align : 'left'"
                        :width="item.width">
                        <template slot-scope="scope">
                            <slot :name="item.prop" :scope="scope"></slot>
                        </template>
                    </el-table-column>
                    <!-- 普通展示 -->
                    <el-table-column
                        v-if="item.type != 'index' && item.type != 'selection' && item.visible && (!item.templateSlot) && (!item.headSlot)"
                        :key="item.prop" v-bind="item" show-overflow-tooltip :align="item.align ? item.align : 'left'"
                        :width="item.width" />
                    <!-- 插槽自定义表头带过滤内容 -->
                    <el-table-column v-if="item.headSlot && item.templateSlot && item.visible" :key="item.prop"
                        v-bind="item" show-overflow-tooltip :align="item.align ? item.align : 'left'"
                        :width="item.width">

                        <template slot="header">
                            <div class="slot-filter">
                                <span>{{ item.label }}</span>
                                <el-popover placement="bottom" popper-class="headslotpop" width="auto"
                                    v-model="headSlot[item.prop].show">
                                    <el-checkbox :indeterminate="headSlot[item.prop].isIndeterminate"
                                        v-model="headSlot[item.prop].checkAll"
                                        @change="(val) => handleCheckAllChange(val, item.prop)">全选</el-checkbox>
                                    <el-checkbox-group v-model="headSlot[item.prop].checkedData"
                                        @change="(val) => handleCheckedChange(val, item.prop)">
                                        <el-checkbox v-for="itemslot in headSlot[item.prop].options"
                                            :label="itemslot.value" :key="itemslot.value">{{ itemslot.label
                                            }}</el-checkbox>
                                    </el-checkbox-group>
                                    <div class="sure"
                                        :class="headSlot[item.prop].checkedData.length > 0 ? 'canOperate' : 'cantOperate'"
                                        @click="headSlot[item.prop].checkedData.length > 0 ? headslotSearch(item.prop) : null">
                                        确定</div>
                                    <img slot="reference" src="./images/filter.png" alt="" class="h-filter-img">
                                </el-popover>
                            </div>
                        </template>
                        <template slot-scope="scope">
                            <slot :name="item.prop" :scope="scope"></slot>
                        </template>
                    </el-table-column>
                </template>
                <!-- 操作部分 -->
                <el-table-column v-if="config.operation.isShow" v-bind="config.operation"
                    :align="config.operation.align ? config.operation.align : 'left'"
                    :fixed="config.operation.fixed ? config.operation.fixed : null"
                    :width="config.operation.width ? config.operation.width : 'auto'">
                    <template slot-scope="scope">
                        <template v-for="itemBtn, indexBtn in config.btnList">
                            <el-button v-hasAuth="itemBtn.auth" :key="indexBtn" v-bind="itemBtn"
                                :disabled="itemBtn.disabled ? itemBtn.disabled(scope.row) : false"
                                v-if="itemBtn.isShow ? itemBtn.isShow(scope.row) : true" :type="itemBtn.type"
                                @click.native.prevent="handleRow(scope.$index, scope.row, itemBtn.value)">{{
            itemBtn.label
        }}</el-button>
                        </template>
                    </template>
                </el-table-column>
            </el-table>
            <!--分页区域-->
            <div class="pagination">
                <el-pagination :current-page.sync="pageQuery.index"
                    :page-sizes="config.pagesizes ? config.pagesizes : pagesizes" :page-size="pageQuery.size"
                    layout="total, sizes, prev, pager, next, jumper" :total="total" background
                    @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'bwd-table',
    props: {
        config: {
            type: Object,
            default: () => { }
        },
        searchForm: {
            type: Object,
            default: () => { }
        }
    },
    // 监听数据
    watch: {
        config: {
            handler(newVal) {
                console.log(newVal)
            },
            deep: true,
            immediate: true
        },
        tableData: {
            handler(newVal) {
                console.log(newVal)
                if (this.checkRows.length) {
                    this.toggleTableCheck()
                }
            },
            deep: true,
            immediate: true
        },
        checkRows: {
            handler(newVal) {
                if (newVal.length) {
                    this.toggleTableCheck()
                }
            },
            deep: true,
            immediate: true
        },
    },
    data() {
        return {
            slotShow: false,
            pageQuery: {
                size: 10, //每页条数
                index: 1, //当前第几页
            },
            pagesizes: [10, 20, 30, 50], //每页分页方式
            total: 0,//总条数,
            loading: false, // 加载
            headslotLoading: true, //表头下拉是接口获取的
            tableData: [], //表格数据
            headSlot: {}, // 头部有插槽的对象集合
            searchFormData: {}, //表格顶部的条件搜索
            maxHeight: 0,
            checkRows: []
        }
    },
    methods: {
        debounce(func, wait) {
            let timeout;

            // 返回一个新的函数，用于实际事件的调用
            return function (...args) {
                const context = this;

                // 如果此前有定时器，清除之前的定时器
                if (timeout) clearTimeout(timeout);

                // 设置新的定时器，确保`wait`时间内再次触发事件时不会执行`func`
                timeout = setTimeout(() => {
                    func.apply(context, args);
                }, wait);
            };
        },


        //
        changeDropMenu(itemLe, itemDrop) {
            itemLe.value = itemDrop.value;
            this.$emit('dropMenuHandle', itemLe.value)
        },

        //打勾或取消
        handleSelect(selecteds, row) {
            this.$emit('handleSelect', selecteds, row)
        },

        //全选、取消全选
        handleSelectAll(selecteds) {
            this.$emit('handleSelectAll', selecteds)
        },

        // 选中的数据
        handleSelectionChange(val) {
            this.$emit('handleSelChange', val)
        },

        //表格数据的反勾选
        setCheckRows(rows) {
            this.checkRows = rows;
        },

        toggleTableCheck() {
            this.$nextTick(() => {
                this.$refs.elTable.clearSelection();
                this.tableData.forEach((item, index) => {
                    this.checkRows.forEach(row => {
                        if (row[this.config.rowkey] == item[this.config.rowkey]) {
                            this.$refs.elTable.toggleRowSelection(this.tableData[index], true);
                        }
                    })
                })
            })

        },

        // 操作按钮
        handleRow(idx, row, value) {
            this.$emit('handleRow', idx, row, value)
        },

        //checkBox切换调用
        changeCheckbox() {
            this.submit()
        },

        //设置表格唯一绑定的key
        getRowKeys(row) {
            return this.config.rowkey ? row[this.config.rowkey] : null
        },

        //提交搜索条件
        submit() {
            this.searchFormData = {}
            //循环左侧的操作数据
            this.searchForm.leConditions.forEach(itemLe => {
                this.$set(this.searchFormData, itemLe.valueName, itemLe.value)
            })
            //循环左侧的操作数据
            this.searchForm.riConditions.forEach(itemRi => {
                if (itemRi.value) {
                    if (itemRi.type === 'datetimerange') {
                        this.$set(this.searchFormData, itemRi.sLabel, itemRi.value[0]);
                        this.$set(this.searchFormData, itemRi.eLabel, itemRi.value[1])
                    } else if (itemRi.type === 'cascader') {
                        this.$set(this.searchFormData, itemRi.valueName, itemRi.value[itemRi.value.length - 1])
                    } else {
                        this.$set(this.searchFormData, itemRi.valueName, itemRi.value)
                    }
                }
            })
            this.getTableData()
        },

        //按钮事件
        leBtnOperate(type) {
            this.$emit('btnOperate', type)
        },
        riBtnOperate(type) {
            this.$emit('btnOperate', type)
        },
        //重置操作
        reset() {
            //循环左侧的操作数据
            this.searchForm.leConditions.forEach(itemLe => {
                itemLe.value = "";
            })
            //循环左侧的操作数据
            this.searchForm.riConditions.forEach(itemRi => {
                itemRi.value = "";
            })
        },

        // 换页
        handleSizeChange(val) {
            this.pageQuery.size = val;
            this.getTableData()
        },
        // 换码
        handleCurrentChange(val) {
            this.pageQuery.index = val;
            this.getTableData()
        },

        //头部勾选的确定操作
        //1.关闭popover
        //2.表格筛选
        headslotSearch(prop) {
            this.headSlot[prop].show = false;
            this.getTableData()
        },

        //单个选
        handleCheckedChange(val, prop) {
            let checkcount = val.length;
            this.headSlot[prop].checkAll = checkcount === this.headSlot[prop].options.length;
            this.headSlot[prop].isIndeterminate = checkcount > 0 && checkcount < this.headSlot[prop].options.length
        },

        //全选
        handleCheckAllChange(val, prop) {
            this.headSlot[prop].isIndeterminate = false;
            let checkedData = this.headSlot[prop].options.map(it => {
                return it.value
            })
            this.headSlot[prop].checkedData = val ? checkedData : [];
        },

        //顶部搜索条件添加下拉数据获取
        addSearchFormData() {
            this.searchForm.riConditions.forEach(itemRi => {
                if (itemRi.optionConfig) {
                    this.allFetchData(itemRi.optionConfig, itemRi.type).then(res => {
                        itemRi.options = res;
                    })
                }
            })
        },


        //给头部的对象添加属性
        addHeadSlotProp() {
            let headData = [];
            this.config.thead.forEach(item => {
                if (item.headSlot) {
                    //通过接口获取
                    if (item.getOptions) {
                        headData.push(
                            {
                                prop: item.prop,
                                getOptions: item.getOptions
                            }
                        )
                    }
                    //静态数据
                    if (item.options) {
                        let checkedData = item.options.map(item => {
                            return item.value
                        })
                        this.$set(this.headSlot, item.prop, {
                            isIndeterminate: false, // 全选状态
                            checkAll: true, //是否全选
                            checkedData: checkedData,// 选中的数据组
                            options: item.options,//多选的勾选数据
                            show: false
                        })
                    }
                }
            })

            if (headData.length) {
                this.headslotLoading = false;
                let functions = headData.map(item => {
                    return this.allFetchData(item.getOptions)
                })
                let props = headData.map(item => {
                    return item.prop
                })
                let p = Promise.all(functions);
                //接口获取完成显示
                p.then(arr => {
                    arr.forEach((item, index) => {
                        let checkedData = item.map(it => {
                            return it.value
                        })
                        this.$set(this.headSlot, props[index], {
                            isIndeterminate: false, // 全选状态
                            checkAll: true, //是否全选
                            checkedData: checkedData,// 选中的数据组
                            options: item,//多选的勾选数据
                            show: false
                        })
                        this.headslotLoading = true;
                    })
                })
            }
        },

        //获取次级的递归处理
        getTreeData(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].children) {
                    if (data[i].children.length < 1) {
                        // children若为空数组，则将children设为undefined
                        data[i].children = undefined;
                    } else {
                        // children若不为空数组，则继续 递归调用 本方法
                        this.getTreeData(data[i].children);
                    }
                }
            }
            return data;
        },

        //顶部搜索和表格头部接口获取
        //inter: 接口名称
        //需要处理成的value,label  
        allFetchData(configOptions, type) {
            return new Promise((resolve, reject) => {
                configOptions.inter(configOptions.params).then(res => {
                    if (res.code == 0) {
                        let arr = res.data.result;
                        if (type == 'cascader') {
                            let newArr = this.getTreeData(arr);
                            resolve(newArr)
                        } else {
                            let newArr = arr.map(item => {
                                return {
                                    value: item[configOptions.value],
                                    label: item[configOptions.label]
                                }
                            })
                            resolve(newArr)
                        }

                    } else {
                        reject(res)
                    }
                })
            })
        },

        //获取表格数据
        getTableData() {
            if (this.config.inter) {
                //处理表头的筛选
                let headSlotParams = {}
                for (let prop in this.headSlot) {
                    //如果是全选的情况，则传空
                    if (this.headSlot[prop].checkAll) {
                        this.$set(headSlotParams, prop, "")
                    } else {
                        let str = this.headSlot[prop].checkedData.join(',');
                        this.$set(headSlotParams, prop, str)
                    }
                }
                this.loading = true;
                //判断是否立即执行条用数据接口
                if (this.config.isExecute) {
                    this.loading = false;
                    return
                }

                this.config.inter({ ...this.pageQuery, ...headSlotParams, ...this.searchFormData, ...this.config.executeParams }).then(res => {
                    this.loading = false;
                    if (res.code == 0) {
                        this.total = res.data.page ? res.data.page.records : (res.data.total || (res.data.result && res.data.result.total) || 0);
                        this.tableData = res.data.result.results || res.data.result;
                    }

                })
            } else {
                this.total = this.config.total;
                this.tableData = this.config.tableData
            }

        },
        //获取表格的最大高度
        getTableMaxHeight() {
            const height = this.$refs.table.offsetHeight;
            this.maxHeight = height - 52
        }
    },
    created() {
        this.addSearchFormData()
        this.addHeadSlotProp()
        this.getTableData()
    },
    mounted() {
        this.$nextTick(() => {
            this.getTableMaxHeight()
        })
        window.addEventListener('resize', this.getTableMaxHeight)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.getTableMaxHeight)
    }
}
</script>