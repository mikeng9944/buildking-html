function back() {
    document.querySelector(".detail-box").style.display = 'none';
    document.querySelector(".list-box").style.display = 'block';
}
function foreachItem() {
    var conItems = document.getElementsByClassName('con_item');
    for (var i = 0; i < conItems.length; i++) {
        // 对每个元素执行操作
        conItems[i].classList.remove('active');
    }
}

function handleClick2024() {
    foreachItem();
    document.getElementById("whats-new__2024").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `<div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">
    2024</div><ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)"
     class="cust_h4 txt_tur proj_item blocklink" onclick="handleClick2024Detail()">九龙嘉道理道81A, 83及85号圣佐治大厦重建项目的挖掘与侧向承托、地盘平整及地基工程<br>
     <small class="txt_gray">2024 年 02 月 26 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul>
     <br><div class="pagination" style="display: none;"></div>`
}
function handleClick2024Detail() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">九龙嘉道理道81A, 83及85号圣佐治大厦重建项目的挖掘与侧向承托、地盘平整及地基工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>九龙嘉道理道81A, 83及85号圣佐治大厦重建项目的挖掘与侧向承托、地盘平整及地基工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>嘉道理置業有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$142,865,945</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二四年二月二十六日</p>
    <p class="paddBottom20">
    <a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a>
    </p></div>`
}
function handleClick2023() {
    foreachItem();
    document.getElementById("whats-new__2023").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2023</div>
    <ul class="project_list nostyle">
    <li><div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2023Detail1213()" class="cust_h4 txt_tur proj_item blocklink">
    屯门南延线项目合约编号1500屯门南车站、高架桥及跨河铁路桥<br>
    <small class="txt_gray">2023 年 12 月 13 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small>
    </a></div><hr class="marBottom20"></li><li>
    <div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2023Detail1212()" class="cust_h4 txt_tur proj_item blocklink">新界古洞北新发展区粉岭上水市地段第263号住宅及商业项目<br>
    <small class="txt_gray">2023 年 12 月 12 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a>
    </div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2023Detail1031()" class="cust_h4 txt_tur proj_item blocklink">屯门南延线合约编号1503新屯门游泳池建造工程<br>
    <small class="txt_gray">2023 年 10 月 31 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a>
    </div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2023Detail0725()" class="cust_h4 txt_tur proj_item blocklink">合约编号：HY/2022/12 为行人天桥、高架行人道及行人隧道加建人人畅道通行设施—第七组第二份合约<br>
    <small class="txt_gray">2023 年 07 月 25 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li>
    <li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2023Detail0721()" class="cust_h4 txt_tur proj_item blocklink">筲箕湾阿公岩道明华大厦 2 期重建-设计与建造地基、工地平整、土地挖掘与侧向承托工程及桩帽工程 <br>
    <small class="txt_gray">2023 年 07 月 21 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div>
    <hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2023Detail0714()" class="cust_h4 txt_tur proj_item blocklink">合约编号: SS L509粉岭第11区新界东文化中心建造工程<br>
    <small class="txt_gray">2023 年 07 月 14 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div>
    <hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2023Detail0605()" class="cust_h4 txt_tur proj_item blocklink">九龙城南角道4至24号发展项目<br>
    <small class="txt_gray">2023 年 06 月 05 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a>
    </div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2023Detail0419()" class="cust_h4 txt_tur proj_item blocklink">香港鸭脷洲海旁道鸭脷洲内地段第137号住宅发展项目<br>
    <small class="txt_gray">2023 年 04 月 19 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div>
    <hr class="marBottom20"></li></ul>
    <br><div class="pagination light-theme simple-pagination">
    <ul><li class="disabled"><span class="current prev"><span class="glyphicon glyphicon-triangle-left"></span></span></li>
    <li class="active"><span class="current">1</span></li>
    <li><a href="javascript:void(0)" onclick="Click2023page2()" class="page-link">2</a></li>
    <li><a href="javascript:void(0)" onclick="Click2023page2()" class="page-link next"><span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div>
    `
}
function Click2023page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
        <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
        <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2023</div><ul class="project_list nostyle"><li><div class="paddLeft20">
        <a href="javascript:void(0)" onclick="handleClick2023Detail0306()" class="cust_h4 txt_tur proj_item blocklink">
        春田街/崇志街发展项目(KC-008(A)) - 上盖及地库工程<br><small class="txt_gray">
        2023 年 03 月 06 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a>
        </div><hr class="marBottom20"></li><li><div class="paddLeft20">
        <a href="javascript:void(0)" onclick="handleClick2023Detail0208()"
         class="cust_h4 txt_tur proj_item blocklink">九龙启德第4B区4号地盘的新九龙内地段第6591号住宅发展项目<br><small class="txt_gray">
         2023 年 02 月 08 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small>
         </a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
         <a href="javascript:void(0)" onclick="handleClick2023Detail0126()"
          class="cust_h4 txt_tur proj_item blocklink">合约编号EP/SP/223/22 已修复市区堆填区的修护服务<br><small class="txt_gray">
          2023 年 01 月 26 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
          <a href="javascript:void(0)"  onclick="handleClick2023Detail0113()"
           class="cust_h4 txt_tur proj_item blocklink">深水埗连翔道1所设有30间课室的小学建造工程<br><small class="txt_gray">2023 年 01 月 13 日
            <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul><br>
            <div class="pagination light-theme simple-pagination">
            <ul><li><a href="javascript:void(0)" onclick="handleClick2023()"
             class="page-link prev"><span class="glyphicon glyphicon-triangle-left"></span></a></li><li>
             <a href="javascript:void(0)" onclick="handleClick2023()" class="page-link">1</a></li><li class="active">
             <span class="current">2</span></li><li class="disabled"><span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}
function handleClick2023Detail1213() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">屯门南延线项目合约编号1500屯门南车站、高架桥及跨河铁路桥</h4>
    <hr class="marBottom20">
    <p>恭贺中国路桥 - 利基联营成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>屯门南延线项目合约编号1500屯门南车站、高架桥及跨河铁路桥</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港鐵路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$6,220,587,500</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二三年十二月十三日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2023Detail1212() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">新界古洞北新发展区粉岭上水市地段第263号住宅及商业项目</h4>
