
<script id="adminUserDashboardPanelTmpl" type="text/x-jsrender">
	<!-- <div class="box-loading" >
		<div></div>
	</div>
	<div class="box-overlay">
	</div> -->

	<section>
		<div class="container">
			<div class="searchUser">
				<p>Find the user to manage</p>
				<div class="filterOptnCnt">
				<div class="label-input-wrap">
					<div class="TypeOptnContainer VPAS-dashboard-type-option">
						<select data-filter-user-type>
							<option value="associate"> Associate</option>
							<option value="vendor"> Vendor</option>
						</select>
					</div>

					<div class="searchUserElm">
						<input type="text" name="userName" class="searchText VPAS-dashboard-search-user-input" data-search="userName"/>
						<div class="dropdown-content" >

						</div>
						</div>

					</div>
					<button class="findBtn VPAS-dashboard-search-user-go-btn" disabled="disabled">Go</button>

				</div>
				<div class="showErrorMeassageSearch hide">No search results available.</div>
			</div>
			<div class="userDetails hide">
				<span class="userName"> Ann Connel</span>
				<button class="dltUser"> DELETE THIS USER</button>
				<div class="roleContainer">
					<label class="roleLabel">Role</label>
					<span class="role"> Vendor</span>
				</div>
				<div class="companyContainer">
					<label class="companyLabel">Company</label>
					<span class="company"> Vendor</span>
				</div>
				<div class="emailContainer">
					<label class="emailLabel">Email</label>
					<span class="email"> Vendor</span>
				</div>
				<div class="rightsContainer">
					<input type="checkbox" name="rights" />
					<span class="adminRights">Admin Rights</span>
				</div>
			</div>
			<div class="userList profileRequestCntnr hide">
				<div class="userListHeader profileReqHeader">
					<span >Profile Requests</span>
				</div>
				<div class="userListDetailContainer ">
					<div class="userListFilterCntn">
						<select class="filterByType" data-filter="ALL TYPES">
							<option>ALL TYPES</option>
							<option>REGISTRATION</option>
							<option>UPDATE VENDOR ID</option>
						</select>
						<span>&#709;</span>
						<select class="filterByRole" data-filter="ALL ROLES">
							<option>ALL ROLES</option>
							<option>IP</option>
							<option>MS</option>
							<option>DM</option>
							<option>VENDOR</option>
						</select>
						<span>&#709;</span>
					</div>
					<table class="userListTable admin-dasbhoard-user-list">
						<thead>
							<th>LATEST</th>
							<th>FROM</th>
							<th>ROLE</th>
							<th>DESCRIPTION</th>
							<th></th>
						</thead>
						<tbody>
							<tr>
								<td>AER GRP INT'L/AEROSOLES</td>
								<td>003213188</td>
								<td>1340</td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>AER GRP INT'L/AEROSOLES</td>
								<td>003213188</td>
								<td>1340</td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>AER GRP INT'L/AEROSOLES</td>
								<td>003213188</td>
								<td>1340</td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>AER GRP INT'L/AEROSOLES</td>
								<td>003213188</td>
								<td>1340</td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="vendor-invite-container">
				<p>Invite Vendors to K-Link</p>
				<div id="vendor-email-address-container" class="filterOptnCnt">
                    <p style="margin-bottom: 10px;">These invitations will expire in 48 hours once they are sent and are good to create only one account per invitation.</p>
					<template id="vendor-email-address-template">
						<div class="vendor-invite-wrap label-input-wrap">
							<div class="TypeOptnContainer VPAS-dashboard-type-option vendor-invite-label">
								<label class="email-address-label">Email Address 1:</label>
							</div>
							<div class="searchUserElm vendor-invite-input">
								<input type="email" name="emails[]" class="searchText VPAS-dashboard-search-user-input"/>
								<div class="error-message"></div>
							</div>
						</div>
					</template>
				</div>
				<button class="VPAS-dashboard-search-user-go-btn vendor-invite-add-btn">+ Add email address</button>
				<button class="VPAS-dashboard-search-user-go-btn vendor-invite-send-btn">Send Invitation(s)</button>
			</div>

			<div class="notifContainer">
				<span class="heading">SYSTEM NOTIFICATION</span>
				<span class="add-icon VPAS-dashboard-notification-add-icon"></span>
				<div class="no-notification hide" id="noNotification">
					<h2 class="notification">No Live notification</h2>
					<p class="createNotif">Click create new message to enter information for a new notification</p>
				</div>
				<div class="list-all-notifications"></div>
			</div>
			<div class="DAPanel hide">
				<span class="heading">DFM Administration</span>
				<div class="list-all-dfmlinks">
					<a id="brandAssociationPage" href="/dfm/brandDeptAssociation">Brand to department association</a>
					<a id="brandCreationPage" href="/dfm/brandManagement">Brand Management</a>
					<a id="sizeToDeptPage" href="/dfm/sizeDeptAssociation">Size to department association</a>
					<a id="sizeManagement" href="/dfm/sizeManagement">Size Management</a>
					<a id="ticketTypePage" href="/dfm/ticketTypeAssociation">Ticket type association</a>
				</div>
			</div>
			<div class="consumerBrandMappingPanel hide">
				<span class="heading">Brand Management</span>
				<a id="consumerBrandMappingPage" href="/seo/consumerBrandMapping">Consumer Brand Mapping</a>
			</div>
		</div>
		</div>
	</section>
	</script>

<script type="text/x-jsrender" id="Show-All-Notifications">
	{{props List.bannerNotification}}
	<div class="system-notification Banner{{:prop._id}}">
				<span class="msg-icon"></span>
				<div>
					<div class="created-container">

						<span class="createdBy">{{:prop.notifier}}</span>
					</div>
					<div class="timeFrame">
						<span class="label"> Timeframe</span>
						<span>{{:~timeFormat(prop.startTime)}} - {{:~timeFormat(prop.endTime)}}</span>
					</div>
					<div class="email">
							<span class="label"> Sent</span>
							<span>Today {{:~currTime(prop.creationTime)}}</span>
					</div>
					<div class="description">
					{{:prop.message}}
					</div>

					<div class="btn-container" notification-id="{{:prop._id}}">
						<div class="edit"><span class="edit-icon"></span><span>EDIT</span></div>
						<div class="delete"><span class="dlt-icon"></span><span>DELETE</span></div>
					</div>

				</div>
			</div>
	{{/props}}
</script>
