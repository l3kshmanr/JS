
<script id="editUserProfiletmpl" type="text/x-jsrender">
<div class="casepack-user-success-msg">
	<div class="vendor-user-msg">
		 <span class="vendor-name-value">New packaging capability was successuly added. </span>
		 <span class="casepack-add-view-close">X</span>
	</div>
</div> 
<div class="vendor-user-success-msg">
	<div class="vendor-user-msg">
		 <span class="vendor-name-value"> </span> has been Added.
	</div>
</div>
<div class="vendor-user-delete-msg">
	<div class="vendor-user-msg">
		 <span class="vendor-name-value"> </span> has been Deleted.
	</div>
</div>
<div class="getuserprofilemain" k-OKtaid="{{:userDetails.userOktaId}}" login-OKtaid="{{:userOktaDetails.userOktaId}}" login-role="{{:~getUserRole(userOktaDetails.role)}}" k-userrole="{{:userDetails.role}}">
	
		<div class="userDetails">	
		
		{{if ~accessOnPermission().DELETE_USERS && hideDeleteButton != undefined && !hideDeleteButton && userDetails.email!=userOktaDetails.email }}
		<button class="dlt-this-user hide" OKtaid="{{:userDetails.userOktaId}}" data-user-id="{{:userDetails.email}}" {{if userDetails.role != 'null' && userDetails.role!= "" && (userDetails.role == 'VU' || userDetails.role == 'VA' || userDetails.role == 'Vendor') && userDetails.isDisableDel }} disabled= "disabled"{{/if}}> Delete This User</button>
		{{/if}}
			<div class="usernamecontainer">
				<div class="userName"> <span class="edit-user-name"> {{:userDetails.firstName}} {{:userDetails.lastName}}</span>
					{{if (userOktaDetails.role != 'null' && userOktaDetails.role != 'VU' && userOktaDetails.role != 'VA' && userOktaDetails.role != 'Vendor') ||  (userDetails.userOktaId==userOktaDetails.userOktaId)  }}
					<span class="edit-user-name-icon"></span>
					{{/if}}
				</div>
			</div>
			<div class="roleContainer">				 
				<label class="roleLabel">Role</label>
				<span class="role"> {{:~getUserRole(userDetails.role)}}</span>
			</div>
			<div class="companyContainer">				 
				<label class="companyLabel">Company</label>
				<span class="company"> {{:userDetails.parentCompany}}</span>
			</div>
			<div class="titleContainer">				 
				<label class="titleLabel">Title</label>
				<span class="title"> {{:userDetails.title}}</span>
			</div>
			<div class="emailContainer">
				<label class="emailLabel">Email</label> 
				<span class="email"> {{:userDetails.email}}</span>
			</div>
			{{if hideAdminRights != undefined && !hideAdminRights}}
			<div class="admin-rights-containner hide ">
				<label class="admin-rights">
					<input type="checkbox" id="admin-rights-checkbox" name="">
					<span class="checkboxAdminRights"></span>
					<span class="admin-rights-name">Admin rights</span>
				</label> 
				<!-- <span class="admin-rights-icon"> <i class="fa fa-exclamation-circle" style="font-size:20px;color: green;cursor: pointer;"></i></span> -->			
			</div>
			{{/if}}
		</div>
		<div class="userList">
			<div class="userListHeader">
				<span >My Vendors</span>
				{{if (userOktaDetails.role != 'null' && userOktaDetails.role != 'VU' && userOktaDetails.role != 'VA' && userOktaDetails.role != 'Vendor') ||  (userDetails.userOktaId==userOktaDetails.userOktaId)  }}
					{{if !liandfunguser}}
					<div class="addUserBtn">
						<span class="addicon">+</span>
						<span class="addText">Add</span>
					</div>
					{{/if}}
				{{/if}}
			</div>
			<div class="user-promo-box">
				<div class="user-box-top">
					<div class="user-sent-date">
						Sent: 01/23/2017
					</div>
					<div class="user-box-close">
						<span class="user-box-close-btn">x</span> 
					</div>
				</div>
				<div class="user-request-to">
					Tim Kentuky.
					Vendor
				</div>
				<div class="user-pre-defined">
					Change access to admin status. This description is about the request.
				</div>
			</div>
			<div class="userListDetailContainer">
				<div class="vendor-tooltip-message">User must have one active vendor ID</div>
				<table class="userListTable">
					<thead>
						<th width="40%">NAME</th>

						{{if !liandfunguser}}
							<th width="30%">VENDOR NUMBER</th>
						{{/if}}
						{{if liandfunguser}}
						<th width="25%">ENT.ID</th>
						{{/if}}
						<th width="5%"></th>
					</thead>
					<tbody class="all-vendors-data">
						{{if userDetails.vendors!=null && userDetails.vendors}}
						{{for userDetails.vendors ~liandfungusernew = liandfunguser}}
						{{if vendorId != undefined && vendorId != null && vendorId !="" && name !=null && name !=undefined && name.trim() !="" }}
						<tr class="common-user-list existing-user-vendor">
							<td class="kohls-vendorName" kohlsvendorId="{{:vendorId}}" kohlsEntId="{{:entId}}" poNumber="{{:poNumber}}">{{:name}}</td>
							{{if ~liandfungusernew!=null && !~liandfungusernew}}  
							<td class="kohls-vendorId">{{:vendorId}}</td>
							{{/if}}
							{{if ~liandfungusernew!=null && ~liandfungusernew}}
							<td class="kohls-EntId" >{{:entId}}</td>
							{{/if}}
							<!-- <td class="kohls-status common-for-status {{if status=='Requested'}} status-requested{{else status=='Remove Requested'}} status-removerequested{{/if}}" sent-date="{{:vendorId}}" request="{{if status=='Requested'}}Save{{else status=='Remove Requested'}} Delete{{/if}}"><div class="status-click">{{:status}}</div></td> -->
							<td><span class="close-icon-vendor"></span></td>
							
						</tr>
						{{/if}}
						{{/for}}
						{{/if}}
					</tbody>
				</table>
			</div>
		</div>
	
		<div class="placementContainer ">
			<span class="placementHeading">Li & Fung office placement</span>
			<div class="placementDtlContainer">
				<select multiple="multiple" {{if (userOktaDetails.role != 'null' && userOktaDetails.role != 'VU' && userOktaDetails.role != 'VA' && userOktaDetails.role != 'Vendor') ||  (userDetails.userOktaId==userOktaDetails.userOktaId)}} {{else}}disabled="true"{{/if}}  class="Office-placement-container">
					{{props officeOfPlacements}}
					<option id="{{:prop.officeOfPlacementId}}" value="{{:prop.officeOfPlacementId}}">{{:prop.officeOfPlacementName}}</option>
					{{/props}}
				</select>
			</div>
			
		</div>

		{{if (userOktaDetails.role != 'null' && (userOktaDetails.role == 'VU' || userOktaDetails.role == 'VA' || userOktaDetails.role == 'Vendor') && (userDetails.userOktaId==userOktaDetails.userOktaId)) }}
		<div class="case-pack-container">
			{{if ~accessOnPermission().ADD_PACKAGING_CAPABILITES}}
			<div class="case-pack-add">
				<span class="cp-Packaging">Packaging Capabilities </span>
				<span class="cp-add-modify">Add/Modify</span> 
			</div>
			{{/if}}
			{{if userOktaDetails.admin && ~accessOnPermission().VIEW_PACKAGING_CAPABILITY_REPORTS}}
			<div class="case-pack-view">
				<span class="cp-view-capabilities"> View Capabilities</span>
			</div>	
			{{/if}}
		</div>

		{{/if}}

	