<hr class="marBottom20">
<p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>新界古洞北新发展区粉岭上水市地段第263号住宅及商业项目</p>
<br>
<p><strong>客户</strong></p>
<p>添永发展有限公司</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$1,316,963,044</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年十二月十二日</p>
<p class="paddBottom20">
<a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a>
</p></div>
    `
}
function handleClick2023Detail1031() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">屯门南延线合约编号1503新屯门游泳池建造工程</h4>
<hr class="marBottom20">
<p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>屯门南延线合约编号1503新屯门游泳池建造工程</p>
<br>
<p><strong>客户</strong></p>
<p>香港铁路有限公司</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$1,410,000,000</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年十月三十一日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0725() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号：HY/2022/12 为行人天桥、高架行人道及行人隧道加建人人畅道通行设施—第七组第二份合约</h4>
<hr class="marBottom20">
<p>恭贺利基 - 显丰工程联营成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>合约编号：HY/2022/12 为行人天桥、高架行人道及行人隧道加建人人畅道通行设施—第七组第二份合约</p>
<br>
<p><strong>客户</strong></p>
<p>路政署</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$731,400,000</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年七月二十五日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0721() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">筲箕湾阿公岩道明华大厦 2 期重建-设计与建造地基、工地平整、土地挖掘与侧向承托工程及桩帽工程   </h4>
<hr class="marBottom20">
<p>恭贺利基建筑有限公司成功取得以下工程合约：</p>
<br>
<p><strong>项目名称</strong></p>
<p>筲箕湾阿公岩道明华大厦 2 期重建-设计与建造地基、工地平整、土地挖掘与侧向承托工程及桩帽工程</p>
<br>
<p><strong>客户</strong></p>
<p>香港房屋协会</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$423,442,222</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年七月二十一日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0714() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号: SS L509粉岭第11区新界东文化中心建造工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 安保联营成功取得以下工程合约：</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号: SS L509粉岭第11区新界东文化中心建造工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>建筑署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$3,727,297,500</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二三年七月十四日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0605() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">九龙城南角道4至24号发展项目</h4>
<hr class="marBottom20">
<p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>九龙城南角道4至24号发展项目</p>
<br>
<p><strong>客户</strong></p>
<p>星汉投资有限公司, Easy Region Limited, 均誉有限公司</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$490,000,000</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年六月五日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0419() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港鸭脷洲海旁道鸭脷洲内地段第137号住宅发展项目</h4>
<hr class="marBottom20">
<p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>香港鸭脷洲海旁道鸭脷洲内地段第137号住宅发展项目</p>
<br>
<p><strong>客户</strong></p>
<p>宏业建筑有限公司</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$569,100,000</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年四月十九日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0306(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港鸭脷洲海旁道鸭脷洲内地段第137号住宅发展项目</h4>
<hr class="marBottom20">
<p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>香港鸭脷洲海旁道鸭脷洲内地段第137号住宅发展项目</p>
<br>
<p><strong>客户</strong></p>
<p>宏业建筑有限公司</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$569,100,000</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年四月十九日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0208(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">九龙启德第4B区4号地盘的新九龙内地段第6591号住宅发展项目</h4>
<hr class="marBottom20">
<p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>九龙启德第4B区4号地盘的新九龙内地段第6591号住宅发展项目</p>
<br>
<p><strong>客户</strong></p>
<p>迅富国际有限公司</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$2,393,902,721</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年二月八日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0126(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号EP/SP/223/22 已修复市区堆填区的修护服务</h4>
<hr class="marBottom20">
<p>恭贺振华 - 利基联营成功取得以下工程合约:</p>
<br>
<p><strong>项目名称</strong></p>
<p>合约编号EP/SP/223/22 已修复市区堆填区的修护服务</p>
<br>
<p><strong>客户</strong></p>
<p>环境保护署</p>
<br>
<p><strong>合约总额</strong></p>
<p>HK$160,380,000</p>
<br>
<p><strong>批出日期</strong></p>
<p>二零二三年一月二十六日</p>
<p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2023Detail0113(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `
    <div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">深水埗连翔道1所设有30间课室的小学建造工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>深水埗连翔道1所设有30间课室的小学建造工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>建筑署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$365,000,000</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二三年一月十三日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>
    `
}
function handleClick2022() {
    foreachItem();
    document.getElementById("whats-new__2022").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
        <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
        <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2022</div>
        <ul class="project_list nostyle">
        <li><div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail1207()" class="cust_h4 txt_tur proj_item blocklink">
        合约编号CV/2022/11邻近元朗丹桂村的工地平整及基础设施工程 - 合约一<br>
        <small class="txt_gray">2022 年 12 月 07 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small>
        </a></div><hr class="marBottom20"></li><li>
        <div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail1104()" class="cust_h4 txt_tur proj_item blocklink">
        合约编号 ED/2022/01 观塘行动区发展的基建设施工程<br>
        <small class="txt_gray">2022 年 11 月 04 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div>
        <hr class="marBottom20"></li><li>
        <div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail0927()" class="cust_h4 txt_tur proj_item blocklink">
        合约编号CV/2022/07元朗朗边工地平整及基础设施工程 - 第二期<br>
        <small class="txt_gray">2022 年 09 月 27 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li>
        <div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail0920()" class="cust_h4 txt_tur proj_item blocklink">
        香港体育学院新设施大楼<br>
        <small class="txt_gray">2022 年 09 月 20 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li>
        <div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail0906()" class="cust_h4 txt_tur proj_item blocklink">
        沙田至中环线合约编号11234马仔坑游乐场重置工程<br><small class="txt_gray">
        2022 年 09 月 06 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li>
        <div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail0720()" class="cust_h4 txt_tur proj_item blocklink">
        设计与建造黄大仙啬色园过渡性房屋项目<br><small class="txt_gray">
        2022 年 07 月 20 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li>
        <div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail0531()" class="cust_h4 txt_tur proj_item blocklink">
        香港房屋协会资助出售房屋发展项目安达臣道石矿场R2–4号地 - 设计与建造 地基及挖掘与侧向支撑安装工程<br><small class="txt_gray">
        2022 年 05 月 31 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li>
        <div class="paddLeft20"><a href="javascript:void(0)" onclick="handleClick2022Detail0506()" class="cust_h4 txt_tur proj_item blocklink">
        合约编号DC/2021/07搬迁沙田污水处理厂往岩洞 - 上游污水收集系统 - 前期工程<br><small class="txt_gray">
        2022 年 05 月 06 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul>
        <br>
        <div class="pagination light-theme simple-pagination">
        <ul>
        <li class="disabled"><span class="current prev"><span class="glyphicon glyphicon-triangle-left"></span></span></li>
        <li class="active"><span class="current">1</span></li><li><a href="javascript:void(0)" onclick="Click2022page2()" class="page-link">2</a></li>
        <li><a href="javascript:void(0)" onclick="Click2022page2()" class="page-link next"><span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div>
    `
}
function handleClick2022Detail1207() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号CV/2022/11邻近元朗丹桂村的工地平整及基础设施工程 - 合约一</h4>
    <hr class="marBottom20">
    <p>恭贺利基联营成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号CV/2022/11邻近元朗丹桂村的工地平整及基础设施工程 - 合约一</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$895,848,000</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二二年十二月七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail1104() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 ED/2022/01 观塘行动区发展的基建设施工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 ED/2022/01 观塘行动区发展的基建设施工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$259,941,100</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二二年十一月四日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0927() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号CV/2022/07元朗朗边工地平整及基础设施工程 - 第二期</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 显丰工程联营成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号CV/2022/07元朗朗边工地平整及基础设施工程 - 第二期</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$418,748,970</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二二年九月二十七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0920() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港体育学院新设施大楼</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港体育学院新设施大楼</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港体育学院有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$785,500,000</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二二年九月二十日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0906() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">沙田至中环线合约编号11234马仔坑游乐场重置工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>沙田至中环线合约编号11234马仔坑游乐场重置工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$537,600,000</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二二年九月六日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0720() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">设计与建造黄大仙啬色园过渡性房屋项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>设计与建造黄大仙啬色园过渡性房屋项目</p>
    <br>
    <p><strong>客户</strong></p>
    <p>啬色园</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$119,680,000</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二二年七月二十日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0531() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港房屋协会资助出售房屋发展项目安达臣道石矿场R2–4号地 - 设计与建造 地基及挖掘与侧向支撑安装工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>香港房屋协会资助出售房屋发展项目安达臣道石矿场R2–4号地 - 设计与建造地基及挖掘与侧向支撑安装工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>香港房屋协会</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$198,600,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二二年五月三十一日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0506() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号DC/2021/07搬迁沙田污水处理厂往岩洞 - 上游污水收集系统 - 前期工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号DC/2021/07搬迁沙田污水处理厂往岩洞 - 上游污水收集系统 - 前期工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>渠务署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$371,368,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二二年五月六日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0324() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港大坑铜锣湾道123号香港中华游乐会D座重建项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>香港大坑铜锣湾道123号香港中华游乐会D座重建项目</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>香港中华游乐会</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$279,465,864</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二二年三月二十四日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0303() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 CV/2022/01 土木工程拓展署码头维修保养合约 (2022-2027)</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 中国铁建港航局联营体成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号 CV/2022/01 土木工程拓展署码头维修保养合约 (2022-2027)</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$421,000,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二二年三月三日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2022Detail0208() {
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">小蚝湾车厂发展项目合约编号1733车辆通道桥、油漆车间拆除及电动汽车稳定轨道建造工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>小蚝湾车厂发展项目合约编号1733车辆通道桥、油漆车间拆除及电动汽车稳定轨道建造工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$199,438,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二二年二月八日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function Click2022page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2022</div>
    <ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2022Detail0324()" class="cust_h4 txt_tur proj_item blocklink">
    香港大坑铜锣湾道123号香港中华游乐会D座重建项目<br>
    <small class="txt_gray">2022 年 03 月 24 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li>
    <div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2022Detail0303()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号 CV/2022/01 土木工程拓展署码头维修保养合约 (2022-2027)<br>
    <small class="txt_gray">2022 年 03 月 03 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2022Detail0208()" class="cust_h4 txt_tur proj_item blocklink">
    小蚝湾车厂发展项目合约编号1733车辆通道桥、油漆车间拆除及电动汽车稳定轨道建造工程<br><small class="txt_gray">
    2022 年 02 月 08 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul><br>
    <div class="pagination light-theme simple-pagination">
    <ul><li><a href="javascript:void(0)" onclick="handleClick2022()"  class="page-link prev"><span class="glyphicon glyphicon-triangle-left"></span></a></li>
    <li><a href="javascript:void(0)" onclick="handleClick2022()"  class="page-link">1</a></li>
    <li class="active"><span class="current">2</span></li><li class="disabled">
    <span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}
