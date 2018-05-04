<template>
    <div class="mdui-drawer mdui-drawer-open" id="main-drawer">
        <ul class="mdui-list">
            <!-- li标签中的内容要组件化成vue文件 -->
            <div v-if="logged == true">
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons">list</i>
                    <div class="mdui-list-item-content">我的二手书</div>
                </li>
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons">list</i>
                    <div class="mdui-list-item-content">你的二手书</div>
                </li>
            </div>
            <div v-else>
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">list</i>
                    <div class="mdui-list-item-content">蛤娜二手书</div>
                </li>
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-red">list</i>
                    <div class="mdui-list-item-content">帅分二手书</div>
                </li>
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-yellow">list</i>
                    <div class="mdui-list-item-content">卖豪二手书</div>
                </li>
            </div>
            <router-link to="/about">
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-red">list</i>
                <div class="mdui-list-item-content">关于我们💪</div>
            </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'left-drawer',
        props: {
            logged: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
