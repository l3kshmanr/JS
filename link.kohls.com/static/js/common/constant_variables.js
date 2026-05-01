$module("vpJSConstants",function(log, env, module, Kjs){
	var  vpJSConstantsPanel = (function(){
		var jsConstatns = {"CREATE_MERCHANT_GROUPS" 				: "Create Merchant Groups",
						    "VIEW_STYLES_IN_MERCHANT_GROUPS"		: "View Styles in Merchant Groups",
						 	"APPROVE_STYLES_IN_MERCHANT_GROUPS" 	: "Approve Styles in Merchant Groups",
						 	"PUBLISH_CPS" 							: "Publish CPs",
						 	"EDIT_MS_ATTRIBUTES" 					: "Edit MS Attributes",
							"EDIT_IP_ATTRIBUTES" 					: "Edit IP Attirbutes",
							"EDIT_DM_ATTRIBUTES"					: "Edit DM Attributes",
				 			"EDIT_AND_SUBMIT_VENDOR_ATTRIBUTES"		: "Edit & Submit Vendor Attributes",
				 			"TAKE_OWNERSHIP_FROM_VENDOR"			: "Take Ownership from Vendor",
				 			"MERCHANT_GROUP_MAINTANTANCE" 			: "Merchant Group Maintantance",
				 			"UPLOAD_IMAGES"							: "Upload Images",
				 			"APPROVE_IMAGES" 						: "Approve Images",
				 			"ADD_COLOR_SIZE_TO_STYLES"				: "Add Color/Size to styles",
				 			"CREATE_CUSTOM_CPS"						: "Create Custom CPs",
				 			"MANAGE_CUSTOM_CPS"						: "Manage Custom CPs",
				 			"SEARCH_FOR_PRODUCTS"					: "Search for Products",
				 			"PRODUCT_MAINTENANCE"					: "Product Maintenance",
				 			"SEARCH_STATIC_CONTENT"					: "Search Static Content",
				 			"VIEW_STATIC_CONTENT"					: "View Static Content",
				 			"MANAGE_USER_ROLES" 					: "Manage User Roles",
				 			"DELETE_USERS"							: "Delete Users",
				 			"TURN_OFF_ON_EMAIL_TRIGGERS" 			: "Turn Off/On Email triggers",
				 			"UPDATE_ENTER_PACKAGE_SHIPPING_DIMENSIONS" : "Update/Enter package shipping dimensions",
				 			"UPDATE_VENDOR_PACKAGING_CAPABILITIES"	:"Update Vendor Packaging Capabilities",
				 			"VIEW_PACKAGING_CAPABILITY_REPORTS"		: "View Packaging Capability Reports",
				 			"VIEW_VENDOR_VPS_REPORTS"				:"View Vendor VPS Reports",
				 			"PUBLISH/DELETE_VENDOR_VPS_REPORTS"		: "Publish/Delete Vendor VPS Reports",
				 			"VIEW_SALES_PERFORMANCE_PA_REPORT_PAGES" : "View Sales Performance & PA Report Pages",
				 			"GENERAL_TAKE_OWNERSHIP" : "General Take Ownership",
				 			"UPDATE_ENTER_PACKAGESHIPPING_DS_ATTRIBUTE" : "Update/Enter package shipping dimensions (DS Attributes)",
				 			"VIEW_SALES_PERFORMANCE_REPORTS":"View Sales Performance & PA Report Pages",
				 			"VIEW_WORK_FLOW_REPOPTS": "View Workflow/Product Reports",
				 			"VPA_SUMMARY_REPORT":"vpa summary report",
				 			"VENDOR_VPS_REPORTS" :"vendor vps reports",
				 			"SEARCH_RESULT_EDIT_VENDOR_STYLE" : "Edit Vendor Styles",
				 			"SEARCH_RESULT_CUSTOMER_CHOICE" : "Edit Customer Choices",				 			
				 			"SEARCH_RESULT_EDIT_MERCHANTGROUP" : "Edit Merchant Groups",
				 			"SEARCH_RESULT_DELETE_MERCHANTGROUP" : "Delete Merchant Groups",
				 			"SEARCH_RESULT_EDIT_SKUS" : "Edit SKUs",
				 			"SEARCH_RESULT_DELETE_UPC" : "Delete UPCs",
				 			"SEARCH_RESULT_EDIT_CP" : "Edit CPs",
				 			"SEARCH_RESULT_EDIT_ECOMM" : "Edit Ecomm Attributes",
				 			"SEARCH_RESULT_EDIT_PRICING" : "Edit Pricing Attributes",
				 			"PRODUCT_MENU":"Product Menu",
				 			"DIRECT_SHIP_REPORTS":"Direct Ship Reports",
				 			"ADD_PACKAGING_CAPABILITES" : "Add Vendor Packaging Capabilities",
				 			"CRETE_VENDOR_STYLES" : "Create Vendor Styles",
				 			"DOWNLOAD_MERCHANT_GROUPS" : "Download Merchant Groups",
				 			"OTHER_REPORTS" : "View Other Reports",
				 			"ROLE_STATUS_BASED_UPDATES" : {

				 				"MS":{		
				 						"OUTSIDE_P3":{
				 							"NEW": {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MERCHANT ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
				 						},
				 						
					 					"3P_UPDATE" : {
					 						"NEW": {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : false}
					 					},
					 					
					 					"DEPT_CAT_UPDATE" : {
					 						"NEW": {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
					 					},
					 					 
					 					"UPDATE_SPECIFIC_PROD_PDP" : {
					 						"NEW": {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : false}
					 					},
					 					 
					 					"VENDOR_ATTR_AFTER_SUBM_TO_VENODR" : {
					 						"NEW": {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
					 					}
				 					
				 				},
				 				
				 				"DM":{
				 						"OUTSIDE_P3" : {
				 							"NEW": {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MERCHANT ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
				 						},
					 					
					 					"3P_UPDATE" : {
					 						"NEW": {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"REJECTED" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
					 					}
				 					
				 				},
				 				
				 				"IP":{
				 						"OUTSIDE_P3" : {
				 							"NEW": {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MERCHANT ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
				 						},
					 					
					 					"UPDATE_SPECIFIC_PROD_PDP" : {
					 						"NEW": {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : true , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : false}
					 					}
				 					
				 				},
				 				
				 				"VU":{
				 					"UPDATE_VENDOR_ATTR" : {
				 						"NEW": {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : false , "allowed" : true},
					 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"REJECTED" : {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : false},
					 					"MERCHANT ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
					 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
				 					}
				 				},
				 				"DS":{
				 					"UPDATE_DS_ATTR" : {
				 						"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
				 							"NEW": {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR MS ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MS ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"UNDER VENDOR REVIEW" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR IP APPROVAL" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"REJECTED" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"WAITING ON IMAGES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"READY FOR DM ATTRIBUTES" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"MERCHANT ATTRIBUTION COMPLETE" : {"takeOwnershipNeeded" : false , "allowed" : true},
						 					"PUBLISH DENIED" : {"takeOwnershipNeeded" : false , "allowed" : true}
				 					}
				 				}
				 				
				 			}
				 			 
						 },		 	
 		jsConstatnsValues = Object.freeze(jsConstatns);
		return {
			CONSTATNS :  jsConstatnsValues
		}
	})();
	return vpJSConstantsPanel;	
});


			 
			
			
			
			