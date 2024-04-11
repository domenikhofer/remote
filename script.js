var c = $("#canvas").get(0);
var ctx = c.getContext("2d");


var imageObj = new Image();
var bgImg = new Image();

imageObj.onload = function() {

    c.setAttribute("width","540px");
    c.setAttribute("height","980px");
    var ctx = c.getContext("2d");      

    ctx.drawImage(bgImg,0, 0,540,980);

    ctx.drawImage(imageObj,50, 50,175,875);

};
imageObj.src = 'img/tv_BG.png';


bgImg.src = 'img/wood.jpg';




for(var i = 1; i < 23; i++){
    $("#container").append("<div class='box' id='tv_"+i+"'></div>");
    $("#tv_"+i).css("background-image","url(img/tv_"+i+".png)");
    $("#tv_"+i).css("background-size","cover");
    $("#tv_"+i).css("float","right");            
    $("#tv_"+i).css("width","39px");
    $("#tv_"+i).css("height","39px"); 
    $("#tv_"+i).css("cursor","move");     
}

$("#container").append("<div class='box' id='tv_23'></div>");
$("#tv_23").css("background-image","url(img/tv_23.png)");
$("#tv_23").css("background-size","cover");
$("#tv_23").css("float","right");
$("#tv_23").css("width","39px");
$("#tv_23").css("height","89px"); 
$("#tv_23").css("cursor","move");

$("#container").append("<div class='box' id='tv_26'></div>");
$("#tv_26").css("background-image","url(img/tv_26.png)");
$("#tv_26").css("background-size","cover");
$("#tv_26").css("float","right");
$("#tv_26").css("width","39px");
$("#tv_26").css("height","89px"); 
$("#tv_26").css("cursor","move");

$("#container").append("<div class='box' id='tv_24'></div>");
$("#tv_24").css("background-image","url(img/tv_24.png)");
$("#tv_24").css("background-size","cover");
$("#tv_24").css("background-position","center center");
$("#tv_24").css("float","right");
$("#tv_24").css("width","139px");
$("#tv_24").css("height","39px"); 
$("#tv_24").css("cursor","move");

$("#container2").append("<div class='box' id='tv_25'></div>");
$("#tv_25").css("background-image","url(img/tv_25.png)");
$("#tv_25").css("background-size","132px 139px");
$("#tv_25").css("background-repeat","no-repeat");
$("#tv_25").css("background-position","center center");
$("#tv_25").css("float","right");
$("#tv_25").css("width","139px");
$("#tv_25").css("height","139px"); 
$("#tv_25").css("cursor","move");




var posleft = 0;
var postop = 0;

var posleftinit = 0;
var postopinit = 0;

var positions = new Array();

var boxpos = 0;

var offsetleft = 0;
var offsettop = 0;

var down = false;

var box;

var counter = 1;


function hideManual() {

    $("#text").fadeOut();

};

function reload() {



    location.reload();

};

function help(){

    $("#text").fadeIn(500);    

};


