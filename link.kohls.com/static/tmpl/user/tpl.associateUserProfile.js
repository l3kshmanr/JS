<script id="associateUserProfileTmpl" type="text/x-jsrender">
<div class="getuserprofilemain">
		<div class="userDetails">	
			<div class="usernamecontainer">
				<h1 class="userName"> {{:firstName}} {{:lastName}}</h1>
			</div>
			<div class="roleContainer">				 
				<label class="roleLabel">Role</label>
				<div class="{{if userOktaDetails.admin == true}}roleWrapper{{else}} roleWrappernonadmin{{/if}}  VPAS-UserManagement-user-role">
					<span class="role" data-selected-role="{{if role != "null" }}{{:~getUserRoleName(role)}}{{/if}}"> {{:~getUserRoleName(role)}}</span>
				</div>
				<ul class="user-role-option">
			     	<li data-user-role-item="ms" class="VPAS-UserManagement-ms-user" style="{{if ~getUserRoleName(role) != null && ~getUserRoleName(role) !='' && (role == 'MS' || ~getUserRoleName(role) == 'Merchandise Specialist' || ~getUserRoleName(role)=='MERCHANDISE SPECIALIST' || ~getUserRoleName(role)=='MS')}} display:none !important; {{/if}}">MS</li>
			     	<li data-user-role-item="ip" class="VPAS-UserManagement-ip-user" style="{{if ~getUserRoleName(role) != null && ~getUserRoleName(role) !='' && ~getUserRoleName(role) == 'IP'}} display:none !important; {{/if}}">IP</li>
			     	<li data-user-role-item="dm" class="VPAS-UserManagement-dm-user" style="{{if ~getUserRoleName(role) != null && ~getUserRoleName(role) !='' && ~getUserRoleName(role) == 'DM'}} display:none !important; {{/if}}">DM</li>
			     	<li data-user-role-item="ds" class="VPAS-UserManagement-ds-user" style="{{if ~getUserRoleName(role) != null && ~getUserRoleName(role) !='' && ~getUserRoleName(role) == 'DS'}} display:none !important; {{/if}}">DS</li>
			    </ul>
			</div>
			<div class="okta-dtl">				 
				<label class="oktalabel">OKTA name</label>
				<span class="oktaName"> Bobs MS Specialist</span>
			</div>
			<div class="tk-dtl">
				<label class="tkLabel">TKID</label> 
				<span class="tkid"> {{:tkId}}</span>
			</div>
			<div class="title-dtl">
				<label class="titleLabel">Title</label>
				<span class="title">{{:title}}</span>
			</div>	
			<div class="admin-role-dtl">		

				{{if userOktaId!=userOktaDetails.userOktaId && hideAdminRights != undefined && !hideAdminRights && userOktaDetails.admin != false}}					
				<label>
				<input type="checkbox" name="adminRights" class="checkboxClick" {{if userOktaDetails.userOktaId == userOktaId && userOktaDetails.admin != false}} checked=checked {{else}} {{if admin}}  checked=checked {{/if}}{{/if}} {{if admin != false}} checked=checked {{/if}}>
					<span class="checkboxPlaceHolder"></span>
				</label>

				<span class="label"> Admin Rights</span>
				{{/if}}
			</div>			
		</div>
		<hr class="dept-devide-line"/>
		<div class="department-container">
			<div class="dptActionContainer">
				<span class="label"> Assigned Department</span>
				<button class="addDpt VPAS-userManagement-add-btn">Add</button>
			</div>	
				<div id="assignedDepartments">
					{{for departmentDescriptin tmpl="#departmentListAssigedToUserTmpl" /}}
				</div>
			</div>
			<div class="bottomsubmitbtn">
			<button type="button" class="usersubmitbtn usersubmitbtnhide VPAS-UserManagement-user-submit-btn" disabled>SUBMIT</button>
			</div>
</div>
<div id="departments">
</div>
</script>
<script id="departmentListTmpl" type="text/x-jsrender">
	<div class="departmentListContainer">
		<label class="dptLabel"> Look up Department</label>
		<div class="search-dept">
			<input type="text" name="departmentName" data-department-lookup class="VPAS-Usermanagement-add-popup-search-input"/>
			<button class="dptBtnGo hide-elem"> Go</button>
		</div>
		<div class="allDpt">
			<label>All Departments</label><span> (Select one or more)</span>
		</div>
	</div>
</script>
<script id="departmentListAssigedToUserTmpl" type="text/x-jsrender">	
		<span data-assiged-departments="{{:id}}" data-is-dpt-deleted="false"> {{:id}} - {{:description}} <i class="remove-dpt hide-elem VPAS-UserManagement-remove-department-{{:id}}"></i></span>
</script>
<script id="Edit-User-tmpl" type="text/x-jsrender">	
<div class="box-model-popup-user">
	<div class="box-model-header">
		<h1>Edit Info</h1>		
	</div>
	<div class="box-model-body">
			<div class="box-row-edit-user">
				<div class="edit-user-header">
					First Name
				</div>
				<input type="text" placeholder="First Name" value="{{:firstName}}" class="user-edit-first-name" name="" maxlength="15">
			</div>
			<div class="box-row-edit-user">
				<div class="edit-user-header">
					Last Name
				</div>
				<input type="text" placeholder="Last Name" value="{{:lastName}}" class="user-edit-last-name" name="" maxlength="12">
			</div>
			<div class="box-row-edit-user hide-elem">
				<div class="edit-user-header">
					Company
				</div>
				<input type="text" placeholder="Company Name" value="{{:parentCompany}}" class="user-edit-company-name" name="">
			</div>
			<div class="box-row-edit-user">
				<div class="edit-user-header">
					Title
				</div>
				<input type="text" placeholder="Title Name" value="{{:title}}" class="user-edit-title-name" name="">
			</div>
			<div class="box-model-body-buttons">
				<button type="button" class="box-user-cancel">CANCEL</button>
				<button type="button" class="box-user-save">SAVE</button>
			</div>
	</div>
</div>
</script>
