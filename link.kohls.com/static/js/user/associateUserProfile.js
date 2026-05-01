$module("associateUserProfile",function(log, env, module, Kjs){
	var associateUserProfilePanel = (function(){
		var _panel,				
			_vendorId,
			_context = function(data) {
				var args = [].slice.call(arguments);
				return Kjs.object.apply(Kjs, [data, env.tpl.statics].concat(args));
			},
			_dispose = function(){
					if (_panel) {
						_deactivate();
						_panel.remove();
						_panel = null;
					}
			},
			_render = function(hook,data){
				sessionStorage.setItem("SearchUserObj",JSON.stringify(data));
				data["userOktaDetails"] = _getUserOktaDetails();	
				if(data.hideAdminRights == undefined){
					data["hideAdminRights"] = false;
				}			
				_dispose();
				env.hook = hook||env.hook||'body';				
				_panel = $tmpl.render(env.tpl.tplContent, _context(data));
				$(env.hook).append(_panel);
				_deactivate();	
				_activate();				
				$(".box-loading").hide();
				$(".box-overlay").hide();
				_updateHeader(data.firstName,data.lastName);
			},
			_activate = function() {				
				$(env.tpl.addDepartment).on('click',_handleAddDepartment);
				$(env.tpl.roleWrapper).on('click',_handleUserRoleChangeOptions);
				$(env.tpl.changeUserRole).on('click',_handleChangeUserRole);
				$(env.tpl.deleteDpt).on('click',_handleDeleteDepartment);
				$(env.tpl.editUser).on('click',_handleEditUser);
				$(env.tpl.submitUserData).on('click',_handleSubmitUserData);
				$(env.tpl.adminRights).on('click',_handleAdminRights);						
			},
			_deactivate = function() {
				$(env.tpl.addDepartment).off('click',_handleAddDepartment);
				$(env.tpl.roleWrapper).off('click',_handleUserRoleChangeOptions);
				$(env.tpl.changeUserRole).off('click',_handleChangeUserRole);
				$(env.tpl.deleteDpt).off('click',_handleDeleteDepartment);
				$(env.tpl.editUser).off('click',_handleEditUser);
				$(env.tpl.submitUserData).off('click',_handleSubmitUserData);
				$(env.tpl.adminRights).off('click',_handleAdminRights);	
			},
			_updateHeader = function(FirstName,LastName){
				setTimeout(function(){
					$('.header-k-link-logo').hide();
					$('.header-home-logo').show();
					$('.header-home-name').find('.header-logo-user-name').remove();
					$('.header-home-name').append('<a href="javascript:void(0)"><span class="header-logo-user-name associateUserProfile">Profile '+ FirstName + ' '+ LastName+'</span></a>');
					
					var jsondata = getLoginUserProfileJson();
					if(jsondata!=null && jsondata.responseData!=null && jsondata.responseData.userInfoData!=null){
						if (jsondata.responseData.userInfoData.admin && jsondata.responseData.userInfoData.role!="VU" && jsondata.responseData.userInfoData.role!="VA" && jsondata.responseData.userInfoData.role!="Vendor") {
							$('.header-home-name').find('[href="/merchandising/MerchantGroupListViewPage"]').text('Dashboard').attr("href","/user/getuserprofile?type=kohlsUserDashboard").addClass('adminDashboard');
						}else{
							$('.header-home-name').find('[href="/merchandising/MerchantGroupListViewPage"]').remove();
							$('<span class="Dashboard-disabled">Dashboard</span>').insertAfter(".header-home-name .header-leftarrow-icon:first");
						}
					}
					$('.logo-home-icon').attr('href',"/merchandising/MerchantGroupListViewPage");
					$(env.tpl.adminDashboardClick).off('click',Kjs.userCommon.handleDasbhoardClick);	
					$(env.tpl.adminDashboardClick).on('click',Kjs.userCommon.handleDasbhoardClick);
				},300);
			},
			_getUserOktaDetails = function(){
				return JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData;
			},
			_allDepartmentList = {},
			_selectedUserObj = {},
			_selectedDeparments = [],
			_tempAddedDept = [],
			_renderAddedDepartment = function(deparmentWithDescription,targetObj){
				var tmpl = $.templates("#departmentListAssigedToUserTmpl");
			    var _renderit = tmpl.render(deparmentWithDescription).trim();
			    $("#assignedDepartments").html("").html(_renderit);
		    	$(env.tpl.deleteDpt).on('click',_handleDeleteDepartment);	
		    	if(targetObj.hasClass('selected')){
		    		targetObj.removeClass('selected');
		    		$('[data-department-lookup]').val('');
		    		$('[data-assiged-departments="'+$(targetObj).attr('data-lable-value').split('-')[0]+'"]').attr('data-is-dpt-deleted',true);
		    	}else{
		    		targetObj.addClass('selected');
		    		$('[data-department-lookup]').val('');
		    	}		
		    	$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
		    	return false;
			},
			_orderSelectedDept = function(event, ui){
				var targetObj = $(event.currentTarget).find('li[data-lable-value="'+ui.item.label+'"]');
				var selectedDepartment = $(targetObj).attr('data-lable-value').split('-')[0];
				var userObj = JSON.parse(sessionStorage.getItem('userObj'));
				
				var deptlist = userObj.departments;
				if($.inArray(selectedDepartment,_tempAddedDept) == -1){
					_tempAddedDept.push(selectedDepartment);
					deptlist.push(selectedDepartment);
				}				
				deptlist = deptlist.sort();
				userObj.departments = deptlist;
				sessionStorage.setItem('userObj',JSON.stringify(userObj))
				var deparmentWithDescription = _getDepartmentArray("",deptlist);
		    	_renderAddedDepartment(deparmentWithDescription,targetObj);
			},
			_renderAutoComplete = function(deptListArray){
				$('[data-department-lookup]').autocomplete({
				    source: deptListArray,
				    appendTo : '.allDpt',
				    minLength: 0,
				    create: function( event, ui ) {
				    	$('.ui-autocomplete').removeAttr('display');
				    },
				    select : function(event, ui){
				    		_orderSelectedDept(event, ui);	    	
				    }
				});
               $('[data-department-lookup]').autocomplete("search", "");
				$(env.tpl.departmentLookup).on('change',_handleDepartmentLookup);
			},
			_addDptFancyCompleteCallBack = function(){	
				$('body').addClass('department-popup-open');
				if(Kjs.storage.getData('allDepartment') == null){
					_getAllDepartment();
				}else{
					_allDepartmentList = Kjs.storage.getData('allDepartment');
				}	
				_getAllDepartmentArray(_allDepartmentList);
			},
			_addDptFancyCloseCallBack = function(){
				$('body').removeClass('department-popup-open');
				for(var l=0;l<_tempAddedDept.length;l++){
					$('#assignedDepartments span[data-assiged-departments="'+_tempAddedDept[l]+'"]').addClass('added-dpt')
				}
			},
			_getAllDepartmentArray = function(result){				                
                var deptlist = JSON.parse(result).responseData;
                var deptListArray = [];
                var userObjDeptListArr = JSON.parse(sessionStorage.getItem('userObj')).departments;
                for(i=0;i<deptlist.length;i++){
                	var deptListNumber = deptlist[i].deptNumber;
                	if($.inArray(deptListNumber,userObjDeptListArr) < 0){
                		deptListArray.push(deptListNumber+"-"+ deptlist[i].deptDescription);
                	}                	
                }         
                _renderAutoComplete(deptListArray);      
			},
			_handleAddDepartment = function(){				
				Kjs.userCommon.renderFancyBox("#departmentListTmpl",_addDptFancyCompleteCallBack,_addDptFancyCloseCallBack);
			},
			_handleUserRoleChangeOptions = function(){				
				if($(this).next('ul').hasClass('active'))
				$('.user-role-option, .roleWrapper').removeClass('active');
				else
				$('.user-role-option, .roleWrapper').addClass('active');
			},
			_handleChangeUserRole = function(){
				var _this = $(this);
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){
					var attr = $('[data-selected-role]').attr('data-selected-role');
					var text = $('[data-selected-role]').text();
					$('[data-selected-role]').text($(_this).text()).attr('data-selected-role',$(_this).attr('data-user-role-item'));
					$(_this).attr('data-user-role-item',attr).text(text);
					$('.user-role-option, .roleWrapper').removeClass('active');
					$(".usersubmitbtn").removeClass('usersubmitbtnhide').removeAttr("disabled");
				},function(){},{title:"",message:"Are you sure you want to change Role?",okbtn:"YES",noText:"NO"});
			
			},
			_handleDepartmentLookup = function(){
				var lookedUpText = $(this).val();				
				if((lookedUpText.trim() != "") &&($('.ui-autocomplete li[data-lable-value]:contains('+lookedUpText+')').length == 0)){
					$('.ui-autocomplete').css('display','none');
				}else{
					$('.ui-autocomplete').css('display','block');
				}
			},
			_handleDeleteDepartment = function(){
				var _this = $(this);
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){
					$(_this).parent('span').attr('data-is-dpt-deleted',true);
					$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
					var userDepartments = JSON.parse(sessionStorage.getItem("userObj")).departments;
					var index = $.inArray($(_this).parent('span').attr('data-assiged-departments'),userDepartments);
					if($.inArray($(_this).parent('span').attr('data-assiged-departments'),userDepartments) != -1){
						userDepartments.splice(0,1);
					}
					var userObj =  JSON.parse(sessionStorage.getItem("userObj"));
					userObj.departments = userDepartments;
					sessionStorage.setItem("userObj",JSON.stringify(userObj));
				},function(){},{title:"",message:"Are you sure you want to Delete?",okbtn:"YES",noText:"NO"});
			},
			_getAllDepartment = function(){
				if (Kjs.storage.getData('allDepartment')==null || Kjs.storage.getData('allDepartment')==undefined || Kjs.storage.getData('allDepartment')=="") {
			    var _successUnlock =  function(result){  
			    Kjs.storage.saveData("allDepartment",JSON.stringify(result));  		
				    _allDepartmentList = result;
				    return _allDepartmentList;	
				},
				_errorUnlock = function(){
				};
				var url = location.origin + "/user/getAllDepartment";
				Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
				}else{
					 _allDepartmentList = JSON.parse(Kjs.storage.getData('allDepartment'));
				}	
			},
			_getDepartmentArray = function(allList,belogToUser){	
				var allDeptLsit = (JSON.parse(Kjs.storage.getData('allDepartment')) != null)? JSON.parse(Kjs.storage.getData('allDepartment')):_getAllDepartment();
				var departmentDescription = [];	
				try{
					for (var i = 0; i < allDeptLsit.responseData.length; i++) {
						if (belogToUser!=null && belogToUser!=undefined) {
						for(var j =0;j<belogToUser.length;j++){
							if(parseInt(belogToUser[j]) == allDeptLsit.responseData[i].deptNumber){
								var obj = {"id":allDeptLsit.responseData[i].deptNumber, "description":allDeptLsit.responseData[i].deptDescription,"isNew": false};	
								departmentDescription.push(obj); 
							}
						}
						}
					}
				}catch(e){
				}				
				return departmentDescription;
			},
			_handleEditUser = function(){				
				var data = JSON.parse(sessionStorage.getItem("userObj"));	
				Kjs.userCommon.renderFancyBox("#Edit-User-tmpl",function(){
					$(env.tpl.boxusersave).off('click',_boxusersave);
					$(env.tpl.boxusersave).on('click',_boxusersave);
				},function(){},data);					
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
			if (company=="") {
				$(".user-edit-company-name").css("border","1px solid #ff0000");
			}else{
				$(".user-edit-company-name").css("border","none");
				$(".user-edit-company-name").css("border-bottom","1px solid #e2e2e2");
			}
			if (title=="") {
				$(".user-edit-title-name").css("border","1px solid #ff0000");
			}else{
				$(".user-edit-title-name").css("border","none");
				$(".user-edit-title-name").css("border-bottom","1px solid #e2e2e2");
			}
			if (firstname!="" && lastname!=""  && title!="") {
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){_updateuserdetail(firstname,lastname,company,title)},function(){},{title:"",message:"Are you sure you want to Save",okbtn:"YES",noText:"NO"});

			}
		},
		_updateuserdetail = function(firstname,lastname,company,title){
			$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
			_closepopupcall();
			var data = JSON.parse(sessionStorage.getItem("userObj"));	
			data.firstName = firstname;
			data.lastName = lastname;
			data.title = title;
			sessionStorage.setItem("userObj",JSON.stringify(data));
			$(".usernamecontainer .edit-user-name").text(firstname+" "+lastname);
			$(".companyContainer .company").text(company);
		},
		_handleSubmitUserData = function(){			
			var transactionId = Kjs.vpAjax.randomString();
			var data = JSON.parse(sessionStorage.getItem("userObj"));	
			var originalUserObj = JSON.parse(sessionStorage.getItem("SearchUserObj"));
			if(typeof originalUserObj.role != "object"){
			    var tempRole = [];
			    tempRole.push(originalUserObj.role);
			    originalUserObj.role = tempRole;
			} 
			var latestDepartments = [];		
			var departmentList = $("[data-assiged-departments]").not('[data-is-dpt-deleted="true"]');
			for(var j=0;j<departmentList.length;j++){
				latestDepartments.push($(departmentList[j]).attr('data-assiged-departments'));
			}			
			if ($(".admin-role-dtl .label").is(":visible")) {
				var admin_rights = $('input[name="adminRights"]').is(':checked');	
			}else{
				var admin_rights = data.admin;
			}	
			data.admin = admin_rights;			
			data.departments = latestDepartments;
			data.userOktaId = data.userOktaId;
			data['email'] = originalUserObj.userName;
			if(typeof data.role == "string"){
			    var roleValue = $("#associateUserProfile .role").attr('data-selected-role').toUpperCase();
			    data.role = [];
			    data.role[0] = roleValue;
			}else if(typeof data.role == "object"){
			    if(data.role[0] != "undefined" && data.role[0] != "KA"){
			     data.role[0] =$("#associateUserProfile .role").attr('data-selected-role').toUpperCase();
			    }else if(data.role[1] != "undefined" && data.role[1] != "KA"){
			     data.role[1] =$("#associateUserProfile .role").attr('data-selected-role').toUpperCase();
			    }
			}
			$(".box-loading,.box-overlay").show();	
			var  postData = { "existingUserObj" : originalUserObj, "updatedUserObj" : data}; 		
				var _successCallBackUpdate = function(result){						
					if(result.status){
						$(".usersubmitbtn").addClass("usersubmitbtnhide").attr("disabled",true);
						sessionStorage.setItem("SearchUserObj",JSON.stringify(data));
						Kjs.modelPopUp.alertModelPopUp({title:"",message:"Updated Successfully",okbtn:"ok"},function(){});	
						if (Kjs.storage.getData('userOktaDetails') != null && JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData!=undefined && data['oktaId']==JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.userOktaId && $('.roleWrapper').find('.role').attr('data-selected-role') != undefined) {
							$('.profile-dtl .role').text($('.roleWrapper').find('.role').attr('data-selected-role').toUpperCase());		
						}
						_updateProfileJSON();
						$(".box-loading,.box-overlay").hide();
						Kjs.storage.saveData('userOktaDetails',null);
						var _successUnlock = function(data){
						    if (data.responseData !=undefined && data.responseData!=null && data.responseData.userInfoData!=null) {
						    	Kjs.storage.saveData("userOktaDetails",JSON.stringify(data));
						    }
						},
						_errorUnlock = function(){							
						};
						var url = location.origin+"/user/getLoginUserProfile";
						Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock,transactionId);
					}else if(!result.status){
						$(".box-loading,.box-overlay").hide();
						Kjs.modelPopUp.alertModelPopUp({title:"",message:"Failed to Updated",okbtn:"ok"},function(){});		
					}
					$('[data-department-lookup]').val('');
				},
				_errorCallBackUpdate = function(){
					$(".box-loading,.box-overlay").hide();
				};
			var url = location.origin +"/user/updateAssociateUser";
			Kjs.vpAjax.post(url, JSON.stringify(postData), _successCallBackUpdate, _errorCallBackUpdate,transactionId);
		},
		_handleAdminRights = function(){
			if($("#associateUserProfile [name='adminRights']").is(':checked')){
				$("#associateUserProfile [name='adminRights']").prop("checked",false);
			}else{
				$("#associateUserProfile [name='adminRights']").prop("checked",true);
			}
			Kjs.modelPopUp.alertConfirmModelPopUp(function(){_comformAdminRights()},function(){},{title:"",message:"Are you sure you want to change the admin rights",okbtn:"YES",noText:"NO"});
		},
		_comformAdminRights = function(){			
			$(".usersubmitbtn").removeClass("usersubmitbtnhide").removeAttr("disabled");
			if($("#associateUserProfile [name='adminRights']").is(':checked')){
				$("#associateUserProfile [name='adminRights']").prop("checked",false);
			}else{
				$("#associateUserProfile [name='adminRights']").prop("checked",true);
			}
		},
		_updateProfileJSON = function(){
				var _successUnlock = function(data){
	      			Kjs.storage.saveData("userOktaDetails",JSON.stringify(data));
	      			var myProfileData = JSON.parse(sessionStorage.getItem("myProfile"));
	      			if(myProfileData != null){
	      				sessionStorage.setItem("myProfile",JSON.stringify({"isVendor":myProfileData.isVendor,"hideDelete": myProfileData.hideDelete,"hideAdminRights": myProfileData.hideAdminRights, status: myProfileData.status,data:JSON.stringify(data)}));
	      			}	 
	      		},
	      		_errorUnlock = function(){
	      		};
	     	var url = location.origin+"/user/getLoginUserProfile";
	     	Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
		};
		return {
			render : _render,
			getAllDepartment : _getAllDepartment,
			allDepartmentList : _allDepartmentList,
			getDepartmentArray: _getDepartmentArray
		}
	})();	
	$init(function _$init_login($){
		$tmpl.define('userProfile',{
			tplContent :'associateUserProfileTmpl',
			hookContent : "#userProfile",
			addDepartment : ".addDpt",
			roleWrapper :".roleWrapper",
			changeUserRole:"[data-user-role-item]",
			departmentLookup:"[data-department-lookup]",
			deleteDpt : ".remove-dpt",
			editUser: ".edit-user-name-icon",
			boxusersave:".box-user-save",
			submitUserData:"#associateUserProfile .usersubmitbtn",
			adminRights: "#associateUserProfile [name='adminRights']",
			adminDashboardClick : ".adminDashboard"
		});
		$tmpl.load('/static/tmpl/user/tpl.associateUserProfile.js', function(success, response) {
			env.tpl = $tmpl('userProfile');
		});	
		$.views.helpers({
			getUserRoleName : function(role){
				var roleName = "";
				if(typeof role == "object"){
					if(role != null){
						if(role[0] != "KA" && role[0]!=null){
							roleName = role[0].replace(/"/g,"");
						}else if(role[1] != 'undefined' && role[1] !=null){
							roleName = role[1].replace(/"/g,"");
						}
					}
				}else if(typeof role == "string"){
					if(role != null){
					roleName = role.replace(/"/g,"");
					}
				}
			if (roleName=="Merchandise Specialist" || roleName=="MERCHANDISE SPECIALIST") {
				roleName = "MS";
			}
			return roleName;
			}
		});
	});	
	
	$ready(function _$ready_login($){
		//Kjs.associateUserProfile.getAllDepartment();
		var myProfileData = JSON.parse(sessionStorage.getItem('myProfile'));
		var urltext = window.location.href; 
		if(urltext.indexOf("kohlsUserDashboard") <= 0 && myProfileData!= null && myProfileData.status && !myProfileData.isVendor && (JSON.parse(myProfileData.data).role != "VU" || JSON.parse(myProfileData.data).role != "VA" )){
			storageData = JSON.parse(myProfileData.data).responseData.userInfoData;
			var departmentDescription = Kjs.associateUserProfile.getDepartmentArray(Kjs.storage.getData('allDepartment'),storageData.departmentNumber);
			var userObj = {
				  "id": storageData.userOktaId,
				  "userName": storageData.login,
				  "firstName": storageData.firstName,
				  "lastName": storageData.lastName,
				  "title": storageData.title,
				  "oktaName": storageData.oktaName,
				  "deleted": null,
				  "lastLoginTime": null,
				  "securityQuestion": null,
				  "role": storageData.role,
				  "roleName": null,
				  "departments": storageData.departmentNumber,
				  "poId": null,
				  "parentCompany": null,
				  "officeOfPlacements": null,
				  "vendors": storageData.vendorId,
				  "tkId": storageData.tkid,
				  "oktaId": storageData.userOktaId,
				  "userOktaId": storageData.userOktaId,
				  "admin": storageData.admin,
				  "departmentDescriptin":departmentDescription,
				  "hideAdminRights" : myProfileData.hideAdminRights
				}
			sessionStorage.setItem("userObj",JSON.stringify(userObj));	
			$("#dashboard").hide();
			Kjs.associateUserProfile.render("#associateUserProfile", userObj);
		}else if(urltext.indexOf("kohlsUserDashboard") <= 0 && myProfileData!= null && myProfileData.status && myProfileData.isVendor && (JSON.parse(myProfileData.data).role != "VU" || JSON.parse(myProfileData.data).role != "VA" )){
			var templateJson = JSON.parse(myProfileData.data).responseData.data;
			templateJson['hideAdminRights'] = myProfileData.hideAdminRights;
			templateJson['hideDeleteButton'] = myProfileData.hideDelete;
			  	var _successUnlock = function(data){  
			      		vendorUserProfilejson = data.responseData.data.userDetails;
			      		vendorUserProfilejson['responseData'] = [];
			      		vendorUserProfilejson.responseData['userDetails'] = data.responseData.data.userDetails;
			     	},
			     _errorUnlock = function(){
			     };
			var url = location.origin +"/user/getuserdetails";
			Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
			Kjs.getuserprofile.vendorProfilePanel.render("#vendorProfileContainer",templateJson);
		}else if( urltext.indexOf("kohlsUserDashboard") >= 0 && urltext.indexOf("VendorUSerProfile") <= 0){
			Kjs.adminUserDashboard.render("#dashboard", {});
		}else{
			var userData = Kjs.storage.getData('userInfo');
			if (userData=="" || userData==null || userData.role== undefined || userData.role==null || userData.role=="") {
				var _successUnlock = function(data){
					if(data != null && data != undefined){
					  	Kjs.storage.saveData("userInfo", data.responseData.userInfoData);
					  	Kjs.userCommon.handleProfile();
					}
				},
				_errorUnlock = function(){
					Kjs.userCommon.handleProfile();
				};
				var url = location.origin+"/user/getLoginUserProfile";
				Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
			}else{
				Kjs.userCommon.handleProfile();
			}			
		}	
		$( "body" ).click(function( event ) {
			if(($('.user-role-option').hasClass('active')) && (!$(event.target).hasClass('roleWrapper'))){
				$('.user-role-option, .roleWrapper').removeClass('active');
			}
			if($(event.target).hasClass('allDpt') || $(event.target).hasClass('departmentListContainer') ||$(event.target).hasClass('ui-menu-item') ){
				$('.ui-autocomplete').css('display','block');
				$('[data-department-lookup]').val('');					
			}
		});
			
	});
	return associateUserProfilePanel;
});