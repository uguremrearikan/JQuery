$(function()
{
    //alert("jquery ready!")
    //positionin puzzle pieces randomly  !!
    var topposArr=[]
    var leftposArr=[]
    var rightposArr=[]
    var bottomposArr=[]
    var zindexArr=[]
    var zindex;
    var posT,posL,posB,posR;
    var readyForMovement=false;
    var style0,style1,style2,style3,style4,style5,style6,style7,style8;
    var status;
    var bxstatus0=-1,bxstatus1=-1, bxstatus2=-1, bxstatus3=-1, bxstatus4=-1, bxstatus5=-1, bxstatus6=-1, bxstatus7=-1,bxstatus8=-1;
    var flag=0;
    var boxstyle=$(".box").css("backgroundImage");
    var  corPos0, corPos1, corPos2, corPos3, corPos4,corPos5, corPos6, corPos7, corPos8


   
    console.log(`FLAG:${flag} Boxstyle:${boxstyle} bxstatus:${bxstatus0}`)
  
    
   
    for(var i=0;i<9;i++)
    {
        posT=Math.floor(Math.random()*(201));
        posL=Math.floor(Math.random()*(201));
        posR=Math.floor(Math.random()*(201));
        posB=Math.floor(Math.random()*(201)); //0-200;
        zindex=Math.floor(Math.random()*(9))+1;//1-9;
        topposArr.push(posT);
        leftposArr.push(posL);
        rightposArr.push(posR);
        bottomposArr.push(posB);
        zindexArr.push(zindex);
        /*TESTED, WORKS CORRECTLY*/ 
    }
    //turn all number array into string array
    for(var i=0;i<9;i++)
    {
        topposArr[i]=topposArr[i]+'';
        leftposArr[i]=leftposArr[i]+'';
        rightposArr[i]=rightposArr[i]+'';
        bottomposArr[i]=bottomposArr[i]+'';
        zindexArr[i]=zindexArr[i]+'';
    }
    
    //SHUFFLE RANDOMLY-------------------------------------------------------------------------------------------------------------
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).css({top:topposArr[i]+"px",left:leftposArr[i]+"px",right:rightposArr[i]+"px",bottom:bottomposArr[i]+"px"}).css("z-index",zindexArr[i])
    }
   //------------------------------------------------------------------------------------------------------------------------------
   $("#pc-0").click(function(e){

    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");

   style0 =$(this).css("background-image");
   status=0;
   flag=1;
    console.log(`CSS:${style0} STATUS:${status} FLAG:${flag}`);
   })
   $("#pc-1").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");

   style1=$(this).css("background-image");
   status=1;
   flag=1;
    console.log(`CSS:${style1}  STATUS:${status} FLAG:${flag}`);
  })
  $("#pc-2").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");
    
   style2 =$(this).css("background-image");
   status=2;
   flag=1;
    console.log(`CSS:${style2} STATUS:${status} FLAG:${flag}`);
  })
  $("#pc-3").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");
   style3 =$(this).css("background-image");
   status=3;
   flag=1;
    console.log(`CSS:${style3} STATUS:${status} FLAG:${flag}`);
  })
  $("#pc-4").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");
   style4 =$(this).css("background-image");
   status=4;
   flag=1;
    console.log(`CSS:${style4} STATUS:${status} FLAG:${flag}`);
  })
  $("#pc-5").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");
     style5 =$(this).css("background-image");
     status=5;
     flag=1;
    console.log(`CSS:${style5} STATUS:${status} FLAG:${flag}`);
  })
  $("#pc-6").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");

   style6 =$(this).css("background-image");
   status=6;
   flag=1;
    console.log(`CSS:${style6} STATUS:${status} FLAG:${flag}`);
  })
  $("#pc-7").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");

     style7 =$(this).css("background-image");
     status=7;
     flag=1;
     console.log(`CSS:${style7} STATUS:${status} FLAG:${flag}`);
  
  })
  $("#pc-8").click(function(e){
    for(var i=0;i<9;i++)
    {
        $(`#pc-${i}`).removeClass("yellowClass");
    }
    $(this).addClass("yellowClass");

     style8 = $(this).css("background-image");
     status=8;
     flag=1;
     console.log(`CSS:${style8} STATUS:${status} FLAG:${flag}`);
    
    
  })
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#bx-0").click(function(e)
    {
      if(flag===1 && bxstatus0===-1){
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)//animate({opacity: '0%'},400)//stop().animate({opacity: '0%'},500).css("display","none")
                  bxstatus0=0;
                  flag=0; 
                  corPos0=1;
                  console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                  
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=1;
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`) 
                
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=2;
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag}`)
                 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=3;  
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=4;
                 flag=0; 
                 corPos0=-1; 
                 console.log(`FLAG:${flag}`)
                
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=5;
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=6
                 flag=0; 
                 corPos0=-1;  
                 console.log(`FLAG:${flag}`)
                
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=7
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=8
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                
          break;
  
        }
      }
      else if(flag===1 && bxstatus0!==-1)
      {
        switch(bxstatus0)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  console.log(`FLAG:${flag}`)
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0;  
                 console.log(`FLAG:${flag}`)
                 break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
                 console.log(`FLAG:${flag}`)
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0; 
                 console.log(`FLAG:${flag}`)
                 break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
                 console.log(`FLAG:${flag}`)
                 break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block")
                 
                 flag=0; 
                 console.log(`FLAG:${flag}`)
                 break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 
                 flag=0;   
                 console.log(`FLAG:${flag}`)
                 break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0; 
                 console.log(`FLAG:${flag}`)
                 break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0; 
                 console.log(`FLAG:${flag}`)
                 break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus0=0;
                  flag=0; 
                  corPos0=1;
                  console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                  break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=1;
                 corPos0=-1;
                 flag=0;  
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                  break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=2;
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=3;  
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=4;
                 flag=0;  
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=5;
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=6
                 flag=0;  
                 corPos0=-1; 
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=7
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                     break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus0=8
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                     break;
  
        }
      }
      else
      {
       
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus0)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  corPos0=-1;
                  console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                  bxstatus0=-1;
                  
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 corPos0=-1;
                 bxstatus0=-1;
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 corPos0=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 
                 bxstatus0=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;
                 corPos0=-1;

                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`) 
                 bxstatus0=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 corPos0=-1;

                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 bxstatus0=-1;
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 corPos0=-1;

                 console.log(`FLAG:${flag}`)
                 bxstatus0=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 corPos0=-1;
 
                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 bxstatus0=-1;
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 corPos0=-1;

                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 bxstatus0=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 corPos0=-1;

                 console.log(`FLAG:${flag} CorrectPos:${corPos0}`)
                 bxstatus0=-1;
          break;
          default:
            console.log(`boxstatus:${bxstatus0}`)
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
            for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $("p button").off("click")
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
             
             

      }
    })
    
    $("#bx-1").click(function(e){
      if(flag===1  && bxstatus1===-1){
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus1=0;
                  corPos1=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=1; 
                 corPos1=1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=2; 
                 corPos1=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)  
                 bxstatus1=3;
                 corPos1=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=4;
                 corPos1=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=5;
                 corPos1=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=6;
                 corPos1=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=7;
                 corPos1=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus1=8;
                 corPos1=-1;
                 flag=0; 
          break;
  
        }
      }
      else if(flag===1 && bxstatus1!==-1)
      {
        switch(bxstatus1)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus1=0;
                  corPos1=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=1;
                 corPos1=1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=2;
                 corPos1=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=3;
                 corPos1=-1; 
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=4;
                 corPos1=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=5;
                 corPos1=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=6
                 corPos1=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=7
                 corPos1=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus1=8
                 corPos1=-1;
                 flag=0; 
          break;
  
        }
      }
      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus1)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus1=-1;
                  corPos1=-1;
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus1=-1;
                 corPos1=-1;
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus1=-1;
                 corPos1=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");  
                 flag=0;
                 bxstatus1=-1;
                 corPos1=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus1=-1;
                 corPos1=-1;
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus1=-1;
                 corPos1=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;   
                 bxstatus1=-1;
                 corPos1=-1;
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus1=-1;
                 corPos1=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus1=-1;
                 corPos1=-1;
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             $("p button").off("click")
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
    $("#bx-2").click(function(e){
      if(flag===1 && bxstatus2===-1)
      {
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                   bxstatus2=0;
                   corPos2=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=1;
                 corPos2=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=2;
                 corPos2=1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus2=3;
                 corPos2=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=4;
                 corPos2=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=5;
                 corPos2=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=6;
                 corPos2=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus2=7;
                 corPos2=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=8;
                 corPos2=-1;
                 flag=0; 
          break;
  
        }
      }

      else if(flag===1 && bxstatus2!==-1)
      {
        switch(bxstatus2)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block")  
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus2=0;
                  corPos2=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=1;
                 corPos2=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=2;
                 corPos2=1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=3;
                 corPos2=-1;  
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=4;
                 corPos2=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=5;
                 corPos2=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=6
                 corPos2=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus2=7
                 corPos2=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus2=8
                 corPos2=-1;
                 flag=0; 
          break;
  
        }
      }

      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus2)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus2=-1;
                  corPos2=-1;
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus2=-1;
                 corPos2=-1;
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus2=-1;
                 corPos2=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");  
                 flag=0; 
                 bxstatus2=-1;
                 corPos2=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus2=-1;
                 corPos2=-1;
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus2=-1;
                 corPos2=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;   
                 bxstatus2=-1;
                 corPos2=-1;
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus2=-1;
                 corPos2=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus2=-1;
                 corPos2=-1;
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $("p button").off("click")
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
    $("#bx-3").click(function(e){
      if(flag===1 && bxstatus3===-1){
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus3=0;
                  corPos3=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=1;
                 corPos3=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=2;
                 corPos3=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus3=3;
                 corPos3=1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=4;
                 corPos3=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=5; 
                 corPos3=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=6;
                 corPos3=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=7;
                 corPos3=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=8;
                 corPos3=-1;
                 flag=0; 
          break;
  
        }
      }
      else if(flag===1 && bxstatus3!==-1)
      {
        switch(bxstatus3)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block")  
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus3=0;
                  corPos3=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus3=1;
                 corPos3=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus3=2;
                 corPos3=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=3; 
                 corPos3=1; 
                
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=4;
                 corPos3=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=5;
                 corPos3=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=6
                 corPos3=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus3=7
                 corPos3=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus3=8
                 corPos3=-1;
                 flag=0; 
          break;
  
        }
      }

      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus3)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus3=-1;
                  corPos3=-1;
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block") .removeClass("yellowClass");
                 flag=0; 
                 bxstatus3=-1;
                 corPos3=-1;
                  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus3=-1;
                 corPos3=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block") .removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus3=-1;
                 corPos3=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus3=-1;
                 corPos3=-1;
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block") .removeClass("yellowClass");
                 flag=0; 
                 bxstatus3=-1;
                 corPos3=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus3=-1; 
                 corPos3=-1;
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block") .removeClass("yellowClass");
                 flag=0; 
                 bxstatus3=-1;
                 corPos3=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus3=-1;
                 corPos3=-1;
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $("p button").off("click")
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
    $("#bx-4").click(function(e){
      if(flag===1 && bxstatus4===-1){
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus4=0;
                  corPos4=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus4=1;
                  corPos4=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus4=2;
                 corPos4=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=3;
                 corPos4=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=4;
                 corPos4=1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=5;
                 corPos4=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=6;
                 corPos4=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=7;
                 corPos4=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=8;
                 corPos4=-1;
                 flag=0; 
          break;
  
        }
      }
      else if(flag===1 && bxstatus4!==-1)
      {
        switch(bxstatus4)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block")  
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus4=0;
                  corPos4=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=1;
                 corPos4=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=2;
                 corPos4=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=3;  
                 corPos4=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=4;
                 corPos4=1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus4=5;
                 corPos4=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus4=6
                 corPos4=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus4=7
                 corPos4=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus4=8
                 corPos4=-1;
                 flag=0; 
          break;
  
        }
      }
      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus4)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus4=-1;
                  corPos4=-1;
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus4=-1;
                 corPos4=-1;
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus4=-1;
                 corPos4=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");  
                 flag=0; 
                 bxstatus4=-1;
                 corPos4=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus4=-1;
                 corPos4=-1;
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus4=-1;
                 corPos4=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;
                 bxstatus4=-1;  
                 corPos4=-1; 
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block") .removeClass("yellowClass");
                 flag=0; 
                 bxstatus4=-1;
                 corPos4=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus4=-1;
                 corPos4=-1;
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             $("p button").off("click")
             for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
    $("#bx-5").click(function(e){
      if(flag===1 && bxstatus5===-1){
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus5=0;
                   corPos5=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=1
                 corPos5=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=2
                 corPos5=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200) .hide(200) 
                 bxstatus5=3
                 corPos5=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=4
                 corPos5=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=5
                 corPos5=1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=6
                 corPos5=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=7
                 corPos5=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus5=8
                 corPos5=-1;
                 flag=0; 
          break;
  
        }
      }
      else if(flag===1 && bxstatus5!==-1)
      {
        switch(bxstatus5)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},200).css("display","block")
                  flag=0; 
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus5=0;
                  corPos5=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=1;
                 corPos5=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus5=2;
                 corPos5=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=3; 
                 corPos5=-1; 
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=4;
                 corPos5=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200) 
                 bxstatus5=5;
                 corPos5=1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=6
                 corPos5=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=7
                 corPos5=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus5=8
                 corPos5=-1;
                 flag=0; 
          break;
  
        }
      }
      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus5)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus5=-1;
                  corPos5=-1;
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0;  
                 bxstatus5=-1;
                 corPos5=-1;
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus5=-1;
                 corPos5=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block") .removeClass("yellowClass");
                 flag=0; 
                 bxstatus5=-1;
                 corPos5=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus5=-1;
                 corPos5=-1;
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus5=-1;
                 corPos5=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus5=-1; 
                 corPos5=-1;
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus5=-1;
                 corPos5=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus5=-1;
                 corPos5=-1;
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             $("p button").off("click")
             for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
    $("#bx-6").click(function(e){
      if(flag===1 && bxstatus6===-1){
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus6=0
                  corPos6=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=1
                 corPos6=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=2
                 corPos6=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=3
                 corPos6=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=4
                 corPos6=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=5
                 corPos6=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=6
                 corPos6=1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=7
                 corPos6=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=8
                 corPos6=-1;
                 flag=0; 
          break;
  
        }
      }
      else if(flag===1 && bxstatus6!==-1)
      {
        switch(bxstatus6)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block")  
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus6=0;
                  corPos6=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=1;
                 corPos6=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=2;
                 corPos6=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=3;  
                 corPos6=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=4;
                 corPos6=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=5;
                 corPos6=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=6
                 corPos6=1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=7
                 corPos6=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus6=8
                 corPos6=-1;
                 flag=0; 
          break;
  
        }
      }
      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus6)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus6=-1;
                  corPos6=-1;
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus6=-1;
                 corPos6=-1;
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus6=-1;
                 corPos6=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus6=-1;
                 corPos6=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;
                 bxstatus6=-1; 
                 corPos6=-1; 
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus6=-1;
                 corPos6=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus6=-1;
                 corPos6=-1; 
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus6=-1;
                 corPos6=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;
                 bxstatus6=-1; 
                 corPos6=-1;
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $("p button").off("click")
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
    $("#bx-7").click(function(e){
      if(flag===1 && bxstatus7===-1 ){
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus7=0
                  corPos7=-1;
                   console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=1
                  corPos7=-1;
                  console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=2
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=3
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=4
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=5
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=6
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=7
                 corPos7=1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus7=8
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
  
        }
      }
      else if(flag===1 && bxstatus7!==-1)
      {
        switch(bxstatus7)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500) .css("display","block") 
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus7=0;
                  corPos7=-1;
                  console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=2;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=3;
                 corPos7=-1;  
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=4;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=5;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=6
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus7=7
                 corPos7=1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus7=8
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                 flag=0; 
          break;
  
        }
      }
      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus7)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus7=-1;
                  corPos7=-1;
                  console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0;  
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");  
                 flag=0; 
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;   
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus7=-1;
                 corPos7=-1;
                 console.log(`FLAG:${flag} CorrectPos:${corPos7}`)
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $("p button").off("click")
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
    $("#bx-8").click(function(e){
      if(flag===1 && bxstatus8===-1){
        switch(status)
        {
          case 0: $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus8=0
                  corPos8=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=1
                 corPos8=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=2
                 corPos8=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200)  .hide(200)
                 bxstatus8=3
                 corPos8=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=4
                 corPos8=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus8=5
                 corPos8=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=6
                 corPos8=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=7
                 corPos8=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=8
                 corPos8=1;
                 flag=0; 
          break;
  
        }
      }
      else if(flag===1 && bxstatus8!==-1)
      {
        switch(bxstatus8)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block")
                  flag=0; 
                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0;  
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block") 
                 flag=0; 
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block")  
                 flag=0; 
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;  
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block")
                 flag=0;   
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500) .css("display","block")
                 flag=0; 
          break;
        }
        switch(status)
        {
          case 0: 
                  $(this).css("backgroundImage",style0)
                  $("#pc-0").stop().animate({opacity: '0%'},200).hide(200)
                  bxstatus8=0;
                  corPos8=-1;
                  flag=0; 
          break;
          case 1:$(this).css("backgroundImage",style1)
                 $("#pc-1").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=1;
                 corPos8=-1;
                 flag=0;  
          break;
          case 2:$(this).css("backgroundImage",style2) 
                 $("#pc-2").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=2;
                 corPos8=-1;
                 flag=0; 
          break;
          case 3:$(this).css("backgroundImage",style3)
                 $("#pc-3").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=3;  
                 corPos8=-1;
                 flag=0; 
          break;
          case 4:$(this).css("backgroundImage",style4) 
                 $("#pc-4").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=4;
                 corPos8=-1;
                 flag=0;  
          break;
          case 5:$(this).css("backgroundImage",style5) 
                 $("#pc-5").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=5;
                 corPos8=-1;
                 flag=0; 
          break;
          case 6:$(this).css("backgroundImage",style6)
                 $("#pc-6").stop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=6
                 corPos8=-1;
                 flag=0;   
          break;
          case 7:$(this).css("backgroundImage",style7) 
                 $("#pc-7").stop().animate({opacity: '0%'},200) .hide(200)
                 bxstatus8=7
                 corPos8=-1;
                 flag=0; 
          break;
          case 8:$(this).css("backgroundImage",style8) 
                 $("#pc-8").hstop().animate({opacity: '0%'},200).hide(200)
                 bxstatus8=8
                 corPos8=1;
                 flag=0; 
          break;
  
        }
      }
      else{
        $(this).css("backgroundImage",boxstyle)
        switch(bxstatus8)
        {
          case 0:$("#pc-0").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                  flag=0; 
                  bxstatus8=-1;
                  corPos8=-1;

                  break;
          case 1:
                 $("#pc-1").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus8=-1;
                 corPos8=-1;
          break;
          case 2:
                 $("#pc-2").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus8=-1;
                 corPos8=-1;
          break;
          case 3:
                 $("#pc-3").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");  
                 flag=0; 
                 bxstatus8=-1;
                 corPos8=-1;
          break;
          case 4:
                 $("#pc-4").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;  
                 bxstatus8=-1;
                 corPos8=-1;
          break;
          case 5:
                 $("#pc-5").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass"); 
                 flag=0; 
                 bxstatus8=-1;
                 corPos8=-1;
          break;
          case 6:
                 $("#pc-6").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0;   
                 bxstatus8=-1;
                 corPos8=-1;
          break;
          case 7:
                 $("#pc-7").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus8=-1;
                 corPos8=-1;
          break;
          case 8:
                 $("#pc-8").stop().animate({opacity: '100%'},500).css("display","block").removeClass("yellowClass");
                 flag=0; 
                 bxstatus8=-1;
                 corPos8=-1;
          break;
        }
      }
      if(corPos0===1 && corPos1===1 && corPos2===1 && corPos3===1 && corPos4===1 && corPos5===1 && corPos6===1 && corPos7===1 && corPos8===1)
      {
             console.log("MONALISAAA")
             $("#finish").fadeIn(2000).delay(2000).fadeOut(1000)
             for(var i=0;i<9;i++)
            {
                   $(`#bx-${i}`).off("click");
            }
             $("p button").off("click")
             $(".tinybox-1").removeClass("displayTinyBox");
             $(".tinybox-2").removeClass("displayTinyBox");
      }
    })
   
   
   

    //HINT BUTTON////////////////////////////////////////////////////////////////////////////
    $("p button").click(function(){
        $(".tinybox-1").toggleClass("displayTinyBox");
        $(".tinybox-2").toggleClass("displayTinyBox");
    })
    ////////////////////////////////////////////////////////////////////////////////////////
})