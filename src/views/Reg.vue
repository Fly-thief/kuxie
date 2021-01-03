<template>
            <div class="bg">
            <div class="login">
               <div class="main">
                   <div class="login_top">
                       <div class="menu">
                            <input id="phone" type="text" placeholder="手机">
                            <input id="email" type="text" placeholder="邮箱">
                            <input id="upwd" type="password" placeholder="密码">
                        </div>
                       
                        <div class="hr"></div>
                        <div class="menu1">
                            <router-link to="/log">登录</router-link>
                            <router-link to="javascript:;">注册</router-link>
                        </div>
                        <a href="javascript:;" class="font_8">忘记密码？点这里找回</a>
                    </div>
                   <div class="login_bottom ">
                       <p class="title">用户注册/登录说明：</p>
                       <p class="font_8">1.演示用户名：123456789；密码：demo1234</p>
                       <p class="font_8">2.商城不可注册，实际使用需单独购买</p>
                   </div>
               </div>
            </div>
        </div>
</template>
<style scoped>
      #app>.bg>.login{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 422px;
    margin-top: -211px;
    margin-left: -250px;
    background-color: whitesmoke;
    box-shadow: 0px 0px 50px #ccc;
    border-radius: 5px;
    padding: 40px 60px;
    box-sizing: border-box;
}
#app>.bg>.login>.main{
    width: 100%;
    height: 100%;
    padding: 4px 38px;
    box-sizing: border-box;
}
.login_top>.menu>input{
    display: block;
    box-sizing: border-box;
    padding: 2px 3px;
    width: 100%;
    height: 34px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
}
.login_top>.menu1>a{
    display: block;
    width: 100%;
    text-decoration: none;
    height: 38px;
    color: #000;
    text-align: center;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    line-height: 38px;
    box-sizing: border-box;
    border-radius: 3px;
}
.login_top>.menu1>a:first-child{
    color: white;
    background-color: #000;
}
.login_top>a{
    float: right;
    text-align: right;
    text-decoration: none;
    color: #666;
}

.font_8{
    color: #999;
}
.title{
    font-size: 12px;
}
.login_bottom{
    margin-top: 40px;
} 
.hr{
    width: 100%;
    margin-top: 14px;
    margin-bottom: 12px;
    background-color: #eee;
    height: 2px;
}
</style>