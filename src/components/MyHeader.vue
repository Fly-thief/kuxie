<template>
    <div class="container">
        <div class="row no-gutters py-4 mt-1">
            <div class="col-md-2 logo">
                <router-link to="/"><img class="w_80" src="imgs/logo.png" alt="logo"></router-link>
            </div>
            <div class="col-md-5 offset-md-3">
                <ul class="list-unstyled d-flex flex-row justify-content-between align-item-center">
                    <li><router-link class="text-muted text_decoration_none ban" to="/">首页</router-link></li>
                    <li><router-link class="text-muted text_decoration_none ban" to="/all">所有商品</router-link></li>
                    <li><router-link class="text-muted text_decoration_none ban" to="/about">关于我们</router-link></li>
                    <li><router-link class="text-muted text_decoration_none ban" to="/server">服务支持</router-link></li>
                    <li><router-link class="text-muted text_decoration_none ban" to="/connect">联系我们</router-link></li>
                </ul>
            </div>
            <div class="col-md-2 pl-5">
                <ul class="list-unstyled d-flex flex-row justify-content-md-end align-item-center">
                    <li class="mr-3"><router-link to="/log" class="log"><span class="iconfont icon-iconrenxiang"></span></router-link></li>
                    <li class="mr-3"><span class="iconfont icon-gouwuche"></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>

.w_80{
    width: 70%;
}
.ban:focus,.ban:hover{
    color: #555 !important;
}
.icon-gouwuche{
    color: #6c757d;
    font-size: 20px;
    line-height: 30px;
}
.icon-iconrenxiang{
    font-size: 26px;
    line-height: 30px;
}
.log{
    text-decoration: none;
    color: #666;
}
</style>