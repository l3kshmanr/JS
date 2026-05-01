<script id="commonHeaderTmpl" type="text/x-jsrender">
	<div class="header clearfix VPAS-MerchantGroupHeader-header-container">
		{{if type == "createMerchant"}}
			<div class="header-logo-new">
				<a href="/merchandising/MerchantGroupListViewPage" class="logo-home-icon"> <i class="fa fa-home" aria-hidden="true"></i> </a> 
				<span class="header-full-text">
				&nbsp&nbsp&nbsp <i class="fa fa-angle-right"></i> &nbsp&nbsp
				<span class="header-mg"> <a href="/merchandising/MerchantGroupListViewPage"> Merchant Groups </a> </span>&nbsp&nbsp  <i class="fa fa-angle-right"></i> &nbsp&nbsp
				<span class="header-bn"><a data-desc="" href="javascript:void(0)"> <span class="verdor-group-tiltle-name">Create New Merchant Group</span></a></span>
				</span>
			</div>
			<div class="notifications right VPAS-MerchantGroupHeader-header-notification">   	
			<span class="notification_icon {{if notificationInfo.errorCode != '404'}}notification_icon_click{{/if}}"></span><span class="notify_count VPAS-MerchantGroupHeader-header-notification-count">{{if notificationInfo.errorCode == "404"}}0{{else notificationInfo.responseData.notifications.unseenCount>999 }} 999+ {{else}}{{:notificationInfo.responseData.notifications.unseenCount}}{{/if}}</span>
			</div>
			<div class="userdetail"></div>
			<div class="notificationbox"></div>
		{{else}}
			{{if type == "vendorStyleClick"}}
			
							<div class="header-logo-new">
							<!--<a href="#" class="logo-home-icon"> <i class="fa fa-home" aria-hidden="true"></i> </a> -->
							<span class="header-full-text">
									
									<span class="header-mg"> <a href="/merchandising/MerchantGroupListViewPage"> Merchant Groups </a> </span>
									<i class="fa fa-angle-right"></i>
									<span class="header-mg"><a data-desc="" href=""> <span class="verdor-group-tiltle-name"></span></a></span>
									<i class="fa fa-angle-right"></i> 
									<span class="header-bn"><span class="verdor-group-tiltle-page"></span></span>
							</span>
							</div>
							<div class="notifications right VPAS-MerchantGroupHeader-header-notification notification_iconConfig">   	
								<span class="notification_icon {{if notificationInfo.errorCode != '404'}}notification_icon_click{{/if}}"></span><span class="notify_count VPAS-MerchantGroupHeader-header-notification-count">{{if notificationInfo.errorCode == "404"}}0{{else notificationInfo.responseData.notifications.unseenCount>999 }} 999+ {{else}}{{:notificationInfo.responseData.notifications.unseenCount}}{{/if}}</span>
							</div>
							<div class="userdetail"></div>
							<div class="notificationbox"></div>
							{{if ~accessOnPermission().SEARCH_FOR_PRODUCTS }}{{/if}}
							<div class="searchbox"></div>
							<ul class="right VPAS-MerchantGroupHeader-header-nav">
							   <li><a class="search_image" href="javascript:void(0);"><span></span></a> </li>
							  </ul>
							
							 
					{{else}}
					  <a class="logo-name left VPAS-MerchantGroupHeader-header-logo-name" href=""><span class="logo_image"></span><span>Portal</span></a>
					  <div class="notifications right VPAS-MerchantGroupHeader-header-notification">    
					   <span class="notification_icon {{if notificationInfo.errorCode != '404'}}notification_icon_click{{/if}}"></span><span class="notify_count VPAS-MerchantGroupHeader-header-notification-count">{{if notificationInfo.errorCode == "404"}}0{{else notificationInfo.responseData.notifications.unseenCount>999 }} 999+ {{else}}{{:notificationInfo.responseData.notifications.unseenCount}}{{/if}}</span>
					   <a class="oval" href=""><span class="oval_letter">{{if userinfo != null }}{{:userinfo.userName.substring(0,1)}}{{/if}}</span></a>
					  </div>
					  <div class="userdetail"></div>
					  <div class="notificationbox"></div>
					  <div class="searchbox"></div>
					  
					
					  <ul class="nav right VPAS-MerchantGroupHeader-header-nav hide"> 
					   <li><a class="active VPAS-MerchantGroupHeader-header-nav-title-merchant-group merchantGroupNav " href="/merchandising/MerchantGroupListViewPage">Merchant Groups</a></li>
					   <li><a class="VPAS-MerchantGroupHeader-header-nav-title-people reportNav " href="/merchandising/reportBuilderPage">Report builder</a></li>
					   <li><a class="VPAS-MerchantGroupHeader-header-nav-title-people cpNav " href="/cp/home">CP Mgmt</a></li>
					  </ul>
					  {{if ~accessOnPermission().SEARCH_FOR_PRODUCTS }}
					  <ul class="right VPAS-MerchantGroupHeader-header-nav">
					   <li><a class="search_image" href="javascript:void(0);"><span></span></a> </li>
					  </ul>
					  {{/if}}
			{{/if}}
		
  

		{{/if}}
	</div>
