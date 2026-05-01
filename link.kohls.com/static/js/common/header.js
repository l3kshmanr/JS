$module('commonHeaderFooter', function(log, env, module, Kjs) {	
	  var responseJson;
		_activateHeaderFooter = function(){
			$('.btn-clear').on('click',_handleLogoutClicked);
			$('.btn-notify').on('click',_handleNotifyClick);
			$('#navNotification').on('click',_handleNotifyClick);
			$('#btnMarkAllAsRead').on('click',_handleMarkAllAsRead);
			$('.notificationDetail').on('click',_handleNotificationClick);
			$('.nav-products-tab').on('click',_handleSearchTabClick);
			$("#loadHeader .search_start").on('click',_handleSearchButtonClick);
			$("#loadHeader .clear_all").on('click',_handleClearButtonClick);
			$('#loadHeader #search_merchantgroup').on('keyup',_handleMerchantGroupruptEntry);
			$('#loadHeader #ccinput').on('keyup',_handleCustomerChoiceEntry);
			$('#loadHeader #ksinput').on('keyup',_handleKohlsStyleEntry);
			$('#loadHeader #inputgc').on('keyup',_handleGroupCodeEntry);
			$('#loadHeader #upcinput').on('blur',_validateUPCEntry);
			$('#loadHeader #upcinput').on('keyup',_handleUPCEntry);
			$('#loadHeader #skuinput').on('keyup',_handleSKUEntry);
			$('#loadHeader #cpinput').on('keyup',_handleCPEntry);
			$('.navbar-nav li:first').on('click',_handleNavCpMang);
			$('#toGoBack').on('click',_handleToGoBack);
			$('.nav-list ul li.nav-item.dropdown').on('mouseenter',_childAlignMiddle);
			$('.toTrim').on('mouseenter',_showActualValue);
			$('.toTrim').on('mouseleave',_showTrimmedValue);
			$('.product-header-bn, .navbar-brand').on('click',_toUnlockCP);
			$('.showsearch').on('click', _showSearchContainer);
			$('#loadHeader #landedcostinput').on('keyup',_handleLandedCost);
			$('#landedcostinput').on('blur',_handleBlurDouble);
			$('#IRAmountinput').on('blur',_handleBlurDouble);
			$('#loadHeader .dateModified').on('click',_handleDateModified);
			$('#loadHeader #IRAmountinput').on('keyup',_handleInitialRetailAmount);
		},
		_deactivateHeaderFooter = function(){
			$('.btn-clear').off('click',_handleLogoutClicked);
			$('.btn-notify').off('click',_handleNotifyClick);
			$('#navNotification').off('click',_handleNotifyClick);
			$('#btnMarkAllAsRead').off('click',_handleMarkAllAsRead);
			$('.notificationDetail').off('click',_handleNotificationClick);
			$('.nav-link').off('click',_handleSearchTabClick);
			$("#loadHeader .search_start").off('click',_handleSearchButtonClick);
			$("#loadHeader .clear_all").off('click',_handleClearButtonClick);
			$('#loadHeader #search_merchantgroup').off('keyup',_handleMerchantGroupruptEntry);
			$('#loadHeader #ccinput').off('keyup',_handleCustomerChoiceEntry);
			$('#loadHeader #ksinput').off('keyup',_handleKohlsStyleEntry);
			$('#loadHeader #inputgc').off('keyup',_handleGroupCodeEntry);
			$('#loadHeader #upcinput').off('blur',_validateUPCEntry);
			$('#loadHeader #upcinput').off('keyup',_handleUPCEntry);
			$('#loadHeader #skuinput').off('keyup',_handleSKUEntry);
			$('#loadHeader #cpinput').off('keyup',_handleCPEntry);	
			$('.navbar-nav li:first').off('click',_handleNavCpMang);
			$('#toGoBack').off('click',_handleToGoBack);
			$('.nav-list ul li.nav-item.dropdown').off('mouseenter',_childAlignMiddle);
			$('.toTrim').off('mouseenter',_showActualValue);
			$('.toTrim').off('mouseleave',_showTrimmedValue);
			$('.product-header-bn, .navbar-brand').off('click',_toUnlockCP);
			$('.showsearch').off('click', _showSearchContainer);
			$('#loadHeader #landedcostinput').off('keyup',_handleLandedCost);
			$('.dateModified').off('click',_handleDateModified);
			$('#loadHeader #IRAmountinput').off('keyup',_handleInitialRetailAmount);
		},
		_handleInitialRetailAmount = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9]{1,11}(?:\.[0-9]{1,2})?$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#IRAmounterror").length == 0) {
					$( ".IRAmountcontainer" ).append( "<p class = \"entryerror\" id = \"IRAmounterror\">Value entered must be numeric and cannot be more than 99999.99</p>" );
					$( ".IRAmountlabel" ).css( "color", "red" );
					$("#IRAmountinput").css("border","1px solid red");
					}	
				}
				else{
					if($("#IRAmounterror").length == 0 && Number(userEntry) > 9999.99 ){
						$( ".IRAmountcontainer" ).append( "<p class = \"entryerror\" id = \"IRAmounterror\">Value entered must be numeric and cannot be more than 9999.999</p>" );
						$( ".IRAmountlabel" ).css( "color", "red" );
						$("#IRAmountinput").css("border","1px solid red");
					}else if($("#IRAmounterror").length != 0 && Number(userEntry) <= 9999.99) {
						$("#IRAmounterror").remove();
						$( ".IRAmountlabel"  ).css( "color", "#454545" );
						$("#IRAmountinput").css("border","1px solid #cccccc");
					}
						searchRequestObject.initialRetailAmount = userEntry

					
				}
			_verifyReadyforsearch();
		},
		
		_handleBlurDouble = function(){
			var roundedup = parseFloat(Math.round($(this).val() * 1000) / 1000).toFixed(3);
			if(isNaN(roundedup) || $(this).val() == ''){
				$(this).val('');
			}else{
				$(this).val(roundedup);
			}
		},
		
		_handleLandedCost = function(e){
			
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9]{1,11}(?:\.[0-9]{1,3})?$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#landedcosterror").length == 0) {
					$( ".landedcostcontainer" ).append( "<p class = \"entryerror\" id = \"landedcosterror\">Value entered must be numeric and cannot be more than 9999.999</p>" );
					$( ".landedcostlabel" ).css( "color", "red" );
					$("#landedcostinput").css("border","1px solid red");
					}	
				}else{
					if($("#landedcosterror").length == 0 && Number(userEntry) > 9999.99 ){
						$( ".landedcostcontainer" ).append( "<p class = \"entryerror\" id = \"landedcosterror\">Value entered must be numeric and cannot be more than 9999.999</p>" );
						$( ".landedcostlabel" ).css( "color", "red" );
						$("#landedcostinput").css("border","1px solid red");
					}else if($("#landedcosterror").length != 0 && Number(userEntry) <= 9999.99) {
						$("#landedcosterror").remove();
						$( ".landedcostlabel"  ).css( "color", "#454545" );
						$("#landedcostinput").css("border","1px solid #cccccc");
					}
						searchRequestObject.landedCost = userEntry
					
						
					
				}
			_verifyReadyforsearch();
		},
		_handleDateModified = function(){
			
			if($(this).attr('id') == "dtiStartDate"){
				$(this).datepicker().datepicker("option", "onSelect",function(date){
					console.log("hello")
					var startDate = new Date(date);
					var endDate = new Date($("#dtiEndDate").val());
					if(startDate > endDate){
						$("#dtiEndDate").val('')
					}
				}).datepicker("show");
			}else if($(this).attr('id') == "dtiEndDate"){
				$("#dtiEndDate").datepicker().datepicker( "option", "minDate", $("#dtiStartDate").val()).datepicker("show");
			}else{
				$(this).datepicker().datepicker("show");
			}
	        $('#ui-datepicker-div').css('position', 'absolute !important');
		},
		_showSearchContainer = function(){
			$(".moreSearchContainer").slideToggle(function() {
		        if ($(this).is(":visible")) {
		            $(this).parent().animate({
		                scrollTop: $(this).offset().top
		            }, "slow");
		        }
		    });
			if ($(this).children('.moreText').text() == "Less")
		       $(this).children('.moreText').text("More");
		    else
		    	$(this).children('.moreText').text("Less");
			$('.searchArrowButton').toggleClass('rotate');
		},
		_showActualValue = function(){
			var trimmedVal = $(this).text();
			var actualVal = $(this).attr('data-val');
			$(this).attr('data-val',trimmedVal);
			$(this).text(actualVal);
		},
		_showTrimmedValue = function(){
			var actualVal = $(this).text();
			var trimmedVal = $(this).attr('data-val');
			$(this).attr('data-val',actualVal);
			$(this).text(trimmedVal);
		},
		_clearSelect = function(element) {
			$('input[data-name="'+element+'"]').val('Select');
			$('input[name="'+element+'"]').val('');
		},
		_toUnlockCP = function(){
			var urlName1 = window.location.pathname;
			if(location.pathname != "/maintenance/bccSkuAttribute"){
				$('.box-overlay, .box-loading').show();
				var _this = $(this);
	 			if(cpIdsList != ""){
					var cpIds = cpIdsList.split(",")
	            }else{
	            	var cpIds = location.href.split("cpIds=")[1].split(",")
	            }
	            if(previewJson[Kjs.placeHolder.placeHolderPanel.getCPIndex()].assetLocked){
	            	if(_this.hasClass('navbar-brand')){
	            		window.location.href = '/dashboard/getMerchantGroupsCountByStatus';
	            	}else if (urlName1=="/cp/cpPreview" && (Kjs.storage.getData('userInfo').role == "VU" || Kjs.storage.getData('userInfo').role == "VA" || Kjs.storage.getData('userInfo').role == "Vendor")) {
					    window.location.href = '/search/searchResultPage';
					}else{
					    window.location.href = '/cp/home';
					}
	            }else{
	            	var params = {};
					params.cpid = cpIds.toString();
	            	var url = location.origin + '/api/v1/cp/unlockCP',
					_success = function(response){
						if(_this.hasClass('navbar-brand')){
		            		window.location.href = '/dashboard/getMerchantGroupsCountByStatus';
		            	}else if (urlName1=="/cp/cpPreview" && (Kjs.storage.getData('userInfo').role == "VU" || Kjs.storage.getData('userInfo').role == "VA" || Kjs.storage.getData('userInfo').role == "Vendor")) {
						    window.location.href = '/search/searchResultPage';
						}else{
						    window.location.href = '/cp/home';
						}
					},
					_error = function(){};
					Kjs.vpAjax.post(url,JSON.stringify(params),_success,_error);
	            }
			}
		},
		_handleSelectCategory = function(_this){
			var elem = $('.singleAttributeDesc.singleDrpActive'),
			selectedCategory = _this.attr('value');
			if(selectedCategory != elem.attr('data-prev-value')) {
				searchRequestObject.category = '';
				_clearSelect('majorCategory');
				searchRequestObject.category = selectedCategory;
				_verifyReadyforsearch();
				if(searchRequestObject.category == '') {
					_disableAllCategoryDependancies();
					$('.specialViewBy').addClass("disable");
				}else{
					var _successResponse = function (response) {
						_enableField('search_majorCategory', true);
						if (response != null) {	
							var majorCategoriesInfo = response;
							Kjs.storage.getData("majorCategoriesInfo",response);
							if(response.errorMessage == "") {
								var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
								var majorCategoriesHTML = selectOption;
								var data = majorCategoriesInfo.responseData.majorCategories;
								for (var categoriesObj in data){
									var subClassNumber = data[categoriesObj].code;
									var subClassDescription = data[categoriesObj].description;
									majorCategoriesHTML += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+subClassNumber+'">'+subClassNumber+'-'+subClassDescription+'</a></li>';
								}
							}
							$('ul[data-name="majorCategory"]').html(majorCategoriesHTML);
							Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
			    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
						} else {
					    	Kjs.modelPopUp.displayServiceError(response.errorMessage);
					    }
					},
					_errorResponse = function () {
	
					},
					formattedURL = "/search/getMajorCategories?categoryCode="+selectedCategory;
					Kjs.vpAjax.get(formattedURL, "", _successResponse, _errorResponse);
					_disableSearchButton();
				}
				_verifyReadyforsearch();
			}
		},
		_handleSelectMajorCategory = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedMajorCategory = _this.attr('value');
			if(selectedMajorCategory != elem.attr('data-prev-value')) {
				searchRequestObject.majorCategory = '';
				searchRequestObject.majorCategory = selectedMajorCategory;
				if(searchRequestObject.majorCategory == '') {
					
				}else{
					_enableField('search_majorCategory', true);
					var majorCategoriesInfo = Kjs.storage.getData("majorCategoriesInfo");
					var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
					var majorCategoriesHTML = selectOption;
					var data = majorCategoriesInfo.responseData.majorCategories;
					for (var categoriesObj in data){
						var subClassNumber = data[categoriesObj].code;
						var subClassDescription = data[categoriesObj].description;
						majorCategoriesHTML += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+subClassNumber+'">'+subClassNumber+'-'+subClassDescription+'</a></li>';
					}
					$('ul[data-name="majorCategory"]').html(majorCategoriesHTML);
					Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
	    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
				}
				_verifyReadyforsearch();
			}
		},
		
		_handleOCFChar = function(_this){
			var selectedOCF = _this.attr('value');
			if($("#OCF_characteristic").val() == "Select OCF Characteristic"){
				searchRequestObject.ocfCharacteristic = ''
			}else if($("#OCF_characteristic").val() == "Yes"){
				searchRequestObject.ocfCharacteristic = 'Y'
			}else if($("#OCF_characteristic").val() == "No"){
				searchRequestObject.ocfCharacteristic = 'N'
			}
		},
		
		_handleSellingChannel = function(_this){
			var selected= _this.attr('value');
			searchRequestObject.sellingChannel = selected
		},
		
		_handleChokingHaz = function(_this){
			var selected= _this.attr('value');
			searchRequestObject.chokingHazard = selected

		},
		
		_handlePerishable = function(_this){
			var selected= _this.attr('value');
			searchRequestObject.perishableIndicator = selected
		},
		
		_clearDeptDependencies = function(){
			searchRequestObject.departmentNumber = '';
			searchRequestObject.vsNumber = '';
			searchRequestObject.vendorName = '';
			searchRequestObject.brandIdentifier = '';
			searchRequestObject.classNumber = '';
			searchRequestObject.subClassNumber = '';
			searchRequestObject.sellingChannel = '';
			$('#inputvsnum').val('');
			$('#inputgc').val('');
			_clearSelect('searchVendor');
			_clearSelect('searchBrand');
			_clearSelect('searchClass');
			_clearSelect('searchSubClass');
			_clearSelect('sellingChannel');
		},
		
		_handleSelectDMA = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedDma = _this.attr('value');
			if(selectedDma != elem.attr('data-prev-value')) {
				searchRequestObject.dmaNumber = selectedDma;
				_clearSelect('searchDepartment');
				if($('input[data-name="searchDepartment"]').val() == "Select"){
					$('input[data-name="searchDepartment"]').focus();
				}
				_disableAllDepartmentDependancies();
				_clearDeptDependencies();
				searchRequestObject.dma = selectedDma;
				_verifyReadyforsearch();
				if(searchRequestObject.dmaNumber == '') {
					$("#search_selectdepartment").parent().find(".singleSelectWrapper li").show()
					$("#search_selectdepartment").parent().find(".singleSelectWrapper a").removeClass("filteredOut");
					$("#OCF_characteristic").val('Select OCF Characteristic');
					searchRequestObject.ocfCharacteristic = "";
					_disableAllDmaDependancies();
				}else{
					
					var _successResponse = function (response) {
						_enableField("perishable_indicator",true);
						_enableField("OCF_characteristic",true);
						if (response != null) {
							var dmaInfo = response;
							Kjs.storage.getData("dmaInfo",response);				
							if(response.errorMessage == "") {
								var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
								var dmaListHtml = selectOption;		
								var dmaData = dmaInfo.responseData.searchInputData.dmas;
								for(var dmaObj in dmaData){
									var dmaDept = dmaData[dmaObj].department;
									
									for(var dmaDeptObj in dmaDept){
										var dmaNumber = dmaDept[dmaDeptObj].deptNumber;
										var dmaDescription = dmaDept[dmaDeptObj].deptDescription;
										dmaListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+dmaNumber+'">'+dmaNumber+'-'+dmaDescription+'</a></li>';
									}
								}
						        
						    }
							$('ul[data-name="searchDepartment"]').html(dmaListHtml);
							
							
							//Filter Down Department List based on selected DMA
							$("#search_selectdepartment").parent().find(".singleSelectWrapper li").show()
							$("#search_selectdepartment").parent().find(".singleSelectWrapper a").removeClass("filteredOut");
							
							var departments = Kjs.storage.getData('allDepartments');
							var tempDeptList = []
							for(item in departments.dmas){
								if(departments.dmas[item]["dma"]["code"] == selectedDma){
									for(dept in departments.dmas[item]["department"]){
										tempDeptList.push(departments.dmas[item]["department"][dept]["deptNumber"])
									}
									console.log(tempDeptList)
									break;
								}
							}
							var listOfDeptSelections = $("#search_selectdepartment").parent().find(".singleSelectWrapper li a")
							var toFilter = Kjs.storage.getData('allDepartments');
							for(selection in listOfDeptSelections){
								
								if(!tempDeptList.includes(listOfDeptSelections.eq(selection).attr("value")) && listOfDeptSelections.eq(selection).attr("value") != ""){
									listOfDeptSelections.eq(selection).parent().hide();
									listOfDeptSelections.eq(selection).addClass("filteredOut");
								}
							}
							
//							for(selection in listOfDeptSelections){
//								
//								if(!tempDeptList.includes(listOfDeptSelections.eq(selection).attr("value"))){
//									listOfDeptSelections.eq(selection).parent().hide();
//								}
//							}
							
//							var styleHtml = $tmpl.render(commonHeaderTpl.searchTpl, filteredDepts);
//							$('#nav-products').html("");
//							$('#nav-products').append(styleHtml);
//							$('#loadSearchForm').css('display','block');
							
								
					        Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
			    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
						} else {
					    	Kjs.modelPopUp.displayServiceError(response.errorMessage);
					    }
					},
					_errorResponse = function () {

					},
					formattedURL = "/search/GetSearchInputData?dma="+selectedDma;
					Kjs.vpAjax.get(formattedURL, "", _successResponse, _errorResponse);
					_disableSearchButton();
				}
				if($('input[name="viewby"]').val() == "Ecomm View" || $('input[name="viewby"]').val() == "Pricing View"){
					$('input[name="viewby"]').val("View By");
					$('input[data-name="viewby"]').val("View By");
					searchRequestObject.viewBy = "Vendor Style";
					$('.specialViewBy').addClass("disable");
				}
				_verifyReadyforsearch();
			}
		},
		
		_handleSelectDepartment = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedDept = _this.attr('value');
			if(selectedDept != elem.attr('data-prev-value')) {
				_clearDeptDependencies();
				searchRequestObject.departmentNumber = selectedDept;
				_verifyReadyforsearch();
				if(searchRequestObject.departmentNumber == '') {
					_disableAllDepartmentDependancies();
					_clearSelect('searchDTIndicator');
					searchRequestObject.digitalTurnInIndicator = '';
					$("#dtiStartDate").val('');
					$("#dtiEndDate").val('');
					$("#IRAmountinput").val('');
					$("#selling_channel").val('');
					$("#selling_channel").val('Select Selling Channel');
					$('.specialViewBy').addClass("disable");
				}else{
					var _successResponse = function (response) {
						_enableField('inputvsnum', true);
						_enableField('inputgc', true);
						_enableField('search_vendorname', true);
						_enableField('search_brandname', true);
						_enableField('search_classnumber', true);
						_enableField("searchDTIndicator",true);
						_enableField("landedcostinput",true);
						_enableField("IRAmountinput",true);
						_enableField("search_selectDTI",true);
						_enableField("selling_channel",true);
						_enableField("dtiStartDate",true);
						_enableField("dtiEndDate",true);
						_enableField("dtiEndDate",true);
						_enableField("selling_channel",true);
						
						if (response != null) {
							var deptInfo = response;
							Kjs.storage.saveData("deptInfo",response);				
							if(response.errorMessage == "") {
								var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
								var classListHtml = selectOption;				
								for(var classObj in response.responseData.departmentHierarchy.classMap){
									var classDescription = response.responseData.departmentHierarchy.classMap[classObj].classDescription;
									var classNumber = response.responseData.departmentHierarchy.classMap[classObj].classNumber;
									classListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+classNumber+'">'+classNumber+'-'+classDescription+'</a></li>';
								}
								var vendorListHtml = selectOption;
								for(var vendorObj in response.responseData.departmentHierarchy.vendorMap){
									var vendorName = response.responseData.departmentHierarchy.vendorMap[vendorObj].vendorDescription;
									var vendorNumber = response.responseData.departmentHierarchy.vendorMap[vendorObj].vendorNumber;
									vendorListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+vendorNumber+'">'+vendorName+'</a></li>';
								}
								var brandListHtml = selectOption;
								var uniqueBrandList = [];
								for(var vendorObj in response.responseData.departmentHierarchy.vendorMap){
									for(var brandObj in response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap){
										var brandId = response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandId;
										var brandDescription = response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandDescription;
										if (uniqueBrandList.indexOf(brandId) == -1) {
											uniqueBrandList.push(brandId);
											brandListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+brandId+'">'+brandDescription+'</a></li>';
										}
									}
								}
						        $('ul[data-name="searchClass"]').html(classListHtml);
						        $('ul[data-name="searchVendor"]').html(vendorListHtml);
						        $('ul[data-name="searchBrand"]').html(brandListHtml);
						        Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
				    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
						    } else {
						    	Kjs.modelPopUp.displayServiceError(response.errorMessage);
						    }
						}
					},
					_errorResponse = function () {

					},
					formattedURL = "/search/getDeptResults?deptNumber="+selectedDept;
					Kjs.vpAjax.get(formattedURL, "", _successResponse, _errorResponse);
					_disableSearchButton();
				}
				if($('input[name="viewby"]').val() == "Ecomm View" || $('input[name="viewby"]').val() == "Pricing View"){
					$('input[name="viewby"]').val("View By");
					$('input[data-name="viewby"]').val("View By");
					searchRequestObject.viewBy = "Vendor Style";
					$('.specialViewBy').addClass("disable");
				}
				_verifyReadyforsearch();
			}
		},
		_childAlignMiddle = function(){
			var wind = window;
			var windW = Number($(wind).innerWidth());
	        /* if window width above 768 */
	        if (windW > 768) {
	        	var thi = $(this);
	        	var thiDropdownMenu = thi.children('.dropdown-menu');
	        	var thiCols = thiDropdownMenu.children('.container-fluid').children(".row").children("div");
	        	var thicolQty = Number(thiCols.length);
	            /* switching classes */
	            $(thiDropdownMenu).removeClass('typeflex').addClass('typetbl');
	            /* taking full menu width */
	            var thiDropdownMenuW = Number(thiDropdownMenu.innerWidth());
	            var thiW, pullHalf, thiHalfW;
	            /* choose dropdown menu with less columns */
	            if (windW > thiDropdownMenuW && thicolQty <= 5) {
	                /* debugger;*/
	                thiW = Number(thi.innerWidth());
	                pullHalf = thiDropdownMenuW / 2;
	                thiHalfW = thiW / 2;
	                pullHalf = pullHalf - thiHalfW;
	                /* making middle align */
	                $(thiDropdownMenu).removeClass('typeflex').addClass('typetbl').css({
	                    marginLeft: -pullHalf
	                });
	                /* debugger;*/
	                /*taking left space of menu in body*/
	                var space = thiDropdownMenu.offset();
	                /*counting menu width + left*/
	                var totalW = space.left + thiDropdownMenuW;
	                var crossedPxls = Math.abs(windW - totalW);
	                /*when offset*/
	                if (totalW > windW) {
	                    /* debugger;*/
	                    pullHalf = pullHalf + crossedPxls;
	                    /*making middle align*/
	                    $(thiDropdownMenu).css({
	                        marginLeft: -pullHalf
	                    });
	                }
	            } else {
	                /* debugger;
	                making full width*/
	                $(thiDropdownMenu).css({
	                    marginLeft: -0
	                }).addClass('typeflex').removeClass('typetbl');
	            }
	        } /*end: if windW 768*/
		},
		_handleSelectVendor = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedVendor = _this.attr('value'),
				deptInfo = Kjs.storage.getData("deptInfo");
			if(selectedVendor != elem.attr('data-prev-value')) {
				searchRequestObject.vendorName = '';
				searchRequestObject.brandIdentifier = '';
				_clearSelect('searchBrand');
				searchRequestObject.vendorName = selectedVendor;
				if(searchRequestObject.vendorName == '') {
					
				}else{
					var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
					var brandListHtml = selectOption;
					var uniqueBrandList = [];
					for(var vendorObj in deptInfo.responseData.departmentHierarchy.vendorMap){
						for(var brandObj in deptInfo.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap){
							if(deptInfo.responseData.departmentHierarchy.vendorMap[vendorObj].vendorNumber == searchRequestObject.vendorName){
								var brandId = deptInfo.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandId;
								var brandDescription = deptInfo.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandDescription;
								if (uniqueBrandList.indexOf(brandId) == -1) {
									uniqueBrandList.push(brandId);
									brandListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+brandId+'">'+brandDescription+'</a></li>';
								}
							}
						}
					}
					$('ul[data-name="searchBrand"]').html(brandListHtml);
			        Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
	    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
				}
				_verifyReadyforsearch();
			}
		},
		_handleSelectBrand = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedBrand = _this.attr('value');
			if(selectedBrand != elem.attr('data-prev-value')) {
				searchRequestObject.brandIdentifier = selectedBrand;
				_verifyReadyforsearch();
			}
		},
		_handleSelectClass = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedClass = _this.attr('value');
			if(selectedClass != elem.attr('data-prev-value')) {
				searchRequestObject.subClassNumber = '';
				_clearSelect('searchSubClass');
				searchRequestObject.classNumber = selectedClass;
				if(searchRequestObject.classNumber == '') {
					_disableAllClassDependancies();
				}else{
					_enableField("search_subclass", true);
					var deptInfo = Kjs.storage.getData("deptInfo");
					var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
					var subClassListHtml = selectOption;
					var data = {subclassname : deptInfo.responseData.departmentHierarchy.classMap[selectedClass].subClassMap};
					for (var subClassNum in data.subclassname){
						var subClassNumber = deptInfo.responseData.departmentHierarchy.classMap[selectedClass].subClassMap[subClassNum].subClassNumber;
						var subClassDescription = deptInfo.responseData.departmentHierarchy.classMap[selectedClass].subClassMap[subClassNum].subClassDescription;
						subClassListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+subClassNumber+'">'+subClassNumber+'-'+subClassDescription+'</a></li>';
					}
					$('ul[data-name="searchSubClass"]').html(subClassListHtml);
			        Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
	    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
				}
				_verifyReadyforsearch();
			}
		},
		_handleSelectSubClass = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedSubClass = _this.attr('value');
			if(selectedSubClass != ""){
				$('.specialViewBy').removeClass("disable");
			} else {
				$('.specialViewBy').addClass("disable");
			}
			if(selectedSubClass != elem.attr('data-prev-value')) {
				searchRequestObject.subClassNumber = selectedSubClass;
			}
			_verifyReadyforsearch();
		},
		_handleSelectP1 = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedP1 = _this.attr('value');
			if(selectedP1 != elem.attr('data-prev-value')) {
				searchRequestObject.p2 = '';
				searchRequestObject.p3 = '';
				_clearSelect('searchP2');
				_clearSelect('searchP3');
				searchRequestObject.productPrimaryTypeCode = selectedP1;
				$('.selectedClass').removeClass("errorField");
				if(searchRequestObject.productPrimaryTypeCode == '') {
					_disableAllP1Dependancies();
				}else{
					var _successResponse = function (response) {
						_enableField('search_p2number', true);
						_enableField('search_p3number', true);
						if (response != null) {
							if(response.errorMessage != undefined && response.errorMessage != ""){
								Kjs.modelPopUp.displayServiceError(response.errorMessage);
							}else{
								Kjs.storage.saveData("p2p3data",response);		
								if(response.errorCode == "") {
									var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
									var p2ListHtml = selectOption;
									for(var p2Obj in response.responseData.productPrimaryTypeHeirarchy.productTypeMap){
										var productTypeCode = response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p2Obj].productTypeCode;
										var	productTypeDescription = response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p2Obj].productTypeDescription;
										p2ListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+productTypeCode+'">'+productTypeDescription+'</a></li>';
									}
							        $('ul[data-name="searchP2"]').html(p2ListHtml);
							        Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
					    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
							    }
							}
						}
					},
					_errorResponse = function (response) {
						Kjs.modelPopUp.alertModelPopUp({message:response.errorMessage},function(){});
					},
					formattedURL = "/search/getP2P3Data?productPrimaryTypeCode="+searchRequestObject.productPrimaryTypeCode;
					Kjs.vpAjax.get(location.origin + formattedURL,"", _successResponse, _errorResponse);
				}
				_verifyReadyforsearch();
			}
		},
		_handleSelectP2 = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedP2 = _this.attr('value');
			if(selectedP2 != elem.attr('data-prev-value')) {
				searchRequestObject.p3 = '';
				_clearSelect('searchP3');
				searchRequestObject.p2 = selectedP2;
				if(searchRequestObject.p2 == '') {
					_disableAllP2Dependancies();
				}else{
					_enableField('search_p3number', true);
					var p2p3Data = Kjs.storage.getData("p2p3data");
					var selectOption = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">Select</a></li>';
					var p3ListHtml = selectOption;
					for(var p3Obj in p2p3Data.responseData.productPrimaryTypeHeirarchy.productTypeMap){
						if(p2p3Data.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productTypeCode == searchRequestObject.p2){
							for(subObj in p2p3Data.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productSubTypeMap){
								var productSubTypeCode = p2p3Data.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productSubTypeMap[subObj].productSubTypeCode;
								var productSubTypeDescription = p2p3Data.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productSubTypeMap[subObj].productSubTypeDescription;
								p3ListHtml += '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+productSubTypeCode+'">'+productSubTypeDescription+'</a></li>';
							}
						}
					}
					$('ul[data-name="searchP3"]').html(p3ListHtml);
			        Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
	    			Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
				}
				_verifyReadyforsearch();
			}
		},
		_handleSelectP3 = function(_this) {
			var elem = $('.singleAttributeDesc.singleDrpActive'),
				selectedP3 = _this.attr('value');
			if(selectedP3 != elem.attr('data-prev-value')) {
				searchRequestObject.p3 = selectedP3;
				_verifyReadyforsearch();
			}
		},
		_handleSelectViewBy = function() {

		},
		_handleToGoBack = function(){
			if($('form#cpAttribution').hasClass('dataChanged')){
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){_toSaveChanges()},function(){_notToSave()},{message:"Do you want to save the changes?",okbtn:"CONTINUE"});	
			}else{
				var cpid = location.search.split('?cpIds=')[1];
				var params = {};
				params.cpid = cpid.toString();
				var url = location.origin + '/api/v1/cp/unlockCP',
				_success = function(response){
					if(location.search.split('&') != undefined && location.search.split('&')[1] == "searchResult=true"){
						window.location.href = '/search/searchResultPage';
					}else{
						window.location.href = '/cp/home';
					}
				},
				_error = function(){};
				Kjs.vpAjax.post(url,JSON.stringify(params),_success,_error);
			}
		},
		_notToSave = function(){
			var cpid = location.search.split('?cpIds=')[1];
			var params = {};
			params.cpid = cpid.toString();
			var url = location.origin + '/api/v1/cp/unlockCP',
			_success = function(response){
				if(response.errorMessage != undefined && response.errorMessage != ""){
					Kjs.modelPopUp.displayServiceError(response.errorMessage);
				}else{
					if(location.search.split('&') != undefined && location.search.split('&')[1] == "searchResult=true"){
						window.location.href = '/search/searchResultPage';
					}else{
						window.location.href = '/cp/home';
					}
				}
			},
			_error = function(){};
			Kjs.vpAjax.post(url,JSON.stringify(params),_success,_error);
		},
		_toSaveChanges = function(){
			var headerClick = "header";
			Kjs.customCpReview.customCpReviewPanel.handleSaveCp(headerClick);
		}
		_handleSearchTabClick = function(){
			if($(this).attr('id') == "nav-products-tab"){
				$('#nav-guidelines-tab').removeClass('active');
				$('#nav-guidelines').removeClass('active');
				$('#nav-products').removeClass('fade');
				$('#nav-products').addClass('show');
				_handleSearchIconClick();
			}else{
				$('#nav-guidelines-tab').addClass('active');
				$('#nav-guidelines').addClass('active');
				$('#nav-guidelines').removeClass('fade');
				$('#nav-guidelines').addClass('show');
				$('#nav-products-tab').removeClass('active');
				$('#nav-products').removeClass('active');
			}
			
		},
		_handleNavCpMang = function(){
		},
		_handleNavReport = function(){
			location.href = location.origin +"/reports/salesReport"
		},
		_handleSearchClick = function(){
			_handleSearchIconClick();
			$('.nav-products-tab').off('click',_handleSearchTabClick);
			$('.nav-products-tab').on('click',_handleSearchTabClick);
		},
		_handleSearchIconClick = function(){
			searchRequestObject = {
				"departmentNumber" : "",
				"dmaNumber" : "",
				"classNumber" : "",
				"subClassNumber" : "",
				"brandIdentifier" : "",
				"skuList" : [],
				"vsNumber" : "",
				"cpList" : [],
				"upcList" : [],
				"ksIdList" : [],
				"vendorName" : "",
				"productPrimaryTypeCode" : "",
				"p2" : "",
				"p3" : "",					
				"merchantGroupName" : '',
				"groupCode": '',		
				"category" : "",
				"majorCategory" : "",
				"attributeLevel" : "",
				"customerChoiceIdList" : "",
				//CUI NEW ATTRIBUTES
				"customerChoiceIdList": "",
				"dma": "",
				"sellingChannel": "",
				"attributeLevel": "",
				"dateModifiedFrom": "",
				"dateModifiedTo": "",
				"chokingHazard": "",
				"perishableIndicator": "",
				"category": "",
				"majorCategory": "",
				"digitalTurnInIndicator": "",
				"digitalTurnInStartDate": "",
				"digitalTurnInEndDate": "",
				"landedCost": "",
				"initialRetailAmount": "",
				"ocfCharacteristic": "",
				"viewBy" : "Vendor Style"
			}
			Kjs.vpAjax.get(location.origin + "/search/GetSearchInputData","", _successSearchInputResponse, _errorSearchInputResponse);
		},
		_successSearchInputResponse = function(response){
			if(response != null){
				if(response.errorMessage != undefined && response.errorMessage != ""){
					Kjs.modelPopUp.displayServiceError(response.errorMessage);
				}else{
					Kjs.storage.saveData("allDepartments",response.responseData.searchInputData);
					_renderDepartments();
					_disableAllDependantFields();
					var UR = Kjs.storage.getData('userInfo').role;
					if( UR == ('VU') || UR == ('VU') || response.responseData.searchInputData.searchAdditionalCriterias == false){
						$('#search_view_by').closest('.singleSelectDropDownWrapper').find('.specialViewBy').remove();
						$(".btn_container a").remove()
						$('.view_by_tooltiptext').remove();
						if(response.responseData.searchInputData.searchAdditionalCriterias == false){
							$(".ccidcontainer").hide();
							$(".viewByContainer").removeClass("viewByALignRight");
							$(".search_btn_container").removeClass("newSearchButtonContainer");
							$(".search_btn_container").addClass("oldSearchButtonContainer");
							$(".btn_container").addClass("topSolidBorder");
							$(".help_tooltip").append("<span class='view_by_tooltiptext'>Please also provide one of the following for Ecom View or Pricing View:<br>1) Kohls Style ID<br>2) CP ID<br>3) Collection ID<br>4) SKU<br>5) Department, Class and Subclass</span>");

							
						}
					}
					$('.specialViewBy').addClass("disable");
					Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
			    	Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
					_deactivateHeaderFooter();
					_activateHeaderFooter();
				}
			}
		},
		_errorSearchInputResponse = function(responseData){
		},
		_disableAllDependantFields = function(){
			_enableField("inputvsnum",false);
			_enableField("inputgc",false);
			_enableField("search_classnumber",false);
			_enableField("search_subclass",false);
			_enableField("search_brandname",false);
			_enableField("search_vendorname",false);
			_enableField("search_p3number",false);
			_enableField("search_p2number",false);
			_enableField("search_majorCategory",false);
			_enableField("perishable_indicator",false);
			_enableField("attr_date_modified",false);
			_enableField("OCF_characteristic",false);
			_enableField("searchDTIndicator",false);
			_enableField("landedcostinput",false);
			_enableField("IRAmountinput",false);
			_enableField("search_selectDTI",false);
			_enableField("dtiStartDate",false);
			_enableField("dtiEndDate",false);
		},
		_renderDepartments = function(response){
			var departments = Kjs.storage.getData('allDepartments');
			var styleHtml = $tmpl.render(commonHeaderTpl.searchTpl, departments);
			$('#nav-products').html("");
			$('#nav-products').append(styleHtml);
			$('#loadSearchForm').css('display','block');
		},
		_verifyReadyforsearch = function(){
			validationerrors = ["#cpentryerror","#upcentryerror","#skuentryerror","#ksentryerror","#landedcosterror","#IRAmounterror"];
			erroractive = false;
			var respBody;
			respBody = Kjs.storage.getData("currentResponseBody");
			
			for(errortype in validationerrors){
				if($(validationerrors[errortype]).length != 0){
					erroractive = true;
				}
			}
			if(_checkAllFieldsEmpty()){
				_disableSearchButton();
			}else if(erroractive == true){
				_disableSearchButton();
			}
			else{
				_enableSearchButton();
			}
			if(searchRequestObject.subClassNumber != '' ||searchRequestObject.skuList.length !== 0 ||searchRequestObject.ksIdList.length != 0 ||searchRequestObject.cpList.length != 0){
				$('.specialViewBy').removeClass("disable");
			}else{
				$('.specialViewBy').addClass("disable");
			}			
			if($('.entryerror').length >0){
				$('#clear_all_btn').css('opacity',1);
				$('#clear_all_btn').attr("disabled",false);
			}			
		},
		_disableSearchButton = function(){
			$('#search_send').css('opacity',0.5);
			$('#search_send').attr("disabled",true);			
			$('#clear_all_btn').css('opacity',0.5);
			$('#clear_all_btn').attr("disabled",true);
		},
		_enableSearchButton = function(){
			$('#search_send').css('opacity',1);
			$('#search_send').attr("disabled",false);			
			$('#clear_all_btn').css('opacity',1);
			$('#clear_all_btn').attr("disabled",false);
		},
		_enableField = function(id,enableTrue){
			if(enableTrue){
				$('#'+id).attr("disabled",false);
				$('#'+id).css('opacity',1);
			}else{
				$('#'+id).attr("disabled",true);
				$('#'+id).css('opacity',0.4);
			}
		},
		_checkAllFieldsEmpty = function(){
			var allEmpty = true;
			if(searchRequestObject.departmentNumber != '' || searchRequestObject.productPrimaryTypeCode != '' || searchRequestObject.dma != '' || searchRequestObject.category != ''){
				allEmpty = false
			}
			//>>> INtegrate CC List
			requestObjectLists = [
				searchRequestObject.skuList,
				searchRequestObject.cpList,
				searchRequestObject.upcList,
				searchRequestObject.ksIdList,
				searchRequestObject.customerChoiceIdList
			];
			
			for(list in requestObjectLists){
				if(requestObjectLists[list] != null && requestObjectLists[list].length != 0){
						allEmpty = false;
				}
			}
			requestObjectTextEntry = [
				searchRequestObject.merchantGroupName,
				searchRequestObject.groupCode
			];
			for(list in requestObjectTextEntry){
				if (requestObjectTextEntry[list] != ''){
					allEmpty = false;
				}
			}			
			if(allEmpty == false){
				return false;
			}else{
				return true;
			}
		},
		_formatRequestBody = function(){
			for(attrib in searchRequestObject){
				if(searchRequestObject[attrib] == ""){
					searchRequestObject[attrib] = null;
				}
			}
			if($("#dtiStartDate").val() != undefined && $("#dtiStartDate").val() != ""){
				var tempDate = new Date($("#dtiStartDate").val());
				searchRequestObject.digitalTurnInStartDate = tempDate.toUTCString()
			}else{
				searchRequestObject.digitalTurnInStartDate = null;
			}
			
			if($("#dtiEndDate").val() != undefined && $("#dtiEndDate").val() != ""){
				var tempDate = new Date($("#dtiEndDate").val());
				searchRequestObject.digitalTurnInEndDate = tempDate.toUTCString()
			}else{
				searchRequestObject.digitalTurnInEndDate = null;
			}
			
			if($('input[name="viewby"]').val() != 'Vendor Style'){
				searchRequestObject.viewBy = $('input[name="viewby"]').val();
			}
			if($('#inputvsnum').val() != ""){
				searchRequestObject.vsNumber = $('#inputvsnum').val();
			}else{
				searchRequestObject.vsNumber = null;
			}
			if($('#inputgc').val() != ""){
				searchRequestObject.groupCode = $('#inputgc').val();
			}else{
				searchRequestObject.groupCode = null;
			}			
		},
		
		_gatherTitlesForPills = function(){
			var tempP1 = "";
			var tempP2 = "";
			var tempP3 = "";
			var tempvnd = "";
			var tempcls = "";
			var tempSub = "";
			var tempBrnd = "";			
			var tempBrandNum = "";
			var tempVendNum = "";
			var majCat = "";
			var attrLev = "";
			if($("#search_p1code").val() != "Select"){
				tempP1 = $("#search_p1code").val();
			}
			if($("#search_p2number").val() != "Select"){
				tempP2 = $("#search_p2number").val();
			}
			if($("#search_p3number").val() != "Select"){
				tempP3 = $("#search_p3number").val();
			}
			if($("#search_vendorname").val() != "Select"){
				tempvnd = $("#search_vendorname").val();
				tempVendNum = $("#search_vendorname").siblings(".singleAttributeCode").val();
			}
			if($("#search_classnumber").val() != "Select"){
				tempcls = $("#search_classnumber").val();
			}
			if($("#search_subclass").val() != "Select"){
				tempSub =  $("#search_subclass").val();
			}
			if($("#search_brandname").val() != "Select"){
				tempBrnd =  $("#search_brandname").val();
				tempBrandNum = $("#search_brandname").siblings(".singleAttributeCode").val();
			}
			if($("#search_majorCategory").val() != "Select"){
				majCat = $("#search_majorCategory").val();
			}
			if($("#attr_date_modified").val() != "Select"){
				attrLev = $("#attr_date_modified").val();
			}
			
			var titlesForPills = {
				"DEPT" : $("#search_selectdepartment").val() == "Select" ? '' : $("#search_selectdepartment").val(),
				"DMA" : $("#search_selectdma").val() == "Select" ? '' : $("#search_selectdma").val(),
				"CAT" : $("#search_selectCatagory").val() == "Select" ? '' : $("#search_selectCatagory").val(),
				"MAJCAT" : majCat,
				"CLS" : tempcls, 
				"SCLS" : tempSub,
				"BRND" : tempBrnd,
				"MG" : $("#search_merchantgroup").val(),
				"KSID" : $("#ksinput").val(),
				"CP" : $("#cpinput").val(),
				"UPC" : $("#upcinput").val(),
				"SKU" : $("#skuinput").val(),
				"VSN" : $("#inputvsnum").val(),
				"GC" : $("#upcinput").val(),
				"VND" : tempvnd,
				"P1" : tempP1,
				"P2" : tempP2,
				"P3" : tempP3,
				"attrLev" : attrLev
			};
			var brandVendor = {
				"brandNum" : tempBrandNum,
				"vendorNum" : tempVendNum
			};
			Kjs.storage.saveData("brandVendor",brandVendor);
			Kjs.storage.saveData("pillTitles",titlesForPills);
		},
		_handleSearchButtonClick = function(){
			var formattedURL = "/search/ViewByResults";
			_formatRequestBody();
			$('.box-overlay').show();
			$('.box-loading').show();
			passSortValue = "";
			var data = {'pageNumber' : '0', getFromSession : false, 'sortingColumn' : passSortValue};
			var inputRequest = {
				'selectedSearchInputRequest' : searchRequestObject,
				'additionalMetadata' : data
			};
			_gatherTitlesForPills();
			Kjs.vpAjax.post(formattedURL, JSON.stringify(inputRequest), _successRefineResponse, _errorRefineResponse);
		},
		_successRefineResponse =  function(response){
			$('.box-overlay').hide();
			$('.box-loading').hide();
			if(response.errorCode != ""){
				Kjs.storage.saveData("noResults",{noRes : true, formCall : true});
				window.location.replace(location.origin+"/search/searchResultPage");
			}
			else if (response.responseData.searchResultPage.resultCount != 0){
				Kjs.storage.saveData("noResults",{noRes : false, formCall : true});
				window.location.replace(location.origin+"/search/searchResultPage");	
				
			}else{
				Kjs.storage.saveData("noResults",{noRes : true, formCall : true});
				window.location.replace(location.origin+"/search/searchResultPage");
			}
		},
		_errorRefineResponse = function(response){
			$('.box-overlay').hide();
			$('.box-loading').hide();
		},
		_handleClearButtonClick = function(e){
			$('#skuinput').val('');			
			$('#inputvsnum').val('');
			$('#inputgc').val('');
			$('#cpinput').val('');
			$('#ksinput').val('');
			$('#upcinput').val('');
			$('#search_merchantgroup').val('');
			_clearSelect('searchClass');		
			_clearSelect('searchSubClass');		
			_clearSelect('searchBrand');		
			_clearSelect('searchVendor');		
			_clearSelect('searchP3');
			_clearSelect('searchP2');
			_renderDepartments();
			_clearSelect('searchP1');
			_clearSelect('searchDepartment');
			_clearSelect('dma');
			_clearSelect('category');
			_clearSelect('majorCategory');
			$("#cpentryerror").remove();
			$( ".CPlabel"  ).css( "color", "#454545" );			
			$("#upcentryerror").remove();
			$( ".UPClabel"  ).css( "color", "#454545" );			
			$("#skuentryerror").remove();
			$( ".SKUlabel"  ).css( "color", "#454545" );			
			$("#ksentryerror").remove();
			$( ".KSlabel"  ).css( "color", "#454545" );			
			_enableField('inputvsnum', false);			
			$('input[name="viewby"]').val("Vendor Style");
			$('input[data-name="viewby"]').val("Vendor Style");
			$('.specialViewBy').addClass("disable");	
			searchRequestObject = {
					"departmentNumber" : "",
					"dmaNumber" : "",
					"classNumber" : "",
					"subClassNumber" : "",
					"brandIdentifier" : "",
					"skuList" : [],
					"vsNumber" : "",
					"cpList" : [],
					"upcList" : [],
					"ksIdList" : [],
					"vendorName" : "",
					"productPrimaryTypeCode" : "",
					"p2" : "",
					"p3" : "",					
					"merchantGroupName" : '',
					"groupCode": '',		
					"category" : "",
					"majorCategory" : "",
					"attributeLevel" : "",
					"customerChoiceIdList" : "",
					//CUI NEW ATTRIBUTES
					"customerChoiceIdList": "",
					"dma": "",
					"sellingChannel": "",
					"attributeLevel": "",
					"dateModifiedFrom": "",
					"dateModifiedTo": "",
					"chokingHazard": "",
					"perishableIndicator": "",
					"category": "",
					"majorCategory": "",
					"digitalTurnInIndicator": "",
					"digitalTurnInStartDate": "",
					"digitalTurnInEndDate": "",
					"landedCost": "",
					"initialRetailAmount": "",
					"ocfCharacteristic": "",
					"viewBy" : "Vendor Style"
			};
			_disableSearchButton();
			_disableAllDependantFields();
			Kjs.singleSearchAttributeDropDown.deActivateAttributeDropDown();
		    Kjs.singleSearchAttributeDropDown.activateAttributeDropDown();
			_deactivateHeaderFooter();
			_activateHeaderFooter();			
		},
		_disableAllP1Dependancies = function(){
			_enableField("search_p2number",false);
			_enableField("search_p3number",false);
		},
		_disableAllP2Dependancies = function(){
			_enableField("search_p3number",false);
		},
		_disableAllClassDependancies = function(){
			_enableField("search_subclass",false);
		},
		_disableAllDepartmentDependancies = function (){
			_enableField("inputvsnum",false);
			_enableField("inputgc",false);
			_enableField("search_classnumber",false);
			_enableField("search_subclass",false);
			_enableField("search_brandname",false);
			_enableField("search_vendorname",false);
			_enableField("searchDTIndicator",false);
			_enableField("landedcostinput",false);
			_enableField("IRAmountinput",false);
			_enableField("search_selectDTI",false);
			_enableField("dtiStartDate",false);
			_enableField("dtiEndDate",false);
			_enableField("selling_channel",false);
		},
		_disableAllDmaDependancies = function (){
			_enableField("perishable_indicator",false);
			_enableField("OCF_characteristic",false);
		},
		_disableAttributeLevelDependancies = function (){
			_enableField("attr_date_modified",false);
		},
		_disableAllCategoryDependancies = function(){
			_enableField("search_majorCategory",false);
		},
		_disableSearchDTIIndicatorDependancies = function(){
			_enableField("dtiStartDate",false);
			_enableField("dtiEndDate",false);
		},
		_handlesearchDTIndicator = function(_this){
			var elem = $('.singleAttributeDesc.singleDrpActive'),
			selectedAttrLevel = _this.attr('value');
			if(selectedAttrLevel != elem.attr('data-prev-value')) {
				searchRequestObject.digitalTurnInIndicator = '';
				searchRequestObject.digitalTurnInIndicator = selectedAttrLevel;
				_verifyReadyforsearch();
				if(searchRequestObject.attrLevel == '') {
					_disableSearchDTIIndicatorDependancies();
					$('.specialViewBy').addClass("disable");
				}else{
					_enableField("dtiStartDate",true);
					_enableField("dtiEndDate",true);
				}
			}
		},
		_handleAttributeLevel = function(_this){
			var elem = $('.singleAttributeDesc.singleDrpActive'),
			selectedAttrLevel = _this.attr('value');
			if(selectedAttrLevel != elem.attr('data-prev-value')) {
				searchRequestObject.attrLevel = '';
				searchRequestObject.attrLevel = selectedAttrLevel;
				_verifyReadyforsearch();
				if(searchRequestObject.attrLevel == '') {
					_disableAttributeLevelDependancies();
					$('.specialViewBy').addClass("disable");
				}else{
					_enableField("attr_date_modified",true);
				}
				searchRequestObject.attributeLevel = selectedAttrLevel
			}
		},
		_handleCustomerChoiceEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#ccentryerror").length == 0) {
					$( ".ccidcontainer" ).append( "<p class = \"entryerror\" id = \"ccentryerror\">This field can only contain numbers separated by spaces.</p>" );
					$( ".cclabel" ).css( "color", "red" );
					$("#ccinput").css("border","1px solid red");
					}	
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#ccentryerror").length == 0) {
						$( ".ccidcontainer" ).append( "<p class = \"entryerror\" id = \"ccentryerror\">500 Entries allowed at most</p>" );
						$( ".cclabel" ).css( "color", "red" );
						$("#ccinput").css("border","1px solid red");
					}
					
				}
				else{
					if($("#ccentryerror").length != 0) {
						$("#ccentryerror").remove();
						$( ".cclabel"  ).css( "color", "#454545" );
						$("#ccinput").css("border","1px solid #cccccc");
					}
					if(userEntry.split(/[ ]+/) == ""){
						searchRequestObject.customerChoiceIdList = [];
					}else{
						searchRequestObject.customerChoiceIdList = userEntry.split(/[ ]+/);
					}	
					
				}
			_verifyReadyforsearch();			   
		},
		_handleKohlsStyleEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#ksentryerror").length == 0) {
					$( ".ksidcontainer" ).append( "<p class = \"entryerror\" id = \"ksentryerror\">This field can only contain numbers separated by spaces.</p>" );
					$( ".KSlabel" ).css( "color", "red" );
					$("#ksinput").css("border","1px solid red");
					}	
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#ksentryerror").length == 0) {
						$( ".ksidcontainer" ).append( "<p class = \"entryerror\" id = \"ksentryerror\">500 Entries allowed at most</p>" );
						$( ".KSlabel" ).css( "color", "red" );
						$("#ksinput").css("border","1px solid red");
					}
					
				}
				else{
					if($("#ksentryerror").length != 0) {
						$("#ksentryerror").remove();
						$( ".KSlabel"  ).css( "color", "#454545" );
						$("#ksinput").css("border","1px solid #cccccc");
					}
					if(userEntry.split(/[ ]+/) == ""){
						searchRequestObject.ksIdList = [];
					}else{
						searchRequestObject.ksIdList = userEntry.split(/[ ]+/);
					}	
					
				}
			_verifyReadyforsearch();			   
		},
		_handleMerchantGroupruptEntry = function(e){
			searchRequestObject.merchantGroupName = $('#search_merchantgroup').val();
			_verifyReadyforsearch();
		},
		_handleGroupCodeEntry = function(e){
			searchRequestObject.groupCode = $('#inputgc').val();
			_verifyReadyforsearch();
		},
		_validateUPCEntry = function(){
			if($(this).parent().find('#upcentryerror').length == 0 && $(this).val().trim() != ""){
				var len = searchRequestObject.upcList.length;
				for(var i=0;i<len;i++){
					var inputVal = searchRequestObject.upcList[i];
					var prefixLength=15-inputVal.length; 
					if(inputVal.length < 15){ 
						for(var j=0; j < prefixLength; j++){
							inputVal = "0"+inputVal; 
						} 
					}
					searchRequestObject.upcList[i] = inputVal;
				}
			} else {
				searchRequestObject.upcList = [];
			}
		},
		_handleUPCEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#upcentryerror").length == 0) {
					$( ".upccontainer" ).append( "<p class = \"entryerror\" id = \"upcentryerror\">This field can only contain numbers separated by spaces.</p>" );
					$( ".UPClabel" ).css( "color", "red" );
					$('#upcinput').css("border","1px solid red");
					}	
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#upcentryerror").length == 0) {
						$( ".upccontainer" ).append( "<p class = \"entryerror\" id = \"upcentryerror\">500 Entries allowed at most</p>" );
						$( ".UPClabel" ).css( "color", "red" );
						$('#upcinput').css("border","1px solid red");
					}
				}
				else{
					if($("#upcentryerror").length != 0) {
						$("#upcentryerror").remove();
						$( ".UPClabel"  ).css( "color", "#454545" );
						$('#upcinput').css("border","1px solid #cccccc");
					}
					if(userEntry.split(/[ ]+/) == ""){
						searchRequestObject.upcList = [];
					}
					else{
						
						searchRequestObject.upcList = userEntry.split(/[ ]+/);
					}
					
				}
				_verifyReadyforsearch();
		},
		_handleSKUEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#skuentryerror").length == 0) {
					$( ".skucontainer" ).append( "<p class = \"entryerror\" id = \"skuentryerror\">This field can only contain numbers separated by spaces.</p>" );
					$( ".SKUlabel" ).css( "color", "red" );
					$("#skuinput").css("border","1px solid red");
					}
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#skuentryerror").length == 0) {
						$( ".skucontainer" ).append( "<p class = \"entryerror\" id = \"skuentryerror\">500 Entries allowed at most</p>" );
						$( ".SKUlabel" ).css( "color", "red" );
						$("#skuinput").css("border","1px solid red");
					}
				}
				else{
					if($("#skuentryerror").length != 0) {
						$("#skuentryerror").remove();
						$( ".SKUlabel"  ).css( "color", "#454545" );
						$("#skuinput").css("border","1px solid #cccccc");
					}
					if(userEntry.split(/[ ]+/) == "") {
						searchRequestObject.skuList = [];
						
					}
					else{
						searchRequestObject.skuList = userEntry.split(/[ ]+/);
					}
					
				}	
				_verifyReadyforsearch();
		},
		_handleCPEntry = function(e){
			var createCollectionSwitch = Kjs.storage.getData('allDepartments').createCollection;
			var userEntry = $(this).val().trim(), _this = $(this);
			var inputIds = userEntry.split(/[ ]+/);
			if(createCollectionSwitch){
				var regex = /^[0-9c ]+$/;
				var inputCount = 0;
				if(!regex.test(userEntry) && userEntry != ""){
					$.each(inputIds,function(index,val){
						if(val !=''){
							if (val[0].toLowerCase()=="c") {
								var getNumericVal = val.slice(1,val.length);
								if(!isNumericOnly(getNumericVal)){
									$("#cpentryerror").remove();
									var errMsg = "The given Web Id is ("+val+") not valid.";
									_globalSearchErrorDisplay('CP',val,errMsg);
									
								}else{
									if($("#cpentryerror").length != 0) {
										_globalSearchErrorDisplayRevert('CP')
									}
								}
							}
							else if(!isNumericOnly(val)) {
								$("#cpentryerror").remove();
								var errMsg = "The given Web Id is ("+val+") not valid.";
								_globalSearchErrorDisplay('CP',val,errMsg);
								return false;
							}
						}else{
							if($("#cpentryerror").length != 0) {
								_globalSearchErrorDisplayRevert('CP')
							}					
						}
						inputCount++;
					});
				}else{
					_globalSearchErrorDisplayRevert('CP')
				}
			}else{
				var regex = /^[0-9 ]+$/;
				if(!regex.test(userEntry) && userEntry != ""){
					if($("#cpentryerror").length == 0) {
						$( ".cpcontainer" ).append( "<p class = \"entryerror\" id = \"cpentryerror\">This field can only contain numbers separated by spaces.</p>" );
						$( ".CPlabel" ).css( "color", "red" );
						$('#cpinput').css("border","1px solid red");
					}
				}else{
					if($("#cpentryerror").length != 0) {
                        $("#cpentryerror").remove();
                        $( ".CPlabel"  ).css( "color", "#454545" );
                        $('#cpinput').css("border","1px solid #cccccc");
					}
				}
			}
			if(inputIds.length > 500){
				$( ".cpcontainer" ).append( "<p class = \"entryerror\" id = \"cpentryerror\">500 Entries allowed at most</p>" );
				$('#cpinput').css("border","1px solid red");
			}else{
				if(createCollectionSwitch){
					if(inputIds.length == 0){
						searchRequestObject.cpList = [];						
					}
					else{
						searchRequestObject.cpList = inputIds; 
					}
				}else{
					if(userEntry.split(/[ ]+/) == ""){
						searchRequestObject.cpList = [];
					}else{
						searchRequestObject.cpList = userEntry.split(/[ ]+/); 
					}
				}
			}
			
			_verifyReadyforsearch();
		},
		_globalSearchErrorDisplay = function(inputType,inputVal,err){
			inputTypeSml = inputType.toLowerCase();
			inputTypeBig = inputType.toUpperCase();
			val = inputVal;
			$( "."+inputTypeSml+"container" ).append( "<p class = 'entryerror' id = '"+inputTypeSml+"entryerror'>"+err+"</p>" );
			$( "."+inputTypeBig+"label" ).css( "color", "red" );
		},
		_globalSearchErrorDisplayRevert = function(inputType){
			inputTypeSml = inputType.toLowerCase();
			inputTypeBig = inputType.toUpperCase();
			$("#"+inputTypeSml+"entryerror").remove();
			$( "."+inputTypeBig+"label"  ).css( "color", "#454545" );
		},
		_openProfileDropDown = function(eventTarget){
			var targetElement = eventTarget.parent().children('div.dropdown-menu');
				$('#collapsibleVendorSignedNavbar ul li .open-dropdown').removeClass('show');
				$('.btn-notify-wrapper').find('.dropdown-menu').removeClass('show');
				
				var userAdmin = JSON.parse(Kjs.storage.getData('userOktaDetails'));
                if(userAdmin.responseData != undefined && userAdmin.responseData.userInfoData.admin != undefined){
                	if(userAdmin.responseData.userInfoData.admin){
                		if(userAdmin.responseData.userInfoData.role == "VU" || userAdmin.responseData.userInfoData.role == "VA")
                		$('.admin-link').css('display','block');
                		else
                		$('.admin-link').css('display','block');	
                	}else{
						if(userAdmin.responseData.userInfoData.currentUserRoles.indexOf('DA') !== -1) {
							$('.admin-link').css('display','block');
						} else {
							$('.admin-link').css('display','none');
						}
                	}
                }
				var firstName = Kjs.storage.getData('userInfo').firstName,
				lastName = Kjs.storage.getData('userInfo').lastName,
				role = Kjs.storage.getData('userInfo').role,
				htmltxt ="<label>"+firstName+""+lastName+"</label><span>"+role+"</span>";
				$('#signOutForm > div > div > div').html(htmltxt);
				$('#signOutForm > div > div > span').html(firstName.charAt(0));
				/*if(targetElement.closest('.nav-item').hasClass('btn-avatar-wrapper')){
					targetElement.css('display','block');
				} */	
				targetElement.addClass('show');
				if (role=="DS"|| role=="Ds" || role=="ds") {
					$('.d-flex').find('[href="/user/editProfile"]').remove();
				}
		},
		_handleNotificationClick = function(){
			var url = $(this).attr('data-redirect-url');
			if (url) {
				window.location= url;
			}
		},
		_handleMarkAllAsRead = function(){
			 var responseOldJson = _markAllAsRead(responseJson);
			var _successCallBack = function(response){
					if(response != null && response != undefined && response.responseData.Success == "Ok"){	
						if(response.responseData.Success == "Ok"){
							$('#loadNotificationList').html("");
							var styleHtml = $tmpl.render(commonHeaderTpl.notificationTpl, {notificationInfo : responseOldJson});
							$('#loadNotificationList').html(styleHtml);
							$('#navNotification').html('');
							$('#navNotification').html('0');
						}
					}else{
						Kjs.vpAjax.hideLoaderonEmptyResponse();
					}	
				},
				_errorCallBack = function(){
				};
		var url = location.origin + "/notifications/markallasread";
		Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
		},
		_markAllAsRead = function(response){
			for(i=0;i<response.responseData.notifications.notificationList.length;i++){
				response.responseData.notifications.notificationList[i].unread=false;
			}
			return response;
		},
		_handleLogoutClicked = function(){
			_clearLocalAndSessionStorage();
			$('#signOutForm').submit(function (event) {
			     event.preventDefault();
			 });
			localStorage.clear();
			window.location.href = "/logout"; 
		},
		_clearLocalAndSessionStorage = function(){
			Kjs.storage.saveData("appliedFilterParam", "");
			Kjs.storage.saveData("homeUrl", "");
			Kjs.storage.saveData("sessionTimeout", 100);
			Kjs.storage.saveData("userInfo", "");
		},
		_getNotification = function(typeRecevied,imageurl,_this){
				$('#loadNotificationList').html('<div class="box-loading"><div></div></div><div class="box-overlay"></div>');
					var _successCallBack = function(response){
	  					if(response != null && response != undefined){
	  						$('.box-overlay, .box-loading').hide();
	  						var notificationsLists = response.responseData.notifications.notificationList;
	  					 if(notificationsLists != null && notificationsLists != "" && notificationsLists.length > 0){
		  					responseJson=response;
		  					var styleHtml = $tmpl.render(commonHeaderTpl.notificationTpl, {notificationInfo : response});
		  					$('#loadNotificationList').html(styleHtml);
		  					if ($('#loadNotificationList #comments-notifications').html().trim().length == 0) {
		  						$('#loadNotificationList #comments-notifications').html('<div class="no-notification">No new comments available</div>');
		  					}
		  					if ($('#loadNotificationList #updates-notifications').html().trim().length == 0) {
		  						$('#loadNotificationList #updates-notifications').html('<div class="no-notification">No new updates available</div>');
		  					}
		  					if(typeRecevied == "loadCall"){
		  						$('#navNotification').html('');
		  						if(response.responseData.notifications.unseenCount > "999"){
		  							$('#navNotification').html("999+");
		  						}else{
		  							$('#navNotification').html(response.responseData.notifications.unseenCount);	
		  						}
		  					}else{
		  	  					_removeloaderIcon(imageurl);
		  						$('#navNotification').html('');
			  					$('#navNotification').html("0");
		  					}
		  					_deactivateHeaderFooter();
		  					_activateHeaderFooter();
		  				 }else{
		  					_deactivateHeaderFooter();
		  					_activateHeaderFooter();
							$('.box-overlay, .box-loading').hide();
		  				 }
						}else{
	  						Kjs.vpAjax.hideLoaderonEmptyResponse();
	  					}
	  					_this.next(".dropdown-menu").addClass('show');
	  				},
				_errorCallBack = function(){
					Kjs.vpAjax.hideLoaderonEmptyResponse();
					$('.box-overlay, .box-loading').hide();
				};
			var url = location.origin + "/user/notifications";
			Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
			
		},
		_actionOnSignin = function(){
			var callType = "loadCall";
			if(location.pathname != "/login" && location.pathname != "/logout" && location.pathname != "/acceptLogin" && location.pathname !="/user/registerUser" && location.pathname !="/"){
				if (Kjs.storage.getData('userOktaDetails')==null || Kjs.storage.getData('userOktaDetails')==undefined || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData == undefined) {
				var url = location.origin+"/user/getLoginUserProfile",
				_success = function(data){
					Kjs.storage.saveData("userOktaDetails",JSON.stringify(data));
					if(Kjs.storage.getData('userInfo') == null || Kjs.storage.getData('userInfo')==""){		  	
						Kjs.storage.saveData("userInfo", data.responseData.userInfoData);
					}					
					if(data.responseData != undefined && data.responseData.userInfoData != undefined && data.responseData.userInfoData != ""){
						$('.avatar-pic').html(data.responseData.userInfoData.firstName.charAt(0));
					}
				},
				_complete = function(xhr, textStatus){
					if(xhr.status == 0){
						$('#btnLogin').css('display','none');
					}
				},
				_error = function(){
					Kjs.vpAjax.hideLoaderonEmptyResponse();
					$('#btnLogin').css('display','block');
					$('.avatar-pic').css('display','none');
					$('.btn-notify').css('display','none');
				};
				Kjs.vpAjax.getComplete(url,"",_success,_error,_complete);
			}else{
				var data = JSON.parse(Kjs.storage.getData('userOktaDetails'));
				if(data.responseData != undefined && data.responseData.userInfoData != undefined && data.responseData.userInfoData != ""){
						$('.avatar-pic').html(data.responseData.userInfoData.firstName.charAt(0));
					}
			}
			}
		},
		_removeloaderIcon = function(urlnotify){
			$('[alt="Notification"]').attr('src',urlnotify);
			$("#navNotification").show();
			//$('.btn-notify').next('.dropdown-menu').css('display','block');
		},
		_globalSearchLoad = function(){
			var isMaintenancePage = false;
			var isCCMaintenancePage = false;
			var isSKUMaintenancePage = false;
			if(window.location.pathname.search("maintenancePage") >-1|| window.location.pathname.search("maintenancePage?") >-1){
				var isMaintenancePage = true
			}	
			if(window.location.pathname.search("ccMaintenance") >-1|| window.location.pathname.search("ccMaintenance?") >-1){
				var isCCMaintenancePage = true;
			}
			if(window.location.pathname.search("skuAttribute") >-1|| window.location.pathname.search("skuAttribute?") >-1){
				var isSKUMaintenancePage = true;
			}			
			if($('#loadHeader').length > 0){
				if(location.pathname == "/dashboard/merchantGroupStatusCount" ){
					$('.VPAS-MerchantGroupHeader-header-container').hide();
				} 
				Kjs.commonHeader.headerPanel.handleSelectClassClick.onLoadClass = $('.searchDropdown').html();
				Kjs.commonHeader.headerPanel.handleCustomerChoiceEntry.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.handleKohlsStyleEntry.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.handleMerchantGroupruptEntry.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.handleUPCEntry.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.handleSKUEntry.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.handleCPEntry.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.ClassDependencies.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.DepartmentDependancies.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.P1Dependancies.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.P2Dependancies.onLoadClass = $('.searchDropdown').html();
				Kjs.commonHeader.headerPanel.handleLandedCost.onLoadClass = $('.searchTextField').html();	
				Kjs.commonHeader.headerPanel.handleInitialRetailAmount.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.handleAttributeLevel.onLoadClass = $('.searchTextField').html();
				Kjs.commonHeader.headerPanel.handlesearchDTIndicator.onLoadClass = $('.searchTextField').html();
				if((location.search !="") && (location.search.split("=")[1] == "dsnClick")){
					$(".header").hide();							
				}
				if(Kjs.storage.getData('userInfo') != null && (Kjs.storage.getData('userInfo').role=="VU" || Kjs.storage.getData('userInfo').role=="VA" || Kjs.storage.getData('userInfo').role=="Vendor")){
					$(".header-mg a").attr("href","/merchandising/MerchantGroupListViewPage");
					$(".header-logo-new a").attr("href","/merchandising/MerchantGroupListViewPage");
				}
				if(($('.verdor-group-tiltle-name').text().trim() == "Create New Merchant Group")  && (typeof vendorGroupListJson != "undefined") && (vendorGroupListJson.merchantGroupDescription != undefined)){
					$('.verdor-group-tiltle-name').text(vendorGroupListJson.merchantGroupDescription);
				}
				var _navToSearch = function(){
					window.location.replace(location.origin+'/search/searchResultPage');
				}
				var _navToVs = function(){
					var path = window.location.href;
					var kohlsStyleId = Kjs.commonHeader.headerPanel.getUrlParameter("kohlsStyleId");
					
					var maintenanceFlag = Kjs.commonHeader.headerPanel.getUrlParameter("maintenanceFlag");
					
					var urlFormatting = "/maintenance/maintenancePage?kohlsStyleId="+kohlsStyleId;
					if(maintenanceFlag != "true"){
						urlFormatting = "/maintenance/ccDetailsPage?kohlsStyleId="+kohlsStyleId;
					}
					
					window.location.replace(location.origin+urlFormatting);
				}				
				if(isMaintenancePage == true){
					$('.VPAS-MerchantGroupHeader-header-nav').eq(0).remove();
					$('.oval').eq(0).remove();
					$('.notify_count').remove();
					$('.logo-name ').remove()
					$(".VPAS-MerchantGroupHeader-header-container").append($(".navigation_bar").html());
					$(".navigation_bar").remove()
					$(".header_style").remove()
					$(".headinLabel").on("click",_navToSearch);
				}else if(isCCMaintenancePage == true){
					$('.VPAS-MerchantGroupHeader-header-nav').eq(0).remove();
					$('.oval').eq(0).remove();
					$('.notify_count').remove();
					$('.logo-name ').remove()
					$(".VPAS-MerchantGroupHeader-header-container").append($(".navigation_bar").html());
					$(".navigation_bar").remove()
					$(".header_style").remove()
				}
				else if(isSKUMaintenancePage == true){
					$('.VPAS-MerchantGroupHeader-header-nav').eq(0).remove();
					$('.oval').eq(0).remove();
					$('.notify_count').remove();
					$('.logo-name ').remove();					
					$(".VPAS-MerchantGroupHeader-header-container").append($(".navigation_bar").html());
					$(".navigation_bar").remove();
					$(".header_style").remove();				
					$(".headinLabel").off("click",_navToSearch);
					$(".headinLabel").on("click",_navToSearch);
					$(".vsNuminSKUPage").off("click",_navToVs);
					$(".vsNuminSKUPage").on("click",_navToVs);
				}
			}
		},		
		
		_handleNotifyClick = function(e){
			var _this = $(this);
			var notificationIconPath = $('[alt="Notification"]').attr('src');
			$('[alt="Notification"]').attr('src','../../static/images/loader.gif'); 
			$('.btn-notify-digit').css('display',"none");
			//$(this).next(".dropdown-menu").addClass('openNotify');
			$('.btn-avatar-wrapper').find('.dropdown-menu').removeClass('show');
			var _successCallBack = function(response){
  					if(response != null && response != undefined && response.responseData.Success == "Ok"){
  						_removeloaderIcon();
  						_getNotification("",notificationIconPath,_this);
  					}else{
  						_removeloaderIcon();
  						Kjs.vpAjax.hideLoaderonEmptyResponse();
  					}
  				}, 
				_errorCallBack = function(){
					_removeloaderIcon();
					Kjs.vpAjax.hideLoaderonEmptyResponse();
				  //  $(event.target).parent().next(".dropdown-menu").addRemove('openNotify');
				};
			var url = location.origin + "/notifications/markallasseen";
			Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
		};
	return {
		activateHeaderFooter : _activateHeaderFooter,
		deactivateHeaderFooter : _deactivateHeaderFooter,
		actionOnSignin : _actionOnSignin,
		handleKohlsStyleEntry : _handleKohlsStyleEntry,
		handleCustomerChoiceEntry: _handleCustomerChoiceEntry,
		handleMerchantGroupruptEntry : _handleMerchantGroupruptEntry,
		handleGroupCodeEntry : _handleGroupCodeEntry,
		handleUPCEntry : _handleUPCEntry,
		handleSKUEntry : _handleSKUEntry,
		handleCPEntry : _handleCPEntry,
		handleSearchIconClick : _handleSearchIconClick,
		handleSelectDepartment : _handleSelectDepartment,
		handleSelectVendor : _handleSelectVendor,
		handleSelectBrand : _handleSelectBrand,
		handleSelectClass : _handleSelectClass,
		handleSelectSubClass : _handleSelectSubClass,
		handleSelectP1 : _handleSelectP1,
		handleSelectP2 : _handleSelectP2,
		handleSelectP3 : _handleSelectP3,
		handleSelectViewBy : _handleSelectViewBy,
		handleSelectDMA : _handleSelectDMA,
		handleLandedCost : _handleLandedCost,
		handleBlurinit : _handleBlurDouble,
		handleBlurlanded : _handleBlurDouble,
		handleDateModified : _handleDateModified,	
		handleInitialRetailAmount : _handleInitialRetailAmount,
		handleSelectCategory : _handleSelectCategory,
		handleSelectMajorCategory : _handleSelectMajorCategory,
		handleAttributeLevel : _handleAttributeLevel,
		handlesearchDTIndicator : _handlesearchDTIndicator,
		handleSelectOCFChar: _handleOCFChar,
		handleChokingHaz: _handleChokingHaz,
		handlePerishable: _handlePerishable,
		handleSellingChannel: _handleSellingChannel
	  }
	});
