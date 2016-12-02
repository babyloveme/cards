// JavaScript Document
define(function(){
	var counts=30;

	//随机整数
	function randomInteger(low,high){
		return low+Math.floor(Math.random()*(high-low))
	}
	//像素单位px
	function pixelValue( value ){
		return value+'px';
	}

	//时间单位s
	function durationValue( value ){
		return value+'s';
	}
	//随机浮点数
	function randomFloat(low,high){
		return low+Math.random()*(high-low);
	}

	//当前动画属性
	function createAleaf( num ){		
		switch( num ){
			case 1 :
				imgName='realLeaf';
				imgType='png';
				break;
			case 2 :
				imgName='snow';
			 	imgType='png';
			 	break;
			case 3 :
				imgName='meigui';
			 	imgType='png';
			 	break;
			case 4 :
				imgName='love';
			 	imgType='png';
			 	break;
			case 5 :
				imgName='missu';
			 	imgType='png';
			 	break;
			case 6 :
				imgName='xiaohua';
			 	imgType='gif';
			 	break;
			case 7 :
				imgName='lvzuan';
			 	imgType='png';
			 	break;
			case 8 :
				imgName='lianhua';
			 	imgType='png';
			 	break;
			case 9 :
				imgName='xinhua';
			 	imgType='png';
			 	break;
			case 10 :
				imgName='dangao';
			 	imgType='png';
			 	break;
			case 11 :
				imgName='hzuanshi';
			 	imgType='png';
			 	break;
			case 12 :
				imgName='hudie';
			 	imgType='png';
			 	break;
			case 13 :
				imgName='shuidi';
			 	imgType='png';
			 	break;
			case 14 :
				imgName='zhibi';
			 	imgType='png';
			 	break;
			case 15 :
				imgName='feiwen';
			 	imgType='png';
			 	break;
		}


		var leafDiv = document.createElement('div');
		var image = document.createElement('img');
		image.src='public/images/bq/'+imgName+randomInteger(1, 5)+'.'+imgType;
	            
	    image.onload=function(){
	        image.width=image.width*0.9;
	        image.height=image.height*0.9;
	    }

	    leafDiv.className = 'leafDiv'
		leafDiv.style.top='-50px';
		leafDiv.style.left = randomInteger(0,100)+"%";
		var spinAnimationName = (Math.random()<0.5) ? 'clockwiseSpin':'counterclockwiseSpinAndFlip';

		leafDiv.style.webkitAnimationName='fade,drop';
		image.style.webkitAnimationName=spinAnimationName;

		var fadeAndDropDuration = durationValue(randomFloat(5,11));
		var spinDuration = durationValue(randomFloat(4,8));
		leafDiv.style.webkitAnimationDuration = fadeAndDropDuration+', '+fadeAndDropDuration;

		var leafDelay = durationValue(randomFloat(0,8));

		leafDiv.style.webkitAnimationDelay = leafDelay+', '+leafDelay;

		image.style.webkitAnimationDuration=spinDuration;

		leafDiv.appendChild(image);

		return leafDiv;
	}
	return {

		//添加动画
		init : function( num ){

			//没有leaves div那就添加
	        if( !$("#leaves").length ){
	            $("body").append("<div id='leaves'></div>");
	        }   
	        //先清除原来,再追加(到时跳转可删除)
	        $("#leaves").html("");

			//选择动画前，先清除原来(到时跳转可删除)
			require(['leaf_ani'],function(m){ //清除定时器
				m.clear(); 
			});
			require(['aniFire'],function(m){ //清除定时器
				m.clear(); 
			});
			$("#e5Canvas,#e5Img,#fireCanvas").remove();
					
			if(num==0 || num=='0'){
				return;
			}
			for(var i=0; i<counts; i++){
				$("#leaves").append(createAleaf(num));
			}	
		}
	}
});