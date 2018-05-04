<template>
    <div id="loading" class="mdui-dialog">
        <div class="mdui-dialog-title">{{message}}</div>
        <div class="mdui-dialog-content">
            <div class="mdui-progress">
                <div class="mdui-progress-indeterminate"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loading',
        mounted() {
            this.show_logging()
            this.loading.open()
        },
        beforeDestroy() {
            this.loading.close()
            this.$mdui.JQ.unlockScreen()
        },
        props: {
            message: {
                type: String,
                default: '正在努力的加载..'
            }
        },
        data() {
            return {
                loading: null
            }
        },
        methods: {
            show_logging() {
                this.loading = new this.$mdui.Dialog('#loading', {
                    modal: true,
                    history: false,
                    destroyOnClosed: true
                })
            }
        }
    }
</script>