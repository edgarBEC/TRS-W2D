﻿///creates table and table paragraph stylesvar myDoc = app.activeDocument;//searches for the tables parent...poor tables are lost.var myTables = myDoc.stories.everyItem().tables.everyItem().getElements(); for ( var i = 0; i < myTables.length; i++ ){    var container = myTables[i].parent;    if ( container.constructor.name == "TextFrame" ) {    var myTextFrame = container;    }else if ( container.constructor.name == "Story" ) {    var myTextFrame = container.textContainers[0];}//~ alert(myTextFrame.associatedXMLElement.xmlAttributes.item('outputclass').value);/////sets the widthvar myWidth = myTextFrame.visibleBounds[3] - myTextFrame.visibleBounds[1];myTables[i].width = myWidth;//~ myTables[i].rows.everyItem().keepWithNextRow = true;var myInset = myTextFrame.textFramePreferences.insetSpacing;//~ alert(myInset)var myWidth = myTextFrame.visibleBounds[3] - myTextFrame.visibleBounds[1]//~ alert(myTextFrame.label);if(myTextFrame.label == 'ELD'){myTables[i].width = myWidth - myInset*2;}else{myTables[i].width = myWidth;}//-----CREATE TABLE STYLES BASED ON OUTPUTCLASSES---//if(myDoc.tableStyles.itemByName(myTables[i].parent.label+'_table') == null){var myTableStyle = myDoc.tableStyles.add();myTableStyle.name = myTables[i].parent.label+'_table'myTables[i].appliedTableStyle = myTables[i].parent.label+'_table'}else{    myTables[i].appliedTableStyle = myTables[i].parent.label+'_table'//--removes trailing whitespace from tables---//app.findGrepPreferences = NothingEnum.nothing;app.changeGrepPreferences = NothingEnum.nothing;//search optionsapp.findChangeGrepOptions.includeFootnotes = false;app.findChangeGrepOptions.includeHiddenLayers = false;app.findChangeGrepOptions.includeLockedLayersForFind = false;app.findChangeGrepOptions.includeLockedStoriesForFind = false;app.findChangeGrepOptions.includeMasterPages = false;//finds the whitespace and changes it to nothingapp.findGrepPreferences.findWhat = "\\r$";app.changeGrepPreferences.changeTo = "";myTables[i].changeGrep();//erases the search from the find/change dialogapp.findGrepPreferences = NothingEnum.nothing;app.changeGrepPreferences = NothingEnum.nothing;app.findGrepPreferences.findWhat = "(\\s\\s)+";app.changeGrepPreferences.changeTo = "\\s";myTables[i].changeGrep();//erases the search from the find/change dialogapp.findGrepPreferences = NothingEnum.nothing;app.changeGrepPreferences = NothingEnum.nothing;app.findGrepPreferences.findWhat = "(?<=\\s)\\s$";app.changeGrepPreferences.changeTo = "";myDoc.changeGrep();//erases the search from the find/change dialogapp.findGrepPreferences = NothingEnum.nothing;app.changeGrepPreferences = NothingEnum.nothing;app.findGrepPreferences = NothingEnum.nothing;app.changeGrepPreferences = NothingEnum.nothing;app.findGrepPreferences.findWhat = "  ";app.changeGrepPreferences.changeTo = "";myDoc.changeGrep();//erases the search from the find/change dialogapp.findGrepPreferences = NothingEnum.nothing;app.changeGrepPreferences = NothingEnum.nothing;//--removes trailing white space from stories---/////}}