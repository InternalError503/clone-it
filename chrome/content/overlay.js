//Copyright (c) 2013 8pecxstudios
//This addon is designed for temporary use as its been integrated into cyberfox release.
//Use of this code is strictly by permissions only even tho its very simple code.


//Clones current tab into new tab
  function CloneCurrentTab() {
	//Declare a variable to store the URL data
	var UrlToClone = gURLBar.value;{
	//Use the URL data to open in new tab
	gBrowser.selectedTab = openUILinkIn(UrlToClone, 'tab');
	}
}
	
//Clones current tab in new window	
  function CloneCurrentTabNewWindow() {
	//Declare a variable to store the URL data
	var UrlToClone = gURLBar.value;{
	//Use the URL data to open in new tab
	gBrowser.selectedTab = openUILinkIn(UrlToClone, 'window');
	}
}