function handleClick2021() {
    foreachItem();
    document.getElementById("whats-new__2021").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
     <div class="result_box list-box" style="display: block;"><div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
     <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2021</div>
     <ul class="project_list nostyle"><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail1229()" class="cust_h4 txt_tur proj_item blocklink">
     香港干诺道中152 - 155号及德辅道中303 - 315号甲级办公室大楼重建项目<br><small class="txt_gray">
     2021 年 12 月 29 日 <span class="con_arr glyphicon glyphicon-triangle-right">
     </span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail1130()" class="cust_h4 txt_tur proj_item blocklink">
     合约编号RF K519大埔文娱中心设施提升工程<br><small class="txt_gray">2021 年 11 月 30 日 
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail1105()" class="cust_h4 txt_tur proj_item blocklink">
     合约编号 HY/2020/09为行人天桥、高架行人道及行人隧道提供畅道通行设施 –第四组第二份合约<br><small class="txt_gray">
     2021 年 11 月 05 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail1005()" class="cust_h4 txt_tur proj_item blocklink">
     合约编号NL/2020/07东涌新市镇扩展 - 大蚝交汇处<br><small class="txt_gray">
     2021 年 10 月 05 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail0909()" class="cust_h4 txt_tur proj_item blocklink">
     沙田至中环线合约编号 11214 - 东铁线车站月台余下改善工程<br><small class="txt_gray">
     2021 年 09 月 09 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail0727()" class="cust_h4 txt_tur proj_item blocklink">
     香港城市大学国际发展大楼<br><small class="txt_gray">
     2021 年 07 月 27 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail0616()" class="cust_h4 txt_tur proj_item blocklink">
     合约编号 NL/2020/03东涌新市镇扩展－东涌东主要基础设施工程<br><small class="txt_gray">
     2021 年 06 月 16 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2021Detail0607()" class="cust_h4 txt_tur proj_item blocklink">
     北角电气道226 - 240号商业发展项目<br><small class="txt_gray">
     2021 年 06 月 07 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul>
     <br><div class="pagination light-theme simple-pagination">
     <ul><li class="disabled"><span class="current prev"><span class="glyphicon glyphicon-triangle-left"></span></span></li>
     <li class="active"><span class="current">1</span></li><li>
     <a href="javascript:void(0)" onclick="Click2021page2()" class="page-link">2</a></li><li>
     <a href="javascript:void(0)" onclick="Click2021page2()" class="page-link next"><span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div></div>
    `
}
function Click2021page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
   <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
   <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2021</div>
   <ul class="project_list nostyle"><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2021Detail0512()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号NL/2020/05 东涌新市镇扩展－马湾涌工地平整及基础设施工程<br><small class="txt_gray">
   2021 年 05 月 12 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div>
   <hr class="marBottom20"></li></ul>
   <br>
   <div class="pagination light-theme simple-pagination">
   <ul><li><a href="javascript:void(0)" onclick="handleClick2021()" class="page-link prev">
   <span class="glyphicon glyphicon-triangle-left"></span></a></li>
   <li><a href="javascript:void(0)" onclick="handleClick2021()" class="page-link">1</a></li>
   <li class="active"><span class="current">2</span></li>
   <li class="disabled"><span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}
function handleClick2021Detail0512(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号NL/2020/05 东涌新市镇扩展－马湾涌工地平整及基础设施工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 显丰土木联营成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号NL/2020/05 东涌新市镇扩展－马湾涌工地平整及基础设施工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$785,900,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年五月十二日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail1229(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港干诺道中152 - 155号及德辅道中303 - 315号甲级办公室大楼重建项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>香港干诺道中152 - 155号及德辅道中303 - 315号甲级办公室大楼重建项目</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>招商局集团大厦有限公司</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$712,000,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年十二月二十九日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail1130(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号RF K519大埔文娱中心设施提升工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号RF K519大埔文娱中心设施提升工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>建筑署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$454,299,530</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年十一月三十日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail1105(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 HY/2020/09为行人天桥、高架行人道及行人隧道提供畅道通行设施 –第四组第二份合约</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 显丰工程联营成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号 HY/2020/09为行人天桥、高架行人道及行人隧道提供畅道通行设施 –第四组第二份合约</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>路政署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$273,013,752</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年十一月五日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail1005(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号NL/2020/07东涌新市镇扩展 - 大蚝交汇处</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号NL/2020/07东涌新市镇扩展 - 大蚝交汇处</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$959,231,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年十月五日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail0909(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">沙田至中环线合约编号 11214 - 东铁线车站月台余下改善工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>沙田至中环线合约编号 11214 - 东铁线车站月台余下改善工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$185,196,282</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年九月九日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail0727(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港城市大学国际发展大楼</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>香港城市大学国际发展大楼</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>香港城市大学</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$209,000,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年七月二十七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail0616(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 NL/2020/03东涌新市镇扩展－东涌东主要基础设施工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号 NL/2020/03东涌新市镇扩展－东涌东主要基础设施工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$4,160,770,800</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年六月十六日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2021Detail0607(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">北角电气道226 - 240号商业发展项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>北角电气道226 - 240号商业发展项目</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>信良发展有限公司及Hang Wise Company Limited</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$474,000,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二一年六月七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()"  class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020() {
    foreachItem();
    document.getElementById("whats-new__2020").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2020</div><ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2020Detail1231()">合约编号NL/2020/01东涌新市镇扩展 - 社区联络中心<br><small class="txt_gray">2020 年 12 月 31 日
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2020Detail1208()" class="cust_h4 txt_tur proj_item blocklink">
     新界屯门第56区管翠路的屯门市地段第520号住宅发展项目<br><small class="txt_gray">
     2020 年 12 月 08 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2020Detail1207()" class="cust_h4 txt_tur proj_item blocklink">
     香港城市大学 - 大埔林村农场项目<br><small class="txt_gray">2020 年 12 月 07 日
      <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
      <a href="javascript:void(0)" onclick="handleClick2020Detail1117()" class="cust_h4 txt_tur proj_item blocklink">
      合约编号DC/2019/07 离岛污水收集系统第2阶段 - 长洲污水处理及排放改善工程<br><small class="txt_gray">2020 年 11 月 17 日 
      <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
      <a href="javascript:void(0)" onclick="handleClick2020Detail0907()" class="cust_h4 txt_tur proj_item blocklink">
      合约编号SS J502渔农自然护理署动物管理及动物福利综合大楼的建造工程<br><small class="txt_gray">2020 年 09 月 07 日
      <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
      <a href="javascript:void(0)" onclick="handleClick2020Detail0828()" class="cust_h4 txt_tur proj_item blocklink">
      保良局元朗马田壆青年宿舍<br><small class="txt_gray">2020 年 08 月 28 日 
      <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
      <a href="javascript:void(0)" onclick="handleClick2020Detail0811()" class="cust_h4 txt_tur proj_item blocklink">
      以「组装合成」建筑法兴建沙田乙明邨长者屋 - 设计及建造地基、土地挖掘及侧向承托工程<br><small class="txt_gray">2020 年 08 月 11 日 
      <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
      <a href="javascript:void(0)" onclick="handleClick2020Detail0807()" class="cust_h4 txt_tur proj_item blocklink">
      葛量洪医院重建计划 (第一期) 主要工程 (一) - 拆卸、地基及相关工程<br><small class="txt_gray">2020 年 08 月 07 日
       <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul><br>
       <div class="pagination light-theme simple-pagination"><ul><li class="disabled">
       <span class="current prev"><span class="glyphicon glyphicon-triangle-left"></span>
       </span></li><li class="active"><span class="current">1</span></li><li>
       <a href="javascript:void(0)" onclick="Click2020page2()" class="page-link">2</a></li><li>
       <a href="javascript:void(0)" onclick="Click2020page2()" class="page-link next"><span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div>
    `
}

