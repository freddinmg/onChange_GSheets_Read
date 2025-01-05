/* @OnlyCurrentDoc */

function onChange(e) {

    var activeRange = e.source.getActiveCell();
    var activeRange2 = e.source.getCurrentCell();
  //Both activeRange variables give you the same result. Just to let you know, you have options.
    var activeC2 = activeRange.getValue();

    var activeIndex = idColumn.indexOf(activeC2);
    var rImgUrl = urlColumn[activeIndex];

    var rImgName = nameColumn[activeIndex];

    var labelRange1 = assets.getRange("B3:B" + aLastRow2);
    var idRange = assets.getRange("A3:A" + aLastRow2);

    var html = HtmlService.createHtmlOutput(("<span>" + rImgName + "</span><p><img src='" + rImgUrl + "'></p>"));
    //html.setWidth(500);
    var html2 = HtmlService.createHtmlOutput(('<style> span,p{font-family: Roboto, Verdana, sans-serif} .underline{border-bottom: 1px black solid;border-top: 1px black solid;background-color: #F8F8F8;padding-top: 0.4em; padding-bottom: 0;} div.underline{text-align: justify;} div.underline:after{content: "";display: inline-block;width: 100%; height: 1px; margin: 0;padding:0} .align{text-align: center;}</style><div class="underline"><span>' + rImgName + "</span></div><p class='align'><img src='" + rImgUrl + "'></p>"));
    var html3 = HtmlService.createHtmlOutput(('<style> span,p{font-family: Roboto, Verdana, sans-serif} .underline{border-bottom: 1px black solid;border-top: 1px black solid;background-color: #F8F8F8;padding-top: 0.4em; padding-bottom: 0; text-align: right;}  .align{text-align: center;}</style><div class="underline"><span>' + rImgName + "</span></div><p class='align'><img src='" + rImgUrl + "'></p>"));

    if (inRange(activeRange, idRange)) {

        switch (activeIndex > -1) {
            case true:
                var popup4 = SpreadsheetApp.getUi().showModalDialog(html3, activeC2 + ":");
                break;
            case false:
                ui.alert(
                    "Thumbnail image not found!"
                );
                break;
            default: ui.alert(
                "Thumbnail image not found!"
            );

        }

    }

}
