var abegin = getStorage("abegin");
var infoarray = getStorage("infoarray");
var cardinfoarray = getStorage("cardinfoarray");

function getStorage(name,fun){

  chrome.storage.local.get(name, function(val){
    //console.log("0+1"+val[name]);
    if (fun) {
      fun(val);
    } else {
      window[name] = val[name];
      return val[name];
    };
  });

};
//设置cookie方法
function setCookie(c_name,value,expiretime)
{
    var exdate=new Date();
    exdate.setTime(exdate.getTime()+expiretime);
    document.cookie=c_name+ "=" +escape(value)+
    ((expiretime==null) ? "" : ";expires="+exdate.toGMTString());
};
//获取cookie方法
function getCookie(c_name)
{
    var c_start,c_end;
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        { 
            c_start=c_start + c_name.length+1 
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
};
$(function() {
  var this_url=window.location.href;
setTimeout(function() {

  if ($("input[name='registration_step']").length > 0) {

        abegin=abegin-1;
        console.log(abegin);
        console.log(infoarray);
        var oneinfo = new Array();
        var onestr = infoarray[abegin] || "";
        
        oneinfo = onestr.split("\t");
        console.log(cardinfoarray);
        var twoinfo = new Array();
        var twostr = cardinfoarray[0] || "";
        twoinfo = twostr.split("\t");
        console.log(twoinfo);

        /*if (!onestr && !twostr) {
           alert('没有值了');
           return false;
        };*/
      // console.log('in-1'+abegin);
      // console.log('in-2'+infoarray);
      if(onestr){
          if ($("input[name='email']").length > 0) {
            // console.log('2'+abegin);
            // console.log('3'+infoarray);
            // var oneinfo = new Array();
            
            $("input[name='email']").val(oneinfo[1]);

            $("input[name='submit']").focus();
          }

          if ($("input[name='c_email']").length > 0) {
            // console.log('2'+abegin);
            // console.log('3'+infoarray);
            // var oneinfo = new Array();
            
            $("input[name='c_email']").val(oneinfo[1]);

            $("input[name='agree']").focus();
          }


          if ($("input[name='fname']").length > 0) {
            // var oneinfo = new Array();
            // console.log("abegin"+abegin);
            // var oneinfo = new Array();
            // var onestr = infoarray[abegin] || "";
            // if (!onestr) {
            //    alert('没有值了');
            //    return false;
            // };
            // oneinfo = onestr.split("\t");
            
            $("input[name='fname']").val(oneinfo[3]);
            $("input[name='lname']").val(oneinfo[4]);
            $("select[name='status']").val('2');
            $("input[name='institution']").val(oneinfo[5]);
            $("input[name='institution_type']").get(0).checked=true;
            $("input[name='department']").val(oneinfo[7]);
            $("input[name='address1']").val(oneinfo[8]);
            $("input[name='zip']").val(oneinfo[9]);
            $("input[name='city']").val(oneinfo[10]);
            $("select").find("option[text='Other']").attr("selected",true);
            $("select[name='country']").val('Other');
            $("input[name='countryother']").val('China');

            $("input[name='phone']").val(oneinfo[13]);
            $("input[name='password']").val(oneinfo[2]);
            $("input[name='c_password']").val(oneinfo[2]);
            $("input[name='state']").val(oneinfo[11]);
            // $("input[name='lname']").val(oneinfo[4]);
            // $("input[name='lname']").val(oneinfo[4]);
            // $("input[name='lname']").val(oneinfo[4]);

            $("input[name='submit']").focus();
          }
      }
      if(twostr){
        // 信用卡
        if ($("input[name='cardno']").length > 0) {
          // console.log(1111111);
          // var oneinfo = new Array();
          // console.log("abegin"+abegin);
          // var oneinfo = new Array();
          // var onestr = infoarray[abegin] || "";
          // if (!onestr) {
          //    alert('没有值了');
          //    return false;
          // };
          // oneinfo = onestr.split("\t");
          
          // $("input[name='cardtype']:eq(0)").attr("checked",'checked'); 
          // $("input[name='cardtype']").val('visa');
          // $("select[name='expmonth']").find("option[value='1']").attr("selected",true);
          // $("select[name='expmonth']").val('1');
          // $("select[name='expyear']").find("option[value='2021']").attr("selected",true);
          // $("select[name='expyear']").val('2021');
          // $("input[name='cardno']").val('4512893475013117');
          // $("input[name='name']").val('LiFeng Ren');

          // $("input[name='address']").val('XierQi Huihuangguoji 2-704');
          // $("input[name='city']").val('Beijing');
          // $("input[name='state']").val('Beijing');
          // $("input[name='zip']").val('100000');
          // $("input[name='country']").val('China');
          // $("input[name='paynow']").focus();
          /*$("input[name='cardtype']:eq(0)").attr("checked",'checked'); 
          $("input[name='cardtype']").val('visa');
          $("select[name='expmonth']").find("option[value='5']").attr("selected",true);
          $("select[name='expmonth']").val('5');
          $("select[name='expyear']").find("option[value='2020']").attr("selected",true);
          $("select[name='expyear']").val('2020');
          $("input[name='cardno']").val('4392250036762143');
          $("input[name='name']").val('HUA WANG');

          $("input[name='address']").val('Beijing');
          $("input[name='city']").val('Beijing');
          $("input[name='state']").val('Beijing');
          $("input[name='zip']").val('100000');
          $("input[name='country']").val('China');*/
          if(twoinfo[0]=='visa'){
              $("input[name='cardtype']:eq(0)").prop("checked",true); 
              $("input[name='cardtype']").val('visa');
          }
          if(twoinfo[0]=='mc'){
              $("input[name='cardtype']:eq(1)").prop("checked",true); 
              $("input[name='cardtype']").val('mc');
          }
          $("select[name='expmonth']").find("option[value='"+twoinfo[1]+"']").attr("selected",true);
          $("select[name='expmonth']").val(twoinfo[1]);
          $("select[name='expyear']").find("option[value='"+twoinfo[2]+"']").attr("selected",true);
          $("select[name='expyear']").val(twoinfo[2]);
          $("input[name='cardno']").val(twoinfo[3]);
          $("input[name='name']").val(twoinfo[4]+' '+twoinfo[5]);

          $("input[name='address']").val(twoinfo[6]);
          $("input[name='city']").val(twoinfo[7]);
          $("input[name='state']").val(twoinfo[8]);
          $("input[name='zip']").val(twoinfo[9]);
          $("input[name='country']").val(twoinfo[10]);
          $("input[name='cardccv']").val(twoinfo[11]);
          $("input[name='paynow']").focus();
          // chrome.storage.local.set({"abegin":abegin});
        }
      }
  };
  
  if(this_url=='http://www.comap.com/undergraduate/contests/mcm/team-enter-names.php'){
      //alert(123);
      abegin=abegin-1;
      console.log(abegin);
      console.log(infoarray);
      var oneinfo = new Array();
      var onestr = infoarray[abegin] || "";
      /*if (!onestr) {
         alert('没有值了');
         return false;
      };*/
      oneinfo = onestr.split("\t");
      console.log(oneinfo);
      var expiretime=30*60*1000;//cookie过期时间是30分钟
      if(onestr){
        if($("input[name='fname']").length==0){
          if($("input[name='cancel']").length==0){
            var mlen=$('center').eq(1).find('table').eq(0).find('tr').length-2;
            var next_index=18;
            if(mlen>0){
                next_index=18+(mlen*7);
            }
            alert(next_index);
            setCookie('next_index',next_index,expiretime);
          }
        }

        if($("input[name='fname']").length>0){
          /*$("input[name='fname']").val(oneinfo[18]);
          $("input[name='lname']").val(oneinfo[19]);
          if(oneinfo[20]=='M（男）'){
            $("select[name='gender']").val('M');
          }
          if(oneinfo[20]=='F（女）'){
            $("select[name='gender']").val('F');
          }
          $("input[name='email']").val(oneinfo[22]);*/
          var next_index=getCookie("next_index");
          //alert(next_index);
          if(next_index<=32&&oneinfo[next_index].length>0){
            $("input[name='fname']").val(oneinfo[next_index]);
            $("input[name='lname']").val(oneinfo[parseInt(next_index)+1]);
            if(oneinfo[parseInt(next_index)+2]=='M（男）'||oneinfo[parseInt(next_index)+2]=='M'){
              $("select[name='gender']").val('M');
            }
            if(oneinfo[parseInt(next_index)+2]=='F（女）'||oneinfo[parseInt(next_index)+2]=='F'){
              $("select[name='gender']").val('F');
            }
            $("input[name='email']").val(oneinfo[parseInt(next_index)+4]);
          }
        }
      }
  }
  
  if ($("input[name='login']").length > 0) {
    abegin=abegin-1;
    console.log(abegin);
    console.log(infoarray);
    var oneinfo = new Array();
    var onestr = infoarray[abegin] || "";
    if (!onestr) {
       alert('没有值了');
       return false;
    };
    oneinfo = onestr.split("\t");

    $("input[name='email']").val(oneinfo[1]);
    $("input[name='password']").val(oneinfo[2]);
    /*abegin=abegin+2;
    chrome.storage.local.set({"abegin":abegin});*/
  };

}, 1000);

});