</div>
</script>
<script id="CPAddModifyTmpl" type="text/x-jsrender">
	<div class="case-pack-modify-container">
		<span class="close-view-capabilities">X</span>
	<div class="case-pack-modify-list">
	<span class="capabilities-text">VIEW PACKAGING CAPABILITIES</span>
	<div class="capabilities-filter">
		<div class="filter-names vendor-name-label">
			<label class="filter-name">Vendor</label>
			<div class="filter-select">
				<select multiple="multiple" p-name="Select Vendor"  class="filter-select-containner vendor-containner" id="vendor-containner" data-select-type="vendors" >
					{{for Vendor}}					
                    <option name="{{:name}}" id="{{:entId}}" value="{{:entId}}">{{:name}}</option>  
                    {{/for}} 
                </select>
			</div>
			<span class="error-vendor-names hide">Atleast one option should be selected.</span>
		</div>
		<div class="filter-names department-name-label">
			<label class="filter-name">Department</label>
			<div class="filter-select">
				<select multiple="multiple" p-name="Select Department" class="filter-select-containner department-containner"  data-select-type="Departments" id="department-containner">
                </select>
			</div>
		</div>		
		<div class="filter-names subclass-name-label">
			<label class="filter-name">Subclass</label>
			<div class="filter-select">
				<select multiple="multiple" p-name="Select Subclass" class="filter-select-containner subclass-containner"  data-select-type="Subclass" id="subclass-containner">
                </select>
			</div>
		</div>	
	</div>
	<div class="view-container">
		<button class="view-capabilities-btn">VIEW</button>
	</div>
	</div>
