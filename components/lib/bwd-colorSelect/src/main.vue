<template>
    <el-popover placement="bottom" v-model="visible">
        <div class="color-select-list">
            <div :class="activeIndex == index ? 'char-form-colors-active' : ''" class="char-form-colors"
                v-for="(item, index) in colorList" :key="index" @click="choiseActiveColor(index)">
                <div class="colors-item" :style="'background-color:' + itemC" v-for="(itemC, indexC) in item"
                    :key="indexC + 'c'"></div>
            </div>
        </div>
        <div class="char-form-colors-ref" slot="reference">
            <div class="colors-item" :style="'background-color:' + itemA" v-for="(itemA, indexA) in activeColor"
                :key="indexA + 'a'"></div>
        </div>
    </el-popover>
</template>

<script>
export default {
    name:'bwd-colorSelect',
    props:{
        colorList:{
            type:Array,
            default:null
        },
        value: [String, Number,Array],
    },
    model:{
        prop:'value',
        event:'change'
    },
    data() {
        return {
            activeIndex: '',
            activeColor: this.value,
            visible:false
        }
    },
    methods: {
        choiseActiveColor(index) {
            this.visible = false;
            this.activeIndex = index;
            this.activeColor = this.colorList[index];
            this.$emit('change',this.activeColor)
        }
    }
}
</script>