$init(function _$init_commonHeader($) {
	$tmpl.define('commonHeaderTemplate', {
		notificationTpl : 'notifyListTmpl',
		searchTpl:'searchTmpl'
	});
	$tmpl.load('/static/tmpl/merchandising/tpl.commonHeader.js', function(success, response) {
		commonHeaderTpl = $tmpl('commonHeaderTemplate');
	});
	$.views.helpers({
		newCUIFields : function(){
			 var boolVal =  Kjs.storage.getData('allDepartments').searchAdditionalCriterias;
			 if(boolVal == true){
				 return "true"
			 }else{
				 return "false"
			 }
	    }
	});
});
$ready(function _$ready_commonHeader($) {		
	Kjs.commonHeaderFooter.actionOnSignin();
	$(document).on("click",function (event) {
	   //if(!$(event.target).is('.btn-avatar') && !$(event.target).is('[data-toggle="dropdown"]') && !$(event.target).is('.dropdown-menu') && !$(event.target).is('.btn-clear') && !$(event.target).is('#getAvatarDetails') && !$(event.target).is('.btn-notify') && !$(event.target).is('img')&& !$(event.target).is('#getAvatarDetails a') && !$(event.target).is('#btnMarkAllAsRead') && !$(event.target).is('#loadNotificationList') && !$(event.target).is('.notificationDetail') && $(event.target).closest('.openNotify').length==0) {
		if(!$(event.target).is('.btn-avatar') && !$(event.target).is('[data-toggle="dropdown"]') && !$(event.target).is('.dropdown-menu') && !$(event.target).is('.btn-clear') && !$(event.target).is('#getAvatarDetails') && !$(event.target).is('.btn-notify') && !$(event.target).is('.btn-notify-digit') && !$(event.target).is('img')&& !$(event.target).is('#getAvatarDetails a') && !$(event.target).is('#btnMarkAllAsRead') && !$(event.target).is('#loadNotificationList') && !$(event.target).is('.notificationDetail') && !$(event.target).is('.notification-wrap') && !$(event.target).is('.tabs-stage') && !$(event.target).is('.commentUpdateAllLink') && !$(event.target).is('.d-flex') && !$(event.target).parent().is('.d-flex')) {
		  // $('.nav-prime').find('li>div.dropdown-menu').css('display','none');
		   $('.nav-prime').find('li>div.dropdown-menu').removeClass('show');
	   }
	   	if(!$(event.target).hasClass('singleSelectInput') && !$(event.target).hasClass('closeSearch') && !$(event.target).parents('.singleSelectWrapper').find('.singleSelectListItem').length > 0 && !$(event.target).parents('.singleSelectWrapper').length > 0 && !$(event.target).is('.singleAttributeDesc')) {
			$(".singleDropdown_outer").html('');
			$('body').find('.singleDrpActive').removeClass('singleDrpActive');
			$('body').find('.singleSelectWrapper:visible').hide();
		}
	});
	var urlstring = location.pathname.substr(1,9);
	if(urlstring == "resources"){
		Kjs.commonHeaderFooter.handleSearchIconClick();
	}
	$(document).on('click', '[data-toggle="modal"]', function () {
		 _handleSearchIconClick();
	    var thi = $(this),
	    dataTarg = thi.attr('data-target');
	    $(dataTarg).toggleClass('fade').toggleClass('show');
	    $('[data-dismiss="modal"]').click(function () {
	        $(dataTarg).removeClass('show').addClass('fade');
	    });
	});
	$(document).on('click', '[data-toggle="dropdown"]', function () {
		var eventTarget = $(this);
		_openProfileDropDown(eventTarget); 
	});
	$(document).on('click', '[data-toggle="tab"]', function () {
	    var thi = $(this),
	    dataTarg = thi.attr('href');
	    thi.addClass('active').siblings('.nav-link').removeClass('active');
	    $(dataTarg).removeClass('fade').addClass('show active')
	        .siblings('.tab-pane').removeClass('show active').addClass('fade');
	});
    $("header .nav-item.dropdown").on({
        mouseenter: function () {
            var thi = $(this);
            var activeDropdown = thi.siblings(".nav-item.dropdown.show");
            if (activeDropdown) {
                activeDropdown.addClass("dropdown-menu-close");
            }
        },
        mousedown: function () {
            var thi = $(this);
            thi.siblings(".nav-item.dropdown").removeClass("dropdown-menu-close");
        },
        mouseleave: function () {
            $(".nav-item.dropdown.show").removeClass("dropdown-menu-close");
        }
    });
	$(document).on('click', '.NotificationList-nav a' , function (event) {
	    event.preventDefault();    
	    $('.tab-active').removeClass('tab-active');
	    $(this).parent().addClass('tab-active');
	    $('.tabs-stage .notification-wrap').removeClass('active-navs');
	    $($(this).attr('href')).addClass('active-navs');
	});
	
	$(document).off('click','.btn-clear',_handleLogoutClicked);
	$(document).on('click','.btn-clear',_handleLogoutClicked);
	
	try{
		$.ajax({
		  url: '/static/js/common/constant_variables.js',
		  dataType: "script",
		  headers: {
		        'transactionID': Kjs.vpAjax.randomString()
		    },
		  success: function(){
		  	Kjs.roleBasePermission.setElements(); 
		  }
		});
	}catch(e){
	}
	$(document).on('click', '#loadHeader .singleSelectListItem', function (e) {
		var _this = $(this),
			attrName = _this.closest('ul').attr('data-name');
		if(attrName == "searchDepartment"){
			Kjs.commonHeaderFooter.handleSelectDepartment(_this);
		}else if(attrName == "searchVendor"){
			Kjs.commonHeaderFooter.handleSelectVendor(_this);
		}else if(attrName == "searchBrand"){
			Kjs.commonHeaderFooter.handleSelectBrand(_this);
		}else if(attrName == "searchClass"){
			Kjs.commonHeaderFooter.handleSelectClass(_this);
		}else if(attrName == "searchSubClass"){
			Kjs.commonHeaderFooter.handleSelectSubClass(_this);
		}else if(attrName == "searchP1"){
			Kjs.commonHeaderFooter.handleSelectP1(_this);
		}else if(attrName == "searchP2"){
			Kjs.commonHeaderFooter.handleSelectP2(_this);
		}else if(attrName == "searchP3"){
			Kjs.commonHeaderFooter.handleSelectP3(_this);
		}else if(attrName == "viewby"){
			Kjs.commonHeaderFooter.handleSelectViewBy(_this);
		}else if(attrName == "dma"){
			Kjs.commonHeaderFooter.handleSelectDMA(_this);
		}else if(attrName == "category"){
			Kjs.commonHeaderFooter.handleSelectCategory(_this);
		}else if(attrName == "majorCategory"){
			Kjs.commonHeaderFooter.handleSelectMajorCategory(_this);
		}else if(attrName == "attributeLevel"){
			Kjs.commonHeaderFooter.handleAttributeLevel(_this);
		}else if(attrName == "searchDTIndicator"){
			Kjs.commonHeaderFooter.handlesearchDTIndicator(_this);
		}else if(attrName == "ocfCharacteristic"){
			Kjs.commonHeaderFooter.handleSelectOCFChar(_this);
		}else if(attrName == "chokingHazard"){
			Kjs.commonHeaderFooter.handleChokingHaz(_this);
		}else if(attrName == "perishableIndicator"){
			Kjs.commonHeaderFooter.handlePerishable(_this);
		}else if(attrName == "sellingChannel"){
			Kjs.commonHeaderFooter.handleSellingChannel(_this);	
		}
	});


	/* NAV-ITEM SHOWS THE DROPDOWN
	================================== */
	function navItemShowsDropdown() {
	    $("header .nav-list .nav-item.dropdown").on({
	        mouseenter: function () {

	        },
	        mousedown: function () {
	            var thi = $(this);
        		/* thi.addClass("show");
              	  thi.siblings(".nav-item.dropdown").removeClass("show").removeClass("dropdown-menu-close");
                  thi.children('.dropdown-menu').addClass('show');
                  thi.siblings(".nav-item.dropdown").children('.dropdown-menu').removeClass('show');*/

	            thi.toggleClass("show");
	            thi.children('.dropdown-menu').toggleClass('show');
	            thi.siblings(".nav-item.dropdown").removeClass("show");
	            thi.siblings(".nav-item.dropdown").children('.dropdown-menu').removeClass('show');
	        },
	        mouseleave: function () {
	            $(".nav-item.dropdown.show").removeClass("dropdown-menu-close");
	        }
	    });

	}

	/* INVOKE: functionsx`
	================================== */
	$(document).ready(function () {
	    navItemShowsDropdown();
	});
});
$module('vpAjax', function(log, env, module, Kjs) {
	_post = function(url, data, successCallBack, errorCallBack, transactionID){
		
		if(transactionID == undefined || transactionID == null){
			transactionID = _randomString();
		}
		
		
		$.ajax({
			url : url,
			type : 'POST',
			data : data,
			dataType : 'json',
			contentType : 'application/json;charset=UTF-8',
			headers: {
		        'transactionID':transactionID
		    },
			success : function(response){
				if(response != undefined && response != null){
				successCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			},
			error : function(response){
				if(response != undefined && response != null){
					errorCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			}
		});
	},	
	_get = function(url, data, successCallBack, errorCallBack, transactionID){
		if(transactionID == undefined || transactionID == null){
			transactionID = _randomString();
		}
		$.ajax({
			url : url,
			type : 'GET',
			data : data,
			dataType : 'json',
			contentType : 'application/json;charset=UTF-8',
			headers: {
		        'transactionID':transactionID
		    },
			success : function(response){
				if(response != undefined && response != null){
					successCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}	
			},
			error : function(response){
				if(response != undefined && response != null){
					errorCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
				
			}
		});
	},
	_postFormSubmit = function(url, data, successCallBack, errorCallBack, transactionID){
		
		if(transactionID == undefined || transactionID == null){
			transactionID = _randomString();
		}

		$.ajax({
			url : url,
			type : 'POST',
			data : data,
			dataType : 'json',
			headers: {
		        'transactionID':transactionID
		    },
			success : function(response){
				if(response != undefined && response != null){
				successCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			},
			error : function(response){
				if(response != undefined && response != null){
				errorCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			}
		});
	},
	_postComplete = function(url, data, successCallBack, errorCallBack, completeCallBack, transactionID){
		
		if(transactionID == undefined || transactionID == null){
			transactionID = _randomString();
		}

		$.ajax({
			url : url,
			type : 'POST',
			data : data,
			dataType : 'json',
			contentType : 'application/json;charset=UTF-8',
			headers: {
		        'transactionID':transactionID
		    },
			success : function(response){
				if(response != undefined && response != null){
				successCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			},
			error : function(response){
				if(response != undefined && response != null){
				errorCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			},
			complete : function(xhr, textStatus){
				completeCallBack(xhr, textStatus);
			}
		});
	},
	_getComplete = function(url, data, successCallBack, errorCallBack, completeCallBack, transactionID){
		
		if(transactionID == undefined || transactionID == null){
			transactionID = _randomString();
		}
		
		$.ajax({
			url : url,
			type : 'GET',
			data : data,
			dataType : 'json',
			contentType : 'application/json;charset=UTF-8',
			headers: {
		        'transactionID':transactionID
		    },
			success : function(response){
				if(response != undefined && response != null){
					successCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			},
			error : function(response){
				if(response != undefined && response != null){
					errorCallBack(response);
				}else{
					_hideLoaderonEmptyResponse();
				}
			},
			complete : function(xhr, textStatus){
				completeCallBack(xhr, textStatus);
			}
		});
	},
	_randomString = function() {
		var length = 10;
		var epochTime = Math.floor(Date.now() / 1000)
	    return epochTime+"-"+Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
	};
	return{
		post : _post,
		get : _get,
		randomString :_randomString,
		postFormSubmit : _postFormSubmit,
		postComplete : _postComplete,
		getComplete : _getComplete
	}
});

$module('roleBasePermission',function(log, env, module, Kjs){
	var checkPermissions = function(){
		if(Kjs.storage.getData('userOktaDetails') != null && JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData != undefined)
		var permissionsArray = (Kjs.storage.getData('userOktaDetails') == null || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions == undefined || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions == null) ? [] :JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions;
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
	},
	setElements = function(){
		var PERMISSIONS = checkPermissions();
		switch(location.pathname){
			case "/merchandising/VendorStyleListViewPage":
				if(!PERMISSIONS.MERCHANT_GROUP_MAINTANTANCE)
					$('.newHeader').find('.list-add-icon').css('visibility','hidden');
			break;
			case "/cp/home" :
				if(!PERMISSIONS.CREATE_CUSTOM_CPS)
					$('.add-merchent').css('visibility','hidden');
			default:
				if(!PERMISSIONS.SEARCH_FOR_PRODUCTS){
					$("#nav-products-tab").css('visibility','hidden');
                    $("#nav-products-tab").remove();
					$("#nav-products").remove();
					$("#nav-products").css('visibility','hidden').addClass('fade').removeClass('show');
					$("#nav-guidelines-tab").addClass('active');
					$("#nav-guidelines").addClass('active').addClass('show');
				}
				if(!PERMISSIONS.PRODUCT_MENU){
					 $('.dropdown-toggle').find('a:contains("Product"), a:contains("PRODUCTS"), a:contains("Products"), a:contains("PRODUCT")').closest('li').remove();
				}				
			break;
		}
	};
	return {
		checkPermissions : checkPermissions,
		setElements : setElements
	}
});