</div>
</script>
<script id="NewVendorTmpl" type="text/x-jsrender">
	
<div class="box-model-popupnew">
	<div class="box-model-header">
		<h1>Request New Vendor</h1>
		
	</div>
	<div class="box-model-body">
			<div class="box-row-level">
				<input type="text" placeholder="PO Number" maxlength="20" class="PoNumberID" name="" >
			</div>
			<div class="box-row-level">
				<input type="text" placeholder="Vendor number" maxlength="20" class="userVendorID" name="" > 
			</div>
			
			<div class="errorcombination hide">
				Duplicate Vendor Id Not Allowed.
			</div>
			<div class="box-model-body-buttons">
				<button type="button" class="box-model-cancel">CANCEL</button>
				<button type="button" class="box-model-save">SUBMIT</button>
			</div>
	</div>
</div>
</script>
<script id="Edit-User-tmpl-new" type="text/x-jsrender">	
<div class="box-model-popup-user">
	<div class="box-model-header">
		<h1>Edit Info</h1>		
	</div>
	<div class="box-model-body">
			<div class="box-row-edit-user">
				<div class="edit-user-header">
					First Name
				</div>
				<input type="text" placeholder="First Name" value="{{:userDetails.firstName}}" class="user-edit-first-name" name="" maxlength="15">
			</div>
			<div class="box-row-edit-user">
				<div class="edit-user-header">
					Last Name
				</div>
				<input type="text" placeholder="Last Name" value="{{:userDetails.lastName}}" class="user-edit-last-name" name="" maxlength="12">
			</div>
			<div class="box-row-edit-user">
				<div class="edit-user-header">
					Company
				</div>
				<input type="text" placeholder="Company Name" value="{{:userDetails.parentCompany}}" class="user-edit-company-name" name="">
			</div>
			<div class="box-row-edit-user">
				<div class="edit-user-header">
					Title
				</div>
				<input type="text" placeholder="Title Name" value="{{:userDetails.title}}" class="user-edit-title-name" name="">
			</div>
			<div class="box-model-body-buttons">
				<button type="button" class="box-user-cancel">CANCEL</button>
				<button type="button" class="box-user-save">SAVE</button>
			</div>
	</div>
</div>
</script>

<script id="manageVendorUserTmpl" type="text/x-jsrender">
	<section id="managUserFilterSection">
		<div class="container">
		<div class="searchUser vendorManageUser">
			<p>Find the user to manage</p>
			<div class="filterOptnCnt">
			<div class="label-input-wrap">				
			    <div class="searchVendorUserElm">
			    	<input type="text" name="userName" class="searchText" data-search-vendor="userName">			    	
			    	<div class="dropdown-content" >			    		
			    	</div>
			    </div>	

			</div>
			 <button class="findBtn" disabled="disabled">Go</button>	 
			</div>
			<div class="showErrorMeassageSearch hide">No search results available.</div>		    
		</div>
		</div>
	</section>
</script>

