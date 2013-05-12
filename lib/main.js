var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
const data = require("sdk/self").data;
var contextMenu = require("sdk/context-menu");
var panelSDK = require("sdk/panel");

var sortPanel = panelSDK.Panel({
  width: 460,
  height: 430,
  contentURL: data.url('sort-connections-panel.html'),
  contentScriptFile: [data.url('jquery-1.9.1.min.js'), data.url('sort-connections-panel.js')]
});
 
var sortButtons = widgets.Widget(
{
  id: "linkedin-pymk-sorter-button",
  label: "LinkedIn PYMK Sorter",
  contentURL: data.url("favicon.ico"),
  panel: sortPanel
});

sortPanel.port.on("sort-by-connections-ascending", function()
{
	tabs.activeTab.attach(
	{
		contentScriptFile: [data.url("jquery-1.9.1.min.js"), data.url('jquery.tinysort.min.js')],
		contentScript: '$("#pymk-people-card>ul.people-card>li").tsort("a.bt-shared-connections>strong");'
	});
});

sortPanel.port.on("sort-by-connections-descending", function()
{
	tabs.activeTab.attach(
	{
		contentScriptFile: [data.url("jquery-1.9.1.min.js"), data.url('jquery.tinysort.min.js')],
		contentScript: '$("ul.people-card.two-cols.animation.closable>li").tsort("a.bt-shared-connections>strong", {order:"desc"});'
	});
});

sortPanel.port.on("sort-by-first-name", function()
{
	tabs.activeTab.attach(
	{
		contentScriptFile: [data.url("jquery-1.9.1.min.js"), data.url('jquery.tinysort.min.js')],
		contentScript: '$("ul.people-card.two-cols.animation.closable>li").tsort({attr: "data-first-name"});'
	});
});

sortPanel.port.on("sort-by-last-name", function()
{
	tabs.activeTab.attach(
	{
		contentScriptFile: [data.url("jquery-1.9.1.min.js"), data.url('jquery.tinysort.min.js')],
		contentScript: '$("ul.people-card.two-cols.animation.closable>li").tsort({attr: "data-last-name"});'
	});
});

sortPanel.port.on("sort-by-location", function()
{
	tabs.activeTab.attach(
	{
		contentScriptFile: [data.url("jquery-1.9.1.min.js"), data.url('jquery.tinysort.min.js')],
		contentScript: '$("ul.people-card.two-cols.animation.closable>li").tsort("span.adr");'
	});
});

sortPanel.port.on("sort-by-title", function()
{
	tabs.activeTab.attach(
	{
		contentScriptFile: [data.url("jquery-1.9.1.min.js"), data.url('jquery.tinysort.min.js')],
		contentScript: '$("ul.people-card.two-cols.animation.closable>li").tsort("span.title");'
	});
});
