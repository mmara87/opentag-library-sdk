//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("bizrate.bizratenonbuyersurvey.v0.Tag", {
	config: {
		/*DATA*/
		name: "BizRate Non-Buyer Survey",
		async: true,
		description: "Survey presented to visitors as they browse the site.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/BizRate.png",
		locationDetail: "",
		isPrivate: false,
		url: "eval.bizrate.com/js/survey_${merchant_id}_1.js",
		usesDocWrite: false,
		parameters: [{
			name: "BizRate Merchant ID",
			description: "The identifier that corresponds to the merchant.",
			token: "merchant_id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
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