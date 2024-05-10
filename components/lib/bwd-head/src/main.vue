<template>
    <div class="charTypeTitle" :class="headOption.title ? '' : 'notShowTitle'">
        <span class="itemText">{{
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
    }
}
</script>