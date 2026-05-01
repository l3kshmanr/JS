<script id="userCommonPanelTmpl" type="text/x-jsrender">
<div class="common-header clearfix">		
	
	<div class="user-details">
		<div class="profile-icon" user-role="{{:userOktaDetails.role}}" userOktaId="{{:userOktaDetails.userOktaId}}" >
			<div class="user_name_letter"> <span class="user_first_letter">{{:~userDetails("nameChar")}}</span></div>
			<div class="profile-dtl">
				<span class="name">{{:~userDetails().firstName}} {{:~userDetails().lastName}}</span>
				<span class="role">{{if (userOktaDetails.role =="VA" || userOktaDetails.role =="VU")}}Vendor
				{{else}} {{:userOktaDetails.role}}{{/if}}</span>
			</div>
		</div>
		<div class="action-nav">
			{{if userOktaDetails.admin != false && userOktaDetails.admin!='false' && userOktaDetails.admin && userOktaDetails.role != null && userOktaDetails.role !="VA" && userOktaDetails.role !="VU" }}
			<a href="/user/getuserprofile?type=kohlsUserDashboard" id="adminDashboard"> Admin Dashboard</a>
			{{/if}}
			{{if userOktaDetails.admin != false && userOktaDetails.admin!='false' && userOktaDetails.admin && userOktaDetails.role != null && ( userOktaDetails.role =="VA" || userOktaDetails.role =="VU" || userOktaDetails.role =="Vendor")}}
     		<a id="vendorUser" href="#">Manage Users</a>
     		{{/if}}
			<a href="/user/editProfile"> Preferences</a>
			<a href="#" id="profile" data-is-kohls-user=""> Profile</a>
		</div>
		<hr>
		<button class="sign-out-btn">sign out</button>
	</div>
</div>

<div class="banner-containner-header hide"></div>
</script>
<script id="Banner-Notification-Msg-Tmpl" type="text/x-jsrender">
		{{props List.bannerNotification}}
	<div class="Banner-notification-msg Banner-msg-{{:prop._id}}">
	<div class="Banner-notification-msg-body">
		<div class="banner-noti-msg-text">
			{{:prop.message}}
		</div>
		<div class="banner-noti-msg-buttons hide" banner-id="{{:prop._id}}">
			<span class="banner-noti-msg-edit" >EDIT</span>
			<span class="banner-noti-msg-delete" >DELETE</span>
		</div>
	</div>
</div>
{{/props}}
</script>

<script id="landingHeaderTmpl" type="text/x-jsrender">
	<div>
	<div class="landingHeaderContainer" id="landingHeaderContainer">
		<a href="/dashboard/getMerchantGroupsCountByStatus"><div class="kLinkLogo"></div></a>
		<div class="navigationContainer">
			{{if userOktaDetails.role != 'VA' && userOktaDetails.role != 'VU' && userOktaDetails.role != 'Vendor' }}
			<span><a href="/cp/home">PRODUCTS</a></span>
			
			{{/if}}
			<span class="{{if userOktaDetails.role == 'VA' || userOktaDetails.role == 'VU' || userOktaDetails.role == 'Vendor' }}vendorReports{{/if}}"><a  href="/reports/salesReport">REPORTS</a></span>
			
			<span class="{{if userOktaDetails.role == 'VA' || userOktaDetails.role == 'VU' || userOktaDetails.role == 'Vendor' }}vendorGuidline{{/if}}">GUIDELINES</span>		
		</div>
		<div class="notificationIcon">
			<ul class="VPAS-MerchantGroupHeader-header-nav">
				{{if ~accessOnPermission().SEARCH_FOR_PRODUCTS}}{{/if}}
			   <li><a class="search_image" href="javascript:void(0);"><span></span></a> </li>
			   
			</ul>
			<div class="notifications VPAS-MerchantGroupHeader-header-notification">   	
			<span class="notification_icon notification_icon_click landingHeaderNotifi loading"><span class="notify_count VPAS-MerchantGroupHeader-header-notification-count"></span></span>
			</div>
			<div class="userDashboarNotificaiton">

			{{include  tmpl="#vpNotificaitonConatinerTmpl" /}}		
			</div>
			<div class="profile-icon" user-role="{{:userOktaDetails.role}}">
				<div class="user-profile-option"><span class="userNameLetter">{{:~userDetails("nameChar")}}</span></div>
			</div>
			
			<div class="notificationbox"></div>
		</div>
	</div>
	<div class="user-details">
		<div class="profile-icon" user-role="{{:userOktaDetails.role}}">
			<div class="user_name_letter"><span class="user_first_letter">{{:~userDetails("nameChar")}}</span></div>
			<div class="profile-dtl">
				<span class="name">{{if ~userDetails() != null || ~userDetails() != "" }}{{:~userDetails().firstName}} {{:~userDetails().lastName}}{{else}} {{:userOktaDetails.firstName}}  {{:userOktaDetails.lastName}}{{/if}}</span>
                <span class="role">{{if (userOktaDetails.role =="VA" || userOktaDetails.role =="VU")}}Vendor
				{{else}} {{:userOktaDetails.role}}{{/if}}</span>
			</div>
		</div>
		<div class="action-nav">
			{{if ~accessOnPermission().MANAGE_USER_ROLES && userOktaDetails.admin != false && userOktaDetails.role != null && userOktaDetails.role !="VA" && userOktaDetails.role !="VU" }}
			<a href="/user/getuserprofile?type=kohlsUserDashboard" id="adminDashboard"> Admin Dashboard</a>
			{{/if}}
			{{if ~accessOnPermission().MANAGE_USER_ROLES && userOktaDetails.admin != false && userOktaDetails.role != null && ( userOktaDetails.role =="VA" || userOktaDetails.role =="VU" || userOktaDetails.role =="Vendor")}}
     		<a id="vendorUser" href="#">Manage Users</a>
     		{{/if}}
			<a href="/user/editProfile"> Preferences</a>
			<a href="#" id="profile" > Profile</a>
		</div>
		<hr>
		<button class="sign-out-btn">sign out</button>
	</div>
	<div class="welcomeUser">	
	{{if ~getBrowserType() == "IE"}}
		{{include  tmpl="#backGroundWithSharesTmplIE" /}}
		{{else}}
		{{include  tmpl="#backGroundWithSharesTmpl" /}}
	{{/if}}
 	
 	<p id="userName">Welcome {{:userOktaDetails.firstName}} {{:userOktaDetails.lastName}}</p>
	</div>
	</div>
	<div class="searchbox"></div>
