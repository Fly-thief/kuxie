<template>
        <div class="container">
        <ul class="breadcrumb bg-transparent mb-0">
            <li class="breadcrumb-item pr-3"><a class="text-muted text_decoration_none " href="#"><span class="breadcrumb_a">售后政策</span></a></li>
            <li class="breadcrumb-item pr-3"><a class="text-muted text_decoration_none " href="#"><span class="breadcrumb_a">购买帮助</span></a></li>
            <li class="breadcrumb-item pr-3"><a class="text-muted text_decoration_none " href="#"><span class="breadcrumb_a">常见问题</span></a></li> 
        </ul>
        <div class="row no-gutters">
            <ul class="list-unstyled mb-0">
                <li class="d-flex dlex-row my-3 p_li bg-white py-4 mt-0">
                    <div>
                        <span class="font_li">04-15</span>
                        <span class="font_8 text-muted">2019</span>
                    </div>
                    <div class="pt-3 ml-4">
                        <p class="pd-2"><a class="text-dark text_decoration_none" href="#">如何购买下单？</a></p>
                        <p class="text-muted font_8">我问大师：“我是做设计的，压力大，吃不好，睡不好，别人有时间休假，而我却不行，感觉特别累且迷茫，大师...</p>
                    </div>
                </li>
                <li class="d-flex dlex-row my-3 p_li bg-white py-4 mb-0">
                    <div>
                        <span class="font_li">04-15</span>
                        <span class="font_8 text-muted">2019</span>
                    </div>
                    <div class="pt-3 ml-4">
                        <p class="pd-2"><a class="text-dark text_decoration_none" href="#">如何追踪订单？</a></p>
                        <p class="text-muted font_8">我问大师：“我是做设计的，压力大，吃不好，睡不好，别人有时间休假，而我却不行，感觉特别累且迷茫，大师...</p>
                    </div>
                </li>
                <li class="d-flex dlex-row my-3 p_li bg-white py-4">
                    <div>
                        <span class="font_li">04-15</span>
                        <span class="font_8 text-muted">2019</span>
                    </div>
                    <div class="pt-3 ml-4">
                        <p class="pd-2"><a class="text-dark text_decoration_none" href="#">任何商品都可以自提嘛？</a></p>
                        <p class="text-muted font_8">我问大师：“我是做设计的，压力大，吃不好，睡不好，别人有时间休假，而我却不行，感觉特别累且迷茫，大师...</p>
                    </div>
                </li>
                <li class="d-flex dlex-row my-3 p_li bg-white py-4">
                    <div>
                        <span class="font_li">04-15</span>
                        <span class="font_8 text-muted">2019</span>
                    </div>
                    <div class="pt-3 ml-4">
                        <p class="pd-2"><a class="text-dark text_decoration_none" href="#">我能否修改或取消在线订单？</a></p>
                        <p class="text-muted font_8">我问大师：“我是做设计的，压力大，吃不好，睡不好，别人有时间休假，而我却不行，感觉特别累且迷茫，大师...</p>
                    </div>
                </li>
                <li class="d-flex dlex-row my-3 p_li bg-white py-4">
                    <div>
                        <span class="font_li">04-15</span>
                        <span class="font_8 text-muted">2019</span>
                    </div>
                    <div class="pt-3 ml-4">
                        <p class="pd-2"><a class="text-dark text_decoration_none" href="#">官方网站的退还货政策？</a></p>
                        <p class="text-muted font_8">我问大师：“我是做设计的，压力大，吃不好，睡不好，别人有时间休假，而我却不行，感觉特别累且迷茫，大师...</p>
                    </div>
                </li>
                
            </ul>
        </div>
        <!-- 分页 -->
        <div class="clearfix">
            <ul class="pagination rf">
                <li class="page-item disabled"><a class="page-link" href="javascript:;">上一页</a></li>
                <li class="page-item heigth active"><a class="page-link" href="javascript:;">1</a></li>
                <li class="page-item heigth"><a class="page-link" href="javascript:;">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:;">下一页</a></li>
            </ul>
        </div>
    </div>
</template>
<style scoped>

    .breadcrumb-item+.breadcrumb-item::before{
    content: '';
}
.breadcrumb_a:hover{
    color: #333;
}
.font_li{
    font-size: 60px;
    color: #bdbdbd;
    font-family:century gothic;;
}
.p_li{
    padding-left: 150px;
    padding-right: 150px;
    transition: 0.5s;
}
.p_li:hover{
    padding-left: 80px;
    padding-right: 0px;
}
.pagination .page-item+.page-item{margin-left: 0.5rem;}
.heigth{width: 40px;height: 25px; text-align: center;}
.page-link:focus{
    background-color: transparent;
    color: #888;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
.page-link{
    background-color: #888;
    color: white;
}
.page-item.active .page-link{
    background-color: transparent;
    color: #888;
    border-color: #888;
}

</style>