</script>
<script id="userSignoutTmpl" type="text/x-jsrender">
<div class="user_info_container">
<form id="logoutFrom" action="/logout" method="POST">
 <div class="user_info">
   <div class="left_user_info">
	   <div class="right VPAS-MerchantGroupHeader-header-notification">
		<a class="user_name_letter" href=""><span class="user_first_letter">{{if userInfo != "" && userInfo.userName != undefined }}{{:userInfo.userName.substring(0,1)}}{{/if}}</span></a>
	   </div>
   </div>
   <div class="right_user_info">
     <ul>    
     	<li class="user_name">{{if userInfo != null }}{{:userInfo.userName}}{{else}}  {{:userInfo.userOktaDetails}}{{/if}}</li>
     	<li class="user_role">{{if userInfo != null }}{{if userInfo.role != "VU" && userInfo.role != "VA"}}{{:userInfo.role}}{{else}}Vendor{{/if}}{{/if}}</li>
     	{{if userInfo != null}}     		
     		{{if userInfo.userOktaDetails.admin != 'false' && userInfo.userOktaDetails.admin != false && userInfo.userOktaDetails.admin && userInfo.role != "VU" && userInfo.role != "VA" && userInfo.role != "Vendor"}}
     			<li id="admin"> <a href="/user/getuserprofile?type=kohlsUserDashboard">Admin Dashboard</a></li>
     		{{/if}}
     		{{if userInfo.userOktaDetails.admin != 'false' && userInfo.userOktaDetails.admin != false && userInfo.userOktaDetails.admin && (userInfo.role == "VU" || userInfo.role == "VA" || userInfo.role == "Vendor" )}}
     			<li id="vendorUser"> <a href="/user/getuserprofile#type=ManageUser">Manage Users</a></li>
     		{{/if}}
     		<li id="edit_profile"><a href ="/user/editProfile">Preferences</a></li>
     		<li id="myProfile"> <a href="#">Profile</a></li>

     	{{/if}}
     	</ul>
   </div>
 </div>
 <div style="clear:both;"></div>
 <div class="sign_out">
   <a class="signout_btn" href="javascript:void(0)">Sign out</a>
 </div>
 </form>
</div>
</script>

