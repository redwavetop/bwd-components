<template>
    <div class="bwd-container">
        <div class="card-mini" v-if="cardOption.mini">
            <mini-line v-if="cardOption.miniCard.type == 'line'" :data="cardOption.miniCard.data"></mini-line>
            <mini-bar v-else-if="cardOption.miniCard.type == 'bar'" :data="cardOption.miniCard.data"></mini-bar>
        </div>

        <div class="card-statistics" v-else>
            <span class="content">
                {{ cardOption.base.content }}
            </span>
            <span class="description">
                {{ cardOption.base.description }}
            </span>
        </div>
    </div>
</template>

<script>
import miniBar from './components/miniBar.vue'
import miniLine from './components/miniLine.vue'
export default {
    name: 'bwdCard',
    components: {
        miniBar,
        miniLine
    },
    props: {
        
        cardOption: {
            type: Object,
            default: null
        }
    }
}
</script>
<style lang="scss" scoped>
.bwd-container {
    width: 100%;
    height: 100%;

    .card-statistics {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .content {
            font-size: 75px;
            font-weight: bold;
        }

        .description {
            font-size: 30px;
        }
    }

    .card-mini {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>