<template>
    <div>
        <div class="row mb-5">
            <!-- 左侧菜单项 -->
            <div class="col-4">
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name: 'HistoryLink'}">
                        <a class="list-group-item list-group-item-action">历史订单</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name: 'ContactLink'}">
                        <a class="list-group-item list-group-item-action">联系我们</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name: 'OrderingLink'}">
                        <a class="list-group-item list-group-item-action">点餐记录</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name: 'DeliveryLink'}">
                        <a class="list-group-item list-group-item-action">快递信息</a>
                    </router-link>
                </div>
            </div>
            <!-- 右侧内容区域 -->
            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
