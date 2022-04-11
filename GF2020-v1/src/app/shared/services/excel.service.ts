import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

const ExcelJS = require('exceljs');

import * as Excel from "exceljs";
import { DatePipe, DecimalPipe } from '../../../../node_modules/@angular/common';
import { NumberFormatePipe } from '../pipes/number-formate.pipe';
import { RoeFormatPipe } from '../pipes/roe-format.pipe';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  title = '';
  header: any = [];
  columnList: any = []
  data = [];

  constructor(private datePipe: DatePipe, private formatNumber: DecimalPipe,
    private numberFormat: NumberFormatePipe, public roeFormat: RoeFormatPipe) {
  }

  genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }

  generateExcel(dataList: any) {
    this.header = [];
    this.columnList = [];
    this.data = [];
    this.title = dataList.reportTitle
    for (let i = 0; i < dataList.dataList[0].colHeader.length; i++) {
      this.header.push(dataList.dataList[0].colHeader[i].columnCaption)
      this.columnList.push({
        columnName: dataList.dataList[0].colHeader[i].columnName,
        columnDataType: dataList.dataList[0].colHeader[i].dataType,
        columnWidth: dataList.dataList[0].colHeader[i].columnWidth,
        columnAlign: dataList.dataList[0].colHeader[i].columnAlign,
      })
    }
    for (let i = 0; i < dataList.dataList[0].dataList.length; i++) {
      let tempArray = []
      for (let x of this.columnList) {
        if (x.columnDataType == "dateTime") {
          if (dataList.dataList[0].dataList[i][x.columnName] && dataList.dataList[0].dataList[i][x.columnName] !== '-' && dataList.dataList[0].dataList[i][x.columnName] !== 'All') {
            const date = new Date(dataList.dataList[0].dataList[i][x.columnName]);
            dataList.dataList[0].dataList[i][x.columnName] = date.toDateString().split(' ')[2] + ' ' + date.toDateString().split(' ')[1] + ' ' + date.toDateString().split(' ')[3].slice(-2);
          }
          // const date = new Date(dataList.dataList[0].dataList[i][x.columnName]);
          // dataList.dataList[0].dataList[i][x.columnName] = date.toDateString().split(' ')[2] + ' ' + date.toDateString().split(' ')[1] + ' ' + date.toDateString().split(' ')[3].slice(-2);
        } else if (x.columnDataType == "amount") {
          if (dataList.dataList[0].dataList[i][x.columnName] !== '-' && dataList.dataList[0].dataList[i][x.columnName] !== 'All') {
            dataList.dataList[0].dataList[i][x.columnName] = this.numberFormat.transform(dataList.dataList[0].dataList[i][x.columnName])
          }
          // dataList.dataList[0].dataList[i][x.columnName] = this.formatNumber.transform(dataList.dataList[0].dataList[i][x.columnName], '', '')
        }
        tempArray.push(dataList.dataList[0].dataList[i][x.columnName])
      }
      
      this.data.push(tempArray)
    }
    // return

    let tempChar = this.genCharArray('A', 'Z');

    //Create workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(this.title);

    //Add Row and formatting
    let titleRow = worksheet.addRow([this.title]);
    titleRow.font = { size: 16, bold: true, }

    worksheet.mergeCells(`A${titleRow.number}:${tempChar[this.header.length]}2`);
    let subTitleRow = worksheet.addRow(['User Name : ' + dataList.dataList[0].userName])
    subTitleRow.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow.number}:${tempChar[this.header.length]}${subTitleRow.number}`);
    let subTitleRow1 = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])
    subTitleRow1.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow1.number}:${tempChar[this.header.length]}${subTitleRow1.number}`);


    //Blank Row 
    worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(this.header);
    headerRow.font = { bold: true }

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '36baf2' },
        bgColor: { argb: '36baf2' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    this.data.forEach(d => {
      worksheet.addRow(d);
    });

    // worksheet.getColumn(3).width = 30;

    // let temp: any = [];
    // temp = worksheet.columns;
    // let tempWidth: any = []
    // for (let x of this.columnList) {
    //   tempWidth.push(x.columnWidth)
    // }

    // for (let i = 1; i < temp.length; i++) {
    //   worksheet.getColumn(i).width = tempWidth[i - 1];
    // }

    // worksheet.getColumn(1).width = 20;
    // worksheet.getColumn(2).width = 30;
    worksheet.addRow([]);


    //Footer Row
    let footerRow = worksheet.addRow([dataList.filterBy]);
    footerRow.font = { size: 10, bold: true, }

    worksheet.mergeCells(`A${footerRow.number}:M${footerRow.number}`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, this.title + '.xlsx');
    })

  }

  childArray: any = [];
  subChildArray: any = [];
  subChild1Array: any = [];
  subChild2Array: any = [];
  generateExcelOutline(dataList: any) {
    let dataListVal = JSON.parse(JSON.stringify(dataList));
    this.header = [];
    this.columnList = [];
    this.data = [];
    this.title = dataListVal.reportTitle
    for (let i = 0; i < dataListVal.dataList[0].colHeader.length; i++) {
      // console.log(dataList.dataList[0].colHeader[i], "dataList.dataList[0].colHeader[i]")
      this.header.push(dataListVal.dataList[0].colHeader[i].columnCaption)
      this.columnList.push({
        columnName: dataListVal.dataList[0].colHeader[i].columnName,
        columnDataType: dataListVal.dataList[0].colHeader[i].dataType,
        columnWidth: dataListVal.dataList[0].colHeader[i].columnWidth,
        columnAlign: dataListVal.dataList[0].colHeader[i].columnAlign,
      })
    }
    for (let i = 0; i < dataListVal.dataList[0].dataList.length; i++) {
      let tempArray = []
      for (let x of this.columnList) {
        if (x.columnDataType == "dateTime") {
          if (dataListVal.dataList[0].dataList[i][x.columnName] && dataListVal.dataList[0].dataList[i][x.columnName] !== '-' && dataListVal.dataList[0].dataList[i][x.columnName] !== 'All') {
            const date = new Date(dataListVal.dataList[0].dataList[i][x.columnName]);
            dataListVal.dataList[0].dataList[i][x.columnName] = date.toDateString().split(' ')[2] + ' ' + date.toDateString().split(' ')[1] + ' ' + date.toDateString().split(' ')[3].slice(-2);
          }
        } else if (x.columnDataType == "amount") {
          if (dataListVal.dataList[0].dataList[i][x.columnName] !== '-' && dataListVal.dataList[0].dataList[i][x.columnName] !== 'All') {
            dataListVal.dataList[0].dataList[i][x.columnName] = this.numberFormat.transform(dataList.dataList[0].dataList[i][x.columnName])
          }
        }
        else if (x.columnDataType == "roe") {
          if (dataListVal.dataList[0].dataList[i][x.columnName] !== '-' && dataListVal.dataList[0].dataList[i][x.columnName] !== 'All') {
            dataListVal.dataList[0].dataList[i][x.columnName] = this.roeFormat.transform(dataList.dataList[0].dataList[i][x.columnName], '', 4, 4)
          }
        }
        tempArray.push(dataListVal.dataList[0].dataList[i][x.columnName])
      }
      this.data.push(tempArray)
    }

    console.log(dataListVal.dataList[0].dataList)
    let tempArray = [];
    this.childArray = []
    this.subChildArray = []
    this.subChild1Array = []
    this.subChild2Array = []
    let arrayVal = dataListVal.dataList[0].dataList
    for (let i = 0; i < arrayVal.length; i++) {
      console.log(arrayVal[i])
      if (arrayVal[i].header) {
        tempArray.push(i)
      } if (arrayVal[i].child) {
        let value = 7;
        value = value + i
        this.childArray.push(value)
      }
      if (arrayVal[i].subchild) {
        let value = 7;
        value = value + i
        this.subChildArray.push(value)
      }
      if (arrayVal[i].subchild1) {
        let value = 7;
        value = value + i
        this.subChild1Array.push(value)
      }
      if (arrayVal[i].subchild2) {
        let value = 7;
        value = value + i
        this.subChild2Array.push(value)
      }
    }
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(this.title);
    let tempChar = this.genCharArray('A', 'Z');
    //Add Row and formatting
    let titleRow = worksheet.addRow([this.title]);
    titleRow.font = { size: 16, bold: true, }

    worksheet.mergeCells(`A${titleRow.number}:${tempChar[this.header.length]}2`);
    let subTitleRow = worksheet.addRow(['User Name : ' + dataList.dataList[0].userName])
    subTitleRow.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow.number}:${tempChar[this.header.length]}${subTitleRow.number}`);
    let subTitleRow1 = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])
    subTitleRow1.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow1.number}:${tempChar[this.header.length]}${subTitleRow1.number}`);


    //Blank Row 
    worksheet.addRow([]);

    let headerRow = worksheet.addRow(this.header);
    headerRow.font = { bold: true }

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '36baf2' },
        bgColor: { argb: '36baf2' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })

    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    // this.data.forEach(d=> {
    //   console.log(d)
    //   let dataRow = worksheet.addRow(d);
    //   dataRow.font = { bold: true }
    // });

    // console.log(tempArray)
    // console.log(childArray,"childArray")
    for (let m in this.data) {
      let dataRow = worksheet.addRow(this.data[m]);
      dataRow.font = { bold: this.checkIsHeader(m, tempArray) }
      if (!this.checkIsHeader(m, tempArray)) {
        let tmpValue = parseInt(m);
        tmpValue = tmpValue + 7;
        worksheet.properties.outlineProperties = {
          summaryBelow: false,
          summaryRight: true,
        };
        // console.log(tmpValue, "tmpValue")
        worksheet.getRow(tmpValue).outlineLevel = 1;
        // if (tmpValue === this.returnChildIndex(tmpValue)) {
        if (this.childArray.length) {
          let childValue = this.returnChildIndex(tmpValue)
          worksheet.getRow(childValue).outlineLevel = 2;
          worksheet.properties.outlineLevelRow = {
            summaryBelow: false,
            summaryRight: true,
          };
        }
        if (this.subChildArray.length) {
          let childValue = this.returnSubChildIndex(tmpValue)
          worksheet.getRow(childValue).outlineLevel = 3;
          worksheet.properties.outlineLevelRow = {
            summaryBelow: false,
            summaryRight: true,
          };
        }
        if (this.subChild1Array.length) {
          let childValue = this.returnSubChild1Index(tmpValue)
          worksheet.getRow(childValue).outlineLevel = 4;
          worksheet.properties.outlineLevelRow = {
            summaryBelow: false,
            summaryRight: true,
          };
        }
        if (this.subChild2Array.length) {
          let childValue = this.returnSubChild2Index(tmpValue)
          worksheet.getRow(childValue).outlineLevel = 5;
          worksheet.properties.outlineLevelRow = {
            summaryBelow: false,
            summaryRight: true,
          };
        }
      }
    }

    worksheet.addRow([]);


    //Footer Row
    let footerRow = worksheet.addRow([dataList.filterBy]);
    footerRow.font = { size: 10, bold: true, }

    worksheet.mergeCells(`A${footerRow.number}:M${footerRow.number}`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, this.title + '.xlsx');
    })

  }

  checkIsHeader(index: any, arrayValue: any) {
    let flagValue = false
    for (let m of arrayValue) {
      if (m == index) {
        flagValue = true;
      }
    }
    return flagValue
  }

  returnChildIndex(value) {
    let arr = this.childArray
    for (let m of arr) {
      if (m === value) {
        return m
      }
    }
  }

  returnSubChildIndex(value) {
    let arr = this.subChildArray
    for (let m of arr) {
      if (m === value) {
        return m
      }
    }
  }

  returnSubChild1Index(value) {
    let arr = this.subChild1Array
    for (let m of arr) {
      if (m === value) {
        return m
      }
    }
  }

  returnSubChild2Index(value) {
    let arr = this.subChild2Array
    for (let m of arr) {
      if (m === value) {
        return m
      }
    }
  }

  generateExcelWithOutHeader(dataList: any) {
    this.header = [];
    this.columnList = [];
    this.data = [];
    this.title = dataList.reportTitle
    for (let i = 0; i < dataList.dataList[0].colHeader.length; i++) {
      this.header.push(dataList.dataList[0].colHeader[i].columnCaption)
      this.columnList.push({
        columnName: dataList.dataList[0].colHeader[i].columnName,
        columnDataType: dataList.dataList[0].colHeader[i].dataType,
        columnWidth: dataList.dataList[0].colHeader[i].columnWidth,
        columnAlign: dataList.dataList[0].colHeader[i].columnAlign,
      })
    }
    for (let i = 0; i < dataList.dataList[0].dataList.length; i++) {
      let tempArray = []
      for (let x of this.columnList) {
        if (x.columnDataType == "datetime") {
          dataList.dataList[0].dataList[i][x.columnName] = this.datePipe.transform(dataList.dataList[0].dataList[i][x.columnName], 'medium')
        } else if (x.columnDataType == "amount") {
          dataList.dataList[0].dataList[i][x.columnName] = this.formatNumber.transform(dataList.dataList[0].dataList[i][x.columnName], '', '')
        }
        tempArray.push(dataList.dataList[0].dataList[i][x.columnName])
      }

      this.data.push(tempArray)
    }
    let tempChar = this.genCharArray('A', 'Z');

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet();

    //Add Row and formatting
    // let titleRow = worksheet.addRow([this.title]);
    // titleRow.font = { size: 16, bold: true, }

    // worksheet.mergeCells(`A${titleRow.number}:${tempChar[this.header.length]}2`);
    // let subTitleRow = worksheet.addRow(['User Name : ' + dataList.dataList[0].userName])
    // subTitleRow.font = { size: 10, bold: true }
    // worksheet.mergeCells(`A${subTitleRow.number}:${tempChar[this.header.length]}${subTitleRow.number}`);
    // let subTitleRow1 = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])
    // subTitleRow1.font = { size: 10, bold: true }
    // worksheet.mergeCells(`A${subTitleRow1.number}:${tempChar[this.header.length]}${subTitleRow1.number}`);


    //Blank Row 
    // worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(this.header);
    headerRow.font = { bold: true }

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '36baf2' },
        bgColor: { argb: '36baf2' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    this.data.forEach(d => {
      worksheet.addRow(d);
    });

    // worksheet.getColumn(3).width = 30;

    // let temp: any = [];
    // temp = worksheet.columns;
    // let tempWidth: any = []
    // for (let x of this.columnList) {
    //   tempWidth.push(x.columnWidth)
    // }

    // for (let i = 1; i < temp.length; i++) {
    //   worksheet.getColumn(i).width = tempWidth[i - 1];
    // }
    // worksheet.getColumn(1).width = 20;
    // worksheet.getColumn(2).width = 30;
    worksheet.addRow([]);


    //Footer Row
    let footerRow = worksheet.addRow([dataList.filterBy]);
    footerRow.font = { size: 10, bold: true, }

    worksheet.mergeCells(`A${footerRow.number}:M${footerRow.number}`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, this.title + '.xlsx');
    })

  }


  generateExcelFlexi(dataList: any) {
    console.log(dataList.dataList.Table[0])
    this.header = [];
    this.columnList = [];
    this.data = [];
    this.title = dataList.reportTitle
    // for (let i = 0; i < dataList.dataList[0].colHeader.length; i++) {
    //   this.header.push(dataList.dataList[0].colHeader[i].columnCaption)
    //   this.columnList.push({
    //     columnName: dataList.dataList[0].colHeader[i].columnName,
    //     columnDataType: dataList.dataList[0].colHeader[i].dataType,
    //     columnWidth: dataList.dataList[0].colHeader[i].columnWidth,
    //     columnAlign: dataList.dataList[0].colHeader[i].columnAlign,
    //   })
    // }
    let column = dataList.dataList.Table[0]
    this.header = Object.keys(column)
    // this.header.splice(1, 2);

    // this.data.push(tempArray)
    // console.log('datalist',dataList.dataList.Table)
    // console.log('header',this.header)
    for (let i = 0; i < dataList.dataList.Table.length; i++) {
      let tempArray = []
      for (let h of this.header) {
        tempArray.push(dataList.dataList.Table[i][h]);
      }
      // console.log('temparry',tempArray)
      this.data.push(tempArray)
    }
    let tempChar = this.genCharArray('A', 'Z');

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet();

    //Add Row and formatting
    // let titleRow = worksheet.addRow([this.title]);
    // titleRow.font = { size: 16, bold: true, }

    // worksheet.mergeCells(`A${titleRow.number}:${tempChar[this.header.length]}2`);
    // let subTitleRow = worksheet.addRow(['User Name : ' + dataList.dataList[0].userName])
    // subTitleRow.font = { size: 10, bold: true }
    // worksheet.mergeCells(`A${subTitleRow.number}:${tempChar[this.header.length]}${subTitleRow.number}`);
    // let subTitleRow1 = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])
    // subTitleRow1.font = { size: 10, bold: true }
    // worksheet.mergeCells(`A${subTitleRow1.number}:${tempChar[this.header.length]}${subTitleRow1.number}`);


    //Blank Row 
    // worksheet.addRow([]);

    //Add Header Row
    let headerRow = worksheet.addRow(this.header);
    headerRow.font = { bold: true }

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '36baf2' },
        bgColor: { argb: '36baf2' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    this.data.forEach(d => {
      worksheet.addRow(d);
    });

    // worksheet.getColumn(3).width = 30;

    // let temp: any = [];
    // temp = worksheet.columns;
    // let tempWidth: any = []
    // for (let x of this.columnList) {
    //   tempWidth.push(x.columnWidth)
    // }

    // for (let i = 1; i < temp.length; i++) {
    //   worksheet.getColumn(i).width = tempWidth[i - 1];
    // }
    // worksheet.getColumn(1).width = 20;
    // worksheet.getColumn(2).width = 30;
    worksheet.addRow([]);


    //Footer Row
    let footerRow = worksheet.addRow([dataList.filterBy]);
    footerRow.font = { size: 10, bold: true, }

    worksheet.mergeCells(`A${footerRow.number}:M${footerRow.number}`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, this.title + '.xlsx');
    })

  }

  testDownload(header, dataset) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("Comparative Analysis");
    let headerRow = worksheet.addRow(header);
    worksheet.addRow(dataset)
    let fname = "Comparative Analysis";
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fname + '-' + new Date().valueOf() + '.xlsx');
    });
  }

  generatePerfomanceExcel(exportData, dataList: any, header) {
    this.data = [];
    console.log('export', exportData)
    let tmpdata: any = [];
    let keyList = ['desc', 'measure_cur', 'budget_val', 'actual_val', 'variance_val', 'base_budget_val', 'base_actual_val', 'base_variance_val']
    for (let i = 0; i < dataList.length; i++) {
      let tempArray = []
      for (let h of keyList) {
        tempArray.push(dataList[i][h]);
      }
      // console.log('temparry',tempArray)
      this.data.push(tempArray)
    }
    console.log(this.data)
    // this.header = [];
    this.columnList = [];
    // this.data = [];
    this.title = exportData.reportTitle
    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(this.title);
    let titleRow = worksheet.addRow([this.title]);
    let tempChar = this.genCharArray('A', 'Z');
    titleRow.font = { size: 16, bold: true, }

    worksheet.mergeCells(`A${titleRow.number}:${tempChar[this.header.length]}2`);
    let subTitleRow = worksheet.addRow(['User Name : ' + exportData.dataList[0].userName])
    subTitleRow.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow.number}:${tempChar[this.header.length]}${subTitleRow.number}`);
    let subTitleRow1 = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])
    subTitleRow1.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow1.number}:${tempChar[this.header.length]}${subTitleRow1.number}`);
    worksheet.addRow([]);
    let headerRow = worksheet.addRow(header);
    headerRow.font = { bold: true }

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '36baf2' },
        bgColor: { argb: '36baf2' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    this.data.forEach(d => {
      worksheet.addRow(d);
    });

    for (let i = 1; i < this.data.length; i++) {
      worksheet.getColumn(i).width = 20;
    }

    worksheet.addRow([]);
    //Footer Row
    let footerRow = worksheet.addRow([dataList.filterBy]);
    footerRow.font = { size: 10, bold: true, }

    worksheet.mergeCells(`A${footerRow.number}:M${footerRow.number}`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, this.title + '.xlsx');
    })
  }

  generaterequistionExcel(exportData, dataList: any, header) {
    this.data = [];
    console.log('export', exportData)
    let tmpdata: any = [];
    let keyList = ['voynr', 'process', 'port_id', 'tername', 'suppliername', 'wo_ref_nr', 'wo_date', 'wo_amt', 'voucher_number', 'voucher_date', 'vou_amount', 'da_variance', 'payment_number', 'payment_date', 'payment_amount', 'outstanding_amount']
    for (let i = 0; i < dataList.length; i++) {
      let tempArray = []
      for (let h of keyList) {
        tempArray.push(dataList[i][h]);
      }
      // console.log('temparry',tempArray)
      this.data.push(tempArray)
    }
    console.log(this.data)
    // this.header = [];
    this.columnList = [];
    // this.data = [];
    this.title = exportData.reportTitle
    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(this.title);
    let titleRow = worksheet.addRow([this.title]);
    let tempChar = this.genCharArray('A', 'Z');
    titleRow.font = { size: 16, bold: true, }

    worksheet.mergeCells(`A${titleRow.number}:${tempChar[this.header.length]}2`);
    let subTitleRow = worksheet.addRow(['User Name : ' + exportData.dataList[0].userName])
    subTitleRow.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow.number}:${tempChar[this.header.length]}${subTitleRow.number}`);
    let subTitleRow1 = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')])
    subTitleRow1.font = { size: 10, bold: true }
    worksheet.mergeCells(`A${subTitleRow1.number}:${tempChar[this.header.length]}${subTitleRow1.number}`);
    worksheet.addRow([]);
    let headerRow = worksheet.addRow(header);
    headerRow.font = { bold: true }

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '36baf2' },
        bgColor: { argb: '36baf2' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);

    // Add Data and Conditional Formatting
    this.data.forEach(d => {
      worksheet.addRow(d);
    });

    for (let i = 1; i < this.data.length; i++) {
      worksheet.getColumn(i).width = 20;
    }

    worksheet.addRow([]);
    //Footer Row
    let footerRow = worksheet.addRow([dataList.filterBy]);
    footerRow.font = { size: 10, bold: true, }

    worksheet.mergeCells(`A${footerRow.number}:M${footerRow.number}`);

    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, this.title + '.xlsx');
    })
  }

  generateExcelCompartive(header, data: any, mainList) {

    // let workbook = new Workbook();
    // let worksheet = workbook.addWorksheet('Comparative Analysis');

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Comparative Analysis');

    let headerRow = worksheet.addRow(header);
    headerRow.font = { bold: true }
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '36baf2' },
        bgColor: { argb: '36baf2' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })

    let tempArray = [];
    for (let i = 0; i < mainList.length; i++) {
      // if (mainList[i].columnName) {
      if (mainList[i].forExcel) {
        let tmpVal = i - 1
        tempArray.push(tmpVal)
      }
      // }
    }
    console.log(tempArray, "tempArray")

    for (let m in data) {
      // console.log(data)
      let dataRow = worksheet.addRow(data[m]);
      dataRow.font = { bold: this.checkIsHeader(m, tempArray) }
      // if (!this.checkIsHeader(m, tempArray)) {
      //   let tmpValue = m;
      //   console.log(tmpValue, "tmpValue")
      //   // tmpValue = tmpValue + 2;
      //   worksheet.getRow(tmpValue).outlineLevel = 1;
      //   worksheet.properties.outlineProperties = {
      //     summaryBelow: false,
      //     summaryRight: true,
      //   };
      //   // console.log(tmpValue, "tmpValue")
      // };
    }


    // tmpValue = tmpValue + 7;
    // worksheet.properties.outlineProperties = {
    //   summaryBelow: false,
    //   summaryRight: true,
    // };

    // worksheet.getRow(tmpValue).outlineLevel = 1;

    // for (let i = 1; i < data.length; i++) {
    //   worksheet.getColumn(i).width = 20;
    // }

    worksheet.addRow([]);
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Comparative_Analysis' + '.xlsx');
    })
  }


  resultsExcel(header, dataset, form) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("Comparative Analysis");
    let headerRow = worksheet.addRow(header);
    worksheet.addRow(dataset)
    let fname = "form";
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fname + '-' + new Date().valueOf() + '.xlsx');
    });
  }




}