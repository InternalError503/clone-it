// Copyright (c) 2013 8pecxstudios \\
// Use of this code is strictly by permissions only even tho its very simple code. \\

// Declare Namespace to avoid conflicts with other addons \\

// cloneThisTabToNewTab is for CloneCurrentTab
var cloneThisTabToNewTab = {};
// cloneThisTabToNewWindow is for CloneCurrentTabNewWindow
var cloneThisTabToNewWindow = {};


cloneThisTabToNewTab = {
	//Clones current tab into new tab
	CloneCurrentTab : function() {
	//Declare a variable to store the URL data
	var UrlToClone = gURLBar.value;{
	//Use the URL data to open in new tab
	gBrowser.selectedTab = openUILinkIn(UrlToClone, 'tab');
		}
	}
}

cloneThisTabToNewWindow = {	
	//Clones current tab in new window	
	CloneCurrentTabNewWindow : function() {
	//Declare a variable to store the URL data
	var UrlToClone = gURLBar.value;{
	//Use the URL data to open in new tab
	gBrowser.selectedTab = openUILinkIn(UrlToClone, 'window');
		}
	}
}	