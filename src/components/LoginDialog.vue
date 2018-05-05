<template>
    <div class="mdui-dialog" id="userDialog">
        <div id="login-tab" class="mdui-tab mdui-tab-full-width mdui-color-deep-purple">
            <a class="mdui-ripple mdui-ripple-white mdui-tab-active"> 
                <i class="mdui-icon material-icons">library_add</i>
                <label>注册</label>
            </a>
        </div>
        <div id="login-tab" class="mdui-p-a-2 mdui-dialog-content">
            <div class="mdui-typo mdui-typo-display-1-opacity mdui-text-center">欢迎注册</div>
            <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1">
                <i class="mdui-icon material-icons">account_circle</i>
                <label class="mdui-textfield-label">User Name</label>
                <input name="username" id="username" class="mdui-textfield-input" type="text" required/>
                <div class="mdui-textfield-error">用户名不能为空</div>
            </div>
            <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1">
                <i class="mdui-icon material-icons">vpn_key</i>
                <label class="mdui-textfield-label">Password</label>
                <input name="password" id="password" class="mdui-textfield-input" type="password" required/>
                <div class="mdui-textfield-error">密码不能为空</div>
            </div>
            <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1 mdui-m-b-2">
                <i class="mdui-icon material-icons">email</i>
                <label class="mdui-textfield-label">Email</label>
                <input name="email" id="email" class="mdui-textfield-input" type="email" required/>
                <div class="mdui-textfield-error">邮箱格式错误</div>
            </div>
            <div class="mdui-col-xs-4 mdui-col-offset-xs-4" @click="userLogin">
                <button class="mdui-btn-block mdui-btn mdui-color-theme mdui-ripple">登 录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login-dialog',
        data() {
            return {
                logged : false,
                dialog : null
            }
        },
        mounted: function() {
            this.show_login()
        },
        methods: {
            userLogin() {
                this.logged = true
                this.$bus.$emit('login-in', this.logged)
                this.dialog.close()
                this.$mdui.JQ.hideOverlay(true)
            },
            show_login() {
                this.dialog = new this.$mdui.Dialog('#userDialog', {
                    modal: true,
                    history: false,
                    destryOnClosed: true
                })
                console.log(this.dialog)
                this.dialog.handleUpdate()
            }
        }
    }
</script>