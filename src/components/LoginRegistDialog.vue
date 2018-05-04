<template>
    <div id="loginRegistDialog">
        <left-drawer></left-drawer>
        <div class="mdui-dialog" id="userDialog" @click="update">
            <div id="login-tab" class="mdui-tab mdui-tab-full-width mdui-color-deep-purple">
                <!-- <a href="#login-tab1" class="mdui-ripple mdui-ripple-white">
                    <i class="mdui-icon material-icons">library_books</i>
                    <label>登录</label>
                </a> -->
                <a href="#login-tab2" class="mdui-ripple mdui-ripple-white mdui-tab-active"> 
                    <i class="mdui-icon material-icons">library_add</i>
                    <label>注册</label>
                </a>
            </div>
            <!-- <div id="login-tab1" class="mdui-p-a-2 mdui-dialog-content">
                <div class="mdui-typo mdui-typo-display-1-opacity mdui-text-center">欢迎登录</div>
                <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1">
                    <i class="mdui-icon material-icons">account_circle</i>
                    <label class="mdui-textfield-label">User Name</label>
                    <input class="mdui-textfield-input" type="text" :value="login_data.account"/>
                </div>
                <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1 mdui-m-b-2">
                    <i class="mdui-icon material-icons">vpn_key</i>
                    <label class="mdui-textfield-label">Password</label>
                    <input class="mdui-textfield-input" type="password" :value="login_data.password"/>
                </div>
                <div class="mdui-col-xs-4 mdui-col-offset-xs-4">
                    <button class="mdui-btn-block mdui-btn mdui-color-theme mdui-ripple">登 录</button>
                </div>
            </div> -->
            <div id="login-tab2" class="mdui-p-a-2 mdui-dialog-content">
                <div class="mdui-typo mdui-typo-display-1-opacity mdui-text-center">欢迎注册</div>
                <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1">
                    <i class="mdui-icon material-icons">account_circle</i>
                    <label class="mdui-textfield-label">User Name</label>
                    <input @mousedown="update" name="username" id="username" class="mdui-textfield-input" type="text" :value="regist_data.account" required/>
                    <div class="mdui-textfield-error">用户名不能为空</div>
                </div>
                <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1">
                    <i class="mdui-icon material-icons">vpn_key</i>
                    <label class="mdui-textfield-label">Password</label>
                    <input @mousedown="update" name="password" id="password" class="mdui-textfield-input" type="password" :value="regist_data.password" required/>
                    <div class="mdui-textfield-error">密码不能为空</div>
                </div>
                <div class="mdui-textfield mdui-col-xs-10 mdui-col-offset-xs-1 mdui-m-b-2">
                    <i class="mdui-icon material-icons">email</i>
                    <label class="mdui-textfield-label">Email</label>
                    <input @mousedown="update" name="email" id="email" class="mdui-textfield-input" :value="regist_data.email" type="email" required/>
                    <div class="mdui-textfield-error">邮箱格式错误</div>
                </div>
                <div class="mdui-col-xs-4 mdui-col-offset-xs-4">
                    <button class="mdui-btn-block mdui-btn mdui-color-theme mdui-ripple">登 录</button>
                </div>
            </div>
        </div>0
    </div>
</template>

<script>
    import LeftDrawer from '../components/LeftDrawer.vue'
    export default {
        name: 'login-regist-dialog',
        components: {LeftDrawer},
        mounted() {
            this.update()
        },
        data() { 
            return {
                login_data: {
                    account: '',
                    password: ''
                },
                regist_data: {
                    account: '',
                    password: '',
                    email: ''
                }
            }
        },
        methods: {
            update() {
                var tab = new mdui.Tab('#login-tab');
                tab.handleUpdate();
            }
        }
    }
</script>