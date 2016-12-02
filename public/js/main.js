// JavaScript Document
require.config({
    baseUrl:'public/js/src'
})
$(function(){

	//播放音乐
    var firstTouch = true;
    $("body").bind("touchstart", function(){
        if( firstTouch ){
            document.getElementById("playmusic").play();
            $("#music").addClass("musicAni");
            firstTouch = false;
        }
    });
    $("#music").bind("touchstart", function(){
        var playmusic = document.getElementById("playmusic");
        if( playmusic.paused ){
            playmusic.play();
            $(this).addClass("musicAni");
        }else{
            playmusic.pause();
            $(this).removeClass("musicAni");
        }
    });


	//打开导航
	$("#addMore-open").bind("touchstart",function(){
		$("#addMore-close").removeClass("addMore_none").addClass("addMore_ani").show();
		$("#menu").removeClass("fadeOut").addClass("fadeIn visible");
		$("#menu .nav li").removeClass("flipOutX").addClass("animated flipInX");
	});
	//关闭导航
	bindEventMenu();

	//导航
	$("#menu .nav li").bind("touchstart", function(){

		var text = $(this).text();
		$("#menu .nav,#addMore-close").hide();		

		if( text == "更换图片" ){
			require(['replaceAni'],function(m){					
				m.addImgBg(); //添加更换图片
			});
		}

		if( text == "更换音乐" ){
			require(['replaceAni'],function(m){					
				m.addMusic(); //添加更换音乐
			});
		}

		if( text == "更换动画" ){
			require(['replaceAni'],function(m){					
				m.addAniEl(); //添加更换动画元素
			});
		}

		if( text == "烟花文字" ){
			require(['fireworks'],function(m){
				m.addEidt(); //添加烟花文字元素
			});
		}

		return false;
	});
	
})

//选择图片
function changePicture(obj){	
	var url = $(obj).attr("data-url");
	$("#bg").attr("src", url);
	
	closeAni(); //关闭当前动画层
	closeMenu(); //关闭导航
}

//选择音乐
function selectMusic(obj){
	var name = $(obj).attr("data-name");
	if( name == "" || name == undefined || name == null ){
		$("#music").hide();
		document.getElementById("playmusic").pause();
	}else{
		$("#music").show();
		document.getElementById("playmusic").play();
	}
	$("#playmusic").attr("src", "public/mp3/"+name);

	closeAni(); //关闭当前动画层
	closeMenu(); //关闭导航
}

function selFire(){
	require(['aniFire'],function(m){
		m.init(); //更换动画
	});

	closeAni(); //关闭当前动画层
	closeMenu(); //关闭导航
}

//选择动画效果
function selFlash(n){
	if( !isNaN(n) ){
		require(['leaf'],function(m){
			m.init(n); //更换动画
		});
	}else{
		require(['leaf_ani'],function(m){
			m.init(n); //带e更换动画
		});
	}
	closeAni(); //关闭当前动画层
	closeMenu(); //关闭导航
	
}

//关闭导航
function closeMenu(){
	$("#addMore-close").hide();
	$("#menu").removeClass("fadeIn visible")
	$("#menu .nav li").addClass("flipOutX");
}

//关闭动画层
function closeAni(){
    $("#menu .replaceAnimate").remove();
    $("#menu .nav,#addMore-close").show();
    bindEventMenu(); //重新添加绑定事件
}

//重新绑定事件||关闭导航层
function bindEventMenu(){

	$("#menu,#addMore-close").bind("touchstart",function(){
		
		$("#addMore-close").removeClass("addMore_none").addClass("addMore_none");
		$("#menu .nav li").removeClass("flipInX").addClass("flipOutX");

		setTimeout(function(){
			$("#menu").removeClass("fadeIn").addClass("fadeOut");			
			setTimeout(function(){													
				$("#menu").removeClass("visible");
				$("#addMore-close").hide();	//放这里有bug，可移出去
			},150);			
		},150);

	});
	

}

//烟花文字效果
function toSubmit(){ 
	var explodeText=$("#explodeText").val().replace(/(^\s*)|(\s*$)/g,'');
    if( explodeText == "" ){
    	tipText("请输入内容");
        return;
    }    
    window.explodeText = explodeText;
    
    require(['fireworks'],function(m){    	
		m.initAnimate()
	});

    closeAni();//关闭动画层
	closeMenu();//关闭导航
}

//弹出层提示
function tipText(text){
	if (!$("#saveDivText").length) {
		$("body").append('<div id="saveDivText"></div>');
	}
	if( $("#saveDivText").css("display") == "none" ){
		$("#saveDivText").text(text).show().css("margin-left",-$("#saveDivText").width()/2);	
		setTimeout(function(){$("#saveDivText").remove();},2000);
	}	
}
