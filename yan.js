window.onload = function(){
 	
 	function selectFrom ( start, end ) {//定义一个选随机数的函数
 		var choice = end - start + 1;

 		return Math.floor( Math.random() * choice + start );
 	}

 	
 	function fillZero ( num ) {  //定义一个函数来判断所选出的数字是否大于9 小于的话在前面加0
 		return num > 9 ? num.toString() : "0" + num;
 	}

 	
 	function getGroupNums ( total, start, end ) {  //定义一个函数用来在页面中显示的数字个数
 		
 		var tempArr = [];//定义一个空数组用来存放选出来的数字
 		
 		while ( tempArr.length < total ) {  //定义一个while循环
 			var randomNum = selectFrom( start, end );//声明一个变量把选出来的数字赋值给它
 			if ( !isInArray( randomNum ) ) {//如果isInArray( randomNum )为false
 				tempArr.push( randomNum );//把当前数字存放到数组
 			}
 		}
 		function isInArray ( num ) {  //定义一个函数用来判断当前选出来的数字是否和数组里存的数字一样
 			for ( var i = 0, len = tempArr.length; i < len; i++ ) {//定义一个for循环来遍历数组与当前选的数字比较
 				if ( tempArr[i] === num ) {//如果数组里存在数字和选的数字一样
 					return true;//返回 true
 				}
 			}
 			return false; //否则返回 false
 		}
 		return tempArr;//返回数组
 	}

 
 	function run () {  //定义一个函数用来把数组里的数字显示到页面中
 		var timer = setInterval(function(){//加一个计时器每50毫秒加载一次
 			var redBalls = getGroupNums( 6, 1, 33 );
 			var blueBall = getGroupNums( 1, 1, 16 );
 			var lis = document.getElementById( "box" ).getElementsByTagName( "li" );
 			for ( var i = 0, len = lis.length; i < len - 1; i++ ) {
 				lis[ i ].innerHTML = fillZero( redBalls[ i ] );
 			}
 			lis[ len - 1 ].innerHTML = fillZero( blueBall[ 0 ] );
 		}, 50 );
 		setTimeout(function(){//500毫秒后清除计时器
 			clearInterval( timer );
 		}, 500 );
 	}

 	
 	run();

 	
 	var btn = document.getElementById( "box" ).getElementsByTagName( "div" )[ 1 ];
 	btn.onclick = function() {
 		run();
 	};

 };