</script>
<script id="backGroundWithSharesTmplIE" type="text/x-jsrender">
	<svg  >
   <defs>
  	<polygon  id="square" points="" />
    <polygon  id="square1" points="" />
    <polygon  id="square2"points="" />    
    <polygon  id="square4"points="" /> 
    <polygon  id="square5"points="" />
    <polygon  id="square6"points="" />     
    <linearGradient id="solids" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#812F80;stop-opacity:.9" />
      <stop offset="23%" style="stop-color:#5D5596;stop-opacity:.9" />
      <stop offset="23%" style="stop-color:#5D5596;stop-opacity:.9" />
      <stop offset="77%" style="stop-color:#1196B3;stop-opacity:.78" /> 
    </linearGradient>
  </defs>
  <rect  fill="url(#solid)" />
   <g fill="#7F3282">
        <use xlink:href="#square" x="-172" y="-30" fill-opacity="0.17" />
   </g>
   	<g fill="#7F3282">
        <use xlink:href="#square1" x="-116" y="2" fill-opacity="0.27" />
   </g> 
    <g fill="#1789A7">
        <use xlink:href="#square4" x="1050" y="-2" fill-opacity="0.44" />        
   </g>
    <g fill="#1789A7">
        <use xlink:href="#square5" x="902" y="-40" fill-opacity="0.34" />
   </g>
    <g fill="#1789A7">
        <use xlink:href="#square6" x="554" y="1" fill-opacity="0.34" />
   </g>
</svg>
</script>
<script id="backGroundWithSharesTmpl" type="text/x-jsrender">
	<svg  >
   <defs>
  	<polygon  id="square" points="219,-6 433,241 329,343 105,-9" />
    <polygon  id="square1" points="291,-16 751,239 194,254 116,200" />
    <polygon  id="square2"points="220,10 300,210 170,250 123,234" />    
    <polygon  id="square4"points="296,15 300,240 170,250 123,234" /> 
    <polygon  id="square5"points="1800,-1006 533,01 629,773 97,284" />
    <polygon  id="square6"points="11,-266 588,250 309,343 105,-9" />     
    <linearGradient id="solids" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#812F80;stop-opacity:.9" />
      <stop offset="23%" style="stop-color:#5D5596;stop-opacity:.9" />
      <stop offset="23%" style="stop-color:#5D5596;stop-opacity:.9" />
      <stop offset="77%" style="stop-color:#1196B3;stop-opacity:.78" /> 
    </linearGradient>
  </defs>
  <rect  fill="url(#solid)" />
   <g fill="#7F3282">
        <use xlink:href="#square" x="-172" y="-30" fill-opacity="0.17" />
   </g>
   	<g fill="#7F3282">
        <use xlink:href="#square1" x="-116" y="2" fill-opacity="0.27" />
   </g> 
    <g fill="#1789A7">
        <use xlink:href="#square4" x="1050" y="-2" fill-opacity="0.44" />        
   </g>
    <g fill="#1789A7">
        <use xlink:href="#square5" x="902" y="-40" fill-opacity="0.34" />
   </g>
    <g fill="#1789A7">
        <use xlink:href="#square6" x="554" y="1" fill-opacity="0.34" />
   </g>
</svg>
</script>
<script id="vpNotificaitonConatinerTmpl" type="text/x-jsrender">
<div class="reportbuilder_notificationbox hide" id="vendorStyleCommentModel">
	<div>
		<div class="notification_header">Notification</div>
		<div class="notification_markallasread"><a href="javascript:void(0)" class="markallasread">Mark All as Read</a></div>
	</div>
	<div class="pt-Line"></div>
	<div class="notifydetailuser">				 
	</div>				
</div>
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
 
<script id="notifyListTmpl" type="text/x-jsrender">
{{for notificationInfo.responseData.notifications.notificationList}}
	<div class="{{if unread}}notification_not_read{{/if}} notificationDetail" data-redirect-url="{{:actionLink}}">
	<div>
		<div class="notification_pastdue">{{:title}}</div>
		<div class="notification_time"><span>{{:dateTime}}</span></div>
	</div>
	<div><p class="notification_content">{{:~notificationFormat(description)}}</p></div>
	</div>
<div class="pt-Line-content"></div>
{{/for}}
</script>