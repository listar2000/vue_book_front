<template>
    <div id="main-drawer" class="mdui-drawer mdui-drawer-open">
        <ul class="mdui-list">
            <!-- li标签中的内容要组件化成vue文件 -->
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">list</i>
                <div class="mdui-list-item-content">我的二手书</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">list</i>
                <div class="mdui-list-item-content">你的二手书</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">list</i>
                <div class="mdui-list-item-content">蛤娜二手书</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">list</i>
                <div class="mdui-list-item-content">帅分二手书</div>
            </li>
            <li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">list</i>
                <div class="mdui-list-item-content">卖豪二手书</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'left-drawer',
    }
</script>
