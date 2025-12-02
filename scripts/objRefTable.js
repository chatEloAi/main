const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Anchor,
		C3.Plugins.iframe,
		C3.Plugins.HTMLElement,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.HTMLElement.Acts.SetX,
		C3.Plugins.System.Exps.viewportwidth,
		C3.Plugins.HTMLElement.Acts.SetY,
		C3.Plugins.System.Exps.viewportheight,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Якорь: 0},
	{Loading_icons: 0},
	{Main: 0},
	{Loading_HTML: 0},
	{version_txt: 0}
];

self.InstanceType = {
	Loading_icons: class extends self.ISpriteInstance {},
	Main: class extends self.IIframeInstance {},
	Loading_HTML: class extends self.IHTMLElementInstance {},
	version_txt: class extends self.ITextInstance {}
}