// ==UserScript==
// @name           重庆网上房地产-房源信息查询助手
// @name:en        CQ315House - Housing Info Query Assistant
// @name:zh        重庆网上房地产-房源信息查询助手
// @namespace      glasscp@163.com
// @version        0.1.5
// @description    重庆网上房地产-房源信息查询助手(仅供个人学习研究使用,任何公司或个人不得利用其从事违法经营活动)
// @description:en CQ315House - Housing information query assistant
// @author         Kerry
// @match          *://*.cq315house.com/*
// @match          *://218.70.88.119/*
// @icon           data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyODAyM2RjZC1jZjM3LTYyNDAtYTdjOC1hNTdlNjc0MWYxYzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjVBQTk2NTdCNEFBMTFFN0E2QzNFNDBFQUJDODVBNjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjVBQTk2NTZCNEFBMTFFN0E2QzNFNDBFQUJDODVBNjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTU0Y2E5ZjctZGNlOS0zMDRmLWE1YjAtZGY1ZGI1YTM2YmFjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MmI5ZjY0N2EtNzViMi0xMWU3LTkzN2QtYzZiYTEwYjI0Y2VlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5kXnggAABLBJREFUeNrsm39oVlUYx9/pVGyZMGVhitofooaIrjBXSyV/QP5MmbJwGmItckIalflr4kjRIoomlUNR0CidpCIuN5UITeYP1kqEmq2NNNZWuaWzEvWd34d9Fw+H9937vtu9772vOwc+3N1z7z33PN/7nPOc87wsqaWlJdCVS5IVwApgBbACOFnSpn0SzW2jQRF4HPwMVoBSJ97fUPZqTPd380D0meBb8CRIBiNACVjuhQfEW4DXwGHwYIh+FIJtoPv9KIAY9TH40HjnHnBLneeBI+Ch+0mAvnRxPTj/A9lgMXgW/KGuPcchMsRoZzDYrXjBic4lu2z8UHAUPKbnKTAHlPP8DOcDuW8k60aBs7zvLOvSwYuGsJ/72QMy2Hlt/CUaW27cW8P7j6u6h8HXYEG4CObnIZDNzqepOglzT4HaMM/8DaaDT1Vdb7APrE2IOQBrAPkq6+mavdQlmQBngOsRmrjDueJ1EFT17zCC+FcAGN+Ls3qBqg6y4zK7342huQ/A8+CmqpvkWwFgfH8cToKFqroZzAIfdbBZCYfPgKu+DoMwXlZy58DTqvoKz0s62fx3YByoCHGtv+cCwPgpnNEfVdXn2ekfHPpIdfSEgyGizFLPBIDxuTh8xXjcVg5wrP7usKf+A7LAu0bfd4CtnbEjuQOGy7J2C3jDuCR1a4Bb+2uZUFeBKrBd7RneAsNADoVyzwNgfAoOXxrG3wZLsA1dDeKRXNgJpoImVTcXnAIDXBMAxg/kS2ar6mvSGRi+O867SllkjWcuIaCWyufQz7GOC4BG0zmp6cbFFTNg/DceJXN+oginVN0gmZTR31mOCYDG5vAlqar6expf5XFG6y8gkWi/qusJDqHfK6NpoN2UGBp5k5ObKZS4/Ykwz3ghxFBuqMwik+Vy9PVOTB4AI3qAIoadbmHW7PEs/cA0kMkNUrTlFVmMwZa+sQ6BveBldf6vh26ew3VFKYdiNRgexdD431uZa4hJgEKVqpKXT/BQAIk+m5k52slQtyLCM4vARbV+KIhJAIyZ02ykUhIYOL/goQDvgw0MfYWsi5QzrONwkZXq2+h/WcxRAA8V4/AEjr96PNPr+WYej8ciPYR+S+5hJo7vdXgpjIej3sNzSzxKVdUSSW3N50xdLyEKXFb3yY8jk+nav3HTUx3iFbIAW0dP+CyaPqH/Qcf3Au2UTGPHthH8SRfuqeo3BVqzwcXMFOUa7Wzm9S8M42WjdYHL3qBTnXYzKzzbWDm2lR7cxclXfynM9SLO+o3K+NP8u9mXKbEQRYz/BeQHWvP4uqTQ+AbO0EXGV+0TaP0JTcouijKO2aEmeo7vPaCRSYsGnkt+L8/YRU4EP/JcfhzR2d/RPEpW+AGj7YpEEOCwMr5t5tYClCnjA1ysrA2R8lrmZohxcwhcMc7NLJG5dq839ynxiLFuChCMsH+4G+H+QKILkBDFCmAFsAJYAbp0cWwhhJ2X7PKS2skJVkaI7bXxiv3WA6wAVgArgBXACtC5MJiFcDfGR3akxluAPJ9/2KAbQ6AqQbxaftGqccMDJH0ty7xHfGy8JEzzsSq9Ee0D9l9mrABWACuAFcAKYAWwAnTZck+AAQAW0kT67b3FTwAAAABJRU5ErkJggg==
// @require        https://cdn.staticfile.org/xlsx/0.18.5/xlsx.full.min.js
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_log
// @grant          GM_xmlhttpRequest
// @license        MIT
// ==/UserScript==
/*jshint esversion: 6 */
(function () {
    'use strict';
    var websiteHost = window.location.host;//URL的主机部分:www.home.com
    var windowHref = window.location.href; //整个URL字符串(查询参数部分)
    var currentUrl = window.location.origin + window.location.pathname;
    var currentPath = window.location.pathname;//URL的路径部分(即文件地址)
    const RouteDataParas = {
        roomListUrl: 'http://www.cq315house.com/HtmlPage/ShowRooms.html',
        roomListPath: '/HtmlPage/ShowRooms.html',
        roomInfoWebSrvUrl: '../WebService/Handler.ashx?ac=fwxx1&fid=',
        webSrvUrl: '../WebService/WebFormService.aspx',
        buildInfoXhr: '/GetBuildingInfo', //获取楼盘信息 {"buildingid":""}
        roomListXhr: '/GetRoomJson', //获取楼盘户室详细信息 {"buildingid":""}
        roomInfoXhr: '/GetRoomInfo', //获取指定户室Id的户室详细信息{"roomId":""}
    };
    const displayDataTypes = [
        {Key:'ROOMNO', Value:'房号'},
        {Key:'BAREA', Value:'建筑面积(㎡)'},
        {Key:'IAREA', Value:'套内面积(㎡)'},
        {Key:'NSJMJG', Value:'建面单价(元/㎡)'},
        {Key:'NSJG', Value:'套内单价(元/㎡)'},
        {Key:'TOTALPRC', Value:'总价(万元)'},
        {Key:'ROOMSTATUS', Value:'房屋状态'}
    ];
    var SELECTED_DATA_TYPE=displayDataTypes[0].Key;
    var vfObj = {
        totalCap: '房源共计：',
        totalStyle: 'font-weight:800;background-color: #4dbb7c;padding:0 5px;',
        unitCap: ' 套',
        rpurpCap: '用        途：',
        rstruCap: '结        构：',
        rTypeCap: '户        型：',
        rbareCap: '建筑面积：',
        riareCap: '套内面积：',
        runitCap: ' ㎡',
        ipricCap: '套内单价：',
        bpricCap: '建面单价：',
        punitCap: ' 元/㎡',
        tpricCap: '总价(万元)：',
        tbId: '_mybuilding'
    };
    var statsObj = {
        totalCnt: 0, //楼幢房源总数量
        sellCnt: 0, //已销售(含已网签/或已交易完成不可售)数量
        subsCnt: 0, //已认购数量
        allowCnt: 0, //可销售数量
        rbareMin: 0, //建面Min
        rbareMax: 0, //建面Max
        riareMin: 0, //套内Min
        riareMax: 0, //套内Max
        ipricMin: 0, //套内单价Min
        ipricMax: 0, //套内单价Max
        bpricMin: 0, //建面单价Min
        bpricMax: 0, //建面单价Max
        tpricMin: 0, //总价Min
        tpricMax: 0, //总价Max
        apiMsg: '' //[GetRoomInfo]API返回的错误信息
    };

    // cq315house[楼盘表]解析开始
    var cq315houseAnalysis={};

    //仅解析[楼盘表]页面:/HtmlPage/ShowRooms.html
    cq315houseAnalysis.judgeWebUrl=function(){
        if (currentUrl.indexOf(RouteDataParas.roomListPath)!=-1){
            return true;
        }
        return false;
    };
    //[楼盘表]页面相关元素初始化处理：
    // 1.增加[spanRoomNo]元素记录各cell的房屋房号信息
    // 2.增加[spanRoomStatus]元素记录各cell的房屋状态信息
    // 3.增加[spanRoomTotalPrice]元素记录各cell的房屋总价信息
    // 4.房号cell中a标签绑定[data-roomid]属性
    // 5.房号cell中a标签绑定[data-unitno]属性
    // 6.房号cell中a标签重置onclick事件
    // 7.头部增加相关统计信息元素
    cq315houseAnalysis.initShowRoomsPage=function(){
        //各房号cell设置
        let tb = document.getElementById(vfObj.tbId);
        if (tb == undefined) return;
        let tbRows = tb.tBodies[0].rows;
        let roomStatus = 'None';
        for (let i = tbRows.length - 1; i >= 0; i--) {
            let tbCells = tbRows[i].cells;
            for (let x = 0, len = tbCells.length; x < len; x++) {
                let objt = tbCells[x].getAttribute('objt');//房源Cell
                if (objt != 'tdclass') continue; //objt='tdclass'的cell是房源
                //房号信息span元素设置(新增)
                if (!tbCells[x].getElementsByClassName('spanRoomNo')[0]){
                    let spanRoomNo = document.createElement('span');
                    spanRoomNo.className='spanRoomNo';
                    spanRoomNo.style.cssText = 'display:none;';
                    spanRoomNo.innerText = `房号：${tbCells[x].getElementsByTagName("a")[0].innerText.trim()}`;
                    tbCells[x].appendChild(spanRoomNo);
                }
                //房屋状态信息span元素设置(新增)
                if (!tbCells[x].getElementsByClassName('spanRoomStatus')[0]){
                    let spanRoomStatus = document.createElement('span');
                    spanRoomStatus.className='spanRoomStatus';
                    spanRoomStatus.style.cssText = 'display:none;';
                    spanRoomStatus.innerText = `房屋状态：${roomStatus}`;
                    tbCells[x].appendChild(spanRoomStatus);
                }
                //房屋总价信息span元素设置(新增)
                if (!tbCells[x].getElementsByClassName('spanRoomTotalPrice')[0]){
                    let spanRoomTotalPrice = document.createElement('span');
                    spanRoomTotalPrice.className='spanRoomTotalPrice';
                    spanRoomTotalPrice.style.cssText = 'display:none;';
                    let roomIarea = tbCells[x].getElementsByClassName('spanRoomiArea')[0].innerText.split('：')[1].toString().trim();//套内面积
                    let roomNsjg = tbCells[x].getElementsByClassName('spanKfsNsjg')[0].innerText.split('：')[1].toString().trim();//套内单价
                    let totalPrice = (Math.floor(((roomIarea * 1) * (roomNsjg * 1)/10000) * 100) / 100).toFixed(2);
                    spanRoomTotalPrice.innerText = `房屋总价：${totalPrice}`;
                    tbCells[x].appendChild(spanRoomTotalPrice);
                }
                //旧有的[状态]span元素初始化设置
                tbCells[x].getElementsByClassName('spanRoomState')[0].innerText = '详细状态：None';
                //旧有建面单价/套内单价信息span元素设置(格式化2位小数)
                let roomNsjg = tbCells[x].getElementsByClassName('spanKfsNsjg')[0].innerText.split('：')[1].toString().trim();//套内单价
                let roomNsjmjg = tbCells[x].getElementsByClassName('spanKfsNsjmjg')[0].innerText.split('：')[1].toString().trim();//建面单价
                tbCells[x].getElementsByClassName('spanKfsNsjg')[0].innerText = `套内拟售价格：${parseFloat(roomNsjg).toFixed(2)}`;
                tbCells[x].getElementsByClassName('spanKfsNsjmjg')[0].innerText = `建面拟售价格：${parseFloat(roomNsjmjg).toFixed(2)}`;
                //房号cell中alink重置
                let onclickValueParas = tbCells[x].getElementsByTagName('input')[0].getAttributeNode('onclick').nodeValue.match(/\{.*?\}/g);//获取input中onclick的传参
                // console.log(onclickValueParas[0], typeof onclickValueParas[0]);
                let unitNo = onclickValueParas[0].match(/(?<=uid:\s).*?(?=,)/gi); //获取传参中的(uid)单元No
                let roomId = tbCells[x].getElementsByTagName('input')[0].value;//房号ID,记录在checkbox的value中
                let curAlink = tbCells[x].getElementsByTagName('a')[0];
                curAlink.setAttribute('data-roomid',roomId);//把房号ID绑定给自定义data-roomid属性
                curAlink.setAttribute('data-unitno',unitNo);//把单元No绑定给自定义data-unitno属性
                curAlink.style.cssText = 'color:#000;';
                curAlink.removeAttribute('onclick');//移除原始onclick事件
                curAlink.onclick=function(){cq315houseAnalysis.ShowRoomInfoByPass(this);};//alink重置onclick事件
            }
        }
        // 头部增加相关统计信息元素
        // 1.1.[楼幢房源总数]元素设置
        let divTotalCntText = document.createElement('div');
        divTotalCntText.innerHTML=`【${getQueryString('block')}】${vfObj.totalCap}<span id="spanTotalCnt">${statsObj.totalCnt}</span>${vfObj.unitCap}`;
        let tbTop2FirstRow = document.getElementById('tbTop2').tBodies[0].rows[0];
        if (!tbTop2FirstRow.cells[1]) {
            let objTd = document.createElement('td');
            objTd.style.cssText = 'vertical-align:bottom;font-weight:600;';
            objTd.appendChild(divTotalCntText);
            tbTop2FirstRow.appendChild(objTd);
        } else {
            tbTop2FirstRow.cells[1].innerHTML = '';
            tbTop2FirstRow.cells[1].appendChild(divTotalCntText);
        }
        // 1.2.楼幢单价，面积等区间数据元素设置
        let divDataRangeText = document.createElement('div');
        let bpricRange=`${vfObj.bpricCap}<span id="spanBpricMin">${statsObj.bpricMin}</span> ~ <span id="spanBpricMax">${statsObj.bpricMax}</span> ${vfObj.punitCap}`;
        let ipricRange=`${vfObj.ipricCap}<span id="spanIpricMin">${statsObj.ipricMin}</span> ~ <span id="spanIpricMax">${statsObj.ipricMax}</span> ${vfObj.punitCap}`;
        divDataRangeText.innerHTML = `${bpricRange}<br/>${ipricRange}`;
        if (!tbTop2FirstRow.cells[2]) {
            let objTd = document.createElement('td');
            objTd.style.cssText = 'padding-left:20px;vertical-align:bottom;';
            objTd.appendChild(divDataRangeText);
            tbTop2FirstRow.appendChild(objTd);
        } else {
            tbTop2FirstRow.cells[2].innerHTML = '';
            tbTop2FirstRow.cells[2].appendChild(divDataRangeText);
        }
        // 1.3.暂定显示API返回的错误信息
        let spanApiMsg = document.createElement('span');
        spanApiMsg.id='spanApiMsg';
        // spanApiMsg.style.cssText = 'display:none;';
        if (!tbTop2FirstRow.cells[3]) {
            let objTd = document.createElement('td');
            objTd.style.cssText = 'padding-left:20px;vertical-align:top;';
            objTd.appendChild(spanApiMsg);
            tbTop2FirstRow.appendChild(objTd);
        } else {
            tbTop2FirstRow.cells[3].innerHTML = '';
            tbTop2FirstRow.cells[3].appendChild(spanApiMsg);
        }
        // 2.[图例]table重置: 追加[认购]状态,追加各状态下的房源合计
        let tbTuliFirstRow = document.getElementById('tbTuli').tBodies[0].rows[0];
        tbTuliFirstRow.cells.innerHTML='';
        tbTuliFirstRow.cells[1].innerHTML=`<span style="display:inline-block;width:50px;margin-right:15px;background-color:#00ff00;">&nbsp;</span>可销售: <span id="spanAllowCnt">${statsObj.allowCnt}</span>${vfObj.unitCap}`;
        tbTuliFirstRow.cells[2].innerHTML=`<span style="display:inline-block;width:50px;margin-right:15px;background-color:#ff00ff;">&nbsp;</span>已销售: <span id="spanSellCnt">${statsObj.sellCnt}</span>${vfObj.unitCap}`;
        tbTuliFirstRow.cells[3].innerHTML=`<span style="display:inline-block;width:50px;margin-right:15px;background-color:#ffa500;">&nbsp;</span>已认购: <span id="spanSubsCnt">${statsObj.subsCnt}</span>${vfObj.unitCap}`;
        if (!tbTuliFirstRow.cells[4]) {
            let tdPlus = document.createElement('td');
            tbTuliFirstRow.appendChild(tdPlus);
        }
        tbTuliFirstRow.cells[4].innerHTML='<span style="display:inline-block;width:50px;margin-right:15px;background-color:#ffff00;">&nbsp;</span>不可售';
        // 3.[收起]div标签重置
        let tbTop1FirstRow = document.getElementById('tbTop1').tBodies[0].rows[0];
        tbTop1FirstRow.style.cssText = 'cursor: pointer;';
        tbTop1FirstRow.onclick=function(){
            document.getElementById('titlesPan').style.display='none';
            document.getElementById('OpenTitleSpanDiv').style.display='block';
        };
        // 4.[展开]div标签重置
        let divOpenTitle = document.getElementById('OpenTitleSpanDiv');
        let spanFoldText=document.createElement('span');
        let spanFoldProjectName=document.createElement('span');
        let imgProjectName=document.createElement('img');
        let spanFoldCntInfo1=document.createElement('span');
        let spanFoldCntInfo2=document.createElement('span');
        let spanFoldTotalCnt=document.createElement('span');
        spanFoldTotalCnt.id='spanFoldTotalCnt';
        divOpenTitle.innerHTML='';
        divOpenTitle.style.cssText = 'margin-left:5px;margin-top:5px;height:40px;line-height:40px;cursor:pointer;padding-left:10px;';
        spanFoldText.innerText='展开';
        imgProjectName.setAttribute('src',document.getElementById('projectName_img').getAttribute('src'));
        imgProjectName.style.cssText='margin-bottom:-5px;';
        spanFoldProjectName.appendChild(imgProjectName);
        spanFoldProjectName.style.cssText='padding: 0 20px;';
        spanFoldCntInfo1.innerText=`【${getQueryString('block')}】${vfObj.totalCap}`;
        spanFoldCntInfo2.innerText=`${vfObj.unitCap}`;
        spanFoldTotalCnt.innerText=`${statsObj.totalCnt}`;
        divOpenTitle.appendChild(spanFoldText);
        divOpenTitle.appendChild(spanFoldProjectName);
        divOpenTitle.appendChild(spanFoldCntInfo1);
        divOpenTitle.appendChild(spanFoldTotalCnt);
        divOpenTitle.appendChild(spanFoldCntInfo2);
        divOpenTitle.onclick=function(){
            document.getElementById('titlesPan').style.display='block';
            document.getElementById('OpenTitleSpanDiv').style.display='none';
        };
        divOpenTitle.click();
        //[楼盘说明]div标签重置
        let divLpsm = document.getElementById('lpsm');
        divLpsm.removeAttribute('class');
        divLpsm.style.cssText = 'padding: 10px 0 0 10px;';
    };
    // [楼盘表]页面生成房源显示信息类别的Radio组
    cq315houseAnalysis.createRoomDataTypeContentBox=function(){
        let targentElement = document.getElementById('DivInfo');
        let parent = targentElement.parentNode;
        if (document.getElementById('datatype-text-box')) {
            document.getElementById('datatype-text-box').remove();
        }
        let divObj = document.createElement('div');
        divObj.id = 'datatype-text-box';
        divObj.className = 'modal-content';
        divObj.style.cssText = 'margin:-1px 0 10px 5px;padding-left:10px;text-align:left;height:40px;line-height:40px;';
        let radios = '';
        for (let y = 0, len = displayDataTypes.length; y < len; y++) {
            let displayDataType = displayDataTypes[y];
            if (y == 0) {
                radios += '<label class="radio-inline">';
                radios += `<input type="radio" name="dataTypeRadioOptions" value="${displayDataType.Key}" style="vertical-align:middle;margin-top:-2px;" checked="true"> ${displayDataType.Value}`;
            } else {
                radios += '<label class="radio-inline" style="margin-left:20px;">';
                radios += `<input type="radio" name="dataTypeRadioOptions" value="${displayDataType.Key}" style="vertical-align:middle;margin-top:-2px;"> ${displayDataType.Value}`;
            }
            radios += '</label>';
        }
        radios += '<input type="button" name="btnExportExcel" value="导出Excel" style="margin-left:30px;height:25px;cursor:pointer;background-color:#fff;border:1px solid #fff;border-radius:4px;">';
        divObj.innerHTML = radios;
        parent.insertBefore(divObj, targentElement.nextSibling);
        //绑定事件
        let objRadio = document.getElementsByName('dataTypeRadioOptions');
        for (let i = 0, len = objRadio.length; i < len; i++) {
            objRadio[i].onchange = function(){cq315houseAnalysis.displaySeleTypeDatas();};
        }
        //绑定导出Excel按钮事件
        let objBtn = document.getElementsByName('btnExportExcel')[0];
        objBtn.onclick = function(){cq315houseAnalysis.exportExcel();};
        objBtn.onmouseover = function () {
            //设置其背景及边框颜色
            this.style.setProperty('background-color','#eee');
            this.style.setProperty('border','1px solid #999');
        };
        objBtn.onmouseout = function () {
            //恢复背景及边框颜色
            this.style.setProperty('background-color','#fff');
            this.style.setProperty('border','1px solid #fff');
        };
    };
    //重置各房号cell相关信息
    cq315houseAnalysis.resetRoomCellsInfo=function(){
        let tb = document.getElementById(vfObj.tbId);
        if (tb == undefined) return;
        let tbRows = tb.tBodies[0].rows;
        // 先列后行遍历 - 叠拼类房源统计要注意
        statsObj.totalCnt=0;
        statsObj.sellCnt=0;
        statsObj.subsCnt=0;
        statsObj.allowCnt=0;
        statsObj.apiMsg='';
        let tbCellCnt = tb.tBodies[0].rows[0].cells.length;
        let tbRowsCnt = tb.tBodies[0].rows.length;
        for (let x = 0; x < tbCellCnt; x++) {
            for (let i = 0; i < tbRowsCnt; i++) {
                let tbCell = tbRows[i].cells[x];
                let objt = tbCell.getAttribute('objt');//房源Cell
                if (objt != 'tdclass') {continue; } //objt='tdclass'的cell是房源
                //重新通过API获取房屋状态(异步)
                cq315houseAnalysis.getRoomStatus(tbCell);
                // 叠拼类房源的判定
                let isRowspan = tbCell.getAttribute('rowspan');
                if (isRowspan) i = i + isRowspan*1 - 1; //叠拼类房源1套会有多行,防止重复统计
            }
        }
    };
    //API异步获取指定roomid的户室详细信息
    cq315houseAnalysis.getRoomStatus = function (pTbCell) {
        let objRoomStatus = pTbCell.getElementsByClassName('spanRoomStatus')[0];
        let objRoomState = pTbCell.getElementsByClassName('spanRoomState')[0];
        let roomInfos = {
            roomId: pTbCell.getElementsByTagName('a')[0].getAttribute('data-roomid'),
            unitNo: pTbCell.getElementsByTagName('a')[0].getAttribute('data-unitno'),//单元No
            roomNo: pTbCell.getElementsByClassName('spanRoomNo')[0].innerText.split('：')[1].toString().trim(),//房号
            roomUse: pTbCell.getElementsByClassName('spanRoomUse')[0].innerText.split('：')[1].toString().trim(),//用途
            roomStru: pTbCell.getElementsByClassName('spanRoomStru')[0].innerText.split('：')[1].toString().trim(),//结构
            roomType: pTbCell.getElementsByClassName('spanRoomType')[0].innerText.split('：')[1].toString().trim(),//户型
            roomBarea: pTbCell.getElementsByClassName('spanRoombArea')[0].innerText.split('：')[1].toString().trim(),//建面
            roomIarea: pTbCell.getElementsByClassName('spanRoomiArea')[0].innerText.split('：')[1].toString().trim(),//套内
            roomNsjg: pTbCell.getElementsByClassName('spanKfsNsjg')[0].innerText.split('：')[1].toString().trim(),//套内单价
            roomNsjmjg: pTbCell.getElementsByClassName('spanKfsNsjmjg')[0].innerText.split('：')[1].toString().trim(),//建面单价
            roomTotalPrice: pTbCell.getElementsByClassName('spanRoomTotalPrice')[0].innerText.split('：')[1].toString().trim(),//房屋总价
            roomStatus: pTbCell.getElementsByClassName('spanRoomStatus')[0].innerText.split('：')[1].toString().trim(),//房屋状态
            roomState: pTbCell.getElementsByClassName('spanRoomState')[0].innerText.split('：')[1].toString().trim(),//房屋详细状态
        };
        //
        let roomInfoUrl = `${RouteDataParas.webSrvUrl}${RouteDataParas.roomInfoXhr}`;
        let payload_data = {'roomId': roomInfos.roomId}; //参数:户室ID
        let xhr = new XMLHttpRequest();
        xhr.open('POST', roomInfoUrl); //异步调用
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function (e) {
            if (xhr.status === 200) {
                // 返回的json数据结构: {"d":"{\"dataType\":0,\"id\":\"28048786\",...,\"roomstatus\":\"已认购\"}"}
                let json = JSON.parse(xhr.responseText);
                let obj = JSON.parse(json.d);
                // 房屋状态信息保存至定义的[spanRoomStatus]元素中
                objRoomStatus.innerText = `房屋状态：${obj.roomstatus}`;
                objRoomState.innerText = `详细状态：${obj.S_ISONLINESIGN}/${obj.S_ISCONTRACT}/${obj.S_ISOTHERRIGHT}`;
                //
                // 异步时处理页面相关信息
                //
                let curStyle = window.getComputedStyle ? window.getComputedStyle(pTbCell, null) : pTbCell.currentStyle;
                let bgColor = curStyle.backgroundColor;//原始已销售#ff00ff rgb(255, 0, 255)
                let roomStatus = obj.roomstatus;//objRoomStatus.innerText.split('：')[1].toString().trim();//房屋状态
                if (roomStatus.indexOf('网签')!=-1) { statsObj.sellCnt++; statsObj.totalCnt++; }//已销售(网签)
                if (roomStatus.indexOf('不可售')!=-1 && bgColor=='rgb(255, 0, 255)') { statsObj.sellCnt++; statsObj.totalCnt++; }//已销售(不可售)
                if (roomStatus.indexOf('可售')!=-1 && roomStatus.indexOf('不可售')==-1) { statsObj.allowCnt++; statsObj.totalCnt++; }//可销售
                if (roomStatus.indexOf('认购')!=-1) { statsObj.subsCnt++; statsObj.totalCnt++; }//认购数量
                roomInfos.roomStatus = roomStatus;
                roomInfos.roomState = `${obj.S_ISONLINESIGN}/${obj.S_ISCONTRACT}/${obj.S_ISOTHERRIGHT}`;
                // 相关统计量显示刷新
                document.getElementById('spanTotalCnt').innerText = statsObj.totalCnt;
                document.getElementById('spanSellCnt').innerText = statsObj.sellCnt;
                document.getElementById('spanSubsCnt').innerText = statsObj.subsCnt;
                document.getElementById('spanAllowCnt').innerText = statsObj.allowCnt;
                document.getElementById('spanFoldTotalCnt').innerText = statsObj.totalCnt;
                // 原始已销售#ff00ff,但其实是含有[认购]状态的
                // [认购]状态下房号Cell背景色重置
                // if (bgColor == 'rgb(255, 0, 255)' && roomStatus.indexOf('认购')!=-1) {
                // 来福士广场T1塔楼18-5: 认购状态下背景是绿色而非紫色
                if (roomStatus.indexOf('认购') != -1) {
                    pTbCell.style.cssText = 'background-color: #ffa500;'; //[认购]状态单独用橙色背景区分
                }
                // 房号cell中alink重新绑定title信息
                let curAlink = pTbCell.getElementsByTagName('a')[0];
                curAlink.removeAttribute('onmouseover');//移除原始onmouseover事件
                curAlink.onmouseover = cq315houseAnalysis.__bindTitle(curAlink, roomInfos);
                // 建面单价区间范围显示
                if (statsObj.bpricMin == 0) {
                    statsObj.bpricMin = roomInfos.roomNsjmjg * 1;
                } else if (parseFloat(roomInfos.roomNsjmjg * 1) > 0 && parseFloat(statsObj.bpricMin) > parseFloat(roomInfos.roomNsjmjg * 1)) {
                    statsObj.bpricMin = roomInfos.roomNsjmjg * 1;
                }
                if (parseFloat(statsObj.bpricMax) < parseFloat(roomInfos.roomNsjmjg * 1)) {
                    statsObj.bpricMax = roomInfos.roomNsjmjg * 1;
                }
                document.getElementById('spanBpricMin').innerText = statsObj.bpricMin.toFixed(2);
                document.getElementById('spanBpricMax').innerText = statsObj.bpricMax.toFixed(2);
                // 套内单价区间范围显示
                if (statsObj.ipricMin == 0) {
                    statsObj.ipricMin = roomInfos.roomNsjg * 1;
                } else if (parseFloat(roomInfos.roomNsjg * 1) > 0 && parseFloat(statsObj.ipricMin) > parseFloat(roomInfos.roomNsjg * 1)) {
                    statsObj.ipricMin = roomInfos.roomNsjg * 1;
                }
                if (parseFloat(statsObj.ipricMax) < parseFloat(roomInfos.roomNsjg * 1)) {
                    statsObj.ipricMax = roomInfos.roomNsjg * 1;
                }
                document.getElementById('spanIpricMin').innerText = statsObj.ipricMin.toFixed(2);
                document.getElementById('spanIpricMax').innerText = statsObj.ipricMax.toFixed(2);
            }
            else {
                console.log('Status Code:', xhr.status, roomInfos.roomId);
                let spanApiMsg = document.getElementById('spanApiMsg');
                spanApiMsg.innerText += `${roomInfos.unitNo}单元 ${roomInfos.roomNo}: 房源信息获取失败: ${xhr.status};\r\n`;
            }
        };
        xhr.onerror = function (e) {
            console.log('Status Code:', xhr.status, roomInfos.roomId);
            let spanApiMsg = document.getElementById('spanApiMsg');
            spanApiMsg.innerText += `${roomInfos.unitNo}单元 ${roomInfos.roomNo}: 房源信息获取失败: ${xhr.status};\r\n`;
        };
        //发送数据
        xhr.send(JSON.stringify(payload_data));
    };
    //依据选择的数据类别显示房源信息
    cq315houseAnalysis.displaySeleTypeDatas=function(){
        let checkedRadio = document.querySelector('input[name="dataTypeRadioOptions"]:checked');
        let dataType = checkedRadio.value;
        if (dataType==SELECTED_DATA_TYPE) return;
        SELECTED_DATA_TYPE = dataType;
        cq315houseAnalysis.refreshTableDatas();
    };
    //切换页面房源列表table的显示数据
    cq315houseAnalysis.refreshTableDatas=function(){
        let tb = document.getElementById(vfObj.tbId);
        if (tb == undefined) return;
        let tbRows = tb.tBodies[0].rows;
        for (let i = tbRows.length - 1; i >= 0; i--) {
            let tbCells = tbRows[i].cells;
            for (let x = 0, len = tbCells.length; x < len; x++) {
                let objt = tbCells[x].getAttribute('objt');//房源Cell
                if (objt != 'tdclass') continue; //objt='tdclass'的cell是房源
                let tdStyle = String(tbCells[x].getAttribute("style")).toLowerCase();//房源Cell的style内容
                if (tdStyle.indexOf("display:")!=-1 && tdStyle.indexOf("none")!=-1) continue; //隐藏的td不作处理
                let roomInfos = {
                    roomId: tbCells[x].getElementsByTagName('a')[0].getAttribute('data-roomid'),
                    unitNo: tbCells[x].getElementsByTagName('a')[0].getAttribute('data-unitno'),//单元No
                    roomNo: tbCells[x].getElementsByClassName('spanRoomNo')[0].innerText.split('：')[1].toString().trim(),//房号
                    roomUse: tbCells[x].getElementsByClassName('spanRoomUse')[0].innerText.split('：')[1].toString().trim(),//用途
                    roomStru: tbCells[x].getElementsByClassName('spanRoomStru')[0].innerText.split('：')[1].toString().trim(),//结构
                    roomType: tbCells[x].getElementsByClassName('spanRoomType')[0].innerText.split('：')[1].toString().trim(),//户型
                    roomBarea: tbCells[x].getElementsByClassName('spanRoombArea')[0].innerText.split('：')[1].toString().trim(),//建面
                    roomIarea: tbCells[x].getElementsByClassName('spanRoomiArea')[0].innerText.split('：')[1].toString().trim(),//套内
                    roomNsjg: tbCells[x].getElementsByClassName('spanKfsNsjg')[0].innerText.split('：')[1].toString().trim(),//套内单价
                    roomNsjmjg: tbCells[x].getElementsByClassName('spanKfsNsjmjg')[0].innerText.split('：')[1].toString().trim(),//建面单价
                    roomTotalPrice: tbCells[x].getElementsByClassName('spanRoomTotalPrice')[0].innerText.split('：')[1].toString().trim(),//房屋总价
                    roomStatus: tbCells[x].getElementsByClassName('spanRoomStatus')[0].innerText.split('：')[1].toString().trim(),//房屋状态
                    roomState: tbCells[x].getElementsByClassName('spanRoomState')[0].innerText.split('：')[1].toString().trim(),//房屋详细状态
                };
                let curAlink = tbCells[x].getElementsByTagName('a')[0];
                switch (SELECTED_DATA_TYPE) {
                    case displayDataTypes[0].Key:
                        curAlink.innerText = roomInfos.roomNo;
                        break;
                    case displayDataTypes[1].Key:
                        curAlink.innerText = roomInfos.roomBarea;
                        break;
                    case displayDataTypes[2].Key:
                        curAlink.innerText = roomInfos.roomIarea;
                        break;
                    case displayDataTypes[3].Key:
                        curAlink.innerText = roomInfos.roomNsjmjg;
                        break;
                    case displayDataTypes[4].Key:
                        curAlink.innerText = roomInfos.roomNsjg;
                        break;
                    case displayDataTypes[5].Key:
                        curAlink.innerText = roomInfos.roomTotalPrice;
                        break;
                    case displayDataTypes[6].Key:
                        curAlink.innerText = roomInfos.roomStatus;
                        break;
                    default:
                        break;
                }
            }
        }
    };
    //绑定alink的tips(title显示文本)
    cq315houseAnalysis.__bindTitle=function(obj, roomInfos) {
        let str = '房        号：' + roomInfos.unitNo + '单元 ' + roomInfos.roomNo +
            '\r\n用        途：' + roomInfos.roomUse +
            '\r\n结        构：' + roomInfos.roomStru +
            '\r\n户        型：' + roomInfos.roomType +
            '\r\n建筑面积：' + roomInfos.roomBarea + ' ㎡' +
            '\r\n套内面积：' + roomInfos.roomIarea + ' ㎡' +
            '\r\n建面单价：' + roomInfos.roomNsjmjg + ' 元/㎡' +
            '\r\n套内单价：' + roomInfos.roomNsjg + ' 元/㎡' +
            '\r\n房屋总价：' + roomInfos.roomTotalPrice + ' 万元' +
            '\r\n房屋状态：' + roomInfos.roomStatus +
            '\r\n详细状态：' + roomInfos.roomState;
        obj.title = str;
    };
    //弹窗显示所点击房号的房源详细信息
    cq315houseAnalysis.ShowRoomInfoByPass=function(obj){
        let roomId = obj.getAttribute('data-roomid');
        if (document.getElementById('fRoomInfo')){
            document.getElementById('fRoomInfo').remove();
        }
        if (!document.getElementById('img-roominfo')){
            let imgObj = document.createElement('img');
            imgObj.id = 'img-roominfo';
            document.getElementById('myModalContent').appendChild(imgObj);
        }
        // [../WebService/Handler.ashx?ac=fwxx1&fid=' + roomId]
        document.getElementById('img-roominfo').setAttribute('src',`${RouteDataParas.roomInfoWebSrvUrl}${roomId}`);
        document.getElementById('showDialog').click();
    };
    //将查询数据导出Excel
    cq315houseAnalysis.exportExcel=function(){
        //
        // use SheetJS js-xlsx: https://github.com/SheetJS/sheetjs
        //
        // 1.克隆[楼盘表]table的DOM元素,并进行删除span/input子元素处理(便于后续Excel导出)
        let tb = document.getElementById(vfObj.tbId).cloneNode(true);
        if (tb == undefined) return;
        const elemSpan = tb.querySelectorAll('td span');
        const elemInput = tb.querySelectorAll('td input');
        elemSpan.forEach(e => e.remove());
        elemInput.forEach(e => e.remove());

        let str=SELECTED_DATA_TYPE.slice(0,1).toUpperCase()+SELECTED_DATA_TYPE.slice(1).toLowerCase();
        let fileName = `ShowRooms-${str}.xlsx`;
        let dataTypeText=document.querySelector('input[name="dataTypeRadioOptions"]:checked').parentNode.innerText;

        // 2.创建新的workbook
        let wb = XLSX.utils.book_new();
        if(!wb.Props) wb.Props = {};
        wb.Props.Title = fileName;
        wb.Props.Subject = 'Export from web browser';
        wb.Props.Author = '房源信息查询助手';

        // 3.提取数据(通过table数据创建ws)
        let ws = XLSX.utils.table_to_sheet(tb, {raw:true, display:true});

        // 3.1.数据处理, 追加一个新行记录Excel创建日期(非必须)
        let dateTime = new Date(+new Date()+8*3600*1000);
        XLSX.utils.sheet_add_aoa(ws, [["Created "+new Date(dateTime).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')]], {origin:-1});

        // 4.将创建的worksheet追加到workbook
        let wsName = 'ShowRooms';
        XLSX.utils.book_append_sheet(wb, ws, wsName);

        // 5.通过`writeFile`保存并下载 XLSX 文件
        XLSX.writeFile(wb, fileName);
    };

    cq315houseAnalysis.start=function(){
        if (cq315houseAnalysis.judgeWebUrl()){
            cq315houseAnalysis.initShowRoomsPage();
            cq315houseAnalysis.createRoomDataTypeContentBox();
            cq315houseAnalysis.resetRoomCellsInfo();
        }
    };

    cq315houseAnalysis.start();
})();
/**
 * 获取URL中指定名称的参数
 */
function getQueryString(key) {
    let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    let result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
}