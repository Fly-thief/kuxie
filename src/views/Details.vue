<template>
    <div class="details">
        <div class="container-fluid ">
            <div class="container my-5">
                <div class="row no-gutter">
                    <div class="col-md-6 col-sm-12">
                        <img class="w-100" src="imgs/2L_5.png">
                    </div>
                    <div class="col-md-6 pl-md-4 pr-md-5  col-sm-12">
                        <p class="title">HACOON 板鞋</p>
                        <div class="hr"></div>
                        <p class="price">¥2900</p>
                        <div class="ser">
                            <p class="ser-number font-color"><span>商品编号： 0001000725 </span></p>
                            <p class="font-color">分类：<span class="classify">休闲板鞋</span></p>
                        </div>
                        <div>
                            <p class="font-color shoe-details">“板鞋”是平地式板式的鞋。因为是玩滑板的人常穿的鞋，所以也称为滑板鞋。<br>
                                板鞋跟一般鞋子比较，不同的地方就是：它几乎都是平底的，便于让脚能完全地平贴在滑板上。而且有防震的功能。还有它的侧面有加强，对于鞋带的部分，有些牌子的鞋有作防磨断的鞋带。</p>
                        </div>
                        <div>
                            <ul class="list-unstyled d-flex flex-row justify-content-between btn">
                                <span>尺码</span>
                                <li class="btn-item">40</li>
                                <li class="btn-item">41</li>
                                <li class="btn-item">42</li>
                                <li class="btn-item">43</li>
                                <li class="btn-item">44</li>
                            </ul>
                            <p class="price">¥2900</p>
                        </div>
                        <div class="add">
                            <span class="add-shopping" href="javascript:;">加入购物出</span >
                                <button class="add-btn">-</button>
                                <button class="add-btn">0</button>
                                <button class="add-btn">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container comment-area">
            <div>
                <p class="zone-t">商品细节</p>
                <p class="zone-b">DATAIL</p>
            </div>
            <div class="detail-img">
                <img src="imgs/details.jpg" alt="">
                <img src="imgs/details1.jpg" alt="">
            </div>
            <div>
                <p class="zone-t">买家评论</p>
                <p class="zone-b">EVALUATE</p>
            </div>
            <div class="buy-comments">
                <div></div>
                <div>
                    <p class="title">目前还未有评论</p>
                    <p class="title1">我要第一个评论! “HAYAKU 板鞋”</p>
                </div>
                <div>
                    <p class="title">您的评级</p>
                    <ul class="list-unstyled d-flex flex-row">
                        <li>1</li><span>|</span>
                        <li>1</li><span>|</span>
                        <li>1</li><span>|</span>
                        <li>1</li><span>|</span>
                        <li>1</li>
                    </ul>
                </div>
                <div>
                    <p class="title">您的评论</p>
                    <textarea></textarea>
                </div>
                <span class="add-shopping" href="javascript:;">提交</span >
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
        .details{
            text-align: left;
        }
        .details>.container-fluid{
            background-color: #fff;
            margin-bottom: 50px;
            padding-bottom: 50px;
        }
        .details>.container-fluid>.container{
            padding-top: 50px;
        }
        .details>.container-fluid>.container  .title{
            font-size: 20px;
            color: black;
        }
        .details>.container-fluid>.container .hr{
            width: 70px;
            border: 2px solid #ddd;
            background: #ddd;
        }
        .details>.container-fluid>.container .price{
            font-size: 34px;
            color: #333;
            margin-top: 20px;
        }
        .details>.container-fluid>.container .ser{
            margin-top: 20px;
        }
        .details>.container-fluid>.container .ser-number{
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            padding: 5px 0;
        }
        .details .font-color{
            color: rgb(119, 119, 119);
            font-size: 12px;
        }
        .details .classify{
            color: red;
        }
        .details .shoe-details{
            line-height: 30px;
        }
        .details .btn{
            width: 300px;
            padding-bottom: 0;
        }
        .details .btn-item{
            width: 40px;
            height: 28px;
            line-height: 28px;
            border: 1px solid #e1e1e1;
            text-align: center;
            margin-left: 10px;
            padding-bottom: 0;
        }
        .details .btn-item:hover{
            background-color: black;
            color: #fff;
        }
        .details .add{
            margin-top: 20px;
        }
        .details .add-shopping{
            padding: 10px 50px;
            background-color: #000;
            color: #fff;
            font-size: 16px;
            margin-right: 10px;
        }
        .details .add-shopping:hover{
            background-color: #444;
        }
        .details .add-btn{
            width: 50px;
            height: 41px;
            background-color: transparent;
            margin-right: 0;
            border: 1px solid #ddd;
        }
        .details .detail-img{
            background-color: #fff;
            padding: 50px 100px;
            margin-bottom: 50px;
        }
        .details .detail-img>img{
            width: 100%;
        }
        .details .buy-comments{
            background-color: #fff;
            padding: 50px 40px;
        }
       .details  .buy-comments>div:first-child{
            height: 2px;
            background-color: #eee;
        }
        .details .buy-comments>div:nth-child(4) textarea{
            width: 100%;
            height: 70px;
            border: 1px solid #eee;
            padding: 0;
            margin-bottom: 20px;
        }
       .details .comment-area{
           margin-bottom: 100px;
       }
       .details .title{
           font-size: 13px;
           color: #777;
           margin-top: 5px;
       }
       .details .title1{
           font-size: 14px;
           font-weight: 700;
           color: #000;
       }
       .details .zone-t{
                font-size: 18px;
                text-align: left;
                color: #666;
                padding: 0;
                margin-bottom: 0;
        }
       .details .zone-b{
                color: #888;
        }
</style>