//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("krux.kruxinterchange.Tag", {
    config: {
      /*DATA*/
	name: "Krux Interchange",
	async: true,
	description: "Leverage data to inform first party targeting of advertising, content, or commerce on your own web properties",
	html: "",
	imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Krux.png",
	locationDetail: "",
	priv: false,
	url: "http://cdn.krxd.net/krux.js",
	usesDocWrite: false,
	parameters: [
	{
		name: "Publisher Id",
		description: "Your unique publisher id",
		token: "publisher_id",
		uv: ""
	},
	{
		name: "Site Domain",
		description: "The domain of your site",
		token: "site_url",
		uv: ""
	},
	{
		name: "Page Section",
		description: "The section of your website that the tag is being loaded on - this may change from page to page",
		token: "section",
		uv: "universal_variable.page.category"
	},
	{
		name: "Page Sub-section",
		description: "The subsection of the site that is being shown",
		token: "subsection",
		uv: "universal_variable.page.subcategory"
	}
	]
      /*~DATA*/
    },
    script: function () {
      /*SCRIPT*/
      /*~SCRIPT*/
    },
    pre: function () {
      /*PRE*/
var KRUXSetup = {
   pubid:"" + this.getValueForToken("publisher_id") + "",
   site:"" + this.getValueForToken("site_url") + "",
   section:"" + this.getValueForToken("section") + "",
   subSection:"" + this.getValueForToken("subsection") + "",
   async:true
};
      /*~PRE*/
    },
    post: function () {
      /*POST*/
      /*~POST*/
    }
});
