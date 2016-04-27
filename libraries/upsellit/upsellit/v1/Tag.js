//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("upsellit.upsellit.v1.Tag", {
	config: {
		/*DATA*/
		name: "Upsellit",
		async: true,
		description: ".",
		html: "<!-- Start of Upsellit Code -->\n \n<!-- End of Upsellit Code -->",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: true,
		upgradeable: true,
		parameters: [{
			token: "launch_tag"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
			var USI_headID = document.getElementsByTagName("head")[0];
			var USI_dynScript = document.createElement("script");
			USI_dynScript.setAttribute('type','text/javascript');
			USI_dynScript.src = '//www.upsellit.com/active/' + this.valueForToken("launch_tag") + '.jsp';
			USI_headID.appendChild(USI_dynScript);
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});
