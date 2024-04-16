function doGet(e) {
return HtmlService.createTemplateFromFile('ME').evaluate()
  .setTitle('LR FINDER')
  .setFaviconUrl('https://i.imgur.com/nYBHAr2.png');
}

function getRecords()
{
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var recordsSheet = ss.getSheetByName("RECORDS");
  var recordsRange = recordsSheet.getDataRange();
  var recordsValues = recordsRange.getValues();  
  return recordsValues;

}