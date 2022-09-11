function fn_getPage(page){
    var html = fn_htmls(page);
    var titleStr = "";

    if(page == 'main'){             titleStr = ""           }
    else if(page == 'intro'){       titleStr = "회사소개"   }
    else if(page == 'location'){    titleStr = "오시는길"       }
    else if(page == 'work'){        titleStr = "업무소개"       }    

    document.querySelector("#titleStr").innerHTML = titleStr;
    document.querySelector(".content").innerHTML = html;

    if(page == 'location'){
          
    }

}