<template>
    <div class="mdui-container mdui-col-xs-12">
        <div class="mdui-card mdui-m-t-4">
            <div class="mdui-typo-display-3-opacity mdui-text-center">404 Page Not Found</div>
            <div class="mdui-typo-display-3 mdui-text-center mdui-m-y-2">😭请求页面无法找到😭</div>
            <div class="mdui-typo">
                <hr>
            </div>
            <div class="mdui-typo mdui-typo-display-1 mdui-text-center mdui-m-y-2">
                不如从<font color="red">左侧</font>的应用栏开始操作？
                <br>
                或者...😑
            </div>
            <div class="mdui-text-center mdui-m-b-3">
                <router-link to="/">
                    <button class="mdui-btn mdui-color-purple-600 mdui-ripple">
                        回到首页
                    </button>
                </router-link>   
            </div>
        </div>
    </div>
</template>