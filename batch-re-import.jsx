﻿var fileSep = "/";                                                         //Where fileSep is "/" you can change it though if you are on windows.if(File.fs=="Windows"){fileSep = "\\";}var myWorkFolder = Folder.selectDialog();//~ alert(files.fsName) var myFiles = myWorkFolder.getFiles("*.xml");   var d = myFiles.length;//~  myDoc.importXML(myFile);  while(d--){var myXMLs = myFiles[d].fsName; var myDoc = app.activeDocument; //~  alert(app.documents.length) myDoc.importXML(myXMLs)}