function fn_htmls(page){
    var html = "";
    if(page == 'main'){             
        html = `
        <div class="mainImg">
            <img src="./images/common/main01.png">
        </div>
    `;       
    }else if(page == 'intro'){
        html += `
            <h3>준비중입니다.</h3>
        `;
    }else if(page == 'location'){
        html += `
            <table class="tbl_type01">
                <colgroup>
                    <col style="width:30%;"/>
                    <col style="width:70%;"/>
                </colgroup>
                <tr>
                    <th>주소</th>
                    <td class="left"><a href="http://kko.to/0sBrLQzQU" target="_blank">경남 진주시 가좌동 1640 <img src="./images/icon/newtab.png" class="newtab"></a></td>
                </tr>
                <tr>
                    <th>연락처</th>
                    <td class="left"><a href="tel:055-757-8266">055-757-8266</a></td>
                </tr>        
            </table>

                  
        `;

    }else if(page == 'work'){
        html += `
            <h3>준비중입니다.</h3>
        `;
    }    


    return html;
}

