function fn_getPage(page){
    var html = fn_htmls(page);
    var titleStr = "";

    if(page == 'main'){             titleStr = "" ;         document.querySelector("#map").style.display = "none";      }
    else if(page == 'intro'){       titleStr = "회사소개";   document.querySelector("#map").style.display = "none";     }
    else if(page == 'location'){    titleStr = "오시는길";   document.querySelector("#map").style.display = "block";    }
    else if(page == 'work'){        titleStr = "업무소개";   document.querySelector("#map").style.display = "none";    }    

    document.querySelector("#titleStr").innerHTML = titleStr;
    document.querySelector(".content").innerHTML = html;
}