<script id="searchTmpl" type="text/x-jsrender">
<form id="searchForm" action="" onSubmit="return false" onClick="return false" method="POST" novalidate>
<div class="search_info row form-group">
    <div class="newSearchMain">
        <div class="left_search_col search_form_context col">
            <div class="search_form_context skucontainer">
                <label class="search_label SKUlabel">SKU</label>
                <input class="searchTextField VPAS-MerchantGroupHeader-sku" autocomplete="off" placeholder="Enter SKU" id="skuinput" type="text" name="skuIdentifier" value="" required="" class="readonly">
            </div>
            <div class="search_form_context departmentSection">
                <label class="search_label">Department</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchDepartment" id="search_selectdepartment" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select" readonly>
                    <input type="hidden" name="searchDepartment" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchDepartment">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                            {{for department }}
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="{{:deptNumber}}">{{:deptNumber}}-{{:deptDescription}}</a></li>
                            {{/for}}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="search_form_context classList">
                <label class="search_label selectedClass">Class</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchClass" id="search_classnumber" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-class" value="Select" readonly>
                    <input type="hidden" name="searchClass" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchClass">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="search_form_context ccidcontainer">
                <label class="search_label cclabel">Customer Choice ID</label>
                <input class="searchTextField ccinput VPAS-MerchantGroupHeader-kohls-style-id" autocomplete="off" placeholder="Enter Customer Choice ID" type="text" id="ccinput" name="customerChoiceIdList" value="" required="" class="readonly">
            </div>
            <div class="search_form_context ksidcontainer">
                <label class="search_label KSlabel">Kohls Style ID</label>
                <input class="searchTextField ksinput VPAS-MerchantGroupHeader-kohls-style-id" autocomplete="off" placeholder="Enter Kohl's Style ID" type="text" id="ksinput" name="kohlsstyleidentifier" value="" required="" class="readonly">
            </div>
            <div class="search_form_context pList">
                <label class="P1_label search_label">Department (P1)</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchP1" id="search_p1code" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department(p1)" value="Select" readonly>
                    <input type="hidden" name="searchP1" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchP1">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                            {{for productPrimaryType}}
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="{{:productPrimaryTypeCode}}">{{:productPrimaryTypeCode}}-{{:productPrimaryTypeDescription}}</a></li>
                            {{/for}}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="mid_search_col search_form_context col">
            <div class="search_form_context">
                <label class="search_label inputvsnum">Vendor Style #</label>
                <input class="searchTextField VPAS-MerchantGroupHeader-vendor-style" autocomplete="off" id="inputvsnum" placeholder="Enter Vendor Style" name="vendorstylenumber" value="" required="" class="readonly" disabled="false" />
            </div>
            <div class="search_form_context vendorNameList">
                <label class="search_label">Vendor</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchVendor" id="search_vendorname" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-vendor" value="Select" readonly>
                    <input type="hidden" name="searchVendor" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchVendor">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="search_form_context subclassList">
                <label class="search_label">Sub-Class</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchSubClass" id="search_subclass" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-sub-class" value="Select" readonly>
                    <input type="hidden" name="searchSubClass" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchSubClass">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="search_form_context upccontainer">
                <label class="search_label UPClabel">UPC</label>
                <input class="searchTextField VPAS-MerchantGroupHeader-upc" id="upcinput" autocomplete="off" placeholder="Enter UPC" type="text" name="skuIdentifier" value="" required="" class="readonly">
            </div>
            <div class="search_form_context p2List">
                <label class="P2_label search_label">Category (P2)</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchP2" id="search_p2number" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-category(p2)" value="Select" readonly>
                    <input type="hidden" name="searchP2" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchP2">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="right_search_col search_form_context col">
            <div class="search_form_context cpcontainer">
                <label class="search_label CPlabel">{{if createCollection}}CP ID or Collection ID{{else}}CP{{/if}}</label>
                <input class="searchTextField VPAS-MerchantGroupHeader-cp" autocomplete="off" placeholder="{{if createCollection}}Enter Web ID{{else}}Enter CP{{/if}}" id="cpinput" type="text" name="CPIdentifier" value="" required="" class="readonly">
            </div>
            <div class="search_form_context brandNameList">
                <label class="search_label">Brand</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchBrand" id="search_brandname" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-brand" value="Select" readonly>
                    <input type="hidden" name="searchBrand" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchBrand">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="search_form_context merchantgroupList">
                <label class="search_label">Merchant Group</label>
                <input class="searchTextField VPAS-MerchantGroupHeader-merchant-group" autocomplete="off" placeholder="Enter Merchant Group" id="search_merchantgroup" type="text" name="merchantgroup" value="" required="" class="readonly">
            </div>
            <div class="search_form_context">
                <label class="search_label">Group Code</label>
                <input class="searchTextField VPAS-MerchantGroupHeader-group-code" autocomplete="off" placeholder="Enter Group Code" type="text" id="inputgc" name="MGCIdentifier" value="" required="" class="readonly">
            </div>
            <div class="search_form_context p3list">
                <label class="P3_label search_label">Product (P3)</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="searchP3" id="search_p3number" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-product(p3)" value="Select" readonly>
                    <input type="hidden" name="searchP3" class="singleAttributeCode">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="searchP3">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="moreSearchContainer clearfix">
            <div class="left_search_col search_form_context col">
                <div class="search_form_context departmentSection">
                    <label class="search_label">Category</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="category" id="search_selectCatagory" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select Category" readonly>
                        <input type="hidden" name="category" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="category">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select Category</a></li>
                                {{if ~newCUIFields() == "true"}}{{for categories }}<li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="{{:code}}">{{:code}}-{{:description}}</a></li>{{/for}}{{/if}}
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="search_form_context departmentSection">
                    <label class="search_label">DMA</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="dma" id="search_selectdma" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select DMA" readonly>
                        <input type="hidden" name="dma" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="dma">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select DMA</a></li>
                                {{if ~newCUIFields() == "true"}}{{for dmas }}<li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="{{:dma.code}}">{{:dma.code}}-{{:dma.description}}</a></li>{{/for}}{{/if}}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="search_form_context departmentSection">
                    <label class="search_label">Selling Channel</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="sellingChannel" id="selling_channel" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select Selling Channel" disabled="disabled" style="opacity: 0.4;" readonly>
                        <input type="hidden" name="sellingChannel" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input" disabled="disabled">
                            </div>
                            <ul class="singleSelectList" data-name="sellingChannel">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select Selling Channel</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="1">Online Only</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="2">Instore Only</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="1|2">Both</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="search_form_context departmentSection">
                    <label class="search_label">Attribute Level</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="attributeLevel" id="attribute_level" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select Attribute Level" readonly>
                        <input type="hidden" name="attributeLevel" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="attributeLevel">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select Attribute Level</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="KS">KS</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="CC">CC</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="SKU">SKU</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="UPC">UPC</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="CP">CP</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="CPG">CPG</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="search_form_context departmentSection">
                    <label class="search_label">Choking Hazard</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="chokingHazard" id="choking_hazard" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select Choking Hazard" readonly>
                        <input type="hidden" name="chokingHazard" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="chokingHazard">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select Choking Hazard</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Y">Yes</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="N">No</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mid_search_col search_form_context col">
                <div class="search_form_context classList">
                    <label class="search_label selectedMajorCategory">Major Category</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="majorCategory" id="search_majorCategory" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-class" value="Select" readonly>
                        <input type="hidden" name="majorCategory" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="majorCategory">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="search_form_context departmentSection">
                    <label class="search_label">Digital Turn in Indicator</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="searchDTIndicator" id="search_selectDTI" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select Indicator" readonly>
                        <input type="hidden" name="searchDTIndicator" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="searchDTIndicator">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select Indicator</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Y">Yes</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="N">No</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="search_form_context landedcostcontainer">
                    <label class="search_label landedcostlabel">Landed Cost / Cost Amount</label>
                    <input class="searchTextField landedcostinput VPAS-MerchantGroupHeader-kohls-style-id" autocomplete="off" placeholder="Enter Landed Cost" type="text" id="landedcostinput" name="landedCost" value="" required="" class="readonly">
                </div>
                <div class="search_form_context">
                    <label class="search_label">Date Modified</label>
                    <div class="input-wrapper">
                        <input class="searchTextField datepicker dateModified VPAS-MerchantGroupHeader-kohls-style-id" id="attr_date_modified" placeholder="Select Date" type="text" name="searchDateModified" value="" required="" class="readonly">
                    </div>
                </div>
                <div class="search_form_context departmentSection">
                    <label class="search_label">Perishable Indicator</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="perishableIndicator" id="perishable_indicator" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select Perishable Indicator" readonly>
                        <input type="hidden" name="perishableIndicator" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="perishableIndicator">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select Perishable Indicator</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Y">Yes</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="N">No</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="right_search_col search_form_context col">
                <div class="search_form_context">
                    <label class="search_label">Digital Turn in Indicatory Date Range</label>
                    <div class="twoCalendarCol">
                        <input class="searchTextField datepicker dateModified VPAS-MerchantGroupHeader-kohls-style-id" placeholder="Start Date" type="text" id="dtiStartDate" name="digitalTurnInStartDate" value="" required="" class="readonly">
                    </div>
                    <div class="twoCalendarCol">
                        <input class="searchTextField datepicker dateModified VPAS-MerchantGroupHeader-kohls-style-id" placeholder="End Date" type="text" id="dtiEndDate" name="digitalTurnInEndDate" value="" required="" class="readonly">
                    </div>
                </div>
                <div class="search_form_context IRAmountcontainer">
                    <label class="search_label IRAmountlabel">Initial Retail Amount</label>
                    <input class="searchTextField IRAmountinput VPAS-MerchantGroupHeader-kohls-style-id" autocomplete="off" placeholder="Enter Landed Cost" type="text" id="IRAmountinput" name="initialRetailAmount" value="" required="" class="readonly">
                </div>
                <div class="search_form_context departmentSection">
                    <label class="search_label">OCF Characteristic</label>
                    <div class="singleSelectDropDownWrapper">
                        <input data-name="ocfCharacteristic" id="OCF_characteristic" autocomplete="off" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-department" value="Select OCF Characteristic" readonly>
                        <input type="hidden" name="ocfCharacteristic" class="singleAttributeCode">
                        <div class="singleSelectWrapper dis-none">
                            <div class="singleSelectInputWrapper">
                                <span class="iconSearch"></span>
                                <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                            </div>
                            <ul class="singleSelectList" data-name="ocfCharacteristic">
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="">Select OCF Characteristic</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Y">Yes</a></li>
                                <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="N">No</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    <div class="search_btn_container newSearchButtonContainer">
        <div class="pos">
            <div class="search_form_context col viewByContainer viewByALignRight">
                <label class="search_label">View By</label>
                <div class="singleSelectDropDownWrapper">
                    <input data-name="viewby" id="search_view_by" class="singleAttributeDesc dropBelow VPAS-MerchantGroupHeader-view-by" value="Vendor Style" readonly>
                    <input type="hidden" name="viewby" class="singleAttributeCode" value="Vendor Style">
                    <div class="singleSelectWrapper dis-none">
                        <div class="singleSelectInputWrapper">
                            <span class="iconSearch"></span>
                            <input type="text" placeholder="Search..." class="singleSelectInput attribute_search_input">
                        </div>
                        <ul class="singleSelectList" data-name="viewby">
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Merchant Group">Merchant Group</a></li>
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Vendor Style">Vendor Style</a></li>
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Customer Choice">Customer Choice</a></li>
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="SKU">SKU</a></li>
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="UPC">UPC</a></li>
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Consumer Product">CP</a></li>
                            {{if createCollection}}
                            <li><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Collection">Collection</a></li>{{/if}}
                            <li class="specialViewBy"><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Ecomm View">Ecomm View</a></li>
                            <li class="specialViewBy"><a class='singleSelectListItem' href="javascript:void()" tabindex="0" value="Pricing View">Pricing View</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="help_tooltip viewby view_by_tooltip">
                <span class="view_by_tooltiptext">Please also provide one of the following for Ecom View or Pricing View:{{if createCollection}}<br />1) Kohls Style ID<br />2) CP ID<br />3) Collection ID<br />4) SKU<br />5) Department, Class and Subclass</span>{{else}}
                <br />1) Kohls Style ID
                <br />2) CP ID
                <br />3) SKU
                <br />4) Department, Class and Subclass</span>{{/if}}
            </div>
            <div class="btn_container newButtonContainerAlign">
                <a href="javascript:void(0);" class="showsearch">
                    <span class="moreText">More</span>
                    <span class="searchArrowButton"></span>
                </a>
                <button class="clear_all VPAS-MerchantGroupHeader-clear-all-btn" type="button" id="clear_all_btn" disabled>CLEAR ALL</button>
                <button class="search_start VPAS-MerchantGroupHeader-search-btn" type="button" id="search_send" disabled>SEARCH</button>
            </div>
        </div>
    </div>

