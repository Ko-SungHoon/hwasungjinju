function fn_getPage(page){
    var html = fn_htmls(page);
    var titleStr = "";

    if(page == 'main'){             
        titleStr = "" ;         
        document.querySelector("#map").style.left = "-999999px";      
    }
    else if(page == 'intro'){       
        titleStr = "회사소개";   
        document.querySelector("#map").style.left = "-999999px";     
    }
    else if(page == 'location'){    
        titleStr = "오시는길";  
        document.querySelector("#map").style.left = "0px";    
    }
    else if(page == 'work'){       
         titleStr = "업무소개";   
         document.querySelector("#map").style.left = "-999999px";    
    }    

    document.querySelector("#titleStr").innerHTML = titleStr;
    document.querySelector(".content").innerHTML = html;
}