function Click2020page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
 <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
 <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2020</div><ul class="project_list nostyle"><li><div class="paddLeft20">
 <a href="javascript:void(0)" onclick="handleClick2020Detail0727()" class="cust_h4 txt_tur proj_item blocklink">
 基督教联合医院扩建计划 - 主要工程 (上盖建筑及相关工程)<br><small class="txt_gray">2020 年 07 月 27 日 
 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
 <a href="javascript:void(0)" onclick="handleClick2020Detail0722()" class="cust_h4 txt_tur proj_item blocklink">
 合约编号: ED/2018/05 - 启德发展计划 - 前北面停机坪第5B期的基础设施工程<br><small class="txt_gray">2020 年 07 月 22 日 
 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
 <a href="javascript:void(0)" onclick="handleClick2020Detail0630()" class="cust_h4 txt_tur proj_item blocklink">
 合约编号 DC/2019/08 活化翠屏河<br><small class="txt_gray">2020 年 06 月 30 日
  <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
  <a href="javascript:void(0)" onclick="handleClick2020Detail0409()" class="cust_h4 txt_tur proj_item blocklink">
  新界粉岭马适路粉岭上水市地段第262 号住宅发展项目<br><small class="txt_gray">2020 年 04 月 09 日 
  <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
  <a href="javascript:void(0)" onclick="handleClick2020Detail0117()" class="cust_h4 txt_tur proj_item blocklink">
  位于铜锣湾伊荣街1至5号及边宁顿街14号商业大厦重建项目<br><small class="txt_gray">2020 年 01 月 17 日
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2020Detail0114()" class="cust_h4 txt_tur proj_item blocklink">
   香港浸信会医院为观塘大业街4号发展项目 - 地基及挖掘与侧向承托工程<br><small class="txt_gray">2020 年 01 月 14 日
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2020Detail0113()" class="cust_h4 txt_tur proj_item blocklink">
    香港仔深湾道19号沪江维多利亚学校新扩建大楼工程<br><small class="txt_gray">2020 年 01 月 13 日
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2020Detail0109()" class="cust_h4 txt_tur proj_item blocklink">
     合约编号SS H514沙田水泉澳一所设有三十间课室的小学建造工程<br><small class="txt_gray">
     2020 年 01 月 09 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div>
     <hr class="marBottom20"></li></ul><br><div class="pagination light-theme simple-pagination">
     <ul><li><a href="javascript:void(0)" onclick="handleClick2020()" class="page-link prev"><span class="glyphicon glyphicon-triangle-left"></span></a></li>
     <li><a href="javascript:void(0)" onclick="handleClick2020()" class="page-link">1</a></li><li class="active"><span class="current">2</span></li>
     <li class="disabled"><span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}
