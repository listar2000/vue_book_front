<template>
    <div>  
        <loading v-if="this.loading"></loading>  
        <msg-dialog v-if="this.errorDialog" v-bind:message="err"></msg-dialog>
        <div class="mdui-dialog" id="userDialog">
            <div id="login-tab" class="mdui-tab mdui-tab-full-width mdui-color-deep-purple">
                <a class="mdui-ripple mdui-ripple-white mdui-tab-active"> 
                    <i class="mdui-icon material-icons">library_books</i>
                    <label>登录</label>
                </a>
            </div>
            <div id="login-tab" class="mdui-p-a-2 mdui-dialog-content">
                <div class="mdui-typo mdui-typo-display-1-opacity mdui-text-center">欢迎登录</div>
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
                <div class="mdui-col-xs-4 mdui-col-offset-xs-4" @click="fetchData">
                    <button class="mdui-btn-block mdui-btn mdui-color-deep-purple mdui-ripple">登 录</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from '../components/Loading.vue'
    import MsgDialog from '../components/MsgDialog.vue'

    export default {
        name: 'login-dialog',
        components: {Loading, MsgDialog},
        data() {
            return {
                loginDialog : null,
                errorDialog: null,
                loading: false,
                err: null,
                json: null,
                url: "https://api.myjson.com/bins/ovkqq"
            }
        },
        mounted: function() {
            this.show_login()
        },
        methods: {
            userLogin() {
                this.$bus.$emit('login-in', true)
                this.loginDialog.close()
                this.$mdui.JQ.hideOverlay(true)
            },
            userLoginFail() {
                this.errorDialog = true
                this.loginDialog.close()
                this.$mdui.JQ.hideOverlay(true)
                this.err = '输入的密码错误，请重试'
            },  
            show_login() {
                this.loginDialog = new this.$mdui.Dialog('#userDialog', {
                    modal: true,
                    history: false,
                    destryOnClosed: true
                })
                this.loginDialog.handleUpdate()
            },
            fetchData() {
                this.loading = true
                this.$mdui.JQ.ajax({
                    method: 'GET',
                    url: this.url,
                    success: (data) => {
                        this.loading = false
                        this.json = JSON.parse(data)
                        if (this.json.status === '200') {
                            this.userLogin()
                        }
                        else
                            this.userLoginFail()
                    },
                    error: (xhr, textStatus) => {
                        this.loading = false
                        this.err = '欸..获取数据出现异常'
                    }
                })
            }
        }
    }
</script>