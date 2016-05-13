

var cloneIT = {

CloneCurrentTab : function(e) {
try{

	if (gURLBar.value){
	var UrlToClone = gURLBar.value;{
		gBrowser.selectedTab = openUILinkIn(UrlToClone, 'tab');		
	}
		}
			}catch (e){
			//Catch any nasty errors and output to dialogue
			alert("Were sorry, Something has gone wrong trying to clone the tab! " + e);			
		}
	},

CloneCurrentTabNewWindow : function(e) {	
try{

	if (gURLBar.value){	
	var UrlToClone = gURLBar.value;{
		gBrowser.selectedTab = openUILinkIn(UrlToClone, 'window');
	}
		}
			}catch (e){
			//Catch any nasty errors and output to dialogue
			alert("Were sorry, Something has gone wrong trying to clone the current tab to a new window! " + e);
		}		
	}
	
}	