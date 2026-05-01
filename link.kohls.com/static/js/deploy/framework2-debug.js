
// ***** THIS IS A GENERATED SCRIPT. DO NOT MODIFY! *****
//
// For questions regarding the UI framework, contact the UI team.

/*!
 * framework.js -- This is the consolidated configuration.
 * To leverage late-loading capabilities, use kjscore.js + foundation.js split configuration.
 * Framework includes jQuery, the jQuery template plug-in, and the KJS core and foundation libraries.
 */
/*!
 * env.block.js
 * Defines JavaScript module packaging for dependency manager, plus some environment settings.
 * THIS IS A GENERATED FILE
 * Generated Fri Nov 04 2016 16:44:04 GMT-0700 (PDT)
 */
(function() {
	$env = this.$env||{noHostBlock: true};
	$env.multiple = !!$env.built;
	if (!$env.multiple) {
		$env.built = 1478303044584;
		$env.project = "";
		$env.toString = function() { return 'Kjs core, built: ' + new Date(this.built); };
		$env.s = $env.s||{}; // Attachment point for strings
		$env.zBase = 10000; // z-index manager base index
		$env.resourceRoot = $env.resourceRoot|| $env.project;
		$env.imgFilePath = $env.imgFilePath||'/static/';
		$env.cssFilePath = $env.cssFilePath||'css/';
		$env.jsScriptPath = $env.jsScriptPath||'/';
		$env.jsModulePath = $env.jsModulePath||'/deploy/';
		$env.jsLoosePath = $env.jsLoosePath||'/deploy/js/';
		// cacheBuster at build time = '' -- $env.cacheBuster gets defined in pageStart2.jsp
		$env.syncCheck = function(cb) {if (cb && $env.cacheBuster && $env.cacheBuster !== cb) $env.badSync = true;};
		
		
		$env.userInfo = {};
	}
	$env.packaging = $env.packaging||{
		css: {
			refs: {
				'myaccountsec_ie2.css': 'myaccountsec_ie2.css',
				'myaccountsec_ie2-debug.css': 'myaccountsec_ie2.css',
				'signinzipcodeoverlaysection.css': 'signinzipcodeoverlaysection.css',
				'signinzipcodeoverlaysection-debug.css': 'signinzipcodeoverlaysection.css',
				'myaccountsec_ie1.css': 'myaccountsec_ie1.css',
				'myaccountsec_ie1-debug.css': 'myaccountsec_ie1.css',
				'productlist.css': 'productlist.css',
				'productlist-debug.css': 'productlist.css',
				'shoppingcart.css': 'shoppingcart.css',
				'shoppingcart-debug.css': 'shoppingcart.css',
				'commoncsssecton.css': 'commoncsssecton.css',
				'commoncsssecton-debug.css': 'commoncsssecton.css',
				'egiftcardlanding.css': 'egiftcardlanding.css',
				'egiftcardlanding-debug.css': 'egiftcardlanding.css',
				'checkoutsection_ie1.css': 'checkoutsection_ie1.css',
				'checkoutsection_ie1-debug.css': 'checkoutsection_ie1.css',
				'egiftcardplaceordersection.css': 'egiftcardplaceordersection.css',
				'egiftcardplaceordersection-debug.css': 'egiftcardplaceordersection.css',
				'collectionpage.css': 'collectionpage.css',
				'collectionpage-debug.css': 'collectionpage.css',
				'my_wallet.css': 'my_wallet.css',
				'my_wallet-debug.css': 'my_wallet.css',
				'pdppage_ie1.css': 'pdppage_ie1.css',
				'pdppage_ie1-debug.css': 'pdppage_ie1.css',
				'collectionpage_ie1.css': 'collectionpage_ie1.css',
				'collectionpage_ie1-debug.css': 'collectionpage_ie1.css',
				'homepage1.css': 'homepage1.css',
				'homepage1-debug.css': 'homepage1.css',
				'myaccountloginsection.css': 'myaccountloginsection.css',
				'myaccountloginsection-debug.css': 'myaccountloginsection.css',
				'contentpagesection.css': 'contentpagesection.css',
				'contentpagesection-debug.css': 'contentpagesection.css',
				'collectionpage_ie2.css': 'collectionpage_ie2.css',
				'collectionpage_ie2-debug.css': 'collectionpage_ie2.css',
				'findinstoresection.css': 'findinstoresection.css',
				'findinstoresection-debug.css': 'findinstoresection.css',
				'homepage.css': 'homepage.css',
				'homepage-debug.css': 'homepage.css',
				'pdppage.css': 'pdppage.css',
				'pdppage-debug.css': 'pdppage.css',
				'productlist2.css': 'productlist2.css',
				'productlist2-debug.css': 'productlist2.css',
				'checkoutsection.css': 'checkoutsection.css',
				'checkoutsection-debug.css': 'checkoutsection.css',
				'checkoutsection_ie2.css': 'checkoutsection_ie2.css',
				'checkoutsection_ie2-debug.css': 'checkoutsection_ie2.css',
				'egccustomizecard.css': 'egccustomizecard.css',
				'egccustomizecard-debug.css': 'egccustomizecard.css',
				'egiftcardplaceholder.css': 'egiftcardplaceholder.css',
				'egiftcardplaceholder-debug.css': 'egiftcardplaceholder.css',
				'default.css': 'default.css',
				'default-debug.css': 'default.css',
				'orderconfirm.css': 'orderconfirm.css',
				'orderconfirm-debug.css': 'orderconfirm.css',
				'pdppage_ie2.css': 'pdppage_ie2.css',
				'pdppage_ie2-debug.css': 'pdppage_ie2.css',
				'productpage.css': 'productpage.css',
				'productpage-debug.css': 'productpage.css',
				'myaccountsec.css': 'myaccountsec.css',
				'myaccountsec-debug.css': 'myaccountsec.css'
			}
		},
		modules: {
			'core': {
				alias: 'core',
				srcFile: 'core.js'
		    },
			'foundation2': {
				alias: 'foundation2',
				parents: ['framework2'],
				srcFile: 'foundation2.js'
		    },
			'kjscore2': {
				alias: 'kjscore2',
				srcFile: 'kjscore2.js'
		    },
			'kjscore': {
				alias: 'kjscore',
				srcFile: 'kjscore.js'
		    },
			'foundation': {
				alias: 'foundation',
				parents: ['framework'],
				srcFile: 'foundation.js'
		    },
			'overlay': {
				alias: 'overlay',
				parents: ['signinzipcodeoverlaysection', 'productlist', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'checkoutsection', 'shoppingtrcart', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
				srcFile: 'overlay.js'
		    },
			'global': {
				alias: 'global',
				parents: ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'checkoutsection', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
				srcFile: 'global.js'
		    },
			'framework': {
				alias: 'framework',
				srcFile: 'framework.js'
		    },
			'environment': {
				alias: 'environment',
				srcFile: 'environment.js'
		    },
			'kohlsframe': {
				alias: 'kohlsframe',
				srcFile: 'kohlsframe.js'
		    },
			'compatability': {
				alias: 'compatability',
				srcFile: 'compatability.js'
		    },
			'kohls_v1_m56577569839297458': {
				alias: 'kohls_v1_m56577569839297458',
				parents: ['pdpcollectionpage'],
				srcFile: 'kohls_v1_m56577569839297458.js'
		    },
			'components': {
				alias: 'components',
				parents: ['checkoutbtmsection', 'signinzipcodeoverlaysection', 'productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
				srcFile: 'components.js'
		    },
			'framework2': {
				alias: 'framework2',
				srcFile: 'framework2.js'
		    },
			'custom': {
				alias: 'custom',
				parents: ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'checkoutsection', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
				srcFile: 'custom.js'
		    },
			'checkoutbtmsection': {
				alias: 'checkoutbtmsection',
				srcFile: 'checkoutbtmsection.js'
		    },
			'signinzipcodeoverlaysection': {
				alias: 'signinzipcodeoverlaysection',
				srcFile: 'signinzipcodeoverlaysection.js'
		    },
			'productlist': {
				alias: 'productlist',
				srcFile: 'productlist.js'
		    },
			'shoppingcart': {
				alias: 'shoppingcart',
				srcFile: 'shoppingcart.js'
		    },
			'egiftcardplaceordersection': {
				alias: 'egiftcardplaceordersection',
				srcFile: 'egiftcardplaceordersection.js'
		    },
			'salealertsignuppage': {
				alias: 'salealertsignuppage',
				srcFile: 'salealertsignuppage.js'
		    },
			'pdpcollectionpage': {
				alias: 'pdpcollectionpage',
				srcFile: 'pdpcollectionpage.js'
		    },
			'pmpsearchpage': {
				alias: 'pmpsearchpage',
				srcFile: 'pmpsearchpage.js'
		    },
			'egiftcardsection': {
				alias: 'egiftcardsection',
				srcFile: 'egiftcardsection.js'
		    },
			'findinstoresection': {
				alias: 'findinstoresection',
				srcFile: 'findinstoresection.js'
		    },
			'homepage': {
				alias: 'homepage',
				srcFile: 'homepage.js'
		    },
			'pdppage': {
				alias: 'pdppage',
				srcFile: 'pdppage.js'
		    },
			'pdpredesign': {
				alias: 'pdpredesign',
				srcFile: 'pdpredesign.js'
		    },
			'checkoutsection': {
				alias: 'checkoutsection',
				srcFile: 'checkoutsection.js'
		    },
			'digitalwalletpage': {
				alias: 'digitalwalletpage',
				srcFile: 'digitalwalletpage.js'
		    },
			'shoppingtrcart': {
				alias: 'shoppingtrcart',
				srcFile: 'shoppingtrcart.js'
		    },
			'commonjssection': {
				alias: 'commonjssection',
				srcFile: 'commonjssection.js'
		    },
			'default': {
				alias: 'default',
				srcFile: 'default.js'
		    },
			'orderconfirm': {
				alias: 'orderconfirm',
				srcFile: 'orderconfirm.js'
		    },
			'myaccountforgotpassword': {
				alias: 'myaccountforgotpassword',
				srcFile: 'myaccountforgotpassword.js'
		    },
			'productpage': {
				alias: 'productpage',
				srcFile: 'productpage.js'
		    },
			'myaccountsec': {
				alias: 'myaccountsec',
				srcFile: 'myaccountsec.js'
		    },
			'selection': {
				alias: 'selection',
				srcFile: 'selection.js'
		    }
		},
		refs: {
			'core.js': 'core',
			'core-debug.js': 'core',
			'foundation2.js': 'foundation2',
			'foundation2-debug.js': 'foundation2',
			'kjscore2.js': 'kjscore2',
			'kjscore2-debug.js': 'kjscore2',
			'kjscore.js': 'kjscore',
			'kjscore-debug.js': 'kjscore',
			'foundation.js': 'foundation',
			'foundation-debug.js': 'foundation',
			'overlay.js': 'overlay',
			'overlay-debug.js': 'overlay',
			'global.js': 'global',
			'global-debug.js': 'global',
			'framework.js': 'framework',
			'framework-debug.js': 'framework',
			'environment.js': 'environment',
			'environment-debug.js': 'environment',
			'kohlsframe.js': 'kohlsframe',
			'kohlsframe-debug.js': 'kohlsframe',
			'compatability.js': 'compatability',
			'compatability-debug.js': 'compatability',
			'kohls_v1_m56577569839297458.js': 'kohls_v1_m56577569839297458',
			'kohls_v1_m56577569839297458-debug.js': 'kohls_v1_m56577569839297458',
			'components.js': 'components',
			'components-debug.js': 'components',
			'framework2.js': 'framework2',
			'framework2-debug.js': 'framework2',
			'custom.js': 'custom',
			'custom-debug.js': 'custom',
			'checkoutbtmsection.js': 'checkoutbtmsection',
			'checkoutbtmsection-debug.js': 'checkoutbtmsection',
			'signinzipcodeoverlaysection.js': 'signinzipcodeoverlaysection',
			'signinzipcodeoverlaysection-debug.js': 'signinzipcodeoverlaysection',
			'productlist.js': 'productlist',
			'productlist-debug.js': 'productlist',
			'shoppingcart.js': 'shoppingcart',
			'shoppingcart-debug.js': 'shoppingcart',
			'egiftcardplaceordersection.js': 'egiftcardplaceordersection',
			'egiftcardplaceordersection-debug.js': 'egiftcardplaceordersection',
			'salealertsignuppage.js': 'salealertsignuppage',
			'salealertsignuppage-debug.js': 'salealertsignuppage',
			'pdpcollectionpage.js': 'pdpcollectionpage',
			'pdpcollectionpage-debug.js': 'pdpcollectionpage',
			'pmpsearchpage.js': 'pmpsearchpage',
			'pmpsearchpage-debug.js': 'pmpsearchpage',
			'egiftcardsection.js': 'egiftcardsection',
			'egiftcardsection-debug.js': 'egiftcardsection',
			'findinstoresection.js': 'findinstoresection',
			'findinstoresection-debug.js': 'findinstoresection',
			'homepage.js': 'homepage',
			'homepage-debug.js': 'homepage',
			'pdppage.js': 'pdppage',
			'pdppage-debug.js': 'pdppage',
			'pdpredesign.js': 'pdpredesign',
			'pdpredesign-debug.js': 'pdpredesign',
			'checkoutsection.js': 'checkoutsection',
			'checkoutsection-debug.js': 'checkoutsection',
			'digitalwalletpage.js': 'digitalwalletpage',
			'digitalwalletpage-debug.js': 'digitalwalletpage',
			'shoppingtrcart.js': 'shoppingtrcart',
			'shoppingtrcart-debug.js': 'shoppingtrcart',
			'commonjssection.js': 'commonjssection',
			'commonjssection-debug.js': 'commonjssection',
			'default.js': 'default',
			'default-debug.js': 'default',
			'orderconfirm.js': 'orderconfirm',
			'orderconfirm-debug.js': 'orderconfirm',
			'myaccountforgotpassword.js': 'myaccountforgotpassword',
			'myaccountforgotpassword-debug.js': 'myaccountforgotpassword',
			'productpage.js': 'productpage',
			'productpage-debug.js': 'productpage',
			'myaccountsec.js': 'myaccountsec',
			'myaccountsec-debug.js': 'myaccountsec',
			'selection.js': 'selection',
			'selection-debug.js': 'selection'
		},
		alias: {
			'build.timestamp.js': ['core', 'kjscore2', 'kjscore', 'foundation', 'overlay', 'global', 'framework', 'kohlsframe', 'compatability', 'kohls_v1_m56577569839297458', 'components', 'custom', 'checkoutbtmsection', 'signinzipcodeoverlaysection', 'productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'pmpsearchpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'pdpredesign', 'checkoutsection', 'shoppingtrcart', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec', 'selection'],
			'kohls.s.js': ['core', 'kjscore2', 'kjscore', 'framework', 'framework2'],
			'kohls.guts.js': ['core', 'kjscore2', 'kjscore', 'framework', 'kohlsframe', 'framework2'],
			'kohls.core.js': ['core', 'kjscore2', 'kjscore', 'framework', 'framework2'],
			'jquery-1.7.2.js': ['foundation2', 'foundation'],
			'jquery-migrate-1.4.1.js': ['foundation2', 'foundation'],
			'jsrender.js': ['foundation2'],
			'jsviews.js': ['foundation2'],
			'jQuery.XDomainRequest.js': ['foundation2', 'foundation'],
			'kohls.base.js': ['foundation2', 'foundation'],
			'kohls.resolver.js': ['foundation2', 'foundation'],
			'kohls.errors.js': ['foundation2', 'foundation'],
			'kohls.errorinfo.js': ['foundation2', 'foundation'],
			'kohls.elem.js': ['foundation2', 'foundation'],
			'kohls.clientinfo.js': ['foundation2', 'foundation'],
			'kohls.tmpl.js': ['foundation2'],
			'kohls.ajax.js': ['foundation2', 'foundation'],
			'kohls.idgen.js': ['foundation2', 'foundation'],
			'kohls.tplid.js': ['foundation2', 'foundation'],
			'kohls.storage.js': ['foundation2', 'foundation'],
			'kohls.message.js': ['foundation2', 'foundation'],
			'init.data.js': ['foundation2', 'foundation'],
			'env.block.js': ['kjscore2', 'kjscore', 'framework', 'framework2'],
			'env.kjscore2.js': ['kjscore2'],
			'env.kjscore.js': ['kjscore'],
			'jquery.tmpl.js': ['foundation'],
			'kohls.tpl.js': ['foundation'],
			'jquery.fancybox-1.3.4.js': ['overlay'],
			'jquery.ba-postmessage.js': ['overlay', 'kohlsframe'],
			'kohls.frame.js': ['overlay', 'kohlsframe'],
			'jquery.cookie.js': ['global'],
			'jquery.hoverIntent.r6.js': ['global'],
			'jquery.cycle.all.js': ['global'],
			'kohls.jquery.cyclepagination.js': ['global'],
			'kohls.jquery.inputplaceholder.js': ['global'],
			'jquery.ifixpng.js': ['global'],
			'AC_RunActiveContent.js': ['global'],
			'swfobject.js': ['global'],
			'global.js': ['global'],
			'env.framework.js': ['framework'],
			'kohls.environment.js': ['environment'],
			'modernizr.js': ['compatability'],
			'kohls_v1_m56577569839297458.js': ['kohls_v1_m56577569839297458'],
			'kohls.jquery.hint.js': ['components'],
			'kohls.searchhistory.js': ['components'],
			'kohls.typeahead.js': ['components'],
			'kohls.accordion.js': ['components'],
			'kohls.jquery.carousel.js': ['components'],
			'kohls.recommendations.js': ['components'],
			'kohls.jquery.number.js': ['components'],
			'kohls.inputs.js': ['components'],
			'kohls.setnearbystore.js': ['components'],
			'kohls.passwordstrength.js': ['components'],
			'env.framework2.js': ['framework2'],
			'custom.js': ['custom'],
			'Validation.js': ['checkoutbtmsection', 'shoppingtrcart'],
			'tr_common.js': ['checkoutbtmsection', 'productlist', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'homepage', 'pdppage', 'shoppingtrcart', 'commonjssection', 'default', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
			'tr_phase2_common.js': ['checkoutbtmsection', 'productlist', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'homepage', 'pdppage', 'shoppingtrcart', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
			'kohls.trajax.js': ['checkoutbtmsection', 'productlist', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'homepage', 'pdppage', 'shoppingtrcart', 'commonjssection', 'default', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
			'common_checkout.module.js': ['checkoutbtmsection', 'shoppingtrcart'],
			'common_checkout.controller.js': ['checkoutbtmsection', 'shoppingtrcart'],
			'shipping.module.js': ['checkoutbtmsection'],
			'shipping.controller.js': ['checkoutbtmsection'],
			'gift_option.module.js': ['checkoutbtmsection'],
			'gift_option.controller.js': ['checkoutbtmsection'],
			'payment.module.js': ['checkoutbtmsection'],
			'payment.controller.js': ['checkoutbtmsection'],
			'order_review.module.js': ['checkoutbtmsection'],
			'order_review.controller.js': ['checkoutbtmsection'],
			'tr_phase3_common.js': ['checkoutbtmsection'],
			'tr_q2_addressValidation.js': ['checkoutbtmsection', 'myaccountsec'],
			'zipcode_overlay.js': ['signinzipcodeoverlaysection'],
			'launch_window.js': ['signinzipcodeoverlaysection', 'productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'checkoutsection', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
			'ipad.js': ['signinzipcodeoverlaysection', 'productlist', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'commonjssection', 'default', 'myaccountforgotpassword', 'myaccountsec'],
			'jquery.flexslider.js': ['productlist', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'homepage', 'pdppage', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword', 'productpage', 'myaccountsec'],
			'jquery.easyzoom.js': ['productlist', 'pdpcollectionpage', 'pdppage', 'productpage', 'myaccountsec'],
			'jquery.validate.js': ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'pdpcollectionpage', 'egiftcardsection', 'homepage', 'pdppage', 'checkoutsection', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword'],
			'UI_validation.js': ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'pdpcollectionpage', 'egiftcardsection', 'homepage', 'checkoutsection', 'commonjssection', 'default', 'orderconfirm', 'myaccountforgotpassword'],
			'modal_validation.js': ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'findinstoresection', 'homepage', 'pdppage', 'checkoutsection', 'commonjssection', 'default', 'orderconfirm'],
			'jquery.numeric.js': ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'homepage', 'pdppage', 'commonjssection', 'default', 'orderconfirm', 'myaccountsec'],
			'myaccount.js': ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'pdppage', 'commonjssection', 'orderconfirm', 'myaccountforgotpassword', 'myaccountsec'],
			'video.js': ['productlist', 'shoppingcart', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'pdppage', 'commonjssection', 'orderconfirm', 'myaccountsec'],
			'myaccount_custom.js': ['productlist', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'pdppage', 'commonjssection', 'orderconfirm', 'myaccountsec'],
			'cart.js': ['productlist', 'egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'pdppage', 'commonjssection', 'orderconfirm', 'myaccountsec'],
			'search.js': ['productlist'],
			'fb_like_pdt.js': ['productlist', 'pdpcollectionpage'],
			'jcarousellite_1.0.1.js': ['productlist', 'homepage', 'pdppage', 'checkoutsection', 'default', 'orderconfirm', 'myaccountsec'],
			'carousel_inline.js': ['productlist', 'pdpcollectionpage', 'pdppage'],
			'product.js': ['productlist', 'pdpcollectionpage', 'pdppage'],
			'jquery.lazyload.js': ['productlist'],
			'gwp_akamai_pdp.js': ['productlist'],
			'selectAStore.js': ['shoppingcart'],
			'jcarousellite.min.js': ['egiftcardplaceordersection', 'salealertsignuppage', 'pdpcollectionpage', 'egiftcardsection', 'commonjssection', 'productpage'],
			'': ['egiftcardplaceordersection', 'salealertsignuppage', 'salealertsignuppage', 'findinstoresection', 'commonjssection', 'myaccountforgotpassword', 'myaccountforgotpassword', 'myaccountforgotpassword', 'myaccountforgotpassword', 'myaccountforgotpassword'],
			'jquery.easing-1.3.pack.js': ['pdpcollectionpage', 'pdppage'],
			'product-collection.js': ['pdpcollectionpage', 'pdppage', 'pdpredesign'],
			'pdpCollectionHelper.js': ['pdpcollectionpage'],
			'pdpCollectionController.js': ['pdpcollectionpage'],
			'jquery.selectbox-0.2.js': ['pmpsearchpage', 'selection'],
			'kohls.selectbox.js': ['pmpsearchpage', 'selection'],
			'jquery.jscrollpane.js': ['pmpsearchpage'],
			'jquery.mousewheel-3.0.4.pack.js': ['pmpsearchpage', 'pdppage'],
			'pmpsearchHelper.js': ['pmpsearchpage'],
			'pmpsearchController.js': ['pmpsearchpage'],
			'monetization.js': ['pmpsearchpage'],
			'jquery.tablesorter.js': ['findinstoresection'],
			'findinstore.js': ['findinstoresection'],
			'jquery-barcode.js': ['findinstoresection', 'digitalwalletpage'],
			'pdp_api.js': ['pdppage'],
			'pdp.js': ['pdppage'],
			'pdp_c.js': ['pdppage'],
			'jquery.validate_tell.js': ['pdppage'],
			'pdpHelper.js': ['pdpredesign'],
			'pdpController.js': ['pdpredesign'],
			'jquery.maskedinput.js': ['checkoutsection'],
			'jquery.validate1.js': ['checkoutsection'],
			'jquery.validate_product.js': ['checkoutsection'],
			'checkout_custom.js': ['checkoutsection'],
			'facebook_like.js': ['checkoutsection', 'myaccountforgotpassword'],
			'shipping_bill_custom.js': ['checkoutsection'],
			'UI_validation_payment_information.js': ['checkoutsection'],
			'jQuery-plugin-progressbar.js': ['digitalwalletpage'],
			'walletHelper.js': ['digitalwalletpage'],
			'walletController.js': ['digitalwalletpage'],
			'shoppingcart.module.js': ['shoppingtrcart'],
			'shoppingcart.controller.js': ['shoppingtrcart'],
			'tabs_v2.js': ['commonjssection']
		},
		loose: {
			'app.resources.js': 'debug/app.resources.js',
			'kohls.clientdebug.js': 'debug/kohls.clientdebug.js',
			'kohls.clientdebug.orig.js': 'debug/kohls.clientdebug.orig.js',
			'kohls.logger.js': 'debug/kohls.logger.js',
			'tpl.clientdebug.js': 'debug/tpl.clientdebug.js',
			'tpl.clientdebug2.js': 'debug/tpl.clientdebug2.js',
			'tpl.logger.js': 'debug/tpl.logger.js',
			'tpl.logger2.js': 'debug/tpl.logger2.js',
			'tpl.resources.js': 'debug/tpl.resources.js',
			'tpl.resources2.js': 'debug/tpl.resources2.js',
			'AC_RunActiveContent.js': 'external/AC_RunActiveContent.js',
			'jQuery.XDomainRequest.js': 'external/jQuery.XDomainRequest.js',
			'jcarousellite_1.0.1.js': 'external/jcarousellite_1.0.1.js',
			'jcarousellite_1.0.js': 'external/jcarousellite_1.0.js',
			'jquery-1.12.4.js': 'external/jquery-1.12.4.js',
			'jquery-1.7.2.js': 'external/jquery-1.7.2.js',
			'jquery-migrate-1.4.1.js': 'external/jquery-migrate-1.4.1.js',
			'jquery.ba-postmessage.js': 'external/jquery.ba-postmessage.js',
			'jquery.hoverIntent.r6.js': 'external/jquery.hoverIntent.r6.js',
			'jquery.ifixpng.js': 'external/jquery.ifixpng.js',
			'jquery.jcarousel.js': 'external/jquery.jcarousel.js',
			'jquery.jscrollpane.js': 'external/jquery.jscrollpane.js',
			'jquery.jscrollpane.min.js': 'external/jquery.jscrollpane.min.js',
			'jquery.lazyload.js': 'external/jquery.lazyload.js',
			'jquery.tmpl.js': 'external/jquery.tmpl.js',
			'jsrender.js': 'external/jsrender.js',
			'jsviews.js': 'external/jsviews.js',
			'modernizr.js': 'external/modernizr.js',
			'kohls.ext.js': 'lib/kohls.ext.js',
			'kohls.google.js': 'lib/kohls.google.js',
			'shadow.omniture.js': 'lib/shadow.omniture.js',
			'app.errors.js': 'poc/errors/app.errors.js',
			'test.js': 'poc/errors/test.js',
			'tpl.errors_app.js': 'poc/errors/tpl.errors_app.js',
			'app.talentlist.js': 'poc/itemlist/app.talentlist.js',
			'tpl.talentlist.js': 'poc/itemlist/tpl.talentlist.js',
			'app.listmgr.js': 'poc/listmgr/app.listmgr.js',
			'tpl.listmgr.js': 'poc/listmgr/tpl.listmgr.js',
			'iteminfopanel.js': 'poc/panels/iteminfopanel.js',
			'iteminfopanel2.js': 'poc/panels/iteminfopanel2.js',
			'lib.listpanel.js': 'poc/panels/lib.listpanel.js',
			'tpl.iteminfopanel.js': 'poc/panels/tpl.iteminfopanel.js',
			'app.reference.js': 'poc/reference/app.reference.js',
			'tpl.reference.js': 'poc/reference/tpl.reference.js',
			'app.shell2.js': 'poc/shell/app.shell2.js',
			'tpl.shell2.js': 'poc/shell/tpl.shell2.js',
			'tpl.tabs.js': 'poc/tabs/tpl.tabs.js',
			'building.js': 'poc/templates/building.js',
			'tpl.building.js': 'poc/templates/tpl.building.js',
			'kohls.dragdrop.js': 'ui/kohls.dragdrop.js',
			'kohls.itemlist.js': 'ui/kohls.itemlist.js'
		}
	};
}).call(this);

// ---- End of env.block.js ----
/*!
 * env.framework2.js
 * Sets static configuration options for KJS global environment block.
 * Only used in the assembly of consolidated framework.js script.
 * Settings here are defined prior to loading Kjs core, so do not attempt to
 * make any calls to Kjs methods here.
 * This is part of the new framework bundle to include JSRender template engine
 */
(function() {
	$env = this.$env||{};						// Define global $env if not already defined
	if (!$env.multiple) {						// Multiple-load protection
		$env.config = 'framework2';				// Configuration id
		$env.namespace = $env.namespace||'Kjs';	// Top-level namespace name
		$env.core = $env.core||'Kohls';			// Core framework identifier
		$env.idPrefix = 'K';					// Default ID prefix
		$env.topLoad = ($env.topLoad !== false);// Everything is top-loaded by default
		$env.preload = ['kohls.s.js'];			// Load debug strings
		$env.foundation = 'foundation2.js';		// Name of foundation script
		$env.noFoundation = true;				// Don't load foundation - it is already included
		$env.reportErrors = $env.reportErrors;	// Report captured errors to server
		$env.expiredSessionUrl = '/common/session_timeout.jsp';	// Default URL for redirecting when session has timed out
		$env.errorLogApiUrl = '${Kjs.global.location.origin}/uierrorLogging.jsp';	// Default URL for error reporting API
		$env.jsRender = true;					// Indicate bundle contains JSRender
	}
}).call((function() {return this;})());

// ---- End of env.framework.js ----
/*!
 * kohls.s.js
 * Debug strings for core. 
 * Author: Bill Hubbard
 */
/*
	Separating out strings helps improve minification of core. When strings are absent,
	the log entries will contain the message key and a JSON string with any parameters
	supplied to the message.
 */
(function() {
	$env = this.$env||{};
	if (!$env.multiple) {
		$env.s = {
			// Debug messages:
			msgCallingOnload: 'Calling $requires onLoad for [${files}]',
				
			// Info messages:
			msgInstallJQuery: 'Installing jQuery handler to defer KJS ready until after jQuery ready handlers run.',
			msgCoreReadyFromJquery: 'KJS ready requested from jQuery ready handler.',
			msgCoreCommenceReady: 'KJS ready commencement following jQuery ready.',
			msgInvokeKJSReady: 'KJS ready initial invocation -- preInit = ${preInit}',
			msgStartupWillRestart: '$requires was called after launch. Startup sequence will restart.',
			msgCoreLoaded: 'KJS loaded from ${href}',
			msgStartupRestart: 'Startup sequence is restarting',
			msgWindowOnLoad: 'Window load event fired',
			msgAlreadyLoaded: '${fil} is already included in ${src}.',
		
			// Warning messages:
			msgNoParentRequest: 'Selected package (${alias}) specifies parents, but no parent package has been requested.',
			msgScriptAfterFailure: 'Script load attempt following a previous failure.',
			msgRequiresEnvExists: '$requires specifies $env property that already exists - existing value is overwritten.',
			msgRequiresNoParams: '$requires was called with no parameters.',
			msgRequiresNoSrc: '_doRequires was called with undefined src.',
			msgRequiresInInit: '$requires was called during $init phase. THIS IS NOT RECOMMENDED! Place all $requires calls in load phase.',
			msgRequiresInReady: '$requires was called during $ready phase. THIS IS NOT RECOMMENDED! Place all $requires calls in load phase.',
			msgReloadIssues: 'Be aware of potential issues when using reload option with $requires. Read docs/comments for more info.',
			msgAjaxSyncMismatch: 'Ajax operation completed with no prior Ajax start detection - ${url}',	// Can happen if a jQuery document ready fires Ajax before foundation installs global handlers
			msgMalformedURI: 'Malformed URI in getCookie',
			msgAmbiguousDependency: 'Ambiguous membership - cannot determine parent module for script (${src}). Loading individual file.',
			msgSyncHoldOnReady: 'Sync hold specified during ready state. Consider moving async operation to $init handler.',
			msgMultipleEnv: 'Environment script loaded ${count} times!',
			
			// Error messages:
			msgModuleRedefined: 'Kjs.${moduleName} module namespace is already defined.',
			msgModuleInitFail: 'Exception in init for module ${moduleName}',
			msgExceptionInHandler: 'Exception in ${handleName} handler (${qName}.${ftnName}): ${message}',
			msgLoadHandlerException: 'Exception in load handler for: ${src} - ${message}',
			msgModuleNotFound: 'Specified module (${module}) was not found for script (${src})',
			msgReloadInFlight: 'Script reload was requested while previous load was still in flight. Review docs regarding this issue with using reload with $requires.',
		
			// Init warning messages:
			msgModuleUndefined: 'Attempt to create Kjs.${moduleName} module namespace as undefined',
			msgReleaseMismatch: 'Synchronization management problem: More sync releases than holds requested!',
			msgEnvTypeMismatch: 'Kjs.env: attempt to impose object value on existing non-object environment property: ${prop}',
			msgEnvPropRedefined: 'Kjs.env: Warning - re-defining environment property: ${prop} from ${oldVal} to ${newVal}',
			msgEnvFromStorage: '$env settings have been applied from local storage.',
			msgEnvAfterLoad: '$env settings from local storage are being applied after page load.',
			msgExpectedSetting: 'KJS config did not provide a value for ${prop}',
			msgNoFoundation: 'Foundation is not specified!',
			msgMultipleLoad: 'Kjs core library loaded multiple times!',
		
			// Init error messages:
			msgBadEnvData: 'Bad data retrieved for $env settings from local storage: ${message}',
		
			// Init info messages:
			msgInjectingScript: 'Performing patch script injection',
			
			// Group titles
			msgJustReporting: 'KJS framework is reporting an error for which no error object was provided.'
		};
	}
})(this);
	
// ----- End of kohls.s.js -----
/*!
 * kohls.guts.js
 * Innermost primary KJS atomic structures.
 * This is separated out as a means of providing absolute minimal support code
 * to include with scripts we distribute to third-party vendors, if any, that
 * do not require full KJS framework support.
 * Author: Bill Hubbard
 */

/*
 * THIS IS CORE FRAMEWORK CODE. PLEASE STAY OUT!
 * 
 * Methods provided:
 *	  - Kjs.global
 *	  - Kjs.emptyFn
 *	  - Kjs.extend
 *	  - Kjs.descend
 *	  - Kjs.drain
 *	  - Kjs.object
 *	  - Kjs.bind
 *	  - Kjs.bindEx
 *	  - Kjs.bindEvent
 *    - Kjs.bindF
 *	  - Kjs._
 *
 */

// Create the top namespace if it doesn't already exist
(function() { // The closing brace is at the end of this file
	var 
		// Reference to global object
		_global = this,

		_noDOM = !_global.document,
		
		// Reference to global environment block - define block if undefined
		$env = (_global.$env = _global.$env||{}),

		// Get name of top-level namespace
		_nsn = $env.namespace||'Kjs',
		
		// Get a reference to the top-level namespace, if it exists
		_ns = _global[_nsn],
		
		// Key property to establish that top-level namespace is official
		_core = $env.core||'Kohls',
		
		// Definitions to assist in minification
		_typObject = 'object',
		_typNumber = 'number',
		_typBoolean = 'boolean'
	;

	// Multiple-load protection
	// The mutiple-load check is performed here to simply avoid
	// re-defining the top-level namespace and these low-level utilities.
	// The core will check again and report a warning from there
	if (_ns && _ns.core == _core) {
		_ns.multiple = true;	// Indicate framework has been loaded multiple times
		return;
	}
	
	// Ensure config block has namespace and core defined
	$env.namespace = _nsn;
	$env.core = _core;

	// Capture any definition of jQuery, if it exists, as
	// first stage in multiple jQuery instance detection.
	$env.jQuery1 = _global.jQuery||_global.$;
	try { if (!$env.jQuery1().jquery) delete $env.jQuery1; } catch(e) { delete $env.jQuery1; }
	
	var
		// Convenient references - helps with minification
		_slice = Array.prototype.slice,
		_setTimeout = _global.setTimeout,
		
		// NOP function
		_emptyFn = function _$emptyfn() {},

		// Detect if using IE browser
		// Will return false if called from server-side code (a la NodeJS)
		_msie = (function() {
			var 
				rmsie = /(msie) ([\w.]+)/,
				msie = (_noDOM) ? '' : msie = rmsie.exec(navigator.userAgent.toLowerCase())||[];
			;
			msie = !!msie[1];
			if (msie) {
				msie = {};
				msie['le 5'] = !!(document.all && !document.compatMode);
				msie['le 6'] = !!(document.all && !window.XMLHttpRequest);
				msie['le 7'] = !!(document.all && !document.querySelector);
				msie['le 8'] = !!(document.all && !document.addEventListener);
				msie['le 9'] = !!(document.all && !window.atob);
				msie['le 10'] = !!(document.all);
			}
			return function(ver) {
				return (ver) ? (msie && msie[ver]) : !!msie;
			};
		})(),

		// Extend an object by copying properties from other object(s)
		// _extend([deep,] targ, obj1, ..., objN)
		// Deep extend only goes one level deep. This avoids infinite
		// recursion with circular or self references. Self references
		// are further avoided, explicitly, in case a source object has a
		// property that refers to the target object (an unlikely scenario) or itself.
		_extend = function _$extend(targ) {
			/*jsl:declare _$extend*/
			var 
				args = _slice.call(arguments, 1),
				src, prop, deep
			;
			if (typeof targ == _typBoolean) {
				deep = targ;
				targ = args.shift();
			}
			targ = targ||{};
			while (args.length) {
				src = args.shift();
				for (prop in src) if (src.hasOwnProperty(prop) && (targ[prop] === undefined || src[prop] !== undefined)) {
					// For deep extension: Extend target property if applying an object to an object, 
					// otherwise always just do a straight assignment
					if (deep && typeof src[prop] == _typObject && targ[prop] !== null && src[prop] != targ && src[prop] != src && targ[prop] != src[prop] && targ[prop] != _global) {
						if (typeof targ[prop] != _typObject) {
							targ[prop] = {};
						}
						_$extend(targ[prop], src[prop]);	//[*] Only one level deep? YES Pass deep to _$extend? NO
					} else {
						targ[prop] = src[prop];
					}
				}
			}
			return targ;
		},
		
		// Like extend, but creates a new object, combining properties from other object(s)
		// var obj = _descend([deep,] obj1, obj2, ..., objN);
		_descend = function _$descend(targ) {
			var 
				deep = (typeof targ == _typBoolean),
				args0 = deep ? [targ, {}] : [{}],
				args1 = _slice.call(arguments, deep ? 1 : 0)
			;
			return _extend.apply(this, args0.concat(args1));
		},
		
		// Remove all properties of an object to preserve any external reference to the object
		// (to prevent dangling/stale reference).
		// Note this only removes properties that are native to an object. Properties
		// inherited through the prototype chain are ignored. This is mainly useful for
		// pure data objects.
		_drain = function _$drain(obj) {
			obj=obj||{};
			for (var prop in obj) if (obj.hasOwnProperty(prop)) {
				delete obj[prop];
			}
			return obj;
		},
		
		// Formally extends an object, through prototype chain, to produce
		// a new object, with additional properties, if supplied. The properties
		// of any objects optionally passed in are simply copied (shallow copy) to
		// the new object. In other words, a prototype chain is not created between
		// all the objects to finally result in a final object with properties
		// inherited from the preceding objects. It simply instantiates a new
		// object using the first object as its prototype, then applies properties from
		// all other provided objects onto this new object. Applied properties are drawn
		// from only the native properties of the given objects (no inherited properties are copied).
		// This is most useful in creating data objects to apply static properties or getter
		// functions to a prototype data object without disturbing the prototype object.
		// Note that if you use this on a function, a new OBJECT is created, with
		// the function as its prototype. The result of calling this cannot be a function.
		// var obj = _object(base);	// Extends base object
		// var obj = _object(base[, obj1, obj2, ..., objN]);	// Extends base object and applies native properties of other objects
		// var obj = _object(deep, base[, obj...]) // Deep extends base object (see _extend)
		// var obj = _object();
		_object = function _$object(base) {
			var args = _slice.call(arguments, 1), deep;
			if (typeof base == 'boolean') {
				deep = base;
				base = args.shift();
			}
			function Obj() {}
			Obj.prototype = base||{};
			if (deep) {
				return _extend.apply(this, [true, new Obj()].concat(args));
			} else {
				return _extend.apply(this, [new Obj()].concat(args));
			}
		},
		
		// ----- Event management (bindings) -----
		//[*] May be replaced by super binding
		
		// Binds a function to the context of an object
		// Calling signature: Kjs.bind( context, ftn[, arguments] );
		_bind = function _bind(context, fn) {
		    var args = _slice.call(arguments, 2);
		    return function _$bind() {
		        return fn.apply(context, args.concat(_slice.call(arguments)));
		    };
		},
	    
		// Binds a function to the context of an object, passing in the context
		// of the invocation as the first parameter to the target function
		_bindEx = function _bindex(context, fn) {
		    var args = _slice.call(arguments, 2);
		    return function _$bindEx() {
		        return fn.apply(context, [this].concat(args, _slice.call(arguments)));
		    };
		},
		
		// Binds a function to an object as an event handler
	    // The only difference between this and bind is that the event object is passed as the first parameter to method
	    // Calling signature: Kjs.bindEvent( obj, ftn[, arguments] );
	    // Receiving function signature: function ftn(event[, bindArgs][, callArgs]) and this==obj
 		_bindEvent = function _bindevent(context, fn) {
	        var args = _slice.call(arguments, 2);
	        return function _$bindEvent(event) {
	            if (_msie() && (!event||!event.currentTarget)) {
	                return fn.apply(context, [_global.event].concat(args, _slice.call(arguments)));
	            } else {
	                return fn.apply(context, [event].concat(args, _slice.call(arguments, 1)));
	            }
	        };
	    },
	    
	    // Binds a function to another function.
	    // Sometimes, you have a callback and you want to do something before that callback
	    // gets invoked, at the time the callback gets invoked. Or, you might want to conditionally
	    // prevent the callback from getting invoked. 
	    // That's where _bindF comes in. It allows you to bind a callback to a function so the
	    // callback will get called before the function, when an attempt is made to call the function.
	    // Think of it as an interceptor. Return false from your callback to prevent the original
	    // function from getting called.
	    // var ftn = _bindF(ftn, callback[, args...])
	    // The callback recieves the original function as the first parameter.
	    // Any additional static arguments are passed to the callback, next, followed by any arguments
	    // received in the invocation. The original function gets invoked none the wiser.
	    // If the callback returns an object, it can specify additional arguments to pass along to the bound function.
	    _bindF = function _bindF(ftn, callback) {
	        var bindArgs = _slice.call(arguments, 2);	    	
	    	return function _$bindF() {
	    		var 
	    			args = _slice.call(arguments),
	    			rtn = callback.apply(this, [ftn].concat(bindArgs, args))
	    		;
	    		if (ftn && rtn !== false) {
	    			if (typeof rtn == 'object') {
	    				ftn.apply(rtn.context||this, args.concat(rtn.args||[]));
	    			} else {
	    				ftn.apply(this, args);
	    			}
	    		}
	    	};
	    },
				
		// Defered function caller (typically for event handler use).
	    // Calling signature:
		// Kjs._([interval,] ftn[, t]);	// Invokes ftn once or every t ms (default t=1 for timeout, t=250 for interval)
		// Use Kjs.bind method to pass in a function with parameters.
		// interval specifies whether the function gets called from an
		// interval timer instead of a one-time timeout. If ftn() returns
		// true (a non-falsey value), then interval will stop.
		// interval is optional.
		// ftn is a reference to the function to call.
		// t is an optional delay time (in ms) - default is 1 (simply
		// ensures ftn will not be invoked until after current event
		// handler exits) if interval is not specified, or 250 if
		// interval is true.
	    //   Kjs._(ftn);	// Invokes ftn after 1ms
	    //   Kjs._(ftn, 200);	// Invokes ftn after 200ms
	    //   Kjs._(0, ftn); // Invokes ftn every 250ms (default) until ftn() returns true (if ever)
	    //   Kjs._(10, ftn); // Invokes ftn every 250ms (default) for 10 invocations or until ftn() returns true
	    //   Kjs._(0, ftn, 1000); // Invokes ftn every 1s until ftn() returns true (if ever)
	    //   Kjs._(30, ftn, 1000); // Invokes ftn every 1s for 30 invocations or until ftn() returns true
	    //   Kjs._(1, ftn); // Same as calling Kjs._(ftn) - uses setTimeout
	    //   Kjs._(1, ftn, 200); // Same as calling Kjs._(ftn, 200) - uses setTimeout
	    // BACKWARD SUPPORT DEPRECATED:
	    //   Kjs._(true, ftn);	// Invokes ftn every 250ms until ftn() returns true (if ever) (same as Kjs._(0, ftn))
	    //   Kjs._(true, ftn, 1000);	// Invokes ftn every 1s until ftn() returns true (same as Kjs._(0, ftn, 1000))
		_ = function _$_(iterations, ftn, t) {
			if (iterations === true) iterations = 0;	// Backward support
			var 
				timer,
				isInterval = (typeof iterations == _typNumber)
			;
			// Normalize params
			if (!isInterval) {
				// Calling signature for timeout _(ftn, t)
				t = ftn;
				ftn = iterations;
				iterations = 1;
			}
			// Set timer
			if (iterations == 1) {
				timer = _setTimeout(ftn, t||1);
			} else {
				// Calling signature _(iterations, ftn[, t])
				timer = setInterval(function() {
					if (ftn(iterations, t) || (iterations && !(--iterations))) {
						clearInterval(timer);
					}
				}, t||250);
			}
			return timer;
		}
	;

	// Define public API
	// Extend partial pre-existing Kjs namespace, if it exists, else create anew.
	// Note that for new Kjs, a call to _extend could be avoided by defining the API
	// object, separately, and return that from an if statement, but there's only a
	// handful of properties, and it's a one-time operation, and this way saves code,
	// plus it is consistent with the module pattern, so here it stands. The multiple-load
	// check was done early, so this won't re-apply anything if a multiple load occurs.
	_global[_nsn] = _extend(_ns, {
		core: _core,						// Identifies the guts have been defined
		global: _global,					// Reference to global object
		noDOM: _noDOM,						// Indicates if no DOM object is defined (i.e. server-side)
		emptyFn: _emptyFn,					// NOP function
		msie: _msie,						// Indicates if using IE browser & if so, what version
		extend: _extend,					// Extend objects
		descend: _descend,					// Descend objects
		drain: _drain,						// Drain objects
		object: _object,					// Object instantiator
		_: _,								// Defer function call
		bind: _bind,						// Callback binding
		bindEx: _bindEx,					// Callback binding with context capture
		bindEvent: _bindEvent,				// Event binding
		bindF: _bindF,						// Function binding
		toString: function() { return '[object '+_nsn+']'; }
	});

	// Define module for module loader such as NodeJS
	if (typeof _global.module == _typObject && typeof module.exports == _typObject) {
		module.exports = _ns;
	}
	
}).call((function() {return this;})());

// ---- End of kohls.guts.js ----
/*!
 * kohls.core.js
 * Core framework - load management and startup sequencing
 * Author: Bill Hubbard
 */
/*
 * THIS IS CORE FRAMEWORK CODE. PLEASE STAY OUT!
 * 
 * Extends Kjs namespace, defined by kohls.guts.js.
 * kohls.guts.js is a hard dependency and must be loaded first.
 * 
 * The core provides support for initialization and startup, dependency management, and
 * simple instrumentation, plus a handful of useful framework-level utility methods.
 * Top-loading vs. late-loading is supported through a split framework script, which loads
 * core at the top of the page in all scenarios, followed by the remainder of the framework
 * API, either top-loaded or late-loaded. 
 * 
 * Notes:
 *   - kjscore module is the module that contains the top-loaded core.
 *   - foundation module contains the remainder of the KJS framework library.
 *   - Desired usage is to load kjscore{-debug}.js at the top of the page. Depending on
 *     the setting of $env.topLoad, foundation will either be injected immediately (top-loaded),
 *     or after DOMContentLoaded fires (late-loaded).
 * 
 * The following global references are defined in guts:
 *       - Kjs = Top namespace providing core API
 *       - $env = {} (if not already defined) - environment block
 *       
 * The following global references are defined in core:
 *       - $sync = Kjs.sync
 *       - $init = Kjs.init
 *       - $ready = Kjs.ready
 *       - $log = Kjs.log
 *       - $err = Kjs.errors
 *       - $requires = Kjs.requires
 *       - $unload = Kjs.unload
 *       
 * The following global references are defined in foundation (not available to core):
 *       - $ or jQuery = jQuery namespace
 *       - $v = Kjs.resolver.$v
 *       - $r = Kjs.resolver.$r
 *       - $s = Kjs.resolver.$s
 *       - $o = Kjs.resolver.$o
 *
 * Environment block ($env) settings can be pre-defined in local storage as a JSON string.
 * Settings from local storage are applied before base load-time code is
 * executed, and in first pre-init handler that is registered during core load.
 * 
 * Local Storage key: "$env"
 * Recognized configuration properties:
 *   - topLoad = true||falsey -- Defines whether $requires uses top-loading or late-loading
 *   - noFoundation = true||falsey -- Specifies whether to load foundation or not (true = do not load)
 *   - foundation = 'foundation.js' -- Name of foundation script
 *   - idPrefix = string -- Default prefix to use with id generator
 *   - isClientDebug = true||falsey -- Sets client debug mode for things like loading debug scripts (via Kjs.requires).
 *   - noGlobals = true||falsey -- Determines whether special globals get defined ($init, $ready, etc.)
 *   - noPackaging = true||falsey -- Determines whether dependency manager recognizes packaged scripts
 *   - logLevel = 'log'|'info'|'debug'|'warn'|'error' -- Specifies logger threshold
 *   - debugMenu = 'kohls.clientdebug.js' -- Name of client debugging tools script
 *   - patch = string or list of strings -- Name(s) of patch script(s) to load before foundation
 *   - noPackaging = true||falsey -- Disables mapping to packaged scripts to load individual scripts
 *   
 * Other properties expected to be defined by the host:
 *   - packaging = object -- Translation map of packaged scripts
 *   - jsSubdomainURL = string -- Origin for JS (e.g. http://js.kohls.com)
 *   - cssSubdomainURL = string -- Origin for CSS (e.g. http://css.kohls.com)
 *   - imageSubdomainURL = string -- Origin for images (e.g. http://images.kohls.com)
 *   - htmlSubdomainURL = string --   Origin for HTML templates (e.g. httm://js.kohls.com)
 *   - resourceRoot = string -- Root (relative to origin) of resources (e.g. /media/)
 *   - jsScriptPath = string -- Path (relative to resourceRoot) to JS (e.g. javascript/)
 *   - jsModulePath = string -- Path (relative to resourceRoot) to packaged js (e.g. javascript/deploy/)
 *   - jsLoosePath = string -- Path (relative to resourceRoot) to loose scripts (e.g. javascript/deploy/js/)
 *   - imgFilePath = string
 *	 - cssFilePath = string
 *   - htmlFilePath = string
 *   
 * Other properties defined by other scripts:
 *   - logger = object -- External client debug logger
 *   
 * TODO:
 *   x Errors should be thrown if:
 *       - Kjs.requires is called while processing ready queue.
 *       - Kjs.init gets called while processing ready queue.
 *   - Script tags can specify async, but this can cause scripts to load before a
 *     dependency. For example, if KJS core is loaded synchronously, but all other
 *     scripts are loaded asynchronously, one asynchronous load may complete before
 *     core is loaded and attempt to execute core functions. So, async is not very helpful.
 *     Create an additional queue for scripts (maybe also one more for last scripts),
 *     so all scripts in that queue must load before the next queue is processed. Scripts
 *     can load asynchronously within each queue, but having this grouping ensures core
 *     scripts are loaded before other scripts, and allows for asynchronous loading.
 *     UPDATE: Done, basically. Support already existed - specify preInit: true to place
 *     script in _fq. Just needed to check _flags.loadDone prior to calling _sq & _3q.
 *     UPDATE: Oh, if only life were that easy. That doesn't work, because loadDone is cleared
 *     at the time the request is queued, not when the script is injected, so the queue never
 *     gets processed to inject the script(s) if loadDone is cleared for _sq or _3q with nothing
 *     in _fq.
 */

/*
 * GUIDELINES:
 *   - One primary module object per script, named after the script 
 *     (kohls.module.js -> Kjs.module)
 *   - Scripts must be unaffected if loaded more than once - Define modules using: 
 *     Kjs.{module} = Kjs.{module}||(function(){...})();
 *   - Scripts must be written such that load order does not matter ($init and $ready facilitate this)
 *   - Call $requires at load time to load any dependencies. Name only individual scripts your script 
 *     depends on (not packaged scripts)*, and do not assume a dependency will include a dependency 
 *     that you directly need. List all direct dependencies.
 *   - $requires should be called as early as possible within a script, before $init or $ready.
 *   - Modules shall make no calls to other modules (or jQuery) during load time – only Kjs core can 
 *     be assumed available. Use $init/$ready or $requires onLoad callback for external calls.
 *   - All scripts are guaranteed to be loaded prior to $init. $init is called for all scripts in order 
 *     of dependency, so dependent scripts should be viable during $init for a given module.
 *   - $init shall make no calls to $requires or $ready and should focus only on initialization related 
 *     to preparing the current script for startup.
 *   - Use $init to pre-load any data or templates. Use $sync to maintain proper sequencing.
 *   - Use $sync only from within an $init handler or $requires onLoad callback.
 *   - $ready shall make no calls to $init, $requires or $sync and is where all UI rendering and 
 *     activation should take place.
 *   - Only one $init and/or $ready per module is recommended, though both are optional if not needed. 
 *   - $init will get called before any $requires onLoad callback in the same script.
 * *Except for global.js, custom.js and kohls_v1_m56577569839297458.js from phase I roll-out.
 *   
 * 
 * NOTES:
 *   - Load order is indeterminate – cannot rely on presence of any dependencies at load time.
 *   - Scripts MUST be written such that load order does not matter
 *   - $init handlers can assume all scripts have been loaded
 *   - $init handlers can assume all specified dependencies (via $requires in the same script) have 
 *     been initialized
 *   - $ready handlers can assume all $init handlers have fully completed for all scripts (including 
 *     asynchronous operations)
 *   - $requires onLoad callback can assume $init handlers from all dependencies, including $init from 
 *     the current script, have been called (including to the completion of any asynchronous operations using $sync)
 *   - $requires callback guarantees that all dependencies have been initialized, as the callback
 *     is queued for $init and all other $inits are stacked and $init does not begin until all
 *     scripts are loaded.
 *   - $ready handlers are stacked, so are executed in reverse order in which they are registered.
 *   - When in doubt, place initialization code that relies on dependencies in onLoad handler of $requires.
 *   
 */

(function() {
	var 
		// Top-level namespace name
		_nsn = $env.namespace,
		// Reference to top-level namespace to aid in minification
		_ns = this[_nsn],
		// Data attribute
		_nsAttr = 'data-' + _nsn
	;
	// This conditional resides inside the immediate function, rather than wrapping it, due to a minification oddity.
	if (_ns.multiple) {
		_ns.log.warn('msgMultipleLoad');	// 'Kjs core library loaded multiple times!'
	} else {
		(function() { // The closing brace is at the end of this file
			var	
				// Timestamp to mark KJS core loaded
				_tLoaded = (+new Date()),
			
				// Convenient vars to expose Kjs guts & aid in minification
				_global = _ns.global,
				_noDOM = _ns.noDOM,
				_emptyFn = _ns.emptyFn,
				_extend = _ns.extend,
				_descend = _ns.descend,
				_drain = _ns.drain,
				_object = _ns.object,
				_bind = _ns.bind,
				_bindF = _ns.bindF,
				_ = _ns._,
				
				// Convenient references - helps with minification
				_slice = Array.prototype.slice,
				_document = _global.document,
				_typObject = 'object',
				_typNumber = 'number',
				_typBoolean = 'boolean',
				_typFunction = 'function',
			    _ael = 'addEventListener',
			    _rel = 'removeEventListener',
			    _ae = 'attachEvent',
			    _de = 'detachEvent',
				
				//[*] DO NOT define a reference to console and use that - it will not properly report exceptions for quick locating
		
				// $env global environment block keys - defined here to facilitate minification & obfuscation
				// These are defined as variables instead of object properties so the names will be minified.
				_keyConfig = 'config',						// Environment configuration id
				_keyPackaging = 'packaging',					// Packaging map from build
				_keyJsSubdomainURL = 'jsSubdomainURL',			// JS subdomain (from JSP)
				_keyCssSubdomainURL = 'cssSubdomainURL',		// CSS subdomain (from JSP)
				_keyImageSubdomainURL = 'imageSubdomainURL',	// Image subdomain (from JSP)
				_keyHtmlSubdomainURL = 'htmlSubdomainURL',		// HTML template subdomain (from host)
				_keyNoSubdomains = 'noSubdomains',				// Subdomains are ignored
				_keyResourceRoot = 'resourceRoot',				// Root URL to resources (media)
				_keyImgFilePath = 'imgFilePath',				// Path to images, relative to resourceRoot
				_keyCssFilePath = 'cssFilePath',				// Path to CSS files, relative to resourceRoot
				_keyJsScriptPath = 'jsScriptPath',				// Path to JS, relative to resourceRoot
				_keyJsModulePath = 'jsModulePath',				// Path to JS modules (deploy), relative to resourceRoot
				_keyJsLoosePath = 'jsLoosePath',				// Path to non-packaged JS, relative to resourceRoot
				_keyHtmlFilePath = 'htmlFilePath',				// Path to HTML templates, relative to resourceRoot
				_keyTopLoad = 'topLoad',						// Top-loading JS flag
				_keyNoFoundation = 'noFoundation',				// Flag to prevent loading foundation
				_keyFoundation = 'foundation',					// Name of foundation script
				_keyIsClientDebug = 'isClientDebug',			// Flag for client debug mode
				_keyIdPrefix = 'idPrefix',						// Prefix to use with Kjs.id (default = 'K')
				_keyNoPackaging = 'noPackaging',				// Flag to disable loading packaged scripts
				_keyNoGlobals = 'noGlobals',					// Flag to disable definition of convenient globals ($init, etc.)
				_keyLogLevel = 'logLevel',						// Logger threshold - name of level (equal and above to report to console)
				_keyPatch = 'patch',							// Name(s) of patch file(s) - array if more than one
				_keyPreload = 'preload',						// Name(s) of file(s) to pre-load - array of more than one
				_keyDebugMenu = 'debugMenu',					// Name of client debug script
				_keyNoConsole = 'noConsole',					// Flag to disable logger output to console
				_keyThrowIfNoConsole = 'throwIfNoConsole',		// Flag to throw $init/$ready exceptions if no console is available for log
				_keyThrowInStartup = 'throwInStartup',			// Flag to always throw $init/$ready exceptions
				_keyNoErrorLog = 'noErrorLog',					// Flag to disable error log
				_keyNoTryCatch = 'noTryCatch',					// Flag to remove try-catch from queue processing - for performance comparison
				_keyLogAll = 'logAll',							// Forces logging of all errors, regardless of whether they are marked as handled
				_keyJQuery = 'jQuery',							// jQuery reference is captured in this property in kohls.base.js in case jQuery.noConflict(true) gets called
				_keyCacheBuster = 'cacheBuster',				// Cache buster value for JavaScript requests (?v=)
		
				// Default environment config (for kohls.com)
				//[*] Does this even belong in core? -- Where else would it go?
				//    If placed in env.kjscore.js, for example, it would clobber values
				//    defined in JSP. Whereas here, they are default values that get
				//    applied before $env values are applied over top.
				//    UPDATE:
				//    resourceRoot, jsScriptPath, jsModulePath and jsLoosePath all get
				//    defined in env.block.js, which is probably the appropriate place,
				//    if not defined here. resourceRoot also gets defined in pageStart2.jsp,
				//    which would be the first opportunity to define it.
				//    So, the _defEnv object could be reduced to defining these values as
				//    empty string (since these values need to be defined as strings), and
				//    let env.block.js and/or pageStart2.js to define the actual values, in
				//    order to decouple kohls.core.js from any "knowledge" of the host
				//    environment at all (since the values below are Kohl's webstore-specific).
				_defEnv = {
					jsSubdomainURL: '',						// e.g. 'http://js.kohls.com'
					cssSubdomainURL: '',					// e.g. 'http://css.kohls.com'
					imageSubdomainURL: '',					// e.g. 'http://images.kohls.com'
					htmlSubdomainURL: '', 					// e.g. 'http://js.kohls.com'
					resourceRoot: '/media/',				// Gets defined in config
					jsScriptPath: '/',			// Currently defined in env.block.js - or would be, if this is removed
					jsModulePath: 'javascript/deploy/',		// Currently defined in env.block.js - or would be, if this is removed
					jsLoosePath: 'javascript/deploy/js/',	// Currently defined in env.block.js - or would be, if this is removed
					htmlFilePath: 'javascript/',			//
					module: {},								// Namespace to hang module public namespaces on
					tpl: {}									// Namespace to hang template properties on
				},
				
				// History entry types
				_hType = {
					stamp: 0,	// Timestamp marker entry
					css: 1,		// CSS file injection
					script: 2,	// Script file injection
					queue: 3,	// Queue processing event
					sync: 4,	// Sync event
					log: 5,		// Log event
					unit: 6,	// Unit test event/entry {hType, t, module, data} 
					custom: 7	// Custom entry
				},
				
				// Event history
				// This is THE central log.
				// This logs everything from CSS & script injections, to init queue executions to timestamps and log entries.
				// This is the core history utility for auditing the sequence of key events.
				_history = (function() {
					// _env is visible due to hoisting, but is not yet defined. A get-only version is defined here
					// until it is officially re-defined later. This is in case _history gets called before _env is defined.
					_env = _env||function(prop) {
						return (prop !== undefined) ? $env[prop] : $env;
					};
					var
						// History
						_entries = [],
						
						// Insertion callbacks
						_callbacks = [],

						// Register a callback
						// Callbacks get called whenever an entry is about to be added to
						// the error log. Return true from a callback to prevent the entry
						// from being entered into the log.
						_addCallback = function(ftn, context) {
							_callbacks.push({ftn: ftn, context: context||_global});
						},
						
						// Remove a callback
						_removeCallback = function(ftn) {
							var
								n = _callbacks.length
							;
							while (n--) {
								if (_callbacks[n].ftn == ftn) {
									_callbacks.splice(n,1);
								}
							}
						},

						// Call all registered insertion callbacks
						_doCallbacks = function(entry) {
							var
								recorded = false,
								i, cb, n = _callbacks.length
							;
							for (i=0; i<n; i++) {
								cb = _callbacks[i];
								recorded = !!cb.ftn.call(cb.context||_global, entry, recorded) || recorded;
							}
							return recorded;
						},

						// Checks if hType is included in a list of hTypes (filter).
						// This was included to remove a jQuery dependency on $.inArray
						_accept = function(hType, filter) {
							var len = filter.length, rtn = false;
							while (len--) {
								if (filter[len] === hType) {
									rtn = true;
									break;
								}
							}
							return rtn;
						},

						// Get entries by type, or all entries
						_get = function(hTypes) {
							hTypes = [].concat(hTypes||[]);
							var rtn=[];
							if (!hTypes.length) {
								return [].concat(_entries);	// Return a copy of the list, not the list directly. Less performant, but safer
							} else {
								for (var i=0; i<_entries.length; i++) {
									if (_accept(_entries[i].hType, hTypes)) {
										rtn.push(_entries[i]);
									}
								}
								return rtn;
							}
						},
						
						// Add an entry to the history
						// Original entry reference must be maintained (no descend)! //[*] Why??
						//[*] There is/was some use case where entry was updated asynchronously
						//    in calling code after adding it to the history.
						_add = function(hType, entry) {
							var
								// _env 
								noErrorLog = _env(_keyNoErrorLog),
								logAll = !!_env(_keyLogAll),
								recorded, i
							;
							
							entry.t = entry.t||(+new Date());
							entry.hType = hType;
							
							// If noErrorLog is specified, there is NO error logging.
							//[*] Maybe rename this to noHistory
							if (!noErrorLog) {
								recorded = _doCallbacks(entry);
								if (!recorded || logAll) {
									if (entry.t < _history.max) {
										// Insert earlier time stamp into _entries
										i = _entries.length;
										while (i--) {
											if (_entries[i].t <= entry.t) {
												_entries.splice(i+1,0,entry);
												break;
											}
										}
									} else {
										// Append to history log
										_entries.push(entry);
										// Update latest timestamp recorded
										if ((entry.t) > (_history.max)) {
											_history.max = entry.t;
										}
									}
									recorded = true;
								}
							}
							if (!recorded) entry.orphaned = true;
							return entry;
						},
						
						_clear = function() {
							_entries.length = 0;
						}
					;
					
					return {
						hType: _hType,					// History type constants
						loaded: _tLoaded,				// Timestamp when module loaded
						max: _tLoaded,					// Timestamp of most recent event (also module loaded, initially)
						addCallback: _addCallback,		// Add an insertion callback
						removeCallback: _removeCallback,// Remove an insertion callback
						get: _get,						// Retrieve entries from history log
						add: _add,						// Add an entry to the history log
						clear: _clear					// Clear the history
					};
				})(),
				
				// _stamp(opt);
				// opt.id = timestamp id
				// opt.label = Human readable name
				// opt.t = timestamp (default = new Date())
				// opt.tick = false|true (default = false)
				// Timestamps are recorded in event history
				_stamp = (function() {
					var 
						// Public _stamp API
						$stamp = function(opt) {
							if (typeof opt == 'string') {
								opt = {id: opt};
							}
							opt.t = opt.t||(+new Date());
							opt = _extend({
								tick: false
							}, opt);
							// Register time stamp
							if (!opt.noHistory) {
								opt = _history.add(_hType.stamp, opt);
							}
							// If tick, mark it on the console timeline, if supported
							if (opt.tick && _global.console && console.timeStamp) {
								try {
									console.timeStamp(opt.label||opt.id);
								} catch(e) {
									//[EAEV-544/ATG-7905]
									// Ignore exception - if access denied, it would be for $log, too, so don't even try to record the error
								}
							}
							// Return the timestamp as recorded
							return opt.t;
						}
					;
					$stamp.t = {};
					// Record a tick in the console timeline. It is too early to call history here, as _env is not defined, yet.
					// Another stamp call will be made later to add the entry to the history.
					$stamp({id: 'loaded', label: _nsn + ' core loaded', t: _history.loaded, tick: true, noHistory: true});
					return $stamp;
				})(),
			
				// Registry for publicly tracking timestamps
				_t = _stamp.t,
				
				// Determines if localStorage is supported by the browser.
				// This will return false under the following conditions:
				//   - localStorage is not defined
				//   - localStorage quota is zero or exceeded (typically in private browsing mode)
				//   - Reference to localStorage throws an exception (typically from browser set to block website data)
				_hasLocalStorage = (function() {
					var exists = true;
					try {
						// Test if write will succeed
						localStorage.setItem('__canwrite', 'Test');
						localStorage.removeItem('__canwrite');
					} catch(e) {
						// localStorage is undefined or write failed (full)
						exists = false;
					}
					return exists;
				})(),

				/*
				 * Error Log
				 * 
				 * This is essentially a wrapper around the history API to serve as the front end
				 * for recording error events.
				 * 
				 * An error log entry has the following properties:
				 *   - type: string - Message type: 'code' | 'ajax' | 'log' (required)
				 *   	'code' = Exception that occurred in code
				 * 		'ajax' = Exception that occurred in Ajax operation
				 * 		'log' = Entry reported through logger
				 *   - level: string - Message severity level if type == 'log', or 'error' for 'code' or 'ajax' types (required)
				 *   - msg: string - Human readable message text (required)
				 *   - logId: string - Arbitrary "reporter id" (typically a module or process name) to
				 *     identify message origin - logger name in the case of type=='log'
				 *   - dump: object - An object to dump to the log as part of the message
				 *   - err: object - Relevant error object - errorObj from window.onerror
				 *   - code: number - Error or response code, usually from Ajax response
				 *   - line: number - Line number where error occurred - typically for exceptions
				 *   - column: number - Column number in line where error occurred
				 *   - url: string - URL associated with error condition
				 *   - info: string - Optional additional human-readable information about the entry
				 *   - noReport: Boolean - Optional flag to prevent reporting an entry to the server
				 *   - id: number - Sequential id, unique to the entry
				 *   - t: number - Datetime stamp when entry is created
				 *   
				 *   Only enough functionality to support adding entries into the error log is provided,
				 *   in order to support the logger and capture all init and startup log entries. This is
				 *   to keep the core small. The full error log API is defined in the errors module during pre-init. 
				 *   Global error trapping is not enabled until the full API is defined, so if there are any uncaught
				 *   exceptions in the core, these will not get captured. But that's a universal problem,
				 *   as you can't take care of yourself until you exist.
				 *   
				 *   The full API is fleshed out in the errors module.
				 *   
				 *   API defined here:
				 *   	private:
				 *   		id()
				 *   		entry(entry, opt)
				 *   	public:
				 *   		lock()
				 *   		add(entry)
				 *   		log(logId, level, msg, dump)
				 */
				_errors = (function() {
					var
						// Private variable block
						_ = {
							// Constants
							K: {
								// Message types
								CODE_TYPE: 'code',	// Uncaught exception in code
								AJAX_TYPE: 'ajax',	// Exception in Ajax call/handler
								LOG_TYPE: 'log',	// Generic log entry via logger
								ERR_TYPE: 'err'		// Exception recorded via logger
							},
							// Flag to prevent any additional extensions to Kjs.errors API
							locked: false,
							// Sequential error ID counter
							errId: 0,
							
							// Primary function - extends Kjs.errors API
							// api = object containting properties and functions to add
							// isPrivate == true to define function privately - applies to functions only
							$errors: function $err(api, isPrivate) {
								var val, ptype;
								if (!_.locked) {
									for (var prop in api) {
										val = api[prop];
										if (val === undefined) {
											// If source value is undefined, assume property is to be deleted
											delete _[prop];		// Remove from private API
											delete _.$errors[prop];	// Remove from public API
										} else if (_[prop] === undefined) {
											// Only define property if not already defined. No overrides!
											ptype = typeof val;
											// Define private property - bind functions to _ block
											if (ptype == _typFunction) {
												_[prop] = _bind(_, val);
											} else {
												_[prop] = val;	// Properties are not bound
											}
											// Respect isPrivate setting for functions and objects, only
											if (!isPrivate && (ptype == _typFunction || ptype == _typObject)) {
												//[*] I'm concerned about IE here - older versions at least.
												//    Sometimes things get funky when addressing the function from within itself.
												//    But maybe since this is referring to the external name, it will be OK.
												_.$errors[prop] = _[prop];
											}
										}
									}
								}
								return _.$errors;
							}
						}
					;
		
					// Define internal private API
					_.$errors({
						// Generate error id
						id: function() {
							return ++this.errId;
						},
						
						// Normalize error log entry
						// Returns a new (official) instance of entry object
						entry: function(entry, opt) {
							var _ = this;
							if (typeof entry != _typObject) {
								entry = {
									msg: (entry+'')
								};
							}
							return _descend({
								id: _.id(),
								t: (+new Date()),
								type: _.K.LOG_TYPE,
								level: {level: _log.log.level, nLevel: 0},
								msg: 'no message'
							}, entry, opt);
						}
					}, true);
					
					// Define public API
					_.$errors({				
						// Lock out any further API extensions
						lock: function() {
							var _ = this;
							_.$errors({lock: undefined});
							_.locked = true;
						},
						
						// Add an error log entry to the history log.
						// Returns a (new) official instance of the entry added to the log.
						add: function(entry) {
							var	
								_ = this,
								errObj = (entry.isProtected) ? {} : entry.errorObj,
								url
							;

							if (errObj instanceof Error) {
								// When an error object is created, depending on the browser, it may not have
								// fileName, columnNumber or lineNumber available. In that case, calling identify
								// attempts to extract this information from the stack, if provided.
								// Firefox has the info, Chrome does not, as of this writing. 12/1/2015
								try {
									if (!entry.url && !errObj.fileName && errObj.stack) {
										url = errObj.stack.match(/\((.*?)\)/);	// Get url from top of stack
										url = (url) ? url[1] : '';				// Normalize in case unsuccessful
										if (url) url = url.split(':');			// Break it into pieces
										if (url.length == 4) {					// If successful, parse values
											entry.url = url[0]+':'+url[1];		// File name is the url sans params
											entry.columnNumber = url[2];		// Column number is first value in params
											entry.lineNumber = url[3];			// Line number is second value in params
										}
									}
								} catch(e) {
									entry.url = '* unknown path - try Firefox *';
									entry.noReport = true;
								}
							}
							return _history.add( _history.hType.log, _.entry(entry) );
						},
						
						// API for logging logger messages.
						// If dump is an error object, the entry gets logged as an ERR_TYPE, regardless of level
						// Otherwise, entry gets logged as a LOG_TYPE.
						// It is possible dump may be an Error object that is inaccessible. Though not seen in
						// this path, this has been seen when window.onerror is called while sitting at a
						// breakpoint in firebug in Firefox in linux.
						log: function(logId, level, msg, dump) {
							var _ = this;
							if (dump instanceof Error) {
								var isProtected = false, errObj;
								try { 
									dump.name = dump.name; 
								} catch(e) {
									isProtected = true;
								}
								errObj = (isProtected) ? {} : dump;

								// Add entry to the log and return it
								return _.add({
									type: _.K.ERR_TYPE,
									logId: logId,
									level: {level: level.level, nLevel: level.nLevel},
									msg: msg||errObj.message,
									errName: errObj.name,
									errMsg: errObj.message,
									url: errObj.fileName,
									line: errObj.lineNumber,
									column: errObj.columnNumber,
									errorObj: dump,
									isProtected: isProtected
								});
							} else {
								// Under some circumstances (like $requires), an array is passed in (by reference), which gets
								// recorded into the log, then the calling code removes the content of the array, leaving our
								// reference empty as well, so no information is available. Rather than address the issue in
								// external code, a copy of the array is made here so we save the copy. Objects could suffer
								// the same fate, but until that problem emerges, this is as far as we go.
								if (dump && typeof dump == _typObject && dump.constructor === Array) dump = [].concat(dump);
								return _.add({
									type: _.K.LOG_TYPE,
									logId: logId,
									level: {level: level.level, nLevel: level.nLevel},
									msg: msg,
									dump: dump
								});
							}
						}
					});
					
					// Expose constants
					_.$errors.K = _.K;
		
					return _.$errors;
				})(),
				
				/*
				 * Logger
				 *  
				 * Problems/TODOs
				 *   - Add enable/disable support via $env settings, as needed
				 *   - Enhance enable method to support calling signatures as defined in notes, below
				 *   - Perhaps add config options to logger method (as opposed to just enabled) - add full enable support
				 *     (i.e. as per calling signatures for enable method)
				 *   - Allow add method to accept a list of logger names
				 */
		
				/*
					Kjs.log = Default logger
					$log = Default logger, globally accessible
					
					var log = $log.logger(module[, enabled]); -- produces a logger - enabled == true by default
					
					Logger methods (reserved properties):
						log.log
						log.debug
						log.info
						log.warn
						log.error
						log.add
						log.logger
						log.enable
						log.enabled
						log.setThreshold
					
					log = $log.logger('core');
					
					// Standard levels
					log.log(msg[, dump]);	// nlevel = 0
					log.debug(msg[, dump]);	// nLevel = 1
					log.info(msg[, dump]);	// nLevel = 2
					log.warn(msg[, dump]);	// nLevel = 3
					log.error(msg[, dump]);	// nLevel = 4
					
					// Custom levels
					log.add(level[, enabled]);	// Defines a new logging level (enabled = true by default)
					
					log.add('init', Kjs.env('enableInitLogging'));
					log.init('Typeahead activated.');
					
					// Note $log.add will cause all loggers to inherit the new level
					
					// Enable levels
					log.enable(enabled[, level|[level1, level2, ...]]);
					
					e.g. Disable all logging (this does not affect individual enable settings, internally, but individual levels will be disabled)
					log.enable(false); 						// Disable all logging
					log.enable(false, 'init');				// Disable init level logging
					log.enable(true, ['init', 'debug']);	// Enable init and debug logging levels
					
					if (log.enabled) log[level](msg[, dump])'
					if (log[level].enabled) log[level](msg[, dump]);
					
					e.g.
					if (log.enabled) log.debug('JSON acquired.', json);
					if (log.init.enabled) log.init('Queue started.');
					
					It is not necessary to check enabled flag before calling log method, but it
					saves a function call, which can improve performance for heavily instrumented
					code when logging is disabled.
				*/
				/**
				 * Logger - Instrumentation
				 * 
				 * _log is instantiated as a default logger ("$log") - it is an instance
				 * of a logger. All logger instances carry a logger method that can be used for creating
				 * other loggers. Loggers inherit all the levels of the base logger (for example, if
				 * log = _log.logger is called, the new logger will carry the default logging levels. If this
				 * new logger defines a new level, and log.logger is called to create a new logger, the new
				 * logger will carry the default logging levels plus the new level. 
				 * New loggers are derived through the prototype chain, so the base logger is the prototype
				 * for all new loggers. This means that levels added to the base logger
				 * are immediately available to descendant loggers via the prototype chain.
				 * 
				 * Returns Boolean whether entry was recorded by external logger or reported to console
				 * (false if neither).
				 */
				_log = (function() {
					var
						// Determine if running within a frame
						inFrame = (_noDOM) ? false : (window.parent != window),
					
						// Determine if console supports grouping
						isGrouped = !!(console||{}).group,
						
						// Intrinsic logging levels for console
						consoleLevels = {log: true, debug: true, info: true, warn: true, error: true},
					
						// Translate message from message key, if it is a key
						_msg = function(key, noIndicate) {
							var msg = (($env.s)||{})[key]||key||'';
							if (msg !== key && !noIndicate) {
								msg = '(' + key + ') ' + msg;
							}
							return msg;
						},
						
						// A mini value resolver, since the terminal value resolver is not available to the core.
						// This supports string map keys. If msg is a string that matches a map key in Kjs.s, the
						// string from the Kjs.s map is used. Any properties defined that do not have placeholders
						// in the msg string, are appended to the string in JSON format as object properties.
						// msg can be a string, or an object with an msg property and any additional properties
						// needed to populate placeholders in the msg string, if any.
						_interpolate = function(msg) {
							var
								context = (typeof msg == _typObject) ? msg : {msg: msg},
								miss = [],
								token,
								add = function(key, value) {
									miss.push('"' + key + '":"' + (value+'').replace(/\'/g,'\\\'') + '"');
								}
							;
							msg = _msg(context.msg);
							if (!msg && context.msg) {
								add('msg', context.msg);
							}
							delete context.msg;
							for (var p in context) {
								token = '${' + p + '}';
								if (msg.indexOf(token) < 0) {
									add(p, context[p]);
								} else {
									try {
										msg = msg.replace(token, context[p]);	// If context[p] is a function, it gets invoked!
									} catch(e) {
										msg = msg.replace(token, '/!{'+p+'}: '+e.message+'!/');
									}
								}
							}
							if (miss.length) {
								msg += ',{' + miss.join(',') + '}';
							}
							return msg;
						},
		
						// Core logger - called in context of logger
						// msg = string or object. If object, msg.msg must contain the message text
						_doLog = _extend(function __log(context, level, msg, dump) {
							var 
								// Get bound logger config
								logger = this,
								// Get level name
								lname = level.level,
								// Determine console logging level to use (log is used for custom levels)
								consoleLevel = consoleLevels[lname] ? lname : 'log',
								// Is this an error?
								isError = (lname == _log.error.level),
								// Compute logger id -- [*] ":F" designates it is in a frame 
								loggerId = (context.name||logger.name) + (inFrame ? ':F' : ''),
								// Flag indicates if no console is present or if console logging is disabled
								noConsole = !console || !!_env(_keyNoConsole),
								// Check if msg is an object
								isMsgObj = (typeof msg == _typObject),
								// Build options object if msg is an object
								opt = (isMsgObj) ? {
									// Flag to prevent recording entry in the error log (console only)
//									noErrorLog: msg.$noErrorLog,
									// Flag to prevent recording entry in the console (error log only)
//									noConsole: msg.$noConsole,
									// Flag to prevent reporting error to the server
//									noReport: msg.$noReport,
									// Additional info to record in log entry
//									info: msg.$info
								} : {},
								// Flag to indicate entry got recorded somewhere
								recorded,
								// Error log entry, if added
								entry,
								// Experiment to avoid Firefox console bug
								mesg
							;
							// Remove special properties
							if (isMsgObj) {
								for (var p in msg) if (p[0] == '$') {
									opt[p.substr(1)] = msg[p]; 
									delete msg[p]; 
								}
							}
							// Normalize msg - simple value resolver if msg is an object
							msg = _interpolate(msg);
							// Exit if disabled, no message or no console is present or if logging threshold is not met
							if (msg === undefined || !level.enabled || !logger.enabled || !context.enabled || !console || (level.nLevel < logger.threshold)) {
								return false;
							}
							// If custom level, include level in logger id [*] Maybe always include it?
							if (consoleLevel != lname) {
								loggerId += ':' + lname;
							}
							// Assemble message format
							msg = '[' + loggerId + '] ' + msg;
							
							// Record to internal log
							if (!opt.noErrorLog) {
								entry = _errors.log(loggerId, level, msg, dump);
								// Update entry with properties that could not be provided in _errors.log call
								recorded = !entry.orphaned;
								if (recorded) {
									entry.noReport = !!opt.noReport;
									if (opt.info) {
										entry.info = (typeof opt.info == _typObject) ? _extend(entry.info, opt.info) : opt.info;
									}
								}
							}
//							recorded = !opt.noConsole && !opt.noErrorLog && !_errors.log(loggerId, level, msg, dump).orphaned;
							
							// Report message to console if not consumed by external logger and console exists
							if (!noConsole && !opt.noConsole && console[consoleLevel]) {
								try {
									if (dump !== undefined && dump !== null) {
										if (isGrouped) console.group(msg||'');
										if (dump.fn) console[consoleLevel]('In function ', dump.fn.name||dump.fn);
										if (dump instanceof Error) {
											if (!isGrouped) console[consoleLevel](msg);
											console[consoleLevel](dump);
										} else {
											console[consoleLevel](msg, dump);
										}
										if (isGrouped) console.groupEnd();
									} else {
										if (isError) console[isGrouped ? 'group' : consoleLevel](_msg('msgJustReporting', true));
										mesg = msg;	// Experiment to avoid Firefox console bug
										console[consoleLevel](mesg);	// KJS is just the messenger. Please do not shoot the messenger.
										if (isError && isGrouped) console.groupEnd();
									}
									recorded = true;
								} catch(e1) {
									//[*] Apparent Firebug issue results in "permission denied to access object" error
									//    when accessing the console logger. Since this condition cannot be reported
									//    to the console, this path remains empty. All we can do is mark the condition as
									//    not recorded.
									//[*] Another Firebug issue results when encountering a "Script error." condition.
									//    console[consoleLevel](msg) throws a TypeError (href is not defined), and when
									//    debugging, things get really screwy after that. No idea of the cause, but rather
									//    than rely on msg parameter passed in, the message is copied to local mesg var
									//    before reporting to see if this makes any difference.
									recorded = false;
									try {
										if (isGrouped) console.groupEnd();
										console.error('LOGGING ERROR - likely Firefox console bug - ' + e1.message);
									} catch(e2) {
										// Firefox throws access exception to console in some cases - report this to log, only
										if (_log.error && _log.error.enabled) {
											_log.error({
												msg: '*** LOGGING ERROR: ${err1} | ${err2} - while logging: ${mesg}', 
												err1: e1.message, 
												err2: e2.message, 
												mesg: msg, 
												$noConsole: true, 
												$info: 'Likely Firefox console bug or cross-origin security issue.'
											});
										}
										//[*] Else S.O.L.
									}
								}
							} //[*] Else entry is lost
							// There was a use case on https://www.kohls.com/myaccount/kohls_login.jsp?errorValue=We%27re+sorry!+Your+session+has+timed+out.+Please+login+to+retrieve+your+cart.&_requestid=1445212
							// where console[consoleLevel] was undefined, even though upon examining console and consoleLevel, the property appeared to be there. But
							// accessing it via console[consoleLevel] came up undefined, nevertheless. WHY?? Try to resolve this appropriately, as this is a silent
							// failure. This was seen in Firefox
							// UPDATE: Turns out it was a corrupt firebug installation. That's fine - the change above will avoid this edge case, though silently.
							return !!recorded;
						}, {
							// This binding will warp your mind. Look away while you still can!
							bind: function(logger, level) {
								var 
									// Context is the _log function
									_log = this,
									// This is the binding
									_$log = function _$log(msg, dump) {
										var args = _slice.call(arguments);
										// Binding passes context of call (originating logger), the binding itself
										// which has level applied to it (below), and any args passed in (formally msg, dump)
										return _log.apply(logger, [this, _$log].concat(args));
									}
								;
								// Apply level directly to binding so they're available to code, and return the binding
								return _extend(_$log, level);
							}
						}),
		
						// Define custom logger level - invoked in context of logger
						// Returns logger to support chaining calls
						_add = function _$add(level, opt) {
							opt = opt||{};
							var 
								logger = this,
								enabled = (opt.enabled !== false),
								consoleLevel = opt.consoleLevel||level
							;
							// Bind the logger and the level to _doLog and publish to API
							logger[level] = _doLog.bind(logger, {level: consoleLevel, enabled: enabled, nLevel: logger.nLevels++});
							return logger;
						},
		
						// Create a new logger - called in context of logger
						//[*] There is no logger registry. Creating multiple loggers of the same name
						//    results in two loggers with the same name. You cannot retrieve an existing
						//    logger by name. I think this was a conscious implementation decision.
						_logger = function _$logger(name, enabled){
							enabled = (enabled !== false);
							// New logger inherits everything from current logger
							return _object(this, {name: name, enabled: enabled, threshold: 0, nLevels: this.nLevels});
						},
						
						// Enable or disable logger - called in context of logger
						// _enable(true) Enable logger (default when logger is created)
						// _enable(false) Disable logger
						// _enable() Delete enabled flag to inherit setting from parent logger
						// Returns logger to support chaining calls
						_enable = function _$enable(enabled) {
							var logger = this;
							if (enabled === undefined) {
								delete logger.enabled;	// Allow visibility up the prototype chain
							} else {
								logger.enabled = (enabled !== false);
							}
							return logger;
						},
						
						// Enables/disabled logging levels based on level that is passed in.
						// Note that not all levels can be disabled using this method, as the
						// threshold will be set to whatever level is passed in. To disable
						// all levels, disable the logger, itself (via enable method).
						// Returns logger to support chaining calls
						_setThreshold = function _$setthreshold(level) {
							var logger = this;
							if (level === undefined) level = {nLevel: logger.nLevels};
							logger.threshold = level.nLevel;
							for (var p in logger) if ((typeof logger[p] == _typFunction) && (logger[p].nLevel !== undefined)) {
								logger[p].enabled = (logger[p].nLevel >= level.nLevel);
							}
							return logger;
						},
		
						// Base logger object - not exposed raw
						defLogger = {
							nLevels: 0,
							add: _add,
							logger: _logger,
							enable: _enable,
							setThreshold: _setThreshold,
							msg: _interpolate
						},
						
						// Create default Kjs logger with log, info, debug, warn & error levels
						$logger = defLogger.logger('$log').add('log').add('debug').add('info').add('warn').add('error')
					;
		
					// Create separate init logger
					$logger.init = $logger.logger('init');
					// Define the default logger from which all loggers will inherit
					return $logger;
				})(),

				// Polling 
				// _poll(interval, check, ftn, ...)
				// interval = interval time (in ms)
				// check = callback to test conditions - check(...)
				//      ... = any additional parameters passed into _poll
				// 		Called in the context of an object with the following properties:
				//			n = iteration counter
				//			ftn = main callback passed into _poll
				//			interval = the current interval period (in ms)
				//		Return:
				//			false, null, undefined, '' or NaN - ignore and keep polling
				//			number - change interval time, or 0 or negative number to terminate polling
				//			true - terminate polling and call ftn.call(_ns, true)
				//			anything else truthy - terminate polling and ftn.apply(_ns, [].concat(rtn))
				// ftn = main callback function to call when check succeeds
				//			Called with any parameters returned by the check function.
				//			If the check function returns a list, entries are passed as individual parameters
				// ... = any additional parameters are passed into check
				_poll = function(interval, check, ftn) {
					var
						// Collect any additional arguments passed in
						args = _slice.call(arguments, 3),
						// Timer handle
						t,
						// Context object for check call
						context = {
							n: 0,
							ftn: ftn,
							interval: interval
						},
						// Reset interval period (0 = terminate)
						reset = function(period) {
							if (t) clearInterval(t);
							t = 0;
							interval = period;
							if (interval > 0) {
								t = _(0, checker, interval);
							}
						},
						// Call the check function
						doCheck = function() {
							var rtn = 0;
							try {
								rtn = check.apply(context, args);
							} catch(err) {
								// Log error
								_log.error({
									msg: 'Exception in _poll check function! - ${errMsg}',
									errMsg: err.message,
									$noReport: true
								}, err);
							}
							return rtn;
						},
						// Interval function to perform conditions check
						checker = function() {
							context.n++;
							var rtn = doCheck();
							if (typeof rtn == 'number') {
								// Reset timer with new interval, or terminate, if a valid number
								if (!isNaN(rtn)) {
									reset(rtn);
								}
							} else if (rtn) {
								// anything else truthy
								reset(0);
								if (ftn) {
									try {
										ftn.apply(context, [].concat(rtn));
									} catch(err) {
										// Log error
										_log.error({
											msg: 'Exception in _poll primary function! - ${errMsg}',
											errMsg: err.message,
											$noReport: true
										}, err);
									}
								}
							}
						}
					;
					reset(interval);
					return t;
				},
				
				/*
				 * Module registry
				 * Used to define a module in a way that provides error feedback
				 * in an attempt to re-define a module. If KJS was loaded multiple
				 * times, this will be reported elsewhere, so no error is reported
				 * for a multiple module definition if KJS itself is in a multiple
				 * load condition, otherwise the log would be littered with errors.
				 * KJS core does not need to call _module, as _module checks the
				 * Kjs[moduleName] for any definition, and core defines Kjs properties,
				 * explicitly. All code based on KJS with the intent on defining a
				 * namespace should call Kjs.module. 
				 * 
				 * Module registry calls occur at LOAD time, which is why it is part
				 * of core.
				 * 
				 * moduleName - Name of module namespace
				 * ftn - Function or object used to define the namespace. If a function,
				 * 		calling signature is: ftn(log, env, moduleName), where:
				 *        - log = logger for the module
				 *        - env = reference to module's public variable namespace
				 *        - moduleName = name of module
				 *      and the function should return an object.
				 *      If ftn is an object, it will be assigned directly. It is not
				 *      recommended to pass simple values into ftn (function or object only).
				 */
				_module = (function() {
					var 
						// Define/retrieve a module's public namespace
						// moduleName = name of the module namespace
						// values = properties to define in the namespace (must be an object, or undefined)
						//          If undefined, the namespace is created/retrieved empty.
						//          If null, all properties will be deleted (namespace drained)
						_env = function(moduleName, values) {
							$env.module[moduleName] = _extend(true, $env.module[moduleName], values);
							return (values === null) ? _drain($env.module[moduleName]) : $env.module[moduleName];
						},
						
						_msg = function(msg, moduleName) {
							return {msg: msg, moduleName: moduleName};
						},
						
						// This is the Kjs.module ($module) API.
						// moduleName = name of module - must be unique
						// ftn = initialization function (instantiator). Or, it can be an object
						//       (or any value, really, but anything other than a function or an object
						//       is NOT recommended)
						// opt = options
						//       opt.redefine = Behaves as if the module is not already defined, even if it is.
						// Alternate calling signature:
						// $module(function(ns) { ... } [,arg...]);
						// This will simply invoke the function in the context of the top level namespace.
						// The result of $module will be whatever the function returns, if anything.
						// Any additional arguments are passed to the function.
						// Calling $module(moduleName) will simply retrieve the named module, if defined.
						// e.g. var box = $module('frame'); // Reference the $box API
						$module = function _$module(moduleName, ftn, opt) {
							var 
								module, log, env, args
							;

							// See if this is a call-only invocation, not defining a module.
							if (typeof moduleName == _typFunction) {
								args = _slice.call(arguments, 1);
								return moduleName.apply(_global, [_ns].concat(args));
							}
							
							// If no ftn or opt is defined, skip the definition part and just do a simple retrieve
							if (ftn || opt) {
								opt = opt||{};
								// If options is a function, then invoke it to get the options
								if (typeof opt == _typFunction) {
									opt = opt.call(_global, _ns, moduleName);
								}
								// Get any existing definition for the given module name
								module = _ns[moduleName];
								if (module !== undefined && !opt.redefine) {	//[*] Do not reduce
									// Report error if module is already defined
									if (!_ns.multiple && _log && _log.error.enabled) _log.error(_msg('msgModuleRedefined', moduleName)); // 'Kjs.${moduleName} module namespace is already defined.'
								} else if (ftn === undefined) {
									// Report warning if no function/definition was provided, but options are provided
									if (_log && _log.warn.enabled) _log.warn(_msg('msgModuleUndefined', moduleName));	// 'Attempt to create module Kjs.${moduleName} as undefined'
								} else {
									log = _log.logger(moduleName);
									env = _env(moduleName, {
										$module: moduleName
									});
									if (typeof ftn == _typFunction) {
										// Define module namespace from result of calling ftn
										try {
											_ns[moduleName] = ftn.call(_ns, log, env, moduleName, _ns)||{};
										} catch(e) {
											_log.error(_msg('msgModuleInitFail', moduleName), e);	// Exception in init for module ${moduleName}
										}
									} else {
										// Assign definition directly to module namespace (recommend object only)
										_ns[moduleName] = ftn;
									}
								}
							}
							// Return the module's definition as defined on the global Kjs namespace
							return _ns[moduleName];
						}
					;
					return _extend($module, {
						env: _env
					});
				})(),
				
				// Cookie management - get/set
				// Kjs.cookie.set(name, value, days)
				// Kjs.cookie.set(name, value, options)
				// Kjs.cookie.get(name)
				// Kjs.cookie.get(name, raw)
				// Kjs.cookie.get(name, opt)
				// To delete a cookie, call NS.cookie.set(name, undefined) or NS.cookie.set(name, null)
				// Cookie functionality is disabled if Kjs is running server-side
				_cookie = (_noDOM) ? null : (function() {
					var
						_decode = function(s, raw) {
					        try {
								return raw ? s : decodeURIComponent(s.replace(/\+/g, ' '));
					        } catch(e) {
					        	// Intentional empty catch block as raw value will be used if failure occurs.
					        	if (_log.warn.enabled) _log.warn('msgMalformedURI'); // 'Malformed URI in getCookie'
					        	return s;
					        }
						},
						
						// Retrieve value from cookie
						// cookieName = Name of cookie
						// opt = options OR value for opt.raw
						_getCookie = function _$getCookie(cookieName, opt) {
							if (typeof opt == _typBoolean) opt = {raw: opt};
							opt = opt||{};
							var cookies = _document.cookie.split('; '), i, vals, val='';
							for (i = 0; (vals = cookies[i] && cookies[i].split('=')); i++) {
								if (_decode(vals.shift(), opt.raw) === cookieName) {
									val = _decode(vals.join('='), opt.raw);
									break;
								}
							}
							return val;
						},
						
						// Create or delete a cookie
						// cookieName = Name of cookie
						// value = Value for cookie (undefined = delete cookie)
						// opt = Additional options OR value for opt.expires
						// opt.expires = Number of days before expiration
						// opt.path = Cookie path
						// opt.domain = Cookie domain
						// opt.secure = If true, creates secure cookie
						// opt.raw = If true, the value is not encoded
						_setCookie = function _$setCookie(cookieName, value, opt) {
							if (opt && typeof opt != _typObject) opt = {expires: opt};
							opt = _descend(_cookie.defaults, opt);
							if (value === undefined || value === null) {
								opt.expires = -1;
							}
							if (typeof opt.expires === _typNumber) {
								var days = opt.expires, t = opt.expires = new Date();
								t.setDate(t.getDate() + days);
							}
							value = value+'';
							opt.path = opt.path||'/'; // [?] Set root path by default
							return (_document.cookie = [
								encodeURIComponent(cookieName), '=', opt.raw ? value : encodeURIComponent(value),
								opt.expires ? '; expires=' + opt.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
								opt.path    ? '; path=' + opt.path : '',
								opt.domain  ? '; domain=' + opt.domain : '',
								opt.secure  ? '; secure' : ''
							].join(''));
						},
						
						// Creates a cookie
						// opt = Additional options OR value for opt.expires
						// opt.path is set to '/' by default. To override, specify
						// opt.path, explicitly. Call Kjs.cookie.set to create a cookie
						// using the current path as default.
						_createCookie = function _$createCookie(cookieName, value, opt) {
							if (opt && typeof opt != _typObject) opt = {expires: opt};
							opt = _descend({path: '/'}, opt);
							return _setCookie.call(this, cookieName, value, opt);
						}
					;
					
					return {
						create: _createCookie,
						set: _setCookie,
						get: _getCookie
					};
				})(),
		
				
				// Performs a straight script injection, injecting a script tag
				// into the header, dynamically, with no other synchronization
				// or tracking involved. An optional onLoad handler may be provided
				// to fire once the script has been loaded.
				// opt = options or onLoad callback function
				//   - onLoad = callback function, called in context of _global, with optional error payload
				//   - timeout = timeout wait for load (default = 120000 = 2 minutes)
				//   - attrs = object specifying any additional attributes to add to script tag
				//   - text = content to place in text node in body of <script></script> tag.
				// _injectScript is disabled if KJS is running server-side
				_injectScript = (_noDOM) ? _emptyFn : (function() {
					var
						// Script insertion point
						_first = _document.getElementsByTagName('script')[0],
		
						// Default options
						_defOpt = {
							timeout: 120000,
							attrs: {}
						},
						
						// History tracking
						_ridx = 0,			// Request index
						_cidx = 0,			// Completion index
						
						// Define the primary function that becomes _injectScript
						//[*] Setting async true caused a problem with ensuring foundation was loaded before
						//    other scripts that depend on it (like components.js).  If the dependent script
						//    loaded first, references to jQuery would fail. Setting async: false for JUST the
						//    foundation didn't work, since components.js was still loading asynchronously
						//    and would still load first. So, setting async: false did not deliver on the
						//    expectation that it would run before other scripts that followed, even if they
						//    were async. So, now everything is async: false, which is likely to ding performance.
						//    To force scripts to load asynchronously, which may be desirable for third-party
						//    scripts, specify async: true in opt (it is false by default).
						$injectScript = function _$injectScript(src, opt) {
							opt = (typeof opt == _typObject) ? opt : {onLoad: opt};
							var 
		//						isOldIE = _document.all && !window.atob,	// IE9 or below
								isOldIE = _document.all && !_document.addEventListener, // IE8 or below
							 	cfg = _descend(true, _defOpt, opt),
								script = _extend(_document.createElement('script'), {
		//							type: 'text/javascript',	// Media type response will determine this
									async: !!cfg.async //[*] See notes above
								}),
								buster = _env(_keyCacheBuster)||'',
								textNode, loaded, i, idx, entry, t,
								isReady = function(readyState) {
									return (!readyState || readyState == 'loaded' || readyState == 'complete' || readyState == 'uninitialized');
								},
								doOnLoad = function(err) {
									// entry is defined (later, below) in $injectScript and retained in its closure
									// until doOnLoad is called, here. This counts on _history.add adding it directly
									// to the history log, so updating its properties here affects the entry in the log.
									_extend(entry, {
										cidx: _cidx++,
										tLoad: (+new Date())
									});
									if (cfg.onLoad) cfg.onLoad.call(_global, err);
								}
							;

							if (cfg.onLoad) {
								cfg.onLoad = _bindF(cfg.onLoad, function(ftn) {
									if (t) clearTimeout(t);
									cfg.onLoad = ftn;
								});
							}
							
							if (cfg.text) {
								if (isOldIE) {
									script.text = cfg.text;
								} else {
									textNode = _document.createTextNode(cfg.text);
									script.appendChild(textNode);
								}
							}
							
							// Assign the script source - this may trigger load in old IE
							// before tag has even been added to the DOM
							if (src) {
								script.src = src + (cfg.noBuster ? '' : buster);
							}
		
							// IE race condition hack
							if (isOldIE) {
								script.event = 'onclick';
								script.id = script.htmlFor = cfg.attrs.id || _id('script');
							}
				
							// Add any extra attributes to the script element
							cfg.attrs[_nsAttr] = '';
							for (i in cfg.attrs) {
								script.setAttribute(i, cfg.attrs[i]);
							}
				
							// Bind to load events
							script.onreadystatechange = script.onload = function() {
								if (isReady(script.readyState)) {
									// Prevent memory leaks
									script.onload = script.onreadystatechange = script.onerror = null;
		
									if (!loaded) {
										loaded = true;
										// IE race condition hack
										if (isOldIE) {
											try {
												script.onclick();	// Triggers script execution prior to onLoad callback
											} catch (e) {}	// Ignore inconsequential error condition
										}
										doOnLoad();
									}
								}
							};
				
							// Not available in all browsers. Timeout will catch failure on all other browsers.
							script.onerror = function(err) {
								clearTimeout(t);
								loaded = true;
								doOnLoad(new Error('_injectScript load error: ' + src));
							};
				
							// Script load timeout in case of 404 or server down or too slow
							t = _(function() {
								// Don't do anything if the script has already finished via onerror or successful load
								if (!loaded) {
									loaded = true;
									doOnLoad(new Error('_injectScript timeout: ' + src));
									try {
										script.parentNode.removeChild(script);
									} catch(e) {}	// Ignore inconsequential error condition
								}
							}, cfg.timeout);
				
							// Append script node to DOM and trigger load by assigning src
							_first.parentNode.insertBefore(script, _first); //.src = src;
							
							// Add script to request history
							idx = _ridx++;
							entry = {
								src: script.src,
								ridx: idx,
								t: (+new Date()),
								opt: cfg	// Notably, to track async, but including all  (including onLoad...)
							};
							// The following adds entry directly to the history log. If the implementation of
							// _history.add is ever changed to descend the entry to store a copy, then capture
							// entry = _history.add(_hType.script, entry), instead, as _history.add returns the
							// actual entry in the log.
							// UPDATE: Capturing return just to be safe
							entry = _history.add(_hType.script, entry);
						}
					;
		
					return $injectScript;
				})(),
		
				// Startup management 
				_startup = (function() {
					var 
						// Create logger
						log = _log.logger('startup'),
						
						// Constants
						K = {
							stPatch: 0,		//[*] Not yet defined - may stack to pre-init (framework), instead
							stPre: 1,		// Pre-init state
							stScript: 2,	// Script injection state - load phase
							stInit: 3,		// Initialization state - all $init handlers
							stPost: 4,		// Post-init state - all $init handlers with {post:true} (typically onLoad callbacks)
							stReady: 5,		// Ready state - all $ready handlers
							stIdle: 6		// All's well that ends well?
						},
						
						// Create a new queue
						newq = function(name) {
							var q = [];
							q.name = name;
							return q;
						},
						
					//	_psq = newq('patch'),	// patch script queue [*] Proposed
						_fq = newq('framework'),// pre-init queue (framework level init)
						_sq = newq('script'),	// script queue
						_3q = newq('last'),		// Last script loading queue
						_iq = newq('init'),		// init queue (stack)
						_pq = newq('post'),		// post-init queue (stack)
						_rq = newq('ready'),	// ready queue (stack)
						_dq = newq('done'),		// Ready done queue
						_hold = 0,				// Hold counter for synchronizing asynchronous initialization tasks
		
						// Unload queue
						_uq = newq('unload'),	// Page unload queue
						
						_flags = {
							state: K.stScript,		// Current state of the state machine (initially K.stScript)
							onReadyPending: false,	// Indicates if defered _onReady call is pending
							initialDone: false,		// Indicates if initial _onReady call has been made
							inOnReady: false,		// To control _onReady re-entrancy
							inPreload: false,		// Indicates if preload scripts are loading
							loadDone: true,			// Indicates dependency manager has no script loads in flight
							docReady: false,		// Indicates DOMContentLoaded event has fired
							winLoad: false,			// Indicates window load event has fired
							inJQuery: false,		// Indicates docReady was detected and initial _onReady registered to allow jQuery ready handlers to fire first
							jQueryDone: false,		// Indicates if jQuery has been initialized
							inInit: false,			// Indicates init queues are currently being processed
							interrupted: 0,		// Indicates ready was aborted due to hold - sticky - once set, it is never cleared
							initDone: false,		// Indicates init phase is complete ($init and post-init)
							readyDone: false,		// Indicates ready phase is complete
							restart: false,			// Indicates startup sequence restart is pending
							count: 0,				// Total number of items in queue (sans unload queue)
							uqCount: 0				// Number of items in unload queue
						},
						
						// Executes all the registered handlers in a given queue.
						// queue - the queue to process
						// suspend - if true, will break if a sync hold is requested
						// proceed - callback to call to determine whether to continue - retrun true to continue
						_exec = function(queue, suspend, proceed) {
							var 
								//[*] Maybe define these upon _onReady so not computing with every call to _exec
								throwInStartup = _env(_keyThrowInStartup),
								throwIfNoConsole = _env(_keyThrowIfNoConsole),
								noTryCatch = _env(_keyNoTryCatch),
								jQuery = _env(_keyJQuery) || _global.jQuery,  // jQuery.noConflict(true) removes _global.jQuery, so $env.jQuery should be more reliable
		
								fn, logMsg, historyEntry, rtn, msg
							;
		//					if (!queue.length && log.debug.enabled) log.debug('_exec ' + queue.name + ' queue empty.');
							// Do not cache queue.length in a var, as queue may expand while being processed
							// (due to potential Kjs.requires call during init), so allow loop to
							// check length in each iteration.
							while (queue.length && !(_hold && suspend)) {
								if (proceed && !proceed()) break;
								fn = queue.shift();
								if (queue == _uq) {
									log.info('unloading ' + _flags.uqCount);
									_flags.uqCount--;
								} else {
									_flags.count--;
								}
//								(queue == _uq) ? _flags.uqCount-- : _flags.count--;
								historyEntry = _history.add(_hType.queue, {q: queue.name, ftn: fn.ftn.name||'unnamed'});
		//						if (log.debug.enabled) log.debug('_exec making a call from ' + queue.name + ' queue...', fn.ftn);
		//						if (log.info.enabled) log.info('exec ' + !!_global.jQuery, fn.ftn);
								if (noTryCatch) {
									rtn = fn.ftn.call(_ns, jQuery);	// jQuery may be undefined in core init
								} else try {
									rtn = fn.ftn.call(_ns, jQuery);	// jQuery may be undefined in core init
								} catch(e) {
								//	logMsg = 'Exception in ' + (_flags.inInit ? 'init' : 'ready') + ' handler (' + (fn.ftn.name||'unnamed') + '): ' + e.message;
									logMsg = {
										msg: 'msgExceptionInHandler',
										qName: queue.name,
										handleName: _flags.inInit ? 'init' : 'ready',
										ftnName: fn.ftn.name||'unnamed',
										message: e.message
									};
									rtn = {msg: 'failed: ' + e.message};
									try { e.fn = fn.ftn; } catch(err) { /* Ignore */ }
									if (!log.error(logMsg, e)) { //fn.ftn)) {
										// Throw exception on up if not no console and no external logger (client debug)
										if (throwIfNoConsole || throwInStartup) {
											_flags.inOnReady = false; // Because we're taking a direct route out, _onReady won't clear this
											throw e;
										}
									} else if (throwInStartup) {
										// Throw exception on up if indicated
										_flags.inOnReady = false; // Because we're taking a direct route out, _onReady won't clear this
										throw e;
									}
								}

								// Transform callback return value into a string for history entry
								if (rtn === undefined || rtn === null) {
									msg = '';
								} else if (typeof rtn == _typNumber || typeof rtn == _typBoolean) {
									msg = ''+rtn;
								} else {
									msg = rtn.msg||'';
								}
								historyEntry.msg = msg;
							}
		//					if (queue.length && log.debug.enabled) log.debug('_exec ' + queue.name + ' queue exit on sync hold.');
						},
						
						/*
						 * NOTES:
						 *   - Six queues:
						 *       - patch queue [TBD]
						 *       - framework init queue
						 *       - script injection queue
						 *       - $init stacked queue
						 *       - post-$init queue
						 *       - $ready queue
						 *   - script injection queue only gets updated prior to docReady. After docReady, injection occurs directly
						 *   - _exec to proccess script injection queue to completion
						 *   - _exec to process $init queue to completion - a sync hold may be imposed
						 *   - after $init and sync hold release, _exec to process post-$init queue to completion - a sync hold may be imposed
						 *   - after post-$init and sync hold release, _exec to process $ready queue
						 */
						
						// Process initialization queue [*] Update these comments, maybe? Kind of old and convoluted...
						// This gets registered as the primary ready handler for KJS init.
						// This will get called initially by DOMContentLoaded event. 
						// If a synchronization hold ($sync(1)) has been requested, Kjs.init queue 
						// processing will occur (and continue to completion, even if Kjs.init handlers add
						// more callbacks to the queue in the process), but ready handler processing will be
						// suspended until all holds clear. It is possible all holds will clear
						// while processing init handlers, in which case the ready queue will be
						// processed. Otherwise, _onReady will get called again when the last hold
						// is released (and if following programming conventions set forth for
						// this framework, no ready handlers shall cause the accumulation of any
						// additional init handlers).
						// Ready handlers also should never call Kjs.ready, but if they do, those
						// calls will execute immediately (synchronously) instead of being queued,
						// because if we're in ready state, then all ready handlers are free to run.
						//
						// Initial call is guaranteed to come from document ready event (driven by DOMContentLoaded).
						// Subsequent calls (after docReady) may come from the following, via _deferOnReady:
						//   - Completion of last script load (_startup.ready().loadDone = true; invokes _queue which calls _deferOnReady)
						//   - _sync hold release
						//   - Any call to $init, $ready or $requires that adds an entry to one of the internal queues
						//   - Any call to $ready (even an empty call)
						//
						// No return value
						_onReady = function(preInit) {
		//					if (log.debug.enabled) log.debug('_onReady fired with preInit = ' + !!preInit, _descend(_flags));

							// Re-entrancy control - not re-entrant!
							// Also just exit if all queues are empty, just to be efficient					
							if (_flags.inOnReady || (!_flags.count && (_flags.readyDone || _flags.initDone || _flags.init))) return;

							_flags.inOnReady = true;
							_t.onReady = _t.onReady||_stamp('onReady');
		
							// Inform and reset restart flag
							if (_flags.restart) {
								if (log.info.enabled) log.info('msgStartupRestart');
								_flags.restart = false;		// Clear restart flag
								_flags.initDone = false;	// Reset initDone & readyDone states
								_flags.readyDone = false;
							}
							
							// Process framework init (pre-init) queue
							_flags.state = K.stPre;
		//					if (log.debug.enabled) log.debug('_onReady processing framework init queue... ' + _fq.length);
							_exec(_fq, false);	// Process pre-init framework queue
							
							// Process script injection queue
							// This will only occur after initial docReady, since script injection will
							// not be done via the script queue after docReady.
							_flags.state = K.stScript;
							if (_sq.length + _3q.length) {
//								_t.scripts = _t.scripts||_stamp('scripts');
								_stamp('scripts');
							}
		//					if (log.debug.enabled) log.debug('_onReady processing script queue... ' + _sq.length);
							_exec(_sq, false);
		//					if (log.debug.enabled) log.debug('_onReady processing last script queue... ' + _3q.length);
							_exec(_3q, false);	// Last scripts - third-party
							// Proceed only if all script loading is done and not in pre-init
							if (_flags.loadDone && !preInit) {
		
								// Process $init queue
								// Kjs.requires could be called from an init handler, [*] UPDATE THIS - NO IT CAN'T (not allowed)!
								// so additional init and ready handlers could be added in the process.
								// Therefore, this loop keeps the init queue viable and continues until it
								// is exhausted. If any Kjs.requires load is in flight, a hold will be in
								// effect, preventing ready handling. In that case, _onReady will be invoked
								// again later, once all holds are removed.
								//[-] Evaluate whether init queue processing should exit on hold request.
								//   I think it is not necessary, as the expectation for Kjs.init is to
								//	 execute code on DOM ready, and the code being executed should be
								//	 limited to the module it came from, and init code cannot rely on
								//	 Kjs.requires dependencies requested from within the same init handler.
								//	 So, yeah, no reason to terminate init handling on hold request.
								//   UPDATE: Kjs.requires should not be called from init handler
								_flags.initDone = false;
								_flags.readyDone = false;
								// Process init queue  [*] Suspend if _flags.inPatch
								_flags.state = K.stInit;
								_flags.inInit = true;
								_t.inInit = _t.inInit||_stamp('inInit');
		//						if (log.debug.enabled) log.debug('_onReady processing $init queue... ' + _iq.length);
								_exec(_iq, false);	// Process $init queue
//								_stamp({id: 'marker', label: 'End init'});

								// Bypass post-init if a hold is in effect
								if (_hold) {
									/*jsl:pass*/
									// See comments in next conditional block, below. Using same pattern here
									// for consistency (this conditional was added later)
								} else {
									// Process post-init queue
									// Exit if a hold is requested
									_flags.state = K.stPost;
			//						if (log.debug.enabled) log.debug('_onReady processing post-init queue... ' + _pq.length);
									_exec(_pq, true);
//									_stamp({id: 'marker', label: 'End post-init'});
								}
							
								// Check for a hold after post-init:
								
								//[*] Set interrupted flag if exited on hold? I had this at one time - did I remove it?
								//    NO - Only set interrupted if ready queue is interrupted.
								// Process $ready queue after all holds are cleared
								if (_hold) {
									/*jsl:pass*/
									//[*] Most bizarre thing - if this conditional is changed to if (!_hold),
									//    it exits as expected, but the exit message is not logged in the else clause. But if 
									//    the _exec call above is wrapped in try-catch, the exit message does
									//    get logged - but there is no exception. It's like there's a false
									//    exception. Very weird. JavaScript bug?  It works now with the conditional as is.
		//							if (log.info.enabled) log.info('_onReady on hold.');
								} else {
		//							if (log.info.enabled) log.info('_onReady commencing.');
									_flags.inInit = false;
									_flags.initDone = true;
									var tInitDone = (+new Date());
									_flags.state = K.stReady;
		//							if (log.debug.enabled) log.debug('_onReady processing $ready queue... ' + _rq.length);
									_exec(_rq, true);
									// If hold requested, then we're switching back to init
									if (_hold) {
		//								if (log.info.enabled) log.info('_onReady interrupted.');
										_flags.interrupted++; // Count the interruption
										_flags.state = K.stInit;
										_flags.inInit = true;
										_flags.initDone = false;
									} else {
										// This deferred stamp call may record an earlier timestamp later in the history
										_stamp({id: 'initDone', t: tInitDone});
										if (log.info.enabled) log.info('_onReady done.');
										_flags.readyDone = true;
										_stamp('readyDone');
										_flags.state = K.stIdle;
										//[*] isAfterReady (done) queue - put prior to idle state, with a stamp?
										_exec(_dq, false);
									}
								}
//							} else {
//								_stamp({id: 'marker', label: 'Skip init'});
							}
		
		//					if (log.debug.enabled) log.debug('_onReady exit ' + _sq.length + ', ' + _iq.length + ', ' + _pq.length + ', ' + _rq.length);
							_flags.inOnReady = false;
						},
		
						// To defer a call to _onReady
						// This was created for efficiency, as there were (are) three places where _onReady was placed
						// into a Kjs._() defered call, and a number of these calls were getting executed in succession
						// after the main thread exited. So this was created to whittle down the number of invocations to one.
						// _deferOnReady can be called with a callback parameter. It is possible that multiple calls could
						// be made, each with a callback, before _onReady is called. Therefore, all callbacks are saved
						// until _onReady is called. Any and all callbacks are called before _onReady is actually called.
						// The onReadyPending flag is cleared before calling the callbacks. Any return value from 
						// callbacks are ignored (there is no way to prevent _onReady from getting called). Callbacks are
						// called in the order they come in.
						// The onCommence parameter is an optional callback function that will get called just before _onReady 
						// is officially called. The callback will get registered whether docReady has fired yet or not.
						_deferOnReady = (function() {
							var
								// Commence callback registry
								_onCommence = [],

								// Schedules the actual onReady call
								_scheduleOnReady = function() {
									_flags.onReadyPending = true;
			//						if (log.debug.enabled) log.debug('Defering _onReady call');
									_(function() { 
										var onCommence;
			//							if (log.debug.enabled) log.debug('_onReady called on defered basis ');
										_flags.onReadyPending = false;	// Cancel defered call flag
										while (_onCommence.length) {
											onCommence = _onCommence.shift();
											onCommence();
										}
										_onReady();
									});
								},

								$deferOnReady = function(onCommence) {
									var jQueryPresent = !!_global.jQuery;
									/*
									if (_log.debug.enabled) _log.debug({
										msg: '_deferOnReady - ${fPending} | ${fReady} | ${fJQuery} | ${fDone}', 
										fPending:_flags.onReadyPending, 
										fReady: _flags.docReady, 
										fJQuery: _flags.inJQuery, 
										fDone: _flags.loadDone, 
										$noConsole: true, 
										$noReport: true
									}, _descend(_flags));
									*/
//									_stamp({id: 'marker', label: '_deferOnReady'});
									if (onCommence) _onCommence.push(onCommence);
									// If jQuery has become present, ensure its ready handlers run before ours
									if (!_flags.onReadyPending && _flags.docReady && !_flags.inJQuery && _flags.loadDone) { //[*] loadDone check needed? 
										if (!_flags.jQueryDone && jQueryPresent) {
										//	if (log.debug.enabled) log.debug('Deferring onReady until jQuery ready completes.');
											_initJQuery();	// Forward reference...
										} else {
											_scheduleOnReady();
										}
									}
								}
							;
							return $deferOnReady;
						})(),

						// Init jQuery - allow jQuery ready to complete before firing onReady
						_initJQuery = function() {
							var
								coreReady = function _nscorejqueryready($) {
//									_stamp({id: 'marker', label: 'KJS jQuery ready fired'});
									if (log.info.enabled) log.info('msgCoreReadyFromJquery');	// 'KJS ready requested from jQuery ready handler.'
									_flags.inJQuery = false;
									_flags.jQueryDone = true;
									_deferOnReady(function _$oncommence() {
//										_stamp({id: 'marker', label: 'NS ready officially begins'});
										if (log.info.enabled) log.info('msgCoreCommenceReady');	// 'KJS ready commencement following jQuery ready.'
									});	// Ensure it happens asynchronously
								}
							;

							if (log.info.enabled) log.info('msgInstallJQuery'); //'Installing jQuery handler to defer KJS ready until after jQuery ready handlers run.'
							_flags.inJQuery = true;
							coreReady.nsReady = true;	// Identify as KJS jQuery ready handler for later reference in jQuery abductor
							// Register through jQuery rather than call _deferOnReady() directly, to
							// ensure _deferOnReady gets called after all previously-registered jQuery
							// ready handlers have been called.
							// jQuery will call any callback, synchronously, if DOMContentLoaded has already fired.
							// At this point, the code is in the context of either the DOMContentLoaded handler, or the
							// window load handler. For some reason, upon exit of this handler, there is about 300ms of
							// elapsed time before the thread is released prior to invoking timeouts. The jQuery call
							// is placed in a timeout so that coreReady gets called after this 300ms delay, and outside
							// of the window event handler context, just to avoid any possible contention. But it is a
							// mystery what the browser is doing for 300ms after this ready handler exits.
							// NOTE: The delay is much shorter when Firebug is not running (about 25 - 50ms), so perhaps
							// the delay is not such a mystery after all.
//							_stamp({id: 'marker', label: 'Defer coreReady registration'});
//							console.profile();
							_(function() {
//								console.profileEnd();
//								_stamp({id: 'marker', label: 'coreReady registration'});
								jQuery(coreReady);
							});
						},

						// KJS uses the DOMContentLoaded event to kick off the initial _onReady call.
						// If any preloading is specified, DOMContentLoaded can possibly fire before
						// preloading completes, in which case _initialOnReady will be called by the
						// preload mechanism (via _startup.initialOnReady). Otherwise, the DOMContentLoaded
						// handler will call this, directly.
						// jQuery plug-ins use jQuery's document ready handler to initialize.
						// KJS ready handlers will execute before jQuery ready handlers, because KJS is
						// the first to register its ready handler - which means KJS might try to
						// run code that relies on a jQuery plug-in that has not initialized, yet.
						// So, to circumvent this, the initial invocation of _onReady will register a new
						// jQuery ready handler (if jQuery is present, which it should be by this time)
						// to defer the initial _onReady call until after all jQuery ready handlers have 
						// been called. 
						// If jQuery is not present, yet, but becomes present later, _initJQuery will get
						// called to register a jQuery ready handler to do the same - init jQuery before
						// resuming further KJS _onReady operations.
						// This means we also need to not have any jQuery ready handlers in our code base 
						// that run code that depends on anything being initialized via KJS ready handlers.
						//      ***** THIS IS THE ONLY jQuery-AWARE CODE ALLOWED IN CORE! *****
						// NOTE: If jQuery is not present, _onReady is invoked immediately.
						// UPDATE: _onReady call is now made asynchronously to avoid running in an event handler.
						// The problem here is, any uncaught exceptions in any jQuery ready handlers
						// registered prior to ours, will prevent our handler from getting called.
						// Therefore, the KJS error handler will call Kjs.ready() to invoke _deferOnReady 
						// from the exception handler. This will allow KJS ready handlers to continue,
						// even if all jQuery ready handling has aborted.
						_initialOnReady = function() {
							_(function() {
								if (_flags.initialDone) return;	// Already been here
								_flags.initialDone = true;
								// Call _onReady! No deferral... If jQuery is present, only pre-init tasks are performed
								var preInit = !!_global.jQuery;	// Set pre-init flag if jQuery is present
								if (log.info.enabled) log.info({msg: 'msgInvokeKJSReady', preInit: preInit});	// 'KJS ready initial invocation -- preInit = ' + preInit
								if (preInit) {
									_stamp('preInit');
									_initJQuery();	// Schedule jQuery init (asynchronous - so _onReady call, below, actually goes first)
								}
								// Call _onReady to fire pre-init and script handlers (this actually occurs before jQuery init
								_onReady(preInit);
							});
						},
		
						// Adds a function (callback) to a given queue. Function may be stacked or queued,
						// depending on opt.inQueue. Stacked is the default.
						// q = reference to queue (array)
						// ftn = function to register
						// opt = additional options
						//         - inQueue will cause the entry to be queued instead of stacked (stacking is the default)
						//         - noReady will prevent triggering _onReady
						// Items are added as a stack (LIFO order) by default. Use opt.inQueue:true to queue. 
						// If called after docReady, with ftn defined, _onReady will be triggered, unless opt.noReady == true
						_queue = function(q, ftn, opt) {
							// Queue or call function
							if (typeof ftn == _typFunction) {
								var f = {ftn: ftn};
								if (opt.inQueue) {
		//							if (log.debug.enabled) log.debug('_queue item queued in ' + q.name + ' queue', ftn);
									q.push(f);	// FIFO queue
								} else {
		//							if (log.debug.enabled) log.debug('_queue item stacked in ' + q.name + ' queue', ftn);
									q.splice(0,0,f); // LIFO stack (default)
								}
								(q == _uq) ? _flags.uqCount++ : _flags.count++;
		//						if (log.debug.enabled) log.debug('Queues: ' + _sq.length + ', ' + _iq.length + ', ' + _pq.length + ', ' + _rq.length, ftn);
								// If document ready has already fired, fire onReady now
								//[*] Eeking out a tiny bit of performance by checking docReady & inJQuery here,
								//    to avoid the do-nothing call.
								//    The minimum code needed here is: if (!opt.noReady) { ... }
								if (!opt.noReady && _flags.docReady && !_flags.inJQuery) {
									if (log.debug.enabled) log.debug('_queue ('+q.name+') calling _deferOnReady');
									_deferOnReady();
								}
							}
						},
						
						// Synchronization control.
						// Call _sync(1) to increment the hold counter by 1.
						// Call _sync(0) to decrement the hold counter by 1.
						// Call _sync(-1) to decrement the hold counter by 1.
						// Call _sync(n) to increment or decrement the hold counter by n (n can be + or -)
						// Call _sync() to get the current hold count
						// $sync must be called only within a $init handler, or $requires
						// onLoad callback, but never from $ready. A hold will not
						// suspend $init handling, but only defers $ready handling to
						// ensure all initialization is done before ready handling begins.
						// msg - Optional message to be included in history entry
						_sync = function $sync(hold, msg) {
		//					if (log.debug.enabled) log.debug('_sync(' + hold + ') called');
							if (hold !== undefined) {
								if (isNaN(+hold)) hold = (hold) ? 1 : -1;
								hold = (+hold)||-1;
								_hold += hold;
								if (hold > 0 && _flags.state == K.stReady) {
									_log.init.warn('msgSyncHoldOnReady');	// '_sync hold specified during ready state. Consider moving async operation to $init handler.'
								}
								if (_hold < 0) {
									// More hold releases were requested than holds - indicates coding error
									_log.init.warn('msgReleaseMismatch');	// 'Synchronization management problem: More sync releases than holds requested!'
									_hold = 0;
								}
								if (!_hold) {
									if (log.debug.enabled) log.debug('_sync calling _deferOnReady after releasing last hold');
									_deferOnReady();
								}
							}
							_history.add(_hType.sync, {sync: hold, hold: _hold, msg: msg||''});
							return _hold;
						},
		
						// Dependency manager calls this to queue script injection requests
						// Typically, this is called only during load phase, but it could be
						// called after $ready if loading a script in response to a user action.
						// Before docReady, _onReady is not triggered by calling this. After
						// docReady, calling this to add a callback to the queue will trigger _onReady.
						// Making an empty call to _script() will never trigger _onReady.
						// opt options do not get forwarded to the queue, so opt.inQueue is not recognized.
						// Returns flags
						_script = function $script(ftn, opt) {
							if (ftn) {
								//[*] If (_flags.state == K.stInit) throw an exception
								//[*] If (_flags.state == K.stReady && !_flags.readyDone) throw an exception
								if (!opt.noInitWait) {
									_flags.loadDone = false;
								}
								if (opt.isPreInit) {
		//							if (log.debug.enabled) log.debug('_script adding item to framework stack');
									_queue(_fq, ftn, {inQueue: true}); // Do not forward opt to _queue
								} else if (opt.isLast) {
									_queue(_3q, ftn, {inQueue: true}); // Third-party script load (last injection)
								} else {
		//							if (log.debug.enabled) log.debug('_script adding item to script queue');
									_queue(_sq, ftn, {inQueue: true});
								}
							}
							return _flags;
						},
		
						// Priority handler queue
						// Used to populate pre-init, $init or post-init queue.
						// Before docReady, _onReady is not triggered by calling this. After
						// docReady, calling this to add a callback to the queue will trigger _onReady.
						// Making an empty call to _init() will never trigger _onReady.
						// Returns flags
						//[*] Note: Foundation is loaded in pre-init, so jQuery may not be available to pre-init handlers
						_init = function $init(ftn, opt) {
							var q;
							if (ftn) {
								opt = opt||{};
								//[*] If (_flags.state == K.Ready && !_flags.readyDone) throw an exception
								_flags.initDone = false;
								_flags.readyDone = false;
								if (opt.isPreInit) {
									q = _fq;
								} else if (opt.isPostInit) {
									q = _pq;
								} else {
									q = _iq;
								}
								if (_flags.winLoad) _log.warn('$init called after window load');
		//						if (log.debug.enabled) log.debug('_init adding item to ' + q.name + ' queue (' + (opt.inQueue ? 'queued' : 'stacked') + ')');
								_queue(q, ftn, opt);
							}
							return _flags;
						},
					
						// Ready handler queue
						// Standardized ready handler
						// Kjs.ready(function($){ /* init code */ }[, opt]); 
						// Invoked on DOM ready, and after all synchronization holds are cleared, if any.
						// opt - valid queue options (see _queue)
						// After docReady, any call to _ready will trigger _onReady, even with no params.
						// Returns flags
						_ready = function $ready(ftn, opt) {
							if (_flags.winLoad) _log.warn('$ready called after window load');
							if (ftn) {
								_flags.readyDone = false;
								// Queue or call function
		//						if (log.debug.enabled) log.debug('_ready adding item to $ready queue');
								_queue((opt && opt.isAfterReady) ? _dq : _rq, ftn, opt||{});
							} else {
								// If document ready has already fired, fire onReady now.
								// This allows _ready() to be called and a property to be changed at the same time, before
								// _onReady actually happens (since its call is defered here).
								// e.g. _startup.ready().inPatch = false
								// This alleviates the developer from having to call ready() to change the status, then call it again
								// to allow _onReady to function
								// Normally, _deferOnReady is called from _queue, but calling here since _queue is not called
		//						if (log.debug.enabled) log.debug('_ready calling _deferOnReady after parameterless call');
								//[*] To eek out a *TINY* bit more performance, check _flags.docReady before calling _deferOnReady() just to
								//    avoid a dead call.
//								if (!opt.noReady && _flags.docReady && !_flags.inJQuery) {
								if (log.debug.enabled) log.debug('_deferOnReady from empty _ready call');
								_deferOnReady();
//								}
							}
							//[*] This returns a direct reference to the _flags object. This means
							//    a caller could manipulate these flags. And the core does, for inPatch.
							//    Perhaps descend _flags and provide an API to control inPatch.  But maybe
							//    not, as inPatch needs to be as incognito as possible in minified script.
							return _flags;
						},
		
						// Call to indicate that the startup sequence is restarting
						_restart = function() {
							_flags.restart = true;
							_stamp('restart');
							delete _t.onReady;
							delete _t.scripts;
							delete _t.inInit;
						},
						
						// Unload handler queue
						// Register unload handlers for page unload
						// If called with no parameters, all the unload handlers are called!
						_unload = function $unload(ftn) {
							if (ftn) {
								_queue(_uq, ftn, {noReady: true});
							} else {
								_exec(_uq, false);
							}
							return ftn;
						},
						
						// Install the _onReady page load trigger
						_install = function() {
							var
								// Initial ready trigger
								ready = function _ready(evt) {
									// Exit if already called, or not correct state
									if (_flags.docReady || (_document[_ae] && _document.readyState != 'complete')) return;
									// Indicate docReady has fired (DOMContentLoaded)
									_t.docReady = _stamp({id: 'docReady', t: _t.docReady});
									_flags.docReady = true;
									// Remove DOM loaded handlers
									if (_document[_rel]) {
										_document[_rel]('DOMContentLoaded', ready, false);
									} else if (_document[_de]) {
										_document[_de]('onreadystatechange', ready);
									}
									// Perform initial _onReady if preload is not in progress.
									// Otherwise, the preload process will call _initialOnReady when it is done.
									if (!_flags.inPreload) {
										_initialOnReady();	// Is performed asynchronously (outside of ready handler)
									}
								},

								// Respond to window load event to trigger ready
								onload = function(evt) {
									_stamp('onLoad');
									// Report window load event, for what it's worth
									if (log.info.enabled) log.info('msgWindowOnLoad'); // 'Window load event fired'
									// Remove onload handler
									if (_global[_rel]) {
										_global[_rel]('load', onload);
									} else if (_global[_de]) {
										_global[_de]('unload', onload);
									}
									// Indicate window load has fired
									_flags.winLoad = true;
									// Call ready
									ready(evt);
								}
							;
		
							// Install ready trigger with appropriate DOM event
		//					if (log.debug.enabled) log.debug('Installing central document ready handler');
							_stamp('install');
							if (_document[_ael]) {
								_document[_ael]('DOMContentLoaded', ready, false);
								_global[_ael]('load', onload, false);
							} else if (_document[_ae]) {
								_document[_ae]('onreadystatechange', ready);
								_global[_ae]('onLoad', onload);
							}
							// Prevent _install from getting called again
							_install = _emptyFn;
						}
					;
					
					// Startup API
					return {
						initialOnReady: _initialOnReady,
						flags: _flags,
						log: log,
						script: _script,
						sync: _sync,
						init: _init,
						ready: _ready,
						restart: _restart,
						unload: _unload,
						install: _install
					};
				})(),

				// Environment property setter
				// Defines properties on $env global.
				// _setenv(prop, value) - sets a single property - if named property is an object, it will be extended with the properties in value
				// _setenv(prop, null) - Deletes the property
				// _setenv(prop) - gets the value of a single property
				// _setenv(obj) - applies all properties of obj parameter to $env global
				// _setenv(obj, fn) - applies all properties of obj, then calls fn as a callback
				// _setenv() - returns a reference to $env global, or undefined
				// _setenv gets called early, before logger is defined, so cannot utilize $log, only _log
				_setenv = function(prop, value) {
					if (typeof prop == _typObject) {
						for (var p in prop) if (prop.hasOwnProperty(p)) {
							_setenv(p, prop[p]);
						}
						if (typeof value == _typFunction) {
							value();
						}
						return $env;
					} else if (prop) {
						var val = $env[prop];
						if (typeof value == _typObject) {
							// Define/extend object property
							if (value === null) {
								delete $env[prop];
							} else if (val !== undefined && typeof val != _typObject) {
								_log.init.warn({msg: 'msgEnvTypeMismatch', prop: prop}, value);	// 'Kjs.env: attempt to impose object value on existing non-object environment property: ' + prop
							} else {
								$env[prop] = _extend(true, val, value);
							}
						} else {
							// Define straight value
							if (val !== undefined && val !== value) {
								_log.init.warn({msg: 'msgEnvPropRedefined', prop: prop, oldVal: $env[prop], newVal: value});	// 'Kjs.env: Warning - re-defining environment property: ' + prop + ' from ' + $env[prop] + ' to ' + value
							}
							$env[prop] = value;
						}
						// Return resulting value
						return $env[prop];
					} else {
						return $env;
					}
				},
				
				// Sets or gets an environment property value
				//[*] Does not work to set an array value
				// $env is guaranteed to exist prior to calling this.
				_env = function _$env(prop, value) {
					var rtn;
					// Get or set value
					if (typeof prop == _typObject || value !== undefined) {
						// Set value
						// Run only from within init handler - if running prematurely, then register it.
						if (!_startup.flags.inInit && !_startup.flags.initDone) {
							//[-] Potential problem:
							//    This should be among the first functions (if not the first) to be called
							//    when $init begins. That is why it is stacked here. But now $init handlers
							//    are stacked by default, so any subsequent $init handler will push this down.
							//    It's looking like there needs to be a pre-init (or framework init) queue.
							// UPDATE: A pre-init queue was added
							_startup.init(function _$core_env($) {
//								_stamp({id: 'marker', label: '_env in init'});
								_setenv(prop, value);
							}, {
								isPreInit: true	// Place on pre-init stack
//								inQueue: true
							});
		//					rtn = undefined;	// Do not return value if called outside of an init handler
						} else {
//							_stamp({id: 'marker', label: '_env'});
							rtn = _setenv(prop, value);	// Set and retrieve resulting value
						}
					} else {
						// Get value
						rtn = prop ? $env[prop] : $env;
					}
					// Return end value
					return rtn;
				},
				
				// Generate a unique id, beginning with prefix + 1000
				//   - prefix = String to prepend to ID (default = $env.idPrefix||'ID')
				_id = (function() {
					var reg = {};
					return function _$id(prefix) {
						prefix = prefix||_env(_keyIdPrefix)||'ID';
						var id = (reg[prefix]||999) + 1;
						reg[prefix] = id;
						return prefix + id;
					};
				})(),
		
				/*
				 * Kjs.requires - Dependency Manager	PLEASE STAY OUT
				 * 
				 * Don't try to read this code - it will break your brain and cross your eyes, and maybe even give you hiccups
				 * 
				 * Quick reference for pre-broken brains:
				 *   $requires(src, onLoad)
				 *   _onLoadProxy -> onLoad, only after all entity.onLoad handlers have been called
				 *   entity.onLoad -> _onLoadProxy
				 *   _entityOnLoad -> entity.onLoad
				 *   _onScriptLoad.onLoad -> _entityOnLoad, for each handler in entity.onLoad list, if any
				 *   _onScriptLoad -> noInitOnLoad ? _entityOnLoad : queue $init(_onScriptLoad.onLoad)
				 *   script.onload -> _onScriptLoad
				 *   
				 *   Therefore:
				 *   	!noInitOnLoad:
				 *   		script.onload -> _onScriptLoad -> queues $init(_entityOnLoad) -> entity.onLoad -> _onLoadProxy -> onLoad
				 *   	noInitOnLoad:
				 *   		script.onload -> _onScriptLoad -> _entityOnLoad -> entity.onLoad -> _onLoadProxy -> onLoad
				 * 
				 *   _entityOnLoad is called from _doRequires: noInitOnLoad ? _entityOnLoad : queue $init(_entityOnLoad)
				 * 
				 *   _onLoadProxy counts onLoad calls to trigger $requires onLoad after all files in $requires call have loaded.
				 *   entity.onLoad is a list of onLoad handlers that are stacked for each successive $requires call for the same file.
				 *   _entityOnLoad is simply a wrapper around a single entity.onLoad call with a try-catch to capture uncaught exceptions.
				 *   _onScriptLoad is the first responder to script load event to call all entity.onLoad handlers for an entity.
				 *   
				 *   What is an entity? An entity is just a record in a map, keyed by file name (full url), describing the state of a requested file.
				 *   
				 *   opt.topLoad simply injects the dynamic script at time of $requires call rather than stacking an $init call.
				 *   opt.isPreloaded bypasses script injection, but calls _entityOnLoad according to opt.noInitOnLoad setting.
				 * 
				 * THEORY OF OPERATION:
				 * 
				 * Three phases govern startup:
				 *   - Script load (governed by browser) - external scripts are loaded asynchronously and executed in order
				 *   - Initialization (Kjs.init or $init) phase initializes standing objects and data
				 *   - Ready (Kjs.ready or $ready) phase renders and activates UI
				 *   
				 * $env is a global environment block that can be injected by host and/or defined by settings
				 * saved in local storage. Typically defines framework configuration (such as debug mode) and
				 * resource paths (such as where to find images, key URLs, etc.).
				 * Module-based script architecture defines a single module within a single script file. During
				 * script load, $init and/or $ready handlers are defined to initialize and launch the script's purpose.
				 * $requires can be specified at load time or $init time to indicate a dependency that must be loaded [*] Maybe not $init time
				 * before $init or $ready can be called for the dependent script. Do not call $requires from any
				 * $ready handler.
				 * $init can perform asynchronous (Ajax) operations and suspend $ready processing until all such
				 * operations are complete. These operations do not suspend processing of additional $init handlers,
				 * however. Suspend $ready by calling $sync(1), and release the hold by calling $sync(0). $sync calls
				 * are counted, so the number of calls to $sync(1) must match the number of calls to $sync(0) for the
				 * hold to clear so that $ready can happen.
				 * $init handlers can assume all scripts are loaded, with the exception of any $requires calls that [*] Don't call $requires from $init
				 * are made within the current $init handler. Use onLoad callback in $requires within the $init handler
				 * to do any processing following the load, or relegate all such code to the $ready handler.
				 * 
				 * NOTE: POTENTIAL ISSUE: DOMContentLoaded event kicks off $init (via jQuery). But DOMContentLoaded does
				 * not wait for dynamic scripts, so this eliminates the guarantee that all scripts are loaded before
				 * $init begins. This suggests that it is possible that $init can fire for a script that $requires 
				 * another script, before the required script's $init has fired. Therefore, $init cannot assume that
				 * all dependencies are initialized, although the $requires onLoad callback can. So maybe best practice
				 * might be to put all dependent initialization in a $requires onLoad callback, or use $requires onLoad
				 * to register an $init handler. GAK!!!
				 * UPDATE: The above is incorrect. $init is suspended until all required scripts are loaded. Queues have
				 * been revised since the above was written, so I believe the issue has been addressed. Whether scripts
				 * are top-loaded, or late-loaded, it doesn't really matter when DOMContentLoaded fires, since any $requires
				 * calls that come in while scripts are loading, will keep $init in check, since the load is not considered
				 * complete until a script has been run. So, it is safe for both $init and the onLoad callback to assume
				 * dependencies have been initialized.
				 * 
				 * $ready handlers can assume all scripts are loaded and initialized.
				 * 
				 * It is possible an application may defer loading and launching a script (or scripts) until a user
				 * action occurs. In this case, calling $requires after launch will restart the startup sequence, but
				 * only for the newly-requested scripts ($init and $ready handlers for any and all scripts only ever
				 * get called once and cannot be called again, as their code is discarded from memory after execution).
				 * 
				 * Similarly, calling $ready anytime after the $ready phase has completed, will re-initiate the $ready
				 * phase for any newly-added $ready handlers. Also, calling $init any time after the $ready phase has [*] Or during $ready
				 * completed, will re-initate the startup process back to the $init phase, processing all newly-added
				 * $init handlers to completion before re-entering the $ready phase, executing any newly-added $ready
				 * handlers.
				 * 
				 * $env properties are applied in the following order of precedence, from lowest to highest:
				 *   - env.block.js - this file is generated by the build script and includes default values
				 *   - $env properties defined in packaged script (e.g. env.kjscore.js, part of kjscore package).
				 *   - $env properties defined inline will override any existing values in env.block.js
				 *   - Properties applied from local storage '$env' key are applied next
				 *   - Any call made to Kjs.env from base or app code apply next. Note that calls to Kjs.env
				 *     to set init properties that apply to the core (like noGlobals), will be ineffective,
				 *     since core will already be initialized.
				 * 
				 * NOTES & BEST PRACTICES:
				 *   - Calling $requires from within a $ready handler is considered extremely bad practice, as $ready
				 *     is supposed to be guaranteed that all scripts are ready. Calling $requires during $ready will
				 *     re-enter the $init phase, suspending $ready processing until all newly-added $init handlers are
				 *     done and any $sync holds released.
				 *   - Place all $requires calls directly in the script, outside of $init, to ensure dependencies are
				 *     loaded and initialized before $init handler in dependent script gets called. 
				 * 
				 * TODO:
				 *   - Enhance Kjs.env to accept an additional parameter to specify default value(s).
				 *   x Support mapping scripts to multiple modules - The idea is, a page, such as
				 *     PDP, home or search results, will request the appropriate module ($requires('homepage')
				 *     for example). Any application scripts that later call $requires for a script that may
				 *     be in multiple modules, will check which module has already been requested of which the
				 *     file is a member. 
				 *   - If no module has been requested, perhaps consider another mapping that
				 *     allows deduction based on current URL. Or just log an error and stop. 
				 *   x Add support to $requires to specify module, if that makes sense to do so.
				 *     		$requires('numeric', {module: 'homepage'});
				 *   - Implement a way to remove ready callback(s) [*] Why?
				 *     
				 * REFERENCE:
				 *   requires(src, onLoad|opt);
				 *   Proxy onLoad handler is created to invoke onLoad after all src files report from _onScriptLoad.
				 *   Registers entity keyed on src, or retrieves entity if already registered.
				 *   Injects script tag if in $init phase, or adds $init handler to do the script injection if not in $init phase. 
				 *   Script load invokes _onScriptLoad, which queues an $init handler to invoke proxy onLoad handler after loaded script $init (if any).
				 *   
				 *   $requires will try to resolve src as a key to get the file name from packaging data, else it will
				 *   assume src is a file name (if no match).
				 *   
				 *   SPECIFIC API:
				 *   Kjs.requires.ready - Installs a callback to get invoked when all $requires are loaded - supports unlimited calls
				 *	 Kjs.requires.log - Logger for $requires
				 *	 Kjs.requires.fullUrl - Computes full URL
				 *	 Kjs.requires.path - Retrieves paths
				 *	 Kjs.requires.K - Useful configuration constants
				 *   
				 * KNOWN ISSUES:
				 *   - Use of reload flag in $requires may have unexpected results if a script is reloaded before the first request
				 *     for the same script completes. This is because instances of script load manager entities are unique per
				 *     script file name, not per request. Therefore, any onLoad callbacks specified may not get called in conjunction
				 *     with the corresponding request.
				 */
				_requires = (function() {
					var
						// Create logger
						log = _log.logger('requires'),
						
						// Get a reference to the packaging block, if defined
						_packages = _env(_keyPackaging),
						
						// Module map - DEPRECATED
		//				_modules = {},
						
						// Registry of requested dependencies
						// This is kept separate from _packages packaging block, 
						// as ad-hoc, non-packaged scripts may be required which would not be in _packages.
						_registry = {},
		
						// Ready handler queue
						_handlers = [],
						
						// Number of load requests in flight
						_nPending = 0,
		
						// Get path related variables from $env block.
						// First call caches results so subsequent calls are faster
						_path = function _paths() {
							/*jsl:declare _paths*/
							// If $env.noSubdomains is set
							// or $env.jsSubdomainURL has changed at runtime, invalidate the cached values
							var noSubdomains = _env(_keyNoSubdomains);
							if (noSubdomains || (_paths.paths && _paths.paths.jsSubdomainURL != _env(_keyJsSubdomainURL))) {
								delete _paths.paths;
							}
							_paths.paths = _paths.paths||(function() {
								var 
									paths = {
										jsSubdomainURL: (noSubdomains) ? '' : _env(_keyJsSubdomainURL)||'',
										cssSubdomainURL: (noSubdomains) ? '' : _env(_keyCssSubdomainURL)||'',
										imageSubdomainURL: (noSubdomains) ? '' : _env(_keyImageSubdomainURL)||'',
										htmlSubdomainURL: (noSubdomains) ? '' : _env(_keyHtmlSubdomainURL)||_env(_keyJsSubdomainURL)||'',
										resourceRoot: _env(_keyResourceRoot)||'',
										imgFilePath: _env(_keyImgFilePath)||'',
										cssFilePath: _env(_keyCssFilePath)||'',
										jsScriptPath: _env(_keyJsScriptPath)||'',
										jsModulePath: _env(_keyJsModulePath)||'',
										jsLoosePath: _env(_keyJsLoosePath)||'',
										htmlFilePath: _env(_keyHtmlFilePath)||''
									}
								;
								return _extend(paths, {
									imgFileRoot: paths.resourceRoot + paths.imgFilePath,
									cssFileRoot: paths.resourceRoot + paths.cssFilePath,
									jsScriptRoot: paths.resourceRoot + paths.jsScriptPath,
									jsModuleRoot: paths.resourceRoot + paths.jsModulePath,
									jsLooseRoot: paths.resourceRoot + paths.jsLoosePath,
									htmlFileRoot: paths.resourceRoot + paths.htmlFilePath
								});
							})();
							return _paths.paths;
						},
						
						// Invokes a single, specified onLoad callback in the context of its entity
						_entityOnLoad = function(entity, onLoad, error) {
							try {
								// Set or clear error on entity
								entity.error = error;
		//						if (log.debug.enabled) log.debug('_entityOnLoad calling an onLoad handler for ' + entity.src, onLoad);
								onLoad.call(entity, error);
							} catch(e) {
								log.error({msg: 'msgLoadHandlerException', src: entity.src, message: e.message}, e);	// 'Exception in load handler for: ' + entity.src + ' - ' + e.message
							}
						},
						
						// Call any registered ready handlers - this is NOT the $ready queue.
						// This is a load-dependency manager ready, which fires whenever all
						// in-flight/pending reqests have finished loading. Note that this has
						// the potential of firing many times.
						// Handlers are called synchronously, with no exception handling!
						_doReady = function() {
							for (var i=0; i < _handlers.length; i++) {
								_handlers[i]();
							}
						},
						
						// Proxy onLoad handler to process onLoad handler queue once dependency is loaded.
						// Called in the context of request entity.
						_onScriptLoad = function _$onLoad(error) {
							var 
								entity = this,
								onLoad = function _$core_onscriptload_onload(error) {
									// Invoke all onLoad handlers on the entity
			//						if (log.debug.enabled) log.debug('_onScriptLoad invoking all entity.onLoad handlers for ' + entity.src);
									while (entity.onLoad.length) {
										_entityOnLoad(entity, entity.onLoad.shift(), error);
									}
									// Decrement load counters and fire any ready callbacks prior to releasing sync hold
									entity.loading--;
			//						if (log.debug.enabled) log.debug('_onScriptLoad.onLoad nPending = ' + _nPending);
									// Report loding done before calling _doReady in case a ready handler $requires another script
									if (!_nPending) {
			//							if (log.debug.enabled) log.debug('_onScriptLoad.onLoad invoking $requires _doReady callback');
										_doReady();	// $requires ready, not $ready - this could fire multiple times, potentially, though maybe not...
									}
								}
							;
							if (error) {
								entity.first = true;	// To allow a subsequent attempt to retry w/o needing to specify reload: true
								if (log.error.enabled) log.error(error.message, error);
							} else {
								entity.loaded = true;	// Mark the file as having loaded
		//						if (log.debug.enabled) log.debug('Script loaded - releasing sync hold for ' + entity.src);
							}
							if (!entity.opt.noInitWait) {
								//[*] Releasing the last sync hold will trigger _onReady, as will _nPending going to zero.
								_startup.sync(0, '_onScriptLoad ' + entity.src);
								_nPending--;
		//						if (log.debug.enabled) log.debug(entity.src + ' loaded. _nPending = ' + _nPending);
							} else {
								_stamp({id: 'marker', label: 'OnLoad w/noInitWait: ' + entity.src});
							}
							if (!_nPending) {
								// Indicate load is done and trigger _onReady.
	//							log.info('Script loading is done.');
								_startup.flags.loadDone = true;
								_startup.ready();
							}
							// onLoad handler calls are deferred to prevent long
							// executions in script load handler. By default, onLoad is scheduled
							// for the post-$init phase, but this can be overridden by the noInitOnLoad flag
							// in $requires options.
							// If an error occurs, this will also not wait for post-init to report.
							if (entity.opt.noInitOnLoad||error) {
								_(function() {
		//							if (log.debug.enabled) log.debug('_onScriptLoad calling its onLoad function immediately (noInitOnLoad) for ' + entity.src);
									onLoad(error);
								});
							} else {
		//						if (log.debug.enabled) log.debug('_onScriptLoad stacking its onLoad function to post-init queue for ' + entity.src);
								// Define closure to capture error for asynchronous post-init call
								(function(error) {
									_startup.init(function _$post_onscriptload($) {
										onLoad(error);
										return {
											msg: entity.src + ' - post-init invocation of entity.onLoad[...] handlers' //[*] BNS-1162: (queueInit = ' + (!!entity.opt.queueInit) + ')'
										};	// Gets added to history entry
									}, {
										isPostInit: true
									//	queueInit: entity.opt.queueInit	//[*] BNS-1162
									});
								})(error);
							}
						},
		
						// Register ready handler for when all pending loads complete.
						// Callback will get called after last script loads, but before sync hold is removed.
						// This is not the onLoad callback dispatcher!
						_requiresReady = function(callback) {
							if (!_nPending) {
								_(callback, 10);
							} else {
								_handlers.push(callback);
							}
						},
						
						// Computes a fully qualified URL from the URL provided.
						// Works for JS, JSON, HTML, CSS, GIF, JPG & PNG files.
						// Critical values must be supplied by host in $env global environment block.
						// Not known at build time, unfortunately.
						// An effort to infer the values failed, as $requires can be called at load
						// time, but values didn't get defined until init time.
						// filename.js
						// src = URL (partial, relative or full)
						// opt = optional settings
						//   - sameDomain = flag to specify whether URLs with no origin should translate to the same origin
						_fullyQualified = function(src, opt) {
							opt = opt||{};
							var 
								path = _path(),
								// Regular expressions to test extensions to determine what subdomain they should come from
								regJs = /\.(js|json)$/i,
								regCss = /\.css$/i,
								regImg = /\.(png|jpg|jpeg|gif|bmp)$/i,
								regHtml = /\.html$/i	// HTML templates
							;
							
							// If path assumes current protocol, add it
							if (src.match(/(^\/\/)/)) {
								src = location.protocol + src;
							}
							// If path is not already fully qualified (origin is missing) and path is not relative
							if (!src.match(/^http/i)) {
								// Assume url is within host domain
								// If URL is not relative, assume we need to add the path
								if (!src.match(/^\//)) {
									// If js, prepend JavaScript script path, if absent
									if (src.match(regJs) && !src.match(path.jsScriptPath)) {
										src = path.jsScriptPath + src;
									}
									if (src.match(regCss) && !src.match(path.cssFilePath)) {
										src = path.cssFilePath + src;
									}
									if (src.match(regImg) && !src.match(path.imgFilePath)) {
										src = path.imgFilePath + src;
									}
									if (src.match(regHtml) && !src.match(path.htmlFilePath)) {
										src = path.htmlFilePath + src;
									}
									//[*] No values for $env.cssFilePath or $env.imageFilePath have been defined
									// Prepend resource root path, if absent
									//[*] Regex failed when resourceRoot was just "/" and startsWith
									//    isn't supported in all browsers, so substr is used
									if (src.substr(0, path.resourceRoot.length) != path.resourceRoot) {
										src = path.resourceRoot + src;
									}
								}
								// Prepend origin if not explicitly from same domain
								if (!opt.sameDomain) {
									if (src.match(regJs) && path.jsSubdomainURL) {
										src = path.jsSubdomainURL + src;
									} else if (src.match(regCss) && path.cssSubdomainURL) {
										src = path.cssSubdomainURL + src;
									} else if (src.match(regImg) && path.imageSubdomainURL) {
										src = path.imageSubdomainURL + src;
									} else if (src.match(regHtml) && path.htmlSubdomainURL) {
										src = path.htmlSubdomainURL + src;
									}
								}
							}
							// Return fully qualified URL
							return src;
						},
						
						// Translate $requires src to a url.
						// src may be a file name or a module name (key)
						// src may be alias-mapped to a module (or possible multiple modules - see below).
						// opt.isClientDebug, if defined, overrides $env.isClientDebug
						// opt.module is not recommended, but can be used to explicitly 
						// specify what module to load if the script maps to multiple modules.
						// Normally, application-level scripts will not map to multiple modules,
						// but in framework upgrade transitions, there may be use cases where
						// this happens. Typically, however, it is modules that get packaged
						// into other modules, and those parent modules are requested, first, on
						// the page, so _fullUrl will be able to determine which module to use.
						// opt.module has one quirky implementation, whereby if it is set to ''
						// (empty string), it takes this to mean that if the src is a module that 
						// has one or more parents (is part of another module), but none of the parent 
						// modules have been requested, then suppress the warning associated with
						// that. In fact, it skips the check, completely.
						// opt.sameDomain is propagated down to _fullyQualified, if specified
						_fullUrl = function(src, opt) {
							opt = opt||{};
							var
								isClientDebug = !!((opt.isClientDebug === undefined) ? _env(_keyIsClientDebug) : opt.isClientDebug),
								path = _path(),
								modules, module, filename,
								requestedFile = function(module) {
									module.requested = true;
									return module.srcFile;
								},
								contains = function(list, mod) {
									var rtn;
									if (list) for (var i=0; i<list.length && !rtn; i++) {
										if (list[i] == mod) rtn = mod;
									}
									return rtn;
								},
								belongs = function(list) {
									list = list ? [].concat(list) : [];
									var rtn = [], module;
									for (var i=0; i<list.length; i++) {
										module = _packages.modules[list[i]];
										if (module) {
											rtn.push(module);
										}
									}
									return (rtn.length) ? rtn : null;
								},
								requested = function(module) {
									if (module.requested) {
										return true;
									}
									var
										parents = module.parents,
										i, rtn = false
									;
									if (parents) {
										for (i=0; i<parents.length && !rtn; i++) {
											rtn = requested(_packages.modules[parents[i]]);
										}
									}
									return rtn;
								},
								getModules = function(src) {
									var mod = _packages.modules[src]||_packages.modules[_packages.refs[src]]||belongs(_packages.alias[src]);
									return mod ? [].concat(mod) : null;
								}
							;
							
							// _packages refers to $env.packaging block, produced by the ANT build script (in env.block.js).
							// If not defined, this indicates a problem with the build, but could conceivably be the result
							// of a stand-alone environment that does not implement any packaging, so no error is thrown here.
							if (_packages && !_env(_keyNoPackaging)) {
								// _packages.loose[src], if defined, indicates the file is not included in a module (package).
								// The actual value indicates where the original file lives.
								if (_packages.css.refs[src]) {
									// File is a packaged style sheet
									src = path.cssFileRoot + _packages.css.refs[src];
									if (isClientDebug) {
										src = src.replace(/\.css$/i, '-debug.css');
									}
								} else if (_packages.loose[src]) {
									// File is a non-packaged file
									src = path.jsLooseRoot + _packages.loose[src];
								} else {
									// Get module list from source - list of one for most cases
								 	modules = getModules(src);
								}
								// If any modules are found, determine which one to use and compute the true src string
							 	if (modules) {
							 		if (opt.module) {
							 			// $requires specified a module, check if it is valid - if so, use it
							 			module = contains(modules, getModules(opt.module));
							 		} else if (modules.length == 1) {
							 			// Only one module - take it
							 			module = modules[0];
							 		} else {
							 			// See if any of the parent modules have been requested, previously
							 			for (var m=0; m<modules.length && !module; m++) {
							 				if (requested(modules[m])) {
							 					module = modules[m];
							 				}
							 			}
							 		}
							 		if (module) {
							 			// Mark the pre-selected module as requested (even if it is part of a parent module, below
							 			module.requested = true;
							 			// Check any parent modules to determine if one has been requested
							 			//[*] This only checks one level of parenting, which is about all there is
							 			//    at this time, but would be safer to cover the bases and implement a function
							 			//    similar to requested(module) that walks to the top and returns the selected 
							 			//    module, if any
							 			if (module.parents && opt.module !== '') { //[*] See notes at head of _fullUrl for check against empty string
							 				for (var p=0, selected=false; !selected && p<module.parents.length; p++) {
							 					if (_packages.modules[module.parents[p]].requested) {
							 						// This parent module has been requested, previously - use it
							 						module = _packages.modules[module.parents[p]];
							 						selected = true;
							 					}
							 				}
							 				if (!selected) {
							 					// Log warning if no parent module has been requested
							 					if (log.warn.enabled) log.warn({msg: 'msgNoParentRequest', alias: module.alias});	// 'Selected package (' + module.alias + ') specifies parents, but no parent package has been requested.'
							 				}
							 			}
							 			// The final module selection has been made - compute the file name and mark module requested
						 				filename = requestedFile(module);
						 				// Compute full file name, including -debug suffix if client debug flag is set
								 		if (filename) {
											src = path.jsModuleRoot + filename;
											if (isClientDebug) {
												src = src.replace(/\.js$/i, '-debug.js');
											}
										}
							 		} else {
							 			// No module was selected
							 			if (opt.module) {
							 				// Log error if explicit module was not valid for the script
							 				if (log.error.enabled) log.error({msg: 'msgModuleNotFound', module: opt.module, src: src});	// 'Specified module (' + opt.module + ') was not found for script (' + src + ')'
							 			} else {
							 				// Log error if unable to determine which module to load (ambiguous)
							 				if (log.warn.enabled) log.warn({msg: 'msgAmbiguousDependency', src: src});	// 'Ambiguous dependency - cannot determine origin for script (' + src + '). Specify module or require appropriate module at page level.'
							 			}
							 		}
								}
							} //[*] Else throw exception - build script failed to provide env.block.js
							
		//					// If jsScriptRoot is present and src is a partial relative path or standalone file name
		//					// not from our resource root, prepend resource root to default script location.
		//					if (jsScriptRoot && !filename) {
		//						src = _fullyQualified(src);	// Compute fully qualified URL for asset
		//					}
							return _fullyQualified(src, opt);
						},
			
						// Workhorse for requiring a dependency script. Called internally, only, from $requires,
						// for every module/script specified.
						//[*] ISSUE: opt.reload will not work properly if a request for a script comes before
						//           a previous request for the same script completes loading, because there is not
						//           an entity instance for each request of the same script. OnLoad handlers may be
						//           called out of turn. (instance is per unique file not per request)
						//[*] For some reason, status = _startup.ready() was producing different results than
						//    if status was passed in. Perhaps it is a closure issue, but what doesn't make sense
						//    is, whether it is passed in or retrieved from _startup.ready(), it refers to the same
						//    object. So WTF? Maybe something else was going on. Revisit this in a future life.
						//    Previously, status was passed as a property of opt. Now it is passed separately.
						//    This is when the weirdness showed up, as I was trying to eliminate opt.count and opt.status.
						_doRequires = function(src, opt, status) {
							if (!src) {
								if (log.warn.enabled) log.warn('msgRequiresNoSrc');	// '_doRequires was called with undefined src.'
								return;
							}
							var fil = src; // Preserve original value
							// Look up src in packaging for filename, else assume src is the filename
							src = _fullUrl(src, opt);
							status = status||_startup.ready();
							var 
								// Get entity if previously registered, or create entity
								entity = _registry[src]||{
									first: true,	// First request, by default
									src: src,
									opt: opt,
									loaded: !!opt.isPreloaded,
									onLoad: []
								},
								// Dynamic script injection to request source file
								inject = function(entity) {
									entity.loading = (entity.loading||0) + 1;
									if (!entity.opt.noInitWait) {
										_nPending++;
									}
		//							if (log.debug.enabled) log.debug('_doRequires injecting script for ' + entity.src);
									_injectScript(entity.src, {
										text: opt.text,
										onLoad: _bind(entity, _onScriptLoad),
										async: opt.async, //(opt.async !== false),	// Defaults to true [*] Not anymore
										timeout: opt.timeout,
										noBuster: opt.noBuster
		//								async: !!opt.isLast	//[*] Need to determine if this is really desirable
									});
								}
							;
							// If first request for this src, register the entity
							if (entity.first) {
								// If isPreloaded, ensure this gets marked as having been loaded
								if (opt.isPreloaded) entity.loading = 0;
								_registry[src] = entity;
							}
							
							// Provide feedback for special conditions
							if (entity.first || entity.error || opt.reload) {
								// Script has not been loaded or is about to be loaded again - add onload handler to entity queue
								if (entity.loading) {
									if (log.error.enabled) log.error('msgReloadInFlight', entity);	// 'Script reload was requested while previous load was still in flight. Review docs regarding this issue with using reload with $requires.'
								}
								if (entity.error) {
									if (log.warn.enabled) log.warn('msgScriptAfterFailure', entity);	// 'Script load attempt following a previous failure.'
								}
							} else {
								log.info({msg: 'msgAlreadyLoaded', src: src, fil: fil});
							}
							
							// Register inidividual onLoad handler, if specified
							if (opt.onLoad) {
								if (entity.first || entity.error || opt.reload) {
								// Script has not been loaded or is about to be loaded again - add onload handler to entity queue
								// This conditional is unnecessary since if only the first ever gets queued and the rest stacked,
								// the effect is the same as simply stacking
								//	if (entity.first) {
								//		// Queue the onLoad handler if file was not previously requested
								//		entity.onLoad.push(opt.onLoad);
								//	} else {
										// Stack the onLoad handler if file was previously requested, as we may be in a $requires chain.
										// The idea is, if $requires requests files A and B, and file B $requires file A, we want the
										// onLoad handler for this second $requires to finish, first, before firing the onLoad for the
										// first $requires. Alternatively, if two independent modules both have a $requires for file A,
										// then it shouldn't matter what order the onLoad handlers get called, since by mandate, module
										// scripts must be written so that order does not matter, so calling onLoad for the second
										// $requires, first, should not be a problem.
		//								if (log.debug.enabled) log.debug('_doRequires stacking entity.onLoad handler for entity ' + entity.src);
										entity.onLoad.splice(0, 0, opt.onLoad);
								//	}
								} else {
									// Script is already loaded - add handler to $init queue (or fire now if opt.noInitOnLoad)
									// It is placed in $init queue to follow any $init handlers installed by the loaded script.
									// This ensures the dependency is initialized before the load handler gets called.
									//[*] UPSET: This does not ensure full initialization, as the dependency could install an
									// init handler that $requires another script, which means $requires could inject $init
									// handlers following this one. It is best to utilize $ready handlers rather than $requires
									// onload handlers to perform post-dependency initialization, or place all $requires directly
									// in the script to be executed at load time.
									// UPDATE: $requires cannot be called from $init or $ready (by convention)!
									if (opt.noInitOnLoad) {
										if (entity.loading) {
		//									if (log.debug.enabled) log.debug('_doRequires adding onLoad handler to queue of script in flight (noInitOnLoad) for ' + entity.src);
											entity.onLoad.splice(0, 0, opt.onLoad);
										} else {
		//									if (log.debug.enabled) log.debug('_doRequires invoking _entityOnLoad immediately (noInitOnLoad) for ' + entity.src);
											_entityOnLoad(entity, opt.onLoad);
										}
									} else {
		//								if (log.debug.enabled) log.debug('_doRequires queueing _entityOnLoad to $init queue for ' + entity.src);
										_startup.init(function _$core_dorequires_entityonload($) {
		//									if (log.debug.enabled) log.debug('_doRequires _entityOnLoad from $init queue is getting invoked for ' + entity.src);
											_entityOnLoad(entity, opt.onLoad);
											return {
												msg: entity.src + ' - post-init opt.onLoad call' //[*] BNS-1162: (inQueue = ' + (!!opt.queueInit) + ')'
											};	// Gets applied to history entry
										}, {
											isPostInit: true	// Post-init queue.
										//	inQueue: opt.queueInit	//[*] BNS-1162
										//	inQueue: true	-- Stacked
										});
									}
								}
							}
							
							// Inject script if first call or reload (or a previous load failed), and script was not preloaded.
							// isPreloaded is used to indicate script has been loaded via a <script> tag,
							// so it gets recorded by the dependency manager as having been loaded.
							// Typically, this will not be relevant with opt.reload (i.e. would not be
							// used this way), so isPreloaded takes precedence, regardless of opt.reload.
							// If in $init stage, script injection is done immediately (queue fashion).
							if (!opt.isPreloaded && (entity.first || entity.error || opt.reload)) {
		//						if (log.debug.enabled) log.debug('_doRequires placing sync hold for ' + entity.src);
								if (!entity.opt.noInitWait) {
									_startup.sync(1, '_doRequires ' + entity.src);
								} else {
									_stamp({id: 'marker', label: 'Requires w/noInitWait: ' + entity.src});
								}
								// Bind uber script load handler proxy to the entity and load the script
								//[*] isPreInit and isLast are mutually exclusive, so maybe a single property with a value is better.
								//    If both flags are true, isPreInit takes precedence. isPreInit is a special-use flag, not
								//    intended for external use, so will remain in "undocumented" status, whereas isLast is
								//    indended for application-level code, so there should never be a use case where these two
								//    flags conflict, unless someone is just fiddling around.
								//[*] Might need to re-think topLoad, because if that simply injects a script immediately, that 
								//    bypasses any control over sequencing, especially for isPreInit. Currently, if isLast is true, 
								//    the script will get queued regardless of topLoad. But maybe topLoad should queue normally, but 
								//    cause init to begin as soon as foundation is loaded.
								if (!opt.isLast && (status.docReady || status.inInit || opt.topLoad)) {
									// Inject script tag immediately
		//							if (log.debug.enabled) log.debug('_doRequires injecting script immediately for ' + entity.src);
									//[*] Could NOT determine why loadDone was conditionally cleared based on noInitOnLoad.
									//    But there was a problem with it not getting cleared as it was allowing preInit to
									//    process all queues prematurely. Is there some preload or patch condition that needs
									//    this to be cleared, conditionally?
									//[*] New noInitWait flag was later added that requires conditional setting
		//							if (!opt.noInitOnLoad) {
									if (!opt.noInitWait) {
										_startup.flags.loadDone = false;
									}
									inject(entity);
								} else {
									// Schedule script injection for script phase
		//							if (log.debug.enabled) log.debug('_doRequires queueing script to script queue for ' + entity.src);
									_startup.script(function _$core_dorequires_inject($) {
		//								if (log.debug.enabled) log.debug('_doRequires script injection from script queue is getting invoked for ' + entity.src);
										inject(entity);
										return {msg: entity.src};	// Gets applied to history entry
									}, {
										noInitWait: !!opt.noInitWait,
										//[*] isPreInit and isLast are mutually exclusive - see earlier comments, above
										isPreInit: !!opt.isPreInit,
										isLast: !!opt.isLast
									});
								}
							} // else if (log.info.enabled) log.info('Script already requested or loaded - ' + entity.src);
							
							delete entity.first;	// Completed first request
						},
						
						// Primary function - requests load of a script dependency.
						// src = Path(s) to script file(s) to load
						// onLoad = Optional callback after file(s) load(s)
						// $requires('kohls.accordion.js', onLoad);
						// $requires(['kohls.accordion.js', 'kohls.typeahead.js'], onLoad);
						// $requires(src, opt);
						// $requires(src, opt, ...); // Additional object parameters will extend opt
						// src can be:
						//   - Module/script file name
						//   - Script URL
						// opt can be:
						//   - function (onLoad callback)
						//   - Object with following optional properties
						//       - onLoad: onLoad callback when script has been loaded and initialized
						//       - topLoad: Forces immediate script injection (default = !!$env.topLoad) - set true or false to ensure top or bottom
						//       - reload: Causes script injection to occur even if file has been previously requested
						//       - isClientDebug: If specified (true or false), setting will override $env.isClientDebug [*] Rename to debugMode?
						//       - noInitOnLoad: Set to fire onLoad callback immediately upon completion of requested load(s)
						//		 - isPreloaded: If true, tells $requires to mark script as loaded without actually loading it.
						//		 - isPreInit: Used internally to add script request to pre-init queue (patch & foundation)
						//		 - isLast: Used to queue the request in the third-party script queue (_3q)
						//		 - async: If true, will load script asynchronously (default = false = synchronous)
						//		 - text: If defined, appends a text node to the injected script tag with this text in it.
						_$requires = function $requires(src, opt) {
							var args = _slice.call(arguments, 2);
							src = [].concat(src||[]).reverse();
							if (typeof opt == _typFunction) {
								opt = {
									onLoad: opt
								};
							} else {
								opt = _descend(opt);  // Isolate options in case of reference to persistent object
							}
							_extend.apply(_ns, [opt].concat(args));
							if (opt.topLoad === undefined) {
								opt.topLoad = !!_env(_keyTopLoad);
							}
						//	opt.status = _startup.ready();	//[*] See notes in _doRequires about passing status
						//	opt.count = src.length;
							var
								count = src.length,
								status = _startup.ready(),
								onLoad = opt.onLoad,
								files = [].concat(src),  // Capture src before its contents are shifted out
								errors,
								// Proxy onLoad handler to call onLoad only after all src scripts are loaded
								// Gets called in the context of an entity
								onLoadProxy = function _$requires_onloadproxy(error) {						
									// Capture any error
									if (error) (errors = errors||[]).push(error); 
									count--;
		//							if (log.debug.enabled) log.debug('$requires.onLoadProxy called - ' + count);
									if (!count) {
		//								if (log.debug.enabled) log.debug('$requires.onLoadProxy calling _entityOnLoad for original opt.onLoad');
										if (log.debug.enabled) log.debug({ msg:'msgCallingOnload', files: files.join(',')}); // 'Calling $requires onLoad for [${files}]'
										_entityOnLoad(this, onLoad, errors);
									}
								}
							;
		
							// If opt.env is specified, define a $env property to save src
							if (opt.env) {
								if (_env(opt.env) !== undefined) {
									if (log.warn.enabled) log.warn('msgRequiresEnvExists'); // '$requires specifies $env property that already exists - existing value is overwritten.'
								}
								$env[opt.env] = [].concat(src);	//[*] Not using _env() as it does not support array values
							}
							
							// If opt.onLoad is specified, swap it out for our local proxy onLoad function
							if (onLoad) {
								opt.onLoad = onLoadProxy;
							}
		
							if (!src.length) {
								if (log.warn.enabled) log.warn('msgRequiresNoParams');	// '$requires was called with no parameters.'
							} else if (status.inInit) {
								//[*] Suppress this warning if noInitWait: true is specified - noInitWait will prevent sync which would exit init 
								if (log.warn.enabled) log.warn('msgRequiresInInit', src);	// '$requires was called during $init phase. THIS IS NOT RECOMMENDED! Place all $requires calls in load phase.'
							} else if (status.inReady) {
								//[*] Suppress this warning if noInitWait: true is specified
								if (log.warn.enabled) log.warn('msgRequiresInReady', src);	// '$requires was called during $ready phase. THIS IS NOT RECOMMENDED! Place all $requires calls in load phase.'
							} else if (status.readyDone && !status.restart) {
								if (log.info.enabled) log.info('msgStartupWillRestart', src);	// '$requires was called after launch. Startup sequence will restart.'
								_startup.restart(); //[*] In reality, we only need to restart if the required script(s) are not already loaded
							}
							if (opt.reload && opt.onLoad) {
								if (log.warn.enabled) log.warn('msgReloadIssues', src);	// 'Be aware of potential issues when using reload option with $requires. Read docs/comments for more info.'
							}
							// Schedule the call(s) - stack, but in reverse order, so we're essentially stacking a queue.
							// The assumption is $requires specifies a dependency, which we would expect to be loaded first,
							// so individual files are stacked into the injection queue. But if multiple scripts are listed
							// in the $requires call, the assumption is that they are in the desired order - if order is a
							// concern - so this implies a queue. So this "batch" of scripts is added to the stack, as a queue,
							// essentially adding the list as-is to the stack as a group.
							//[*] I believe the comments above are based on an invalid assumption. Scripts requests are not
							//    stacked in either the script queues or via injection - they are queued.
							//    It appears my confusion may have been based on the assumption that injection always begins
							//    above the first script tag on the page. But it only begins above the script tag that is
							//    first when core is initially loaded.
							//[*] _doRequires either injects the script or queues the script to the script queue.
							//    The script queue is just that - a queue - FIFO
							//    Injection inserts script tags using insertBefore on a specific target, which means 
							//    they also effectively get queued, as new requests are injected at the bottom of the list. 
							//    Therefore, stepping sequentially through the src list should inject in the desired order.
							//[*] Revisit this, because it may not be the request order that is of any concern, but the order
							//    in which the onLoad handlers get called, as I believe onLoad handlers get stacked.
							while (src.length) {
								_doRequires((src.shift()||'').trim(), opt, status);
							}
							
		//					while (src.length) {
		//						_doRequires(src[src.length-1], opt, status);
		//						src.length--;
		//					//	_doRequires(src.splice(src.length-1,1)[0], opt, status);
		//					}
						}
					;
					
					_extend(_$requires, {
						ready: _requiresReady,	// Kjs.requires.ready(callback)
						log: log,				// Logger for $requires
						fullUrl: _fullUrl,		// Computes full URL
						path: _path,			// Retrieve paths
						K: {
							independent: {async: true, isLast: true, noInitWait: true, noBuster: true}, //[*] DEPRECATED - DO NOT USE - use foreign instead
							foreign: {async: true, isLast: true, noInitWait: true, noBuster: true},
							standalone: {async: true, isLast: true, noInitWait: true, noInitOnLoad: true, noBuster: true}
						}
					});
		
					return _$requires;
				})(),
		
				// Injects a link tag in the header to load a style sheet.
				// Multiple requests for the same file are ignored.
				//[*] This is done here rather than at a higher level (such as in
				//    Dependency Manager) as this may be called at load time, prior
				//    to foundation init. However, this would not stop any higher-level
				//    wrapper from adding such protection.
				// opt.attrs - specifies any additional attributes to include
				// opt.reload - overrides any multiple-load protection to allow reload
				_injectCSS = (function() {
					var 
						// Request registry
						_requests = {},
						
						// Default options
						_defOpt = {
							attrs: {}
						},
						
						// Define the primary function that becomes _injectCSS
						$injectCSS = function _$injectCSS(hrefs, opt) {
							hrefs = [].concat(hrefs||[]);
							var 
								cfg = _descend(_defOpt, opt),
								buster = _env(_keyCacheBuster)||'',
								href, link, attr, links = []
							;
							while (hrefs.length) {
								href = _requires.fullUrl( hrefs.shift() );
								if (cfg.reload || !_requests[href]) {
									// Create entry, add to history, and save in requests list
									_requests[href] = _history.add(_hType.css, {
										t: (+new Date()),
										href: href
									});
									href += (cfg.noBuster ? '' : buster);
									link = _extend(_document.createElement('link'), {
										href: href,
										rel: 'stylesheet',
										media: 'only x',	// non-blocking load - adjusted in timeout, below
										type: 'text/css'
									});
									links.push(link);
									cfg.attrs[_nsAttr] = '';
									for (attr in cfg.attrs) {
										link.setAttribute(attr, cfg.attrs[attr]);
									}
								//	_first.parentNode.appendChild(link);
									_document.getElementsByTagName('head')[0].appendChild(link);
								}
							}
							// Defer update to media attribute on links
							if (links.length) {
								_(function() {
									while (links.length) {
										links.shift().media = cfg.attrs.media || 'all';
									}
								});
							}
						}
					;
					
					return $injectCSS;
				})(),
				
				// Get or set global object or function definition
				//   - name = Name of global variable
				//   - def = (optional) Reference to function or object to assign to global variable.
				//           If absent, the value of the named global variable will be returned 
				//           (or undefined if not defined).
				// When setting a global, the value being set is returned, regardless of whether
				// $env.noGlobals is true or not. If $env.noGlobals is true, then no global will be defined.
				// Regardless of $env.noGlobals, any value previously assigned via _globalDef can be retrieved
				// via _globalDef, whether or not a global variable was actually defined.
				_globalDef = (function() {
					var
						globals = {},
						$globalDef = function _$globaldef(name, def) {
							var
								noGlobals = _env(_keyNoGlobals),
								val = noGlobals ? globals[name] : _global[name]
							;
							if (def) {
								// Set
								if (noGlobals) {
									globals[name] = def;	// Internal registry
								} else if (((typeof def == _typFunction) || (typeof def == _typObject)) && (val !== def)) {
									def.$conflict = val;
									_global[name] = def;	// Global definition
								}
								return def;
							} else {
								// Get
								return val;
							}
						}
					;
					return $globalDef;
				})(),
				
				// Define public KJS API
				$core = {
					history: _history,					// Event history
					stamp: _stamp,						// Timestamps
					hasLocalStorage: _hasLocalStorage,	// Indicates whether local storage is available or not
					module: _module,					// Module registry
					errors: _errors,					// Error log
					log: _log,							// Default logger
					poll: _poll,						// Polling timer
					cookie: _cookie,					// Cookie manager
					id: _id,							// Unique id generator
		    		sync: _startup.sync,				// Synchronization control
					init: _startup.init,				// Initialization handler registry
					ready: _startup.ready,				// Document ready handler registry
					unload: _startup.unload,			// Page unload handler registry
					env: _env,							// Environment property accessor
					requires: _requires,				// Dependency manager
					fullUrl: _requires.fullUrl,			// Wrapper for fullUrl in case it gets re-defined later
					path: _requires.path,				// Retrieves resource paths
					load: {								// Namespace for global $load (Kjs.load) methods
						css: _injectCSS,				// $load.css() - Inject style sheet (dynamic link tag)
						js: _injectScript				// $load.js() - Inject dynamic script - Use Kjs.requires!
					},
					globalDef: _globalDef				// Global object reference manager
				}
			;
				
			// This should be the first history entry. Mark the core as loaded.
			_stamp({id: 'loaded', label: _nsn + ' core loaded', t: _history.loaded});

//			_log.error('Test error', new Error('Test error'));	//[*] REMOVE THIS

			// NOTE: Always keep multiple load protection in mind here.
			// This block of code gets executed only if Kjs namespace is not officially defined.
		
			// Define global environment block if not already defined
			$env = _extend(_global.$env||{}, _descend(_defEnv, _global.$env));	// Yes, it looks odd - leave it alone!
			// Define any global environment settings (now and during init phase)
			(function() {
				var env;
				try {
					env = (_hasLocalStorage) ? JSON.parse(localStorage.getItem('$env')||'null') : null;
				} catch(e) {
					_log.init.error({msg: 'msgBadEnvData', message: e.message}, e);	// 'Bad data retrieved for $env settings from local storage: ' + e.message
				}
				if (env) {
					// $env settings from local storage are meant to override settings supplied by the
					// host. Some settings apply to framework init, so settings from local storage are
					// applied immediately at this time. Settings from env.block.js should already be
					// applied by this time, as it is included ahead of framework, but it is possible
					// that $env properties could be injected from a JSP file, following framework load,
					// so settings from local storage are applied again after page load to ensure they
					// override any injected settings.
					// Messages are logged as warnings as use of this feature is primarily for debugging,
					// and want to make sure that usage is prominently visible.
					_setenv(env);
					
					// This will be the very first log message, so this is called AFTER setting
					// the configuration, above, in case the settings disable the error log or console.
					_log.init.warn('$env settings have been applied from local storage.');
	//				_log.init.warn('msgEnvFromStorage');	// '$env settings have been applied from local storage.'
					
					// Apply settings again after page load (DOMContentLoaded - pre-init queue).
					// _env will queue the _setenv call to the pre-init queue. Since env is an
					// object, the second parameter is recognized as a callback, if provided, so this
					// gives an opportunity to report a warning message.
					// This ought to be the first call that places an entry in the pre-init queue.
					_env(env, function _$core_init_setenv() {
						_log.init.warn('msgEnvAfterLoad');	// '$env settings from local storage are being applied after page load.'
					});
				}
				
				// Report if key environment config properties have not been set
				(function() {
					var 
						noval = 'KJS config did not provide a value for ${prop}',
						props = [_keyJsSubdomainURL, _keyCssSubdomainURL, _keyImageSubdomainURL, _keyResourceRoot, _keyJsScriptPath, _keyJsModulePath, _keyJsLoosePath],
						prop
					;
					while (props.length) {
						prop = props.shift();
						if (!_env(prop)) _log.init.warn({msg: noval, prop: prop});
					}
	//				if (!_env(_keyJsSubdomainURL)) _log.init.warn({msg: 'msgExpectedSetting', prop: 'jsSubdomainURL'});	// noval + 'jsSubdomainURL.'
	//				if (!_env(_keyCssSubdomainURL)) _log.init.warn({msg: 'msgExpectedSetting', prop: 'cssSubdomainURL'});	// noval + 'cssSubdomainURL.'
	//				if (!_env(_keyImageSubdomainURL)) _log.init.warn({msg: 'msgExpectedSetting', prop: 'imageSubdomainURL'});	// noval + 'imageSubdomainURL.'
	//				if (!_env(_keyHtmlSubdomainURL)) _log.init.warn({msg: 'msgExpectedSetting', prop: 'htmlSubdomainURL'});	// noval + 'htmlSubdomainURL.'
				})();
	
				// Core gets loaded from a script tag, so $requires does not get a chance to
				// mark it as having been requested. So mark it here based on $env.config.
				_requires(_env(_keyConfig), {isPreloaded: true, module: ''});
				
	/* WON'T WORK - $requires IS CALLED AT LOAD TIME, JQUERY MAY NOT BE PRESENT, AND URL IS NOT AVAILABLE DURING LOAD TIME,
	 * 				PLUS WOULD ALSO NEED TO SOMEHOW GET cssSubdomainURL AND imageSubdomainURL.
				// Infer jsSubdomainURL and resourceRoot values from framework script URL
				try {
					origin = $('script[src*="/framework"],script[src*="/kjscore"]')[0].src.match(/(http[s]*?:\/\/.*?)(\/.*?)\/javascript/);
					_setenv({
						jsSubdomainURL: origin[1],
						resourceRoot: origin[2]
					});
				} catch(e) {
					_log.init.warn('Unable to determine jsSubdomainURL and resourceRoot');
				}
	
				if (_global.jQuery && jQuery == _global.$) {
					_log.init.info('Unified framework script (Phase I) is deployed.');
				} else {
					_log.init.info('Split framework (Phase II) is deployed.');
				}
	*/
			})();
			
			// Set logger level. Defaults to 'log' in client debug mode, or 'warn' otherwise
			var logLevel = _env(_keyLogLevel)||(_env(_keyIsClientDebug)) ? 'log' : 'warn';
			// Set logging level to warnings and above in production
			_log.init.setThreshold(_log.init[logLevel]);			// Init logger
			_startup.log.setThreshold(_startup.log[logLevel]);		// Startup logger
			_requires.log.setThreshold(_requires.log[logLevel]);	// Requires logger
			_log.setThreshold(_log[logLevel]);						// Global logger
	
			// Load patch script
			// Make special requires call to inject scripts prior to $init phase in client debug mode, if specified
			//[*] Note: patch script must always be loaded prior to foundation, so keep that in
			//    mind if making any changes to patch or foundation loading.
			if (_env(_keyIsClientDebug) && _env(_keyPatch)) (function() {
				var 
					patch = [].concat(_env(_keyPatch))	// Get list of URLs
				;
				_startup.flags.inPatch = true;
	//			$core.ready().inPatch = true;			// Place pre-init hold on $init phase
				_log.init.info('msgInjectingScript', patch);	// 'Performing patch script injection'
				// Inject script(s) ASAP
				$core.requires(patch, {
					isPatch: true,		//[*] Proposed - would eliminate inPatch flag above and below
					topLoad: true,		// Inject script immediately [*] Always? If not always, then also set isPreInit: true
					noInitOnLoad: true,	// Do not wait for $init stage to call onLoad
					onLoad: function() {
						$core.ready().inPatch = false;	// Release pre-init hold - if docReady has already fired, _onReady handling will begin
					}
				});
			})();
			
			// Load KJS foundation
			// If host code loads foundation with a script tag or as part of a package,
			// it should define $env.noFoundation = true; to prevent it from getting loaded here.
			//[*] Note: patch script must always be loaded prior to foundation, so keep that in
			//    mind if making any changes to patch or foundation loading.
			(function() {
				var 
	//				isIE = /MSIE|rv\:/i.test(navigator.userAgent), //[*] TEMPORARY
					topLoad = !!_env(_keyTopLoad),
					preload = _env(_keyPreload),
					jsFoundation = _env(_keyFoundation),
					clientDebug = _env(_keyIsClientDebug),
					// $requires options
					reqOpt = {
						topLoad: topLoad,		// Inject script request immediately
						isPreInit: !topLoad,	// Add to pre-init queue
						async: false,			// Load synchronously
						noInitOnLoad: true		// Do not wait for $init stage to call onLoad (though no onLoad is defined)
						//[*] Beware: reqOpt is used in multiple places, below, so bear this in mind if you have any thoughts of adding onLoad
					}
				;
				if (preload) { // (!isIE && preload) 	//[*] Temporarily disabling for IE
					if (_log.init.debug.enabled) _log.init.debug('Preload requested');
					_startup.flags.inPreload = true;
					$core.requires(preload, reqOpt, {
						onLoad: function(error) {
							if (_log.init.debug.enabled) _log.init.debug('Preload completed');
							_startup.flags.inPreload = false;
							// If _flags.docReady gets set before preload finishes, initialOnReady will not get called.
							// So the call here will succeed, since inPreload has just been cleared. If _flags.docReady
							// is not set, yet, then the DOMContentLoaded handler will succeed in calling initialOnReady.
							if (_startup.flags.docReady) {
								_startup.initialOnReady();  // Is performed asynchronously (outside of onLoad handler)
							}
						}
					});
					if (!clientDebug) {
						_setenv(_keyPreload, null);	// Delete property (in production only)
					}
				}
				if (jsFoundation) {
					if (_env(_keyNoFoundation)) {
						// Foundation is presumed to be loaded via a static script tag - mark as pre-loaded
						$core.requires(jsFoundation, {isPreloaded: true});
					} else {
						// Inject dynamic script tag 
						// If top-loaded, inject immediately, else add to pre-init queue.
						//[*] Report error if jsFoundation is undefined!
		//				if (_log.init.debug.enabled) _log.init.debug('Loading foundation script: ' + jsFoundation);
						$core.requires(jsFoundation, reqOpt);
					}
				} else {
					if (_log.init.warn.enabled) _log.init.warn('msgNoFoundation');	// 'Foundation is not specified!'
				}
			})();
		
			// Load debug tools if specified
			if (_env(_keyDebugMenu)) {
				$core.requires(_env(_keyDebugMenu), {isLast: true});
			}

			// Convenient global references
			_globalDef('$module', $core.module);
			_globalDef('$err', $core.errors);
			_globalDef('$log', $core.log);
			_globalDef('$requires', $core.requires);
			_globalDef('$sync', $core.sync);
			_globalDef('$init', $core.init);
			_globalDef('$ready', $core.ready);
			_globalDef('$unload', $core.unload);
			_globalDef('$load', $core.load);	// Kjs.ajax will extend Kjs.load (and thus $load)
			
			// Install ready trigger
			_startup.install();
		
			// Extend partial pre-existing Kjs namespace, defined in kohls.guts.js.
			_extend(_ns, $core);
			
			// Indicate where KJS is being loaded (helps with frames)
			_log.init.info({msg: 'msgCoreLoaded', href: location.href});
		
			// [SBM-325] - https://sites.google.com/a/kohls.com/framework-analysis/framework/genesis-script
			// Fire any framework-dependent queues if Genesis Script is used
			// See https://sites.google.com/a/kohls.com/framework-analysis/framework/genesis-script
			if (typeof $env == 'function') {
				_stamp({id: 'marker', label: 'Invoke $env framework dependency queue'});
				$env(_nsn);
			}			
		})();
	}
}).call((function() {return this;})());

// ---- End of kohls.core.js ----
/*!
 * Foundation includes jQuery, the jQuery template plug-in, and the KJS foundation library.
 */

$module(function(Kjs) {
	Kjs.stamp({id: 'marker', label: 'KJS foundation', tick: true});
});
/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

	// Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

	// Matches dashed string for camelizing
	rdashAlpha = /-([a-z]|[0-9])/ig,
	rmsPrefix = /^-ms-/,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return ( letter + "" ).toUpperCase();
	},

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,

	// The deferred used on DOM ready
	readyList,

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context && document.body ) {
			this.context = document;
			this[0] = document.body;
			this.selector = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = quickExpr.exec( selector );
			}

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = ( context ? context.ownerDocument || context : document );

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
						selector = ( ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment ).childNodes;
					}

					return jQuery.merge( this, selector );

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.7.2",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = this.constructor();

		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );

		} else {
			jQuery.merge( ret, elems );
		}

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// Add the callback
		readyList.add( fn );

		return this;
	},

	eq: function( i ) {
		i = +i;
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {
		// Either a released hold or an DOMready/load event and not yet ready
		if ( (wait === true && !--jQuery.readyWait) || (wait !== true && !jQuery.isReady) ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 1 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.fireWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger( "ready" ).off( "ready" );
			}
		}
	},

	bindReady: function() {
		if ( readyList ) {
			return;
		}

		readyList = jQuery.Callbacks( "once memory" );

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			return setTimeout( jQuery.ready, 1 );
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return ( new Function( "return " + data ) )();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}
		var xml, tmp;
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object == undefined ? 0 : object.length,
			isObj = object == undefined || length === undefined || jQuery.isFunction( object );

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return object;
	},

	// Use native String.trim function wherever possible
	trim: trim ?
		function( text ) {
			return text == null ?
				"" :
				trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			// The window, strings (and functions) also have 'length'
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			var type = jQuery.type( array );

			if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array, i ) {
		var len;

		if ( array ) {
			if ( indexOf ) {
				return indexOf.call( array, elem, i );
			}

			len = array.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in array && array[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length,
			j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key, ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		if ( typeof context === "string" ) {
			var tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		var args = slice.call( arguments, 2 ),
			proxy = function() {
				return fn.apply( context, args.concat( slice.call( arguments ) ) );
			};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

		return proxy;
	},

	// Mutifunctional method to get and set values to a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, pass ) {
		var exec,
			bulk = key == null,
			i = 0,
			length = elems.length;

		// Sets many values
		if ( key && typeof key === "object" ) {
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], 1, emptyGet, value );
			}
			chainable = 1;

		// Sets one value
		} else if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = pass === undefined && jQuery.isFunction( value );

			if ( bulk ) {
				// Bulk operations only iterate when executing function values
				if ( exec ) {
					exec = fn;
					fn = function( elem, key, value ) {
						return exec.call( jQuery( elem ), value );
					};

				// Otherwise they run against the entire set
				} else {
					fn.call( elems, value );
					fn = null;
				}
			}

			if ( fn ) {
				for (; i < length; i++ ) {
					fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
				}
			}

			chainable = 1;
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	},

	sub: function() {
		function jQuerySub( selector, context ) {
			return new jQuerySub.fn.init( selector, context );
		}
		jQuery.extend( true, jQuerySub, this );
		jQuerySub.superclass = this;
		jQuerySub.fn = jQuerySub.prototype = this();
		jQuerySub.fn.constructor = jQuerySub;
		jQuerySub.sub = this.sub;
		jQuerySub.fn.init = function init( selector, context ) {
			if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
				context = jQuerySub( context );
			}

			return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		};
		jQuerySub.fn.init.prototype = jQuerySub.fn;
		var rootjQuerySub = jQuerySub(document);
		return jQuerySub;
	},

	browser: {}
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

// IE doesn't match non-breaking spaces with \s
if ( rnotwhite.test( "\xA0" ) ) {
	trimLeft = /^[\s\xA0]+/;
	trimRight = /[\s\xA0]+$/;
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch(e) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

return jQuery;

})();


// String to Object flags format cache
var flagsCache = {};

// Convert String-formatted flags into Object-formatted ones and store in cache
function createFlags( flags ) {
	var object = flagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( flags ) {

	// Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags = flags ? ( flagsCache[ flags ] || createFlags( flags ) ) : {};

	var // Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = [],
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Add one or several callbacks to the list
		add = function( args ) {
			var i,
				length,
				elem,
				type,
				actual;
			for ( i = 0, length = args.length; i < length; i++ ) {
				elem = args[ i ];
				type = jQuery.type( elem );
				if ( type === "array" ) {
					// Inspect recursively
					add( elem );
				} else if ( type === "function" ) {
					// Add if not in unique mode and callback is not in
					if ( !flags.unique || !self.has( elem ) ) {
						list.push( elem );
					}
				}
			}
		},
		// Fire callbacks
		fire = function( context, args ) {
			args = args || [];
			memory = !flags.memory || [ context, args ];
			fired = true;
			firing = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
					memory = true; // Mark as halted
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( !flags.once ) {
					if ( stack && stack.length ) {
						memory = stack.shift();
						self.fireWith( memory[ 0 ], memory[ 1 ] );
					}
				} else if ( memory === true ) {
					self.disable();
				} else {
					list = [];
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				return false;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};




var // Static reference to slice
	sliceDeferred = [].slice;

jQuery.extend({

	Deferred: function( func ) {
		var doneList = jQuery.Callbacks( "once memory" ),
			failList = jQuery.Callbacks( "once memory" ),
			progressList = jQuery.Callbacks( "memory" ),
			state = "pending",
			lists = {
				resolve: doneList,
				reject: failList,
				notify: progressList
			},
			promise = {
				done: doneList.add,
				fail: failList.add,
				progress: progressList.add,

				state: function() {
					return state;
				},

				// Deprecated
				isResolved: doneList.fired,
				isRejected: failList.fired,

				then: function( doneCallbacks, failCallbacks, progressCallbacks ) {
					deferred.done( doneCallbacks ).fail( failCallbacks ).progress( progressCallbacks );
					return this;
				},
				always: function() {
					deferred.done.apply( deferred, arguments ).fail.apply( deferred, arguments );
					return this;
				},
				pipe: function( fnDone, fnFail, fnProgress ) {
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( {
							done: [ fnDone, "resolve" ],
							fail: [ fnFail, "reject" ],
							progress: [ fnProgress, "notify" ]
						}, function( handler, data ) {
							var fn = data[ 0 ],
								action = data[ 1 ],
								returned;
							if ( jQuery.isFunction( fn ) ) {
								deferred[ handler ](function() {
									returned = fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise().then( newDefer.resolve, newDefer.reject, newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
									}
								});
							} else {
								deferred[ handler ]( newDefer[ action ] );
							}
						});
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					if ( obj == null ) {
						obj = promise;
					} else {
						for ( var key in promise ) {
							obj[ key ] = promise[ key ];
						}
					}
					return obj;
				}
			},
			deferred = promise.promise({}),
			key;

		for ( key in lists ) {
			deferred[ key ] = lists[ key ].fire;
			deferred[ key + "With" ] = lists[ key ].fireWith;
		}

		// Handle state
		deferred.done( function() {
			state = "resolved";
		}, failList.disable, progressList.lock ).fail( function() {
			state = "rejected";
		}, doneList.disable, progressList.lock );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( firstParam ) {
		var args = sliceDeferred.call( arguments, 0 ),
			i = 0,
			length = args.length,
			pValues = new Array( length ),
			count = length,
			pCount = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction( firstParam.promise ) ?
				firstParam :
				jQuery.Deferred(),
			promise = deferred.promise();
		function resolveFunc( i ) {
			return function( value ) {
				args[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				if ( !( --count ) ) {
					deferred.resolveWith( deferred, args );
				}
			};
		}
		function progressFunc( i ) {
			return function( value ) {
				pValues[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				deferred.notifyWith( promise, pValues );
			};
		}
		if ( length > 1 ) {
			for ( ; i < length; i++ ) {
				if ( args[ i ] && args[ i ].promise && jQuery.isFunction( args[ i ].promise ) ) {
					args[ i ].promise().then( resolveFunc(i), deferred.reject, progressFunc(i) );
				} else {
					--count;
				}
			}
			if ( !count ) {
				deferred.resolveWith( deferred, args );
			}
		} else if ( deferred !== firstParam ) {
			deferred.resolveWith( deferred, length ? [ firstParam ] : [] );
		}
		return promise;
	}
});




jQuery.support = (function() {

	var support,
		all,
		a,
		select,
		opt,
		input,
		fragment,
		tds,
		events,
		eventName,
		i,
		isSupported,
		div = document.createElement( "div" ),
		documentElement = document.documentElement;

	// Preliminary tests
	div.setAttribute("className", "t");
	div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

	all = div.getElementsByTagName( "*" );
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement( "select" );
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName( "input" )[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute("href") === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Tests for enctype support on a form(#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true,
		pixelMargin: true
	};

	// jQuery.boxModel DEPRECATED in 1.3, use jQuery.support.boxModel instead
	jQuery.boxModel = support.boxModel = (document.compatMode === "CSS1Compat");

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", function() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
		});
		div.cloneNode( true ).fireEvent( "onclick" );
	}

	// Check if a radio maintains its value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute("type", "radio");
	support.radioValue = input.value === "t";

	input.setAttribute("checked", "checked");

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "name", "t" );

	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.lastChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	fragment.removeChild( input );
	fragment.appendChild( div );

	// Technique from Juriy Zaytsev
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for ( i in {
			submit: 1,
			change: 1,
			focusin: 1
		}) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	fragment.removeChild( div );

	// Null elements to avoid leaks in IE
	fragment = select = opt = div = input = null;

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, outer, inner, table, td, offsetSupport,
			marginDiv, conMarginTop, style, html, positionTopLeftWidthHeight,
			paddingMarginBorderVisibility, paddingMarginBorder,
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		conMarginTop = 1;
		paddingMarginBorder = "padding:0;margin:0;border:";
		positionTopLeftWidthHeight = "position:absolute;top:0;left:0;width:1px;height:1px;";
		paddingMarginBorderVisibility = paddingMarginBorder + "0;visibility:hidden;";
		style = "style='" + positionTopLeftWidthHeight + paddingMarginBorder + "5px solid #000;";
		html = "<div " + style + "display:block;'><div style='" + paddingMarginBorder + "0;display:block;overflow:hidden;'></div></div>" +
			"<table " + style + "' cellpadding='0' cellspacing='0'>" +
			"<tr><td></td></tr></table>";

		container = document.createElement("div");
		container.style.cssText = paddingMarginBorderVisibility + "width:0;height:0;position:static;top:0;margin-top:" + conMarginTop + "px";
		body.insertBefore( container, body.firstChild );

		// Construct the test element
		div = document.createElement("div");
		container.appendChild( div );

		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		// (only IE 8 fails this test)
		div.innerHTML = "<table><tr><td style='" + paddingMarginBorder + "0;display:none'></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName( "td" );
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Check if empty table cells still have offsetWidth/Height
		// (IE <= 8 fail this test)
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check if div with explicit width and no margin-right incorrectly
		// gets computed margin-right based on width of container. For more
		// info see bug #3333
		// Fails in WebKit before Feb 2011 nightlies
		// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
		if ( window.getComputedStyle ) {
			div.innerHTML = "";
			marginDiv = document.createElement( "div" );
			marginDiv.style.width = "0";
			marginDiv.style.marginRight = "0";
			div.style.width = "2px";
			div.appendChild( marginDiv );
			support.reliableMarginRight =
				( parseInt( ( window.getComputedStyle( marginDiv, null ) || { marginRight: 0 } ).marginRight, 10 ) || 0 ) === 0;
		}

		if ( typeof div.style.zoom !== "undefined" ) {
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			// (IE < 8 does this)
			div.innerHTML = "";
			div.style.width = div.style.padding = "1px";
			div.style.border = 0;
			div.style.overflow = "hidden";
			div.style.display = "inline";
			div.style.zoom = 1;
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Check if elements with layout shrink-wrap their children
			// (IE 6 does this)
			div.style.display = "block";
			div.style.overflow = "visible";
			div.innerHTML = "<div style='width:5px;'></div>";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );
		}

		div.style.cssText = positionTopLeftWidthHeight + paddingMarginBorderVisibility;
		div.innerHTML = html;

		outer = div.firstChild;
		inner = outer.firstChild;
		td = outer.nextSibling.firstChild.firstChild;

		offsetSupport = {
			doesNotAddBorder: ( inner.offsetTop !== 5 ),
			doesAddBorderForTableAndCells: ( td.offsetTop === 5 )
		};

		inner.style.position = "fixed";
		inner.style.top = "20px";

		// safari subtracts parent border width here which is 5px
		offsetSupport.fixedPosition = ( inner.offsetTop === 20 || inner.offsetTop === 15 );
		inner.style.position = inner.style.top = "";

		outer.style.overflow = "hidden";
		outer.style.position = "relative";

		offsetSupport.subtractsBorderForOverflowNotVisible = ( inner.offsetTop === -5 );
		offsetSupport.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== conMarginTop );

		if ( window.getComputedStyle ) {
			div.style.marginTop = "1%";
			support.pixelMargin = ( window.getComputedStyle( div, null ) || { marginTop: 0 } ).marginTop !== "1%";
		}

		if ( typeof container.style.zoom !== "undefined" ) {
			container.style.zoom = 1;
		}

		body.removeChild( container );
		marginDiv = div = container = null;

		jQuery.extend( support, offsetSupport );
	});

	return support;
})();




var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([A-Z])/g;

jQuery.extend({
	cache: {},

	// Please use with caution
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var privateCache, thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey,
			isEvents = name === "events";

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!isEvents && !pvt && !cache[id].data)) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ internalKey ] = id = ++jQuery.uuid;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// Avoids exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		privateCache = thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Users should not attempt to inspect the internal events object using jQuery.data,
		// it is undocumented and subject to change. But does anyone listen? No.
		if ( isEvents && !thisCache[ name ] ) {
			return privateCache.events;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i, l,

			// Reference to internal data cache key
			internalKey = jQuery.expando,

			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

			// See jQuery.data for more information
			id = isNode ? elem[ internalKey ] : internalKey;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				}

				for ( i = 0, l = name.length; i < l; i++ ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject(cache[ id ]) ) {
				return;
			}
		}

		// Browsers that fail expando deletion also refuse to delete expandos on
		// the window, but it will allow it on all other JS objects; other browsers
		// don't care
		// Ensure that `cache` is not a window object #10080
		if ( jQuery.support.deleteExpando || !cache.setInterval ) {
			delete cache[ id ];
		} else {
			cache[ id ] = null;
		}

		// We destroyed the cache and need to eliminate the expando on the node to avoid
		// false lookups in the cache for entries that no longer exist
		if ( isNode ) {
			// IE does not allow us to delete expando properties from nodes,
			// nor does it have a removeAttribute function on Document nodes;
			// we must handle all of these cases
			if ( jQuery.support.deleteExpando ) {
				delete elem[ internalKey ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( internalKey );
			} else {
				elem[ internalKey ] = null;
			}
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		if ( elem.nodeName ) {
			var match = jQuery.noData[ elem.nodeName.toLowerCase() ];

			if ( match ) {
				return !(match === true || elem.getAttribute("classid") !== match);
			}
		}

		return true;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var parts, part, attr, name, l,
			elem = this[0],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attr = elem.attributes;
					for ( l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		parts = key.split( ".", 2 );
		parts[1] = parts[1] ? "." + parts[1] : "";
		part = parts[1] + "!";

		return jQuery.access( this, function( value ) {

			if ( value === undefined ) {
				data = this.triggerHandler( "getData" + part, [ parts[0] ] );

				// Try to fetch any internally stored data first
				if ( data === undefined && elem ) {
					data = jQuery.data( elem, key );
					data = dataAttr( elem, key, data );
				}

				return data === undefined && parts[1] ?
					this.data( parts[0] ) :
					data;
			}

			parts[1] = value;
			this.each(function() {
				var self = jQuery( this );

				self.triggerHandler( "setData" + part, parts );
				jQuery.data( this, key, value );
				self.triggerHandler( "changeData" + part, parts );
			});
		}, null, value, arguments.length > 1, null, false );
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				jQuery.isNumeric( data ) ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	for ( var name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}




function handleQueueMarkDefer( elem, type, src ) {
	var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery._data( elem, deferDataKey );
	if ( defer &&
		( src === "queue" || !jQuery._data(elem, queueDataKey) ) &&
		( src === "mark" || !jQuery._data(elem, markDataKey) ) ) {
		// Give room for hard-coded callbacks to fire first
		// and eventually mark/queue something else on the element
		setTimeout( function() {
			if ( !jQuery._data( elem, queueDataKey ) &&
				!jQuery._data( elem, markDataKey ) ) {
				jQuery.removeData( elem, deferDataKey, true );
				defer.fire();
			}
		}, 0 );
	}
}

jQuery.extend({

	_mark: function( elem, type ) {
		if ( elem ) {
			type = ( type || "fx" ) + "mark";
			jQuery._data( elem, type, (jQuery._data( elem, type ) || 0) + 1 );
		}
	},

	_unmark: function( force, elem, type ) {
		if ( force !== true ) {
			type = elem;
			elem = force;
			force = false;
		}
		if ( elem ) {
			type = type || "fx";
			var key = type + "mark",
				count = force ? 0 : ( (jQuery._data( elem, key ) || 1) - 1 );
			if ( count ) {
				jQuery._data( elem, key, count );
			} else {
				jQuery.removeData( elem, key, true );
				handleQueueMarkDefer( elem, type, "mark" );
			}
		}
	},

	queue: function( elem, type, data ) {
		var q;
		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			q = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !q || jQuery.isArray(data) ) {
					q = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					q.push( data );
				}
			}
			return q || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			fn = queue.shift(),
			hooks = {};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			jQuery._data( elem, type + ".run", hooks );
			fn.call( elem, function() {
				jQuery.dequeue( elem, type );
			}, hooks );
		}

		if ( !queue.length ) {
			jQuery.removeData( elem, type + "queue " + type + ".run", true );
			handleQueueMarkDefer( elem, type, "queue" );
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, object ) {
		if ( typeof type !== "string" ) {
			object = type;
			type = undefined;
		}
		type = type || "fx";
		var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
		function resolve() {
			if ( !( --count ) ) {
				defer.resolveWith( elements, [ elements ] );
			}
		}
		while( i-- ) {
			if (( tmp = jQuery.data( elements[ i ], deferDataKey, undefined, true ) ||
					( jQuery.data( elements[ i ], queueDataKey, undefined, true ) ||
						jQuery.data( elements[ i ], markDataKey, undefined, true ) ) &&
					jQuery.data( elements[ i ], deferDataKey, jQuery.Callbacks( "once memory" ), true ) )) {
				count++;
				tmp.add( resolve );
			}
		}
		resolve();
		return defer.promise( object );
	}
});




var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	nodeHook, boolHook, fixSpecified;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classNames, i, l, elem,
			setClass, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call(this, j, this.className) );
			});
		}

		if ( value && typeof value === "string" ) {
			classNames = value.split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className && classNames.length === 1 ) {
						elem.className = value;

					} else {
						setClass = " " + elem.className + " ";

						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
								setClass += classNames[ c ] + " ";
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, i, l, elem, className, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call(this, j, this.className) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			classNames = ( value || "" ).split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						className = (" " + elem.className + " ").replace( rclass, " " );
						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[ c ] + " ", " ");
						}
						elem.className = jQuery.trim( className );

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var self = jQuery(this), val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, i, max, option,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				i = one ? index : 0;
				max = one ? index + 1 : options.length;
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},

	attr: function( elem, name, value, pass ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, "" + value );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var propName, attrNames, name, l, isBool,
			i = 0;

		if ( value && elem.nodeType === 1 ) {
			attrNames = value.toLowerCase().split( rspace );
			l = attrNames.length;

			for ( ; i < l; i++ ) {
				name = attrNames[ i ];

				if ( name ) {
					propName = jQuery.propFix[ name ] || name;
					isBool = rboolean.test( name );

					// See #9699 for explanation of this approach (setting first, then removal)
					// Do not do this for boolean attributes (see #10870)
					if ( !isBool ) {
						jQuery.attr( elem, name, "" );
					}
					elem.removeAttribute( getSetAttribute ? name : propName );

					// Set corresponding property to false for boolean attributes
					if ( isBool && propName in elem ) {
						elem[ propName ] = false;
					}
				}
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		// Use the value property for back compat
		// Use the nodeHook for button elements in IE6/7 (#1954)
		value: {
			get: function( elem, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.get( elem, name );
				}
				return name in elem ?
					elem.value :
					null;
			},
			set: function( elem, value, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.set( elem, value, name );
				}
				// Does not return so that setAttribute is also used
				elem.value = value;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Add the tabIndex propHook to attrHooks for back-compat (different case is intentional)
jQuery.attrHooks.tabindex = jQuery.propHooks.tabIndex;

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		// Fall back to attribute presence where some booleans are not supported
		var attrNode,
			property = jQuery.prop( elem, name );
		return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = true;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	fixSpecified = {
		name: true,
		id: true,
		coords: true
	};

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			return ret && ( fixSpecified[ name ] ? ret.nodeValue !== "" : ret.specified ) ?
				ret.nodeValue :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				ret = document.createAttribute( name );
				elem.setAttributeNode( ret );
			}
			return ( ret.nodeValue = value + "" );
		}
	};

	// Apply the nodeHook to tabindex
	jQuery.attrHooks.tabindex.set = nodeHook.set;

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			if ( value === "" ) {
				value = "false";
			}
			nodeHook.set( elem, value, name );
		}
	};
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = "" + value );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});




var rformElems = /^(?:textarea|input|select)$/i,
	rtypenamespace = /^([^\.]*)?(?:\.(.+))?$/,
	rhoverHack = /(?:^|\s)hover(\.\S+)?\b/,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
	quickParse = function( selector ) {
		var quick = rquickIs.exec( selector );
		if ( quick ) {
			//   0  1    2   3
			// [ _, tag, id, class ]
			quick[1] = ( quick[1] || "" ).toLowerCase();
			quick[3] = quick[3] && new RegExp( "(?:^|\\s)" + quick[3] + "(?:\\s|$)" );
		}
		return quick;
	},
	quickIs = function( elem, m ) {
		var attrs = elem.attributes || {};
		return (
			(!m[1] || elem.nodeName.toLowerCase() === m[1]) &&
			(!m[2] || (attrs.id || {}).value === m[2]) &&
			(!m[3] || m[3].test( (attrs[ "class" ] || {}).value ))
		);
	},
	hoverHack = function( events ) {
		return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	add: function( elem, types, handler, data, selector ) {

		var elemData, eventHandle, events,
			t, tns, type, namespaces, handleObj,
			handleObjIn, quick, handlers, special;

		// Don't attach events to noData or text/comment nodes (allow plain objects tho)
		if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		events = elemData.events;
		if ( !events ) {
			elemData.events = events = {};
		}
		eventHandle = elemData.handle;
		if ( !eventHandle ) {
			elemData.handle = eventHandle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = jQuery.trim( hoverHack(types) ).split( " " );
		for ( t = 0; t < types.length; t++ ) {

			tns = rtypenamespace.exec( types[t] ) || [];
			type = tns[1];
			namespaces = ( tns[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: tns[1],
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				quick: selector && quickParse( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			handlers = events[ type ];
			if ( !handlers ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var elemData = jQuery.hasData( elem ) && jQuery._data( elem ),
			t, tns, type, origType, namespaces, origCount,
			j, events, special, handle, eventType, handleObj;

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
		for ( t = 0; t < types.length; t++ ) {
			tns = rtypenamespace.exec( types[t] ) || [];
			type = origType = tns[1];
			namespaces = tns[2];

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector? special.delegateType : special.bindType ) || type;
			eventType = events[ type ] || [];
			origCount = eventType.length;
			namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;

			// Remove matching events
			for ( j = 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					 ( !handler || handler.guid === handleObj.guid ) &&
					 ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
					 ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					eventType.splice( j--, 1 );

					if ( handleObj.selector ) {
						eventType.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( eventType.length === 0 && origCount !== eventType.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			handle = elemData.handle;
			if ( handle ) {
				handle.elem = null;
			}

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery.removeData( elem, [ "events", "handle" ], true );
		}
	},

	// Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent: {
		"getData": true,
		"setData": true,
		"changeData": true
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		// Don't do events on text and comment nodes
		if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
			return;
		}

		// Event object or event type
		var type = event.type || event,
			namespaces = [],
			cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType;

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "!" ) >= 0 ) {
			// Exclusive events trigger only for the exact event (no namespaces)
			type = type.slice(0, -1);
			exclusive = true;
		}

		if ( type.indexOf( "." ) >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}

		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
			// No jQuery handlers for this event type, and it can't have inline handlers
			return;
		}

		// Caller can pass in an Event, Object, or just an event type string
		event = typeof event === "object" ?
			// jQuery.Event object
			event[ jQuery.expando ] ? event :
			// Object literal
			new jQuery.Event( type, event ) :
			// Just the event type (string)
			new jQuery.Event( type );

		event.type = type;
		event.isTrigger = true;
		event.exclusive = exclusive;
		event.namespace = namespaces.join( "." );
		event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
		ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

		// Handle a global trigger
		if ( !elem ) {

			// TODO: Stop taunting the data cache; remove global events and always attach to document
			cache = jQuery.cache;
			for ( i in cache ) {
				if ( cache[ i ].events && cache[ i ].events[ type ] ) {
					jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
				}
			}
			return;
		}

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data != null ? jQuery.makeArray( data ) : [];
		data.unshift( event );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		eventPath = [[ elem, special.bindType || type ]];
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
			old = null;
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push([ cur, bubbleType ]);
				old = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( old && old === elem.ownerDocument ) {
				eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
			}
		}

		// Fire handlers on the event path
		for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

			cur = eventPath[i][0];
			event.type = eventPath[i][1];

			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			// Note that this is a bare JS function and not a jQuery handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				// IE<9 dies on focus/blur to hidden element (#1486)
				if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					old = elem[ ontype ];

					if ( old ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( old ) {
						elem[ ontype ] = old;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event || window.event );

		var handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
			delegateCount = handlers.delegateCount,
			args = [].slice.call( arguments, 0 ),
			run_all = !event.exclusive && !event.namespace,
			special = jQuery.event.special[ event.type ] || {},
			handlerQueue = [],
			i, j, cur, jqcur, ret, selMatch, matched, matches, handleObj, sel, related;

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers that should run if there are delegated events
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && !(event.button && event.type === "click") ) {

			// Pregenerate a single jQuery object for reuse with .is()
			jqcur = jQuery(this);
			jqcur.context = this.ownerDocument || this;

			for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {

				// Don't process events on disabled elements (#6911, #8165)
				if ( cur.disabled !== true ) {
					selMatch = {};
					matches = [];
					jqcur[0] = cur;
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];
						sel = handleObj.selector;

						if ( selMatch[ sel ] === undefined ) {
							selMatch[ sel ] = (
								handleObj.quick ? quickIs( cur, handleObj.quick ) : jqcur.is( sel )
							);
						}
						if ( selMatch[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, matches: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( handlers.length > delegateCount ) {
			handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
		}

		// Run delegates first; they may want to stop propagation beneath us
		for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
			matched = handlerQueue[ i ];
			event.currentTarget = matched.elem;

			for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
				handleObj = matched.matches[ j ];

				// Triggered event must either 1) be non-exclusive and have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

					event.data = handleObj.data;
					event.handleObj = handleObj;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						event.result = ret;
						if ( ret === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop,
			originalEvent = event,
			fixHook = jQuery.event.fixHooks[ event.type ] || {},
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = jQuery.Event( originalEvent );

		for ( i = copy.length; i; ) {
			prop = copy[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Target should not be a text node (#504, Safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// For mouse/key events; add metaKey if it's not there (#3368, IE6/7/8)
		if ( event.metaKey === undefined ) {
			event.metaKey = event.ctrlKey;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: jQuery.bindReady
		},

		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},

		focus: {
			delegateType: "focusin"
		},
		blur: {
			delegateType: "focusout"
		},

		beforeunload: {
			setup: function( data, namespaces, eventHandle ) {
				// We only want to do this special case on windows
				if ( jQuery.isWindow( this ) ) {
					this.onbeforeunload = eventHandle;
				}
			},

			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunload === eventHandle ) {
					this.onbeforeunload = null;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		if ( elem.detachEvent ) {
			elem.detachEvent( "on" + type, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}

		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// otherwise set the returnValue property of the original event to false (IE)
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj,
				selector = handleObj.selector,
				ret;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !form._submit_attached ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					form._submit_attached = true;
				}
			});
			// return undefined since we don't need an event listener
		},
		
		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
							jQuery.event.simulate( "change", this, event, true );
						}
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !elem._change_attached ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					elem._change_attached = true;
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) { // && selector != null
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			var handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( var type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	live: function( types, data, fn ) {
		jQuery( this.context ).on( types, this.selector, data, fn );
		return this;
	},
	die: function( types, fn ) {
		jQuery( this.context ).off( types, this.selector || "**", fn );
		return this;
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length == 1? this.off( selector, "**" ) : this.off( types, selector, fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			return jQuery.event.trigger( type, data, this[0], true );
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		if ( fn == null ) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};

	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}

	if ( rkeyEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
	}

	if ( rmouseEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
	}
});



/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	expando = "sizcache" + (Math.random() + '').replace('.', ''),
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rReturn = /\r\n/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;

	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];

			parts.push( m[1] );

			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context, seed );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}

				set = posProcess( selector, set, seed );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set, i, len, match, type, left;

	if ( !expr ) {
		return [];
	}

	for ( i = 0, len = Expr.order.length; i < len; i++ ) {
		type = Expr.order[i];

		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		type, found, item, filter, left,
		i, pass,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				filter = Expr.filter[ type ];
				left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							pass = not ^ found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Utility function for retreiving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
var getText = Sizzle.getText = function( elem ) {
    var i, node,
		nodeType = elem.nodeType,
		ret = "";

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent || innerText for elements
			if ( typeof elem.textContent === 'string' ) {
				return elem.textContent;
			} else if ( typeof elem.innerText === 'string' ) {
				// Replace IE's carriage returns
				return elem.innerText.replace( rReturn, '' );
			} else {
				// Traverse it's children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
	} else {

		// If no nodeType, this is expected to be an array
		for ( i = 0; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			if ( node.nodeType !== 8 ) {
				ret += getText( node );
			}
		}
	}
	return ret;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );

			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}

			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},

	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},

		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
		},

		file: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
		},

		password: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
		},

		submit: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "submit" === elem.type;
		},

		image: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
		},

		reset: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "reset" === elem.type;
		},

		button: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && "button" === elem.type || name === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		},

		focus: function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var first, last,
				doneName, parent, cache,
				count, diff,
				type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) ) {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					if ( type === "first" ) {
						return true;
					}

					node = elem;

					/* falls through */
				case "last":
					while ( (node = node.nextSibling) ) {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					return true;

				case "nth":
					first = match[2];
					last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}

					doneName = match[0];
					parent = elem.parentNode;

					if ( parent && (parent[ expando ] !== doneName || !elem.nodeIndex) ) {
						count = 0;

						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}

						parent[ expando ] = doneName;
					}

					diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || !!elem.nodeName && elem.nodeName.toLowerCase() === match;
		},

		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Sizzle.attr ?
					Sizzle.attr( elem, name ) :
					Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				!type && Sizzle.attr ?
				result != null :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}
// Expose origPOS
// "global" as in regardless of relation to brackets/parens
Expr.match.globalPOS = origPOS;

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}

	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}

		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );

				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );

					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}

				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );

					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}

						} else {
							return makeArray( [], extra );
						}
					}

					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}

			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );

		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try {
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem[ expando ] = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem[ expando ] = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context, seed ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet, seed );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
Sizzle.selectors.attrMap = {};
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})();


var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	// Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.globalPOS,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var self = this,
			i, l;

		if ( typeof selector !== "string" ) {
			return jQuery( selector ).filter(function() {
				for ( i = 0, l = self.length; i < l; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			});
		}

		var ret = this.pushStack( "", "find", selector ),
			length, n, r;

		for ( i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( n = length; n < ret.length; n++ ) {
					for ( r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				POS.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var ret = [], i, l, cur = this[0];

		// Array (deprecated as of jQuery 1.7)
		if ( jQuery.isArray( selectors ) ) {
			var level = 1;

			while ( cur && cur.ownerDocument && cur !== context ) {
				for ( i = 0; i < selectors.length; i++ ) {

					if ( jQuery( cur ).is( selectors[ i ] ) ) {
						ret.push({ selector: selectors[ i ], elem: cur, level: level });
					}
				}

				cur = cur.parentNode;
				level++;
			}

			return ret;
		}

		// String
		var pos = POS.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( i = 0, l = this.length; i < l; i++ ) {
			cur = this[i];

			while ( cur ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;

				} else {
					cur = cur.parentNode;
					if ( !cur || !cur.ownerDocument || cur === context || cur.nodeType === 11 ) {
						break;
					}
				}
			}
		}

		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

		return this.pushStack( ret, "closest", selectors );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	andSelf: function() {
		return this.add( this.prevObject );
	}
});

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, slice.call( arguments ).join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;

		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}

		return cur;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}




function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
	safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style)/i,
	rnocache = /<(?:script|object|embed|option|style)/i,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	},
	safeFragment = createSafeFragment( document );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE can't serialize <link> and <script> tags normally
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery.clean( arguments );
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},

	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery.clean(arguments) );
			return set;
		}
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}

				if ( elem.parentNode ) {
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					null;
			}


			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( elem.getElementsByTagName( "*" ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}

			if ( typeof value !== "string" ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling,
					parent = this.parentNode;

				jQuery( this ).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.length ?
				this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
				this;
		}
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {
		var results, first, fragment, parent,
			value = args[0],
			scripts = [];

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( !jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback, true );
			});
		}

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			parent = value && value.parentNode;

			// If we're in a fragment, just use that instead of building a new one
			if ( jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length ) {
				results = { fragment: parent };

			} else {
				results = jQuery.buildFragment( args, this, scripts );
			}

			fragment = results.fragment;

			if ( fragment.childNodes.length === 1 ) {
				first = fragment = fragment.firstChild;
			} else {
				first = fragment.firstChild;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				for ( var i = 0, l = this.length, lastIndex = l - 1; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						// Make sure that we do not leak memory by inadvertently discarding
						// the original fragment (which might have attached data) instead of
						// using it; in addition, use the original fragment object for the last
						// item instead of first because it can end up being emptied incorrectly
						// in certain situations (Bug #8070).
						// Fragments from the fragment cache must always be cloned and never used
						// in place.
						results.cacheable || ( l > 1 && i < lastIndex ) ?
							jQuery.clone( fragment, true, true ) :
							fragment
					);
				}
			}

			if ( scripts.length ) {
				jQuery.each( scripts, function( i, elem ) {
					if ( elem.src ) {
						jQuery.ajax({
							type: "GET",
							global: false,
							url: elem.src,
							async: false,
							dataType: "script"
						});
					} else {
						jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "/*$0*/" ) );
					}

					if ( elem.parentNode ) {
						elem.parentNode.removeChild( elem );
					}
				});
			}
		}

		return this;
	}
});

function root( elem, cur ) {
	return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function cloneFixAttributes( src, dest ) {
	var nodeName;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	// clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if ( dest.clearAttributes ) {
		dest.clearAttributes();
	}

	// mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if ( dest.mergeAttributes ) {
		dest.mergeAttributes( src );
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 fail to clone children inside object elements that use
	// the proprietary classid attribute value (rather than the type
	// attribute) to identify the type of content to display
	if ( nodeName === "object" ) {
		dest.outerHTML = src.outerHTML;

	} else if ( nodeName === "input" && (src.type === "checkbox" || src.type === "radio") ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set
		if ( src.checked ) {
			dest.defaultChecked = dest.checked = src.checked;
		}

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;

	// IE blanks contents when cloning scripts
	} else if ( nodeName === "script" && dest.text !== src.text ) {
		dest.text = src.text;
	}

	// Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute( jQuery.expando );

	// Clear flags for bubbling special change/submit events, they must
	// be reattached when the newly cloned events are first activated
	dest.removeAttribute( "_submit_attached" );
	dest.removeAttribute( "_change_attached" );
}

jQuery.buildFragment = function( args, nodes, scripts ) {
	var fragment, cacheable, cacheresults, doc,
	first = args[ 0 ];

	// nodes may contain either an explicit document object,
	// a jQuery collection or context object.
	// If nodes[0] contains a valid object to assign to doc
	if ( nodes && nodes[0] ) {
		doc = nodes[0].ownerDocument || nodes[0];
	}

	// Ensure that an attr object doesn't incorrectly stand in as a document object
	// Chrome and Firefox seem to allow this to occur and will throw exception
	// Fixes #8950
	if ( !doc.createDocumentFragment ) {
		doc = document;
	}

	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
	if ( args.length === 1 && typeof first === "string" && first.length < 512 && doc === document &&
		first.charAt(0) === "<" && !rnocache.test( first ) &&
		(jQuery.support.checkClone || !rchecked.test( first )) &&
		(jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

		cacheable = true;

		cacheresults = jQuery.fragments[ first ];
		if ( cacheresults && cacheresults !== 1 ) {
			fragment = cacheresults;
		}
	}

	if ( !fragment ) {
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}

	if ( cacheable ) {
		jQuery.fragments[ first ] = cacheresults ? fragment : 1;
	}

	return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [],
			insert = jQuery( selector ),
			parent = this.length === 1 && this[0].parentNode;

		if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
			insert[ original ]( this[0] );
			return this;

		} else {
			for ( var i = 0, l = insert.length; i < l; i++ ) {
				var elems = ( i > 0 ? this.clone(true) : this ).get();
				jQuery( insert[i] )[ original ]( elems );
				ret = ret.concat( elems );
			}

			return this.pushStack( ret, name, insert.selector );
		}
	};
});

function getAll( elem ) {
	if ( typeof elem.getElementsByTagName !== "undefined" ) {
		return elem.getElementsByTagName( "*" );

	} else if ( typeof elem.querySelectorAll !== "undefined" ) {
		return elem.querySelectorAll( "*" );

	} else {
		return [];
	}
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( elem.type === "checkbox" || elem.type === "radio" ) {
		elem.defaultChecked = elem.checked;
	}
}
// Finds all inputs and passes them to fixDefaultChecked
function findInputs( elem ) {
	var nodeName = ( elem.nodeName || "" ).toLowerCase();
	if ( nodeName === "input" ) {
		fixDefaultChecked( elem );
	// Skip scripts, get other children
	} else if ( nodeName !== "script" && typeof elem.getElementsByTagName !== "undefined" ) {
		jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
	}
}

// Derived From: http://www.iecss.com/shimprove/javascript/shimprove.1-0-1.js
function shimCloneNode( elem ) {
	var div = document.createElement( "div" );
	safeFragment.appendChild( div );

	div.innerHTML = elem.outerHTML;
	return div.firstChild;
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var srcElements,
			destElements,
			i,
			// IE<=8 does not properly clone detached, unknown element nodes
			clone = jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ?
				elem.cloneNode( true ) :
				shimCloneNode( elem );

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
			// IE copies events bound via attachEvent when using cloneNode.
			// Calling detachEvent on the clone will also remove the events
			// from the original. In order to get around this, we use some
			// proprietary methods to clear the events. Thanks to MooTools
			// guys for this hotness.

			cloneFixAttributes( elem, clone );

			// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
			srcElements = getAll( elem );
			destElements = getAll( clone );

			// Weird iteration because IE will replace the length property
			// with an element if you are cloning the body and one of the
			// elements on the page has a name or id of "length"
			for ( i = 0; srcElements[i]; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					cloneFixAttributes( srcElements[i], destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			cloneCopyEvent( elem, clone );

			if ( deepDataAndEvents ) {
				srcElements = getAll( elem );
				destElements = getAll( clone );

				for ( i = 0; srcElements[i]; ++i ) {
					cloneCopyEvent( srcElements[i], destElements[i] );
				}
			}
		}

		srcElements = destElements = null;

		// Return the cloned set
		return clone;
	},

	clean: function( elems, context, fragment, scripts ) {
		var checkScriptType, script, j,
				ret = [];

		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				continue;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				if ( !rhtml.test( elem ) ) {
					elem = context.createTextNode( elem );
				} else {
					// Fix "XHTML"-style tags in all browsers
					elem = elem.replace(rxhtmlTag, "<$1></$2>");

					// Trim whitespace, otherwise indexOf won't work as expected
					var tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase(),
						wrap = wrapMap[ tag ] || wrapMap._default,
						depth = wrap[0],
						div = context.createElement("div"),
						safeChildNodes = safeFragment.childNodes,
						remove;

					// Append wrapper element to unknown element safe doc fragment
					if ( context === document ) {
						// Use the fragment we've already created for this document
						safeFragment.appendChild( div );
					} else {
						// Use a fragment created with the owner document
						createSafeFragment( context ).appendChild( div );
					}

					// Go to html and back, then peel off extra wrappers
					div.innerHTML = wrap[1] + elem + wrap[2];

					// Move to the right depth
					while ( depth-- ) {
						div = div.lastChild;
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						var hasBody = rtbody.test(elem),
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

						for ( j = tbody.length - 1; j >= 0 ; --j ) {
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
								tbody[ j ].parentNode.removeChild( tbody[ j ] );
							}
						}
					}

					// IE completely kills leading whitespace when innerHTML is used
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
					}

					elem = div.childNodes;

					// Clear elements from DocumentFragment (safeFragment or otherwise)
					// to avoid hoarding elements. Fixes #11356
					if ( div ) {
						div.parentNode.removeChild( div );

						// Guard against -1 index exceptions in FF3.6
						if ( safeChildNodes.length > 0 ) {
							remove = safeChildNodes[ safeChildNodes.length - 1 ];

							if ( remove && remove.parentNode ) {
								remove.parentNode.removeChild( remove );
							}
						}
					}
				}
			}

			// Resets defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			var len;
			if ( !jQuery.support.appendChecked ) {
				if ( elem[0] && typeof (len = elem.length) === "number" ) {
					for ( j = 0; j < len; j++ ) {
						findInputs( elem[j] );
					}
				} else {
					findInputs( elem );
				}
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}
		}

		if ( fragment ) {
			checkScriptType = function( elem ) {
				return !elem.type || rscriptType.test( elem.type );
			};
			for ( i = 0; ret[i]; i++ ) {
				script = ret[i];
				if ( scripts && jQuery.nodeName( script, "script" ) && (!script.type || rscriptType.test( script.type )) ) {
					scripts.push( script.parentNode ? script.parentNode.removeChild( script ) : script );

				} else {
					if ( script.nodeType === 1 ) {
						var jsTags = jQuery.grep( script.getElementsByTagName( "script" ), checkScriptType );

						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
					}
					fragment.appendChild( script );
				}
			}
		}

		return ret;
	},

	cleanData: function( elems ) {
		var data, id,
			cache = jQuery.cache,
			special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
				continue;
			}

			id = elem[ jQuery.expando ];

			if ( id ) {
				data = cache[ id ];

				if ( data && data.events ) {
					for ( var type in data.events ) {
						if ( special[ type ] ) {
							jQuery.event.remove( elem, type );

						// This is a shortcut to avoid jQuery.event.remove's overhead
						} else {
							jQuery.removeEvent( elem, type, data.handle );
						}
					}

					// Null the DOM reference to avoid IE6/7/8 leak (#7054)
					if ( data.handle ) {
						data.handle.elem = null;
					}
				}

				if ( deleteExpando ) {
					delete elem[ jQuery.expando ];

				} else if ( elem.removeAttribute ) {
					elem.removeAttribute( jQuery.expando );
				}

				delete cache[ id ];
			}
		}
	}
});




var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	// fixed for IE9, see #8346
	rupper = /([A-Z]|^ms)/g,
	rnum = /^[\-+]?(?:\d*\.)?\d+$/i,
	rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
	rrelNum = /^([\-+])=([\-+.\de]+)/,
	rmargin = /^margin/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },

	// order is important!
	cssExpand = [ "Top", "Right", "Bottom", "Left" ],

	curCSS,

	getComputedStyle,
	currentStyle;

jQuery.fn.css = function( name, value ) {
	return jQuery.access( this, function( elem, name, value ) {
		return value !== undefined ?
			jQuery.style( elem, name, value ) :
			jQuery.css( elem, name );
	}, name, value, arguments.length > 1 );
};

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;

				} else {
					return elem.style.opacity;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, origName = jQuery.camelCase( name ),
			style = elem.style, hooks = jQuery.cssHooks[ origName ];

		name = jQuery.cssProps[ origName ] || origName;

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( +( ret[1] + 1) * +ret[2] ) + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value )) !== undefined ) {
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra ) {
		var ret, hooks;

		// Make sure that we're working with the right name
		name = jQuery.camelCase( name );
		hooks = jQuery.cssHooks[ name ];
		name = jQuery.cssProps[ name ] || name;

		// cssFloat needs a special treatment
		if ( name === "cssFloat" ) {
			name = "float";
		}

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks && (ret = hooks.get( elem, true, extra )) !== undefined ) {
			return ret;

		// Otherwise, if a way to get the computed value exists, use that
		} else if ( curCSS ) {
			return curCSS( elem, name );
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {},
			ret, name;

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

// DEPRECATED in 1.3, Use jQuery.css() instead
jQuery.curCSS = jQuery.css;

if ( document.defaultView && document.defaultView.getComputedStyle ) {
	getComputedStyle = function( elem, name ) {
		var ret, defaultView, computedStyle, width,
			style = elem.style;

		name = name.replace( rupper, "-$1" ).toLowerCase();

		if ( (defaultView = elem.ownerDocument.defaultView) &&
				(computedStyle = defaultView.getComputedStyle( elem, null )) ) {

			ret = computedStyle.getPropertyValue( name );
			if ( ret === "" && !jQuery.contains( elem.ownerDocument.documentElement, elem ) ) {
				ret = jQuery.style( elem, name );
			}
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// WebKit uses "computed value (percentage if specified)" instead of "used value" for margins
		// which is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !jQuery.support.pixelMargin && computedStyle && rmargin.test( name ) && rnumnonpx.test( ret ) ) {
			width = style.width;
			style.width = ret;
			ret = computedStyle.width;
			style.width = width;
		}

		return ret;
	};
}

if ( document.documentElement.currentStyle ) {
	currentStyle = function( elem, name ) {
		var left, rsLeft, uncomputed,
			ret = elem.currentStyle && elem.currentStyle[ name ],
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && (uncomputed = style[ name ]) ) {
			ret = uncomputed;
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		if ( rnumnonpx.test( ret ) ) {

			// Remember the original values
			left = style.left;
			rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				elem.runtimeStyle.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

curCSS = getComputedStyle || currentStyle;

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		i = name === "width" ? 1 : 0,
		len = 4;

	if ( val > 0 ) {
		if ( extra !== "border" ) {
			for ( ; i < len; i += 2 ) {
				if ( !extra ) {
					val -= parseFloat( jQuery.css( elem, "padding" + cssExpand[ i ] ) ) || 0;
				}
				if ( extra === "margin" ) {
					val += parseFloat( jQuery.css( elem, extra + cssExpand[ i ] ) ) || 0;
				} else {
					val -= parseFloat( jQuery.css( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
				}
			}
		}

		return val + "px";
	}

	// Fall back to computed then uncomputed css if necessary
	val = curCSS( elem, name );
	if ( val < 0 || val == null ) {
		val = elem.style[ name ];
	}

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test(val) ) {
		return val;
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Add padding, border, margin
	if ( extra ) {
		for ( ; i < len; i += 2 ) {
			val += parseFloat( jQuery.css( elem, "padding" + cssExpand[ i ] ) ) || 0;
			if ( extra !== "padding" ) {
				val += parseFloat( jQuery.css( elem, "border" + cssExpand[ i ] + "Width" ) ) || 0;
			}
			if ( extra === "margin" ) {
				val += parseFloat( jQuery.css( elem, extra + cssExpand[ i ]) ) || 0;
			}
		}
	}

	return val + "px";
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				if ( elem.offsetWidth !== 0 ) {
					return getWidthOrHeight( elem, name, extra );
				} else {
					return jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					});
				}
			}
		},

		set: function( elem, value ) {
			return rnum.test( value ) ?
				value + "px" :
				value;
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( parseFloat( RegExp.$1 ) / 100 ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there there is no filter style applied in a css rule, we are done
				if ( currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery(function() {
	// This hook cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				return jQuery.swap( elem, { "display": "inline-block" }, function() {
					if ( computed ) {
						return curCSS( elem, "margin-right" );
					} else {
						return elem.style.marginRight;
					}
				});
			}
		};
	}
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth,
			height = elem.offsetHeight;

		return ( width === 0 && height === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {

	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i,

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ],
				expanded = {};

			for ( i = 0; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};
});




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rspacesAjax = /\s+/,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Document location
	ajaxLocation,

	// Document location segments
	ajaxLocParts,

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		if ( jQuery.isFunction( func ) ) {
			var dataTypes = dataTypeExpression.toLowerCase().split( rspacesAjax ),
				i = 0,
				length = dataTypes.length,
				dataType,
				list,
				placeBefore;

			// For each dataType in the dataTypeExpression
			for ( ; i < length; i++ ) {
				dataType = dataTypes[ i ];
				// We control if we're asked to add before
				// any existing element
				placeBefore = /^\+/.test( dataType );
				if ( placeBefore ) {
					dataType = dataType.substr( 1 ) || "*";
				}
				list = structure[ dataType ] = structure[ dataType ] || [];
				// then we add to the structure accordingly
				list[ placeBefore ? "unshift" : "push" ]( func );
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */ ) {

	dataType = dataType || options.dataTypes[ 0 ];
	inspected = inspected || {};

	inspected[ dataType ] = true;

	var list = structure[ dataType ],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = ( structure === prefilters ),
		selection;

	for ( ; i < length && ( executeOnly || !selection ); i++ ) {
		selection = list[ i ]( options, originalOptions, jqXHR );
		// If we got redirected to another dataType
		// we try there if executing only and not done already
		if ( typeof selection === "string" ) {
			if ( !executeOnly || inspected[ selection ] ) {
				selection = undefined;
			} else {
				options.dataTypes.unshift( selection );
				selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected );
			}
		}
	}
	// If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
		selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected );
	}
	// unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
}

jQuery.fn.extend({
	load: function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf( " " );
		if ( off >= 0 ) {
			var selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = undefined;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			// Complete callback (responseText is used internally)
			complete: function( jqXHR, status, responseText ) {
				// Store the response as specified by the jqXHR object
				responseText = jqXHR.responseText;
				// If successful, inject the HTML into all the matched elements
				if ( jqXHR.isResolved() ) {
					// #4825: Get the actual response in case
					// a dataFilter is present in ajaxSettings
					jqXHR.done(function( r ) {
						responseText = r;
					});
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						responseText );
				}

				if ( callback ) {
					self.each( callback, [ responseText, status, jqXHR ] );
				}
			}
		});

		return this;
	},

	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},

	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray( this.elements ) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				( this.checked || rselectTextarea.test( this.nodeName ) ||
					rinput.test( this.type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val, i ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
	jQuery.fn[ o ] = function( f ){
		return this.on( o, f );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	};
});

jQuery.extend({

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		if ( settings ) {
			// Building a settings object
			ajaxExtend( target, jQuery.ajaxSettings );
		} else {
			// Extending ajaxSettings
			settings = target;
			target = jQuery.ajaxSettings;
		}
		ajaxExtend( target, settings );
		return target;
	},

	ajaxSettings: {
		url: ajaxLocation,
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		traditional: false,
		headers: {},
		*/

		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": allTypes
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// List of data converters
		// 1) key format is "source_type destination_type" (a single space in-between)
		// 2) the catchall symbol "*" can be used for source_type
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			context: true,
			url: true
		}
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
						jQuery( callbackContext ) : jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// ifModified key
			ifModifiedKey,
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// Response headers
			responseHeadersString,
			responseHeaders,
			// transport
			transport,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// The jqXHR state
			state = 0,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( !state ) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					statusText = statusText || "abort";
					if ( transport ) {
						transport.abort( statusText );
					}
					done( 0, statusText );
					return this;
				}
			};

		// Callback for when everything is done
		// It is defined here because jslint complains if it is declared
		// at the end of the function (which would be more logical and readable)
		function done( status, nativeStatusText, responses, headers ) {

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			var isSuccess,
				success,
				error,
				statusText = nativeStatusText,
				response = responses ? ajaxHandleResponses( s, jqXHR, responses ) : undefined,
				lastModified,
				etag;

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {

					if ( ( lastModified = jqXHR.getResponseHeader( "Last-Modified" ) ) ) {
						jQuery.lastModified[ ifModifiedKey ] = lastModified;
					}
					if ( ( etag = jqXHR.getResponseHeader( "Etag" ) ) ) {
						jQuery.etag[ ifModifiedKey ] = etag;
					}
				}

				// If not modified
				if ( status === 304 ) {

					statusText = "notmodified";
					isSuccess = true;

				// If we have data
				} else {

					try {
						success = ajaxConvert( s, response );
						statusText = "success";
						isSuccess = true;
					} catch(e) {
						// We have a parsererror
						statusText = "parsererror";
						error = e;
					}
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( !statusText || status ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = "" + ( nativeStatusText || statusText );

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
						[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		// Attach deferreds
		deferred.promise( jqXHR );
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		jqXHR.complete = completeDeferred.add;

		// Status-dependent callbacks
		jqXHR.statusCode = function( map ) {
			if ( map ) {
				var tmp;
				if ( state < 2 ) {
					for ( tmp in map ) {
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
					}
				} else {
					tmp = map[ jqXHR.status ];
					jqXHR.then( tmp, tmp );
				}
			}
			return this;
		};

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// We also use the url parameter if available
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( rspacesAjax );

		// Determine if a cross-domain request is in order
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] != ajaxLocParts[ 1 ] || parts[ 2 ] != ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return false;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Get ifModifiedKey before adding the anti-cache parameter
			ifModifiedKey = s.url;

			// Add anti-cache in url if needed
			if ( s.cache === false ) {

				var ts = jQuery.now(),
					// try replacing _= if it is there
					ret = s.url.replace( rts, "$1_=" + ts );

				// if nothing was replaced, add timestamp to the end
				s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			ifModifiedKey = ifModifiedKey || s.url;
			if ( jQuery.lastModified[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
			}
			if ( jQuery.etag[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
			}
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already
				jqXHR.abort();
				return false;

		}

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout( function(){
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch (e) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		return jqXHR;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a, traditional ) {
		var s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : value;
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( var prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	}
});

function buildParams( prefix, obj, traditional, add ) {
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// If array item is non-scalar (array or object), encode its
				// numeric index to resolve deserialization ambiguity issues.
				// Note that rack (as of 1.0.0) can't currently deserialize
				// nested arrays properly, and attempting to do so may cause
				// a server error. Possible fixes are to modify rack's
				// deserialization algorithm or to provide an option or flag
				// to force array serialization to be shallow.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( var name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// This is still on the jQuery object... for now
// Want to move this to jQuery.ajax some day
jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields,
		ct,
		type,
		finalDataType,
		firstDataType;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	var dataTypes = s.dataTypes,
		converters = {},
		i,
		key,
		length = dataTypes.length,
		tmp,
		// Current and previous dataTypes
		current = dataTypes[ 0 ],
		prev,
		// Conversion expression
		conversion,
		// Conversion function
		conv,
		// Conversion functions (transitive conversion)
		conv1,
		conv2;

	// For each dataType in the chain
	for ( i = 1; i < length; i++ ) {

		// Create converters map
		// with lowercased keys
		if ( i === 1 ) {
			for ( key in s.converters ) {
				if ( typeof key === "string" ) {
					converters[ key.toLowerCase() ] = s.converters[ key ];
				}
			}
		}

		// Get the dataTypes
		prev = current;
		current = dataTypes[ i ];

		// If current is auto dataType, update it to prev
		if ( current === "*" ) {
			current = prev;
		// If no auto and dataTypes are actually different
		} else if ( prev !== "*" && prev !== current ) {

			// Get the converter
			conversion = prev + " " + current;
			conv = converters[ conversion ] || converters[ "* " + current ];

			// If there is no direct converter, search transitively
			if ( !conv ) {
				conv2 = undefined;
				for ( conv1 in converters ) {
					tmp = conv1.split( " " );
					if ( tmp[ 0 ] === prev || tmp[ 0 ] === "*" ) {
						conv2 = converters[ tmp[1] + " " + current ];
						if ( conv2 ) {
							conv1 = converters[ conv1 ];
							if ( conv1 === true ) {
								conv = conv2;
							} else if ( conv2 === true ) {
								conv = conv1;
							}
							break;
						}
					}
				}
			}
			// If we found no converter, dispatch an error
			if ( !( conv || conv2 ) ) {
				jQuery.error( "No conversion from " + conversion.replace(" "," to ") );
			}
			// If found converter is not an equivalence
			if ( conv !== true ) {
				// Convert with 1 or 2 converters accordingly
				response = conv ? conv( response ) : conv2( conv1(response) );
			}
		}
	}
	return response;
}




var jsc = jQuery.now(),
	jsre = /(\=)\?(&|$)|\?\?/i;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		return jQuery.expando + "_" + ( jsc++ );
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var inspectData = ( typeof s.data === "string" ) && /^application\/x\-www\-form\-urlencoded/.test( s.contentType );

	if ( s.dataTypes[ 0 ] === "jsonp" ||
		s.jsonp !== false && ( jsre.test( s.url ) ||
				inspectData && jsre.test( s.data ) ) ) {

		var responseContainer,
			jsonpCallback = s.jsonpCallback =
				jQuery.isFunction( s.jsonpCallback ) ? s.jsonpCallback() : s.jsonpCallback,
			previous = window[ jsonpCallback ],
			url = s.url,
			data = s.data,
			replace = "$1" + jsonpCallback + "$2";

		if ( s.jsonp !== false ) {
			url = url.replace( jsre, replace );
			if ( s.url === url ) {
				if ( inspectData ) {
					data = data.replace( jsre, replace );
				}
				if ( s.data === data ) {
					// Add callback manually
					url += (/\?/.test( url ) ? "&" : "?") + s.jsonp + "=" + jsonpCallback;
				}
			}
		}

		s.url = url;
		s.data = data;

		// Install callback
		window[ jsonpCallback ] = function( response ) {
			responseContainer = [ response ];
		};

		// Clean-up function
		jqXHR.always(function() {
			// Set callback back to previous value
			window[ jsonpCallback ] = previous;
			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( previous ) ) {
				window[ jsonpCallback ]( responseContainer[ 0 ] );
			}
		});

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( jsonpCallback + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Delegate to script
		return "script";
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /javascript|ecmascript/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = "async";

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}

						// Dereference the script
						script = undefined;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};
				// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
				// This arises when a base node is used (#2709 and #4378).
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( 0, 1 );
				}
			}
		};
	}
});




var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function() {
		// Abort all pending requests
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( 0, 1 );
		}
	} : false,
	xhrId = 0,
	xhrCallbacks;

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
(function( xhr ) {
	jQuery.extend( jQuery.support, {
		ajax: !!xhr,
		cors: !!xhr && ( "withCredentials" in xhr )
	});
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var xhr = s.xhr(),
						handle,
						i;

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( _ ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {

						var status,
							statusText,
							responseHeaders,
							responses,
							xml;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occured
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();
									responses = {};
									xml = xhr.responseXML;

									// Construct response list
									if ( xml && xml.documentElement /* #4958 */ ) {
										responses.xml = xml;
									}

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									try {
										responses.text = xhr.responseText;
									} catch( _ ) {
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					// if we're in sync mode or it's in cache
					// and has been retrieved directly (IE6 & IE7)
					// we need to manually fire the callback
					if ( !s.async || xhr.readyState === 4 ) {
						callback();
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback(0,1);
					}
				}
			};
		}
	});
}




var elemdisplay = {},
	iframe, iframeDoc,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	],
	fxNow;

jQuery.fn.extend({
	show: function( speed, easing, callback ) {
		var elem, display;

		if ( speed || speed === 0 ) {
			return this.animate( genFx("show", 3), speed, easing, callback );

		} else {
			for ( var i = 0, j = this.length; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if ( !jQuery._data(elem, "olddisplay") && display === "none" ) {
						display = elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if ( (display === "" && jQuery.css(elem, "display") === "none") ||
						!jQuery.contains( elem.ownerDocument.documentElement, elem ) ) {
						jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					if ( display === "" || display === "none" ) {
						elem.style.display = jQuery._data( elem, "olddisplay" ) || "";
					}
				}
			}

			return this;
		}
	},

	hide: function( speed, easing, callback ) {
		if ( speed || speed === 0 ) {
			return this.animate( genFx("hide", 3), speed, easing, callback);

		} else {
			var elem, display,
				i = 0,
				j = this.length;

			for ( ; i < j; i++ ) {
				elem = this[i];
				if ( elem.style ) {
					display = jQuery.css( elem, "display" );

					if ( display !== "none" && !jQuery._data( elem, "olddisplay" ) ) {
						jQuery._data( elem, "olddisplay", display );
					}
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				if ( this[i].style ) {
					this[i].style.display = "none";
				}
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2, callback ) {
		var bool = typeof fn === "boolean";

		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );

		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});

		} else {
			this.animate(genFx("toggle", 3), fn, fn2, callback);
		}

		return this;
	},

	fadeTo: function( speed, to, easing, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, easing, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed( speed, easing, callback );

		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete, [ false ] );
		}

		// Do not change referenced properties as per-property easing will be lost
		prop = jQuery.extend( {}, prop );

		function doAnimation() {
			// XXX 'this' does not always have a nodeName when running the
			// test suite

			if ( optall.queue === false ) {
				jQuery._mark( this );
			}

			var opt = jQuery.extend( {}, optall ),
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				name, val, p, e, hooks, replace,
				parts, start, end, unit,
				method;

			// will store per property easing and be used to determine when an animation is complete
			opt.animatedProperties = {};

			// first pass over propertys to expand / normalize
			for ( p in prop ) {
				name = jQuery.camelCase( p );
				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
				}

				if ( ( hooks = jQuery.cssHooks[ name ] ) && "expand" in hooks ) {
					replace = hooks.expand( prop[ name ] );
					delete prop[ name ];

					// not quite $.extend, this wont overwrite keys already present.
					// also - reusing 'p' from above because we have the correct "name"
					for ( p in replace ) {
						if ( ! ( p in prop ) ) {
							prop[ p ] = replace[ p ];
						}
					}
				}
			}

			for ( name in prop ) {
				val = prop[ name ];
				// easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
				if ( jQuery.isArray( val ) ) {
					opt.animatedProperties[ name ] = val[ 1 ];
					val = prop[ name ] = val[ 0 ];
				} else {
					opt.animatedProperties[ name ] = opt.specialEasing && opt.specialEasing[ name ] || opt.easing || 'swing';
				}

				if ( val === "hide" && hidden || val === "show" && !hidden ) {
					return opt.complete.call( this );
				}

				if ( isElement && ( name === "height" || name === "width" ) ) {
					// Make sure that nothing sneaks out
					// Record all 3 overflow attributes because IE does not
					// change the overflow attribute when overflowX and
					// overflowY are set to the same value
					opt.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ];

					// Set display property to inline-block for height/width
					// animations on inline elements that are having width/height animated
					if ( jQuery.css( this, "display" ) === "inline" &&
							jQuery.css( this, "float" ) === "none" ) {

						// inline-level elements accept inline-block;
						// block-level elements need to be inline with layout
						if ( !jQuery.support.inlineBlockNeedsLayout || defaultDisplay( this.nodeName ) === "inline" ) {
							this.style.display = "inline-block";

						} else {
							this.style.zoom = 1;
						}
					}
				}
			}

			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}

			for ( p in prop ) {
				e = new jQuery.fx( this, opt, p );
				val = prop[ p ];

				if ( rfxtypes.test( val ) ) {

					// Tracks whether to show or hide based on private
					// data attached to the element
					method = jQuery._data( this, "toggle" + p ) || ( val === "toggle" ? hidden ? "show" : "hide" : 0 );
					if ( method ) {
						jQuery._data( this, "toggle" + p, method === "show" ? "hide" : "show" );
						e[ method ]();
					} else {
						e[ val ]();
					}

				} else {
					parts = rfxnum.exec( val );
					start = e.cur();

					if ( parts ) {
						end = parseFloat( parts[2] );
						unit = parts[3] || ( jQuery.cssNumber[ p ] ? "" : "px" );

						// We need to compute starting value
						if ( unit !== "px" ) {
							jQuery.style( this, p, (end || 1) + unit);
							start = ( (end || 1) / e.cur() ) * start;
							jQuery.style( this, p, start + unit);
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] ) {
							end = ( (parts[ 1 ] === "-=" ? -1 : 1) * end ) + start;
						}

						e.custom( start, end, unit );

					} else {
						e.custom( start, val, "" );
					}
				}
			}

			// For JS strict compliance
			return true;
		}

		return optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},

	stop: function( type, clearQueue, gotoEnd ) {
		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var index,
				hadTimers = false,
				timers = jQuery.timers,
				data = jQuery._data( this );

			// clear marker counters if we know they won't be
			if ( !gotoEnd ) {
				jQuery._unmark( true, this );
			}

			function stopQueue( elem, data, index ) {
				var hooks = data[ index ];
				jQuery.removeData( elem, index, true );
				hooks.stop( gotoEnd );
			}

			if ( type == null ) {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && index.indexOf(".run") === index.length - 4 ) {
						stopQueue( this, data, index );
					}
				}
			} else if ( data[ index = type + ".run" ] && data[ index ].stop ){
				stopQueue( this, data, index );
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					if ( gotoEnd ) {

						// force the next step to be the last
						timers[ index ]( true );
					} else {
						timers[ index ].saveState();
					}
					hadTimers = true;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( !( gotoEnd && hadTimers ) ) {
				jQuery.dequeue( this, type );
			}
		});
	}

});

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout( clearFxNow, 0 );
	return ( fxNow = jQuery.now() );
}

function clearFxNow() {
	fxNow = undefined;
}

// Generate parameters to create a standard animation
function genFx( type, num ) {
	var obj = {};

	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice( 0, num )), function() {
		obj[ this ] = type;
	});

	return obj;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx( "show", 1 ),
	slideUp: genFx( "hide", 1 ),
	slideToggle: genFx( "toggle", 1 ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function( noUnmark ) {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			} else if ( noUnmark !== false ) {
				jQuery._unmark( this );
			}
		};

		return opt;
	},

	easing: {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return ( -Math.cos( p*Math.PI ) / 2 ) + 0.5;
		}
	},

	timers: [],

	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		options.orig = options.orig || {};
	}

});

jQuery.fx.prototype = {
	// Simple function for setting a style value
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		( jQuery.fx.step[ this.prop ] || jQuery.fx.step._default )( this );
	},

	// Get the current size
	cur: function() {
		if ( this.elem[ this.prop ] != null && (!this.elem.style || this.elem.style[ this.prop ] == null) ) {
			return this.elem[ this.prop ];
		}

		var parsed,
			r = jQuery.css( this.elem, this.prop );
		// Empty strings, null, undefined and "auto" are converted to 0,
		// complex values such as "rotate(1rad)" are returned as is,
		// simple values such as "10px" are parsed to Float.
		return isNaN( parsed = parseFloat( r ) ) ? !r || r === "auto" ? 0 : r : parsed;
	},

	// Start an animation from one number to another
	custom: function( from, to, unit ) {
		var self = this,
			fx = jQuery.fx;

		this.startTime = fxNow || createFxNow();
		this.end = to;
		this.now = this.start = from;
		this.pos = this.state = 0;
		this.unit = unit || this.unit || ( jQuery.cssNumber[ this.prop ] ? "" : "px" );

		function t( gotoEnd ) {
			return self.step( gotoEnd );
		}

		t.queue = this.options.queue;
		t.elem = this.elem;
		t.saveState = function() {
			if ( jQuery._data( self.elem, "fxshow" + self.prop ) === undefined ) {
				if ( self.options.hide ) {
					jQuery._data( self.elem, "fxshow" + self.prop, self.start );
				} else if ( self.options.show ) {
					jQuery._data( self.elem, "fxshow" + self.prop, self.end );
				}
			}
		};

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval( fx.tick, fx.interval );
		}
	},

	// Simple 'show' function
	show: function() {
		var dataShow = jQuery._data( this.elem, "fxshow" + this.prop );

		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = dataShow || jQuery.style( this.elem, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any flash of content
		if ( dataShow !== undefined ) {
			// This show is picking up where a previous hide or show left off
			this.custom( this.cur(), dataShow );
		} else {
			this.custom( this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur() );
		}

		// Start by showing the element
		jQuery( this.elem ).show();
	},

	// Simple 'hide' function
	hide: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = jQuery._data( this.elem, "fxshow" + this.prop ) || jQuery.style( this.elem, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom( this.cur(), 0 );
	},

	// Each step of an animation
	step: function( gotoEnd ) {
		var p, n, complete,
			t = fxNow || createFxNow(),
			done = true,
			elem = this.elem,
			options = this.options;

		if ( gotoEnd || t >= options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			options.animatedProperties[ this.prop ] = true;

			for ( p in options.animatedProperties ) {
				if ( options.animatedProperties[ p ] !== true ) {
					done = false;
				}
			}

			if ( done ) {
				// Reset the overflow
				if ( options.overflow != null && !jQuery.support.shrinkWrapBlocks ) {

					jQuery.each( [ "", "X", "Y" ], function( index, value ) {
						elem.style[ "overflow" + value ] = options.overflow[ index ];
					});
				}

				// Hide the element if the "hide" operation was done
				if ( options.hide ) {
					jQuery( elem ).hide();
				}

				// Reset the properties, if the item has been hidden or shown
				if ( options.hide || options.show ) {
					for ( p in options.animatedProperties ) {
						jQuery.style( elem, p, options.orig[ p ] );
						jQuery.removeData( elem, "fxshow" + p, true );
						// Toggle data is no longer needed
						jQuery.removeData( elem, "toggle" + p, true );
					}
				}

				// Execute the complete function
				// in the event that the complete function throws an exception
				// we must ensure it won't be called twice. #5684

				complete = options.complete;
				if ( complete ) {

					options.complete = false;
					complete.call( elem );
				}
			}

			return false;

		} else {
			// classical easing cannot be used with an Infinity duration
			if ( options.duration == Infinity ) {
				this.now = t;
			} else {
				n = t - this.startTime;
				this.state = n / options.duration;

				// Perform the easing function, defaults to swing
				this.pos = jQuery.easing[ options.animatedProperties[this.prop] ]( this.state, n, 0, 1, options.duration );
				this.now = this.start + ( (this.end - this.start) * this.pos );
			}
			// Perform the next step of the animation
			this.update();
		}

		return true;
	}
};

jQuery.extend( jQuery.fx, {
	tick: function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},

	interval: 13,

	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},

	speeds: {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	},

	step: {
		opacity: function( fx ) {
			jQuery.style( fx.elem, "opacity", fx.now );
		},

		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});

// Ensure props that can't be negative don't go there on undershoot easing
jQuery.each( fxAttrs.concat.apply( [], fxAttrs ), function( i, prop ) {
	// exclude marginTop, marginLeft, marginBottom and marginRight from this list
	if ( prop.indexOf( "margin" ) ) {
		jQuery.fx.step[ prop ] = function( fx ) {
			jQuery.style( fx.elem, prop, Math.max(0, fx.now) + fx.unit );
		};
	}
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

// Try to restore the default display value of an element
function defaultDisplay( nodeName ) {

	if ( !elemdisplay[ nodeName ] ) {

		var body = document.body,
			elem = jQuery( "<" + nodeName + ">" ).appendTo( body ),
			display = elem.css( "display" );
		elem.remove();

		// If the simple way fails,
		// get element's real default display by attaching it to a temp iframe
		if ( display === "none" || display === "" ) {
			// No iframe to use yet, so create it
			if ( !iframe ) {
				iframe = document.createElement( "iframe" );
				iframe.frameBorder = iframe.width = iframe.height = 0;
			}

			body.appendChild( iframe );

			// Create a cacheable copy of the iframe document on first call.
			// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
			// document to it; WebKit & Firefox won't allow reusing the iframe document.
			if ( !iframeDoc || !iframe.createElement ) {
				iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
				iframeDoc.write( ( jQuery.support.boxModel ? "<!doctype html>" : "" ) + "<html><body>" );
				iframeDoc.close();
			}

			elem = iframeDoc.createElement( nodeName );

			iframeDoc.body.appendChild( elem );

			display = jQuery.css( elem, "display" );
			body.removeChild( iframe );
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return elemdisplay[ nodeName ];
}




var getOffset,
	rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

if ( "getBoundingClientRect" in document.documentElement ) {
	getOffset = function( elem, doc, docElem, box ) {
		try {
			box = elem.getBoundingClientRect();
		} catch(e) {}

		// Make sure we're not dealing with a disconnected DOM node
		if ( !box || !jQuery.contains( docElem, elem ) ) {
			return box ? { top: box.top, left: box.left } : { top: 0, left: 0 };
		}

		var body = doc.body,
			win = getWindow( doc ),
			clientTop  = docElem.clientTop  || body.clientTop  || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop  = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop,
			scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
			top  = box.top  + scrollTop  - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: top, left: left };
	};

} else {
	getOffset = function( elem, doc, docElem ) {
		var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}

			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;

			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;

				if ( jQuery.support.doesNotAddBorder && !(jQuery.support.doesAddBorderForTableAndCells && rtable.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}

				prevOffsetParent = offsetParent;
				offsetParent = elem.offsetParent;
			}

			if ( jQuery.support.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}

			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}

		if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}

		return { top: top, left: left };
	};
}

jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var elem = this[0],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return null;
	}

	if ( elem === doc.body ) {
		return jQuery.offset.bodyOffset( elem );
	}

	return getOffset( elem, doc, doc.documentElement );
};

jQuery.offset = {

	bodyOffset: function( body ) {
		var top = body.offsetTop,
			left = body.offsetLeft;

		if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
			left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
		}

		return { top: top, left: left };
	},

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[0] ) {
			return null;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// Subtract element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
		offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
		parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					jQuery.support.boxModel && win.document.documentElement[ method ] ||
						win.document.body[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					 top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}




// Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	var clientProp = "client" + name,
		scrollProp = "scroll" + name,
		offsetProp = "offset" + name;

	// innerHeight and innerWidth
	jQuery.fn[ "inner" + name ] = function() {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, "padding" ) ) :
			this[ type ]() :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn[ "outer" + name ] = function( margin ) {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, margin ? "margin" : "border" ) ) :
			this[ type ]() :
			null;
	};

	jQuery.fn[ type ] = function( value ) {
		return jQuery.access( this, function( elem, type, value ) {
			var doc, docElemProp, orig, ret;

			if ( jQuery.isWindow( elem ) ) {
				// 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
				doc = elem.document;
				docElemProp = doc.documentElement[ clientProp ];
				return jQuery.support.boxModel && docElemProp ||
					doc.body && doc.body[ clientProp ] || docElemProp;
			}

			// Get document width or height
			if ( elem.nodeType === 9 ) {
				// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
				doc = elem.documentElement;

				// when a window > document, IE6 reports a offset[Width/Height] > client[Width/Height]
				// so we can't use max, as it'll choose the incorrect offset[Width/Height]
				// instead we use the correct client[Width/Height]
				// support:IE6
				if ( doc[ clientProp ] >= doc[ scrollProp ] ) {
					return doc[ clientProp ];
				}

				return Math.max(
					elem.body[ scrollProp ], doc[ scrollProp ],
					elem.body[ offsetProp ], doc[ offsetProp ]
				);
			}

			// Get width or height on the element
			if ( value === undefined ) {
				orig = jQuery.css( elem, type );
				ret = parseFloat( orig );
				return jQuery.isNumeric( ret ) ? ret : orig;
			}

			// Set the width or height on the element
			jQuery( elem ).css( type, value );
		}, type, value, arguments.length, null );
	};
});




// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}



})( window );
/*!
 * jQuery Migrate - v1.4.1 - 2016-05-19
 * Copyright jQuery Foundation and other contributors
 */
(function( jQuery, window, undefined ) {
// See http://bugs.jquery.com/ticket/13335
// "use strict";


jQuery.migrateVersion = "1.4.1";


var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to true to prevent console output; migrateWarnings still maintained
// jQuery.migrateMute = false;

// Show a message on the console so devs know we're active
if ( window.console && window.console.log ) {
	window.console.log( "JQMIGRATE: Migrate is installed" +
		( jQuery.migrateMute ? "" : " with logging active" ) +
		", version " + jQuery.migrateVersion );
}

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
	jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
	warnedAbout = {};
	jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg) {
	var console = window.console;
	if ( !warnedAbout[ msg ] ) {
		warnedAbout[ msg ] = true;
		jQuery.migrateWarnings.push( msg );
		if ( console && console.warn && !jQuery.migrateMute ) {
			console.warn( "JQMIGRATE: " + msg );
			if ( jQuery.migrateTrace && console.trace ) {
				console.trace();
			}
		}
	}
}

function migrateWarnProp( obj, prop, value, msg ) {
	if ( Object.defineProperty ) {
		// On ES5 browsers (non-oldIE), warn if the code tries to get prop;
		// allow property to be overwritten in case some other plugin wants it
		try {
			Object.defineProperty( obj, prop, {
				configurable: true,
				enumerable: true,
				get: function() {
					migrateWarn( msg );
					return value;
				},
				set: function( newValue ) {
					migrateWarn( msg );
					value = newValue;
				}
			});
			return;
		} catch( err ) {
			// IE8 is a dope about Object.defineProperty, can't warn there
		}
	}

	// Non-ES5 (or broken) browser; just set the property
	jQuery._definePropertyBroken = true;
	obj[ prop ] = value;
}

if ( document.compatMode === "BackCompat" ) {
	// jQuery has never supported or tested Quirks Mode
	migrateWarn( "jQuery is not compatible with Quirks Mode" );
}


var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
	oldAttr = jQuery.attr,
	valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
		function() { return null; },
	valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
		function() { return undefined; },
	rnoType = /^(?:input|button)$/i,
	rnoAttrNodeType = /^[238]$/,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	ruseDefault = /^(?:checked|selected)$/i;

// jQuery.attrFn
migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );

jQuery.attr = function( elem, name, value, pass ) {
	var lowerName = name.toLowerCase(),
		nType = elem && elem.nodeType;

	if ( pass ) {
		// Since pass is used internally, we only warn for new jQuery
		// versions where there isn't a pass arg in the formal params
		if ( oldAttr.length < 4 ) {
			migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
		}
		if ( elem && !rnoAttrNodeType.test( nType ) &&
			(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
			return jQuery( elem )[ name ]( value );
		}
	}

	// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
	// for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
	if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
		migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
	}

	// Restore boolHook for boolean property/attribute synchronization
	if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
		jQuery.attrHooks[ lowerName ] = {
			get: function( elem, name ) {
				// Align boolean attributes with corresponding properties
				// Fall back to attribute presence where some booleans are not supported
				var attrNode,
					property = jQuery.prop( elem, name );
				return property === true || typeof property !== "boolean" &&
					( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?

					name.toLowerCase() :
					undefined;
			},
			set: function( elem, value, name ) {
				var propName;
				if ( value === false ) {
					// Remove boolean attributes when set to false
					jQuery.removeAttr( elem, name );
				} else {
					// value is true since we know at this point it's type boolean and not false
					// Set boolean attributes to the same name and set the DOM property
					propName = jQuery.propFix[ name ] || name;
					if ( propName in elem ) {
						// Only set the IDL specifically if it already exists on the element
						elem[ propName ] = true;
					}

					elem.setAttribute( name, name.toLowerCase() );
				}
				return name;
			}
		};

		// Warn only for attributes that can remain distinct from their properties post-1.9
		if ( ruseDefault.test( lowerName ) ) {
			migrateWarn( "jQuery.fn.attr('" + lowerName + "') might use property instead of attribute" );
		}
	}

	return oldAttr.call( jQuery, elem, name, value );
};

// attrHooks: value
jQuery.attrHooks.value = {
	get: function( elem, name ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrGet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value') no longer gets properties");
		}
		return name in elem ?
			elem.value :
			null;
	},
	set: function( elem, value ) {
		var nodeName = ( elem.nodeName || "" ).toLowerCase();
		if ( nodeName === "button" ) {
			return valueAttrSet.apply( this, arguments );
		}
		if ( nodeName !== "input" && nodeName !== "option" ) {
			migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
		}
		// Does not return so that setAttribute is also used
		elem.value = value;
	}
};


var matched, browser,
	oldInit = jQuery.fn.init,
	oldFind = jQuery.find,
	oldParseJSON = jQuery.parseJSON,
	rspaceAngle = /^\s*</,
	rattrHashTest = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
	rattrHashGlob = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
	// Note: XSS check is done below after string is trimmed
	rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;

// $(html) "looks like html" rule change
jQuery.fn.init = function( selector, context, rootjQuery ) {
	var match, ret;

	if ( selector && typeof selector === "string" ) {
		if ( !jQuery.isPlainObject( context ) &&
				(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {

			// This is an HTML string according to the "old" rules; is it still?
			if ( !rspaceAngle.test( selector ) ) {
				migrateWarn("$(html) HTML strings must start with '<' character");
			}
			if ( match[ 3 ] ) {
				migrateWarn("$(html) HTML text after last tag is ignored");
			}

			// Consistently reject any HTML-like string starting with a hash (gh-9521)
			// Note that this may break jQuery 1.6.x code that otherwise would work.
			if ( match[ 0 ].charAt( 0 ) === "#" ) {
				migrateWarn("HTML string cannot start with a '#' character");
				jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
			}

			// Now process using loose rules; let pre-1.8 play too
			// Is this a jQuery context? parseHTML expects a DOM element (#178)
			if ( context && context.context && context.context.nodeType ) {
				context = context.context;
			}

			if ( jQuery.parseHTML ) {
				return oldInit.call( this,
						jQuery.parseHTML( match[ 2 ], context && context.ownerDocument ||
							context || document, true ), context, rootjQuery );
			}
		}
	}

	ret = oldInit.apply( this, arguments );

	// Fill in selector and context properties so .live() works
	if ( selector && selector.selector !== undefined ) {
		// A jQuery object, copy its properties
		ret.selector = selector.selector;
		ret.context = selector.context;

	} else {
		ret.selector = typeof selector === "string" ? selector : "";
		if ( selector ) {
			ret.context = selector.nodeType? selector : context || document;
		}
	}

	return ret;
};
jQuery.fn.init.prototype = jQuery.fn;

jQuery.find = function( selector ) {
	var args = Array.prototype.slice.call( arguments );

	// Support: PhantomJS 1.x
	// String#match fails to match when used with a //g RegExp, only on some strings
	if ( typeof selector === "string" && rattrHashTest.test( selector ) ) {

		// The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0
		// First see if qS thinks it's a valid selector, if so avoid a false positive
		try {
			document.querySelector( selector );
		} catch ( err1 ) {

			// Didn't *look* valid to qSA, warn and try quoting what we think is the value
			selector = selector.replace( rattrHashGlob, function( _, attr, op, value ) {
				return "[" + attr + op + "\"" + value + "\"]";
			} );

			// If the regexp *may* have created an invalid selector, don't update it
			// Note that there may be false alarms if selector uses jQuery extensions
			try {
				document.querySelector( selector );
				migrateWarn( "Attribute selector with '#' must be quoted: " + args[ 0 ] );
				args[ 0 ] = selector;
			} catch ( err2 ) {
				migrateWarn( "Attribute selector with '#' was not fixed: " + args[ 0 ] );
			}
		}
	}

	return oldFind.apply( this, args );
};

// Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)
var findProp;
for ( findProp in oldFind ) {
	if ( Object.prototype.hasOwnProperty.call( oldFind, findProp ) ) {
		jQuery.find[ findProp ] = oldFind[ findProp ];
	}
}

// Let $.parseJSON(falsy_value) return null
jQuery.parseJSON = function( json ) {
	if ( !json ) {
		migrateWarn("jQuery.parseJSON requires a valid JSON string");
		return null;
	}
	return oldParseJSON.apply( this, arguments );
};

jQuery.uaMatch = function( ua ) {
	ua = ua.toLowerCase();

	var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		[];

	return {
		browser: match[ 1 ] || "",
		version: match[ 2 ] || "0"
	};
};

// Don't clobber any existing jQuery.browser in case it's different
if ( !jQuery.browser ) {
	matched = jQuery.uaMatch( navigator.userAgent );
	browser = {};

	if ( matched.browser ) {
		browser[ matched.browser ] = true;
		browser.version = matched.version;
	}

	// Chrome is Webkit, but Webkit is also Safari.
	if ( browser.chrome ) {
		browser.webkit = true;
	} else if ( browser.webkit ) {
		browser.safari = true;
	}

	jQuery.browser = browser;
}

// Warn if the code tries to get jQuery.browser
migrateWarnProp( jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated" );

// jQuery.boxModel deprecated in 1.3, jQuery.support.boxModel deprecated in 1.7
jQuery.boxModel = jQuery.support.boxModel = (document.compatMode === "CSS1Compat");
migrateWarnProp( jQuery, "boxModel", jQuery.boxModel, "jQuery.boxModel is deprecated" );
migrateWarnProp( jQuery.support, "boxModel", jQuery.support.boxModel, "jQuery.support.boxModel is deprecated" );

jQuery.sub = function() {
	function jQuerySub( selector, context ) {
		return new jQuerySub.fn.init( selector, context );
	}
	jQuery.extend( true, jQuerySub, this );
	jQuerySub.superclass = this;
	jQuerySub.fn = jQuerySub.prototype = this();
	jQuerySub.fn.constructor = jQuerySub;
	jQuerySub.sub = this.sub;
	jQuerySub.fn.init = function init( selector, context ) {
		var instance = jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		return instance instanceof jQuerySub ?
			instance :
			jQuerySub( instance );
	};
	jQuerySub.fn.init.prototype = jQuerySub.fn;
	var rootjQuerySub = jQuerySub(document);
	migrateWarn( "jQuery.sub() is deprecated" );
	return jQuerySub;
};

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	migrateWarn( "jQuery.fn.size() is deprecated; use the .length property" );
	return this.length;
};


var internalSwapCall = false;

// If this version of jQuery has .swap(), don't false-alarm on internal uses
if ( jQuery.swap ) {
	jQuery.each( [ "height", "width", "reliableMarginRight" ], function( _, name ) {
		var oldHook = jQuery.cssHooks[ name ] && jQuery.cssHooks[ name ].get;

		if ( oldHook ) {
			jQuery.cssHooks[ name ].get = function() {
				var ret;

				internalSwapCall = true;
				ret = oldHook.apply( this, arguments );
				internalSwapCall = false;
				return ret;
			};
		}
	});
}

jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	if ( !internalSwapCall ) {
		migrateWarn( "jQuery.swap() is undocumented and deprecated" );
	}

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


// Ensure that $.ajax gets the new parseJSON defined in core.js
jQuery.ajaxSetup({
	converters: {
		"text json": jQuery.parseJSON
	}
});


var oldFnData = jQuery.fn.data;

jQuery.fn.data = function( name ) {
	var ret, evt,
		elem = this[0];

	// Handles 1.7 which has this behavior and 1.8 which doesn't
	if ( elem && name === "events" && arguments.length === 1 ) {
		ret = jQuery.data( elem, name );
		evt = jQuery._data( elem, name );
		if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
			migrateWarn("Use of jQuery.fn.data('events') is deprecated");
			return evt;
		}
	}
	return oldFnData.apply( this, arguments );
};


var rscriptType = /\/(java|ecma)script/i;

// Since jQuery.clean is used internally on older versions, we only shim if it's missing
if ( !jQuery.clean ) {
	jQuery.clean = function( elems, context, fragment, scripts ) {
		// Set context per 1.8 logic
		context = context || document;
		context = !context.nodeType && context[0] || context;
		context = context.ownerDocument || context;

		migrateWarn("jQuery.clean() is deprecated");

		var i, elem, handleScript, jsTags,
			ret = [];

		jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );

		// Complex logic lifted directly from jQuery 1.8
		if ( fragment ) {
			// Special handling of each script element
			handleScript = function( elem ) {
				// Check if we consider it executable
				if ( !elem.type || rscriptType.test( elem.type ) ) {
					// Detach the script and store it in the scripts array (if provided) or the fragment
					// Return truthy to indicate that it has been handled
					return scripts ?
						scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
						fragment.appendChild( elem );
				}
			};

			for ( i = 0; (elem = ret[i]) != null; i++ ) {
				// Check if we're done after handling an executable script
				if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
					// Append to fragment and handle embedded scripts
					fragment.appendChild( elem );
					if ( typeof elem.getElementsByTagName !== "undefined" ) {
						// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
						jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );

						// Splice the scripts into ret after their former ancestor and advance our index beyond them
						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
						i += jsTags.length;
					}
				}
			}
		}

		return ret;
	};
}

var eventAdd = jQuery.event.add,
	eventRemove = jQuery.event.remove,
	eventTrigger = jQuery.event.trigger,
	oldToggle = jQuery.fn.toggle,
	oldLive = jQuery.fn.live,
	oldDie = jQuery.fn.die,
	oldLoad = jQuery.fn.load,
	ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
	rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
	rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
	hoverHack = function( events ) {
		if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
			return events;
		}
		if ( rhoverHack.test( events ) ) {
			migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
		}
		return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

// Event props removed in 1.9, put them back if needed; no practical way to warn them
if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
	jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
}

// Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
if ( jQuery.event.dispatch ) {
	migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
}

// Support for 'hover' pseudo-event and ajax event warnings
jQuery.event.add = function( elem, types, handler, data, selector ){
	if ( elem !== document && rajaxEvent.test( types ) ) {
		migrateWarn( "AJAX events should be attached to document: " + types );
	}
	eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
};
jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
	eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
};

jQuery.each( [ "load", "unload", "error" ], function( _, name ) {

	jQuery.fn[ name ] = function() {
		var args = Array.prototype.slice.call( arguments, 0 );

		// If this is an ajax load() the first arg should be the string URL;
		// technically this could also be the "Anything" arg of the event .load()
		// which just goes to show why this dumb signature has been deprecated!
		// jQuery custom builds that exclude the Ajax module justifiably die here.
		if ( name === "load" && typeof args[ 0 ] === "string" ) {
			return oldLoad.apply( this, args );
		}

		migrateWarn( "jQuery.fn." + name + "() is deprecated" );

		args.splice( 0, 0, name );
		if ( arguments.length ) {
			return this.bind.apply( this, args );
		}

		// Use .triggerHandler here because:
		// - load and unload events don't need to bubble, only applied to window or image
		// - error event should not bubble to window, although it does pre-1.7
		// See http://bugs.jquery.com/ticket/11820
		this.triggerHandler.apply( this, args );
		return this;
	};

});

jQuery.fn.toggle = function( fn, fn2 ) {

	// Don't mess with animation or css toggles
	if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
		return oldToggle.apply( this, arguments );
	}
	migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");

	// Save reference to arguments for access in closure
	var args = arguments,
		guid = fn.guid || jQuery.guid++,
		i = 0,
		toggler = function( event ) {
			// Figure out which function to execute
			var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ lastToggle ].apply( this, arguments ) || false;
		};

	// link all the functions, so any of them can unbind this click handler
	toggler.guid = guid;
	while ( i < args.length ) {
		args[ i++ ].guid = guid;
	}

	return this.click( toggler );
};

jQuery.fn.live = function( types, data, fn ) {
	migrateWarn("jQuery.fn.live() is deprecated");
	if ( oldLive ) {
		return oldLive.apply( this, arguments );
	}
	jQuery( this.context ).on( types, this.selector, data, fn );
	return this;
};

jQuery.fn.die = function( types, fn ) {
	migrateWarn("jQuery.fn.die() is deprecated");
	if ( oldDie ) {
		return oldDie.apply( this, arguments );
	}
	jQuery( this.context ).off( types, this.selector || "**", fn );
	return this;
};

// Turn global events into document-triggered events
jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
	if ( !elem && !rajaxEvent.test( event ) ) {
		migrateWarn( "Global events are undocumented and deprecated" );
	}
	return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
};
jQuery.each( ajaxEvents.split("|"),
	function( _, name ) {
		jQuery.event.special[ name ] = {
			setup: function() {
				var elem = this;

				// The document needs no shimming; must be !== for oldIE
				if ( elem !== document ) {
					jQuery.event.add( document, name + "." + jQuery.guid, function() {
						jQuery.event.trigger( name, Array.prototype.slice.call( arguments, 1 ), elem, true );
					});
					jQuery._data( this, name, jQuery.guid++ );
				}
				return false;
			},
			teardown: function() {
				if ( this !== document ) {
					jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
				}
				return false;
			}
		};
	}
);

jQuery.event.special.ready = {
	setup: function() {
		if ( this === document ) {
			migrateWarn( "'ready' event is deprecated" );
		}
	}
};

var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack,
	oldFnFind = jQuery.fn.find;

jQuery.fn.andSelf = function() {
	migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
	return oldSelf.apply( this, arguments );
};

jQuery.fn.find = function( selector ) {
	var ret = oldFnFind.apply( this, arguments );
	ret.context = this.context;
	ret.selector = this.selector ? this.selector + " " + selector : selector;
	return ret;
};


// jQuery 1.6 did not support Callbacks, do not warn there
if ( jQuery.Callbacks ) {

	var oldDeferred = jQuery.Deferred,
		tuples = [
			// action, add listener, callbacks, .then handlers, final state
			[ "resolve", "done", jQuery.Callbacks("once memory"),
				jQuery.Callbacks("once memory"), "resolved" ],
			[ "reject", "fail", jQuery.Callbacks("once memory"),
				jQuery.Callbacks("once memory"), "rejected" ],
			[ "notify", "progress", jQuery.Callbacks("memory"),
				jQuery.Callbacks("memory") ]
		];

	jQuery.Deferred = function( func ) {
		var deferred = oldDeferred(),
			promise = deferred.promise();

		deferred.pipe = promise.pipe = function( /* fnDone, fnFail, fnProgress */ ) {
			var fns = arguments;

			migrateWarn( "deferred.pipe() is deprecated" );

			return jQuery.Deferred(function( newDefer ) {
				jQuery.each( tuples, function( i, tuple ) {
					var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
					// deferred.done(function() { bind to newDefer or newDefer.resolve })
					// deferred.fail(function() { bind to newDefer or newDefer.reject })
					// deferred.progress(function() { bind to newDefer or newDefer.notify })
					deferred[ tuple[1] ](function() {
						var returned = fn && fn.apply( this, arguments );
						if ( returned && jQuery.isFunction( returned.promise ) ) {
							returned.promise()
								.done( newDefer.resolve )
								.fail( newDefer.reject )
								.progress( newDefer.notify );
						} else {
							newDefer[ tuple[ 0 ] + "With" ](
								this === promise ? newDefer.promise() : this,
								fn ? [ returned ] : arguments
							);
						}
					});
				});
				fns = null;
			}).promise();

		};

		deferred.isResolved = function() {
			migrateWarn( "deferred.isResolved is deprecated" );
			return deferred.state() === "resolved";
		};

		deferred.isRejected = function() {
			migrateWarn( "deferred.isRejected is deprecated" );
			return deferred.state() === "rejected";
		};

		if ( func ) {
			func.call( deferred, deferred );
		}

		return deferred;
	};

}

})( jQuery, window );
/*! JsRender v0.9.82 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
/*
 * Best-of-breed templating in browser or on Node.js.
 * Does not require jQuery, or HTML DOM
 * Integrates with JsViews (http://jsviews.com/#jsviews)
 *
 * Copyright 2016, Boris Moore
 * Released under the MIT License.
 */

//jshint -W018, -W041

(function(factory, global) {
	// global var is the this object, which is window when running in the usual browser environment
	var $ = global.jQuery;

	if (typeof exports === "object") { // CommonJS e.g. Browserify
		module.exports = $
			? factory(global, $)
			: function($) { // If no global jQuery, take optional jQuery passed as parameter: require('jsrender')(jQuery)
				if ($ && !$.fn) {
					throw "Provide jQuery or null";
				}
				return factory(global, $);
			};
	} else if (typeof define === "function" && define.amd) { // AMD script loader, e.g. RequireJS
		define(function() {
			return factory(global);
		});
	} else { // Browser using plain <script> tag
		factory(global, false);
	}
} (

// factory (for jsrender.js)
function(global, $) {
"use strict";

//========================== Top-level vars ==========================

// global var is the this object, which is window when running in the usual browser environment
var setGlobals = $ === false; // Only set globals if script block in browser (not AMD and not CommonJS)

$ = $ && $.fn ? $ : global.jQuery; // $ is jQuery passed in by CommonJS loader (Browserify), or global jQuery.

var versionNumber = "v0.9.82",
	jsvStoreName, rTag, rTmplString, topView, $views,	$expando,

//TODO	tmplFnsCache = {},
	$isFunction, $isArray, $templates, $converters, $helpers, $tags, $sub, $subSettings, $subSettingsAdvanced, $viewsSettings, delimOpenChar0, delimOpenChar1, delimCloseChar0, delimCloseChar1, linkChar, setting, baseOnError,

	rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
	//        not                               object     helper    view  viewProperty pathTokens      leafToken

	rParams = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//          lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                           prn2  space
	// (left paren? followed by (path? followed by operator) or (path followed by left paren?)) or comma or apos or quot or right paren or space

	isRenderCall,
	rNewLine = /[ \t]*(\r\n|\n|\r)/g,
	rUnescapeQuotes = /\\(['"])/g,
	rEscapeQuotes = /['"\\]/g, // Escape quotes and \ character
	rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
	rTestElseIf = /^if\s/,
	rFirstElem = /<(\w+)[>\s]/,
	rAttrEncode = /[\x00`><"'&=]/g, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
	rIsHtml = /[\x00`><\"'&=]/,
	rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
	rWrappedInViewMarker = /^\#\d+_`[\s\S]*\/\d+_`$/,
	rHtmlEncode = rAttrEncode,
	viewId = 0,
	charEntities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\x00": "&#0;",
		"'": "&#39;",
		'"': "&#34;",
		"`": "&#96;",
		"=": "&#61;"
	},
	HTML = "html",
	OBJECT = "object",
	tmplAttr = "data-jsv-tmpl",
	jsvTmpl = "jsvTmpl",
	indexStr = "For #index in nested block use #getIndex().",
	$render = {},

	jsr = global.jsrender,
	jsrToJq = jsr && $ && !$.render, // JsRender already loaded, without jQuery. but we will re-load it now to attach to jQuery

	jsvStores = {
		template: {
			compile: compileTmpl
		},
		tag: {
			compile: compileTag
		},
		viewModel: {
			compile: compileViewModel
		},
		helper: {},
		converter: {}
	};

	// views object ($.views if jQuery is loaded, jsrender.views if no jQuery, e.g. in Node.js)
	$views = {
		jsviews: versionNumber,
		sub: {
			// subscription, e.g. JsViews integration
			View: View,
			Err: JsViewsError,
			tmplFn: tmplFn,
			parse: parseParams,
			extend: $extend,
			extendCtx: extendCtx,
			syntaxErr: syntaxError,
			onStore: {},
			addSetting: addSetting,
			settings: {
				allowCode: false
			},
			advSet: noop, // Update advanced settings
			_ths: tagHandlersFromProps,
			_tg: function() {}, // Constructor for tagDef
			_cnvt: convertVal,
			_tag: renderTag,
			_er: error,
			_err: onRenderError,
			_html: htmlEncode,
			_cp: retVal, // Get compiled contextual parameters (or properties) ~foo=expr. In JsRender, simply returns val.
			_sq: function(token) {
				if (token === "constructor") {
					syntaxError("");
				}
				return token;
			}
		},
		settings: {
			delimiters: $viewsDelimiters,
			advanced: function(value) {
				return value
					? (
							$extend($subSettingsAdvanced, value),
							$sub.advSet(),
							$viewsSettings
						)
						: $subSettingsAdvanced;
				}
		},
		getCtx: retVal, // Get ctx.foo value. In JsRender, simply returns val.
		map: dataMap    // If jsObservable loaded first, use that definition of dataMap
	};

function getDerivedMethod(baseMethod, method) {
	return function() {
		var ret,
			tag = this,
			prevBase = tag.base;

		tag.base = baseMethod; // Within method call, calling this.base will call the base method
		ret = method.apply(tag, arguments); // Call the method
		tag.base = prevBase; // Replace this.base to be the base method of the previous call, for chained calls
		return ret;
	};
}

function getMethod(baseMethod, method) {
	// For derived methods (or handlers declared declaratively as in {{:foo onChange=~fooChanged}} replace by a derived method, to allow using this.base(...)
	// or this.baseApply(arguments) to call the base implementation. (Equivalent to this._super(...) and this._superApply(arguments) in jQuery UI)
	if ($isFunction(method)) {
		method = getDerivedMethod(
				!baseMethod
					? noop // no base method implementation, so use noop as base method
					: baseMethod._d
						? baseMethod // baseMethod is a derived method, so us it
						: getDerivedMethod(noop, baseMethod), // baseMethod is not derived so make its base method be the noop method
				method
			);
		method._d = 1; // Add flag that this is a derived method
	}
	return method;
}

function tagHandlersFromProps(tag, tagCtx) {
	for (var prop in tagCtx.props) {
		if (rHasHandlers.test(prop)) {
			tag[prop] = getMethod(tag[prop], tagCtx.props[prop]);
			// Copy over the onFoo props, convert and convertBack from tagCtx.props to tag (overrides values in tagDef).
			// Note: unsupported scenario: if handlers are dynamically added ^onFoo=expression this will work, but dynamically removing will not work.
		}
	}
}

function retVal(val) {
	return val;
}

function noop() {
	return "";
}

function dbgBreak(val) {
	// Usage examples: {{dbg:...}}, {{:~dbg(...)}}, {{dbg .../}}, {^{for ... onAfterLink=~dbg}} etc.
	try {
		console.log("JsRender dbg breakpoint: " + val);
		throw "dbg breakpoint"; // To break here, stop on caught exceptions.
	}
	catch (e) {}
	return this.base ? this.baseApply(arguments) : val;
}

function JsViewsError(message) {
	// Error exception type for JsViews/JsRender
	// Override of $.views.sub.Error is possible
	this.name = ($.link ? "JsViews" : "JsRender") + " Error";
	this.message = message || this.name;
}

function $extend(target, source) {
	for (var name in source) {
		target[name] = source[name];
	}
	return target;
}

(JsViewsError.prototype = new Error()).constructor = JsViewsError;

//========================== Top-level functions ==========================

//===================
// views.delimiters
//===================

function $viewsDelimiters(openChars, closeChars, link) {
	// Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
	// openChars, closeChars: opening and closing strings, each with two characters
	if (!openChars) {
		return $subSettings.delimiters;
	}
	if ($isArray(openChars)) {
		return $viewsDelimiters.apply($views, openChars);
	}

	$subSettings.delimiters = [openChars, closeChars, linkChar = link ? link.charAt(0) : linkChar];

	delimOpenChar0 = openChars.charAt(0); // Escape the characters - since they could be regex special characters
	delimOpenChar1 = openChars.charAt(1);
	delimCloseChar0 = closeChars.charAt(0);
	delimCloseChar1 = closeChars.charAt(1);
	openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1; // Default is "{^{"
	closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1;                   // Default is "}}"
	// Build regex with new delimiters
	//          [tag    (followed by / space or })  or cvtr+colon or html or code] followed by space+params then convertBack?
	rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"
		+ delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)";

	// Make rTag available to JsViews (or other components) for parsing binding expressions
	$sub.rTag = "(?:" + rTag + ")";
	//                        { ^? {   tag+params slash?  or closingTag                                                   or comment
	rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g");

	// Default:  bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
	//      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}

	$sub.rTmpl = new RegExp("<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars);
	// $sub.rTmpl looks for html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}. Each of these strings are considered
	// NOT to be jQuery selectors
	return $viewsSettings;
}

//=========
// View.get
//=========

function getView(inner, type) { //view.get(inner, type)
	if (!type && inner !== true) {
		// view.get(type)
		type = inner;
		inner = undefined;
	}

	var views, i, l, found,
		view = this,
		root = !type || type === "root";
		// If type is undefined, returns root view (view under top view).

	if (inner) {
		// Go through views - this one, and all nested ones, depth-first - and return first one with given type.
		// If type is undefined, i.e. view.get(true), return first child view.
		found = type && view.type === type && view;
		if (!found) {
			views = view.views;
			if (view._.useKey) {
				for (i in views) {
					if (found = type ? views[i].get(inner, type) : views[i]) {
						break;
					}
				}
			} else {
				for (i = 0, l = views.length; !found && i < l; i++) {
					found = type ? views[i].get(inner, type) : views[i];
				}
			}
		}
	} else if (root) {
		// Find root view. (view whose parent is top view)
		while (view.parent) {
			found = view;
			view = view.parent;
		}
	} else {
		while (view && !found) {
			// Go through views - this one, and all parent ones - and return first one with given type.
			found = view.type === type ? view : undefined;
			view = view.parent;
		}
	}
	return found;
}

function getNestedIndex() {
	var view = this.get("item");
	return view ? view.index : undefined;
}

getNestedIndex.depends = function() {
	return [this.get("item"), "index"];
};

function getIndex() {
	return this.index;
}

getIndex.depends = "index";

//==========
// View.hlp
//==========

function getHelper(helper, isContextCb) {
	// Helper method called as view.hlp(key) from compiled template, for helpers or template parameters ~foo
	var wrapped, deps,
	view = this,
	res = view.ctx;

	if (res) {
		res = res[helper];
	}
	if (res === undefined) {
		res = $helpers[helper];
	}
	if (res && res._cp) { // If this helper resource is a contextual parameter, ~foo=expr
		if (isContextCb) { // In a context callback for a contextual param, return the [currentData, dependencies...] array - needed for observe call
			deps = $sub._ceo(res[1].deps);  // fn deps, with any exprObs cloned
			deps.unshift(res[0].data);      // view.data
			deps._cp = true;
			return deps;
		}
		res = $views.getCtx(res); // If a contextual param, but not a context callback, return evaluated param - fn(data, view, j)
	}

	if (res) {
		if ($isFunction(res) && !res._wrp) {
			// If it is of type function, and not already wrapped, we will wrap it, so if called with no this pointer it will be called with the
			// view as 'this' context. If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
			// Note that helper functions on deeper paths will have specific this pointers, from the preceding path.
			// For example, ~util.foo() will have the ~util object as 'this' pointer
			wrapped = function() {
				return res.apply((!this || this === global) ? view : this, arguments);
			};
			wrapped._wrp = view;
			$extend(wrapped, res); // Attach same expandos (if any) to the wrapped function
		}
	}
	return wrapped || res;
}

function getTemplate(tmpl) {
	return tmpl && (tmpl.fn
		? tmpl
		: this.getRsc("templates", tmpl) || $templates(tmpl)); // not yet compiled
}

//==============
// views._cnvt
//==============

function convertVal(converter, view, tagCtx, onError) {
	// self is template object or linkCtx object
	var tag, value,
		// if tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtx
		boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx-1],
		linkCtx = view.linkCtx; // For data-link="{cvt:...}"...

	if (onError !== undefined) {
		tagCtx = onError = {props: {}, args: [onError]};
	} else if (boundTag) {
		tagCtx = boundTag(view.data, view, $sub);
	}

	value = tagCtx.args[0];
	if (converter || boundTag) {
		tag = linkCtx && linkCtx.tag;
		if (!tag) {
			tag = $extend(new $sub._tg(), {
				_: {
					inline: !linkCtx,
					bnd: boundTag,
					unlinked: true
				},
				tagName: ":",
				cvt: converter,
				flow: true,
				tagCtx: tagCtx
			});
			if (linkCtx) {
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
		}
		tag._er = onError && value;
		tagHandlersFromProps(tag, tagCtx);

		tagCtx.view = view;

		tag.ctx = tagCtx.ctx || tag.ctx || {};
		tagCtx.ctx = undefined;

		value = tag.cvtArgs(converter !== "true" && converter)[0]; // If there is a convertBack but no convert, converter will be "true"

		// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
		value = boundTag && view._.onRender
			? view._.onRender(value, view, tag)
			: value;
	}
	return value != undefined ? value : "";
}

function convertArgs(converter) {
	var tag = this,
		tagCtx = tag.tagCtx,
		view = tagCtx.view,
		args = tagCtx.args;

	converter = converter || tag.convert;
	converter = converter && ("" + converter === converter
		? (view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'"))
		: converter);

	args = !args.length && !tagCtx.index // On the opening tag with no args, bind to the current data context
		? [view.data]
		: converter
			? args.slice() // If there is a converter, use a copy of the tagCtx.args array for rendering, and replace the args[0] in
			// the copied array with the converted value. But we do not modify the value of tag.tagCtx.args[0] (the original args array)
			: args; // If no converter, get the original tagCtx.args

	if (converter) {
		if (converter.depends) {
			tag.depends = $sub.getDeps(tag.depends, tag, converter.depends, converter);
		}
		args[0] = converter.apply(tag, args);
	}
	return args;
}

//=============
// views._tag
//=============

function getResource(resourceType, itemName) {
	var res, store,
		view = this;
	while ((res === undefined) && view) {
		store = view.tmpl && view.tmpl[resourceType];
		res = store && store[itemName];
		view = view.parent;
	}
	return res || $views[resourceType][itemName];
}

function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
	parentView = parentView || topView;
	var tag, tag_, tagDef, template, tags, attr, parentTag, i, l, itemRet, tagCtx, tagCtxCtx,
		content, callInit, mapDef, thisMap, args, props, initialTmpl, tagDataMap, contentCtx,
		ret = "",
		linkCtx = parentView.linkCtx || 0,
		ctx = parentView.ctx,
		parentTmpl = tmpl || parentView.tmpl,
		// if tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtxs
		boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs-1];

	if (tagName._is === "tag") {
		tag = tagName;
		tagName = tag.tagName;
		tagCtxs = tag.tagCtxs;
		template = tag.template;
	} else {
		tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
		template = tagDef.template;
	}

	if (onError !== undefined) {
		ret += onError;
		tagCtxs = onError = [{props: {}, args: []}];
	} else if (boundTag) {
		tagCtxs = boundTag(parentView.data, parentView, $sub);
	}

	l = tagCtxs.length;
	for (i = 0; i < l; i++) {
		tagCtx = tagCtxs[i];
		if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag._.inline || tag._er) {
			// Initialize tagCtx
			// For block tags, tagCtx.tmpl is an integer > 0
			if (content = parentTmpl.tmpls && tagCtx.tmpl) {
				content = tagCtx.content = parentTmpl.tmpls[content - 1];
			}
			tagCtx.index = i;
			tagCtx.tmpl = content; // Set the tmpl property to the content of the block tag
			tagCtx.render = renderContent;
			tagCtx.view = parentView;
			tagCtx.ctx = extendCtx(tagCtx.ctx, ctx); // Clone and extend parentView.ctx
		}
		if (tmpl = tagCtx.props.tmpl) {
			// If the tmpl property is overridden, set the value (when initializing, or, in case of binding: ^tmpl=..., when updating)
			tagCtx.tmpl = parentView.getTmpl(tmpl);
		}

		if (!tag) {
			// This will only be hit for initial tagCtx (not for {{else}}) - if the tag instance does not exist yet
			// Instantiate tag if it does not yet exist
			// If the tag has not already been instantiated, we will create a new instance.
			// ~tag will access the tag, even within the rendering of the template content of this tag.
			// From child/descendant tags, can access using ~tag.parent, or ~parentTags.tagName
			tag = new tagDef._ctr();
			callInit = !!tag.init;

			tag.parent = parentTag = ctx && ctx.tag;
			tag.tagCtxs = tagCtxs;
			tagDataMap = tag.dataMap;

			if (linkCtx) {
				tag._.inline = false;
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			if (tag._.bnd = boundTag || linkCtx.fn) {
				// Bound if {^{tag...}} or data-link="{tag...}"
				tag._.arrVws = {};
			} else if (tag.dataBoundOnly) {
				error("{^{" + tagName + "}} tag must be data-bound");
			}
			//TODO better perf for childTags() - keep child tag.tags array, (and remove child, when disposed)
			// tag.tags = [];
		}
		tagCtxs = tag.tagCtxs;
		tagDataMap = tag.dataMap;

		tagCtx.tag = tag;
		if (tagDataMap && tagCtxs) {
			tagCtx.map = tagCtxs[i].map; // Copy over the compiled map instance from the previous tagCtxs to the refreshed ones
		}
		if (!tag.flow) {
			tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {};

			// tags hash: tag.ctx.tags, merged with parentView.ctx.tags,
			tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};
			if (parentTag) {
				tags[parentTag.tagName] = parentTag;
				//TODO better perf for childTags: parentTag.tags.push(tag);
			}
			tags[tag.tagName] = tagCtxCtx.tag = tag;
		}
	}
	if (!(tag._er = onError)) {
		tagHandlersFromProps(tag, tagCtxs[0]);
		tag.rendering = {}; // Provide object for state during render calls to tag and elses. (Used by {{if}} and {{for}}...)
		for (i = 0; i < l; i++) {
			tagCtx = tag.tagCtx = tagCtxs[i];
			props = tagCtx.props;
			args = tag.cvtArgs();

			if (mapDef = props.dataMap || tagDataMap) {
				if (args.length || props.dataMap) {
					thisMap = tagCtx.map;
					if (!thisMap || thisMap.src !== args[0] || isUpdate) {
						if (thisMap && thisMap.src) {
							thisMap.unmap(); // only called if observable map - not when only used in JsRender, e.g. by {{props}}
						}
						thisMap = tagCtx.map = mapDef.map(args[0], props, undefined, !tag._.bnd);
					}
					args = [thisMap.tgt];
				}
			}
			tag.ctx = tagCtx.ctx;

			if (!i) {
				if (callInit) {
					initialTmpl = tag.template;
					tag.init(tagCtx, linkCtx, tag.ctx);
					callInit = undefined;
				}
				if (linkCtx) {
					// Set attr on linkCtx to ensure outputting to the correct target attribute.
					// Setting either linkCtx.attr or this.attr in the init() allows per-instance choice of target attrib.
					linkCtx.attr = tag.attr = linkCtx.attr || tag.attr;
				}
				attr = tag.attr;
				tag._.noVws = attr && attr !== HTML;
			}

			itemRet = undefined;
			if (tag.render) {
				itemRet = tag.render.apply(tag, args);
				if (parentView.linked && itemRet && tag.linkedElem && !rWrappedInViewMarker.test(itemRet)) {
					// When a tag renders content from the render method, with data linking, and has a linkedElem binding, then we need to wrap with
					// view markers, if absent, so the content is a view associated with the tag, which will correctly dispose bindings if deleted.
					itemRet = renderWithViews($.templates(itemRet), args[0], undefined, undefined, parentView, undefined, undefined, tag);
				}
			}
			if (!args.length) {
				args = [parentView]; // no arguments - (e.g. {{else}}) get data context from view.
			}
			if (itemRet === undefined) {
				contentCtx = args[0]; // Default data context for wrapped block content is the first argument. Defined tag.contentCtx function to override this.
				if (tag.contentCtx) {
					contentCtx = tag.contentCtx(contentCtx) || contentCtx;
				}
				itemRet = tagCtx.render(contentCtx, true) || (isUpdate ? undefined : "");
			}
			// No return value from render, and no template/content tagCtx.render(...), so return undefined
			ret = ret ? ret + (itemRet || "") : itemRet; // If no rendered content, this will be undefined
		}
		tag.rendering = undefined;
	}
	tag.tagCtx = tagCtxs[0];
	tag.ctx = tag.tagCtx.ctx;

	if (tag._.noVws) {
			if (tag._.inline) {
			// inline tag with attr set to "text" will insert HTML-encoded content - as if it was element-based innerText
			ret = attr === "text"
				? $converters.html(ret)
				: "";
		}
	}
	return boundTag && parentView._.onRender
		// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
		? parentView._.onRender(ret, parentView, tag)
		: ret;
}

//=================
// View constructor
//=================

function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
	// Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
	var views, parentView_, tag, self_,
		self = this,
		isArray = type === "array";

	self.content = contentTmpl;
	self.views = isArray ? [] : {};
	self.parent = parentView;
	self.type = type || "top";
	self.data = data;
	self.tmpl = template;
	// If the data is an array, this is an 'array view' with a views array for each child 'item view'
	// If the data is not an array, this is an 'item view' with a views 'hash' object for any child nested views
	// ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
	self_ = self._ = {
		key: 0,
		useKey: isArray ? 0 : 1,
		id: "" + viewId++,
		onRender: onRender,
		bnds: {}
	};
	self.linked = !!onRender;
	if (parentView) {
		views = parentView.views;
		parentView_ = parentView._;
		if (parentView_.useKey) {
			// Parent is not an 'array view'. Add this view to its views object
			// self._key = is the key in the parent view hash
			views[self_.key = "_" + parentView_.useKey++] = self;
			self.index = indexStr;
			self.getIndex = getNestedIndex;
		} else if (views.length === (self_.key = self.index = key)) { // Parent is an 'array view'. Add this view to its views array
			views.push(self); // Adding to end of views array. (Using push when possible - better perf than splice)
		} else {
			views.splice(key, 0, self); // Inserting in views array
		}
		// If no context was passed in, use parent context
		// If context was passed in, it should have been merged already with parent context
		self.ctx = context || parentView.ctx;
	} else {
		self.ctx = context;
	}
}

View.prototype = {
	get: getView,
	getIndex: getIndex,
	getRsc: getResource,
	getTmpl: getTemplate,
	hlp: getHelper,
	_is: "view"
};

//====================================================
// Registration
//====================================================

function compileChildResources(parentTmpl) {
	var storeName, storeNames, resources;
	for (storeName in jsvStores) {
		storeNames = storeName + "s";
		if (parentTmpl[storeNames]) {
			resources = parentTmpl[storeNames];    // Resources not yet compiled
			parentTmpl[storeNames] = {};               // Remove uncompiled resources
			$views[storeNames](resources, parentTmpl); // Add back in the compiled resources
		}
	}
}

//===============
// compileTag
//===============

function compileTag(name, tagDef, parentTmpl) {
	var tmpl, baseTag, prop,
		compiledDef = new $sub._tg();

	function Tag() {
		var tag = this;
		tag._ = {
			inline: true,
			unlinked: true
		};

		tag.tagName = name;
	}

	if ($isFunction(tagDef)) {
		// Simple tag declared as function. No presenter instantation.
		tagDef = {
			depends: tagDef.depends,
			render: tagDef
		};
	} else if ("" + tagDef === tagDef) {
		tagDef = {template: tagDef};
	}
	if (baseTag = tagDef.baseTag) {
		tagDef.flow = !!tagDef.flow; // Set flow property, so defaults to false even if baseTag has flow=true
		tagDef.baseTag = baseTag = "" + baseTag === baseTag
			? (parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag])
			: baseTag;

		compiledDef = $extend(compiledDef, baseTag);

		for (prop in tagDef) {
			compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
		}
	} else {
		compiledDef = $extend(compiledDef, tagDef);
	}

	// Tag declared as object, used as the prototype for tag instantiation (control/presenter)
	if ((tmpl = compiledDef.template) !== undefined) {
		compiledDef.template = "" + tmpl === tmpl ? ($templates[tmpl] || $templates(tmpl)) : tmpl;
	}
	if (compiledDef.init !== false) {
		// Set init: false on tagDef if you want to provide just a render method, or render and template, but no constructor or prototype.
		// so equivalent to setting tag to render function, except you can also provide a template.
		(Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;
	}

	if (parentTmpl) {
		compiledDef._parentTmpl = parentTmpl;
	}
	return compiledDef;
}

function baseApply(args) {
	// In derived method (or handler declared declaratively as in {{:foo onChange=~fooChanged}} can call base method,
	// using this.baseApply(arguments) (Equivalent to this._superApply(arguments) in jQuery UI)
	return this.base.apply(this, args);
}

//===============
// compileTmpl
//===============

function compileTmpl(name, tmpl, parentTmpl, options) {
	// tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object

	//==== nested functions ====
	function lookupTemplate(value) {
		// If value is of type string - treat as selector, or name of compiled template
		// Return the template object, if already compiled, or the markup string
		var currentName, tmpl;
		if (("" + value === value) || value.nodeType > 0 && (elem = value)) {
			if (!elem) {
				if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
					// tmpl="./some/file.html"
					// If the template is not named, use "./some/file.html" as name.
					if (tmpl = $templates[name = name || value]) {
						value = tmpl;
					} else {
						// BROWSER-SPECIFIC CODE (not on Node.js):
						// Look for server-generated script block with id "./some/file.html"
						elem = document.getElementById(value);
					}
				} else if ($.fn && !$sub.rTmpl.test(value)) {
					try {
						elem = $(document).find(value)[0]; // if jQuery is loaded, test for selector returning elements, and get first element
					} catch (e) {}
				}// END BROWSER-SPECIFIC CODE
			} //BROWSER-SPECIFIC CODE
			if (elem) {
				// Generally this is a script element.
				// However we allow it to be any element, so you can for example take the content of a div,
				// use it as a template, and replace it by the same content rendered against data.
				// e.g. for linking the content of a div to a container, and using the initial content as template:
				// $.link("#content", model, {tmpl: "#content"});
				if (options) {
					// We will compile a new template using the markup in the script element
					value = elem.innerHTML;
				} else {
					// We will cache a single copy of the compiled template, and associate it with the name
					// (renaming from a previous name if there was one).
					currentName = elem.getAttribute(tmplAttr);
					if (currentName) {
						if (currentName !== jsvTmpl) {
							value = $templates[currentName];
							delete $templates[currentName];
						} else if ($.fn) {
							value = $.data(elem)[jsvTmpl];
						}
					} else {
						name = name || ($.fn ? jsvTmpl : value);
						value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
					}
					value.tmplName = name = name || currentName;
					if (name !== jsvTmpl) {
						$templates[name] = value;
					}
					elem.setAttribute(tmplAttr, name);
					if ($.fn) {
						$.data(elem, jsvTmpl, value);
					}
				}
			} // END BROWSER-SPECIFIC CODE
			elem = undefined;
		} else if (!value.fn) {
			value = undefined;
			// If value is not a string. HTML element, or compiled template, return undefined
		}
		return value;
	}

	var elem, compiledTmpl,
		tmplOrMarkup = tmpl = tmpl || "";

	//==== Compile the template ====
	if (options === 0) {
		options = undefined;
		tmplOrMarkup = lookupTemplate(tmplOrMarkup); // Top-level compile so do a template lookup
	}

	// If options, then this was already compiled from a (script) element template declaration.
	// If not, then if tmpl is a template object, use it for options
	options = options || (tmpl.markup ? tmpl : {});
	options.tmplName = name;
	if (parentTmpl) {
		options._parentTmpl = parentTmpl;
	}
	// If tmpl is not a markup string or a selector string, then it must be a template object
	// In that case, get it from the markup property of the object
	if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup))) {
		if (tmplOrMarkup.fn) {
			// If the string references a compiled template object, need to recompile to merge any modified options
			tmplOrMarkup = tmplOrMarkup.markup;
		}
	}
	if (tmplOrMarkup !== undefined) {
		if (tmplOrMarkup.fn || tmpl.fn) {
			// tmpl is already compiled, so use it
			if (tmplOrMarkup.fn) {
				compiledTmpl = tmplOrMarkup;
			}
		} else {
			// tmplOrMarkup is a markup string, not a compiled template
			// Create template object
			tmpl = tmplObject(tmplOrMarkup, options);
			// Compile to AST and then to compiled function
			tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
		}
		if (!compiledTmpl) {
			compiledTmpl = $extend(function() {
				return compiledTmpl.render.apply(compiledTmpl, arguments);
			}, tmpl);

			compileChildResources(compiledTmpl);
		}
		if (name && !parentTmpl && name !== jsvTmpl) {
			$render[name] = compiledTmpl;
		}
		return compiledTmpl;
	}
}

//==== /end of function compileTmpl ====

//=================
// compileViewModel
//=================

function getDefaultVal(defaultVal, data) {
	return $.isFunction(defaultVal)
		? defaultVal.call(data)
		: defaultVal;
}

function unmapArray(modelArr) {
		var i, arr = [],
			l = modelArr.length;
		for (i=0; i<l; i++) {
			arr.push(modelArr[i].unmap());
		}
		return arr;
}

function compileViewModel(name, type) {
	var i, constructor,
		viewModels = this,
		getters = type.getters,
		extend = type.extend,
		id = type.id,
		proto = $.extend({
			_is: name || "unnamed",
			unmap: unmap,
			merge: merge
		}, extend),
		args = "",
		body = "",
		l = getters ? getters.length : 0,
		$observable = $.observable,
		getterNames = {};

	function GetNew(args) {
		constructor.apply(this, args);
	}

	function vm() {
		return new GetNew(arguments);
	}

	function iterate(data, action) {
		var j, getterType, defaultVal, prop, ob,
			m = getters.length;
		for (j=0; j<m; j++) {
			prop = getters[j];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
				ob = getDefaultVal(defaultVal, data);
			}
			action(ob, getterType && viewModels[getterType.type], prop);
		}
	}

	function map(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var i, j,  l, m, prop,
			ob = data,
			arr = [];

		if ($isArray(data)) {
			data = data || [];
			l = data.length;
			for (i=0; i<l; i++) {
				arr.push(this.map(data[i]));
			}
			arr._is = name;
			arr.unmap = unmap;
			arr.merge = merge;
			return arr;
		}

		if (data) {
			iterate(data, function(ob, viewModel) {
				if (viewModel) { // Iterate to build getters arg array (value, or mapped value)
					ob = viewModel.map(ob);
				}
				arr.push(ob);
			});

			ob = this.apply(this, arr); // Insantiate this View Model, passing getters args array to constructor
			for (prop in data) { // Copy over any other properties. that are not get/set properties
				if (prop !== $expando  && !getterNames[prop]) {
					ob[prop] = data[prop];
				}
			}
		}
		return ob;
	}

	function merge(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var i, j, l, m, prop, mod, found, assigned, ob, newModArr,
			model = this;

		if ($isArray(model)) {
			assigned = {};
			newModArr = [];
			l = data.length;
			m = model.length;
			for (i=0; i<l; i++) {
				ob = data[i];
				found = false;
				for (j=0; j<m && !found; j++) {
					if (assigned[j]) {
						continue;
					}
					mod = model[j];

					if (id) {
						assigned[j] = found = id + "" === id
						? (ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id])
						: id(mod, ob);
					}
				}
				if (found) {
					mod.merge(ob);
					newModArr.push(mod);
				} else {
					newModArr.push(vm.map(ob));
				}
			}
			if ($observable) {
				$observable(model).refresh(newModArr, true);
			} else {
				model.splice.apply(model, [0, model.length].concat(newModArr));
			}
			return;
		}
		iterate(data, function(ob, viewModel, getter) {
			if (viewModel) {
				model[getter]().merge(ob); // Update typed property
			} else {
				model[getter](ob); // Update non-typed property
			}
		});
		for (prop in data) {
			if (prop !== $expando && !getterNames[prop]) {
				model[prop] = data[prop];
			}
		}
	}

	function unmap() {
		var ob, prop, i, l, getterType, arr, value,
			model = this;

		if ($isArray(model)) {
			return unmapArray(model);
		}
		ob = {};
		l = getters.length;
		for (i=0; i<l; i++) {
			prop = getters[i];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			value = model[prop]();
			ob[prop] = getterType && value && viewModels[getterType.type]
				? $isArray(value)
					? unmapArray(value)
					: value.unmap()
				: value;
		}
		for (prop in model) {
			if (prop !== "_is" && !getterNames[prop] && prop !== $expando  && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && !$.isFunction(model[prop])) {
				ob[prop] = model[prop];
			}
		}
		return ob;
	}

	GetNew.prototype = proto;

	for (i=0; i<l; i++) {
		(function(getter) {
			getter = getter.getter || getter;
			getterNames[getter] = i+1;
			var privField = "_" + getter;

			args += (args ? "," : "") + getter;
			body += "this." + privField + " = " + getter + ";\n";
			proto[getter] = proto[getter] || function(val) {
				if (!arguments.length) {
					return this[privField]; // If there is no argument, use as a getter
				}
				if ($observable) {
					$observable(this).setProperty(getter, val);
				} else {
					this[privField] = val;
				}
			};

			if ($observable) {
				proto[getter].set = proto[getter].set || function(val) {
					this[privField] = val; // Setter called by observable property change
				};
			}
		})(getters[i]);
	}

	constructor = new Function(args, body.slice(0, -1));
	constructor.prototype = proto;
	proto.constructor = constructor;

	vm.map = map;
	vm.getters = getters;
	vm.extend = extend;
	vm.id = id;
	return vm;
}

function tmplObject(markup, options) {
	// Template object constructor
	var htmlTag,
		wrapMap = $subSettingsAdvanced._wm || {}, // Only used in JsViews. Otherwise empty: {}
		tmpl = $extend(
			{
				tmpls: [],
				links: {}, // Compiled functions for link expressions
				bnds: [],
				_is: "template",
				render: renderContent
			},
			options
		);

	tmpl.markup = markup;
	if (!options.htmlTag) {
		// Set tmpl.tag to the top-level HTML tag used in the template, if any...
		htmlTag = rFirstElem.exec(markup);
		tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
	}
	htmlTag = wrapMap[tmpl.htmlTag];
	if (htmlTag && htmlTag !== wrapMap.div) {
		// When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
		// Currently not trimmed for <li> tag. (Not worth adding perf cost)
		tmpl.markup = $.trim(tmpl.markup);
	}

	return tmpl;
}

//==============
// registerStore
//==============

function registerStore(storeName, storeSettings) {

	function theStore(name, item, parentTmpl) {
		// The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags

		// For store of name 'thing', Call as:
		//    $.views.things(items[, parentTmpl]),
		// or $.views.things(name, item[, parentTmpl])

		var onStore, compile, itemName, thisStore;
		if (name && typeof name === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
			// Call to $.views.things(items[, parentTmpl]),

			// Adding items to the store
			// If name is a hash, then item is parentTmpl. Iterate over hash and call store for key.
			for (itemName in name) {
				theStore(itemName, name[itemName], item);
			}
			return item || $views;
		}
		// Adding a single unnamed item to the store
		if (item === undefined) {
			item = name;
			name = undefined;
		}
		if (name && "" + name !== name) { // name must be a string
			parentTmpl = item;
			item = name;
			name = undefined;
		}
		thisStore = parentTmpl
			? storeName === "viewModel"
				? parentTmpl
				: (parentTmpl[storeNames] = parentTmpl[storeNames] || {})
			: theStore;
		compile = storeSettings.compile;
		if (item === null) {
			// If item is null, delete this entry
			if (name) {
				delete thisStore[name];
			}
		} else {
			item = compile ? compile.call(thisStore, name, item, parentTmpl, 0) : item;
			if (name) {
				thisStore[name] = item;
			}
		}
		if (compile && item) {
			item._is = storeName; // Only do this for compiled objects (tags, templates...)
		}
		if (item && (onStore = $sub.onStore[storeName])) {
			// e.g. JsViews integration
			onStore(name, item, compile);
		}
		return item;
	}

	var storeNames = storeName + "s";

	$views[storeNames] = theStore;
}

function addSetting(st) {
	$viewsSettings[st] = function(value) {
		return arguments.length
			? ($subSettings[st] = value, $viewsSettings)
			: $subSettings[st];
	};
}

//=========
// dataMap
//=========

function dataMap(mapDef) {
	function Map(source, options) {
		this.tgt = mapDef.getTgt(source, options);
	}

	if ($isFunction(mapDef)) {
		// Simple map declared as function
		mapDef = {
			getTgt: mapDef
		};
	}

	if (mapDef.baseMap) {
		mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
	}

	mapDef.map = function(source, options) {
		return new Map(source, options);
	};
	return mapDef;
}

//==============
// renderContent
//==============

function renderContent(data, context, noIteration, parentView, key, onRender) {
	var i, l, tag, tmpl, tagCtx, isTopRenderCall, prevData, prevIndex,
		view = parentView,
		result = "";

	if (context === true) {
		noIteration = context; // passing boolean as second param - noIteration
		context = undefined;
	} else if (typeof context !== OBJECT) {
		context = undefined; // context must be a boolean (noIteration) or a plain object
	}

	if (tag = this.tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tagCtx = this;
		view = view || tagCtx.view;
		tmpl = view.getTmpl(tag.template || tagCtx.tmpl);
		if (!arguments.length) {
			data = view;
		}
	} else {
		// This is a template.render(...) call
		tmpl = this;
	}

	if (tmpl) {
		if (!parentView && data && data._is === "view") {
			view = data; // When passing in a view to render or link (and not passing in a parent view) use the passed-in view as parentView
		}

		if (view) {
			if (data === view) {
				// Inherit the data from the parent view.
				// This may be the contents of an {{if}} block
				data = view.data;
			}
		}

		isTopRenderCall = !view;
		isRenderCall = isRenderCall || isTopRenderCall;
		if (!view) {
			(context = context || {}).root = data; // Provide ~root as shortcut to top-level data.
		}
		if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
			result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
		} else {
			if (view) { // In a block
				prevData = view.data;
				prevIndex = view.index;
				view.index = indexStr;
			} else {
				view = topView;
				view.data = data;
				view.ctx = context;
			}
			if ($isArray(data) && !noIteration) {
				// Create a view for the array, whose child views correspond to each data item. (Note: if key and parentView are passed in
				// along with parent view, treat as insert -e.g. from view.addViews - so parentView is already the view item for array)
				for (i = 0, l = data.length; i < l; i++) {
					view.index = i;
					view.data = data[i];
					result += tmpl.fn(data[i], view, $sub);
				}
			} else {
				view.data = data;
				result += tmpl.fn(data, view, $sub);
			}
			view.data = prevData;
			view.index = prevIndex;
		}
		if (isTopRenderCall) {
			isRenderCall = undefined;
		}
	}
	return result;
}

function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
	function setItemVar(item) {
		// When itemVar is specified, set modified ctx with user-named ~item
		newCtx = $extend({}, context);
		newCtx[itemVar] = item;
	}

	// Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
	// If the data is the parent view, treat as noIteration, re-render with the same data context.
	var i, l, newView, childView, itemResult, swapContent, contentTmpl, outerOnRender, tmplName, itemVar, newCtx, tagCtx,
		result = "";

	if (tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tmplName = tag.tagName;
		tagCtx = tag.tagCtx;
		context = context ? extendCtx(context, tag.ctx) : tag.ctx;

		if (tmpl === view.content) { // {{xxx tmpl=#content}}
			contentTmpl = tmpl !== view.ctx._wrp // We are rendering the #content
				? view.ctx._wrp // #content was the tagCtx.props.tmpl wrapper of the block content - so within this view, #content will now be the view.ctx._wrp block content
				: undefined; // #content was the view.ctx._wrp block content - so within this view, there is no longer any #content to wrap.
		} else if (tmpl !== tagCtx.content) {
			if (tmpl === tag.template) { // Rendering {{tag}} tag.template, replacing block content.
				contentTmpl = tagCtx.tmpl; // Set #content to block content (or wrapped block content if tagCtx.props.tmpl is set)
				context._wrp = tagCtx.content; // Pass wrapped block content to nested views
			} else { // Rendering tagCtx.props.tmpl wrapper
				contentTmpl = tagCtx.content || view.content; // Set #content to wrapped block content
			}
		} else {
			contentTmpl = view.content; // Nested views inherit same wrapped #content property
		}

		if (tagCtx.props.link === false) {
			// link=false setting on block tag
			// We will override inherited value of link by the explicit setting link=false taken from props
			// The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
			context = context || {};
			context.link = false;
		}

		if (itemVar = tagCtx.props.itemVar) {
			if (itemVar.charAt(0) !== "~") {
				syntaxError("Use itemVar='~myItem'");
			}
			itemVar = itemVar.slice(1);
		}
	}

	if (view) {
		onRender = onRender || view._.onRender;
		context = extendCtx(context, view.ctx);
	}

	if (key === true) {
		swapContent = true;
		key = 0;
	}

	// If link===false, do not call onRender, so no data-linking marker nodes
	if (onRender && (context && context.link === false || tag && tag._.noVws)) {
		onRender = undefined;
	}
	outerOnRender = onRender;
	if (onRender === true) {
		// Used by view.refresh(). Don't create a new wrapper view.
		outerOnRender = undefined;
		onRender = view._.onRender;
	}
	// Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)
	context = tmpl.helpers
		? extendCtx(tmpl.helpers, context)
		: context;

	newCtx = context;
	if ($isArray(data) && !noIteration) {
		// Create a view for the array, whose child views correspond to each data item. (Note: if key and view are passed in
		// along with parent view, treat as insert -e.g. from view.addViews - so view is already the view item for array)
		newView = swapContent
			? view
			: (key !== undefined && view)
				|| new View(context, "array", view, data, tmpl, key, onRender, contentTmpl);
		if (view && view._.useKey) {
			// Parent is not an 'array view'
			newView._.bnd = !tag || tag._.bnd && tag; // For array views that are data bound for collection change events, set the
			// view._.bnd property to true for top-level link() or data-link="{for}", or to the tag instance for a data-bound tag, e.g. {^{for ...}}
		}
		if (itemVar) {
			newView.it = itemVar;
		}
		itemVar = newView.it;
		for (i = 0, l = data.length; i < l; i++) {
			// Create a view for each data item.
			if (itemVar) {
				setItemVar(data[i]); // use modified ctx with user-named ~item
			}
			childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, newView.content);

			itemResult = tmpl.fn(data[i], childView, $sub);
			result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
		}
	} else {
		// Create a view for singleton data object. The type of the view will be the tag name, e.g. "if" or "myTag" except for
		// "item", "array" and "data" views. A "data" view is from programmatic render(object) against a 'singleton'.
		if (itemVar) {
			setItemVar(data);
		}
		newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);
		if (tag && !tag.flow) {
			newView.tag = tag;
			tag.view = newView;
		}
		result += tmpl.fn(data, newView, $sub);
	}
	return outerOnRender ? outerOnRender(result, newView) : result;
}

//===========================
// Build and compile template
//===========================

// Generate a reusable function that will serve to render a template against data
// (Compile AST then build template function)

function onRenderError(e, view, fallback) {
	var message = fallback !== undefined
		? $isFunction(fallback)
			? fallback.call(view.data, e, view)
			: fallback || ""
		: "{Error: " + e.message + "}";

	if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
		message = fallback; // There is a settings.debugMode(handler) onError override. Call it, and use return value (if any) to replace message
	}

	return view && !view.linkCtx ? $converters.html(message) : message;
}

function error(message) {
	throw new $sub.Err(message);
}

function syntaxError(message) {
	error("Syntax error\n" + message);
}

function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
	// Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
	// Used for compiling templates, and also by JsViews to build functions for data link expressions

	//==== nested functions ====
	function pushprecedingContent(shift) {
		shift -= loc;
		if (shift) {
			content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
		}
	}

	function blockTagCheck(tagName, block) {
		if (tagName) {
			tagName += '}}';
			//			'{{include}} block has {{/for}} with no open {{for}}'
			syntaxError((
				block
					? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName
					: 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
		}
	}

	function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
/*

     bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
/(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}/g

(?:
  {(\^)?{            bind
  (?:
    (\w+             tagName
      (?=[\/\s}])
    )
    |
    (\w+)?(:)        converter colon
    |
    (>)              html
    |
    (\*)             codeTag
  )
  \s*
  (                  params
    (?:[^}]|}(?!}))*?
  )
  (\/)?              slash
  |
  {(\^)?{            bind2
  (?:
    (?:\/(\w+))\s*   closeBlock
    |
    !--[\s\S]*?--    comment
  )
)
}}/g

*/
		if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
			syntaxError(all);
		}

		// Build abstract syntax tree (AST): [tagName, converter, params, content, hash, bindings, contentMarkup]
		if (html) {
			colon = ":";
			converter = HTML;
		}
		slash = slash || isLinkExpr && !hasElse;

		var pathBindings = (bind || isLinkExpr) && [[]],
			props = "",
			args = "",
			ctxProps = "",
			paramsArgs = "",
			paramsProps = "",
			paramsCtxProps = "",
			onError = "",
			useTrigger = "",
			// Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
			block = !slash && !colon;

		//==== nested helper function ====
		tagName = tagName || (params = params || "#data", colon); // {{:}} is equivalent to {{:#data}}
		pushprecedingContent(index);
		loc = index + all.length; // location marker - parsed up to here
		if (codeTag) {
			if (allowCode) {
				content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
			}
		} else if (tagName) {
			if (tagName === "else") {
				if (rTestElseIf.test(params)) {
					syntaxError('for "{{else if expr}}" use "{{else expr}}"');
				}
				pathBindings = current[7] && [[]];
				current[8] = markup.substring(current[8], index); // contentMarkup for block tag
				current = stack.pop();
				content = current[2];
				block = true;
			}
			if (params) {
				// remove newlines from the params string, to avoid compiled code errors for unterminated strings
				parseParams(params.replace(rNewLine, " "), pathBindings, tmpl)
					.replace(rBuildHash, function(all, onerror, isCtx, key, keyToken, keyValue, arg, param) {
						key = "'" + keyToken + "':";
						if (arg) {
							args += keyValue + ",";
							paramsArgs += "'" + param + "',";
						} else if (isCtx) {
							ctxProps += key + 'j._cp(' + keyValue + ',"' + param + '",view),';
							// Compiled code for evaluating tagCtx on a tag will have: ctx:{'foo':j._cp(compiledExpr, "expr", view)}
							paramsCtxProps += key + "'" + param + "',";
						} else if (onerror) {
							onError += keyValue;
						} else {
							if (keyToken === "trigger") {
								useTrigger += keyValue;
							}
							props += key + keyValue + ",";
							paramsProps += key + "'" + param + "',";
							hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
						}
						return "";
					}).slice(0, -1);
			}

			if (pathBindings && pathBindings[0]) {
				pathBindings.pop(); // Remove the bindings that was prepared for next arg. (There is always an extra one ready).
			}

			newNode = [
					tagName,
					converter || !!convertBack || hasHandlers || "",
					block && [],
					parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), // {{:}} equivalent to {{:#data}}
					parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps),
					onError,
					useTrigger,
					pathBindings || 0
				];
			content.push(newNode);
			if (block) {
				stack.push(current);
				current = newNode;
				current[8] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag
			}
		} else if (closeBlock) {
			blockTagCheck(closeBlock !== current[0] && current[0] !== "else" && closeBlock, current[0]);
			current[8] = markup.substring(current[8], index); // contentMarkup for block tag
			current = stack.pop();
		}
		blockTagCheck(!current && closeBlock);
		content = current[2];
	}
	//==== /end of nested functions ====

	var i, result, newNode, hasHandlers, bindings,
		allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode
			|| $viewsSettings.allowCode === true, // include direct setting of settings.allowCode true for backward compat only
		astTop = [],
		loc = 0,
		stack = [],
		content = astTop,
		current = [,,astTop];

	if (allowCode && tmpl._is) {
		tmpl.allowCode = allowCode;
	}

//TODO	result = tmplFnsCache[markup]; // Only cache if template is not named and markup length < ...,
//and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
//		if (result) {
//			tmpl.fn = result;
//		} else {

//		result = markup;
	if (isLinkExpr) {
		if (convertBack !== undefined) {
			markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar0;
		}
		markup = delimOpenChar0 + markup + delimCloseChar1;
	}

	blockTagCheck(stack[0] && stack[0][2].pop()[0]);
	// Build the AST (abstract syntax tree) under astTop
	markup.replace(rTag, parseTag);

	pushprecedingContent(markup.length);

	if (loc = astTop[astTop.length - 1]) {
		blockTagCheck("" + loc !== loc && (+loc[8] === loc[8]) && loc[0]);
	}
//			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
//		}

	if (isLinkExpr) {
		result = buildCode(astTop, markup, isLinkExpr);
		bindings = [];
		i = astTop.length;
		while (i--) {
			bindings.unshift(astTop[i][7]);  // With data-link expressions, pathBindings array for tagCtx[i] is astTop[i][7]
		}
		setPaths(result, bindings);
	} else {
		result = buildCode(astTop, tmpl);
	}
	return result;
}

function setPaths(fn, pathsArr) {
	var key, paths,
		i = 0,
		l = pathsArr.length;
	fn.deps = [];
	for (; i < l; i++) {
		paths = pathsArr[i];
		for (key in paths) {
			if (key !== "_jsvto" && paths.hasOwnProperty(key) && paths[key].length) {
				fn.deps = fn.deps.concat(paths[key]); // deps is the concatenation of the paths arrays for the different bindings
			}
		}
	}
	fn.paths = paths; // The array of paths arrays for the different bindings
}

function parsedParam(args, props, ctx) {
	return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
}

function paramStructure(parts, type) {
	return '\n\t'
		+ (type
			? type + ':{'
			: '')
		+ 'args:[' + parts[0] + ']'
		+ (parts[1] || !type
			? ',\n\tprops:{' + parts[1] + '}'
			: "")
		+ (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
}

function parseParams(params, pathBindings, tmpl) {

	function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
	// /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//   lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                        prn2  space
		// (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
		function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
			//rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
			//          not                               object     helper    view  viewProperty pathTokens      leafToken
			var subPath = object === ".";
			if (object) {
				path = path.slice(not.length);
				if (/^\.?constructor$/.test(leafToken||path)) {
					syntaxError(allPath);
				}
				if (!subPath) {
					allPath = (helper
							? 'view.hlp("' + helper + '")'
							: view
								? "view"
								: "data")
						+ (leafToken
							? (viewProperty
								? "." + viewProperty
								: helper
									? ""
									: (view ? "" : "." + object)
								) + (pathTokens || "")
							: (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));

					allPath = allPath + (leafToken ? "." + leafToken : "");

					allPath = not + (allPath.slice(0, 9) === "view.data"
						? allPath.slice(5) // convert #view.data... to data...
						: allPath);
				}
				if (bindings) {
					binds = named === "linkTo" ? (bindto = pathBindings._jsvto = pathBindings._jsvto || []) : bndCtx.bd;
					if (theOb = subPath && binds[binds.length-1]) {
						if (theOb._jsv) {
							while (theOb.sb) {
								theOb = theOb.sb;
							}
							if (theOb.bnd) {
								path = "^" + path.slice(1);
							}
							theOb.sb = path;
							theOb.bnd = theOb.bnd || path.charAt(0) === "^";
						}
					} else {
						binds.push(path);
					}
					pathStart[parenDepth] = index + (subPath ? 1 : 0);
				}
			}
			return allPath;
		}

		//bound = bindings && bound;
		if (bound && !eq) {
			path = bound + path; // e.g. some.fn(...)^some.path - so here path is "^some.path"
		}
		operator = operator || "";
		lftPrn = lftPrn || lftPrn0 || lftPrn2;
		path = path || path2;
		// Could do this - but not worth perf cost?? :-
		// if (!path.lastIndexOf("#data.", 0)) { path = path.slice(6); } // If path starts with "#data.", remove that.
		prn = prn || prn2 || "";

		var expr, exprFn, binds, theOb, newOb,
			rtSq = ")";

		if (prn === "[") {
			prn  ="[j._sq(";
			rtSq = ")]";
		}

		if (err && !aposed && !quoted) {
			syntaxError(params);
		} else {
			if (bindings && rtPrnDot && !aposed && !quoted) {
				// This is a binding to a path in which an object is returned by a helper/data function/expression, e.g. foo()^x.y or (a?b:c)^x.y
				// We create a compiled function to get the object instance (which will be called when the dependent data of the subexpression changes, to return the new object, and trigger re-binding of the subsequent path)
				if (!named || boundName || bindto) {
					expr = pathStart[parenDepth - 1];
					if (full.length - 1 > index - (expr || 0)) { // We need to compile a subexpression
						expr = full.slice(expr, index + all.length);
						if (exprFn !== true) { // If not reentrant call during compilation
							binds = bindto || bndStack[parenDepth-1].bd;
							// Insert exprOb object, to be used during binding to return the computed object
							theOb = binds[binds.length-1];
							if (theOb && theOb.prm) {
								while (theOb.sb && theOb.sb.prm) {
									theOb = theOb.sb;
								}
								newOb = theOb.sb = {path: theOb.sb, bnd: theOb.bnd};
							} else {
								binds.push(newOb = {path: binds.pop()}); // Insert exprOb object, to be used during binding to return the computed object
							}											 // (e.g. "some.object()" in "some.object().a.b" - to be used as context for binding the following tokens "a.b")
						}
						rtPrnDot = delimOpenChar1 + ":" + expr // The parameter or function subexpression
							+ " onerror=''" // set onerror='' in order to wrap generated code with a try catch - returning '' as object instance if there is an error/missing parent
							+ delimCloseChar0;
						exprFn = tmplLinks[rtPrnDot];
						if (!exprFn) {
							tmplLinks[rtPrnDot] = true; // Flag that this exprFn (for rtPrnDot) is being compiled
							tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true); // Compile the expression (or use cached copy already in tmpl.links)
						}
						if (exprFn !== true && newOb) {
							// If not reentrant call during compilation
							newOb._jsv = exprFn;
							newOb.prm = bndCtx.bd;
							newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
						}
					}
				}
			}
			return (aposed
				// within single-quoted string
				? (aposed = !apos, (aposed ? all : lftPrn2 + '"'))
				: quoted
				// within double-quoted string
					? (quoted = !quot, (quoted ? all : lftPrn2 + '"'))
					:
				(
					(lftPrn
						? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {bd: []}, lftPrn)
						: "")
					+ (space
						? (parenDepth
							? ""
				// New arg or prop - so insert backspace \b (\x08) as separator for named params, used subsequently by rBuildHash, and prepare new bindings array
							: (paramIndex = full.slice(paramIndex, index), named
								? (named = boundName = bindto = false, "\b")
								: "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b")
						)
						: eq
				// named param. Remove bindings for arg and create instead bindings array for prop
							? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = path, boundName = bound, paramIndex = index + all.length, bound && (bindings = bndCtx.bd = pathBindings[named] = []), path + ':')
							: path
				// path
								? (path.split("^").join(".").replace(rPath, parsePath)
									+ (prn
				// some.fncall(
										? (bndCtx = bndStack[++parenDepth] = {bd: []}, fnCall[parenDepth] = rtSq, prn)
										: operator)
								)
								: operator
				// operator
									? operator
									: rtPrn
				// function
										? ((rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn)
											+ (prn // rtPrn and prn, e.g )( in (a)() or a()(), or )[ in a()[]
												? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn)
												: "")
										)
										: comma
											? (fnCall[parenDepth] || syntaxError(params), ",") // We don't allow top-level literal arrays or objects
											: lftPrn0
												? ""
												: (aposed = apos, quoted = quot, '"')
				))
			);
		}
	}

	var named, bindto, boundName,
		quoted, // boolean for string content in double quotes
		aposed, // or in single quotes
		bindings = pathBindings && pathBindings[0], // bindings array for the first arg
		bndCtx = {bd: bindings},
		bndStack = {0: bndCtx},
		paramIndex = 0, // list,
		tmplLinks = (tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {})) || topView.tmpl.links,
		// The following are used for tracking path parsing including nested paths, such as "a.b(c^d + (e))^f", and chained computed paths such as
		// "a.b().c^d().e.f().g" - which has four chained paths, "a.b()", "^c.d()", ".e.f()" and ".g"
		parenDepth = 0,
		fnCall = {}, // We are in a function call
		pathStart = {}, // tracks the start of the current path such as c^d() in the above example
		result = (params + (tmpl ? " " : "")).replace(rParams, parseTokens);

	return !parenDepth && result || syntaxError(params); // Syntax error if unbalanced parens in params expression
}

function buildCode(ast, tmpl, isLinkExpr) {
	// Build the template function code from the AST nodes, and set as property on the passed-in template object
	// Used for compiling templates, and also by JsViews to build functions for data link expressions
	var i, node, tagName, converter, tagCtx, hasTag, hasEncoder, getsVal, hasCnvt, useCnvt, tmplBindings, pathBindings, params, boundOnErrStart, boundOnErrEnd,
		tagRender, nestedTmpls, tmplName, nestedTmpl, tagAndElses, content, markup, nextIsElse, oldCode, isElse, isGetVal, tagCtxFn, onError, tagStart, trigger,
		tmplBindingKey = 0,
		useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
		code = "",
		tmplOptions = {},
		l = ast.length;

	if ("" + tmpl === tmpl) {
		tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
		tmpl = 0;
	} else {
		tmplName = tmpl.tmplName || "unnamed";
		if (tmpl.allowCode) {
			tmplOptions.allowCode = true;
		}
		if (tmpl.debug) {
			tmplOptions.debug = true;
		}
		tmplBindings = tmpl.bnds;
		nestedTmpls = tmpl.tmpls;
	}
	for (i = 0; i < l; i++) {
		// AST nodes: [0: tagName, 1: converter, 2: content, 3: params, 4: code, 5: onError, 6: trigger, 7:pathBindings, 8: contentMarkup]
		node = ast[i];

		// Add newline for each callout to t() c() etc. and each markup string
		if ("" + node === node) {
			// a markup string to be inserted
			code += '\n+"' + node + '"';
		} else {
			// a compiled tag expression to be inserted
			tagName = node[0];
			if (tagName === "*") {
				// Code tag: {{* }}
				code += ";\n" + node[1] + "\nret=ret";
			} else {
				converter = node[1];
				content = !isLinkExpr && node[2];
				tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
				onError = node[5];
				trigger = node[6];
				markup = node[8] && node[8].replace(rUnescapeQuotes, "$1");
				if (isElse = tagName === "else") {
					if (pathBindings) {
						pathBindings.push(node[7]);
					}
				} else {
					tmplBindingKey = 0;
					if (tmplBindings && (pathBindings = node[7])) { // Array of paths, or false if not data-bound
						pathBindings = [pathBindings];
						tmplBindingKey = tmplBindings.push(1); // Add placeholder in tmplBindings for compiled function
					}
				}
				useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]);
				// useViews is for perf optimization. For render() we only use views if necessary - for the more advanced scenarios.
				// We use views if there are props, contextual properties or args with #... (other than #index) - but you can force
				// using the full view infrastructure, (and pay a perf price) by opting in: Set useViews: true on the template, manually...
				if (isGetVal = tagName === ":") {
					if (converter) {
						tagName = converter === HTML ? ">" : converter + tagName;
					}
				} else {
					if (content) { // TODO optimize - if content.length === 0 or if there is a tmpl="..." specified - set content to null / don't run this compilation code - since content won't get used!!
						// Create template object for nested template
						nestedTmpl = tmplObject(markup, tmplOptions);
						nestedTmpl.tmplName = tmplName + "/" + tagName;
						// Compile to AST and then to compiled function
						nestedTmpl.useViews = nestedTmpl.useViews || useViews;
						buildCode(content, nestedTmpl);
						useViews = nestedTmpl.useViews;
						nestedTmpls.push(nestedTmpl);
					}

					if (!isElse) {
						// This is not an else tag.
						tagAndElses = tagName;
						useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow);
						// Switch to a new code string for this bound tag (and its elses, if it has any) - for returning the tagCtxs array
						oldCode = code;
						code = "";
					}
					nextIsElse = ast[i + 1];
					nextIsElse = nextIsElse && nextIsElse[0] === "else";
				}
				tagStart = onError ? ";\ntry{\nret+=" : "\n+";
				boundOnErrStart = "";
				boundOnErrEnd = "";

				if (isGetVal && (pathBindings || trigger || converter && converter !== HTML)) {
					// For convertVal we need a compiled function to return the new tagCtx(s)
					tagCtxFn = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagName
										+ "\nreturn {" + tagCtx + "};");
					tagCtxFn._er = onError;
					tagCtxFn._tag = tagName;

					if (isLinkExpr) {
						return tagCtxFn;
					}

					setPaths(tagCtxFn, pathBindings);
					tagRender = 'c("' + converter + '",view,';
					useCnvt = true;
					boundOnErrStart = tagRender + tmplBindingKey + ",";
					boundOnErrEnd = ")";
				}
				code += (isGetVal
					? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt // Call _cnvt if there is a converter: {{cnvt: ... }} or {^{cnvt: ... }}
						? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (pathBindings
							? ((tmplBindings[tmplBindingKey - 1] = tagCtxFn), tmplBindingKey) // Store the compiled tagCtxFn in tmpl.bnds, and pass the key to convertVal()
							: "{" + tagCtx + "}") + ")")
						: tagName === ">"
							? (hasEncoder = true, "h(" + params[0] + ")")
							: (getsVal = true, "((v=" + params[0] + ')!=null?v:' + (isLinkExpr ? 'null)' : '"")'))
							// Non strict equality so data-link="title{:expr}" with expr=null/undefined removes title attribute
					)
					: (hasTag = true, "\n{view:view,tmpl:" // Add this tagCtx to the compiled code for the tagCtxs to be passed to renderTag()
						+ (content ? nestedTmpls.length : "0") + "," // For block tags, pass in the key (nestedTmpls.length) to the nested content template
						+ tagCtx + "},"));

				if (tagAndElses && !nextIsElse) {
					// This is a data-link expression or an inline tag without any elses, or the last {{else}} of an inline tag
					// We complete the code for returning the tagCtxs array
					code = "[" + code.slice(0, -1) + "]";
					tagRender = 't("' + tagAndElses + '",view,this,';
					if (isLinkExpr || pathBindings) {
						// This is a bound tag (data-link expression or inline bound tag {^{tag ...}}) so we store a compiled tagCtxs function in tmp.bnds
						code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + "\nreturn " + code + ";");
						code._er = onError;
						code._tag = tagAndElses;
						if (pathBindings) {
							setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
						}
						if (isLinkExpr) {
							return code; // For a data-link expression we return the compiled tagCtxs function
						}
						boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
						boundOnErrEnd = ")";
					}

					// This is the last {{else}} for an inline tag.
					// For a bound tag, pass the tagCtxs fn lookup key to renderTag.
					// For an unbound tag, include the code directly for evaluating tagCtxs array
					code = oldCode + tagStart + tagRender + (tmplBindingKey || code) + ")";
					pathBindings = 0;
					tagAndElses = 0;
				}
				if (onError) {
					useViews = true;
					code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
				}
			}
		}
	}
	// Include only the var references that are needed in the code
	code = "// " + tmplName

		+ "\nvar v"
		+ (hasTag ? ",t=j._tag" : "")                // has tag
		+ (hasCnvt ? ",c=j._cnvt" : "")              // converter
		+ (hasEncoder ? ",h=j._html" : "")           // html converter
		+ (isLinkExpr ? ";\n" : ',ret=""\n')
		+ (tmplOptions.debug ? "debugger;" : "")
		+ code
		+ (isLinkExpr ? "\n" : ";\nreturn ret;");

	if ($subSettings.debugMode !== false) {
		code = "try {\n" + code + "\n}catch(e){\nreturn j._err(e, view);\n}";
	}

	try {
		code = new Function("data,view,j,u", code);
	} catch (e) {
		syntaxError("Compiled template code:\n\n" + code + '\n: "' + e.message + '"');
	}
	if (tmpl) {
		tmpl.fn = code;
		tmpl.useViews = !!useViews;
	}
	return code;
}

//==========
// Utilities
//==========

// Merge objects, in particular contexts which inherit from parent contexts
function extendCtx(context, parentContext) {
	// Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
	// If neither context nor parentContext are defined, return undefined
	return context && context !== parentContext
		? (parentContext
			? $extend($extend({}, parentContext), context)
			: context)
		: parentContext && $extend({}, parentContext);
}

// Get character entity for HTML and Attribute encoding
function getCharEntity(ch) {
	return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
}

function getTargetProps(source) {
	// this pointer is theMap - which has tagCtx.props too
	// arguments: tagCtx.args.
	var key, prop,
		props = [];

	if (typeof source === OBJECT) {
		for (key in source) {
			prop = source[key];
			if (key !== $expando && source.hasOwnProperty(key) && !$isFunction(prop)) {
				props.push({key: key, prop: prop});
			}
		}
	}
	return props;
}

function $fnRender(data, context, noIteration) {
	var tmplElem = this.jquery && (this[0] || error('Unknown template: "' + this.selector + '"')),
		tmpl = tmplElem.getAttribute(tmplAttr);

	return renderContent.call(tmpl ? $.data(tmplElem)[jsvTmpl] : $templates(tmplElem), data, context, noIteration);
}

//========================== Register converters ==========================

function htmlEncode(text) {
	// HTML encode: Replace < > & ' and " by corresponding entities.
	return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
}

//========================== Initialize ==========================

$sub = $views.sub;
$viewsSettings = $views.settings;

if (!(jsr || $ && $.render)) {
	// JsRender not already loaded, or loaded without jQuery, and we are now moving from jsrender namespace to jQuery namepace
	for (jsvStoreName in jsvStores) {
		registerStore(jsvStoreName, jsvStores[jsvStoreName]);
	}

	$converters = $views.converters;
	$helpers = $views.helpers;
	$tags = $views.tags;

	$sub._tg.prototype = {
		baseApply: baseApply,
		cvtArgs: convertArgs
	};

	topView = $sub.topView = new View();

	//BROWSER-SPECIFIC CODE
	if ($) {

		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery (= $) is loaded

		$.fn.render = $fnRender;
		$expando = $.expando;
		if ($.observable) {
			$extend($sub, $.views.sub); // jquery.observable.js was loaded before jsrender.js
			$views.map = $.views.map;
		}

	} else {
		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery is not loaded.

		$ = {};

		if (setGlobals) {
			global.jsrender = $; // We are loading jsrender.js from a script element, not AMD or CommonJS, so set global
		}

		// Error warning if jsrender.js is used as template engine on Node.js (e.g. Express or Hapi...)
		// Use jsrender-node.js instead...
		$.renderFile = $.__express = $.compile = function() { throw "Node.js: use npm jsrender, or jsrender-node.js"; };

		//END BROWSER-SPECIFIC CODE
		$.isFunction = function(ob) {
			return typeof ob === "function";
		};

		$.isArray = Array.isArray || function(obj) {
			return ({}.toString).call(obj) === "[object Array]";
		};

		$sub._jq = function(jq) { // private method to move from JsRender APIs from jsrender namespace to jQuery namespace
			if (jq !== $) {
				$extend(jq, $); // map over from jsrender namespace to jQuery namespace
				$ = jq;
				$.fn.render = $fnRender;
				delete $.jsrender;
				$expando = $.expando;
			}
		};

		$.jsrender = versionNumber;
	}
	$subSettings = $sub.settings;
	$subSettings.allowCode = false;
	$isFunction = $.isFunction;
	$.render = $render;
	$.views = $views;
	$.templates = $templates = $views.templates;

	for (setting in $subSettings) {
		addSetting(setting);
	}

	($viewsSettings.debugMode = function(debugMode) {
		return debugMode === undefined
			? $subSettings.debugMode
			: (
				$subSettings.debugMode = debugMode,
				$subSettings.onError = debugMode + "" === debugMode
					? new Function("", "return '" + debugMode + "';" )
					: $isFunction(debugMode)
						? debugMode
						: undefined,
				$viewsSettings);
	})(false); // jshint ignore:line

	$subSettingsAdvanced = $subSettings.advanced = {
		useViews: false,
		_jsv: false // For global access to JsViews store
	};

	//========================== Register tags ==========================

	$tags({
		"if": {
			render: function(val) {
				// This function is called once for {{if}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				// If not done (a previous block has not been rendered), look at expression for this block and render the block if expression is truthy
				// Otherwise return ""
				var self = this,
					tagCtx = self.tagCtx,
					ret = (self.rendering.done || !val && (arguments.length || !tagCtx.index))
						? ""
						: (self.rendering.done = true, self.selected = tagCtx.index,
							// Test is satisfied, so render content on current context. We call tagCtx.render() rather than return undefined
							// (which would also render the tmpl/content on the current context but would iterate if it is an array)
							tagCtx.render(tagCtx.view, true)); // no arg, so renders against parentView.data
				return ret;
			},
			flow: true
		},
		"for": {
			render: function(val) {
				// This function is called once for {{for}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				var finalElse = !arguments.length,
					value,
					self = this,
					tagCtx = self.tagCtx,
					result = "",
					done = 0;

				if (!self.rendering.done) {
					value = finalElse ? tagCtx.view.data : val; // For the final else, defaults to current data without iteration.
					if (value !== undefined) {
						result += tagCtx.render(value, finalElse); // Iterates except on final else, if data is an array. (Use {{include}} to compose templates without array iteration)
						done += $isArray(value) ? value.length : 1;
					}
					if (self.rendering.done = done) {
						self.selected = tagCtx.index;
					}
					// If nothing was rendered we will look at the next {{else}}. Otherwise, we are done.
				}
				return result;
			},
			flow: true
		},
		props: {
			baseTag: "for",
			dataMap: dataMap(getTargetProps),
			flow: true
		},
		include: {
			flow: true
		},
		"*": {
			// {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		":*": {
			// {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		dbg: $helpers.dbg = $converters.dbg = dbgBreak // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.
	});

	$converters({
		html: htmlEncode,
		attr: htmlEncode, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
		url: function(text) {
			// URL encoding helper.
			return text != undefined ? encodeURI("" + text) : text === null ? text : ""; // null returns null, e.g. to remove attribute. undefined returns ""
		}
	});
}
//========================== Define default delimiters ==========================
$subSettings = $sub.settings;
$isArray = ($||jsr).isArray;
$viewsSettings.delimiters("{{", "}}", "^");

if (jsrToJq) { // Moving from jsrender namespace to jQuery namepace - copy over the stored items (templates, converters, helpers...)
	jsr.views.sub._jq($);
}
return $ || jsr;
}, window));
/*! jsviews.js v0.9.82 (Beta) single-file version: http://jsviews.com/ */
/*! includes JsRender, JsObservable and JsViews - see: http://jsviews.com/#download */

/* Interactive data-driven views using JsRender templates */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JsRender >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* JsRender:
 * See http://jsviews.com/#jsrender and http://github.com/BorisMoore/jsrender
 * Copyright 2016, Boris Moore
 * Released under the MIT License.
 */

//jshint -W018, -W041

(function(factory, global) {
	// global var is the this object, which is window when running in the usual browser environment
	var $ = global.jQuery;

	if (typeof exports === "object") { // CommonJS e.g. Browserify
		module.exports = $
			? factory(global, $)
			: function($) { // If no global jQuery, take jQuery passed as parameter: require("jsviews")(jQuery)
				return factory(global, $);
			};
	} else if (typeof define === "function" && define.amd) { // AMD script loader, e.g. RequireJS
		define(["jquery"], function($) {
			return factory(global, $);
		}); // Require jQuery
	} else { // Browser using plain <script> tag
		factory(global, false);
	}
} (

// factory (for jsviews.js)
function(global, $) {
"use strict";

//========================== Top-level vars ==========================

// global var is the this object, which is window when running in the usual browser environment
var setGlobals = $ === false; // Only set globals if script block in browser (not AMD and not CommonJS)

$ = $ || global.jQuery; // $ is jQuery passed in by CommonJS loader (Browserify), or global jQuery.

if (!$ || !$.fn) {
	// jQuery is not loaded.
	throw "JsViews requires jQuery"; // We require jQuery
}

var versionNumber = "v0.9.82",

	jsvStoreName, rTag, rTmplString, topView, $views, $observe, $observable, $expando,

//TODO	tmplFnsCache = {},
	$isFunction, $isArray, $templates, $converters, $helpers, $tags, $sub, $subSettings, $subSettingsAdvanced, $viewsSettings, delimOpenChar0, delimOpenChar1, delimCloseChar0, delimCloseChar1, linkChar, setting, baseOnError,

	rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
	//        not                               object     helper    view  viewProperty pathTokens      leafToken

	rParams = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//          lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                           prn2  space
	// (left paren? followed by (path? followed by operator) or (path followed by left paren?)) or comma or apos or quot or right paren or space

	isRenderCall,
	rNewLine = /[ \t]*(\r\n|\n|\r)/g,
	rUnescapeQuotes = /\\(['"])/g,
	rEscapeQuotes = /['"\\]/g, // Escape quotes and \ character
	rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
	rTestElseIf = /^if\s/,
	rFirstElem = /<(\w+)[>\s]/,
	rAttrEncode = /[\x00`><"'&=]/g, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
	rIsHtml = /[\x00`><\"'&=]/,
	rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
	rWrappedInViewMarker = /^\#\d+_`[\s\S]*\/\d+_`$/,
	rHtmlEncode = rAttrEncode,
	viewId = 0,
	charEntities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\x00": "&#0;",
		"'": "&#39;",
		'"': "&#34;",
		"`": "&#96;",
		"=": "&#61;"
	},
	HTML = "html",
	OBJECT = "object",
	tmplAttr = "data-jsv-tmpl",
	jsvTmpl = "jsvTmpl",
	indexStr = "For #index in nested block use #getIndex().",
	$render = {},

	jsr = global.jsrender,
	jsrToJq = jsr && $ && !$.render, // JsRender already loaded, without jQuery. but we will re-load it now to attach to jQuery

	jsvStores = {
		template: {
			compile: compileTmpl
		},
		tag: {
			compile: compileTag
		},
		viewModel: {
			compile: compileViewModel
		},
		helper: {},
		converter: {}
	};

	// views object ($.views if jQuery is loaded, jsrender.views if no jQuery, e.g. in Node.js)
	$views = {
		jsviews: versionNumber,
		sub: {
			// subscription, e.g. JsViews integration
			View: View,
			Err: JsViewsError,
			tmplFn: tmplFn,
			parse: parseParams,
			extend: $extend,
			extendCtx: extendCtx,
			syntaxErr: syntaxError,
			onStore: {},
			addSetting: addSetting,
			settings: {
				allowCode: false
			},
			advSet: noop, // Update advanced settings
			_ths: tagHandlersFromProps,
			_tg: function() {}, // Constructor for tagDef
			_cnvt: convertVal,
			_tag: renderTag,
			_er: error,
			_err: onRenderError,
			_html: htmlEncode,
			_cp: retVal, // Get compiled contextual parameters (or properties) ~foo=expr. In JsRender, simply returns val.
			_sq: function(token) {
				if (token === "constructor") {
					syntaxError("");
				}
				return token;
			}
		},
		settings: {
			delimiters: $viewsDelimiters,
			advanced: function(value) {
				return value
					? (
							$extend($subSettingsAdvanced, value),
							$sub.advSet(),
							$viewsSettings
						)
						: $subSettingsAdvanced;
				}
		},
		getCtx: retVal, // Get ctx.foo value. In JsRender, simply returns val.
		map: dataMap    // If jsObservable loaded first, use that definition of dataMap
	};

function getDerivedMethod(baseMethod, method) {
	return function() {
		var ret,
			tag = this,
			prevBase = tag.base;

		tag.base = baseMethod; // Within method call, calling this.base will call the base method
		ret = method.apply(tag, arguments); // Call the method
		tag.base = prevBase; // Replace this.base to be the base method of the previous call, for chained calls
		return ret;
	};
}

function getMethod(baseMethod, method) {
	// For derived methods (or handlers declared declaratively as in {{:foo onChange=~fooChanged}} replace by a derived method, to allow using this.base(...)
	// or this.baseApply(arguments) to call the base implementation. (Equivalent to this._super(...) and this._superApply(arguments) in jQuery UI)
	if ($isFunction(method)) {
		method = getDerivedMethod(
				!baseMethod
					? noop // no base method implementation, so use noop as base method
					: baseMethod._d
						? baseMethod // baseMethod is a derived method, so us it
						: getDerivedMethod(noop, baseMethod), // baseMethod is not derived so make its base method be the noop method
				method
			);
		method._d = 1; // Add flag that this is a derived method
	}
	return method;
}

function tagHandlersFromProps(tag, tagCtx) {
	for (var prop in tagCtx.props) {
		if (rHasHandlers.test(prop)) {
			tag[prop] = getMethod(tag[prop], tagCtx.props[prop]);
			// Copy over the onFoo props, convert and convertBack from tagCtx.props to tag (overrides values in tagDef).
			// Note: unsupported scenario: if handlers are dynamically added ^onFoo=expression this will work, but dynamically removing will not work.
		}
	}
}

function retVal(val) {
	return val;
}

function noop() {
	return "";
}

function dbgBreak(val) {
	// Usage examples: {{dbg:...}}, {{:~dbg(...)}}, {{dbg .../}}, {^{for ... onAfterLink=~dbg}} etc.
	try {
		console.log("JsRender dbg breakpoint: " + val);
		throw "dbg breakpoint"; // To break here, stop on caught exceptions.
	}
	catch (e) {}
	return this.base ? this.baseApply(arguments) : val;
}

function JsViewsError(message) {
	// Error exception type for JsViews/JsRender
	// Override of $.views.sub.Error is possible
	this.name = ($.link ? "JsViews" : "JsRender") + " Error";
	this.message = message || this.name;
}

function $extend(target, source) {
	for (var name in source) {
		target[name] = source[name];
	}
	return target;
}

(JsViewsError.prototype = new Error()).constructor = JsViewsError;

//========================== Top-level functions ==========================

//===================
// views.delimiters
//===================

function $viewsDelimiters(openChars, closeChars, link) {
	// Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
	// openChars, closeChars: opening and closing strings, each with two characters
	if (!openChars) {
		return $subSettings.delimiters;
	}
	if ($isArray(openChars)) {
		return $viewsDelimiters.apply($views, openChars);
	}

	$subSettings.delimiters = [openChars, closeChars, linkChar = link ? link.charAt(0) : linkChar];

	delimOpenChar0 = openChars.charAt(0); // Escape the characters - since they could be regex special characters
	delimOpenChar1 = openChars.charAt(1);
	delimCloseChar0 = closeChars.charAt(0);
	delimCloseChar1 = closeChars.charAt(1);
	openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1; // Default is "{^{"
	closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1;                   // Default is "}}"
	// Build regex with new delimiters
	//          [tag    (followed by / space or })  or cvtr+colon or html or code] followed by space+params then convertBack?
	rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"
		+ delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)";

	// Make rTag available to JsViews (or other components) for parsing binding expressions
	$sub.rTag = "(?:" + rTag + ")";
	//                        { ^? {   tag+params slash?  or closingTag                                                   or comment
	rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g");

	// Default:  bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
	//      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}

	$sub.rTmpl = new RegExp("<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars);
	// $sub.rTmpl looks for html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}. Each of these strings are considered
	// NOT to be jQuery selectors
	return $viewsSettings;
}

//=========
// View.get
//=========

function getView(inner, type) { //view.get(inner, type)
	if (!type && inner !== true) {
		// view.get(type)
		type = inner;
		inner = undefined;
	}

	var views, i, l, found,
		view = this,
		root = !type || type === "root";
		// If type is undefined, returns root view (view under top view).

	if (inner) {
		// Go through views - this one, and all nested ones, depth-first - and return first one with given type.
		// If type is undefined, i.e. view.get(true), return first child view.
		found = type && view.type === type && view;
		if (!found) {
			views = view.views;
			if (view._.useKey) {
				for (i in views) {
					if (found = type ? views[i].get(inner, type) : views[i]) {
						break;
					}
				}
			} else {
				for (i = 0, l = views.length; !found && i < l; i++) {
					found = type ? views[i].get(inner, type) : views[i];
				}
			}
		}
	} else if (root) {
		// Find root view. (view whose parent is top view)
		while (view.parent) {
			found = view;
			view = view.parent;
		}
	} else {
		while (view && !found) {
			// Go through views - this one, and all parent ones - and return first one with given type.
			found = view.type === type ? view : undefined;
			view = view.parent;
		}
	}
	return found;
}

function getNestedIndex() {
	var view = this.get("item");
	return view ? view.index : undefined;
}

getNestedIndex.depends = function() {
	return [this.get("item"), "index"];
};

function getIndex() {
	return this.index;
}

getIndex.depends = "index";

//==========
// View.hlp
//==========

function getHelper(helper, isContextCb) {
	// Helper method called as view.hlp(key) from compiled template, for helpers or template parameters ~foo
	var wrapped, deps,
	view = this,
	res = view.ctx;

	if (res) {
		res = res[helper];
	}
	if (res === undefined) {
		res = $helpers[helper];
	}
	if (res && res._cp) { // If this helper resource is a contextual parameter, ~foo=expr
		if (isContextCb) { // In a context callback for a contextual param, return the [currentData, dependencies...] array - needed for observe call
			deps = $sub._ceo(res[1].deps);  // fn deps, with any exprObs cloned
			deps.unshift(res[0].data);      // view.data
			deps._cp = true;
			return deps;
		}
		res = $views.getCtx(res); // If a contextual param, but not a context callback, return evaluated param - fn(data, view, j)
	}

	if (res) {
		if ($isFunction(res) && !res._wrp) {
			// If it is of type function, and not already wrapped, we will wrap it, so if called with no this pointer it will be called with the
			// view as 'this' context. If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
			// Note that helper functions on deeper paths will have specific this pointers, from the preceding path.
			// For example, ~util.foo() will have the ~util object as 'this' pointer
			wrapped = function() {
				return res.apply((!this || this === global) ? view : this, arguments);
			};
			wrapped._wrp = view;
			$extend(wrapped, res); // Attach same expandos (if any) to the wrapped function
		}
	}
	return wrapped || res;
}

function getTemplate(tmpl) {
	return tmpl && (tmpl.fn
		? tmpl
		: this.getRsc("templates", tmpl) || $templates(tmpl)); // not yet compiled
}

//==============
// views._cnvt
//==============

function convertVal(converter, view, tagCtx, onError) {
	// self is template object or linkCtx object
	var tag, value,
		// if tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtx
		boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx-1],
		linkCtx = view.linkCtx; // For data-link="{cvt:...}"...

	if (onError !== undefined) {
		tagCtx = onError = {props: {}, args: [onError]};
	} else if (boundTag) {
		tagCtx = boundTag(view.data, view, $sub);
	}

	value = tagCtx.args[0];
	if (converter || boundTag) {
		tag = linkCtx && linkCtx.tag;
		if (!tag) {
			tag = $extend(new $sub._tg(), {
				_: {
					inline: !linkCtx,
					bnd: boundTag,
					unlinked: true
				},
				tagName: ":",
				cvt: converter,
				flow: true,
				tagCtx: tagCtx
			});
			if (linkCtx) {
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
		}
		tag._er = onError && value;
		tagHandlersFromProps(tag, tagCtx);

		tagCtx.view = view;

		tag.ctx = tagCtx.ctx || tag.ctx || {};
		tagCtx.ctx = undefined;

		value = tag.cvtArgs(converter !== "true" && converter)[0]; // If there is a convertBack but no convert, converter will be "true"

		// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
		value = boundTag && view._.onRender
			? view._.onRender(value, view, tag)
			: value;
	}
	return value != undefined ? value : "";
}

function convertArgs(converter) {
	var tag = this,
		tagCtx = tag.tagCtx,
		view = tagCtx.view,
		args = tagCtx.args;

	converter = converter || tag.convert;
	converter = converter && ("" + converter === converter
		? (view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'"))
		: converter);

	args = !args.length && !tagCtx.index // On the opening tag with no args, bind to the current data context
		? [view.data]
		: converter
			? args.slice() // If there is a converter, use a copy of the tagCtx.args array for rendering, and replace the args[0] in
			// the copied array with the converted value. But we do not modify the value of tag.tagCtx.args[0] (the original args array)
			: args; // If no converter, get the original tagCtx.args

	if (converter) {
		if (converter.depends) {
			tag.depends = $sub.getDeps(tag.depends, tag, converter.depends, converter);
		}
		args[0] = converter.apply(tag, args);
	}
	return args;
}

//=============
// views._tag
//=============

function getResource(resourceType, itemName) {
	var res, store,
		view = this;
	while ((res === undefined) && view) {
		store = view.tmpl && view.tmpl[resourceType];
		res = store && store[itemName];
		view = view.parent;
	}
	return res || $views[resourceType][itemName];
}

function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
	parentView = parentView || topView;
	var tag, tag_, tagDef, template, tags, attr, parentTag, i, l, itemRet, tagCtx, tagCtxCtx,
		content, callInit, mapDef, thisMap, args, props, initialTmpl, tagDataMap, contentCtx,
		ret = "",
		linkCtx = parentView.linkCtx || 0,
		ctx = parentView.ctx,
		parentTmpl = tmpl || parentView.tmpl,
		// if tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtxs
		boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs-1];

	if (tagName._is === "tag") {
		tag = tagName;
		tagName = tag.tagName;
		tagCtxs = tag.tagCtxs;
		template = tag.template;
	} else {
		tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
		template = tagDef.template;
	}

	if (onError !== undefined) {
		ret += onError;
		tagCtxs = onError = [{props: {}, args: []}];
	} else if (boundTag) {
		tagCtxs = boundTag(parentView.data, parentView, $sub);
	}

	l = tagCtxs.length;
	for (i = 0; i < l; i++) {
		tagCtx = tagCtxs[i];
		if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag._.inline || tag._er) {
			// Initialize tagCtx
			// For block tags, tagCtx.tmpl is an integer > 0
			if (content = parentTmpl.tmpls && tagCtx.tmpl) {
				content = tagCtx.content = parentTmpl.tmpls[content - 1];
			}
			tagCtx.index = i;
			tagCtx.tmpl = content; // Set the tmpl property to the content of the block tag
			tagCtx.render = renderContent;
			tagCtx.view = parentView;
			tagCtx.ctx = extendCtx(tagCtx.ctx, ctx); // Clone and extend parentView.ctx
		}
		if (tmpl = tagCtx.props.tmpl) {
			// If the tmpl property is overridden, set the value (when initializing, or, in case of binding: ^tmpl=..., when updating)
			tagCtx.tmpl = parentView.getTmpl(tmpl);
		}

		if (!tag) {
			// This will only be hit for initial tagCtx (not for {{else}}) - if the tag instance does not exist yet
			// Instantiate tag if it does not yet exist
			// If the tag has not already been instantiated, we will create a new instance.
			// ~tag will access the tag, even within the rendering of the template content of this tag.
			// From child/descendant tags, can access using ~tag.parent, or ~parentTags.tagName
			tag = new tagDef._ctr();
			callInit = !!tag.init;

			tag.parent = parentTag = ctx && ctx.tag;
			tag.tagCtxs = tagCtxs;
			tagDataMap = tag.dataMap;

			if (linkCtx) {
				tag._.inline = false;
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			if (tag._.bnd = boundTag || linkCtx.fn) {
				// Bound if {^{tag...}} or data-link="{tag...}"
				tag._.arrVws = {};
			} else if (tag.dataBoundOnly) {
				error("{^{" + tagName + "}} tag must be data-bound");
			}
			//TODO better perf for childTags() - keep child tag.tags array, (and remove child, when disposed)
			// tag.tags = [];
		}
		tagCtxs = tag.tagCtxs;
		tagDataMap = tag.dataMap;

		tagCtx.tag = tag;
		if (tagDataMap && tagCtxs) {
			tagCtx.map = tagCtxs[i].map; // Copy over the compiled map instance from the previous tagCtxs to the refreshed ones
		}
		if (!tag.flow) {
			tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {};

			// tags hash: tag.ctx.tags, merged with parentView.ctx.tags,
			tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};
			if (parentTag) {
				tags[parentTag.tagName] = parentTag;
				//TODO better perf for childTags: parentTag.tags.push(tag);
			}
			tags[tag.tagName] = tagCtxCtx.tag = tag;
		}
	}
	if (!(tag._er = onError)) {
		tagHandlersFromProps(tag, tagCtxs[0]);
		tag.rendering = {}; // Provide object for state during render calls to tag and elses. (Used by {{if}} and {{for}}...)
		for (i = 0; i < l; i++) {
			tagCtx = tag.tagCtx = tagCtxs[i];
			props = tagCtx.props;
			args = tag.cvtArgs();

			if (mapDef = props.dataMap || tagDataMap) {
				if (args.length || props.dataMap) {
					thisMap = tagCtx.map;
					if (!thisMap || thisMap.src !== args[0] || isUpdate) {
						if (thisMap && thisMap.src) {
							thisMap.unmap(); // only called if observable map - not when only used in JsRender, e.g. by {{props}}
						}
						thisMap = tagCtx.map = mapDef.map(args[0], props, undefined, !tag._.bnd);
					}
					args = [thisMap.tgt];
				}
			}
			tag.ctx = tagCtx.ctx;

			if (!i) {
				if (callInit) {
					initialTmpl = tag.template;
					tag.init(tagCtx, linkCtx, tag.ctx);
					callInit = undefined;
				}
				if (linkCtx) {
					// Set attr on linkCtx to ensure outputting to the correct target attribute.
					// Setting either linkCtx.attr or this.attr in the init() allows per-instance choice of target attrib.
					linkCtx.attr = tag.attr = linkCtx.attr || tag.attr;
				}
				attr = tag.attr;
				tag._.noVws = attr && attr !== HTML;
			}

			itemRet = undefined;
			if (tag.render) {
				itemRet = tag.render.apply(tag, args);
				if (parentView.linked && itemRet && tag.linkedElem && !rWrappedInViewMarker.test(itemRet)) {
					// When a tag renders content from the render method, with data linking, and has a linkedElem binding, then we need to wrap with
					// view markers, if absent, so the content is a view associated with the tag, which will correctly dispose bindings if deleted.
					itemRet = renderWithViews($.templates(itemRet), args[0], undefined, undefined, parentView, undefined, undefined, tag);
				}
			}
			if (!args.length) {
				args = [parentView]; // no arguments - (e.g. {{else}}) get data context from view.
			}
			if (itemRet === undefined) {
				contentCtx = args[0]; // Default data context for wrapped block content is the first argument. Defined tag.contentCtx function to override this.
				if (tag.contentCtx) {
					contentCtx = tag.contentCtx(contentCtx) || contentCtx;
				}
				itemRet = tagCtx.render(contentCtx, true) || (isUpdate ? undefined : "");
			}
			// No return value from render, and no template/content tagCtx.render(...), so return undefined
			ret = ret ? ret + (itemRet || "") : itemRet; // If no rendered content, this will be undefined
		}
		tag.rendering = undefined;
	}
	tag.tagCtx = tagCtxs[0];
	tag.ctx = tag.tagCtx.ctx;

	if (tag._.noVws) {
			if (tag._.inline) {
			// inline tag with attr set to "text" will insert HTML-encoded content - as if it was element-based innerText
			ret = attr === "text"
				? $converters.html(ret)
				: "";
		}
	}
	return boundTag && parentView._.onRender
		// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
		? parentView._.onRender(ret, parentView, tag)
		: ret;
}

//=================
// View constructor
//=================

function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
	// Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
	var views, parentView_, tag, self_,
		self = this,
		isArray = type === "array";

	self.content = contentTmpl;
	self.views = isArray ? [] : {};
	self.parent = parentView;
	self.type = type || "top";
	self.data = data;
	self.tmpl = template;
	// If the data is an array, this is an 'array view' with a views array for each child 'item view'
	// If the data is not an array, this is an 'item view' with a views 'hash' object for any child nested views
	// ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
	self_ = self._ = {
		key: 0,
		useKey: isArray ? 0 : 1,
		id: "" + viewId++,
		onRender: onRender,
		bnds: {}
	};
	self.linked = !!onRender;
	if (parentView) {
		views = parentView.views;
		parentView_ = parentView._;
		if (parentView_.useKey) {
			// Parent is not an 'array view'. Add this view to its views object
			// self._key = is the key in the parent view hash
			views[self_.key = "_" + parentView_.useKey++] = self;
			self.index = indexStr;
			self.getIndex = getNestedIndex;
		} else if (views.length === (self_.key = self.index = key)) { // Parent is an 'array view'. Add this view to its views array
			views.push(self); // Adding to end of views array. (Using push when possible - better perf than splice)
		} else {
			views.splice(key, 0, self); // Inserting in views array
		}
		// If no context was passed in, use parent context
		// If context was passed in, it should have been merged already with parent context
		self.ctx = context || parentView.ctx;
	} else {
		self.ctx = context;
	}
}

View.prototype = {
	get: getView,
	getIndex: getIndex,
	getRsc: getResource,
	getTmpl: getTemplate,
	hlp: getHelper,
	_is: "view"
};

//====================================================
// Registration
//====================================================

function compileChildResources(parentTmpl) {
	var storeName, storeNames, resources;
	for (storeName in jsvStores) {
		storeNames = storeName + "s";
		if (parentTmpl[storeNames]) {
			resources = parentTmpl[storeNames];    // Resources not yet compiled
			parentTmpl[storeNames] = {};               // Remove uncompiled resources
			$views[storeNames](resources, parentTmpl); // Add back in the compiled resources
		}
	}
}

//===============
// compileTag
//===============

function compileTag(name, tagDef, parentTmpl) {
	var tmpl, baseTag, prop,
		compiledDef = new $sub._tg();

	function Tag() {
		var tag = this;
		tag._ = {
			inline: true,
			unlinked: true
		};

		tag.tagName = name;
	}

	if ($isFunction(tagDef)) {
		// Simple tag declared as function. No presenter instantation.
		tagDef = {
			depends: tagDef.depends,
			render: tagDef
		};
	} else if ("" + tagDef === tagDef) {
		tagDef = {template: tagDef};
	}
	if (baseTag = tagDef.baseTag) {
		tagDef.flow = !!tagDef.flow; // Set flow property, so defaults to false even if baseTag has flow=true
		tagDef.baseTag = baseTag = "" + baseTag === baseTag
			? (parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag])
			: baseTag;

		compiledDef = $extend(compiledDef, baseTag);

		for (prop in tagDef) {
			compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
		}
	} else {
		compiledDef = $extend(compiledDef, tagDef);
	}

	// Tag declared as object, used as the prototype for tag instantiation (control/presenter)
	if ((tmpl = compiledDef.template) !== undefined) {
		compiledDef.template = "" + tmpl === tmpl ? ($templates[tmpl] || $templates(tmpl)) : tmpl;
	}
	if (compiledDef.init !== false) {
		// Set init: false on tagDef if you want to provide just a render method, or render and template, but no constructor or prototype.
		// so equivalent to setting tag to render function, except you can also provide a template.
		(Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;
	}

	if (parentTmpl) {
		compiledDef._parentTmpl = parentTmpl;
	}
	return compiledDef;
}

function baseApply(args) {
	// In derived method (or handler declared declaratively as in {{:foo onChange=~fooChanged}} can call base method,
	// using this.baseApply(arguments) (Equivalent to this._superApply(arguments) in jQuery UI)
	return this.base.apply(this, args);
}

//===============
// compileTmpl
//===============

function compileTmpl(name, tmpl, parentTmpl, options) {
	// tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object

	//==== nested functions ====
	function lookupTemplate(value) {
		// If value is of type string - treat as selector, or name of compiled template
		// Return the template object, if already compiled, or the markup string
		var currentName, tmpl;
		if (("" + value === value) || value.nodeType > 0 && (elem = value)) {
			if (!elem) {
				if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
					// tmpl="./some/file.html"
					// If the template is not named, use "./some/file.html" as name.
					if (tmpl = $templates[name = name || value]) {
						value = tmpl;
					} else {
						// BROWSER-SPECIFIC CODE (not on Node.js):
						// Look for server-generated script block with id "./some/file.html"
						elem = document.getElementById(value);
					}
				} else if ($.fn && !$sub.rTmpl.test(value)) {
					try {
						elem = $(document).find(value)[0]; // if jQuery is loaded, test for selector returning elements, and get first element
					} catch (e) {}
				}// END BROWSER-SPECIFIC CODE
			} //BROWSER-SPECIFIC CODE
			if (elem) {
				// Generally this is a script element.
				// However we allow it to be any element, so you can for example take the content of a div,
				// use it as a template, and replace it by the same content rendered against data.
				// e.g. for linking the content of a div to a container, and using the initial content as template:
				// $.link("#content", model, {tmpl: "#content"});
				if (options) {
					// We will compile a new template using the markup in the script element
					value = elem.innerHTML;
				} else {
					// We will cache a single copy of the compiled template, and associate it with the name
					// (renaming from a previous name if there was one).
					currentName = elem.getAttribute(tmplAttr);
					if (currentName) {
						if (currentName !== jsvTmpl) {
							value = $templates[currentName];
							delete $templates[currentName];
						} else if ($.fn) {
							value = $.data(elem)[jsvTmpl];
						}
					} else {
						name = name || ($.fn ? jsvTmpl : value);
						value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
					}
					value.tmplName = name = name || currentName;
					if (name !== jsvTmpl) {
						$templates[name] = value;
					}
					elem.setAttribute(tmplAttr, name);
					if ($.fn) {
						$.data(elem, jsvTmpl, value);
					}
				}
			} // END BROWSER-SPECIFIC CODE
			elem = undefined;
		} else if (!value.fn) {
			value = undefined;
			// If value is not a string. HTML element, or compiled template, return undefined
		}
		return value;
	}

	var elem, compiledTmpl,
		tmplOrMarkup = tmpl = tmpl || "";

	//==== Compile the template ====
	if (options === 0) {
		options = undefined;
		tmplOrMarkup = lookupTemplate(tmplOrMarkup); // Top-level compile so do a template lookup
	}

	// If options, then this was already compiled from a (script) element template declaration.
	// If not, then if tmpl is a template object, use it for options
	options = options || (tmpl.markup ? tmpl : {});
	options.tmplName = name;
	if (parentTmpl) {
		options._parentTmpl = parentTmpl;
	}
	// If tmpl is not a markup string or a selector string, then it must be a template object
	// In that case, get it from the markup property of the object
	if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup))) {
		if (tmplOrMarkup.fn) {
			// If the string references a compiled template object, need to recompile to merge any modified options
			tmplOrMarkup = tmplOrMarkup.markup;
		}
	}
	if (tmplOrMarkup !== undefined) {
		if (tmplOrMarkup.fn || tmpl.fn) {
			// tmpl is already compiled, so use it
			if (tmplOrMarkup.fn) {
				compiledTmpl = tmplOrMarkup;
			}
		} else {
			// tmplOrMarkup is a markup string, not a compiled template
			// Create template object
			tmpl = tmplObject(tmplOrMarkup, options);
			// Compile to AST and then to compiled function
			tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
		}
		if (!compiledTmpl) {
			compiledTmpl = $extend(function() {
				return compiledTmpl.render.apply(compiledTmpl, arguments);
			}, tmpl);

			compileChildResources(compiledTmpl);
		}
		if (name && !parentTmpl && name !== jsvTmpl) {
			$render[name] = compiledTmpl;
		}
		return compiledTmpl;
	}
}

//==== /end of function compileTmpl ====

//=================
// compileViewModel
//=================

function getDefaultVal(defaultVal, data) {
	return $.isFunction(defaultVal)
		? defaultVal.call(data)
		: defaultVal;
}

function unmapArray(modelArr) {
		var i, arr = [],
			l = modelArr.length;
		for (i=0; i<l; i++) {
			arr.push(modelArr[i].unmap());
		}
		return arr;
}

function compileViewModel(name, type) {
	var i, constructor,
		viewModels = this,
		getters = type.getters,
		extend = type.extend,
		id = type.id,
		proto = $.extend({
			_is: name || "unnamed",
			unmap: unmap,
			merge: merge
		}, extend),
		args = "",
		body = "",
		l = getters ? getters.length : 0,
		$observable = $.observable,
		getterNames = {};

	function GetNew(args) {
		constructor.apply(this, args);
	}

	function vm() {
		return new GetNew(arguments);
	}

	function iterate(data, action) {
		var j, getterType, defaultVal, prop, ob,
			m = getters.length;
		for (j=0; j<m; j++) {
			prop = getters[j];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
				ob = getDefaultVal(defaultVal, data);
			}
			action(ob, getterType && viewModels[getterType.type], prop);
		}
	}

	function map(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var i, j,  l, m, prop,
			ob = data,
			arr = [];

		if ($isArray(data)) {
			data = data || [];
			l = data.length;
			for (i=0; i<l; i++) {
				arr.push(this.map(data[i]));
			}
			arr._is = name;
			arr.unmap = unmap;
			arr.merge = merge;
			return arr;
		}

		if (data) {
			iterate(data, function(ob, viewModel) {
				if (viewModel) { // Iterate to build getters arg array (value, or mapped value)
					ob = viewModel.map(ob);
				}
				arr.push(ob);
			});

			ob = this.apply(this, arr); // Insantiate this View Model, passing getters args array to constructor
			for (prop in data) { // Copy over any other properties. that are not get/set properties
				if (prop !== $expando  && !getterNames[prop]) {
					ob[prop] = data[prop];
				}
			}
		}
		return ob;
	}

	function merge(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var i, j, l, m, prop, mod, found, assigned, ob, newModArr,
			model = this;

		if ($isArray(model)) {
			assigned = {};
			newModArr = [];
			l = data.length;
			m = model.length;
			for (i=0; i<l; i++) {
				ob = data[i];
				found = false;
				for (j=0; j<m && !found; j++) {
					if (assigned[j]) {
						continue;
					}
					mod = model[j];

					if (id) {
						assigned[j] = found = id + "" === id
						? (ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id])
						: id(mod, ob);
					}
				}
				if (found) {
					mod.merge(ob);
					newModArr.push(mod);
				} else {
					newModArr.push(vm.map(ob));
				}
			}
			if ($observable) {
				$observable(model).refresh(newModArr, true);
			} else {
				model.splice.apply(model, [0, model.length].concat(newModArr));
			}
			return;
		}
		iterate(data, function(ob, viewModel, getter) {
			if (viewModel) {
				model[getter]().merge(ob); // Update typed property
			} else {
				model[getter](ob); // Update non-typed property
			}
		});
		for (prop in data) {
			if (prop !== $expando && !getterNames[prop]) {
				model[prop] = data[prop];
			}
		}
	}

	function unmap() {
		var ob, prop, i, l, getterType, arr, value,
			model = this;

		if ($isArray(model)) {
			return unmapArray(model);
		}
		ob = {};
		l = getters.length;
		for (i=0; i<l; i++) {
			prop = getters[i];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			value = model[prop]();
			ob[prop] = getterType && value && viewModels[getterType.type]
				? $isArray(value)
					? unmapArray(value)
					: value.unmap()
				: value;
		}
		for (prop in model) {
			if (prop !== "_is" && !getterNames[prop] && prop !== $expando  && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && !$.isFunction(model[prop])) {
				ob[prop] = model[prop];
			}
		}
		return ob;
	}

	GetNew.prototype = proto;

	for (i=0; i<l; i++) {
		(function(getter) {
			getter = getter.getter || getter;
			getterNames[getter] = i+1;
			var privField = "_" + getter;

			args += (args ? "," : "") + getter;
			body += "this." + privField + " = " + getter + ";\n";
			proto[getter] = proto[getter] || function(val) {
				if (!arguments.length) {
					return this[privField]; // If there is no argument, use as a getter
				}
				if ($observable) {
					$observable(this).setProperty(getter, val);
				} else {
					this[privField] = val;
				}
			};

			if ($observable) {
				proto[getter].set = proto[getter].set || function(val) {
					this[privField] = val; // Setter called by observable property change
				};
			}
		})(getters[i]);
	}

	constructor = new Function(args, body.slice(0, -1));
	constructor.prototype = proto;
	proto.constructor = constructor;

	vm.map = map;
	vm.getters = getters;
	vm.extend = extend;
	vm.id = id;
	return vm;
}

function tmplObject(markup, options) {
	// Template object constructor
	var htmlTag,
		wrapMap = $subSettingsAdvanced._wm || {}, // Only used in JsViews. Otherwise empty: {}
		tmpl = $extend(
			{
				tmpls: [],
				links: {}, // Compiled functions for link expressions
				bnds: [],
				_is: "template",
				render: renderContent
			},
			options
		);

	tmpl.markup = markup;
	if (!options.htmlTag) {
		// Set tmpl.tag to the top-level HTML tag used in the template, if any...
		htmlTag = rFirstElem.exec(markup);
		tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
	}
	htmlTag = wrapMap[tmpl.htmlTag];
	if (htmlTag && htmlTag !== wrapMap.div) {
		// When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
		// Currently not trimmed for <li> tag. (Not worth adding perf cost)
		tmpl.markup = $.trim(tmpl.markup);
	}

	return tmpl;
}

//==============
// registerStore
//==============

function registerStore(storeName, storeSettings) {

	function theStore(name, item, parentTmpl) {
		// The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags

		// For store of name 'thing', Call as:
		//    $.views.things(items[, parentTmpl]),
		// or $.views.things(name, item[, parentTmpl])

		var onStore, compile, itemName, thisStore;
		if (name && typeof name === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
			// Call to $.views.things(items[, parentTmpl]),

			// Adding items to the store
			// If name is a hash, then item is parentTmpl. Iterate over hash and call store for key.
			for (itemName in name) {
				theStore(itemName, name[itemName], item);
			}
			return item || $views;
		}
		// Adding a single unnamed item to the store
		if (item === undefined) {
			item = name;
			name = undefined;
		}
		if (name && "" + name !== name) { // name must be a string
			parentTmpl = item;
			item = name;
			name = undefined;
		}
		thisStore = parentTmpl
			? storeName === "viewModel"
				? parentTmpl
				: (parentTmpl[storeNames] = parentTmpl[storeNames] || {})
			: theStore;
		compile = storeSettings.compile;
		if (item === null) {
			// If item is null, delete this entry
			if (name) {
				delete thisStore[name];
			}
		} else {
			item = compile ? compile.call(thisStore, name, item, parentTmpl, 0) : item;
			if (name) {
				thisStore[name] = item;
			}
		}
		if (compile && item) {
			item._is = storeName; // Only do this for compiled objects (tags, templates...)
		}
		if (item && (onStore = $sub.onStore[storeName])) {
			// e.g. JsViews integration
			onStore(name, item, compile);
		}
		return item;
	}

	var storeNames = storeName + "s";

	$views[storeNames] = theStore;
}

function addSetting(st) {
	$viewsSettings[st] = function(value) {
		return arguments.length
			? ($subSettings[st] = value, $viewsSettings)
			: $subSettings[st];
	};
}

//=========
// dataMap
//=========

function dataMap(mapDef) {
	function Map(source, options) {
		this.tgt = mapDef.getTgt(source, options);
	}

	if ($isFunction(mapDef)) {
		// Simple map declared as function
		mapDef = {
			getTgt: mapDef
		};
	}

	if (mapDef.baseMap) {
		mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
	}

	mapDef.map = function(source, options) {
		return new Map(source, options);
	};
	return mapDef;
}

//==============
// renderContent
//==============

function renderContent(data, context, noIteration, parentView, key, onRender) {
	var i, l, tag, tmpl, tagCtx, isTopRenderCall, prevData, prevIndex,
		view = parentView,
		result = "";

	if (context === true) {
		noIteration = context; // passing boolean as second param - noIteration
		context = undefined;
	} else if (typeof context !== OBJECT) {
		context = undefined; // context must be a boolean (noIteration) or a plain object
	}

	if (tag = this.tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tagCtx = this;
		view = view || tagCtx.view;
		tmpl = view.getTmpl(tag.template || tagCtx.tmpl);
		if (!arguments.length) {
			data = view;
		}
	} else {
		// This is a template.render(...) call
		tmpl = this;
	}

	if (tmpl) {
		if (!parentView && data && data._is === "view") {
			view = data; // When passing in a view to render or link (and not passing in a parent view) use the passed-in view as parentView
		}

		if (view) {
			if (data === view) {
				// Inherit the data from the parent view.
				// This may be the contents of an {{if}} block
				data = view.data;
			}
		}

		isTopRenderCall = !view;
		isRenderCall = isRenderCall || isTopRenderCall;
		if (!view) {
			(context = context || {}).root = data; // Provide ~root as shortcut to top-level data.
		}
		if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
			result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
		} else {
			if (view) { // In a block
				prevData = view.data;
				prevIndex = view.index;
				view.index = indexStr;
			} else {
				view = topView;
				view.data = data;
				view.ctx = context;
			}
			if ($isArray(data) && !noIteration) {
				// Create a view for the array, whose child views correspond to each data item. (Note: if key and parentView are passed in
				// along with parent view, treat as insert -e.g. from view.addViews - so parentView is already the view item for array)
				for (i = 0, l = data.length; i < l; i++) {
					view.index = i;
					view.data = data[i];
					result += tmpl.fn(data[i], view, $sub);
				}
			} else {
				view.data = data;
				result += tmpl.fn(data, view, $sub);
			}
			view.data = prevData;
			view.index = prevIndex;
		}
		if (isTopRenderCall) {
			isRenderCall = undefined;
		}
	}
	return result;
}

function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
	function setItemVar(item) {
		// When itemVar is specified, set modified ctx with user-named ~item
		newCtx = $extend({}, context);
		newCtx[itemVar] = item;
	}

	// Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
	// If the data is the parent view, treat as noIteration, re-render with the same data context.
	var i, l, newView, childView, itemResult, swapContent, contentTmpl, outerOnRender, tmplName, itemVar, newCtx, tagCtx,
		result = "";

	if (tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tmplName = tag.tagName;
		tagCtx = tag.tagCtx;
		context = context ? extendCtx(context, tag.ctx) : tag.ctx;

		if (tmpl === view.content) { // {{xxx tmpl=#content}}
			contentTmpl = tmpl !== view.ctx._wrp // We are rendering the #content
				? view.ctx._wrp // #content was the tagCtx.props.tmpl wrapper of the block content - so within this view, #content will now be the view.ctx._wrp block content
				: undefined; // #content was the view.ctx._wrp block content - so within this view, there is no longer any #content to wrap.
		} else if (tmpl !== tagCtx.content) {
			if (tmpl === tag.template) { // Rendering {{tag}} tag.template, replacing block content.
				contentTmpl = tagCtx.tmpl; // Set #content to block content (or wrapped block content if tagCtx.props.tmpl is set)
				context._wrp = tagCtx.content; // Pass wrapped block content to nested views
			} else { // Rendering tagCtx.props.tmpl wrapper
				contentTmpl = tagCtx.content || view.content; // Set #content to wrapped block content
			}
		} else {
			contentTmpl = view.content; // Nested views inherit same wrapped #content property
		}

		if (tagCtx.props.link === false) {
			// link=false setting on block tag
			// We will override inherited value of link by the explicit setting link=false taken from props
			// The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
			context = context || {};
			context.link = false;
		}

		if (itemVar = tagCtx.props.itemVar) {
			if (itemVar.charAt(0) !== "~") {
				syntaxError("Use itemVar='~myItem'");
			}
			itemVar = itemVar.slice(1);
		}
	}

	if (view) {
		onRender = onRender || view._.onRender;
		context = extendCtx(context, view.ctx);
	}

	if (key === true) {
		swapContent = true;
		key = 0;
	}

	// If link===false, do not call onRender, so no data-linking marker nodes
	if (onRender && (context && context.link === false || tag && tag._.noVws)) {
		onRender = undefined;
	}
	outerOnRender = onRender;
	if (onRender === true) {
		// Used by view.refresh(). Don't create a new wrapper view.
		outerOnRender = undefined;
		onRender = view._.onRender;
	}
	// Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)
	context = tmpl.helpers
		? extendCtx(tmpl.helpers, context)
		: context;

	newCtx = context;
	if ($isArray(data) && !noIteration) {
		// Create a view for the array, whose child views correspond to each data item. (Note: if key and view are passed in
		// along with parent view, treat as insert -e.g. from view.addViews - so view is already the view item for array)
		newView = swapContent
			? view
			: (key !== undefined && view)
				|| new View(context, "array", view, data, tmpl, key, onRender, contentTmpl);
		if (view && view._.useKey) {
			// Parent is not an 'array view'
			newView._.bnd = !tag || tag._.bnd && tag; // For array views that are data bound for collection change events, set the
			// view._.bnd property to true for top-level link() or data-link="{for}", or to the tag instance for a data-bound tag, e.g. {^{for ...}}
		}
		if (itemVar) {
			newView.it = itemVar;
		}
		itemVar = newView.it;
		for (i = 0, l = data.length; i < l; i++) {
			// Create a view for each data item.
			if (itemVar) {
				setItemVar(data[i]); // use modified ctx with user-named ~item
			}
			childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, newView.content);

			itemResult = tmpl.fn(data[i], childView, $sub);
			result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
		}
	} else {
		// Create a view for singleton data object. The type of the view will be the tag name, e.g. "if" or "myTag" except for
		// "item", "array" and "data" views. A "data" view is from programmatic render(object) against a 'singleton'.
		if (itemVar) {
			setItemVar(data);
		}
		newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);
		if (tag && !tag.flow) {
			newView.tag = tag;
			tag.view = newView;
		}
		result += tmpl.fn(data, newView, $sub);
	}
	return outerOnRender ? outerOnRender(result, newView) : result;
}

//===========================
// Build and compile template
//===========================

// Generate a reusable function that will serve to render a template against data
// (Compile AST then build template function)

function onRenderError(e, view, fallback) {
	var message = fallback !== undefined
		? $isFunction(fallback)
			? fallback.call(view.data, e, view)
			: fallback || ""
		: "{Error: " + e.message + "}";

	if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
		message = fallback; // There is a settings.debugMode(handler) onError override. Call it, and use return value (if any) to replace message
	}

	return view && !view.linkCtx ? $converters.html(message) : message;
}

function error(message) {
	throw new $sub.Err(message);
}

function syntaxError(message) {
	error("Syntax error\n" + message);
}

function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
	// Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
	// Used for compiling templates, and also by JsViews to build functions for data link expressions

	//==== nested functions ====
	function pushprecedingContent(shift) {
		shift -= loc;
		if (shift) {
			content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
		}
	}

	function blockTagCheck(tagName, block) {
		if (tagName) {
			tagName += '}}';
			//			'{{include}} block has {{/for}} with no open {{for}}'
			syntaxError((
				block
					? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName
					: 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
		}
	}

	function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
/*

     bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
/(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}/g

(?:
  {(\^)?{            bind
  (?:
    (\w+             tagName
      (?=[\/\s}])
    )
    |
    (\w+)?(:)        converter colon
    |
    (>)              html
    |
    (\*)             codeTag
  )
  \s*
  (                  params
    (?:[^}]|}(?!}))*?
  )
  (\/)?              slash
  |
  {(\^)?{            bind2
  (?:
    (?:\/(\w+))\s*   closeBlock
    |
    !--[\s\S]*?--    comment
  )
)
}}/g

*/
		if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
			syntaxError(all);
		}

		// Build abstract syntax tree (AST): [tagName, converter, params, content, hash, bindings, contentMarkup]
		if (html) {
			colon = ":";
			converter = HTML;
		}
		slash = slash || isLinkExpr && !hasElse;

		var pathBindings = (bind || isLinkExpr) && [[]],
			props = "",
			args = "",
			ctxProps = "",
			paramsArgs = "",
			paramsProps = "",
			paramsCtxProps = "",
			onError = "",
			useTrigger = "",
			// Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
			block = !slash && !colon;

		//==== nested helper function ====
		tagName = tagName || (params = params || "#data", colon); // {{:}} is equivalent to {{:#data}}
		pushprecedingContent(index);
		loc = index + all.length; // location marker - parsed up to here
		if (codeTag) {
			if (allowCode) {
				content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
			}
		} else if (tagName) {
			if (tagName === "else") {
				if (rTestElseIf.test(params)) {
					syntaxError('for "{{else if expr}}" use "{{else expr}}"');
				}
				pathBindings = current[7] && [[]];
				current[8] = markup.substring(current[8], index); // contentMarkup for block tag
				current = stack.pop();
				content = current[2];
				block = true;
			}
			if (params) {
				// remove newlines from the params string, to avoid compiled code errors for unterminated strings
				parseParams(params.replace(rNewLine, " "), pathBindings, tmpl)
					.replace(rBuildHash, function(all, onerror, isCtx, key, keyToken, keyValue, arg, param) {
						key = "'" + keyToken + "':";
						if (arg) {
							args += keyValue + ",";
							paramsArgs += "'" + param + "',";
						} else if (isCtx) {
							ctxProps += key + 'j._cp(' + keyValue + ',"' + param + '",view),';
							// Compiled code for evaluating tagCtx on a tag will have: ctx:{'foo':j._cp(compiledExpr, "expr", view)}
							paramsCtxProps += key + "'" + param + "',";
						} else if (onerror) {
							onError += keyValue;
						} else {
							if (keyToken === "trigger") {
								useTrigger += keyValue;
							}
							props += key + keyValue + ",";
							paramsProps += key + "'" + param + "',";
							hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
						}
						return "";
					}).slice(0, -1);
			}

			if (pathBindings && pathBindings[0]) {
				pathBindings.pop(); // Remove the bindings that was prepared for next arg. (There is always an extra one ready).
			}

			newNode = [
					tagName,
					converter || !!convertBack || hasHandlers || "",
					block && [],
					parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), // {{:}} equivalent to {{:#data}}
					parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps),
					onError,
					useTrigger,
					pathBindings || 0
				];
			content.push(newNode);
			if (block) {
				stack.push(current);
				current = newNode;
				current[8] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag
			}
		} else if (closeBlock) {
			blockTagCheck(closeBlock !== current[0] && current[0] !== "else" && closeBlock, current[0]);
			current[8] = markup.substring(current[8], index); // contentMarkup for block tag
			current = stack.pop();
		}
		blockTagCheck(!current && closeBlock);
		content = current[2];
	}
	//==== /end of nested functions ====

	var i, result, newNode, hasHandlers, bindings,
		allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode
			|| $viewsSettings.allowCode === true, // include direct setting of settings.allowCode true for backward compat only
		astTop = [],
		loc = 0,
		stack = [],
		content = astTop,
		current = [,,astTop];

	if (allowCode && tmpl._is) {
		tmpl.allowCode = allowCode;
	}

//TODO	result = tmplFnsCache[markup]; // Only cache if template is not named and markup length < ...,
//and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
//		if (result) {
//			tmpl.fn = result;
//		} else {

//		result = markup;
	if (isLinkExpr) {
		if (convertBack !== undefined) {
			markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar0;
		}
		markup = delimOpenChar0 + markup + delimCloseChar1;
	}

	blockTagCheck(stack[0] && stack[0][2].pop()[0]);
	// Build the AST (abstract syntax tree) under astTop
	markup.replace(rTag, parseTag);

	pushprecedingContent(markup.length);

	if (loc = astTop[astTop.length - 1]) {
		blockTagCheck("" + loc !== loc && (+loc[8] === loc[8]) && loc[0]);
	}
//			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
//		}

	if (isLinkExpr) {
		result = buildCode(astTop, markup, isLinkExpr);
		bindings = [];
		i = astTop.length;
		while (i--) {
			bindings.unshift(astTop[i][7]);  // With data-link expressions, pathBindings array for tagCtx[i] is astTop[i][7]
		}
		setPaths(result, bindings);
	} else {
		result = buildCode(astTop, tmpl);
	}
	return result;
}

function setPaths(fn, pathsArr) {
	var key, paths,
		i = 0,
		l = pathsArr.length;
	fn.deps = [];
	for (; i < l; i++) {
		paths = pathsArr[i];
		for (key in paths) {
			if (key !== "_jsvto" && paths.hasOwnProperty(key) && paths[key].length) {
				fn.deps = fn.deps.concat(paths[key]); // deps is the concatenation of the paths arrays for the different bindings
			}
		}
	}
	fn.paths = paths; // The array of paths arrays for the different bindings
}

function parsedParam(args, props, ctx) {
	return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
}

function paramStructure(parts, type) {
	return '\n\t'
		+ (type
			? type + ':{'
			: '')
		+ 'args:[' + parts[0] + ']'
		+ (parts[1] || !type
			? ',\n\tprops:{' + parts[1] + '}'
			: "")
		+ (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
}

function parseParams(params, pathBindings, tmpl) {

	function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
	// /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//   lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                        prn2  space
		// (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
		function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
			//rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
			//          not                               object     helper    view  viewProperty pathTokens      leafToken
			var subPath = object === ".";
			if (object) {
				path = path.slice(not.length);
				if (/^\.?constructor$/.test(leafToken||path)) {
					syntaxError(allPath);
				}
				if (!subPath) {
					allPath = (helper
							? 'view.hlp("' + helper + '")'
							: view
								? "view"
								: "data")
						+ (leafToken
							? (viewProperty
								? "." + viewProperty
								: helper
									? ""
									: (view ? "" : "." + object)
								) + (pathTokens || "")
							: (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));

					allPath = allPath + (leafToken ? "." + leafToken : "");

					allPath = not + (allPath.slice(0, 9) === "view.data"
						? allPath.slice(5) // convert #view.data... to data...
						: allPath);
				}
				if (bindings) {
					binds = named === "linkTo" ? (bindto = pathBindings._jsvto = pathBindings._jsvto || []) : bndCtx.bd;
					if (theOb = subPath && binds[binds.length-1]) {
						if (theOb._jsv) {
							while (theOb.sb) {
								theOb = theOb.sb;
							}
							if (theOb.bnd) {
								path = "^" + path.slice(1);
							}
							theOb.sb = path;
							theOb.bnd = theOb.bnd || path.charAt(0) === "^";
						}
					} else {
						binds.push(path);
					}
					pathStart[parenDepth] = index + (subPath ? 1 : 0);
				}
			}
			return allPath;
		}

		//bound = bindings && bound;
		if (bound && !eq) {
			path = bound + path; // e.g. some.fn(...)^some.path - so here path is "^some.path"
		}
		operator = operator || "";
		lftPrn = lftPrn || lftPrn0 || lftPrn2;
		path = path || path2;
		// Could do this - but not worth perf cost?? :-
		// if (!path.lastIndexOf("#data.", 0)) { path = path.slice(6); } // If path starts with "#data.", remove that.
		prn = prn || prn2 || "";

		var expr, exprFn, binds, theOb, newOb,
			rtSq = ")";

		if (prn === "[") {
			prn  ="[j._sq(";
			rtSq = ")]";
		}

		if (err && !aposed && !quoted) {
			syntaxError(params);
		} else {
			if (bindings && rtPrnDot && !aposed && !quoted) {
				// This is a binding to a path in which an object is returned by a helper/data function/expression, e.g. foo()^x.y or (a?b:c)^x.y
				// We create a compiled function to get the object instance (which will be called when the dependent data of the subexpression changes, to return the new object, and trigger re-binding of the subsequent path)
				if (!named || boundName || bindto) {
					expr = pathStart[parenDepth - 1];
					if (full.length - 1 > index - (expr || 0)) { // We need to compile a subexpression
						expr = full.slice(expr, index + all.length);
						if (exprFn !== true) { // If not reentrant call during compilation
							binds = bindto || bndStack[parenDepth-1].bd;
							// Insert exprOb object, to be used during binding to return the computed object
							theOb = binds[binds.length-1];
							if (theOb && theOb.prm) {
								while (theOb.sb && theOb.sb.prm) {
									theOb = theOb.sb;
								}
								newOb = theOb.sb = {path: theOb.sb, bnd: theOb.bnd};
							} else {
								binds.push(newOb = {path: binds.pop()}); // Insert exprOb object, to be used during binding to return the computed object
							}											 // (e.g. "some.object()" in "some.object().a.b" - to be used as context for binding the following tokens "a.b")
						}
						rtPrnDot = delimOpenChar1 + ":" + expr // The parameter or function subexpression
							+ " onerror=''" // set onerror='' in order to wrap generated code with a try catch - returning '' as object instance if there is an error/missing parent
							+ delimCloseChar0;
						exprFn = tmplLinks[rtPrnDot];
						if (!exprFn) {
							tmplLinks[rtPrnDot] = true; // Flag that this exprFn (for rtPrnDot) is being compiled
							tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true); // Compile the expression (or use cached copy already in tmpl.links)
						}
						if (exprFn !== true && newOb) {
							// If not reentrant call during compilation
							newOb._jsv = exprFn;
							newOb.prm = bndCtx.bd;
							newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
						}
					}
				}
			}
			return (aposed
				// within single-quoted string
				? (aposed = !apos, (aposed ? all : lftPrn2 + '"'))
				: quoted
				// within double-quoted string
					? (quoted = !quot, (quoted ? all : lftPrn2 + '"'))
					:
				(
					(lftPrn
						? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {bd: []}, lftPrn)
						: "")
					+ (space
						? (parenDepth
							? ""
				// New arg or prop - so insert backspace \b (\x08) as separator for named params, used subsequently by rBuildHash, and prepare new bindings array
							: (paramIndex = full.slice(paramIndex, index), named
								? (named = boundName = bindto = false, "\b")
								: "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b")
						)
						: eq
				// named param. Remove bindings for arg and create instead bindings array for prop
							? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = path, boundName = bound, paramIndex = index + all.length, bound && (bindings = bndCtx.bd = pathBindings[named] = []), path + ':')
							: path
				// path
								? (path.split("^").join(".").replace(rPath, parsePath)
									+ (prn
				// some.fncall(
										? (bndCtx = bndStack[++parenDepth] = {bd: []}, fnCall[parenDepth] = rtSq, prn)
										: operator)
								)
								: operator
				// operator
									? operator
									: rtPrn
				// function
										? ((rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn)
											+ (prn // rtPrn and prn, e.g )( in (a)() or a()(), or )[ in a()[]
												? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn)
												: "")
										)
										: comma
											? (fnCall[parenDepth] || syntaxError(params), ",") // We don't allow top-level literal arrays or objects
											: lftPrn0
												? ""
												: (aposed = apos, quoted = quot, '"')
				))
			);
		}
	}

	var named, bindto, boundName,
		quoted, // boolean for string content in double quotes
		aposed, // or in single quotes
		bindings = pathBindings && pathBindings[0], // bindings array for the first arg
		bndCtx = {bd: bindings},
		bndStack = {0: bndCtx},
		paramIndex = 0, // list,
		tmplLinks = (tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {})) || topView.tmpl.links,
		// The following are used for tracking path parsing including nested paths, such as "a.b(c^d + (e))^f", and chained computed paths such as
		// "a.b().c^d().e.f().g" - which has four chained paths, "a.b()", "^c.d()", ".e.f()" and ".g"
		parenDepth = 0,
		fnCall = {}, // We are in a function call
		pathStart = {}, // tracks the start of the current path such as c^d() in the above example
		result = (params + (tmpl ? " " : "")).replace(rParams, parseTokens);

	return !parenDepth && result || syntaxError(params); // Syntax error if unbalanced parens in params expression
}

function buildCode(ast, tmpl, isLinkExpr) {
	// Build the template function code from the AST nodes, and set as property on the passed-in template object
	// Used for compiling templates, and also by JsViews to build functions for data link expressions
	var i, node, tagName, converter, tagCtx, hasTag, hasEncoder, getsVal, hasCnvt, useCnvt, tmplBindings, pathBindings, params, boundOnErrStart, boundOnErrEnd,
		tagRender, nestedTmpls, tmplName, nestedTmpl, tagAndElses, content, markup, nextIsElse, oldCode, isElse, isGetVal, tagCtxFn, onError, tagStart, trigger,
		tmplBindingKey = 0,
		useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
		code = "",
		tmplOptions = {},
		l = ast.length;

	if ("" + tmpl === tmpl) {
		tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
		tmpl = 0;
	} else {
		tmplName = tmpl.tmplName || "unnamed";
		if (tmpl.allowCode) {
			tmplOptions.allowCode = true;
		}
		if (tmpl.debug) {
			tmplOptions.debug = true;
		}
		tmplBindings = tmpl.bnds;
		nestedTmpls = tmpl.tmpls;
	}
	for (i = 0; i < l; i++) {
		// AST nodes: [0: tagName, 1: converter, 2: content, 3: params, 4: code, 5: onError, 6: trigger, 7:pathBindings, 8: contentMarkup]
		node = ast[i];

		// Add newline for each callout to t() c() etc. and each markup string
		if ("" + node === node) {
			// a markup string to be inserted
			code += '\n+"' + node + '"';
		} else {
			// a compiled tag expression to be inserted
			tagName = node[0];
			if (tagName === "*") {
				// Code tag: {{* }}
				code += ";\n" + node[1] + "\nret=ret";
			} else {
				converter = node[1];
				content = !isLinkExpr && node[2];
				tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
				onError = node[5];
				trigger = node[6];
				markup = node[8] && node[8].replace(rUnescapeQuotes, "$1");
				if (isElse = tagName === "else") {
					if (pathBindings) {
						pathBindings.push(node[7]);
					}
				} else {
					tmplBindingKey = 0;
					if (tmplBindings && (pathBindings = node[7])) { // Array of paths, or false if not data-bound
						pathBindings = [pathBindings];
						tmplBindingKey = tmplBindings.push(1); // Add placeholder in tmplBindings for compiled function
					}
				}
				useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]);
				// useViews is for perf optimization. For render() we only use views if necessary - for the more advanced scenarios.
				// We use views if there are props, contextual properties or args with #... (other than #index) - but you can force
				// using the full view infrastructure, (and pay a perf price) by opting in: Set useViews: true on the template, manually...
				if (isGetVal = tagName === ":") {
					if (converter) {
						tagName = converter === HTML ? ">" : converter + tagName;
					}
				} else {
					if (content) { // TODO optimize - if content.length === 0 or if there is a tmpl="..." specified - set content to null / don't run this compilation code - since content won't get used!!
						// Create template object for nested template
						nestedTmpl = tmplObject(markup, tmplOptions);
						nestedTmpl.tmplName = tmplName + "/" + tagName;
						// Compile to AST and then to compiled function
						nestedTmpl.useViews = nestedTmpl.useViews || useViews;
						buildCode(content, nestedTmpl);
						useViews = nestedTmpl.useViews;
						nestedTmpls.push(nestedTmpl);
					}

					if (!isElse) {
						// This is not an else tag.
						tagAndElses = tagName;
						useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow);
						// Switch to a new code string for this bound tag (and its elses, if it has any) - for returning the tagCtxs array
						oldCode = code;
						code = "";
					}
					nextIsElse = ast[i + 1];
					nextIsElse = nextIsElse && nextIsElse[0] === "else";
				}
				tagStart = onError ? ";\ntry{\nret+=" : "\n+";
				boundOnErrStart = "";
				boundOnErrEnd = "";

				if (isGetVal && (pathBindings || trigger || converter && converter !== HTML)) {
					// For convertVal we need a compiled function to return the new tagCtx(s)
					tagCtxFn = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagName
										+ "\nreturn {" + tagCtx + "};");
					tagCtxFn._er = onError;
					tagCtxFn._tag = tagName;

					if (isLinkExpr) {
						return tagCtxFn;
					}

					setPaths(tagCtxFn, pathBindings);
					tagRender = 'c("' + converter + '",view,';
					useCnvt = true;
					boundOnErrStart = tagRender + tmplBindingKey + ",";
					boundOnErrEnd = ")";
				}
				code += (isGetVal
					? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt // Call _cnvt if there is a converter: {{cnvt: ... }} or {^{cnvt: ... }}
						? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (pathBindings
							? ((tmplBindings[tmplBindingKey - 1] = tagCtxFn), tmplBindingKey) // Store the compiled tagCtxFn in tmpl.bnds, and pass the key to convertVal()
							: "{" + tagCtx + "}") + ")")
						: tagName === ">"
							? (hasEncoder = true, "h(" + params[0] + ")")
							: (getsVal = true, "((v=" + params[0] + ')!=null?v:' + (isLinkExpr ? 'null)' : '"")'))
							// Non strict equality so data-link="title{:expr}" with expr=null/undefined removes title attribute
					)
					: (hasTag = true, "\n{view:view,tmpl:" // Add this tagCtx to the compiled code for the tagCtxs to be passed to renderTag()
						+ (content ? nestedTmpls.length : "0") + "," // For block tags, pass in the key (nestedTmpls.length) to the nested content template
						+ tagCtx + "},"));

				if (tagAndElses && !nextIsElse) {
					// This is a data-link expression or an inline tag without any elses, or the last {{else}} of an inline tag
					// We complete the code for returning the tagCtxs array
					code = "[" + code.slice(0, -1) + "]";
					tagRender = 't("' + tagAndElses + '",view,this,';
					if (isLinkExpr || pathBindings) {
						// This is a bound tag (data-link expression or inline bound tag {^{tag ...}}) so we store a compiled tagCtxs function in tmp.bnds
						code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + "\nreturn " + code + ";");
						code._er = onError;
						code._tag = tagAndElses;
						if (pathBindings) {
							setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
						}
						if (isLinkExpr) {
							return code; // For a data-link expression we return the compiled tagCtxs function
						}
						boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
						boundOnErrEnd = ")";
					}

					// This is the last {{else}} for an inline tag.
					// For a bound tag, pass the tagCtxs fn lookup key to renderTag.
					// For an unbound tag, include the code directly for evaluating tagCtxs array
					code = oldCode + tagStart + tagRender + (tmplBindingKey || code) + ")";
					pathBindings = 0;
					tagAndElses = 0;
				}
				if (onError) {
					useViews = true;
					code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
				}
			}
		}
	}
	// Include only the var references that are needed in the code
	code = "// " + tmplName

		+ "\nvar v"
		+ (hasTag ? ",t=j._tag" : "")                // has tag
		+ (hasCnvt ? ",c=j._cnvt" : "")              // converter
		+ (hasEncoder ? ",h=j._html" : "")           // html converter
		+ (isLinkExpr ? ";\n" : ',ret=""\n')
		+ (tmplOptions.debug ? "debugger;" : "")
		+ code
		+ (isLinkExpr ? "\n" : ";\nreturn ret;");

	if ($subSettings.debugMode !== false) {
		code = "try {\n" + code + "\n}catch(e){\nreturn j._err(e, view);\n}";
	}

	try {
		code = new Function("data,view,j,u", code);
	} catch (e) {
		syntaxError("Compiled template code:\n\n" + code + '\n: "' + e.message + '"');
	}
	if (tmpl) {
		tmpl.fn = code;
		tmpl.useViews = !!useViews;
	}
	return code;
}

//==========
// Utilities
//==========

// Merge objects, in particular contexts which inherit from parent contexts
function extendCtx(context, parentContext) {
	// Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
	// If neither context nor parentContext are defined, return undefined
	return context && context !== parentContext
		? (parentContext
			? $extend($extend({}, parentContext), context)
			: context)
		: parentContext && $extend({}, parentContext);
}

// Get character entity for HTML and Attribute encoding
function getCharEntity(ch) {
	return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
}

function getTargetProps(source) {
	// this pointer is theMap - which has tagCtx.props too
	// arguments: tagCtx.args.
	var key, prop,
		props = [];

	if (typeof source === OBJECT) {
		for (key in source) {
			prop = source[key];
			if (key !== $expando && source.hasOwnProperty(key) && !$isFunction(prop)) {
				props.push({key: key, prop: prop});
			}
		}
	}
	return props;
}

function $fnRender(data, context, noIteration) {
	var tmplElem = this.jquery && (this[0] || error('Unknown template: "' + this.selector + '"')),
		tmpl = tmplElem.getAttribute(tmplAttr);

	return renderContent.call(tmpl ? $.data(tmplElem)[jsvTmpl] : $templates(tmplElem), data, context, noIteration);
}

//========================== Register converters ==========================

function htmlEncode(text) {
	// HTML encode: Replace < > & ' and " by corresponding entities.
	return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
}

//========================== Initialize ==========================

$sub = $views.sub;
$viewsSettings = $views.settings;

if (!(jsr || $ && $.render)) {
	// JsRender not already loaded, or loaded without jQuery, and we are now moving from jsrender namespace to jQuery namepace
	for (jsvStoreName in jsvStores) {
		registerStore(jsvStoreName, jsvStores[jsvStoreName]);
	}

	$converters = $views.converters;
	$helpers = $views.helpers;
	$tags = $views.tags;

	$sub._tg.prototype = {
		baseApply: baseApply,
		cvtArgs: convertArgs
	};

	topView = $sub.topView = new View();

	//BROWSER-SPECIFIC CODE
	if ($) {

		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery (= $) is loaded

		$.fn.render = $fnRender;
		$expando = $.expando;
		if ($.observable) {
			$extend($sub, $.views.sub); // jquery.observable.js was loaded before jsrender.js
			$views.map = $.views.map;
		}

	} else {
		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery is not loaded.

		$ = {};

		if (setGlobals) {
			global.jsrender = $; // We are loading jsrender.js from a script element, not AMD or CommonJS, so set global
		}

		// Error warning if jsrender.js is used as template engine on Node.js (e.g. Express or Hapi...)
		// Use jsrender-node.js instead...
		$.renderFile = $.__express = $.compile = function() { throw "Node.js: use npm jsrender, or jsrender-node.js"; };

		//END BROWSER-SPECIFIC CODE
		$.isFunction = function(ob) {
			return typeof ob === "function";
		};

		$.isArray = Array.isArray || function(obj) {
			return ({}.toString).call(obj) === "[object Array]";
		};

		$sub._jq = function(jq) { // private method to move from JsRender APIs from jsrender namespace to jQuery namespace
			if (jq !== $) {
				$extend(jq, $); // map over from jsrender namespace to jQuery namespace
				$ = jq;
				$.fn.render = $fnRender;
				delete $.jsrender;
				$expando = $.expando;
			}
		};

		$.jsrender = versionNumber;
	}
	$subSettings = $sub.settings;
	$subSettings.allowCode = false;
	$isFunction = $.isFunction;
	$.render = $render;
	$.views = $views;
	$.templates = $templates = $views.templates;

	for (setting in $subSettings) {
		addSetting(setting);
	}

	($viewsSettings.debugMode = function(debugMode) {
		return debugMode === undefined
			? $subSettings.debugMode
			: (
				$subSettings.debugMode = debugMode,
				$subSettings.onError = debugMode + "" === debugMode
					? new Function("", "return '" + debugMode + "';" )
					: $isFunction(debugMode)
						? debugMode
						: undefined,
				$viewsSettings);
	})(false); // jshint ignore:line

	$subSettingsAdvanced = $subSettings.advanced = {
		useViews: false,
		_jsv: false // For global access to JsViews store
	};

	//========================== Register tags ==========================

	$tags({
		"if": {
			render: function(val) {
				// This function is called once for {{if}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				// If not done (a previous block has not been rendered), look at expression for this block and render the block if expression is truthy
				// Otherwise return ""
				var self = this,
					tagCtx = self.tagCtx,
					ret = (self.rendering.done || !val && (arguments.length || !tagCtx.index))
						? ""
						: (self.rendering.done = true, self.selected = tagCtx.index,
							// Test is satisfied, so render content on current context. We call tagCtx.render() rather than return undefined
							// (which would also render the tmpl/content on the current context but would iterate if it is an array)
							tagCtx.render(tagCtx.view, true)); // no arg, so renders against parentView.data
				return ret;
			},
			flow: true
		},
		"for": {
			render: function(val) {
				// This function is called once for {{for}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				var finalElse = !arguments.length,
					value,
					self = this,
					tagCtx = self.tagCtx,
					result = "",
					done = 0;

				if (!self.rendering.done) {
					value = finalElse ? tagCtx.view.data : val; // For the final else, defaults to current data without iteration.
					if (value !== undefined) {
						result += tagCtx.render(value, finalElse); // Iterates except on final else, if data is an array. (Use {{include}} to compose templates without array iteration)
						done += $isArray(value) ? value.length : 1;
					}
					if (self.rendering.done = done) {
						self.selected = tagCtx.index;
					}
					// If nothing was rendered we will look at the next {{else}}. Otherwise, we are done.
				}
				return result;
			},
			flow: true
		},
		props: {
			baseTag: "for",
			dataMap: dataMap(getTargetProps),
			flow: true
		},
		include: {
			flow: true
		},
		"*": {
			// {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		":*": {
			// {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		dbg: $helpers.dbg = $converters.dbg = dbgBreak // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.
	});

	$converters({
		html: htmlEncode,
		attr: htmlEncode, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
		url: function(text) {
			// URL encoding helper.
			return text != undefined ? encodeURI("" + text) : text === null ? text : ""; // null returns null, e.g. to remove attribute. undefined returns ""
		}
	});
}
//========================== Define default delimiters ==========================
$subSettings = $sub.settings;
$isArray = ($||jsr).isArray;
$viewsSettings.delimiters("{{", "}}", "^");

if (jsrToJq) { // Moving from jsrender namespace to jQuery namepace - copy over the stored items (templates, converters, helpers...)
	jsr.views.sub._jq($);
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JsObservable >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* JsObservable:
 * See http://www.jsviews.com/#jsobservable and http://github.com/borismoore/jsviews
 * Copyright 2016, Boris Moore
 * Released under the MIT License.
 */

//========================== Top-level vars ==========================

$views = $.views;
$sub = $views.sub;
$isFunction = $.isFunction;
$isArray = $.isArray;
$expando = $.expando;
if (!$.observe) {

	var $eventSpecial = $.event.special,
		slice = [].slice,
		splice = [].splice,
		concat = [].concat,
		PARSEINT = parseInt,
		rNotWhite = /\S+/g,
		propertyChangeStr = $sub.propChng = $sub.propChng || "propertyChange",// These two settings can be overridden on settings after loading
		arrayChangeStr = $sub.arrChng = $sub.arrChng || "arrayChange",        // jsRender, and prior to loading jquery.observable.js and/or JsViews
		cbBindingsStore = {},
		observeStr = propertyChangeStr + ".observe",
		observeObjKey = 1,
		observeCbKey = 1,
		observeInnerCbKey = 1,
		$hasData = $.hasData,
		$data = $.data,
		remove = {}, // flag for removeProperty

	//========================== Top-level functions ==========================

	getCbKey = function(cb) {
		return cb._cId = cb._cId || (".obs" + observeCbKey++);
	},

	ObjectObservable = function(ns, data) {
		this._data = data;
		this._ns = ns;
		return this;
	},

	ArrayObservable = function(ns, data) {
		this._data = data;
		this._ns = ns;
		return this;
	},

	wrapArray = function(data) {
		return $isArray(data)
			? [data]
			: data;
	},

	resolvePathObjects = function(paths, root, callback) {
		paths = paths
			? $isArray(paths)
				? paths
				: [paths]
			: [];

		var i, path,
			object = root,
			nextObj = object,
			l = paths && paths.length,
			out = [];

		for (i = 0; i < l; i++) {
			path = paths[i];
			if ($isFunction(path)) {
				out = out.concat(resolvePathObjects(path.call(root, root, callback), root));
				continue;
			} else if ("" + path !== path) {
				root = nextObj = path;
				if (nextObj !== object) {
					out.push(object = nextObj);
				}
				continue;
			}
			if (nextObj !== object) {
				out.push(object = nextObj);
			}
			out.push(path);
		}
		return out;
	},

	removeCbBindings = function(cbBindings, cbBindingsId) {
		// If the cbBindings collection is empty we will remove it from the cbBindingsStore
		for (var cb in cbBindings) {
			return;
		}
		delete cbBindingsStore[cbBindingsId]; // This binding collection is empty, so remove from store
	},

	onObservableChange = function(ev, eventArgs) {
		function isOb(val) {
			return typeof val === OBJECT && (paths[0] || allowArray && $isArray(val));
		}

		if (!(ev.data && ev.data.off)) {
			// Skip if !!ev.data.off: - a handler that has already been removed (maybe was on handler collection at call time - then removed by another handler)
			var allPath, filter, parentObs,
				oldValue = eventArgs.oldValue,
				value = eventArgs.value,
				ctx = ev.data,
				observeAll = ctx.observeAll,
				cb = ctx.cb,
				allowArray = !cb.noArray,
				paths = ctx.paths,
				ns = ctx.ns;

			if (ev.type === arrayChangeStr) {
				(cb.array || cb).call(ctx, ev, eventArgs); // If there is an arrayHandler expando on the regular handler, use it, otherwise use the regular handler for arrayChange events also - for example: $.observe(array, handler)
				// or observeAll() with an array in the graph. Note that on data-link bindings we ensure always to have an array handler - $.noop if none is specified e.g. on the data-linked tag.
			} else if (ctx.prop === eventArgs.path || ctx.prop === "*") {
				if (observeAll) {
					allPath = observeAll._path + "." + eventArgs.path;
					filter = observeAll.filter;
					parentObs = [ev.target].concat(observeAll.parents());

					if (isOb(oldValue)) {
						observe_apply(allowArray, ns, [oldValue], paths, cb, true, filter, [parentObs], allPath); // unobserve
					}
					if (isOb(value)) {
						observe_apply(allowArray, ns, [value], paths, cb, undefined, filter, [parentObs], allPath);
					}
				} else {
					if (isOb(oldValue)) { // oldValue is an object, so unobserve
						observe_apply(allowArray, ns, [oldValue], paths, cb, true); // unobserve
					}
					if (isOb(value)) { // value is an object, so observe
						observe_apply(allowArray, ns, [value], paths, cb);
					}
				}
				ctx.cb(ev, eventArgs);
			}
		}
	},

	observe_apply = function() {
		// $.observe(), but allowing you to include arrays within the arguments - which you want flattened.
		var args = concat.apply([], arguments); // Flatten the arguments
		return $observe.apply(args.shift(), args);
	},

	$observeAll = function(cb, filter, unobserve) {
		observeAll(this._ns, this._data, cb, filter, [], "root", unobserve);
	},

	$unobserveAll = function(cb, filter) {
		$observeAll.call(this, cb, filter, true);
	},

	observeAll = function(namespace, object, cb, filter, parentObs, allPath, unobserve, objMap) {
		function observeArrayItems(arr, unobs) {
			l = arr.length;
			newAllPath = allPath + "[]";
			while (l--) {
				filterAndObserveAll(arr, l, unobs, 1);
			}
		}

		function filterAndObserveAll(obj, prop, unobs, nestedArray) {
			var newObject, newParentObs;
			if (prop !== $expando) {
				if (newObject = $observable._fltr(newAllPath, obj[prop], nextParentObs, filter)) {
					newParentObs = nextParentObs.slice();
					if (nestedArray && updatedTgt && newParentObs[0] !== updatedTgt) {
						newParentObs.unshift(updatedTgt); // For array change events when observing an array which is not the root, need to add updated array to parentObs
					}
					observeAll(namespace, newObject, cb, filter || (nestedArray ? undefined : 0), newParentObs, newAllPath, unobs, objMap);
					// If nested array, need to observe the array too - so set filter to undefined
				}
			}
		}

		function wrappedCb(ev, eventArgs) {
			// This object is changing.
			allPath = ev.data.observeAll._path;
			updatedTgt = ev.target;
			switch (eventArgs.change) { // observeAll/unobserveAll on added or removed objects
				case "insert":
					observeArrayItems(eventArgs.items);
					break;
				case "remove":
					observeArrayItems(eventArgs.items, true); // unobserveAll on removed items
					break;
				case "set":
					newAllPath = allPath + "." + eventArgs.path;
					filterAndObserveAll(eventArgs, "oldValue", true); // unobserve old value
					filterAndObserveAll(eventArgs, "value"); // observe new value
			}
			updatedTgt = undefined;
			cb.apply(this, arguments); // Observe this object (invoke the callback)
		}

		var l, isObject, newAllPath, nextParentObs, updatedTgt, obId,
			notRemoving = !objMap || objMap.un || !unobserve; // true unless it is an observeAll call (not unobserveAll) and we are removing a listener (not adding one)

		if (object && typeof object === OBJECT) {
			nextParentObs = [object].concat(parentObs); // The parentObs chain for the next depth of observeAll
			isObject = $isArray(object) ? "" : "*";
			if (objMap && notRemoving && $hasData(object) && objMap[obId = $data(object).obId]) {
				objMap[obId]++;
				return; // This object has already being observed/unobserved by this observeAll/unobserveAll call (must be a cyclic object graph) so skip, to avoid
				// stack overflow/multiple instances of listener. See jsviews/pull/305
				// NOTE - WE DO NOT support ObserveAll on data with cyclic graphs which include DUPLICATE REFERENCES TO ARRAY PROPERTIES - such as data.children = data.descendants = []
			}
			if (!objMap) {
				objMap = {un: unobserve}; // Map object to register observed objects for this observeAll
			}

			if (cb) {
				// Observe this object or array - and also listen for changes to object graph, to add or remove observers from the modified object graph
				if (isObject || filter !== 0) {
					// If an object, observe the object. If an array, only add arrayChange binding if has filter or if filter is undefined (!== 0) - which
					// is the case for top-level calls or for nested array (array item of an array - e.g. member of 2-dimensional array).
					// For array properties lower in the tree, with no filter, filter is set to 0 in filterAndObserveAll, so no arrayChange binding here,
					// since they get arrayChange binding added during regular $.observe(array ...) binding.
					wrappedCb._cId = getCbKey(cb); // Identify wrapped callback with unwrapped callback, so unobserveAll will
													// remove previous observeAll wrapped callback, if inner callback was the same;
					if (notRemoving) {
						$observe(namespace, object, isObject, wrappedCb, unobserve, filter, nextParentObs, allPath);
						obId = $data(object).obId;
						objMap[obId] = (objMap[obId] || 0) + 1; // Register on map of objects observed/unobserved by this observeAll/unobserveAll call
							//- or remove from map if we are removing this object from observeAll call. (Avoid dups, for cyclic graphs)
					} else {
						if (--objMap[$data(object).obId]) {
							// Register on map of objects observed/unobserved by this observeAll/unobserveAll call
							//- or remove from map if we are removing this object from observeAll call. (Avoid dups, for cyclic graphs)
							return;
						}
						$observe(namespace, object, isObject, wrappedCb, unobserve, filter, nextParentObs, allPath);
					}
				}
			} else {
				// No callback. Just unobserve if unobserve === true.
				if (objMap) {
					objMap[$data(object).obId] = 1; // Register on map of objects unobserved by this unobserveAll call. (Avoid dups, for cyclic graphs)
				}
				$observe(namespace, object, isObject, undefined, unobserve, filter, nextParentObs, allPath);
			}

			if (isObject) {
				// Continue stepping through object graph, observing object and arrays
				// To override filtering, pass in filter function, or replace $.observable._fltr
				for (l in object) {
					newAllPath = allPath + "." + l;
					filterAndObserveAll(object, l, unobserve);
				}
			} else { // Observe items in Array
				observeArrayItems(object, unobserve);
			}
		}
	},

	shallowFilter = function(allPath /*, object, parentObs*/) {
		return allPath.indexOf(".") < 0 && allPath.indexOf("[") < 0;
	},

	$unobserve = function() {
		[].push.call(arguments, true); // Add true as additional final argument
		return $observe.apply(this, arguments);
	};

	$observe = function() {
		// $.observe([namespace, ]root, [1 or more objects, path or path Array params...], callback[, contextCallback][, unobserve])

		function innerObserve() {

			function observeOnOff(namespace, pathStr, isArrayBinding, off) {
				var j, evData,
					obIdExpando = $hasData(object),
					boundObOrArr = wrapArray(object),
					prntObs = parentObs,
					allPth = allPath;

				namespace = initialNs ? namespace + "." + initialNs : namespace;

				if (!unobserve && (off || isArrayBinding)) {
					events = obIdExpando && $._data(object);
					events = events && events.events;
					events = events && events[isArrayBinding ? arrayChangeStr : propertyChangeStr];
					el = events && events.length;
					while (el--) { // Skip duplicates
						data = events[el] && events[el].data;
						if (data && (off && data.ns !== initialNs
							// When observing, don't unbind dups unless they have the same namespace
							|| !off && data.ns === initialNs && data.cb && data.cb._cId === callback._cId))
							// When observing and doing array binding, don't bind dups if they have the same namespace (Dups can happen e.g. with {^{for people ~foo=people}})
						{
							return;
						}
					}
				}
				if (unobserve || off) {
					$(boundObOrArr).off(namespace, onObservableChange);
				} else {
					evData = isArrayBinding ? {}
						: {
							fullPath: path,
							paths: pathStr ? [pathStr] : [],
							prop: prop
						};
					evData.ns = initialNs;
					evData.cb = callback;

					if (allPath) {
						// This is an observeAll call
						evData.observeAll = {
							_path: allPth,
							path: function() { // Step through path and parentObs parent chain, replacing '[]' by '[n]' based on current index of objects in parent arrays.
								j = prntObs.length;
								return allPth.replace(/[[.]/g, function(all) {
									j--;
									return all === "["
										? "[" + $.inArray(prntObs[j - 1], prntObs[j])
										: ".";
								});
							},
							parents: function() {
								return prntObs; // The chain of parents between the modified object and the root object used in the observeAll() call
							},
							filter: filter
						};
					}
					$(boundObOrArr).on(namespace, null, evData, onObservableChange);
					if (cbBindings) {
						// Add object to cbBindings
						cbBindings[$data(object).obId || $data(object, "obId", observeObjKey++)] = object;
					}
				}
			}

			function getInnerCb(exprOb) {
				// Returns the innerCb used for updating a computed in a compiled expression (setting the new instance as exprOb.ob, unobserving the previous object,
				// and observing the new one), then calling the outerCB - i.e. the handler for the whole compiled expression.
				// Initialized exprOb.ob to the current object.
				// Uses the contextCb callback to execute the compiled exprOb template in the context of the view/data etc. to get the returned value, typically an object or array.
				// If it is an array, registers array binding
				var origRt = root;
				// Note: For jsviews/issues/292 ctxCb will need var ctxCb = contextCb || function(exprOb, origRt) {return exprOb._jsv(origRt);};

				exprOb.ob = contextCb(exprOb, origRt); // Initialize object

				return exprOb.cb = function(ev, eventArgs) {
					var obj = exprOb.ob, // The old object
						sub = exprOb.sb,
						newObj = contextCb(exprOb, origRt);

					if (newObj !== obj) {
						if (typeof obj === OBJECT) {
							bindArray(obj, true);
							if (sub || allowArray && $isArray(obj)) {
								innerObserve([obj], sub, callback, contextCb, true); // unobserve on the old object
							}
						}
						exprOb.ob = newObj;
						// Put the updated object instance onto the exprOb in the paths array, so subsequent string paths are relative to this object
						if (typeof newObj === OBJECT) {
							bindArray(newObj);
							if (sub || allowArray && $isArray(newObj)) {
								// Register array binding
								innerObserve([newObj], sub, callback, contextCb);
							}
						}
					}
					// Call the outerCb - to execute the compiled expression that this computed is part of
					callback(ev, eventArgs);
				};
			}

			function bindArray(arr, unbind, isArray, relPath) {
				if (allowArray) {
					// This is a call to observe that does not come from observeAndBind (tag binding), so we allow arrayChange binding
					var prevObj = object,
						prevAllPath = allPath;

					object = arr;
					if (relPath) {
						object = arr[relPath];
						allPath += "." + relPath;
					}
					if (filter && object) {
						object = $observable._fltr(allPath, object, relPath ? [arr].concat(parentObs) : parentObs, filter);
					}
					if (object && (isArray || $isArray(object))) {
						observeOnOff(arrayChangeStr + ".observe" + (callback ? getCbKey(callback) : ""), undefined, true, unbind);
					}
					object = prevObj;
					allPath = prevAllPath;
				}
			}

			var i, p, skip, parts, prop, path, dep, unobserve, callback, cbId, inId, el, data, events, contextCb, items, cbBindings,
				depth, innerCb, parentObs, allPath, filter, initNsArr, initNsArrLen,
				ns = observeStr,
				paths = this != 1 // Using != for IE<10 bug- see jsviews/issues/237
					? concat.apply([], arguments) // Flatten the arguments - this is a 'recursive call' with params using the 'wrapped array'
													// style - such as innerObserve([object], path.path, [origRoot], path.prm, innerCb, ...);
					: slice.call(arguments), // Don't flatten - this is the first 'top-level call, to innerObserve.apply(1, paths)
				lastArg = paths.pop() || false,
				root = paths.shift(),
				object = root,
				l = paths.length;

			if (lastArg + "" === lastArg) { // If last arg is a string then this observe call is part of an observeAll call,
				allPath = lastArg;          // and the last three args are the parentObs array, the filter, and the allPath string.
				parentObs = paths.pop();
				filter = paths.pop();
				lastArg = !!paths.pop(); // unobserve
				l -= 3;
			}
			if (lastArg === !!lastArg) {
				unobserve = lastArg;
				lastArg = paths[l-1];
				lastArg = l && lastArg + "" !== lastArg && (!lastArg || $isFunction(lastArg)) ? (l--, paths.pop()) : undefined;
				if (unobserve && !l && $isFunction(root)) {
					lastArg = root;
					root = undefined;
				}
			}
			callback = lastArg;
			if (l && $isFunction(paths[l - 1])) {
				contextCb = callback;
				callback = paths.pop();
				l--;
			}

			if (unobserve && callback && !callback._cId) {
				return;
			}

			// Use a unique namespace (e.g. obs7) associated with each observe() callback to allow unobserve to remove handlers
			ns += callback
				? ((inId = callback._inId || ""), unobserve)
					? callback._cId + inId
					: (cbId = getCbKey(callback)) + inId
				: "";

			if (cbId && !unobserve) {
				cbBindings = cbBindingsStore[cbId] = cbBindingsStore[cbId] || {};
			}

			initNsArr = initialNs && initialNs.match(rNotWhite) || [""];
			initNsArrLen = initNsArr.length;

			while (initNsArrLen--) {
				initialNs = initNsArr[initNsArrLen];
				if (root && (path = paths[0], !path || path + "" !== path)) {
					if ($isArray(root)) {
						bindArray(root, unobserve, true);
					} else if (unobserve) {
						// remove onObservableChange handlers that wrap that callback
						observeOnOff(ns, "");
					}
				}
				if (unobserve && !l && !root) { // unobserve() - unobserves all
					for (p in cbBindingsStore) {
						p = cbBindingsStore[p];
						for (data in p) {
							object = p[data];
							if ($isArray(object)) {
								bindArray(object, unobserve, unobserve);
							} else {
								// remove onObservableChange handlers that wrap that callback
								observeOnOff(ns, "");
							}
						}
					}
				}
				depth = 0;
				for (i = 0; i < l; i++) {
					path = paths[i];
					if (path === "") {
						continue;
					}
					object = root;
					if ("" + path === path) {
						// Consider support for computed paths: jsviews/issues/292
						//if (/[\(\[\+]/.test(path)) {
						//	var b={links:{}}, t = $sub.tmplFn("{:"+path+"}", b, true), items = t.paths[0];
						//	l += items.length - 1;
						//	splice.apply(paths, [i--, 1].concat(items));
						//	continue;
						//}
						parts = path.split("^");
						if (parts[1]) {
							// We bind the leaf, plus additional nodes based on depth.
							// "a.b.c^d.e" is depth 2, so listens to changes of e, plus changes of d and of c
							depth = parts[0].split(".").length;
							path = parts.join(".");
							depth = path.split(".").length - depth;
							// if more than one ^ in the path, the first one determines depth
						}
						if (contextCb && (items = contextCb(path, root, depth))) {
							// If the array of objects and paths returned by contextCb is non empty, insert them
							// into the sequence, replacing the current item (path). Otherwise simply remove current item (path)
							l += items.length - 1;
							splice.apply(paths, [i--, 1].concat(items));
							continue;
						}
						parts = path.split(".");
					} else {
						if (!$isFunction(path)) {
							if (path && path._jsv) {
								// This is a compiled function for binding to an object returned by a helper/data function.
								// Set current object on exprOb.ob, and get innerCb for updating the object
								innerCb = unobserve ? path.cb : getInnerCb(path);
								innerCb.noArray = !allowArray;
								// innerCb._ctx = callback._ctx; Could pass context (e.g. linkCtx) for use in a depends = function() {} call, so depends is different for different linkCtx's
								innerCb._cId = callback._cId;
								// Set the same cbBindingsStore key as for callback, so when callback is disposed, disposal of innerCb happens too.
								innerCb._inId = innerCb._inId || ".obIn" + observeInnerCbKey++;
								if (path.bnd || path.prm && path.prm.length || !path.sb) {
									// If the exprOb is bound e.g. foo()^sub.path, or has parameters e.g. foo(bar) or is a leaf object (so no sub path) e.g. foo()
									// then observe changes on the object, or its parameters and sub-path
									innerObserve([object], path.path, [origRoot], path.prm, innerCb, contextCb, unobserve);
								}
								if (path.sb) { // subPath
									innerObserve([path.ob], path.sb, callback, contextCb, unobserve);
								}
								path = origRoot;
								object = undefined;
							} else {
								object = path; // For top-level calls, objects in the paths array become the origRoot for subsequent paths.
							}
						}
						parts = [root = path];
					}
					while (object && (prop = parts.shift()) !== undefined) {
						if (typeof object === OBJECT) {
							if ("" + prop === prop) {
								if (prop === "") {
									continue;
								}
								if ((parts.length < depth + 1) && !object.nodeType) {
									// Add observer for each token in path starting at depth, and on to the leaf
									if (!unobserve && (events = $hasData(object) && $._data(object))) {
										events = events.events;
										events = events && events[propertyChangeStr];
										el = events && events.length;
										skip = 0;
										while (el--) { // Skip duplicates
											data = events[el].data;
											if (data
												&& data.ns === initialNs
												&& data.cb._cId === callback._cId
												&& data.cb._inId === callback._inId
												&& (data.prop === prop || data.prop === "*" || data.prop === "**")) {
												if (p = parts.join(".")) {
													data.paths.push(p); // We will skip this binding, but if it is not a leaf binding,
													// need to keep bindings for rest of path, ready for if the object gets swapped.
												}
												skip++;
											}
										}
										if (skip) {
											// Duplicate binding(s) found, so move on
											object = object[prop];
											continue;
										}
									}
									if (prop === "*" || prop === "**") { // "*" => all properties. "**" => all properties and sub-properties (i.e. deep observeAll behavior)
										if (!unobserve && events && events.length) {
											// Remove existing bindings, since they will be duplicates with "*" or "**"
											observeOnOff(ns, "", false, true);
										}
										if (prop === "*") {
											observeOnOff(ns, ""); // observe the object for any property change
											for (p in object) {
												// observing "*": So (in addition to listening to prop change, above) listen to arraychange on props of type array
												if (p !== $expando) {
													bindArray(object, unobserve, undefined, p);
												}
											}
										} else {
											$.observable(initialNs, object)[(unobserve ? "un" : "") + "observeAll"](callback); // observe or unobserve the object for any property change
										}
										break;
									} else if (prop) {
										observeOnOff(ns + ".p_" + prop, parts.join("^")); // By using "^" rather than "." we ensure that deep binding will be used on newly inserted object graphs
									}
								}
								if (allPath) {
									allPath += "." + prop;
								}
								prop = object[prop];
							}
							if ($isFunction(prop)) {
								if (dep = prop.depends) {
									// This is a computed observable. We will observe any declared dependencies
									innerObserve([object], resolvePathObjects(dep, object, callback), callback, contextCb, unobserve);
								}
								break;
							}
							object = prop;
							if (unobserve && object === root && (i>l-2 || paths[i+1] + "" !== paths[i+1])) {
								// unobserve all handlers of object, if not followed by string path.
								// e.g.$.unobserve(object1, object2, "path", object3) will unobserve all from object1 and object3, and just "path" listener from object2
								observeOnOff(ns, "");
							}
						}
					}
					bindArray(object, unobserve);
				}
			}
			if (cbId) {
				removeCbBindings(cbBindings, cbId);
			}

			// Return the cbBindings to the top-level caller, along with the cbId
			return {cbId: cbId, bnd: cbBindings};
		}

		var initialNs,
			allowArray = this != false, // If this === false, this is a call from observeAndBind - doing binding of datalink expressions. We don't bind
			// arrayChange events in this scenario. Instead, {^{for}} and similar do specific arrayChange binding to the tagCtx.args[0] value, in onAfterLink.
			// Note deliberately using this != false, rather than this !== false because of IE<10 bug- see jsviews/issues/237
			paths = slice.call(arguments),
			origRoot = paths[0];

		if (origRoot + "" === origRoot && allowArray) {
			initialNs = origRoot; // The first arg is a namespace, since it is a string, and this call is not from observeAndBind
			paths.shift();
			origRoot = paths[0];
		}

		return innerObserve.apply(1, paths);
	};

	$observable = function(ns, data) {
		if (arguments.length === 1) {
			data = ns;
			ns = "";
		}
		return $isArray(data)
			? new ArrayObservable(ns, data)
			: new ObjectObservable(ns, data);
	};

	//========================== Initialize ==========================

	$sub.getDeps = function() {
		var args = arguments;
		return function() {
			var arg, dep,
				deps = [],
				l = args.length;
			while (l--) {
				arg = args[l--];
				dep = args[l];
				if (dep) {
					deps = deps.concat($isFunction(dep) ? dep(arg, arg) : dep);
				}
			}
			return deps;
		};
	};

	$.observable = $observable;
	$observable._fltr = function(allPath, object, parentObs, filter) {
		if (filter && $isFunction(filter)
			? filter(allPath, object, parentObs)
			: true // TODO Consider supporting filter being a string or strings to do RegEx filtering based on key and/or allPath
		) {
			object = $isFunction(object)
				? object.set && object.call(parentObs[0]) // It is a getter/setter
				: object;
			return typeof object === OBJECT && object;
		}
	};

	$observable.Object = ObjectObservable;
	$observable.Array = ArrayObservable;
	$.observe = $observable.observe = $observe;
	$.unobserve = $observable.unobserve = $unobserve;
	$observable._apply = observe_apply;

	ObjectObservable.prototype = {
		_data: null,

		observeAll: $observeAll,
		unobserveAll: $unobserveAll,

		data: function() {
			return this._data;
		},

		setProperty: function(path, value, nonStrict) {
			path = path || "";
			var key, pair, parts,
				multi = path + "" !== path,
				self = this,
				object = self._data;

			if (object) {
				if (multi) {
					nonStrict = value;
					if ($isArray(path)) {
						// This is the array format generated by serializeArray. However, this has the problem that it coerces types to string,
						// and does not provide simple support of convertTo and convertFrom functions.
						key = path.length;
						while (key--) {
							pair = path[key];
							self.setProperty(pair.name, pair.value, nonStrict === undefined || nonStrict); //If nonStrict not specified, default to true;
						}
					} else {
						// Object representation where property name is path and property value is value.
						for (key in path) {
							self.setProperty(key, path[key], nonStrict);
						}
					}
				} else if (path !== $expando) {
					// Simple single property case.
					parts = path.split(/[.^]/);
					while (object && parts.length > 1) {
						object = object[parts.shift()];
					}
					if (object) {
						self._setProperty(object, parts[0], value, nonStrict);
					}
				}
			}
			return self;
		},

		removeProperty: function(path) {
			this.setProperty(path, remove);
			return this;
		},

		_setProperty: function(leaf, path, value, nonStrict) {
			var setter, getter, removeProp,
				property = path ? leaf[path] : leaf;

			if ($isFunction(property)) {
				if (property.set) {
					// Case of property setter/getter - with convention that property is getter and property.set is setter
					leaf = leaf._wrp  // Case of JsViews 2-way data-linking to a helper function as getter, with a setter.
						// The view will be the this pointer for getter and setter. Note: this is the one scenario where path is "".
						|| leaf;
					getter = property;
					setter = getter.set === true ? getter : getter.set;
					property = getter.call(leaf); // get - only treated as getter if also a setter. Otherwise it is simply a property of type function. See unit tests 'Can observe properties of type function'.
				}
			}

			if (property !== value || nonStrict && property != value) { // Optional non-strict equality, since serializeArray, and form-based editors can map numbers to strings, etc.
				// Date objects don't support != comparison. Treat as special case.
				if (!(property instanceof Date) || property > value || property < value) {
					if (setter) {
						setter.call(leaf, value);   //set
						value = getter.call(leaf);  //get updated value
					} else if (removeProp = value === remove) {
						if (property !== undefined) {
							delete leaf[path];
							value = undefined;
						} else {
							path = undefined; // If value was already undefined, don't trigger handler for removeProp
						}
					} else if (path) {
						leaf[path] = value;
					}
					if (path) {
						this._trigger(leaf, {change: "set", path: path, value: value, oldValue: property, remove: removeProp});
					}
				}
			}
		},

		_trigger: function(target, eventArgs) {
			$(target).triggerHandler(propertyChangeStr + (this._ns ? "." + /^\S+/.exec(this._ns)[0] : ""), eventArgs); // If white-space separated namespaces, use first one only
		}
	};

	ArrayObservable.prototype = {
		_data: null,

		observeAll: $observeAll,
		unobserveAll: $unobserveAll,

		data: function() {
			return this._data;
		},

		insert: function(index, data) {
			var _data = this._data;
			if (arguments.length === 1) {
				data = index;
				index = _data.length;
			}
			index = PARSEINT(index);
			if (index > -1) {
				data = $isArray(data) ? data : [data];
				// data can be a single item (including a null/undefined value) or an array of items.
				// Note the provided items are inserted without being cloned, as direct references to the provided objects

				if (data.length) {
					this._insert(index, data);
				}
			}
			return this;
		},

		_insert: function(index, data) {
			var _data = this._data,
				oldLength = _data.length;
			if (index > oldLength) {
				index = oldLength;
			}
			splice.apply(_data, [index, 0].concat(data));
			this._trigger({change: "insert", index: index, items: data}, oldLength);
		},

		remove: function(index, numToRemove) {
			var items,
				_data = this._data;

			if (index === undefined) {
				index = _data.length - 1;
			}

			index = PARSEINT(index);
			numToRemove = numToRemove ? PARSEINT(numToRemove) : numToRemove === 0 ? 0 : 1; // if null or undefined: remove 1
			if (numToRemove > 0 && index > -1) {
				items = _data.slice(index, index + numToRemove);
				if (numToRemove = items.length) {
					this._remove(index, numToRemove, items);
				}
			}
			return this;
		},

		_remove: function(index, numToRemove, items) {
			var _data = this._data,
				oldLength = _data.length;

			_data.splice(index, numToRemove);
			this._trigger({change: "remove", index: index, items: items}, oldLength);
		},

		move: function(oldIndex, newIndex, numToMove) {
			numToMove = numToMove ? PARSEINT(numToMove) : numToMove === 0 ? 0 : 1; // if null or undefined: move 1
			oldIndex = PARSEINT(oldIndex);
			newIndex = PARSEINT(newIndex);

			if (numToMove > 0 && oldIndex > -1 && newIndex > -1 && oldIndex !== newIndex) {
				this._move(oldIndex, newIndex, numToMove);
			}
			return this;
		},

		_move: function(oldIndex, newIndex, numToMove) {
			var items,
				_data = this._data,
				oldLength = _data.length,
				excess = oldIndex + numToMove - oldLength;
			if (excess > 0) {
				numToMove -= excess;
			}
			if (numToMove) {
				items = _data.splice(oldIndex, numToMove); // remove
				if (newIndex > _data.length) {
					newIndex = _data.length;
				}
				splice.apply(_data, [newIndex, 0].concat(items)); //re-insert
				this._trigger({change: "move", oldIndex: oldIndex, index: newIndex, items: items}, oldLength);
			}
		},

		refresh: function(newItems, sort) {
			function insertAdded() {
				if (k) {
					self.insert(j-k, addedItems); // Not found in original array - so insert
					dataLength += k;
					i += k;
					k = 0;
					addedItems = [];
				}
			}

			// For refresh operation we iteratively step through the target array and sort by move/add/remove operations on the source array until they match
			var i, j, k, newItem, num,
				self = this,
				addedItems = [],
				data = self._data,
				oldItems = data.slice(),
				oldLength = data.length,
				dataLength = oldLength,
				newLength = newItems.length;
			self._srt = true; // Flag for sorting during refresh
			for (j=k=0; j<newLength; j++) {
				if ((newItem = newItems[j]) === data[j-k]) {
						insertAdded();
				} else {
					for (i=j-k; i<dataLength; i++) {
						if (newItem === data[i]) {
							break;
						}
					}
					if (i<dataLength) {
						insertAdded();
						num = 0;
						while (num++ < newLength-i && newItems[j+num] === data[i+num]);
						self.move(i, j, num); // Found newItem in original array - so move it to new position
						j += num - 1;
					} else {
						k++;
						addedItems.push(newItem); // Not found in original array - so insert
					}
				}
			}
			insertAdded();
			if (dataLength > j) {
				self.remove(j, dataLength - j);
			}
			self._srt = undefined; // We have finished sort operations during refresh
			self._trigger({change: "refresh", oldItems: oldItems}, oldLength);
			return self;
		},

		_trigger: function(eventArgs, oldLength) {
			var self = this,
				_data = self._data,
				length = _data.length,
				$_data = $([_data]);
			if (self._srt) {
				eventArgs.refresh = true; // We are sorting during refresh
			} else if (length !== oldLength) {  // We have finished sort operations during refresh
				$_data.triggerHandler(propertyChangeStr, {change: "set", path: "length", value: length, oldValue: oldLength});
			}
			$_data.triggerHandler(arrayChangeStr + (self._ns ? "." + /^\S+/.exec(self._ns)[0] : ""), eventArgs); // If white-space separated namespaces, use first one only
		}
	};

	$eventSpecial[propertyChangeStr] = $eventSpecial[arrayChangeStr] = {
		// Register a jQuery special 'remove' event, to access the data associated with handlers being removed by jQuery.off().
		// We get data.cb._cId from the event handleObj and get the corresponding cbBindings hash from the cbBindingsStore,
		// then remove this object from that bindings hash - if the object does not have any other handlers associated with the same callback.
		remove: function (handleObj) {
			var cbBindings, found, events, l, data,
				evData = handleObj.data;
			if ((evData) && (evData.off = true, evData = evData.cb)) { //Set off = true as marker for disposed event
				// Get the cb._cId from handleObj.data.cb._cId
				if (cbBindings = cbBindingsStore[evData._cId]) {
					// There were bindings for this callback. If this was the last one, we'll remove it.
					events = $._data(this).events[handleObj.type];
					l = events.length;
					while (l-- && !found) {
						found = (data = events[l].data) && data.cb && data.cb._cId === evData._cId;
						// Found another one with same callback (though may be a different innerCallback)
					}
					if (!found) {
						// This was the last handler for this callback and object, so remove the binding entry
						delete cbBindings[$data(this).obId];
						removeCbBindings(cbBindings, evData._cId);
					}
				}
			}
		}
	};

	$views.map = function(mapDef) {
		function Map(source, options, target, unbound) {
			var changing,
				map = this;
			if (this.src) {
				this.unmap(); // We are re-mapping a new source
			}
			if (typeof source === OBJECT) {
				map.src = source;
				map.tgt = target || map.tgt || [];
				map.options = options || map.options;
				map.update();
				if (!unbound) {
					if (mapDef.obsSrc) {
						$observable(map.src).observeAll(map.obs = function(ev, eventArgs) {
							if (!changing) {
								changing = true;
								mapDef.obsSrc(map, ev, eventArgs);
								changing = undefined;
							}
						}, map.srcFlt);
					}
					if (mapDef.obsTgt ) {
						$observable(map.tgt).observeAll(map.obt = function(ev, eventArgs) {
						if (!changing) {
							changing = true;
							mapDef.obsTgt(map, ev, eventArgs);
							changing = undefined;
						}
						}, map.tgtFlt);
					}
				}
			}
		}

		if ($isFunction(mapDef)) {
			// Simple map declared as function
			mapDef = {
				getTgt: mapDef
			};
		}

		if (mapDef.baseMap) {
			mapDef = $.extend({}, mapDef.baseMap, mapDef);
		}

		mapDef.map = function(source, options, target, unbound) {
			return new Map(source, options, target, unbound);
		};

		(Map.prototype = {
			srcFlt: mapDef.srcFlt || shallowFilter, // default to shallowFilter
			tgtFlt: mapDef.tgtFlt || shallowFilter,
			update: function(options) {
				var map = this;
				$observable(map.tgt).refresh(mapDef.getTgt(map.src, map.options = options || map.options));
			},
			unmap: function() {
				var map = this;
				if (map.src) {
					if (map.obs) {
						$observable(map.src).unobserveAll(map.obs, map.srcFlt);
					}
					if (map.obt) {
						$observable(map.tgt).unobserveAll(map.obt, map.tgtFlt);
					}
					map.src = undefined;
				}
			},
			map: Map,
			_def: mapDef
		}).constructor = Map;

		return mapDef;
	};

	$sub.advSet = function() { // refresh advanced settings
		global._jsv = $subSettings.advanced._jsv
			? { // create global _jsv, for accessing views, etc
					cbBindings: cbBindingsStore
				}
			: undefined; // In IE8 cannot do delete global._jsv
	};
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JsViews >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* JsViews:
 * Interactive data-driven views using templates and data-linking.
 * See http://www.jsviews.com/#jsviews and http://github.com/BorisMoore/jsviews
 * Copyright 2016, Boris Moore
 * Released under the MIT License.
 */

//========================== Top-level vars ==========================

$viewsSettings = $views.settings;
$subSettings = $sub.settings;
$subSettingsAdvanced = $subSettings.advanced;
$converters = $views.converters;
$.templates = $templates = $views.templates;
$tags = $views.tags;
rFirstElem = /<(?!script)(\w+)[>\s]/;

if ($.link) { return $; } // JsViews is already loaded

$subSettings.trigger = true;
var activeBody, rTagDatalink, $view, $viewsLinkAttr, linkViewsSel, wrapMap, viewStore, oldAdvSet,
	jsvAttrStr = "data-jsv",
	elementChangeStr = "change.jsv",
	onBeforeChangeStr = "onBeforeChange",
	onAfterChangeStr = "onAfterChange",
	onAfterCreateStr = "onAfterCreate",
	CHECKED = "checked",
	CHECKBOX = "checkbox",
	RADIO = "radio",
	NONE = "none",
	SCRIPT = "SCRIPT",
	TRUE = "true",
	closeScript = '"></script>',
	openScript = '<script type="jsv',
	deferAttr = jsvAttrStr + "-df",
	bindElsSel = "script,[" + jsvAttrStr + "]",
	fnSetters = {
		value: "val",
		input: "val",
		html: HTML,
		text: "text"
	},
	valueBinding = {from: "value", to: "value"},
	isCleanCall = 0,
	oldCleanData = $.cleanData,
	oldJsvDelimiters = $viewsSettings.delimiters,
	safeFragment = document.createDocumentFragment(),
	qsa = document.querySelector,

	// elContent maps tagNames which have only element content, so may not support script nodes.
	elContent = {ol: 1, ul: 1, table: 1, tbody: 1, thead: 1, tfoot: 1, tr: 1, colgroup: 1, dl: 1, select: 1, optgroup: 1, svg: 1, svg_ns: 1},
	badParent = {tr: "table"},
	voidElems = {br: 1, img: 1, input: 1, hr: 1, area: 1, base: 1, col: 1, link: 1, meta: 1,
		command: 1, embed: 1, keygen: 1, param: 1, source: 1, track: 1, wbr: 1},
	displayStyles = {},
	bindingStore = {},
	bindingKey = 1,
	rViewPath = /^#(view\.?)?/,
	rConvertMarkers = /((\/>)|<\/(\w+)>|)(\s*)([#\/]\d+(?:_|(\^)))`(\s*)(<\w+(?=[\s\/>]))?|\s*(?:(<\w+(?=[\s\/>]))|<\/(\w+)>(\s*)|(\/>)\s*|(>)|$)/g,
	rOpenViewMarkers = /(#)()(\d+)(_)/g,
	rOpenMarkers = /(#)()(\d+)([_^])/g,
	rViewMarkers = /(?:(#)|(\/))(\d+)(_)/g,
	rOpenTagMarkers = /(#)()(\d+)(\^)/g,
	rMarkerTokens = /(?:(#)|(\/))(\d+)([_^])([-+@\d]+)?/g,
	rSplitBindings = /&(\d+)\+?/g,
	getComputedStyle = global.getComputedStyle;

$observable = $.observable;

if (!$observable) {
	// JsObservable is not loaded.
	throw requiresStr + "JsObservable"; // jquery.observable.js must be loaded before JsViews
}

$observe = $observable.observe;

//========================== Top-level functions ==========================

//===============
// Event handlers
//===============

function elemChangeHandler(ev, params, sourceValue) {
	var setter, cancel, fromAttr, linkCtx, cvtBack, cnvtName, target, $source, view, binding, oldLinkCtx, onBeforeChange, onAfterChange, tag, to, eventArgs, exprOb,
		source = ev.target,
		bindings = source._jsvBnd;

	// _jsvBnd is a string with the syntax: "&bindingId1&bindingId2"
	if (bindings && ev['char']!=="") {
		while (binding = rSplitBindings.exec(bindings)) {
			if (binding = bindingStore[binding[1]]) {
				if (to = binding.to) {
					// The binding has a 'to' field, which is of the form [[targetObject, toPath], cvtBack]
					linkCtx = binding.linkCtx;
					view = linkCtx.view;
					tag = linkCtx.tag || view.tag;
					$source = $(source);
					onBeforeChange = view.hlp(onBeforeChangeStr); // TODO Can we optimize this and other instances of same?
					onAfterChange = view.hlp(onAfterChangeStr); // TODO Can we optimize this and other instances of same
					fromAttr = defaultAttr(source);
					setter = fnSetters[fromAttr];
					if (sourceValue === undefined) {
						sourceValue = $isFunction(fromAttr)
							? fromAttr(source)
							: setter
								? $source[setter]()
								: $source.attr(fromAttr);
					}
					cnvtName = to[1];
					to = to[0]; // [object, path]
					to = to + "" === to ? [linkCtx.data, to] : to;
					if (cnvtName) {
						if ($isFunction(cnvtName)) {
							cvtBack = cnvtName;
						} else {
							cvtBack = view.getRsc("converters", cnvtName);
						}
					}
					if (linkCtx.elem.nodeName === "SELECT") {
						linkCtx.elem._jsvSel = sourceValue = sourceValue || (linkCtx.elem.multiple ? [] : sourceValue);
						// data-link <select> to string or (multiselect) array of strings
					}
					if (cvtBack) {
						sourceValue = cvtBack.call(tag, sourceValue);
					}

					// Set linkCtx on view, dynamically, just during this handler call
					oldLinkCtx = view.linkCtx;
					view.linkCtx = linkCtx;
					eventArgs = {
						change: "change",
						oldValue: linkCtx._val,
						value: sourceValue
					};
					if ((!onBeforeChange || !(cancel = onBeforeChange.call(linkCtx, ev, eventArgs) === false)) &&
							(!tag || !tag.onBeforeChange || !(cancel = tag.onBeforeChange(ev, eventArgs) === false)) &&
							sourceValue !== undefined) {
						target = to[0]; // [object, path]
						if (sourceValue !== undefined && target) {
							if (target._jsv) {
								exprOb = target;
								target = linkCtx.data;
								while (exprOb && exprOb.sb) {
									target = linkCtx._ctxCb(exprOb, target);
									exprOb = exprOb.sb;
								}
							}
							if (tag) {
								tag._.chging = true; // marker to prevent tag change event triggering its own refresh
							}
							$observable(target).setProperty(to[1], sourceValue); // 2way binding change event - observably updating bound object
							if (onAfterChange) {
								onAfterChange.call(linkCtx, ev, eventArgs);
							}
							if (tag) {
								if (tag.onAfterChange) {
									tag.onAfterChange(ev, eventArgs);
								}
								tag._.chging = undefined; // clear the marker
							}
							linkCtx._val = sourceValue;
						}
					}
					view.linkCtx = oldLinkCtx;
				}
			}
		}
	}
}

function propertyChangeHandler(ev, eventArgs, linkFn) {
	var attr, sourceValue, noUpdate, forceUpdate, hasError, onError,
		linkCtx = this,
		tag = linkCtx.tag,
		source = linkCtx.data,
		target = linkCtx.elem,
		cvt = linkCtx.convert,
		parentElem = target.parentNode,
		view = linkCtx.view,
		oldLinkCtx = view.linkCtx,
		onEvent = view.hlp(onBeforeChangeStr);

	// Set linkCtx on view, dynamically, just during this handler call
	view.linkCtx = linkCtx;

	if (parentElem && (!onEvent || !(eventArgs && onEvent.call(linkCtx, ev, eventArgs) === false))
			// If data changed, the ev.data is set to be the path. Use that to filter the handler action...
			&& !(eventArgs && ev.data.prop !== "*" && ev.data.prop !== eventArgs.path)) {

		if (eventArgs) {
			linkCtx.eventArgs = eventArgs;
		}
		if (eventArgs || linkCtx._toLk) {
			// If eventArgs are defined, this is a data update
			// Otherwise this is the initial data-link rendering call. Bind on this the first time it get called
			linkCtx._toLk = 0; // Remove flag to skip unneccessary rebinding next time
			if (linkFn._er) {
				// data-link="exprUsingTagOrCvt with onerror=..." - e.g. {tag ... {cvt:... {:... convert='cvt'
				try {
					sourceValue = linkFn(source, view);
				} catch (e) {
					hasError = linkFn._er;
					onError = onRenderError(e,view,(new Function("data,view", "return " + hasError + ";"))(source, view));
					sourceValue = [{props: {}, args: [onError]}];
				}
			} else {
				sourceValue = linkFn(source, view, $sub);
			}
			// Compiled link expression for linkTag: return value for data-link="{:xxx}" with no cvt or cvtBk, otherwise tagCtx or tagCtxs

			attr = getTargetVal(sourceValue, linkCtx, tag = linkCtx.tag,
					linkCtx.attr || defaultAttr(target, true, cvt !== undefined)
				);

			if (tag) {
				// Existing tag instance
				forceUpdate = hasError || tag._er;
				// If the new tagCtxs hasError or the previous tagCtxs had error, then force update
				sourceValue = sourceValue[0] ? sourceValue : [sourceValue];
				noUpdate = !forceUpdate && eventArgs && tag.onUpdate && tag.onUpdate(ev, eventArgs, sourceValue) === false;

				mergeCtxs(tag, sourceValue, forceUpdate);

				if (noUpdate || attr === NONE) {
					// onUpdate returned false, or attr === "none", or this is an update coming from the tag's own change event
					// - so don't refresh the tag: we just use the new tagCtxs merged from the sourceValue,
					// (which may optionally have been modifed in onUpdate()...) and then bind, and we are done
					callAfterLink(tag, ev, eventArgs);
					observeAndBind(linkCtx, source, target);
					view.linkCtx = oldLinkCtx;
					return;
				}
				if (tag._.chging) {
					return;
				}

				if (tag.onUnbind) {
					tag.onUnbind(tag.tagCtx, linkCtx, tag.ctx, ev, eventArgs);
				}

				sourceValue = tag.tagName === ":" // Call convertVal if it is a {{cvt:...}} - otherwise call renderTag
					? $sub._cnvt(tag.cvt, view, sourceValue[0])
					: $sub._tag(tag, view, view.tmpl, sourceValue, true, onError);
			} else if (linkFn._tag) {
				// For {{: ...}} without a convert or convertBack, we already have the sourceValue, and we are done
				// For {{: ...}} with either cvt or cvtBack we call convertVal to get the sourceValue and instantiate the tag
				// If cvt is undefined then this is a tag, and we call renderTag to get the rendered content and instantiate the tag
				cvt = cvt === "" ? TRUE : cvt; // If there is a cvtBack but no cvt, set cvt to "true"
				sourceValue = cvt // Call convertVal if it is a {{cvt:...}} - otherwise call renderTag
					? $sub._cnvt(cvt, view, sourceValue[0] || sourceValue) // convertVal
					: $sub._tag(linkFn._tag, view, view.tmpl, sourceValue, true, onError); // renderTag

				addLinkMethods(tag = linkCtx.tag, true); // In both convertVal and renderTag we have instantiated a tag
				attr = linkCtx.attr || attr; // linkCtx.attr may have been set to tag.attr during tag instantiation in renderTag
			}

			if (updateContent(sourceValue, linkCtx, attr, tag)
					&& eventArgs
					&& (onEvent = view.hlp(onAfterChangeStr))) {
				onEvent.call(linkCtx, ev, eventArgs);
			}
			linkCtx._noUpd = 0; // For data-link="^{...}" remove _noUpd flag so updates on subsequent calls

			if (tag) {
				tag._er = hasError;
				callAfterLink(tag, ev, eventArgs);
			}
		}

		observeAndBind(linkCtx, source, target);

		// Remove dynamically added linkCtx from view
		view.linkCtx = oldLinkCtx;
	}
}

function getTargetVal(sourceValue, linkCtx, tag, attr) {
	var currentValue, setter, css, $target,
		target = tag && tag.parentElem || linkCtx.elem;

	if (sourceValue !== undefined) {
		$target = $(target);
		attr = tag && tag.attr || attr;
		if ($isFunction(sourceValue)) {
			error(linkCtx.expr + ": missing parens");
		}

		if (css = /^css-/.test(attr) && attr.slice(4)) {
			currentValue = $.style(target, css);
			if (+sourceValue === sourceValue) {
				// Optimization for perf on integer values - e.g. css-width{:width+'px'}
				currentValue = parseInt(currentValue);
			}
		} else if (attr !== "link") { // attr === "link" is for tag controls which do data binding but have no rendered output or target
			if (attr === "value") {
				if (target.type === CHECKBOX) {
					currentValue = $target.prop(attr = CHECKED);
				}
			} else if (attr === RADIO) {
				if (target.value === ("" + sourceValue)) {
					currentValue = $target.prop(CHECKED);
				} else {
					return attr;
				}
			}

			if (currentValue === undefined) {
				setter = fnSetters[attr];
				currentValue = setter ? $target[setter]() : $target.attr(attr);
			}
		}
		linkCtx._val = currentValue;
	}
	return attr;
}

function setDefer(elem, value) {
	elem._df = value; // Use both an expando and an attribute to track defered tokens. Attribute is needed for querySelectorAll for getViewInfos (childTags)
	elem[(value ? "set" : "remove") + "Attribute"](deferAttr, "");
}

function updateContent(sourceValue, linkCtx, attr, tag) {
	// When called for a tag, either in tag.refresh() or propertyChangeHandler(), returns a promise (and supports async)
	// When called (in propertyChangeHandler) for target HTML returns true
	// When called (in propertyChangeHandler) for other targets returns boolean for "changed"
	var setter, prevNode, nextNode, promise, nodesToRemove, useProp, tokens, id, openIndex, closeIndex, testElem, nodeName, cStyle, jsvSel,
		renders = attr !== NONE && sourceValue !== undefined && !linkCtx._noUpd, // For data-link="^{...}", don't update the first time (no initial render) - e.g. to leave server rendered values.
		source = linkCtx.data,
		target = tag && tag.parentElem || linkCtx.elem,
		targetParent = target.parentNode,
		$target = $(target),
		view = linkCtx.view,
		targetVal = linkCtx._val,
		oldLinkCtx = view.linkCtx,
		// If not a tag we can use the ._val obtained from getTargetVal()
		// and only update when the new value (sourceValue) has changed from the previous one
		change = tag;

	if (tag) {
		// Initialize the tag with element references
		tag._.unlinked = true; // Set to unlinked, so initialization is triggered after re-rendering, e.g. for setting linkedElem, and calling onBind
		tag.parentElem = tag.parentElem || (linkCtx.expr || tag._elCnt) ? target : targetParent;
		prevNode = tag._prv;
		nextNode = tag._nxt;
	}
	if (!renders) {
		return;
	}

	if (attr === "visible") {
		attr = "css-display";
	}
	if (/^css-/.test(attr)) {
		if (linkCtx.attr === "visible") {
			// Get the current display style
			cStyle = (target.currentStyle || getComputedStyle.call(global, target, "")).display;

			if (sourceValue) {
				// We are showing the element.
				// Get the cached 'visible' display value from the -jsvd expando
				sourceValue = target._jsvd
					// Or, if not yet cached, get the current display value
					|| cStyle;
				if (sourceValue === NONE && !(sourceValue = displayStyles[nodeName = target.nodeName])) {
					// Currently display value is 'none', and the 'visible' style has not been cached.
					// We create an element to find the correct 'visible' display style for this nodeName
					testElem = document.createElement(nodeName);
					document.body.appendChild(testElem);

					// Get the default style for this HTML tag to use as 'visible' style
					sourceValue
						// and cache it as a hash against nodeName
						= displayStyles[nodeName]
						= (testElem.currentStyle || getComputedStyle.call(global, testElem, "")).display;
					document.body.removeChild(testElem);
				}
			} else {
				// We are hiding the element.
				// Cache the current display value as 'visible' style, on _jsvd expando, for when we show the element again
				target._jsvd = cStyle;
				sourceValue = NONE; // Hide the element
			}
		}
		if (change = change || targetVal !== sourceValue) {
			$.style(target, attr.slice(4), sourceValue);
		}
	} else if (attr !== "link") { // attr === "link" is for tag controls which do data binding but have no rendered output or target
		if (/^data-/.test(attr)) {
			$.data(target, attr.slice(5), sourceValue); // Support for binding to data attributes: data-foo{:expr}: data-foo attribute will be
			// expr.toString(), but $.data(element, "foo") and $(element).data("foo") will actually return value of expr, even if of type object
		}
		if (attr === CHECKED) {
			useProp = true;
			sourceValue = sourceValue && sourceValue !== "false";
			// The string value "false" can occur with data-link="checked{attr:expr}" - as a result of attr, and hence using convertVal()
			// We will set the "checked" property
			// We will compare this with the current value
		} else if (attr === RADIO) {
			// This is a special binding attribute for radio buttons, which corresponds to the default 'to' binding.
			// This allows binding both to value (for each input) and to the default checked radio button (for each input in named group,
			// e.g. binding to parent data).
			// Place value binding first: <input type="radio" data-link="value{:name} {:#get('data').data.currency:} " .../>
			// or (allowing any order for the binding expressions):
			// <input type="radio" value="{{:name}}" data-link="{:#get('data').data.currency:} value^{:name}" .../>
			useProp = true;
			attr = CHECKED;
			sourceValue = target.value === ("" + sourceValue);
			// If the data value corresponds to the value attribute of this radio button input, set the checked property to true
			// Otherwise set the checked property to false
		} else if (attr === "selected" || attr === "disabled" || attr === "multiple" || attr === "readonly") {
			sourceValue = (sourceValue && sourceValue !== "false") ? attr : null;
			// Use attr, not prop, so when the options (for example) are changed dynamically, but include the previously selected value,
			// they will still be selected after the change
		} else if (attr === "value" && target.nodeName === "SELECT") {
			target._jsvSel = $isArray(sourceValue)
				? sourceValue
				: "" + sourceValue; // If not array, coerce to string
		}

		if (setter = fnSetters[attr]) {
			if (attr === HTML) {
				// Set linkCtx on view, dynamically, just during this handler call
				view.linkCtx = linkCtx;
				if (tag && tag._.inline) {
					nodesToRemove = tag.nodes(true);
					if (tag._elCnt) {
						if (prevNode && prevNode !== nextNode) {
							// This prevNode will be removed from the DOM, so transfer the view tokens on prevNode to nextNode of this 'viewToRefresh'
							transferViewTokens(prevNode, nextNode, target, tag._tgId, "^", true);
						} else if (tokens = target._df) { // This occurs when there is no nextNode, and so the target._df may include tokens referencing
							// view and tag bindings contained within the open and close tokens of the updated tag control. They need to be processed (disposed)
							id = tag._tgId + "^";
							openIndex = tokens.indexOf("#" + id) + 1;
							closeIndex = tokens.indexOf("/" + id);

							if (openIndex && closeIndex > 0) {
								openIndex += id.length;
								if (closeIndex > openIndex) {
									setDefer(target, tokens.slice(0, openIndex) + tokens.slice(closeIndex));
									disposeTokens(tokens.slice(openIndex, closeIndex));
								}
							}
						}
						prevNode = prevNode
							? prevNode.previousSibling
							: nextNode
								? nextNode.previousSibling
								: target.lastChild;
					}
					// Remove HTML nodes
					$(nodesToRemove).remove(); // Note if !tag._elCnt removing the nodesToRemove will process and dispose view and tag bindings contained within the updated tag control

					// Insert and link new content
					promise = view.link(view.data, target, prevNode, nextNode, sourceValue, tag && {tag: tag._tgId, lazyLink: tag.tagCtx.props.lazyLink});
				} else {
					// data-linked value targeting innerHTML: data-link="html{:expr}" or contenteditable="true"
					renders = renders && targetVal !== sourceValue;
					if (renders) {
						$target.empty();
					}
					if (renders) {
						promise = view.link(source, target, prevNode, nextNode, sourceValue, tag && {tag: tag._tgId});
					}
				}
				// Remove dynamically added linkCtx and ctx from view
				view.linkCtx = oldLinkCtx;
			} else {
				if (change = change || targetVal !== sourceValue) {
					if (attr === "text" && target.children && !target.children[0]) {
						// This code is faster then $target.text()
						if (target.textContent !== undefined) {
							target.textContent = sourceValue;
						} else {
							target.innerText = sourceValue === null ? "" : sourceValue;
						}
					} else {
						$target[setter](sourceValue);
					}
				}
				if ((jsvSel = targetParent._jsvSel)
					// Setting value of <option> element
					&& (attr === "value" || !$target.attr("value"))) { // Setting value attribute, or setting textContent if attribute is null
					// Set/unselect selection based on value set on parent <select>. Works for multiselect too
					target.selected = $.inArray("" + sourceValue, $isArray(jsvSel) ? jsvSel : [jsvSel]) > -1;
				}
			}
		} else if (change = change || targetVal !== sourceValue) {
			// Setting an attribute to undefined should remove the attribute
			$target[useProp ? "prop" : "attr"](attr, sourceValue === undefined && !useProp ? null : sourceValue);
		}
		linkCtx._val = sourceValue;
	}
	return promise || change;
}

function arrayChangeHandler(ev, eventArgs) {
	var self = this,
		onBeforeChange = self.hlp(onBeforeChangeStr),
		onAfterChange = self.hlp(onAfterChangeStr);
	if (!onBeforeChange || onBeforeChange.call(this, ev, eventArgs) !== false) {
		if (eventArgs) {
			// This is an observable action (not a trigger/handler call from pushValues, or similar, for which eventArgs will be null)
			var action = eventArgs.change,
				index = eventArgs.index,
				items = eventArgs.items;
			self._.srt = eventArgs.refresh; // true if part of a 'sort' on refresh
			switch (action) {
				case "insert":
					self.addViews(index, items);
					break;
				case "remove":
					self.removeViews(index, items.length);
					break;
				case "move":
					self.removeViews(eventArgs.oldIndex, items.length, undefined, true); // remove
					self.addViews(index, items); // re-insert
					break;
				case "refresh":
					self._.srt = undefined;
					self.fixIndex(0);
					// Other cases: (e.g.undefined, for setProperty on observable object) etc. do nothing
			}
		}
		if (onAfterChange) {
			onAfterChange.call(this, ev, eventArgs);
		}
	}
}

//=============================
// Utilities for event handlers
//=============================

function setArrayChangeLink(view) {
	// Add/remove arrayChange handler on view
	var handler, arrayBinding,
		type = view.type, // undefined if view is being removed
		data = view.data,
		bound = view._.bnd; // true for top-level link() or data-link="{for}", or the for tag instance for {^{for}} (or for any custom tag that has an onArrayChange handler)

	if (!view._.useKey && bound) {
		// This is an array view. (view._.useKey not defined => data is array), and is data-bound to collection change events

		if (arrayBinding = view._.bndArr) {
			// First remove the current handler if there is one
			$([arrayBinding[1]]).off(arrayChangeStr, arrayBinding[0]);
			view._.bndArr = undefined;
		}
		if (bound !== !!bound) {
			// bound is not a boolean, so it is the data-linked tag that 'owns' this array binding - e.g. {^{for...}}
			if (type) {
				bound._.arrVws[view._.id] = view;
			} else {
				delete bound._.arrVws[view._.id]; // if view.type is undefined, view is being removed
			}
		} else if (type && data) {
			// If this view is not being removed, but the data array has been replaced, then bind to the new data array
			handler = function(ev) {
				if (!(ev.data && ev.data.off)) {
					// Skip if !!ev.data.off: - a handler that has already been removed (maybe was on handler collection at call time - then removed by another handler)
					// If view.type is undefined, do nothing. (Corresponds to case where there is another handler on the same data whose
					// effect was to remove this view, and which happened to precede this event in the trigger sequence. So although this
					// event has been removed now, it is still called since already on the trigger sequence)
					arrayChangeHandler.apply(view, arguments);
				}
			};
			$([data]).on(arrayChangeStr, handler);
			view._.bndArr = [handler, data];
		}
	}
}

function defaultAttr(elem, to, linkGetVal) {
	// to: true - default attribute for setting data value on HTML element; false: default attribute for getting value from HTML element
	// Merge in the default attribute bindings for this target element
	var nodeName = elem.nodeName.toLowerCase(),
		attr =
			$subSettingsAdvanced._fe[nodeName] // get form element binding settings for input textarea select or optgroup
			|| elem.contentEditable === TRUE && {to: HTML, from: HTML}; // Or if contentEditable set to "true" set attr to "html"
	return attr
		? (to
			? ((nodeName === "input" && elem.type === RADIO) // For radio buttons, bind from value, but bind to 'radio' - special value.
				? RADIO
				: attr.to)
			: attr.from)
		: to
			? linkGetVal ? "text" : HTML // Default innerText for data-link="a.b.c" or data-link="{:a.b.c}" (with or without converters)- otherwise innerHTML
			: ""; // Default is not to bind from
}

//==============================
// Rendering and DOM insertion
//==============================

function renderAndLink(view, index, tmpl, views, data, context, refresh) {
	var html, linkToNode, prevView, nodesToRemove, bindId,
		parentNode = view.parentElem,
		prevNode = view._prv,
		nextNode = view._nxt,
		elCnt = view._elCnt;

	if (prevNode && prevNode.parentNode !== parentNode) {
		error("Missing parentNode");
		// Abandon, since node has already been removed, or wrapper element has been inserted between prevNode and parentNode
	}

	if (refresh) {
		nodesToRemove = view.nodes();
		if (elCnt && prevNode && prevNode !== nextNode) {
			// This prevNode will be removed from the DOM, so transfer the view tokens on prevNode to nextNode of this 'viewToRefresh'
			transferViewTokens(prevNode, nextNode, parentNode, view._.id, "_", true);
		}
		// Remove child views
		view.removeViews(undefined, undefined, true);
		linkToNode = nextNode;

		if (elCnt) {
			prevNode = prevNode
				? prevNode.previousSibling
				: nextNode
					? nextNode.previousSibling
					: parentNode.lastChild;
		}

		// Remove HTML nodes
		$(nodesToRemove).remove();

		for (bindId in view._.bnds) {
			// The view bindings may have already been removed above in: $(nodesToRemove).remove();
			// If not, remove them here:
			removeViewBinding(bindId);
		}
	} else {
		// addViews. Only called if view is of type "array"
		if (index) {
			// index is a number, so indexed view in view array
			prevView = views[index - 1];
			if (!prevView) {
				return false; // If subview for provided index does not exist, do nothing
			}
			prevNode = prevView._nxt;
		}
		if (elCnt) {
			linkToNode = prevNode;
			prevNode = linkToNode
				? linkToNode.previousSibling         // There is a linkToNode, so insert after previousSibling, or at the beginning
				: parentNode.lastChild;              // If no prevView and no prevNode, index is 0 and the container is empty,
				// so prevNode = linkToNode = null. But if prevView._nxt is null then we set prevNode to parentNode.lastChild
				// (which must be before the prevView) so we insert after that node - and only link the inserted nodes
		} else {
			linkToNode = prevNode.nextSibling;
		}
	}
	html = tmpl.render(data, context, view._.useKey && refresh, view, refresh || index, true);
	// Pass in view._.useKey as test for noIteration (which corresponds to when self._.useKey > 0 and self.data is an array)

	// Link the new HTML nodes to the data
	view.link(data, parentNode, prevNode, linkToNode, html, prevView);
//}, 0);
}

//=====================
// addBindingMarkers
//=====================

function addBindingMarkers(value, view, tag) {
	// Insert binding markers into the rendered template output, which will get converted to appropriate
	// data-jsv attributes (element-only content) or script marker nodes (phrasing or flow content), in convertMarkers,
	// within view.link, prior to inserting into the DOM. Linking will then bind based on these markers in the DOM.
	// Added view markers: #m_...VIEW.../m_
	// Added tag markers: #m^...TAG..../m^
	var id, end;
	if (tag) {
		// This is a binding marker for a data-linked tag {^{...}}
		end = "^`";
		addLinkMethods(tag, true); // This is {^{>...}} or {^{tag ...}}, {{cvt:...} or {^{:...}}, and tag was defined in convertVal or renderTag
		id = tag._tgId;
		if (!id) {
			bindingStore[id = bindingKey++] = tag; // Store the tag temporarily, ready for databinding.
			// During linking, in addDataBinding, the tag will be attached to the linkCtx,
			// and then in observeAndBind, bindingStore[bindId] will be replaced by binding info.
			tag._tgId = "" + id;
		}
	} else {
		// This is a binding marker for a view
		// Add the view to the store of current linked views
		end = "_`";
		addLinkMethods(viewStore[id = view._.id] = view);
	}
	// Example: "#23^TheValue/23^"
	return "#" + id + end
		+ (value != undefined ? value : "") // For {^{:name}} this gives the equivalent semantics to compiled
											// (v=data.name)!=null?v:""; used in {{:name}} or data-link="name"
		+ "/" + id + end;
}

//==============================
// Data-linking and data binding
//==============================

//---------------
// observeAndBind
//---------------

function observeAndBind(linkCtx, source, target) { //TODO? linkFnArgs) {;
	var binding, l, linkedElem, exprFnDeps, exprOb,
		tag = linkCtx.tag,
		cvtBk = linkCtx.convertBack,
		depends = [],
		bindId = linkCtx._bndId || "" + bindingKey++,
		handler = linkCtx._hdl;

	linkCtx._bndId = undefined;

	if (tag) {
		// Use the 'depends' paths set on linkCtx.tag - which may have been set on declaration
		// or in events: init, render, onAfterLink etc.
		depends = tag.depends || depends;
		depends = $isFunction(depends) ? tag.depends(tag) : depends;
		linkedElem = tag.linkedElem;
	}
	if (!linkCtx._depends || ("" + linkCtx._depends !== "" + depends)) {
		// Only bind the first time, or if the new depends (toString) has changed from when last bound
		if (linkCtx._depends) {
			// Unobserve previous binding
			$observable._apply(false, [source], linkCtx._depends, handler, true);
		}

		exprFnDeps = linkCtx.fn.deps.slice(); // Make a copy of the dependency paths for the compiled linkCtx expression - to pass to observe(). In getInnerCb(),
		// (and whenever the object is updated, in innerCb), we will set exprOb.ob to the current object returned by that computed expression, for this view.
		l = exprFnDeps.length;
		while (l--) {
			exprOb = exprFnDeps[l];
			if (exprOb._jsv) {
				// This path is an 'exprOb', corresponding to a computed, returning an object. We replace the exprOb by
				// a view-binding-specific exprOb instance. The current object will be stored as exprOb.ob.
				exprFnDeps[l] = $extend({}, exprOb);
			}
		}

		binding = $observable._apply(
			false,
			[source],
			exprFnDeps, // flatten the paths - to gather all the dependencies across args and bound params
			depends,
			handler,
			linkCtx._ctxCb);
		// The binding returned by $observe has a bnd array with the source objects of the individual bindings.

		binding.elem = target; // The target of all the individual bindings
		binding.linkCtx = linkCtx;
		binding._tgId = bindId;

		// Add to the _jsvBnd on the target the view id and binding id - for unbinding when the target element is removed
		target._jsvBnd = target._jsvBnd || "";
		target._jsvBnd += "&" + bindId;
		linkCtx._depends = depends;
		// Store the binding key on the view, for disposal when the view is removed
		linkCtx.view._.bnds[bindId] = bindId;
		// Store the binding.
		bindingStore[bindId] = binding; // Note: If this corresponds to a data-linked tag, we are replacing the
		// temporarily stored tag by the stored binding. The tag will now be at binding.linkCtx.tag

		if (linkedElem) {
			l = linkedElem.length;
			while (l--) {
				linkedElem[l]._jsvLkEl = tag;
				bindTo(binding, tag, linkedElem[l]);
				linkedElem[l]._jsvBnd = "&" + binding._tgId + "+"; // Add a "+" for cloned binding - so removing
				// elems with cloned bindings will not remove the 'parent' binding from the bindingStore.
			}
		} else if (cvtBk !== undefined) {
			bindTo(binding, tag, target, cvtBk);
		}

		if (tag) {
			if (!tag.flow && !tag._.inline) {
				target.setAttribute(jsvAttrStr, (target.getAttribute(jsvAttrStr)||"") + "#" + bindId + "^/" + bindId + "^");
				tag._tgId = "" + bindId;
			}
		}
	}
}

//-------
// $.link
//-------

function tmplLink(to, from, context, noIteration, parentView, prevNode, nextNode) {
	return $link(this, to, from, context, noIteration, parentView, prevNode, nextNode);
}

function $link(tmplOrLinkExpr, to, from, context, noIteration, parentView, prevNode, nextNode) {
	// When linking from a template, prevNode and nextNode parameters are ignored
	if (context === true) {
		noIteration = context; // passing boolean as third param - noIteration
		context = undefined;
	} else if (typeof context !== "object") {
		context = undefined; // context must be a boolean (noIteration) or a plain object
	} else {
		context = $extend({}, context);
	}
	if (tmplOrLinkExpr && to) {
		to = to.jquery ? to : $(to); // to is a jquery object or an element or selector

		if (!activeBody) {
			activeBody = document.body;
			$(activeBody)
				.on(elementChangeStr, elemChangeHandler)
				.on('blur', '[contenteditable]', elemChangeHandler);
		}

		var i, k, html, vwInfos, view, placeholderParent, targetEl, refresh, topLevelCall,
			onRender = addBindingMarkers,
			replaceMode = context && context.target === "replace",
			l = to.length;

		while (l--) {
			targetEl = to[l];

			parentView = parentView || $view(targetEl);

			if (topLevelCall = parentView === topView) {
				topView.data = (topView.ctx = context || {}).root = from;
			}
			if ("" + tmplOrLinkExpr === tmplOrLinkExpr) {
				// tmplOrLinkExpr is a string: treat as data-link expression.
				addDataBinding(tmplOrLinkExpr, targetEl, parentView, undefined, true, from, context);
			} else {
				if (tmplOrLinkExpr.markup !== undefined) {
					// This is a call to template.link()
					if (replaceMode) {
						placeholderParent = targetEl.parentNode;
					}

					html = tmplOrLinkExpr.render(from, context, noIteration, parentView, undefined, onRender);
					// TODO Consider finding a way to bind data (link) within template without html being different for each view, the HTML can
					// be evaluated once outside the while (l--), and pushed into a document fragment, then cloned and inserted at each target.

					if (placeholderParent) {
						// This is target="replace" mode
						prevNode = targetEl.previousSibling;
						nextNode = targetEl.nextSibling;
						$.cleanData([targetEl], true);
						placeholderParent.removeChild(targetEl);

						targetEl = placeholderParent;
					} else {
						prevNode = nextNode = undefined; // When linking from a template, prevNode and nextNode parameters are ignored
						$(targetEl).empty();
					}
				} else if (tmplOrLinkExpr === true && parentView === topView) {
					// $.link(true, selector, data, ctx) - where selector points to elem in top-level content. (If not top-level content, no-op)
					refresh = {lnk: 1};
				} else {
					break;
				}

// TODO Consider deferred linking API feature on per-template basis - {@{ instead of {^{ which allows the user to see the rendered content
// before that content is linked, with better perceived perf. Have view.link return a deferred, and pass that to onAfterLink...
// or something along those lines.
// setTimeout(function() {

				if (targetEl._df && !nextNode) {
					// We are inserting new content and the target element has some deferred binding annotations,and there is no nextNode.
					// Those views may be stale views (that will be recreated in this new linking action) so we will first remove them
					// (if not already removed).
					vwInfos = viewInfos(targetEl._df, true, rOpenViewMarkers);

					for (i = 0, k = vwInfos.length; i < k; i++) {
						view = vwInfos[i];
						if ((view = viewStore[view.id]) && view.data !== undefined) {
							// If this is the _prv (prevNode) for a view, remove the view
							// - unless view.data is undefined, in which case it is already being removed
							view.parent.removeViews(view._.key, undefined, true);
						}
					}
					setDefer(targetEl); // remove defer tokens
				}

				// Link the content of the element, since this is a call to template.link(), or to $(el).link(true, ...),
				parentView.link(from, targetEl, prevNode, nextNode, html, refresh, context);
//}, 0);
			}
			if (topLevelCall) {
				topView.data = topView.ctx = undefined;
			}
		}
	}
	return to; // Allow chaining, to attach event handlers, etc.
}

//----------
// view.link
//----------

function viewLink(outerData, parentNode, prevNode, nextNode, html, refresh, context, validateOnly) {
	// Optionally insert HTML into DOM using documentFragments (and wrapping HTML appropriately).
	// Data-link existing contents of parentNode, or the inserted HTML, if provided

	// Depending on the content model for the HTML elements, the standard data-linking markers inserted in the HTML by addBindingMarkers during
	// template rendering will be converted either to script marker nodes or, for element-only content sections, to data-jsv element annotations.

	// Data-linking will then add _prv and _nxt to views, where:
	//     _prv: References the previous node (script element of type "jsv123"), or (for elCnt=true), the first element node in the view (or if none, set _prv = _nxt)
	//     _nxt: References the last node (script element of type "jsv/123"), or (for elCnt=true), the next element node after the view.

	//==== nested functions ====
	function convertMarkers(all, preceding, selfClose, closeTag, spaceBefore, id, boundId, spaceAfter, tag1, tag2, closeTag2, spaceAfterClose, selfClose2, endOpenTag) {
		// rConvertMarkers = /(^|(\/>)|<\/(\w+)>|)(\s*)([#\/]\d+(?:_|(\^)))`(\s*)(<\w+(?=[\s\/>]))?|\s*(?:(<\w+(?=[\s\/>]))|<\/(\w+)>(\s*)|(\/>)\s*|(>))/g,
		//                 prec, slfCl, clsTag,  spBefore, id,      bndId  spAfter,tag1,                   tag2,               clTag2,sac  slfCl2, endOpenTag
		// Convert the markers that were included by addBindingMarkers in template output, to appropriate DOM annotations:
		// data-jsv attributes (for element-only content) or script marker nodes (within phrasing or flow content).

// TODO consider detecting 'quoted' contexts (attribute strings) so that attribute encoding does not need to encode >
// Currently rAttrEncode = /[><"'&]/g includes '>' encoding in order to avoid erroneous parsing of <span title="&lt;a/>"></span>">
		var errorMsg, bndId,
			endOfElCnt = "";
		if (endOpenTag) {
			inTag = 0;
			return all;
		}
		tag = tag1 || tag2 || "";
		closeTag = closeTag || closeTag2;
		selfClose = selfClose || selfClose2;
		if (isVoid && !selfClose && ( !all || closeTag || tag || id && !inTag)) { // !all = end of string
			isVoid = undefined;
			parentTag = tagStack.shift(); // preceding tag was a void element, with no closing slash, such as <br>.
		}
		closeTag = closeTag || selfClose;
		if (closeTag) {
			inTag = 0;
			isVoid = undefined;
			// TODO: smart insertion of <tbody> - to be completed for robust insertion of deferred bindings etc.
			//if (closeTag === "table" && parentTag === "tbody") {
			//	preceding = "</tbody>" + preceding;
			//	parentTag = "table";
			//	tagStack.shift();
			//}
			if (validate) {
				if (selfClose || selfClose2) {
					if (!voidElems[parentTag] && !/;svg;|;math;/.test(";" + tagStack.join(";") + ";")) {
						// Only self-closing elements must be legitimate void elements, such as <br/>, per HTML schema,
						// or under svg or math foreign namespace elements.
						errorMsg = "'<" + parentTag + ".../";
					}
				} else if (voidElems[closeTag]) {
					errorMsg = "'</" + closeTag; // closing tag such as </input>
				} else if (!tagStack.length || closeTag !== parentTag) {
					errorMsg = "Mismatch: '</" + closeTag;
				}
				if (errorMsg) {
					syntaxError(errorMsg + ">' in:\n" + html);
				}
			}
			prevElCnt = elCnt;
			parentTag = tagStack.shift();
			elCnt = elContent[parentTag];
			closeTag2 = closeTag2 ? ("</" + closeTag2 + ">") : "";
			if (prevElCnt) {
				// If there are ids (markers since the last tag), move them to the defer string
				defer += ids;
				ids = "";
				if (!elCnt) {
					endOfElCnt = closeTag2 + openScript + "@" + defer + closeScript + (spaceAfterClose || "");
					defer = deferStack.shift();
				} else {
					defer += "-"; // Will be used for stepping back through deferred tokens
				}
			}
		}
		if (elCnt) {
			// elContent maps tagNames which have only element content, so may not support script nodes.
			// We are in element-only content, can remove white space, and use data-jsv attributes on elements as markers
			// Example: <tr data-jsv="/2_#6_"> - close marker for view 2 and open marker for view 6

			if (id) {
				// append marker for this id, to ids string
				ids += id;
			} else {
				preceding = (closeTag2 || selfClose2 || "");
			}
			if (tag) {
				// TODO: smart insertion of <tbody> - to be completed for robust insertion of deferred bindings etc.
				//if (tag === "<tr" && parentTag === "table") {
				//	tagStack.unshift(parentTag);
				//	parentTag = "tbody";
				//	preceding += "<" + parentTag + ">";
				//	if (defer) {
				//		defer += "+"; // Will be used for stepping back through deferred tokens
				//	}
				//	// TODO: move this to design-time validation check
				//	//	error('"' + parentTag + '" has incorrect parent tag');
				//}
				preceding += tag;
				if (ids) {
					preceding += ' ' + jsvAttrStr + '="' + ids + '"';
					ids = "";
				}
			}
		} else {
			// We are in phrasing or flow content, so use script marker nodes
			// Example: <script type="jsv3/"></script> - data-linked tag, close marker
			// We validate with inTag so no script markers are inserted in attribute context e.g. for:
			// "<table {{if ...}}...{{/if}}... >" or "<table {{if ...}}...> ...{{/if}}..."
			preceding = id
				? (preceding + endOfElCnt + spaceBefore + (inTag ? "" : openScript + id + closeScript)+ spaceAfter + tag)
				: endOfElCnt || all;
		}

		if (validate && boundId) {
			if (inTag) {
				// JsViews data-linking tags are not allowed within element markup.
				// See jsviews/issues/303
				syntaxError('{^{ within elem markup (' + inTag + ' ). Use data-link="..."');
			}
			if (id.charAt(0) === "#") {
				tagStack.unshift(id.slice(1));
			} else if (id.slice(1) !== (bndId = tagStack.shift())) {
				// See jsviews/issues/213
				syntaxError('Closing tag for {^{...}} under different elem: <' + bndId + '>');
			}
		}
		if (tag) {
			inTag = tag;
			// If there are ids (markers since the last tag), move them to the defer string
			tagStack.unshift(parentTag);
			parentTag = tag.slice(1);
			if (validate && tagStack[0] && tagStack[0] === badParent[parentTag]) {
				// Missing <tbody>
				// TODO: replace this by smart insertion of <tbody> tags
				error('Parent of <tr> must be <tbody>');
			}
			isVoid = voidElems[parentTag];
			if ((elCnt = elContent[parentTag]) && !prevElCnt) {
				deferStack.unshift(defer);
				defer = "";
			}
			prevElCnt = elCnt;
//TODO Consider providing validation which throws if you place <span> as child of <tr>, etc. - since if not caught,
//this can cause errors subsequently which are difficult to debug.
//				if (elContent[tagStack[0]]>2 && !elCnt) {
//					error(parentTag + " in " + tagStack[0]);
//				}
			if (defer && elCnt) {
				defer += "+"; // Will be used for stepping back through deferred tokens
			}
		}
		return preceding;
	}

	function processViewInfos(vwInfos, targetParent) {
		// If targetParent, we are processing viewInfos (which may include navigation through '+-' paths) and hooking up to the right parentElem etc.
		// (and elem may also be defined - the next node)
		// If no targetParent, then we are processing viewInfos on newly inserted content
		var deferPath, deferChar, bindChar, parentElem, id, onAftCr, deep,
			addedBindEls = [];

		// In elCnt context (element-only content model), prevNode is the first node after the open, nextNode is the first node after the close.
		// If both are null/undefined, then open and close are at end of parent content, so the view is empty, and its placeholder is the
		// 'lastChild' of the parentNode. If there is a prevNode, then it is either the first node in the view, or the view is empty and
		// its placeholder is the 'previousSibling' of the prevNode, which is also the nextNode.
		if (vwInfos) {
			if (vwInfos._tkns.charAt(0) === "@") {
				// We are processing newly inserted content. This is a special script element that was created in convertMarkers() to process deferred bindings,
				// and inserted following the target parent element - because no element tags (outside elCnt) were encountered to carry those binding tokens.
				// We will step back from the preceding sibling of this element, looking at targetParent elements until we find the one that the current binding
				// token belongs to. Set elem to null (the special script element), and remove it from the DOM.
				targetParent = elem.previousSibling;
				elem.parentNode.removeChild(elem);
				elem = undefined;
			}
			len = vwInfos.length;
			while (len--) {
				vwInfo = vwInfos[len];
//if (prevIds.indexOf(vwInfo.token) < 0) { // This token is a newly created view or tag binding
				bindChar = vwInfo.ch;
				if (deferPath = vwInfo.path) {
					// We have a 'deferred path'
					j = deferPath.length - 1;
					while (deferChar = deferPath.charAt(j--)) {
						// Use the "+" and"-" characters to navigate the path back to the original parent node where the deferred bindings ocurred
						if (deferChar === "+") {
							if (deferPath.charAt(j) === "-") {
								j--;
								targetParent = targetParent.previousSibling;
							} else {
								targetParent = targetParent.parentNode;
							}
						} else {
							targetParent = targetParent.lastChild;
						}
						// Note: Can use previousSibling and lastChild, not previousElementSibling and lastElementChild,
						// since we have removed white space within elCnt. Hence support IE < 9
					}
				}
				if (bindChar === "^") {
					if (tag = bindingStore[id = vwInfo.id]) {
						// The binding may have been deleted, for example in a different handler to an array collectionChange event
						// This is a tag binding
						deep = targetParent && (!elem || elem.parentNode !== targetParent); // We are stepping back looking for the right targetParent,
						// or we are linking existing content and this element is in elCnt, not an immediate child of the targetParent.
						if (!elem || deep) {
							tag.parentElem = targetParent;
						}
						if (vwInfo.elCnt && deep) {
							// With element only content, if there is no following element, or if the binding is deeper than the following element
							// then we need to set the open or close token as a deferred binding annotation on the parent
							setDefer(targetParent, (vwInfo.open ? "#" : "/") + id + bindChar + (targetParent._df || ""));
						}
						// This is an open or close marker for a data-linked tag {^{...}}. Add it to bindEls.
						addedBindEls.push([deep ? null : elem, vwInfo]);
					}
				} else if (view = viewStore[id = vwInfo.id]) {
					// The view may have been deleted, for example in a different handler to an array collectionChange event
					if (!view.parentElem) {
						// If view is not already extended for JsViews, extend and initialize the view object created in JsRender, as a JsViews view
						view.parentElem = targetParent || elem && elem.parentNode || parentNode;
						view._.onRender = addBindingMarkers;
						view._.onArrayChange = arrayChangeHandler;
						setArrayChangeLink(view);
					}
					parentElem = view.parentElem;
					if (vwInfo.open) {
						// This is an 'open view' node (preceding script marker node,
						// or if elCnt, the first element in the view, with a data-jsv annotation) for binding
						view._elCnt = vwInfo.elCnt;
						if (targetParent && !elem) {
							setDefer(targetParent, "#" + id + bindChar + (targetParent._df || ""));
						} else {
							// No targetParent, so there is a ._nxt elem (and this is processing tokens on the elem)
							if (!view._prv) {
								setDefer(parentElem, removeSubStr(parentElem._df, "#" + id + bindChar));
							}
							view._prv = elem;
						}
					} else {
						// This is a 'close view' marker node for binding
						if (targetParent && (!elem || elem.parentNode !== targetParent)) {
							// There is no ._nxt so add token to _df. It is deferred.
							setDefer(targetParent, "/" + id + bindChar + (targetParent._df || ""));
							view._nxt = undefined;
						} else if (elem) {
							// This view did not have a ._nxt, but has one now, so token may be in _df, and must be removed. (No longer deferred)
							if (!view._nxt) {
								setDefer(parentElem, removeSubStr(parentElem._df, "/" + id + bindChar));
							}
							view._nxt = elem;
						}
						if (onAftCr = view.ctx && view.ctx[onAfterCreateStr] || onAfterCreate) {
							onAftCr.call(view.ctx.tag, view);
						}
					}
//}
				}
			}
			len = addedBindEls.length;
			while (len--) {
				// These were added in reverse order to addedBindEls. We push them in BindEls in the correct order.
				bindEls.push(addedBindEls[len]);
			}
		}
		return !vwInfos || vwInfos.elCnt;
	}

	function getViewInfos(vwInfos) {
		// Used by view.childTags() and tag.childTags()
		// Similar to processViewInfos in how it steps through bindings to find tags. Only finds data-linked tags.
		var level, parentTag, named;

		if (vwInfos) {
			len = vwInfos.length;
			for (j = 0; j < len; j++) {
				vwInfo = vwInfos[j];
				// This is an open marker for a data-linked tag {^{...}}, within the content of the tag whose id is get.id. Add it to bindEls.
				// Note - if bindingStore[vwInfo.id]._is === "tag" then getViewInfos is being called too soon - during first linking pass
				parentTag = tag = bindingStore[vwInfo.id].linkCtx.tag;
				named = tag.tagName === tagName;
				if (!tag.flow || named) {
					if (!deep) {
						level = 1;
						while (parentTag = parentTag.parent) {
							level++;
						}
						tagDepth = tagDepth || level; // The level of the first tag encountered.
					}
					if ((deep || level === tagDepth) && (!tagName || named)) {
						// Filter on top-level or tagName as appropriate
						tags.push(tag);
					}
				}
			}
		}
	}

	function dataLink() {
		//================ Data-link and fixup of data-jsv annotations ================
		var j, index,
			tokens = "",
			wrap = {},
			selector = linkViewsSel + (get ? ",[" + deferAttr + "]" : "");
			// If a childTags() call, get = ",[" + deferAttr + "]" - since we need to include elements that have a ._df expando for deferred tokens

		elems = qsa ? parentNode.querySelectorAll(selector) : $(selector, parentNode).get();
		l = elems.length;

		// The prevNode will be in the returned query, since we called markPrevOrNextNode() on it.
		// But it may have contained nodes that satisfy the selector also.
		if (prevNode && prevNode.innerHTML) {
			// Find the last contained node of prevNode, to use as the prevNode - so we only link subsequent elems in the query
			prevNodes = qsa ? prevNode.querySelectorAll(selector) : $(selector, prevNode).get();
			prevNode = prevNodes.length ? prevNodes[prevNodes.length - 1] : prevNode;
		}

		tagDepth = 0;
		for (i = 0; i < l; i++) {
			elem = elems[i];
			if (prevNode && !found) {
				// If prevNode is set, not false, skip linking. If this element is the prevNode, set to false so subsequent elements will link.
				found = (elem === prevNode);
			} else if (nextNode && elem === nextNode) {
				// If nextNode is set then break when we get to nextNode
				if (get) {
					tokens += markerNodeInfo(elem);
				}
				break;
			} else if (elem.parentNode) {
				// elem has not been removed from DOM
				if (get) {
					tokens += markerNodeInfo(elem);
					if (elem._df) {
						j = i + 1;
						while (j < l && elem.contains(elems[j])) {
							j++;
						}
						// Add defered tokens after any tokens on descendant elements of this one
						wrap[j-1] = elem._df;
					}
					if (wrap[i]) {
						tokens += wrap[i] || "";
					}
				} else {
					if (isLink && (vwInfo = viewInfos(elem, undefined, rViewMarkers)) && (vwInfo = vwInfo[0])) {
						// If this is a link(trueOrString ...) call we will avoid re-binding to elems that are within template-rendered views
						skip = skip ? (vwInfo.id !== skip && skip) : vwInfo.open && vwInfo.id;
					}
					if (!skip && processInfos(viewInfos(elem))
						// If a link() call, processViewInfos() adds bindings to bindEls, and returns true for non-script nodes, for adding data-link bindings
						// If a childTags() call, getViewInfos returns array of tag bindings.
							&& elem.getAttribute($viewsLinkAttr)) {
						bindEls.push([elem]); // A data-linked element so add to bindEls too
					}
				}
			}
		}

		if (get) {
			tokens += parentNode._df || "";
			if (index = tokens.indexOf("#" + get.id) + 1) {
				// We are looking for view.childTags() or tag.childTags() - so start after the open token of the parent view or tag.
				tokens = tokens.slice(index + get.id.length);
			}
			index = tokens.indexOf("/" + get.id);
			if (index + 1) {
				// We are looking for view.childTags() or tag.childTags() - so don't look beyond the close token of the parent view or tag.
				tokens = tokens.slice(0, index);
			}
			// Call getViewInfos to add the found childTags to the tags array
			getViewInfos(viewInfos(tokens, undefined, rOpenTagMarkers));
		}

		if (html === undefined && parentNode.getAttribute($viewsLinkAttr)) {
			bindEls.push([parentNode]); // Support data-linking top-level element directly (not within a data-linked container)
		}

		// Remove temporary marker script nodes they were added by markPrevOrNextNode
		unmarkPrevOrNextNode(prevNode, elCnt);
		unmarkPrevOrNextNode(nextNode, elCnt);

		if (get) {
			if (lazyLink) {
				lazyLink.resolve();
			}
			return; // We have added childTags to the tags array, so we are done
		}

		if (elCnt && defer + ids) {
			// There are some views with elCnt, for which the open or close did not precede any HTML tag - so they have not been processed yet
			elem = nextNode;
			if (defer) {
				if (nextNode) {
					processViewInfos(viewInfos(defer + "+", true), nextNode);
				} else {
					processViewInfos(viewInfos(defer, true), parentNode);
				}
			}
			processViewInfos(viewInfos(ids, true), parentNode);
			// If there were any tokens on nextNode which have now been associated with inserted HTML tags, remove them from nextNode
			if (nextNode) {
				tokens = nextNode.getAttribute(jsvAttrStr);
				if (l = tokens.indexOf(prevIds) + 1) {
					tokens = tokens.slice(l + prevIds.length - 1);
				}
				nextNode.setAttribute(jsvAttrStr, ids + tokens);
			}
		}

		//================ Bind the data-linked elements and tags ================
		l = bindEls.length;
		for (i = 0; i < l; i++) {
			elem = bindEls[i];
			linkInfo = elem[1];
			elem = elem[0];
			if (linkInfo) {
				if (tag = bindingStore[linkInfo.id]) {
					if (linkCtx = tag.linkCtx) {
						// The tag may have been stored temporarily on the bindingStore - or may have already been replaced by the actual binding
						tag = linkCtx.tag;
						tag.linkCtx = linkCtx;
					}
					if (linkInfo.open) {
						// This is an 'open linked tag' binding annotation for a data-linked tag {^{...}}
						if (elem) {
							tag.parentElem = elem.parentNode;
							tag._prv = elem;
						}
						tag._elCnt = linkInfo.elCnt;
						// We data-link depth-first ("on the way in"), which is better for perf - and allows setting parent tags etc.
						view = tag.tagCtx.view;
						addDataBinding(undefined, tag._prv, view, linkInfo.id);
					} else {
						tag._nxt = elem;
						if (tag._.unlinked) {
							// This is a 'close linked tag' binding annotation
							// Add data binding
							tagCtx = tag.tagCtx;
							view = tagCtx.view;
							callAfterLink(tag);
						}
					}
				}
			} else {
				// Add data binding for a data-linked element (with data-link attribute)
				addDataBinding(elem.getAttribute($viewsLinkAttr), elem, $view(elem), undefined, isLink, outerData, context);
			}
		}
		if (lazyLink) {
			lazyLink.resolve();
		}
	}
	//==== /end of nested functions ====

	var inTag, linkCtx, tag, i, l, j, len, elems, elem, view, vwInfo, linkInfo, prevNodes, token, prevView, nextView,
		node, tags, deep, tagName, tagCtx, validate, tagDepth, depth, fragment, copiedNode, firstTag, parentTag,
		isVoid, wrapper, div, tokens, elCnt, prevElCnt, htmlTag, ids, prevIds, found, skip, lazyLink, isLink, get,
		self = this,
		thisId = self._.id + "_",
		defer = "",
		// The marker ids for which no tag was encountered (empty views or final closing markers) which we carry over to container tag
		bindEls = [],
		tagStack = [],
		deferStack = [],
		onAfterCreate = self.hlp(onAfterCreateStr),
		processInfos = processViewInfos;

	if (refresh) {
		lazyLink = refresh.lazyLink && $.Deferred();
		if (refresh.tmpl) {
			// refresh is the prevView, passed in from addViews()
			prevView = "/" + refresh._.id + "_";
		} else {
			isLink = refresh.lnk; // Top-level linking
			if (refresh.tag) {
				thisId = refresh.tag + "^";
				refresh = true;
			}
			if (get = refresh.get) {
				processInfos = getViewInfos;
				tags = get.tags;
				deep = get.deep;
				tagName = get.name;
			}
		}
		refresh = refresh === true;
	}

	parentNode = parentNode
		? ("" + parentNode === parentNode
			? $(parentNode)[0]  // It is a string, so treat as selector
			: parentNode.jquery
				? parentNode[0] // A jQuery object - take first element.
				: parentNode)
		: (self.parentElem      // view.link()
			|| document.body);  // link(null, data) to link the whole document

	validate = !$subSettingsAdvanced.noValidate && parentNode.contentEditable !== TRUE;
	parentTag = parentNode.tagName.toLowerCase();
	elCnt = !!elContent[parentTag];

	prevNode = prevNode && markPrevOrNextNode(prevNode, elCnt);
	nextNode = nextNode && markPrevOrNextNode(nextNode, elCnt) || null;

	if (html != undefined) {
		//================ Insert html into DOM using documentFragments (and wrapping HTML appropriately). ================
		// Also convert markers to DOM annotations, based on content model.
		// Corresponds to nextNode ? $(nextNode).before(html) : $(parentNode).html(html);
		// but allows insertion to wrap correctly even with inserted script nodes. jQuery version will fail e.g. under tbody or select.
		// This version should also be slightly faster
		div = document.createElement("div");
		wrapper = div;
		prevIds = ids = "";
		htmlTag = parentNode.namespaceURI === "http://www.w3.org/2000/svg" ? "svg_ns" : (firstTag = rFirstElem.exec(html)) && firstTag[1] || "";
		if (elCnt) {
			// Now look for following view, and find its tokens, or if not found, get the parentNode._df tokens
			node = nextNode;
			while (node && !(nextView = viewInfos(node))) {
				node = node.nextSibling;
			}
			if (tokens = nextView ? nextView._tkns : parentNode._df) {
				token = prevView || "";
				if (refresh || !prevView) {
					token += "#" + thisId;
				}
				j = tokens.indexOf(token);
				if (j + 1) {
					j += token.length;
					// Transfer the initial tokens to inserted nodes, by setting them as the ids variable, picked up in convertMarkers
					prevIds = ids = tokens.slice(0, j);
					tokens = tokens.slice(j);
					if (nextView) {
						node.setAttribute(jsvAttrStr, tokens);
					} else {
						setDefer(parentNode, tokens);
					}
				}
			}
		}

		//================ Convert the markers to DOM annotations, based on content model. ================
//			oldElCnt = elCnt;
		isVoid = undefined;
		html = ("" + html).replace(rConvertMarkers, convertMarkers);
//			if (!!oldElCnt !== !!elCnt) {
//				error("Parse: " + html); // Parse error. Content not well-formed?
//			}
		if (validate && tagStack.length) {
			syntaxError("Mismatched '<" + parentTag + "...>' in:\n" + html); // Unmatched tag
		}
		if (validateOnly) {
			return;
		}
		// Append wrapper element to doc fragment
		safeFragment.appendChild(div);

		// Go to html and back, then peel off extra wrappers
		// Corresponds to jQuery $(nextNode).before(html) or $(parentNode).html(html);
		// but supports svg elements, and other features missing from jQuery version (and this version should also be slightly faster)
		htmlTag = wrapMap[htmlTag] || wrapMap.div;
		depth = htmlTag[0];
		wrapper.innerHTML = htmlTag[1] + html + htmlTag[2];
		while (depth--) {
			wrapper = wrapper.lastChild;
		}
		safeFragment.removeChild(div);
		fragment = document.createDocumentFragment();
		while (copiedNode = wrapper.firstChild) {
			fragment.appendChild(copiedNode);
		}
		// Insert into the DOM
		parentNode.insertBefore(fragment, nextNode);
	}

	if (lazyLink) {
		setTimeout(dataLink, 0);
	} else {
		dataLink();
	}

	return lazyLink && lazyLink.promise();
}

function addDataBinding(linkMarkup, node, currentView, boundTagId, isLink, data, context) {
	// Add data binding for data-linked elements or {^{...}} data-linked tags
	var tmpl, tokens, attr, convertBack, tagExpr, linkFn, linkCtx, tag, rTagIndex, hasElse, lastIndex,
		linkExpressions = [];

	if (boundTagId) {
		// boundTagId is a string for {^{...}} data-linked tag. So only one linkTag in linkMarkup
		// data and context parameters are undefined
		tag = bindingStore[boundTagId];
		tag = tag.linkCtx ? tag.linkCtx.tag : tag;

		linkCtx = tag.linkCtx || {
			type: "inline",
			data: currentView.data,                   // source
			elem: tag._elCnt ? tag.parentElem : node, // target
			view: currentView,
			ctx: currentView.ctx,
			attr: HTML, // Script marker nodes are associated with {^{ and always target HTML.
			fn: tag._.bnd,
			tag: tag,
			// Pass the boundTagId in the linkCtx, so that it can be picked up in observeAndBind
			_bndId: boundTagId
		};
		bindDataLinkTarget(linkCtx, linkCtx.fn);
	} else if (linkMarkup && node) {
		// If isLink then this is a top-level linking: .link(expression, target, data, ....) or
		// .link(true, target, data, ....) scenario - and data and context are passed in separately from the view
		data = isLink ? data : currentView.data;

		// Compiled linkFn expressions could be stored in the tmpl.links array of the template
		// TODO - consider also caching globally so that if {{:foo}} or data-link="foo" occurs in different places,
		// the compiled template for this is cached and only compiled once...
		//links = currentView.links || currentView.tmpl.links;

		tmpl = currentView.tmpl;

//			if (!(linkTags = links[linkMarkup])) {
		// This is the first time this view template has been linked, so we compile the data-link expressions, and store them on the template.

		linkMarkup = normalizeLinkTag(linkMarkup, defaultAttr(node));
		lastIndex = rTagDatalink.lastIndex = 0;
		while (tokens = rTagDatalink.exec(linkMarkup)) { // TODO require } to be followed by whitespace or $, and remove the \}(!\}) option.
			linkExpressions.push(tokens);
			lastIndex = rTagDatalink.lastIndex;
		}
		if (lastIndex < linkMarkup.length) {
			syntaxError(linkMarkup);
		}
		while (tokens = linkExpressions.shift()) {
			// Iterate over the data-link expressions, for different target attrs,
			// e.g. <input data-link="{:firstName:} title{>~description(firstName, lastName)}"
			// tokens: [all, attr, bindOnly, tagExpr, tagName, converter, colon, html, comment, code, params]
			rTagIndex = rTagDatalink.lastIndex;
			attr = tokens[1];
			tagExpr = tokens[3];
			while (linkExpressions[0] && linkExpressions[0][4] === "else") { // If this is {someTag...} and is followed by an {else...} add to tagExpr
				tagExpr += delimCloseChar1 + delimOpenChar0 + linkExpressions.shift()[3];
				hasElse = true;
			}
			if (hasElse) { // If an {else} has been added, need also to add closing {{/someTag}}
				tagExpr += delimCloseChar1 + delimOpenChar0 + delimOpenChar1 + "/" + tokens[4] + delimCloseChar0;
			}
			linkCtx = {
				type: isLink ? "top" : "link",
				data: data, // source
				elem: node, // target
				view: currentView,
				ctx: context,
				attr: attr,
				isLk: isLink, // top-level linking?
				_toLk : 1, // Flag to data-link on initial data-link call rendering call
				_noUpd : tokens[2] // Flag for data-link="^{...}" so on initial data-link call will bind, but not render)
			};

			convertBack = undefined;
			if (tokens[6]) {
				convertBack = tokens[10] || undefined;
				linkCtx.convert = tokens[5] || "";
				if (!attr && convertBack !== undefined && defaultAttr(node)) {
					// Default target, so allow 2 way binding
					linkCtx.convertBack = convertBack = convertBack.slice(1);
				}
			}
			// Compile the linkFn expression which evaluates and binds a data-link expression
			// TODO - optimize for the case of simple data path with no conversion, helpers, etc.:
			//     i.e. data-link="a.b.c". Avoid creating new instances of Function every time. Can use a default function for all of these...

			linkCtx.expr = attr + tagExpr;
			linkFn = tmpl.links[tagExpr];
			if (!linkFn) {
				tmpl.links[tagExpr] = linkFn = $sub.tmplFn(tagExpr, tmpl, true, convertBack, hasElse);
			}
			linkCtx.fn = linkFn;
			bindDataLinkTarget(linkCtx, linkFn);
			// We store rTagIndex in local scope, since this addDataBinding method can sometimes be called recursively,
			// and each is using the same rTagDatalink instance.
			rTagDatalink.lastIndex = rTagIndex;
		}
//		}
	}
}

function bindDataLinkTarget(linkCtx, linkFn) {
	// Add data link bindings for a link expression in data-link attribute markup
	function handler(ev, eventArgs) {
		propertyChangeHandler.call(linkCtx, ev, eventArgs, linkFn);
		// If the link expression uses a custom tag, the propertyChangeHandler call will call renderTag, which will set tagCtx on linkCtx
	}
	handler.noArray = true;
	if (linkCtx.isLk) {
		// Top-level linking: .link(expressionOrTrue, data, context) - so we need to create a view for the linking, with the data and ctx
		// which may be different than the current context of the target. Note that this view is not a standard data-linked view, so it will
		// be disposed only when its parent view is disposed.
		addLinkMethods(linkCtx.view = new $sub.View(
			$sub.extendCtx(linkCtx.ctx, linkCtx.view.ctx),
			"link", linkCtx.view, linkCtx.data, linkCtx.expr, undefined, addBindingMarkers));
	}
	linkCtx._ctxCb = getContextCb(linkCtx.view); // _ctxCb is for filtering/appending to dependency paths: function(path, object) { return [(object|path)*]}
	linkCtx._hdl = handler;
	// handler._ctx = linkCtx; Could pass linkCtx for use in a depends = function() {} call, so depends is different for different linkCtx's
	handler(true);
}

//=====================
// Data-linking helpers
//=====================

function removeSubStr(str, substr) {
	var k;
	return str
		? (k = str.indexOf(substr),
			(k + 1
				? str.slice(0, k) + str.slice(k + substr.length)
				: str))
		: "";
}

function markerNodeInfo(node) {
	return node &&
		("" + node === node
			? node
			: node.tagName === SCRIPT
				? node.type.slice(3)
				: node.nodeType === 1 && node.getAttribute(jsvAttrStr) || "");
}

function viewInfos(node, isVal, rBinding) {
	// Test whether node is a script marker node, and if so, return metadata
	function getInfos(all, open, close, id, ch, elPath) {
		infos.push({
			elCnt: elCnt,
			id: id,
			ch: ch,
			open: open,
			close: close,
			path: elPath,
			token: all
		});
	}
	var elCnt, tokens,
		infos = [];
	if (tokens = isVal ? node : markerNodeInfo(node)) {
		elCnt = infos.elCnt = node.tagName !== SCRIPT;
		elCnt = tokens.charAt(0) === "@" || elCnt;
		infos._tkns = tokens;
		// rMarkerTokens = /(?:(#)|(\/))(\d+)([_^])([-+@\d]+)?/g;
		tokens.replace(rBinding || rMarkerTokens, getInfos);
		return infos;
	}
}

function unmarkPrevOrNextNode(node, elCnt) {
	if (node) {
		if (node.type === "jsv") {
			node.parentNode.removeChild(node);
		} else if (elCnt && node.getAttribute($viewsLinkAttr) === "") {
			node.removeAttribute($viewsLinkAttr);
		}
	}
}

function markPrevOrNextNode(node, elCnt) {
	var marker = node;
	while (elCnt && marker && marker.nodeType !== 1) {
		marker = marker.previousSibling;
	}
	if (marker) {
		if (marker.nodeType !== 1) {
			// For text nodes, we will add a script node before
			marker = document.createElement(SCRIPT);
			marker.type = "jsv";
			node.parentNode.insertBefore(marker, node);
		} else if (!markerNodeInfo(marker) && !marker.getAttribute($viewsLinkAttr)) {
			// For element nodes, we will add a data-link attribute (unless there is already one)
			// so that this node gets included in the node linking process.
			marker.setAttribute($viewsLinkAttr, "");
		}
	}
	return marker;
}

function normalizeLinkTag(linkMarkup, twoway) {
	linkMarkup = $.trim(linkMarkup).replace(rEscapeQuotes, "\\$&");
	return linkMarkup.slice(-1) !== delimCloseChar0
	// If simplified syntax is used: data-link="expression", convert to data-link="{:expression}",
	// or for inputs, data-link="{:expression:}" for (default) two-way binding
		? linkMarkup = delimOpenChar1 + ":" + linkMarkup + (twoway ? ":" : "") + delimCloseChar0
		: linkMarkup;
}

//===========================
// Methods for views and tags
//===========================

function callAfterLink(tag, ev, eventArgs) {
	var linkedElem, displayElem, linkedEl, val, l, linkedTag, oldTrig, newTrig, tagProps, propsExpr, linkedElemView, prop, propDef,
		tagCtx = tag.tagCtx,
		view = tagCtx.view,
		props = tagCtx.props,
		linkCtx = tag.linkCtx;

	if (tag._.unlinked) { // First call to onAfterLink, or first call after onUpdate: updateContent. Initialize and call onBind and set properties
		if (tag.linkedElement !== undefined) {
			// linkedElement: - selector for identifying linked element in template/rendered content
			tag.linkedElem = tag._.inline ? tag.contents(true, tag.linkedElement || "*").first() : $(linkCtx.elem);
		}
		if (tag.onBind) {
			tag.onBind(tagCtx, linkCtx, tag.ctx, ev, eventArgs);
		}
	}

	if (tag.onAfterLink) {
		tag.onAfterLink(tagCtx, linkCtx, tag.ctx, ev, eventArgs);
	}

	linkedElem = tag.targetTag ? tag.targetTag.linkedElem : tag.linkedElem;
	displayElem = tag.displayElem || linkedElem;

if (linkedElem && linkedElem[0]) {
		if (!tag._.chging) {
			val = tag.cvtArgs()[0];
			l = linkedElem.length;
			while (l--) {
				linkedEl = linkedElem[l];
				if (tag._.unlinked && linkedEl !== linkCtx.elem) {
					linkedTag = linkedEl._jsvLkEl;
					if (tag._.inline && (!linkedTag || linkedTag !== tag && linkedTag.targetTag !== tag)) {
						// For data-linked tags, identify the linkedEl with the tag, for "to" binding
						// (For data-linked elements, if not yet bound, we identify later when the linkCtx.elem is bound)
						linkedEl._jsvLkEl = tag;
						bindTo(bindingStore[tag._tgId], tag, linkedEl);
						linkedEl._jsvBnd = "&" + tag._tgId + "+"; // Add a "+" for cloned binding - so removing
						// elems with cloned bindings will not remove the 'parent' binding from the bindingStore.
					}
				}
				if (val !== undefined) {
					if (linkedEl.value !== undefined) {
						if (linkedEl.type === CHECKBOX) {
							linkedEl[CHECKED] = val && val !== "false";
						} else if (linkedEl.type === RADIO) {
							linkedEl[CHECKED] = (linkedEl.value === val);
						} else {
							linkedEl.value = val;
						}
					} else if (linkedEl.contentEditable === TRUE) {
						linkedEl.innerHTML = val;
					}
					linkCtx._val = val;
				}
				if (props.name) {
					linkedEl.name = linkedEl.name || props.name;
				}
			}
		}
		if (tag.setSize) {
			if (props.height) {
				displayElem.height(props.height);
			}
			if (props.width) {
				displayElem.width(props.width);
			}
		}
		if (props.title !== undefined) {
			displayElem.attr("title", props.title);
		}
		if (props["class"]) {
			// This code supports dynamic binding to class - where it adds the class if absent, and removes/adds if a previous value is present
			if (eventArgs && displayElem.hasClass(eventArgs.oldValue)) {
				displayElem.removeClass(eventArgs.oldValue);
			}
			displayElem.addClass(props["class"]);
		}
		if (props.id) {
			linkedElem[0].id = props.id;
		}
	}
	tag._.unlinked = undefined;
}

function asyncElemChangeHandler(ev) {
	setTimeout(function() {
		elemChangeHandler(ev);
	}, 0);
}

function bindElChange($elem, trig, onoff) {
	if (trig) {
		trig = "" + trig === trig ? trig : "keydown"; // Set trigger to (true || truey non-string (e.g. 1) || 'keydown'): Get 'keydown' with async
		$elem[onoff](trig, trig === "keydown" ? asyncElemChangeHandler : elemChangeHandler);
	}
}

function bindTo(binding, tag, linkedElem, cvtBk) {
	// Two-way binding.
	// We set the binding.to[1] to be the cvtBack, and binding.to[0] to be either the path to the target, or [object, path] where the target is the path on the provided object.
	// So for a computed path with an object call: a.b.getObject().d.e, then we set to[0] to be [exprOb, "d.e"], and we bind to the path on the returned object, exprOb.ob, as target
	// Otherwise our target is the first path, paths[0], which we will convert with contextCb() for paths like ~a.b.c or #x.y.z

	var bindto, pathIndex, path, lastPath, bindtoOb, $linkedElem, newTrig, oldTrig, to, l, totry,
		linkCtx = binding.linkCtx,
		source = linkCtx.data,
		paths = linkCtx.fn.paths;

	tag = tag || linkedElem._jsvLkEl;

		if (binding && paths && !binding.to) {
		oldTrig = linkedElem._jsvTr || false;
		if (tag) {
			cvtBk = tag.convertBack || cvtBk;
			newTrig = tag.tagCtx.props.trigger;
		}
		newTrig = newTrig === undefined ? $subSettings.trigger : newTrig;
		// Trigger is noop except for text box, textarea, contenteditable...
		newTrig = newTrig && (linkedElem.tagName === "INPUT" && linkedElem.type !== CHECKBOX && linkedElem.type !== RADIO || linkedElem.type === "textarea" || linkedElem.contentEditable === TRUE) && newTrig || false;

		if (oldTrig !== newTrig) {
			$linkedElem = $(linkedElem);
			bindElChange($linkedElem, oldTrig, "off");
			bindElChange(
				$linkedElem,
				linkedElem._jsvTr = newTrig,
				"on"
			);
		}

		paths = (bindto = paths._jsvto) || paths[0];
		pathIndex = paths && paths.length;
		if (pathIndex && (!tag || tag.tagCtx.args.length)) {
			lastPath = paths[pathIndex - 1];
			if (lastPath._jsv) {
				bindtoOb = lastPath;
				while (lastPath.sb && lastPath.sb._jsv) {
					path = lastPath = lastPath.sb;
				}
				path = lastPath.sb || path && path.path;
				lastPath = path ? path.slice(1) : bindtoOb.path;
			}
			if (path) {
				to = [
						bindtoOb, // 'exprOb' for this expression and view-binding. So bindtoOb.ob is current object returned by expression.
						lastPath
					];
			} else {
				while ((totry = linkCtx._ctxCb(path = lastPath.split("^").join("."), source)) && (l = totry.length)) {
					// Recursively dereference any ~foo or #bar tokens in the path. (Recursive because ~foo may be a contextual param which has
					// its own dependencies on other ~foo #bar components)
					to = totry;
					if (to._cp) { // Two-way binding to a contextual parameter reference, ~foo (declared as ~foo=expr on a parent tag)
						to = [to[l-3], to[l-2]];
						lastPath = to[1];
						if (lastPath._jsv) {
							bindtoOb = lastPath;
							while (lastPath.sb && lastPath.sb._jsv) {
								path = lastPath = lastPath.sb;
							}
							path = lastPath.sb || path && path.path;
							lastPath = path ? path.slice(1) : bindtoOb.path;
							to = [
								bindtoOb, // 'exprOb' for this expression and view-binding. So bindtoOb.ob is current object returned by expression.
								lastPath
							];
						}
					} else { // Two-way binding to a helper - e.g. ~address.street, or computed, e.g. ~fullName(), or view property e.g. #data.foo
						to = l>2
							? [to[l-3], to[l-2]] // With path: [object, path]
							: [to[l-2]];         // No path, (e.g. [function] for computed with setter)
					}
					source = to[0];
					lastPath = to[1];
				}
				to = to || [source, path]; // Two way binding to an object (neither ~foo nor #bar)
			}
		} else {
			to = [];
		}
		binding.to = [
			to,
			cvtBk
		];
	}
}

function mergeCtxs(tag, newCtxs, replace) { // Merge updated tagCtxs into tag.tagCtxs
	var tagCtx, newTagCtx,
		view = tag.tagCtx.view,
		tagCtxs = tag.tagCtxs || [tag.tagCtx],
		l = tagCtxs.length,
		refresh = !newCtxs;

	newCtxs = newCtxs || tag._.bnd.call(view.tmpl, (tag.linkCtx || view).data, view, $sub);

	if (replace) {
		// Replace previous tagCtxs by new ones, rather than merging
		tagCtxs = tag.tagCtxs = newCtxs;
		tag.tagCtx = tagCtxs[0];
	} else {
		while (l--) {
			tagCtx = tagCtxs[l];
			newTagCtx = newCtxs[l];
			$observable(tagCtx.props).setProperty(newTagCtx.props);
			$extend(tagCtx.ctx, newTagCtx.ctx); // We don't support propagating ctx variables, ~foo, observably, to nested views. So extend, not setProperty...
			tagCtx.args = newTagCtx.args;
			if (refresh) {
				tagCtx.tmpl = newTagCtx.tmpl;
			}
		}
	}
	$sub._ths(tag, tagCtxs[0]); // tagHandlersFromProps
	return tagCtxs;
}

//=========
// Disposal
//=========

function clean(elems) {
	// Remove data-link bindings, or contained views
	var l, elem, bindings,
		elemArray = [],
		len = elems.length,
		i = len;
	while (i--) {
		// Copy into an array, so that deletion of nodes from DOM will not cause our 'i' counter to get shifted
		// (Note: This seems as fast or faster than elemArray = [].slice.call(elems); ...)
		elemArray.push(elems[i]);
	}
	i = len;
	while (i--) {
		elem = elemArray[i];
		if (elem.parentNode) {
			// Has not already been removed from the DOM
			if (bindings = elem._jsvBnd) {
				// Get propertyChange bindings for this element
				// This may be an element with data-link, or the opening script marker node for a data-linked tag {^{...}}
				// bindings is a string with the syntax: "(&bindingId)*"
				bindings = bindings.slice(1).split("&");
				elem._jsvBnd = "";
				l = bindings.length;
				while (l--) {
					// Remove associated bindings
					removeViewBinding(bindings[l], elem._jsvLkEl, elem); // unbind bindings with this bindingId on this view
				}
			}
			disposeTokens(markerNodeInfo(elem) + (elem._df || ""));
		}
	}
}

function removeViewBinding(bindId, linkedElemTag, elem) {
	// Unbind
	var objId, linkCtx, tag, object, obsId, tagCtxs, l, map, $linkedElem, linkedElem, trigger, view, targetTag,
		binding = bindingStore[bindId];

	if (linkedElemTag) {
		linkedElemTag = linkedElemTag.targetTag || linkedElemTag;
		elem._jsvLkEl = undefined;
	} else if (binding) {
		delete bindingStore[bindId]; // Delete already, so call to onDispose handler below cannot trigger recursive deletion (through recursive call to jQuery cleanData)
		for (objId in binding.bnd) {
			object = binding.bnd[objId];
			obsId = binding.cbId;
			if ($isArray(object)) {
				$([object]).off(arrayChangeStr + obsId).off(propertyChangeStr + obsId); // There may be either or both of arrayChange and propertyChange
			} else {
				$(object).off(propertyChangeStr + obsId);
			}
			delete binding.bnd[objId];
		}

		if (linkCtx = binding.linkCtx) {
			if (tag = linkCtx.tag) {
				if (tagCtxs = tag.tagCtxs) {
					l = tagCtxs.length;
					while (l--) {
						if (map = tagCtxs[l].map) {
							map.unmap(); //unobserve
						}
					}
				}
				$linkedElem = tag.linkedElem;

				if (tag.onUnbind) {
					tag.onUnbind(tag.tagCtx, linkCtx, tag.ctx, true);
				}
				if (tag.onDispose) {
					tag.onDispose();
				}

				if (!tag._elCnt) {
					if (tag._prv) {
						tag._prv.parentNode.removeChild(tag._prv);
					}
					if (tag._nxt) {
						tag._nxt.parentNode.removeChild(tag._nxt);
					}
				}
			}
			linkedElem = $linkedElem && $linkedElem[0] || linkCtx.elem;

			if (trigger = linkedElem && linkedElem._jsvTr) {
				bindElChange($linkedElem || $(linkedElem), trigger, "off");
				linkedElem._jsvTr = undefined;
			}
			view = linkCtx.view;
			if (view.type === "link") {
				view.parent.removeViews(view._.key, undefined, true); // A "link" view is associated with the binding, so should be disposed with binding.
			} else {
				delete view._.bnds[bindId];
			}
		}
		delete cbBindingsStore[binding.cbId];
	}
}

function $unlink(to) {
	if (to) {
		to = to.jquery ? to : $(to);
		to.each(function() {
			var innerView;
			//TODO fix this for better perf. Rather that calling inner view multiple times which does querySelectorAll each time, consider a single querySelectorAll
			// or simply call view.removeViews() on the top-level views under the target 'to' node, then clean(...)
			while ((innerView = $view(this, true)) && innerView.parent) {
				innerView.parent.removeViews(innerView._.key, undefined, true);
			}
			clean(this.getElementsByTagName("*"));
		});
		clean(to);
	} else {
		// Call to $.unlink() is equivalent to $.unlink(true, "body")
		if (activeBody) {
			$(activeBody)
				.off(elementChangeStr, elemChangeHandler)
				.off('blur', '[contenteditable]', elemChangeHandler);
			activeBody = undefined;
		}
		topView.removeViews();
		clean(document.body.getElementsByTagName("*"));
	}
}

//========
// Helpers
//========

function getContextCb(view) { // Return a callback for accessing the context of a template/data-link expression - and converting ~foo, #foo etc.
	// TODO Consider exposing or allowing override, as public API
	return function(path, object, depth) {
		// TODO consider only calling the contextCb on the initial token in path '~a.b.c' and not calling again on
		// the individual tokens, 'a', 'b', 'c'... Currently it is called multiple times
		var tokens, tag, items, helper, last, nextPath, l;
		if (view && path) {
			if (path._jsv) {
				return path._jsv.call(view.tmpl, object, view, $sub);
			}
			if (path.charAt(0) === "~") {
				// We return new items to insert into the sequence, replacing the "~a.b.c" string:
				// [helperObject 'a', "a.b.c" currentDataItem] so currentDataItem becomes the object for subsequent paths.
				if (path.slice(0, 4) === "~tag") {
					tag = view.ctx;
					if (path.charAt(4) === ".") {
						// "~tag.xxx"
						tokens = path.slice(5).split(".");
						tag = tag.tag;
					}
					if (tokens) {
						return tag ? [tag, tokens.join("."), object] : [];
					}
				}
				path = path.slice(1).split(".");
				if (helper = view.hlp(last = path.shift(), true)) {
					if (helper._cp) {  // helper for (contextual parameter ~foo=...) is an array - [data, ctxPrmDependencies ...]
						if (path.length) {
							nextPath = "." + path.join(".");
							last = helper[l = helper.length-1];
							if (last._jsv) {
								last.sb = nextPath;
								last.bnd = !!depth;
							} else {
								helper[l] = (last + nextPath).replace("#data.", "");
								if (last.slice(0, 5) === "#view") {
									helper[l] = helper[l].slice(6);
									helper.splice(l, 0, view);
								}
							}
						}
						helper.push(object);
						items = helper;
					} else if (path.length || $isFunction(helper)) {
						items = [helper, path.join("."), object]; // 2way bindng on ~foo.helperLeafProperty or ~computed() or ~contextualParam
					}
				}
				return items || [];
			}
			if (path.charAt(0) === "#") {
				// We return new items to insert into the sequence, replacing the "#a.b.c" string: [view, "a.b.c" currentDataItem]
				// so currentDataItem becomes the object for subsequent paths. The 'true' flag makes the paths bind only to leaf changes.
				return path === "#data" ? [] : [view, path.replace(rViewPath, ""), object];
			}
		}
	};
}

function inputAttrib(elem) {
	return elem.type === CHECKBOX ? elem[CHECKED] : elem.value;
}

//========================== Initialize ==========================

//=====================
// JsRender integration
//=====================

$sub.onStore.template = function(name, item) {
	item.link = tmplLink;
	if (name) {
		$.link[name] = function() {
			return tmplLink.apply(item, arguments);
		};
	}
};

$sub.viewInfos = viewInfos; // Expose viewInfos() as public helper method

// Define JsViews version of delimiters(), and initialize
($viewsSettings.delimiters = function() {
	// Run delimiters initialization in context of jsrender.js
	var ret = oldJsvDelimiters.apply(0, arguments);

	if (oldJsvDelimiters !== $viewsDelimiters) {
		// If JsRender was loaded before JsViews, then need also to initialize and set globals in that JsRender instance
		ret = $viewsDelimiters.apply(0, arguments);
	}

	// Data-linking must use new delimiters
	rTagDatalink = new RegExp("(?:^|\\s*)([\\w-]*)(\\" + linkChar + ")?(\\" + delimOpenChar1 + $sub.rTag + "(:\\w*)?\\" + delimCloseChar0 + ")", "g");
	return ret;
})(); // jshint ignore:line

$sub.addSetting("trigger");

//====================================
// Additional members for linked views
//====================================

function transferViewTokens(prevNode, nextNode, parentElem, id, viewOrTagChar, refresh) {
	// Transfer tokens on prevNode of viewToRemove/viewToRefresh to nextNode or parentElem._df
	var i, l, vwInfos, vwInfo, viewOrTag, viewId, tokens,
		precedingLength = 0,
		emptyView = prevNode === nextNode;

	if (prevNode) {
		// prevNode is either the first node in the viewOrTag, or has been replaced by the vwInfos tokens string
		vwInfos = viewInfos(prevNode) || [];
		for (i = 0, l = vwInfos.length; i < l; i++) {
			// Step through views or tags on the prevNode
			vwInfo = vwInfos[i];
			viewId = vwInfo.id;
			if (viewId === id && vwInfo.ch === viewOrTagChar) {
				if (refresh) {
					// This is viewOrTagToRefresh, this is the last viewOrTag to process...
					l = 0;
				} else {
					// This is viewOrTagToRemove, so we are done...
					break;
				}
			}
			if (!emptyView) {
				viewOrTag = vwInfo.ch === "_"
					? viewStore[viewId]
					: bindingStore[viewId].linkCtx.tag;
				if (vwInfo.open) {
					// A "#m" token
					viewOrTag._prv = nextNode;
				} else if (vwInfo.close) {
					// A "/m" token
					viewOrTag._nxt = nextNode;
				}
			}
			precedingLength += viewId.length + 2;
		}

		if (precedingLength) {
			prevNode.setAttribute(jsvAttrStr, prevNode.getAttribute(jsvAttrStr).slice(precedingLength));
		}
		tokens = nextNode ? nextNode.getAttribute(jsvAttrStr) : parentElem._df;
		if (l = tokens.indexOf("/" + id + viewOrTagChar) + 1) {
			tokens = vwInfos._tkns.slice(0, precedingLength) + tokens.slice(l + (refresh ? -1 : id.length + 1));
		}
		if (tokens) {
			if (nextNode) {
				// If viewOrTagToRemove was an empty viewOrTag, we will remove both #n and /n
				// (and any intervening tokens) from the nextNode (=== prevNode)
				// If viewOrTagToRemove was not empty, we will take tokens preceding #n from prevNode,
				// and concatenate with tokens following /n on nextNode
				nextNode.setAttribute(jsvAttrStr, tokens);
			} else {
				setDefer(parentElem, tokens);
			}
		}
	} else {
		// !prevNode, so there may be a deferred nodes token on the parentElem. Remove it.
		setDefer(parentElem, removeSubStr(parentElem._df, "#" + id + viewOrTagChar));
		if (!refresh && !nextNode) {
			// If this viewOrTag is being removed, and there was no .nxt, remove closing token from deferred tokens
			setDefer(parentElem, removeSubStr(parentElem._df, "/" + id + viewOrTagChar));
		}
	}
}

function disposeTokens(tokens) {
	var i, l, vwItem, vwInfos;
	if (vwInfos = viewInfos(tokens, true, rOpenMarkers)) {
		for (i = 0, l = vwInfos.length; i < l; i++) {
			vwItem = vwInfos[i];
			if (vwItem.ch === "_") {
				if ((vwItem = viewStore[vwItem.id]) && vwItem.type) {
					// If this is the _prv (prevNode) for a view, remove the view
					// - unless view.type is undefined, in which case it is already being removed
					vwItem.parent.removeViews(vwItem._.key, undefined, true);
				}
			} else {
				removeViewBinding(vwItem.id); // unbind bindings with this bindingId on this view
			}
		}
	}
}

//====================================
// Add link methods to data-linked view or tag
//====================================
function addLinkMethods(tagOrView, isTag) {

	tagOrView.contents = function(deep, select) {
		// For a view or a tag, return jQuery object with the content nodes,
		if (deep !== !!deep) {
			// deep not boolean, so this is contents(selector)
			select = deep;
			deep = undefined;
		}
		var filtered,
			nodes = $(this.nodes());
		if (nodes[0]) {
			filtered = select ? nodes.filter(select) : nodes;
			nodes = deep && select ? filtered.add(nodes.find(select)) : filtered;
		}
		return nodes;
	};

	tagOrView.nodes = function(withMarkers, prevNode, nextNode) {
		// For a view or a tag, return top-level nodes
		// Do not return any script marker nodes, unless withMarkers is true
		// Optionally limit range, by passing in prevNode or nextNode parameters

		var node,
			self = this,
			elCnt = self._elCnt,
			prevIsFirstNode = !prevNode && elCnt,
			nodes = [];

		prevNode = prevNode || self._prv;
		nextNode = nextNode || self._nxt;

		node = prevIsFirstNode
			? (prevNode === self._nxt
				? self.parentElem.lastSibling
				: prevNode)
			: (self._.inline === false
				? prevNode || self.linkCtx.elem.firstChild
				: prevNode && prevNode.nextSibling);

		while (node && (!nextNode || node !== nextNode)) {
			if (withMarkers || elCnt || node.tagName !== SCRIPT) {
				// All the top-level nodes in the view
				// (except script marker nodes, unless withMarkers = true)
				// (Note: If a script marker node, viewInfo.elCnt undefined)
				nodes.push(node);
			}
			node = node.nextSibling;
		}
		return nodes;
	};

	tagOrView.childTags = function(deep, tagName) {
		// For a view or a tag, return child tags - at any depth, or as immediate children only.
		if (deep !== !!deep) {
			// deep not boolean, so this is childTags(tagName) - which looks for top-level tags of given tagName
			tagName = deep;
			deep = undefined;
		}

		var self = this,
			view = self.link ? self : self.tagCtx.view, // this may be a view or a tag. If a tag, get the view from tag.view.tagCtx
			prevNode = self._prv,
			elCnt = self._elCnt,
			tags = [];

		view.link(
			undefined,
			self.parentElem,
			elCnt ? prevNode && prevNode.previousSibling : prevNode,
			self._nxt,
			undefined,
			{get:{
				tags: tags,
				deep: deep,
				name: tagName,
				id: self.link ? self._.id + "_" : self._tgId + "^"
			}}
		);
		return tags;
	};

	tagOrView.refresh = function(sourceValue) {
		var promise, attr,
			tag = this,
			linkCtx = tag.linkCtx,
			view = tag.tagCtx.view;

		if (tag.disposed) { error("Removed tag"); }
		if (sourceValue === undefined) {
			sourceValue = $sub._tag(tag, view, view.tmpl, mergeCtxs(tag), true); // Get rendered HTML for tag, based on refreshed tagCtxs
		}
		if (sourceValue + "" === sourceValue) {
			// If no rendered content, sourceValue will not be a string (can be 0 or undefined)
			if (tag.onUnbind) {
				tag.onUnbind(tag.tagCtx, linkCtx, tag.ctx);
			}
			attr = tag._.inline ? HTML : (linkCtx.attr || defaultAttr(tag.parentElem, true));
			promise = updateContent(sourceValue, linkCtx, attr, tag);
		}

		callAfterLink(tag);
		return promise || tag;
	};

	tagOrView.update = function(value) {
		var linkedElem = this.linkedElem;
		if (linkedElem) {
			elemChangeHandler({
				target: linkedElem[0]
			}, undefined, value);
		}
	};

	if (isTag) {
		// This is a TAG
		tagOrView.domChange = function() { // domChange notification support
			var elem = this.parentElem,
				hasListener = $.hasData(elem) && $._data(elem).events,
				domChangeNotification = "jsv-domchange";

			if (hasListener && hasListener[domChangeNotification]) {
				// Only trigger handler if there is a handler listening for this event. (Note using triggerHandler - so no event bubbling.)
				$(elem).triggerHandler(domChangeNotification, arguments);
			}
		};
	} else {
		// This is a VIEW
		// Note: a linked view will also, after linking have nodes[], _prv (prevNode), _nxt (nextNode) ...
		tagOrView.addViews = function(index, dataItems) {
			// if view is not an array view, do nothing
			var i, viewsCount,
				self = this,
				itemsCount = dataItems.length,
				views = self.views;

			if (!self._.useKey && itemsCount) {
				// view is of type "array"
				viewsCount = views.length + itemsCount;

				if (viewsCount === self.data.length // If views not already synced to array (e.g. triggered by array.length propertyChange - jsviews/issues/301)
						&& renderAndLink(self, index, self.tmpl, views, dataItems, self.ctx) !== false) {
					if (!self._.srt) { // Not part of a 'sort' on refresh
						self.fixIndex(index + itemsCount);
					}
				}
			}
		};

		tagOrView.removeViews = function(index, itemsCount, keepNodes, isMove) {
			// view.removeViews() removes all the child views
			// view.removeViews(index) removes the child view with specified index or key
			// view.removeViews(index, count) removes the specified nummber of child views, starting with the specified index
			function removeView(index) {
				var id, bindId, parentElem, prevNode, nextNode, nodesToRemove,
					viewToRemove = views[index];

				if (viewToRemove && viewToRemove.link) {
					id = viewToRemove._.id;
					if (!keepNodes) {
						// Remove the HTML nodes from the DOM, unless they have already been removed, including nodes of child views
						nodesToRemove = viewToRemove.nodes();
					}

					// Remove child views, without removing nodes
					viewToRemove.removeViews(undefined, undefined, true);

					viewToRemove.type = undefined; // Set type to undefined: used as a flag that this view is being removed
					prevNode = viewToRemove._prv;
					nextNode = viewToRemove._nxt;
					parentElem = viewToRemove.parentElem;
					// If prevNode and nextNode are the same, the view is empty
					if (!keepNodes) {
						// Remove the HTML nodes from the DOM, unless they have already been removed, including nodes of child views
						if (viewToRemove._elCnt) {
							// if keepNodes is false (and transferring of tokens has not already been done at a higher level)
							// then transfer tokens from prevNode which is being removed, to nextNode.
							transferViewTokens(prevNode, nextNode, parentElem, id, "_");
						}
						$(nodesToRemove).remove();
					}
					if (!viewToRemove._elCnt) {
						try {
							prevNode.parentNode.removeChild(prevNode); // (prevNode.parentNode is parentElem, except if jQuery Mobile or similar has inserted an intermediate wrapper
							nextNode.parentNode.removeChild(nextNode);
						} catch (e) {}
					}
					setArrayChangeLink(viewToRemove);
					for (bindId in viewToRemove._.bnds) {
						removeViewBinding(bindId);
					}
					delete viewStore[id];
				}
			}

			var current, view, viewsCount,
				self = this,
				isArray = !self._.useKey,
				views = self.views;

			if (isArray) {
				viewsCount = views.length;
			}
			if (index === undefined) {
				// Remove all child views
				if (isArray) {
					// views and data are arrays
					current = viewsCount;
					while (current--) {
						removeView(current);
					}
					self.views = [];
				} else {
					// views and data are objects
					for (view in views) {
						// Remove by key
						removeView(view);
					}
					self.views = {};
				}
			} else {
				if (itemsCount === undefined) {
					if (isArray) {
						// The parentView is data array view.
						// Set itemsCount to 1, to remove this item
						itemsCount = 1;
					} else {
						// Remove child view with key 'index'
						removeView(index);
						delete views[index];
					}
				}
				if (isArray && itemsCount
					&& (isMove || viewsCount - itemsCount === self.data.length)) { // If views not already synced to array (e.g. triggered by array.length propertyChange - jsviews/issues/301)
					current = index + itemsCount;
					// Remove indexed items (parentView is data array view);
					while (current-- > index) {
						removeView(current);
					}
					views.splice(index, itemsCount);
					if (!self._.sort) {
						self.fixIndex(index);
					}
				}
			}
		};

		tagOrView.refresh = function() {
			var self = this,
				parent = self.parent;

			if (parent) {
				renderAndLink(self, self.index, self.tmpl, parent.views, self.data, undefined, true);
				setArrayChangeLink(self);
			}
		};

		tagOrView.fixIndex = function(fromIndex) {
			// Fixup index on following view items...
			var views = this.views,
				index = views.length;
			while (fromIndex < index--) {
				if (views[index].index !== index) {
					$observable(views[index]).setProperty("index", index);
					// This is fixing up index, but not key, and not index on child views. From child views, use view.getIndex()
				}
			}
		};

		tagOrView.link = viewLink;
	}
}

//========================
// JsViews-specific converters
//========================

$converters.merge = function(val) {
	// Special converter used in data-linking to space-separated lists, such as className:
	// Currently only supports toggle semantics - and has no effect if toggle string is not specified
	// data-link="class{merge:boolExpr toggle=className}"
	var regularExpression,
		currentValue = this.linkCtx._val || "",
		toggle = this.tagCtx.props.toggle;

	if (toggle) {
		// We are toggling the class specified by the toggle property,
		// and the boolean val binding is driving the insert/remove toggle

		regularExpression = toggle.replace(/[\\^$.|?*+()[{]/g, "\\$&");
		// Escape any regular expression special characters (metacharacters) within the toggle string
		regularExpression = "(\\s(?=" + regularExpression + "$)|(\\s)|^)(" + regularExpression + "(\\s|$))";
		// Example: /(\s(?=myclass$)|(\s)|^)?(myclass(\s|$))/ - so matches (" myclass" or " " or ^ ) followed by ("myclass " or "myclass$") where ^/$ are beginning/end of string
		currentValue = currentValue.replace(new RegExp(regularExpression), "$2");
		val = currentValue + (val ? (currentValue && " ") + toggle : "");
	}
	return val;
};

//========================
// JsViews-specific tags
//========================

function keepParentDataCtx(val) {
	return this.tagCtx.view; // Return the parent view as data context for rendering block content
}

$tags({
	on: {
		attr: NONE,
		init: function(tagCtx) {
			var content,
				tag = this,
				i = 0,
				args = tagCtx.args, // [events,] [selector,] handler
				l = args.length;

			for (; i<l && !$isFunction(args[i]); i++); // Handler is first arg of type function
			tag._hi = l>i && i+1; // handler index
			if (tag._.inline) {
				if (!$sub.rTmpl.exec(content = tagCtx.tmpl.markup)) {
					// Inline {^{on}} tag with no content (or external template content) or with content containing
					// no HTML or JsRender tags: We will wrap the (text) content, or the operation name in a <button> element
					// (Otherwise we will attach the handler to the element content after data-linking)
					tag.template = "<button>" + ($.trim(content) || tagCtx.params.args[i] || "noop") + "</button>";
				}
				tag.attr = HTML;
			}
		},
		onAfterLink: function(tagCtx, linkCtx) {
			var handler, params, find, activeElem,
				tag = this,
				i = tag._hi,
				args = tagCtx.args, // [events,] [selector,] handler
				l = args.length,
				props = tagCtx.props,
				data = props.data,
				view = tagCtx.view,
				contextOb = props.context; // Context ('this' pointer) for attached handler

			if (i) { // There is a handler
				handler = args[i-1];
				params = args.slice(i); // Subsequent args are params
				args = args.slice(0, i-1); // Preceding args (if any) are events and selector
				tag._sel = args[1]; // Selector for descendant elements - for delegated events on those elements, delegating to the activeElem

				activeElem = tag.activeElem = tag.activeElem || $(tag._.inline
					? (tag._sel = args[1] || "*", tag.parentElem)
					// If inline, attach to child elements of tag parent element (filtered by selector argument if provided.
					// (In handler we'll filter out events from sibling elements preceding or following tag.)
					// This allows us to use the delegated pattern where the attached event works even for added elements satisfying the selector
					: linkCtx.elem);

				if (!contextOb) {
					// Get the path for the preceding object (context object) of handler (which is the last arg), compile function
					// to return that context object, and run compiled function against data
					contextOb = /^(.*)[\.^][\w$]+$/.exec(tagCtx.params.args.slice(-params.length - 1)[0]);
					contextOb = contextOb && $sub.tmplFn(delimOpenChar1 + ":" + contextOb[1] + delimCloseChar0, view.tmpl, true)(linkCtx.data, view);
				}

				if (tag._evs) {
					tag.onUnbind();
				}

				activeElem.on(
					tag._evs = args[0] || "click", // events defaults to "click"
					tag._sel,
					data == undefined ? null : data,
					tag._hlr = function hndlr(ev) {
						var nodes, length,
							found = !tag._.inline;

						if (!found) { // If inline, filter out events from sibling elements preceding or following tag.
							nodes = tag.contents("*");
							l = nodes.length;
							while (!found && l--) {
								if (nodes[l].contains(ev.target)) {
									found = true;
								}
							}
						}
						if (found) { // target elem is indeed within the tag, so call the {on} handler
							return handler.apply(contextOb || linkCtx.data, [].concat(
								params, // e.g. par1, par2
								ev,
								{change: ev.type, view: view, linkCtx: linkCtx},
								params.slice.call(arguments, 1) // If triggering event (e.g. jsv-domchange) has additional arguments after ev, pass them too
							));
							// for {on 'click' handler par1 par2} use handler(par1, par2, ev, domchangeEventArgs)
							// for {on 'jsv-domchange' handler par1 par2} use handler(par1, par2, ev, domchangeEventArgs, tagCtx, linkCtx, observableEventArgs)
						}
					}
				);
			}
		},
		onUpdate: function() {
			return false;
		},
		onUnbind: function() {
			var self = this;
			if (self.activeElem) {
				self.activeElem.off(self._evs, self._sel, self._hlr);
			}
		},
		flow: true,
		contentCtx: keepParentDataCtx,
		dataBoundOnly: true
	},
	radiogroup: {
		init: function(tagCtx) {
			this.name = tagCtx.props.name || ("jsv" + Math.random());
		},
		onBind: function(tagCtx, linkCtx) {
			var domChngCntnr,
				tag = this,
				$linkedElem = tag.linkedElem = (tag._.inline ? tag.contents(true, "input[type=radio]") : $(linkCtx.elem).find("input[type=radio]")),
				l = $linkedElem.length;

			if (tag._.inline) {
				// If the first element is owned by (rendered by) this tag (not by a childTag such as {^{for}})
				// use it as container for detecting dom changes
				domChngCntnr = tag.contents("*")[0];
				domChngCntnr = domChngCntnr && $.view(domChngCntnr).ctx.tag === tag.parent ? domChngCntnr : tag.parentElem;
			} else {
				domChngCntnr = linkCtx.elem;
			}
			while (l--) {
				// Configure the name for each radio input element
				$linkedElem[l].name = $linkedElem[l].name || tag.name;
			}
			// Establish a domchange listener in case this radiogroup wraps a {^{for}} or {^{if}} or similar which might dynamically insert new radio input elements
			$(domChngCntnr).on("jsv-domchange", function(ev, forOrIfTagCtx) {
				var linkedElem,
					parentTags = forOrIfTagCtx.ctx.parentTags;
				if (!tag._.inline || domChngCntnr !== tag.parentElem // The domChngCntnr is specific to this tag
					// The domChngCntnr is the parentElem of this tag, so need to make sure dom change event is for
					// a content change within this tag, not outside it.
					|| parentTags && parentTags[tag.tagName] === tag) {
					// Contents have changed so recreate $linkedElem for the radio input elements (including possible new one just inserted)
					$linkedElem = tag.linkedElem = tag.contents(true, "input[type=radio]");
					l = $linkedElem.length;
					while (l--) {
						// Configure binding  and name for each radio input element
						linkedElem = $linkedElem[l];
						linkedElem._jsvLkEl = tag;
						linkedElem.name = linkedElem.name || tag.name;
						bindTo(bindingStore[tag._tgId], tag, linkedElem);
						linkedElem._jsvBnd = "&" + tag._tgId + "+";
						linkedElem.checked = tag.cvtArgs()[0] === linkedElem.value;
					}
				}
			});
		},
		onUpdate: function(ev, eventArgs, tagCtxs) {
			return false; // don't rerender
		},
		contentCtx: keepParentDataCtx,
		dataBoundOnly: true
	}
});

$extend($tags["for"], {
	//onUpdate: function(ev, eventArgs, newTagCtxs) {
		//Consider adding filtering for perf optimization. However the below prevents update on some scenarios which _should_ update - namely when there is another array on which for also depends.
		//var i, l, tci, prevArg;
		//for (tci = 0; (prevArg = this.tagCtxs[tci]) && prevArg.args.length; tci++) {
		//	if (prevArg.args[0] !== newTagCtxs[tci].args[0]) {
		//		return true;
		//	}
		//}
		//return false;
	//},
	onArrayChange: function(ev, eventArgs, tagCtx, linkCtx) {
		var arrayView,
			target = ev.target,
			targetLength = target.length,
			tag = this,
			change = eventArgs.change;
		if (tag._.noVws // Child views not supported because target is not html - e.g. data-link="title{for ...}"
			|| tag.tagCtxs[1] && ( // There is an {{else}}
				change === "insert" && targetLength === eventArgs.items.length // inserting, and new length is same as inserted length, so going from 0 to n
				|| change === "remove" && !targetLength // removing , and new length 0, so going from n to 0
			)) {
			tag.refresh();
		} else {
			for (arrayView in tag._.arrVws) {
				arrayView = tag._.arrVws[arrayView];
				if (arrayView.data === target) {
					arrayView._.onArrayChange.apply(arrayView, arguments);
				}
			}
		}
		tag.domChange(tagCtx, linkCtx, eventArgs);
		ev.done = true;
	},
	onAfterLink: function(tagCtx, linkCtx) {
		var i, arrHandler, arrBinding, data,
			tag = this,
			arrayBindings = tag._ars || {},
			tagCtxs = tag.tagCtxs,
			l = tagCtxs.length,
			selected = tag.selected || 0;

		for (i = 0; i <= selected; i++) {
			tagCtx = tagCtxs[i];        // loop through tagCtxs up to selected
			data = tagCtx.map
				? tagCtx.map.tgt        // 'data' is mapped data
				: tagCtx.args.length
					? tagCtx.args[0]    // or args[0]
					: tagCtx.view.data; // or defaults to current data.

			if ((arrBinding = arrayBindings[i]) && data !== arrBinding[0]) { // Is there previous array data on this tagCtx, different from new data
				$observe(arrBinding[0], arrBinding[1], true); //unobserve previous array
				delete arrayBindings[i];
			}
			if (!arrayBindings[i] && $isArray(data)) {
				$observe(data, arrHandler = function(ev, eventArgs) {
					var tagCt = tagCtx;
					tag.onArrayChange(ev, eventArgs, tagCt, linkCtx);
				});
				arrayBindings[i] = [data, arrHandler]; // Store array data and arrayChangeHandler on tag._ars[i]
			}
		}
		for (i = selected + 1; i < l; i++) { // If there were previous bindings on later tagCtxs, remove them
			if (arrBinding = arrayBindings[i]) {
				$observe(arrBinding[0], arrBinding[1], true); //unobserve previous binding
				delete arrayBindings[i];
			}
		}
		tag._ars = arrayBindings;
	},
	onDispose: function() {
		var l, tag = this;
		for (l in tag._ars) {
			$observe(tag._ars[l][0], tag._ars[l][1], true); //unobserve
		}
	}
});

$extend($tags["if"], {
	onUpdate: function(ev, eventArgs, newTagCtxs) {
		var tci, prevArg, different;
		for (tci = 0; (prevArg = this.tagCtxs[tci]); tci++) {
			different = prevArg.props.tmpl !== newTagCtxs[tci].props.tmpl || prevArg.args.length && !(prevArg = prevArg.args[0]) !== !newTagCtxs[tci].args[0];
			if ((!this.convert && !!prevArg) || different) {
				return different;
				// If there is not a change of template, and there is no converter, and newArg and prevArg are both truthy, return false to cancel update.
				// (Even if values on later elses are different, we still don't want to update, since rendered output would be unchanged)
				// If newArg and prevArg are different, return true, to update
				// If newArg and prevArg are both falsey, move to the next {{else ...}}
			}
		}
		// Boolean value of all args are unchanged (falsey), so return false to cancel update
		return false;
	},
	onAfterLink: function(tagCtx, linkCtx, ctx, ev, eventArgs) {
		if (eventArgs) {
			this.domChange(tagCtx, linkCtx, eventArgs);
		}
	}
});

function observeProps(map, ev, eventArgs) {
	if (eventArgs.change === "set") {
		var target = map.tgt,
			l = target.length;
		while (l--) {
			if (target[l].key === eventArgs.path) {
				break;
			}
		}
		if (l === -1) {
			if (eventArgs.path && !eventArgs.remove) {
				$observable(target).insert({key: eventArgs.path, prop: eventArgs.value});
			}
		} else if (eventArgs.remove) {
			$observable(target).remove(l);
		} else {
			$observable(target[l]).setProperty("prop", eventArgs.value);
		}
	}
}

function observeMappedProps(map, ev, eventArgs) {
	var item,
		source = map.src,
		change = eventArgs.change;

	if (change === "set") {
		if (eventArgs.path === "prop") {
			$observable(source).setProperty(ev.target.key, eventArgs.value);
		} else { // path === "key"
			$observable(source).removeProperty(eventArgs.oldValue); // When key is modified observably, remove old one and set new one
			$observable(source).setProperty(eventArgs.value, ev.target.prop);
		}
	} else if (change === "remove") {
		item = eventArgs.items[0];
		$observable(source).removeProperty(item.key);
		delete source[item.key];
	} else if (change === "insert") {
		item = eventArgs.items[0];
		if (item.key) {
			$observable(source).setProperty(item.key, item.prop);
		}
	}
}

function shallowArrayFilter(allPath /*, object, parentObs*/) { // Filter used by {{props}} for the mappedProps target array
	return allPath.indexOf(".") < 0;
}

$tags("props", {
	baseTag: "for",
	dataMap: $views.map({
		getTgt: $tags.props.dataMap.getTgt,
		obsSrc: observeProps,
		obsTgt: observeMappedProps,
		tgtFlt: shallowArrayFilter
	}),
	flow: true
});

//========================
// Extend jQuery namespace
//========================

$extend($, {

	//=======================
	// jQuery $.view() plugin
	//=======================

	view: $view = function(node, inner, type) {
		// $.view() returns top view
		// $.view(node) returns view that contains node
		// $.view(selector) returns view that contains first selected element
		// $.view(nodeOrSelector, type) returns nearest containing view of given type
		// $.view(nodeOrSelector, "root") returns root containing view (child of top view)
		// $.view(nodeOrSelector, true, type) returns nearest inner (contained) view of given type

		function getInnerView(nd, isVl) {
			if (nd) {
				vwInfos = viewInfos(nd, isVl, rOpenViewMarkers);
				for (j = 0, k = vwInfos.length; j < k; j++) {
					if ((view = viewStore[vwInfos[j].id]) && (view = view && type ? view.get(true, type) : view)) {
						break;
					}
				}
			}
		}

		if (inner !== !!inner) {
			// inner not boolean, so this is view(nodeOrSelector, type)
			type = inner;
			inner = undefined;
		}
		var view, vwInfos, i, j, k, l, elems,
			level = 0,
			body = document.body;

		if (node && node !== body && topView._.useKey > 1) {
			// Perf optimization for common cases

			node = "" + node === node
				? $(node)[0]
				: node.jquery
					? node[0]
					: node;

			if (node) {
				if (inner) {
					getInnerView(node._df, true);
					if (!view) {
						// Treat supplied node as a container element and return the first view encountered.
						elems = qsa ? node.querySelectorAll(bindElsSel) : $(bindElsSel, node).get();
						l = elems.length;
						for (i = 0; !view && i < l; i++) {
							getInnerView(elems[i]);
						}
					}
					return view;
				}
				while (node) {
					// Move back through siblings and up through parents to find preceding node which is a _prv (prevNode)
					// script marker node for a non-element-content view, or a _prv (first node) for an elCnt view
					if (vwInfos = viewInfos(node, undefined, rViewMarkers)) {
						l = vwInfos.length;
						while (l--) {
							view = vwInfos[l];
							if (view.open) {
								if (level < 1) {
									view = viewStore[view.id];
									return view && type ? view.get(type) : view || topView;
								}
								level--;
							} else {
								// level starts at zero. If we hit a view.close, then we move level to 1, and we don't return a view until
								// we are back at level zero (or a parent view with level < 0)
								level++;
							}
						}
					}
					node = node.previousSibling || node.parentNode;
				}
			}
		}
		return topView;
	},

	link: $link,
	unlink: $unlink,

	//=====================
	// override $.cleanData
	//=====================
	cleanData: function(elems) {
		if (elems.length && isCleanCall) {
			// Remove JsViews bindings. Also, remove from the DOM any corresponding script marker nodes
			clean(elems);
		}
		oldCleanData.apply($, arguments);
	}
});

// Possible future addition - e.g. for ckeditor tag control
//$views.utility = {
//	validate: function(html) {
//		try {
//			topView.link(undefined, document.createElement("div"), undefined, undefined, html, undefined, undefined, 1);
//		}
//		catch (e) {
//			return e.message;
//		}
//	}
//};

//===============================
// Extend jQuery instance plugins
//===============================

$extend($.fn, {
	link: function(expr, from, context, noIteration, parentView, prevNode, nextNode) {
		return $link(expr, this, from, context, noIteration, parentView, prevNode, nextNode);
	},
	unlink: function() {
		return $unlink(this);
	},
	view: function(inner, type) {
		return $view(this[0], inner, type);
	}
});

//==============================================================================
// Override jQuery methods that call our overridden cleanData, for disposal etc.
//==============================================================================

$.each([HTML, "replaceWith", "empty", "remove"], function(i, name) {
	var oldFn = $.fn[name];
	$.fn[name] = function() {
		var result;
		isCleanCall = 1; // Make sure cleanData does disposal only when coming from these calls.
		try {
			result = oldFn.apply(this, arguments);
		}
		finally {
			isCleanCall = 0;
		}
		return result;
	};
});

//===============
// Extend topView
//===============

addLinkMethods($extend(topView = $sub.topView, {tmpl: {links: {}}}));

viewStore = {0: topView}; // Top-level view
//===============
// Extend $.views
//===============

$views.getCtx = function(param) { // Return value of ctx.foo, including for compiled contextual parameters, ~foo=expr
	if (param && param._cp) { // If this helper resource is a contextual parameter, ~foo=expr
		param =  param[1](param[0].data, param[0], $sub);
	}
	return param;
};

//===================
// Extend $.views.sub
//===================

$sub._cp = function(paramVal, params, view) { // Get compiled contextual parameters (or properties) ~foo=expr.
	if (view.linked) { // In JsViews, returns [view, linkFn] where linkFn is compiled function for expression
		params = delimOpenChar1 + ":" + params + delimCloseChar0;
		var tmpl = view.tmpl,
			links = topView.tmpl.links, // Use topView links, as for compiled top-level linking expressions. To do - should this ever get disposed?
			linkFn = links[params];
		if (!linkFn) {
			links[params] = linkFn = $sub.tmplFn(params, tmpl, true);
		}
		paramVal = [view, linkFn];
		paramVal._cp = true; // Flag that this is a contextual parameter
	}
	return paramVal; // In JsRender returns evaluated expression
};

$sub._ceo = function cloneExprObjects(obs) {  // Clone exprObs so that each referenced contextual parameter ~foo uses its own exprOb instances
	var ob,
		clones = obs,
		l = obs.length;
	if (l) {
		clones = [];
		while (l--) {
			ob = obs[l];
			if (ob._jsv) {
				ob = $extend({}, ob);              // If an exprOb, clone it. If a string, keep as is
				ob.prm = cloneExprObjects(ob.prm); // Recursively clone exprObs in parameters, too
			}
			clones.unshift(ob);
		}
	}
	return clones;
};

//=========================
// Extend $.views.settings
//=========================

oldAdvSet = $sub.advSet;

$sub.advSet = function() { // refresh advanced settings
	oldAdvSet();
	global._jsv = $subSettingsAdvanced._jsv
		? $extend(global._jsv || {}, { // create global _jsv, for accessing views, etc
				views: viewStore,
				bindings: bindingStore
			})
		: undefined; // In IE8 cannot do delete global._jsv
	$viewsLinkAttr = $subSettingsAdvanced.linkAttr;
	linkViewsSel = bindElsSel + ",[" + $viewsLinkAttr + "]";
	wrapMap = $subSettingsAdvanced._wm;
	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
};

$viewsSettings.advanced({
	linkAttr: "data-link",
	useViews: false,
	noValidate: false,
	// wrapMap provide appropriate wrappers for inserting innerHTML, used in insertBefore
	// We have to close these tags to support XHTML (#13200)
	// TODO investigate whether more recent jQuery implementation using wrapMap in domManip/$().html() etc. is better optimized now...
	_wm: {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		svg_ns: [1, "<svg>", "</svg>"],
		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		div: $.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	_fe: {
		input: {
			from: inputAttrib, to: "value"
		},
		textarea: valueBinding,
		select: valueBinding,
		optgroup: {
			to: "label"
		}
	}
});

return $;
}, window));
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function($) {

	// Only continue if we're on IE8/IE9 with jQuery 1.5+ (contains the ajaxTransport function)
	if ($.support.cors || !$.ajaxTransport || !window.XDomainRequest) {
		return;
	}

	var httpRegEx = /^https?:\/\//i;
	var getOrPostRegEx = /^get|post$/i;
	var sameSchemeRegEx = new RegExp('^' + location.protocol, 'i');

	// ajaxTransport exists in jQuery 1.5+
	$.ajaxTransport('* text html xml json', function(options, userOptions, jqXHR) {

		// Only continue if the request is: asynchronous, uses GET or POST method, has HTTP or HTTPS protocol, and has the same scheme as the calling page
		if (!options.crossDomain || !options.async || !getOrPostRegEx.test(options.type) || !httpRegEx.test(options.url) || !sameSchemeRegEx.test(options.url)) {
			return;
		}

		var xdr = null;

		return {
			send: function(headers, complete) {
				var postData = '';
				var userType = (userOptions.dataType || '').toLowerCase();

				xdr = new XDomainRequest();
				if (/^\d+$/.test(userOptions.timeout)) {
					xdr.timeout = userOptions.timeout;
				}

				xdr.ontimeout = function() {
					complete(500, 'timeout');
				};

				xdr.onload = function() {
					var allResponseHeaders = 'Content-Length: ' + xdr.responseText.length + '\r\nContent-Type: ' + xdr.contentType;
					var status = {
						code: 200,
						message: 'success'
					};
					var responses = {
						text: xdr.responseText
					};
					try {
						if (userType === 'html' || /text\/html/i.test(xdr.contentType)) {
							responses.html = xdr.responseText;
						} else if (userType === 'json' || (userType !== 'text' && /\/json/i.test(xdr.contentType))) {
							try {
								responses.json = $.parseJSON(xdr.responseText);
							} catch (e) {
								status.code = 500;
								status.message = 'parseerror';
								//throw 'Invalid JSON: ' + xdr.responseText;
							}
						} else if (userType === 'xml' || (userType !== 'text' && /\/xml/i.test(xdr.contentType))) {
							var doc = new ActiveXObject('Microsoft.XMLDOM');
							doc.async = false;
							try {
								doc.loadXML(xdr.responseText);
							} catch (e) {
								doc = undefined;
							}
							if (!doc || !doc.documentElement || doc.getElementsByTagName('parsererror').length) {
								status.code = 500;
								status.message = 'parseerror';
								throw 'Invalid XML: ' + xdr.responseText;
							}
							responses.xml = doc;
						}
					} catch (parseMessage) {
						throw parseMessage;
					} finally {
						complete(status.code, status.message, responses, allResponseHeaders);
					}
				};

				// set an empty handler for 'onprogress' so requests don't get aborted
				xdr.onprogress = function() {};
				xdr.onerror = function() {
					complete(500, 'error', {
						text: xdr.responseText
					});
				};

				if (userOptions.data) {
					postData = ($.type(userOptions.data) === 'string') ? userOptions.data : $.param(userOptions.data);
				}
				xdr.open(options.type, options.url);
				xdr.send(postData);
			},
			abort: function() {
				if (xdr) {
					xdr.abort();
				}
			}
		};
	});
}));
/*!
 * kohls.base.js
 * Base framework library
 * Author: Bill Hubbard
 */

/*
	Base is intended to be packaged with foundation or framework module
	and is technically not a module, as its function is to provide some
	extensions to the core to complete the base core library.
	The core does not (and must not) rely on jQuery, as jQuery may not
	be available to the core, but jQuery is loaded before base, as both 
	are part of the foundation library, so jQuery is available here. 
 */

$module('base', function(log, env, module, Kjs) {

	// Kohl's-specific check for home page, which is served from WCS
	//[*] Remove this after home page is converted to use $requires, or specify reload: true in home page $requires
	if (!$env.page && (location.pathname == '/' || location.pathname == '/home.jsp')) {
		$env.page = 'homePage';
		$requires('homepage', {isPreloaded: true});	
	}
	
	// If jQuery is undefined, there will be some exceptions in here...
	(function($) {
		// Capture jQuery reference in case other code calls jQuery.noConflict(true)
		$env.jQuery = $;
		
		// ----- jQuery extensions -----
	
		// $().replaceWith(sel)
		// Replaces selected element with specified element
		$.fn.replaceWith = $.fn.replaceWith || function(o) { return this.after(o).remove(); };
	
		// $().container(sel)
		// Locates the container of the current element, or the element itself, that
		// matches the selector sel
		$.fn.container = $.fn.container || function(sel) {
		    return ($(this).is(sel)) ? $(this) : $(this).parent(sel);
		};

		// $.$(sel)
		// If an id selector contains special characters that are part of the id
		// and not the selector, this will escape those characters to create a
		// selector that will select an element with the special id.
		// Special characters recognized: %, :, @, /, ~, ^
		$.$ = $.$ || function(sel) { return sel.replace(/([%:@\/~^])/g,'\\$1'); };
	
		// Select using a selector containing some special characters
		Kjs.global.$$ = function(sel) {
			return $($.$(sel));
		};

		// Convenient for serializing forms to a JS POJO
		$.fn.serializeObject = $.fn.serializeObject || function() {
			var fields = {};
			$.map(this.serializeArray(), function(item, idx) { fields[item.name] = item.value; });
			return fields;
		};
	
		// ----- Page unload -----
		// The ready handler in the core is not dependent on jQuery, so
		// is already installed, but page unload uses jQuery, so page unload
		// handler is installed here.
	
		var
			// Perform unload tasks
			_doUnload = function() {
				// de-install unload handlers (forward references are available through hoisting)
				$(Kjs.global).off('unload', _onUnload);
				$(Kjs.global).off('beforeunload', _onBeforeUnload);
				Kjs.unload();
			},
	
			// beforeUnload is required for use by Chrome/Safari, but causes
			// problems in IE, so conditional checks are now performed to
			// delegate unload operations appropriately among browsers.
			_onBeforeUnload = function() {
				if ($.browser.safari||$.browser.webkit) {
					_onBeforeUnload.done = true;
					// Defer actual call to avoid blocking inside beforeunload handler
					Kjs._(function() {
						_doUnload();
					});
				}
			},
		
			// Chrome/Safari have problems with onUnload, so code is done
			// in onBeforeUnload for those browsers
			_onUnload = function() {
				if (!_onBeforeUnload.done || !($.browser.safari||$.browser.webkit)) {
					_doUnload();
				}
			}
		;
	
		// Install unload handlers
		$(Kjs.global).on('unload', _onUnload);
		$(Kjs.global).on('beforeunload', _onBeforeUnload);
	
	})(Kjs.global.jQuery);
	
	// ----- Ad-hoc extensions to core -----

	Kjs.extend(Kjs, {
		//[*] Maybe define some browser/environment flags here
		//isiPad: (navigator.userAgent.match(/iPad/i) != null);
		
		// Takes a hash string (typically from location.hash) and converts it to a
		// JavaScript object.
		// hash = Hash string, beginning with '#' - default = location.hash
		fromHash: function(hash) {
			hash = (hash||location.hash).replace(/^\#/,'');
			var 
				obj = {}, 
				bool = {'true': true, 'false': false},
				val
			;
			hash = hash.split('&');
			for (var i=0; i<hash.length; i++) {
				val = hash[i].split('=');
				obj[val[0]] = $v(val[1]);
			}
			return obj;
		},

		// Takes a JavaScript object and encodes it into a hash string for targeted URLs.
		toHash: function(obj) {
			var hash = [];
			for (var p in obj) if (obj.hasOwnProperty(p)) {
				hash.push(p + '=' + obj[p]);
			}
			return '#' + hash.join('&');
		},
		
		www: function(url) {
			Kjs._(function() {
				location.href = url;
			});
		}
	});
	
	// Check to see if jQuery has been loaded multiple times.
	// This assumes jQuery is loaded and does not check for its absence
	$init(function _$init_base($) {
		var 
			j1 = $env.jQuery1||$,
			j2 = $env.jQuery||$,
			j3 = Kjs.global.jQuery||$,
			ok
		;
		// Check if jQuery was loaded only once.
		ok = (j1 == j2) && (j2 == j3) && (j3 == $);
		// If $env.jQuery1 then jQuery was loaded before core
		// If $env.jQuery1 != $env.jQuery then jQuery was loaded between core and foundation
		// If jQuery != $ then jQuery was loaded after foundation
		if (!ok) {
			log.error('Multiple instances of jQuery are loaded on the page!');
		}
		delete $env.jQuery1;
	}, {
		isPreInit: true,
		inQueue: true
	});
	
	return true;
});

// ---- End of kohls.base.js ----
/*!
 * kohls.resolver.js
 * Variable expression resolver
 * Author: Bill Hubbard
 */

/*
	TODO:
	- Private resolvers - what remains for this? I think just to find a way to consolidate redundant code
	  to make Kjs.resolver stand as a singleton that is also capable of providing private instances, as it
	  does now, but with cleaner code. Refer to Kjs.log (in kohls.core.js) as an example of this pattern.
	- Add support for number and date formatting when converting to string
	- Add support for progressive resolve in variable expressions (varVal) - "${presence.status|presence.show}"
	    Equivalent to x = presence.status||presence.show
*/

$module('resolver', function(log, env, module, Kjs) {
	var
		j$ = Kjs.global.jQuery,

		slice = Array.prototype.slice,

		// Discrete terminal values
		$terminal = {
			'true': {value: true},
			'false': {value: false},
			'null': {value: null},
			'NaN': {value: NaN},
			'Infinity': {value: Infinity},
			'undefined': {value: undefined}
		},

		_cfg = {
			fixValues: !!Kjs.env('fixValues')	// Some hosts incorrectly specify JSON with boolean and numbers as strings - set this true in that case
		},

		// Private resolver registry
		resolvers = {},

		// Globally available context
		$ = (function() {
			var $ = {};
			$[$env.namespace] = Kjs;
			return Kjs.extend($, {
				// Access to select global namespaces
				$env: $env,
				// Inverts a truthy/falsey/Boolean value
				$not: function _$not(val) {
					return !val;
				},
				// Compares two values for equality (truthy/falsey)
				$eq: function _$eq(val1, val2) {
					return val1 == val2;
				},
				// Compares two values for inequality (truthy/falsey)
				$neq: function _$eq(val1, val2) {
					return val1 != val2;
				},
				// Tests to see if all values are true (AND)
				// Accepts any number of params (truthy/falsey)
				$and: function _$and() {
					var
						args = slice.call(arguments),
						len = args.length, i,
						rtn = true
					;
					for (i=0; rtn && i<len; i++) {
						rtn = rtn && args[i];
					}
					return !!rtn;
				},
				// Tests to see if any value is true (OR)
				// Accepts any number of params (truthy/falsey)
				$or: function _$or() {
					var
						args = slice.call(arguments),
						len = args.length, i,
						rtn = false
					;
					for (i=0;!rtn && i<len;i++) {
						rtn = rtn || args[i];
					}
					return !!rtn;
				},
				// Tests to see if not all values are the same (XOR)
				// Accepts any number of params
				$xor: function _$xor() {
					var
						args = slice.call(arguments),
						len = args.length, i,
						rtn = true,
						ref = !!args[0]
					;
					for (i=0; rtn && i<len; i++) {
						rtn = rtn && ref === !!args[i];
					}
					return !rtn;
				},
				// Tests a bit by bit number to see if set
				// ${$bit(value, 3)}
				$bit: function _$bit(val, bitNum) {
					return (val||0) & (1<<(bitNum||0));
				},
				// Tests bit(s) by bit mask
				// Used by itself it may act as boolean 
				// ${$bits(ERRORS, $K.errRXFIFO)}
				// Can be used in $eq to check for specific result
				// ${$eq($bit(ENV, $K.envBAUD), 0x03)}
				$bits: function _$bits(val, mask) {
					return (val||0) & (mask||0);
				},
				
				// The following are provided since nested expressions are not
				// supported by the resolver, yet, otherwise they could be
				// achieved through use of $not, such as $not($and(...))
				
				// Tests to see if any value is false (NAND)
				// Accepts any number of params (truthy/falsey)
				$nand: function _$nand() {
					var
						args = slice.call(arguments),
						len = args.length, i,
						rtn = true
					;
					for (i=0;rtn && i<len;i++) {
						rtn = rtn && args[i];
					}
					return !rtn;
				},
				// Tests to see if all values are false (NOR)
				// Accepts any number of params (truthy/falsey)
				$nor: function _$nor() {
					var
						args = slice.call(arguments),
						len = args.length, i,
						rtn = false
					;
					for (i=0;!rtn && i<len;i++) {
						rtn = rtn || !args[i];
					}
					return !!rtn;
				},
				// Tests a bit by bit number to see if clear (not set)
				// ${$bit(value, 3)}
				$nobit: function _$nobit(val, bitNum) {
					return !((val||0) & (1<<(bitNum||0)));
				},
				// Until resolver can handle nested expressions, this is here
				// to test if bits are NOT set
				$nobits: function _$nobits(val, mask) {
					return !((val||0) & (mask||0));
				},
				// Resolve truthy/falsey value to Boolean
				$bool: function _$bool(val) {
					return !!val;
				},
				// Pluralizes a label if n is not equal to 1
				// Default suffix is 's'.  If 'ies' is specified, the label is
				// checked to see if it ends in 'y', and if so, replaces the 'y' with 'ies'.
				// English language only. 
				// Returns the pluralized label string.
				$plural: function _$plural(label, n, suffix) {
					suffix = suffix||'s';	// Default = 's' - override could be 'ies' 
					var rtn = label;
					if (n != 1) {
						if (suffix == 'ies' && rtn.match(/y$/)) {
							rtn = rtn.replace(/y$/, suffix);
						} else {
							rtn = rtn + suffix;
						}
					} 
					return rtn;
				},
				// Returns a numeric value as a string, rounded to the nearest specified decimal places
				$fixed: function _$fixed(num, decimals) {
					num = (+num);
					return num.toFixed ? num.toFixed(decimals) : num;
				}
			});
		})(),

		// Current context to resolve against
		_context = {},

		_terminal = function(val) {
			val = $terminal[val]||{value: val};
			// Unconditionally convert strings to Boolean or number values, if they are such.
			// WARNING: (+val) returns 0 instead of NaN for empty strings or whitespace-only strings!
			if (typeof val.value == 'string' && j$.trim(val.value) !== '') {
				val.value = isNaN(+val.value) ? val.value : (+val.value);
			}
			return val.value;
		},
		
		_resolve,

		_resolveOld = function(s) {
			try{
				var
					val = _context,
					prev = val,
					exp = /\(.*?\)|\[.*?\]/g,	//[*] No support for nested expressions
					expr = s.match(exp),		// List of function or array expressions
					bool = {'false': false, 'true': true},
					props, len, prop, ftn, params
				;
				s = s.replace(exp, '.%');	// ftn(x) -> ftn.%, array[i] -> array.%
				props = s.split('.');
				len = props.length;
				while (len--) {
					prop = j$.trim(props.shift());
					if (prop=='%') {
						prop = expr.shift();
						ftn = prop[0] == '(';
						prop = prop.substr(1, prop.length-2);
						params = [];
						j$.each(prop.split(','), function(i, prop) {
							var val;
							prop = j$.trim(prop);
							// If prop is a number, accept it as numeric literal
							if (prop && isNaN(+prop)) {
								// Else if prop is a literal string, take the string verbatim, minus the quotes
								if (prop.match(/^[\'\"].*[\'\"]$/)) {
									prop = prop.substr(1, prop.length-2);
								} else {
									// Else resolve the value in the original context
									val = $terminal[prop];
									if (val) {
										prop = val.value;
									} else {
										prop = _tval(_resolve(prop));
									}
								}
							}
							params.push(prop);
						});
						// If an invocation and val is a function, invoke it with expression result as parameter
						if (ftn) {
							if (typeof val=='function') {
								val = val.apply(prev, params);
							}
						} else {
							while (params.length) {
								val = (val||{})[params.shift()];
							}
						}
					} else { // prop != '%'
						prev = val;
						val = (val||{})[prop];
					}
				}
				// Convert to boolean or number if _cfg.fixValues is true and value is a string
				// WARNING: (+val) returns 0 instead of NaN for empty strings or whitespace-only strings! So much for elegant code...
				if (_cfg.fixValues && typeof val == 'string') {
					val = (bool[val] !== undefined) ? bool[val] : ((val === '')||isNaN(+val)) ? val : (+val);
				}
				return val;
			} catch(e){
				log.debug('Unable to resolve named variable reference: '+name+' - ['+e.message+']');
				return undefined;
			}
		},

		/**
		 * Resolves a variable name to its raw value.
		 * Variable name may include array syntax or function (array[i] or ftn(x))
		 * invocation syntax, in which case the index or function
		 * params will be resolved as a variable expression.
		 * Automatic intermediate function invocation (a la terminal
		 * value resolution) is not supported - in other words,
		 * "obj.ftn.prop" will not invoke ftn if it is a function,
		 * but will treat it as an object in an attempt to resolve prop.
		 * Specify explicit invocation to invoke the function, such as
		 * "obj.ftn().prop".
		 * _resolve operates in the context of the computed context _context,
		 * and the calling context (this) is ignored
		 * s = string to resolve as a variable/property reference
		 * Multi-dimensional arrays or nested maps are supported with
		 * comma syntax: 'val[2,3]' is resolved as val[2][3], for example.
		 * 'cities["CA","San Francisco"]' is resolved as cities['CA']['San Francisco']
		 *
		 * Note that _resolve returns raw values. However, any expression within the
		 * main expression are resolved to their terminal values in pursuit of the
		 * ultimate targeted raw value.
		 */
		_resolveNew = (function() {
			var
				_sub = {},
				_idx = 0,

				// Replace in s, the orig(inal) string a marker for the given expr(ession)
				mark = function(s, orig, expr) {
					expr = expr||orig.substr(1, orig.length-2);
					var marker = '%'+(_idx++);				// Mark expression
					_sub[marker] = {							// Register expression
						ftn: orig[0] == '(',				// Is it a function call?
						expr: expr							// Expression
					};
					return s.replace(orig, '.'+marker);		// Tag parameter expression placeholder
				},

				// Reduce the expression down to simple chunks
				reduce = function(exp) {
					var
						narrow = /\(.*?\)|\[.*?\]/g,
						wide = /\(.*\)|\[.*\]/g,
						open =  /^\(.*\(/,
						exprs = exp.match(narrow)||[],		// Look for param expressions
						len = exprs.length,					// How many
						nest = false,						// No nesting, by default
						i, isNest, expr, str
					;
					if (len) {
						for (i=0; i<len; i++) {				// For each expression found...
							expr = exprs[i];				// Get expression
							str = expr.substr(1, expr.length-2);
							isNest = !!expr.match(open);	// Determine if it is nested
							nest |= isNest;					// Record that a nested expression was encountered
							if (!isNest) {					// If not nested...
								exp = mark(exp, expr, reduce(str));		// Record expression and replace with placeholder marker
							}
						}


						if (nest) {							// If nested expression was encountered
							exprs = exp.match(wide)||[];	// Work from the outside in 
							for (i=0, len=exprs.length; i<len; i++) {
								expr = exprs[i];
								str = reduce(expr.substr(1,expr.length-2));
								exp = mark(exp, expr, str); //exp.replace(expr, str);
							}
						}
					}
					return exp;
				},

				// Perform the actual (raw) value resolution.
				resolve = function(s) {
					var
						bool = {'false': false, 'true': true},
						val = _context,
						prev = val,
						props = s.split('.'), 
						len = props.length,
						i, expr, p, plen, prop, pval, params
					;
					for (i=0; i<len; i++) {
						prop = props[i];
						expr = _sub[prop];
						if (!expr) {
							prev = val;
							val = (val||{})[prop];
						} else {
							params = expr.expr.split(',');
							for (p=0, plen=params.length; p<plen; p++) {
								prop = j$.trim(params[p]); // prop is a string, so !pop is empty string
								// If prop is a number, accept it as numeric literal
								if (prop && isNaN(+prop)) {
									// Else if prop is a literal string, take the string verbatim, minus the quotes
									if (prop.match(/^[\'\"].*[\'\"]$/)) {
										prop = prop.substr(1, prop.length-2);
									} else {
										// Else resolve the value in the original context
										pval = $terminal[prop];
										if (pval) {
											prop = pval.value;
										} else {
											prop = _tval(resolve(prop)); // Performs terminal value resolution
										}
									}
								} else {
									prop = isNaN(+prop) ? prop : (+prop);
								}
								params[p] = prop;
							}
							if (expr.ftn) {
								if (typeof val=='function') {
									val = val.apply(prev, params);
								} else {
									/*jsl:pass*/
									//[*] Error - bad expression - not a function
								}
							} else {
								while (params.length) {
									val = (val||{})[params.shift()];
								}
							}
						}				
					}
					// Unconditionally convert strings to Boolean or number values, if they are such.
					// WARNING: (+val) returns 0 instead of NaN for empty strings or whitespace-only strings!
					if (typeof val == 'string' && j$.trim(val) !== '') {
						val = (bool[val] !== undefined) ? bool[val] : (isNaN(+val) ? val : (+val));
					}
					return val;
				}
			;
			
			return function(s) {
				_sub = {};
				_idx = 0;
				s = reduce(j$.trim(s));
				return resolve(s);
			};

		})(),

		/**
		 * @private
		 * Converts a terminal value to a string
		 * If the terminal value is not natively a string, it is converted
		 * to a string.
		 * Objects are converted by calling their toString method and
		 * recursing to resolve any variable expressions.
		 * undefined and null are converted to empty string.
		 * All other values are converted to text equivalent.
		 */
		_s = function(val) {
			if (typeof val != 'string') {
				if (val===undefined||val===null) {
					val = '';
				} else if (typeof val == 'object') {
					val = _sval(val.toString());
				} else {
					val = val + ''; //[*] For numbers & dates, consider formatting options from $env
				}
			}
			return val;
		},

		/**
		 * @private
		 * Converts a terminal value to an object. If the terminal value
		 * is not natively an object, an object is returned with a single
		 * property, "value", defined that carries the native terminal value.
		 */
		_o = function(val) {
			return (typeof val == 'object') ? val||{} : {value: val};
		},

		// Return terminal value, translating any variable expression(s)
		// Global context assumed if not specified [*] Default to "this"? May be too unpredictable
		_varVal = function(s) {
			var exprs, expr, name, len, i, val, max=100, ok=true;
			while (ok && typeof s == 'string' && (exprs = s.match(/\$\{.*?\}/g))) {
				for (len=exprs.length, i=0; i<len; i++) {
					expr = exprs[i];
					name = expr.match(/\{(.*)\}/)[1];
					val = _resolve(name);
					while (typeof val == 'function') {
						val = val.apply(_context, []);
					}
					s = (expr == s) ? val : s.replace(expr, _s(val)); // Absolute truth: if (expr == s) then len == 1
				}
//					for (len=exprs.length, i=0; i<len; i++) {
//						expr = exprs[i];
//						if (typeof s == 'string' && s.match('\\'+expr)) {
//							log.warn('Variable expression will result in endless resolve for '+expr);
//							ok = false;
//							break;
//						}
//					}
				// Test for endless resolve was too restrictive. Consider this use case:
				// data = {fname: 'John', lname: 'Doe', fullname: '${fname} ${lname}'};
				// s = '${fname} = ${fullname}';
				// First pass will resolve to 'John, ${fname} ${lname}'
				// so it sees ${fname} and assumes endless resolve, since it already resolved that once.
				// Instead of checking this way, a set limit is set on iterations to abort after
				// too many resolves (100). This imposes a limit, which I wanted to avoid, so perhaps
				// there is a more sophisticated way to check for endless resolve.
				ok = !!max--;
				if (!ok) {
					log.warn('Iteration limit exceeded - possible endless resolve for expression: ' + s, s);
				}
			}
			// Translate terminals like '#true', '#null', etc., if present
			return _terminal(s);
		},

		// Returns a terminal value of a given value or expression. If a string,
		// any number of variable expressions may be present and are resolved.
		// If a single variable expression is specified, the return value will be
		// in the native data type of the terminal value. Otherwise, multiple variable
		// expressions, or a variable expression accompanied by additional characters
		// (even whitespace) will resolve to a string.
		// val = value to evaluate.
		// _tval operates in the context of the computed context _context, and the
		// calling context (this) is ignored.
		_tval = function(val) {
			while (typeof val == 'function') {
				val = val.call(_context);
			}
			if (typeof val == 'string') {
				val = _varVal(val);
			}
			return val;
		},

		// Returns a terminal value as a string
		// val = value to evaluate.
		// _sval operates in the context of the computed context _context, and the
		// calling context (this) is ignored.
		_sval = function(val) {
			return _s(_tval(val));
		},

		// Returns a terminal value as an object
		// val = value to evaluate.
		// _tval operates in the context of the computed context _context, and the
		// calling context (this) is ignored.
		_oval = function(val) {
			return _o(_tval(val));
		},

		// Sets current context
		//[*] The "this" context is preserved from the resolver entry point
		//    to here to support context resolution if context is a function, (not currently supported)
		//    for context would get resolved within the context of the call.
		//    Support for terminal value resolution on context has not yet been
		//    added, and it may never be. (i.e. context must not be a function)
		// key = for private resolvers, names a property unique to the resolver
		//       to which additional statics/data are applied.
		// data = for private resolvers, the additional statics/data to be applied.
		_enterContext = function(context, key, data) {
			_context = Kjs.object(context, $, {
			//	$: $,
				'^': _context
			});
			// If data and/or key is defined, apply data to context.
			if (data) {
				if (key === undefined) {
					// Apply data directly to context
					Kjs.extend(_context, data);
				} else {
					// Apply data to key property on context
					//[*] If _context[key] exists, log a warning? This would appear for every resolve...
					_context[key] = data;
				}
			}
		},

		// Exits context level to parent context
		_exitContext = function() {
			_context = _context['^'];
		},

		// Calls specified function (within its own context if it includes
		// a binding, otherwise I believe it carries the global context)
		// after computing current _context using specified context, to
		// resolve value val to its eventual value (determined by fn) which
		// is returned as the function result.
		// In other words, it's a wrapper to call the specified function fn
		// in a context needed to resolve any variable expressions val may carry.
		// Summary:
		// Establishes computed context and invokes the specified resolve
		// function, then restores context and returns result from resolve.
		// Supports nested calls.
		// fn = the function to be invoked
		// val = value to resolve
		// context = context object to be used as resolution context
		_val = function(fn, val, context) {
			_enterContext.call(this, context);
			var rtn = fn(val);
			_exitContext();
			return rtn;
		},

		// _val wrapper to perform raw value resolve from string
		// Variable expressions are not supported - this is for single variable resolve, only.
		_$r = function(s, context) {
			return _val.call(this, _resolve, s, context);
		},

		// _val wrapper to perform terminal value resolve from a value
		_$v = function(val, context) {
			return _val.call(this, _tval, val, context);
		},

		// _val wrapper to perform terminal string value resolve from a value
		_$s = function(val, context) {
			return _val.call(this, _sval, val, context);
		},

		// _val wrapper to perform terminal object value resolve from a value
		_$o = function(val, context) {
			return _val.call(this, _oval, val, context);
		},

		// Resolves all the properties on a specified object within the given
		// context.  _derive runs deep, and treats function properties as
		// values (they are not invoked).  Therefore, the assumption is that obj 
		// is a data-only object (entity) with no methods.
		// obj = object for which to resolve properties
		// context = context in which to perform resolve. If not specified, the
		// object obj, itself, will serve as its own context (useful for
		// establishing statically computed properties).
		// If a property of obj is an object, itself, that object will get
		// resolved in the context of itself. [*] Should it be context, instead?
		_derive = function(obj, context) {
			context = context||obj;
			var rtn={}, prop;
			for (var p in obj) if (obj.hasOwnProperty(p)) {
				prop = obj[p];
				if (typeof prop == 'object' && prop !== null) {
					if (prop.constructor == Object) { // Might want to include Functions here
						rtn[p] = _derive.call(this, prop);
					} else { // Function, Array, Date, RegExp - anything that does not have Object as base
						rtn[p] = prop;
					}
				} else if (typeof prop != 'function') {
					rtn[p] = _$v.call(this, prop, context);
				} else {
					rtn[p] = prop;
				}
			}
			return rtn;
		},

		// Extends resolver's data
		_data = function(data) {
			return Kjs.extend($, data);
		},

		// "undefault"
		// Checks a string against a default value and returns the string if
		// it does NOT match the default, otherwise it returns an empty string
		// if it DOES match the default.  Basically, the net effect is to
		// remove a default value from a string (typically for easy comparison,
		// to treat the default as a falsey condition).
		_$u = function(s, def) {
			return (s == def) ? '' : s;
		},

		// Truth value
		// Selects the value of s1 or s2 that is not empty and does not
		// match the default value. If both s1 and s2 are either empty or
		// match the default value, the default value is returned.
		_$t = function(s1, s2, def) {
			return _$u(s1, def)||_$u(s2, def)||def;
		},

		// Constructor for new private resolver
		_newResolver = function(id, key) {
			var
				_ = {},
				_key = key,
				_val = function(fn, val, data) {
					_enterContext.call(this, data, _key, _);
					var rtn = fn(val);
					_exitContext();
					return rtn;
				},
				_$r = function $r(s, context) {
					return _val.call(this, _resolve, s, context);
				},
				_$v = function $v(val, context) {
					return _val.call(this, _tval, val, context);
				},
				_$s = function $s(val, context) {
					return _val.call(this, _sval, val, context);
				},
				_$o = function $o(val, context) {
					return _val.call(this, _oval, val, context);
				},
				_derive = function(obj, context) {
					context = context||obj;
					var rtn={}, prop;
					for (var p in obj) if (obj.hasOwnProperty(p)) {
						prop = obj[p];
						if (typeof prop=='object' && prop!==null) {
							if (prop.constructor==Object) {
								rtn[p] = _derive.call(this, prop);
							} else {
								rtn[p] = prop;
							}
						} else if (typeof prop != 'function') {
							rtn[p] = _$v.call(this, prop, context);
						} else {
							rtn[p] = prop;
						}
					}
					return rtn;
				},
				_data = function(data) {
					return Kjs.extend(_, data);
				}
			;
			return {
				// Instance references
				id: id,
				val: _val,
				$r: _$r,
				$v: _$v,
				$s: _$s,
				$o: _$o,
				derive: _derive,
				data: _data
			};
		},

		$resolver = function(id, key, data) {
			var
				resolver = resolvers[id]
			;
			if (!resolver) {
				resolver = _newResolver(id, key);
				resolvers[id] = resolver;
			}
			resolver.data(data);
			return resolver;
		}
	;
	
	_resolve = _resolveNew;

	Kjs.extend($resolver, {
		cfg: _cfg,
		val: _val,
		$r: _$r,
		$v: _$v,
		$s: _$s,
		$o: _$o,
		derive: _derive,
		data: _data,
		$u: _$u,
		$t: _$t,
		useNew: function(use) {
			if (use) {
				_resolve = _resolveNew;
			} else {
				_resolve = _resolveOld;
			}
		}
	});
	
	Kjs.globalDef('$r', $resolver.$r);	// Raw value resolver
	Kjs.globalDef('$v', $resolver.$v);	// Terminal value expression resolver
	Kjs.globalDef('$s', $resolver.$s);	// String value expression resolver
	Kjs.globalDef('$o', $resolver.$o);	// Object value expression resolver
	//	Kjs.globalDef('$u', $resolver.$u);	// Undefault
	//	Kjs.globalDef('$t', $resolver.$t);	// Truth undefault
	
	return $resolver;
});


// ---- End of kohls.resolver.js ----
/*!
 * kohls.errors.js
 * Error log
 * Author: Bill Hubbard
 */

// ***** Depends on jQuery *****
// Therefore, this must be part of foundation, not core

/*
 	TODO
 	- jQuery supports multiple error handlers, but the global Ajax error handler here recognizes only one.
 */

/*
 * The error log utility acts to centralize the detection and capture
 * of exceptions that occur in JavaScript, either due to coding issues,
 * or in the event of Ajax request failures.  A mechanism is also
 * provided to allow application code to mark an Ajax failure as handled,
 * if an error is handled gracefully in an Ajax error handler.
 * 
 * IMPORTANT NOTE: If an exception occurs within an Ajax success, error or
 * complete handler, this will prevent the global Ajax handlers from 
 * running (particularly, complete), which means any $sync hold will
 * remain in effect, and $ready will never fire. Any exception in a
 * beforeStart handler will not suffer this condition, as $sync has not
 * been called, yet.
 * Exceptions are also not thrown up to the $init try-catch block, because
 * they are asynchronous, and the $init handler has already exited, so it
 * can be difficult to determine where the operation originated, although
 * the location of the actual error can be found, easily.
 * 
 * JavaScript exceptions that occur in code are captured through the
 * window.onerror event.
 * Ajax errors are captured through the use of global handlers assigned
 * to the error response path. A side-benefit of this utility is that it
 * provides generic support for $sync in all Ajax operations.
 * 
 * The error log is a central repository for all logged messages as
 * well, so an API is provided to allow the logger to add messages to the
 * error log. A get method is provided to extract a collection of messages
 * from the log, based on simple filtering criteria.
 * 
 * External utilities can plug into the error log functionality to
 * receive messages that are written to the log, and act as an intercept
 * to prevent messages from accumulating into the central error log, or
 * allow them through.
 * 
 *  This defines the remainder of the Kjs.errors public API.
 *  
 *  The full errors API includes:
 *    - Kjs.errors(api, isPrivate)
 *    - Kjs.errors.add(entry)
 *    - Kjs.errors.log(logId, level, msg, dump)
 *    - Kjs.errors.get(filter, del)
 *    
 *  Error log entries:
 *  	Ajax errors:
 *  		logId - Reporter ID ('errors')
 *  		type - Ajax message type = _.K.AJAX_TYPE
 *  		level - Error level object {level, nLevel}
 *  		msg - statusText from response
 *  		code - Error code from response/exception
 *  		url - URL of Ajax request
 *  
 *  	Windows error:
 *  		logId - Reporter ID ('errors')
 *  		type - Code error type = _.K.CODE_TYPE
 *  		level - Error level object {level, nLevel} = $log.error
 *  		msg - Error message text
 *  		url - URL of script file
 *  		line - Line number within file
 *			column - Column number
 *			errorObj - Error object
 *
 *		Log entry:
 *			logId - Logger name
 *			type - Log entry type = _.K.LOG
 *			level - Error level object {level, nLevel} from logger
 *			msg - Log message text
 *			dump - Additional object for property dump
 *
 * TODO:
 * 		- See about installing window.onerror via browser API, if there is one
 * 		- Restore window.onerror on page unload
 * 		- Define $env configuration properties to control logging (enables, limits, etc.)
 * 		- Implement callback/event (messaging?) for notifying error log events - support filtered events
 * 
 * Known Issues:
 * 		- It is not possible to get exception details from scripts served from a CDN
 * 			without jumping through some hoops to enable CORS.
 * 			See: http://danlimerick.wordpress.com/2014/01/18/how-to-catch-javascript-errors-with-window-onerror-even-on-chrome-and-firefox/
 * 
 */

/*
	This module pattern is a little different, because the Kjs.errors object
	is created in core. The primary API for Kjs.errors provides a means of extending
	the Kjs.errors object as well as adding private methods. This is done by managing
	an internal private variable, "_", to contain all the private properties and
	methods (rather than directly in the scope), and providing a reference to this
	variable as the context to each of the methods, so that "_" becomes "this" for
	all methods. Private methods are defined as a property to "_" and public methods
	are also defined on "_" but are exposed on Kjs.errors. This way, all methods are
	accessible, internally, through the "this" context of the method invocations.
	The private "_" variable is never exposed, directly, so is only available through
	the methods. 
	
	The call to $module also is passed a third parameter to specify redefine: true
	if the module has not been fully defined. It is partially defined in kohls.core.js,
	and comes here to be completed as part of foundation.
 */
$module('errors', function(log, env, module, Kjs) {
	var
		// Some convenient references
		_global = Kjs.global,
		_history = Kjs.history,
		_hasLocalStorage = Kjs.hasLocalStorage,
		// Get reference to KJS flags
		_flags = Kjs.init(),
		// Save reference to any global handler already installed
		_savOnError = _global.onerror,
//		sReports = {},
		_keyJQuery = 'jQuery',						// jQuery reference is captured in this property in kohls.base.js in case jQuery.noConflict(true) gets called
		_keyNoAbductJQuery = 'noAbductJQuery',		// Flag to disable abduction of jQuery API to capture ready handlers
		_keyErrorLogApiUrl = 'errorLogApiUrl',		// URL for error logging API
		_keyReportErrors = 'reportErrors',			// Flag to enable reporting errors to the server
		_keySurfaceExceptions = 'surfaceExceptions',// Flag to allow exceptions to propagate out of central handler
		_keyPageName = 'page',						// Name of current page (may be undefined if unknown or WCS)
		_keyReportingLevel = 'reportingLevel',		// Error level for reporting errors to the server
		_keyNoGlobalHandler = 'noGLobalHandler',	// Flag to disable global exception handler
		_keyNoAjaxHandler = 'noAjaxHandler',		// Flag to disable global Ajax exception handler
		
		_lskeyErrorLog = 'errorLog',				// Local storage key for preserving error log
		
		// Entry buffer for reporting errors to server
		// If reporting is disabled, _reporter will simply not get called to add
		// entries, so it does not need to check for the disabled flag, as it will just
		// sit idle, anyway.
		// NOTE: Do not log any messages from in here, or it could create an infinite cascade
		_reporter = (function() {
			var 
				_url = $s(Kjs.env(_keyErrorLogApiUrl)), // Server-side API URL (defined in env.framework.js & env.kjscore.js)
//				_timeout = 5000,	// 5-second timeout before sending -- [*] Make configurable?
				_data,
				_readyDone = false,
//				_t, 
				_inFlight, _unloading,
				
				// Cancel the timeout
//				_cancel = function() {
//					if (_t) {
//						clearTimeout(_t);
//						_t = null;
//					}
//				},

				//[CMDMV-181] Added localStorage support for error log reporting
				// Saves report data to local storage
				// remove = optional parameter, true == remove & clear data
				_saveData = function(remove) {
					if (_hasLocalStorage) {
						if (remove) {
							localStorage.removeItem(_lskeyErrorLog);
						} else {
							try {
								localStorage.setItem(_lskeyErrorLog, JSON.stringify({data: _data}));
							} catch(e) {
								log.error({
									msg: 'Unable to save error reporter data',
									$info: 'Typically due to Script error (CORS), possibly a Firebug bug.',
									$noReport: true
								}, e);
							}
						}
					}
					if (remove) {
						_data = [];
					}
				},
				
				// Returns true if timestamp value is from the current day.
				_fromToday = function(timestamp) {
					var
						dt = new Date(timestamp),
						now = new Date()
					;
					return (dt.getDate() === now.getDate() && dt.getMonth() === now.getMonth() && dt.getYear() === now.getYear());
				},				
				
				// Gets report data from local storage.
				// If not defined in local storage, the entry is created
				_getData = function() {
					var noData;
					try {
						// Initialize local storage
						if (_hasLocalStorage) {
							_data = localStorage.getItem(_lskeyErrorLog)||_data||null;
							noData = !_data;
							_data = (JSON.parse(_data)||{data:[]}).data;
							if (noData) _saveData();
						} else {
							_data = _data||[];
						}
					} catch(e) {
						_data = [];
						log.error('Local storage init failure ', e);
					}
					// Remove entries if they were not created today.
					//[*] Edge case failure: may lose entries across Midnight boundary
					if (_data && _data.length && !_fromToday(_data[0].t)) {
						_data = [];
						_saveData();
					}
					// Mark retrieved entries as stale
					for (var i=0, len=_data.length; i<len; i++) {
						_data[i].stale = true;
					}
					return _data; // It's in the outer scope, but returning anyway
				},

				// This is the central function to filter out any known errors that do not 
				// need to be reported to the server. [BNS-1257]
				//[*] This will contain Kohl's-specific messages
				_filter = function(entry) {
					// TODO
				},
				
				// Add trJsonData, if available [PEAKV-161] [*] This is a Kohl's-specific addition
				_getTrJsonData = function() {
					if (!_global.trJsonData) return {};
					return {orderId: (trJsonData.orderInformation||{}).orderId||'---unknown---'};
/*						
					try {
						var 
							data = Kjs.object(_global.trJsonData),
							censored = '---nolog---'
						;
						Kjs.extend(data.billngAddress, {
							address1: censored,
							creditCardPGs: censored,
							email: censored,
							lastName: censored,
							phoneNumber: censored
						});
						Kjs.extend(data.orderInformation, {
							creditCardPGs: censored,
							giftCardPGs: censored,
							kohlsCashPGs: censored
						});
						Kjs.extend(data.orderSummary, {
							creditCardPGs: censored,
							giftCardPGs: censored,
							kohlsCashPGs: censored
						});
						data.paymentGroups = censored;
						data.shippingAddresses = censored;
						(data.userData||{}).email = censored;
					} catch(e) {
						data = {
							error: e.message,
							msg: 'Error in collecting trJsonData for error report'
						};
					}
					return {checkoutJsonData: data};
*/
				},
				
				// Produce the entry to be sent to the server
				_entry = function(entry) {
					return Kjs.extend({
						pageName: Kjs.env(_keyPageName)||'',
						pageUrl: location.href,
						time: entry.t,
						type: entry.type,
						logId: entry.logId,
						level: entry.level.level,
						msg: entry.msg,
						info: entry.info||'',
						url: entry.url||'',
						statusText: entry.statusText||'',
						code: entry.code||0,
						errMsg: entry.errMsg||'',
						errCode: entry.errCode||0,
						errName: entry.errName||'',
						stale: !!entry.stale,
						noReport: !!entry.noReport
					}, 
						//[*] [BNS-1257] clientInfo is added to clientInfo property in the reporter send method.
						//           Is there some need to also include it directly on the entry, here?
					//	(Kjs.clientInfo) ? Kjs.clientInfo() : {},	// Add client info if available [PEAKV-119]
						_getTrJsonData() // [PEAKV-161] [*] This is a Kohl's-specific addition
					);
				},
				
				// Send the data, if any
				_send = function() {
//					_cancel();
					var 
						data = [].concat(_data),	// Get copy of data queue
						len = data.length,
						entry
					;
					
					// Obtain URL for posting the data
					_url = _url||$s(Kjs.env(_keyErrorLogApiUrl));

					// Purge _data queue
					_saveData(true);

					// [PEAKV-119]
					// Add client info to the entries if it does not already exist
					// Kjs.clientInfo module is loaded along with foundation, so it is
					// not present during core load, thus cannot be included with each entry
					// at the time an entry is created (in early init).
					// So, instead, any entries without it are updated here.
					// Added errorInfo [BNS-1163]
					// [BNS-1257] clientInfo and errorInfo are now applied to a shadow copy of
					// the entries so the info is not carried in the history log. The info is
					// added only at the time the entries are transmitted. Any history log viewer
					// (such as the client debug tool) will need to add this information as well
					// before displaying it. In either case, the entry in the log should not be
					// affected.
					while (len--) {
						entry = _entry(data[len]); // Shadow copy so entries do not get updated in the history log
						_filter(entry);
						if (!entry.noReport) {
							if (Kjs.clientInfo) entry.clientInfo = Kjs.clientInfo();
							if (Kjs.errorInfo) Kjs.errorInfo(entry);
						}
						if (entry.noReport) {
							data.splice(len,1);
						} else {
							data[len] = entry;
						}
					}
					
					if (data.length && _url) {
						Kjs.stamp('report');
						// Call API to send data to server: {data: _data}
						// inFlight = true
						// complete: inFlight = false
						// Kjs._(_send);
						try {
							_inFlight = true;
							$.ajax({
								url: _url,
								global: false,	// Silence global handlers to prevent infinite cascade
								type: 'POST',	//[*] Prior to jQuery 1.9.0 - as of 1.9.0, use method: 'POST'
								method: 'POST', // To catch it in case a later jQuery has been added
								dataType: 'json',
								data: {data: JSON.stringify(data)},
								success: function(data, textStatus, jqXHR) {
									// Nothing to do
								}, 
								error: function(jqXHR, textStatus, errorThrown) {
									// Ignoring any error response
									// Prevent it from getting logged to avoid infinite cascade
									//[*] This code was removed a long time ago, though not sure why (commit 0323375d8b813331c0cd95a20c4c2115df6645ba).
									//    I thought maybe because it referenced $err.handled, which could be undefined
									//    if this was called early, so rewrote to catch the condition. But no time to
									//    explore why it may have been removed, so keeping it removed for now.
//									if (Kjs.errors.handled) {
//										Kjs.errors.handled(jqXHR);
//									}
								},
								complete: function(jqXHR, textStatus) {
									_inFlight = false;
								//[CMDMV-181] Removed to prevent infinite loop
								//	if (!_unloading) {
								//		Kjs._(_send);	// Call again in case entries came while in flight
								//	}
								}
							});
							_data = [];
						} catch(e) {
							//[*] Cannot log error here without generating infinite cascade
							_inFlight = false;
						}
					}
				},
				
				// Reports if an Ajax request is currently in flight to report previous errors
				_isSending = function() {
					return _inFlight;
				},
				
				// _reporter.add
				// Adds an entry to the report data //& resets timer
				// [BNS-1257] The entry is a reference to the entry object that is saved in
				// the history log - not a copy. This is because external code may independently
				// update the entry after being written to the log. The _reporter exposes an
				// update method to allow external code to write the _data queue to local storage
				// following a post-write update.
				_add = function(entry) {
					// Errors during unload will be ignored
					if (!_unloading && _url) {
//						_cancel();
						_data.push(entry);
//						if (_readyDone) {
//							_t = setTimeout(_send, _timeout);
//						}
						_saveData(); // save to local storage [CMDMV-181]
					}
				}
			;
			
			// Initialize reporter data - gets called at load time for earliest opportunity
			_getData();
			
			// Install handler to fire after $ready queue is processed [CMDMV-181] Reinstated
			Kjs.ready(function _$ready_errors_report($) {
				_readyDone = true;
				_send();
			}, {
				isAfterReady: true
			});

			// [CMDMV-181] Removed
			// Will attempt to send any accumulated errors before the page exits.
			//[*] [PEAKV-36]Not sure if this will succeed during page unload
/*
			Kjs.unload(function() {
				_unloading = true;
				_send();
			});
*/			
			return {
				add: _add,				// Add an entry to the reporter buffer
				send: _send,			// Force sending reporter buffer, if populated
				isSending: _isSending	// Indicates if send is already in progress
			};
		})(),

		// This is a fun one. This abducts the jQuery API to capture any document ready
		// handler assignments to wrap our own handler around them to provide a means of
		// capturing exceptions that occur in the ready handlers. This provides an additional
		// level of protection against startup code that could otherwise cause other scripts
		// on the page to fail by aborting the ready queue. In other words, this does not allow
		// the ready queue to be aborted.
		_abductJQuery = function() {
			var 
				// Get a reference to jQuery
				$ = Kjs.env(_keyJQuery) || _global.jQuery,
				// Save original ready API
				_ready = $.fn.ready,
				// Zero the handler counters
				nReady = 0,	// Number of handlers remaining to be called
				nReg = 0,	// Total number of handlers registered
				nCall = 0,	// Count of handlers that were called
				// Define proxy handler to provide try-catch wrapper
				readyProxy = function(context, $) {
					var 
						handler = this,
						pre = (_flags.inJQuery || !_flags.docReady) ? 'Pre-KJS ' : ''
					;
					nReady--;	// Dec pending count
					nCall++;	// Inc call count
					if (log.debug.enabled) log.debug({msg: '${pre}jQuery ready handler #${n} called (${hname})', pre: pre, n: nCall, hname: handler.name||'unnamed'});
					try {
						return handler.call(context, $);
					} catch(e) {
						log.error({msg: 'Exception in ${pre}jQuery handler #${n} (${hname})', pre: pre, n: nCall, hname: handler.name||'unnamed'}, e);
						return $();
					}
					return $(); // Should never get here
				}
			;
			
			Kjs.stamp({id: 'marker', label: 'jQuery abduction'});
			log.info('jQuery abduction');

			// Perform the actual abduction
			// Replaces jQuery's ready function with a function that binds a proxy function
			// around any function provided and forwards the call on to jQuery. If no function
			// is provided, the call is forwarded to jQuery.
			// When jQuery calls its ready handlers, each call will go to the proxy function,
			// which counts the call and invokes the original handler within a try-catch block
			// to prevent any exceptions from aborting subsequent jQuery handlers.
			$.fn.ready = function _$kjsjqueryready(ftn) {
				var
					args = Array.prototype.slice.call(arguments, 1),
					pre = (_flags.inJQuery || !_flags.docReady) ? 'Pre-KJS ' : ''
				;
				// No mishaps - install only a function that is not KJS ready
				if (typeof ftn == 'function' && !ftn.kjsReady) {
					nReady++;
					nReg++;
					log.debug({msg: '${pre}jQuery ready handler #${n} registered (${fname})', pre: pre, n: nReg, fname: ftn.name||'unnamed'});
					ftn = Kjs.bindEx(ftn, readyProxy);	// Wrap our handler around it
					// jQuery has an annoying habit of mixing expectations. If you call
					// $(document).ready(function($) { ... }), the ready handler will get called asynchronously
					// if DOMContentLoaded has not fired, yet. However, if DOMContentLoaded has fired, the ready
					// handler will get called synchronously at the time it is installed!
					// This bit of code ensures the handler will always get called asynchronously. Zero confusion.
					// [BNS-1162] benefits from this, as wishlist.js and registry.js have forward references in
					// their ready handlers.
					if (_flags.docReady) {
						Kjs._(function() {
							_ready.apply(this, [ftn].concat(args));	// Forward to jQuery asynchronously
						});
						return $();
					} else {
						return _ready.apply(this, [ftn].concat(args));	// Forward to jQuery synchronously
					}
				}
				return _ready.apply(this, arguments);
			};
	
			Kjs.unload(function _$unload_kjsjqueryready($) {
				// Restore original jQuery reference - garbage collection does the rest
				$.fn.ready = _ready;
			});
		}
	;

	// String encoding patterns for reporting log entries to the server
//	sReports[Kjs.errors.K.CODE_TYPE] = '${type} ${level.level}: ${msg} in ${url}, line ${line}';
//	sReports[Kjs.errors.K.AJAX_TYPE] = '${type} ${level.level}: ${code}: ${msg} (status = ${statusText}) (${errCode}: ${errMsg}) in ${url}';
//	sReports[Kjs.errors.K.LOG_TYPE] = '${type} [${logId}:${level.level}] ${msg}'; 

	// Abduct jQuery API if not otherwise instructed, prior to fleshing out the remainder of errors API.
	// Note that this can only be disabled from a $env.noAbductJQuery = true setting prior to loading
	// the foundation, since this initializes prior to the earliest $init handler (since $init is driven
	// by jQuery document ready after all the handlers we're trying to catch have already executed).
	// Therefore, it is not a viable option for the client debug tool.
	if (!Kjs.env(_keyNoAbductJQuery)) {
		_abductJQuery();
	}

	// The base error log is defined in the core. The API is fully extended, here.
	// This is to allow for a smaller core.

	// Define private API
	Kjs.errors({

		// @private
		// Compares two objects to determine if all the properties
		// specified in the filter object match corresponding properties
		// in object obj.  The filter object typically specifies a subset
		// (usually one or two) properties that are expected to be found in
		// obj.  Returns true if all the properties in filter match properties
		// of the same name in obj.
		//
		// Some special properties are treated differently if they appear
		// in the filter object:
		//
		// - limit: This property is ignored, as this specifies the max number
		//   of messages to collect, which has no meaning in this comparison
		// - level: This is expected to be a severity level object, which has a
		//   name and level property of its own.  It is treated as a threshold
		//   value, so this is compared against the level.level property in
		//   the object.
		//
		// @param {Object} filter Object carrying properties to compare against
		//   obj.  If filter contains no properties, false is returned.
		// @param {Object} obj Object being examined.
		// @return {Boolean} Indicates whether the comparison resulted in equal
		//   matches against all properties compared.  If filter specifies no
		//   properties, false is returned as no comparison can be performed.
		//   If either parameter is null or undefined, the comparison will also
		//   fail with a false return.
		match: function(filter, obj) {
			filter = filter||{};
			obj = obj||{};
			var
				same = true,
				p, list, match, i, val
			;

			// Iterate through all properties in filter, except one named "limit"
			for (p in filter) if (filter.hasOwnProperty(p) && p != 'limit') {
				list = filter[p];
				if (p == 'level') {
					if (list.constructor != Array) {
						same = same && ((list||{}).nLevel <= (obj[p]||{}).nLevel);
					} else {
						for (i=0; i<list.length; i++) {
							same = same && ((list[i]||{}).nLevel == (obj[p]||{}).nLevel);
						}
					}
				} else {
					// Simple property comparison
					match = (list === obj[p]);
					// If not a match on a simple comparison, dig deeper
					if (!match && list.length) {
						for (i=0; i<list.length; i++) {
							val = list[i];
							match = match || (val === obj[p]);
						}
					}
					same = same && match;
				}
				if (!same) break;
			}
			return same && !!p;
		},

		// This is called in the context of an Ajax error handler, passing in the options object,
		// to determine if an error condition has already been handled gracefully. Used internally. 
		isHandled: function(options) {
			options = (options||{}).options||options||{};
			return !!options.$handled;
		}
	}, true);
	
	// Define public API
	Kjs.errors({

		// Report entry to server
		// Current filter selects only log entries
		report: function(entry) {
			//[*] ATG-7653 - TEMPORARILY DISABLED FOR R25
			//    PEAKV-45 - RE-ENABLED
			var reportingLevel = Kjs.env(_keyReportingLevel)||'warn';
			if (!entry.noReport && entry.hType == _history.hType.log) {
				if (Kjs.env(_keyReportErrors) && Kjs.env(_keyErrorLogApiUrl)) {
					// If entry level is a warning or above, then report it
					if (entry.level.nLevel >= Kjs.log[reportingLevel].nLevel) {
						_reporter.add(entry);
					}
				}
			}
		},
		
		// Return count of number of entries im error log
		count: function() {
			return _history.get([_history.hType.log]).length;
//			return this.errorLog.length;
		},
		
		// Clear error log [*] Deprecate this or make it work
		clear: function() {
//			this.errorLog.length = 0;
		},
		
		// Returns a list of zero or more entries from the error log that match
		// the criteria specified in the filter.
		// @param {Object} filter Specifies matching criteria for selecting log entries.
		// @param {Boolean} [del=false] Specify whether to delete matched entries
		//   from the log. By default, log remains unchanged
		// @return {Object[]} List of entries matching the criteria in filter.
		//   Entries are retrieved by reference, not by value!
		//
		// Filter options include:
		//   id: By specific log entry id (numeric)
		//   {prop}: Any property name that is part of an error log entry.
		get: function(filter, del) {
			var
				_ = this,
				entries = _history.get([_history.hType.log]),
				rtn = [],
				tmp = [],
				i = entries.length,
				n = 0,
				entry
			;
			if (filter) {
				while (i--) {
					entry = entries[i];
					if (_.match(filter, entry)) {
						rtn.push(entry);
						n++;
					} else {
						if (del) tmp.splice(0,0,entry);
					}
					if (filter.limit && n == filter.limit) break;
				}
//				if (del) _.errorLog = tmp; //.reverse();
			} else {
				rtn = rtn.concat(entries);
//				if (del) _.errorLog = [];
			}
			return rtn;
		},
		
		// Wrapper function to conceal how an Ajax exception is marked as handled.
		// Call this in the failure handler of an Ajax operation to mark the failure
		// as having been gracefully handled. This prevents the condition from getting
		// recorded in the error log.
		// Call this by passing in the Ajax options object.
		// $.ajax({
		//     url: url,
		//     error: function(jqXHR, statusText, errorThrown) {
		//         // Handle the condition gracefully
		//         $err.handled(jqXHR);
		//     }
		// });
		handled: function(options) {
			if (typeof options == 'object') {
				options = (options||{}).options||options||{};	// In case options is jqXHR
				options.$handled = true;
			}
			if (log.info.enabled) log.info('Ajax error marked as handled by application code');
		},

		// Execution wrapper, typically used to make calls to third-party APIs.
		// Execution occurs synchronously, including calling the callback, so the
		// result from this function is the result of the call to ftn.
		// $err.exec(ftn, opt);
		// ftn = Primary function to execute
		// opt = Optional settings
		//     - opt.failure(e) - Failure callback that gets called if there was an exception
		//     - opt.success(rtn) - Success callback if all goes well - rtn = result of call to ftn
		//     - opt.info - String to provide information in any exception that gets recorded
		//     - If opt is a function, it is treated as opt.failure
		// callback = Optional callback to get called after primary function completes (successfully or unsuccessfully)
		// Example:
		//	$err.exec(function() {
		//		s.eVar9 = s.pageName;
		//		s.pageName = 'checkout:shipping billing information';
		//		s.eVar48 = trJsonData.orderInformation.orderId;
		//		s.events = "";
		//		s.products = trJsonData.userTrackingBean.products;
		//		s.prop52 = "";
		//	}, function(e) {
		//		// Handle failure here
		//		// return true; // To prevent failure from getting logged if handled gracefully, here
		//	});
		// Most likely, $err.exec will be called without a callback:
		//	$err.exec(function() {
		//		s.eVar9 = s.pageName;
		//		s.pageName = 'checkout:shipping billing information';
		//		s.eVar48 = trJsonData.orderInformation.orderId;
		//		s.events = "";
		//		s.products = trJsonData.userTrackingBean.products;
		//		s.prop52 = "";
		//	});
		// If the primary function returns a result, this is returned by the $err.exec function:
		//	var msg = $err.exec(function() {
		//		return 'Hello World!';
		//	});
		//	$log.info(msg); // Hello World!
		// The result of the primary function is also passed to the success callback:
		//	var msg = $err.exec(function() {
		//		return 'Hello World!';
		//	}, {
		//		success: function(rtn) {
		//			$log.info(rtn); // Hello World!
		//  	},
		//      info: 'Sample $err.exec example'
		//	});
		// Code following $err.exec will execute after $err.exec and its callback, if any, completes.
		// Any exception in any callback will be caught and reported, unconditionally, and the callback
		// exception will get reported, first, prior to any exception that may have occurred in the primary function.
		exec: function(ftn, opt) {
			// Normalize options
			if (typeof opt == 'function') {
				opt = {
					failure: opt
				};
			} else if (typeof opt == 'string') {
				opt = {
					info: opt
				};
			}
			opt = opt||{};
			var 
				handled = false,	// No exception has been handled, by default
				successful,			// Flag indicating if the function call succeeded
				rtn,				// Result from ftn call
				msg					// Error message config object
			;
			try {
				rtn = ftn();		// Call the supplied function
				successful = true;	// Indicate we got this far
				if (opt.success) {
					opt.success(rtn);
				}
			} catch(e) {
				// If a callback is specified, call it. If the callback returns true, this
				// indicates that the exception has been handled, if there was an exception.
				if (opt.failure) {
					try {
						handled = !!opt.failure(e);
					} catch(err) {
						// Define error message object
						msg = {
							msg: 'Exception occurred in failure handler for an exec call (${ftnName})! - ${errMsg}',
							ftnName: ftn.name||'',
							errMsg: err.message,
							$info: opt.info||'',
							$noConsole: opt.noConsole,
							$noReport: opt.noReport,
							$noErrorLog: opt.noErrorLog
						};
						// Log the message
						log.error(msg, err);
					}
				}
				// If there was an exception and it was not handled by the callback, then
				// record the event here.
				if (!handled) {
					// Define error message object
					msg = {
						ftnName: ftn.name||'',
						errMsg: e.message,
						$info: opt.info||'',
						$noConsole: opt.noConsole,
						$noReport: opt.noReport,
						$noErrorLog: opt.noErrorLog
					};
					if (!successful) {
						msg.msg = 'A contained exception occurred within an exec call (${ftnName}) - ${errMsg}';
					} else {
						msg.msg = 'Exception occurred within the success handler of an exec call (${ftnName}) - ${errMsg}';
					}
					// Log error message
					log.error(msg, e);
				}
				rtn = handled;
			}
			return rtn;
		},
		
		// Initialization handler
		// This is added as a public API, otherwise we can't call it from here during init.
		// This is called at load time, not from $init.
		// This disposes itself after it is called.
		init: function($) {
			var 
				_ = this,
				
				// Saving initial settings for later comparison, only.
				// Do not refer to these in the handler code.
				_noGlobalHandler = Kjs.env(_keyNoGlobalHandler),
				_noAjaxHandler = Kjs.env(_keyNoAjaxHandler),
				
				// For detecting completions that occur with no start detection to avoid any sync issue.
				// Sync control can begin before Kjs.init().inInit, so don't want to limit Ajax sync to
				// just inInit, but sync must not occur after initDone. Otherwise, it would have been a
				// simple matter to just not do sync unless inInit, and that would avoid the sync issue
				// that occurs if a jQuery Ajax operation begins before kohls.errors.js installs handlers.
				_urls = {},

				// Provides $sync management
				ajaxSend = function(event, jqXHR, options) {
					var context = this;
					// Capture options object for use in error handler, if needed, and if jQuery doesn't already define it
					jqXHR.options = jqXHR.options||options;
					if (options.onDelayed) {
						options.onDelayed.t = Kjs._(function() {
							options.onDelayed.apply(context, jqXHR, options);
						}, options.delayTimeout||15000);
					}
					// Issue warning if Ajax request is sent with no explicit URL specified
					if (!options.url||options.url == _global.location.href) {
						if (log.warn.enabled) log.warn('Ajax request sent with no URL specified!');
					}
					// Issue warning for synchronous Ajax requests sent before readyDone
					if (options.async === false && !_flags.readyDone) {
						if (log.warn.enabled) log.warn('Synchronous Ajax request issued during startup!');
					}
					// Impose a sync hold if in init stage
					if (!_flags.initDone) {
						_urls[options.url] = true;
						Kjs.sync(1, 'ajaxSend ' + options.url||jqXHR.options.url);
					}
				},

				// Captures exceptions that are not marked as handled, into the error log.
				ajaxError = function(event, jqXHR, options, msg) {
					var
						code = jqXHR.status,
						entry
					;
					// Record entry in error log
					if (_.isHandled(options)) {
						if (log.info.enabled) log.info('Ajax error handled gracefully: '+jqXHR.statusText||'');
					} else if (Kjs.env(_keyNoAjaxHandler)) {
						if (log.warn.enabled) log.warn('Ajax error has occurred, but the Ajax error handler is disabled.');
					} else {
						// Record the entry in the log to get the timestamp on it ASAP
						entry = _.add({
							logId: module,					// Reporter ID
							type: _.K.AJAX_TYPE,			// Ajax message type
							level: {level: log.error.level, nLevel: log.error.nLevel},	// Error level
							msg: msg||jqXHR.statusText,		// Error message text
							info: 'Ajax error handler',		// Additional info
							statusText: jqXHR.statusText,	// Status text
							code: code,						// Error code
							url: options.url				// URL of Ajax request
//							options: options,				// Ajax options object
//							response: jqXHR,				// Ajax response object
//							success: jqXHR.statusCode()		// Ajax result flag (false)
						});

						// Augment the entry
						
						entry.msg = '['+module+'] ' + entry.msg;

						// Gather additional info.
						// This is done here rather than wait for reporter send or debug view,
						// as jqXHR will not be available beyond here.
						if (Kjs.errorInfo) {
							Kjs.errorInfo(entry, jqXHR);
						}

						// The following error is reported to the console, only, because it was just added to the error log
						if (log.error.enabled) log.error({msg: 'Logged Ajax error: ${text} (${url})', text: entry.msg, url: entry.url, $noErrorLog: true}, entry);
					}
				},

				// Respond to Ajax complete event to clear any sync hold imposed by the request
				// If a jQuery document.ready handler has fired before kohls.error.js installs this global
				// handler, the ajax start event will be missed, which would create a situation whereby
				// $sync(0) would be called with no prior $sync(1). This condition is detected and reported
				// as a warning.
				ajaxComplete = function(event, jqXHR, options) {
					if (options.onDelayed) {
						clearTimeout(options.onDelayed.t);
					}
					if (!_flags.initDone && _urls[options.url]) {
						if (_urls[options.url]) {
							delete _urls[options.url];
							Kjs.sync(0, 'ajaxComplete ' + options.url);
						} else {
							if (log.warn.enabled) log.warn({msg: 'msgAjaxSyncMismatch', url: options.url}); // 'Ajax operation completed with no prior Ajax start detection - ${url}'
						}
					}
				},
				
				// Called during init to respond to condition whereby $env settings for
				// global handlers changed between KJS load and $init.
				_checkSettings = function() {
					var
						noGlobalHandler = Kjs.env(_keyNoGlobalHandler),
						noAjaxHandler = Kjs.env(_keyNoAjaxHandler)
					;
					if (noGlobalHandler != _noGlobalHandler) {
						log.warn('Edge case encountered - implement response to change in noGlobalHandler setting, here');
					}
					if (noAjaxHandler != _noAjaxHandler) {
						log.warn('Edge case encountered - implement response to change in noAjaxHandler setting, here');
					}
					//[*] As per recommendation in the warnings, above, implement the following if they are ever seen:
					//    If going from enabled to disabled, clear entries from log and reporter queue.
				},

				// Handler to respond to entries getting written to the history log.
				_listener = function(entry, handled) {
					if (entry.hType == _history.hType.log) {
						Kjs._(function() {
							// Called asynchronously to give calling code a chance to update entry
							// after call to _listener before getting written to the reporter, since
							// the call to _.report triggers a write to local storage, which would not
							// get updated if entry is modified after _listener is called.
							_.report(entry);
						});
					}
				},
				
				// Get all the log entries from the history log, if any
				entries = _history.get(_history.hType.log)
			;

			// Scan existing entries from the history log
			while (entries.length) {
				_.report(entries.shift());
			}
			
			// Install history entry insertion callback
			_history.addCallback(_listener);
			Kjs.unload(function _$unload_errors($) {
				_history.removeCallback(_listener);
			});

			// Install global Ajax handlers
			if ($) {
				$(document).ajaxSend(ajaxSend).ajaxError(ajaxError).ajaxComplete(ajaxComplete);
				if (log.info.enabled) log.info('Global Ajax handlers installed.');
			} else {
				if (log.warn.enabled) log.warn('Global Ajax handlers not installed - jQuery is not present.');
			}
			
			// Install global error handler
			
			// Wrap global window.onerror handler if one is installed
			if (_savOnError && !_savOnError.kjs) {
				if (log.warn.enabled) {
					log.warn('External script has installed a window.onerror handler!');
					log.warn('Wrapping window.onerror for KJS console logging.');
				}
			}
			
			// Global error handler
			if (!_savOnError || !_savOnError.kjs) {
				// The column and errorObj parameters are new to the standards,
				// introduced in 2014. Earlier browsers will not have them.
				// It is possible that errorObj may be inaccessible, with any attempt to access
				// its properties resulting in an exception, as seen when window.onerror is invoked
				// while sitting at a breakpoint in firebug in Firefox in linux.
				_global.onerror = function _$kjsonerror(msg, url, line, column, errorObj) {
					var isProtected = true;	// Assume errorObj is inaccessible, by default
					// Normalize errorObj
					try {
						if (typeof errorObj == 'string') {
							errorObj = {
								message: errorObj
							};
						} else {
							errorObj = errorObj||{};		// Create object if undefined
							errorObj.name = errorObj.name;	// Trigger exception if protected
						}
						isProtected = false;				// No exception triggered - errorObj is accessible
					} catch(e) {
						// Ignore exception - isProtected = true
					}

					// Skip out if global handler not enabled
					if (Kjs.env(_keyNoGlobalHandler)) {
						if (log.warn.enabled) log.warn('An error has occurred, but the global error handler is disabled.');
					} else {
						// Construct an error log entry
						var
							// Some errors do not provide access to error object properties
							errObj = (isProtected) ? {} : errorObj,
							// Record the exception in the error log to get the timestamp on it ASAP
							entry = _.add({
								logId: module,									// Log reporter id
								type: _.K.CODE_TYPE,							// Exception in code
								level: {level: log.error.level, nLevel: log.error.nLevel},	// Error level
								msg: msg,										// Error message text
								info: 'Global exception handler',				// Additional info
								url: url,										// URL of file
								line: line,										// Line number within file
								column: column,									// Column number
								errorObj: errorObj,								// Error object
								isProtected: isProtected,						// Error object protected flag
								errName: (errObj||{}).name||'(unknown)',		// Error name
								errMsg: (errObj||{}).message||msg||'(unkown)'	// Error message
							})
						;

						// Augment the entry

						entry.msg = '['+module+'] ' + entry.msg;
							
						// The following error is reported to the console, only, because it was just added to the error log
						if (log.error.enabled) log.error({msg: 'KJS global handler logged uncaught exception: '+entry.msg, $noErrorLog: true}, errorObj);
						// Trigger ready handler in case exception occurred in a jQuery ready handler
						// prior to official KJS ready kick-off. This will only be effectual after DOMContentLoaded
						// has at least triggered a pre-init _onReady call.
						// See notes in kohls.core.js _install function.
						// If jQuery abduction has occurred, an exception in a jQuery ready handler will not get here.
						// Therefore, the assumption is the exception has aborted the jQuery ready queue, which will prevent
						// KJS initialization & startup from progressing. Therefore, Kjs.ready() is called to continue.
						if (_flags.inJQuery) {
							if (log.info.enabled) log.info('Invoking KJS ready in case the exception aborted jQuery ready handling.');
							Kjs.ready().inJQuery = false;
							Kjs.stamp({id: 'marker', label: 'jQuery ready abnormal abort'});
						}
			
						// Forward on to pre-existing handler, if exists
						if (_savOnError) {
							_savOnError.apply(this, arguments);
						}
					}
					
					// Report error as handled so it does not propagate
					if (!Kjs.env(_keySurfaceExceptions)) {
						return true;
					}
				};

				_global.onerror.kjs = true;
				if (log.info.enabled) log.info('Global exception handler installed.');
			}
			
			// Define update API
			_.$errors({checkSettings: _checkSettings});
			// Dispose of init API
			_.$errors({init: undefined});
			// Ensure further API expansion is locked out
			_.lock();
		}
	});
	
	// Install central handlers
	// This is load time, so $env settings could potentially change prior to $init.
	// So, error handlers are installed by default, and will be removed during $init
	// if disabled.
	// Originally, this was done in $init, but was too late to capture some exceptions.
	// But I don't know if it was done in $init to ensure latest $env settings would
	// be defined, or double-jQuery loading protection would be in place by then, or
	// both. I am thinking it must have been for the jQuery issue, since the switches
	// are already in place for disabling global handlers, with the exception of clearing
	// any entries.
	// This is untested with dual jQuery loading. 
	Kjs.errors.init($env.jQuery||$);
	
	// Install $init handler
	Kjs.init(function _$init_errors($) {
		Kjs.errors.checkSettings();	// Respond to any changes in global handler switches between KJS load and $init
//		Kjs.errors.init($);		// Install central handlers - done at load time, now
		// Install callback
	}, { 
		isPreInit: true,	// Do this from pre-init queue
		inQueue: true		// Queue it to make sure any core init happens first
	});
//	$unload(function _$unload_errors($) {
		//[*] TODO
//	});
	
	return Kjs.errors;	// It will get reassigned back to itself
	
}, function(Kjs, module) {
	return {
		redefine: !Kjs.errors.exec
	};
});
// The test for Kjs.errors.exec, above, is arbitrary. The exec method is known to
// be defined in this module, so if it is not defined, then we can assume this module
// needs to be built. Otherwise, if it is defined, the module definition can be skipped.

// ---- End of kohls.errors.js ----
/*!
 * kohls.errorinfo.js
 * Additional error information for error log history entries
 * Written by: Bill Hubbard
 */
$module('errorInfo', function(log, env, module, Kjs) {
	var
		_K = Kjs.errors.K,
		
		mapDomain = {
			'localhost': 'static files on localhost',
			'js.kohls.com': 'Kohls domain via Akamaized URL',
			'media.richrelevance.com': 'Rich Relevance domain',
			'd3t1dw6evd1rv7.cloudfront.net': 'Cloudfront domain',
			'www.kohls.com': 'Kohls Web server domain',
			'www.googletagservices.com': 'Google domain',
			'partner.googleadservices.com': 'Google domain',
			'kohls.tt.omtrdc.net': 'Omniture domain for mbox',
			'securepubads.g.doubleclick.net': 'Double Click ads domain',
			'ads.rubiconproject.com': 'RubiconProject ads domain',
			'pagead2.googlesyndication.com': 'Google domain',
			's.btstatic.com': 'Bright Tag domain',
			's.thebrighttag.com': 'Bright Tag domain',
			'recs.richrelevance.com': 'Rich Relevance domain',
			'integration.richrelevance.com': 'Rich Relevance domain',
			'optimized-by.rubiconproject.com': 'RubiconProject ads domain',
			'cts.channelintelligence.com': 'Channel Intelligence domain',
			'www.google-analytics.com': 'Google domain',
			'b.scorecardresearch.com': 'Score Card Research domain',
			'connect.facebook.net': 'facebook domain'
		},

		mapFile = {
			'omnilinks-latest.js': 'Omnilinks (Omniture?) script',
			'mbox.js': 'Omniture - mbox',
			'foresee-surveydef.js': 'Foresee script',
			'foresee-alive.js': 'Foresee script',
			'framework.js': 'KJS framework - may be simply reporting the error',
			'homepage.js': 'Packaged script for home page',
			'SkavaOmnitureCode.js': 'Skava Omniture script',
			'wishlist.js': 'SKAVA - wishlist',
			'giftguide.js': 'SKAVA - giftguide',
			'registry.js': 'SKAVA - registry',
			'kohls_v1_m56577569839297458.js': 'Kohls script',
			'p13n.js': 'Rich Relevance script',
			'foresee-trigger.js': 'Foresee script',
			's_code.js': 'Omniture script',
			'OmnitureAkamai.jsp': 'Omniture script',
			'wishlistconfig.js': 'Skava script',
			'sstimer.js': '?',
			'gpt.js': 'Google script',
			'pubads_impl_73.js': 'Google script',
			'tag.js': 'Bright Tag script',
			'p13n_generated.js': 'Rich Relevance script',
			'foresee-surveydef.js': 'Foresee script',
			'static_pb_drawer.js': 'Kohls HTML template file',
			'analytics.js': 'Google analytics script',
			'fbds.js': 'facebook script',
			'app.errors.js': 'Error injection test script'
		},
		
		// Update entry.info with additional info, providing a human-readible summary
		// about the reported error.
		_msgSummary = function(entry) {
			var 
				path = (entry||{}).url,
				msg, bits, domainText, fileText
			;
			if (path) {
				try {
					path = path.split('?')[0];
					if ((entry.msg||'').match(entry.errMsg||'')) {
						msg = entry.msg + ' in ';
					} else {
						msg = entry.msg + ' (' + (entry.errMsg||'n/a') + ') in ';
					}
					bits = path.match(/^http[s]?:\/\/(.*?)\/.*\/?\/(.*)$/);
					if (bits) {
						domainText = mapDomain[bits[1]];
						fileText = mapFile[bits[2]];
						if (!domainText && !fileText) {
							msg += path;
						} else {
							msg += (fileText||bits[2]) + ' from ' + (domainText||bits[1]);
						}
					} else {
						/*jsl:pass*/
						//[*] Some other path, like chrome://firebug/content/debugger/debugger.js
					}
					msg += '\n[' + path + ']';
					if (entry.info) msg += '\n';
				} catch(e) {
					log.error({msg: 'Failure to compute error info message summary', $noErrorLog: true}, e);
				}
			}
			entry.info += ((entry.info) ? ':\n' : '') + (msg||'');
		},
		
		// Analyzes an entry and defines entry.info with information collected from the
		// error information.
		// The central Ajax error handler will call this to provide the jqXHR entry for
		// computing additional information, whereas this is normally called only for
		// entries being sent to the server or opened in a debug tool for viewing.
		_$info = function(entry, jqXHR) {
			var json, errObj, errMsg;
			if (!entry.errorInfo) {
				entry.info = entry.info||'';
				// If this is an Ajax error, jqXHR will be provided, and this will get added
				// to this history entry, hence the need for entry.errorInfo.
				if (jqXHR) {
					// Analyzes an entry captured from the global Ajax error handler, to add additional
					// information to the info property as well as provide additional error information based on response.
					if (!jqXHR.responseText) {
						entry.info += ' (no response or empty response - possible server side failure)';
					}
					try { json = JSON.parse(jqXHR.responseText); } catch(e) { json = null; }
					//[*] Need to know what kind of responses are expected here
					if (json && entry.code == 500) {
						errObj = json.error||json.ConstraintViolationException||json.SecurityException||json||{};
						errMsg = (typeof errObj=='object') ? errObj.errorMessage||errObj.message||'Ajax Error' : '';
						entry.json = json;					// Response JSON
						entry.errMsg = errMsg;				// Message reported by server in JSON
						entry.errCode = errObj.code||entry.code;	// Pick up error code from JSON
					}
				}

				// Analyzes code error. Probably none of this applies to Ajax errors, so perhaps
				// this is better in an else condition, but it shouldn't hurt anything.
				if (entry.stale) {
					entry.info += ' Event occurred on previous page.\n';
				}
				if (!entry.url && entry.errorObj instanceof Error) {
					entry.info += ' (possibly inline script)';
				} else if (entry.url == 'chrome://firebug/content/debugger/debugger.js') {
					entry.info += ' (firebug exception)'; // possibly while sitting at a breakpoint
					entry.noReport = true;
				}
				if (entry.msg == 'Script error.') {
					entry.info += ' (CORS not enabled - no error detail available)';
				} else if (entry.msg == 's is not defined') {
					entry.info += ' (Omniture is not enabled or not loaded)';
				} else if (entry.msg == '_injectScript load error') {
					entry.info += ' (typically indicates file not found)';
				} else if (entry.msg == 'TypeError: newItem.tmpl is not a function') {
					entry.info += ' (typically indicates an attempt to render a template that does not exist)';
				} else if (entry.msg.match(/(hoverIntent|kCarouel) is not a function/)) {
					entry.info += 'jQuery may be loaded twice, or the appropriate packaged script is not loaded';
				}

				if (entry.level.level == log.error.level) {
					if (entry.errorObj && entry.stale) {
						entry.info += ' Error detail object from previous page was not retained.';
					} else if (entry.isProtected || !(entry.errorObj instanceof Error)) {
						entry.info += ' Error detail object was not provided or is inaccessible.';
					}
				}
				
				// Provide additional summary info to entry.info
				_msgSummary(entry);
				
				// Mark entry as having info applied, as this may be a history entry (Ajax)
				entry.errorInfo = true;
			}

			return entry;
		}

		// 'Script error.' indicates error from foreign server where CORS is not enabled
		// 's is not defined' indicates Omniture is not enabled (sitecatalyst)
		// '_injectScript load error' typically indicates 404 not found
		// 'TypeError: newItem.tmpl is not a function', in framework or foundation,
		// indicates the jQuery template engine may be attempting to render a template
		// that does not exist (its name is not defined).
	;
	
	return _$info;
});

// ----- End of kohls.errorinfo.js -----
/*!
 * kohls.elem.js
 * Element-based methods
 * Author: Bill Hubbard
 */
$module('elem', function(log, env, module, Kjs) {
	var
		// Computes metrics of selected element
		_metrics = function(sel) {
			var
				elem = $(sel),
				metrics = Kjs.extend(elem.offset())||{absent: true},
				position = (elem.css('position')||'').toLowerCase(),
				top = ((position == 'fixed') ? parseInt(elem.css('top')) : metrics.top)||0
			;
			return Kjs.extend(metrics, {
				top: top,
				outerHeight: elem.outerHeight(),
				outerWidth: elem.outerWidth(),
				height: elem.height(),
				width: elem.width()
			});
		},
		
		// Returns the value directly from the value attribute from the markup
		// of the given element.
		_valAttr = function(d) {
			var attrs = $(d)[0].attributes, rtn;
			for (var i=0; i<attrs.length; i++) {
				var attr = attrs[i];
				if (attr.name == 'value') {
					rtn = attr.value;
				}
			}
			return rtn;
		},

		// Compute the width of the scroll bars
		_scrollBarWidth = function(){
			var 
				inner = $('<p/>'),
				outer = $('<div/>'),
				w1, w2
			;
			inner.css({width:'100%',height:'200px'});
			outer.css({
				position:'absolute',
				top:'0px',
				left:'0px',
				visibility:'hidden',
				width:'200px',
				height:'150px',
				overflow:'hidden'
			}).append(inner).appendTo('body').css('-ms-box-sizing','context-box').css('box-sizing','content-box');
			w1 = inner[0].offsetWidth;
			outer.css('overflow','scroll');
			w2 = inner[0].offsetWidth;
			if (w1 == w2) w2 = outer[0].clientWidth;
			outer.remove();
			return (w1-w2);
		},

		// Dimensions of viewport, page and scroll offsets
		// adj = adjustment metrics to tweak the computed values
		// Returns { x, y, w, h, sbw, sbh, pw, ph, sw, sh, aw, ah }
		// x,y = position of viewport relative to page (i.e. scroll offsets)
		// w,h = size of viewport (width, height)
		// sbw,sbh = scroll bar width and height
		// pw,ph = size of page
		// sw,sh = screen width and height
		// aw,ah = screen available width and height
		_viewport = function (adj) {
			adj=adj||{};
			var
				docelem = document.documentElement,
 				docbody = document.body,
				
				// Viewport dimensions
				vw = self.innerWidth||(docelem?docelem.clientWidth:null)||docbody.clientWidth,
				vh = self.innerHeight||(docelem?docelem.clientHeight:null)||docbody.clientHeight,

				// Scroll offsets
				sx = self.pageXOffset||(docelem?docelem.scrollLeft:null)||docbody.scrollLeft,
				sy = self.pageYOffset||(docelem?docelem.scrollTop:null)||docbody.scrollTop,
				sbw = _scrollBarWidth(),

				// Page dimensions
				sh = docbody.scrollHeight,
				oh = docbody.offsetHeight,
				page = $('body')[0],
				pw, ph
			;
			
			// Compute page dimensions
			if (sh > oh) { // all but Explorer Mac
				pw = page ? page.scrollWidth : docbody.scrollWidth;
				ph = docbody.scrollHeight;
			} else { // Explorer Mac;
				//would also work in Explorer 6 Strict, Mozilla and Safari
				pw = page ? page.offsetWidth : docbody.offsetWidth;
				ph = docbody.offsetHeight;
			}

			return {
				x: sx + (adj.x||0),		// Scroll X offset
				y: sy + (adj.y||0),		// Scroll Y offset
				w: vw + (adj.w||0),		// Viewport width
				h: vh+(adj.h||0),		// Viewport height
				sbw: sbw,				// Scroll bar width
				sbh: sbw,				// Scroll bar height (assumes same as width)
				pw: pw, 				// Page width
				ph: ph,					// Page height
				sw: screen.width,		// Screen width
				sh: screen.height,		// Screen height
				aw: screen.availWidth,	// Screen available width
				ah: screen.availHeight	// Screen available height
			};
		},

		// Creates a new IFRAME shim (for IE)
		// z = z-index
		// w = width
		// h = height
		// t = top
		// l = left
		// Positioning is based on border origin
		_shim = function (z, w, h, t, l, hide) {
			var d = document.createElement('iframe');		// Create shim
			d.setAttribute('src', "javascript:''");			// Load empty content into iframe
			d.setAttribute('scrolling', 'no');				// No scroll bars
			d.setAttribute('frameBorder', '0');				// No frame border
			d.setAttribute('marginWidth', '0');
			d.setAttribute('marginHeight', '0');
			d.setAttribute('allowTransparency', 'true');
			d.style.position = 'absolute';
			return Kjs.placeElem(d, l, t, w, h, z, hide);	//[*] WHERE DID placeElem GO??
		},

		// Z-index management object
		_z = (function () {
			var
				// Initial base z-index value
				zinit = Kjs.env('zBase')||1000,
				// Current available z-index
				zIndex = zinit,
				// List of z-indexes in use
				zList = {},

				// Reports the highest z-index in use
				_maxZ = function() {
					var zmax = 0, z, i;
					for (i in zList) if (zList.hasOwnProperty(i)) {  // zList is indexed by base zIndex
						z = parseInt(i,10);	  // Convert index to number
						if (z > zmax) zmax = z; // Largest base zIndex encountered?
					}
					if (zmax > 0) zmax += zList[zmax];  // If list not empty, add base to request for max zIndex
					return zmax;
				},

				// Request base z-index for a block of num layers
				// In 99% of all cases, only one z-index value is needed, since a given absolute or relative
				// positioned element has its own z stack.  But in some cases, a secondary z-index controller
				// might want to reserve a block of indexes to use within a particular "layer"
				_get = function(num) {
					num = num||1;
					var z = zIndex;	// Get current zIndex
					zList[z] = num;	// Record request
					zIndex += num;	// Bump zIndex by num requested
					return z;		// Return base zIndex
				},

				// Reclaim used z-indexes
				// If a block of z-indexes was requested, only the base index value needs to be provided
				_put = function(idx) {
					if (!isNaN(idx)) {
						if (zList[idx]) {		// If base z-index is listed
							delete zList[idx];	// Delete request from the list
							var z = _maxZ();	// See what the highest z is in the list
							if (z<zIndex) zIndex = z||zinit; // Drop zIndex if level dropped (minimum = zBase value)
						}
					}
					return zIndex;	// Return current zIndex...just because
				},

				// Assigns new z-index to page element - returns assigned index
				_set = function (el) {
					var z = 0, e = jQuery(el)[0];
					e = e.viewNode||e;
					if (e) {
						//if (e.style.zIndex) this.put(e.style.zIndex);  // Reclaim if updating
						z = _get(1);
						e.style.zIndex = z;
					}
					return z;
				},

				// Move element to top
				// elem = the DOM element (jQuery) to reposition
				// n = size of z-index block to allocate (default = 1). Setting to 0 will not assign a new z-index.
				_top = function(elem, n) {
					var z = elem.css('z-index');
					if (z && !isNaN(z)) {
						_put(z);
					}
					if (n !== 0) {
						elem.css('z-index', _get(n));
					}
					return elem;
				},

				// Returns z-index to the pool from page element
				_clear = function (el) {
					var e = jQuery(el)[0];
					e = e.viewNode||e;
					if (e) {
						_put(e.style.zIndex);
						e.style.zIndex=0;
					}
				},

				// Force next z-index to be a certain value
				_bump = function(zidx) {
					if (zIndex == zinit || zidx >= zIndex) {
						zIndex = zidx;
					}
					return zIndex;
				}
			;

			return {
				// Get a block of z indexes (or just one) - Returns base z index
				get: _get,

				// Return z index(es) to pool
				// Indexes are returned to the pool in the same allotment in which they
				// were retrieved.
				put: _put,

				// Assigns new z-index to page element - returns assigned index
				set: _set,

				// Move element to top
				top: _top,

				// Drop z-index from element
				drop: function(d) { return _top(d, 0); },

				// Returns z-index to the pool from page element
				clear: _clear,

				// Force next z-index to be a certain value
				bump: _bump
			};
		})(),
		
/* A better Ajax indicator...
 	var ajaxBusy = (function() {
		var 
			_busy = $('#ajax-busy'), ti, calls = 0,
			_$spin = Kjs.extend(function() {
				_$spin.count = ((_$spin.count || 0) + 1) % 12;
				_busy.css('background-position', '0 ' + ((12 - _$spin.count) * 40) + 'px');
			}, {
				show: function() {
					if (!calls++) {
						_busy.show();
						ti = setInterval(_$spin, 120);
					}
				},
				hide: function() {
					calls--;
					if (!calls) {
						clearTimeout(ti);
						_busy.hide();
					}
				}
			});
		;
		if (!_busy.length) _busy = $('<div id="ajax-busy"></div>').appendTo('body');
		return _$spin;
	})();
 */
		// Ajax busy indicator
		// Kjs.elem.busy(1) to show it
		// Kjs.elem.busy(0) to hide it
		//[*] TODO: 
		//      - Apply a modal shade
		_busy = (function() {
			var 
				spinnerUrl = Kjs.fullUrl('images/ajax-loader.gif'),
				count = 0, 
				busy,
				showBusy = function(show) {
					var view;
					if (!busy) {
						view = _viewport();
						busy = $('<img src="' + spinnerUrl + '"/>').appendTo('body').css({display: 'none', position: 'fixed', top: view.h/2 - 10, left: view.w/2 - 10});
					}
					count += (show ? 1 : -1);
					if (busy) busy.css('display', count ? 'block' : 'none');
				}
			;
			
			return showBusy;
		})()
	;
	
	// Return public API
	return {
		metrics: _metrics,				// Element metrics
		valAttr: _valAttr,				// Get value of HTML tag attribute
		scrollBarWidth: _scrollBarWidth,// Get scroll bar width
		viewport: _viewport,			// Get various dimensions of viewport, page, etc.
		shim: _shim,					// Create an IFRAME shim
		z: _z,							// Z-index manager
		busy: _busy						// Ajax busy indicator
	};
});

// ---- End of kohls.elem.js ----
/*!
 * kohls.clientinfo.js
 * Retrieves information about the browser environment
 */
$module('clientInfo', function(log, env, module, Kjs) {
    var 
    	unknown = '-',

    	// screen
    	screenSize = '',

        //browser
        nVer = navigator.appVersion,
        nAgt = navigator.userAgent,
        browser = navigator.appName,
        version = '' + parseFloat(navigator.appVersion),
        majorVersion = parseInt(navigator.appVersion, 10),
        nameOffset, verOffset, ix,

        // mobile version
        mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer),

        // cookie
        cookieEnabled = (navigator.cookieEnabled) ? true : false,

        // system
        os = unknown,
        clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ],
        
        osVersion = unknown,
        
        // flash (you'll need to include swfobject)
        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
        flashVersion = 'no check'
    ;

    if (screen.width) {
        screenSize += (screen.width||'?') + ' x ' + (screen.height||'?');
    }
    
    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
    // trim the version string
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    if (typeof swfobject != 'undefined') {
        var fv = swfobject.getFlashPlayerVersion();
        if (fv.major > 0) {
            flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
        }
        else  {
            flashVersion = unknown;
        }
    }

    var logInfo = function() {
    	return {
    		ciOS: os + ' ' + osVersion,
    		ciBrowser: browser + ' ' + version,
    		ciMobile: mobile,
    		ciFlash: flashVersion,
    		ciCookies: cookieEnabled,
    		ciScreenSize: screenSize,
    		ciUserAgent: navigator.userAgent
    	};
    };
    
    return Kjs.extend(logInfo, {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion
    });
});
/*
alert(
    'OS: ' + Kjs.clientInfo.os +' '+ Kjs.clientInfo.osVersion + '\n'+
    'Browser: ' + Kjs.clientInfo.browser +' '+ Kjs.clientInfo.browserVersion + '\n' + 
    'Mobile: ' + Kjs.clientInfo.mobile + '\n' +
    'Flash: ' + Kjs.clientInfo.flashVersion + '\n' +
    'Cookies: ' + Kjs.clientInfo.cookies + '\n' +
    'Screen Size: ' + Kjs.clientInfo.screen + '\n\n' +
    'Full User Agent: ' + navigator.userAgent
);
*/

// ----- End of kohls.clientinfo.js -----
/*!
 * ns.tpl.js
 * Template helper - jsRender wrapper
 * Author: Bill Hubbard
 */
/*
 	Unfortunately, $tmpl.load cannot be called at load time, as ns.ajax.js and ns.tpl.js
 	are not part of the core. $tmpl.load also does a DOM update to add a container for
 	the template(s) being loaded. Therefore, $tmpl.load is relegated to $init time.

	TODO
	  - Have primary function return an API when requesting template block (or add opt param to request this)
	  - Integrate idgen/tplid feature

*/
//$requires(['external/jsrender.js', 'framework/kohls.ajax.js']);
$module('tmpl', function(log, env, module, Kjs) {
	var	
		_slice = Array.prototype.slice,
		
		// Statics - TBD
		_statics = {
			$env: $env,
			
			$Kjs: Kjs,
			
			// prop can be a Boolean or the name of a property (for backward compatibility)
			$checked: function(prop) {
				prop = (typeof prop == 'string') ? this[prop] : prop;
				return (prop) ? 'checked="checked"' : '';
			},

			$selected: function(isSelected) {
				return (isSelected) ? 'selected="selected"' : '';
			},
			
			$hide: function(hide) {
				return (hide) ? 'hide' : '';
			},
			
			$rangeArray: function(min, max, inc) {
				var range = [];
				for (var i=min; i<=max; i+=inc) {
					range.push({name: i+'', value: i+''});
				}
				return range;
			},
			
			$formatDate: function(ms) {
//				debugger;
//				return (ms) ? $.fn.Zebra_DatePicker.format(new Date(ms)) : '';
			},
			
			$weekdays: [
				{name: 'Sunday', value: '0'},
				{name: 'Monday', value: '1'},
				{name: 'Tuesday', value: '2'},
				{name: 'Wednesday', value: '3'},
				{name: 'Thursday', value: '4'},
				{name: 'Friday', value: '5'},
				{name: 'Saturday', value: '6'}
			]
		},

		// Template container counter
		_tmplCounter = 0,

		// Loads one or more template definitions into a target DOM element
		// urls = URI(s) from which to load template - may be one, or a list of one or more strings
		// opt = options or function - if function, it is treated as opt.onLoad
		// opt options:
		//     onLoad: Callback following load (successful or not) - onLoad(success, responses)
		//            success = true|false to indicate if all loads were successful
		//                      If multiple URLs were specified, all successful loads are appended to target
		//            responses = one, or list of one or more responses (same count as urls) - see Kjs.loadFile
		//     allowReload: set to true to allow the same template to be loaded again if previously loaded
		_load = function _$tmpl_load(urls, opt) {
			if(resourceRoot != undefined){
				urls = resourceRoot + urls;
			}
			opt = (typeof opt == 'function') ? {onLoad: opt} : opt||{};
			var 
				idDiv = 'templates' + _tmplCounter++,
				selDiv = '#' + idDiv,
				div = $(selDiv),
				cache = !Kjs.env('isClientDebug')
			;
			if (!div.length) {
				div = $('<div/>').attr({id: idDiv, display: 'none'}).appendTo('body');
			}

			Kjs.ajax.loadContent(urls, {
				sel: selDiv,
				cache: cache,
				strip: true,	// Strip special comment strings "<!--*" and "*-->", leaving the text in between
				sameDomain: true,	// Ignore subdomainURL settings [*] Make configurable?
				onLoad: function(success, responses) {
					if (opt.onLoad) opt.onLoad.call(this, success, responses);
				},
				allowReload: opt.allowReload
			});
		},
		
		// Define a template via HTML string
		_add = function(tplName, markup) {
			Kjs.load.js('', {
				attrs: {
					id: tplName,
					type: 'text/x-jsrender'
				},
				text: markup
			});
		},

		// Typically called from template files to define the "constants" used
		// in identifying the templates and their key elements.
		_define = function(tplName, K) {
			// Register template interface if not already registered
			$env.tpl[tplName] = $env.tpl[tplName]||{};
			// Deep extend the template interface and return it
			return Kjs.extend(true, $env.tpl[tplName], K||{}, { statics: {} });
		},
		
		// Core template renderer
		// Finds template by name whether defined in script tag or as a string
		renderTpl = function(name, context) {
			var tmpl = $.templates('#'+name);
			if (typeof tmpl == 'function') {
				return $(tmpl.render(context));
			} else {
				if (log.error.enabled) log.error({msg: 'Template failure', dump: tmpl});
				return $();
			}
		},
		
		// Render a template
		// Takes care of creating appropriate context object to use in rendering
		// _render([div,] name, data[, opt1, ..., optN])
		// div = optional - jQuery DOM element reference or selector
		// name = Template name
		// data = Data to populate the template - must be an object
		// args = Any additional objects to provide properties (statics) for rendering the template
		// Calling signatures:
		//   - _render(name, data) // Render a named template using data (object or array)
		//   - _render(div, name, data) // Render a named template & attach to DOM (div is selector or DOM element)
		// NOTE: If data is an array, rendering is done iteratively, not by the template engine. See docs.
		_render = function(name, data) { 
			var args = _slice.call(arguments, 2), div, rtn, node;
			if (typeof data == 'string' || typeof name == 'object') { // _render(div, name, data)
				div = $(name);
				name = data;
				data = args.shift();
			} // else _render(name, data)
			if (typeof name != 'string') {
				log.warn('No template specified in _render');
			} else {
				name = name.replace(/^\#/,''); // In case an id selector was passed in instead of just the template id
				if ($.isArray(data)) {
					rtn = [];
					//[*] Maybe add a check here to iterate if length is > 50000, otherwise let renderTpl do it.
					//    Verify that the maximum the template engine can handle is 50000, or something else
					for (var i=0, len=data.length; i<len; i++) {
						node = renderTpl(name, Kjs.object.apply(Kjs, [data[i], _statics].concat(args)));
						rtn.push(node);
						if (div) {
							div.append(node);
						}
					}
				} else {
					rtn = renderTpl(name, Kjs.object.apply(Kjs, [data, _statics].concat(args)));
					if (div) {
						div.append(rtn);
					}
				}
			}
			return rtn;
		},
		
		// Primary function - return a template constant value
		// If a template interface block is not defined for tplName, an empty one is created.
		// Later, if define is called, this block is extended and the changes will be reflected
		// in any previous reference.
		$tmpl = function _$tmpl(tplName, prop) {
			if (prop) {
				return _define(tplName)[prop];
			} else {
				return _define(tplName);
				/* [*] Experimental:
				return Kjs.object(true, _define(tplName), {
					statics: {
						$tplid: Kjs.tplid()
					},
					$render: function(elem, name, data) {
						if (typeof name == 'object') {
							data = name;
							name = elem;
							elem = undefined;
						}
						var statics = this.statics;
						if (elem) {
							return _render.call(this, elem, name, Kjs.object(data, statics));
						} else {
							return _render.call(this, name, Kjs.object(data, statics));
						}
					}
				});
				*/
			}
		}
	;

	// Include reference to top-level namespace in statics
	_statics[$env.namespace] = Kjs;

	// Define built-in converters
	Kjs.init(function _$init_tpl($) {
		// Terminal value converter
		$.views.converters('v', function(val) {
			var context = this.ctx.root;
//			var data = this.data; // if needed
			while (typeof val == 'function') val = val.call(context);
			return $s(val, context);
		});
		$.views.converters('minutes', function(val) {
			var context = this.ctx.root;
			while (typeof val == 'function') val = val.call(context);
			var rtn = $s(val, context);
			return (val < 10) ? '0'+val+'&nbsp;' : val;
		});
		$.views.converters('test', function(val) {
			var context = this.ctx.root;
//			debugger;
			return '';
		});
		$.views.tags('xx', function(value) {
//			debugger;
			return value;
		});
		//[*] Experimental:
		$.views.converters('id', function(hook) {
			var 
				tag = this,
				view = tag.tagCtx.view,
				data = tag.ctx.root
			;
//			debugger;
			return data.$tplid.statics.$id.call(data, hook, view.index);	//[*] OMG!!!
//			return Kjs.id(hook, view.index);
		});
	});
	
	Kjs.globalDef('$tmpl', $tmpl);	// Convenient global reference
	
	return Kjs.extend($tmpl, {
		load: _load,		// Load a template from a file
		add: _add,			// Define a template from HTML string
		define: _define,	// Define template constants
		render: _render		// Render a template
	});
});

// ---- End of ns.tpl.js ----
/*!
 * kohls.ajax.js
 * Ajax functionality
 * Author: Bill Hubbard
 */
/*
	Primary Kjs.ajax() function is now a wrapper for $.ajax() calls
 */
/*
	API
		Kjs.ajax.loadFile(urls, opt)
			- Performs an Ajax operation to retrieve a file
			
		Kjs.ajax.loadContent(sel, urls, cache, onLoad)
			- Performs an Ajax operation to retrieve a file and place its content into a DOM element

		Kjs.ajax.load(files, opt)
			- Performs Ajax operations to load one or more files
			
		Kjs.ajax.expiredSession(jqXHR, href)
			- Call from Ajax event handler (success, error, complete) to check for session timeout

		$load - maps to Kjs.ajax.load - not recommended. Use $load methods, instead:
		
		$load.ajax - maps to Kjs.ajax.loadFile
		$load.json - Wrapper for Kjs.ajax.loadFile to load JSON
		$load.html - Wrapper for Kjs.ajax.loadContent
		
		$load.ajax(urls, opt)
			opt.dataType = Data type - inferred from URL file extension and/or path if not defined
			opt.cache = Boolean flag == !$env.isClientDebug if undefined, to control URL caching
			opt.data = Additional data to submit with the Ajax request
			opt.onLoad = function(success, responses) -- Callback after all requests complete
			if opt is a function, it is treated as opt.onLoad

		$load.json(urls, opt)
			opt.cache = Boolean flag == !$env.isClientDebug if undefined, to control URL caching
			opt.data = Additional data to submit with the Ajax request
			opt.onLoad = function(success, responses) -- Callback after all requests complete
			if opt is a function, it is treated as opt.onLoad

		$load.html(urls, opt)
			opt.sel = Selector for target DOM element to receive HTML
			opt.cache = Boolean flag == !$env.isClientDebug if undefined, to control URL caching
			opt.data = Additional data to submit with the Ajax request(s)
			opt.onLoad = function(success, responses) -- callback after all content has been loaded
			if opt is a function, it is treated as opt.onLoad
			if opt is a string, it is treated as opt.sel

	NOTES
		An attempt was made to prevent multiple requests for the same file to go through, before
		realizing that a blocked request would not get any data in its callback. If this functionality
		is needed, the results of the original request would need to be cached to be returned in subsequent
		calls. But rather than deal with that, no protection against multiple loading has been added.
		
		Except for loadContent. The only known use of loadContent thus far is for loading templates,
		which should only ever be loaded once, since they define script tags with IDs.
		Now this is getting screwy, because loadContent is also used by loadHtml ($load.html), which
		shouldn't necessarily need multiple-load protection.
		
		Here's how it works now. A flag, _isStatic, controls whether to provide multiple-load protection.
		_loadHtml does not set this flag, but _loadContent does. However, _loadContent is now a wrapper
		around _loadHtmlContent, which is what _loadContent used to be. So, instead of setting the flag
		in _loadHtmlContent (which is now shared by both _loadContent and _loadHtml), the flag is set 
		only in _loadContent. There is no configuration option in the API to control this, as the _loadContent
		signature was retained for backward compatibility, and it does not accept an object parameter,
		though it would be really nice if it did, considering the number of parameters is has now.
 */

// $requires(['kohls.tpl.js']);

$module('ajax', function(log, env, module, Kjs) {
	var
		// Registry of URL requests to prevent loading the same resource multiple times.
		// Currently, files with .json are excluded, as well as any request with dataType == 'json'.
		//[*] UPDATE: Only dataType: 'html' (i.e. loadContent) makes use of this - see notes in comment header.
		_registry = {},
		
		_isStatic = false,		// Set to true to enable multiple-load protection

		// Check if URL request should be allowed to go through
		_allow = function(url) {
			var ok = true, entry;
//			// JSON requests are always allowed. Check others.
//			if (!opt.dataType == 'json' && !url.match(/.*\.json/i)) {
			if (_isStatic) {
				// See if url has been previously requested
				entry = _registry[url];
				if (!entry) {
					// It has not - register it and allow it (ok remains unchanged)
					_registry[url] = true;
				} else {
					// It has been previously requested - do not allow it
					ok = false;
				}
			}
			return ok;
		},
		
		// Determine dataType based on file extension
		_dataType = function(url, type) {
			if (!type) {
				if (url.match(/.*\.css$/i)) {			// loadFile will likely never be used for CSS
					type = 'text';
				} else if (url.match(/(^tmpl|\/tmpl)\/.*\.js$/i)) {
					type = 'html';
				} else if (url.match(/.*\.js$/i)) {		// loadFile will likely never be used for JS
					type = 'script';
					// If you get this warning, it is either because you are loading a script,
					// or you intended to load a template, but the template is not under the tmpl/ folder.
					// Template files *should* ne named with .html extension, but we're naming them with .js for some reason.
					log.warn('loadFile set to load JavaScript - explicitly specify dataType: "html" if loading a template.');
				} else if (url.match(/.*\.html$/i)) {	// In the event we rename our templates to .html like they should be
					type = 'html';
				} else if (url.match(/.*\.xml$/i)) {	// XML
					type = 'xml';
				} else if (url.match(/.*\.txt$/i)) {	// Text
					type = 'text';
				} else if (url.match(/.*\.json$/i)) {	// Explicitly JSON
					type = 'json';
				}
				// Else it's anybody's guess (.jsp could be anything) - there is no default
			}
			return type;
		},

		// Core method for loading file(s) from within KJS environment.
		// Invokes Dependency Manager to resolve urls
		// opt.onLoad(success, responses)
		// opt.data - opt.data takes precedence over $env.cacheBuster value if property name collides
		// opt.cache
		// opt.noBuster
		// opt.dataType
		_loadFile = function _$loadfile(urls, opt) {
			urls = [].concat(urls||[]);
			// Normalize opt to an object - if opt is a function, convert it to opt.onLoad
			opt = ((typeof opt == 'function') ? {onLoad: opt} : opt)||{};
//			opt.data = Kjs.extend(opt.data, {v: $s('${$env.built}')});
			// Set opt.cache to !$env.isClientDebug if undefined
			opt.cache = (opt.cache !== undefined) ? opt.cache : !Kjs.env('isClientDebug');
			var 
				count = urls.length,
				single = count == 1,
				responses = [],
				success = true,
				origUrls = [].concat(urls),

				// Invoke opt.onLoad if last response
				respond = function() {
					var 
						inInit = Kjs.init().inInit,
						msg = 'Ajax loadFile onLoad sync ${flag} for ' + origUrls.join(',')
					;
					count--;
					if (!count && opt.onLoad) {
						if (inInit) Kjs.sync(1, $s(msg, {flag: 'hold'}));	// Remain in $init until after onLoad is called
						Kjs._(function() {
//							opt.onLoad.call(context, success, single ? responses[0] : responses);
							opt.onLoad(success, single ? responses[0] : responses);
							if (inInit) Kjs.sync(0, $s(msg, {flag: 'release'}));
						});
					}
				},
				
				// Handle Ajax completion for all requested urls
				// Invoke opt.onLoad after all requests complete
				onComplete = function(context, jqXHR, status, responseText) {
					var response = this;
					// Store the response as specified by the jqXHR object
					responseText = jqXHR.responseText;
					
					if ($().jquery == '1.7.2') {
						// If successful, inject the HTML into all the matched elements
						if ( jqXHR.isResolved() ) {
							// #4825: Get the actual response in case
							// a dataFilter is present in ajaxSettings
							jqXHR.done(function( r ) {
								responseText = r;
							});
						}
					}
					if (status !== 'success') {
						success = false;
						log.error({
							msg: $s('loadFile failed to load "${options.url}" (' + status +': ${status} - ${statusText})', jqXHR),
							$noErrorLog: context.$handled	//[*] $err does not expose isHandled in public API
						}, jqXHR);
					}
					// Update response object in responses list
					Kjs.extend(response, {
						jqXHR: jqXHR,
						status: status, 
						statusText: jqXHR.statusText, 
						responseText: responseText
					});
					
					respond();
				},

				bust = Kjs.env('cacheBuster')||'',
				buster = {},

				url, response, dataType
			;

			// Include cache buster, unless explicitly excluded
			if (!opt.noBuster) {
				bust = bust.match(/^[?](.*)?\=(.*)/);
				if (bust) {
					buster[bust[1]] = bust[2];
				}
			}
			
			while (urls.length) {
				// Compute full URL
				url = Kjs.fullUrl( urls.shift(), opt );
				// Determine the data type
				dataType = _dataType(url, opt.dataType);
				// Create reference response object
				response = {
					url: url,
					denied: !_allow(url)	// Deny if this is a disallowed repeat request for static content
				};
				// Push it to the responses list
				responses.push(response);
				try {
					// If request is allowed then send it, otherwise issue warning and retreat
					if (!response.denied) {
						$.ajax({
							url: url,
							type: 'GET',
							cache: opt.cache,
							dataType: dataType,
							data: Kjs.object(buster, opt.data),
							error: opt.onError,
							complete: Kjs.bindEx(response, onComplete),
							onDelayed: opt.onDelayed,
							delayTimeout: opt.delayTimeout
						});
					} else {
						if (log.warn.enabled) log.warn('Previously requested file will not be reloaded: ' + url);
						success = false;
						response.status = 'denied';
						respond();
					}
				} catch(e) {
					success = false;
					response.status = 'exception';
					respond();
					log.error('loadFile exception', e);	//[*] Add $info to this entry?
				}
			}
			// Invoke opt.onLoad, if defined, if no asynchronous requests were sent
//			if (!count && opt.onLoad) {
//				Kjs._(function() {
//					opt.onLoad(success, single ? responses[0] : responses);
//				});
//			}
		},
		
		// Convenient wrapper for _loadFile to retrieve JSON content.
		// See _loadFile for opt options
		// opt.onLoad
		// opt.dataType = 'json' - cannot override
		// opt.noBuster - if true, excludes $env.cacheBuster parameter
		_loadJson = function _$loadjson(urls, opt) {
			opt = ((typeof opt == 'function') ? {onLoad: opt} : opt)||{};
			opt = Kjs.descend(opt, {dataType: 'json'});
			opt.onLoad = Kjs.bindF(opt.onLoad, function(onLoad, success, response) {
				var responses = [].concat(response), n = responses.length, datas = [], resp;
				while (responses.length) {
					resp = responses.shift();
					try {
						datas.push((resp.status == 'success') ? JSON.parse(resp.responseText) : null);
					} catch(e) {
						datas.push((resp.status == 'success') ? resp.responseText : null);
						if (typeof resp.responseText != 'object') {
							log.warn('Unable to parse JSON response', e);
						}
					}
				}
				return {args: [(n==1) ? datas[0] : datas]};
			});
			_loadFile(urls, opt);
		},
		
		// Replacement for calling jQuery $(...).load(...), with the option to cache the
		// results.  
		// Call as:
		//   Kjs.loadContent({
		//		sel: '#targetElem',			// This is the div into which the content is loaded
		//		url: '/my/url/for/html',	// URL for the content file to load - follows Kjs.fullUrl behavior
		//		cache: true,				// Whether to cache or not - default is driven by $env.isClientDebug
		//		onLoad: function(success, responses) {	// Callback to call whether successful or not
		//			// Callback code here
		//		}
		//   });
		// sel = Selector for target div to append loaded content. If more than one URL is specified,
		//       the target is not erased, first, and the content is appended.
		// url = string, or list of strings, naming the url(s) of the content to retrieve.
		// cache = true|false to specify whether request(s) are cached
		// noBuster = If true, ignores $env.cacheBuster query parameter, e.g. "?v=23343445"
		// onLoad = callback to call upon completion of load(s) - onLoad(success, responses)
		//            success = true|false to indicate that all load(s) completed successfully
		//            If more than one url was specified, all successful loads are appended to target.
		//            responses = List of one or more response objects (see loadFile), equal to the number of URLs specified.
		//            The order of responses is not guaranteed to be the same as the order of URLs specified.
		// data = Additional data to include in the Ajax request(s)
		//[*] Revise comments - params have been replaced by opt object - see comments in _loadComment for reference
		// opt.strip = If true, any special comment sequences in the response are stripped out: "<!--*" and "*-->, but not the text in between!
		_loadHtmlContent = function _$loadcontent(urls, opt) {
			var
				_onLoad = opt.onLoad
			;
			
			//[*] Problem: if a request is made to reload a template, and _isStatic is true,
			//    the request to _loadFile will not send a request to the server, and thus
			//    will not receive a response in the load handler, as the response object from the
			//    original request is not saved.
			_loadFile(urls, Kjs.descend(opt, {
				dataType: 'html',
				onLoad: function(success, responses) {
				    var 
				    	responseList = [].concat(responses),
				    	response, html,
				    	single = (responseList.length == 1)
				    ;
				    while (responseList.length) {
						response = responseList.shift();
						// Multiple requests for static content is denied, so there will be
						// no response from a repeat request. For us, that means ignoring it,
						// since it has been processed already. Only process what has been allowed.
						if (!response.denied) {
							html = response.responseText;
							if (html) {
								// Strip out any special comments
								if (opt.strip) {
									html = html.replace(/(\<\!--\*)|(\*--\>)/g,'');
								}
								if (response.status == 'success') {
									if (single) {
								    	// Single response for single URL - replace target HTML (backward-compatible behavior)
										$(opt.sel).html(html);
									} else {
								    	// Multiple responseList - append all successfully loaded content to target
										$(opt.sel).append(html);
									}
								}
							} //[*] Else report null return
						} //[*] Else report denied request? I believe this is reported elsewhere
				    }
					if (_onLoad) {
						_onLoad.call(this, success, responses);
					}
				}
			}));
		},
		
		// Wrapper for _loadHtmlContent to provide multiple-load protection
		// Optional calling signature:
		//   _loadContent(urls, opt)
		// opt.sel = Selector for target element
		// opt.cache = True to cache the request
		// opt.noBuster = If true, ignores cache buster query parameter
		// opt.onLoad = Callback to call when all urls have loaded
		// opt.data = Optional data to send in request
		// opt.strip = True to strip off special comment characters <!--* and *-->, leaving the text in between
		// Support for strip is only provided through calling signature _loadContent(urls, opt)
		_loadContent = function(sel, urls, cache, onLoad, data) {
			var opt;
			if (typeof urls == 'object' && !$.isArray(urls)) {
				opt = urls;
				urls = sel;
			} else {
				opt = {
					sel: sel, 
					cache: cache, 
					onLoad: onLoad, 
					data: data
				};
			}
			_isStatic = !opt.allowReload; // To support Kjs.tpl.load for reloading after target div has been removed
			_loadHtmlContent.call(this, urls, opt);
			_isStatic = false;
		},
		
		// Given an id, if the element does not exist, a hidden div is created
		_hiddenDiv = function(id) {
			var div = $('#'+id);
			if (!div.length) {
				div = $('<div/>').attr('id', id).css('display', 'none').appendTo('body');
			}
			return div;
		},
		
		// Convenient wrapper for _loadContent to provide consistent calling signature for $load.html
		// urls = One, or a list of one or more URLs to load
		// opt = string to define selector for target element, or object specifying various options:
		// opt.sel = Selector for target element. If target does not exist, and sel is an id selector, a hidden div is created.
		// opt.cache = Whether to cache the request(s)
		// opt.onLoad = Load callback to get called once all URLs have been loaded
		// opt.data = Additional data to include in the Ajax request(s)
		_loadHtml = function _$loadhtml(urls, opt) {
			if (typeof opt == 'string') {
				opt = {
					sel: opt
				};
			}
			if (opt.sel[0] == '#') {
				_hiddenDiv(opt.sel.substr(1));
			}
			_loadHtmlContent(urls, opt);
		},
		
		// Call from Ajax handlers to check for session timeout.
		// jqXHR - the jQuery XHR object received in the handler
		// href - the URI to redirect to, or a callback function call, if session is expired
		//        If href is undefined, $env.expiredSessionUrl is used by default
		//        If href is ultimately undefined, there are no side effects.
		// Returns true if session expired, or false otherwise
		_expiredSession = function(jqXHR, href) {
			var 
				responseText = jqXHR.responseText||'',
				expired = (jqXHR.status == 409)
			;
			if (responseText) {
				expired = expired || responseText.match(/(session expired)|(session has timed out)/i);
			}
			if (expired) {
				href = href||Kjs.env('expiredSessionUrl');
				if (typeof href == 'function') {
					href();
				} else if (href) {
					Kjs.global.location.href = href;
				}
			}
			return expired;
		},
		
		// Ajax loader namespace
		_load = {
			ajax: _loadFile,		// For loading data
			json: _loadJson,		// For loading JSON
			html: _loadHtml			// For loading html
		},

		// Calling signature: $ajax(opt[, ...])
		$ajax = function() {
			var args = Array.prototype.slice.call(arguments, 0);
			return $.ajax(Kjs.extend.apply(Kjs, args));
		}		
	;
		
	Kjs.extend($ajax, {
			// Core method for loading a file from within KJS environment.
			// Invokes Dependency Manager to locate files
			loadFile: _loadFile,
			
			// Replacement for jQuery's $().load() - to provide cache control
			loadContent: _loadContent,

			// Call from Ajax handlers to check for session timeout.
			expiredSession: _expiredSession,
			
			// Common loader utility
			load: _load
	});

	// Extend central Kjs.load namespace (and subsequently $load, if defined)
	Kjs.extend(Kjs.load, _load);
		
	// For backward-compatability
	Kjs.loadContent = $ajax.loadContent;
	
	// Public API
	return $ajax;
});

// ----- End of kohls.ajax.js -----

/*!
 * kohls.idgen.js
 * Supports markup id generation and hook id map registry for UI rendering (via templates)
 * Author: Bill Hubbard
 */
// Usage:
//   var idgen = Kjs.idgen({idPrefix: 'mycomponent'});
//
// idPrefix is currently the only configuration option (default = 'kohls')
//
// Produces an object with two properties:
//   - statics - Statics block to provide $id static for use in templates
//   - api - API block with which to extend the component API to which this will be applied.
//           Adds hookSel and getHooks methods.
//
// The api block is typically applied to the component entity, which adds the
// hookSel and getHooks methods to the entity.
//     var entity = Kjs.object(newEntity(), idgen.api);
//
// The statics are then applied to the component statics to provide the
// $id static function:
//     entity.statics = Kjs.extend({
//         $K: entity.K
//     }, idgen.statics);
//
/*jsl:declare _$id*/
$module('idgen', function(log, env, module, Kjs) {
	var
		// Default config
		_defCfg = {
			idPrefix: $env.idPrefix||'Kjs'
		},
		
		// Public API
		$idgen = function _$idgen(opt) {
			var
				// Define working constants
				_K = Kjs.descend(_defCfg, opt),
				
				// Hook registry
				_hooks = {},
				
				_statics = {					
					// Core static id generator
					// @param {string} [hook] Name of hook to which to assign the generated id
					// @param {string} [rootId] Markup id or root id prefix (for iterated items)
					// Called in context of template context object, which carries the data object used in rendering.
					//
					// The data may specify $K static for custom constants from rendering context,
					// and $idx static to indicate the current iteration index when rendering a list
					// of related elements (will get an id of {rootId}_{data.$idx}).
					// Hooks are elements which are tagged with an id, so an id can be registered with
					// a hook name for later lookup in code to get a handle on the element in the DOM
					// through its hook name (this way code does not need to know anything about where
					// the element is - it will just find it, and find it efficiently via id selector).
					// For hooks to work, $id must be called within the context ("this") of an object
					// that specifies a hooks property, which must be an object (associative array) and
					// must be defined.
					// Multiple ids can be generated for the same hook. In fact, for iterated items,
					// the hook list for a given hook name will list the ids for each element according
					// to its index.
					// The rootId is typically not provided, unless a specific or desired id is provided
					// by the code or template. If rootId is not specified, it will be generated:
					//   - If data.$idx is not specified, rootId will always be unique and will become the id
					//   - If data.$idx is specified, rootId or the previous/latest rootId will be used
					//     in the id, generating an id in the format {rootId}_{data.$idx}
					//   - Regardless of whether rootId is specified, if the id is the same as in the
					//     previous call and no iteration is being performed (data.$idx is NaN), then a
					//     unique id will be generated.
					$id: function _$id(hook, rootId) {
						var 
							data = ($env.jsRender) ? this : this.data,
							K = data.$K||{},
							idx = (+data.$idx),
							newid = function() {
								return Kjs.id(K.idPrefix||_K.idPrefix);
							},
							id
						;
						// Establish root id
						rootId = rootId || (!isNaN(idx) ? _$id.rootId : '') || newid();
						if (rootId == _$id.rootId && (isNaN(idx)) || (!isNaN(_$id.idx) && idx <= _$id.idx)) {
						 	rootId = newid();
						}
						// Establish id
						if (!isNaN(idx)) {
							id = rootId + '_' + idx;
						} else {
							id = rootId;
						}
						// Register id with hook, if specified
						if (hook) {
							hook = (_hooks[hook] = (_hooks[hook]||[]));
							if (!isNaN(idx)) {
								hook[idx] = id;
							} else {
								hook.push(id);
							}
						}
						// Cache generated ids
						_$id.rootId = rootId;	// Save as last generated root id
						_$id.id = id;			// Save as last generated id
						_$id.idx = idx;			// Save as last index
						$idgen.lastId = id;
						return id;
					},
					
					// 
					$hide: function(hide) {
						return hide ? 'hide' : '';
					}
				},
		
				// Return the id selector for the named hook and index (if any).
				// A template could specify something like:
				// '<div id="${$id($K.hookSegment)}">'
				// In which case, the $K static is referenced to get the name of
				// the hook used to identify an accordion segment, and that string
				// is passed into the $id static, so that when $id generates an id,
				// it also records that id in a map, using the hook name as the key.
				// Later, code can simply call me.hookSel(_K.hookSegment, idx) to
				// return an id selector that can be passed directly to jQuery to
				// get a reference of the related DOM element.
				// An empty string is returned if no id is mapped to the given name.
				_hookSel = function(name, idx) {
					var 
						hook = _hooks[name], 
						id = ''
					;
		
					if (hook) {
						if (idx === undefined) {
							var hooks = [].concat(hook);
							$.each(hooks, function(idx) {
								hooks[idx] = '#'+hooks[idx];
							});
							id = hooks.join(',');
						} else {
							id = '#' + hook[idx||0];
						}
					}
					return id;
				},
		
				// Return list of all hooks defined for specified hook name,
				// or empty list if none
				_getHooks = function(name) {
					return _hooks[name]||[]; 
				}
			;
			
			return {
				statics: _statics,
				api: {
					hookSel: _hookSel,
					getHooks: _getHooks
				}
			};
		}
	;
	
	// Return the public API
	return $idgen;
});

// ---- End of kohls.idgen.js ----
/*!
 * kohls.tplid.js
 * Supports markup id generation and hook id map registry for UI rendering (via templates)
 * Author: Bill Hubbard
 */
// Usage:
//   var tplid = Kjs.tplid({idPrefix: 'mycomponent'});
//
// idPrefix is currently the only configuration option (default = 'kohls')
//
// Produces an object with two properties:
//   - statics - Statics block to provide $id static for use in templates
//   - api - API block with which to extend the component API to which this will be applied.
//           Adds hookSel and getHooks methods.
//
// The api block is typically applied to the component entity, which adds the
// hookSel and getHooks methods to the entity.
//     var entity = Kjs.object(newEntity(), tplid.api);
//
// The statics are then applied to the component statics to provide the
// $id static function:
//     entity.statics = Kjs.extend({
//         $K: entity.K
//     }, tplid.statics);
//
/*jsl:declare _$id*/
$module('tplid', function(log, env, module, Kjs) {
	var
		// Default config
		_defCfg = {
			idPrefix: 'kohls'
		},
		
		// Public API
		// opt.idPrefix = prefix for IDs
		$tplid = function _$tplid(opt) {
			var
				// Define working constants
				_K = Kjs.descend(_defCfg, opt),
				
				// Hook registry
				_hooks = {},
				
				_statics = {
					//[*] UPDATE THESE COMMENTS 4/22/2016
					// Core static id generator
					// @param {string} [hook] Name of hook to which to assign the generated id
					// @param {string} [rootId] Markup id or root id prefix (for iterated items)
					// Called in context of template context object, which carries the data object used in rendering.
					//
					// The data may specify $K static for custom constants from rendering context,
					// and $idx static to indicate the current iteration index when rendering a list
					// of related elements (will get an id of {rootId}_{data.$idx}).
					// Hooks are elements which are tagged with an id, so an id can be registered with
					// a hook name for later lookup in code to get a handle on the element in the DOM
					// through its hook name (this way code does not need to know anything about where
					// the element is - it will just find it, and find it efficiently via id selector).
					// For hooks to work, $id must be called within the context ("this") of an object
					// that specifies a hooks property, which must be an object (associative array) and
					// must be defined.
					// Multiple ids can be generated for the same hook. In fact, for iterated items,
					// the hook list for a given hook name will list the ids for each element according
					// to its index.
					// The rootId is typically not provided, unless a specific or desired id is provided
					// by the code or template. If rootId is not specified, it will be generated:
					//   - If data.$idx is not specified, rootId will always be unique and will become the id
					//   - If data.$idx is specified, rootId or the previous/latest rootId will be used
					//     in the id, generating an id in the format {rootId}_{data.$idx}
					//   - Regardless of whether rootId is specified, if the id is the same as in the
					//     previous call and no iteration is being performed (data.$idx is NaN), then a
					//     unique id will be generated.
					$id: function _$id(hook, idx, rootId) {
						var 
							context = this,
							data = context.data,
							K = data.$K||{},
							newid = function() {
								return Kjs.id(K.idPrefix||_K.idPrefix);
							}, id
						;
						
						idx = (isNaN(idx)) ? (+data.$idx) : idx;
						
						// Establish root id
						rootId = rootId || (!isNaN(idx) ? _$id.rootId : '') || newid();
						if (rootId == _$id.rootId && (isNaN(idx)) || (!isNaN(_$id.idx) && idx <= _$id.idx)) {
						 	rootId = newid();
						}
						// Establish id
						if (!isNaN(idx)) {
							id = rootId + '_' + idx;
						} else {
							id = rootId;
						}
						// Register id with hook, if specified
						if (hook) {
							hook = (_hooks[hook] = (_hooks[hook]||[]));
							if (!isNaN(idx)) {
								hook[idx] = id;
							} else {
								hook.push(id);
							}
						}
						// Cache generated ids
						_$id.rootId = rootId;	// Save as last generated root id
						_$id.id = id;			// Save as last generated id
						_$id.idx = idx;			// Save as last index
						$tplid.lastId = id;
						return id;
					},
					
					// 
					$hide: function(hide) {
						return hide ? 'hide' : '';
					}
				},
		
				// Return the id selector for the named hook and index (if any).
				// A template could specify something like:
				// '<div id="${$id($K.hookSegment)}">'
				// In which case, the $K static is referenced to get the name of
				// the hook used to identify an accordion segment, and that string
				// is passed into the $id static, so that when $id generates an id,
				// it also records that id in a map, using the hook name as the key.
				// Later, code can simply call me.hookSel(_K.hookSegment, idx) to
				// return an id selector that can be passed directly to jQuery to
				// get a reference of the related DOM element.
				// An empty string is returned if no id is mapped to the given name.
				_hookSel = function(name, idx) {
					var 
						hook = _hooks[name], 
						id = ''
					;
		
					if (hook) {
						if (idx === undefined) {
							var hooks = [].concat(hook);
							$.each(hooks, function(idx) {
								hooks[idx] = '#'+hooks[idx];
							});
							id = hooks.join(',');
						} else {
							id = '#' + hook[idx||0];
						}
					}
					return id;
				},
		
				// Return list of all hooks defined for specified hook name,
				// or empty list if none
				_getHooks = function(name) {
					return _hooks[name]||[]; 
				},
				
				_clear = function() {
					Kjs.drain(_hooks);
				}
			;
			
			return {
				hookSel: _hookSel,
				getHooks: _getHooks,
				clear: _clear,
				statics: _statics
			};
		}
	;
	
	// Return the public API
	return $tplid;
});

// ---- End of kohls.tplid.js ----
/*!
 * kohls.storage.js
 * Local storage utility
 * Author: Bill Hubbard
 */
$module('storage', function(log, env, module, Kjs) {
	var
		_global = Kjs.global,
		_noDOM = Kjs.noDOM,
		_emptyFn = Kjs.emptyFn,
		_apiCookie = (!_noDOM) ? Kjs.cookie : {
			get: _emptyFn,
			set: _emptyFn,
			create: _emptyFn
		},
		_K = {
			clear: 1,
			change: 2
		},
		_monitor = {},
		_protocol = (_global.location+'').split(':')[0],
		_cookieName = 'staleStorage',
		
		// This maintains the properties that go into the cookie
		_cookie = { count: 0 },	// This indicates how many properties are in the cookie so we know when to delete it
		
		// _changed is used to track which monitored keys have been updated
		// in the scenario where localStorage between http and https is stale
		// (i.e. we've landed on https but http has current data, or visa versa).
		// Since the cookie does not track changes per key, _getData and _saveData
		// are used to do that, by checking the "who" flag on the first get, and
		// using _changed map to keep track of which keys have been updated.
		_changed,	// Defined if "who" differs, and is used to track which monitored fields have been updated
		
		// For initialization of property monitors
		// Monitor property format:
		//   property_name: {
		//       state: _K.clear | _K.storage	// Monitor property for value change, or for value clear (null)
		//   }
		_initMonitors = function(monitor) {
			Kjs.extend(_monitor, monitor);
		},

		// Any URL parameters gathered from URL
		_params = {},

		// Handler to gather URL params from page URL
		_urlParams = function() {
			var match,
				pl = /\+/g,  // Regex for replacing addition symbol with a space
				search = /([^&=]+)=?([^&]*)/g,
				decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); },
				query  = _global.location.search.substring(1)
			;
	
			Kjs.drain(_params);
			while (match = search.exec(query)) {
				_params[decode(match[1])] = decode(match[2]);
			}
			return _params;
		},

		//[*] @DEPRECATED - Use Kjs.cookie.get
		// Retrieve value from cookie
		_getCookie = _apiCookie.get,

		//[*] @DEPRECATED - Use Kjs.cookie.create
		// Creates a cookie
		_createCookie = _apiCookie.create,

		// Clears the monitor cookie (if cookieName is undefined) or any named cookie
		//[*] NOT RECOMMENDED FOR USE OUTSIDE OF Kjs.storage COOKIE - USE Kjs.cookie.set INSTEAD
		_clearCookie = function(cookieName) {
			_apiCookie.set(cookieName||_cookieName, undefined);
		},
		
		// Clears local storage & cookie, preserving $env
		_clear = function() {
			var env;
			if (Kjs.hasLocalStorage) {
				env = localStorage.getItem('$env');
				localStorage.clear();
				localStorage.setItem('$env', env);
			}
			_clearCookie();
		},
		
		// This checks what monitored criteria has been met, and sets a cookie property
		_updateCookie = function(key, data) {
			if (key) {
				var item = _monitor[key], skip = false;
				if (item.state == _K.clear && (data === undefined || data === null)) {
					// Key that is being monitored for null data has been nullified
					if (_cookie[key] === undefined) _cookie.count++;
					_cookie[key] = null;
				} else if (item.state == _K.change) {
					// Key that is being monitored for change has been changed
					if (_cookie[key] === undefined) _cookie.count++;
					_cookie[key] = data;// If clearing the data, set a cookie to report what protocol we're using
				} else {
					// No action
					skip = true;
				}
			}
			if (!skip) {
				if (_cookie.count) {
					// Indicate who updated the cookie - http or https
					_cookie['who'] = _protocol;
					_apiCookie.create(_cookieName, JSON.stringify(_cookie), 1);
				} else {
					// No more properties - clear the cookie, cache is no longer stale
					_clearCookie();
				}
			}
		},
		
		_saveData = function(key, data) {
			if (Kjs.hasLocalStorage) {
				// Check for a monitored key and update cookie accordingly
				if (_monitor[key]) {
					if (_changed) _changed[key] = true;
					_updateCookie(key, data);
				}
				localStorage.setItem(key, JSON.stringify(data));
			} 
		},

		_getData = function(key) {
			var 
				data = null,
				cookie = _apiCookie.get(_cookieName),
				stale, val
			;
			// If cookie exists, get the data out of it
			if (cookie) {
				_cookie = JSON.parse(cookie);
			}
			// Check if storage was invalidated from a page using another protocol
			if (_monitor[key] && _changed) {
				stale = !_changed[key];
			} else {
				stale = cookie ? (_cookie.who != _protocol) : false;
				if (stale){
					_changed = _changed||{};
				}
			}
			val = _cookie[key];
			if (Kjs.hasLocalStorage) {
				// Check if stale monitored key is in the cookie
				if (stale && _monitor[key] && val !== undefined) {
					if (_changed) _changed[key] = true;
					localStorage.setItem(key, val);
					delete _cookie[key];
					_cookie.count--;
					_updateCookie();
				}
				data = localStorage.getItem(key);
				if (data === '') data = 'null';
				data = JSON.parse(data);
			}
			return data;
		}
	;

//	//[*] Perhaps install event handler more indirectly to avoid clobbering any existing onpopstate value - DONE
//	_global.onpopstate = _urlParams;
	if (_global.addEventListener){
		addEventListener('popstate', _urlParams, false);
	} else {
		attachEvent('popstate', _urlParams);
	}

	// Globals for backward compatibility with pre-existing code
	_global.createCookie = _createCookie;
	_global.getCookie = _getCookie;
	$init(function _$init_storage($) {
		_global.createCookie = _createCookie;
		_global.getCookie = _getCookie;
	});

	return {
		K: _K,									// Expose constants for external use (like in init.data.js)
		initMonitors: _initMonitors,			// Allows for installation of monitor definitions (see init.data.js)
		params: _params,						// URL parameters
		hasLocalStorage: Kjs.hasLocalStorage,	// Boolean flag to indicate if localStorage is present (FOR BACKWARD COMPATIBILITY)
		getCookie: _getCookie,					// Get a cookie value [*] DEPRECATED - use Kjs.cookie.get
		createCookie: _createCookie,			// Create a cookie [*] DEPRECATED - use Kjs.cookie.create or Kjs.cookie.set
		saveData: _saveData,					// Save data to local storage
		getData: _getData,						// Get data from local storage
		clearCookie: _clearCookie,				// Clears a cookie (or the monitor cookie by default) 
		clear: _clear							// Clears cookie and local storage, preserving $env
	};	
});

// ---- End of kohls.storage.js ----
/*!
 * kohls.message.js
 * Generic publish-subscribe messaging scheme
 * Author: Bill Hubbard
 */
//[*] EXPERIMENTAL - IN DEVELOPMENT

/*
	Kjs.message.addListener('update', listener); // Add a listener to respond to all 'update' messages
	
	setting disabled property on listener (listener.disabled = true) will disable that
	listener. For example:
		var updateListener = function(payload) { ... }
		Kjs.message.addListener('update', updateListener);
		...
		updateListener.disabled = true; // Disables listener
		
	Kjs.message.send('update'); // Sends an 'update' message, with no payload
	Kjs.message.send('update', 'portlets'); // Sends an 'update' message with a string payload
	Kjs.message.send('update', data); // Sends an 'update' message with an object payload (assuming data is an object)
	
	TODO:
		- Add suspend/resume operation & allow queuing of suspended messages
		- Add response callback support for messages that expect a reply
 */
$module('message', function(log, env, module, Kjs) {
	var
		// Convenient definitions
		_slice = Array.prototype.slice,

		// Channel listener registry
		_registry = {},
		
		// Indicates whether messaging is globally disabled
		_disabled = false,
		
		// Register listeners to a channel - internal
		_setListeners = function(channel, listeners) {
			_registry[channel] = listeners;
		},
		
		// Retrieve listeners registered to a channel - internal
		_getListeners = function(channel) {
			return _registry[channel]||[];
		},
		
		// Removes a listener
		_removeListener = function(channel, listener) {
			var 
				listeners = _getListeners(channel),
				len = listeners.length
			;
			while (len--) {
				if (listeners[len] == listener) {
					listeners.splice(len,1);
				}
			}
			_setListeners(channel, listeners);
		},
		
		// Remove all listeners from a channel
		_removeListeners = function(channel) {
			delete _registry[channel];
		},
		
		// Set or get listeners for a channel
		_listeners = function(channel, listener) {
			var listeners = _getListeners(channel);
			if (listener) {
				listeners.push({
					channel: channel,
					listener: listener
				});
				_setListeners(channel, listeners);
			}
			return listeners;
		},
		
		// Send a message to all listeners on a channel, with optional payload.
		// Listeners are not called with a presumed context. Any required context
		// should be bound to the listener when it is registered.
		// _send(channel[, args...])
		_send = function(channel, payload) {
			var args = _slice.call(arguments, 1);
			if (_disabled) return;
			var listeners = _getListeners(channel);
			$.each(listeners, function(idx, listener) {
				if (!listener.listener.disabled) {
					listener.listener.apply(listener, args);
				}
			});
		},

		// Disable/enable messaging
		_disable = function(disable) {
			if (disable !== undefined) _disabled = disable;
			return _disabled;
		},
		
		// Public API
		$msg = {
			addListener: _listeners,			// addListener(channel, listener)
			removeListener: _removeListener,	// removeListener(channel, listener)
			clearChannel: _removeListeners,		// clearChannel(channel)
			send: _send,						// send(channel, payload)
			disabled: _disable					// disabled(disable)
		}
	;

	Kjs.globalDef('$msg', $msg);
	return $msg;
});

// ---- End of kohls.message.js ----
/*!
 * init.data.js
 * Initialize data utilities
 */
$module(function(Kjs) {
	// Local Storage properties to monitor between HTTP: and HTTPS: frames
	// Kjs.storage.K = constants exposed by Kjs.storage API.
	// Kjs.storage.K.change = Flag to monitor a property for value changes
	// Kjs.storage.K.clear = Flag to monitor a property for clearing (null setting)
	var K = Kjs.storage.K;
	Kjs.storage.initMonitors({
		persistent_bar_drawer_status: {
			state: K.change
		},
		persistent_bar_components_json: {
			state: K.clear
		},
		shopping_bag_recommended_products: {
			state: K.clear
		},
		shopping_bag_recommended_products_Id: {
			state: K.clear
		}, 
		pbAutoOpenOnPageLoad: {
			state: K.change
		}, 
		pbGwpGiftAddOmnitureCapture: {
			state: K.change
		}
	});
});

// ---- End of init.data.js ----
