$module("userCommon",function(log, env, module, Kjs){
	var userCommonPanel = (function(){
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
				$(".box-loading").hide();
				$(".box-overlay").hide();
			},
			_activate = function() {
				$(env.tpl.userlogoutClick).on('click',_handleLogoutClicked);
				$(env.tpl.profile).on('click',_handleProfile);
				$(env.tpl.adminDashboard).on('click',_handleDasbhoardClick);
				$(env.tpl.vendorUser).on('click',_handlevendorUser);
				$(env.tpl.logoClick).on('click',_handleLogoClick);
			},
			_deactivate = function() {
				$(env.tpl.userlogoutClick).off('click',_handleLogoutClicked);
				$(env.tpl.profile).off('click',_handleProfile);
				$(env.tpl.adminDashboard).off('click',_handleDasbhoardClick);
				$(env.tpl.logoClick).off('click',_handleLogoClick);				
			},
			_handlenotificationDetail = function(){
				window.location=$(this).attr('data-redirect-url');
			},
			_handleDasbhoardClick = function(){
				sessionStorage.removeItem('myProfile');	
				$("#associateUserProfile").hide();
				Kjs.adminUserDashboard.render("#dashboard", {}); 
				$("#dashboard").show().removeAttr('display'); 
				$("#vendorProfileContainer").hide();
			},
			_handleLogoutClicked = function(){  
				_clearLocalAndSessionStorage();
				$('#logoutFrom').submit();
				window.location.href = "/logout";  
				localStorage.clear();
			},
			_handlevendorUser = function(){
				window.location.href = "/user/getuserprofile?type=ManageUser";
			},
			_handleProfile = function(e){
				var userData = Kjs.storage.getData('userInfo');
			if(userData.role != null && userData.role!= "" && (userData.role == "VA" || userData.role == "VU" ||userData.role=="Vendor")){
		     	var _successUnlock = function(data){  
			     		if (data!=null && data!=undefined) {
				      		var hideDB = (data.responseData.data.userDetails.admin) ? false : true;    
				      		sessionStorage.setItem("myProfile",JSON.stringify({"isVendor":true,"hideDelete": true,"hideAdminRights":true,status: true,data:JSON.stringify(data)}));
				      		if(location.search != undefined && location.search == ""){
                                  window.location.href = "/user/getuserprofile"; 
                             }     
				      	}else{
				      		Kjs.vpAjax.hideLoaderonEmptyResponse();
				      	}
			    },
			    _errorUnlock = function(){
			    };
		    	var url = location.origin +"/user/getuserdetails";
		    	Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
		    }else{  
		     	var _successUnlock = function(data){
		      			if (data!=null && data!=undefined) {
			       			var hideAR = data.responseData.userInfoData.admin;
			        		sessionStorage.setItem("myProfile",JSON.stringify({"isVendor":false,"hideDelete": false,"hideAdminRights": hideAR, status: true,data:JSON.stringify(data)}));
			      			window.location.href = "/user/getuserprofile";
			      		}else{
			      			Kjs.vpAjax.hideLoaderonEmptyResponse();
			      		}
		      		},
		      		_errorUnlock = function(){
		      		};
		     	var url = location.origin+"/user/getLoginUserProfile";
		     	Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
		    }				
			},
			_clearLocalAndSessionStorage = function(){
				Kjs.storage.saveData("appliedFilterParam", "");
				Kjs.storage.saveData("homeUrl", "");
				Kjs.storage.saveData("sessionTimeout", 100);
				Kjs.storage.saveData("userInfo", "");
			},
			_handleProfilePopup = function(event){
				var _this = $(this);
			},
			_renderFancyBox = function(teplateId,completeCallback,closeCallback,data){
				var tmpl = $.templates(teplateId);
		    	var _renderit = tmpl.render(data);
		    	$box.open({
					fancybox : {
						'content' : _renderit,
						'showCloseButton':true,
						'centerOnScroll' : true,
						'onClosed':function(){
							closeCallback();
					 	},
						onComplete: function(){		
							completeCallback();		
						}	
			    	}
				});	
			},
			_handleLogoClick = function(){
				window.location.href="/merchandising/MerchantGroupListViewPage";				
			},
			_setNotification = function(data){	
				if(parseInt(data.responseData.notifications.unseenCount) > 999){
			     	$('.notify_count').text('999+');
			    }else{
			     	$('.notify_count').text(data.responseData.notifications.unseenCount);
			    }			
				if(data.responseData.notifications.notificationList.length > 0){
					var styleHtml = $tmpl.render("#notifyListTmpl",  {notificationInfo:data});
					$('.notifydetailuser').html('');
			 		$('.notifydetailuser').append(styleHtml);
				}
			 	$(env.tpl.notificationDetail).off('click',_handlenotificationDetail);
			 	$(env.tpl.notificationDetail).on('click',_handlenotificationDetail);
			},
			_setCPData = function(data){
				$('.tCount').text(data.responseData.totalCPs);
				$('.cpWithStatusCount').text(data.responseData.readyForPreviewCPs);
			},
			_renderHeaderLandingHeader = function(){
				var userOktaDetails = JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData;	
				if(location.pathname == "/dashboard/getMerchantGroupsCountByStatus" ){					 	
					_panel = $tmpl.render("landingHeaderTmpl", _context( {"userOktaDetails": userOktaDetails}));
					$("#header").html('');
					$("#header").append(_panel);
					$(env.tpl.searchIconClick).off('click',Kjs.commonHeader.headerPanel.handleSearchIconClick);
					$(env.tpl.searchIconClick).on('click',Kjs.commonHeader.headerPanel.handleSearchIconClick);
					_deactivate();
					_activate();
				}else{
					Kjs.userCommon.render("#header", {"userOktaDetails": userOktaDetails});	
				}
			};
			return {
				render : _render,
				handleProfilePopup : _handleProfilePopup,
				renderFancyBox  : _renderFancyBox,
				clearLocalAndSessionStorage : _clearLocalAndSessionStorage,
				handleDasbhoardClick : _handleDasbhoardClick,
				renderHeaderLandingHeader : _renderHeaderLandingHeader,
				handleProfile : _handleProfile,
				setNotification : _setNotification,
				setCPData : _setCPData
			}
	})();	
	$module('modelPopUp', function(log, env, module, Kjs) {

var _alertModelPopUp = function(opt, successCallback){
		$.cxDialog.defaults.background = '#000';
		if(opt.okText){
			okTextData = opt.okText;
		}else{
			okTextData = "OK";
		}
	$.cxDialog({		
	  	info:opt.message,
		okText: okTextData,
		no: null,
		
		ok: function(){
			successCallback();
		}
	});
	},
	
	_alertConfirmModelPopUp = function(successCallback, errorCallback, opt){
		$.cxDialog.defaults.background = '#000';
		if(opt.noText){
		   noTextData = opt.noText;
		}else{
		   noTextData = "Cancel";
		}
		$.cxDialog({
			title: opt.title,
			info: opt.message,
			okText: opt.okbtn,
			no: function(){
	
			},
			noText: noTextData,
			ok: function(){
				successCallback();
			},
			no: function(){
				errorCallback();
			}
		});
	};
	
	return{
		alertModelPopUp:_alertModelPopUp,
		alertConfirmModelPopUp:_alertConfirmModelPopUp
	}
});
	$init(function _$init_login($){
		$tmpl.define('userCommon',{
			tplContent :'userCommonPanelTmpl',
			hookContent : "#header",
			documentOnClick : "body", 
			userlogoutClick : '.sign-out-btn',
			profile :"#profile",
			adminDashboard :"#adminDashboard",
			vendorUser:"#vendorUser",
			logoClick : ".header-k-link-logo span",
			markallasread :".notification_markallasread",
			notificationDetail: ".notificationDetail",
			searchIconClick:'.search_image'
		});
		$tmpl.load('/static/tmpl/user/tpl.header.js', function(success, response) {
			env.tpl = $tmpl('userCommon');
		});	
		$.views.helpers({
			userDetails : function(type){
				if(type =="nameChar"){
					if(Kjs.storage.getData('userInfo') != null && Kjs.storage.getData('userInfo').firstName != undefined){
						return Kjs.storage.getData('userInfo').firstName.substr(0,1);
					}else if(Kjs.storage.getData('userOktaDetails') !=null && Kjs.storage.getData('userOktaDetails') !=undefined){
						return JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.firstName.substr(0,1);
					}					
				}else{
					if(Kjs.storage.getData('userInfo') != null && Kjs.storage.getData('userInfo').firstName != undefined){
						return Kjs.storage.getData('userInfo');	
					}else if(Kjs.storage.getData('userOktaDetails')!=null && Kjs.storage.getData('userOktaDetails')!=undefined){
						return JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData;
					}
					
				}
				
			},
			notificationFormat : function(str){
				return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
			},
			  accessOnPermission : function(){
			    	var permissionsArray = JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions;
			    	var constants = Kjs.vpJSConstants.CONSTATNS;
			    	var obj = {};
			    	var keys = Object.keys(constants);
			    	var j =0;
			    	for(var i=0;i<keys.length;i++){
			    		var label = keys[i];
			    		if($.inArray(constants[label],permissionsArray) > -1){
			    			obj[label] = true;
			    		}else{
			    			obj[label] = false;
			    		}	
			    		j++;	    		
			    	}
			    	if(j == keys.length){
			    		return obj;
			    	}
			    	return {};
			     },
			getBrowserType : function(){
		    	if(navigator.userAgent.search('.NET') > -1){
		    		return "IE";
		    	}
		    }
		})
	});	
	
	$ready(function _$ready_login($){
		if(Kjs.adminUserDashboard != undefined){
			Kjs.adminUserDashboard.getAllDepartment();
		}		
		getLoginUserProfileJson();
		if( Kjs.associateUserProfile != undefined && Kjs.storage.getData('allDepartment') == null){
			Kjs.associateUserProfile.getAllDepartment();
		}
		$('body').on('click',function(e){
			if( !$(e.target).hasClass('markallasread') && $(e.target).hasClass('notification_icon') && !$(e.target).hasClass('active')){
				$('.reportbuilder_notificationbox,.noti-title-markasread,.reportbuilder_notificationbox').removeClass('hide').addClass('active');				
				Kjs.userCommon.markAllNotificationAsRead();
			}else{
				$('.reportbuilder_notificationbox,.noti-title-markasread,.reportbuilder_notificationbox').addClass('hide').removeClass('active');
			}
		});
			
	});
	return userCommonPanel;
});
function _getNotificationList(){
				var bannerjson = "";
				$(".list-all-notifications .system-notification").remove();
				var _successUnlock = function(response){
						if (response!=null && response!=undefined && response.errorMessage == "" && response.responseData!=null && response.responseData!="" && response.responseData.bannerNotification!=null &&response.responseData.bannerNotification.length>0) {
							Kjs.allBannerNotifications = response.responseData;
							var tmpl = $.templates("#Show-All-Notifications");
		    				var _renderit = tmpl.render({"List":response.responseData});
		    				$(".list-all-notifications").html(_renderit);
		    				_deactivate();	
							_activate();	
							$(".no-notification").hide();
							$(".notifContainer .add-icon,.system-notification .edit").off('click',_handleAddSystemNotification);
							$(".system-notification .delete").off('click',_handleDeleteNotification);
							$(".notifContainer .add-icon,.system-notification .edit").on('click',_handleAddSystemNotification);
							$(".system-notification .delete").on('click',_handleDeleteNotification);
						}else{
							$(".no-notification").show();	
						}						
					},
					_errorUnlock = function(){				
					};
				var url = "/user/getBannerNotifications?fetchActive=false";
				Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
}
function getLoginUserProfileJson(){  
  if (Kjs.storage.getData('userOktaDetails') == null || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData == undefined) {
    var _successUnlock = function(data){
	    if (data!=null && data!=undefined && data.responseData !=undefined && data.responseData!=null && data.responseData.userInfoData!=null) {
	    	Kjs.storage.saveData("userOktaDetails",JSON.stringify(data));
	    	Kjs.userCommon.renderHeaderLandingHeader();
	    	return data;
	    }else{
	    	return null;
	    }
   },
   _errorUnlock = function(){
   };
    var url = location.origin+"/user/getLoginUserProfile";
  Kjs.vpAjax.get(url,"", _successUnlock, _errorUnlock);
 }else{
 	Kjs.userCommon.renderHeaderLandingHeader();
  return JSON.parse(Kjs.storage.getData('userOktaDetails'));
 }
}
function removeLoader(){
	if($("body").find(".loaderContainer").length > 0){
		$("body").find(".loaderContainer").remove();
	}
	if($("body").find(".box-overlay, .box-loading").css('display')=='block'){
		$("body").find('.box-overlay, .box-loading').hide();
	}
}