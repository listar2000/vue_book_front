<template>
    <div id="msg-dialog" class="mdui-dialog">
        <div class="mdui-dialog-title">{{title}}</div>
        <div class="mdui-dialog-content">
            {{message}}
        </div>
        <div class="mdui-dialog-actions">
            <button @click="goBack()" class="mdui-btn mdui-ripple" mdui-dialog-close>确 定</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '来自BOOK@HFI的提示'
            },
            message: {
                type: String, 
                default: '系统出现故障'
            },
            error: {
                type: Boolean,
                default: false
            }
        },
        name: 'msg-dialog',
        mounted: function() {
            this.show_dialog()
            this.dialog.open()
        },
        data() {
            return {
                dialog: null
            }
        },
        methods: {
            show_dialog() {
                this.dialog = new this.$mdui.Dialog('#msg-dialog', {
                    modal: true,
                    history: false,
                    destroyOnClosed: true
                })
                this.dialog.handleUpdate()
            },
            goBack() {
                this.dialog.close()
                this.$mdui.JQ.unlockScreen()
                if (this.error)
                    window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    }
</script>