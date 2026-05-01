$module("adminUserDashboard",function(log, env, module, Kjs){
	var adminUserDashboardPanel = (function(){
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
				_dispose();
				env.hook = hook||env.hook||'body';				
				_panel = $tmpl.render(env.tpl.tplContent, _context(data));
				$(env.hook).append(_panel);
				_deactivate();	
				_activate();	
				_getNotificationList();	
				_daUserControls();
				_dmUserControls();
				_changeHeaderName();
			},
			_activate = function() {				
				$(env.tpl.filterUser).on('keyup',_handleToggleFilteredUser);				
				$(env.tpl.navigateToProfile).on('click',_handleNavigateToProfile);
				$(env.tpl.filterOptionChange).on('change',_handleFilterChange);
				$(env.tpl.addSystemNotification).on('click',_handleAddSystemNotification);
				$(env.tpl.deleteNotification).on('click',_handleDeleteNotification);
				$(env.tpl.kohlsUserProfile).on('click',_handleKohlsUserProfile);
				$(env.tpl.addEmailAddress).on('click',_handleAddEmailAddress);
				$(env.tpl.sendInvite).on('click',_handleSendInvite);
			},
			_deactivate = function() {
				$(env.tpl.filterUser).off('keyup',_handleToggleFilteredUser);
				$(env.tpl.navigateToProfile).off('click',_handleNavigateToProfile);
				$(env.tpl.filterOptionChange).off('change',_handleFilterChange);
				$(env.tpl.addSystemNotification).off('click',_handleAddSystemNotification);
				$(env.tpl.deleteNotification).off('click',_handleDeleteNotification);
				$(env.tpl.kohlsUserProfile).off('click',_handleKohlsUserProfile);
				$(env.tpl.addEmailAddress).off('click',_handleAddEmailAddress);
				$(env.tpl.sendInvite).off('click',_handleSendInvite);
			},
			_ajaxObj = null,
			_associateUserObjList = {},
			_vendorUserObjList = {},
			_userDetails = {},
			_changeHeaderName = function(){
				$(".box-loading").hide();
				$(".box-overlay").hide();
				setTimeout(function(){
					$(".k-link .header-home-logo").hide();
					$(".k-link .header-k-link-logo").show();
				},10);
			},
			_setVendorUSerList = function(result,searchUser){
				var ul = $("<ul></ul>");
				var filteredList = "";
				if(result.errorMessage.trim() != ""){
					filteredList = 	"<li>"+result.errorMessage+"</li>";
					ul.append(filteredList);
				}else{
					var loggedInUserDetails = getLoginUserProfileJson();
					if((searchUser=="Vendor" || loggedInUserDetails.responseData.userInfoData.role == "VA" || loggedInUserDetails.responseData.userInfoData.role == "VU" || loggedInUserDetails.responseData.userInfoData.role == "Vendor") && loggedInUserDetails.responseData.userInfoData.admin){
						for (var i=0;i<result.responseData.users.length;i++){
							if(result.responseData.users[i].admin){
								filteredList = filteredList + "<li data-user-id='"+result.responseData.users[i].userOktaId+"''>"+result.responseData.users[i].firstName + " " +result.responseData.users[i].lastName +" / Admin</li>";
							
							}else{
								filteredList = filteredList + "<li data-user-id='"+result.responseData.users[i].userOktaId+"''>"+result.responseData.users[i].firstName + " " +result.responseData.users[i].lastName +" / Vendor</li>";
							}							
						}
						ul.append(filteredList);
					}else{
						for (var i=0;i<result.responseData.users.length;i++){
							filteredList = filteredList + "<li data-user-id='"+result.responseData.users[i].userOktaId+"''>"+result.responseData.users[i].firstName + " " +result.responseData.users[i].lastName +" / "+ result.responseData.users[i].title+"</li>";
						}
						ul.append(filteredList);	
					}					
				}				
				$('.dropdown-content').html('');
				$('.dropdown-content').append(ul).show();
				$(env.tpl.setUserToFind).off('click',_handleSetUserToFind);
				$(env.tpl.setUserToFind).on('click',_handleSetUserToFind);
			},
			_handleToggleFilteredUser = function(e){
				$('.findBtn').removeAttr('disabled');
				if(e.keyCode == 13){
					_handleNavigateToProfile();
				}
				if(!$(this).closest('div').hasClass('searchVendorUserElm') && $('[data-filter-user-type]').find('option:selected').attr('value') == "associate"){
					$('.findBtn').removeAttr('disabled');						
				} else if($('[data-filter-user-type]').find('option:selected').attr('value') == "vendor" || $(this).closest('div').hasClass('searchVendorUserElm')){
				
				}   
				return false;
			},
			_getDeleteUserButtonStatus = function(filtereduserData){
				if (JSON.parse(sessionStorage.getItem('loggedInUser')).responseData.data.userDetails!=null) {
					var loggedInUserData = JSON.parse(sessionStorage.getItem('loggedInUser')).responseData.data.userDetails.vendors;
					var flag = true;
					var vidCount = 0;
					for(var i=0;i<loggedInUserData.length;i++){
						for (var j =0; j<filtereduserData.vendors.length ; j++) {
							if(filtereduserData.vendors[j].vendorId == loggedInUserData[i].vendorId ){
								vidCount++;
							}
							if(vidCount == filtereduserData.vendors.length){
								flag = false;
							}
						}
						if( (loggedInUserData.length-1 ) == i){
							return flag;
						}
					}
				}
			},
			_handleSetUserToFind = function(){
				var _this = $(this);
				_this.addClass('active');
				$(this).closest('div').prev('input').val($(this).text());
				var filtereduserData = {};
				for(var k=0;k<_vendorUserObjList.responseData.users.length;k++){
					if(_vendorUserObjList.responseData.users[k].userOktaId == $(_this).attr("data-user-id")){
						filtereduserData = _vendorUserObjList.responseData.users[k];
						break;
					}
				}			
				if(Kjs.storage.getData('userInfo').role == "VU" || Kjs.storage.getData('userInfo').role == "VA" || Kjs.storage.getData('userInfo').role == "Vendor"){
					filtereduserData['isDisableDel'] = _getDeleteUserButtonStatus(filtereduserData);
				}else{
					filtereduserData['isDisableDel'] = false;
				}
				var tempJSON = vendorUserProfilejson;
			    vendorUserProfilejson['responseData'] = [];
			    vendorUserProfilejson.responseData['userDetails'] = filtereduserData;
				vendorUserProfilejson.responseData['officeOfPlacements']= Kjs.UserOfficeOfPlacements.officeOfPlacements;		
				$("#dashboard").hide();
				filtereduserData["userDetails"] = filtereduserData;
				Kjs.getuserprofile.vendorProfilePanel.render("#vendorProfileContainer",vendorUserProfilejson.responseData);
				$('.dropdown-content').hide();
			},
			_handleUserProfileToggle = function(type){
				if(type == "show"){
					$('.user-details').show();
				}else if(type == "hide"){
					$('.user-details').hide();
				}
			},
			_setAssociateUserOption = function(data){
				var ul = $("<ul></ul>");
				var filteredList = "";	
				$.each(data.responseData.users,function(i,v){
					if (v.title!=null && v.title!=undefined) {
						var titleName = v.title;
					}else{
						var titleName = "";
					}	
					filteredList = filteredList + "<li data-associate-user-id='"+v.userName+"''>"+v.firstName +" "+v.lastName +" / "+ titleName+"</li>";
				});
				ul.append(filteredList);
				$('.dropdown-content').html("");
				$('.dropdown-content').append(ul).show();
				$(env.tpl.getAdminUserElem).off('click',_handleGetAdminUserElem);
				$(env.tpl.getAdminUserElem).on('click',_handleGetAdminUserElem);
			},
			_noResultsShowError = function(){
				$(".dropdown-content").hide();
				$(".showErrorMeassageSearch").show();
			},
			_handleNavigateToProfile = function(){
				var userType = $('[data-filter-user-type]').find('option:selected').attr('value');	
				$(".showErrorMeassageSearch").hide();
				$(".box-loading, .box-overlay").show();				
				if(userType == "associate" && !$(".vendorManageUser").is(":visible") ){					
					var _successUnlock = function(oktaUSerData){
						$(".box-loading, .box-overlay").hide();	
						if (oktaUSerData!=null && oktaUSerData!=undefined) {
							_associateUserObjList = oktaUSerData;
							if (oktaUSerData.responseData.users==null || oktaUSerData.responseData.users.length===0) {
					    		_noResultsShowError();
					    	}else{
					    		_setAssociateUserOption(oktaUSerData);
					    	}
					    }else{
					    	Kjs.vpAjax.hideLoaderonEmptyResponse();
					    }
					},
					_errorUnlock = function(){
						$(".box-loading, .box-overlay").hide();
					};
					var url = location.origin +"/user/searchAssociateName?keyword="+$('[data-search="userName"]').val();
					Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
				}else if (userType == "vendor" || $(".vendorManageUser").is(":visible")) {
					var searchKey = $('[data-search="userName"]').val();
					if ($(".vendorManageUser").is(":visible")) {
						searchKey = $('[data-search-vendor="userName"]').val();
					}
					if (searchKey!=undefined&& searchKey!="") {
						searchKey = searchKey.trim();
					}
						_ajaxObj = $.ajax({
					    url:location.origin + "/user/searchVendorUser?keyword="+searchKey,
					    type: "GET",
					    headers: {
					        'transactionID': Kjs.vpAjax.randomString()
					    },
					    success: function(result){	
					    	$(".box-loading, .box-overlay").hide();		
					    	if (result!=null && result!=undefined) {					
					    		$('.dropdown-content').find('.loader').remove();
					    		_vendorUserObjList = result;
					    		if (result.responseData.users==null || result.responseData.users.length===0) {
					    			_noResultsShowError();
					    		}else{
					    			_setVendorUSerList(result,"Vendor");
					    		}	
					    	}else{
					    		Kjs.vpAjax.hideLoaderonEmptyResponse();
					    	}		    			
							}
						});
				}
			},
			_handleFilterChange = function() {
				$(this).attr('data-filter',$(this).find('option:selected').text());
				$('[data-filter]').addClass('changed');
				if($('.filterByType').attr('data-filter').toLowerCase() =="all types" && $('.filterByRole').attr('data-filter').toLowerCase() =="all roles"){
					$('[data-filter]').removeClass('changed');
				}
			},
			_handleGetAdminUserElem = function(){
				var userObj = {};
				for(var k =0;k<_associateUserObjList.responseData.users.length;k++){
					if(_associateUserObjList.responseData.users[k].userName == $(this).attr("data-associate-user-id")){
						userObj = _associateUserObjList.responseData.users[k];
						break;
					}
				}
				$("#dashboard").hide();		
				userObj.departmentDescriptin = Kjs.associateUserProfile.getDepartmentArray("",userObj.departments);
				sessionStorage.setItem("userObj",JSON.stringify(userObj));	
				Kjs.associateUserProfile.render("#associateUserProfile", userObj);	
				$("#associateUserProfile").show().removeAttr('display');
			},		
			
			_dmUserControls = function(){
				var userOktaDetails = JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData;
				var isDMUser = userOktaDetails.currentUserRoles.indexOf('DM');
				var isKAUser = userOktaDetails.currentUserRoles.indexOf('KA');
				
				if(isDMUser != -1 && isKAUser != -1){
					$(env.tpl.consumerBrandMappingPanel).show();
				}
			},
			
			_daUserControls = function() {
				var userOktaDetails = JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData;
				var isDAUser = userOktaDetails.currentUserRoles.indexOf('DA');
				if (isDAUser !== -1) {
					$(env.tpl.daPanel).show();
					$(env.tpl.daPanel).siblings().hide();
				}
			},
			_getNotificationList = function(){
				var bannerjson = "";
				var _successUnlock = function(response){
						if (response!=null && response!=undefined && response.errorMessage == "" && response.responseData!=null && response.responseData!="" && response.responseData.bannerNotification!=null &&response.responseData.bannerNotification.length>0) {
							Kjs.allBannerNotifications = response.responseData;
							var tmpl = $.templates("#Show-All-Notifications");
		    				var _renderit = tmpl.render({"List":response.responseData});
		    				$(".list-all-notifications").html(_renderit); 
		    				_deactivate();	
							_activate();
							$("#noNotification").hide();
						}else{ 
							$("#noNotification").show();
						}
						
					},
					_errorUnlock = function(){					
					};
				var url = "/user/getBannerNotifications?fetchActive=false";
				Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
			},			
			_getAllDepartment = function(){
				if (Kjs.storage.getData('allDepartment')==null || Kjs.storage.getData('allDepartment')==undefined || Kjs.storage.getData('allDepartment')=="") {
				var _successUnlock = function(result){		
				   	if (result!=null && result!=undefined) {	    		
				   		Kjs.storage.saveData("allDepartment",JSON.stringify(result));
				   	}else{
				   		Kjs.vpAjax.hideLoaderonEmptyResponse();
				   	}
				},
				_errorUnlock = function(){
				};
				var url = location.origin + "/user/getAllDepartment";
				Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
			}
			},
			_handleKohlsUserProfile = function(){	
				var storageData = Kjs.storage.getData('userInfo')
				var departmentDescription = Kjs.associateUserProfile.getDepartmentArray(Kjs.storage.getData('allDepartment'),storageData.departmentNumber);
				var userObj = {"id":storageData.userOktaId,"firstName":storageData.firstName,"lastName":storageData.lastName,"role":storageData.role,"tkId":storageData.tkid,"title":storageData.title,"admin":false,"departments":storageData.departmentNumber,"departmentDescriptin":departmentDescription};
				sessionStorage.setItem("userObj",JSON.stringify(userObj));	
				$("#dashboard").hide();
				Kjs.associateUserProfile.render("#associateUserProfile", userObj);	
			},
			_handleAddEmailAddress = function(){
				const emailAddressCount = document.getElementsByName("emails[]").length;
				const template = document.getElementById("vendor-email-address-template");
				const clone = template.content.cloneNode(true);
				clone.querySelector('.email-address-label').textContent = `Email Address ${emailAddressCount + 1}:`;
				document.getElementById("vendor-email-address-container").appendChild(clone);
			},
			_handleSendInvite = function() {
				let allValid = true;
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				const emailAddresses = Array.from(document.getElementsByName("emails[]"))
					.map(input => {
						if (input.value && !emailRegex.test(input.value)) {
							input.nextElementSibling.textContent = "Please enter a valid email address";
							allValid = false;
						} else {
							input.nextElementSibling.textContent = "";
						}
						return input.value.trim();
					});

				if (!allValid) {
					return;
				}

				$(".box-loading, .box-overlay").show();
				var _successUnlock = function (response) {
						$(".box-loading, .box-overlay").hide();
                        let message = "";
                        const errorCount = response.responseData.emailServiceResponses.reduce((sum, response) => sum + response.emailErrors.length, 0);
                        if (errorCount > 0) {
                            message = "There were errors sending the invitations via email.";
                        } else {
                            message = "Invitations sent successfully via email."
                        }
						Kjs.modelPopUp.alertModelPopUp({message}, function(){});
						const template = document.getElementById("vendor-email-address-template");
						document.getElementById("vendor-email-address-container").innerHTML = "";
						document.getElementById("vendor-email-address-container").appendChild(template);
						adminUserDashboardPanel.handleAddEmailAddress();
					},
					_errorUnlock = function () {
						$(".box-loading, .box-overlay").hide();
						Kjs.modelPopUp.alertModelPopUp({message: "There was a problem sending the emails"}, function(){});
					};
                const origin = window.location.origin;
				const url = origin + "/user/sendVendorInvitationEmails";
                Kjs.vpAjax.post(url, JSON.stringify({origin, emailAddresses}), _successUnlock, _errorUnlock);
			};
			return {
				render : _render,
				handleUserProfileToggle : _handleUserProfileToggle,
				ajaxObj : _ajaxObj,
				getAllDepartment : _getAllDepartment,
				handleToggleFilteredUser :_handleToggleFilteredUser,
				handleNavigateToProfile : _handleNavigateToProfile,
				handleAddEmailAddress : _handleAddEmailAddress,
				handleSendInvite : _handleSendInvite
			}
	})();	
	$init(function _$init_login($){
		$tmpl.define('userDashboard',{
			tplContent :'adminUserDashboardPanelTmpl',
			hookContent : "#dashboard",
			filterUser:'[data-search="userName"]',
			setUserToFind:'[data-user-id]',
			navigateToProfile:".findBtn",
			filterOptionChange : '[data-filter]',
			addSystemNotification : ".notifContainer .add-icon,.system-notification .edit",
			deleteNotification: ".system-notification .delete",
			getAdminUserElem: "[data-associate-user-id]",
			kohlsUserProfile : "#profile",
			daPanel: '.DAPanel',
			consumerBrandMappingPanel : '.consumerBrandMappingPanel',
			addEmailAddress: ".vendor-invite-add-btn",
			sendInvite: ".vendor-invite-send-btn",
		});
		$tmpl.load('/static/tmpl/user/tpl.adminUserDashboard.js', function(success, response) {
			env.tpl = $tmpl('userDashboard');
		});
		$.views.helpers({
			getTimeFormat: function(str) {
				var d = new Date(str);
				var shortDate = d.toString().substr(0,15).replace(d.toString().substr(0,3),d.toString().substr(0,3)+",");
			    return shortDate;
			},
			timeFormat : function(time){
				var start_time = time;
				var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
				var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
				var Start_date = new Date(start_time);
				var start_day =weekday[Start_date.getDay()];
				if (start_day == undefined || start_day == null) {
					start_day = "";
				}
				var timeFormat = time.split(' ');
				var Start_hour = Start_date.getHours();
				var Start_min = Start_date.getMinutes();
				Start_hour = Start_hour % 12;
				var ampm = Start_date.getHours() >= 12 ? 'PM' : 'AM';
				Start_hour = Start_hour ? Start_hour : 12; // the hour '0' should be '12'
				if (Start_min!=undefined && Start_min!=null && Start_min!="") {
					Start_min = parseInt(Start_min);
					if (Start_min >= 0) {
						Start_min = Start_min < 10 ? '0' + Start_min : Start_min;
					}else{
						Start_min = "00";
					}
				}else{
					Start_min = "00";
				}				
				var strTime = Start_hour + ':' + Start_min + ' ' + ampm;
				var monthFormat = timeFormat[0].split('-')[1];
				var yearFormat = timeFormat[0].split('-')[0];
				var DayFormat = timeFormat[0].split('-')[2];
				var monthName = months[monthFormat-1];
				var newtime = start_day+" "+monthName+" "+" "+DayFormat+" "+yearFormat+" "+strTime;
				return newtime;
			},
			currTime : function(time){
				var start_time = time; 
				var Start_date = new Date(start_time); 
				var timeFormat = time.split(' ');
				var Start_hour = Start_date.getHours();
				var Start_min = Start_date.getMinutes();
				Start_hour = Start_hour % 12;
				var ampm = Start_date.getHours() >= 12 ? 'PM' : 'AM';
				Start_hour = Start_hour ? Start_hour : 12; // the hour '0' should be '12'
				Start_min = Start_min < 10 ? '0' + Start_min : Start_min;
				var strTime = Start_hour + ':' + Start_min + ' ' + ampm; 
				var newtime =  strTime;
				return newtime;
			},
			isKohlsUser : function(){
				return false;
			}
		});
	});	
	
	$ready(function _$ready_login($){
		Kjs.adminUserDashboard.getAllDepartment();	
		var urltext = window.location.href;
		if(urltext.indexOf("ManageUser") >= 0){
			Kjs.getuserprofile.vendorProfilePanel.handleManageUser();			
		}else if(urltext.indexOf("kohlsUserDashboard") >= 0){			
			Kjs.adminUserDashboard.render(env.tpl.hookContent, {});	
		}

		$( "body" ).click(function( event ) {
		  if($(event.target).closest(".user-profile-option").hasClass('user-profile-option')){
		  	Kjs.adminUserDashboard.handleUserProfileToggle("show");
		  }else{
		  	Kjs.adminUserDashboard.handleUserProfileToggle("hide");
		  }
		  if($(event.target).attr('data-user-id') == undefined){
		  	$('.dropdown-content').hide();
		  	$('.dropdown-content').html('');
		  }
		});
		Kjs.getuserprofile.vendorProfilePanel.getLoggedInUserData();

		adminUserDashboardPanel.handleAddEmailAddress();
	});
	return adminUserDashboardPanel;
});