function handleClick2020Detail0727(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">基督教联合医院扩建计划 - 主要工程 (上盖建筑及相关工程)</h4>
    <hr class="marBottom20">
    <p>恭贺Build King – Hyundai Joint Venture成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>基督教联合医院扩建计划 - 主要工程 (上盖建筑及相关工程)</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>医院管理局</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$9,160,000,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年七月二十七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2020Detail0722(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号: ED/2018/05 - 启德发展计划 - 前北面停机坪第5B期的基础设施工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 上隧联营成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号: ED/2018/05 - 启德发展计划 - 前北面停机坪第5B期的基础设施工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$681,600,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年七月二十二日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2020Detail0630(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 DC/2019/08 活化翠屏河</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 显丰土木联营成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号 DC/2019/08 活化翠屏河</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>渠务署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$446,171,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年六月三十日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2020Detail0409(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">新界粉岭马适路粉岭上水市地段第262 号住宅发展项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>新界粉岭马适路粉岭上水市地段第262 号住宅发展项目</p>
    <br>
    <p><strong>客户</strong></p>
    <p>祺星有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$2,148,000,000.00</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二零年四月九日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2020Detail0117(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">位于铜锣湾伊荣街1至5号及边宁顿街14号商业大厦重建项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>位于铜锣湾伊荣街1至5号及边宁顿街14号商业大厦重建项目</p>
    <br>
    <p><strong>客户</strong></p>
    <p>飞宇控股有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$265,630,000.00</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二零年一月十七日</p>
    <br>
    <p><strong>&nbsp;</strong></p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2020Detail0114(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港浸信会医院为观塘大业街4号发展项目 - 地基及挖掘与侧向承托工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港浸信会医院为观塘大业街4号发展项目 - 地基及挖掘与侧向承托工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港浸信会医院</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$71,500,000.00</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二零年一月十四日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2020Detail0113(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港仔深湾道19号沪江维多利亚学校新扩建大楼工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港仔深湾道19号沪江维多利亚学校新扩建大楼工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>沪港维多利亚教育基金有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$323,888,000.00</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二零年一月十三日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2020Detail0109(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号SS H514沙田水泉澳一所设有三十间课室的小学建造工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号SS H514沙田水泉澳一所设有三十间课室的小学建造工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>建筑署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$335,100,000.00</p>
    <br>
    <p><strong>批出日期</strong></p>
    <p>二零二零年一月九日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail1231(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号NL/2020/01东涌新市镇扩展 - 社区联络中心</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号NL/2020/01东涌新市镇扩展 - 社区联络中心</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$19,380,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年十二月三十一日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail1208(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">新界屯门第56区管翠路的屯门市地段第520号住宅发展项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>新界屯门第56区管翠路的屯门市地段第520号住宅发展项目</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>深劲有限公司</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$1,803,800,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年十二月八日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail1207(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港城市大学 - 大埔林村农场项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>香港城市大学 - 大埔林村农场项目</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>香港城市大学</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$112,036,635.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年十二月七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail1117(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号DC/2019/07 离岛污水收集系统第2阶段 - 长洲污水处理及排放改善工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号DC/2019/07 离岛污水收集系统第2阶段 - 长洲污水处理及排放改善工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>渠务署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$859,268,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年十一月十七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail0907(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号SS J502渔农自然护理署动物管理及动物福利综合大楼的建造工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>合约编号SS J502渔农自然护理署动物管理及动物福利综合大楼的建造工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>建筑署</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$740,000,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年九月七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail0828(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">保良局元朗马田壆青年宿舍</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>保良局元朗马田壆青年宿舍</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>保良局</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$812,088,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年八月二十八日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail0811(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">以「组装合成」建筑法兴建沙田乙明邨长者屋 - 设计及建造地基、土地挖掘及侧向承托工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>以「组装合成」建筑法兴建沙田乙明邨长者屋 - 设计及建造地基、土地挖掘及侧向承托工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>香港房屋协会</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$33,890,000.00</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年八月十一日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}

function handleClick2020Detail0807(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">葛量洪医院重建计划 (第一期) 主要工程 (一) - 拆卸、地基及相关工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司成功取得以下工程合约:</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>项目名称</strong></p>
    <p>葛量洪医院重建计划 (第一期) 主要工程 (一) - 拆卸、地基及相关工程</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>医院管理局</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>合约总额</strong></p>
    <p>HK$886,928,000</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>批出日期</strong></p>
    <p>二零二零年八月七日</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}


function handleClick2019() {
    foreachItem();
    document.getElementById("whats-new__2019").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
   <div class="result_box list-box" style="display: block;"><div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
   <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2019</div>
   <ul class="project_list nostyle"><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2019Detail1211()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号 HY/2019/02 葵涌青山公路至工业街升降机及行人信道系统<br><small class="txt_gray">2019 年 12 月 11 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2019Detail1128()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号ND/2019/01古洞北新发展区第一阶段 - 地盘平整及基础设施工程<br><small class="txt_gray">2019 年 11 月 28 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2019Detail1113()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号ND/2018/01缸瓦甫警察设施土地平整及基础建设<br><small class="txt_gray">2019 年 11 月 13 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2019Detail0823()" class="cust_h4 txt_tur proj_item blocklink">
   香港科技大学逸夫演艺中心<br><small class="txt_gray">2019 年 08 月 23 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2019Detail0809()" class="cust_h4 txt_tur proj_item blocklink">
   尖沙咀么地道77号华懋广场地下海水供应管道灌浆工程<br><small class="txt_gray">2019 年 08 月 09 日
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2019Detail0802()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号14104-0148星光大道拆卸及重建现有登岸梯级结构CH23至CH24<br><small class="txt_gray">2019 年 08 月 02 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2019Detail0617()" class="cust_h4 txt_tur proj_item blocklink">
    九龙九龙塘龙翔道的新九龙内地段第6579号私人住宅发展项目 - 土木工程合约<br><small class="txt_gray">2019 年 06 月 17 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2019Detail0527()" class="cust_h4 txt_tur proj_item blocklink">
    香港国际机场合约编号C18W10北商业区行人天桥1<br><small class="txt_gray">2019 年 05 月 27 日
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul>
     <br><div class="pagination light-theme simple-pagination">
     <ul><li class="disabled"><span class="current prev"><span class="glyphicon glyphicon-triangle-left"></span></span></li>
     <li class="active"><span class="current">1</span></li><li><a  href="javascript:void(0)" onclick="Click2019page2()" class="page-link">2</a></li
     ><li><a  href="javascript:void(0)" onclick="Click2019page2()" class="page-link next">
     <span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div></div>
    `
}

function Click2019page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
 <div class="result_box list-box" style="display: block;"><div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
 <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2019</div><ul class="project_list nostyle"><li><div class="paddLeft20">
 <a href="javascript:void(0)" onclick="handleClick2019Detail0416()" class="cust_h4 txt_tur proj_item blocklink">
 兴建香港中文大学新亚书院提供300个宿位的学生宿舍<br><small class="txt_gray">2019 年 04 月 16 日 
 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
 <a href="javascript:void(0)" onclick="handleClick2019Detail0308()" class="cust_h4 txt_tur proj_item blocklink">
 合约编号K1383.B-18C罗湖车站改善工程<br><small class="txt_gray">2019 年 03 月 08 日 
 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
 <a href="javascript:void(0)" onclick="handleClick2019Detail0228()" class="cust_h4 txt_tur proj_item blocklink">
 屯门第56区管翠路屯门市地段第520号物业发展项目前期工程<br><small class="txt_gray">2019 年 02 月 28 日 
 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
 <a href="javascript:void(0)" onclick="handleClick2019Detail0222()" class="cust_h4 txt_tur proj_item blocklink">
 兴建位于西营盘梅芳街10号至22号及桂香街15号至19号的香港大学学生宿舍<br><small class="txt_gray">2019 年 02 月 22 日
  <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
  <a href="javascript:void(0)" onclick="handleClick2019Detail0220()" class="cust_h4 txt_tur proj_item blocklink">
  合约编号 Q059986日出康城海滨区域建筑工程<br><small class="txt_gray">2019 年 02 月 20 日
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul>
   <br><div class="pagination light-theme simple-pagination"><ul><li><a  href="javascript:void(0)" onclick="handleClick2019()" class="page-link prev">
   <span class="glyphicon glyphicon-triangle-left"></span></a></li><li><a  href="javascript:void(0)" onclick="handleClick2019()" class="page-link">1</a>
   </li><li class="active"><span class="current">2</span></li><li class="disabled"><span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div></div>
    `
}

function handleClick2019Detail0416(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">兴建香港中文大学新亚书院提供300个宿位的学生宿舍</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年四月十六日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>兴建香港中文大学新亚书院提供300个宿位的学生宿舍</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港中文大学</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$241,868.000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0308(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号K1383.B-18C罗湖车站改善工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年三月八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号K1383.B-18C罗湖车站改善工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$57,223,614.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0228(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">屯门第56区管翠路屯门市地段第520号物业发展项目前期工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年二月二十八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>屯门第56区管翠路屯门市地段第520号物业发展项目前期工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>深劲有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$170,466,300.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0222(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">兴建位于西营盘梅芳街10号至22号及桂香街15号至19号的香港大学学生宿舍</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年二月二十二日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>兴建位于西营盘梅芳街10号至22号及桂香街15号至19号的香港大学学生宿舍</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港大学</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$213,880,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0220(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 Q059986日出康城海滨区域建筑工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司于二零一九年二月二十日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 Q059986日出康城海滨区域建筑工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$69,800,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail1211(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 HY/2019/02 葵涌青山公路至工业街升降机及行人信道系统</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司于二零一九年十二月十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 HY/2019/02 葵涌青山公路至工业街升降机及行人信道系统</p>
    <br>
    <p><strong>客户</strong></p>
    <p>路政署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$173,510,673.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail1128(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号ND/2019/01古洞北新发展区第一阶段 - 地盘平整及基础设施工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 显丰工程联营于二零一九年十一月二十八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号ND/2019/01古洞北新发展区第一阶段 - 地盘平整及基础设施工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$1,551,506,016.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail1113(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号ND/2018/01缸瓦甫警察设施土地平整及基础建设</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年十一月十三日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号ND/2018/01缸瓦甫警察设施土地平整及基础建设</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$672,435,340.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0823(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港科技大学逸夫演艺中心</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年八月二十三日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港科技大学逸夫演艺中心</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港科技大学</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$420,420,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0809(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">尖沙咀么地道77号华懋广场地下海水供应管道灌浆工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年八月九日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>尖沙咀么地道77号华懋广场地下海水供应管道灌浆工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>Hollywood Palace Company Limited</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$3,375,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0802(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号14104-0148星光大道拆卸及重建现有登岸梯级结构CH23至CH24</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年八月二日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号14104-0148星光大道拆卸及重建现有登岸梯级结构CH23至CH24</p>
    <br>
    <p><strong>客户</strong></p>
    <p>新世界建筑有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$27,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0617(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">九龙九龙塘龙翔道的新九龙内地段第6579号私人住宅发展项目 - 土木工程合约</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司于二零一九年六月十七日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>九龙九龙塘龙翔道的新九龙内地段第6579号私人住宅发展项目 - 土木工程合约</p>
    <br>
    <p><strong>客户</strong></p>
    <p>Alpha Pioneer Limited</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$122,629,794.01</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2019Detail0527(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场合约编号C18W10北商业区行人天桥1</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一九年五月二十七日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场合约编号C18W10北商业区行人天桥1</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$237,636,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}


function handleClick2018() {
    foreachItem();
    document.getElementById("whats-new__2018").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2018</div>
    <ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2018Detail1231()" class="cust_h4 txt_tur proj_item blocklink">
    香港国际机场合约编号C18W02 - 联运中转客运大楼<br><small class="txt_gray">2018 年 12 月 31 日
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2018Detail1213()" class="cust_h4 txt_tur proj_item blocklink">
     重建位于中半山波老道20 号的港岛中学<br><small class="txt_gray">2018 年 12 月 13 日 
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2018Detail1116()" class="cust_h4 txt_tur proj_item blocklink">
     合约编号SS G511 在柴湾歌连臣角道兴建骨灰安置所设施工程<br><small class="txt_gray">2018 年 11 月 16 日
      <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
      <a href="javascript:void(0)" onclick="handleClick2018Detail1114()" class="cust_h4 txt_tur proj_item blocklink">
      合约编号DC/2018/03沙头角污水处理厂第1期扩建工程及塘肚乡村污水收集系统<br><small class="txt_gray">2018 年 11 月 14 日
       <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
       <a href="javascript:void(0)" onclick="handleClick2018Detail1026()" class="cust_h4 txt_tur proj_item blocklink">
       合约编号NE/2017/08 将军澳跨湾连接路－D9路与相关工程<br><small class="txt_gray">2018 年 10 月 26 日 
       <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
       <a href="javascript:void(0)" onclick="handleClick2018Detail1025()" class="cust_h4 txt_tur proj_item blocklink">
       合约编号 HY/2014/20 中九龙干线 - 油麻地西工程<br><small class="txt_gray">2018 年 10 月 25 日
        <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
        <a href="javascript:void(0)" onclick="handleClick2018Detail0403()" class="cust_h4 txt_tur proj_item blocklink">
        新界元朗凹头丈量约份第103约地段第1066号私人住宅发展项目<br><small class="txt_gray">2018 年 04 月 03 日
         <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
         <a href="javascript:void(0)" onclick="handleClick2018Detail0131()" class="cust_h4 txt_tur proj_item blocklink">
         香港电气道200 - 218号商业发展项目(地盘A)<br><small class="txt_gray">2018 年 01 月 31 日
         <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li>
         </ul><br><div class="pagination light-theme simple-pagination"><ul><li class="disabled"><span class="current prev">
         <span class="glyphicon glyphicon-triangle-left"></span></span></li><li class="active"><span class="current">1</span>
         </li><li><a href="javascript:void(0)" onclick="Click2018page2()" class="page-link">2</a></li><li><a href="javascript:void(0)" onclick="Click2018page2()"
          class="page-link next"><span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div>
    `
}

function Click2018page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2018</div><ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2018Detail0129()" class="cust_h4 txt_tur proj_item blocklink">
    九龙深水埗福荣街、营盘街与福华街交界的新九龙内地段第6534号的综合发展项目<br><small class="txt_gray">2018 年 01 月 29 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a  href="javascript:void(0)" onclick="handleClick2018Detail0108()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号 HY/2014/08 中九龙干线 - 油麻地东工程<br><small class="txt_gray">2018 年 01 月 08 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li>
    </ul><br><div class="pagination light-theme simple-pagination"><ul>
    <li><a href="javascript:void(0)" onclick="handleClick2018()" class="page-link prev"><span class="glyphicon glyphicon-triangle-left"></span></a></li><li>
    <a href="javascript:void(0)" onclick="handleClick2018()" class="page-link">1</a></li><li class="active"><span class="current">2</span></li><li class="disabled">
    <span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}
function handleClick2018Detail0129(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">九龙深水埗福荣街、营盘街与福华街交界的新九龙内地段第6534号的综合发展项目</h4>
    <hr class="marBottom20">
    <p>恭賀利基建筑有限公司于二零一八年一月二十九日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>九龙深水埗福荣街、营盘街与福华街交界的新九龙内地段第6534号的综合发展项目</p>
    <br>
    <p><strong>客戶</strong></p>
    <p>汇荣发展有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$1,054,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail0108(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 HY/2014/08 中九龙干线 - 油麻地东工程</h4>
    <hr class="marBottom20">
    <p>恭賀利基 – SKEC联营于二零一八年一月八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 HY/2014/08 中九龙干线 - 油麻地东工程</p>
    <br>
    <p><strong>客戶</strong></p>
    <p>路政署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$5,015,152,872.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail1231(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场合约编号C18W02 - 联运中转客运大楼</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一八年十二月三十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场合约编号C18W02 - 联运中转客运大楼</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$1,194,550,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail1213(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">重建位于中半山波老道20 号的港岛中学</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一八年十二月十三日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>重建位于中半山波老道20 号的港岛中学</p>
    <br>
    <p><strong>客户</strong></p>
    <p>英基学校协会</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$928,888,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail1116(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号SS G511 在柴湾歌连臣角道兴建骨灰安置所设施工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一八年十一月十六日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号SS G511 在柴湾歌连臣角道兴建骨灰安置所设施工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>建筑署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$726,880,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail1114(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号DC/2018/03沙头角污水处理厂第1期扩建工程及塘肚乡村污水收集系统</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 金城联营有限公司于二零一八年十一月十四日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号DC/2018/03沙头角污水处理厂第1期扩建工程及塘肚乡村污水收集系统</p>
    <br>
    <p><strong>客户</strong></p>
    <p>渠务署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$688,210,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail1026(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号NE/2017/08 将军澳跨湾连接路－D9路与相关工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司于二零一八年十月二十六日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号NE/2017/08 将军澳跨湾连接路－D9路与相关工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$444,973,5l7.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail1025(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 HY/2014/20 中九龙干线 - 油麻地西工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - SKEC联营于二零一八年十月二十五日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 HY/2014/20 中九龙干线 - 油麻地西工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>路政署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$3,464,183,151.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail0403(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">新界元朗凹头丈量约份第103约地段第1066号私人住宅发展项目</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一八年四月三日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>新界元朗凹头丈量约份第103约地段第1066号私人住宅发展项目</p>
    <br>
    <p><strong>客戶</strong></p>
    <p>威良发展有限公司</p>
    <br>
    <p><strong>合约总额<br></strong></p>
    <p>HK$1,558,500,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2018Detail0131(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港电气道200 - 218号商业发展项目(地盘A)</h4>
    <hr class="marBottom20">
    <p>恭賀利基建筑有限公司于二零一八年一月三十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港电气道200 - 218号商业发展项目(地盘A)</p>
    <br>
    <p><strong>客戶</strong></p>
    <p>Vansittart Investment Limited</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$418,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}


function handleClick2017() {
    foreachItem();
    document.getElementById("whats-new__2017").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2017</div>
    <ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail1221()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号NL/2017/03 东涌新市镇扩展-填海及前期工程<br><small class="txt_gray">2017 年 12 月 21 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail1010()" class="cust_h4 txt_tur proj_item blocklink">
    圣保禄医院重建项目工程<br><small class="txt_gray">2017 年 10 月 10 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0920()" class="cust_h4 txt_tur proj_item blocklink">
    中环皇后大道中158-164号华英昌中区大厦商业重建项目工程<br><small class="txt_gray">2017 年 09 月 20 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0616()" class="cust_h4 txt_tur proj_item blocklink">
    香港国际机场合约编号P581 - 东大堂扩建工程<br><small class="txt_gray">2017 年 06 月 16 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0609()" class="cust_h4 txt_tur proj_item blocklink">
    香港国际机场合约编号3501 - 天线设备区及污水抽水站工程<br><small class="txt_gray">2017 年 06 月 09 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0607()" class="cust_h4 txt_tur proj_item blocklink">
    香港国际机场合约编号T16S046 - 地面运输中心员工休息区域翻新工程<br><small class="txt_gray">2017 年 06 月 07 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0517()" class="cust_h4 txt_tur proj_item blocklink">
    香港国际机场三跑道系统工程合约编号3502 - 二号客运大楼旅客捷运系统车厂改善工程<br><small class="txt_gray">2017 年 05 月 17 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0508()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号 HY/2016/05 连接荃湾广场、湾景广场及毗邻环境美化地带之行人天桥<br><small class="txt_gray">2017 年 05 月 08 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul>
    <br><div class="pagination light-theme simple-pagination"><ul><li class="disabled"><span class="current prev"><span class="glyphicon glyphicon-triangle-left"></span>
    </span></li><li class="active"><span class="current">1</span></li>
    <li><a href="javascript:void(0)" onclick="Click2017page2()" class="page-link">2</a></li>
    <li><a href="javascript:void(0)" onclick="Click2017page2()" class="page-link next"><span class="glyphicon glyphicon-triangle-right">
    </span></a></li></ul></div>
    `
}

function Click2017page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2017</div>
    <ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0221()" class="cust_h4 txt_tur proj_item blocklink">
    香港道尔顿学校改建及加建第1B期工程<br><small class="txt_gray">2017 年 02 月 21 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2017Detail0111()" class="cust_h4 txt_tur proj_item blocklink">
    南港岛线(东段) 合约编号：914 夏悫公园工程<br><small class="txt_gray">2017 年 01 月 11 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li>
    </ul><br><div class="pagination light-theme simple-pagination"><ul>
    <li><a href="javascript:void(0)" onclick="handleClick2017()" class="page-link prev">
    <span class="glyphicon glyphicon-triangle-left"></span></a></li>
    <li><a href="javascript:void(0)" onclick="handleClick2017()" class="page-link">1</a></li><li class="active"><span class="current">2</span></li><li class="disabled">
    <span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}
function handleClick2017Detail1221(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号NL/2017/03 东涌新市镇扩展-填海及前期工程</h4>
    <hr class="marBottom20">
    <p>恭賀利基 – 三星联营于二零一七年十二月二十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p><span title="合約編號NL/2017/03 東涌新市鎮擴展-填海及前期工程
    
    ">合约编号NL/2017/03</span> 东涌新市镇扩展-填海及前期工程</p>
    <br>
    <p><strong>客戶</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$6,716,800,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail1010(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">圣保禄医院重建项目工程 - 建造A座新地库，A座，B座及地库D改建及加建工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一七年十月十日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>圣保禄医院重建项目工程 - 建造A座新地库，A座，B座及地库D改建及加建工程</p>
    <br>
    <p><strong>客戶</strong></p>
    <p>法国沙尔德圣保禄女修会(香港)</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$341,625,485.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail0920(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">中环皇后大道中158-164号华英昌中区大厦商业重建项目工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一七年九月二十日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>中环皇后大道中158-164号华英昌中区大厦商业重建项目工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>琪恒投资有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$254,200,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail0616(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场合约编号P581 - 东大堂扩建工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司于二零一七年六月十六日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场合约编号P581 - 东大堂扩建工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$383,151,318.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail0609(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场合约编号3501 - 天线设备区及污水抽水站工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一七年六月九日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场合约编号3501 - 天线设备区及污水抽水站工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$67,628,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail0607(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场合约编号T16S046 - 地面运输中心员工休息区域翻新工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一七年六月七日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场合约编号T16S046 - 地面运输中心员工休息区域翻新工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$2,904,457.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail0517(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场三跑道系统工程合约编号3502 - 二号客运大楼旅客捷运系统车厂改善工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一七年五月十七日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场三跑道系统工程合约编号3502 - 二号客运大楼旅客捷运系统车厂改善工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$18,167,413.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail0508(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 HY/2016/05 连接荃湾广场、湾景广场及毗邻环境美化地带之行人天桥</h4>
    <hr class="marBottom20">
    <p>恭贺利基(单氏)工程有限公司于二零一七年五月八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 HY/2016/05 连接荃湾广场、湾景广场及毗邻环境美化地带之行人天桥</p>
    <br>
    <p><strong>客户</strong></p>
    <p>路政署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HKD$86,812,181.64</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2017Detail0221(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港道尔顿学校改建及加建第1B期工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一七年二月二十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港道尔顿学校改建及加建第1B期工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>道尔顿基金有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HKD$79,918,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></div>`
}
function handleClick2017Detail0111(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">南港岛线(东段) 合约编号：914 夏悫公园工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一七年一月十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>南港岛线(东段) 合约编号：914 夏悫公园工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$112,766,535.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></div>`
}

function handleClick2016() {
    foreachItem();
    document.getElementById("whats-new__2016").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
   <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
   <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2016</div>
   <ul class="project_list nostyle"><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2016Detail1228()" class="cust_h4 txt_tur proj_item blocklink">
   道尔顿幼儿园改建及加建前期工程<br><small class="txt_gray">2016 年 12 月 28 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2016Detail1222()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号 KL/2015/03 启德发展计划 - 前北面停机坪第3B期基础设施<br><small class="txt_gray">2016 年 12 月 22 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2016Detail1219()" class="cust_h4 txt_tur proj_item blocklink">
   香港墨尔文国际学校兴建工程<br><small class="txt_gray">2016 年 12 月 19 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2016Detail1209()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号 HY/2016/04 将军澳唐明街与唐德街之间的高架行人道 <br><small class="txt_gray">2016 年 12 月 09 日
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2016Detail1124()" class="cust_h4 txt_tur proj_item blocklink">
    香港国际机场合约编号P573 - 北商业区前期基础设施 <br><small class="txt_gray">2016 年 11 月 24 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2016Detail0817()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号DC/2009/20净化海港计划第二期甲–拆除数码港污水处理厂化学强化一级处理缸及相关设施<br><small class="txt_gray">2016 年 08 月 17 日
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
     <a href="javascript:void(0)" onclick="handleClick2016Detail0728()" class="cust_h4 txt_tur proj_item blocklink">
     香港国际机场三跑道系统项目 - 深层水泥搅拌工程(合约2)<br><small class="txt_gray">2016 年 07 月 28 日
      <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
      <a href="javascript:void(0)" onclick="handleClick2016Detail1221()" class="cust_h4 txt_tur proj_item blocklink">合约编号NE/2015/02将军澳－蓝田隧道－P2路及相关工程<br><small class="txt_gray">2016 年 07 月 22 日
       <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul><br>
       <div class="pagination light-theme simple-pagination"><ul><li class="disabled">
       <span class="current prev"><span class="glyphicon glyphicon-triangle-left"></span></span></li>
       <li class="active"><span class="current">1</span></li><li><a href="javascript:void(0)" onclick="Click2016page2()" class="page-link">2</a></li
       ><li><a href="javascript:void(0)" onclick="Click2016page2()" class="page-link next"><span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div>
    `
}

function Click2016page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
   <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
   <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2016</div><ul class="project_list nostyle"><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2016Detail0622()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号SS C503 设计与建造启德协调道105号东九龙总区总部及行动基地暨牛头角分区警署大楼<br><small class="txt_gray">2016 年 06 月 22 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2016Detail06513()" class="cust_h4 txt_tur proj_item blocklink">
   香港童军总会湾仔爱群道34号, 地段 I.L. 8261工程<br><small class="txt_gray">2016 年 05 月 13 日
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2016Detail0506()">葵涌三号货柜码头亚洲货柜物流中心 - 外墙翻新工程<br><small class="txt_gray">2016 年 05 月 06 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2016Detail0310()" class="cust_h4 txt_tur proj_item blocklink">
    沙田至中环线: 合约编号1124 - 金钟站相关工程<br><small class="txt_gray">2016 年 03 月 10 日 <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div>
    <hr class="marBottom20"></li></ul><br><div class="pagination light-theme simple-pagination"><ul><li>
    <a href="javascript:void(0)" onclick="handleClick2016()" class="page-link prev"><span class="glyphicon glyphicon-triangle-left"><
    /span></a></li><li><a href="javascript:void(0)" onclick="handleClick2016()" class="page-link">1</a></li><li class="active"><span class="current">2</span></li>
    <li class="disabled"><span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}

function handleClick2016Detail0622(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号SS C503 设计与建造启德协调道105号东九龙总区总部及行动基地暨牛头角分区警署大楼</h4>
    <hr class="marBottom20">
    <p>恭贺新昌 - 利基联营于二零一六年六月二十二日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号SS C503 设计与建造启德协调道105号东九龙总区总部及行动基地暨牛头角分区警署大楼</p>
    <br>
    <p><strong>客户</strong></p>
    <p>建筑署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$2,480,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail0513(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港童军总会湾仔爱群道34号, 地段 I.L. 8261工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一六年五月十三日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港童军总会湾仔爱群道34号, 地段 I.L. 8261工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港童军总会</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$331,800,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail0506(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">葵涌三号货柜码头亚洲货柜物流中心 - 外墙翻新工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一六年五月六日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>葵涌三号货柜码头亚洲货柜物流中心 - 外墙翻新工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>亚洲货柜物流中心香港有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$104,110,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail0310(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">沙田至中环线: 合约编号1124 - 金钟站相关工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基SCL 1124联营于二零一六年三月十日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>沙田至中环线: 合约编号1124 - 金钟站相关工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$833,606,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail1228(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">道尔顿幼儿园改建及加建前期工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一六年十二月二十八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>道尔顿幼儿园改建及加建前期工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>道尔顿基金有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HKD$9,680,172.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail1222(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 KL/2015/03 启德发展计划 - 前北面停机坪第3B期基础设施</h4>
    <hr class="marBottom20">
    <p>恭贺利基 - 显丰工程联营于二零一六年十二月二十二日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 KL/2015/03 启德发展计划 - 前北面停机坪第3B期基础设施</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$553,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail1219(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港墨尔文国际学校兴建工程</h4>
    <hr class="marBottom20">
    <p>恭贺利基建筑有限公司于二零一六年十二月十九日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港墨尔文国际学校兴建工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港墨尔文国际学校</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$480,500,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail1209(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号 HY/2016/04 将军澳唐明街与唐德街之间的高架行人道 </h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司于二零一六年十二月九日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号 HY/2016/04 将军澳唐明街与唐德街之间的高架行人道</p>
    <br>
    <p><strong>客户</strong></p>
    <p>路政署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$124,880,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail1124(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场合约编号P573 - 北商业区前期基础设施 </h4>
    <hr class="marBottom20">
    <p>恭贺利基土木工程有限公司于二零一六年十一月二十四日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场合约编号P573 - 北商业区前期基础设施</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$172,570,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail0817(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号DC/2009/20净化海港计划第二期甲–拆除数码港污水处理厂化学强化一级处理缸及相关设施</h4>
    <hr class="marBottom20">
    <p>恭贺利基(单氏)工程有限公司于二零一六年八月十七日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号DC/2009/20净化海港计划第二期甲–拆除数码港污水处理厂化学强化一级处理缸及相关设施</p>
    <p><strong>&nbsp;</strong></p>
    <p><strong>客户</strong></p>
    <p>渠务署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$11,544,421.00</p>
    <p><span>&nbsp;</span></p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail0728(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场三跑道系统项目 - 深层水泥搅拌工程(合约2)</h4>
    <hr class="marBottom20">
    <p>恭贺三星 - 利基联营于二零一六年七月二十八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场三跑道系统项目 - 深层水泥搅拌工程(合约2)</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$2,813,918,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2016Detail0722(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号NE/2015/02将军澳－蓝田隧道－P2路及相关工程</h4>
    <hr class="marBottom20">
    <p>恭贺中国路桥 - 利基联营于二零一六年七月二十二日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号NE/2015/02将军澳－蓝田隧道－P2路及相关工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$1,776,680,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015() {
    foreachItem();
    document.getElementById("whats-new__2015").classList.add('active');
    var element = document.querySelector(".list-box");
    element.style.display = 'block';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'none';
    element.innerHTML = `
   <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
   <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2015</div>
   <ul class="project_list nostyle"><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2015Detail1230()" class="cust_h4 txt_tur proj_item blocklink">
   太子道西420-422号发展项目工程<br><small class="txt_gray">2015 年 12 月 30 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2015Detail1117()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号HY/2014/18为道路构筑物提供无障碍通道设施 - 第三期第七份合约<br><small class="txt_gray">2015 年 11 月 17 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2015Detail0612()" class="cust_h4 txt_tur proj_item blocklink">
   合约编号CV/2013/08 莲塘/香园围口岸土地平整及基础建设工程–工程合约6<br><small class="txt_gray">2015 年 06 月 12 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2015Detail0608()" class="cust_h4 txt_tur proj_item blocklink">
   香港理工大学 - 设计及建造连接第八期校园发展之行人天桥<br><small class="txt_gray">2015 年 06 月 08 日 
   <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
   <a href="javascript:void(0)" onclick="handleClick2015Detail0521()" class="cust_h4 txt_tur proj_item blocklink">
   香港国际机场合约编号P562 - 办公室装修工程<br><small class="txt_gray">2015 年 05 月 21 日
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2015Detail0506()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号Q036895青衣城扩建工程<br><small class="txt_gray">2015 年 05 月 06 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2015Detail0331()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号CV/2014/03为道路构筑物提供畅道通行设施 — 第一组第一份合约<br><small class="txt_gray">2015 年 03 月 31 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2015Detail0311()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号Q038247日出康城冷气及通风系统维修服务<br><small class="txt_gray">2015 年 03 月 11 日
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul>
     <br><div class="pagination light-theme simple-pagination"><ul><li class="disabled"><span class="current prev">
     <span class="glyphicon glyphicon-triangle-left"></span></span></li><li class="active"><span class="current">1</span>
     </li><li><a href="javascript:void(0)" onclick="Click2015page2()" class="page-link">2</a></li><li>
     <a href="javascript:void(0)" onclick="Click2015page2()" class="page-link next"><span class="glyphicon glyphicon-triangle-right"></span></a></li></ul></div>
    `
}
function Click2016page2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">最新消息</div>
    <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">2015</div><ul class="project_list nostyle"><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2015Detail0309()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号Q037464 清水湾道8号冷气及通风系统维修服务<br><small class="txt_gray">2015 年 03 月 09 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2015Detail0227()" class="cust_h4 txt_tur proj_item blocklink">
    大围站上盖发展项目 - 土木及地基工程项目管理合约<br><small class="txt_gray">2015 年 02 月 27 日 
    <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li><li><div class="paddLeft20">
    <a href="javascript:void(0)" onclick="handleClick2015Detail0108()" class="cust_h4 txt_tur proj_item blocklink">
    合约编号K1434-14C 九龙塘站改善工程<br><small class="txt_gray">2015 年 01 月 08 日
     <span class="con_arr glyphicon glyphicon-triangle-right"></span></small></a></div><hr class="marBottom20"></li></ul><br>
     <div class="pagination light-theme simple-pagination"><ul><li>
     <a href="javascript:void(0)" onclick="handleClick2015()" class="page-link prev"><span class="glyphicon glyphicon-triangle-left"></span></a></li>
     <li><a href="javascript:void(0)" onclick="handleClick2015()" class="page-link">1</a></li><li class="active"><span class="current">2</span></li><li class="disabled">
     <span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}
function handleClick2015Detail0309(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号Q037464 清水湾道8号冷气及通风系统维修服务</h4>
    <hr class="marBottom20">
    <p>恭贺基利承建有限公司于二零一五年三月九日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号Q037464清水湾道8号冷气及通风系统维修服务</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$540,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0227(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">大围站上盖发展项目 - 土木及地基工程项目管理合约</h4>
    <hr class="marBottom20">
    <p>恭贺基利承建有限公司于二零一五年二月二十七日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>大围站上盖发展项目 - 土木及地基工程项目管理合约</p>
    <br>
    <p><strong>客户</strong></p>
    <p>新世界建筑有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$5,508,576.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0108(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号K1434-14C 九龙塘站改善工程</h4>
    <hr class="marBottom20">
    <p>恭贺基利承建有限公司于二零一五年一月八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号K1434-14C九龙塘站改善工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$102,212,893.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail1230(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">太子道西420-422号发展项目工程</h4>
    <hr class="marBottom20">
    <p>恭贺基利承建有限公司于二零一五年十二月三十日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>太子道西420-422号发展项目工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>惠城投资有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>HK$127,200,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail1117(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号HY/2014/18为道路构筑物提供无障碍通道设施 - 第三期第七份合约</h4>
    <hr class="marBottom20">
    <p>恭贺利达土木 - 显丰工程联营于二零一五年十一月十七成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号HY/2014/18为道路构筑物提供无障碍通道设施 - 第三期第七份合约</p>
    <br>
    <p><strong>客户</strong></p>
    <p>路政署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$349,800,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0612(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号CV/2013/08 莲塘/香园围口岸土地平整及基础建设工程–工程合约6</h4>
    <hr class="marBottom20">
    <p>恭贺中国路桥 - 大陆工程 - 基利联营于二零一五年六月十二日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号CV/2013/08 莲塘/香园围口岸土地平整及基础建设工程–工程合约6</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>总额</strong></p>
    <p>港币$6,518,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0608(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港理工大学 - 设计及建造连接第八期校园发展之行人天桥</h4>
    <hr class="marBottom20">
    <p>恭贺基利承建有限公司于二零一五年六月八日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港理工大学 - 设计及建造连接第八期校园发展之行人天桥</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港理工大学</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$131,800,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0521(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">香港国际机场合约编号P562 - 办公室装修工程</h4>
    <hr class="marBottom20">
    <p><span>恭贺基利承建有限公司于二零一五年五月二十一日成功取得以下工程合约</span>:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>香港国际机场合约编号P562 -&nbsp;办公室装修工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港机场管理局</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$15,158,369.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0506(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号Q036895青衣城扩建工程</h4>
    <hr class="marBottom20">
    <p>恭贺基利承建有限公司于二零一五年五月六日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号Q036895青衣城扩建工程</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$707,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0331(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号CV/2014/03为道路构筑物提供畅道通行设施 — 第一组第一份合约</h4>
    <hr class="marBottom20">
    <p>恭贺利达土木 - 显丰工程联营于二零一五年三月三十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号CV/2014/03为道路构筑物提供畅道通行设施 — 第一组第一份合约</p>
    <br>
    <p><strong>客户</strong></p>
    <p>土木工程拓展署</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$272,000,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
function handleClick2015Detail0311(){
    var element = document.querySelector(".list-box");
    element.style.display = 'none';
    var elementDetail = document.querySelector(".detail-box");
    elementDetail.style.display = 'block';
    elementDetail.innerHTML = `<div class="col-xs-12 detailArea"><h4 class="txt_tur paddBottom20">合约编号Q038247日出康城冷气及通风系统维修服务</h4>
    <hr class="marBottom20">
    <p>恭贺基利承建有限公司于二零一五年三月十一日成功取得以下工程合约:</p>
    <br>
    <p><strong>项目名称</strong></p>
    <p>合约编号Q038247日出康城冷气及通风系统维修服务</p>
    <br>
    <p><strong>客户</strong></p>
    <p>香港铁路有限公司</p>
    <br>
    <p><strong>合约总额</strong></p>
    <p>港币$387,000.00</p>
    <p class="paddBottom20"><a href="javascript:void(0)" onclick="back()" class="backtolist fright"><span class="glyphicon glyphicon-triangle-left"></span> back</a></p></div>`
}
