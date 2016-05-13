(function(global){
cloneIT = {
	CloneCurrent : function(type) {
	try{
			if (gURLBar.value){
				gBrowser.selectedTab = openUILinkIn(gURLBar.value, type, { relatedToCurrent: true });	
			}
		}catch(e){}
	}
}
}(this));	