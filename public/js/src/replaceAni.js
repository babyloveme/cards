// JavaScript Document
define(function(){
    var imgOnOff = true; //图片延迟加载效果
    return {

        //更换图片
        addImgBg:function(){
            var html = '<div class="replaceAnimate">'+
                            '<div class="animated flipInX">'+ //这里多个div是为兼容ios
                                '<h3 class="title">更换图片<a class="close" onclick="closeAni()">关闭</a></h3>'+            
                                '<ul class="list imgListUl">'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/1.jpg"><img src="public/images/bg/s1.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/2.jpg"><img src="public/images/bg/s2.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/3.jpg"><img src="public/images/bg/s3.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/4.jpg"><img src="public/images/bg/s4.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/5.jpg"><img src="public/images/bg/s5.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/6.jpg"><img src="public/images/bg/s6.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/7.jpg"><img src="public/images/bg/s7.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/8.jpg"><img src="public/images/bg/s8.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/9.jpg"><img src="public/images/bg/s9.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/10.jpg"><img src="public/images/bg/s10.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/11.jpg"><img src="public/images/bg/s11.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/12.jpg"><img src="public/images/bg/s12.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/13.jpg"><img src="public/images/bg/s13.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/14.jpg"><img src="public/images/bg/s14.jpg" /></li>'+
                                    '<li onclick="changePicture(this)" data-url="public/images/bg/15.jpg"><img src="public/images/bg/s15.jpg" /></li>'+
                                '</ul>'+
                            '</div>'+
                        '</div>';
            $("#menu").append(html);
            //阻止导航层关闭
            $("#menu,#menu .replaceAnimate animated flipInX").off("touchstart");  

            if( imgOnOff ){
                $(".imgListUl li img").each(function(i){//加载效果
                    var _this = $(this);                    
                    _this.css({
                        "-webkit-animation-delay":(i+1)*0.12+'s',
                        "animation-delay":(i+1)*0.12+'s'
                    });
                });
                imgOnOff = false;
            }
        },

        //更换音乐
        addMusic:function(){
            var html = '<div class="replaceAnimate">'+
                            '<div class="animated flipInX">'+ //这里多个div是为兼容ios
                                '<h3 class="title">更换音乐<a class="close" onclick="closeAni()">关闭</a></h3>'+            
                                '<ul class="list musicList">'+
                                    '<li onclick="selectMusic(this)">无</li>'+
                                    '<li onclick="selectMusic(this)" data-name="junzhonglvhua.m4a">军中绿花</li>'+
                                    '<li onclick="selectMusic(this)" data-name="Apologize.mp3">Apologize</li>'+
                                    '<li onclick="selectMusic(this)" data-name="babamama.m4a">爸爸妈妈</li>'+
                                    '<li onclick="selectMusic(this)" data-name="fuqin.m4a">父亲</li>'+
                                    '<li onclick="selectMusic(this)" data-name="wenbie.mp3">吻别(英文版)</li>'+
                                    '<li onclick="selectMusic(this)" data-name="shuaicongge.mp3">甩葱歌</li>'+
                                '</ul>'+
                            '</div>'+
                        '</div>';
            $("#menu").append(html);
            //阻止导航层关闭
            $("#menu,#menu .replaceAnimate animated flipInX").off("touchstart");
        },

        //更换动画
        addAniEl:function(){
            var html = '<div class="replaceAnimate">'+
                            '<div class="animated flipInX">'+ //这里多个div是为兼容ios
                                '<h3 class="title">更换动画<a class="close" onclick="closeAni()">关闭</a></h3>'+            
                                '<ul class="list">'+
                                    '<li onclick="selFlash(0)">无</li>'+   
                                    '<li onclick="selFire(0)">烟花效果</li>'+               
                                    '<li onclick="selFlash(1)">飘落的枫叶</li>'+
                                    '<li onclick="selFlash(2)">飘落的雪花</li>'+
                                    '<li onclick="selFlash(3)">飘落的玫瑰</li>'+
                                    '<li onclick="selFlash(4)">满满的爱</li>'+
                                    '<li onclick="selFlash(5)">想你</li>'+
                                    '<li onclick="selFlash(6)">旋转的花</li>'+
                                    '<li onclick="selFlash(7)">绿钻</li>'+
                                    '<li onclick="selFlash(8)">莲花</li>'+
                                    '<li onclick="selFlash(9)">心花</li>'+
                                    '<li onclick="selFlash(10)">蛋糕</li>'+
                                    '<li onclick="selFlash(11)">红钻</li>'+
                                    '<li onclick="selFlash(12)">蝴蝶</li>'+
                                    '<li onclick="selFlash(13)">水滴</li>'+
                                    '<li onclick="selFlash(14)">人民币</li>'+
                                    '<li onclick="selFlash(15)">香吻</li>'+
                                    '<li onclick="selFlash('+"'e1'"+')">星光闪烁</li>'+
                                    '<li onclick="selFlash('+"'e2'"+')">跳动的心</li>'+
                                    '<li onclick="selFlash('+"'e3'"+')">旧电影</li>'+
                                    '<li onclick="selFlash('+"'e4'"+')">繁星点点</li>'+
                                    '<li onclick="selFlash('+"'e5'"+')">跳跃的星星</li>'+
                                    '<li onclick="selFlash('+"'e9'"+')">坠落水滴</li>'+
                                    '<li onclick="selFlash('+"'e10'"+')">闪亮的星星</li>'+
                                    '<li onclick="selFlash('+"'e13'"+')">蝴蝶飞</li>'+
                                    '<li onclick="selFlash('+"'e14'"+')">骷髅头</li>'+
                                    '<li onclick="selFlash('+"'e15'"+')">孔明灯</li>'+
                                    '<li onclick="selFlash('+"'e17'"+')">樱花飘落</li>'+
                                '</ul>'+
                            '</div>'+
                        '</div>';
            $("#menu").append(html);
            //阻止导航层关闭
            $("#menu,#menu .replaceAnimate animated flipInX").off("touchstart");  
        }

    }
})