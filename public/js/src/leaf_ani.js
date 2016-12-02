// JavaScript Document
define(function(){
    //随机浮点数
    function randomFloat(low, high){
        return low + Math.random() * (high - low);
    }

    //追加动画图片
    function addImg(obj){
        $(obj).css({
            "position":"absolute",
            "top":randomFloat(0,90)+"%",
            "left":randomFloat(0,90)+"%",
            "opacity":0,
            "-webkit-animation": "star " +randomFloat(1,3)+"s linear infinite " +randomFloat(0,2)+"s",
            "-moz-animation": "star " +randomFloat(1,3)+"s linear infinite " +randomFloat(0,2)+"s",
            "-o-animation": "star " +randomFloat(1,3)+"s linear infinite " +randomFloat(0,2)+"s",
            "animation": "star " +randomFloat(1,3)+"s linear infinite " +randomFloat(0,2)+"s"
        }).appendTo($("#leaves"));
    }
    
    var timer = false;

    function CreateStars(n){
        
        //没有leaves div那就添加
        if( !$("#leaves").length ){
            $("body").append("<div id='leaves'></div>");
        }    
        
        //先清除原来,再追加(到时跳转可删除)
        $("#leaves").html("");
        
        //有就先删除
        clearInterval(timer);//清除定时器
        $("#e5Canvas,#e5Img,#fireCanvas").remove();

        if( n == "e1" ){
            for(var i=0;i<20;i++){
                var img="<img src=\"public/images/bq/e/e1.png\"/>";
                addImg(img);                
            }
            return;
        }

        if( n == "e2" ){
            for(var i=0;i<20;i++){
                var img="<img src=\"public/images/bq/e/e2.png\"/>";
                addImg(img);
            }
            return;
        }

        if( n == "e3" ){
            var html = '<img src=\"public/images/bq/e/e3.gif\" style="display:block;width:100%;height:100%"/>';
            $("#leaves").html(html);
            return;
        }

        if( n == "e4" ){
            for(var i=0;i<60;i++){
                if(i%2==0){
                    var img="<img src=\"public/images/bq/e/e4-1.png\"/>";
                }else{
                    var img="<img src=\"public/images/bq/e/e4-2.png\"/>";
                }
                addImg(img);                
            }
            return;
        }

        if( n == "e5" ){
    
            $("#leaves").remove(); 
            if( !$("#e5Img,#e5Canvas").length ){
                var src = 'public/images/bq/e/e5.png';
                $("body").append("<img id='e5Img' src='"+src+"' /><canvas id='e5Canvas'></canvas>");
            }

            var canvas=document.getElementById("e5Canvas");
            var ctx=canvas.getContext('2d');
            canvas.width=window.innerWidth;
            canvas.height=window.innerHeight;
            var particles=[];
            
            timer = setInterval(loop,1000/10);                  

            function loop(){
                var p={
                    x:canvas.width*Math.random(),
                    y: canvas.height*Math.random(),
                    xSpeed:Math.random()*4- 2,
                    ySpeed:Math.random()*(-5)-15,
                    size:Math.random()*8+100,
                    globalAlpha: Math.random()
                };

                particles.push(p);
                while(particles.length>200)particles.shift();
                ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
                var img=document.getElementById("e5Img");

                for(var i=0;i<particles.length;i++){
                    p=particles[i];
                    ctx.drawImage(img,p.x, p.y, p.size, p.size);
                    ctx.globalAlpha= p.globalAlpha;
                    p.x+= p.xSpeed;
                    p.y+= p.ySpeed;
                    p.size*=0.99;
                    p.ySpeed+=0.5;
                }
            }
            return;
        }

        if( n == "e9" ){
            for(var i=0;i<20;i++){
                var img="<img src=\"public/images/bq/e/e9.png\"/>";
                $(img).css({
                    "position":"absolute",
                    opacity:0,
                    "top":randomFloat(3,85)+"%",
                    "left":randomFloat(0,100)+"%",
                    "-webkit-animation-name": "anfall",
                    "-webkit-animation-duration":randomFloat(3,6)+"s",
                    "-webkit-animation-delay":randomFloat(0,5)+"s",
                    "-webkit-animation-iteration-count":"infinite",

                    "-moz-animation-name": "anfall",
                    "-moz-animation-duration":randomFloat(3,6)+"s",
                    "-moz-animation-delay":randomFloat(0,5)+"s",
                    "-moz-animation-iteration-count":"infinite",

                    "-o-animation-name": "anfall",
                    "-o-animation-duration":randomFloat(3,6)+"s",
                    "-o-animation-delay":randomFloat(0,5)+"s",
                    "-o-animation-iteration-count":"infinite",

                    "animation-name": "anfall",
                    "animation-duration":randomFloat(3,6)+"s",
                    "animation-delay":randomFloat(0,5)+"s",
                    "animation-iteration-count":"infinite"
                }).appendTo($("#leaves"));
            }
            return;
        }

        if( n == "e10" ){

            for(var i=0;i<20;i++){
                var t_div = document.createElement("div");
                $(t_div).addClass('common').css({
                    'top':randomFloat(-10,85)+"%",
                    'left':randomFloat(-20,85)+"%",
                    '-webkit-transform':'scale('+randomFloat(5,10)/10+')',
                    'transform':'scale('+randomFloat(5,10)/10+')',
                    '-moz-transform':'scale('+randomFloat(5,10)/10+')'
                }).html("\<img src=\"public/images/bq/e/e10.png\"\>");
                $('#leaves').append(t_div);
            }

            function startMove(){
                $('.common').each(function(){
                    $(this).css({
                        'top':randomFloat(-10,85)+"%",
                        'left':randomFloat(-20,85)+"%",
                        '-webkit-transform':'scale('+randomFloat(5,10)/10+')',
                        'transform':'scale('+randomFloat(5,10)/10+')',
                        '-moz-transform':'scale('+randomFloat(5,10)/10+')'
                    })
                });
            }
            function keepAni(){
                var max_n = $('.common').length;
                startMove();
            }
            setInterval(keepAni,2000);

            return;
        }

        if( n == "e13" ){
            var html = '<img src=\"public/images/bq/e/e13.gif\" style="display:block;width:100%;margin:40% 0 0 0"/>';
            $("#leaves").html(html);
            return;
        }

        if( n == "e14" ){
            for(var i=0;i<9;i++){
                var img="<img src=\"public/images/bq/e/gt"+i+".png\" style='width:80px'/>";
                if(i%2==0){
                    $(img).css({
                        "position":"absolute",
                        "top":randomFloat(0,90)+"%",
                        "left":randomFloat(0,90)+"%",
                        "opacity":0,
                        "-webkit-animation": "star_14a " +randomFloat(12,15)+"s linear infinite " +randomFloat(0,2)+"s",
                    }).appendTo($("#leaves"));
                }else{
                    $(img).css({
                        "position":"absolute",
                        "top":randomFloat(0,90)+"%",
                        "left":randomFloat(0,90)+"%",
                        "opacity":0,
                        "-webkit-animation": "star_14b " +randomFloat(12,15)+"s linear infinite " +randomFloat(0,2)+"s",
                    }).appendTo($("#leaves"));
                }                
            }
            return;
        }

        if( n == "e15" ){
            var html = "<div id='deng1'><img  width='150' height='165' src='public/images/bq/e/e15.png'/></div>"
                        +"<div id='deng2'><img  width='180' height='198' src='public/images/bq/e/e15.png'/></div>"
                        +"<div id='deng3'><img  width='140' height='154' src='public/images/bq/e/e15.png'/></div>"
                        +"<div id='deng4'><img  width='130' height='143' src='public/images/bq/e/e15.png'/></div>"
                        +"<div id='deng5'><img  width='130' height='150' src='public/images/bq/e/e15.png'/></div>";
            $("#leaves").html(html);
            return;
        }

        if( n == "e17" ){
            var html = '<img src=\"public/images/bq/e/e17.gif\" style="display:block;width:100%;opacity:0.7"/>';
            $("#leaves").html(html);
            return;
        }
        
    }

    return {
        init:function(n){
            CreateStars(n);
        },
        clear:function(){//清除定时器
            clearInterval(timer);
        }
    }

})