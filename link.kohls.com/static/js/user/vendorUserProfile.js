$module('getuserprofile', function(log, env, module, Kjs) {
	var	_vendorProfilePanel = (function(){
		var _panel,
		deleteVendors = [],
		_render = function(hook,data) {
			delete(data.userDetails.userDetails);
			sessionStorage.setItem("casePackVendors",JSON.stringify(data.userDetails.vendors));
			sessionStorage.setItem("OldObjectJson",JSON.stringify(data.userDetails));
			data["userOktaDetails"] = _getUserOktaDetails();
			if(data.hideAdminRights == undefined){
				data["hideAdminRights"] = false;
			}
			if(data.hideDeleteButton == undefined){
				data["hideDeleteButton"] = false;
			}
			Kjs.DeleteUSerDTO = data;
			_dispose();
			env.hook = hook||env.hook||'body';

			if (data.userDetails!=undefined && data.userDetails!=null && data.userDetails.officeOfPlacementIds!=undefined && data.userDetails.officeOfPlacementIds!=null && data.userDetails.officeOfPlacementIds.length>0) {
				data['liandfunguser'] = true;
			}else if(data.userDetails!=undefined && data.userDetails!=null && data.userDetails.officeOfPlacements!=undefined && data.userDetails.officeOfPlacements!=null && data.userDetails.officeOfPlacements.length>0){
				data['liandfunguser'] = true;
			}else{
				data['liandfunguser'] = false;
			}
			_panel = $tmpl.render(env.vendorProfile.template, _context(data));
			$(env.hook).append(_panel);			
			_multiselectInit();
			_afterAppend();
			_deactivate();
			_activate();
			_changeHeaderName();
			_showAdminRights();				
			return _panel;
		},
		_afterAppend = function(){
			$("#associateUserProfile").hide();
			$("#vendorProfileContainer").show();
			$("#dashboard").hide();	
			$(".vendor-user-delete-msg").hide();
			var urltext1 = window.location.href; 
			if(urltext1.indexOf("CasepackAdded") >= 0){
				window.history.pushState('', 'User Profile Page', '/user/getuserprofile');
				$(".casepack-user-success-msg").show();
				$(".casepack-user-success-msg .vendor-name-value").text("New packaging capability was successfully added.");
			}else if(urltext1.indexOf("CasepackModified") >= 0){
				window.history.pushState('', 'User Profile Page', '/user/getuserprofile');
				$(".casepack-user-success-msg").show();
				$(".casepack-user-success-msg .vendor-name-value").text("New packaging capability was successuly modified.");
			}
			if( JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.officeOfPlacementIds.length == 0 && 
				$('.all-vendors-data').find('tr').length == 1){
				$('.all-vendors-data').find('tr .close-icon-vendor').closest('td').addClass('mustHaveOneVendorId').find('.close-icon-vendor').addClass('mustHaveOneVendorId');
		
			}
		},
		_getUserOktaDetails = function(){
			return JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData;
		},		
		_showAdminRights = function(){
			var jsondata = getLoginUserProfileJson();
			if(jsondata!=null && jsondata.responseData!=null && jsondata.responseData.userInfoData!=null){
				if (jsondata.responseData.userInfoData.admin && jsondata.responseData.userInfoData.role!="VU" && jsondata.responseData.userInfoData.role!="VA" && jsondata.responseData.userInfoData.role!="Vendor") {
					$(".admin-rights-containner").show();
					if (vendorUserProfilejson!=null && vendorUserProfilejson.responseData.userDetails!=null && vendorUserProfilejson.responseData.userDetails.admin) {
						$("input#admin-rights-checkbox").prop("checked",true);
					}
				}else{
					$(".admin-rights-containner").hide();
				}
				if (jsondata.responseData.userInfoData.admin) {
					$('.dlt-this-user').removeClass('hide');
				}else{
					$('.dlt-this-user').addClass('hide');
				}
			}
		},
		_changeHeaderName = function(){ 
			setTimeout(function(){
				$(".k-link .header-home-logo").show();
				$(".k-link .header-k-link-logo").hide();
				var urltext = window.location.href; 
				if(urltext.indexOf("ManageUser") >= 0){
					$(".verdor-group-tiltle-name").text("Manage users");
				}else if(urltext.indexOf("kohlsUserDashboard") >= 0){
					$(".verdor-group-tiltle-name").text("Profile "+$(".usernamecontainer .edit-user-name").text());
				}else{
					$(".verdor-group-tiltle-name").text($(".usernamecontainer .edit-user-name").text());
				}
				if ($(".getuserprofilemain").attr("login-role")!="VU" && $(".getuserprofilemain").attr("login-role")!="VA" && $(".getuserprofilemain").attr("login-role")!="Vendor") {
					$('.header-home-name').find('[href="/merchandising/MerchantGroupListViewPage"]').text('Dashboard').attr("href","/user/getuserprofile?type=kohlsUserDashboard").addClass('adminDashboard');
					$(".adminDashboard").off('click',Kjs.userCommon.handleDasbhoardClick);	
					$(".adminDashboard").on('click',Kjs.userCommon.handleDasbhoardClick);
				}
			},100);
			$(".box-loading,.box-overlay").hide();
		},
		_context = function(data) 
		{
			var args = [].slice.call(arguments);
			return Kjs.object.apply(Kjs, [data, env.vendorProfile.statics].concat(args));
		},
		_dispose = function() {
			if (_panel) {
				_deactivate();
				_panel.remove();
				_panel = null;
			}
		};
		_activate = function(){
			$(env.vendorProfile.addUserBtn).on('click',_addUserBtn);
			$(env.vendorProfile.commonuserlist).on('mouseenter',_commonuserlistenter);
			$(env.vendorProfile.commonuserlist).on('mouseleave',_commonuserlistleave);
			$(env.vendorProfile.closeiconvendor).on('click',_closeiconvendor);
			$(env.vendorProfile.usersubmitbtn).on('click',_usersubmitbtn);
			$(env.vendorProfile.statusclick).on('click',_statusclick);
			$(env.vendorProfile.userboxclosebtn).on('click',_userboxclosebtn);
			$(env.vendorProfile.editusername).on('click',_editusername);
			$(env.vendorProfile.deleteUser).on('click',_handleDeleteUSer); 	
			$(env.vendorProfile.adminrightsicon).on('click',_adminrightsicon);		
			$(env.vendorProfile.placementContainerhide).on('change',_placementContainerhide);
			$(env.vendorProfile.cpaddmodify).on('click',_handleCPAddModify);
			$(env.vendorProfile.cpviewcapabilities).on('click',_handleCPViewCapabilities);
			$(env.vendorProfile.casepackaddviewclose).on("click",_handleCasepackAddViewClose);
			$(env.vendorProfile.showToolTipMsg).on("mouseenter",_showToolTipMessage);
			$(env.vendorProfile.showToolTipMsg).on("mouseleave",_hideToolTipMessage);
			$(env.vendorProfile.PoNumberID).on('focusout',_checkDuplicate);
		},
		_deactivate= function(){
			$(env.vendorProfile.addUserBtn).off('click',_addUserBtn);
			$(env.vendorProfile.commonuserlist).off('mouseenter',_commonuserlistenter);
			$(env.vendorProfile.commonuserlist).off('mouseleave',_commonuserlistleave);
			$(env.vendorProfile.closeiconvendor).off('click',_closeiconvendor);
			$(env.vendorProfile.usersubmitbtn).off('click',_usersubmitbtn);
			$(env.vendorProfile.statusclick).off('click',_statusclick);
			$(env.vendorProfile.userboxclosebtn).off('click',_userboxclosebtn);
			$(env.vendorProfile.editusername).off('click',_editusername);
			$(env.vendorProfile.deleteUser).off('click',_handleDeleteUSer);			 	
			$(env.vendorProfile.adminrightsicon).off('click',_adminrightsicon);
			$(env.vendorProfile.placementContainerhide).off('change',_placementContainerhide);
			$(env.vendorProfile.cpaddmodify).off('click',_handleCPAddModify);
			$(env.vendorProfile.cpviewcapabilities).off('click',_handleCPViewCapabilities);
			$(env.vendorProfile.casepackaddviewclose).on("click",_handleCasepackAddViewClose);
			$(env.vendorProfile.showToolTipMsg).off("mouseenter",_showToolTipMessage);
			$(env.vendorProfile.showToolTipMsg).off("mouseleave",_hideToolTipMessage);
			$(env.vendorProfile.PoNumberID).off('focusout',_checkDuplicate);
		},
		_handleCasepackAddViewClose = function(){
			$(".casepack-user-success-msg").hide();
		},
		_handleCPViewCapabilities = function(){
			$( document.body ).scrollTop(0);
			var casePackVendors = JSON.parse(sessionStorage.getItem("casePackVendors"));
			var tmpl = $.templates("#CPAddModifyTmpl");
	    	var _renderit = tmpl.render({"Vendor":casePackVendors});
	    	$box.open({
				fancybox : {
					'content' : _renderit,
					'showCloseButton':false,
					'centerOnScroll' : false,
					'onClosed':function(){	
						$('body').removeClass('stickPopup');
				 	},
					onComplete: function(){	
						$("#fancybox-outer .fancybox-bg").remove();
						$('body').addClass('stickPopup');
						$("#frame-tab-end").hide();		
						$("#frame-tab-start").hide();
						$(env.vendorProfile.closeviewcapabilities).off('click',_closeviewcapabilities);
						$(env.vendorProfile.closeviewcapabilities).on('click',_closeviewcapabilities);
						$(env.vendorProfile.viewcapabilitiesbtn).off("click",_handleViewCapabilities);
						$(env.vendorProfile.viewcapabilitiesbtn).on("click",_handleViewCapabilities);
						_casePackMultiSelect();	
					}	
		    	}
			});	
		},
		_handleViewCapabilities = function(){	
			var vendor = $("#vendor-containner").val();
			var department = $("#department-containner").val();
			var subclass = $("#subclass-containner").val();
			if (department==null) {
				department = ["All Departments"];
			}
			if (subclass==null) {
				subclass = ["All Subclass"];
			}
			if (vendor!=null && vendor.length>0) {
				if (vendor.length>1) {
					department = ["All Departments"];
					subclass = ["All Subclass"];
				}else{			
					if (department!=null && department.length>1) {
						subclass = ["All Subclass"];
					}
				}
				var submitJson = {"vendors":vendor,"departments":department,"subclass":subclass};
				var Sfilter = submitJson;
				var vendornames = [];
				if (Sfilter.vendors!=null) {
					for (var i = 0; i < Sfilter.vendors.length; i++) {
						var selectorString = '#'+Sfilter.vendors[i];
						var vendorrow = {"verdorId":Sfilter.vendors[i],"vendorName":$("select.vendor-containner").find(selectorString).attr("name")};
						vendornames.push(vendorrow);
					}
				}
				if (Sfilter.departments[0]=="All Departments") {
					var deptcount = "All";
					var deptnames = ["All Departments"];
				}else{
					var deptcount = Sfilter.departments.length; 
					var deptnames = [];
					if (Sfilter.departments!=null) {
						for (var i = 0; i < Sfilter.departments.length; i++) {
							var selectorString = 'option[value='+'"'+Sfilter.departments[i]+'"'+']';
							var vendorrow = {"deptId":Sfilter.departments[i],"deptName":$("select.department-containner").find(selectorString).attr("name")};
							deptnames.push(vendorrow);
						}
					}
				}
				if (Sfilter.subclass[0]=="All Subclass") {
					var subcount = "All";
					var subnames = ["All Subclass"];
				}else{
					var subcount = Sfilter.subclass.length;
					var subnames = [];
					if (Sfilter.subclass!=null) {
						for (var i = 0; i < Sfilter.subclass.length; i++) {
							var selectorString = 'option[value='+'"'+Sfilter.subclass[i]+'"'+']';
							var vendorrow = {"subclassId":Sfilter.subclass[i],"subclassName":$("select.subclass-containner").find(selectorString).attr("name")};
							subnames.push(vendorrow);
						}
					}
				}
				var filterData = {"vendors_count":Sfilter.vendors.length,"vendors_name":vendornames,"dept_count":deptcount,"dept_names":deptnames,"subclass_count":subcount,"subclass_names":subnames};
			
				sessionStorage.setItem("filterData", JSON.stringify(filterData));
				sessionStorage.setItem("selectedJson", JSON.stringify(submitJson));
				window.location = "/user/addModifyPackingCapability?Source=View";
			}else{
				$(".vendor-name-label .error-vendor-names").show();
				$(".vendor-name-label .ms-parent.filter-select-containner").addClass("error-names");
			}
		},
		_closeviewcapabilities = function(){
			_closepopupcall();
		},
		_handleCPAddModify = function(){				
			window.location = "/user/addModifyPackingCapability?Source=Add";
		},
		_casePackMultiSelect = function(idname){
			if (idname==undefined || idname=="") {
				var idname1 = ".filter-select-containner";
			}else{
				var idname1 = "#"+idname;
			}
			$.each($(idname1), function(){
				var p_name = $(this).attr("p-name");
				$(this).multipleSelect({
				selectAll: true, 
				filter: true,
				decodeHtml : false,
				placeholder: p_name,
				onClick: function(e) { 
					var selectedVal = e.value;
				
				}
				});
			});	
			$.each($("div.filter-select-containner .ms-drop li label span"),function(){
				$(this).text($(this).text().replace(/andand/g, '&').replace(/Andand/g, '&'));
			});
			$.each($("select.filter-select-containner option"),function(){
				$(this).text($(this).text().replace(/andand/g, '&').replace(/Andand/g, '&'));
			});

			if (idname==undefined) {
				$(".department-name-label .filter-select-containner .ms-choice, .subclass-name-label .filter-select-containner .ms-choice").addClass("disabled");
			}
			_updateElemtsToMultiselect();
			$(env.vendorProfile.onselectfilter).off('change',_handleonSelectFilter);
			$(env.vendorProfile.onselectfilter).on('change',_handleonSelectFilter);		
		},
		_updateElemtsToMultiselect = function(){
			$.each($('.ms-search'),function(i,v){
					if ($(this).find(".searchIcon").length==0) {
						$(this).prepend('<span class="searchIcon"></span>');
					}
				});	
			$('.ms-search').find('input').attr('data-attr-search-elem',true).attr('placeholder','Search');				 
			$.each($('.ms-parent'),function(i,v){
				$(v).find('.ms-select-all').find('span').not('.checkboxPlaceHolder').text("All "+$(v).prev('select').attr('data-select-type'));
				$(v).find('.ms-select-all').closest('li').addClass('selectAllBorder');
			});
		},
		_handleonSelectFilter = function(){
			$(".case-pack-modify-container").css("opacity","1");
			$(".box-loading,.box-overlay").hide();
			if (_departmentcall!=null) {
				_departmentcall.abort();
			}
			if (_subClasscall!=null) {
				_subClasscall.abort();
			}
			var section_name = $(this).attr("p-name");
			var selected_ids = $(this).val();
			if (section_name=="Select Vendor") {
				$(".vendor-name-label .error-vendor-names").hide();
				$(".vendor-name-label .ms-parent.filter-select-containner").removeClass("error-names");
				$("div.department-containner .ms-choice .placeholder").text("Select Department");
				
				$("div.subclass-containner .ms-choice .placeholder").text("Select Subclass");				
				if (selected_ids!=null && selected_ids.length>1) {
					$(".department-name-label .filter-select-containner .ms-choice, .subclass-name-label .filter-select-containner .ms-choice").addClass("disabled");
					$("div.department-containner .ms-choice .placeholder").text("All Departments");
					$("div.subclass-containner .ms-choice .placeholder").text("All Subclass");
					$("div.department-containner .ms-choice span").text("All Departments");
					$("div.subclass-containner .ms-choice span").text("All Subclass");
				}else if (selected_ids!=null && selected_ids.length==1){
					$(".department-name-label .filter-select-containner .ms-choice, .subclass-name-label .filter-select-containner .ms-choice").removeClass("disabled");
					var vendorids = selected_ids.join(",");
					_getDepartmentsList(vendorids);
				}else{
					$(".vendor-name-label .error-vendor-names").show();
					$(".vendor-name-label .ms-parent.filter-select-containner").addClass("error-names");
					$(".department-name-label .filter-select-containner .ms-choice, .subclass-name-label .filter-select-containner .ms-choice").addClass("disabled");
					$("div.department-containner .ms-choice span").text("Select Departments");
					$("div.subclass-containner .ms-choice span").text("Select Subclass");
				}
			}else if (section_name=="Select Department") {
				$("div.subclass-containner .ms-choice .placeholder").text("Select Subclass");
				if (selected_ids!=null && selected_ids.length>1) {
					$(".subclass-name-label .filter-select-containner .ms-choice").addClass("disabled");
					$("div.subclass-containner .ms-choice .placeholder").text("All Subclass");
					$("div.subclass-containner .ms-choice span").text("All Subclass");
				}else if (selected_ids!=null && selected_ids.length==1){
					$(".subclass-name-label .filter-select-containner .ms-choice").removeClass("disabled");
					var vendorids = selected_ids.join(",");
					_getSubClassList(vendorids);
				}else{					
					$(".subclass-name-label .filter-select-containner .ms-choice").addClass("disabled");
					$("div.subclass-containner .ms-choice span").text("Select Subclass");
				}
			}else if (section_name=="Select Subclass") {

			}
		},
		_departmentcall = null,
		_getDepartmentsList = function(ids){
			$(".case-pack-modify-container").css("opacity","0.5");
			$(".box-loading,.box-overlay").show();
			if (_departmentcall!=null) {
				_departmentcall.abort();
			}
			$("div.subclass-containner .ms-drop ul li").remove();
			_departmentcall = $.ajax({
				url:location.origin +"/casePack/getDepartments?vendorId="+ids,
				type:"GET",
				headers: {
			        'transactionID': Kjs.vpAjax.randomString()
			    },
				success: function(data){ 
					$(".case-pack-modify-container").css("opacity","1");
					$(".box-loading,.box-overlay").hide();
					if (data!=null && data!=undefined) {
					if (data.errorMessage=="") {
						var appendData = '<select multiple="multiple" p-name="Select Department" class="filter-select-containner department-containner" data-select-type="Departments" id="department-containner">';
						var departments = data.responseData[0].DeptInfo;
						if (departments!=null && departments!=undefined && departments.length>0) {
							for (var i = 0; i < departments.length; i++) {
								appendData += '<option name="'+departments[i].deptDescription+'" value="'+departments[i].deptNumber+'">'+departments[i].deptNumber+"-"+departments[i].deptDescription.replace(/&/g, 'andand')+'</option>';
							}
						}
						appendData += '</select>';
					}
					$(".department-name-label .filter-select").html(appendData);
					_casePackMultiSelect("department-containner");
				}else{
					Kjs.vpAjax.hideLoaderonEmptyResponse();
				}
				}
			});
		},
		_subClasscall = null,
		_getSubClassList = function(ids){
			if (_subClasscall!=null) {
				_subClasscall.abort();
			}
			$(".case-pack-modify-container").css("opacity","0.5");
			$(".box-loading,.box-overlay").show();
			_subClasscall = $.ajax({
				url:location.origin +"/casePack/getSubClass?deptNumber="+ids,
				type:"GET",
				headers: {
			        'transactionID': Kjs.vpAjax.randomString()
			    },
				success: function(data){ 
					$(".case-pack-modify-container").css("opacity","1");
					$(".box-loading,.box-overlay").hide();
					if (data!=undefined && data!=null) {
					if (data.errorMessage=="") {
						var appendData = '<select multiple="multiple" p-name="Select Subclass" class="filter-select-containner subclass-containner" data-select-type="Subclass" id="subclass-containner">';
						var departments = data.responseData[0].SubclassInfo;
						if (departments!=null && departments!=undefined && departments.length>0) {
							for (var i = 0; i < departments.length; i++) {
								appendData += '<option name="'+departments[i].subClassDescription+'" value="'+departments[i].subClassNumber+'">'+departments[i].subClassNumber+"-"+departments[i].subClassDescription.replace(/&/g, 'andand')+'</option>';
							}
						}
						appendData += '</select>';
					}
					$(".subclass-name-label .filter-select").html(appendData);
					_casePackMultiSelect("subclass-containner");
					}else{
						Kjs.vpAjax.hideLoaderonEmptyResponse();
					}
				}
			});
		},
		_placementContainerhide = function(){
		},
		_adminrightsicon = function(){ 			
			if($(".admin-rights-containner [id='admin-rights-checkbox']").is(':checked')){
				$(".admin-rights-containner [id='admin-rights-checkbox']").prop("checked",false);
			}else{
				$(".admin-rights-containner [id='admin-rights-checkbox']").prop("checked",true);
			}						
			Kjs.modelPopUp.alertConfirmModelPopUp(function(){_comformAdminRightsvendor()},function(){},{title:"",message:"Are you sure you want to change the admin rights",okbtn:"YES",noText:"NO"});
		},
		_comformAdminRightsvendor = function(){
			$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
			if($(".admin-rights-containner [id='admin-rights-checkbox']").is(':checked')){
				$(".admin-rights-containner [id='admin-rights-checkbox']").prop("checked",false);
			}else{
				$(".admin-rights-containner [id='admin-rights-checkbox']").prop("checked",true);
			}
			_usersubmitbtn();
		},
		_showToolTipMessage = function(){
			$('.vendor-tooltip-message').show();
		},
		_hideToolTipMessage = function(){
			$('.vendor-tooltip-message').hide();
		},
		_addActionButon = function(){
			$('<div class="addBorder buttonContainer"><button id="cancelPlacement">cancel</button><button id="updatePlacement" class="usersubmitbtnhide"> Update</button></div>').insertAfter($('.ms-drop ul'));
			$(env.vendorProfile.cancelPlacement).off('click',_resetSelectedOfficeOfPlacement);
			$(env.vendorProfile.cancelPlacement).on('click',_resetSelectedOfficeOfPlacement);
			$(env.vendorProfile.updatePlacement).off('click',_usersubmitbtn);
			$(env.vendorProfile.updatePlacement).on('click',_usersubmitbtn);
		},
		_currentSessionSelectedOfficeOfPlacement = [],		
		_resetSelectedOfficeOfPlacement = function(){
			try{
				var existingOOPId = JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.officeOfPlacementIds
				var currentSelectedId = $('select').multipleSelect('getSelects');				 
				for(var j=0;j<_currentSessionSelectedOfficeOfPlacement.length;j++){
					$('.checkboxVendorStyle[value="'+_currentSessionSelectedOfficeOfPlacement[j]+'"]').prop('checked',false);
					$('[data-name="selectAll"]').prop('checked',false);
				}				 
			}catch(e){
			}
		},
		_multiselectInit = function(){		
			if(vendorUserProfilejson.responseData==null || vendorUserProfilejson.responseData==undefined){
				vendorUserProfilejson['responseData'] = vendorUserProfilejson;
			}	

			$(".Office-placement-container option").prop("selected",false);
			if (vendorUserProfilejson.responseData.userDetails.officeOfPlacements !=undefined && vendorUserProfilejson.responseData.userDetails.officeOfPlacements !=null && vendorUserProfilejson.responseData.userDetails.officeOfPlacements!="" && vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds ==undefined) {
					vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds = vendorUserProfilejson.responseData.userDetails.officeOfPlacements;
				}
			if (vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds !=undefined && vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds !=null && vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds!="") {
				if (typeof vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds == "string") {
					var listids = vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds.split(",");
				}else{
					var listids = vendorUserProfilejson.responseData.userDetails.officeOfPlacementIds;
				}
			$.each(listids,function(i,v){
				var select = "option[id="+"'"+listids[i]+"'"+"]";
				$(".Office-placement-container").find(select).prop("selected",true).attr("selected","selected");
			});
			$(".Office-placement-container").multipleSelect({
				selectAll: true, 
				filter: true,
				decodeHtml : false,
				placeholder: "Select",
				onClick: function(e) { 
					_handleplacementClick();
					var selectedVal = e.value;
					if(e.checked){
						_currentSessionSelectedOfficeOfPlacement.push(e.value);
					}else{
						_currentSessionSelectedOfficeOfPlacement.splice(_currentSessionSelectedOfficeOfPlacement.indexOf(e.value),1)
					}					 
				},
				onCheckAll : function(){					 
					var selectedId = JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.officeOfPlacementIds;
					for(var j=0;j<Kjs.UserOfficeOfPlacements.officeOfPlacements.length;j++){
						_currentSessionSelectedOfficeOfPlacement.push(Kjs.UserOfficeOfPlacements.officeOfPlacements[j].officeOfPlacementId);
						if(j == ( Kjs.UserOfficeOfPlacements.officeOfPlacements.length -1)){
							for(var i=0;i<selectedId.length;i++){
							_currentSessionSelectedOfficeOfPlacement.splice(_currentSessionSelectedOfficeOfPlacement.indexOf(selectedId[i]),1);					 
							}
						}
					}
				},
				onUncheckAll : function(){
					_currentSessionSelectedOfficeOfPlacement=[];	
				}
			});
			$(env.vendorProfile.placementClick).off('click',_handleplacementClick);
			$(env.vendorProfile.placementClick).on('click',_handleplacementClick);
			_addActionButon();
		}else{
			$(".placementContainer").hide();
		}
		},
		_handleplacementClick = function(){
			$("#updatePlacement").removeClass("usersubmitbtnhide");		

			if (!$(".Office-placement-container").is(":visible") || ($(".Office-placement-container").val()!=null && $(".Office-placement-container").val()!=undefined && $(".Office-placement-container").val().length>0) ) {
				$(".Office-placement-container button.ms-choice").removeClass("errorborder");
			}else{
				$("#updatePlacement").addClass("usersubmitbtnhide");	
				$(".Office-placement-container button.ms-choice").addClass("errorborder");
			}
		}
		_editusername = function(){
			var tmpl = $.templates("#Edit-User-tmpl-new");
	    	var _renderit = tmpl.render({"userDetails":vendorUserProfilejson.responseData.userDetails});
	    	$box.open({
				fancybox : {
					'content' : _renderit,
					'showCloseButton':true,
					'centerOnScroll' : true,
					'onClosed':function(){	
				 	},
					onComplete: function(){		
						$("#frame-tab-end").hide();		
						$("#frame-tab-start").hide();						
						$(env.vendorProfile.boxusercancel).off('click',_boxmodelcancel);
						$(env.vendorProfile.boxusersave).off('click',_boxusersave);
						$(env.vendorProfile.boxusercancel).on('click',_boxmodelcancel);
						$(env.vendorProfile.boxusersave).on('click',_boxusersave);
					}	
		    	}
			});
		},
		_boxusersave = function(){
			var firstname = $(".user-edit-first-name").val();
			var lastname = $(".user-edit-last-name").val();
			var company = $(".user-edit-company-name").val();
			var title = $(".user-edit-title-name").val();

			if (firstname=="") {
				$(".user-edit-first-name").css("border","1px solid #ff0000");
			}else{
				$(".user-edit-first-name").css("border","none");
				$(".user-edit-first-name").css("border-bottom","1px solid #e2e2e2");
			}
			if (lastname=="") {
				$(".user-edit-last-name").css("border","1px solid #ff0000");
			}else{
				$(".user-edit-last-name").css("border","none");
				$(".user-edit-last-name").css("border-bottom","1px solid #e2e2e2");
			}
			if (firstname!="" && lastname!="") {
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){_updateuserdetail(firstname,lastname,company,title)},function(){},{title:"",message:"Are you sure you want to Save",okbtn:"YES",noText:"NO"});

			}
		},
		_updateuserdetail = function(firstname,lastname,company,title){
			_closepopupcall();
			$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
			vendorUserProfilejson.responseData.userDetails.firstName = firstname;
			vendorUserProfilejson.responseData.userDetails.lastName = lastname;
			vendorUserProfilejson.responseData.userDetails.parentCompany = company;
			vendorUserProfilejson.responseData.userDetails.title = title;
			$(".usernamecontainer .edit-user-name").text(firstname+" "+lastname);
			var urltext = window.location.href; 
			if(urltext.indexOf("ManageUser") >= 0){
				$(".verdor-group-tiltle-name").text("Manage users");
			}else if(urltext.indexOf("kohlsUserDashboard") >= 0){
				$(".verdor-group-tiltle-name").text("Profile "+$(".usernamecontainer .edit-user-name").text());
			}else{
				$(".verdor-group-tiltle-name").text(firstname+" "+lastname);
			}		
			$(".companyContainer .company").text(company);
			$(".titleContainer .title").text(title);
			_usersubmitbtn();
		},
		_userboxclosebtn = function(){
			$(".user-promo-box").hide();
		},
		_statusclick = function(){
			$(".user-promo-box").show();
			$(".user-promo-box").css("top",$(this).offset().top+30);
			$(".user-promo-box").css("left",$(this).offset().left+80);
		},
		_usersubmitbtn = function(){
			var transactionId = Kjs.vpAjax.randomString();
			if (!$(this).hasClass("usersubmitbtnhide")) {				
				if (!$(".Office-placement-container").is(":visible") || ($(".Office-placement-container").val()!=null && $(".Office-placement-container").val()!=undefined && $(".Office-placement-container").val().length>0) ) {
				var originalUserDetails = JSON.parse(sessionStorage.getItem("OldObjectJson"));
				var userdetail = vendorUserProfilejson.responseData.userDetails;
				var newjson = [];
				var vendorNames = [];
				var selectedplacements = [];
				if ($(".admin-rights-containner").is(":visible")) {
					var admin_rights = $("#admin-rights-checkbox").is(':checked');	
				}else{
					var admin_rights = userdetail.admin;
				}
				if (userdetail.userOktaId!=null && userdetail.userOktaId!=undefined && userdetail.userOktaId!="") {
					var newoktaid = userdetail.userOktaId;
				}else{
					var newoktaid = null;
				}
				var userFullName = userdetail.firstName;
				var userFullName1 = userdetail.lastName;
				var vendorjson = {"vendors":newjson,"officeOfPlacements":selectedplacements,"firstName":userdetail.firstName,"lastName":userdetail.lastName,"parentCompany":userdetail.parentCompany,"title":userdetail.title,"admin":admin_rights,"userOktaId":newoktaid,"userName":userdetail.email,"role":[]};
				var role = userdetail.role;
				if(typeof role == "object"){
					if(role != null){
						if(role[0] != "KA" && role[0]!=null){
							rolename = role[0].replace(/"/g,"");
						}else if(role[1] != 'undefined' && role[1]!=null){
							rolename =  role[1].replace(/"/g,"");
						}
					}
				}else if(typeof role == "string"){
					if(role != null){
					rolename = role.replace(/"/g,"");
					}
				}
				vendorjson.role[0] = rolename;
				if ($(".getuserprofilemain .userListTable tr.common-user-list").length>0) {
					$.each($(".getuserprofilemain .userListTable tr.common-user-list"), function(){
						if ($(this).hasClass("new-user-vendor")) {
							vendorNames.push($(this).find(".kohls-vendorName").text());
						}
							var vendordata = {
								"name": $(this).find(".kohls-vendorName").text(),
								"vendorId":$(this).find(".kohls-vendorName").attr("kohlsvendorId"),
								"entId":$(this).find(".kohls-vendorName").attr("kohlsEntId"),
								"poNumber":$(this).find(".kohls-vendorName").attr("poNumber")
								}
						vendorjson.vendors.push(vendordata);
						
					});
				}	
				$(".banner-check-box").is(':checked');
				if ($(".Office-placement-container").val()!=null && $(".Office-placement-container").val()!=undefined && $(".Office-placement-container").val().length>0) {
					$.each($(".Office-placement-container").val(),function(i,v){
						var tempjson = v;
						vendorjson.officeOfPlacements.push(tempjson);
					});
				}
				delete(originalUserDetails.userDetails);
				
				if(typeof originalUserDetails.role != "object"){
					var tempRole = [];
					tempRole.push(originalUserDetails.role);
					originalUserDetails.role = tempRole;
				}
				vendorjson['email'] = originalUserDetails.email;
				var postData = { "existingUserObj" : originalUserDetails, "updatedUserObj" : vendorjson}; 
				$(".box-loading,.box-overlay").show();
				var _successCallBack = function(response){
						if (response.errorMessage=="") {							
							sessionStorage.setItem("OldObjectJson",JSON.stringify(vendorjson));	
							_currentSessionSelectedOfficeOfPlacement = [];
							if (newoktaid !=undefined && $(".getuserprofilemain").attr("login-OKtaid")==newoktaid) {
								$(".d-flex #getAvatarDetails label").text(userFullName);
								$(".d-flex #getAvatarDetails span").text(userFullName1);
							}
							sessionStorage.setItem("casePackVendors",JSON.stringify(vendorjson.vendors));
							$(".usersubmitbtn").addClass("usersubmitbtnhide").attr("disabled",true);
							if ($(".getuserprofilemain").attr("login-role")=="VU" || $(".getuserprofilemain").attr("login-role")=="VA" || $(".getuserprofilemain").attr("login-role")=="Vendor") {
							var _successUnlockUser = function(data){  
						     		if (data.responseData!=null && data.responseData!=undefined && data.responseData.data!=null && data.responseData.data.userDetails!=undefined && data.responseData.data.userDetails!=null) {
						     			vendorUserProfilejson = [];
						     			vendorUserProfilejson['responseData'] = data.responseData.data;
						     		}			     		
						     		var hideDB = (data.responseData.data.userDetails.admin) ? false : true;    
						      		sessionStorage.setItem("myProfile",JSON.stringify({"isVendor":true,"hideDelete": true,"hideAdminRights":true,status: true,data:JSON.stringify(data)}));
						      		$( document.body ).scrollTop(0);
									if (deleteVendors.length>0) {
										$(".vendor-user-delete-msg").show();
										$(".vendor-user-delete-msg .vendor-name-value").text(deleteVendors.join(", "));
									}									
									if (vendorNames.length>0) {
										$(".vendor-user-success-msg").show();
										$(".vendor-user-success-msg .vendor-name-value").text(vendorNames.join(", "));
									}
									deleteVendors = [];
									if (vendorNames.length==0 && deleteVendors.length==0) {
									Kjs.modelPopUp.alertModelPopUp({title:"",message:"Updated Successfully",okbtn:"ok"},function(){});	
									}
									$(".new-user-vendor").addClass("existing-user-vendor").removeClass("new-user-vendor");
									$(".box-loading,.box-overlay").hide();
								},
								_errorUnlockUser = function(){
									$(".box-loading,.box-overlay").hide();
								};
					    	var urlUser = location.origin +"/user/getuserdetails";
					    	Kjs.vpAjax.get(urlUser,"", _successUnlockUser, _errorUnlockUser,transactionId);		
					    	}else{
					    		$( document.body ).scrollTop(0);
									if (deleteVendors.length>0) {
										$(".vendor-user-delete-msg").show();
										$(".vendor-user-delete-msg .vendor-name-value").text(deleteVendors.join(", "));
									}
									if (vendorNames.length>0) {
										$(".vendor-user-success-msg").show();
										$(".vendor-user-success-msg .vendor-name-value").text(vendorNames.join(", "));
									}
									deleteVendors = [];
									if (vendorNames.length==0 && deleteVendors.length==0) {
									Kjs.modelPopUp.alertModelPopUp({title:"",message:"Updated Successfully",okbtn:"ok"},function(){});	
									}					
									$(".new-user-vendor").addClass("existing-user-vendor").removeClass("new-user-vendor");
									$(".box-loading,.box-overlay").hide();
					    	}				
						}else{
							$(".box-loading,.box-overlay").hide();
							$(".vendor-user-success-msg").hide();
							$(".vendor-user-delete-msg").hide();
							Kjs.modelPopUp.alertModelPopUp({title:"",message:response.errorMessage,okbtn:"ok"},function(){});
						}
					},
					_errorCallBack = function(){
						$(".box-loading,.box-overlay").hide();
					};
				//});
				var url = "/user/updateVendorUser";
				Kjs.vpAjax.post(url, JSON.stringify(postData), _successCallBack, _errorCallBack,transactionId);
			}else{
				$(".Office-placement-container button.ms-choice").addClass("errorborder");
			}
		}
		},
		_closeiconvendor = function(){
			if(!$(this).hasClass('mustHaveOneVendorId')){
				$(".temp-delete-row").removeClass("temp-delete-row");
				$(this).parents(".common-user-list").addClass("temp-delete-row");
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){_deletetemprow($(this))},function(){},{title:"",message:"Are you sure you want to Delete",okbtn:"YES",noText:"NO"});
			}
		},
		_deletetemprow = function(_this){
			deleteVendors.push($(".common-user-list.temp-delete-row").find(".kohls-vendorName").text());
			$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
			$(".all-vendors-data .common-user-list.temp-delete-row").remove();
			_usersubmitbtn();
			if($('.all-vendors-data').find('tr').length == 1){
				$('.all-vendors-data').find('tr .close-icon-vendor').closest('td').addClass('mustHaveOneVendorId').find('.close-icon-vendor').addClass('mustHaveOneVendorId');
			}
			_deactivate();
			_activate();
		},
		_commonuserlistenter = function(){
			if ($(".userListHeader .addUserBtn").length>0 && !$(this).hasClass("rowDeleted") && $(this).find(".status-removerequested").length==0) {
				$(this).css("background-color","rgba(255, 109, 0, 0.05)");
				$(this).find(".close-icon-vendor").css("display","inline-block");
			}
		},
		_commonuserlistleave = function(){
			$(this).find(".close-icon-vendor").css("display","none");
			$(this).css("background-color","#FFF");
		},
		_addUserBtn = function(){
			var tmpl = $.templates("#NewVendorTmpl");
	    	var _renderit = tmpl.render({});
	    	$box.open({
				fancybox : {
					'content' : _renderit,
					'showCloseButton':false,
					'centerOnScroll' : false,
					'onClosed':function(){	
				 	},
					onComplete: function(){	
						$("#frame-tab-end").hide();		
						$("#frame-tab-start").hide();	
						if ($(".getuserprofilemain").attr("login-role")!="VU" && $(".getuserprofilemain").attr("login-role")!="VA" && $(".getuserprofilemain").attr("login-role")!="Vendor") {
							$(".box-model-body-buttons .box-model-save").text("SAVE");
						}
						$(env.vendorProfile.boxmodelcancel).off('click',_boxmodelcancel);
						$(env.vendorProfile.boxmodelsave).off('click',_boxmodelsave);
						$(env.vendorProfile.boxmodelcancel).on('click',_boxmodelcancel);
						$(env.vendorProfile.boxmodelsave).on('click',_boxmodelsave);
						$(env.vendorProfile.PoNumberID).off('keyup',_PoNumberID);
						$(env.vendorProfile.PoNumberID).on('keyup',_PoNumberID);
						$(env.vendorProfile.PoNumberID).off('focusout',_checkDuplicate);
						$(env.vendorProfile.PoNumberID).on('focusout',_checkDuplicate);
					}	
		    	}
			});	
		},
		_checkDuplicate = function(){
			$(".box-model-popupnew .errorcombination").removeClass("duplicatevendor");

			try{

				var enteredValue = $(".userVendorID").val();
				if (enteredValue!="") {
					var vendorIds = JSON.parse(sessionStorage.casePackVendors);
					var nextstep = true;
					for(var i=0;i<vendorIds.length;i++){
						if(vendorIds[i].vendorId ==enteredValue){
							$('.box-model-popupnew .errorcombination').text("Duplicate Vendor Id Not Allowed.");
							$('.box-model-popupnew .errorcombination').removeClass('hide');
							$(".box-model-popupnew .errorcombination").addClass("duplicatevendor");
							$('.box-model-popupnew .errorcombination').show();
							nextstep = false;
						}
					}
					if (nextstep) {
						$(".box-model-popupnew .errorcombination").removeClass("duplicatevendor");
						$('.box-model-popupnew .errorcombination').hide();
					}
				}
			}catch(e){
			} 
		},
		_PoNumberID = function(){
			$('.box-model-popupnew .errorcombination').addClass('hide');
			$(this).val($(this).val().replace(/[^0-9]/g,""));
		},
		_boxmodelsave = function(){
			$(".errorcombination").hide();
			_checkDuplicate();
			var userVendorNmae = "";
			var userVendorID = $(".userVendorID").val();
			var userEnterpriceID = "";
			var PoNumberID = $(".PoNumberID").val();
			if (userVendorID=="") {
				$(".userVendorID").css("border","1px solid #ff0000");
			}else{
				$(".userVendorID").css("border","none");
				$(".userVendorID").css("border-bottom","1px solid #e2e2e2");
			}
			if (PoNumberID=="") {
				$(".PoNumberID").css("border","1px solid #ff0000");
			}else{
				$(".PoNumberID").css("border","none");
				$(".PoNumberID").css("border-bottom","1px solid #e2e2e2");
			}
			if ( (userVendorID!="") && PoNumberID!="" && !$(".box-model-popupnew .errorcombination").hasClass("duplicatevendor")) {
				$(".box-loading,.box-overlay").show();
				$(".errorcombination").hide();
				var _successUnlock = function(response){
				        $(".box-loading,.box-overlay").hide();
				        if (response.errorMessage=="") {

				        	userVendorNmae = response.responseData.PoResponse.VendorName;
				        	userEnterpriceID = response.responseData.PoResponse.EntID;
				        	Kjs.modelPopUp.alertConfirmModelPopUp(function(){_SaveNewVendor(userVendorNmae,userVendorID,userEnterpriceID,PoNumberID)},function(){},{title:"",message:"Are you sure you want to Save",okbtn:"YES",noText:"NO"});
				        }else{
				        	
				        	$(".errorcombination").show();
				        	$(".errorcombination").text(response.errorMessage);
				        }

				},
				_errorUnlock = function(){
					$(".box-loading,.box-overlay").hide();
				};
				var url = location.origin +"/user/validateVendorEnterprisePO?vendorId="+userVendorID+"&entId=&poNumber="+PoNumberID;
				Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);			
			}
		},
		_boxmodelcancel = function(){
			Kjs.modelPopUp.alertConfirmModelPopUp(function(){_closepopupcall()},function(){},{title:"",message:"Are you sure you want to Cancel",okbtn:"YES",noText:"NO"});

		},
		_closepopupcall = function(){
			$box.close();
		},
		_SaveNewVendor = function(userVendorNmae,userVendorID,userEnterpriceID,PoNum){
			_closepopupcall();
			var today = new Date();
			var mm = today.getMonth()+1;
			var date = today.getDate()+"/"+mm+"/"+today.getFullYear();
			$(".userListTable .all-vendors-data").prepend('<tr class="common-user-list new-user-vendor"><td class="kohls-vendorName" kohlsvendorId="'+userVendorID+'" kohlsEntId="'+userEnterpriceID+'" poNumber="'+PoNum+'">'+userVendorNmae+'</td><td class="kohls-VendorID">'+userVendorID+'</td><td><span class="close-icon-vendor"></span></td></tr>');
			$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
			_deactivate();
			_activate();
			_usersubmitbtn();
			$('.all-vendors-data').find('tr .mustHaveOneVendorId').removeClass('mustHaveOneVendorId');
		},
		_getLoggedInUserData = function(){
			var useData = {};
				var _successUnlock = function(data){
					sessionStorage.setItem("loggedInUser", JSON.stringify(data));
				},
				_errorUnlock = function(){
				};
				var url = location.origin +"/user/getuserdetails";
				Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);			
			return useData;
		},
		_softDeleteUSer = function(){
			$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
			$(".box-loading,.box-overlay").show();
								    
			var _successCallBack = function(result){
			    	$(".box-loading,.box-overlay").hide();
			        if(result.status){
			        	$(".getuserprofilemain").hide();
			        	$(".vendor-user-delete-msg").show();
						$(".vendor-user-delete-msg .vendor-name-value").text($(".userDetails .userName .edit-user-name").text());
			        }
			},
			_errorCallBack = function(){
				$(".box-loading,.box-overlay").hide();
			};
			var url = location.origin +"/user/deleteUser";
			var data = {"userName":$('.dlt-this-user').attr("data-user-id"),"oktaId":$('.dlt-this-user').attr("OKtaid")};
			Kjs.vpAjax.post(url, JSON.stringify(data), _successCallBack, _errorCallBack);
		},
		_handleDeleteUSer  = function(){
			var _this = $(this);
			var data = Kjs.DeleteUSerDTO.userDetails;
			var datajson1 = {"firstName":data.firstName,"lastName":data.lastName,"userName":data.email,"oktaId":data.oktaId,"vendors":data.vendors,"officeOfPlacements":data.officeOfPlacements};
			$(".box-loading,.box-overlay").show();			
				var _successCallBack =  function(data){
					$(".box-loading,.box-overlay").hide();
					if(data.status ){
						Kjs.modelPopUp.alertConfirmModelPopUp(function(){
							_softDeleteUSer.call(_this);
						},function(){},{title:"",message:"Are you sure you want to Delete this user?",okbtn:"YES",noText:"NO"});
					}else{
						if(data.errorMessage.length == 0){
							Kjs.modelPopUp.alertModelPopUp({title:"",message:"This user is assigned to one or more merchant groups. <br/>This user cannot be deleted until these groups are re-assigned.",okbtn:"ok"},function(){});			
						}else{
							Kjs.modelPopUp.alertModelPopUp({title:"",message:data.errorMessage,okbtn:"ok"},function(){});			
						
						}
					}
				},
				_errorCallBack = function(){
					$(".box-loading,.box-overlay").hide();
				};
			var url = "/user/hasMerchantGroups";
			Kjs.vpAjax.post(url, JSON.stringify(datajson1), _successCallBack, _errorCallBack);
		},
		_handleManageUser = function(){
			$("#dashboard").hide();
			var templateJson  = vendorUserProfilejson.responseData;
			var _content = $("#manageVendorUserTmpl").render();
			$("#vendorProfileContainer").html(_content);
			$("#associateUserProfile").hide();
			$("#dashboard").hide();
			_changeHeaderName();
			$(env.vendorProfile.searchVendorUser).off('keyup',Kjs.adminUserDashboard.handleToggleFilteredUser);	
			$(env.vendorProfile.searchVendorUser).on('keyup',Kjs.adminUserDashboard.handleToggleFilteredUser);	
			$(env.vendorProfile.searchVendorClick).off('click',Kjs.adminUserDashboard.handleNavigateToProfile);	
			$(env.vendorProfile.searchVendorClick).on('click',Kjs.adminUserDashboard.handleNavigateToProfile);	
			
		};
		return{
			render : _render,
			getLoggedInUserData: _getLoggedInUserData,
			handleManageUser : _handleManageUser
		}
	})();
	$init(function _$init_editprofile($) {		
		$tmpl.load('/static/tmpl/user/tpl.vendorUserProfile.js', function(success, response) {
			env.vendorProfile = $tmpl('editUserProfiletmpl');
		});
		$tmpl.define('editUserProfiletmpl', {
			template : 'editUserProfiletmpl',
			hook : '#vendorProfileContainer',
			addUserBtn:'.addUserBtn',
			boxmodelcancel:".box-model-cancel",
			boxmodelsave:".box-model-save",
			commonuserlist:".common-user-list",
			closeiconvendor:".close-icon-vendor",
			usersubmitbtn:".usersubmitbtn",
			placementHeading:".placementHeading",
			statusclick:".status-click",
			userboxclosebtn:".user-box-close-btn",
			editusername:".edit-user-name-icon",
			boxusercancel:".box-user-cancel",
			boxusersave:".box-user-save",			
			deleteUser:".dlt-this-user",
			adminrightsicon:".admin-rights-name,.admin-rights-containner .checkboxAdminRights",
			searchVendorUser : '[data-search-vendor="userName"]',
			searchVendorClick: 'button.findBtn',
			placementContainerhide: ".placementContainerhide ul li .checkboxVendorStyle",
			PoNumberID:".PoNumberID,.userVendorID,.userEnterpriceID",
			placementClick:".placementDtlContainer .ms-drop ul li",
			cpaddmodify:".cp-add-modify",
			cpviewcapabilities:".cp-view-capabilities",
			onselectfilter:".capabilities-filter select.filter-select-containner",
			closeviewcapabilities:".close-view-capabilities",
			viewcapabilitiesbtn:".view-capabilities-btn",
			casepackaddviewclose:".casepack-add-view-close",
			cancelPlacement : "#cancelPlacement",
			updatePlacement : "#updatePlacement",
			showToolTipMsg  :".mustHaveOneVendorId"
			
		});
		$.views.helpers({
			getUserRole : function(role){
				var rolename = "";
				if(typeof role == "object"){
					if(role != null){
						if(role[0] != "KA" && role[0]!=null){
							rolename = role[0].replace(/"/g,"");
						}else if(role[1] != 'undefined' && role[1]!=null){
							rolename =  role[1].replace(/"/g,"");
						}
					}
				}else if(typeof role == "string"){
					if(role != null){
					rolename = role.replace(/"/g,"");
					}
				}
				if (rolename=="VU" || rolename=="VA") {
					rolename = "Vendor";
				}
				return rolename;
			}
		});
	});
	$ready(function _$ready_editprofile($){
			var urltext = window.location.href; 	
		var myprofileData = JSON.parse(sessionStorage.getItem('myProfile'));
		if(myprofileData != null && !myprofileData.status && (Kjs.storage.getData('userInfo').role == "VU" || Kjs.storage.getData('userInfo').role == "Vendor" || Kjs.storage.getData('userInfo').role == "VA") && !urltext.indexOf("ManageUser") >= 0) {
			var templateJson  = vendorUserProfilejson.responseData;
			Kjs.getuserprofile.vendorProfilePanel.render(env.vendorProfile.hook,templateJson);
		}		
	});
	return {
		vendorProfilePanel : _vendorProfilePanel
	}
});