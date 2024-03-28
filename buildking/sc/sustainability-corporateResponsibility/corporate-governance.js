function ClickPage2() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
   <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">企业管治</div>
   <div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10"> 企业管治报告书</div>
   <ul class="project_list nostyle"><li>
   <a href="./files/Build King_E_AR (CG Report).pdf" target="_blank" class="blocklink">
   企业管治报告书 (二零一二)</a></li><li>
   <a href="./files/BK 2011 Corporate Governance - eng.pdf" target="_blank" class="blocklink">
   企业管治报告书 (二零一一)</a></li><li>
   <a href="./files/BK 2010 Corporate Governance - eng.pdf" target="_blank" class="blocklink">
   企业管治报告书 (二零一零)</a></li><li>
   <a href="./files/E_Build King_HAR030(0958)CGR.pdf" target="_blank" class="blocklink">
   企业管治报告书 (二零零九)</a></li><li>
   <a href="./files/20090420133508_Build King_E_CG (website).pdf" target="_blank" class="blocklink">
   企业管治报告书 (二零零八)</a></li><li>
   <a href="./files/20080708165731_e_Corporate Governance Report(website).pdf" target="_blank" class="blocklink">
   企业管治报告书 (二零零七)</a></li><li>
   <a href="./files/20070713104442_e_Corporate Governance Report _2-5-07.pdf" target="_blank" class="blocklink">
   企业管治报告书 (二零零六)</a></li></ul><br>
   <div class="pagination light-theme simple-pagination">
   <ul><li><a href="javascript:void(0)" onclick="ClickPage1()" class="page-link prev"><span class="glyphicon glyphicon-triangle-left"></span></a></li>
   <li><a href="javascript:void(0)" onclick="ClickPage1()" class="page-link">1</a></li><li class="active">
   <span class="current">2</span></li><li class="disabled"><span class="current next"><span class="glyphicon glyphicon-triangle-right"></span></span></li></ul></div>
    `
}

function ClickPage1() {
    var element = document.querySelector(".list-box");
    element.innerHTML = `
    <div class="visible-xs hidden cust_h2 text-bold txt_gray1 paddBottom20">企业管治
											</div>
											<div class="visible-xs hidden cust_h4 text-bold txt_tur paddBottom10">
												企业管治报告书</div>
											<ul class="project_list nostyle">
                                            <li><a href="./files/Corporate Goverence_C_2022.pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零二二)</a></li>
                                    <li><a href="./files/Corporate Governance Report_2021 (C).pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零二一)</a></li>
                                    <li><a href="./files/CW_Corporate Goverence Report 2020.pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零二零)</a></li>
                                    <li><a href="./files/AR _ C_Corporate Goverence Report 2019.pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零一九)</a></li>
                                    <li><a href="./files/BK_AR_C_Corporate Governance 2018.pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零一八)</a></li>
                                    <li><a href="./files/Corporate Governance 2018_Chi.pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零一七)</a></li>
                                    <li><a href="./files/cb_Corporate Goverence Report 2016.pdf"
                                            target="_blank" class="blocklink"> 企业管治报告书 (二零一六)</a></li>
                                    <li><a href="./files/BK_CG_Report_E.pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零一五)</a></li>
                                    <li><a href="./files/BK_CG_Report_E_1337.pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零一四)</a></li>
                                    <li><a href="./files/Build King Corporate Governance Report 2013 (Eng).pdf"
                                            target="_blank" class="blocklink">企业管治报告书 (二零一三)</a></li>
											</ul><br>
											<div class="pagination light-theme simple-pagination">
												<ul>
													<li class="disabled"><span class="current prev"><span
																class="glyphicon glyphicon-triangle-left"></span></span>
													</li>
													<li class="active"><span class="current">1</span></li>
													<li><a href="javascript:void(0)" onclick="ClickPage2()"
															class="page-link">2</a></li>
													<li><a href="javascript:void(0)" onclick="ClickPage2()"
															class="page-link next"><span
																class="glyphicon glyphicon-triangle-right"></span></a>
													</li>
												</ul>
											</div>
    `
}