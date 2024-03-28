function foreachItem() {
    var conItems = document.getElementsByClassName('con_item');
    for (var i = 0; i < conItems.length; i++) {
        // 对每个元素执行操作
        conItems[i].classList.remove('active');
    }
}
function handleClick(type) {
    foreachItem();
    var elementDetail = document.querySelector(".result_box");
    switch (type) {
        case 'build-king-holdings-limited':
            document.getElementById("hong-kong__build-king-holdings-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">利基控股有限公司</div>	<div class="ax_content"><img src="../../img/contactus_bklogo.png" border="0"><br><br>	<p class="txt_tur text-bold">利基控股有限公司</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2375 3655</p>
            </div>`
            break;
        case 'build-king-civil-engineering-limited':
            document.getElementById("hong-kong__build-king-civil-engineering-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">利基土木工程有限公司 (前名 利达土木工程有限公司)</div>	<div class="ax_content"><img src="../../img/contactus_bklogo.png" border="0"><br><br>	<p class="txt_tur text-bold">利基土木工程有限公司 (前名 利达土木工程有限公司)</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2375 3655</p>
        <p><span style="font-size: 10.0pt; font-family: DengXian; mso-ascii-font-family: 新細明體; mso-hansi-font-family: 新細明體; mso-bidi-font-family: 新細明體; color: #212121; mso-font-kerning: 0pt; mso-ansi-language: EN-US; mso-fareast-language: ZH-CN; mso-bidi-language: AR-SA;" lang="ZH-CN">电邮</span></p>
            </div>`
            break;
        case 'build-king-construction-limited':
            document.getElementById("hong-kong__build-king-construction-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">利基建筑有限公司 (前名 基利承建有限公司)</div>	<div class="ax_content"><img src="../../img/contactus_bklogo.png" border="0"><br><br>	<p class="txt_tur text-bold">利基建筑有限公司 (前名 基利承建有限公司)</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座</p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2528 1751</p>
            </div>`
            break;
        case 'build-king-interior-and-construction-limited':
            document.getElementById("hong-kong__build-king-interior-and-construction-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">利基装饰及营造有限公司 (前名 溢兴装饰工程有限公司)</div>	<div class="ax_content"><img src="../../img/contactus_bklogo.png" border="0"><br><br>	<p class="txt_tur text-bold">利基装饰及营造有限公司 (前名 溢兴装饰工程有限公司)</p>
            <p><span>香港九龙观塘鸿图道74号明顺大厦20楼</span></p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3790</p>
        <p>传真: (852) - 3590 5479</p>
        <p>Website: <a href="http://www.yathing.hk" target="_blank">http://www.yathing.hk</a></p>
            </div>`
            break;
        case 'build-king-management-limited':
            document.getElementById("hong-kong__build-king-management-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">利基管理有限公司 (前名 利达建筑有限公司)</div>	<div class="ax_content"><img src="../../img/contactus_bklogo.png" border="0"><br><br>	<p class="txt_tur text-bold">利基管理有限公司 (前名 利达建筑有限公司)</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六樓</p>
        <p>电邮:&nbsp;<a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2375 3655</p>
            </div>`
            break;
        case 'build-king-zens-engineering-limited':
            document.getElementById("hong-kong__build-king-zens-engineering-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">利基(单氏)工程有限公司 (前名 惠记(单氏)建筑运输有限公司)</div>	<div class="ax_content"><img src="../../img/contactus_bklogo.png" border="0"><br><br>	<p class="txt_tur text-bold">利基(单氏)工程有限公司 (前名 惠记(单氏)建筑运输有限公司)</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2392 4099</p>
            </div>`
            break;
        case 'integral-e-and-m-engineering-limited':
            document.getElementById("hong-kong__integral-e-and-m-engineering-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10"> 宏高机电工程有限公司</div>	<div class="ax_content"><img src="../../img/IEM Logo 2.png" border="0"><br><br>	<p class="txt_tur text-bold"> 宏高机电工程有限公司</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</p>
        <p>电邮:&nbsp;<a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2375 3655</p>
            </div>`
            break;
        case 'integral-e-and-m-contracting-limited':
            document.getElementById("hong-kong__integral-e-and-m-contracting-limited").classList.add('active');
            elementDetail.innerHTML = `、<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10"> 宏高机电安装有限公司</div>	<div class="ax_content"><img src="../../img/IEC_Logo.jpg" border="0"><br><br>	<p class="txt_tur text-bold"> 宏高机电安装有限公司</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</p>
        <p>电邮:&nbsp;<a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2375 3655</p>
            </div>、`
            break;
        case 'leader-marine-contractors-limited':
            document.getElementById("hong-kong__leader-marine-contractors-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10"> 利达海事工程有限公司</div>	<div class="ax_content"><img src="../../img/leader_logo.png" border="0"><br><br>	<p class="txt_tur text-bold"> 利达海事工程有限公司</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2375 3655</p>
            </div>`
            break;
        case 'titan-foundation-limited':
            document.getElementById("hong-kong__titan-foundation-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">宏达地基有限公司</div>	<div class="ax_content"><img src="../../img/titan-01.jpg" border="0"><br><br>	<p class="txt_tur text-bold">宏达地基有限公司</p>
            <p><span>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</span></p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 3460 3382</p>
        <p>传真: (852) - 3460 3380</p>
            </div>`
            break;

        case 'overseas__leader-marine-cont-llc-uae':
            document.getElementById("overseas__leader-marine-cont-llc-uae").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">Leader Marine Cont. L.L.C (U.A.E.)</div>	<div class="ax_content">	<p class="txt_tur text-bold">Leader Marine Cont. L.L.C (U.A.E.)</p>
            <p>Office 801, Silver Wave Tower, Tourist Club Area, Meena Road, Abu Dhabi, UAE</p>
        <p>P.O. Box 109276, Abu Dhabi, U.A.E.</p>
        <p>Tel: (971) - 2 - 6508525</p>
        <p>Fax: (971) - 2 - 6509529</p>
        <br>
        <p>Sharjah Office :</p>
        <p>Office 503, Crystal Plaza Tower C, King Faisal Road, Sharjah, UAE</p>
        <p>P.O. Box 39169, Sharjah, U.A.E.</p>
        <p>Tel: (971) - 6 – 5750083</p>
        <p>Fax: (971) - 6 - 5750084</p>
        <br>
        <p>Email: <a href="mailto:leadermarine@leadercon.ae">leadermarine@leadercon.ae</a></p>
            </div>`
            break;
        case 'overseas__wai-kee-china-construction-co-ltd-shanghai-office':
            document.getElementById("overseas__wai-kee-china-construction-co-ltd-shanghai-office").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">惠记中国建筑有限公司</div>	<div class="ax_content">	<p class="txt_tur text-bold">惠记中国建筑有限公司</p>
            <p>中国上海市卢湾区打浦路三十八弄(海华花园)三号七A 邮编: 200023</p>
        <p>电邮:&nbsp;<a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (86) - 21 - 54652310</p>
        <p>传真: (86) - 21 - 64668089</p>
            </div>`
            break;
        case 'overseas__wuxi-qianhui-sewage-treatment-co-ltd':
            document.getElementById("overseas__wuxi-qianhui-sewage-treatment-co-ltd").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">无锡钱惠污水处理有限公司</div>	<div class="ax_content">	<p class="txt_tur text-bold">无锡钱惠污水处理有限公司</p>
            <p><span>中国无锡市钱桥镇晓星村小陆岸头 (邮编：214151)</span></p>
        <p>电邮:&nbsp;<a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (86) - 510 - 83238119 / 83238619 / 83201318</p>
        <p>传真: (86) - 510 - 83201338</p>
            </div>`
            break;
        default:
            document.getElementById("hong-kong__build-king-holdings-limited").classList.add('active');
            elementDetail.innerHTML = `<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">利基控股有限公司</div>	<div class="ax_content"><img src="../../img/contactus_bklogo.png" border="0"><br><br>	<p class="txt_tur text-bold">利基控股有限公司</p>
            <p>香港九龙观塘伟业街二二三号宏利金融中心B座六楼</p>
        <p>电邮: <a href="mailto:info@buildking.hk">info@buildking.hk</a></p>
        <p>电话: (852) - 2272 3680</p>
        <p>传真: (852) - 2375 3655</p>
            </div>`
            break;
    }
}