/* @OnlyCurrentDoc */
var SS = SpreadsheetApp.getActiveSpreadsheet();
var ss = SS.getSheets()[0];
let ssa = SpreadsheetApp.getActiveSheet();
var assets = SS.getSheetByName("Assets");

// C&P imgLinks section below
var imgLinksPg = SS.getSheetByName("AA_Links");
var imagesDataRage = imgLinksPg.getDataRange();
var imagesValues = imagesDataRage.getValues();
var imgDataFlat = imagesValues.flat()

// Start C&P for arrays:
var nameColumn = [];
var urlColumn = [];
var idColumn = [];
// End C&P for arrays.

// C&P getLastRow() section below; this formula works on =IMPORTRANGE() with empty cells as well!
function getLastRowInColumn(activeSheet, range) {
    return activeSheet.getRange(range).getValues().filter(String).length
}

var longestColumn = "B:B";
var aLastRow1 = getLastRowInColumn(assets, longestColumn);
var rowDisplace = 1;
var aLastRow2 = aLastRow1 + rowDisplace;
// C&P getLastRow() section end

//C&P for value loops start
for (i = 2; i < aLastRow2; i++) {
    //i=2 makes the arrays start at the first row with important data. i=0 starts at very top.
    idColumn.push(imagesValues[i][0]);
    nameColumn.push(imagesValues[i][1]);
    urlColumn.push(imagesValues[i][2]);
}
//C&P for value loops end

const ui = SpreadsheetApp.getUi();

function columnNumToLetter(arg) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var column_index = arg || 1;
    var sheet = ss.getSheets()[0];
    var range = sheet.getRange(1, column_index, 1, 1);

    var result = range.getA1Notation().match(/([A-Z]+)/)[0];

    return result;
    //Keep in mind; you have to log the function to view it. The result will still be right even w/o seeing it, though.
}

function inRange(cell, range) {

    // Source : https://sheets-pratique.com/en/codes/in-range-function

    const cellRow = cell.getRow();
    const rangeRow1 = range.getRow();
    const rangeRow2 = range.getLastRow();

    if (cellRow > rangeRow2 || cellRow < rangeRow1) {
        return false;
    }

    const cellCol = cell.getColumn();
    const rangeCol1 = range.getColumn();
    const rangeCol2 = range.getLastColumn();

    if (cellCol > rangeCol2 || cellCol < rangeCol1) {
        return false;
    }

    return true;
}