$(".box").mouseup(function(event){

  //  var posl = (Math.round(posleft / 50) * 50);
//    var post = (Math.round(postop / 50) * 50);

    //positions.push(posl+"/"+post);


    $("#mark").fadeOut(500);
    $(document).unbind();
    down = false;
    
 // var index = positions.indexOf(posl+"/"+post);


    
// if(index>-1){ 
//   $(this).animate({left:'0', top: '0'},500,"swing");  
//}; 
   


    if($(this).attr("id")=="tv_24"){

        if(event.pageX<200&&event.pageX>75&&event.pageY>70&&event.pageY<870){

          //  positions.push(posl+"/"+post);
          //  positions.push((posl+50)+"/"+post); 
         //   positions.push((posl+100)+"/"+post); 

            $(this).offset({left:65 , top:postop-8});
        }else{
            //$(this).css({'left':'0', top: '0'});
            $(this).animate({left:'0', top: '0'},500,"swing");

        };


    }else if($(this).attr("id")=="tv_25"){




        if(event.pageX<200&&event.pageX>75&&event.pageY>70&&event.pageY<730){


         //   for(var i = 0; i<101; i+=50){        
         //       for(var j = 0; j<101; j+=50){                
         //           positions.push((posl+i)+"/"+(post+j));             
         //       };        
         //   };


            $(this).offset({left:65 , top:postop-8});
        }else{
            //$(this).css({'left':'0', top: '0'});
            $(this).animate({left:'0', top: '0'},500,"swing");

        };


    }else if($(this).attr("id")=="tv_23" || $(this).attr("id")=="tv_26"){



        if(event.pageX<200&&event.pageX>75&&event.pageY>70&&event.pageY<820){
        //    positions.push(posl+"/"+post);
        //    positions.push(posl+"/"+(post+50));
            $(this).offset({left:posleft-19 , top:postop-8});
        }else{
            //$(this).css({'left':'0', top: '0'});
            $(this).animate({left:'0', top: '0'},500,"swing");

        };


    }else{




        //  var index = positions.indexOf(posl+"/"+post);

        // if (index > -1) {
        //    positions.splice(index, 1);
        //};


        if(event.pageX<200&&event.pageX>75&&event.pageY>70&&event.pageY<870){
         //   positions.push(posl+"/"+post);
            $(this).offset({left:posleft-19 , top:postop-8});
        }else{
            //$(this).css({'left':'0', top: '0'});
            $(this).animate({left:'0', top: '0'},500,"swing");

        };


    };    




   // console.log(positions);



});



$(".box").mousedown(function(event){
    
    $(this).css("z-index",++counter);
    
    if($(this).attr("id")=="tv_25"){
    $("#container2").css("z-index",++counter);
    
    }else{
    $("#container").css("z-index",++counter);
    
    };
    
    
    
    
    if(event.pageX<200&&event.pageX>75&&event.pageY>70&&event.pageY<870){


    //    var posl = (Math.round($(this).offset().left / 50) * 50);
    //    var posl2 = posl + 50;
    //    var post = (Math.round($(this).offset().top / 50) * 50);



        if($(this).attr("id")=="tv_23" || $(this).attr("id")=="tv_26"){

        /*    var index = positions.indexOf(posl2+"/"+post);


            if (index > -1) {
                positions.splice(index, 1);
            };

            var index = positions.indexOf(posl2+"/"+(post+50));


            if (index > -1) {
                positions.splice(index, 1);
            };

*/



        }else if($(this).attr("id")=="tv_25"){


    /*      for(var i = 0; i<101; i+=50){        
                for(var j = 0; j<101; j+=50){ 
                    
                    var index = positions.indexOf((posl2+i)+"/"+(post+j));


            if (index > -1) {
                positions.splice(index, 1);
            };
                    
                                
                };        
            };  
            
            
        */    


        }else if($(this).attr("id")=="tv_24"){

/*
            var index = positions.indexOf(posl2+"/"+post);


            if (index > -1) {
                positions.splice(index, 1);
            };

            var index = positions.indexOf((posl2+50)+"/"+post);


            if (index > -1) {
                positions.splice(index, 1);
            };

            var index = positions.indexOf((posl2+100)+"/"+post);


            if (index > -1) {
                positions.splice(index, 1);
            };
*/

        }else{
/*
            var index = positions.indexOf(posl2+"/"+post);


            if (index > -1) {
                positions.splice(index, 1);
            };


*/

        };






    //    console.log(positions);

    };    


    box = $(this);
    down = true;
    var clickedBox = $(this);
    var boxpos1 = $(this).position();
    var boxoffset = $(this).offset();
    posleftinit = boxpos1.left;
    postopinit = boxpos1.top;


    offsetleft = boxoffset.left;
    offsettop = boxoffset.top;


  /*  var index = positions.indexOf((posleftinit+19)+"/"+(postopinit+19));
    if (index > -1) {
        positions.splice(index, 1);
    }
*/
    $(document).mousemove(function(event){

        if(down==true){
            $(clickedBox).offset({left:event.pageX-19 , top:event.pageY-19});
            posleft =  (Math.round(event.pageX / 50) * 50)-15;
            postop = (Math.round(event.pageY / 50) * 50)-15;
        }
        if(event.pageX<200&&event.pageX>75&&event.pageY>80&&event.pageY<870){
            $("#mark").show();
            $("#mark").offset({left: posleft-25, top: postop-12.5});    
        }else{
            $("#mark").fadeOut(500);
        }; 

        if((box.attr('id')=='tv_26'||box.attr('id')=='tv_23') && event.pageY<820 ){
            $("#mark").css("height","100px");
            $("#mark").css("width","50px");      

        }else if((box.attr('id')=='tv_26'||box.attr('id')=='tv_23') && event.pageY>820 ){
            $("#mark").hide();      

        }else if(box.attr('id')=='tv_24'){
            $("#mark").css("height","50px");  
            $("#mark").css("width","150px");
            $("#mark").offset({left: 60});    
        }else if(box.attr('id')=='tv_25' && event.pageY<720){
            $("#mark").css("width","150px");
            $("#mark").css("height","150px");
            $("#mark").offset({left: 60});  
        }else if(box.attr('id')=='tv_25' && event.pageY>720){
            $("#mark").hide(); 
        }else{
            $("#mark").css("height","50px");
            $("#mark").css("width","50px");
        }; 

    }); 



});