</div>
</form>
</script>

<script id="notificationTmpl" type="text/x-jsrender">
<div class="reportbuilder_notificationbox" id="vendorStyleCommentModel">
	<div>
		<div class="notification_header">Notification</div>
		<div class="notification_markallasread"><a href="javascript:void(0)" class="markallasread">Mark All as Read</a></div>
	</div>
	<div class="pt-Line"></div>
	<div class="notifydetailuser">
	{{include  tmpl="#notifyListTmpl" /}}
	</div>
</script>

<script id="notifyListTmpl" type="text/x-jsrender">
	<ul class="VPAS-Notification-tab-row NotificationList-nav clearfix">
		<li class="tab-active">
			<a class="VPAS-Notification-tab-all commentUpdateAllLink" href="#all-notifications" rel="nofollow">ALL</a>
		</li>
		<li>
			<a class="VPAS-Notification-tab-comments commentUpdateAllLink" href="#comments-notifications" rel="nofollow">COMMENTS</a>
		</li>
		<li>
			<a class="VPAS-Notification-tab-updates commentUpdateAllLink" href="#updates-notifications" rel="nofollow">UPDATES</a>
		</li>
	</ul>
	<div class="tabs-stage">		
		<div id="all-notifications" class="notification-wrap active-navs">
			{{if notificationInfo.responseData.notifications.notificationList.length > 0}}
				{{for notificationInfo.responseData.notifications.notificationList}}
					<div class="VPAS-Notification-tab-content-all{{:#getIndex()}} {{if unread}}notification_not_read{{/if}} notificationDetail" data-redirect-url="{{:actionLink}}">
						<div class="notification-header">
							<div class="notification-title">{{:title.split('|')[0]}}</div>
							{{if isComment == true}}
								<div class="notification-topic">{{:title.split('|')[1]}}</div>
							{{/if}}
							<div class="notification-time">{{:dateTime}}</div>
						</div>
						<p class="notification-content">{{:~notificationFormat(description)}}</p>
					</div>
				{{/for}}
			{{else}}
				<div class="no-notification">No new notifications available</div>
			{{/if}}
		</div>		
		<div id="comments-notifications" class="notification-wrap">
			{{if notificationInfo.responseData.notifications.notificationList.length > 0}}
				{{for notificationInfo.responseData.notifications.notificationList}}
					{{if isComment == true}}
					<div class="VPAS-Notification-tab-content-comments{{:#getIndex()}} {{if unread}}notification_not_read{{/if}} notificationDetail" data-redirect-url="{{:actionLink}}">
						<div class="notification-header">
							<div class="notification-title">{{:title.split('|')[0]}}</div>
							<div class="notification-topic">{{:title.split('|')[1]}}</div>
							<div class="notification-time">{{:dateTime}}</div>
						</div>
						<p class="notification-content">{{:~notificationFormat(description)}}</p>
					</div>
					{{/if}}
				{{/for}}
			{{else}}
				<div class="no-notification">No new comments available</div>
			{{/if}}
		</div>
		<div id="updates-notifications" class="notification-wrap">
			{{if notificationInfo.responseData.notifications.notificationList.length > 0}}
				{{for notificationInfo.responseData.notifications.notificationList}}
					{{if isComment == false}}
					<div class="VPAS-Notification-tab-content-updates{{:#getIndex()}} {{if unread}}notification_not_read{{/if}} notificationDetail" data-redirect-url="{{:actionLink}}">
						<div class="notification-header">
							<div class="notification-title">{{:title}}</div>
							<div class="notification-time">{{:dateTime}}</div>
						</div>
						<p class="notification-content">{{:~notificationFormat(description)}}</p>
					</div>
					{{/if}}
				{{/for}}
			{{else}}
				<div class="no-notification">No new updates available</div>
			{{/if}}
		</div>
	</div>
