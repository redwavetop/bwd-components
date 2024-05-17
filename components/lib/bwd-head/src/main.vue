<template>
    <div class="charTypeTitle" :class="headOption.title ? '' : 'notShowTitle'">
        <span class="itemText" :style="itemTextSty">{{
        headOption.title }}</span>
    </div>
</template>
<script>
export default {
    name:'bwd-head',
    props: {
        headOption: {
            type: Object,
            default: null
        },
    },
    computed:{
        itemTextSty(){
            let fontWeight = this.headOption.fontStyle.filter(it => {
                return it == 'bold'
            })
            let fontStyle = this.headOption.fontStyle.filter(it => {
                return it == 'italic'
            })
            return `color:${this.headOption.fontColor};fontSize:${this.headOption.fontSize}px;fontWeight:${fontWeight[0]};fontStyle:${fontStyle[0]}`
        }
    }
}
</script>