function download() {
    
    $("#container2").css("z-index",0);
    $("#container").css("z-index",0);
    

    $("#outro").show();    

    $(".box").each(function(){

        //  if($(this).offset().left>200){
        //$(this).remove();
        //  };
        
    /*    var name = $("input").val();
        
ctx.font = "30px Passion One";
ctx.fillText("Designed by: ",50,950);
ctx.fillText(name,150,950);        

*/
        var source = $(this).css("background-image").split("/");         

        var sourcelink = source[source.length-2]+"/"+source[source.length-1];          
        var img = new Image();            
        img.src = sourcelink.slice(0,-2);

        if(sourcelink.slice(0,-2)=="img/tv_23.png"){  
            ctx.drawImage(img,$(this).position().left+310,$(this).position().top+300,39,89);
        }else if(sourcelink.slice(0,-2)=="img/tv_26.png"){  
            ctx.drawImage(img,$(this).position().left+310,$(this).position().top+300,39,89);
        }else if(sourcelink.slice(0,-2)=="img/tv_24.png"){  
            ctx.drawImage(img,$(this).position().left+310,$(this).position().top+300,139,39);
        }else if(sourcelink.slice(0,-2)=="img/tv_25.png"){  
            ctx.drawImage(img,$(this).position().left+350,$(this).position().top+480,132,139);
        }else{
            ctx.drawImage(img,$(this).position().left+310,$(this).position().top+300,39,39);
        };

    }); 

    var overlay = new Image();
    overlay.src = 'img/overlay2.png';

    overlay.onload = function(){
        ctx.drawImage(overlay,0,0,540,980);


        var dt = canvas.toDataURL('image/png');


        if (canvas.msToBlob) { //for IE

            //   $(".box").each(function(){
            //    $(this).remove();
            //    });

            var blob = canvas.msToBlob();
            window.navigator.msSaveBlob(blob, 'MeineFernbedienung.png');
        } else {

            // $(".box").each(function(){
            //$(this).remove();
            //});


            //other browsers
            // this.href = canvas.toDataURL('image/png');
            //document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 

            var link = document.createElement('a');
            link.download = "MeineFernbedienung.png";
            link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
            link.click();    

        }    

    };






};
downloadLnk.addEventListener('click', download, false);