</script>

<script id="Banner-Notification-Msg-Tmpl" type="text/x-jsrender">
		{{props List.bannerNotification}}
	<div class="Banner-notification-msg Banner-msg-{{:prop._id}}">
	<div class="Banner-notification-msg-body">
		<div class="banner-noti-msg-text">
			{{:prop.message}}
		</div>
	</div>
</div>
{{/props}}
</script>


<script id="Banner-notification-tpl" type="text/x-jsrender">
	<div class="banner-containner">
	<div class="todays-date-banner">
		<span class="todays-date-bold">System Notification </span> 
	</div>
	<div class="body-banner newww">
		<div class="banner-subject-name">
			Subject
		</div>
		<div class="banner-subject-title">
			<input type="text" class="banner-subject-title-name" value="{{if List.subject==''}}{{else}}{{:List.subject}}{{/if}}" name="">
		</div>
		<div class="banner-message-name">
			Message <span> (500 character max)</span>
		</div>
		<div class="banner-subject-title">
			<textarea class="banner-subject-title-name" maxlength="500" width="500px" height="50px;">{{if List.message==''}}{{else}}{{:List.message}}{{/if}}</textarea>
		</div>	
		<div class="banner-noti-text">
			<span>(all users will be notified)</span>
		</div>
		<div class="banner-set-time-parent">
			<div class="set-time-top">
				<div class="set-top-left">
					Timeframe (CST)
				</div>
				
			</div>
			<div class="set-time-bottom">
				<div class="user-from-date">
					<div class="user-date-to-text">
						<label>From</label>
					</div>
					<div class="user-date">	
						
						<input type="text" class="datepicker" readonly="true" name="banner-user-from-date">
						
					</div>
					<div class="user-time">
						<select class="commom-cls-name  banner-user-from-time">
							<option value="00:00:00">12:00 AM</option>
							<option value="00:30:00">12:30 AM</option>
							<option value="01:00:00">01:00 AM</option>
							<option value="01:30:00">01:30 AM</option>
							<option value="02:00:00">02:00 AM</option>
							<option value="02:30:00">02:30 AM</option>
							<option value="03:00:00">03:00 AM</option>
							<option value="03:30:00">03:30 AM</option>
							<option value="04:00:00">04:00 AM</option>
							<option value="04:30:00">04:30 AM</option>
							<option value="05:00:00">05:00 AM</option>
							<option value="05:30:00">05:30 AM</option>
							<option value="06:00:00">06:00 AM</option>
							<option value="06:30:00">06:30 AM</option>
							<option value="07:00:00">07:00 AM</option>
							<option value="07:30:00">07:30 AM</option>
							<option value="08:00:00">08:00 AM</option>
							<option value="08:30:00">08:30 AM</option>
							<option value="09:00:00">09:00 AM</option>
							<option value="09:30:00">09:30 AM</option>
							<option value="10:00:00">10:00 AM</option>
							<option value="10:30:00">10:30 AM</option>
							<option value="11:00:00">11:00 AM</option>
							<option value="11:30:00">11:30 AM</option>
							<option value="12:00:00">12:00 PM</option>
							<option value="12:30:00">12:30 PM</option>
							<option value="13:00:00">01:00 PM</option>
							<option value="13:30:00">01:30 PM</option>
							<option value="14:00:00">02:00 PM</option>
							<option value="14:30:00">02:30 PM</option>
							<option value="15:00:00">03:00 PM</option>
							<option value="15:30:00">03:30 PM</option>
							<option value="16:00:00">04:00 PM</option>
							<option value="16:30:00">04:30 PM</option>
							<option value="17:00:00">05:00 PM</option>
							<option value="17:30:00">05:30 PM</option>
							<option value="18:00:00">06:00 PM</option>
							<option value="18:30:00">06:30 PM</option>
							<option value="19:00:00">07:00 PM</option>
							<option value="19:30:00">07:30 PM</option>
							<option value="20:00:00">08:00 PM</option>
							<option value="20:30:00">08:30 PM</option>
							<option value="21:00:00">09:00 PM</option>
							<option value="21:30:00">09:30 PM</option>
							<option value="22:00:00">10:00 PM</option>
							<option value="22:30:00">10:30 PM</option>
							<option value="23:00:00">11:00 PM</option>
							<option value="23:30:00">11:30 PM</option>
						</select>
					</div>
				</div>
				<div class="user-to-date">
					<div class="user-date-to-text">
						<label>TO</label>
					</div>
					<div class="user-date">	
						
						<input type="text" class="datepicker" readonly="true" name="banner-user-to-date">
						
					</div>
					<div class="user-time">
						<select class="commom-cls-name banner-user-to-time">
							<option value="00:00:00">12:00 AM</option>
							<option value="00:30:00">12:30 AM</option>
							<option value="01:00:00">01:00 AM</option>
							<option value="01:30:00">01:30 AM</option>
							<option value="02:00:00">02:00 AM</option>
							<option value="02:30:00">02:30 AM</option>
							<option value="03:00:00">03:00 AM</option>
							<option value="03:30:00">03:30 AM</option>
							<option value="04:00:00">04:00 AM</option>
							<option value="04:30:00">04:30 AM</option>
							<option value="05:00:00">05:00 AM</option>
							<option value="05:30:00">05:30 AM</option>
							<option value="06:00:00">06:00 AM</option>
							<option value="06:30:00">06:30 AM</option>
							<option value="07:00:00">07:00 AM</option>
							<option value="07:30:00">07:30 AM</option>
							<option value="08:00:00">08:00 AM</option>
							<option value="08:30:00">08:30 AM</option>
							<option value="09:00:00">09:00 AM</option>
							<option value="09:30:00">09:30 AM</option>
							<option value="10:00:00">10:00 AM</option>
							<option value="10:30:00">10:30 AM</option>
							<option value="11:00:00">11:00 AM</option>
							<option value="11:30:00">11:30 AM</option>
							<option value="12:00:00">12:00 PM</option>
							<option value="12:30:00">12:30 PM</option>
							<option value="13:00:00">01:00 PM</option>
							<option value="13:30:00">01:30 PM</option>
							<option value="14:00:00">02:00 PM</option>
							<option value="14:30:00">02:30 PM</option>
							<option value="15:00:00">03:00 PM</option>
							<option value="15:30:00">03:30 PM</option>
							<option value="16:00:00">04:00 PM</option>
							<option value="16:30:00">04:30 PM</option>
							<option value="17:00:00">05:00 PM</option>
							<option value="17:30:00">05:30 PM</option>
							<option value="18:00:00">06:00 PM</option>
							<option value="18:30:00">06:30 PM</option>
							<option value="19:00:00">07:00 PM</option>
							<option value="19:30:00">07:30 PM</option>
							<option value="20:00:00">08:00 PM</option>
							<option value="20:30:00">08:30 PM</option>
							<option value="21:00:00">09:00 PM</option>
							<option value="21:30:00">09:30 PM</option>
							<option value="22:00:00">10:00 PM</option>
							<option value="22:30:00">10:30 PM</option>
							<option value="23:00:00">11:00 PM</option>
							<option value="23:30:00">11:30 PM</option>
						</select>
					</div>
					
				</div>
			 	<div class="date-format-error hide">
                    The timeframe selected for notification is in the past
	            </div>

				<div class="banner-all-day">
					<label><input type="checkbox" class="banner-check-box" name=""><span class="banner-check--box-span"></span><span class="banner-check-name"> All-day</span></label>
				</div>
			</div>
		</div>
		<div class="banner-send-via">
			<div class="send-via-msg">
				Send via: 
			</div>
			<div class="banner-radio-btn">
				<input type="radio" value="Email" class="radio-btn-email" name="Sendvia"> Email
				<input type="radio" value="Notification" class="radio-btn-notification" name="Sendvia"> Notification
				<input type="radio" value="Both" class="radio-btn-both" name="Sendvia"> Both
			</div>
		</div>
		<div class="banner-send-bottom">
			<button type="button" Banner-id="{{if List._id==''}}{{else}}{{:List._id}}{{/if}}" disabled class="banner-send-btn">{{if List._id==''}}SEND{{else}}RE SEND{{/if}}</button>
		</div>
	</div>
</div>
</script>