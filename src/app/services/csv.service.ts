import { Injectable } from '@angular/core';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  async shareFile(data: any[], filename?: string) {
    const csvData = this.convertToCSV(data, ['name','age', 'average', 'approved', 'description']);
    filename = filename !== undefined && filename?.endsWith('.csv') ? filename : `${filename || 'jsontocsv'}.csv`;
    try {
      const fileResult = await Filesystem.writeFile({
        path: `csv/${filename}`,
        data: csvData,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
        recursive: true,
      });
     const result = await Share.share({
      title: filename,
      url: fileResult.uri,
      dialogTitle: `Share ${filename}`,
      });
      console.log('share - result', result, fileResult);
    } catch (e) {
      console.log('error while sharing file', e);
    }
  }

  downloadFile(data, filename='data') {
    const csvData = this.convertToCSV(data, ['name','age', 'average', 'approved', 'description']);
    console.log(csvData);
    const blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    const dwldLink = document.createElement('a');
    const url = URL.createObjectURL(blob);
    const isSafariBrowser = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    console.log('isSafariBrowser', isSafariBrowser, `${filename}.csv`);
    // document.body.removeChild(dwldLink);
}

convertToCSV(objArray, headerList) {
     const array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = 'S.No,';

     for (const index in headerList) {
         row += headerList[index] + ',';
     }
     row = row.slice(0, -1);
     str += row + '\r\n';
     for (let i = 0; i < array.length; i++) {
         let line = (i+1)+'';
         for (const index in headerList) {
            const head = headerList[index];

             line += ',' + array[i][head];
         }
         str += line + '\r\n';
     }
     return str;
 }
}
