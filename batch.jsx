﻿var fileSep = "/";                                                         //Where fileSep is "/" you can change it though if you are on windows.if(File.fs=="Windows"){fileSep = "\\";}var myWorkFolder = Folder.selectDialog();//~ alert(files.fsName)var myFiles = myWorkFolder.getFiles("*.xml");  var d = myFiles.length;//~  myDoc.importXML(myFile); while(d--){var myXMLs = myFiles[d].fsName;app.open(File(app.activeScript.parent.fsName+fileSep+'DITAnator_templates'+fileSep+'TRS.indt')); var myDoc = app.activeDocument;//~  alert(app.documents.length)myDoc.importXML(myXMLs)myDoc.importXML(myXMLs)app.doScript(new File(app.activeScript.parent.fsName+fileSep+"batch-go.jsx"), ScriptLanguage.javascript);}