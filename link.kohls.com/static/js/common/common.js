$module('authorization', function(log, env, module, Kjs) {
	var authorizationComponent = (function() {
			$env.userRole = "";		
			$env.userInfo = {
					userId : "4000",
					roles : [
								"USA Nike 500"
							],
					firstName : "Ranjith",
					lastName : "Kumar"
				};
				_getFirstName = function() {
					$env.userInfo.firstName = Kjs.storage.getData("userName");
					return $env.userInfo.firstName
				}
				return {
					getFirstName : _getFirstName
				};

	})();

	return authorizationComponent;
});


$module('headerComponent', function(log, env, module, Kjs) {
	var 
		_changetitleFontBasedOnTextLength = function(_this){
				if(_this.text().length > 95)
					_this.css("font-size","38px");
				else if(_this.text().length > 32)
					_this.css("font-size","48px");
				else
					_this.css("font-size","68px");
			};
		
		return {
			changetitleFontBasedOnTextLength : _changetitleFontBasedOnTextLength
		}
});

$module('FormValidation',function(log,env,module,Kjs){
	var 
	regExpressions = {
			emailID: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
			alpha: /^[a-zA-Z ]*$/,
			alphaspace: /^[a-zA-Z ]+$/,
			alphanumeric: /^[a-zA-Z0-9]+$/,
			alphanumericspace: /^[a-zA-Z0-9 ]+$/,
			numeric: /^[0-9]+$/,
			decimal: /^[0-9].[0-9]+$/,
			username: /^[a-zA-Z0-9._]+$/,
			vp_special:/^[^\[\]';~:,*%#`|?"]*$/,
			vp_specialAll:/^[^\[\]'_;:,*%#`|?"]*$/,
			vp_VSspecialAll:/^[^\[\]'_;~:,*%#`|?"]*$/
	},
	errorMessages = {
			urlErrorMsg: "Please enter a valid url",
			RequiredMsg: "Please enter a value",
			RadioButtonErrorMsg: "Please select one of these options",
			SelectErrorMsg: "Please select an item in this list",
			checkboxErrorMsg: "Please select one of the options",
			PatternErrorMsg: "Please match the requested format",
			textareaErrorMsg: "Please enter the product description to continue",			
			pmdmCombination : "This color and size already exist"
	},
	_validate = function($form){
		if ($form.hasClass('dsnWrappernew')) {
			var $formControls =  $form.find('tbody tr:not(.rowHidden).combinetablebodydata').not("[style*='display: none']").find('select.color, select.size, input.vendor-color, input.display-color, div.searchCustomDropDown');
		   $formControls.parents('.form-group').removeClass('hasError');
		}else if($form.hasClass('dsnWrapper')){
		   var $formControls =  $form.find('tbody tr:visible').not("[style*='display: none']").find('select.color, select.size, input.vendor-color, input.display-color, div.searchCustomDropDown');
		   $formControls.parents('.form-group').removeClass('hasError');
		}else if($form.hasClass('combination-upc-form')){
			var $formControls = $form.find('input.attributeSingleSearchInput, input.attributeSingleSearchDropDown').not('.color, .size');
		    $formControls.parents('.form-group').removeClass('hasError');
		}else if(($form.attr('id') != undefined) && ($form.attr('id') == "skuAttributesFormData") || ($form.attr('id') == "ccAttributesFormData")){
			var $formControls = $form.find('.requiredInPortal').find('input,select');
			$formControls.parents('.form-group').removeClass('hasError');
		}else{
		   var $formControls = $form.find('input,select,textarea');
		   $formControls.parents('.form-group').removeClass('hasError'); 
		  }
		var validForm = true;	
		
		$formControls.each(function(index,value){
			if(!$(this).hasClass('optional')){				
				
				var formControl = $(this),
					regexp = "",
					hasPopOver = false;
				if (formControl.parent().hasClass('popOver')) {
					var targetErrorElem = formControl.parent().parent();
					hasPopOver = true;
				} else {
					var targetErrorElem = formControl.parent();
					hasPopOver = false;
				}
				if($(formControl).closest('tbody').hasClass('dns-sheet-container')){
					if(formControl.val()==null || formControl.val() == "" || formControl.val()=="Select"){
						targetErrorElem.addClass("hasError");
					}else{
						targetErrorElem.removeClass("hasError");
					}
				}
				if($(formControl).hasClass("selectClassMulti")){
					if(formControl.val()==null || formControl.val() == "" || formControl.val() == "Select"){
						targetErrorElem.addClass("hasError");
					}else{
						targetErrorElem.removeClass("hasError");
					}
					
				}
				if($(formControl).hasClass("searchCustomDropDown")){
					if(formControl.text()==null || formControl.text() == "" || formControl.text() == "Select"){
						targetErrorElem.addClass("hasError");
					}else{
						targetErrorElem.removeClass("hasError");
					}
				}
				if($(formControl).hasClass("attributeSingleSearchDropDown") || $(formControl).hasClass("attributeSingleSearchInput")){
					if(!$(formControl).prop('disabled') && (formControl.val() == "" || formControl.val() == "Select")){
						targetErrorElem.addClass("hasError");
					}else{
						targetErrorElem.removeClass("hasError");
					}
				}
				if(formControl.is("[pattern]")){
					regexp = formControl.attr("pattern");
					regexp = "^"+regexp+"$";
					regexp = new RegExp(regexp);
				}else if(formControl.is("[datatype]") && formControl.val()!=""){
					var datatype = formControl.attr("datatype");
					regexp = regExpressions[datatype];
				}else if(formControl.is("[type=email]")){//only works on HTML5
					regexp = regExpressions.emailID;
				}
				var isValid = validateControl(formControl,regexp);
				if(!isValid){
					validForm = false;
					var colorElem = (hasPopOver) ? formControl.parent().parent() : formControl.parent();
					if(formControl.parents('.catalog-upc-form').length > 0 && (colorElem.hasClass('colorArr') || colorElem.hasClass('vendorColorArr'))){
						targetErrorElem.addClass('hasError');
						if(formControl.parent().hasClass('colorArr')){
							(hasPopOver) ? formControl.parent().siblings('.errmsg').show() : formControl.siblings('.errmsg').show();
						} else{
							(hasPopOver) ? formControl.parent().siblings('.errmsg').html(getErrorMsg(formControl)).show() : formControl.siblings('.errmsg').html(getErrorMsg(formControl)).show();
						}
						formControl.on("blur change",function(e){
							if((formControl.val() != null) && (formControl.val().trim() !=""))
								targetErrorElem.removeClass('hasError');
						});
					} else{
						formControl.parents('.form-group').addClass('hasError');
						if($(formControl).hasClass('validate_dsnColor')){
							(hasPopOver) ? formControl.parent().siblings('.errmsg').html("This style/color combination already exists. Please update NRF Color or Vendor Color that is unique to this style.").show() : formControl.siblings('.errmsg').html("This style/color combination already exists. Please update NRF Color or Vendor Color that is unique to this style.").show();
						} else{
							(hasPopOver) ? formControl.parent().siblings('.errmsg').html(getErrorMsg(formControl)).show() : formControl.siblings('.errmsg').html(getErrorMsg(formControl)).show();
						}
						bindBlur(formControl);
					}
				}
			}
		})
		return validForm;
	},
	validateControl= function(_formControl, regexp){
		var value;
		if(_formControl.parents('.dsnWrapper').length > 0){
			if(_formControl.val().trim() == ""){
				value =_formControl.text();
			}else{
				value =_formControl.val();
			}
		} else{
			value =_formControl.val();
		}
		if(_formControl.hasClass('vendor-color')){
			if(value == "Select"){
				value = "";
			}
		}
		if(_formControl.hasClass('searchCustomDropDown') || _formControl.hasClass('attributeSingleSearchInput') || _formControl.hasClass('attributeSingleSearchDropDown')){
			if(!_formControl.prop('disabled') && value == "Select"){
				value = "";
			}
		}
		if(_formControl.hasClass('display-color')){
			if(value == "Select"){
				value = "";
			}
		}
		if(_formControl.hasClass('categoryMapList')){
			if(value == "Select"){
				value = "";
			}
		}
		if(_formControl.hasClass('majorCategoryList')){
			if(value == "Select"){
				value = "";
			}
		}
		if(_formControl.hasClass('deptListP1')){
				if(value == "Select"){
					value = "";
				}
		}
		if(_formControl.hasClass('catagory2')){
				if(value == "Select"){
					value = "";
				}
		}
		if(_formControl.hasClass('product3')){
				if(value == "Select"){
					value = "";
				}
		}
		if(_formControl.parents('#vendorAttributesForm').length > 0 && value != undefined && value !=null && typeof(value)!="object"){
			 value = value.trim();
		}
		if(_formControl.is("[required]") && (value == "")){
			return false;
		}
		 if(value != '' && value !=null && typeof(value)!="object"){
			 value = value.trim();
		 }if(regexp !="" && !regexp.test(value)){
			return false;
		}
		
		 /*if(_formControl.hasClass('color')){
				if($(_formControl).closest('tr').find('div.size').is("[required]") && ($(_formControl).closest('tr').find('div.size').text() !="")){
				if($(_formControl).hasClass('validColor') && _formControl.text().split("(")[1] != undefined){
					var colorSelect = _formControl.text().split("(")[1].split(')')[0];
				}else{
					return false;
				}
				var sizeSelectObj = _formControl.closest('tr').find('div.size');
				if(sizeSelectObj.text().split("(")[1] != undefined){
					var sizeSelect = sizeSelectObj.text().split("(")[1].split(')')[0];
				}
				if(_formControl.attr('data-pmpdm-color-code') != undefined){
					var pmdmColor = _formControl.attr('data-pmpdm-color-code').trim();
					var pmdmColorArr = pmdmColor.split(',');
				}
				if(sizeSelectObj.attr('data-pmpdm-size-code') != undefined ){
					var pmdmSize = sizeSelectObj.attr('data-pmpdm-size-code').trim();
					var pmdmSizeArr = pmdmSize.split(",");
				}
				if(((pmdmColorArr != undefined) && (pmdmColorArr.length > 0)) && ((pmdmSizeArr != undefined) && (pmdmSizeArr.length > 0))){
					if( ( $.inArray(colorSelect,pmdmColorArr) > -1) && ( $.inArray(sizeSelect,pmdmSizeArr) > -1 ) ){
						return false;
					}
				}
				
			}
		}*/
		return true;
	},
	getErrorMsg = function(_formControl){
		var temperrormsg = "";
		if(_formControl.is("[data-errormsg]"))
			temperrormsg = _formControl.attr("data-errormsg");
		if(_formControl.is("[required]") &&  _formControl.val().trim() == ""){
			temperrormsg = errorMessages.RequiredMsg;	
			if(_formControl.closest('form').hasClass('filedSpecificError')){
				var labelName = _formControl.parents('.attribute_wrapper').find('label').text().toLocaleLowerCase();
				if(_formControl.hasClass('inputFieldaddaccord')){
					labelName = _formControl.closest('.main_container').siblings('.popup_Header').find('span').text().toLocaleLowerCase().replace("add new", '');
				}
				temperrormsg = "Please enter the "+labelName+" to continue.";
			}
		}
		if(_formControl.is("textarea[required]") && _formControl.val() == ""){
			if(_formControl.closest('form').hasClass('filedSpecificError')){
				var labelName = _formControl.parents('.attribute_wrapper').find('label').text().toLocaleLowerCase();
				if(_formControl.hasClass('inputFieldaddaccord')){
					labelName = _formControl.closest('.main_container').siblings('.popup_Header').find('span').text().toLocaleLowerCase().replace("add new", '');
				}
				temperrormsg = "Please enter the "+labelName+" to continue.";
			}else{
				 temperrormsg = errorMessages.RequiredMsg;
			}
		}
		   
		 
		if(_formControl.is("[required]") && _formControl.val() == "Select")
			temperrormsg = errorMessages.RequiredMsg;

		if(_formControl.is("[required]") && _formControl.val() == "Select")
			temperrormsg = errorMessages.RequiredMsg;
		else if((_formControl.is("[pattern]") || _formControl.is("[datatype]"))&& temperrormsg==""){
			temperrormsg = errorMessages.PatternErrorMsg+temperrormsg;
		}
		else if(_formControl.is("[data-pmpdm-color-code]") || _formControl.is("[data-pmpdm-size-code]")){
			if($(_formControl).closest('tr').find('div.size').is("[required]")){
				if($(_formControl).closest('tr').find('div.size').text() !="Select"){
					temperrormsg = errorMessages.pmdmCombination;
			}else{
				temperrormsg = errorMessages.RequiredMsg;
			}
			}
		}
			
		return temperrormsg;
	},
	bindBlur = function($element){
		if($element.closest('form').attr('data-form-index') != undefined){
			$element.on("blur change focus",function(e){
			if($element.val().trim() !="")
				$element.parents('.form-group').removeClass('hasError');
		});
		}else{
			$element.on("blur change",function(e){
			if(!$element.is('[readonly]') && $element.val() != null && $element.val().trim() !="")
				$element.parents('.form-group').removeClass('hasError');
			});
		}
		
	},
	_objectifyFormVndr = function(formArray){
		var returnArray = {};
		  for (var i = 0; i < formArray.length; i++){
			  if(returnArray[formArray[i]['name']] == undefined)
				  returnArray[formArray[i]['name']] = escape(formArray[i]['value']);
			  else{
				  var arrayValue = "";
				  arrayValue = returnArray[formArray[i]['name']] + ","+escape(formArray[i]['value']);
				  returnArray[formArray[i]['name']] = arrayValue;
			  }
		  }
		  return returnArray;
	},
	
	_objectifyForm = function(formArray) {
		  var returnArray = {};
		  for (var i = 0; i < formArray.length; i++){
			  if(returnArray[formArray[i]['name']] == undefined)
				  returnArray[formArray[i]['name']] = formArray[i]['value'];
			  else{
				  var arrayValue = "";
				  arrayValue = returnArray[formArray[i]['name']] + ","+formArray[i]['value'];
				  returnArray[formArray[i]['name']] = arrayValue;
			  }
		  }
		  return returnArray;
	};
	
	return{
		isValid:_validate,
		objectifyForm : _objectifyForm,
		objectifyFormVndr : _objectifyFormVndr
	}
});

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
	 _displayServiceError = function(msg,type){
		Kjs.vpAjax.hideLoaderonEmptyResponse();
		Kjs.modelPopUp.alertModelPopUp({message:msg},function(){
			if(type != undefined && type  == 'reload'){
				window.location.reload();
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
		alertConfirmModelPopUp:_alertConfirmModelPopUp,
		displayServiceError:_displayServiceError
	}
});

$module('progressBarStatus', function(log, env, module, Kjs) {

	_requestProgressBarStatus = function(){
		if(location.pathname != "/cp/home"){
			var compArr = document.getElementsByClassName('completion');
			for(var i=0;i<compArr.length;i++){
			var compEle = compArr[i];
				if(compEle.previousElementSibling!=null && compEle.previousElementSibling!=undefined &&  compEle.previousElementSibling.value!=undefined && compEle.previousElementSibling.value!=null && compEle.previousElementSibling.value !==-1 && compEle.previousElementSibling.value < 100){
					var loadedVal = Math.round(( compEle.previousElementSibling.value ) *( 1.68))	
					compEle.style.left = loadedVal+'px';				
					if(compEle.parentElement.classList[1] === 'requestinprogress'){
						compEle.style.borderRight ="2px solid #207835";
					}else if(compEle.parentElement.classList[1] === 'requestnotstarted'){
						compEle.style.borderRight ="2px solid #1690DC";
					}else if(compEle.parentElement.classList[1] === 'requestpostdue'){
						compEle.style.borderRight ="0px solid #1690DC";
					}else if(compEle.parentElement.classList[1] === 'requestinprogTwoday'){
						compEle.style.borderRight ="2px solid #e6b800";
					}else{
						compEle.style.borderRight ="2px solid rgb(32, 120, 53)";
					}
				}
			}
		}		
	};
		
	return{
		requestProgressBarStatus : _requestProgressBarStatus
	}
});


$module('customDropDown', function(log, env, module, Kjs) {

	_activateDropDown = function(){
		$(".selected_val_Label").on("click",_selectItem);
		$('.attribute_data').on("change", _changeInputData);
		$('.customer-choice-table .selectBox').on("change", _setSelectedOption);
		$(".selected_val_Label").on("keyup",_keyboardMultiSelectOpen);
		$(document).on("click",function (event) {
		   if(!$(event.target).hasClass('multi_search_close') && !$(event.target).closest('.customDrop').find('.chkOption').length > 0 && !$(event.target).closest('.customDrop').find('.chkOptionNew').length > 0 && !$(event.target).is('.customDrop') && !$(event.target).is('.selected_val_Label')) {
		     $(".customDrop").addClass('dis-none');
		     $('body').find('.multiselect-active').removeClass('multiselect-active');
		   }
		   if(!$(event.target).hasClass('singleSelectInput') && !$(event.target).hasClass('closeSearch') && !$(event.target).parents('.singleSelectWrapper').find('.singleSelectListItem').length > 0 && !$(event.target).parents('.singleSelectWrapper').length > 0 && !$(event.target).is('.singleAttributeDesc')) {
		     $(".singleDropdown_outer").html('');
		     $('body').find('.singleDrpActive').removeClass('singleDrpActive');
		   } 
		});
		$('.brand-list-table').scroll(function(){
			$('.customDrop').addClass('dis-none');
			$(".singleDropdown_outer").html('');
			$('body').find('.singleDrpActive').removeClass('singleDrpActive');
		});
	},
	
	_deactivateDropDown = function(){
		$(".selected_val_Label").off("click",_selectItem);
		$('.attribute_data').off("change", _changeInputData);
		$('.customer-choice-table .selectBox').off("change", _setSelectedOption);
		$(".selected_val_Label").off("keyup",_keyboardMultiSelectOpen);
	},
	_keyboardMultiSelectBlur = function(){
		if(!$(this).hasClass('attribute_search_input')){
			$(".singleDropdown_outer").html('');
			$('body').find('.singleDrpActive').removeClass('singleDrpActive');
			$(".customDrop").addClass('dis-none');
		}	
	},
	 _setSelectedOption = function(){
	    $(this).parents('tr').addClass('data-changed');
	 },
	_changeInputData = function(){
		$(this).parents('tr').addClass('data-changed');
	},
	_selectAllFilteredData = function(elem, _this, type){
		var resList = {}, chkVal = "", chkLabel = "";
		if(type == "outer"){
			chkVal = $('.multiselect-active').find('.selected_val').val();
			chkLabel = $('.multiselect-active').find('.selected_val_list').val();
			elem.find('.listItemPL.filtered input[type="checkbox"]').attr('checked', true);
			elem.find("li.filtered").addClass("selected");
		} else {
			chkVal =_this.parents('.multidropdown_wrapper').find('.selected_val').val();
			chkLabel = _this.parents('.multidropdown_wrapper').find('.selected_val_list').val();
		}
		_this.parents('.multidropdown_wrapper').find("li.filtered").addClass("selected");
		_this.parents('.multidropdown_wrapper').find('.listItemPL.filtered input[type="checkbox"]').attr('checked', true);
		if(chkVal == undefined || chkVal == ""){
			chkLabel = "", chkVal = "";
		}
		_this.parents('.multidropdown_wrapper .customDrop').find("li.filtered").each(function(i,k){
			currValue = $(this).find("input").val();
			currLabel = $(this).find("label").text();
			var upValue = ','+currValue, upValue1 = currValue+',', upLabel = ','+currLabel, upLabel1 = currLabel+',';
			if(chkVal.toLowerCase().indexOf(upValue.toLowerCase()) == -1 && chkVal.toLowerCase().indexOf(upValue1.toLowerCase()) == -1 && chkVal.toLowerCase().indexOf(currValue.toLowerCase()) == -1){
				chkVal = chkVal+','+currValue;
				chkLabel = chkLabel+','+currLabel;
			}
		});
		resList.valueList = chkVal.trim();
		resList.labelList = chkLabel.trim();
		return resList;
	},
	_deSelectFilteredData = function(elem,_this, type){
		var resList = {}, chkVal = "", chkLabel = "";
		if(type == "outer"){
			chkVal = $('.multiselect-active').find('.selected_val').val();
			chkLabel = $('.multiselect-active').find('.selected_val_list').val();
			elem.find('.listItemPL.filtered input[type="checkbox"]').attr('checked', false);
			elem.find("li.filtered").removeClass("selected");
		} else {
			chkVal =_this.parents('.multidropdown_wrapper').find('.selected_val').val();
			chkLabel = _this.parents('.multidropdown_wrapper').find('.selected_val_list').val();
		}
		var	updatedVal="", updatedLabel="";
		_this.parents('.multidropdown_wrapper').find('.listItemPL.filtered input[type="checkbox"]').attr('checked', false);
		_this.parents('.multidropdown_wrapper').find("li.filtered").removeClass("selected");
		_this.parents('.multidropdown_wrapper .customDrop').find("li.filtered").each(function(i,k){
			currValue = $(this).find("input").val();
			currLabel = $(this).find("label").text();
			var upValue = ','+currValue, upValue1 = currValue+',', upLabel = ','+currLabel, upLabel1 = currLabel+',';
			if(chkVal.toLowerCase().indexOf(upValue.toLowerCase()) != -1){
				updatedVal = chkVal.replace(upValue,'');
				updatedLabel = chkLabel.replace(upLabel,'');
			} else if(chkVal.toLowerCase().indexOf(upValue1.toLowerCase()) != -1){
				updatedVal = chkVal.replace(upValue1,'');
				updatedLabel = chkLabel.replace(upLabel1,'');
			} else {
				updatedVal = chkVal.replace(currValue,'');
				updatedLabel = chkLabel.replace(currLabel,'');
			}
			chkVal = updatedVal;
			chkLabel = updatedLabel;
		});
		resList.valueList = updatedVal;
		resList.labelList = updatedLabel;
		return resList;
	},
	_selectAllchkOption = function(){
		var _this = $(this), elem = $(this).parents('.multidropdown_wrapper').find('.customDrop');
		if(_this.parents('.multidropdown_wrapper').find('.selected_val_list').val().toLowerCase() == "mixed value"){
			_this.parents('.multidropdown_wrapper').find('.selected_val').val('');
			_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val('');
			_this.parents('.multidropdown_wrapper').find('.selected_val_list').val('');
		}
		if(_this.is(':checked')){
			_this.parents('.listItemPL').addClass('selected');
			if(_this.parents('.customDrop').find('.multi_search_wrapper').is(':visible')  && _this.parents('.customDrop').find('li.filtered').length > 0){
				var resObj = _selectAllFilteredData(elem, _this),
				allValues = resObj.valueList,
				allLabels = resObj.labelList;
			} else {
				elem.find('input[type="checkbox"]').attr('checked', true);
				var allValues = "", allLabels = "";
				_this.parents('.multidropdown_wrapper .customDrop').find("li").each(function(i,k){
					allValues = allValues+","+$(this).find("input").val();
					allLabels = allLabels+","+$(this).find("label").text();
				});
				_this.parents('.multidropdown_wrapper').find("li").addClass("selected");
			}
			allValues = allValues.replace(/^,|,$/g, '');
			allLabels = allLabels.replace(/^,|,$/g, '');
			_this.parents('.multidropdown_wrapper').find('.selected_val').val(allValues);
			var selectedOptions = _this.parents('.customDrop').find("ul li.selected").length;
			if(selectedOptions > 3){
				_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(selectedOptions+ " selected");
			} else {
				_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(allLabels);
			}
			_this.parents('.multidropdown_wrapper').find('.selected_val_list').val(allLabels);
		} else{
			_this.parents('.listItemPL').removeClass('selected');
			if(_this.parents('.customDrop').find('.multi_search_wrapper').is(':visible')  && _this.parents('.customDrop').find('li.filtered').length > 0){
				var resObj = _deSelectFilteredData(elem, _this),
				updatedVal = resObj.valueList.replace(/^,|,$/g, ''),
				updatedLabel = resObj.labelList.replace(/^,|,$/g, '');
				_this.parents('.multidropdown_wrapper').find('.selected_val').val(updatedVal);
				var selectedOptions = _this.parents('.customDrop').find("ul li.selected").length;
				if(selectedOptions > 3){
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(selectedOptions+ " selected");
				} else {
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(updatedLabel);
				}
				_this.parents('.multidropdown_wrapper').find('.selected_val_list').val(updatedLabel);
				if(updatedVal == ""){
					if(_this.parents('#verifyStyleContainer').length > 0){
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val("Select");
						_this.parents('.multidropdown_wrapper').find('.selected_val_list').val("Select");
					} else{
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val("Please select the value");
						_this.parents('.multidropdown_wrapper').find('.selected_val_list').val("Please select the value");
					}
				}
			} else {
				elem.find('input[type="checkbox"]').attr('checked', false);
				_this.parents('.multidropdown_wrapper').find('.selected_val').val("");
				if(_this.parents('#verifyStyleContainer').length > 0){
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val("Select");
					_this.parents('.multidropdown_wrapper').find('.selected_val_list').val("Select");
				} else{
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val("Please select the value");
					_this.parents('.multidropdown_wrapper').find('.selected_val_list').val("Please select the value");
				}
				_this.parents('.multidropdown_wrapper').find("li").removeClass("selected");
			}
		}
		_this.parents('tr').addClass('data-changed');
		if(_this.parents('.pd_style_table').length > 0){
			Kjs.createMerchantGroup.verifyStylePanel.handleForMultiSelect.call(this);
		}
	},
	_selectAllNew = function(){
		var elem = $('.multiselect-active').find('.customDrop'), _this = $(this);
		if($('.multiselect-active').find('.selected_val_list').val() !=undefined && $('.multiselect-active').find('.selected_val_list').val().toLowerCase() == "mixed values"){
			$('.multiselect-active').find('.selected_val').val('');
			$('.multiselect-active').find('.selected_val_Label').val('');
		}
		if(_this.is(':checked')){
			_this.parents('.listItemPL').addClass('selected');
			$('.multiselect-active').find('.listItemPL.select-allgrid').addClass('selected');
			if(_this.parents('.customDrop').find('.multi_search_wrapper').is(':visible')  && _this.parents('.customDrop').find('li.filtered').length > 0){
				var resObj = _selectAllFilteredData(elem, _this, 'outer'),
				allValues = resObj.valueList,
				allLabels = resObj.labelList;
				_this.parents('.multidropdown_wrapper').find('.listItemPL.filtered input[type="checkbox"]').attr('checked', true);
				$('.multiselect-active').find("li.filtered").addClass("selected");
			} else{
				elem.find('input[type="checkbox"]').attr('checked', true);
				_this.parents('.multidropdown_wrapper').find('input[type="checkbox"]').attr('checked', true);
				var allValues = "", allLabels = "";
				$('.multiselect-active').find('.customDrop li').each(function(i,k){
					allValues = allValues+","+$(this).find("input").val();
					allLabels = allLabels+","+$(this).find("label").text();
				});
				$('.multiselect-active').find("li").addClass("selected");
				_this.parents('.multidropdown_wrapper').find("li").addClass("selected");
			}
			allValues = allValues.replace(/^,|,$/g, '');
			allLabels = allLabels.replace(/^,|,$/g, '');
			$('.multiselect-active').find('.selected_val').val(allValues);
			var selectedOptions = _this.parents('.multidropdown_wrapper').find("ul li.selected").length;
			if(selectedOptions > 3){
				$('.multiselect-active').find('.selected_val_Label').val(selectedOptions+ " selected");
			} else {
				$('.multiselect-active').find('.selected_val_Label').val(allLabels);
			}
			$('.multiselect-active').find('.selected_val_list').val(allLabels);
		} else{
			_this.parents('.listItemPL').removeClass('selected');
			$('.multiselect-active').find('.listItemPL.select-allgrid').removeClass('selected');
			if(_this.parents('.customDrop').find('.multi_search_wrapper').is(':visible')  && _this.parents('.customDrop').find('li.filtered').length > 0){
				var resObj = _deSelectFilteredData(elem, _this, 'outer'),
				updatedVal = resObj.valueList.replace(/^,|,$/g, ''),
				updatedLabel = resObj.labelList.replace(/^,|,$/g, '');
				$('.multiselect-active').find('.selected_val').val(updatedVal);
				var selectedOptions = _this.parents('.multidropdown_wrapper').find("ul li.selected").length;
				if(selectedOptions > 3){
					$('.multiselect-active').find('.selected_val_Label').val(selectedOptions+ " selected");
				} else {
					$('.multiselect-active').find('.selected_val_Label').val(updatedLabel);
				}
				$('.multiselect-active').find('.selected_val_list').val(updatedLabel);
				$('.multiselect-active').find('.listItemPL.filtered input[type="checkbox"]').attr('checked', false);
				_this.parents('.multidropdown_wrapper').find('.listItemPL.filtered input[type="checkbox"]').attr('checked', false);
				_this.parents('.multidropdown_wrapper').find("li.filtered").removeClass("selected");
				$('.multiselect-active').find("li.filtered").removeClass("selected");
				if(updatedVal == ""){
					$('.multiselect-active').find('.selected_val').val("");
					if($('body').find('#vendorAttributesForm').length > 0){
						$('.multiselect-active').find('.selected_val_Label').val("Please select a value");
						$('.multiselect-active').find('.selected_val_list').val("Please select a value");
					} else {
						$('.multiselect-active').find('.selected_val_Label').val("Select");
						$('.multiselect-active').find('.selected_val_list').val("Select");
					}
				}
			} else {
				elem.find('input[type="checkbox"]').attr('checked', false);
				_this.parents('.multidropdown_wrapper').find('input[type="checkbox"]').attr('checked', false);
				$('.multiselect-active').find('.selected_val').val("");
				if($('body').find('#vendorAttributesForm').length > 0){
					$('.multiselect-active').find('.selected_val_Label').val("Please select a value");
					$('.multiselect-active').find('.selected_val_list').val("Please select a value");
				} else {
					$('.multiselect-active').find('.selected_val_Label').val("Select");
					$('.multiselect-active').find('.selected_val_list').val("Select");
				}
				$('.multiselect-active').find("li").removeClass("selected");
				_this.parents('.multidropdown_wrapper').find("li").removeClass("selected");
			}
		}
		$('.multiselect-active').parents('tr').addClass('data-changed');
		if(location.pathname.split('/')[2] == "vendorGridEditViewAttributeList" || location.pathname.split('/')[2] == "fetchGridEditViewAttributeList"){
			Kjs.gridEditView.gridEditViewPanel.handleForMultiSelect.call(this);
		}else if(location.pathname.split('/')[2] == "merchantAttributePage"){
			Kjs.merchantAttributes.skuAttributesPanel.handleForMultiSelectAll.call(this);
		}		
	},
	_selectItem = function(e){
		$(".singleDropdown_outer").html('');
		$('body').find('.singleDrpActive').removeClass('singleDrpActive');
		if(!$(this).hasClass("readonly")){
			$(this).parents('.multidropdown_wrapper').find('ul .listItemPL.filtered').removeClass('filtered');
			$(this).parents('.multidropdown_wrapper').find('ul .listItemPL').show();
			if($(this).parents('.multidropdown_wrapper').find('.multi_search_close').length > 0){
				$(this).parents('.multidropdown_wrapper').find('.multi_search_close').trigger('click');
			}
			if($(this).parents('.tablesorter-scroller').length > 0 || $(this).parents('.ms_attribute_table').length > 0 || $(this).parents('.cc-maintenence-table').length > 0 || $(this).closest('#vendorAttributesContainer').length > 0){
				var htmlAppended = false;
				if($(this).parents('.sku_attribute_tab').length > 0 && $(this).parents('.multidropdown_wrapper').find(".customDrop ul").html().trim() == ""){
					var attrKey = $(this).prev().attr('name'), elem = $(this);
					$.each(Kjs.merchantAttributes.skuAttributesPanel.tableRowData[0],function(m,mSelect){
						if(m == attrKey){
							elem.parents('.multidropdown_wrapper').find('.customDrop ul').html(mSelect);
							htmlAppended = true;
							return false;
						}
					});
				} else if($(this).parents('.cc_attribute_tab').length > 0 && $(this).parents('.multidropdown_wrapper').find(".customDrop ul").html().trim() == ""){
					var attrKey = $(this).prev().attr('name'), elem = $(this);
					$.each(Kjs.merchantAttributes.customerChoiceAttributesPanel.ccRowData[0],function(m,mSelect){
						if(m == attrKey){
							elem.parents('.multidropdown_wrapper').find('.customDrop ul').html(mSelect);
							htmlAppended = true;
							return false;
						}
					});
				} else if($("#gridEditInnerContainer .gridEdit-container").length >0){
					if ($(this).parents(".multidropdown_wrapper").find(".customDrop ul").html()!=undefined && $(this).parents(".multidropdown_wrapper").find(".customDrop ul").html()!=null && $(this).parents(".multidropdown_wrapper").find(".customDrop ul").html().trim()=="") {
						var Index1 = $(this).parents("tr.attribute-row").attr("data-row").split("_")[1];
						var attbuteName1 = $(this).prev().attr('name')
						if (Index1!=undefined && attbuteName1!=undefined && Kjs.GridDataMultiselect[Index1][attbuteName1]) {
							$(this).parents(".multidropdown_wrapper").find(".customDrop ul").html(Kjs.GridDataMultiselect[Index1][attbuteName1]);
							htmlAppended = true;
							if(attbuteName1 == "RPTG_LBL_CDE"){
								handleSpecialAttributes('bindEvent');
							}
						}
					}
				}
				if(htmlAppended){
					var attrKey = $(this).prev().attr('name'), elem = $(this);
					var defValues = $(this).prev().val().split(",");
					elem.parents('.multidropdown_wrapper').find(".customDrop ul li").each(function(){
						for(i=0; i< defValues.length; i++){
							if($(this).find("input").val() == defValues[i] && !($(this).find("input").hasClass("select_all") || $(this).find("input").hasClass("select_all_new"))){
								$(this).addClass("selected");
								$(this).find("input").attr("checked","true");
							}
						}
					});
					if(elem.parents('.multidropdown_wrapper').find(".customDrop ul li").length == elem.parents('.multidropdown_wrapper').find(".customDrop ul li.selected").length){
						elem.parents('.multidropdown_wrapper').find(".customDrop .listItemPL.select-allgrid input").attr("checked","true");
						elem.parents('.multidropdown_wrapper').find(".customDrop .listItemPL.select-allgrid").addClass("selected");
					}
				}
				if($(this).parents('.multidropdown_wrapper').find('.listItemPL').length < 10){
					$(this).parents('.multidropdown_wrapper').find('.multi_search_wrapper').hide();
				}
				var dropDownTop = $(this).offset().top + $(this).outerHeight(), _this = $(this);
					if(!$(this).parents('.multidropdown_wrapper').hasClass('multiselect-active')){
						$('body').find('.multiselect-active').removeClass('multiselect-active');
						$('body').find('.select-box').css('display','none');
						_this.parents('.multidropdown_wrapper').addClass('multiselect-active');
						_this.parents('.multidropdown_wrapper').find('.customDrop .select_all_new').off("click",_selectAllNew);
						_this.parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew').off("click",_chkAttributekOption);
						_this.parents('.multidropdown_wrapper').find('.customDrop .multi_search_select').off("keyup",_filterSearch);
						_this.parents('.multidropdown_wrapper').find('.customDrop .select_all_new').on("click",_selectAllNew);
						_this.parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew').on("click",_chkAttributekOption);
						_this.parents('.multidropdown_wrapper').find('.customDrop .multi_search_select').on("keyup",_filterSearch);
						var innerHtml = _this.parents('.multidropdown_wrapper').find('.customDrop').clone(true);
						innerHtml.attr("data-attr-name",$(this).prev().attr('name'));
						var allElements =innerHtml.find("li");
					$.each(allElements,function(index,value){
				        	$(value).children().wrap("<a href='javascript:void(0)' tabindex=0 class='focusHolder'></a>");
				        });
						$('.customDropOuter').html('').addClass('dis-none');
						$('.customDropOuter').html(innerHtml);
						$('.customDropOuter').find('.customDrop').removeClass('dis-none');
						$('.customDropOuter').css('top', dropDownTop + "px");
						$('.customDropOuter').css('left', _this.offset().left + "px");
						$('.customDropOuter').removeClass('dis-none');
					} else {
						$('body').find('.multiselect-active').removeClass('multiselect-active');
						$('.customDropOuter').addClass('dis-none');
					}
					$(".customDrop .listItemPL a").on("keydown",_keyBoardMultiSelectTableTraverse);
			}else {
				if($(this).parents('.multidropdown_wrapper').find('.listItemPL').length < 10){
					$(this).parents('.multidropdown_wrapper').find('.multi_search_wrapper').hide();
				}
				var innerHtml = $(this).parents('.multidropdown_wrapper').find('.customDrop')
				var allElements =innerHtml.find("li"); 
				if(allElements.find('a').length == 0){
					$.each(allElements,function(index,value){
			        	$(value).children().wrap("<a href='javascript:void(0)' tabindex=0 class='focusHolder'></a>");
			        });
				}
				var dropDownTop = $(this).offset().top + $(this).outerHeight(), _this = $(this);	
				$('.customDrop').addClass('dis-none');
				if($(this).parents('.multidropdown_wrapper').find('.customDrop').hasClass('dis-none')){
					_this.parents('.multidropdown_wrapper').find('.customDrop .select_all').off("click",_selectAllchkOption);
					_this.parents('.multidropdown_wrapper').find('.customDrop .chkOption').off("click",_chkOption);
					_this.parents('.multidropdown_wrapper').find('.customDrop .multi_search_select').off("keyup",_filterSearch);
					_this.parents('.multidropdown_wrapper').find('.customDrop .select_all').on("click",_selectAllchkOption);
					_this.parents('.multidropdown_wrapper').find('.customDrop .chkOption').on("click",_chkOption);
					_this.parents('.multidropdown_wrapper').find('.customDrop .multi_search_select').on("keyup",_filterSearch);
					_this.parents('.multidropdown_wrapper').find('.customDrop').css('top', dropDownTop + "px");
					var drpLeft = _this.offset().left;
					var hasInitScrollbar = window.innerWidth > document.documentElement.clientWidth;
					_this.parents('.multidropdown_wrapper').find('.customDrop').css('left', _this.offset().left + "px");
					_this.parents('.multidropdown_wrapper').find('.customDrop').removeClass('dis-none');
					var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
					if(_this.parents('.pd-vs-multiselect').length > 0 && _this.parents('.multidropdown_wrapper').find('.customDrop').width() > 200 && !hasInitScrollbar && hasScrollbar){
						drpLeft = drpLeft - 16;
						_this.parents('.multidropdown_wrapper').find('.customDrop').css('left', drpLeft + "px");
					}					
				} 
				else{
					$('.customDrop').addClass('dis-none');
				}
				
				$(".customDrop .listItemPL a").on("keydown",_keyBoardMultiSelectPageTraverse);
			}
		}
	},
	_keyBoardMultiSelectTableTraverse = function(e){

		var hasFocus = $(".customDrop .listItemPL a").is(":focus");
    	var divAttrName = $(this).parents(".customDrop").attr("data-attr-name");
		if (e.keyCode == 13 && hasFocus == true) {
			if(!$(this).find("input:checkbox").is(':checked')){
				$(this).find("input:checkbox").attr('checked',true).trigger('click').attr('checked',true);
			}else{
				$(this).find("input:checkbox").attr('checked',false).trigger('click').attr('checked',false);
			}
	    				    	
	    }
	    else if(e.keyCode == 9  &&  $(this).parent().is(':last-child')){
		    	
		    		$("input[name='" + divAttrName + "']").parents(".multiselect-active").find(".selected_val_Label").focus();
		    		$(this).parents(".customDrop").hide();
		    		$(this).closest(".multidropdown_wrapper").removeClass("multiselect-active");  		
		    		$('td').focus();
		    	
	    	
	    }

	    else if( e.shiftKey && e.keyCode == 9  &&  $(this).parent().is(':first-child')){
	    	setTimeout (function(){
	    		$(".customDrop").addClass("dis-none");
	    	},100);
	    	$("input[name='" + divAttrName + "']").parents(".multiselect-active").find(".selected_val_Label").focus();
	    	$(".multidropdown_wrapper").removeClass("multiselect-active");
	    }
	    else if(e.keyCode == 16  &&  $(this).parent().is(':last-child')){
	    	$(this).parent().prev().find("a").focus();
	    }
	
	},
	_keyBoardMultiSelectPageTraverse = function(e){
		e.stopImmediatePropagation();
		var hasFocus = $(".customDrop .listItemPL a").is(":focus");
		if (e.keyCode == 13 && hasFocus == true) {
			if(!$(this).find("input:checkbox").is(':checked')){
				$(this).find("input:checkbox").attr('checked',true).trigger('click').attr('checked',true);
			}else{
				$(this).find("input:checkbox").attr('checked',false).trigger('click').attr('checked',false);
			}
	    				    	
	    }
		
		else if(e.keyCode == 9  && $(this).parent().is(':last-child')){
			 $(this).parents(".customDrop").addClass("dis-none");
		 }
		 else if(e.keyCode == 16  &&  $(this).parent().is(':last-child')){
		    	$(this).parent().prev().find("a").focus();
		    }

			$(".selected_val_Label").on("focus",_keyboardMultiSelectBlur);
			$("select").on("focus",_keyboardMultiSelectBlur);
			$("input").on("focus",_keyboardMultiSelectBlur);
			
	},
	_chkAttributekOption = function(){
		if($('.multiselect-active').find('.selected_val_Label').val() == "Select" || $('.multiselect-active').find('.selected_val_Label').val() == "Please select a value"){
			$('.multiselect-active').find('.selected_val_Label').val("");
			$('.multiselect-active').find('.selected_val_list').val(""); 
		}
		if($('.multiselect-active').find('.selected_val_list').val() != undefined && $('.multiselect-active').find('.selected_val_list').val().toLowerCase() == "mixed values"){
			$('.multiselect-active').find('.selected_val').val('');
			$('.multiselect-active').find('.selected_val_Label').val('');
			$('.multiselect-active').find('.selected_val_list').val("");
		}
		var chkVal = $('.multiselect-active').find('.selected_val').val(),
		chkLabel = $('.multiselect-active').find('.selected_val_list').val(),
		_this = $(this), 
		currValue = $(this).val(),
		currLabel = $(this).parent().text();
	
		if(_this.is(':checked')){
			_this.parents("li").addClass("selected");
			$('.multiselect-active').find("input[value='" + currValue + "']").prop('checked', true);
			$('.multiselect-active').find("input[value='" + currValue + "']").parents("li").addClass("selected");
			if(chkVal == ''){
				$('.multiselect-active').find('.selected_val').val(currValue);
				$('.multiselect-active').find('.selected_val_Label').val(currLabel);
				$('.multiselect-active').find('.selected_val_list').val(currLabel);
			} else {
				var selValue = chkVal+','+currValue;
				var selLabel = chkLabel+','+currLabel;
				$('.multiselect-active').find('.selected_val').val(selValue);
				var selectedOptions = _this.parents('ul').find("li.selected").length;
				if(selectedOptions > 3){
					$('.multiselect-active').find('.selected_val_Label').val(selectedOptions+ " selected");
				} else {
					$('.multiselect-active').find('.selected_val_Label').val(selLabel);
				}
				$('.multiselect-active').find('.selected_val_list').val(selLabel);
			}
		} else{
			_this.parents("li").removeClass("selected");
			$('.multiselect-active').find("input[value='" + currValue + "']").prop('checked', false);
			$('.multiselect-active').find("input[value='" + currValue + "']").parents("li").removeClass("selected");
			if($('.multiselect-active').find('.select_all_new').is(':checked')){
				var selValue = '';
				var selLabel = '';
				$.each($('.multiselect-active').find('.customDrop .chkOptionNew:checked'), function(i, value){
					if(i==0){
						selValue = selValue+$(this).val();
						selLabel = selLabel+$(this).parent().text();
					} else {
						selValue = selValue+','+$(this).val();
						selLabel = selLabel+','+$(this).parent().text();
					}
				});
				selValue = selValue.trim();
				selLabel = selLabel.trim();
				$('.multiselect-active').find('.selected_val').val(selValue);
				var selectedOptions = _this.parents('ul').find("li.selected").length;
				if(selectedOptions > 3){
					$('.multiselect-active').find('.selected_val_Label').val(selectedOptions+ " selected");
				} else {
					$('.multiselect-active').find('.selected_val_Label').val(selLabel);
				}
				if(selLabel == ""){
					$('.multiselect-active').find('.selected_val').val("");
					if($('body').find('#vendorAttributesForm').length > 0){
						$('.multiselect-active').find('.selected_val_Label').val("Please select a value");
						$('.multiselect-active').find('.selected_val_list').val("Please select a value");
					} else {
						$('.multiselect-active').find('.selected_val_Label').val("Select");
						$('.multiselect-active').find('.selected_val_list').val("Select");
					}
				} else {
					$('.multiselect-active').find('.selected_val_list').val(selLabel);
				}
			} else{
				if($('.multiselect-active').find('.customDrop .chkOptionNew:checked').length == 0){
					$('.multiselect-active').find('.selected_val').val("");
					if($('body').find('#vendorAttributesForm').length > 0){
						$('.multiselect-active').find('.selected_val_Label').val("Please select a value");
						$('.multiselect-active').find('.selected_val_list').val("Please select a value");
					} else {
						$('.multiselect-active').find('.selected_val_Label').val("Select");
						$('.multiselect-active').find('.selected_val_list').val("Select");
					}
				} else{
					var upValue = ','+currValue, 
						upValue1 = currValue+',',
						updatedVal="",
						upLabel = ','+currLabel, 
						upLabel1 = currLabel+',',
						updatedLabel="";
					if (chkVal.toLowerCase().indexOf(upValue.toLowerCase()) != -1){
						updatedVal = chkVal.replace(upValue,'');
						updatedLabel = chkLabel.replace(upLabel,'');
					} else if(chkVal.toLowerCase().indexOf(upValue1.toLowerCase()) != -1){
						updatedVal = chkVal.replace(upValue1,'');
						updatedLabel = chkLabel.replace(upLabel1,'');
					} else{
						updatedVal = chkVal.replace(currValue,'');
						updatedLabel = chkLabel.replace(currLabel,'');
					}
					updatedVal = updatedVal.trim();
					updatedLabel = updatedLabel.trim();
					$('.multiselect-active').find('.selected_val').val(updatedVal);
					var selectedOptions = _this.parents('ul').find("li.selected").length;
					if(selectedOptions > 3){
						$('.multiselect-active').find('.selected_val_Label').val(selectedOptions+ " selected");
					} else {
						$('.multiselect-active').find('.selected_val_Label').val(updatedLabel);
					}
					$('.multiselect-active').find('.selected_val_list').val(updatedLabel);
				}
			}
		}
		if(_this.parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew:checked').length == _this.parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew').length){
			_this.parents('.multidropdown_wrapper').find('.select_all_new').attr('checked', true);
			_this.parents('.multidropdown_wrapper').find('.select_all_new').parents(".listItemPL").addClass("selected");
		} else {
			_this.parents('.multidropdown_wrapper').find('.select_all_new').attr('checked', false);
			_this.parents('.multidropdown_wrapper').find('.select_all_new').parents(".listItemPL").removeClass("selected");
		}
		if($('.multiselect-active').find('.customDrop .chkOptionNew:checked').length == $('.multiselect-active').find('.customDrop .chkOptionNew').length){
			$('.multiselect-active').find('.select_all_new').attr('checked', true);
			//$('.multiselect-active').find('.selected_val_Label').val("All Selected");
			$('.multiselect-active').find('.select_all_new').parents(".listItemPL").addClass("selected");
		} else {
			$('.multiselect-active').find('.select_all_new').attr('checked', false);
			$('.multiselect-active').find('.select_all_new').parents(".listItemPL").removeClass("selected");
		}
		if(_this.parents('.multidropdown_wrapper').find('.multi_search_wrapper').is(':visible')  && _this.parents('.multidropdown_wrapper').find('ul li.filtered').length > 0){
			if(_this.parents('.multidropdown_wrapper').find('.customDrop ul li.filtered .chkOptionNew:checked').length == _this.parents('.multidropdown_wrapper').find('ul li.filtered').length){
				_this.parents('.multidropdown_wrapper').find('.select_all_new').attr('checked', true);
				_this.parents('.multidropdown_wrapper').find('.select_all_new').parents(".listItemPL").addClass("selected");
			}
		}
		$('.multiselect-active').parents('tr').addClass('data-changed');
		if(location.pathname.split('/')[2] == "vendorGridEditViewAttributeList" || location.pathname.split('/')[2] == "fetchGridEditViewAttributeList"){
			Kjs.gridEditView.gridEditViewPanel.handleForMultiSelect.call(this);
		}else if(location.pathname.split('/')[2] == "merchantAttributePage" || location.pathname.split('/')[1] =="maintenance"){
			Kjs.merchantAttributes.skuAttributesPanel.handleForMultiSelect.call(this);
		}
	},
	_chkOption = function(){
		if($(this).parents('.multidropdown_wrapper').find('.selected_val_list').val() == "Please select the value" || $(this).parents('.multidropdown_wrapper').find('.selected_val_list').val() == "Select"){
			$(this).parents('.multidropdown_wrapper').find('.selected_val_Label').val(""); 
			$(this).parents('.multidropdown_wrapper').find('.selected_val_list').val("");
		}
		if($(this).parents('.multidropdown_wrapper').find('.selected_val_list').val().toLowerCase() == "mixed value"){
			$(this).parents('.multidropdown_wrapper').find('.selected_val').val('');
			$(this).parents('.multidropdown_wrapper').find('.selected_val_Label').val('');
			$(this).parents('.multidropdown_wrapper').find('.selected_val_list').val('');
		}
		var chkVal = $(this).parents('.multidropdown_wrapper').find('.selected_val').val(),
			chkLabel = $(this).parents('.multidropdown_wrapper').find('.selected_val_list').val(),
			_this = $(this), 
			currValue = $(this).val(),
			currLabel = $(this).parent().text();
			var attrName = _this.parents('.multidropdown_wrapper').find('.selected_val').attr("name");
		if(_this.is(':checked')){
			_this.parents("li").addClass("selected");
			if(chkVal == ''){
				_this.parents('.multidropdown_wrapper').find('.selected_val').val(currValue);
				_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(currLabel);
				_this.parents('.multidropdown_wrapper').find('.selected_val_list').val(currLabel);
			} else {
				if(attrName=="pdNrfSize"){
					if(selValue == ""){
					 var selValue = currValue;
					 var selLabel = currLabel;
				  }else{
					  var selValue = chkVal+'~'+currValue;
					  var selLabel = chkLabel+'~'+currLabel;
				  }
				}else{
					var selValue = chkVal+','+currValue;
					var selLabel = chkLabel+','+currLabel;
				}
				
				_this.parents('.multidropdown_wrapper').find('.selected_val').val(selValue);
				var selectedOptions = _this.parents('.customDrop').find("ul li.selected").length;
				if(selectedOptions > 3){
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(selectedOptions+ " selected");
				} else {
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(selLabel);
				}
				_this.parents('.multidropdown_wrapper').find('.selected_val_list').val(selLabel);
			}
		} else{
			_this.parents("li").removeClass("selected");
			if(_this.parents('.multidropdown_wrapper').find('.select_all').is(':checked')){
				var selValue = '';
				var selLabel = '';
				$.each(_this.parents('.multidropdown_wrapper').find('.customDrop .chkOption:checked'), function(i, value){
					if(i==0){
						selValue = selValue+$(this).val();
						selLabel = selLabel+$(this).parent().text();
					} else {
						if(attrName=="pdNrfSize"){
							if(selValue==""){
								selValue = $(this).val();
								selLabel = $(this).parent().text();	
							}else{
								selValue = selValue+'~'+$(this).val();
								selLabel = selLabel+'~'+$(this).parent().text();
							}
							
							
						}else{
							selValue = selValue+','+$(this).val();
							selLabel = selLabel+','+$(this).parent().text();

						}
					}
				});
				selValue = selValue.trim();
				selLabel = selLabel.trim();
				_this.parents('.multidropdown_wrapper').find('.selected_val').val(selValue);
				var selectedOptions = _this.parents('.customDrop').find("ul li.selected").length;
				if(selectedOptions > 3){
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(selectedOptions+ " selected");
				} else {
					_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(selLabel);
				}
				_this.parents('.multidropdown_wrapper').find('.selected_val_list').val(selLabel);
				if(selLabel == ""){
					_this.parents('.multidropdown_wrapper').find('.selected_val').val("");
					if(_this.parents('#verifyStyleContainer').length > 0){
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label, .selected_val_list').val("Select");
					} else{
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label, .selected_val_list').val("Please select the value");
					}
				}
			} else{
				if(_this.parents('.multidropdown_wrapper').find('.customDrop .chkOption:checked').length == 0){
					_this.parents('.multidropdown_wrapper').find('.selected_val').val("");
					if(_this.parents('#verifyStyleContainer').length > 0){
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val("Select");
					} else{
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val("Please select the value");
					}
				} else{
					if(attrName=="pdNrfSize"){
						var upValue = '~'+currValue, 
						upValue1 = currValue+'~',
						updatedVal="",
						upLabel = '~'+currLabel, 
						upLabel1 = currLabel+'~',
						updatedLabel="";
					}else{
						var upValue = ','+currValue, 
						upValue1 = currValue+',',
						updatedVal="",
						upLabel = ','+currLabel, 
						upLabel1 = currLabel+',',
						updatedLabel="";
					}
					
					if(chkVal.toLowerCase().indexOf(upValue.toLowerCase()) != -1){
						updatedVal = chkVal.replace(upValue,'');
						updatedLabel = chkLabel.replace(upLabel,'');
					} else if(chkVal.toLowerCase().indexOf(upValue1.toLowerCase()) != -1){
						updatedVal = chkVal.replace(upValue1,'');
						updatedLabel = chkLabel.replace(upLabel1,'');
					} else {
						updatedVal = chkVal.replace(currValue,'');
						updatedLabel = chkLabel.replace(currLabel,'');
					}
					updatedVal = updatedVal.trim();
					updatedLabel = updatedLabel.trim();
					_this.parents('.multidropdown_wrapper').find('.selected_val').val(updatedVal);
					var selectedOptions = _this.parents('.customDrop').find("ul li.selected").length;
					if(selectedOptions > 3){
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(selectedOptions+ " selected");
					} else {
						_this.parents('.multidropdown_wrapper').find('.selected_val_Label').val(updatedLabel);
					}
					_this.parents('.multidropdown_wrapper').find('.selected_val_list').val(updatedLabel);
				}
			}
		}
		if(_this.parents('.multidropdown_wrapper').find('.customDrop .chkOption:checked').length == _this.parents('.multidropdown_wrapper').find('.customDrop .chkOption').length){
			_this.parents('.multidropdown_wrapper').find('.select_all').attr('checked', true);
			_this.parents('.multidropdown_wrapper').find('.select_all').parents(".listItemPL").addClass("selected");
		} else {
			_this.parents('.multidropdown_wrapper').find('.select_all').attr('checked', false);
			_this.parents('.multidropdown_wrapper').find('.select_all').parents(".listItemPL").removeClass("selected");
		}
		if(_this.parents('.customDrop').find('.multi_search_wrapper').is(':visible')  && _this.parents('.customDrop').find('li.filtered').length > 0){
			if(_this.parents('.customDrop').find('ul li.filtered').length == _this.parents('.multidropdown_wrapper').find('ul li.filtered .chkOption:checked').length){
				_this.parents('.multidropdown_wrapper').find('.select_all').attr('checked', true);
				_this.parents('.multidropdown_wrapper').find('.select_all').parents(".listItemPL").addClass("selected");
			}
		}
		_this.parents('tr').addClass('data-changed');
		if(_this.parents('.pd_style_table').length > 0){
			Kjs.createMerchantGroup.verifyStylePanel.handleForMultiSelect.call(this);
		}
	},
	_keyboardMultiSelectOpen = function(e){
		if(e.keyCode == 13){
	    	$(this).trigger("click");
	    	var attrName = $(this).parent().find('input[type="hidden"]').attr('name');
	    }
		setTimeout(function(){ $(".customDrop[data-attr-name='"+attrName+"'] .listItemPL:first a").focus();},100);
	},
	_filterSearch = function(){
	    var searchText = $(this).val(),_this = $(this);
	    _this.parents('.customDrop').find('ul .listItemPL.filtered').removeClass('filtered');
	    _this.parents('.customDrop').find('.not_found').remove();
	    _this.parents('.customDrop').find('ul .listItemPL').not('.select-allgrid').each(function(i,k){
			if($(this).find('label').text().toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
				$(this).show();
				$(this).addClass('filtered');
			}else{
				$(this).hide();
				$(this).removeClass('filtered');
			}
		});
	    if(_this.parents('.multidropdown_wrapper').hasClass('customDropOuter')){
	    	$('.multiselect-active').find('.customDrop').find('ul .listItemPL.filtered').removeClass('filtered');
	    	$('.multiselect-active').find('.customDrop').find('ul .listItemPL').not('.select-allgrid').each(function(i,k){
				if($(this).find('label').text().toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
					$(this).show();
					$(this).addClass('filtered');
				}else{
					$(this).hide();
					$(this).removeClass('filtered');
				}
			});
	    }
		if(_this.parents('.customDrop').find('ul .filtered').length == 0){
			_this.parents('.customDrop').append('<div class="not_found">No results found</div>');
			_this.parents('.customDrop').find('.listItemPL.select-allgrid').hide();
		} else{
			_this.parents('.customDrop').find('.listItemPL.select-allgrid').show();
		}
		if(searchText != ""){
			if(_this.parents('.customDrop').find('.multi_search_close').length == 0){
				_this.parents('.customDrop').find('.multi_search_wrapper').append("<span class='multi_search_close'>x</span>");
				$(".multi_search_close").off("click",_clearFilter);
				$(".multi_search_close").on("click",_clearFilter);
			}
		} else {
			_this.parents('.customDrop').find('.multi_search_close').remove();
		}
		if($(this).parents('.multidropdown_wrapper').find('.chkOptionNew').length > 0){
			var chkLength = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew:checked').length;
			var totalLen = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew').length;
			var chkFilteredLen = _this.parents('.multidropdown_wrapper').find('.customDrop .listItemPL.filtered .chkOptionNew:checked').length;
			var totalFilteredLen = _this.parents('.multidropdown_wrapper').find('.customDrop .listItemPL.filtered .chkOptionNew').length;
			var selectAll = "select_all_new";
		} else {
			var chkLength = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOption:checked').length;
			var totalLen = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOption').length;
			var chkFilteredLen = _this.parents('.multidropdown_wrapper').find('.customDrop .listItemPL.filtered .chkOption:checked').length;
			var totalFilteredLen = _this.parents('.multidropdown_wrapper').find('.customDrop .listItemPL.filtered .chkOption').length;
			var selectAll = "select_all";
		}
		if(chkLength == totalLen || chkFilteredLen == totalFilteredLen){
			_this.parents('.multidropdown_wrapper').find('.'+selectAll).attr('checked', true);
			_this.parents('.multidropdown_wrapper').find('.'+selectAll).parents(".listItemPL").addClass("selected");
		} else {
			_this.parents('.multidropdown_wrapper').find('.'+selectAll).attr('checked', false);
			_this.parents('.multidropdown_wrapper').find('.'+selectAll).parents(".listItemPL").removeClass("selected");
		}
	},
	_clearFilter = function(){
		$(this).parents('.customDrop').find('ul .listItemPL.filtered').removeClass('filtered');
		$(this).parents('.customDrop').find(".multi_search_select").val("");
		$(this).parents('.customDrop').find('.listItemPL.select-allgrid').show();
		$(this).parents('.customDrop').find(".listItemPL").show();
		if($(this).parents('.multidropdown_wrapper').hasClass('customDropOuter')){
			$('.multiselect-active').find('.customDrop').find('ul .listItemPL.filtered').removeClass('filtered');
		}
		if($(this).parents('.multidropdown_wrapper').find('.chkOptionNew').length > 0){
			var chkLength = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew:checked').length;
			var totalLen = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOptionNew').length;
			var selectAll = "select_all_new";
		} else {
			var chkLength = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOption:checked').length;
			var totalLen = $(this).parents('.multidropdown_wrapper').find('.customDrop .chkOption').length;
			var selectAll = "select_all";
		}
		if(chkLength == totalLen){
			$(this).parents('.multidropdown_wrapper').find('.'+selectAll).attr('checked', true);
			$(this).parents('.multidropdown_wrapper').find('.'+selectAll).parents(".listItemPL").addClass("selected");
		} else {
			$(this).parents('.multidropdown_wrapper').find('.'+selectAll).attr('checked', false);
			$(this).parents('.multidropdown_wrapper').find('.'+selectAll).parents(".listItemPL").removeClass("selected");
		}
		$(this).parents('.customDrop').find('.multi_search_close, .not_found').remove();
	},
	_addDefault = function(className, defValues){
		var label = "";
		var values = "";
		$('.multidropdown_wrapper.'+className).find(".customDrop ul li").each(function(){
			for(i=0; i< defValues.length; i++){
				if($(this).find("input").val() == defValues[i] && !($(this).find("input").hasClass("select_all") || $(this).find("input").hasClass("select_all_new"))){
					$(this).addClass("selected");
					label = label+","+$(this).find("label").text();
					values = values+","+defValues[i];
					$(this).find("input").attr("checked","true");
				}
			}
		});
		label = label.trim();
		values = values.trim();
		var selectedLen = $('.multidropdown_wrapper.'+className).find(".customDrop ul li.selected").length;
		$(".customDropHeader input[name='"+className+"']").val(values.substr(1,values.length));
		if($('.multidropdown_wrapper.'+className).find(".customDrop ul li").length == $('.multidropdown_wrapper.'+className).find(".customDrop ul li.selected").length){
			$(".customDropHeader input[name='"+className+"']").next().val(label.substr(1,label.length));
			$('.multidropdown_wrapper.'+className+' .customDrop').find('.listItemPL.select-allgrid input').attr("checked","true");
			$('.multidropdown_wrapper.'+className+' .customDrop').find('.listItemPL.select-allgrid').addClass("selected");
			$(".customDropHeader input[name='"+className+"']").parent().find('.selected_val_list').val(label.substr(1,label.length));
		}else{
			$(".customDropHeader input[name='"+className+"']").next().val(label.substr(1,label.length));
			$(".customDropHeader input[name='"+className+"']").parent().find('.selected_val_list').val(label.substr(1,label.length));
		}
		if(selectedLen > 3){
			$(".customDropHeader input[name='"+className+"']").next().val(selectedLen+" selected");
		}
	};
		
	return{
		activateDropDown : _activateDropDown,
		deactivateDropDown : _deactivateDropDown,
		addDefault : _addDefault
	}
});

$module('singleSearchAttributeDropDown', function(log, env, module, Kjs) {
	var _activateAttributeDropDown = function(){
		$(".singleAttributeDesc").on("click", _openSearchDropDown);	
		$(".singleAttributeDesc").on("keyup",_keyboardSingleSelectOpen);
	},
	_deActivateAttributeDropDown = function(){
		$(".singleAttributeDesc").off("click", _openSearchDropDown);
		$(".singleAttributeDesc").off("keyup",_keyboardSingleSelectOpen);
	},
	_keyboardSingleSelectOpen = function(e){
		if(e.keyCode == 13){
	    	$(this).trigger("click");
	    	var attrName = $(this).attr('data-name');
	    }
		setTimeout(function(){ $(".singleDropdown_outer ul[data-name='"+attrName+"'] li:first a").focus();},100);
	},
	_filterClear = function(){
		$(this).parents('.singleSelectWrapper').find(".singleSelectInput").val(""); 
		$(this).parents('.singleSelectWrapper').find("ul li").show();
		$(this).parents('.singleSelectWrapper').find(".closeSearch, .notFound").remove();
	},
	_openSearchDropDown = function(){	

		$(".customDrop").addClass('dis-none');
		$('body').find('.multiselect-active').removeClass('multiselect-active');
		var _this = $(this);
		if(_this.hasClass('readonly')) {
			return;
		}
		if(!_this.hasClass("singleDrpActive")) {
			$('body').find('.singleAttributeDesc:visible').removeClass('singleDrpActive');
			$('body').find(".singleSelectWrapper:visible").hide();
		}
		var dropDownTop = (_this.offset().top + _this.outerHeight()) + 2, dropDownLeft = _this.offset().left;
		var inputWidth = _this.outerWidth();
		var selectWrapperElem = _this.closest('.singleSelectDropDownWrapper').find(".singleSelectWrapper");
		if(_this.parents('.singleSelectDropDownWrapper').find('.closeSearch').length > 0){
			_this.parents('.singleSelectDropDownWrapper').find('.closeSearch').trigger('click');
		}
		if(_this.hasClass("singleDrpActive")){
			_this.removeClass("singleDrpActive");
			$('.singleDropdown_outer').html('');
			selectWrapperElem.hide();
		}else{
			_this.addClass("singleDrpActive");
			_this.attr('data-prev-value', _this.next().val());
			if(_this.parents('.sku_attribute_tab').length > 0 && _this.parents('.singleSelectDropDownWrapper').find(".singleSelectList").html().trim() == ""){
				var attrKey = _this.attr('data-name');
				_this.parents('.singleSelectDropDownWrapper').find(".singleSelectList").html(Kjs.merchantAttributes.skuAttributesPanel.tableRowData[1][attrKey]);
				if(attrKey == "PRD_LCYC_STG_CDE"){
					_this.parents(".singleSelectDropDownWrapper").find("ul .singleSelectListItem").each(function() {
						if($(this).attr('value') == "3"){
							$(this).parent().remove();
						}
					});
				}
			} else if(_this.parents('.cc_attribute_tab').length > 0 && _this.parents('.singleSelectDropDownWrapper').find(".singleSelectList").html().trim() == ""){
				var attrKey = _this.attr('data-name');
				_this.parents('.singleSelectDropDownWrapper').find(".singleSelectList").html(Kjs.merchantAttributes.customerChoiceAttributesPanel.ccRowData[1][attrKey]);
			} else if($("#gridEditInnerContainer .gridEdit-container").length >0){
				if ($(this).parent().parent().find("ul.singleSelectList").html()!=undefined && $(this).parent().parent().find("ul.singleSelectList").html()!=null && $(this).parent().parent().find("ul.singleSelectList").html().trim()=="") {
					var Index1 = $(this).parents("tr.attribute-row").attr("data-row").split("_")[1];
					var attbuteName1 = $(this).attr("data-name");
					if (Index1!=undefined && attbuteName1!=undefined && Kjs.GridDataSingle[Index1][attbuteName1]) {
						$(this).parent().parent().find("ul.singleSelectList").html(Kjs.GridDataSingle[Index1][attbuteName1]);
					}
				}
			}
			_this.parents('.singleSelectDropDownWrapper').find('.singleSelectWrapper .singleSelectInput').off("keyup",_filterSearchDropDown);
			_this.parents('.singleSelectDropDownWrapper').find('.singleSelectWrapper .singleSelectListItem').off("click",_selectedValues);
			_this.parents('.singleSelectDropDownWrapper').find('.singleSelectWrapper .singleSelectInput').on("keyup",_filterSearchDropDown);
			_this.parents('.singleSelectDropDownWrapper').find('.singleSelectWrapper .singleSelectListItem').on("click",_selectedValues);
			if (_this.closest('.singleSelectDropDownWrapper').find("ul li").length > 8) {
				_this.closest('.singleSelectDropDownWrapper').find(".singleSelectInputWrapper").show();
			}else{
				_this.closest('.singleSelectDropDownWrapper').find(".singleSelectInputWrapper").hide();
			}
			var notifyHeight = 0;
			if ($(".banner-containner-header").is(':visible')) {
				notifyHeight = $(".banner-containner-header").outerHeight();
			}
			var attrCode = _this.siblings('.singleAttributeCode').val();
			_this.closest('.singleSelectDropDownWrapper').find('li.selected').removeClass('selected');
			if (attrCode !=undefined && attrCode!=null && attrCode.indexOf('"') > -1) {
				_this.closest('.singleSelectDropDownWrapper').find("li a[value='"+attrCode+"']").closest('li').addClass('selected');
			}else{
				_this.closest('.singleSelectDropDownWrapper').find('li a[value="'+attrCode+'"]').closest('li').addClass('selected');
			}
			if(_this.hasClass('dropBelow')) {
				selectWrapperElem.css({'position': 'absolute', 'z-index': '999', 'min-width': inputWidth + 'px'});
				selectWrapperElem.removeClass('dis-none').show();
			}else{
				var innerHtml = selectWrapperElem.clone(true);
				$('.singleDropdown_outer').html(innerHtml);
				$('.singleDropdown_outer').css({"top":dropDownTop + "px","left":dropDownLeft + "px"});
				$('.singleDropdown_outer').find('.singleSelectWrapper').css('min-width', inputWidth + 'px').show();
			}
			/*var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
			if(!hasInitScrollbar && hasScrollbar){
				$('.singleDropdown_outer').css({"left":dropDownLeft -14 + "px"});
			}*/
		} 
		$(".singleDropdown_outer ul li a").on("keydown",_keyBoardSingleSelectPageTraverse);
	},
	_keyBoardSingleSelectPageTraverse = function(e){
		var hasFocus = $(".singleSelectList li a").is(":focus");
		var divAttrName = $(this).parents("ul").attr("data-name");
		if(e.keyCode == 13 && hasFocus == true) {
			var _this = $(".singleAttributeDesc.singleDrpActive");
			$(this).trigger('click');
			setTimeout (function(){
				_this.focus();
			},100);
		} else if(e.keyCode == 9  &&  $(this).parent().is(':last-child')){   	
			$(".singleAttributeDesc.singleDrpActive").focus();
			$(".singleDropdown_outer").html('');
			$('body').find('.singleDrpActive').removeClass('singleDrpActive');
		} else if( e.shiftKey && e.keyCode == 9 && $(this).parent().is(':first-child')){
			setTimeout (function(){
				$(".singleDropdown_outer").html('');
			},100);
			$(".singleAttributeDesc.singleDrpActive").focus();
			$('body').find('.singleDrpActive').removeClass('singleDrpActive');
		} else if(e.keyCode == 16  &&  $(this).parent().is(':last-child')){
			$(this).parent().prev().find("a").focus();
		}
		$(".selected_val_Label").on("focus",_keyboardSingleSelectBlur);
		$("input").on("focus",_keyboardSingleSelectBlur);
	},
	_keyboardSingleSelectBlur = function(){
		if(!$(this).hasClass('attribute_search_input')){
			$(".singleDropdown_outer").html('');
			$('body').find('.singleDrpActive').removeClass('singleDrpActive');
			$('body').find('.singleSelectWrapper:visible').hide();
			$(".customDrop").addClass('dis-none');
		}	
	},
	_selectedValues = function(e){
        e.preventDefault();
		var _this = $(this);
        var attrCode = _this.attr('value'), attrDesc = _this.text();
        if($('.singleAttributeDesc.singleDrpActive').parents('.singleSelectDropDownWrapper').find(".singleAttributeCode.download-popup-dropdown")) {
            $('.singleAttributeDesc.singleDrpActive').parents('.singleSelectDropDownWrapper').find(".singleAttributeCode").val(attrCode).trigger('change');
        } else {
            $('.singleAttributeDesc.singleDrpActive').parents('.singleSelectDropDownWrapper').find(".singleAttributeCode").val(attrCode);
        }
        $('.singleAttributeDesc.singleDrpActive').parents('.singleSelectDropDownWrapper').find(".singleAttributeDesc").val(attrDesc);
		var thisTarget = $(".singleDrpActive");
		Kjs._(function(){
			$('body').find('.singleDrpActive').removeClass('singleDrpActive');
			$('body').find('.singleSelectWrapper:visible').hide();
			$('.singleDropdown_outer').html('');
		},40);
		setTimeout(function(){
		if (location.pathname=="/maintenance/v1/merchantAttributePage") {
			var attrName = _this.parents(".singleSelectList").attr("data-name");
			if (merchantAttributesJson !=undefined && merchantAttributesJson.responseData!=undefined && merchantAttributesJson.responseData.vendorStyleDetails!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.styleStratergy!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.styleStratergy=="Unique" && ( ($("#skuAttributesContainer .merchant_attribute_table #sku_table_container .rightHeadScrollContainer").length>0 && $("#skuAttributesContainer .merchant_attribute_table #sku_table_container .rightHeadScrollContainer").is(":visible") && attrName!=undefined && attrName=="NRF Size Code") || (attrName!=undefined && attrName=="NRF_CLOR_CDE") ) ) {
				if (attrDesc.indexOf("(") >-1) {
					attrDesc = attrDesc.split("(")[0];
				}
				if (attrDesc.indexOf("-") >-1) {
					attrDesc = attrDesc.split("-")[0];
				}
				if (attrDesc.toLowerCase()=="assorted") {
					thisTarget.parents(".singleSelectDropDownWrapper").addClass("hasError");
				}
			}
		}
	},100);
	},
	_filterSearchDropDown = function(){
		var searchText = $(this).val(),_this = $(this);
	    _this.parents('.singleSelectWrapper').find('.notFound').remove();
	    _this.parents(".singleSelectWrapper").find(".singleSelectListItem").each(function(i,k){
			if($(this).text().toLowerCase().indexOf(searchText.toLowerCase()) >= 0 && !$(this).hasClass("filteredOut")){
				$(this).closest('li').show();
				$(this).closest('li').addClass('filtered');
			}else{
				$(this).closest('li').hide();
				$(this).closest('li').removeClass('filtered');
			}
		});
		if(_this.parents('.singleSelectWrapper').find('ul .filtered').length == 0){
			_this.parents('.singleSelectWrapper').append('<div class="notFound">No results found</div>');
		}
		if(searchText != ""){
			if(_this.parents('.singleSelectWrapper').find('.closeSearch').length == 0){
				_this.parents('.singleSelectWrapper').find('.singleSelectInputWrapper').append("<span class='closeSearch'></span>");
				$(".closeSearch ").off("click",_filterClear);
				$(".closeSearch ").on("click",_filterClear);	
			}
		} else {
			_this.parents('.singleSelectWrapper').find('.closeSearch').remove();
		}
	};
	return {
		activateAttributeDropDown : _activateAttributeDropDown,
		deActivateAttributeDropDown : _deActivateAttributeDropDown
	}
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

_put = function(url, data, successCallBack, errorCallBack, transactionID){
		
		if(transactionID == undefined || transactionID == null){
			transactionID = _randomString();
		}

		$.ajax({
			url : url,
			type : 'PUT',
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
	_showLoader = function(elem){
		var loaderContent = $('<div/>',{'class':'loaderContainer'});
		 var updateLoader = $('<div/>',{'class':'loaderInnerWrapper'});
		 updateLoader.append('<div class="loaderImg"></div>');
		 loaderContent.append(updateLoader);
		 $('.'+elem).append(loaderContent);
		 $('.loaderContainer').show();
	},
	
	_randomString = function() {
		var length = 10;
		var epochTime = Math.floor(Date.now() / 1000)
	    return epochTime+"-"+Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
	},
	
	_hideLoaderonEmptyResponse = function(){
		$(".box-overlay, .box-loading").hide();
		if($box != undefined){
			$box.close();
		}
	},
	_handleGlobalAttributeErrors = function(pageList, data,type,pageName){
		if (pageName != undefined && pageName=="massupdate") {
			if(data != undefined && data.allFailedAttributes != undefined && data.allFailedAttributes != ""){
				var AttributeList = data.allFailedAttributes.split(",");
				$.each(AttributeList,function(key,obj){
					$('#massUpdateContainer').find('[name="'+obj+'"]').parents('td').addClass('hasError');
				});
				if (data.requiredNonKohlsAttribute !=undefined) {
					if (data.requiredNonKohlsAttribute.KOHLS_STYLE  !=undefined && data.requiredNonKohlsAttribute.KOHLS_STYLE!=null && !$.isEmptyObject(data.requiredNonKohlsAttribute.KOHLS_STYLE) && $('#massUpdateContainer').find('.styleMassUpdate').is(":visible")) {
						$('#massUpdateContainer').find('.styleMassUpdate').addClass("hasErrorInside");
						if ($('#massUpdateContainer').find('.styleMassUpdate .error').length==0) {
							$('#massUpdateContainer').find('.styleMassUpdate').append('<span class="error"></span>');
						}
					}
					if (data.requiredNonKohlsAttribute.CUSTOMER_CHOICE  !=undefined && data.requiredNonKohlsAttribute.CUSTOMER_CHOICE!=null && !$.isEmptyObject(data.requiredNonKohlsAttribute.CUSTOMER_CHOICE) && $('#massUpdateContainer').find('.customeChoice').is(":visible")) {
						$('#massUpdateContainer').find('.customeChoice').addClass("hasErrorInside");
						if ($('#massUpdateContainer').find('.customeChoice .error').length==0) {
							$('#massUpdateContainer').find('.customeChoice').append('<span class="error"></span>');
						}
						
					}
					if (data.requiredNonKohlsAttribute.SKU  !=undefined && data.requiredNonKohlsAttribute.SKU!=null && !$.isEmptyObject(data.requiredNonKohlsAttribute.SKU) && $('#massUpdateContainer').find('.skuMassUpdate').is(":visible")) {
						$('#massUpdateContainer').find('.skuMassUpdate').addClass("hasErrorInside");
						if ($('#massUpdateContainer').find('.skuMassUpdate .error').length==0) {
							$('#massUpdateContainer').find('.skuMassUpdate').append('<span class="error"></span>');
						}
						
					}
					if (data.requiredNonKohlsAttribute.SKU_DIMENSION  !=undefined && data.requiredNonKohlsAttribute.SKU_DIMENSION!=null && !$.isEmptyObject(data.requiredNonKohlsAttribute.SKU_DIMENSION) && $('#massUpdateContainer').find('.dimensionMassUpdate').is(":visible")) {
						$('#massUpdateContainer').find('.dimensionMassUpdate').addClass("hasErrorInside");
						if ($('#massUpdateContainer').find('.dimensionMassUpdate .error').length==0) {
							$('#massUpdateContainer').find('.dimensionMassUpdate').append('<span class="error"></span>');
						}
						
					}
				}
			}		
				
		}else{
			if(data != undefined && pageList != undefined && data.requiredNonKohlsAttribute != undefined){
				for (i=0;i<pageList.length;i++){
					var pageType = pageList[i], errorList = data.requiredNonKohlsAttribute[pageType], parElem,tabElem;
					if(pageType == "CUSTOMER_CHOICE"){
						parElem = $('.customer-choice-container').find('.tablesorter-scroller-table').eq(1), tabElem = "ccAttributesTab";
					} else if(pageType == "SKU"){
						parElem = $('#sku_table_container').find('.tablesorter-scroller-table').eq(1), tabElem = "skuAttributesTab";
						if(parElem.length > 0){
							$('.merchant_sku_attributes').find('.attribute_errMsg').html('');
							var vendorUpcError = "", vendorUpcCountry = "";
							if(data.requiredNonKohlsAttribute.VENDOR_UPC != undefined && !$.isEmptyObject(data.requiredNonKohlsAttribute.VENDOR_UPC)){
								var vendorUpc = data.requiredNonKohlsAttribute.VENDOR_UPC;
								for (upc in vendorUpc){
									for (m=0;m<vendorUpc[upc].length;m++){
										var attrList = "";
										attrList = attrList +"," + vendorUpc[upc][m];
									}
									vendorUpcError = vendorUpcError +", " + "<span title='"+attrList.replace(/^,|,$/g,'').trim()+"'>"+upc+"</span>";
								}
							}
							if(data.requiredNonKohlsAttribute.VENDOR_UPC_COUNTRY != undefined && !$.isEmptyObject(data.requiredNonKohlsAttribute.VENDOR_UPC_COUNTRY)){
								var vendorCountry = data.requiredNonKohlsAttribute.VENDOR_UPC_COUNTRY;
								for (country in vendorCountry){
									for (n=0;n<vendorCountry[country].length;n++){
										var attrList = "";
										attrList = attrList +"," + vendorCountry[country][n];
									}
									vendorUpcCountry = vendorUpcCountry +", " + "<span title='"+attrList.replace(/^,|,$/g,'').trim()+"'>"+country+"</span>";
								}
							}
							if(vendorUpcError != "" || vendorUpcCountry != ""){
								var upcCountryError = "", concatMsg = "";
								vendorUpcError = vendorUpcError.replace(/^,|,$/g,'').trim();
								vendorUpcCountry = vendorUpcCountry.replace(/^,|,$/g,'').trim();
								if(vendorUpcCountry != "" && vendorUpcError!= ""){
									concatMsg = "for vendor UPC "+vendorUpcError + " and" + " for Vendor UPC Country "+vendorUpcCountry;
								} else if(vendorUpcError != ""){
									concatMsg = "for vendor UPC "+vendorUpcError;
								} else if(vendorUpcCountry != ""){
									concatMsg = " for Vendor UPC Country "+vendorUpcCountry;
								}
								$('.merchant_sku_attributes').find('.attribute_errMsg').html("Please enter the required fields "+ concatMsg);
								$('.'+tabElem).addClass("hasErrorInside");
							}
						} else {
							if((data.requiredNonKohlsAttribute.VENDOR_UPC != undefined && !$.isEmptyObject(data.requiredNonKohlsAttribute.VENDOR_UPC)) || (data.requiredNonKohlsAttribute.VENDOR_UPC_COUNTRY != undefined && !$.isEmptyObject(data.requiredNonKohlsAttribute.VENDOR_UPC_COUNTRY))){
								$('.'+tabElem).addClass("hasErrorInside")
							}
						}
					} else if(pageType == "SKU_DIMENSION"){
						parElem = $('.sku-dimension-container').find('.tablesorter-scroller-table').eq(1), tabElem = "skuDimensionsTab";
					} else {
						parElem = $('#styleAttributesFormData'), tabElem = "styleAttributesTab";
					}
					if(parElem.length > 0){
						if(errorList != undefined && !$.isEmptyObject(errorList)){
							if(pageType == "CUSTOMER_CHOICE" || pageType == "SKU" || pageType == "SKU_DIMENSION"){
								for (itemName in errorList){
									for (j=0;j<errorList[itemName].length;j++){
										var tableRow = parElem.find('.row_'+itemName);
										if(tableRow.length > 0 && tableRow.find('input[name="'+errorList[itemName][j]+'"]').length > 0){
											if(tableRow.find('[name="'+errorList[itemName][j]+'"]').val().trim() == ""){
												tableRow.find('[name="'+errorList[itemName][j]+'"]').parents(':eq(1)').addClass('hasError');
												if(!$('.'+tabElem).hasClass("hasErrorInside")){
													$('.'+tabElem).addClass("hasErrorInside");
												}
											}
										}
									}
								}
							} else if(pageName == "singleAttribution" || pageName == "singleMaintenance"){
								for (itemName in errorList){
									for (k=0;k<errorList[itemName].length;k++){
										if(parElem.find('[name="'+errorList[itemName][k]+'"]').length > 0){
											if(parElem.find('[name="'+errorList[itemName][k]+'"]').val().trim() == ""){
												if(pageName == "singleAttribution"){
													parElem.find('[name="'+errorList[itemName][k]+'"]').parents(':eq(1)').addClass('hasError');
												} else {
													parElem.find('[name="'+errorList[itemName][k]+'"]').parents('.input-row').addClass('hasError');
												}
												if(!$('.'+tabElem).hasClass("hasErrorInside")){
													$('.'+tabElem).addClass("hasErrorInside");
												}
											}
										}
									}
								}
							}
						}
					} else {
						if(errorList != undefined && !$.isEmptyObject(errorList)){
							$('.'+tabElem).addClass("hasErrorInside");
						}
					}
				}
				if($(Kjs.merchantAttributes.merchantAttributesPanel.getActiveTabDetails().tab[0]).hasClass('hasErrorInside')){
					$("#attribute_toggle").prop("checked",true);
					Kjs.merchantAttributes.merchantAttributesPanel.attributeToggle();
				}
			}
		}
	};
	
	return{
		post : _post,
		put : _put,
		get : _get,
		showLoader : _showLoader,
		hideLoaderonEmptyResponse : _hideLoaderonEmptyResponse,
		randomString : _randomString,
		postFormSubmit : _postFormSubmit,
		postComplete : _postComplete,
		getComplete : _getComplete,
		handleGlobalAttributeErrors : _handleGlobalAttributeErrors
	}
});
$module('roleBasePermission',function(log, env, module, Kjs){
	var checkPermissions = function(){
		if(Kjs.storage.getData('userOktaDetails') != null && JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData != undefined){
			var permissionsArray = (Kjs.storage.getData('userOktaDetails') == null || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions == undefined || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions == null) ? [] :JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions;
	    	try{
			    if (Kjs.vpJSConstants!=undefined && Kjs.vpJSConstants!=null) {
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
			    }
			}catch(e){
			}
		}
		
	},
	setElements = function(){
		var PERMISSIONS = checkPermissions();
		switch(location.pathname){
			case "/merchandising/VendorStyleListViewPage":
				if(PERMISSIONS!=undefined && PERMISSIONS.MERCHANT_GROUP_MAINTANTANCE!=undefined && !PERMISSIONS.MERCHANT_GROUP_MAINTANTANCE)
					$('.newHeader').find('.list-add-icon').css('visibility','hidden');
			break;
			case "/cp/home" :
				if(PERMISSIONS !=undefined && PERMISSIONS.CREATE_CUSTOM_CPS !=undefined && !PERMISSIONS.CREATE_CUSTOM_CPS)
					$('.add-merchent').css('visibility','hidden');
			default:
				if(Kjs.storage.getData('userOktaDetails') != null && PERMISSIONS !=undefined && PERMISSIONS.SEARCH_FOR_PRODUCTS != undefined &&  !PERMISSIONS.SEARCH_FOR_PRODUCTS){
					$("#nav-products-tab").css('visibility','hidden');
                    $("#nav-products-tab").remove();
					$("#nav-products").remove();
					$("#nav-products").css('visibility','hidden').addClass('fade').removeClass('show');
					$("#nav-guidelines-tab").addClass('active');
					$("#nav-guidelines").addClass('active').addClass('show');
				}
				if(Kjs.storage.getData('userOktaDetails') != null && PERMISSIONS != undefined &&  PERMISSIONS.PRODUCT_MENU != undefined && !PERMISSIONS.PRODUCT_MENU){
					$('.dropdown-toggle').find('a:contains("Product"), a:contains("PRODUCTS"), a:contains("Products"), a:contains("PRODUCT")').closest('li').remove();
				}
			break;
		}
	};
	return {
		checkPermissions : checkPermissions,
		setElements :setElements
	}
});
$module('jsrenderHelpers', function(log, env, module, Kjs) {
	$init(function _$init_jsrenderHelpers($) {
    	try{
			if(Kjs.vpJSConstants == undefined){
				Kjs.load.js(resourceRoot + "/static/js/common/constant_variables.js");
				var jsConstatns = {
					"CREATE_MERCHANT_GROUPS": "Create Merchant Groups",
					"VIEW_STYLES_IN_MERCHANT_GROUPS": "View Styles in Merchant Groups",
					"APPROVE_STYLES_IN_MERCHANT_GROUPS": "Approve Styles in Merchant Groups",
					"PUBLISH_CPS": "Publish CPs",
					"EDIT_MS_ATTRIBUTES": "Edit MS Attributes",
					"EDIT_IP_ATTRIBUTES": "Edit IP Attirbutes",
					"EDIT_DM_ATTRIBUTES": "Edit DM Attributes",
					"EDIT_AND_SUBMIT_VENDOR_ATTRIBUTES": "Edit & Submit Vendor Attributes",
					"TAKE_OWNERSHIP_FROM_VENDOR": "Take Ownership from Vendor",
					"MERCHANT_GROUP_MAINTANTANCE": "Merchant Group Maintantance",
					"UPLOAD_IMAGES": "Upload Images",
					"APPROVE_IMAGES": "Approve Images",
					"ADD_COLOR_SIZE_TO_STYLES": "Add Color/Size to styles",
					"CREATE_CUSTOM_CPS": "Create Custom CPs",
					"MANAGE_CUSTOM_CPS": "Manage Custom CPs",
					"SEARCH_FOR_PRODUCTS": "Search for Products",
					"PRODUCT_MAINTENANCE": "Product Maintenance",
					"SEARCH_STATIC_CONTENT": "Search Static Content",
					"VIEW_STATIC_CONTENT": "View Static Content",
					"MANAGE_USER_ROLES": "Manage User Roles",
					"DELETE_USERS": "Delete Users",
					"TURN_OFF_ON_EMAIL_TRIGGERS": "Turn Off/On Email triggers",
					"UPDATE_ENTER_PACKAGE_SHIPPING_DIMENSIONS": "Update/Enter package shipping dimensions",
					"UPDATE_VENDOR_PACKAGING_CAPABILITIES": "Update Vendor Packaging Capabilities",
					"VIEW_PACKAGING_CAPABILITY_REPORTS": "View Packaging Capability Reports",
					"VIEW_VENDOR_VPS_REPORTS": "View Vendor VPS Reports",
					"PUBLISH/DELETE_VENDOR_VPS_REPORTS": "Publish/Delete Vendor VPS Reports",
					"VIEW_SALES_PERFORMANCE_PA_REPORT_PAGES": "View Sales Performance & PA Report Pages",
					"GENERAL_TAKE_OWNERSHIP": "General Take Ownership",
					"UPDATE_ENTER_PACKAGESHIPPING_DS_ATTRIBUTE": "Update/Enter package shipping dimensions (DS Attributes)",
					"VIEW_SALES_PERFORMANCE_REPORTS": "View Sales Performance & PA Report Pages",
					"VIEW_WORK_FLOW_REPOPTS": "View Workflow/Product Reports",
					"VPA_SUMMARY_REPORT": "vpa summary report",
					"VENDOR_VPS_REPORTS": "vendor vps reports",
					"SEARCH_RESULT_EDIT_VENDOR_STYLE": "Edit Vendor Styles",
					"SEARCH_RESULT_CUSTOMER_CHOICE": "Edit Customer Choices",
					"SEARCH_RESULT_EDIT_MERCHANTGROUP": "Edit Merchant Groups",
					"SEARCH_RESULT_DELETE_MERCHANTGROUP": "Delete Merchant Groups",
					"SEARCH_RESULT_EDIT_SKUS": "Edit SKUs",
					"SEARCH_RESULT_DELETE_UPC": "Delete UPCs",
					"SEARCH_RESULT_EDIT_CP": "Edit CPs",
					"SEARCH_RESULT_EDIT_ECOMM": "Edit Ecomm Attributes",
					"SEARCH_RESULT_EDIT_PRICING": "Edit Pricing Attributes",
					"PRODUCT_MENU": "Product Menu",
					"DIRECT_SHIP_REPORTS": "Direct Ship Reports",
					"ADD_PACKAGING_CAPABILITES": "Add Vendor Packaging Capabilities",
					"CRETE_VENDOR_STYLES": "Create Vendor Styles",
					"DOWNLOAD_MERCHANT_GROUPS": "Download Merchant Groups",
					"OTHER_REPORTS": "View Other Reports",
					"ROLE_STATUS_BASED_UPDATES": {

						"MS": {
							"OUTSIDE_P3": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": false, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": false, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"MERCHANT ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							},
				 						
							"3P_UPDATE": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": true, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": true, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": true, "allowed": true },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": false }
							},
					 					
							"DEPT_CAT_UPDATE": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": true, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": true, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": true, "allowed": true },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							},
					 					 
							"UPDATE_SPECIFIC_PROD_PDP": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": true, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": true, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": false },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": false }
							},
					 					 
							"VENDOR_ATTR_AFTER_SUBM_TO_VENODR": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": true, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": true, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": true, "allowed": true },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							}
				 					
						},
				 				
						"DM": {
							"OUTSIDE_P3": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": false, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": false, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"MERCHANT ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							},
					 					
							"3P_UPDATE": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": false },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": false, "allowed": false },
								"REJECTED": { "takeOwnershipNeeded": false, "allowed": false },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": false },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							}
				 					
						},
				 				
						"IP": {
							"OUTSIDE_P3": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": false },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": false, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": false, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"MERCHANT ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							},
					 					
							"UPDATE_SPECIFIC_PROD_PDP": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": true, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": true, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": true, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": false },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": false }
							}
				 					
						},
				 				
						"VU": {
							"UPDATE_VENDOR_ATTR": {
								"NEW": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": false },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": false, "allowed": false },
								"REJECTED": { "takeOwnershipNeeded": false, "allowed": false },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": false, "allowed": false },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": false },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": false },
								"MERCHANT ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							}
						},
						"DS": {
							"UPDATE_DS_ATTR": {
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"NEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR MS ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"MS ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"UNDER VENDOR REVIEW": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR IP APPROVAL": { "takeOwnershipNeeded": false, "allowed": true },
								"REJECTED": { "takeOwnershipNeeded": false, "allowed": true },
								"WAITING ON IMAGES": { "takeOwnershipNeeded": false, "allowed": true },
								"READY FOR DM ATTRIBUTES": { "takeOwnershipNeeded": false, "allowed": true },
								"COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"MERCHANT ATTRIBUTION COMPLETE": { "takeOwnershipNeeded": false, "allowed": true },
								"PUBLISH DENIED": { "takeOwnershipNeeded": false, "allowed": true }
							}
						}
				 				
					}
				 			 
				};
				jsConstatnsValues = Object.freeze(jsConstatns);
				Kjs.vpJSConstants = {};
				Kjs.vpJSConstants.CONSTATNS = jsConstatnsValues;
				
			} 
		}catch(e){
		}
		$.views.helpers({
		    trimInputText: function(val) {
		      var result = val.split(' ').join('');
			  return result;
		    },
		    isEmptyObject: function(obj){
		        return $.isEmptyObject(obj);
		    },
		    multiSelectPattern: function(arr){
		    	var data = "";
		    	for (i=0;i<arr.length;i++){
		    		if(i==0){
		    			data = arr[i];
		    		}else{
		    			data = data+","+arr[i];
		    		}
		    	}
		    	return data;
		    },
		    getUserInfo : function(){
		    	var userInfo = (Kjs.storage.getData('userInfo').role != null || Kjs.storage.getData('userInfo').role != null) ? Kjs.storage.getData('userInfo').role.toUpperCase():"";
		    	if(userInfo =="VA" || userInfo == "VU" || userInfo == "VENDOR")
		    		return "Vendor";
		    	else
		    	    return Kjs.storage.getData('userInfo').role;
		    },
		    getRefactorCodeFlag : function(){
		    	if(typeof(refactorCodeFlag) != "undefined" && refactorCodeFlag){
		    		return true;
		    	}else{
		    		return false;
		    	}
		    },
		    encodeData : function(data){
		    	return encodeURIComponent(data);
		    },
		    
		    isRoleBasedAccessProvided : function(displayRole){
		    	if(displayRole == "MS" && "Merchandise Specialist" == Kjs.storage.getData('userInfo').role){
		    		return true;
		    	}else if(displayRole == Kjs.storage.getData('userInfo').role){
		    		return true;
		    	}else{
		    		return false;
		    	}
		    },
		    notificationFormat : function(str){
				return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
			},
		    accessOnPermission : function(){
		    	if(Kjs.storage.getData('userOktaDetails') != undefined){
			    	
			    	try{
			    		var permissionsArray = (Kjs.storage.getData('userOktaDetails') == null || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions == undefined || JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions == null)?[]:JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData.permissions;
			    		if (Kjs.vpJSConstants!=undefined && Kjs.vpJSConstants!=null) {
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
				    	}
			    	}catch(e){
					}
		    	}
		    	return {};
		    },
		    editAttributeFlagStatus : function(prop,permission){
		      var flagStatus = true;
		      var userrolename = Kjs.storage.getData('userInfo').role;
		      if(userrolename=="Merchandise Specialist" || userrolename=="MERCHANDISE SPECIALIST"){
		    	  userrolename = "MS";
		      }		      
		       if(userrolename != "DS"){
		    	   var lable = "EDIT_"+userrolename+"_ATTRIBUTES";
			      	if(permission[lable]){
			      		flagStatus = false;
			        }  
		       }
		       return flagStatus;
		    },
		    
		    isMaintenanceStyleHeirarchyUpdated : function(){
		    	var path = window.location.href;
				var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;
				var styleHeirarchyUpdateFlag = (path.search("heirarchyUpdated=true")!=-1 )? true: false;
	   			if(maintenanceFlag && styleHeirarchyUpdateFlag){
	   				return true;
	   			}
	   			return false;
		    },
		    
		    isIEBrowser : function() {
		  	  var ua = window.navigator.userAgent;
		  	  
		  	  var msie = ua.indexOf('MSIE ');
		  	  if (msie > 0) {
		  		return true;
		  	  }

		  	  var trident = ua.indexOf('Trident/');
		  	  if (trident > 0) {
		  	    var rv = ua.indexOf('rv:');
		  	    return true;
		  	  }

		  	  var edge = ua.indexOf('Edge/');
		  	  if (edge > 0) {
		  		return true;
		  	  }
		  	  return false;
		  },
		  commescapeQuotes : function(type,str){
		  		if(str != undefined && str.search("'") > 0){
	       			return type+'="'+str+'"';
	       		}else if(str != undefined &&  str.search('"') > 0){
	       			return type+"='"+str+"'";
	       		}else{
	       			if(str == undefined){
	       				return type+'=""';
	       			}else{
	       				return type+'="'+str+'"';
	       			}
	       			
	       		}	       			       		 
	       },
	       	checkAccuracyLevel: function(cpdData){
		    	if(cpdData != undefined && cpdData.CPK_ACRY_LVL_CDE != undefined && cpdData.CPK_ACRY_LVL_CDE.trim().toLowerCase() == "high"){
		    		return true;
		    	}
		    	return false;
		    }
		});
		
	});
});	
$module('commonHeader', function(log, env, module, Kjs) {
	var
	currentSelectedVendorName,
	currentSelectedDeptName,
	currentSelectedClassName,
	currentSelectedBrandName,
	currentSelectedSubClassName,
	currentSelectedP1Name,
	currentSelectedP2Name,
	currentSelectedP3Name,
	
	searchRequestObject = {
		"departmentNumber" : "",
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
		"corRID" : "zNoEk5ghTqc",
		"merchantGroupName" : '',
		"groupCode": '',
		
		"viewBy" : "Vendor Style"
	},
	responseJson,
	_headerPanel = (function(){
		var 
		_panel,
		_g_timer = null,
		_logout_timer = null,
		_noAction = false,
		_context = function(data) {
			var args = [].slice.call(arguments);
			return Kjs.object.apply(Kjs, [data, env.commonHeaderTpl.statics].concat(args));
		},
		_render = function(hook, data){
			_disposeHeader();
			env.hook = hook||env.hook||'body';
			var pageType = {type:""};
			if(window.location.pathname.search("newCreateMerchantGroup") >-1 || window.location.pathname.search("VendorStyleListViewPage?") >-1|| window.location.pathname.search("VendorStyleListPage?") >-1) {
				pageType = {type:"createMerchant"};
			}
			if(window.location.pathname.search("clickOption=vendorStyleClick") >-1){
				pageType = {type:"vendorStyleClick"};
				
			}
			if(window.location.pathname.search("VendorAttributePage") >-1){
				pageType = {type:"VendorAttributePage"};
				
			}
			Kjs.extend(data,pageType);
			_panel = $tmpl.render(env.commonHeaderTpl.tplcommonHeader, _context(data));
			$(env.hook).html(_panel);
			if(Kjs.storage.getData('userInfo') != null && Kjs.storage.getData('userInfo').role != "Vendor"){
				
				if(Kjs.storage.getData('userInfo').role != "VA" && Kjs.storage.getData('userInfo').role != "VU"){
				    $('.nav').removeClass('hide');
				}else{
					
					$('.nav').addClass('hide');
				}
			}else{
				$('.nav').addClass('hide');
			}
			if( window.location.pathname.search("MerchantGroupListViewPage") >-1 ){
			    $('.merchantGroupNav').attr('href','javascript:void(0)').addClass('not-active');
			   }else{
			    $('.merchantGroupNav').attr('href','/merchandising/MerchantGroupListViewPage');
			   }  
			   if( window.location.pathname.search("reportBuilderPage") >-1 ){
			    $('.reportNav').attr('href','javascript:void(0)').addClass('not-active');
			   }else{
			        $('.reportNav').attr('href','/merchandising/reportBuilderPage');
				    $('.reportNav').on('click',function() {           
				           window.location.href = "/merchandising/reportBuilderPage";        
				     });
			   }
			   if( window.location.pathname.search("home") >-1 ){
				      $('.cpNav').attr('href','javascript:void(0)').addClass('not-active');
			   }else{
				      $('.cpNav').attr('href','/cp/home');
					  $('.cpNav').on('click',function() {           
					        window.location.href = "/cp/home";        
				      });
			   }
			   if(window.location.pathname == '/merchandising/editMerchantGroupStyle')
			   $('.logo-name').html('<span>Edit Merchant Group</span>');
			   else if(window.location.pathname == "/merchandising/newCreateMerchantGroup")  
				   $('.logo-name').html('<span>Create Merchant Group</span>');
			   
			   if(window.location.search.search("clickOption=vendorStyleClick") >-1){
				   if($(".headerMGidBreadcrumb").val() != undefined && $(".headervendorStyleIdBreadcrumb").val() != undefined){
					   $('.verdor-group-tiltle-name').html($(".headerMGidBreadcrumb").val());
						 $('.verdor-group-tiltle-page').html($(".headervendorStyleIdBreadcrumb").val());
				   }
					
				}
			   if($(".merchantGroupDesname").length > 0 && $(".merchantGroupDesname").val() != undefined && $("#vendorGroupListViewContainer").length > 0){
					 
					 $('.verdor-group-tiltle-name').html($(".merchantGroupDesname").val());
			   }
			_deactivate();
			_activate();
			_addBannerClassName(); 
       		_getNotificationlogic();
			return _panel; 
		},
		_activate = function(){
			$('#vendor_stylenum_textfield').attr("disabled",true)
			$(env.commonHeaderTpl.userIconClick).on('click',_handleUserIconClick); 
			$(env.commonHeaderTpl.logoutClick).on('click',_handleLogoutClick);
			$(env.commonHeaderTpl.searchIconClick).on('click',_handleSearchIconClick);
			$(env.commonHeaderTpl.clearButtonClick).on('click',_handleClearButtonClick);
			$(env.commonHeaderTpl.selectClass).on('change',_handleSelectClassClick);
			$(env.commonHeaderTpl.typeKohlsStyle).on('keyup',_handleKohlsStyleEntry);
			$(env.commonHeaderTpl.typeMerchantGroup).on('keyup',_handleMerchantGroupruptEntry);
			$(env.commonHeaderTpl.typeGroupCode).on('keyup',_handleGroupCodeEntry);			
			$(env.commonHeaderTpl.departmentText).on('change',_DepartmentDependancies);
			$(env.commonHeaderTpl.p1Text).on('change',_P1Dependancies);
			$(env.commonHeaderTpl.p2Text).on('change',_P2Dependancies);
			$(env.commonHeaderTpl.p3Text).on('change',_P3Dependancies);			
			$(env.commonHeaderTpl.classText).on('change',_ClassDependencies);
			$(env.commonHeaderTpl.subclassText).on('change',_SubClassDependencies);
			$(env.commonHeaderTpl.brandText).on('change',_BrandDependencies);			
			$(env.commonHeaderTpl.vendorText).on('change',_vendorNameDependancies);	
			$(env.commonHeaderTpl.typeUPC).on('keyup',_handleUPCEntry);	
			$(env.commonHeaderTpl.typeSKU).on('keyup',_handleSKUEntry);	
			$(env.commonHeaderTpl.typeCP).on('keyup',_handleCPEntry);	
			$(env.commonHeaderTpl.searchsend).on('click',_handleSearchButtonClick);				
			$(env.commonHeaderTpl.backHome).on('click',_unlockMerchantGroup);
			$(env.commonHeaderTpl.myProfile).on('click',_handleMyProfile);
			$(env.commonHeaderTpl.vendorUserManageUser).on('click',_handleManageUser); 
			$(env.commonHeaderTpl.tabingElements).on('keyup',_handleTabingElements); 
		},
		_deactivate = function(){
			$(env.commonHeaderTpl.userIconClick).off('click',_handleUserIconClick); 
			$(env.commonHeaderTpl.logoutClick).off('click',_handleLogoutClick);
			$(env.commonHeaderTpl.searchIconClick).off('click',_handleSearchIconClick);
			$(env.commonHeaderTpl.clearButtonClick).off('click',_handleClearButtonClick);
			$(env.commonHeaderTpl.selectClass).off('change',_handleSelectClassClick);
			$(env.commonHeaderTpl.typeKohlsStyle).off('change',_handleKohlsStyleEntry);
			$(env.commonHeaderTpl.typeMerchantGroup).off('keyup',_handleMerchantGroupruptEntry);
			$(env.commonHeaderTpl.typeGroupCode).off('change',_handleGroupCodeEntry);			
			$(env.commonHeaderTpl.departmentText).off('change',_DepartmentDependancies);
			$(env.commonHeaderTpl.p1Text).off('change',_P1Dependancies);
			$(env.commonHeaderTpl.p2Text).off('change',_P2Dependancies);
			$(env.commonHeaderTpl.p3Text).off('change',_P3Dependancies);			
			$(env.commonHeaderTpl.classText).off('change',_ClassDependencies);
			$(env.commonHeaderTpl.subclassText).off('change',_SubClassDependencies);
			$(env.commonHeaderTpl.brandText).off('change',_BrandDependencies);
			$(env.commonHeaderTpl.vendorText).off('change',_vendorNameDependancies);			
			$(env.commonHeaderTpl.typeUPC).off('keyup',_handleUPCEntry);
			$(env.commonHeaderTpl.typeSKU).off('keyup',_handleSKUEntry);
			$(env.commonHeaderTpl.typeCP).off('keyup',_handleCPEntry);
			$(env.commonHeaderTpl.searchsend).off('click',_handleSearchButtonClick);
			$(env.commonHeaderTpl.backHome).off('click',_unlockMerchantGroup);
			$(env.commonHeaderTpl.myProfile).off('click',_handleMyProfile);	
			$(env.commonHeaderTpl.vendorUserManageUser).off('click',_handleManageUser);
			$(env.commonHeaderTpl.tabingElements).off('keyup',_handleTabingElements); 
		},
		_activatePs = function(){
			$(env.commonHeaderTpl.p2Text).on('change',_P2Dependancies);
			$(env.commonHeaderTpl.p3Text).on('change',_P3Dependancies);
			$(env.commonHeaderTpl.subclassText).on('change',_SubClassDependencies);
			$(env.commonHeaderTpl.brandText).on('change',_BrandDependencies);
		},
		
		_deactivatePs = function(){
			$(env.commonHeaderTpl.p2Text).off('change',_P2Dependancies);
			$(env.commonHeaderTpl.p3Text).off('change',_P3Dependancies);
			$(env.commonHeaderTpl.subclassText).off('change',_SubClassDependencies);
			$(env.commonHeaderTpl.brandText).off('change',_BrandDependencies);
		},
		_addBannerClassName = function(){
			$('#loadHeader').append('<div class="banner-containner-header hide"></div>');
   			var urltext = window.location.href;  
   			var merchantAttributesMaintenancePage = "merchandising/merchantAttributePage";
   			if(typeof(refactorCodeFlag) != "undefined" && refactorCodeFlag){
   				merchantAttributesMaintenancePage = "maintenance/v1/merchantAttributePage"
   			}
   			
       		if (urltext.indexOf(merchantAttributesMaintenancePage) >= 0) {
        		$('#merchantAttributeHeader').prepend('<div class="banner-containner-header hide"></div>');
       		}
       		if (urltext.indexOf("merchandising/MerchantGroupPage") >= 0) {
       			$(".banner-containner-header").remove();
       			$('<div class="banner-containner-header hide banner-merchant-listpage"></div>').insertAfter(".merchant-new-header");
       		}
       		if (urltext.indexOf("merchandising/MerchantGroupListViewPage") >= 0) {
       			$(".banner-containner-header").remove();
       			$('<div class="banner-containner-header hide banner-merchant-listpage" style="margin-top:0px !important;"></div>').insertAfter("#merchantGroupContainer .add-merchent.VPAS-MerchantGroup-add-merchant");
       		}
       		if (urltext.indexOf("cp/home") >= 0) {
       			$(".banner-containner-header").remove();
       			$('#cpManagmentContainer').prepend('<div class="banner-containner-header hide"></div>');
       		}
       		if (urltext.indexOf("user/editProfile") >= 0) {
       			$(".banner-containner-header").remove();
				$('<div class="banner-containner-header hide"></div>').insertAfter("#vendorProfileContainer .header");
			}
		},
		_unlockMerchantGroup = function(e){
			e.preventDefault();
			var path_str = window.location.href; 
			var merchantId = Kjs.commonHeader.headerPanel.getUrlParameter("merchantGroupId");
			var userRole= Kjs.storage.getData('userInfo').role;
			if (merchantId) {
				var url = location.origin + '/merchandising/unlockMerchantGroupFromEdit?merchantGroupId='+encodeURIComponent(merchantId),
				_success = function(response){
					location.href = location.origin+'/merchandising/MerchantGroupListViewPage';
				},
				_error = function(){};
				Kjs.vpAjax.get(url,"",_success,_error);
			} else {
				location.href = location.origin+'/merchandising/MerchantGroupListViewPage';
			}
		},
		_handleLogoClick = function(e){
			e.preventDefault();
			if($('.logo_image').length > 0) {
				window.location.href =  Kjs.storage.getData('homeUrl');
			}
		},
		_handleUserIconClick = function(){
			var response=Kjs.storage.getData('userInfo');
			var userOktaDetailsObj = (Kjs.storage.getData('userOktaDetails') != null && JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData != undefined ) ?JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData :null;
			response['userOktaDetails'] = userOktaDetailsObj;
			var styleHtml = $tmpl.render(env.commonHeaderTpl.userSignoutTpl, {userInfo : response});
			$('.userdetail').html("");
			$('.userdetail').append(styleHtml);
			_deactivate();
			_activate();
			return false;
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
		_verifyReadyforsearch = function(){
			validationerrors = ["#cpentryerror","#upcentryerror","#skuentryerror","#ksentryerror"];
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
			if(searchRequestObject.subClassNumber != ''||searchRequestObject.vendorName != '' ||searchRequestObject.skuList.length !== 0 ||searchRequestObject.ksIdList.length != 0 ||searchRequestObject.cpList.length != 0){
				$('.specialViewBy').removeAttr( "disabled" );
			}else{
				$('.specialViewBy').attr("disabled","true");
			}
			
			
		},
		
		_checkAllFieldsEmpty = function(){    
			var allEmpty = true;

			if(searchRequestObject.departmentNumber != '' || searchRequestObject.productPrimaryTypeCode != ''){
					allEmpty = false
				}
			requestObjectLists = [
				searchRequestObject.skuList,
				searchRequestObject.cpList,
				searchRequestObject.upcList,
				searchRequestObject.ksIdList
			];
			
			for(list in requestObjectLists){
				if (requestObjectLists[list].length != 0){
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
		
		_handleGetDepartmentHeirarchy = function(selectedDept){
			var formattedURL = "/search/getDeptResults?deptNumber="+selectedDept;
			Kjs.vpAjax.get(formattedURL, "", _successSearchDepartmentResponse, _errorSearchSepartmentResponse);
			_disableSearchButton();
		},
		
		_successSearchDepartmentResponse = function(response){
			_enableField('inputvsnum',true)
			_enableField('inputgc',true)
			if(response != null){
				var deptInfo = response;
				Kjs.storage.saveData("deptInfo",response);
				
				if(response.errorCode == ""){
					var classData = [];
					var vendorData = [];
					var brandData = [];
					var merchantGroupData = [];
					var temp = {}
					var brandId;
					var brandDescription;
					repeatedBrand = false;
					
					for(var classObj in response.responseData.departmentHierarchy.classMap){
						temp = {"classDescription" : response.responseData.departmentHierarchy.classMap[classObj].classDescription,
								"classNumber" : response.responseData.departmentHierarchy.classMap[classObj].classNumber
								};
						classData.push(temp);
						temp = {}
						}
					temp = {};
					for(var vendorObj in response.responseData.departmentHierarchy.vendorMap){
						temp = {"vendorName" : response.responseData.departmentHierarchy.vendorMap[vendorObj].vendorDescription,
								"vendorNumber" : response.responseData.departmentHierarchy.vendorMap[vendorObj].vendorNumber
						};								
						vendorData.push(temp);
						temp = {}
						}
					temp = {};
					for(var vendorObj in response.responseData.departmentHierarchy.vendorMap){
						for(var brandObj in response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap){
							
							brandId =response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandId;
							brandDescription = response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandDescription;
							
							for(itemName in brandData){
								if(brandData[itemName].brandDescription == brandDescription){
									repeatedBrand = true;
								}
							}
							if(repeatedBrand == false){
								temp = {"brandId" : brandId,
										"brandDescription" : brandDescription
								};	
								brandData.push(temp);
								temp = {}
							}else{
								repeatedBrand = false;
							}							
						}
					}
					var data = classData;
					var classHtml = $tmpl.render(env.commonHeaderTpl.classTpl, {classname : data});
					$('.classList').html('');
			        $('.classList').append(classHtml);  
				    $('#search_classnumber').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {				       
						var deptInfo = Kjs.storage.getData("deptInfo");	
				
						
						searchRequestObject.classNumber = li.val();
					 	var selectedClass = li.val();
					 	currentSelectedClassName = $('#search_classnumber').val();
					 	
					 	temp = {};
					 	subClassData = [];
						var data = {subclassname : deptInfo.responseData.departmentHierarchy.classMap[selectedClass].subClassMap};
						for (var subClassNum in data.subclassname){
							subClassObj = deptInfo.responseData.departmentHierarchy.classMap[selectedClass].subClassMap[subClassNum];
							temp = {
								"subClassDescription" :subClassObj.subClassDescription,
								"subClassNumber" : subClassObj.subClassNumber
							};
							subClassData.push(temp);
							temp = {}	
						}
						data = subClassData;
						var subclassHtml = $tmpl.render(env.commonHeaderTpl.subclassTpl, {subclassname : data});
						$('.subclassList').html('');
				        $('.subclassList').append(subclassHtml); 
				        $('#search_subclassnumber').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
				        	searchRequestObject.subClassNumber = li.val();
				        	currentSelectedSubClassName = $('#search_subclassnumber').val();
				        	_verifyReadyforsearch();
				        
		
						 });
				        $('#search_subclassnumber').editableSelect('hide');
				        _deactivatePs();
				        _activatePs();
			        });
			        
			        $('#search_classnumber').editableSelect('hide');
			        var data = vendorData;
					var vendorHtml = $tmpl.render(env.commonHeaderTpl.vendorTpl, {vendorname : data});
					$('.vendorNameList').html('');
			        $('.vendorNameList').append(vendorHtml);
			        $('#search_vendorname').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
			        	searchRequestObject.vendorName = li.val();
			        	currentSelectedVendorName = $('input#search_vendorname').val();
			        	var deptInfo = Kjs.storage.getData("deptInfo");	
						var brandData = [];
						var brandId ;
						var brandDescription;
						var repeatedBrand = false;
						temp = {};
						for(var vendorObj in deptInfo.responseData.departmentHierarchy.vendorMap){
							for(var brandObj in response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap){
								if(response.responseData.departmentHierarchy.vendorMap[vendorObj].vendorNumber == searchRequestObject.vendorName ){
									
									brandId =response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandId;
									brandDescription = response.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandDescription;
									
									for(itemName in brandData){
										if(brandData[itemName] == brandDescription){
											repeatedBrand = true;
										}
									}
									if(repeatedBrand == false){
										temp = {"brandId" : brandId,
												"brandDescription" : brandDescription
										};	
										brandData.push(temp);
										temp = {}
									}
								}
							}
						}
						var brandHtml = $tmpl.render(env.commonHeaderTpl.brandTpl, {brandname : brandData});
						$('.brandNameList').html('');
				        $('.brandNameList').append(brandHtml);		
				        $('#search_brandname').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
				        	searchRequestObject.brandIdentifier = li.val();
				        
				        });
				        $('#search_brandname').editableSelect('hide');
				        _deactivatePs();
				        _activatePs();
				        _verifyReadyforsearch();
			        	
			        });
			        $('#search_vendorname').editableSelect('hide');
			        
			        var data = brandData;
					var brandHtml = $tmpl.render(env.commonHeaderTpl.brandTpl, {brandname : data});
					$('.brandNameList').html('');
			        $('.brandNameList').append(brandHtml);		
			        $('#search_brandname').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
			        	searchRequestObject.brandIdentifier = li.val();
			        
			        });
			        $('#search_brandname').editableSelect('hide');
			       
				}else{
					Kjs.modelPopUp.alertModelPopUp({message:response.errorMessage},function(){});
				}
				_deactivate();
				_activate();
			}
		},
		
		_errorSearchSepartmentResponse = function(){
			
		},
		_renderDepartments = function(response){
			var departments = Kjs.storage.getData('allDepartments');
			var styleHtml = $tmpl.render(env.commonHeaderTpl.searchTpl, departments);
			$('#nav-products').html("");
			$('#nav-products').append(styleHtml);
			$('#search_selectdepartment').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
        		$('.selectedClass').removeClass("errorField");
        		
        		searchRequestObject.departmentNumber = li.val();
        		currentSelectedDeptID = searchRequestObject.departmentNumber;
        		currentSelectedDeptName = $('#search_selectdepartment').val()
        		var selectedDept = searchRequestObject.departmentNumber;
        		_verifyReadyforsearch();
        		if(searchRequestObject.departmentNumber != null){
        			_handleGetDepartmentHeirarchy(searchRequestObject.departmentNumber);
        		}
        		_verifyReadyforsearch();
			});
			$('#search_p1code').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
				searchRequestObject.productPrimaryTypeCode = li.val();
				currentSelectedP1Name = $('#search_p1code').val();
				$('.selectedClass').removeClass("errorField");
				 var formattedURL = "/search/getP2P3Data?productPrimaryTypeCode="+searchRequestObject.productPrimaryTypeCode;
				 Kjs.vpAjax.get(location.origin + formattedURL,"", _successSearchP2P3Response, _errorSearchSearchP2P3Response);
				 _verifyReadyforsearch();
			});
			$('#search_selectdepartment').editableSelect('hide');
			$('#search_p1code').editableSelect('hide');
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
					if( UR == ('VU') || UR == ('VU')){
						$("#search_view_by option[class='specialViewBy']").remove();
						$('.view_by_tooltiptext').remove();
					}
					$('.specialViewBy').attr("disabled","true");
					_deactivate();
					_activate();
				}
			}
		},
		_errorSearchInputResponse = function(responseData){
		},
		_successSearchP2P3Response = function(response){
			if(response.errorMessage != undefined && response.errorMessage != ""){
				Kjs.modelPopUp.displayServiceError(response.errorMessage);
			}else{
				Kjs.storage.saveData("p2p3data",response);
				p2Data = [];
				temp = {};
				for(var p2Obj in response.responseData.productPrimaryTypeHeirarchy.productTypeMap){
				temp = {"productTypeCode" : response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p2Obj].productTypeCode,
						"productTypeDescription" : response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p2Obj].productTypeDescription
						};
				p2Data.push(temp);
				temp = {}	
				}
				
				var p2ListHtml = $tmpl.render(env.commonHeaderTpl.p2Tpl, {p2name : p2Data});
				$('.p2list').html('');
		        $('.p2list').append(p2ListHtml);  
		        $('#search_p2number').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
		        	searchRequestObject.p2 = li.val();
		        	currentSelectedP2Name = $('#search_p2number').val();
		        	
		        	p3Data = [];
					temp = {};
					for(var p3Obj in response.responseData.productPrimaryTypeHeirarchy.productTypeMap){
						
						if(response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productTypeCode == li.val()){
							for(subObj in response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productSubTypeMap){
								temp = {"productSubTypeCode" : response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productSubTypeMap[subObj].productSubTypeCode,
										"productSubTypeDescription" : response.responseData.productPrimaryTypeHeirarchy.productTypeMap[p3Obj].productSubTypeMap[subObj].productSubTypeDescription
										};
								p3Data.push(temp);
							}
						}
					temp = {}	
					}
					var p3ListHtml = $tmpl.render(env.commonHeaderTpl.p3Tpl, {p3name : p3Data});
					$('.p3list').html('');
			        $('.p3list').append(p3ListHtml);  
			        $('#search_p3number').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
			        	searchRequestObject.p3 = li.val();
			        	currentSelectedP3Name = $('#search_p3number').val();
			        	_verifyReadyforsearch();
			        });
			        $('#search_p3number').editableSelect('hide');
			        _deactivatePs();
					_activatePs();
		        });
		        $('#search_p2number').editableSelect('hide');
		        _enableField('search_p2number',true)
				_deactivatePs();
				_activatePs();
			}	
		},
		_errorSearchSearchP2P3Response = function(response){
			Kjs.modelPopUp.alertModelPopUp({message:response.errorMessage},function(){});
		},
		
		_handleSearchIconClick = function(){
			searchRequestObject = {
					"departmentNumber" : "",
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
					
					"viewBy" : "Vendor Style"
				}
			Kjs.vpAjax.get(location.origin + "/search/GetSearchInputData","", _successSearchInputResponse, _errorSearchInputResponse);
		},
		
		_handleClearButtonClick = function(e){
			$('#skuinput').val('');
			
			$('#inputvsnum').val('');
			$('#inputgc').val('');
			$('#cpinput').val('');
			$('#ksinput').val('');
			$('#upcinput').val('');
			$('#search_merchantgroup').val('');
			
			$('#search_classnumber').editableSelect('clear');
			$('#search_classnumber').val('');
			
			$('#search_subclassnumber').editableSelect('clear');
			$('#search_subclassnumber').val('');
			
			$('#search_brandname').editableSelect('clear');
			$('#search_brandname').val('');
			
			$('#search_vendorname').editableSelect('clear');
			$('#search_vendorname').val('');
			
			$('#search_classnumber').editableSelect('clear');
			$('#search_classnumber').val('');
			
			$('#search_p3number').editableSelect('clear');
			$('#search_p3number').val('');
			
			$('#search_p2number').editableSelect('clear');
			$('#search_p2number').val('');
			
			_renderDepartments();
			$('#search_p1code').val('');
			
			$("#cpentryerror").remove();
			$( ".CPlabel"  ).css( "color", "#454545" );
			
			$("#upcentryerror").remove();
			$( ".UPClabel"  ).css( "color", "#454545" );
			
			$("#skuentryerror").remove();
			$( ".SKUlabel"  ).css( "color", "#454545" );
			
			$("#ksentryerror").remove();
			$( ".KSlabel"  ).css( "color", "#454545" );
			
			_enableField('inputvsnum',false)
			_enableField('inputvsnum',false)
			
			
			$("#search_view_by").val("Vendor Style");
			$('.specialViewBy').attr("disabled","true");
			
			searchRequestObject = {
					"departmentNumber" : "",
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
					
					"viewBy" : "Vendor Style"
				}
			_disableSearchButton();
			_disableAllDependantFields();
			_deactivate();
			_activate();		
			
		},
		

		_handleSelectClassClick = function(e){
			var deptInfo = Kjs.storage.getData("deptInfo");
			 	var selectedClass = $(this).val().trim(), _this = $(this);
			 	if(selectedClass == searchRequestObject.classNumber){
			 		
					var data = {subclassname : deptInfo.responseData.departmentHierarchy.classMap[selectedClass].subClassMap};
					var classHtml = $tmpl.render(env.commonHeaderTpl.subclassTpl, data);
					$('.subclassList').html('');
			        $('.subclassList').append(classHtml);  
			 	}
		},
		_handleKohlsStyleEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#ksentryerror").length == 0) {
					$( ".ksidcontainer" ).append( "<p class = \"entryerror\" id = \"ksentryerror\">Numeric Values only separated by space</p>" );
					$( ".KSlabel" ).css( "color", "red" );
					$("#skuinput").css("border","1px solid red");
					}	
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#ksentryerror").length == 0) {
						$( ".ksidcontainer" ).append( "<p class = \"entryerror\" id = \"ksentryerror\">500 Entries allowed at most</p>" );
						$( ".KSlabel" ).css( "color", "red" );
						$("#skuinput").css("border","1px solid red");
					}
					
				}
				else{
					if($("#ksentryerror").length != 0) {
						$("#ksentryerror").remove();
						$( ".KSlabel"  ).css( "color", "#454545" );
						$("#skuinput").css("border","1px solid #cccccc");
					}
					if(userEntry.split(/[ ]+/) == ""){
						searchRequestObject.ksIdList = [];
					}else{
						searchRequestObject.ksIdList = userEntry.split(/[ ]+/);
					}	
					
				}
			_verifyReadyforsearch();
			   
		},
		_handleSKUEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#skuentryerror").length == 0) {
					$( ".skucontainer" ).append( "<p class = \"entryerror\" id = \"skuentryerror\">Numeric Values only separated by space</p>" );
					$( ".SKUlabel" ).css( "color", "red" );
					}
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#skuentryerror").length == 0) {
						$( ".skucontainer" ).append( "<p class = \"entryerror\" id = \"skuentryerror\">500 Entries allowed at most</p>" );
						$( ".SKUlabel" ).css( "color", "red" );
					}
				}
				else{
					if($("#skuentryerror").length != 0) {
						$("#skuentryerror").remove();
						$( ".SKUlabel"  ).css( "color", "#454545" );
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
		
		_handleUPCEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#upcentryerror").length == 0) {
					$( ".upccontainer" ).append( "<p class = \"entryerror\" id = \"upcentryerror\">Numeric Values only separated by space</p>" );
					$( ".UPClabel" ).css( "color", "red" );
					}	
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#upcentryerror").length == 0) {
						$( ".upccontainer" ).append( "<p class = \"entryerror\" id = \"upcentryerror\">500 Entries allowed at most</p>" );
						$( ".UPClabel" ).css( "color", "red" );
					}
				}
				else{
					if($("#upcentryerror").length != 0) {
						$("#upcentryerror").remove();
						$( ".UPClabel"  ).css( "color", "#454545" );
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
		
		_handleCPEntry = function(e){
			var userEntry = $(this).val().trim(), _this = $(this);
			var regex = /^[0-9 ]+$/;
			if(!regex.test(userEntry) && userEntry != ""){
				if($("#cpentryerror").length == 0) {
					$( ".cpcontainer" ).append( "<p class = \"entryerror\" id = \"cpentryerror\">Numeric Values only separated by space</p>" );
					$( ".CPlabel" ).css( "color", "red" );
					}
					
				}
				else if(userEntry.split(/[ ]+/).length > 500){
					if($("#cpentryerror").length == 0) {
						$( ".cpcontainer" ).append( "<p class = \"entryerror\" id = \"cpentryerror\">500 Entries allowed at most</p>" );
						$( ".CPlabel" ).css( "color", "red" );
					}
				}
				else{
					if($("#cpentryerror").length != 0) {
						$("#cpentryerror").remove();
						$( ".CPlabel"  ).css( "color", "#454545" );
					}
					if(userEntry.split(/[ ]+/) == ""){
						searchRequestObject.cpList = [];
						
					}
					else{
						searchRequestObject.cpList = userEntry.split(/[ ]+/); 
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
		_DepartmentDependancies = function(e){
			if($('input#search_selectdepartment').val() != currentSelectedDeptName){
				searchRequestObject.departmentNumber = '';
				searchRequestObject.vsNumber = '';
				searchRequestObject.vendorName = '';
				searchRequestObject.brandIdentifier = '';
				searchRequestObject.classNumber = '';
				searchRequestObject.subClassNumber = '';
				
				$('#inputvsnum').val('');
				$('#inputgc').val('');
			//	inputgc
				$('#search_classnumber').editableSelect('clear');
				$('#search_classnumber').val('');
				
				$('#search_subclassnumber').editableSelect('clear');
				$('#search_subclassnumber').val('');
				
				$('#search_brandname').editableSelect('clear');
				$('#search_brandname').val('');
				
				$('#search_vendorname').editableSelect('clear');
				$('#search_vendorname').val('');
				_enableField('inputvsnum',false);
				_enableField('inputgc',false)
			
				_disableAllDepartmentDependancies();
				$('.specialViewBy').attr("disabled","true");
				
			}
			if($("#search_view_by").val() == "Ecomm View" ||$("#search_view_by").val() == "Pricing View"){
				$("#search_view_by").val("View By");
				searchRequestObject.viewBy = "Vendor Style";
				$('.specialViewBy').attr("disabled","true");
			}
			_verifyReadyforsearch();
		},
		
		_ClassDependencies = function(e){
			if($('input#search_classnumber').val() != currentSelectedClassName){
				searchRequestObject.classNumber = "";
				searchRequestObject.subClassNumber = "";				
				$('#search_subclassnumber').editableSelect('clear');
				$('#search_subclassnumber').val('');
				_disableAllClassDependancies();
			}
			_verifyReadyforsearch();
		},
		
		_SubClassDependencies = function(){
			if($('input#search_subclassnumber').val() != currentSelectedClassName){
				$('.specialViewBy').attr("disabled","true");
				searchRequestObject.subClassNumber = "";
			}
		},
		_BrandDependencies = function(){
			if($('input#search_brandname').val() != currentSelectedBrandName){
				searchRequestObject.brandIdentifier = "";
			}
			_verifyReadyforsearch();
		},
		
		_P1Dependancies = function(e){
			var p1FieldVal = $('input#search_p1code').val();
			if(p1FieldVal != currentSelectedP1Name || (p1FieldVal == "" && searchRequestObject.productPrimaryTypeCode =="")){
				searchRequestObject.productPrimaryTypeCode = "";
				searchRequestObject.p2 = "";
				searchRequestObject.p3 = "";
				
				$('#search_p3number').editableSelect('clear');
				$('#search_p3number').val('');
				
				$('#search_p2number').editableSelect('clear');
				$('#search_p2number').val('');
				_disableAllP1Dependancies();
			}
			_verifyReadyforsearch();
		},
		_P2Dependancies = function(e){
			if($('input#search_p2number').val() != currentSelectedP2Name){
				searchRequestObject.p2 = "";
				searchRequestObject.p3 = ""
				
				$('#search_p3number').editableSelect('clear');
				$('#search_p3number').val('');
				_disableAllP2Dependancies();
			}
			_verifyReadyforsearch();
		},
		
		_P3Dependancies = function(e){
			if($('input#search_p3number').val() != currentSelectedP3Name){
				searchRequestObject.p3 = ""
			}
		},
		
		
		_vendorNameDependancies = function(e){
			if($('input#search_vendorname').val() != currentSelectedVendorName){
				searchRequestObject.vendorName = "";
				var deptInfo = Kjs.storage.getData("deptInfo");	
				var brandData = [];
				temp = {};
				var brandId;
				var brandDescription;
				var repeatedBrand = false; 			
				
				for(var vendorObj in deptInfo.responseData.departmentHierarchy.vendorMap){
					for(var brandObj in deptInfo.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap){
						
						brandId =deptInfo.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandId;
						brandDescription = deptInfo.responseData.departmentHierarchy.vendorMap[vendorObj].brandMap[brandObj].brandDescription;
						
						for(itemName in brandData){
							if(brandData[itemName].brandDescription == brandDescription){
								repeatedBrand = true;
							}
						}
						if(repeatedBrand == false){
							temp = {"brandId" : brandId,
									"brandDescription" : brandDescription
							};	
							brandData.push(temp);
							temp = {}
						}else{
							repeatedBrand = false;
						}							
					}
				}

				var brandHtml = $tmpl.render(env.commonHeaderTpl.brandTpl, {brandname : brandData});
				$('.brandNameList').html('');
		        $('.brandNameList').append(brandHtml);		
		        $('#search_brandname').editableSelect({ effects: 'slide' }).on('select.editable-select', function (e, li) {
		        	searchRequestObject.brandIdentifier = li.val();
		        	currentSelectedBrandName = $('#search_brandname').val();
		        
		        });
		        $('#search_brandname').editableSelect('hide');
			}
			_verifyReadyforsearch();
		},
		_formatRequestBody = function(){
			for(attrib in searchRequestObject){
				if(searchRequestObject[attrib] == ""){
					searchRequestObject[attrib] = null;
				}
			}
			if($('#search_view_by').val() != 'Vendor Style'){
				searchRequestObject.viewBy = $('#search_view_by').val();
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
		
		_handleSearchButtonClick = function(){
			var formattedURL = "/search/ViewByResults";
			_formatRequestBody();
			$('.box-overlay').show();
			$('.box-loading').show();
			//Add third attrib ''
			passSortValue = "";
			var data = { 'pageNumber' : '0', getFromSession : false, 'sortingColumn' : passSortValue};
			var inputRequest = {
					'selectedSearchInputRequest' : searchRequestObject,
					'additionalMetadata' : data
			}
			Kjs.vpAjax.post(formattedURL, JSON.stringify(inputRequest), _successRefineResponse, _errorRefineResponse);
		},
		_handleMyProfile = function(){
			var userData = Kjs.storage.getData('userInfo');
			if(userData.role != null && userData.role!= "" && (userData.role == "VA" || userData.role == "VU" ||userData.role=="Vendor")){
		     	var _successCallBack = function(data){  
			     		if(data != null && data != undefined){  
			     			if(data.errorMessage != undefined && data.errorMessage != ""){
			     				Kjs.modelPopUp.displayServiceError(data.errorMessage);
			     			}else{
			     				sessionStorage.setItem("myProfile",JSON.stringify({"isVendor":true,"hideDelete": true,"hideAdminRights":true,status: true,data:JSON.stringify(data)}));
				     			window.location.href = "/user/getuserprofile"; 
			     			}
			     		}else{
			     			Kjs.vpAjax.hideLoaderonEmptyResponse();
			     		}
			     	},
			     	_errorCallBack = function(){
			     	};
		    	var url = location.origin +"/user/getuserdetails";
		    	Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
		    }else{  
		     	var _successCallBack = function(data){
		      			if(data != null && data != undefined){ 
		      				if(data.errorMessage != undefined && data.errorMessage != ""){
			     				Kjs.modelPopUp.displayServiceError(data.errorMessage);
			     			}else{
			     				var hideAR = data.responseData.userInfoData.admin;
			      				sessionStorage.setItem("myProfile",JSON.stringify({"isVendor":false,"hideDelete": false,"hideAdminRights": hideAR, status: true,data:JSON.stringify(data)}));
			      				window.location.href = "/user/getuserprofile";
			     			}
		      			}else{
		      				Kjs.vpAjax.hideLoaderonEmptyResponse();
		      			}
		      		},
		      	_errorCallBack = function(){
		      	};
		     	var url = location.origin+"/user/getLoginUserProfile";
		     	Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
		    }
		},
		_handleManageUser =function(){
			sessionStorage.setItem("manageUser",true);
			window.location.href = "/user/getuserprofile?type=ManageUser";
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
		_enableField = function(id,enableTrue){
			if(enableTrue){
				$('#'+id).attr("disabled",false);
				$('#'+id).css('opacity',1);
			}else{
				$('#'+id).attr("disabled",true);
				$('#'+id).css('opacity',0.4);
			}
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
		},
		
		_disableAllDepartmentDependancies = function (){
			_enableField("inputvsnum",false);
			_enableField("inputgc",false);
			_enableField("search_classnumber",false);
			_enableField("search_subclassnumber",false);
			_enableField("search_brandname",false);
			_enableField("search_vendorname",false);
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
			_enableField("search_subclassnumber",false);
		},
		_handleLogoutClick = function(){
			_clearLocalAndSessionStorage();
			$('#logoutFrom').submit();
		},
		_sessionTimeOut = function(){
			_clearLocalAndSessionStorage();
			window.location.href = "/logout";
		},
		_contineSession = function(){
			_noAction = true;
			var url = "/session/Continue";
			_success = function(data){
				if(data.errorMessage != undefined && data.errorMessage != ""){
					Kjs.modelPopUp.displayServiceError(data.errorMessage);
				}else{
					if(data.responseData.isSessionUpdate){
						clearTimeout(Kjs.commonHeader.headerPanel.logout_timer);
						Kjs.commonHeader.headerPanel.logout_timer = null;
						clearTimeout(Kjs.commonHeader.headerPanel.g_timer);
						Kjs.commonHeader.headerPanel.g_timer = null;
						Kjs.commonHeader.headerPanel.startTimer();
					}
				}
			},
			_error = function(){
				window.location.reload();
			};
			Kjs.vpAjax.get(url,'', _success,_error);
		},
		_sessionLogout = function(){
			_clearLocalAndSessionStorage();
			Kjs.storage.saveData("sessionTimeout", "true");
			window.location.href = "/logout";
		},
		_clearLocalAndSessionStorage = function(){
			Kjs.storage.saveData("appliedFilterParam", "");
			Kjs.storage.saveData("homeUrl", "");
			Kjs.storage.saveData("sessionTimeout", 120);
			Kjs.storage.saveData("userInfo", "");
		},
		_countdownTimer = function() {
		    var seconds = 120;
		    function tick() {
		        var counter = document.getElementById("session_timer");
		        seconds--;
		        if(counter != null){
		        	counter.innerHTML = String(seconds);
			        if( seconds > 0 ) {
			            setTimeout(tick, 1000);
			        } else {
			        	_sessionLogout();
			        }
		        }
		    }
		    tick();
		},
		_startTimer = function() {
			if(!Kjs.storage.getData("sessionTimeout")){
				Kjs.storage.saveData("sessionTimeout", 120);	
			} 
			var sessionTimeoutMs = Kjs.storage.getData("sessionTimeout");
			//timeout = timeout - 2;
			sessionTimeoutMs = sessionTimeoutMs * 60 * 1000;
			var _sessionRemainder = 2*60*1000;
			sessionTimeoutMs = sessionTimeoutMs - _sessionRemainder;
			var startTime  = new Date();
			Kjs.commonHeader.headerPanel.g_timer = setTimeout(function() {
				var endTime = new Date(), timeOutMs = Kjs.storage.getData("sessionTimeout") * 60 * 1000, timedDiff = (endTime-startTime-timeOutMs)/1000;
				if(timedDiff > 0){
					_sessionLogout();
			    } else {
			    	Kjs.modelPopUp.alertConfirmModelPopUp(function(){_contineSession();}, function(){_sessionLogout();}, {message:"Your session will expire in <span id='session_timer'></span> seconds.", okbtn:"Continue Session", noText : "Logout"});
					Kjs._(function(){
						_countdownTimer();
					},50);
					$('body').find('.fa-times').addClass('close-modal');
			    }
				/*Kjs.commonHeader.headerPanel.logout_timer = setTimeout(function(){
					_sessionLogout();
				}, _sessionRemainder);*/
		    }, sessionTimeoutMs);
		},
		_closeModal = function(){
			_sessionLogout();
		},
		_markAllAsRead = function(response){

			for(i=0;i<response.responseData.notifications.notificationList.length;i++){
				response.responseData.notifications.notificationList[i].unread=false;
			}
			return response;
		},
		_disposeHeader = function(){
			if (_panel) {
				_deactivate();
				_panel.remove();
				_panel = null;
			}
		},
		_hideSubHeaderOption = function(){
			$('#collapsibleNavbar').addClass('fade');
            $('#collapsibleSignedNavbar').addClass('fade');
            $('#collapsibleVendorSignedNavbar').addClass('fade');
		},
		_hideSubMassHeaderOption = function(){
			_hideSubHeaderOption();
			$('.navbar-brand').addClass('fade');
			$('.btn-notify-wrapper').addClass('fade');
			$('.btn-avatar-wrapper').addClass('fade');
		},
		_getUrlParameter = function(param){
			var path = window.location.href;
			var pathname = param;
			var returnvalue = "";
			if (location.search !="" && location.search.split("?")[1] != undefined && location.search.split("?")[1] !="") {
			  	var name2 = location.search.split("?")[1].split("&");
			   	for(i=0;i<name2.length;i++){
				    if (name2[i]!=undefined && name2[i]!=null && name2[i]!='') {
				     	var name3 = name2[i].split("=");
				     	if (name3[0]==pathname) {
				      		returnvalue = name3[1];
				      		break;
				     	}
				    }
			   	}
			}
			   return returnvalue;
		},
		_updateStyleForBreadcurmb = function(){
			$('.avatar-pic').addClass('updateProfile');
			$('.btn-notify-wrapper img').attr('src','/static/images/ic-notifications-o@2x.png');
			$('.justify-content-start img').attr('src','/static/images/home@2x.png');
			$('header.main nav .navbar-brand img').css({'width':'32px','height':'32px'});
			$('header.main nav .nav-prime .btn-search-opener').addClass('updatedImages');
			$('.header-new').css('left','57px');
			$('#main-header').css({"background":"linear-gradient(to right, #812F80 -10% , #5D5596 27%, #5D5596 23%, #1196B3 77%)"});
			$('.btn-search-wrapper').removeClass('fade');
			$('#navBreadCrumb .verdor-group-tiltle-name').css({'background':'none','color':'#ffffff'});
			$('#navBreadCrumb .header-mg a,#navBreadCrumb .header-mg,.header-new').css('color','#ffffff');
		},
		_loadSubHeader = function(){
			   try{
			   var breadcurmburl,sub1,sub2,sub3,
			       weburl = window.location.pathname;
			   $('#navNotification').parent().find('a').removeAttr('href');
			   var merchantGrpText = "<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-merchantgroup' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp<i class='fa fa-angle-right'></i> &nbsp&nbsp";
			   var mgTextElipse = "<span class='header-mg vendor-style-title hoverElipse'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-dashboard'>...</a></span>&nbsp&nbsp<i class='fa fa-angle-right'></i> &nbsp&nbsp";
			   var elipseCount;
			   switch (weburl) {
			   	  case "/admin/productAdminPage":
				  		_hideSubHeaderOption();   
				  		sub1 = "Product Management";
				        sub2 = ""
			        	if(typeof productManagementBreadcrumb !== 'undefined'){
			        		sub1 = productManagementBreadcrumb
				        }
				        //Default Breadcrum end on Initial Page Load
				        sub2 += "Product Settings"
	
				        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp &nbsp&nbsp<span class='product-header-bn'><a data-desc='' href='../cp/home'> <span class='verdor-group-tiltle-name prodMaintenacnePage VPAS-GlobalHeader-headertitle-skuattribute-vendor-style' title='VS# "+sub1+"'> "+sub1 +"</span></a></span><span class='grid_header_txt'>&nbsp;&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;&nbsp;<span class='sub2'>"+sub2+"</span></span></div>";
				        
	
	                          breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
	                              "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
	                              "</ul></div>";
					
				        _printBreadcrumb(breadcurmburl);
				        _updateStyleForBreadcurmb();
				        _redirectToProdManagment = function(){
				        	window.location.href = "../home"
				        }
				        
				        $('.headinLabel, .mgClick').off('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
				        $('.headinLabel, .mgClick').on('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
				        $('.prodMaintenacnePage, .vsClick').off("click", _redirectToProdManagment);
				        $('.prodMaintenacnePage, .vsClick').on("click", _redirectToProdManagment);
		   			
			        	break;
			   	  case "/cp/preview":
			   		if(klinkBCCWhiteListUsersJson == true){
			   		  		_hideSubHeaderOption();   
					        sub1 = productManagementBreadcrumb;
					        sub2 = ""
					        if(previewJson[0].consumerProductId.substring(0,1) != 'c'){
					        	sub2+= "CP ID "
					        }
					        
					        sub2 += previewJson[0].consumerProductId;
		
		                    var maintenanceFlag = _getUrlParameter("maintenanceFlag");
					        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp &nbsp&nbsp<span class='product-header-bn'><a data-desc='' href='../cp/home'> <span class='verdor-group-tiltle-name prodMaintenacnePage VPAS-GlobalHeader-headertitle-skuattribute-vendor-style' title='VS# "+sub1+"'> "+sub1 +"</span></a></span><span class='grid_header_txt'>&nbsp;&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;&nbsp;<span class='sub2'>"+sub2+"</span></span></div>";
					        
	
		                          breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
		                              "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
		                              "</ul></div>";
						
					        _printBreadcrumb(breadcurmburl);
					        _updateStyleForBreadcurmb();
					        _redirectToProdManagment = function(){
					        	window.location.href = "../home"
					        }
					        
					        $('.headinLabel, .mgClick').off('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
					        $('.headinLabel, .mgClick').on('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
					        $('.prodMaintenacnePage, .vsClick').off("click", _redirectToProdManagment);
					        $('.prodMaintenacnePage, .vsClick').on("click", _redirectToProdManagment);
			   			}
				        break;

				        case "/cp/cpPreview":
			   		if(klinkBCCWhiteListUsersJson == true){
							sub1 = productManagementBreadcrumb;
			   				if (Kjs.storage.getData('userInfo').role == "VU" || Kjs.storage.getData('userInfo').role == "VA" || Kjs.storage.getData('userInfo').role == "Vendor") {
			   					vendorsub1 = "Search Results";
			   				}else{
			   					vendorsub1 = sub1;
			   				}
			   		  		_hideSubHeaderOption();
					        sub2 = "";
					        sub2 += previewJson[0].consumerProductId;
		
		                    var maintenanceFlag = _getUrlParameter("maintenanceFlag");
					        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp &nbsp&nbsp<span class='product-header-bn'><a data-desc=''> <span class='verdor-group-tiltle-name prodMaintenacnePage VPAS-GlobalHeader-headertitle-skuattribute-vendor-style' title='"+sub1+"'> "+vendorsub1 +"</span></a></span><span class='grid_header_txt'>&nbsp;&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;&nbsp;<span class='sub2'>"+sub2+"</span></span></div>";
					        
	
		                          breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
		                              "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
		                              "</ul></div>";
						
					        _printBreadcrumb(breadcurmburl);
					        _updateStyleForBreadcurmb();

					        $('.navbar-brand a').removeAttr('href');
					        $('.headinLabel, .mgClick').off('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
					        $('.headinLabel, .mgClick').on('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
					        
			   			}
				        break;
				      
				      case "/create/collectionInfo":
							sub1 = "Product Management";
			   		  		_hideSubHeaderOption();
					        sub2 = "Create Collection";
					        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp &nbsp&nbsp<span class='product-header-bn'><a data-desc='' href='../cp/home'> <span class='verdor-group-tiltle-name prodMaintenacnePage VPAS-GlobalHeader-headertitle-skuattribute-vendor-style' title='"+sub1+"'> "+sub1 +"</span></a></span><span class='grid_header_txt'>&nbsp;&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;&nbsp;<span class='sub2'>"+sub2+"</span></span></div>";
					        
	
		                          breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
		                              "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
		                              "</ul></div>";
						
					        _printBreadcrumb(breadcurmburl);
					        _updateStyleForBreadcurmb();
					        $('.headinLabel, .mgClick').off('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
					        $('.headinLabel, .mgClick').on('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
				        break;
				      
				      
				      case "/maintenance/ccDetailsPage":
				    	_hideSubHeaderOption(); 
				    	var headerVal = Kjs.storage.getData('headerDetails');
				    	var headerVendorStyle = maintenanceJson.responseData.kohlsStyle.vendorStyleId;
				        if(headerVendorStyleId == undefined || headerVendorStyleId == "" ||headerVendorStyleId == null){
				        	headerVendorStyleId = Kjs.storage.getData('headerDetails');
				        }
	                      totalBreadcrumbLength = "Merchant Groups".length + headerVal.merchantGroup.length + headerVendorStyle.length;
	                      if(headerVal.merchantGroup.length>=30 || totalBreadcrumbLength>=101){
	                          combineMgTxtAndName = merchantGrpText + "<span class='header-mg hoverElipse VPAS-GlobalHeader-headertitle-merchantgroup-name'>...</span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp";
	                      }else{
	                          combineMgTxtAndName = merchantGrpText + "<span class='header-mg headinLabel VPAS-GlobalHeader-headertitle-merchantgroup-name' title='"+headerVal.merchantGroup+"'> "+headerVal.merchantGroup +"</span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp";
	                      }
				        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp"+combineMgTxtAndName+ "<span class='header-bn'> <span class='verdor-group-tiltle-name' title='VS# "+headerVendorStyle+"'>VS# "+headerVendorStyle +"</span></span></div>";
	                    if(headerVal.merchantGroup.length>=30 || totalBreadcrumbLength>=101){
							breadcurmburl += "<div class='header-elipse-details cc-details'><ul>"+
							  "<li><span class='mgNameClick'>"+headerVal.merchantGroup+"</span></li>" +
							  "</ul></div>";
	                    }
	                    _printBreadcrumb(breadcurmburl);
	                    _updateStyleForBreadcurmb();
				        $('.headinLabel, .mgNameClick').off("click",Kjs.maintenancePageContainer.maintenancePanel.navToSearchPage);
	                    $('.headinLabel, .mgNameClick').on("click",Kjs.maintenancePageContainer.maintenancePanel.navToSearchPage);
			   		  break;
			   
			      case "/cp/editAttributes": 
			    	 _hideSubHeaderOption(); 
			        sub1 = _getUrlParameter("cpIds");
			        breadcurmburl = "<div class='header-new edit-attribute' style=''><span class='header-full-text'>&nbsp;<a id='toGoBack'><i class='fa fa-angle-left'></i> </a> &nbsp&nbsp<span class='cpattr'> Fill Web Attributes for CP <span title="+sub1+" style='cursor:pointer;'>"+sub1+"</span> </span></div>";
			        _printBreadcrumb(breadcurmburl);
			        _updateStyleForBreadcurmb();
			        $('#main-header .navbar-toggler').addClass('fade');
		            $('#main-header .navbar-brand').addClass('fade');
		            $('#main-header .justify-content-end').addClass('fade');
			        break;    

                  case "/user/getuserprofile":
				   _hideSubHeaderOption();
				   var userName = Kjs.storage.getData('userInfo').userName;
				   mgTextElipse = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp;<span class='hoverElipse'>...</span></span></div>"
				   merchantGroupTxt = "Merchant Groups",
				   dashboardTxt = "Dashboard",
				   showelipses_merchantGroup = (userName.length + merchantGroupTxt.length >= 101) ? true : false,
				   showelipses_dashboardTxt = (userName.length + dashboardTxt.length >= 101) ? true : false; 
				   if(location.search === ""){
					   if(Kjs.storage.getData('userInfo').role === 'VU' || Kjs.storage.getData('userInfo').role === 'VA'){
					   		if (showelipses_merchantGroup){
					   			breadcurmburl = mgTextElipse +
					   							"<div class='header-elipse-details'><ul>"+
					   							"<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Group</a></span></li>"+
					   							"<li><span>"+userName+"</span></li>"
					   							"</ul></div>"
					   			//breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-dashboard' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>"+userName+"</span></a></span></span></div>";
					   		}else{
					   			 breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-dashboard' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>"+userName+"</span></a></span></span></div>";
					   		}
						  
					   }
					   else{
                           if(Kjs.storage.getData('userInfo').admin === true){
                           		if (showelipses_dashboardTxt){
                           			breadcurmburl = mgTextElipse +
					   							"<div class='header-elipse-details'><ul>"+
					   							"<li><span><a href='../user/getuserprofile?type=kohlsUserDashboard'>Dashboard</a></span></li>"+
					   							"<li><span>"+userName+"</span></li>"
					   							"</ul></div>";
                           		}else{
                           			breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a href='../user/getuserprofile?type=kohlsUserDashboard' class='VPAS-GlobalHeader-headertitle-dashboard'> Dashboard </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i>&nbsp;&nbsp&nbsp;<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>"+userName+"</span></a></span></span></div>";
                           		}
						   		
                           }else{
                           		if (showelipses_dashboardTxt){
                           			breadcurmburl = mgTextElipse +
					   							"<div class='header-elipse-details'><ul>"+
					   							"<li><span><a data-desc href='javascript:void(0)'>"+userName+"</span></li>"
					   							"</ul></div>";
                           		}else {
                           			breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>"+userName+"</span></a></span></span></div>";
                           		}
                               
						   }
					   }
				   }else{
					   if(Kjs.storage.getData('userInfo').role === 'VU' || Kjs.storage.getData('userInfo').role === 'VA'){
					   		if (showelipses_merchantGroup){
					   			breadcurmburl = mgTextElipse +
					   							"<div class='header-elipse-details'><ul>"+
					   							"<li><span><a data-desc href='javascript:void(0)'>Manage Users</span></li>"
					   							"</ul></div>";
					   		}else {
					   			breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-userprofile-merchantgroup' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>Manage Users</span></a></span></span></div>";
					   		}
						   
					   }else{
					    		if(Kjs.storage.getData('userInfo').admin === true){
					    			if (showelipses_dashboardTxt){
					    				breadcurmburl = mgTextElipse+
						   							"<div class='header-elipse-details'><ul>"+
						   							"<li><span><a href='../user/getuserprofile?type=kohlsUserDashboard'>Dashboard</a></span></li>"+
						   							"<li><span>"+userName+"</span></li>"
						   							"</ul></div>";
					   				}else {
					   					breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-dashboard' href='../user/getuserprofile?type=kohlsUserDashboard'> Dashboard </a> </span>&nbsp&nbsp<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>"+userName+"</span></a></span></span></div>";	
					   				}
						   		
					   		}else{
					   			if (showelipses_dashboardTxt){
					   				breadcurmburl = mgTextElipse+
					   							"<div class='header-elipse-details'><ul>"+
					   							"<li><span><a data-desc href='javascript:void(0)'>"+userName+"</span></li>"
					   							"</ul></div>";
                           		}else {
                           			breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>"+userName+"</span></a></span></span></div>";
					   			}
                                
							}
					   }
				   }
				   _printBreadcrumb(breadcurmburl);
				   break;

			      case "/user/getuserprofile?type=kohlsUserDashboard":
			    	  _hideSubHeaderOption();   
			        breadcurmburl = "";
			        break;

			      case "/merchandising/vendorGridEditViewAttributeList":
			    	  _hideSubHeaderOption();
			    	  if(gridEditViewJson.responseData.vendorStyleDetails != undefined && gridEditViewJson.responseData.vendorStyleDetails.length > 0){
			    	  	sub1 = gridEditViewJson.responseData.vendorStyleDetails[0].merchantGroupDescription;
			    	  }else{
			    	  	sub1 = '';
			    	  }
			          totalBreadcrumbLength = "Merchant Groups".length + sub1.length + "Grid Edit View".length;
                      if(sub1.length>=30 || totalBreadcrumbLength >= 101){
                          combineMgTxtAndName = mgTextElipse;
                      }else{
                          combineMgTxtAndName = "<span class='header-mg grid_header_txt attribute-grid'><a data-desc='' href='javascript:void(0)' class='VPAS-GlobalHeader-headertitle-vendorgridedit-merchantgroup'>"+ sub1+"</a></span> &nbsp<i class='fa fa-angle-right'></i> &nbsp&nbsp";
					  }
			          breadcurmburl = "<div class='header-new edit-attr-vendor' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp 	<span class='header-fst'> <a href='/merchandising/MerchantGroupListViewPage' class='VPAS-GlobalHeader-headertitle-vendorgridedit-dots'>Merchant Groups</a>	</span>&nbsp;&nbsp;	<i class='fa fa-angle-right'></i> &nbsp&nbsp"+combineMgTxtAndName+"<span class='header-bn grid-header'><a data-desc='' href='javascript:void(0)'><span class='verdor-group-tiltle-name'>Grid Edit View</span></a></span></span></div>";
                      if(sub1.length>=30 || totalBreadcrumbLength >= 101){
                          breadcurmburl += "<div class='header-elipse-details grid-edit-header-elipse'><ul>"+
                              "<li><span class='mgClick'>"+sub1+"</span></li>" +
                              "</ul></div>";
					  }
			          _printBreadcrumb(breadcurmburl);
			          _updateStyleForBreadcurmb();
			          $(".grid_header_txt, .mgClick").off("click", Kjs.gridEditView.gridEditViewPanel.redirectToStylePage);
					  $(".grid_header_txt, .mgClick").on("click", Kjs.gridEditView.gridEditViewPanel.redirectToStylePage);

			         break;
			      case "/merchandising/fetchGridEditViewAttributeList":
			    	  _hideSubHeaderOption(); 
			          if(gridEditViewJson.responseData.vendorStyleDetails != undefined && gridEditViewJson.responseData.vendorStyleDetails.length > 0){
			    	  	sub1 = gridEditViewJson.responseData.vendorStyleDetails[0].merchantGroupDescription;
			    	  }else{
			    	  	sub1 = '';
			    	  }
			          totalBreadcrumbLength = "Merchant Groups".length + sub1.length + "Grid Edit View".length;
			          if(sub1.length>=30 || totalBreadcrumbLength >= 101){
                          combineMgTxtAndName = mgTextElipse;
                      }else{
                          combineMgTxtAndName = "<span class='header-mg grid_header_txt attribute-grid'><a data-desc='' href='javascript:void(0)' class='VPAS-GlobalHeader-headertitle-vendorgridedit-merchantgroup'>"+ sub1+"</a></span> &nbsp<i class='fa fa-angle-right'></i> &nbsp&nbsp";
					  }
			          breadcurmburl = "<div class='header-new edit-attr-vendor' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp 	<span class='header-fst'> <a href='/merchandising/MerchantGroupListViewPage' class='VPAS-GlobalHeader-headertitle-vendorgridedit-dots'>Merchant Groups</a>	</span>&nbsp;&nbsp;	<i class='fa fa-angle-right'></i> &nbsp&nbsp"+combineMgTxtAndName+"<span class='header-bn grid-header'><a data-desc='' href='javascript:void(0)'><span class='verdor-group-tiltle-name'>Grid Edit View</span></a></span></span></div>";
                      if(sub1.length>=30 || totalBreadcrumbLength >= 101){
                          breadcurmburl += "<div class='header-elipse-details grid-edit-header-elipse'><ul>"+
                              "<li><span class='mgClick'>"+sub1+"</span></li>" +
                              "</ul></div>";
					  }
			          _printBreadcrumb(breadcurmburl);
			          _updateStyleForBreadcurmb();
			          $(".grid_header_txt, .mgClick").off("click", Kjs.gridEditView.gridEditViewPanel.redirectToStylePage);
					  $(".grid_header_txt, .mgClick").on("click", Kjs.gridEditView.gridEditViewPanel.redirectToStylePage);
			    	  
			    	  break;
			      case "/merchandising/newCreateMerchantGroup":
			    	_hideSubHeaderOption(); 
			    	if(Kjs.storage.getData('merchantGroupName') == null){
			    		breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-create-new-merchant-merchantgroup' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>Create New Merchant Group</span></a></span></span></div>";
			    	}else{
			    		var mgName = Kjs.storage.getData('merchantGroupName');
			    		breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-create-new-merchant-merchantgroup' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)' title='"+mgName+"'> <span class='verdor-group-tiltle-name'>"+mgName+"</span></a></span></span></div>";
			    	}
			        _printBreadcrumb(breadcurmburl);
			        _updateStyleForBreadcurmb();
			        break;
			      
			      case "/merchandising/getSKUsFromConsumerProductId":
			    	_hideSubHeaderOption();   
			        sub1 = _getUrlParameter("consumerProductId");
			        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg'> <a class='backToCpDetailPage VPAS-GlobalHeader-headertitle-cp-management' href='#'> Product Management </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>"+sub1+"</span></a></span></span>";
			        _printBreadcrumb(breadcurmburl);
			        _updateStyleForBreadcurmb();
			        $('.backToCpDetailPage').off('click',Kjs.skuListDisplay.skuListDisplayPanel.handlebackToCp);
			        $('.backToCpDetailPage').on('click',Kjs.skuListDisplay.skuListDisplayPanel.handlebackToCp);
			        break; 

			      case "/merchandising/VendorStyleListViewPage":			  
			    	_hideSubHeaderOption();   
			    	if(vendorGroupListJson == undefined|| vendorGroupListJson.merchantGroupId == null ||vendorGroupListJson.merchantGroupId == undefined ){
			    		sub1= decodeURIComponent  (_getUrlParameter("merchantGroupId"));
			        }else{
			        	sub1 = vendorGroupListJson.merchantGroupDescription;
			        }
			    	var title= sub1;
			      
			    	if(sub1.length>74){
	                      breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp"+mgTextElipse+"<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)' title='"+title+"'> <span class='verdor-group-tiltle-name header-bn-ellipse'>"+sub1+"</span></a></span></span></div>";
	                      elipseCount = true;	
					  }else{
			        		breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-merchantgroup' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)' title='"+title+"'> <span class='verdor-group-tiltle-name header-bn-ellipse'>"+sub1+"</span></a></span></span></div>";
			        	}

			        if(elipseCount){
			        	breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
	                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
	                            "</ul></div>";
			        }		
			        _printBreadcrumb(breadcurmburl);
			        _updateStyleForBreadcurmb();
			        break; 
			        
			      case "/merchandising/VendorStyleListPage":
				    	_hideSubHeaderOption();   
				        sub1 = vendorGroupListJson.merchantGroupDescription;
				        if (sub1 == undefined || sub1 == null || sub1 == "") {
				        	sub1 = decodeURIComponent(_getUrlParameter("merchantGroupId"));
				        }
				        
				        var title=vendorGroupListJson.merchantGroupDescription;
				        if(sub1.length>74){
				        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp"+mgTextElipse+"<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)' title='"+title+"'> <span class='verdor-group-tiltle-name header-bn-ellipse'>"+sub1+"</span></a></span></span></div>";	
				        	elipseCount = true;
				        }else{
				        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)' title='"+title+"'> <span class='verdor-group-tiltle-name header-bn-ellipse'>"+sub1+"</span></a></span></span></div>";
				        }

//				        if(elipseCount){
				        	breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
	                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
	                            "</ul></div>";
//				        }
				        _printBreadcrumb(breadcurmburl);
				        _updateStyleForBreadcurmb();
				        break;  
				  
			      case "/merchandising/editMapStyleView":			  
				    	_hideSubHeaderOption(); 
				    	var localVal = Kjs.storage.getData('headerInfo');
				    	
				    	var title = localVal.merchantDesc;
				    	
				        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-merchantgroup' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)' title='"+title+"'> <span class='verdor-group-tiltle-name header-bn-ellipse'>"+title+"</span></a></span></span></div>";

				        breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
		                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
		                            "</ul></div>";	
				        _printBreadcrumb(breadcurmburl);
				        _updateStyleForBreadcurmb();
				        break;       
				        
			      case "/merchandising/submitMapStyleView":			  
				    	_hideSubHeaderOption(); 
				    	var localVal = Kjs.storage.getData('headerInfo');
				    	
				    	var title = localVal.merchantDesc;
				    	
				        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a class='header-title-merachant VPAS-GlobalHeader-headertitle-merchantgroup' href='/merchandising/MerchantGroupListViewPage'> Merchant Groups </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn header-bn-vendor'><a data-desc='' href='javascript:void(0)' title='"+title+"'> <span class='verdor-group-tiltle-name header-bn-ellipse'>"+title+"</span></a></span></span></div>";

				        breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
		                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
		                            "</ul></div>";	
				        _printBreadcrumb(breadcurmburl);
				        _updateStyleForBreadcurmb();
				        break;       
				        
			      case "/maintenance/maintenancePage":
			        _hideSubHeaderOption();   
			        var headerVendorStyleId = maintenanceJson.responseData.kohlsStyle.vendorStyleId;
			        if(headerVendorStyleId == undefined || headerVendorStyleId == "" ||headerVendorStyleId == null){
			        	headerVendorStyleId = ((location.search).split('&')[1]).split('=')[1];
			        }
			        if (_getUrlParameter("merchantGroupMaintenance")=='true' && maintenanceJson.responseData!=undefined && maintenanceJson.responseData.kohlsStyle!=undefined && maintenanceJson.responseData.kohlsStyle.merchantGroupId!=undefined) {			        	
			        	var MGNAme = maintenanceJson.responseData.kohlsStyle.merchantGroupId
			        	var shotUrlText = "<a data-desc='' class='searchRedir' href='.."+"/merchandising/VendorStyleListViewPage?merchantGroupId="+encodeURIComponent(MGNAme)+"'><span class='header-mg headinLabel VPAS-GlobalHeader-headertitle-ccmaintenance-search-result'>"+MGNAme+"</span></a>";
			        }else{
			        	var shotUrlText = "<span class='header-mg vendor-style-title'> <a class='headinLabel VPAS-GlobalHeader-headertitle-maintenance-search-result'> Search Results </a> </span>";
			        }
			        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp"+shotUrlText+"&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name vSum' title='VS# "+headerVendorStyleId+"'>VS# "+headerVendorStyleId+" </span></a></span></span></div>";
			        _printBreadcrumb(breadcurmburl);
			        _updateStyleForBreadcurmb();
                    $('.headinLabel').off('click',Kjs.maintenancePageContainer.maintenancePanel.navToSearchPage);
                    $('.headinLabel').on('click',Kjs.maintenancePageContainer.maintenancePanel.navToSearchPage);

                      break;

			      case "/maintenance/ccMaintenance":
			    	_hideSubHeaderOption();   
			        sub1 = decodeURIComponent(_getUrlParameter("vendorStyleId"));
			        sub2 = _getUrlParameter("CustomerChoiceId");
			        kohlsStyleId = _getUrlParameter("kohlsStyleID");
			        if (ccMaintenanceJson.responseData!=undefined && ccMaintenanceJson.responseData.vendorStyleDetails!=undefined && ccMaintenanceJson.responseData.vendorStyleDetails.merchantGroupId!=undefined) {
			        	var merchantGroupID1 = ccMaintenanceJson.responseData.vendorStyleDetails.merchantGroupDescription;
			        	var merchantGroupIDID = ccMaintenanceJson.responseData.vendorStyleDetails.merchantGroupId;
			        }else{
			     	   var merchantGroupID1 = _getUrlParameter("merchantGroup");
			     	   var merchantGroupIDID = _getUrlParameter("merchantGroup");
			    	}
			        vendorStyleId = decodeURIComponent(_getUrlParameter("vendorStyleId"));	
			        	if (_getUrlParameter("merchantGroupMaintenance")=='true') {
	                        totalBreadcrumbLength = "Merchant Groups".length + merchantGroupID1.length + sub1.length + sub2.length;
							if(merchantGroupID1.length>=30 || totalBreadcrumbLength >= 101){
								combineMgTxtAndName = mgTextElipse;
		                        elipseCount = true;
		                        var ccDetails_URL = "/maintenance/ccDetailsPage?kohlsStyleId="+kohlsStyleId;
							}else{
				        		var addExtra = "&merchantGroupMaintenance=true";
				        		var ccDetails_URL = "/maintenance/ccDetailsPage?kohlsStyleId="+kohlsStyleId;
							  	combineMgTxtAndName = mgTextElipse + "<span class='header-mg nav_to_details headinLabel skuheadnav VPAS-GlobalHeader-headertitle-skudetails-merchantgroup-name' title='"+decodeURIComponent(merchantGroupID1)+"'><a href='.."+"/merchandising/VendorStyleListViewPage?merchantGroupId="+encodeURIComponent(merchantGroupIDID)+"'>"+decodeURIComponent(merchantGroupID1)+"</a></span>&nbsp&nbsp <i class='fa fa-angle-right'></i> &nbsp&nbsp ";
	                            elipseCount = false;
							}
			        	}else{
			        		var shotUrlText = "<a data-desc='' class='searchRedir' href='../search/searchResultPage'><span class='headinLabel VPAS-GlobalHeader-headertitle-ccmaintenance-search-result'> Search Results </span></a>";
			        		var addExtra = "";
			        		var ccDetails_URL = "maintenancePage?kohlsStyleId="+kohlsStyleId+"&vendorStyleId="+vendorStyleId+addExtra;
			        	}
			        	if (_getUrlParameter("merchantGroupMaintenance")=='true') {
			        		breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp "+combineMgTxtAndName+"<span class='product-header-bn ccMaintence'><a data-desc='' href='"+ccDetails_URL+"'> <span class='verdor-group-tiltle-name vsNuminCCPage VPAS-GlobalHeader-headertitle-ccmaintenance-vendor-style' title='VS# "+sub1+"'>VS# "+sub1+" </span></a></span>&nbsp;&nbsp;<span class='grid_header_txt'><i class='fa fa-angle-right'></i>&nbsp;&nbsp;<span class='currenttitle'>CC# "+sub2+"</span></span></div>";
			        	}else{
					        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> "+shotUrlText+" </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='product-header-bn ccMaintence'><a data-desc='' href='"+ccDetails_URL+"'> <span class='verdor-group-tiltle-name vsNuminCCPage VPAS-GlobalHeader-headertitle-ccmaintenance-vendor-style' title='VS# "+sub1+"'>VS# "+sub1+" </span></a></span>&nbsp;&nbsp;<span class='grid_header_txt'><i class='fa fa-angle-right'></i>&nbsp;&nbsp;<span class='currenttitle'>CC# "+sub2+"</span></span></div>";
					    }

					    if(_getUrlParameter("merchantGroupMaintenance")== true && elipseCount){
                        	breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
	                        "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
	                        "<li><span><a href='.."+"/merchandising/VendorStyleListViewPage?merchantGroupId="+encodeURIComponent(merchantGroupIDID)+"'>"+decodeURIComponent(merchantGroupID1)+"</a></span></li>" +
	                        "</ul></div>";
	                    }else{
	                        breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
	                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
	                            "</ul></div>";
						}
				        _printBreadcrumb(breadcurmburl);
				        _updateStyleForBreadcurmb();
				        break;  

			      case "/merchandising/skuDetails":
			    	_hideSubHeaderOption();
                    var elipseCount;
			        sub2 = _getUrlParameter("skuNumber");
			        var kholsStyleId =  _getUrlParameter("kohlsStyleId");
			        var mgId = vendorStyleresJson.responseData.vendorStyleDetails.merchantGroupDescription;
			        var vsId = vendorStyleresJson.responseData.vendorStyleDetails.vendorStyleId;
			        totalBreadcrumbLength = "Merchant Groups".length + mgId.length + vsId.length + sub2.length;
                    if(mgId.length>=30 || totalBreadcrumbLength>=101){
                        combineMgTxtAndName = mgTextElipse;
                        elipseCount = true;
                    }else{
                        combineMgTxtAndName = mgTextElipse + "<span class='header-mg nav_to_details headinLabel skuheadnav VPAS-GlobalHeader-headertitle-skudetails-merchantgroup-name' title='"+mgId+"'>"+mgId+"</span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp";
                        elipseCount = false;
                    }
			        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp "+combineMgTxtAndName+"<span class='header-bn'> <span class='vsNuminSKUPage VPAS-GlobalHeader-headertitle-skudetails-vendorstyle' title='VS# "+vsId+"'>VS# "+vendorStyleresJson.responseData.vendorStyleDetails.vendorStyleId +"</span></span><span class='grid_header_txt'>&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;SKU# "+sub2+"</span></div>";
					if(elipseCount){
                        breadcurmburl += "<div class='header-elipse-details'><ul>"+
                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
                            "<li><span class='mgClick'>"+mgId+"</span></li>" +
                            "</ul></div>";
					}else{
                        breadcurmburl += "<div class='header-elipse-details'><ul>"+
                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
                            "</ul></div>";
					}
                    _printBreadcrumb(breadcurmburl);
                    _updateStyleForBreadcurmb();
			        $('.headinLabel, .mgClick').off('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
			        $('.headinLabel, .mgClick').on('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
			        $('.vsNuminSKUPage, .vsClick').off("click",Kjs.skuManagementPage.skuManagementPanel.vsClick);
			        $('.vsNuminSKUPage, .vsClick').on("click",Kjs.skuManagementPage.skuManagementPanel.vsClick);
			        break;
			        
			      case "/maintenance/skuAttribute":
			    	_hideSubHeaderOption();   
			        sub1 = skuMaintenanceJson.vendorStyleId;
			        sub2 = _getUrlParameter("skuNumber");

                    var maintenanceFlag = _getUrlParameter("maintenanceFlag");

                    if(maintenanceFlag != "true"){
                        var mgId = vendorStyleresJson.responseData.vendorStyleDetails.merchantGroupDescription;
                        totalBreadcrumbLength = "Merchant Groups".length + mgId.length + sub1.length + sub2.length;
						if(mgId.length>=30 || totalBreadcrumbLength >= 101){
						  combineMgTxtAndName = mgTextElipse;
                            elipseCount = true;
						}else{
						  combineMgTxtAndName = mgTextElipse + "<span class='header-mg nav_to_details headinLabel skuheadnav VPAS-GlobalHeader-headertitle-skudetails-merchantgroup-name' title='"+mgId+"'>"+mgId+"</span>&nbsp&nbsp <i class='fa fa-angle-right'></i> &nbsp&nbsp ";
                            elipseCount = false;
						}
                    }
			        
			        if(maintenanceFlag == "true"){
			        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='header-mg vendor-style-title'> <a class='headinLabel VPAS-GlobalHeader-headertitle-skuattribute-search-result'> Search Results </a> </span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp&nbsp<span class='product-header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name vsNuminSKUPage VPAS-GlobalHeader-headertitle-skuattribute-vendor-style' title='VS# "+sub1+"'>VS# "+sub1 +"</span></a></span><span class='grid_header_txt'>&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;SKU# "+sub2+"</span></div>";
			        }else{
			        	breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp "+combineMgTxtAndName+"<span class='header-bn'> <span class='vsNuminSKUPage VPAS-GlobalHeader-headertitle-skudetails-vendorstyle' title='VS# "+sub1+"'>VS# "+sub1 +"</span></span><span class='grid_header_txt'>&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;SKU# "+sub2+"</span></div>";
			        }
                      if(maintenanceFlag != "true" && elipseCount){
                          breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
                          "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
                          "<li><span class='mgClick'>"+mgId+"</span></li>" +
                          "</ul></div>";
                      }else{
                          breadcurmburl +=  "<div class='header-elipse-details'><ul>"+
                              "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
                              "</ul></div>";
					  }
			        _printBreadcrumb(breadcurmburl);
			        _updateStyleForBreadcurmb();
			        $('.headinLabel, .mgClick').off('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
			        $('.headinLabel, .mgClick').on('click',Kjs.skuManagementPage.skuManagementPanel.navToSearch);
			        $('.vsNuminSKUPage, .vsClick').off("click",Kjs.skuManagementPage.skuManagementPanel.vsClick);
			        $('.vsNuminSKUPage, .vsClick').on("click",Kjs.skuManagementPage.skuManagementPanel.vsClick);
			        break;

			      case "/maintenance/bccSkuAttribute":
			    	_hideSubHeaderOption();   
			        sub1 = cpIdValue;
			        sub2 = _getUrlParameter("skuNumber");
			        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp  <span class='product-header-bn'><a data-desc='' href='javascript:void(0)'> <span class='cpId-tiltle-name vsNuminSKUPage VPAS-GlobalHeader-headertitle-skuattribute-cpId' title='VS# "+sub1+"'>CP# "+sub1 +"</span></a></span><span class='grid_header_txt'>&nbsp;&nbsp;<i class='fa fa-angle-right'></i>&nbsp;&nbsp;SKU# "+sub2+"</span></div>";
			        _printBreadcrumb(breadcurmburl);
			        _updateStyleForBreadcurmb();
			        $('.headinLabel, .mgClick').off('click',Kjs.bccSkuManagementPage.bccSkuManagementPanel.navToSearch);
			        $('.headinLabel, .mgClick').on('click',Kjs.bccSkuManagementPage.bccSkuManagementPanel.navToSearch);
			        $('.vsNuminSKUPage, .vsClick').off("click",Kjs.bccSkuManagementPage.bccSkuManagementPanel.vsClick);
			        $('.vsNuminSKUPage, .vsClick').on("click",Kjs.bccSkuManagementPage.bccSkuManagementPanel.vsClick);
			        break;
			      
			      case "/maintenance/ccDetailsPage":
			    	_hideSubHeaderOption(); 
			    	var headerVal = Kjs.storage.getData('headerDetails');
			    	var headerVendorStyle = maintenanceJson.responseData.kohlsStyle.vendorStyleId;
			        if(headerVendorStyleId == undefined || headerVendorStyleId == "" ||headerVendorStyleId == null){
			        	headerVendorStyleId = Kjs.storage.getData('headerDetails');
			        }
                      totalBreadcrumbLength = "Merchant Groups".length + headerVal.merchantGroup.length + headerVendorStyle.length;
                      if(headerVal.merchantGroup.length>=30 || totalBreadcrumbLength>=101){
                          combineMgTxtAndName = merchantGrpText + "<span class='header-mg hoverElipse VPAS-GlobalHeader-headertitle-merchantgroup-name'>...</span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp";
                      }else{
                          combineMgTxtAndName = merchantGrpText + "<span class='header-mg headinLabel VPAS-GlobalHeader-headertitle-merchantgroup-name' title='"+headerVal.merchantGroup+"'> "+headerVal.merchantGroup +"</span>&nbsp&nbsp  <i class='fa fa-angle-right'></i> &nbsp";
                      }
			        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp"+combineMgTxtAndName+ "<span class='header-bn'> <span class='verdor-group-tiltle-name' title='VS# "+headerVendorStyle+"'>VS# "+headerVendorStyle +"</span></span></div>";
                    if(headerVal.merchantGroup.length>=30 || totalBreadcrumbLength>=101){
						breadcurmburl += "<div class='header-elipse-details cc-details'><ul>"+
						  "<li><span class='mgNameClick'>"+headerVal.merchantGroup+"</span></li>" +
						  "</ul></div>";
                    }
                    _printBreadcrumb(breadcurmburl);
                    _updateStyleForBreadcurmb();
			        $('.headinLabel, .mgNameClick').off("click",Kjs.maintenancePageContainer.maintenancePanel.navToSearchPage);
                    $('.headinLabel, .mgNameClick').on("click",Kjs.maintenancePageContainer.maintenancePanel.navToSearchPage);
			        break;      

			       case "/maintenance/ccAttribute":
			    	_hideSubHeaderOption();   
			        var kholsStyleId =  _getUrlParameter("kohlsStyleID");
			        var combineMgTxtAndName;
			        sub2 = _getUrlParameter("CustomerChoiceId");
			        sub1 = maintenanceJson.responseData.vendorStyleDetails.merchantGroupId;
			        var vsId = maintenanceJson.responseData.vendorStyleDetails.vendorStyleId;
                    totalBreadcrumbLength = "Merchant Groups".length + sub1.length + vsId.length + sub2.length;
			        if(sub1.length>=30 || totalBreadcrumbLength>=101){
                        combineMgTxtAndName = mgTextElipse;
                        elipseCount = true;
					}else{
			        	combineMgTxtAndName = mgTextElipse + "<span class='header-mg nav_to_details headinLabel skuheadnav VPAS-GlobalHeader-headertitle-ccattribute-merchantgroup' title='"+sub1+"'>"+sub1+"</span>&nbsp&nbsp<i class='fa fa-angle-right'></i> &nbsp";
                        elipseCount = false;
					}
			        breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp&nbsp "+ combineMgTxtAndName +"<span class='header-bn header-title2'><a data-desc='' href='ccDetailsPage?kohlsStyleId="+kholsStyleId+"'> <span class='verdor-group-tiltle-name vsNuminCCPage VPAS-GlobalHeader-headertitle-ccattribute-vendor-style' title='VS# "+vsId+"'>VS# "+vsId +"</span></a></span>&nbsp;&nbsp;<span class='grid_header_txt'><i class='fa fa-angle-right'></i>&nbsp;&nbsp;CC# "+sub2+"</span></div>";
					if(elipseCount){
                        breadcurmburl += "<div class='header-elipse-details'><ul>"+
                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
                            "<li><span class='sub1'>"+sub1+"</span></li>" +
                            "</ul></div>";
					}else{
                        breadcurmburl += "<div class='header-elipse-details'><ul>"+
                            "<li><span><a href='/merchandising/MerchantGroupListViewPage'>Merchant Groups</a></span></li>" +
                            "</ul></div>";
					}

					_printBreadcrumb(breadcurmburl);
					_updateStyleForBreadcurmb();
			        $('.headinLabel, .sub1').off("click",Kjs.ccMaintenancePageContainer.maintenancePanel.handle_nav_to_details);
			        $('.headinLabel, .sub1').on("click",Kjs.ccMaintenancePageContainer.maintenancePanel.handle_nav_to_details);
					break;
			        
			      	case "/merchandising/merchantAttributeMassUpdatePage":
			      	  _hideSubMassHeaderOption();
			          sub1=attributeJSON.responseData.vendorStyleDetails.merchantGroupId;
			          sub2=attributeJSON.responseData.commonAttributes.count;
			          if (sub1!=undefined && sub1!=null && sub1!="") {
			          		var completeText = sub1 +" / Mass Edit "+ sub2; 
			          }else{
			          		var completeText =  " Mass Edit "+ sub2; 
			          }
			          
			          var merchantAttributesMaintenancePage = "/merchandising/merchantAttributePage";
			          var breadCrumb = merchantAttributesMaintenancePage+"?kohlsStyleId="+attributeJSON.responseData.vendorStyleDetails.kohlsStyleId;  
			   			if(typeof(refactorCodeFlag) != "undefined" && refactorCodeFlag && window.location.href.indexOf("hierarchyUpdate") > -1){
			   				breadCrumb = '/maintenance/v1/merchantAttributePage?kohlsStyleId='+attributeJSON.responseData.vendorStyleDetails.kohlsStyleId+'&vendorStyleId='+attributeJSON.responseData.vendorStyleDetails.vendorStyleId+'&styleAttrSaved=false&maintenanceFlag=true#hierarchyUpdate=true';
			   			}                                 
			           breadcurmburl = "<div class='header-logo-new' style=''><span class='header-full-text mass-update'><span class='massupdatebreadcrumb'> <a href='"+breadCrumb+"' class='VPAS-GlobalHeader-headertitle-massupdate-merchantgroup'>< "+completeText+" </a> </span></span></div>";
			           _printBreadcrumb(breadcurmburl);
			           _updateStyleForBreadcurmb();
			           $('.btn-search-wrapper').addClass('fade');
			        break;

                   case "/user/addModifyPackingCapability":
				   	   _hideSubHeaderOption();
					   var userName = Kjs.storage.getData('userInfo').userName;
                       totalBreadcrumbLength = userName.length + "Packaging Capabilities".length;
                       if(userName.length>=30 || totalBreadcrumbLength>=101){
                           combineMgTxtAndName = mgTextElipse;
                       }else{
                           combineMgTxtAndName = "<span class='header-mg'> <a class='header-title-merachant vendor-title VPAS-GlobalHeader-headertitle-addmodifypackage-username' href='/user/getuserprofile'> "+userName+"</a> </span>&nbsp&nbsp<i class='fa fa-angle-right'></i>&nbsp&nbsp";
                       }
					   breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i> &nbsp"+combineMgTxtAndName+"<span class='header-bn'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name'>Packaging Capabilities</span></a></span></span></div>";
                       if(userName.length>=30 || totalBreadcrumbLength>=101){
                           breadcurmburl += "<div class='header-elipse-details'><ul>"+
                               "<li><span><a href='/user/getuserprofile'>"+userName+"</a></span></li>" +
                               "<li><span>Packaging Capabilities</span></li>" +
                               "</ul></div>";
					   }
                       _printBreadcrumb(breadcurmburl);
				   break;

				   case "/merchandising/adhocimage":
				   	   _hideSubHeaderOption();
					   breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn adhocimage-bc'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name VPAS-GlobalHeader-headertitle-adhocimageupload'>Vendor Image Upload</span></a></span></span></div>";
					   _printBreadcrumb(breadcurmburl);
					   _updateStyleForBreadcurmb();
				   break;
				    case "/merchandising/uploadAdhocImageListView":
				   	   _hideSubHeaderOption();
					   breadcurmburl = "<div class='header-new' style=''><span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn adhocimage-bc'><a data-desc='' href='/merchandising/adhocimage'> <span class='verdor-group-tiltle-name VPAS-GlobalHeader-headertitle-adhocimageupload'>Vendor Image Upload</span></a></span></span> <span class='header-full-text'>&nbsp;<i class='fa fa-angle-right'></i>&nbsp&nbsp<span class='header-bn adhocimage-bc'><a data-desc='' href='javascript:void(0)'> <span class='verdor-group-tiltle-name VPAS-GlobalHeader-headertitle-adhocimageupload'>Vendor Style Images</span></a></span></span></div>";
					   _printBreadcrumb(breadcurmburl);
					   _updateStyleForBreadcurmb();
				   break;
			   	}
			   	}catch(e){
		   		}
			   	_addBannerClassName();			
       			_getNotificationlogic();

       			handleMouseEnterOnElipse = function(){
					$('.header-elipse-details').css('visibility', 'visible');
					if($('.header-elipse-details ul li').length > 1){
						var paddingFirstElem = $('.header-elipse-details ul li').eq(0).css('padding');
						var paddingFirstElemNum = paddingFirstElem.replace( /[^\d.]/g, '' );
						for(var i = 0; i < $('.header-elipse-details ul li').length; i++){
							if(i != 0){
								var nextElem = parseInt(paddingFirstElemNum) + 20;
								$('.header-elipse-details ul li').eq(i).css('padding-left',nextElem + 'px');
								paddingFirstElemNum = nextElem;
							}
						}
					}
				};
				handleMouseLeaveOnElipse = function(){
					$('.header-elipse-details').css('visibility', 'hidden');
				};
				$('.hoverElipse').off("mouseover",handleMouseEnterOnElipse);
				$('.hoverElipse').on("mouseover",handleMouseEnterOnElipse);
				$(document).off("click",handleMouseLeaveOnElipse);
				$(document).on("click",handleMouseLeaveOnElipse);
			  },
			  _printBreadcrumb = function(breadcurmburl1){
				  if(breadcurmburl1 != "" && breadcurmburl1 != undefined){
					   $('#navBreadCrumb').html(breadcurmburl1);
				   }
			  },
			  _loadGuestHeader = function(){
					_successCallBack = function(data){
						if(data.errorMessage != "" ){
							$('.box-overlay, .box-loading').hide();
						}
						/*merchantGroupResponseJson = data;*/
						$('#loadHeader').html("");
						$('#loadHeader').html(data.klinkcontent.guestheader.html);
						_toTrimHeaderValue();
						var permission = Kjs.roleBasePermission.checkPermissions();
						if (permission != undefined && !permission.VIEW_VENDOR_VPS_REPORTS) {
							$("#loadHeader .container-fluid").find('[href="/reports/vendorPerformance"]').hide();
						}
						$('.btn-notify-wrapper').css('display','none');
						$('.btn-avatar-wrapper').css('display','none');
						Kjs.roleBasePermission.setElements(); 
						if(Kjs.commonHeaderFooter != null){
							Kjs.commonHeaderFooter.deactivateHeaderFooter();
							Kjs.commonHeaderFooter.activateHeaderFooter();
						}
						
					},
					_errorCallBack = function(){
						$('.box-overlay, .box-loading').hide();
					};
					var url = location.origin + "/resources/contentjson", data = "";
					Kjs.vpAjax.get(url, data, _successCallBack, _errorCallBack);
				},	  	
		_loadHeaderFooter = function(){
			_successCallBack = function(data){
				//_loadHeader();
				if(data.errorMessage != undefined && data.errorMessage != ""){
					$('.box-overlay, .box-loading').hide();
				}
				var firstName = Kjs.storage.getData('userInfo').firstName;
				//merchantGroupResponseJson = data;
				$('#loadHeader').html("");
				if(Kjs.storage.getData('userInfo').role == "VU" || Kjs.storage.getData('userInfo').role == "VA" || Kjs.storage.getData('userInfo').role == "Vendor"){
					$('#loadHeader').html(data.klinkcontent.vendorsignedheader.html);
					_toTrimHeaderValue();
					$(".admin-link").attr("href","/user/getuserprofile?type=ManageUser");
				}else{
					$('#loadHeader').html(data.klinkcontent.kohlssignedheader.html);
					_toTrimHeaderValue();
					$(".admin-link").attr("href","/user/getuserprofile?type=kohlsUserDashboard");
					if (Kjs.storage.getData('userInfo').role != "DM") {
						$("#loadHeader").find("a[href='/search/searchResultPage']").remove();
						$("#loadHeader").find("a[href='/search/searchResultPage?clearData=true']").remove();
						
					}
				}

				/* Show Admin Link on Global Header If user role is RC */
				var adminPageLink = $("header").find("a[href='/admin/main']");
				if (adminPageLink.length > 0) {
					adminPageLink.hide();
				}	
				if(Kjs.storage.getData('userInfo').role === "RC") {
					adminPageLink.css('text-transform','uppercase').show();
					adminPageLink.closest('.nav-item').find("#loadHeaderNavListProduct").remove();
				}

				var permission = Kjs.roleBasePermission.checkPermissions();
				if (permission != undefined && !permission.VIEW_VENDOR_VPS_REPORTS) {
					$("#loadHeader .container-fluid").find('[href="/reports/vendorPerformance"]').hide();
				}				
				$('#loadFooter').html(data.klinkcontent.footer.html);
				$('#btnLogin').css('display','none');
				if(firstName != undefined){
					$('.avatar-pic').html(firstName.charAt(0));
				}else{
					$('.avatar-pic').html("");
				}	
				 _loadSubHeader();
				if(location.pathname != "/login" && location.pathname !="/user/registerUser"){
					if(location.pathname != "/merchandising/MerchantGroupListViewPage"){
						Kjs.commonHeader.headerPanel.startTimer();	
					}
					Kjs.roleBasePermission.setElements(); 
				}
				Kjs.commonHeader.headerPanel.notificationCount();
				if(Kjs.commonHeaderFooter != null){
					Kjs.commonHeaderFooter.deactivateHeaderFooter();
					Kjs.commonHeaderFooter.activateHeaderFooter();
				}
				$('.btn-clear').off('click',_handleLogoutClick);
				$('.btn-clear').on('click',_handleLogoutClick);
			},
			_errorCallBack = function(){
				$('.box-overlay, .box-loading').hide();
			};
			var url = location.origin + "/resources/contentjson", data = "";
			Kjs.vpAjax.get(url, data, _successCallBack, _errorCallBack);
		},
		_toTrimHeaderValue = function(){
			$.each($('.nav-list li'),function(i,v){
				$.each($(v).find('.container-fluid .col-6'),function(m,n){
					for(var j = 0; j < $(n).find('a[href]').length; j++){
						if($(n).find('a[href]').eq(j).parent('h5').length == 0){
							var text = $(n).find('a[href]').eq(j).text();
							if(text.length > 30){
								var trimString = text.slice(0,30)+"..";
								$(n).find('a[href]').eq(j).addClass("toTrim");
								$(n).find('a[href]').eq(j).attr('data-val',text);
								$(n).find('a[href]').eq(j).text(trimString);
							}else if(text.length > 25 && text.length <= 30){
								$(n).find('a[href]').eq(j).addClass("toTrimNextLine");
							}
						}
					}
				});
			});
		},
		_loadHeader = function(){
			var _successCallBack = function(response){
					if(response != null && response != undefined){
					responseJson=response;
					if($('#loadHeader').length > 0){
						var headerJson = {}, userinfo = {userinfo:Kjs.storage.getData('userInfo')}, notificationInfo = {notificationInfo:responseJson}; 
						Kjs.extend(headerJson,userinfo,notificationInfo);
						if(headerJson.notificationInfo.responseData.notifications.unseenCount > "999"){
							$('.btn-notify-digit').html("999+");
						}else{
							$('.btn-notify-digit').html(headerJson.notificationInfo.responseData.notifications.unseenCount);
							}
						}
					}else{
						Kjs.vpAjax.hideLoaderonEmptyResponse();
					}
				},
				_errorCallBack = function(){
				};
			var url = location.origin + "/user/notifications";
			Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
		},
		_notificationCount = function(){
			var _successCallBack = function(response){
					if(response != null && response != undefined){
					if($('#loadHeader').length > 0){
						if(response.responseData.unseenNotificationCount > "999"){
							$('.btn-notify-digit').html("999+");
						}else{
							$('.btn-notify-digit').html(response.responseData.unseenNotificationCount);
						}
						if(location.pathname == "/dashboard/getMerchantGroupsCountByStatus" ){
							$('.VPAS-MerchantGroupHeader-header-container').hide();
						} 
						if((location.search !="") && (location.search.split("=")[1] == "dsnClick")){
							$(".header").hide();							
						}
						if(($('.verdor-group-tiltle-name').text().trim() == "Create New Merchant Group")  && (typeof vendorGroupListJson != "undefined") && (vendorGroupListJson.merchantGroupDescription != undefined)){
							$('.verdor-group-tiltle-name').text(vendorGroupListJson.merchantGroupDescription);
						}						 
						
						var _navToBack = function(){
							var merchantId = maintenanceJson.responseData.kohlsStyle.merchantGroupName;
							var url = location.origin + '/merchandising/unlockMerchantGroupFromEdit?merchantGroupId='+merchantId,
							_success = function(response){
								location.href = location.origin+'/merchandising/MerchantGroupListViewPage';
							},
							_error = function(){};
							Kjs.vpAjax.get(url,"",_success,_error);
						}
                     }
					}else{
						Kjs.vpAjax.hideLoaderonEmptyResponse();
					}
				},
				_errorCallBack = function(){
				};
			var url = location.origin + "/notifications/getUnseenNotificationCount";
			Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
		},
		_prevIndex = 0,
		_handleTabingElements = function(e){	
			if(navigator.userAgent.search('Firefox') != -1){
				if(e.shiftKey && e.keyCode == 9) { 					
					if($(e.currentTarget).hasClass('merchantName')){								
						var selector = '[data-attr-tindex="'+6+'"]';				
						$(selector).trigger('focus');		
					}else{
						var currentTab = parseInt($(this).attr("data-attr-tindex"));				
						var selector = '[data-attr-tindex="'+(currentTab-1)+'"]';				
						$(selector).trigger('focus');	
					}
				}else if(e.keyCode == 9 ){
					var currentTab = parseInt($(this).attr("data-attr-tindex"));	

					if( currentTab == 1 || (_prevIndex -currentTab) == 0){
						var selector = '[data-attr-tindex="'+(currentTab+1)+'"]';
					}else if((_prevIndex -currentTab) > 1){
						var selector = '[data-attr-tindex="'+(currentTab)+'"]';
					}
					$(selector).trigger('focus');	
					_prevIndex = parseInt($(this).attr("data-attr-tindex"));			
				}
			}
			
		};
		return {
			render : _render,
			startTimer : _startTimer,
			g_timer : _g_timer,
			logout_timer : _logout_timer,
			clearLocalAndSessionStorage : _clearLocalAndSessionStorage,
			handleSelectClassClick :_handleSelectClassClick,
			handleKohlsStyleEntry : _handleKohlsStyleEntry,
			handleMerchantGroupruptEntry : _handleMerchantGroupruptEntry,
			handleGroupCodeEntry : _handleGroupCodeEntry,
			handleUPCEntry : _handleUPCEntry,
			handleSKUEntry : _handleSKUEntry,
			handleCPEntry : _handleCPEntry,
			DepartmentDependancies : _DepartmentDependancies,
			P1Dependancies : _P1Dependancies,
			P2Dependancies : _P2Dependancies,
			P3Dependancies : _P3Dependancies,
			vendorNameDependancies : _vendorNameDependancies,
			loadHeader : _loadHeader,
			loadGuestHeader : _loadGuestHeader,
			ClassDependencies : _ClassDependencies,
			SubClassDependencies : _SubClassDependencies,
			BrandDependencies : _BrandDependencies,
			handleSearchIconClick : _handleSearchIconClick,
			loadSubHeader : _loadSubHeader,
			loadHeaderFooter : _loadHeaderFooter,
			notificationCount : _notificationCount,
			getUrlParameter : _getUrlParameter
		}
	})();
	$init(function _$init_commonHeader($) {
		$tmpl.define('commonHeaderTemplate', {
			tplcommonHeader : 'commonHeaderTmpl',
			hook : '#loadHeader',
			userIconClick : '.oval',
			searchIconClick:'.btn-search-opener',
			clearButtonClick:'.clear_all',
			searchTpl:'searchTmpl',
			classTpl:'classListTmpl',
			vendorTpl: 'vendorTmpl',
			brandTpl: 'brandTmpl',
			merchantgroupTpl : 'merchantgroupTmpl',
			subclassTpl: 'subclassListTmpl',
			prodPrimTpl: 'prodTmpl',
			p2Tpl: 'p2Tmpl',
			p3Tpl: 'p3Tmpl',
			selectDepartment : '#search_selectdepartment',
			selectClass:'#search_classnumber',
			selectP1 : '#search_p1code',
			typeKohlsStyle : '#ksinput',
			typeMerchantGroup : '#search_merchantgroup',
			typeGroupCode : '#inputgc',
			departmentText : '#search_selectdepartment',
			classText : 'input#search_classnumber',
			subclassText : '#search_subclassnumber',
			brandText : '#search_brandname',
			p1Text : 'input#search_p1code',
			p2Text : 'input#search_p2number',
			p3Text : 'input#search_p3number',
			vendorText : 'input#search_vendorname',
			typeUPC : '#upcinput',
			typeSKU : '#skuinput',
			typeCP : '#cpinput',
			userSignoutTpl : 'userSignoutTmpl',
			notificationIconClick : '.notification_icon_click',
			commonHeaderTpl : 'commonHeaderTmpl',
			logoutClick : '.signout_btn',
			notifyListTmpl : "notifyListTmpl",
			logoclick : '.logo-name',
			closeModal : '.close-modal',
			searchsend : '.search_start',
			backHome: '.logo-home-icon, .header-mg>a',
			myProfile : "#myProfile",
			vendorUserManageUser : "#vendorUser",
			tabingElements : "input, select"
		});

	
		$tmpl.load('/static/tmpl/merchandising/tpl.commonHeader.js', function(success, response) {
			env.commonHeaderTpl = $tmpl('commonHeaderTemplate');
		});
	});	
	$ready(function _$ready_commonHeader($) {
		if(location.pathname != "/login" && location.pathname !="/user/registerUser"){
			Kjs.roleBasePermission.setElements();
		}
		var isMaintenancePage = false;
		var isCCMaintenancePage = false;
		var isSKUMaintenancePage = false;		
		var isMerchMaintenancePage = false;
		var isMerchCCMaintenancePage = false;
		var isMerchSKUMaintenancePage = false;
		
		if(Kjs.storage.getData('prevReportSelectedVals') != null && Kjs.storage.getData('prevReportSelectedVals') != undefined){
			if(Kjs.storage.getData('prevReportSelectedVals').pageURL != location.pathname){
	            localStorage.removeItem('prevReportSelectedVals');
	            localStorage.removeItem('selectedText');
	    	}
		}
		if(location.pathname != "/cp/preview"){
			localStorage.removeItem('applyToAllCPCheckbox');
		}
		if(location.pathname != "/cp/home"){
			localStorage.removeItem('myDeptVendorBrand');
			localStorage.removeItem('searchResult');
        }
		if(location.pathname != "/cp/home" && location.pathname != "/merchandising/getSKUsFromConsumerProductId" && location.pathname != "/cp/editAttributes" && location.pathname != "/cp/preview" && location.pathname != "/cp/cpPreview"){
			localStorage.removeItem('appliedparamforCP');
		}
		if(window.location.pathname.search("maintenancePage") >-1|| window.location.pathname.search("maintenancePage?") >-1){
			var isMaintenancePage = true
		}	
		if(window.location.pathname.search("ccDetailsPage") >-1|| window.location.pathname.search("ccDetailsPage?") >-1){
			isMerchMaintenancePage = true;
		}
		if(window.location.pathname.search("ccMaintenance") >-1|| window.location.pathname.search("ccMaintenance?") >-1){
			var isCCMaintenancePage = true;
		}
		if(window.location.pathname.search("ccAttribute") >-1|| window.location.pathname.search("ccAttribute?") >-1 ){
			var isMerchCCMaintenancePage = true;
		}
		if(window.location.pathname.search("skuAttribute") >-1|| window.location.pathname.search("skuAttribute?") >-1){
			var isSKUMaintenancePage = true;
		}
		if( window.location.pathname.search("skuDetails") >-1|| window.location.pathname.search("skuDetails?") >-1){
			var isMerchSKUMaintenancePage = true;
		}
		
		if(window.location.pathname.search("VendorStyleListViewPage") >-1|| window.location.pathname.search("VendorStyleListPage?") >-1){
			Kjs.storage.saveData("colorJSONDataResult", null);
		}
		if((typeof sessionTimeout  != 'undefined' ) && sessionTimeout  != null && sessionTimeout  != ""){
		   Kjs.storage.saveData("sessionTimeout",sessionTimeout);
		 }
		 if((typeof userInfo != 'undefined' ) && userInfo != null && userInfo != ""){
		   Kjs.storage.saveData("userInfo", userInfo );
		}
		if (Kjs.storage.getData('userInfo')==null || Kjs.storage.getData('userInfo')=="" || Kjs.storage.getData('userInfo')==undefined || Kjs.storage.getData('userOktaDetails') == null || Kjs.storage.getData('userOktaDetails') == "" || Kjs.storage.getData('userOktaDetails') == undefined) {
			if(location.pathname != "/login" && location.pathname != "/logout" && location.pathname != "/acceptLogin" && location.pathname !="/user/registerUser"){
				var url = location.origin+"/user/getLoginUserProfile",
				_success = function(data){
					Kjs.storage.saveData("userOktaDetails",JSON.stringify(data));
					if(Kjs.storage.getData('userInfo') == null || Kjs.storage.getData('userInfo') == ""){		  	
						Kjs.storage.saveData("userInfo", data.responseData.userInfoData);
					}
				},
				_complete = function(){
					if(Kjs.storage.getData('userOktaDetails') != null &&  Kjs.storage.getData('userOktaDetails') != undefined){
						Kjs.commonHeader.headerPanel.loadHeaderFooter();
					}else{			
						var pathurl = window.location.href;			
						if(pathurl.indexOf("getMerchantGroupsCountByStatus") > -1){
							Kjs.commonHeader.headerPanel.loadHeaderFooter();
						}else{
							Kjs.commonHeader.headerPanel.loadGuestHeader();
						}
					}
				},
				_error = function(){};
				Kjs.vpAjax.getComplete(url,"",_success,_error,_complete);
		}else{
			Kjs.commonHeader.headerPanel.loadGuestHeader();
		}
		}else{
			Kjs.commonHeader.headerPanel.loadHeaderFooter();
		}
		if(location.pathname != "/login" && location.pathname != "/logout" && location.pathname != "/acceptLogin" && location.pathname !="/user/registerUser"){
			if (Kjs.storage.getData('allDepartment')==undefined || Kjs.storage.getData('allDepartment') ==null) {
		     	var _successCallBack = function(result){         
			    	  if(result != null && result != undefined){
			    		  if(result.errorMessage != undefined && result.errorMessage != ""){
			    			  Kjs.modelPopUp.displayServiceError(result.errorMessage);
			    		  }else{
			    			  Kjs.storage.saveData("allDepartment",JSON.stringify(result));
			    		  }
			    	  }else{
			    		  Kjs.vpAjax.hideLoaderonEmptyResponse();
			    	  }
		    	},
		    	_errorCallBack = function(){
			    };
				var url = location.origin + "/user/getAllDepartment";
				Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
			}
		}
		$(document).on("click",function (event) {
			if( !$(event.target).hasClass("imageIDTooltip") || ($(event.target).hasClass("imageIDTooltip").length==0 && $(event.target).parents(".imageIDTooltip").length==0 && $(event.target).hasClass("addedimage").length==0 && $(event.target).parents(".addedimage.imagePopupbox").length==0) ){
	   			$(".imageIDTooltip").hide();
	   		}
	   		if (location.pathname=="/merchandising/VendorStyleListPage" || location.pathname=="/merchandising/VendorStyleListViewPage") {
				if(!$(event.target).hasClass('attributeSingleSearchDropDown') && !$(event.target).parent().hasClass('attributeDropDownValues') && !$(event.target).hasClass('searchSingleSelect') && !$(event.target).hasClass('filterClose')){
					$('.attributeDropDownValues').hide();
					$(".p5_attribute .attributeSingleSearchDropDown").removeClass("activate");
					$(".attributeDropDownValues span.fact_close").remove();
					$('.searchOptions.filtered').removeClass('filtered');
				}
			}
	   		if(location.pathname=="/cp/cpPreview" || location.pathname=="/create/collectionInfo"){
	   			if(!$(event.target).hasClass('searchSingleSelect') && !$(event.target).parent().hasClass('dropDown3875_PreviewDropDown') && !$(event.target).hasClass('attributeSingleSearchInput') && !$(event.target).parent().hasClass('dropdown-wrapper')){
	   				$('.activate').parent().find('.dropDown3875').hide();
	   				$('.activate').removeClass('activate');
	   				$('.dropDown3875_PreviewDropDown').hide();
				}
	   		}
		});
		$(document).on("click,mouseenter",function (event) {
		 if(!$(event.target).is('.notification_icon') && !$(event.target).is('.reportbuilder_notificationbox') && !$(event.target).is('.markallasread')){
			   $(".reportbuilder_notificationbox").addClass('hide');
		   }
		 if(!$(event.target).is('.search_image') && !$(event.target).is('.search_container')){
			   if(!$(event.target).closest('#searchForm').parent().hasClass('search_container')){
			       $(".search_container").addClass('hide');
			     }
		   }
		 if(!$(event.target).is('.oval') && !$(event.target).is('.user_info_container')){
			   if(!$(event.target).closest('#logoutFrom').parent().hasClass('user_info_container')){
			       $(".user_info_container").addClass('hide');  
			     }
		   }
		   if(!$(event.target).is('.cxdialog')){
		   		try{
		   		}catch(e){
		   		}
			   
		   }
		   if (!$(event.target).is('.select-drop-icon') && !$(event.target).is('.attributeSingleSearchInput') && !$(event.target).is('.dropDown3875')) {
		   		if($(event.target).parents(".dropDown3875").length==0){
		   			$(".dropDown3875").hide();
		   			$('.attributeSingleSearchInput').removeClass("activate");
		   		}
		   		
		   }
		   if(!$(event.target).hasClass('attributeSingleSearchDropDown') && $(event.target).parents('.attributeDropDownValues').length == 0){
				 $(".attributeDropDownValues").hide();
				 $('.attributeSingleSearchDropDown').removeClass("activate");
				    if($('.tablesorter-scroller-table').hasClass('typeaheadOpen')){ 
                                        $('.tablesorter-scroller-table').removeClass('typeaheadOpen');
                                        $('.tablesorter-scroller-table').css('position','relative');
                    }

			 }
		});
		if(location.pathname != "/merchandising/MerchantGroupListViewPage" && location.pathname != "/login" && location.pathname !="/user/registerUser"){
			try{
			Kjs.commonHeader.headerPanel.startTimer();
			}catch(e){
			}
		}
		
		if(Kjs.storage.getData('userInfo') != null && (Kjs.storage.getData('userInfo').role=="VU" || Kjs.storage.getData('userInfo').role=="VA" || Kjs.storage.getData('userInfo').role=="Vendor")){
			$(".logo-home-icon").attr("href","/merchandising/MerchantGroupListViewPage");
			$(".header-mg").attr("href","/merchandising/MerchantGroupListViewPage");
		}
		if(location.search.split("=")[1] != "buysheetClick" && location.search.split("=")[1] != "dsnClick" && location.search.split("=")[1] != "MAPCreateClick"){
			Kjs.storage.saveData('savePrevData',null);
		}
		  $('body').find('input:disabled').css("cursor", "default");
		  $('body').find('select:disabled').css("cursor", "default");
		  $('body').find('button:disabled').css("cursor", "default");
		  $('body').find('textarea:disabled').css("cursor", "default");
		
	});
	return {
		headerPanel : _headerPanel
	}
});
$module('vpCommonServices', function(log, env, module, Kjs) {

	_getOfficeOfPlacementList = function(officeOfPlacementId, pageName, elem){
		var offOfPlacementId = officeOfPlacementId.split(':')[0];
		var defaultSelect = (pageName == "gridEditPage")?"Select":"Please select a value", 
				parentElem = (elem != undefined)?elem.parents('tr'):$('#styleAttributesFormData'),
				options = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>';
		var kohlsStyleIdnum = "";
		if (elem!=undefined && elem.parents("tr").attr("data-kohlsid")!=undefined) {
			kohlsStyleIdnum = elem.parents("tr").attr("data-kohlsid");
		}
		if(offOfPlacementId != undefined && offOfPlacementId != ""){
			offOfPlacementId = offOfPlacementId.trim();
			$('.box-overlay, .box-loading').show();
			var url = "/master/getParentFactoryFlattenedBasedOnOfficeId?officeOfPlacementName="+encodeURIComponent(offOfPlacementId),
			_success = function(data){
				$('.box-overlay, .box-loading').hide();
				if(data.errorMessage == ""){
					if(data.responseData != undefined && data.responseData.ParentFactoryFlattened != undefined && data.responseData.ParentFactoryFlattened.length > 0){						
						if(data.responseData.ParentFactoryFlattened != undefined && data.responseData.ParentFactoryFlattened != null && data.responseData.ParentFactoryFlattened.length>0){
							$.each(data.responseData.ParentFactoryFlattened, function(i,list){
								options = options + '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+list+'">'+list+'</a></li>';
							});
							if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
								parentElem.closest('tbody').find('tr.rowSelected').each(function(){
									$(this).find('ul[data-name="Parent"]').html(options);
								});
							} else {
								parentElem.find('ul[data-name="Parent"]').html(options);
							}
						} else {
							if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
								parentElem.closest('tbody').find('tr.rowSelected').each(function(){
									$(this).find('ul[data-name="Parent"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
								});
							} else {
								parentElem.find('ul[data-name="Parent"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
							}
						}
					}else{
						if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
							parentElem.closest('tbody').find('tr.rowSelected').each(function(){
									$(this).find('ul[data-name="Parent"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
							});
						} else {
								parentElem.find('ul[data-name="Parent"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
						}
					}
					if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
						parentElem.closest('tbody').find('tr.rowSelected').each(function(){
							$(this).find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
							$(this).find('input[name="Factory"]').val('');
							$(this).find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
							$(this).find('input[name="Parent"]').val('');
							$(this).find('input[name="Parent"]').parent().find('.singleAttributeDesc').val(defaultSelect);
							$(this).find('input[name="Office Of Placement"]').val(officeOfPlacementId);
							$(this).find('input[name="Office Of Placement"]').parent().find('.singleAttributeDesc').val(officeOfPlacementId);
						});
					} else {
						parentElem.find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
						parentElem.find('input[name="Factory"]').val('');
						parentElem.find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
						parentElem.find('input[name="Parent"]').val('');
						parentElem.find('input[name="Parent"]').parent().find('.singleAttributeDesc').val(defaultSelect);
					}
				} else {
					Kjs.modelPopUp.displayServiceError(data.errorMessage);
				}
			},
			_error = function(){
				$('.box-overlay, .box-loading').hide();
			};
			if ( (location.pathname=="/merchandising/merchantAttributePage" || location.pathname == "/maintenance/merchantAttributePage") && $("#merchantAttributesContainer #styleAttributesContainer #styleAttributesFormData").length>0 && merchantAttributesJson.responseData!=undefined && merchantAttributesJson.responseData.vendorStyleDetails!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.kolscoreAttributes!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.kolscoreAttributes.KOHLS_STYLE!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.kolscoreAttributes.KOHLS_STYLE.sections!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.kolscoreAttributes.KOHLS_STYLE.sections.OTHERS.Parent!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.kolscoreAttributes.KOHLS_STYLE.sections.OTHERS.Parent.attributeValueList!=undefined && merchantAttributesJson.responseData.vendorStyleDetails.kolscoreAttributes.KOHLS_STYLE.sections.OTHERS.Parent.attributeValueList.length>0) {
				var onLoadParentData = {ParentFactoryFlattened: merchantAttributesJson.responseData.vendorStyleDetails.kolscoreAttributes.KOHLS_STYLE.sections.OTHERS.Parent.attributeValueList};
				var onLoadData = {
					errorMessage:"",
					responseData:onLoadParentData
				};
				_success(onLoadData);
			}else if ($(".grid_edit_outer_container #gridEditView-container").length>0 && gridEditViewJson!=undefined && gridEditViewJson.responseData!=undefined && gridEditViewJson.responseData.vendorStyleDetails!=undefined && kohlsStyleIdnum!="") {
				var dataisAvailble = false;
				var onLoadParentData = "";
				$.each(gridEditViewJson.responseData.vendorStyleDetails, function(ii,vv){
					if (kohlsStyleIdnum==vv.kohlsStyleId && vv.kolscoreAttributes!=undefined && vv.kolscoreAttributes.KOHLS_STYLE.MS!=undefined && vv.kolscoreAttributes.KOHLS_STYLE.MS.Parent.attributeValueList!=undefined) {
					onLoadParentData = {ParentFactoryFlattened: vv.kolscoreAttributes.KOHLS_STYLE.MS.Parent.attributeValueList};
					dataisAvailble = true;
					}
				});
				if(dataisAvailble && onLoadParentData!=""){
					var onLoadData = {
						errorMessage:"",
						responseData:onLoadParentData
					};
					_success(onLoadData);
				}else{
					Kjs.vpAjax.get(url,"",_success,_error);
				}
			} else{
				Kjs.vpAjax.get(url,"",_success,_error);
			}
			
		} else {
			if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
				parentElem.closest('tbody').find('tr.rowSelected').each(function(){
					$(this).find('ul[data-name="Parent"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
					$(this).find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
					$(this).find('input[name="Factory"]').val('');
					$(this).find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
					$(this).find('input[name="Parent"]').val('');
					$(this).find('input[name="Parent"]').parent().find('.singleAttributeDesc').val(defaultSelect);
				});
			} else {
				parentElem.find('ul[data-name="Parent"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
				parentElem.find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
				parentElem.find('input[name="Factory"]').val('');
				parentElem.find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
				parentElem.find('input[name="Parent"]').val('');
				parentElem.find('input[name="Parent"]').parent().find('.singleAttributeDesc').val(defaultSelect);
			}
		}
	},
	_getParentList = function(officeOfPlacementId,parentId, pageName, elem){
		var offOfPlacementId = officeOfPlacementId.split(':')[0];
		var parentSelId = parentId.split(':')[0];
		var defaultSelect = (pageName == "gridEditPage")?"Select":"Please select a value", 
				parentElem = (elem != undefined)?elem.parents('tr'):$('#styleAttributesFormData'),
				options = '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>';
		if(offOfPlacementId != undefined && parentSelId != undefined && offOfPlacementId != "" && parentSelId != ""){
			offOfPlacementId = offOfPlacementId.trim();
			$('.box-overlay, .box-loading').show();
			var url = "/master/getParentFactoryFlattenedBasedOnParentId?officeOfPlacementName="+encodeURIComponent(offOfPlacementId)+"&parentId="+parentSelId.trim(),
			_success = function(data){
				$('.box-overlay, .box-loading').hide();
				if(data.errorMessage == ""){
					if(data.responseData != undefined && data.responseData.ParentFactoryFlattened != undefined && data.responseData.ParentFactoryFlattened.length > 0){
						$.each(data.responseData.ParentFactoryFlattened, function(i,list){
							var factoryDrp = list.factoryId+' : '+list.factoryName;
							options = options + '<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="'+factoryDrp+'">'+factoryDrp+'</a></li>';
						});
						if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
							parentElem.closest('tbody').find('tr.rowSelected').each(function(){
								if($(this).find('input[name="Office Of Placement"]').val() == officeOfPlacementId){
									$(this).find('ul[data-name="Factory"]').html(options);
									$(this).addClass('data-changed');
								}
							});
						} else {
							parentElem.find('ul[data-name="Factory"]').html(options);
						}
					} else {
						if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
							parentElem.closest('tbody').find('tr.rowSelected').each(function(){
								if($(this).find('input[name="Office Of Placement"]').val() == officeOfPlacementId){
									$(this).find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
									$(this).addClass('data-changed');
								}
							});
						} else {
							parentElem.find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
						}
					}
					if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
						parentElem.closest('tbody').find('tr.rowSelected').each(function(){
							var index = $(this).attr('data-row').split('_')[1];
							if($(this).find('ul[data-name="Parent"]').html() == ""){
								if(Kjs.gridEditView.gridEditViewPanel.singleSelectDrpText[index]["Parent"].toLowerCase().indexOf(parentId.toLowerCase()) > -1){
									$(this).find('input[name="Parent"]').val(parentId);
									$(this).find('input[name="Parent"]').parent().find('.singleAttributeDesc').val(parentId);
									$(this).find('input[name="Factory"]').val('');
									$(this).find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
								}
							} else {
								if($(this).find('input[name="Office Of Placement"]').val() == officeOfPlacementId || $(this).find('ul[data-name="Parent"]').find('li a[value="'+parentId+'"]').length > 0){
									$(this).find('input[name="Parent"]').val(parentId);
									$(this).find('input[name="Parent"]').parent().find('.singleAttributeDesc').val(parentId);
									$(this).find('input[name="Factory"]').val('');
									$(this).find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
								}
							}
							$(this).addClass('data-changed');
						});
					} else {
						parentElem.find('input[name="Factory"]').val('');
						parentElem.find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
					}
				} else {
					Kjs.modelPopUp.displayServiceError(data.errorMessage);
				}
			},
			_error = function(){
				$('.box-overlay, .box-loading').hide();
			};
			Kjs.vpAjax.get(url,"",_success,_error);
		} else {
			if(parentSelId != undefined && parentSelId == ""){
				if(pageName == "gridEditPage" && parentElem.hasClass('rowSelected')){
					parentElem.closest('tbody').find('tr.rowSelected').each(function(){
						$(this).find('input[name="Factory"]').val('');
						$(this).find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
						$(this).find('input[name="Parent"]').val('');
						$(this).find('input[name="Parent"]').parent().find('.singleAttributeDesc').val(defaultSelect);
						if($(this).find('input[name="Office Of Placement"]').val() == officeOfPlacementId){
							$(this).find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
						}
						$(this).addClass('data-changed');
					});
				} else {
					parentElem.find('ul[data-name="Factory"]').html('<li><a class="singleSelectListItem" href="javascript:void()" tabindex="0" value="">'+defaultSelect+'</a></li>');
					parentElem.find('input[name="Factory"]').val('');
					parentElem.find('input[name="Factory"]').parent().find('.singleAttributeDesc').val(defaultSelect);
				}
			}
		}
	};
	return{
		getOfficeOfPlacementList : _getOfficeOfPlacementList,
		getParentList : _getParentList
	}
});

function initializeKeyPress(evnt){
	var evt = evnt;
	if($(evt.target).attr("onclick") != "" && $(evt.target).attr("onclick") != null && 
			$(evt.target).attr("onclick").toLowerCase().match("numeric") != null &&
			$(evt.target).attr("onclick").toLowerCase().match("numeric").index >= 0 &&
			!$(evt.target).hasClass('keyDownAttached')){
		if(evt.which == 91 || evt.which == 81){
			$(evt.target).addClass('keyDownAttached');
			$(evt.target).trigger("click");
		}
	}
	if (evt.target.name !=undefined && evt.target.name=="GP_CDE_TXT") {
		$("input[name='GP_CDE_TXT']").on("keyup", function(){
			$(this).val($(this).val().toUpperCase());
		});
	}
}

function skuManagmentNumericEnable () {
	var path = window.location.href;
	var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;
	
	if(maintenanceFlag && path.indexOf("skuAttribute") > -1){
		var error = false
		for(itemName in $('.input-row ').find('.errMsg')){
			if($('.input-row ').find('.errMsg')[itemName].innerText != "" &&  $('.input-row ').find('.errMsg')[itemName].innerText != undefined ){
				error = true
			}
		}
		if(error){
			$('.msSave').css("pointer-events", "none");
			$('.msSave').css("opacity", ".4");
		}else{
			$('.msSave').css("pointer-events", "auto");
			$('.msSave').css("opacity", "1");
		}
	}
}


function isNumeric(isDecimal, rangeStart, rangeEnd, errorMessage, evnt) {
    var evt = evnt;
    var outerPackQuantity = 0;
    var innerPackQuantity = 0;
    var path = window.location.href;
    var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;

	if ($(evt.target).parent().hasClass('popOver')) {
		var targetErrorElem = $(evt.target).parent().parent();
	} else {
		var targetErrorElem = $(evt.target).parent();
	}
    if ((rangeStart != undefined && rangeStart !== "" && rangeStart != null)) {
        $(evt.target).addClass('number-range').attr('data-range-start', rangeStart);
        $(evt.target).addClass('number-range').attr('data-range-end', rangeEnd);
    	
        $(evt.target).blur(function() {
	        if(evt.target.name == "SKU_FRST_UCST_AMT" && maintenanceFlag){
				if($("#inpval_SKU_FRST_UCST_AMT").val() != "" && $("#inpval_SKU_FRST_UCST_AMT").val() != "Mixed Value"){
					var firstUnitCost = parseFloat($("#inpval_SKU_FRST_UCST_AMT").val());
					if (firstUnitCost!=undefined && firstUnitCost!="" && firstUnitCost!="NaN") {
						$("#inpval_SKU_FRST_UCST_AMT").val(noRoundDecimalNormalBrand(firstUnitCost));
					}
				}
				firstUnitCostValidation($(evt.target));
			}
        });
	
        $(evt.target).blur(function() {

        	if ($(this).val()=="NaN") {
        		$(this).val("");
        	}
        var path = window.location.href;
           var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;
          
           if(evt.target.name == "PRD_CPCTY_QTY"){
       		if($(this).val() != "" && $(this).val() != "Mixed Value"){
       			var volQty = parseFloat($(this).val());
       			$(this).val(noRoundDecimalNormalBrand(volQty));
       			}
       			VolQtyValidation($(evt.target));
       		}
           
            $('body').find('.tooltip-message').html('').hide();
            var input = $(evt.target).val();
            var numrangeStart = $(evt.target).attr('data-range-start');
            var numrangeEnd = $(evt.target).attr('data-range-end');

            if (isNaN(Number(input)) && $(this).val() != "Mixed Value") {
            	$(this).parent().hasClass('popOver') ? $(this).parent().parent().addClass('attribute_error hasError') : $(this).parent().addClass('attribute_error hasError');
                if ($(this).hasClass('error-tooltip')) {
                    displayTooltip($(evt.target), "The Value entered must be numeric only");
                    if ($('body').find('.gridEdit-container').length > 0) {
                        var parentElem = $(evt.target).parents('tr').attr('data-id'),
                            fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
                        fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').addClass('rowHasError');
                        $('.gridEditErrorSection .errorMessage').show();
                    }
                } else {
                    targetErrorElem.find('.errMsg').html("The Value entered must be numeric only");
                    targetErrorElem.find('.errMsg').show();
                }
            } else if (input != "" && (Number(input) < Number(numrangeStart) || Number(input) > Number(numrangeEnd) ||  ( evt.target.name!="SKU_LNDD_UCST_AMT" && evt.target.name!="SKU_FRST_UCST_AMT" && evt.target.name!="INIT_UNT_RTL_AMT" && checkDecimalDegit(input,numrangeEnd)) )) {
               $(this).parent().hasClass('popOver') ? $(this).parent().parent().addClass('attribute_error hasError') : $(this).parent().addClass('attribute_error hasError');
                if ($(this).hasClass('error-tooltip')) {
                    displayTooltip($(evt.target), errorMessage);
                    if ($('body').find('.gridEdit-container').length > 0) {
                        var parentElem = $(evt.target).parents('tr').attr('data-id'),
                            fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
                        fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').addClass('rowHasError');
                        $('.gridEditErrorSection .errorMessage').show();
                    }
                } else {
                	if (targetErrorElem.find(".popOver .errMsg").length==0 && targetErrorElem.find(".popOver .errmsg").length==0 && targetErrorElem.find(".errmsg").length==0 && evt.target.name=='HEEL_HT_QTY') {
                		targetErrorElem.find(".popOver").append("<span class='errMsg extraclssheel'></span>");
                	}
                	if (evt.target.name!="SKU_LNDD_UCST_AMT" && evt.target.name!="SKU_FRST_UCST_AMT" && evt.target.name!="INIT_UNT_RTL_AMT" && checkDecimalDegit(input,numrangeEnd)) {
                		errorMessage = "The Value entered must be numeric and decimal should not exceed more than .99";
                	}
                    targetErrorElem.find('.errMsg').html(errorMessage);
                    targetErrorElem.find('.errMsg').show();
                }
            } else if (evt.target.id == "inpval_HT_QTY" || evt.target.id == "inpval_WD_QTY" || evt.target.id == "inpval_DPTH_QTY" || evt.target.id == "inpval_PCE_NBR" || evt.target.id == "HT_WD_DPTH_UM_CDE_dropdown" || evt.target.id == "SKU_DIM_USG_CDE_dropdown" || evt.target.id == "inpval_VOL_QTY" || evt.target.id == "VOL_UM_CDE_dropdown" || evt.target.id == "inpval_WT_QTY" || evt.target.id == "WT_UM_CDE_dropdown" && maintenanceFlag) {
            } else {
            	targetErrorElem.removeClass('attribute_error hasError');
                if ($(evt.target).hasClass('error-tooltip')) {
                    $('body').find('.tooltip-message').html('').hide();
                    if ($('body').find('.gridEdit-container').length > 0) {
                        var _this = $(evt.target);
                        if (_this.parents('tr').find('.hasError').length == 0) {
                            var parentElem = _this.parents('tr').attr('data-id'),
                                fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
                            fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').removeClass('rowHasError');
                        }
                        if ($(".gridEdit-container .hasError").length == 0) {
                            $('.gridEditErrorSection .errorMessage').hide();
                        }
                    }
                } else {
                    var path = window.location.href;
                    var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;

                    targetErrorElem.find('.errMsg').html('');
                    targetErrorElem.find('.errMsg').hide();
                    if (evt.target.name == "INPK_QTY") {
                        if (maintenanceFlag) {
                            $(this).parents().next().find('.errMsg').html('');
                            $(this).parents().next().children("div.form-details.createMerchantForm").children("div.input-row.form-group.VPAS-VendorAttribute-attribute-input-row").first().removeClass('hasError');
                        } else {
                            $(this).parents("div").next().find("input[name='OTPK_QTY']").find('.errMsg').html('');
                        }

                    }
                }
            }

            if (evt.target.name == "OTPK_QTY" || evt.target.name == "INPK_QTY") {
                outerPackQuantityValidation($(evt.target), evt.target.name);
            }
            if (evt.target.name == "SKU_FRST_UCST_AMT") {

                /*2123*/
                if ($(this).val() != "" && $(this).val() != "Mixed Value") {
                    var firstUnitCost = $(this).val();
                    $(this).val(noRoundDecimalNormalBrand(firstUnitCost));
                }
                firstUnitCostValidation($(evt.target));
            }

            if (evt.target.name == "DPTH_QTY" || evt.target.name == "HT_QTY" || evt.target.name == "WD_QTY") {
                heightWidthDepthValidation($(evt.target), evt.target.name);
            }

            if (evt.target.name == "SKU_LNDD_UCST_AMT") {

                if ($(this).val() != "" && $(this).val() != "Mixed Value") {
                    var skuLandedUnitCost = parseFloat($(this).val());

                }
                landedUnitCostValidation($(evt.target));
            }

            if (evt.target.name == "INIT_UNT_RTL_AMT") {
                initialUnitRetailAmountValidation($(evt.target));
            }

            if(evt.target.name != "HT_QTY" && evt.target.name != "DPTH_QTY" && evt.target.name != "WD_QTY")
            {
	            if (input == '' && $(this).parents('.requiredInPortal').length > 0 && !$(this).parents("td").hasClass('attrRowChbxTd')) {
	                $(this).parents("td").addClass('attribute_error hasError');
	            }
            }
            evt.stopImmediatePropagation();
            evt.stopPropagation();
            return false;
        });
    } else {

        $(evt.target).keyup(function() {
            $('body').find('.tooltip-message').html('').hide();
            var input = $(evt.target).val();
            var numrangeStart = $(evt.target).attr('data-range-start');
            var numrangeEnd = $(evt.target).attr('data-range-end');

            if (isNaN(Number(input)) && $(this).val() != "Mixed Value") {
            	$(this).parent().hasClass('popOver') ? $(this).parent().parent().addClass('attribute_error hasError') : $(this).parent().addClass('attribute_error hasError');
                if ($(this).hasClass('error-tooltip')) {
                    displayTooltip($(evt.target), "The Value entered must be numeric only");
                    if ($('body').find('.gridEdit-container').length > 0) {
                        var parentElem = $(evt.target).parents('tr').attr('data-id'),
                            fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
                        fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').addClass('rowHasError');
                        $('.gridEditErrorSection .errorMessage').show();
                    }
                } else {
                    targetErrorElem.find('.errMsg').html("The Value entered must be numeric only");
                    targetErrorElem.find('.errMsg').show();
                }
            } else {
            	targetErrorElem.removeClass('attribute_error hasError');
                if ($(evt.target).hasClass('error-tooltip')) {
                    $('body').find('.tooltip-message').html('').hide();
                    if ($('body').find('.gridEdit-container').length > 0) {
                        var _this = $(evt.target);
                        if (_this.parents('tr').find('.hasError').length == 0) {
                            var parentElem = _this.parents('tr').attr('data-id'),
                                fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
                            fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').removeClass('rowHasError');
                        }
                        if ($(".gridEdit-container .hasError").length == 0) {
                            $('.gridEditErrorSection .errorMessage').hide();
                        }
                    }
                } else {
                    targetErrorElem.find('.errMsg').html('');
                    targetErrorElem.find('.errMsg').hide();
                }
            }
        });
    }
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((!isDecimal && charCode == 46) || (charCode == 46 && evt.srcElement.value.split('.').length > 1)) {
        evt.preventDefault();
    }
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        evt.preventDefault();
}


function displayTooltip(_this, errorMessage,controlflag){
	var top = _this.offset().top - 30;
	var left = _this.offset().left;
	var errorMsgLength = errorMessage.length;
	$(".tooltip-message").html(errorMessage).show().css('opacity',0);
	var toolTipWidth = $(".tooltip-message").outerWidth();
	var windowWidth = document.body.clientWidth;
	if(_this.hasClass('hasErrorLabel') || _this.parent().hasClass('hasErrorLabel')){
		if (controlflag=='dsnflow') {
			$(".tooltip-message").css({"top":top-40+"px","left":left - 34+"px","right":"auto"}).removeClass('arrPos');
		}else{
			$(".tooltip-message").css({"top":top+"px","left":left - 34+"px","right":"auto"}).removeClass('arrPos');
		}
	} else{
		if($('body').find('.gridEdit-container').length > 0){
			var outertop =$('.errorMessage','.gridEditErrorSection').is(':visible')?0:$('.errorMessage','.gridEditErrorSection').outerHeight();
			if((_this.outerWidth()+_this.offset().left > document.body.clientWidth)){
				$(".tooltip-message").css({"top":top+outertop+"px","right":2+"px","left":"auto"}).addClass('arrPos');
			} else if((document.body.clientWidth - left) > toolTipWidth){
				var leftPos = left-toolTipWidth/2 +_this.outerWidth()/2;
				$(".tooltip-message").css({"top":top+outertop+"px","left":leftPos+"px","right":"auto"}).removeClass('arrPos');
			} else if((document.body.clientWidth - left) < toolTipWidth){
				var rightPos = document.body.clientWidth - left -_this.outerWidth();
				$(".tooltip-message").css({"top":top+outertop+"px","right":rightPos+"px","left":"auto"}).addClass('arrPos');
			}
		} else{
		    if((_this.outerWidth()+_this.offset().left + 50 > document.body.clientWidth)){
		    	$(".tooltip-message").css({"top":top+"px","right":50+"px","left":"auto"}).addClass('arrPos');
		    } else if((_this.outerWidth()+_this.offset().left + 50 < document.body.clientWidth) && (toolTipWidth >= document.body.clientWidth-left+50)){
		    	var leftPos = left-(toolTipWidth -_this.outerWidth());
		    	$(".tooltip-message").css({"top":top+"px","left":leftPos+"px","right":"auto"}).addClass('arrPos');
		    } else if((_this.outerWidth()+_this.offset().left + 50 < document.body.clientWidth) && (toolTipWidth < document.body.clientWidth-left+50)){
		    	var leftPos = left-toolTipWidth/2 +_this.outerWidth()/2;
		    	$(".tooltip-message").css({"top":top+"px","left":leftPos+"px","right":"auto"}).removeClass('arrPos');
		    }
		 }
	}
	 $(".tooltip-message").css('opacity',1);
}
function isValidDate(startDate, endDate,errorMsg, evnt){
	var event = evnt;
	startDate = (startDate == null) ? "today" : startDate;
	if(!$(event.target).hasClass('clicked')){
		if(startDate.toLowerCase() == "today"){
			var date = new Date();
		    var formattedDate = ('0' + date.getDate()).slice(-2);
		    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
		    var formattedYear = date.getFullYear();
		    var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;
			if(endDate != undefined && endDate != "" && endDate != null){
				var lastDate = new Date();
				 lastDate.setDate(lastDate.getDate() + endDate);
				 var month = ('0' + (lastDate.getMonth() + 1)).slice(-2);
				 var date = ('0' + lastDate.getDate()).slice(-2);
				 var year = lastDate.getFullYear();
				 var shortDate = month + '/' + date + '/' + year;
				 $(event.target).datepicker({
					dateFormat: "mm/dd/yy",
					minDate: dateString,
					maxDate: shortDate
				 });
			} else{
				$(event.target).datepicker({
					dateFormat: "mm/dd/yy",
					minDate: dateString
				 });
			}
	    }
		$(event.target).addClass('clicked');
		$(event.target).trigger("focus");
	}
	$(event.target).addClass('attributeDatePicker').attr('readonly',true);
}
function IsAlphaNumericByRegExp(regexp, errorMessage, evnt){
	var event = evnt;
	var expression = regexp;
	var searchSpecial = '$Backspace$Del$Home$Tab$Left$Right$Up$Down$End$';
    if (searchSpecial.indexOf('$' + evnt.code + '$') < 0) {
		if(regexp.substr(0,1) != "/" && regexp.substr(regexp.length-1,1) != "/"){
			expression = new RegExp(regexp);
		}
		else{
			regexp = regexp.substr(1, regexp.length-2);
			expression = new RegExp(regexp);
		}
		var input = String.fromCharCode(event.which);
		if (!expression.test(input)) {
			event.preventDefault();
		}else{
			if(event.target.name == "GP_CDE_TXT"){
				event.target.value = event.target.value.toUpperCase();
			}
		}
    }
    $(event.target).removeClass('keyDownAttached');
}


function displayTooltipGrid(_this, errorMessage, topHeight){
	var top = _this.offset().top - 80;
	if(topHeight != undefined){
		if(topHeight == "assorted"){
			top = _this.offset().top - 28;
		} else{
			top = _this.offset().top - 80;
		}
	}
	var left = _this.offset().left - 100;
	if($('body').find('.gridEdit-container').length > 0){
		var outertop =$('.errorMessage','.gridEditErrorSection').is(':visible')?0:$('.errorMessage','.gridEditErrorSection').outerHeight();
		if(_this.outerWidth()+_this.offset().left >= document.body.clientWidth || _this.outerWidth()+_this.offset().left+150 >= document.body.clientWidth)
		$(".tooltip-message").css({"top":top + outertop+"px","left":left-275+"px"}).addClass('arrPos');
		else $(".tooltip-message").removeClass('arrPos').css({"top": top + outertop +"px","left":left+"px"});
	} else{
		  if(_this.outerWidth()+_this.offset().left >= document.body.clientWidth || _this.outerWidth()+_this.offset().left+150 >= document.body.clientWidth)
		   $(".tooltip-message").css({"top":top+"px","left":left-275+"px"}).addClass('arrPos');
		  else $(".tooltip-message").removeClass('arrPos').css({"top": top +"px","left":left+"px"});
	}
	$(".tooltip-message").html(errorMessage).show();

}
function setDatePicker(){
	$("input[name='PRD_LNCH_DTE']").each(function(){ 
		$(this).addClass('attributeDatePicker');
	});
	$("input[name='EFF_BEG_DTE']").each(function(){ 
		$(this).addClass('attributeDatePicker');
	});
}
function handleSpecialAttributes(type){
	if(type != "bindEvent"){
		if($('body').find('.gridEdit-container').length > 0){
			var parElem = $("input[name='RPTG_LBL_CDE']").parents("td");
		} else {
			var parElem = $("div.RPTG_LBL_CDE");
		}
		parElem.find(".listItemPL").each(function(){ 
			if($(this).find("input").val() != ""){
				var labelHtml = $(this).find("label").html();
				labelText = labelHtml.split("</span>");
				var labelPrefix = "";
				if($(this).find("input").val().indexOf("A") >= 0){
					labelPrefix = "A1";
				}else{
					labelPrefix = "A2";
				}
				labelHtml = labelText[0]+"</span>"+labelPrefix+"-"+labelText[1];
				$(this).find("label").html(labelHtml);
			}
		});
	}
	$(".RPTG_LBL_CDE .listItemPL label").click(function(){
		var _this = $(this);
		if($('body').find('.gridEdit-container').length > 0){
			var parElem = $('.RPTG_LBL_CDE.multiselect-active');
		} else {
			var parElem = $(".RPTG_LBL_CDE");
		}
		setTimeout(function(){  
			var options = parElem.find(".selected_val_Label").val().split(",");
			var totalOptionsSelected=options.length;
			var optionWithA1Selected=false;
			var optionWithA2Selected=false;
			var attrObjSelector = _this.parents('.customDrop').attr('data-attr-name');
			var errorMessage = "Please select two values for Reporting Label, one starting with A1 and one starting with A2.";
			if(options.length == 1 && $.trim(options[0]) == "") {
				if(_this.parents(".input-row").length == 0){
					_this.parents(".RPTG_LBL_CDE").removeClass("hasError");
					$('body').find('.tooltip-message').html('').hide();
				}else{
					_this.parents(".input-row").removeClass("hasError");
					_this.parents(".input-row").find(".errmsg").text("").hide();
				}
				
				return;
			}
			
			if($($('[name="'+attrObjSelector+'"]')).parents('div').find('.multiselect-active').parents('tr').hasClass('rowSelected')){
				
				if(totalOptionsSelected == 1 || totalOptionsSelected > 2) {
					
					if(_this.parents(".input-row").length == 0){
						$("#grid-edit-table tbody .rowSelected .RPTG_LBL_CDE").addClass("hasError");
						displayTooltipGrid(parElem.find("input[name='RPTG_LBL_CDE']").next(), errorMessage);
					}else{
						_this.parents(".input-row").addClass("hasError");
						_this.parents(".input-row").find(".errmsg").text(errorMessage).show();
					}
					return;
				} else if (totalOptionsSelected == 2) {
					$(options).each(function() {
						var optionText = $.trim(this);
						var firstTwoCharacters = optionText.substring(0,2);
						if (firstTwoCharacters == "A1" || firstTwoCharacters == "a1") {
							optionWithA1Selected=true;
						} else if (firstTwoCharacters == "A2" || firstTwoCharacters == "a2") {
							optionWithA2Selected=true;
						}
					});
					
					if (optionWithA1Selected && optionWithA2Selected) {
						
						if(_this.parents(".input-row").length == 0){
							$("#grid-edit-table tbody .rowSelected .RPTG_LBL_CDE").removeClass("hasError");
							$("#grid-edit-table tbody .rowSelected .RPTG_LBL_CDE").find('[name="RPTG_LBL_CDE"]').parent('li').removeClass("hasError");
							$('body').find('.tooltip-message').html('').hide();
						}else{
							_this.parents(".input-row").removeClass("hasError");
							_this.parents(".input-row").find(".errmsg").text("").hide();
						}
						return;
					} else {
						if(_this.parents(".input-row").length == 0){
							_this.parents(".RPTG_LBL_CDE").addClass("hasError");
							displayTooltipGrid(parElem.find("input[name='RPTG_LBL_CDE']").next(), errorMessage);
						}else{
							_this.parents(".input-row").addClass("hasError");
							_this.parents(".input-row").find(".errmsg").text(errorMessage).show();
						}
						return;
					}
				}
			}else{
				if(totalOptionsSelected == 1 || totalOptionsSelected > 2) {
					
					if(_this.parents(".input-row").length == 0){
						if(options == "Select"){
							$('body').find(".RPTG_LBL_CDE.multiselect-active").removeClass("hasError");
							$('body').find('.tooltip-message').html('').hide();
						} else{
							$(".RPTG_LBL_CDE.multiselect-active").addClass("hasError");
							displayTooltipGrid(parElem.find("input[name='RPTG_LBL_CDE']").next(), errorMessage);
						}
					}else{
						_this.parents(".input-row").addClass("hasError");
						_this.parents(".input-row").find(".errmsg").text(errorMessage).show();
					}
					return;
				} else if (totalOptionsSelected == 2) {
					$(options).each(function() {
						var optionText = $.trim(this);
						var firstTwoCharacters = optionText.substring(0,2);
						if (firstTwoCharacters == "A1" || firstTwoCharacters == "a1") {
							optionWithA1Selected=true;
						} else if (firstTwoCharacters == "A2" || firstTwoCharacters == "a2") {
							optionWithA2Selected=true;
						}
					});
					
					if (optionWithA1Selected && optionWithA2Selected) {
						
						if(_this.parents(".input-row").length == 0){
							$(".RPTG_LBL_CDE.multiselect-active").removeClass("hasError");
							$('body').find('.tooltip-message').html('').hide();
						}else{
							_this.parents(".input-row").removeClass("hasError");
							_this.parents(".input-row").find(".errmsg").text("").hide();
						}
						return;
					} else {
						if(_this.parents(".input-row").length == 0){
							_this.parents(".RPTG_LBL_CDE").addClass("hasError");
							displayTooltipGrid(parElem.find("input[name='RPTG_LBL_CDE']").next(), errorMessage);
						}else{
							_this.parents(".input-row").addClass("hasError");
							_this.parents(".input-row").find(".errmsg").text(errorMessage).show();
						}
						return;
					}
				}
			}
			
		
		
		}, 300);
		
	});
}

function VolQtyValidation(_this){
	 var volQty = _this.val();
	 if(volQty === "0" || volQty === "0.00"){
		 errorMessage = "You must enter a value greater than zero";
		 _this.parent().parent().find('.errMsg').html(errorMessage);
		 _this.parent().parent().find('.errMsg').show();
	 }else{
		 _this.parent().parent().find('.errMsg').hide();
	 }
}

function firstUnitCostValidation(_this) {
	var hasPopOver = false;
	if (_this.parent().hasClass('popOver')) {
		var targetErrorElem = _this.parent().parent();
		hasPopOver = true;
	} else {
		var targetErrorElem = _this.parent();
		hasPopOver = false;
	}
    var path = window.location.href;
   var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;

    var firstUnitCost = _this.val();
    if (!maintenanceFlag) {
        var landedUnitCost = _this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").val();
        if (_this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
            landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
        }

        if ($('body').find('#skuManagementContainer').length > 0) {
            var landedUnitCost = _this.parents("#skuAttributesFormData").find("input[name='SKU_LNDD_UCST_AMT']").val();
        } else if (_this.parents("div").hasClass("massUpdateCustomerChoiceField") || _this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
            var landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
        } else {
            var landedUnitCost = _this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").val();
        }
    } else {
        var landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
        if (_this.parents("div").hasClass("massUpdateCustomerChoiceField") || _this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
            landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
        }
    }

    if (landedUnitCost != "" && firstUnitCost != "" && (isNaN(Number(landedUnitCost)) || isNaN(Number(firstUnitCost)))) {
        return;
    }

    if (landedUnitCost != "" && firstUnitCost != "" && landedUnitCost != "Mixed Value" && firstUnitCost != "Mixed Value" && (parseFloat(firstUnitCost)) > (parseFloat(landedUnitCost))) {
        errorMessage = "Should be less than or equal to Landed Unit Cost";
        targetErrorElem.addClass('attribute_error hasError');

        if (_this.hasClass('error-tooltip')) {
            displayTooltip(_this, errorMessage);
            if ($('body').find('.gridEdit-container').length > 0) {
                var parentElem = _this.parents('tr').attr('data-id'),
                    fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
                fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').addClass('rowHasError');
                $('.gridEditErrorSection .errorMessage').show();
            }
        } else {
            targetErrorElem.find('.errMsg').html(errorMessage);
            targetErrorElem.find('.errMsg').show();
        }
    } else {
    	(hasPopOver) ? _this.parents("td").prev().find("input[name='SKU_LNDD_UCST_AMT']").parent().parent().removeClass('attribute_error hasError') : _this.parents("td").prev().find("input[name='SKU_LNDD_UCST_AMT']").parent().removeClass('attribute_error hasError');
        if (_this.parents('tr').find('.hasError').length > 0) {
            var parentElem = _this.parents('tr').attr('data-id'),
                fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
            fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').removeClass('rowHasError');
        }
        if ($(".gridEdit-container .rowHasError").length > 0) {
            $('.gridEditErrorSection .errorMessage').hide();
        }
    }
    if (landedUnitCost == "" && firstUnitCost == "") {
    	if (hasPopOver) {
    		_this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").parent().parent().addClass('attribute_error hasError');
    		_this.parent().parent().addClass('attribute_error hasError');
    	} else {
    		_this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").parent().addClass('attribute_error hasError');
    		_this.closest("td").addClass('attribute_error hasError');
    	}
    }
    skuManagmentNumericEnable();
}


function landedUnitCostValidation(_this) {
	var hasPopOver = false;
	if (_this.parent().hasClass('popOver')) {
		var targetErrorElem = _this.parent().parent();
		hasPopOver = true;
	} else {
		var targetErrorElem = _this.parent();
		hasPopOver = false;
	}
    var path = window.location.href;
   	var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;

    if (maintenanceFlag) {
        var firstUnitCost = _this.parents().next().find("input[name='SKU_FRST_UCST_AMT']").val();
		var retailAmount = _this.parents().find("input[name='INIT_UNT_RTL_AMT']").val();
	} else {
        if ($('body').find('#skuManagementContainer').length > 0) {
            var firstUnitCost = _this.parents("#skuAttributesFormData").find("input[name='SKU_FRST_UCST_AMT']").val();
            var retailAmount = _this.parents("#skuAttributesFormData").find("input[name='INIT_UNT_RTL_AMT']").val();
        } else if (_this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
            var firstUnitCost = _this.parents("tr").next().find("input[name='SKU_FRST_UCST_AMT']").val();
            var retailAmount = _this.parents("tr").next().find("input[name='INIT_UNT_RTL_AMT']").val();
        } else {
            var firstUnitCost = _this.parents("tr").find("input[name='SKU_FRST_UCST_AMT']").val();
			var retailAmount = _this.parents("tr").find("input[name='INIT_UNT_RTL_AMT']").val();
        }
    }
    var landedUnitCost = _this.val();

    if (_this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
        firstUnitCost = _this.parents("tr").next().find("input[name='SKU_FRST_UCST_AMT']").val();
    }

    if (landedUnitCost != "" && firstUnitCost != "" && retailAmount != "" && (isNaN(Number(landedUnitCost)) || isNaN(Number(firstUnitCost)) || isNaN(Number(retailAmount)))) {
        return;
    }

    if (landedUnitCost != "" && firstUnitCost != "" && landedUnitCost != "Mixed Value" && firstUnitCost != "Mixed Value" && (parseFloat(firstUnitCost)) > (parseFloat(landedUnitCost))) {
        errorMessage = "Should be greater than or equal to First Unit Cost";
        targetErrorElem.addClass('attribute_error hasError');
        if (_this.hasClass('error-tooltip')) {
            displayTooltip(_this, errorMessage);
            if ($('body').find('.gridEdit-container').length > 0) {
                var parentElem = _this.parents('tr').attr('data-id'),
                    fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
                fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').addClass('rowHasError');
                $('.gridEditErrorSection .errorMessage').show();
            }
        } else {
            targetErrorElem.find('.errMsg').html(errorMessage);
            targetErrorElem.find('.errMsg').show();
        }
    } else if (landedUnitCost != "" && retailAmount != "" && landedUnitCost != "Mixed Value" && retailAmount != "Mixed Value"
		&& (parseFloat(retailAmount)) < (parseFloat(landedUnitCost))) {
		errorMessage = "Should be less than or equal to Initial Unit Retail Amount";
		targetErrorElem.addClass('attribute_error hasError');
		if (_this.hasClass('error-tooltip')) {
			displayTooltip(_this, errorMessage);
			if ($('body').find('.gridEdit-container').length > 0) {
				var parentElem = _this.parents('tr').attr('data-id'),
					fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
				fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').addClass('rowHasError');
				$('.gridEditErrorSection .errorMessage').show();
			}
		} else {
			targetErrorElem.find('.errMsg').html(errorMessage);
			targetErrorElem.find('.errMsg').show();
		}
	} else {
        if (location.pathname == "/merchandising/merchantAttributeMassUpdatePage") {
        	(hasPopOver) ? _this.parents("tr").next().find("input[name='SKU_FRST_UCST_AMT']").parent().parent().removeClass('attribute_error hasError') : _this.parents("tr").next().find("input[name='SKU_FRST_UCST_AMT']").parent().removeClass('attribute_error hasError');
        } else {
            (hasPopOver) ? _this.parents('tr').find("input[name='SKU_FRST_UCST_AMT']").parent().parent().removeClass('attribute_error hasError') : _this.parents('tr').find("input[name='SKU_FRST_UCST_AMT']").parent().removeClass('attribute_error hasError');
        }
        _this.parents("tr").next().find('.errmsg').text('');
        if (_this.parents('tr').find('.hasError').length > 0) {
            var parentElem = _this.parents('tr').attr('data-id'),
                fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
            fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').removeClass('rowHasError');
        }
        if ($(".gridEdit-container .rowHasError").length > 0) {
            $('.gridEditErrorSection .errorMessage').hide();
        }
    }
    if (landedUnitCost == "" && firstUnitCost == "") {
    	if(hasPopOver) {
    		_this.parents("tr").find("input[name='SKU_FRST_UCST_AMT']").parent().parent().addClass('attribute_error hasError');
        	_this.parent().parent().addClass('attribute_error hasError')
    	} else {
    		_this.parents("tr").find("input[name='SKU_FRST_UCST_AMT']").parent().addClass('attribute_error hasError');
        	_this.closest("td").addClass('attribute_error hasError');
    	}
    }
    skuManagmentNumericEnable();
}

function initialUnitRetailAmountValidation(_this) {
	var hasPopOver = false;
	if (_this.parent().hasClass('popOver')) {
		var targetErrorElem = _this.parent().parent();
		hasPopOver = true;
	} else {
		var targetErrorElem = _this.parent();
		hasPopOver = false;
	}
	var path = window.location.href;
	var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;

	var initialUnitRetailAmount = _this.val();
	if (!maintenanceFlag) {
		var landedUnitCost = _this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").val();
		if (_this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
			landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
		}

		if ($('body').find('#skuManagementContainer').length > 0) {
			var landedUnitCost = _this.parents("#skuAttributesFormData").find("input[name='SKU_LNDD_UCST_AMT']").val();
		} else if (_this.parents("div").hasClass("massUpdateCustomerChoiceField") || _this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
			var landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
		} else {
			var landedUnitCost = _this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").val();
		}
	} else {
		var landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
		if (_this.parents("div").hasClass("massUpdateCustomerChoiceField") || _this.parents("td").hasClass("massUpdateCustomerChoiceField")) {
			landedUnitCost = _this.parents("div").find("input[name='SKU_LNDD_UCST_AMT']").val();
		}
	}

	if (landedUnitCost != "" && initialUnitRetailAmount != "" && (isNaN(Number(landedUnitCost)) || isNaN(Number(initialUnitRetailAmount)))) {
		return;
	}

	if (landedUnitCost != "" && initialUnitRetailAmount != "" && landedUnitCost != "Mixed Value" && initialUnitRetailAmount != "Mixed Value"
		&& (parseFloat(initialUnitRetailAmount)) < (parseFloat(landedUnitCost))) {
		errorMessage = "Should be greater than or equal to Landed Unit Cost";
		targetErrorElem.addClass('attribute_error hasError');

		if (_this.hasClass('error-tooltip')) {
			displayTooltip(_this, errorMessage);
			if ($('body').find('.gridEdit-container').length > 0) {
				var parentElem = _this.parents('tr').attr('data-id'),
					fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
				fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').addClass('rowHasError');
				$('.gridEditErrorSection .errorMessage').show();
			}
		} else {
			targetErrorElem.find('.errMsg').html(errorMessage);
			targetErrorElem.find('.errMsg').show();
		}
	} else {
		(hasPopOver) ? _this.parents("td").prev().find("input[name='SKU_LNDD_UCST_AMT']").parent().parent().removeClass('attribute_error hasError') : _this.parents("td").prev().find("input[name='SKU_LNDD_UCST_AMT']").parent().removeClass('attribute_error hasError');
		if (_this.parents('tr').find('.hasError').length > 0) {
			var parentElem = _this.parents('tr').attr('data-id'),
				fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
			fixedTable.find('.' + parentElem + ' .vendorStyleIdHolder').removeClass('rowHasError');
		}
		if ($(".gridEdit-container .rowHasError").length > 0) {
			$('.gridEditErrorSection .errorMessage').hide();
		}
	}
	if (landedUnitCost == "" && initialUnitRetailAmount == "") {
		if (hasPopOver) {
			_this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").parent().parent().addClass('attribute_error hasError');
			_this.parent().parent().addClass('attribute_error hasError');
		} else {
			_this.parents("tr").find("input[name='SKU_LNDD_UCST_AMT']").parent().addClass('attribute_error hasError');
			_this.closest("td").addClass('attribute_error hasError');
		}
	}
	skuManagmentNumericEnable();
}

function outerPackQuantityValidation(_this, targetName){	
	var hasPopOver = false;
	if (_this.parent().hasClass('popOver')) {
		hasPopOver = true;
	} else {
		hasPopOver = false;
	}
	if(targetName == "OTPK_QTY"){
		outerPackQuantity = _this.val();
		if (_this.closest('td').hasClass('massUpdateCustomerChoiceField')) {
			innerPackQuantity = _this.closest("tbody").find("input[name='INPK_QTY']").val() == "" ? 0 : _this.closest('tbody').find("input[name='INPK_QTY']").val();
		}else{
			innerPackQuantity = _this.closest("tr").find("input[name='INPK_QTY']").val() == "" ? 0 : _this.closest("tr").find("input[name='INPK_QTY']").val();
		}
		if(innerPackQuantity == undefined){
			innerPackQuantity = _this.parents("div").prev().find("input[name='INPK_QTY']").val() == "" ? 0 : _this.parents("div").prev().find("input[name='INPK_QTY']").val();
		}
		if(isNaN(Number(outerPackQuantity)) || isNaN(Number(innerPackQuantity))){
			return;
		}
		if(_this.parents('tr').hasClass('rowSelected')){
			_errorTarget = _this.parents('.customer-choice-table').find('.rowSelected').find('input[name="'+targetName+'"]');
		}else{
			_errorTarget = _this;
		}
	}else{
		
		var path = window.location.href;
		var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;
		
		if(maintenanceFlag){
			outerPackQuantity = _this.parents().next().find("input[name='OTPK_QTY']").val();
			innerPackQuantity = _this.val() == "" ? 0 : _this.val();
		}else{
			if (_this.closest('td').hasClass('massUpdateCustomerChoiceField')) {
				outerPackQuantity = _this.closest("tbody").find("input[name='OTPK_QTY']").val() == "" ? 0 : _this.closest('tbody').find("input[name='OTPK_QTY']").val();
			}else{
				outerPackQuantity = _this.closest("tr").find("input[name='OTPK_QTY']").val() == "" ? 0 : _this.closest("tr").find("input[name='OTPK_QTY']").val();
			}
			innerPackQuantity = _this.val() == "" ? 0 : _this.val();
			if(outerPackQuantity == undefined){
				outerPackQuantity = _this.parents("div").next().find("input[name='OTPK_QTY']").val();
			}
		}

		if (maintenanceFlag){
			_errorTarget = _this.parents("div").next().find("input[name='OTPK_QTY']");
			if(_this.parents("div").hasClass("massUpdateCustomerChoiceField")){
				outerPackQuantity = _this.parents("div").next().find("input[name='OTPK_QTY']").val();
				_errorTarget = _this.parents("div").next().find("input[name='OTPK_QTY']");
			}
		}else{
			if (_this.closest('td').hasClass('massUpdateCustomerChoiceField')) {
				_errorTarget = _this.closest("tbody").find("input[name='OTPK_QTY']");
			}else{
				_errorTarget = _this.closest("tr").find("input[name='OTPK_QTY']");
			}
			if(_errorTarget.length == 0){
				_errorTarget = _this.parents("div").next().find("input[name='OTPK_QTY']");
			}
		}
		
		if(outerPackQuantity == ""){
			outerPackQuantity = innerPackQuantity;
			if(_errorTarget.hasClass('keyDownAttached')){
				_errorTarget.addClass('keyDownAttached')
			}
			_errorTarget.trigger("click");
		}
		if(isNaN(Number(outerPackQuantity)) || isNaN(Number(innerPackQuantity))){
			return;
		}
		
	}
	
	if(innerPackQuantity > 0 && outerPackQuantity == ""){
		(hasPopOver) ? _errorTarget.parent().parent().addClass('attribute_error hasError') : _errorTarget.parent().addClass('attribute_error hasError');
		if(_errorTarget.hasClass('error-tooltip')){
			if($('body').find('.gridEdit-container').length > 0){
				var parentElem = _errorTarget.parents('tr').attr('data-id'), fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
				fixedTable.find('.'+parentElem+' .vendorStyleIdHolder').addClass('rowHasError');
				$('.gridEditErrorSection .errorMessage').show(); 
			}
		} else{
			(hasPopOver) ? _errorTarget.parent().parent().find('.errMsg').html(errorMessage) : _errorTarget.parent().find('.errMsg').html(errorMessage);
		}
	}else if(innerPackQuantity > 0 && outerPackQuantity % innerPackQuantity != 0){
		errorMessage = "Should be divisible by Inner Pack Quantity";
		(hasPopOver) ? _errorTarget.parent().parent().addClass('attribute_error hasError') : _errorTarget.parent().addClass('attribute_error hasError');
		if(_errorTarget.hasClass('error-tooltip')){
			displayTooltip(_errorTarget, errorMessage);
			if($('body').find('.gridEdit-container').length > 0){
				var parentElem = _errorTarget.parents('tr').attr('data-id'), fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
				fixedTable.find('.'+parentElem+' .vendorStyleIdHolder').addClass('rowHasError');
				$('.gridEditErrorSection .errorMessage').show(); 
			}
		} else{
			(hasPopOver) ? _errorTarget.parent().parent().find('.errMsg').html(errorMessage).show() : _errorTarget.parent().find('.errMsg').html(errorMessage).show();
		}
		skuManagmentNumericEnable();
	}else{
		if(_errorTarget.parents('tr').find('.rowHasError').length > 0){
			var parentElem = _this.parents('tr').attr('data-id'), fixedTable = $('.gridEdit-container').find('.tablesorter-scroller-table').eq(0);
			fixedTable.find('.'+parentElem+' .vendorStyleIdHolder').removeClass('rowHasError');
		}
		if($(".gridEdit-container .hasError").length == 0){
			$('.gridEditErrorSection .errorMessage').hide();
		}
		skuManagmentNumericEnable();
	}
}

function verifyHeightWidthDepthDimensions(hasPopOver, heightQty, widthQty, depthQty, _heightErrorTarget, _widthErrorTarget, _depthErrorTarget){
	var errorMessage = "Either input or clear all 3 of Height, Width and Depth";
	var errorFlag = true;
	if(heightQty === "" && depthQty===""  && widthQty===""){
		if (hasPopOver) {
			_heightErrorTarget.parent().parent().removeClass('attribute_error hasError');
			_depthErrorTarget.parent().parent().removeClass('attribute_error hasError');
			_widthErrorTarget.parent().parent().removeClass('attribute_error hasError');
		} else {
			_heightErrorTarget.parent().removeClass('attribute_error hasError');
			_depthErrorTarget.parent().removeClass('attribute_error hasError');
			_widthErrorTarget.parent().removeClass('attribute_error hasError');
		}
	}else{
		if(heightQty == ""){
			(hasPopOver) ? _heightErrorTarget.parent().parent().addClass('attribute_error hasError') : _heightErrorTarget.parent().addClass('attribute_error hasError');
			displayTooltip(_heightErrorTarget, errorMessage);
			errorFlag = false;
		}else{
			(hasPopOver) ? _heightErrorTarget.parent().parent().removeClass('attribute_error hasError') : _heightErrorTarget.parent().removeClass('attribute_error hasError');
		}
		if(depthQty == ""){
			(hasPopOver) ? _depthErrorTarget.parent().parent().addClass('attribute_error hasError') : _depthErrorTarget.parent().addClass('attribute_error hasError');
			if(errorFlag){
				displayTooltip(_depthErrorTarget, errorMessage);
				errorFlag = false;
			}
		}else{
			(hasPopOver) ? _depthErrorTarget.parent().parent().removeClass('attribute_error hasError') : _depthErrorTarget.parent().removeClass('attribute_error hasError');
		}
		if(widthQty == ""){
			(hasPopOver) ? _widthErrorTarget.parent().parent().addClass('attribute_error hasError') : _widthErrorTarget.parent().addClass('attribute_error hasError');
			if(errorFlag){
				//displayTooltip(_widthErrorTarget, errorMessage);
				errorFlag = false;
			}
		}else{
			(hasPopOver) ? _widthErrorTarget.parent().parent().removeClass('attribute_error hasError') : _widthErrorTarget.parent().removeClass('attribute_error hasError');
		}
	}
}

function heightWidthDepthValidation(_this, targetName){
	var hasPopOver = false;
	if (_this.parent().hasClass('popOver')) {
		hasPopOver = true;
	} else {
		hasPopOver = false;
	}
	var heightQty = '', widthQty = '', depthQty = '', _heightErrorTarget, _depthErrorTarget, _widthErrorTarget;
	if(_this.closest('tr').hasClass('rowSelected') && _this.closest('table').find('tbody tr.rowSelected').length > 1){
		$('.tablesorter-scroller-table:visible').eq(1).find('tbody tr.rowSelected').each(function(i,v){
			heightQty = $(v).find("input[name='HT_QTY']").val();
			depthQty = $(v).find("input[name='DPTH_QTY']").val();
			widthQty = $(v).find("input[name='WD_QTY']").val();
			_heightErrorTarget = $(v).find("input[name='HT_QTY']");
			_depthErrorTarget = $(v).find("input[name='DPTH_QTY']");
			_widthErrorTarget = $(v).find("input[name='WD_QTY']");
			if(isNaN(Number(heightQty)) || isNaN(Number(depthQty)) || isNaN(Number(widthQty))){
				return;
			}
			verifyHeightWidthDepthDimensions(hasPopOver, heightQty, widthQty, depthQty, _heightErrorTarget, _widthErrorTarget, _depthErrorTarget);
		}); 
	}else{
		heightQty = _this.parents("tr").find("input[name='HT_QTY']").val();
		depthQty = _this.parents("tr").find("input[name='DPTH_QTY']").val();
		widthQty = _this.parents("tr").find("input[name='WD_QTY']").val();
		_heightErrorTarget = _this.parents("tr").find("input[name='HT_QTY']");
		_depthErrorTarget = _this.parents("tr").find("input[name='DPTH_QTY']");
		_widthErrorTarget = _this.parents("tr").find("input[name='WD_QTY']");
		if(isNaN(Number(heightQty)) || isNaN(Number(depthQty)) || isNaN(Number(widthQty))){
			return;
		}
		verifyHeightWidthDepthDimensions(hasPopOver, heightQty, widthQty, depthQty, _heightErrorTarget, _widthErrorTarget, _depthErrorTarget);
	}
}

function setDefaultSKUDescription(description){
	// $("input[name='SKU_DESC']").each(function(){
	// 	if($(this).val() == ""){
	// 		$(this).val(description);
	// 	}
	// });
	$(document).on("click", '.singleSelectList[data-name="UPC_EDI_ORD_IND"] .singleSelectListItem',function(){
		  var elem = $('.singleAttributeDesc.singleDrpActive').parents("tr"), _this = $(this);
		  if(_this.parents('ul').find('li:first-child').hasClass('selected') || _this.parents('ul').find('li:last-child').hasClass('selected')){
			  elem.find("input[name='EDI_ORD_IND']").val("Y");
			  elem.find("input[name='EDI_ORD_IND']").prev().val("Yes");
		  } else{
			  elem.find("input[name='EDI_ORD_IND']").val("N");
			  elem.find("input[name='EDI_ORD_IND']").prev().val("No");
		  }
	});
	$("input[name='EFF_BEG_DTE']").each(function(){ 
		if($(this).val() == ""){
			$(this).val(getTodaysDate());
		}
	});
}
function setMassGroupCode(vendorStyle){
	 var groupcodeids=[];
	 var found = false;

	}
function setMassSkuLandedCost(vendorStyle){
	 var skuLandCost=[];
	 var found = false;
	
}
function setMassBuyerRetailCost(vendorStyle){
	 var skuRetailCost=[];
	 var found = false;
}
function setDisplayColor(){
	var fixedTable = $('.customer-choice-container').find('.customer-choice-table');
	$('#customerAttributesContainer').find("input[name='DISP_CLOR_DESC']").each(function(){
		var disColor = $(this).val();
		if($(this).val() == ""){
			var inputRow = $(this).parents('tr').attr('data-id');
			var parElem = fixedTable.find('.'+inputRow);
			var disColor = parElem.find("input[name='displayColor']").val();
			$(this).val(disColor);
			$(this).parent().find('.display-color').text(disColor);
			$(this).parent().find('.display-color').removeClass("error-tooltip");
			$(this).parent().find('.display-color').parents(".attributeItems").removeClass("hasError");
		}
	});
}
function setProductLaunchDate(){
	$('#skuAttributesContainer').find("input[name='PRD_LNCH_DTE']").each(function(){
		if($(this).val() == ""){
			var inputRow = $(this).parents('tr').attr('data-id');
			var color = $(this).parents('tr').find("input[name='productLaunchDate']").val();
			$(this).val(color);
		}
	});
}
function setSkuInitalUnitCost(){
	$('#skuAttributesContainer').find("input[name='INIT_UNT_RTL_AMT']").each(function(){
		if($(this).val() == ""){
			var inputRow = $(this).parents('tr').attr('data-id');
			var unitCost = $(this).parents('tr').find("input[name='skuInitalUnitCost']").val();
			var actualUnitCost = noRoundDecimalNormalBrandinitnum(unitCost);
			$(this).val(actualUnitCost);
		}
	});
}
function setSkuLandedCost(){
	$('#skuAttributesContainer').find("input[name='SKU_LNDD_UCST_AMT']").each(function(){
		if($(this).val() == ""){
			var inputRow = $(this).parents('tr').attr('data-id');
			var skudata = $(this).parents('tr').find("input[name='skuLandedCost']").val();
			$(this).val(skudata);
		}
	});
	if(merchantAttributesJson.responseData.vendorStyleDetails.brand.brandTypeCode == "R"){
		$('#skuAttributesContainer').find("input[name='SKU_FRST_UCST_AMT']").each(function(){
			if($(this).val() == ""){
				var inputRow = $(this).parents('tr').attr('data-id');
				var skudata = $(this).parents('tr').find("input[name='skuLandedCost']").val();
				$(this).val(skudata);
			}
		});
	}
}
function setGroupCode(){
	$('#skuAttributesContainer').find("input[name='GP_CDE_TXT']").each(function(){
		if($(this).val() == ""){
			var inputRow = $(this).parents('tr').attr('data-id');
			var unitCost = $(this).parents('tr').find("input[name='groupCode']").val();
			$(this).val(unitCost);
		}
	});
}
function getTodaysDate(){
	var date = new Date();
    var formattedDate = ('0' + date.getDate()).slice(-2);
    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear();
    var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;
    return dateString;
}
function handleSpecialCCUpdatesForMaintenace(){
	var allData = Kjs.storage.getData("FormattedSKUsforCC");
	var secondaryTrendFlag = false;
	var secondaryTrendCode = "";
	$(allData.responseData.kohlsStyle.customerChoiceDetails).each(function(i){ 
		if(i == 0){
			secondaryTrendCode = $("input[name='SEC_TRND_CDE']").val();
		}else if(secondaryTrendCode != $("input[name='SEC_TRND_CDE']").val()){
			secondaryTrendFlag = true;
		}
	});
	
	
	var primTrendFlag = false;
	var primaryTrendCode = "";
	$(allData.responseData.kohlsStyle.customerChoiceDetails).each(function(i){ 
		if(i == 0){
			primaryTrendCode = $("input[name='PRIM_TRND_CDE']").val();
		}else if(primaryTrendCode != $("input[name='PRIM_TRND_CDE']").val()){
			primTrendFlag = true;
		}
	});
	
	var shoeBoxFlag = false;
	var shoeBoxCode = "";
	$(allData.responseData.kohlsStyle.customerChoiceDetails).each(function(i){ 
		if(i == 0){
			shoeBoxCode = $("input[name='SHOE_BOX_ID']").val();
		}else if(shoeBoxCode != $("input[name='SHOE_BOX_ID']").val()){
			shoeBoxFlag = true;
		}
	});
	
	var attributeName = "";
	if(primTrendFlag){
		attributeName += "Primary Trend Code";
	}
	if(secondaryTrendFlag){
		if(attributeName != ""){
			attributeName += ", Secondary Trend Code";
		}else{
			attributeName += "Secondary Trend Code";
		}
	}
	if(shoeBoxFlag){
		if(attributeName != ""){
			attributeName += ", Shoe Box Identifier";
		}else{
			attributeName += "Shoe Box Identifier";
		}
	}
	
	if(attributeName != ""){
		var errorMessage = attributeName + " should have the same value for all the Customer choices";
		$("#cxdialog").hide();
		$("#cxdialog_overlay").hide();
		$(".box-loading").hide();
		$(".box-overlay").hide();
		setTimeout(function(){  
			Kjs.modelPopUp.alertModelPopUp({message: errorMessage}, function(){});
		},100);
		return true;
	}
	
};

function handleSpecialCCUpdatesForAll(){
	
	var secondaryTrendFlag = false;
	var secondaryTrendCode = "";
	$("input[name='SEC_TRND_CDE']").each(function(i){ 
		if(i == 0){
			secondaryTrendCode = $(this).val();
		}else if(secondaryTrendCode != $(this).val()){
			secondaryTrendFlag = true;
		}
	});
	
	
	var primTrendFlag = false;
	var primaryTrendCode = "";
	$("input[name='PRIM_TRND_CDE']").each(function(i){ 
		if(i == 0){
			primaryTrendCode = $(this).val();
		}else if(primaryTrendCode != $(this).val()){
			primTrendFlag = true;
		}
	});
	
	var shoeBoxFlag = false;
	var shoeBoxCode = "";
	$("input[name='SHOE_BOX_ID']").each(function(i){ 
		if(i == 0){
			shoeBoxCode = $(this).val();
		}else if(shoeBoxCode != $(this).val()){
			shoeBoxFlag = true;
		}
	});
	
	var attributeName = "";
	if(primTrendFlag){
		attributeName += "Primary Trend Code";
	}
	if(secondaryTrendFlag){
		if(attributeName != ""){
			attributeName += ", Secondary Trend Code";
		}else{
			attributeName += "Secondary Trend Code";
		}
	}
	if(shoeBoxFlag){
		if(attributeName != ""){
			attributeName += ", Shoe Box Identifier";
		}else{
			attributeName += "Shoe Box Identifier";
		}
	}
	
	if(attributeName != ""){
		var errorMessage = attributeName + " should have the same value for all the Customer choices";
		$("#cxdialog").hide();
		$("#cxdialog_overlay").hide();
		$(".box-loading").hide();
		$(".box-overlay").hide();
		setTimeout(function(){  
			Kjs.modelPopUp.alertModelPopUp({message: errorMessage}, function(){});
		},100);
		return true;
	}
	
};

function setDigitalTurnTimeStamp(type){
	$("input[data-name='DGTL_TURN_IN_IND']").each(function(){
		if(type == "massupdate"){
			var elem = $(this).parents("table");
		} else{
			var elem = $(this).parents("tr");
		}
		if(elem.find("input[name='DGTL_TURN_IN_DTE']").val() == ""){
			if($(this).next().val() == "Y"){
				elem.find("input[name='DGTL_TURN_IN_DTE']").val(getTodaysDate());
				elem.find("input[name='DGTL_TURN_IN_DTE']").removeAttr("disabled");
				elem.find("input[name='DGTL_TURN_IN_DTE']").css("cursor","pointer");
				elem.find("input[name='DGTL_TURN_IN_DTE']").removeClass("readonly");
			}else{
				elem.find("input[name='DGTL_TURN_IN_DTE']").val("");
				elem.find("input[name='DGTL_TURN_IN_DTE']").attr("disabled","true");
				elem.find("input[name='DGTL_TURN_IN_DTE']").css("cursor","not-allowed");
			}
		}else{
			elem.find("input[name='DGTL_TURN_IN_DTE']").removeAttr("disabled");
			elem.find("input[name='DGTL_TURN_IN_DTE']").css("cursor","pointer");
			elem.find("input[name='DGTL_TURN_IN_DTE']").removeClass("readonly");
		}
		if(elem.find("input[data-name='DGTL_TURN_IN_IND']").hasClass('readonly')){
			elem.find("input[name='DGTL_TURN_IN_DTE']").attr("disabled","true");
			elem.find("input[name='DGTL_TURN_IN_DTE']").css("cursor","not-allowed");
	    }
	});
	$(document).on("click", '.singleSelectList[data-name="DGTL_TURN_IN_IND"] .singleSelectListItem',function(){
		var _this = $(this), parElem = $('.singleAttributeDesc.singleDrpActive');
		if(type == "massupdate"){
			var elem = parElem.parents("table");
		} else if(type == "attributes"){
			if(parElem.parents('tr').hasClass('rowSelected')){
				var elem = parElem.parents("tbody").find('.rowSelected');
			}else{
				var elem = parElem.parents("tr");
			}
		}else{
			var elem = parElem.parents("tr");
		}
		if(_this.attr('value') == "Y"){
			if(elem.find("input[name='DGTL_TURN_IN_DTE']").attr('default-val') != undefined &&
				elem.find("input[name='DGTL_TURN_IN_DTE']").attr('default-val') != "" &&
				elem.find("input[name='DGTL_TURN_IN_DTE']").attr('default-val') != "Mixed Value"){
				elem.find("input[name='DGTL_TURN_IN_DTE']").val(elem.find("input[name='DGTL_TURN_IN_DTE']").attr('default-val'));
			}else{
				elem.find("input[name='DGTL_TURN_IN_DTE']").val(getTodaysDate());
			}
			elem.find("input[name='DGTL_TURN_IN_DTE']").removeAttr("disabled");
			elem.find("input[name='DGTL_TURN_IN_DTE']").css("cursor","pointer");
			elem.find("input[name='DGTL_TURN_IN_DTE']").removeClass("readonly");
		}else{
			elem.find("input[name='DGTL_TURN_IN_DTE']").attr('default-val',elem.find("input[name='DGTL_TURN_IN_DTE']").val());
			elem.find("input[name='DGTL_TURN_IN_DTE']").val("");
			elem.find("input[name='DGTL_TURN_IN_DTE']").attr("disabled","true");
			elem.find("input[name='DGTL_TURN_IN_DTE']").css("cursor","default");
		}
	});
	if(type == "massupdate"){
		$("input[name='EFF_BEG_DTE']").each(function(){ 
			if($(this).val() == ""){
				$(this).val(getTodaysDate());
			}
		});
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


function isIEBrowser() {
	  var ua = window.navigator.userAgent;
	  
	  var msie = ua.indexOf('MSIE ');
	  if (msie > 0) {
		return true;
	  }

	  var trident = ua.indexOf('Trident/');
	  if (trident > 0) {
	    var rv = ua.indexOf('rv:');
	    return true;
	  }

	  var edge = ua.indexOf('Edge/');
	  if (edge > 0) {
		return true;
	  }

	  return false;
}
function convertHtml(text){
	var A=$("<div/>").html(text).text();
	return A;
}
function disableOption(){
	$.each($("input[name='PRD_LCYC_STG_CDE']"), function(){
		if($(this).val() == "3"){
			$(this).prev().attr("disabled", "true");
			$(this).prev().addClass('readonly');
		} else {
			$(this).parents(".singleSelectDropDownWrapper").find("ul .singleSelectListItem").each(function() {
				if($(this).attr('value') == "3"){
					$(this).parent().remove();
				}
			});
		}
	});
}
(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);
 
function validationVendorDisplayColor(_this){
	var errMsg3 = "<span class='color errmsg show'>Maximum 10 characters are allowed</span>";
	var errMsg2 = "<span class='color errmsg show' >* ? '  `  \" %  # , | [] are not allowed</span>";
	var errormsgg3 = "Maximum 10 characters are allowed";
	var errormsgg2 = "* ? '  `  \" %  # , | [] are not allowed";
	if(_this.hasClass("validateSlash"))
	{   if(_this.hasClass('createmerchant')){
			return false;
		}
		var otherSpeclChars = ["*","?","'","`",'"',"%","#",",","|","[","]"] ;
		count = 0;
		if(_this.val().length > 10){
			$(_this).addClass('hasError');
			if(!$(_this).next("span").hasClass("show")){

				if ($(_this).parents("#ccmassUpAttributesFormData").length>0 && $(_this).parents("td").find(".errmsg").length>0) {
					$(_this).parents("td").find(".errmsg").html(errormsgg3);
				}else{
					$(_this).after(errMsg3);	
				}
			}
			
			if($(_this).parents("td").length != null){
				$(_this).parents("td").addClass("hasError");
			}
			return false;
		}else{
			$(_this).removeClass('hasError');
			$(_this).next('span.errmsg').removeClass('show').addClass('hide');
			if($(_this).parents("td").length != null){
				$(_this).parents("td").removeClass("hasError");
			}
		}
		for(i = 0; i < otherSpeclChars.length;i++){
			
			if(_this.val().indexOf(otherSpeclChars[i]) > -1){
				if(!$(_this).hasClass("change_color")){ 
					$(_this).addClass('hasError'); 
				}
				$(_this).closest('td').find('span.color.errmsg').remove();
				$(_this).closest('.input-row').not('tbody.input-row').find('span.color.errmsg').remove();
				if(!$(_this).next("span").hasClass("show")){
					if ($(_this).parents("#ccmassUpAttributesFormData").length>0 && $(_this).parents("td").find(".errmsg").length>0) {
						$(_this).parents("td").find(".errmsg").html(errormsgg2);
					}else{
						$(_this).after(errMsg2);	
					}
				}
				
				if($(_this).parents("td").length != null){
					$(_this).parents("td").addClass("hasError");
				}
				return false;
				count++;
			}
		}
		if(count==0){
			$(_this).removeClass('hasError');
			$(_this).next('span.errmsg').removeClass('show').addClass('hide');
			if($(_this).parents("td").length != null){
				$(_this).parents("td").removeClass("hasError");
			}
			return true;
		}
	}
	else
	{
		backSlashCondition = new RegExp("\\\\","");
		colorHasBackslashes = backSlashCondition.test(_this.val());
		colorHasForwardslashes = _this.val().indexOf("/")>-1;
		var errMsg = '<span class="color errmsg show" >Please remove any forward/backward slashes</span>';
		var errMsg3 = "<span class='color errmsg show'>Maximum 22 characters are allowed</span>";
		var errormsgg3 = "Maximum 22 characters are allowed";
		var errormsgg = "Please remove any forward/backward slashes";
		if(_this.attr('name') != "pdNrfSize" && _this.val().length > 22 && !$(_this).hasClass("mapCCid")) {
			$(_this).addClass('hasError');
			if(!$(_this).next("span").hasClass("show") && !$(_this).hasClass("mapCCid")){
				if ($(_this).parents("#ccmassUpAttributesFormData").length>0 && $(_this).parents("td").find(".errmsg").length>0) {
					$(_this).parents("td").find(".errmsg").html(errormsgg3);
				}else{
					$(_this).after(errMsg3);
				}	
			}
			if($(_this).parents("td").length != null){
				$(_this).parents("td").addClass("hasError");
			}
			return false;
		}else{
			if($(_this).parents("td").length != null){
				$(_this).parents("td").removeClass('hasError');
			}
			$(_this).removeClass('hasError');
			$(_this).next('span.errmsg').removeClass('show').addClass('hide');
		}
		if(colorHasBackslashes===true || colorHasForwardslashes===true){
			if(!$(_this).hasClass("change_color")){ 
				$(_this).removeClass('hasError'); 
			}
			$(_this).closest('td').find('span.color.errmsg').remove();
			$(_this).closest('.input-row').not('tbody.input-row').find('span.color.errmsg').remove();
			if(!$(_this).next("span").hasClass("show")&&!_this.hasClass('createmerchant')){
				
				if ($(_this).parents("#ccmassUpAttributesFormData").length>0 && $(_this).parents("td").find(".errmsg").length>0) {
					$(_this).parents("td").find(".errmsg").html(errormsgg);
				}else{
					$(_this).after(errMsg);	
				}
			}

			if($(_this).parents("td").length != null){
				if(typeof(refactorCodeFlag) != "undefined" && refactorCodeFlag){
					if(_this.closest('td').hasClass('attrRowChbxTd')){
						$(_this).addClass("hasError");
					}else{
						$(_this).parents("td").addClass("hasError");
					}
				}else{
					$(_this).parents("td").addClass("hasError");
				}
			}
			return false;
		}
		else{
			var otherSpeclChars = ["*","?","'","`",'"',"%","#",",","|","[","]"] ;
			count = 0;
			for(i = 0; i < otherSpeclChars.length;i++){
				if(_this.val().indexOf(otherSpeclChars[i]) > -1){
					if(!$(_this).hasClass("change_color")){ 
						$(_this).addClass('hasError'); 
					}
					$(_this).closest('td').find('span.color.errmsg').remove();
					$(_this).closest('.input-row').not('tbody.input-row').find('span.color.errmsg').remove();
					if(!$(_this).next("span").hasClass("show")){
						if ($(_this).parents("#ccmassUpAttributesFormData").length>0 && $(_this).parents("td").find(".errmsg").length>0) {
							$(_this).parents("td").find(".errmsg").html(errormsgg2);
						}else{
							$(_this).after(errMsg2);
						}
					}
					
					if($(_this).parents("td").length != null && $(_this).parents(".rightScrollContainer").length==0){
						$(_this).parents("td").addClass("hasError");
					}
					return false;
					count++;
				}
			}
			if(count==0){
				$(_this).removeClass('hasError');
				$(_this).next('span.errmsg').removeClass('show').addClass('hide');
				if($(_this).parents("td").length != null){
					$(_this).parents("td").removeClass("hasError");
				}
				return true;
			}
		}
	}
}

function validationMAPCCID(_this){
	var errMsg3 = "<span class='color errmsg show'>24 charachters required</span>";
	var errMsg2 = "<span class='color errmsg show' >MAP CC ID must be a 24 alphanumeric entry, no special characters are allowed</span>";
	if(_this.hasClass("validateSlash"))
	{   if(_this.hasClass('createmerchant')){
			return false;
		}
		var otherSpeclChars = ["*","?","'","`",'"',"%","#",",","|","[","]","!","@","$","^","&","(",")","/","\\",",",".","<",">","-","+","{","}","_"] ;
		count = 0;
		if(_this.val().length != 24){
			$(_this).addClass('hasError');
			if(!$(_this).next("span").hasClass("show")){
				$(_this).after(errMsg3);	
			}
			
			if($(_this).parents("td").length != null){
				$(_this).parents("td").addClass("hasError");
			}
			return false;
		}else{
			$(_this).removeClass('hasError');
			$(_this).next('span.errmsg').removeClass('show').addClass('hide');
			if($(_this).parents("td").length != null){
				$(_this).parents("td").removeClass("hasError");
			}
		}
		for(i = 0; i < otherSpeclChars.length;i++){
			
			if(_this.val().indexOf(otherSpeclChars[i]) > -1){
				if(!$(_this).hasClass("change_color")){ 
					$(_this).addClass('hasError'); 
				}
				$(_this).closest('td').find('span.color.errmsg').remove();
				$(_this).closest('.input-row').not('tbody.input-row').find('span.color.errmsg').remove();
				if(!$(_this).next("span").hasClass("show")){
					$(_this).after(errMsg2);	
				}
				
				if($(_this).parents("td").length != null){
					$(_this).parents("td").addClass("hasError");
				}
				return false;
				count++;
			}
		}
		if(count==0){
			$(_this).removeClass('hasError');
			$(_this).next('span.errmsg').removeClass('show').addClass('hide');
			if($(_this).parents("td").length != null){
				$(_this).parents("td").removeClass("hasError");
			}
			return true;
		}
	}
	else
	{
		backSlashCondition = new RegExp("\\\\","");
		colorHasBackslashes = backSlashCondition.test(_this.val());
		colorHasForwardslashes = _this.val().indexOf("/")>-1;
		var errMsg = '<span class="color errmsg show" >Please remove any forward/backward slashes</span>';
		var errMsg3 = '<span class="color errmsg show">MAP CC ID must be a 24 alphanumeric entry, no special characters are allowed</span>';
		if(_this.attr('name') != "pdNrfSize" && _this.val().length != 24 && _this.val().length != 0){
			$(_this).addClass('hasError');
			if(!$(_this).next("span").hasClass("show")){
				$(_this).after(errMsg3);	
				$(_this).parents("td").addClass("hasError");
			}
			
			return false;
		}else{
			if($(_this).parents("td").length != null){
				$(_this).parents("td").removeClass('hasError');
			}
			$(_this).removeClass('hasError');
			$(_this).next('span.errmsg').removeClass('show').addClass('hide');
		}
		if(colorHasBackslashes===true || colorHasForwardslashes===true){
			if(!$(_this).hasClass("change_color")){ 
				$(_this).removeClass('hasError'); 
			}
			$(_this).closest('td').find('span.color.errmsg').remove();
			$(_this).closest('.input-row').not('tbody.input-row').find('span.color.errmsg').remove();
			if(!$(_this).next("span").hasClass("show")&&!_this.hasClass('createmerchant')){
				$(_this).after(errMsg);	
			}
			if($(_this).parents("td").length != null){
				if(typeof(refactorCodeFlag) != "undefined" && refactorCodeFlag){
					if(_this.closest('td').hasClass('attrRowChbxTd')){
						$(_this).addClass("hasError");
					}else{
						$(_this).parents("td").addClass("hasError");
					}
				}else{
					$(_this).parents("td").addClass("hasError");
				}
			}
			return false;
		}
		else{
			var otherSpeclChars = ["*","?","'","`",'"',"%","#",",","|","[","]","!","@","$","^","&","(",")","/","\\",",",".","<",">","-","+","{","}","_"] ;
			count = 0;
			for(i = 0; i < otherSpeclChars.length;i++){
				if(_this.val().indexOf(otherSpeclChars[i]) > -1){
					if(!$(_this).hasClass("change_color")){ 
						$(_this).addClass('hasError'); 
					}
					$(_this).closest('td').find('span.color.errmsg').remove();
					$(_this).closest('.input-row').not('tbody.input-row').find('span.color.errmsg').remove();
					if(!$(_this).next("span").hasClass("show")){
						$(_this).after(errMsg2);
					}
					
					if($(_this).parents("td").length != null && $(_this).parents(".rightScrollContainer").length==0){
						$(_this).parents("td").addClass("hasError");
					}
					return false;
					count++;
				}
			}
			if(count==0){
				$(_this).removeClass('hasError');
				$(_this).next('span.errmsg').removeClass('show').addClass('hide');
				if($(_this).parents("td").length != null){
					$(_this).parents("td").removeClass("hasError");
				}
				return true;
			}
		}
	}
}

var activateHoverToolTip =function(_this,displayMode,textLength){
	if(_this != undefined && _this.length == 0)
		return;
	var isInputText = false;
	$(".viewhoverMsg").css({
		'height': 'auto',
		'font-size': '14px', 
		'padding': '10px 13px 13px 13px', 
		'line-height': 'normal',
		'overflow-y': 'hidden'
	});
	if(displayMode=="hide"){
		$(".viewhoverMsg").hide();
		$('.scrollPopover').removeClass('scrollPopover');
	}else{
		if(_this.hasClass('custom-sel-val-label')){
			var _thisWidth = _this.width()-30;
		}else if(_this.hasClass('selected_val_Label')){
			var _thisWidth = _this.width()-85;
		}else{
			var _thisWidth = _this.width();
		}
		var tooltipMsg, multiTooltip = false;
		var textMaxLength = 13;
		if(_this.hasClass('ms-parent')){
			var selectedOptions = _this.find('ul li.selected');
			var spanTexts = "", count = 0;
			if(selectedOptions.length>0){
				selectedOptions.each(function(){
					var selected = $(this).find('label').text().trim();
					if(selected!='Select All' && selected!='SELECT' && selected!='Select all'){
						spanTexts += selected+',';
						count++;
					}
				});
			} else{
				var selected = _this.val();
				spanTexts += selected+',';
			}
			var currentTooltipMsg = spanTexts.substring(0,(spanTexts.length-1));
			tooltipMsg = currentTooltipMsg.trim();
			if(count > 3){
				multiTooltip = true;
			}
			var tagType = "";
			if (_this[0].tagName!=undefined) {
				var tagType = _this[0].tagName.toLowerCase();
			}
			if(tagType == "button"){
				isInputText = true;
			}
		} else if(_this.hasClass('filterSelected') || _this.hasClass('activeDropdown') || _this.hasClass('ms-choice')){
			if(_this.parents('.form-details').hasClass('singleSelect')){
				tooltipMsg = _this.text().trim();
			}else{
				var selectedOptions = _this.parent().find('ul li.selected').not('.ms-select-all');
				var spanTexts = "", count = 0;
				if(selectedOptions.length>0){
					selectedOptions.each(function(){
						var selected = $(this).find('label').text().trim();
						if(selected!='Select All' && selected!='SELECT' && selected!='Select all'){
							spanTexts += selected+',';
							count++;
						}
					});
				} else{
					var selected = _this.val();
					spanTexts += selected+',';
				}
				var currentTooltipMsg = spanTexts.substring(0,(spanTexts.length-1));
				tooltipMsg = currentTooltipMsg.trim();
			} 
			if(count > 3){
				multiTooltip = true;
			}
			var tagType = "";
			if (_this[0].tagName!=undefined) {
				var tagType = _this[0].tagName.toLowerCase();
			}
			if(tagType == "button"){
				isInputText = true;
			}
		}else if(_this.find('.hovered-item').length > 0){
			var tagFind = _this.find('.hovered-item');
			var tagType = tagFind[0].tagName.toLowerCase();
			var _thisWidth = tagFind.width();
			if(tagType=="input"){
				var findToCheckUl = _this.find('ul li.selected');
				if(findToCheckUl.length<1){
					var selectedUlItem = tagFind.val();
				} else if(_this.find('.specificCategoryInfo')){
					var selectedUlItem = tagFind.val();
				} 
				else{
					var selectedUlItem = _this.find('ul li.selected').text();
				}					
				tooltipMsg = selectedUlItem;				
			} else if(tagType=="select"){
				tooltipMsg = _this.find("option:selected").text().trim();
			}
		} else{
			var tagType = "";
			if (_this[0] != undefined && _this[0].tagName != undefined) {
				var tagType = _this[0].tagName.toLowerCase();
			}
			
			if(tagType=="input"){
				if(_this.hasClass('selected_val_Label')){
					var spanTexts = '';
					var customMultiSelected = _this.closest('.customDropHeader').next('.customDrop').find('ul li.selected:not(.select-allgrid)');
					if(customMultiSelected.length>0){
						customMultiSelected.each(function(){
							var selected = $(this).find('label').text().trim();
							if(selected!='Select All'){
								spanTexts += selected+',';
							}
						});
					} else{
						var selected = _this.val();
						spanTexts += selected+',';
					}
					
					 tooltipMsg = spanTexts.slice(0, -1) ;
				}else if(_this.hasClass('singleAttributeDesc')){
			    	tooltipMsg = _this.val().trim();
			    }else{
					if (_this.attr('type') == 'text') {
						tooltipMsg = _this.val().trim();
						isInputText = true;
					}
			    }
			}
			if(tagType=="select"){
				tooltipMsg = _this.find("option:selected").text().trim();
				_thisWidth = _this.width() - 40;
			}
			if(tagType=="div"){
				if(_this.hasClass('searchCustomDropDown')){
					tooltipMsg = _this.text().trim();
					textMaxLength = 12 ;
                }
                if(_this.hasClass('verify-error-message')) {
                    tooltipMsg = _this.attr('unavailableData');
                    _thisWidth = _this.width() - 130;
                }
            }
            if(tagType == "span") {
                if(_this.hasClass('consumerProductCount')) {
                    tooltipMsg = _this.attr('tooltipMsg');
                    _thisWidth = _this.width() - 60;
                }
            }
			if(tagType=="textarea"){
				tooltipMsg = _this.val().trim();
			}
		}
		$(".viewhoverMsg span").text(tooltipMsg);
		$(".viewhoverMsg").show();
		var _textWidth = $(".viewhoverMsg span").width()+5;
		var top = _this.offset().top-70 ;
		var left = _this.offset().left ;
		if(left+$('.viewhoverMsg').width() > window.outerWidth){
			left = left - ((left+$('.viewhoverMsg').width()+50) - window.outerWidth);
		}
		_this.css('cursor','pointer');
		var findTitleMsgHeight = $(".viewhoverMsg").height();
		if(findTitleMsgHeight>40){
			top = top-findTitleMsgHeight+35;
		}
		if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && tooltipMsg.length>=15){
		     top = top ;
		}
		if (isInputText) {
			$(".viewhoverMsg").css('min-width','0');
			_textWidth = $(".viewhoverMsg").width()+100;
			if (textLength) {
				textMaxLength = textLength;
			}
		}
		if(_this.hasClass('pog_dimension')){
			textMaxLength = 12;
		}
        if(_this.hasClass('vendor-plm-color')){
            textMaxLength = 11;
        }
        if(_this.hasClass('display-plm-color')){
            textMaxLength = 21;
        }
        if(_this.hasClass('vendor-plm-mapccid')){
        	textMaxLength = 16;	
        }
		var showTooltip = true;
		if(_thisWidth<_textWidth){
			if(tooltipMsg != undefined){
				if(tooltipMsg.length>=textMaxLength){
					if (top < 0) {
						top = 5;
						_this.addClass('scrollPopover');
						$(".viewhoverMsg").css({
							"top": top+"px",
							"left": left+"px",
							'height': _this.offset().top - 15,
							'font-size': '12px', 
							'padding': '5px', 
							'line-height': '1.1',
							'overflow-y': 'auto'
						}).show();
					}else{
						$(".viewhoverMsg").css({
							"top":top+"px",
							"left":left+"px",
							'height': 'auto',
							'font-size': '14px', 
							'padding': '10px 13px 13px 13px', 
							'line-height': 'normal',
							'overflow-y': 'hidden'
						}).show();
					}
				}else{
					$(".viewhoverMsg").hide();
					showTooltip = false;
				}
			}else{
				$(".viewhoverMsg .selected").text('');
				showTooltip = false;
			}
		}else{
			$(".viewhoverMsg").hide();
			showTooltip = false;
		}
		if((!showTooltip && _this.hasClass('selected_val_Label') &&_this.closest('.customDropHeader').next('.customDrop').find('ul li.selected').length > 3) || multiTooltip){
			$(".viewhoverMsg").css({"top":top+"px","left":left+"px"}).show();
		}
	}
}
$module('searchDropDown', function(log, env, module, Kjs) {
	var _activateStyleDropDown = function(){
		$(".searchCustomDropDown").on("click", _openSearchDropDown);
		$(".searchDropDownValues .searchSingleSelect").on("keyup", _filterSearchDropDown);
		$(".searchDropDownValuesParent .searchSingleSelect").on("keyup", _filterSearchDropDown);
		$(".searchDropDownValues .searchOptions").on("click", _selectedValues);	
		$(".dsnFlow3875 .searchCloseBtn").on("click", _removeText);
		//$("ul.colorValue li, ul.sizeValue li").on("click",Kjs.createMerchantGroup.createNewStylePanel.handleDsnColorSizeChange());
	},
	
	_deActivateStyleDropDown = function(){
		$(".searchCustomDropDown").off("click", _openSearchDropDown);
		$(".searchDropDownValues .searchSingleSelect").off("keyup", _filterSearchDropDown);
		$(".searchDropDownValuesParent .searchSingleSelect").off("keyup", _filterSearchDropDown);
		$(".searchDropDownValues .searchOptions").off("click", _selectedValues);	
		$(".dsnFlow3875 .searchCloseBtn").off("click", _removeText);
		//$("ul.colorValue li, ul.sizeValue li").off("click",Kjs.createMerchantGroup.createNewStylePanel.handleDsnColorSizeChange());
	},
	
	_openSearchDropDown = function(){
		if ($(this).parents(".dsnFlow3875").length>0) {
			var className = "searchDropDownValuesParent";
		}else{
			var className = "searchDropDownValues";
		}
		if (!$(this).parents(".combinetablebodydata").hasClass("rowHidden")) {
			if($(this).hasClass("activate")){
				$(this).removeClass("activate");
				$(this).next("."+className).hide();
				
			}else{
				$(this).addClass("activate");
				if($(this).next("."+className).find('.searchDropDownValues').html().trim() == ""){
					if($(this).hasClass('color')){
						$(this).next("."+className).find('.searchDropDownValues').html($('.dsn_color_outer').html());
					} else {
						$(this).next("."+className).find('.searchDropDownValues').html($('.dsn_size_outer').html());
					}
					Kjs.searchDropDown.deActivateStyleDropDown();
					Kjs.searchDropDown.activateStyleDropDown();
				
			        //$("ul.colorValue li, ul.sizeValue li").off("click",Kjs.createMerchantGroup.createNewStylePanel.handleDsnColorSizeChange());
			        //$("ul.colorValue li, ul.sizeValue li").on("click",Kjs.createMerchantGroup.createNewStylePanel.handleDsnColorSizeChange());
			                
				}
				if ($(this).parents(".dsnWrappernew").find(".combinetablebodydata").length>0) {
					if ($(".banner-containner-header").is(':visible')) {
						$(this).next("."+className).css("top",$(this).offset().top-210);
					}else{
						$(this).next("."+className).css("top",($(this).offset().top + $(this).outerHeight()) - 190);
					}
					$("."+className).hide();
				}
				$(this).next("."+className).show();
				
			}
		}
	},
	
	_selectedValues = function(){
		if ($(this).parents(".dsnFlow3875").length>0) {
			var className = "searchDropDownValuesParent";
		}else{
			var className = "searchDropDownValues";
		}
		$(this).parents("."+className).find("li").removeClass("selected");
		$(this).addClass("selected");
		$(this).parents("."+className).prev(".searchCustomDropDown").html($(this).text());
		if($(this).closest('ul').hasClass('colorValue')){
			if ($(this).closest('td').next().find('.vendor-color').val().trim()=="") {
				$(this).closest('td').next().find('.vendor-color').val($(this).text().split("(")[0]);
			}			
			if ($(this).closest('td').next().next().find('.display-color').val().trim()=="") {
				$(this).closest('td').next().next().find('.display-color').val($(this).text().split("(")[0]);
			}			
			if($(this).parents('tr').find('.searchCustomDropDown.size').text() != "Select"){
				$(this).parents('tr').find('.searchCustomDropDown.size').parents('.form-group').removeClass('hasError');
			}
			$(this).closest('td').next().find('.form-group').removeClass('hasError');
			$(this).closest('td').next().next().find('.form-group').removeClass('hasError');
			$(this).parents('.form-group').removeClass('hasError');
		}else{
			$(this).parents('.form-group').removeClass('hasError');
			if($(this).parents('tr').find('.searchCustomDropDown.color').text().trim() != "Select"){
				$(this).parents('tr').find('.searchCustomDropDown.color').parents('.form-group').removeClass('hasError');
			}
			if($(this).parents('tr').find('input.vendor-color').val().trim() != ""){
				$(this).parents('tr').find('input.vendor-color').parents('.form-group').removeClass('hasError');
			}
		}
		$(this).parents("."+className).prev(".searchCustomDropDown").trigger("click");
		 if($(this).parents('ul').hasClass("colorValue")){
            if($(this).parents('tr').hasClass('rowSelected')) {
                var innerHtml = $(this).text();
                $.each($(".comb-list-table tbody .rowSelected:not(.rowHidden) div.validColor"), function (i, v) {
                    $(v).text(innerHtml);
                    $(v).parents('.form-group').removeClass('hasError');
                    var colorcode=$(v).text().split("(")[1].split(")")[0];
                    $(v).next().find('li[data-option-value="'+colorcode+'"]').addClass('selected');
                });
            }
        }else if($(this).parents('ul').hasClass("sizeValue")){
            if($(this).parents('tr').hasClass('rowSelected')) {
                var innerHtmlSize = $(this).text();
                $.each($(".comb-list-table tbody .rowSelected:not(.rowHidden) div.validSize"), function (i, v) {
                    if(innerHtmlSize != "Select"){
                        $(v).text(innerHtmlSize);
                        $(v).parents('.form-group').removeClass('hasError');
                        var sizecode=$(v).text().split("(")[1].split(")")[0];
                        $(v).next().find('li[data-option-value="'+sizecode+'"]').addClass('selected');
                    }
                });
            }
        }
	},	
	_filterSearchDropDown = function(){
		if ($(this).parents(".dsnFlow3875").length>0) {
			var className = "searchDropDownValuesParent";
		}else{
			var className = "searchDropDownValues";
		}
		var searchText = $(this).val();
		var string3875 = true;
			$(this).parents("."+className).find(".searchOptions").each(function(i,k){
			if($(this).text().toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
				$(this).show();
				string3875 = false;
			}else{
				$(this).hide();
			}
		});
		if (string3875) {
			$(".searchDropDownValuesParent ul span.fact_close").remove();
			$(".searchDropDownValuesParent ul").append('<span class="fact_close" style="padding:10px 20px;">No Results Found </span>');
		} else {
			$(".searchDropDownValuesParent ul span.fact_close").remove();
		}

		if (searchText.trim()=="") {
			$(this).parent().find(".searchCloseBtn").addClass("dis-none-imp");
		}else{
			$(this).parent().find(".searchCloseBtn").removeClass("dis-none-imp");
		}
	},
	_removeText = function(){
		$(this).parents(".dsnFlow3875").find(".searchSingleSelect").val("");
		$(this).parents(".dsnFlow3875").find(".searchOptions").show();
		$(this).parents(".dsnFlow3875").find("span.fact_close").hide();
		$(this).parents(".dsnFlow3875").find(".searchCloseBtn").addClass("dis-none-imp");
	};
	
	return {
		activateStyleDropDown : _activateStyleDropDown,
		deActivateStyleDropDown : _deActivateStyleDropDown
	}
	
});
$module('searchDropDownAttributes', function(log, env, module, Kjs) {
	var _activateAttributeDropDown = function(){
		$(".attributeSingleSearchDropDown").on("click", _openSearchDropDown);
		$(".attributeDropDownValues .searchSingleSelect").on("keyup", _filterSearchDropDown);
		$(".attributeDropDownValues .searchOptions").on("click", _selectedValues);	
		$(".filterClose").on("click",_filterClear);	
		$(".dropDown3875Pdp .searchCloseBtn").on("click", _removeText);
		
	},
	
	_deActivateAttributeDropDown = function(){
		$(".attributeSingleSearchDropDown").off("click", _openSearchDropDown);
		$(".attributeDropDownValues .searchSingleSelect").off("keyup", _filterSearchDropDown);
		$(".attributeDropDownValues .searchOptions").off("click", _selectedValues);	
		$(".filterClose").off("click",_filterClear);	
		$(".dropDown3875Pdp .searchCloseBtn").off("click", _removeText);
	},
	_removeText = function(){
		$(this).parents(".dropDown3875Pdp").find(".searchSingleSelect").val("");
		$(this).parents(".dropDown3875Pdp").find(".searchOptions").show();
		$(this).parents(".dropDown3875Pdp").find("span.fact_close").hide();
		$(this).parents(".dropDown3875Pdp").find(".searchCloseBtn").addClass("dis-none-imp");
	},
	_filterClear = function(){
		$('body').find(".attributeDropDownValues li .searchSingleSelect").val(""); 
		$(".attributeDropDownValues:visible").find(".searchOptions").show();
		$(".attributeDropDownValues:visible").find(".fact_close").remove();
	},
	
	_openSearchDropDown = function(ev){
		if((($(this).parents('#vendor-list-table').length > 0 || $(this).parents('#vendorGroupList').length > 0) && $(this).hasClass('disableCommentRow')) || ($(this).parents('.DNScombinetable.dsn_style_form').length > 0 && $(this).parents('tr').hasClass('rowSelected')) || ($(this).parents('.DNScombinetable.existing_style_form').length > 0 && $(this).parents('tr').hasClass('rowSelected'))){
			$(this).blur();
			return;
		}
		$('body').find(".attributeDropDownValues li .searchSingleSelect").val("").trigger('keyup');
		$('body').find(".attributeDropDownValues").hide();
		var dropDownTop = ($(this).offset().top + $(this).outerHeight()) + 2, dropDownLeft = $(this).offset().left,_this=$(this);
		
		$(this).parent().find(".dropDown3875Pdp .searchSingleSelect").val("");
		$(this).parent().find(".dropDown3875Pdp .searchOptions").show();
		$(this).parent().find(".dropDown3875Pdp span.fact_close").hide();
		$(this).parent().find(".dropDown3875Pdp .searchCloseBtn").addClass("dis-none-imp");
		if($(this).hasClass("activate")){
			$(this).removeClass("activate");
			$(this).next(".attributeDropDownValues").hide();
		}else{
			$('body').find('.activate').removeClass('activate');
			$('.attributeDropdown_outer').html('');
			$(this).addClass("activate");
			if ($(this).parent().find(".dropDown3875Pdp").length>0) {
				if ($(this).parent().find(".dropDown3875Pdp .searchOptions").length>8) {
					$(this).parent().find(".dropDown3875Pdp .attributeNameSearch").show();
				}else{
					$(this).parent().find(".dropDown3875Pdp .attributeNameSearch").hide();
				}
			}
			var attrCode = $(this).val();
			$(this).parent().find('li').css('background','#fff');
			$(this).parent().find('li[data-value="'+attrCode+'"]').css('background','rgba(255, 220, 206)');
			var notifyHeight = 0;
			if ($(".banner-containner-header").is(':visible')) {
				notifyHeight = $(".banner-containner-header").outerHeight();
			}
			if($(this).parents('.dsn_style_form').length > 0 || $(this).parents('.existing_style_form').length > 0){
				 var rt = ($(window).width() - ($(this).offset().left + $(this).outerWidth())); // 79
				// $(this).next(".attributeDropDownValues").css('right', rt - 17 + "px");
				 if($(this).attr('name') == "pdpCategoryDescription"){
					 var innerHtml = $(".pdpDropdown_outer.attributeDropDownValues").clone(true);
					 $('.attributeDropdown_outer').html(innerHtml);
					 _displayDropDownList($(this),dropDownTop,notifyHeight,rt);
				 } else {
					 if($(this).parents('.existing_style_form').length > 0){
						 $('.box-overlay, .box-loading').show();
						 var p4id = $(this).parents('tr').find('.p4_attribute .attribute_code').val().trim(), _this = $(this);
						 Kjs.vpAjax.get('/pdp/v1/searchSpecificProductByCategoryId?categoryId='+encodeURIComponent(p4id),{},function(response){
					 		if(response.errorMessage != undefined && response.errorMessage != ""){
					 			Kjs.modelPopUp.displayServiceError(response.errorMessage);
					 		}else{
					 			var option = "";
					 			if(response.responseData.specificProductCategoryResponse.length > 0 && response.responseData.specificProductCategoryResponse[0].specificCategoryMap != undefined){
					 				var p5List = response.responseData.specificProductCategoryResponse[0].specificCategoryMap;
					 				for(var temp in p5List){
					 					option += '<li class="searchOptions" data-trans="'+p5List[temp].specificCategoryCode.toUpperCase()+'" data-value="'+p5List[temp].specificCategoryCode+'">'+p5List[temp].specificCategoryDescription+'</li>';
					 				}
					 				_this.next(".attributeDropDownValues").find('ul').html(option);
					 				var innerHtml = _this.next(".attributeDropDownValues").clone(true);
									$('.attributeDropdown_outer').html(innerHtml);
					 			}
					 			$('.box-overlay, .box-loading').hide();
					 			Kjs.searchDropDownAttributes.deActivateAttributeDropDown();
					 			Kjs.searchDropDownAttributes.activateAttributeDropDown();
					 			_displayDropDownList(_this,dropDownTop,notifyHeight,rt);
					 		}
					 	},function(){
					 		$('.box-overlay, .box-loading').hide();
					 	});
					 } else {
						 if($(this).next(".attributeDropDownValues").find('ul').html().trim() == ""){
							 var innerHtml = $(".specificDropdown_outer.attributeDropDownValues").clone(true);
							 $('.attributeDropdown_outer').html(innerHtml);
						 } else {
							 var innerHtml = $(this).next(".attributeDropDownValues").clone(true);
							 $('.attributeDropdown_outer').html(innerHtml);
						 }
						 _displayDropDownList($(this),dropDownTop,notifyHeight,rt);
					 }
				 }
			} else if($(this).parents('#vendor-list-table').length > 0 || $(this).parents('#vendorGroupList').length > 0){
				var innerHtml = $(this).parents('td').find('.attributeDropDownValues').clone(true);
				$('.attributeDropdown_outer').html(innerHtml);
				var hasInitScrollbar = window.innerWidth > document.documentElement.clientWidth;
				$('.attributeDropdown_outer').css({"top":dropDownTop + "px","left":dropDownLeft + "px"});
				$('.attributeDropdown_outer').find('.attributeDropDownValues').show();
				var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
				if(!hasInitScrollbar && hasScrollbar){
					$('.attributeDropdown_outer').css({"left":dropDownLeft -14 + "px"});
				}
			} else if($(this).parents('.attribute_dropdown').length > 0){
				$(this).parents('.attribute_input').find(".attributeDropDownValues").css({"top":dropDownTop + "px","left":dropDownLeft + "px"}).show();
			}else if($(this).parents('.factory_attribute_input').length > 0){
				$(".attributeDropDownValues").find(".searchOptions").show();
				$(this).parents('.attribute_input').find(".attributeDropDownValues").css({"top":dropDownTop + "px","left":dropDownLeft + "px"}).show();	 
			}else if($(this).parents('.gridEditFactory_attribute').length > 0){ 
				if($(this).closest('tr').hasClass('disableCommentRow')){

				}else{
					if(Kjs.storage.getData('userInfo').role == "Vendor" || Kjs.storage.getData('userInfo').role == "VU" ){
							var _this = $(this); 
			    		    var offset = _this.offset(); 
			    		    var closestTr = _this.closest('tr').offset();
			    		    var closestTdLeft = _this.closest('td').offset().left;
			    		    var top = (closestTr.top +67) - 258;
			    		    $(this).closest('.tablesorter-scroller-table').addClass('typeaheadOpen');
							$(this).closest('.tablesorter-scroller.tablesorter-scroller-has-fixed-columns').css('position','static');
							$(this).closest('.tablesorter-scroller-table').css({"position":'static'});
					}
					else{
							var _this = $(this); 
			    		    var offset = _this.offset(); 
			    		    var closestTr = _this.closest('tr').offset();
			    		    var closestTdLeft = _this.closest('td').offset().left - 20;
			    		    var top = (closestTr.top +67) - 236;
			    		    $(this).closest('.tablesorter-scroller-table').addClass('typeaheadOpen');
							$(this).closest('.tablesorter-scroller.tablesorter-scroller-has-fixed-columns').css('position','static');
							$(this).closest('.tablesorter-scroller-table').css({"position":'static',"margin-left":'220px'});
					}
				

			   // var top = offset.top-220;  
			      
				$(this).parents('.attribute_input').find(".attributeDropDownValues").css('position','absolute');
				$(this).parents('.attribute_input').find(".attributeDropDownValues").css({"top":top,"left":closestTdLeft,"width":'405px',"max-height":'328px', "background":'#fff'}).show();
				$(".attributeDropDownValues").find(".searchOptions").show();	
			}

			}else if($(this).parents('.form-details').length > 0){
				$(this).parents('.form-details').find('.attributeDropDownValues').show();
				$(this).parents('.form-details').find(".attributeDropDownValues").css({"top":dropDownTop + "px","left":dropDownLeft + "px"}).show();	
			}else if(_this.closest('#adhocImgUploadContainer').length > 0){
				$(this).closest('.attribute_input').find(".attributeDropDownValues").show();
				$(this).closest('.attribute_input').find(".attributeDropDownValues .searchOptions").show();
				$(this).closest('.attribute_input').find(".attributeDropDownValues span.fact_close").remove();
				$(".attributeDropDownValues .searchOptions").removeClass('filtered');
			}else{
				if($(this).hasClass('pdp_category_input') || $(this).hasClass('specific_product_input')){
					if($(this).hasClass('pdp_category_input') && $(this).parents('.p4_attribute').find('.attributeDropDownValues ul').html().trim() == ""){
						var innerHtml = $(".pdpDropdown_outer.attributeDropDownValues ul").clone(true);
						$(this).parents('.p4_attribute').find('.attributeDropDownValues ul').html(innerHtml);
						$(this).parents('.attribute_input').find('.attributeDropDownValues').find('.selected').removeClass('selected');
						$(this).parents('.attribute_input').find('.attributeDropDownValues').find('li').css('background','#fff');
						var pdpCode = $(this).parents('.attribute_input').find('.attribute_code').val();
						$(this).parents('.attribute_input').find('.attributeDropDownValues li[data-trans="'+pdpCode.toUpperCase()+'"]').addClass('selected');
						$(this).parents('.attribute_input').find('.attributeDropDownValues li[data-trans="'+pdpCode.toUpperCase()+'"]').css('background','rgba(255, 220, 206)');
					} else if($(this).hasClass('specific_product_input') && $(this).parents('.p5_attribute').find('.attributeDropDownValues ul').html().trim() == ""){
						if($(this).parents('.existing-popup-container').length > 0){
							$('.box-overlay, .box-loading').show();
							var p4id = $(this).parents('.selection-list').find('.p4_attribute .attribute_code').val().trim(), _this = $(this);
							Kjs.vpAjax.get('/pdp/v1/searchSpecificProductByCategoryId?categoryId='+encodeURIComponent(p4id),{},function(response){
								if(response.errorMessage != undefined && response.errorMessage != ""){
									Kjs.modelPopUp.displayServiceError(response.errorMessage);
								}else{
									var option = "";
									if(response.responseData.specificProductCategoryResponse.length > 0 && response.responseData.specificProductCategoryResponse[0].specificCategoryMap != undefined){
										var p5List = response.responseData.specificProductCategoryResponse[0].specificCategoryMap;
										for(var temp in p5List){
											option += '<li class="searchOptions" data-trans="'+p5List[temp].specificCategoryCode.toUpperCase()+'" data-value="'+p5List[temp].specificCategoryCode+'">'+p5List[temp].specificCategoryDescription+'</li>';
										}
										_this.parents('.p5_attribute').find('.attributeDropDownValues ul').html(option);
									}
									_this.parents('.attribute_input').find('.attributeDropDownValues').find('.selected').removeClass('selected');
									_this.parents('.attribute_input').find('.attributeDropDownValues').find('li').css('background','#fff');
									var pdpCode = _this.parents('.attribute_input').find('.attribute_code').val();
									_this.parents('.attribute_input').find('.attributeDropDownValues li[data-trans="'+pdpCode.toUpperCase()+'"]').addClass('selected');
									_this.parents('.attribute_input').find('.attributeDropDownValues li[data-trans="'+pdpCode.toUpperCase()+'"]').css('background','rgba(255, 220, 206)');
									$('.box-overlay, .box-loading').hide();
									Kjs.searchDropDownAttributes.deActivateAttributeDropDown();
									Kjs.searchDropDownAttributes.activateAttributeDropDown();
								}
							},function(){
								$('.box-overlay, .box-loading').hide();
							});
						} else {
							var innerHtml = $(".specificDropdown_outer.attributeDropDownValues ul").clone(true);
							$(this).parents('.p5_attribute').find('.attributeDropDownValues ul').html(innerHtml);
							$(this).parents('.attribute_input').find('.attributeDropDownValues').find('.selected').removeClass('selected');
							$(this).parents('.attribute_input').find('.attributeDropDownValues').find('li').css('background','#fff');
							var pdpCode = $(this).parents('.attribute_input').find('.attribute_code').val();
							$(this).parents('.attribute_input').find('.attributeDropDownValues li[data-trans="'+pdpCode.toUpperCase()+'"]').addClass('selected');
							$(this).parents('.attribute_input').find('.attributeDropDownValues li[data-trans="'+pdpCode.toUpperCase()+'"]').css('background','rgba(255, 220, 206)');
						}
					}
				}
				if($(this).parent().find(".dropDown3875Pdp").length>0) {
					if ($(this).parent().find(".dropDown3875Pdp .searchOptions").length>8) {
						$(this).parent().find(".dropDown3875Pdp .attributeNameSearch").show();
					}else{
						$(this).parent().find(".dropDown3875Pdp .attributeNameSearch").hide();
					}
				}
				if($(this).parents('.form-details').length > 0){
					$(this).parents('.form-details').find(".attributeDropDownValues").show();
				}else{
					$(this).parents('.attribute_input').find(".attributeDropDownValues").show();
				}
			}
		}
	},
	_displayDropDownList = function(_this,dropDownTop,notifyHeight,rt){
		var pdpCode = _this.parent().find('.attribute_code').val();
		 $('.attributeDropdown_outer').find('.selected').removeClass('selected');
		 $('.attributeDropdown_outer').find('li').css('background','#fff');
		 $('.attributeDropdown_outer').find('li[data-trans="'+pdpCode.toUpperCase()+'"]').addClass('selected');
		 $('.attributeDropdown_outer').find('li[data-trans="'+pdpCode.toUpperCase()+'"]').css('background','rgba(255, 220, 206)');
		 if($('.attributeDropdown_outer').find(".dropDown3875Pdp").length>0) {
			if ($('.attributeDropdown_outer').find(".dropDown3875Pdp .searchOptions").length>8) {
				$('.attributeDropdown_outer').find(".dropDown3875Pdp .attributeNameSearch").show();
			}else{
				$('.attributeDropdown_outer').find(".dropDown3875Pdp .attributeNameSearch").hide();
			}
		 }
		 $('.attributeDropdown_outer').find('.attributeDropDownValues').css({"top":dropDownTop-notifyHeight + "px","right":rt + "px"});
		 $('.attributeDropdown_outer').find('.attributeDropDownValues').show();
	},
	_selectedValues = function(){
		var _this = $(this), _elem = $('.attributeSingleSearchDropDown.activate');
		if(_this.parents('.attributeDropdown_outer').length > 0 && _elem.parents('.DNScombinetable.dsn_style_form').length == 0 && _elem.parents('.DNScombinetable.existing_style_form').length == 0){
			if($('.attributeSingleSearchDropDown.activate').parents('#vendor-list-table').length > 0 || $('.attributeSingleSearchDropDown.activate').parents('#vendorGroupList').length > 0){
				var parElem = $('.attributeSingleSearchDropDown.activate').parents('table').attr('id'), p5Code = $('.attributeSingleSearchDropDown.activate').parents('.p5_attribute_outer').find('.attribute_code').val();
				var p5Val = $('.attributeSingleSearchDropDown.activate').val(), p4Val = $('.attributeSingleSearchDropDown.activate').parents('tr').find('.p4_attribute_outer .attribute_desc').val();
				var count = 0, styleList = "", selCode = _this.attr('data-value'), selVal = _this.text();
				if(p5Code != selCode){
					Kjs.modelPopUp.alertConfirmModelPopUp(function(){
						if($('.attributeSingleSearchDropDown.activate').parents('#vendor-list-table').length > 0 ){
							var vsFilled =  _styleChanged('vendor-list-table');
						} else{
							var vsFilled =  _styleChanged('vendorGroupList');
						}
						if(!$('.attributeSingleSearchDropDown.activate').parents('tr').find("input[type='checkbox']").is(':checked')){
							$('.attributeSingleSearchDropDown.activate').parents('tr').find('.p5_attribute_outer .attributeSingleSearchDropDown').val(selVal);
							$('.attributeSingleSearchDropDown.activate').parents('tr').find('.p5_attribute_outer .attribute_code').val(selCode); 
							if($('.attributeSingleSearchDropDown.activate').hasClass('isRejectedGrid')){					
								$('.attributeSingleSearchDropDown.activate').parents('td').addClass('isEdited');
								$('.attributeSingleSearchDropDown.activate').addClass('isEdited');
								$('.attributeSingleSearchDropDown.activate').closest('.isRejectedGrid').removeClass('isRejectedGrid isExceptionApproved');
								$('.attributeSingleSearchDropDown.activate').parents('.p5_attribute_outer').find('.error_bell, .exception_icon').remove();
							}
							$('.attributeSingleSearchDropDown.activate').parents('tr').find('.p5_attribute_outer .attributeSingleSearchDropDown').addClass('p5_changed');
							$('.attributeSingleSearchDropDown.activate').parents('tr').parent('.attribute_input').find('.sort_field').text(selVal);
							$('.attributeSingleSearchDropDown.activate').parents('tr').parents('.attribute_input').removeClass('hasError');
						} else{
							$.each($("#"+parElem).find('tbody tr').find("input[type='checkbox']:checked"),function(){
								var p4Attr = $(this).parents('tr').find('.p4_attribute_outer .attribute_desc').val();
								if(p4Attr.trim() == p4Val.trim()){
									$(this).parents('tr').find('.p5_attribute_outer .attributeSingleSearchDropDown').val(selVal);
									$(this).parents('tr').find('.p5_attribute_outer .attribute_code').val(selCode); 
									$(this).parents('tr').find('.p5_attribute_outer .attributeSingleSearchDropDown').addClass('p5_changed');
									$(this).parents('tr').parent('.attribute_input').find('.sort_field').text(selVal);
									$(this).parents('tr').parents('.attribute_input').removeClass('hasError');
									if($(this).parents('tr').find('.isRejectedGrid').length){					
										$(this).parents('tr').find('.isRejectedGrid').parents('td').addClass('isEdited');
										$(this).parents('tr').find('.isRejectedGrid').addClass('isEdited');
										$(this).parents('tr').find('.isRejectedGrid').removeClass('isRejectedGrid');
										$(this).parents('tr').find('.error_bell').remove();
									}
								} else{
									count++;
									styleList = styleList + "," +$(this).parents('tr').attr('data-vendor-style-id');
								}
							});
						}
						$('.prop-tabs.kohlsHeader').find('.p5_error_outer').removeClass('align_p5_attribute');
						$('.prop-tabs.kohlsHeader').find('li').hide();
						$('.prop-tabs.kohlsHeader').find('.p5_save_outer, .p5_error_outer').show();
						if($('.attributeSingleSearchDropDown.activate').parents('#vendor-list-table').length > 0 ){
							$("#send_to_ip").addClass('hide');
							Kjs.vendorGroup.vendorGroupPanel.vsListTable.trigger('update');
							var vsChanged = _styleChanged('vendor-list-table');
							$('.btn_outer #vendor-continue').hide();
							$('.btn_outer .p5_save_changes').show();
							if(!vsChanged){
								$('.btn_outer .p5_save_changes').removeClass('btn_disabled');
								$('.prop-tabs.kohlsHeader').find('.p5_save_changes').removeClass('btn_disabled');
							}
						} else{
							Kjs.vendorGroup.vendorListTable.trigger('update');
							var vsChanged = _styleChanged('vendorGroupList');
							$('.vendor_btn_outer .submit-attr').hide();
							$('.vendor_btn_outer .p5_save_changes').show();
							if(!vsChanged){
								$.each($('#vendorGroupList').find('tbody tr'),function(){
									$(this).find('.editStyle').addClass('disableFields');
									$(this).find('.style_icon.editStyle, .vender_comment').addClass('hideTd');
								});
								$('.vendor_btn_outer .p5_save_changes').removeClass('btn_disabled');
								$('.prop-tabs.kohlsHeader').find('.p5_save_changes').removeClass('btn_disabled');
							}
						}
						if(!vsFilled && !vsChanged){
							$('.prop-tabs.kohlsHeader').find('.p5_error_outer .p5_error_container .error_text').html("Please <span class='font_bold'>Save changes</span> when finished.");
							$('.tabs .list-add-icon').addClass('dis-none');
						}
						$('body').find('.attributeSingleSearchDropDown.activate').removeClass('activate');
						$('.attributeDropdown_outer').html('');
						if(count > 0){
							$('.fa.fa-times').click();
							styleList = styleList.trim().replace(/^,|,$/g,'');
							styleList =  $.unique(styleList.split(','));
							styleList = styleList.join(",");
							Kjs.modelPopUp.alertModelPopUp({message:"Mass update not applied to vendor style "+styleList+". As product category is different."}, function(){});
						}
					},function(){
						$('body').find('.attributeSingleSearchDropDown.activate').removeClass('activate');
						$('.attributeDropdown_outer').html('');
					},{title:"Warning !",message:"Updating the Specific Product may impact attribution, please make necessary updates as indicated. Do you want to Continue?",okbtn:"CONTINUE"});
				} else{
					$('body').find('.attributeSingleSearchDropDown.activate').removeClass('activate');
					$('.attributeDropdown_outer').html('');
				}	
			} else{
				_this.parents(".attributeDropDownValues").find("li").removeClass("selected");
				_this.addClass("selected");
				$('.attributeSingleSearchDropDown.activate').parents('.attribute_input').removeClass('hasError');
				$('.attributeSingleSearchDropDown.activate').val(_this.text());
				$('.attributeSingleSearchDropDown.activate').parent().find("input.attribute_code").val(_this.attr('data-value'));
				$('.attributeSingleSearchDropDown.activate').addClass('p5_changed');
				if($('.attributeSingleSearchDropDown.activate').hasClass('isRejectedGrid')){					
					$('.attributeSingleSearchDropDown.activate').parents('td').addClass('isEdited');
					$('.attributeSingleSearchDropDown.activate').addClass('isEdited');
					$('.attributeSingleSearchDropDown.activate').closest('.isRejectedGrid').removeClass('isRejectedGrid isExceptionApproved');
					$('.attributeSingleSearchDropDown.activate').parents('.p5_attribute_outer').find('.error_bell, .exception_icon').remove();
				}
				$('.attributeSingleSearchDropDown.activate').parent('.attribute_input').find('.sort_field').text(_this.text());
				if($('.attributeSingleSearchDropDown.activate').parents('#vendor-list-table').length > 0 ){
					Kjs.vendorGroup.vendorGroupPanel.vsListTable.trigger('update');
				} else{
					Kjs.vendorGroup.vendorListTable.trigger('update');
				}
				$('body').find('.attributeSingleSearchDropDown.activate').removeClass('activate');
				$('.attributeDropdown_outer').html('');
			}
		} else{
			if(_this.parents('.p4_attribute').length > 0 && ($(this).parents('#stylemassUpAttributesFormData').length > 0 || $(this).parents('#styleAttributesFormData').length > 0)){
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){
					_this.parent().find('.selected').removeClass('selected');
					_this.addClass('selected');
					_this.parents('.attribute_input').removeClass('hasError');
					_this.parents('.attribute_input').find("input.attributeSingleSearchDropDown").val(_this.text());
					_this.parents('.attribute_input').find("input.attribute_code").val(_this.attr('data-value'));
					_this.parents(".attribute_input").find(".attributeSingleSearchDropDown").trigger("click");
					_getP5Attribute(_this);
				},function(){
					_this.parents(".attribute_input").find(".attributeSingleSearchDropDown").trigger("click");
				},{title:"Warning !",message:"Updating the PDP Category will impact the currently selected Specific Product. Do you want to Continue?",okbtn:"CONTINUE"});
			}else if(_this.parents('.p5_attribute').length > 0 && ($(this).parents('#stylemassUpAttributesFormData').length > 0 || $(this).parents('#styleAttributesFormData').length > 0)){
				Kjs.modelPopUp.alertConfirmModelPopUp(function(){
					_this.parent().find('.selected').removeClass('selected');
					_this.addClass('selected');
					_this.parents('.attribute_input').removeClass('hasError');
					_this.parents('.attribute_input').find("input.attributeSingleSearchDropDown").val(_this.text());
					_this.parents('.attribute_input').find("input.attribute_code").val(_this.attr('data-value'));
					_this.parents(".attribute_input").find(".attributeSingleSearchDropDown").trigger("click");
				},function(){
					_this.parents(".attribute_input").find(".attributeSingleSearchDropDown").trigger("click");
				},{title:"Warning !",message:"Updating the Specific Product may impact attribution, please make necessary updates as indicated. Do you want to Continue?",okbtn:"CONTINUE"});
			}else if(_this.parents('.form-details').length > 0){
				_this.parent().find('.selected').removeClass('selected');
				_this.addClass('selected');
				_this.parents('.form-details').removeClass('hasError');
				_this.parents('.form-details').find("input.attributeSingleSearchDropDown").val(_this.text());
				_this.parents('.form-details').find("input.attribute_code").val(_this.attr('data-value'));
				_this.parents(".form-details").find(".attributeSingleSearchDropDown").trigger("click");
				_this.parent().find('li').css('background','#fff');
				_this.css('background','rgba(255, 220, 206)');
				_this.closest('tr').addClass('data-changed');
				 $('.complete_btn.grid-edit-save').removeClass('disabled_button');
			}else if(_this.closest('#adhocImgUploadContainer').length > 0){
				_this.parent().find('.selected').removeClass('selected');
				_this.addClass('selected');
				_this.closest('.attribute_input').removeClass('hasError');
				_this.closest('.attribute_input').find("input.attributeSingleSearchDropDown").val(_this.text());
				_this.closest('.attribute_input').find("input.attribute_code").val(_this.attr('data-value'));
				_this.closest(".attribute_input").find(".attributeSingleSearchDropDown").trigger("click");
			}else{
				_this.parent().find('.selected').removeClass('selected');
				_this.addClass('selected');
				_this.parents('.attribute_input').removeClass('hasError');
				_this.parents('.attribute_input').find("input.attributeSingleSearchDropDown").val(_this.text());
				_this.parents('.attribute_input').find("input.attribute_code").val(_this.attr('data-value'));
				_this.parents(".attribute_input").find(".attributeSingleSearchDropDown").trigger("click");
				_this.parent().find('li').css('background','#fff');
				_this.css('background','rgba(255, 220, 206)');
				_this.closest('tr').addClass('data-changed');
				 $('.complete_btn.grid-edit-save').removeClass('disabled_button');
				if(_elem.parents('.DNScombinetable.dsn_style_form').length > 0 || _elem.parents('.DNScombinetable.existing_style_form').length > 0){
					_elem.parents('.attribute_input').removeClass('hasError');
					_elem.parents('.attribute_input').find("input.attributeSingleSearchDropDown").val(_this.text());
					_elem.parents('.attribute_input').find("input.attribute_code").val(_this.attr('data-value'));
					_elem.closest('tr').addClass('data-changed');
					_elem.trigger('click');
				}
			}
		}
		if($(this).closest('.input-row').hasClass('factory_attribute_input')){
			if($(this).closest('.factory_attribute_input').addClass('factory_attribute_input')){
				$(this).closest('.factory_attribute_input').addClass('data-changed');
				Kjs.massupdate.styleEditPanel.formChanged = true;
			}
			else{
				$(this).closest('.factory_attribute_input').addClass('data-changed');
			}
		}         
	},
	_styleChanged = function(elem){
		var count = 0, status = false;
		$.each($('#'+elem).find('tbody tr'),function(){
			var inputVal = $(this).find('.attributeSingleSearchDropDown').val();
			if(inputVal == "" || inputVal == "Select"){
				status = true;
			}
		});
		return status;
	},
	_getP5Attribute = function(_this){
		var p4id = _this.attr('data-value');
		var option = "";
		Kjs.vpAjax.get('/pdp/v1/searchSpecificProductByCategoryId?categoryId='+encodeURIComponent(p4id),{},function(response){
			if(response.errorMessage != undefined && response.errorMessage != ""){
				Kjs.modelPopUp.displayServiceError(response.errorMessage);
			}else{
				$('.box-overlay, .box-loading').hide();
				if(response.responseData.specificProductCategoryResponse.length > 0 && response.responseData.specificProductCategoryResponse[0].specificCategoryMap != undefined){
					var p5List = response.responseData.specificProductCategoryResponse[0].specificCategoryMap;
					for(var temp in p5List){
						option += "<li class='searchOptions' data-trans='"+p5List[temp].specificCategoryCode.toUpperCase()+"' data-value='"+p5List[temp].specificCategoryCode+"'>"+p5List[temp].specificCategoryDescription+"</li>";
					}
					$('.attribute_input .p5_attribute .attributeDropDownValues ul').html(option);
					if($('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').length > 0){
						var p5Code = $('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').attr('data-value');
						var p5Val = $('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').text();	
						$('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').addClass('selected');
						$('.attribute_input .p5_attribute .attributeSingleSearchDropDown').val(p5Val);
						$('.attribute_input .p5_attribute .attribute_code').val(p5Code);
					}
				} else{
					$('.attribute_input .p5_attribute .attributeDropDownValues').html(option);
					$('.attribute_input .p5_attribute .attributeDropDownValues li').removeClass('selected');
					$('.attribute_input .p5_attribute .attributeSingleSearchDropDown').val("Please select the value");
					$('.attribute_input .p5_attribute .attribute_code').val("");
				}
				$('.p5_attribute .attributeSingleSearchDropDown').removeClass('readonly').prop( "disabled", false);
				$('.attribute_input .p5_attribute').removeClass('hasError');
				Kjs.searchDropDownAttributes.deActivateAttributeDropDown();
				Kjs.searchDropDownAttributes.activateAttributeDropDown();
			}
		},
		function(){
			$('.box-overlay, .box-loading').hide();
		});
	},
	_filterSearchDropDown = function(){
		var searchText = $(this).val();
		$(".attributeDropDownValues span.fact_close").remove();
		$('.searchOptions.filtered').removeClass('filtered');
		$(this).parents(".attributeDropDownValues").find(".searchOptions").each(function(i,k){
			if($(this).text().toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
				$(this).show();
				$(this).addClass('filtered');
			}else{
				$(this).hide();
				$(this).removeClass('filtered');
			}
		});
		if($(".attributeDropDownValues").find('.filtered').length == 0){
			$(".attributeDropDownValues span.fact_close").remove();
			$(".attributeDropDownValues").append('<span class="fact_close" style="padding:10px 20px;">No Results Found </span>');
		} else {
			$(".attributeDropDownValues span.fact_close").remove();
		}
    
    	if (searchText.trim()=="") {
			$(this).parent().find(".searchCloseBtn").addClass("dis-none-imp");
		}else{
			$(this).parent().find(".searchCloseBtn").removeClass("dis-none-imp");
		}
		
	},
	_saveP5Data = function(type, parElem){
		var vendorStyleList = [], changed = false;
			$.each(parElem.find('tbody tr'),function(){
				if($(this).find('.attributeSingleSearchDropDown').hasClass('p5_changed')){
					var vsDetails = {
					    vendorStyleId:"",
					    kohlsStyleId:"",
					    merchantGroupId: vendorGroupListJson.vendorStyleList[0].merchantGroupId,
					    stylePDPCategory: {pdpCategoryCode: "", pdpCategoryDescription: ""},
					    styleSpecificProduct: {specificCategoryCode: "",specificCategoryDescription:""}
					};
					changed = true;
					vsDetails.vendorStyleId = $(this).attr('data-vendor-style-id');
					vsDetails.kohlsStyleId = $(this).attr('data-kohls-style-id');
					vsDetails.stylePDPCategory.pdpCategoryCode = $(this).find('.p4_attribute_outer .attribute_code').val();
					vsDetails.stylePDPCategory.pdpCategoryDescription = $(this).find('.p4_attribute_outer .attribute_desc').val();
					vsDetails.styleSpecificProduct.specificCategoryCode = $(this).find('.p5_attribute_outer .attribute_code').val();
					vsDetails.styleSpecificProduct.specificCategoryDescription = $(this).find('.p5_attribute_outer .attributeSingleSearchDropDown').val();
					vendorStyleList.push(vsDetails);
				}
			});
			if(changed){
				$('.box-overlay, .box-loading').show();
				var _success = function(data){
					if(data.errorCode != ""){
						Kjs.modelPopUp.alertModelPopUp({message:data.errorMessage}, function(){window.location.reload();});
						$('.cxdialog a.fa.fa-times').hide();
					} else {
						_showControls(parElem);
						if(type == "vendor"){
							$('.prop-tabs.kohlsHeader').find('.list-am-s,.separtion,.grid-edit-view-new,.excelupload').show();
							$('.vendor_btn_outer .submit-attr').show();
							$('.vendor_btn_outer .p5_save_changes').hide();
							if(data.responseData.VendorStyleList != undefined){
								$.each(data.responseData.VendorStyleList, function(i, list){
									if(list.vendorAttributionStatus == "In Progress"){
										var statutHtml = '<span class="vendor_color in-progress-background VPAS-VendorGroupList-vendor-brand-detail-table-span-vendor-status-color2">'+list.vendorAttributionStatus+'</span>';
									} else{
										var statutHtml = '<span class="vendor_color published-background VPAS-VendorGroupList-vendor-brand-detail-table-span-vendor-status-color3">'+list.vendorAttributionStatus+'</span>';
									}
									$('#vendorGroupList').find('tr[data-kohls-style-id="'+list.kohlsStyleId+'"]').attr('data-status',list.vendorAttributionStatus);
									$('#vendorGroupList').find('tr[data-kohls-style-id="'+list.kohlsStyleId+'"]').find('input.checkboxVendorStyle').attr('data-status',list.vendorAttributionStatus);
									$('#vendorGroupList').find('tr[data-kohls-style-id="'+list.kohlsStyleId+'"]').find('.vender_status').html(statutHtml);
								});
							}
						} else{
							$('.prop-tabs.kohlsHeader').find('.list-am-s,.separtion,.grid-edit-view-new,.cpmanageoption').show();
							$('.btn_outer #vendor-continue').show();
							$('.btn_outer .p5_save_changes').hide();
							$('.tabs .list-add-icon').removeClass('dis-none');
						}
					}
				},
				_error = function(){
					 $('.box-overlay, .box-loading').hide();
				};
				Kjs.vpAjax.post("/styleHirarchy/v1/saveMultipleStylesSpecialProductType",JSON.stringify(vendorStyleList),_success,_error);
			} else {
				if(typeof(vpo4626Switch) != "undefined" && vpo4626Switch){
					_showControls(parElem);
					if(type == "vendor"){
						$('.prop-tabs.kohlsHeader').find('.list-am-s,.separtion,.grid-edit-view-new,.excelupload').show();
						$('.vendor_btn_outer .submit-attr').show();
						$('.vendor_btn_outer .p5_save_changes').hide();
					} else{
						$('.prop-tabs.kohlsHeader').find('.list-am-s,.separtion,.grid-edit-view-new,.cpmanageoption').show();
						$('.btn_outer #vendor-continue').show();
						$('.btn_outer .p5_save_changes').hide();
						$('.tabs .list-add-icon').removeClass('dis-none');
					}
				}
			}
	},
	_showControls = function(parElem){
		var scroll_pos=(0);
		parElem.find('.p5_changed').removeClass('p5_changed');
		parElem.find('.disableFields').removeClass('disableFields');
		parElem.find('.hideTd').removeClass('hideTd');
		$('.prop-tabs.kohlsHeader').find('li').hide();
		$('.prop-tabs.kohlsHeader').find('.p5_error_outer,.p5_save_outer').hide();
		$('.prop-tabs.kohlsHeader').find('.p5_error_outer .p5_error_container .error_text').html("IMPORTANT!! Please select a <span class='font_bold'>Specific Product</span> for all styles below. If you don't select a Specific Product, you will be filling out unnecessary attribution.");
		$('.box-overlay, .box-loading').hide();
		$('.warning-section .p5_success_msg').show();          
        $('html, body').animate({scrollTop:(scroll_pos)}, '2000');
		Kjs._(function(){
			$('.warning-section .p5_success_msg').hide();
		},5000);
	};
	
	return {
		activateAttributeDropDown : _activateAttributeDropDown,
		deActivateAttributeDropDown : _deActivateAttributeDropDown,
		saveP5Data : _saveP5Data
	}
});
$module('searchSingleSelectDropDown', function(log, env, module, Kjs) {
	var _activateAttributeDropDown = function(){
		$(".attributeSingleSearchInput").on("click", _openSearchDropDown);
		$(".select-drop-icon").on("click", _openSearchDropDown);
		$(".dropDown3875 .searchSingleSelect").on("keyup", _filterSearchDropDown);
		$(".dropDown3875 .searchOptions").on("click", _selectedValues);	
		$(".dropDown3875 .searchCloseBtn").on("click", _removeText);	

		
	},
	
	_deActivateAttributeDropDown = function(){
		$(".attributeSingleSearchInput").off("click", _openSearchDropDown);
		$(".select-drop-icon").off("click", _openSearchDropDown);
		$(".dropDown3875 .searchSingleSelect").off("keyup", _filterSearchDropDown);
		$(".dropDown3875 .searchOptions").off("click", _selectedValues);	
		$(".dropDown3875 .searchCloseBtn").off("click", _removeText);	
		
	},
	_removeText = function(){
		$(this).parents(".dropDown3875").find(".searchSingleSelect").val("");
		$(this).parents(".dropDown3875").find(".searchOptions").show();
		$(this).parents(".dropDown3875").find(".noRecordFoundOptions").remove();
		// _filterSearchDropDown();
		$(this).parents(".dropDown3875").find(".searchCloseBtn").addClass("dis-none-imp");
	},
	_openSearchDropDown = function(){
		$('body').find(".dropDown3875").hide();
		if ($(this).hasClass("select-drop-icon")) {
			_this = $(this).parent().find(".attributeSingleSearchInput");
		}else{
			_this = $(this);
		}
		var urlName = window.location.href;
		var inputValue = _this.val();
			if (_this.parents("#upcCatalog .upc-list-table.selectedUpcTabl").length>0) {
				var attribute_Name = _this.attr("name1");
			}else if ($("#cpPlaceholderWrapper .cp_edit_form").length>0) {
				var attribute_Name = _this.attr("prev-name");
			}else{
				var attribute_Name = _this.attr("name");
			}			
			var _thisShow = _this.parent().find(".dropDown3875_"+attribute_Name);
			var dropDownLeft = 0;
			var dropDownTop = 0;
			$(".SelectedDropDownValue").removeClass("SelectedDropDownValue");
			$(".valueisSelected").removeClass("valueisSelected");
		if (_this.parents(".dsn_style_form").length>0) {
			_this.addClass("SelectedDropDownValue");
			var _thisShow = $(".DNS-color-size-add .dropDown3875.dropDown3875_"+attribute_Name);
		}else if (_this.parents("#upcCatalog .upc-list-table.selectedUpcTabl").length>0) {
			_this.addClass("SelectedDropDownValue");
			var _thisShow = $(".dropDown3875.dropDown3875_"+attribute_Name);
			if (_thisShow.length>1) {
				var _thisShow = $(".dropDown3875.dropDown3875_"+attribute_Name).eq(0);
			}
		}else if ($(".editVendorContainerPlaceHolder .edit_vendor_wrapper").length>0) {
			_this.addClass("SelectedDropDownValue");
			var _thisShow = $(".dropDown3875.dropDown3875_"+attribute_Name);
		}else if ($("#cpPlaceholderWrapper .cp_edit_form").length>0 || $('.combination-upc-form').length>0 || $('#selectedVariationsSection').length>0) {
			_this.addClass("SelectedDropDownValue");
			var _thisShow = $(".dropDown3875.dropDown3875_"+attribute_Name);
		}else if (_this.parents(".existing_style_form").length>0) {
			_this.addClass("SelectedDropDownValue");
			var _thisShow = $(".existingMDMstyleData .dropDown3875.dropDown3875_"+attribute_Name);
		}

		if(urlName.indexOf("cp/cpPreview") >= 0){
			if(_this.parents('.prod-description').length > 0){
				var dropDownTop = 0;
			}else{
				var dropDownTop = _this.offset().top;
			}
			if(_this.parents('#cp-edit-form').length > 0){
				if(_this.parents('.prod-description').length > 0){
					var dropDownLeft = 240;
				}else{
					var dropDownLeft = _this.offset().left;
				}
			}else{
				var dropDownLeft = _this.offset().left,_this=_this;
			}
		}else if(urlName.indexOf("cp/preview") >= 0 || urlName.indexOf("cp/editAttributes") >= 0){
			var dropDownTop = _this.offset().top + 35;
			var dropDownLeft = _this.offset().left;
		} else if (attribute_Name=="deptNumber") {
			var dropDownTop = 68;
		}else if (_this.parents(".dsn_style_form").length>0){
			var dropDownTop = (_this.offset().top + _this.outerHeight()) - 415;
			var dropDownLeft = _this.offset().left-72;
		}
		else if (_this.parents("#upcCatalog .upc-list-table.selectedUpcTabl").length>0){
			var dropDownTop = (_this.offset().top + _this.outerHeight()) - 633;
			dropDownLeft = _this.offset().left - 122;
		}else if ($(".vendorCatalogContainer .selectedUPCSection .selected_UPC_Section").is(":visible") && $(".editVendorContainerPlaceHolder .edit_vendor_wrapper").length>0) {
			var dropDownTop = (_this.offset().top + _this.outerHeight());
            dropDownLeft = (_this.offset().left);
		}else if ($(".allUPCListSize .filtredUPCTable_wrapper").is(":visible") && $(".editVendorContainerPlaceHolder .edit_vendor_wrapper").length>0) {
			var dropDownTop = (_this.offset().top + _this.outerHeight()) - ($(".vendorCatalogSizeContainer .selectedUPCSizeTableSection").offset().top + 72) ;
		}else if ($(".editVendorContainerPlaceHolder .edit_vendor_wrapper").length>0) {
			if($(".editVendorContainerPlaceHolder .edit_vendor_wrapper").hasClass('edit_sku_outer')){
				var drpleft = (_this.offset().left) - 68;
				if(drpleft > 0){
					$(".dropDown3875_"+attribute_Name).css({"left":drpleft + "px"});
				}
			}
			if ($(".select-colors-dropdown")) {
				var dropDownTop = (_this.offset().top + _this.outerHeight()) - 88;
			}
		}else if (_this.parents(".existing_style_form").length>0) {
			var drpleft = (_this.offset().left);
			if(drpleft > 0){
				dropDownLeft = drpleft;
			}
			var dropDownTop = (_this.offset().top + _this.outerHeight());
		}else if(urlName.indexOf('merchandising/submitMapStyleView') >= 0){
			if($('#comb_table_outer').length>0){
				var drpleft = _this.offset().left - 110;
				$(".dropDown3875_"+attribute_Name).css({"left":drpleft + "px"});
				var bannerheight = $('.banner-containner-header:visible').outerHeight();
				var dropDownTop = (_this.offset().top - 539 - bannerheight);
			}else if($('#selectedVariationsSection').length>0){
				var drpleft = _this.offset().left;
				$(".dropDown3875_"+attribute_Name).css({"left":drpleft + "px"});
				var dropDownTop = (_this.offset().top + 40);
			}
		}
		
		//_this.parents(".combination-upc-form.existing_style_form").length==0 || 
		if (!_this.parents("tr.combineList").hasClass("rowSelected") ||  location.pathname == "/merchandising/submitMapStyleView") {
		var inputWidth = _this.outerWidth();
		if (_this.parents(".selection-popup-container").length>0) {
			inputWidth = 300;
			dropDownLeft = 135;
		}else if (_this.parents(".dsn_style_form").length>0) {
			// inputWidth = 300;
		}
		if(_this.hasClass("activate")){
			_this.removeClass("activate");
			_thisShow.hide();
		}else{
			$(".attributeSingleSearchInput").removeClass("activate");
			if (dropDownTop>0) {
				$(".dropDown3875_"+attribute_Name).css({"top":dropDownTop + "px"}).show();
			}
			if(_thisShow.find("ul li").length>0 && inputValue!="" && inputValue!="Select"){
				$.each(_thisShow.find("ul li"), function(){
					if (inputValue == $(this).text()) {
						$(this).addClass("valueisSelected");
						return false;
					}
				});
			}
			_thisShow.show();
			_thisShow.find(".searchSingleSelect").focus();
			_this.addClass("activate");
			_thisShow.find(".searchSingleSelect").val("");
			_thisShow.find(".searchOptions").show();
			_thisShow.find(".searchCloseBtn").addClass("dis-none-imp");			
			if (dropDownLeft>0) {
				$(".dropDown3875_"+attribute_Name).css({"left":dropDownLeft + "px"}).show();
			}	
			if (inputWidth>0) {
				$(".dropDown3875_"+attribute_Name).css({"min-width":inputWidth + "px","width":"auto"});
			}
			if (_thisShow.find("ul li.searchOptions").length>8) {
				_thisShow.find(".attributeNameSearch").show();
			}else{
				_thisShow.find(".attributeNameSearch").hide();
			}
			if (_this.parents(".dsn_style_form").length>0) {
				var fieldName = "";
				var _id = "";
				var p2 = "";
				if (_this.hasClass("fillValue_majorCategoryList")) {
					fieldName = "MajorCategory";
					_id = _this.parents("tr.combineList").find(".fillValue_deptNumberCategory").attr("cate-id");
					$(".DNS-color-size-add .dropDown3875_majorCategoryList ul").html("<li class='searchOptions' data-value='' value='' >Select</li>");
				}else if (_this.hasClass("fillValue_deptNumberP2")) {
					fieldName = "P2";
					_id = _this.parents("tr.combineList").find(".fillValue_deptNumberP1").attr("p1-id");
					$(".DNS-color-size-add .dropDown3875_deptNumberP2 ul").html("<li class='searchOptions' data-value='' value='' >Select</li>");
				}else if (_this.hasClass("fillValue_deptNumberP3")) {
					$(".DNS-color-size-add .dropDown3875_deptNumberP3 ul").html("<li class='searchOptions' data-value='' value='' >Select</li>");
					fieldName = "P3";
					_id = _this.parents("tr.combineList").find(".fillValue_deptNumberP1").attr("p1-id");
					p2 = _this.parents("tr.combineList").find(".fillValue_deptNumberP2").attr("p2-id");
				}
				if (fieldName!="" && _id!="0" && _id!='' && _id!=0) {
					if (fieldName=="P3") {
						if (p2!=0 && p2!="0") {
							Kjs.createMerchantGroup.editStyle3p.appendDropDownValues(fieldName,_id,p2);
						}
					}else{
					Kjs.createMerchantGroup.editStyle3p.appendDropDownValues(fieldName,_id,p2);
					}
				}
				_deActivateAttributeDropDown();
				_activateAttributeDropDown();
			}else if ($(".allUPCListSize .filtredUPCTable_wrapper").is(":visible") && $(".editVendorContainerPlaceHolder .edit_vendor_wrapper").length>0 && _this.hasClass("fillValue_nRFColorVendorColor")) {
				var titlecode = _this.parents("tr").attr("data-nrfcolorcode");
				var titletext = _this.parents("tr").attr("data-nrfcolordescription");

				if (titlecode!=undefined && titletext!=undefined && titletext!="" && titlecode!="") {
					Kjs.editMerchantGroup.editVendorSizePanel.appendVendorColorDropDownValues(titlecode,titletext);
				}else{
					$(".SelectedDropDownValue.fillValue_nRFColorVendorColor").val("");
					$(".dropDown3875.dropDown3875_nRFColorVendorColor ul").html("");
				}

			}else if (_this.parents(".existing_style_form").length>0) {
				var fieldName = "";
				var _id = "";
				var p2 = "";
				if (_this.hasClass("fillValue_deptNumberP2")) {
					fieldName = "P2";
					_id = _this.parents("tr.combineList").find(".fillValue_deptNumberP1").attr("p1-id");
					$(".existingMDMstyleData .dropDown3875_deptNumberP2 ul").html("<li class='searchOptions' data-value='' value='' >Select</li>");
				}else if (_this.hasClass("fillValue_deptNumberP3")) {
					fieldName = "P3";
					_id = _this.parents("tr.combineList").find(".fillValue_deptNumberP1").attr("p1-id");
					p2 = _this.parents("tr.combineList").find(".fillValue_deptNumberP2").attr("p2-id");
					$(".existingMDMstyleData .dropDown3875_deptNumberP3 ul").html("<li class='searchOptions' data-value='' value='' >Select</li>");
				}
				if (_id!="" && _id!=0 && fieldName=="P2") {
					Kjs.createMerchantGroup.styleSerachExistingPanel.appendDropDownExisting(fieldName,_id,p2);
				}else if (_id!="" && _id!=0 && fieldName=="P3" && p2!="" && p2!=0) {
					Kjs.createMerchantGroup.styleSerachExistingPanel.appendDropDownExisting(fieldName,_id,p2);
				}
				_deActivateAttributeDropDown();
				_activateAttributeDropDown();
			}


		}
		}
	},
	_selectedValues = function(){
		var _this = $(this);
		var attrValue = $(this).text();
		
		if ($(this).parents("#upcCatalog .upc-list-table.selectedUpcTabl").length>0) {
				var attrName = $(this).parents(".dropDown3875").attr("name1");
			}else if ($("#cpPlaceholderWrapper .cp_edit_form").length>0) {
				var attrName = $(this).parents(".dropDown3875").attr("prev-name");
			}else{
				var attrName = $(this).parents(".dropDown3875").attr("name");
			}

		var _thisShow = $(this).parents(".form-group");
		if ($(this).parents(".selection-popup-container").length>0) {
			_thisShow = $(this).parents("li");
		}
		$(".SelectedDropDownValue").removeClass("activate");
		if ($("#cpPlaceholderWrapper .cp_edit_form").length==0 && $(this).parents(".dsn_style_form").length==0 && $(this).parents("#upcCatalog .upc-list-table.selectedUpcTabl").length==0 && $(".editVendorContainerPlaceHolder .edit_vendor_wrapper").length==0){
			_thisShow.find(".fillValue_"+attrName).val(attrValue);		
			_thisShow.find(".fillValue_"+attrName).removeClass("activate");
		}
		$(".dropDown3875").hide();
		if (attrName=="deptNumber") {
			var deptId = $(this).attr("value");
			_thisShow.find(".fillValue_"+attrName).attr("data-dept-num",deptId);
			Kjs.createMerchantGroup.createMerchantGroupPanel.handleSelectDepartment(deptId);
		}else if (attrName=="vendorId") { 
			var deptId = $(this).attr("value");
			var dataId = $(this).attr("data-id");
			var dataNumber = $(this).attr("data-vendor-numr");
			$('input[name="vendorName"]').val(attrValue);
			_thisShow.find(".fillValue_"+attrName).attr("data-vendor-num",deptId);
			_thisShow.find(".fillValue_"+attrName).attr("data-id",dataId);
			if(location.pathname != undefined && location.pathname == "/merchandising/editMerchantGroup"){
				_thisShow.find(".fillValue_"+attrName).attr("data-vendor-number",dataNumber);
			}
			Kjs.createMerchantGroup.createMerchantGroupPanel.handleSelectVendor();
		}else if (attrName=="brandId" && attrValue!="Select") {
			var dataId = $(this).attr("data-brand-type");
			var brandId = $(this).attr("value");
			_thisShow.find(".fillValue_"+attrName).attr("data-brand-type",dataId);
			_thisShow.find(".fillValue_"+attrName).attr("brand-Id",brandId);
			$('input[name="brandDescription"]').val(attrValue);				
			$('input[name="brandTypeCode"]').val(dataId);
			Kjs.createMerchantGroup.createMerchantGroupPanel.brandType = dataId;
			Kjs.createMerchantGroup.createMerchantGroupPanel.brandName = brandId;
			Kjs.createMerchantGroup.createMerchantGroupPanel.handleselectBrand();
		}

	},
	_styleChanged = function(elem){
		var count = 0, status = false;
		$.each($('#'+elem).find('tbody tr'),function(){
			var inputVal = $(this).find('.attributeSingleSearchDropDown').val();
			if(inputVal == "" || inputVal == "Select"){
				status = true;
			}
		});
		return status;
	},
	_getP5Attribute = function(_this){
		var p4id = _this.attr('data-value');
		var option = "<li><input type='text' class='searchSingleSelect style_attribute'></li>";
		Kjs.vpAjax.get('/pdp/v1/searchSpecificProductByCategoryId?categoryId='+encodeURIComponent(p4id),{},function(response){
			if(response.errorMessage != undefined && response.errorMessage != ""){
				Kjs.modelPopUp.displayServiceError(response.errorMessage);
			}else{
				$('.box-overlay, .box-loading').hide();
				if(response.responseData.specificProductCategoryResponse.length > 0 && response.responseData.specificProductCategoryResponse[0].specificCategoryMap != undefined){
					var p5List = response.responseData.specificProductCategoryResponse[0].specificCategoryMap;
					for(var temp in p5List){
						option += "<li class='searchOptions' data-trans='"+p5List[temp].specificCategoryCode.toUpperCase()+"' data-value='"+p5List[temp].specificCategoryCode+"'>"+p5List[temp].specificCategoryDescription+"</li>";
					}
					$('.attribute_input .p5_attribute .attributeDropDownValues').html(option);
					if($('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').length > 0){
						var p5Code = $('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').attr('data-value');
						var p5Val = $('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').text();	
						$('.attribute_input .p5_attribute .attributeDropDownValues li[data-trans="NO VALUE"]').addClass('selected');
						$('.attribute_input .p5_attribute .attributeSingleSearchDropDown').val(p5Val);
						$('.attribute_input .p5_attribute .attribute_code').val(p5Code);
					}
				} else{
					$('.attribute_input .p5_attribute .attributeDropDownValues').html(option);
					$('.attribute_input .p5_attribute .attributeDropDownValues li').removeClass('selected');
					$('.attribute_input .p5_attribute .attributeSingleSearchDropDown').val("Please select the value");
					$('.attribute_input .p5_attribute .attribute_code').val("");
				}
				$('.p5_attribute .attributeSingleSearchDropDown').removeClass('readonly').prop( "disabled", false);
				$('.attribute_input .p5_attribute').removeClass('hasError');
				Kjs.searchDropDownAttributes.deActivateAttributeDropDown();
				Kjs.searchDropDownAttributes.activateAttributeDropDown();
			}
		},
		function(){
			$('.box-overlay, .box-loading').hide();
		});
	},
	_filterSearchDropDown = function(){
		var searchText = $(this).val();
		var noRecord = false;
		var parentDiv = $(this).parents(".dropDown3875");
		parentDiv.find(".noRecordFoundOptions").remove();
		$(this).parents(".dropDown3875").find(".searchOptions").each(function(i,k){
			if($(this).text().toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
				$(this).show();
				noRecord = true;
			}else{
				$(this).hide();
			}
		});
		if (!noRecord) {
			parentDiv.append('<li class="noRecordFoundOptions searchOptions exclusion_option_ " value="No results found" style="display: list-item;">No results found</li>');
			parentDiv.find(".noRecordFoundOptions").show();
		}
		if (searchText.trim()=="") {
			parentDiv.find(".searchCloseBtn").addClass("dis-none-imp");
		}else{
			parentDiv.find(".searchCloseBtn").removeClass("dis-none-imp");
		}
	},
	_saveP5Data = function(type, parElem){
		var vendorStyleList = [], changed = false;
			$.each(parElem.find('tbody tr'),function(){
				if($(this).find('.attributeSingleSearchDropDown').hasClass('p5_changed')){
					var vsDetails = {
					    vendorStyleId:"",
					    kohlsStyleId:"",
					    merchantGroupId: vendorGroupListJson.vendorStyleList[0].merchantGroupId,
					    stylePDPCategory: {pdpCategoryCode: "", pdpCategoryDescription: ""},
					    styleSpecificProduct: {specificCategoryCode: "",specificCategoryDescription:""}
					};
					changed = true;
					vsDetails.vendorStyleId = $(this).attr('data-vendor-style-id');
					vsDetails.kohlsStyleId = $(this).attr('data-kohls-style-id');
					vsDetails.stylePDPCategory.pdpCategoryCode = $(this).find('.p4_attribute_outer .attribute_desc').val();
					vsDetails.stylePDPCategory.pdpCategoryDescription = $(this).find('.p4_attribute_outer .attribute_code').val();
					vsDetails.styleSpecificProduct.specificCategoryCode = $(this).find('.p5_attribute_outer .attribute_code').val();
					vsDetails.styleSpecificProduct.specificCategoryDescription = $(this).find('.p5_attribute_outer .attributeSingleSearchDropDown').val();
					vendorStyleList.push(vsDetails);
				}
			});
			if(changed){
				$('.box-overlay, .box-loading').show();
				var _success = function(data){
					parElem.find('.p5_changed').removeClass('p5_changed');
					parElem.find('.disableFields').removeClass('disableFields');
					parElem.find('.hideTd').removeClass('hideTd');
					$('.prop-tabs.kohlsHeader').find('li').hide();
					$('.prop-tabs.kohlsHeader').find('.p5_error_outer,.p5_save_outer').hide();
					if(data.errorMessage != undefined && data.errorMessage != ""){
						Kjs.modelPopUp.displayServiceError(data.errorMessage);
					}else{
						if(type == "vendor"){
							$('.prop-tabs.kohlsHeader').find('.list-am-s,.separtion,.grid-edit-view-new,.excelupload').show();
							$('.vendor_btn_outer .submit-attr').show();
							$('.vendor_btn_outer .p5_save_changes').hide();
							if(data.responseData.VendorStyleList != undefined){
								$.each(data.responseData.VendorStyleList, function(i, list){
									if(list.vendorAttributionStatus == "In Progress"){
										var statutHtml = '<span class="vendor_color in-progress-background VPAS-VendorGroupList-vendor-brand-detail-table-span-vendor-status-color2">'+list.vendorAttributionStatus+'</span>';
									} else{
										var statutHtml = '<span class="vendor_color published-background VPAS-VendorGroupList-vendor-brand-detail-table-span-vendor-status-color3">'+list.vendorAttributionStatus+'</span>';
									}
									$('#vendorGroupList').find('tr[data-kohls-style-id="'+list.kohlsStyleId+'"]').attr('data-status',list.vendorAttributionStatus);
									$('#vendorGroupList').find('tr[data-kohls-style-id="'+list.kohlsStyleId+'"]').find('input.checkboxVendorStyle').attr('data-status',list.vendorAttributionStatus);
									$('#vendorGroupList').find('tr[data-kohls-style-id="'+list.kohlsStyleId+'"]').find('.vender_status').html(statutHtml);
								});
							}
						} else{
							$('.prop-tabs.kohlsHeader').find('.list-am-s,.separtion,.grid-edit-view-new,.cpmanageoption').show();
							$('.btn_outer #vendor-continue').show();
							$('.btn_outer .p5_save_changes').hide();
						}
						$('.prop-tabs.kohlsHeader').find('.p5_error_outer .p5_error_container .error_text').html("Please select <span class='font_bold'>Specific Product</span> for all styles below then save changes when finished.");
						$('.box-overlay, .box-loading').hide();
						$('.warning-section .p5_success_msg').show();
						var scroll_pos=(0);          
				        $('html, body').animate({scrollTop:(scroll_pos)}, '2000');
						Kjs._(function(){
							$('.warning-section .p5_success_msg').hide();
						},5000);
					}
				},
				_error = function(){
					 $('.box-overlay, .box-loading').hide();
				};
				Kjs.vpAjax.post("/styleHirarchy/v1/saveMultipleStylesSpecialProductType",JSON.stringify(vendorStyleList),_success,_error);
			}
	};
	
	return {
		activateAttributeDropDown : _activateAttributeDropDown,
		deActivateAttributeDropDown : _deActivateAttributeDropDown,
		saveP5Data : _saveP5Data
	}
});
$module('searchColorSizeList', function(log, env, module, Kjs) {
	var _searchCloseBtnList = function(_this){
				_this.parents(".hierarchy-contaner").find(".noRecordFoundOptions").remove();
				_this.parent().find(".searchSingleSelectList").val("");
				_this.parent().find(".searchCloseBtnList").addClass("dis-none-imp");
				_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").show();
				_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").removeClass("opened");
				_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").addClass("closed").removeClass("filterhide");
				$(".color-style-conatainer ul").removeAttr('style');
				$(".color-style-conatainer li").removeAttr('style');
				$(".color-style-conatainer .hierarchy-list>ul>li li").addClass("closed").removeClass("opened");
			},
			_searchSingleSelectList = function(_this){
				// _this = $(this);
				var searchText = _this.val();
				_this.parents(".hierarchy-contaner").find(".noRecordFoundOptions").remove();
				var noRecord = false;
				var color_DropDown = false;
				if(_this.parents(".hierarchy-contaner").hasClass("color-style-conatainer")){
					color_DropDown = true;
				}				
				if (searchText!="" && searchText!=" ") {
					_this.parent().find(".searchCloseBtnList").removeClass("dis-none-imp");
				if (color_DropDown) {

				_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").each(function(i,k){
					var currentText = $(this).text();					
					if (color_DropDown && $(this).find("a").eq(0).length>0) {
						currentText = $(this).find("a").eq(0).text();
					}
					if(currentText.toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
						$(this).addClass("showlist").removeClass("hidelist");
						$(this).show();
						
						noRecord = true;

					}else{
						$(this).hide();
						$(this).find("li").removeClass("opened").addClass("closed");
					}
					$(this).find("ul").each(function(ii,kk){
							$(this).find("li").each(function(iii,kkk){
								var currentLiText = $(this).text();					
								if (color_DropDown && $(this).find("a").eq(0).length>0) {
									currentLiText = $(this).find("a").eq(0).text();
								}
								if(currentLiText.toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
									noRecord = true;
									$(this).show();
									$(this).parent().show();
									$(this).parent().parent().show();
									$(this).parent().parent().removeClass("closed").addClass("opened");
								}else{
									$(this).hide();
								}
								$(this).find("ul").each(function(iiii,kkkk){
								$(this).find("li").each(function(iiiii,kkkkk){
								var currentLiText = $(this).text();					
								if (color_DropDown && $(this).find("a").eq(0).length>0) {
									currentLiText = $(this).find("a").eq(0).text();
								}
								if(currentLiText.toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
									noRecord = true;
									$(this).show();
									$(this).parent().show();
									$(this).parent().parent().show();
									$(this).parent().parent().removeClass("closed").addClass("opened");
									$(this).parent().parent().parent().show();
									$(this).parent().parent().parent().parent().show();
									$(this).parent().parent().parent().parent().removeClass("closed").addClass("opened");
								}else{
									$(this).hide();
								}
							});
						});	
							});
						});	
				});
			}else{
					_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").each(function(i,k){
					var currentText = $(this).text();					
					if(currentText.toLowerCase().indexOf(searchText.toLowerCase()) >= 0){
						$(this).show();
						noRecord = true;
						$(this).removeClass("filterhide");
					}else{
						$(this).hide();
						$(this).addClass("filterhide");
					}
				});
			}
			}else{
				_this.parent().find(".searchCloseBtnList").addClass("dis-none-imp");
				_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").show();
				_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").removeClass("opened");
				_this.parents(".hierarchy-contaner").find(".hierarchy-list>ul>li").addClass("closed").removeClass("filterhide");
				$(".color-style-conatainer ul").removeAttr('style');
				$(".color-style-conatainer li").removeAttr('style');
				$(".color-style-conatainer .hierarchy-list>ul>li li").addClass("closed").removeClass("opened");
				}
				if (!noRecord && searchText!="") {
					_this.parents(".hierarchy-contaner").find(".hierarchy-list ul").append('<li class="noRecordFoundOptions searchOptions exclusion_option_ " value="No results found" style="display: list-item;">No results found</li>');
					_this.parents(".hierarchy-contaner").find(".noRecordFoundOptions").show();
				}
			
	};
	
	return {
		searchCloseBtnList : _searchCloseBtnList,
		searchSingleSelectList : _searchSingleSelectList
	}
});
function _handleDeleteNotification(){
	if ($(this).parents(".banner-noti-msg-buttons").length>0) {
		var N_id = $(this).parents(".banner-noti-msg-buttons").attr("banner-id");
	}else{
		var N_id = $(this).parents(".btn-container").attr("notification-id");
	}

	Kjs.modelPopUp.alertConfirmModelPopUp(function(){
		_deleteNotification(N_id);
	},function(){},{title:"",message:"Are you sure you want to Delete?",okbtn:"YES",noText:"NO"});
}
function _deleteNotification(N_id){
	$(".box-loading, .box-overlay").show();
		var _successCallBack = function(result){	
			if(result != null && result != undefined){
				if(result.errorMessage != undefined && result.errorMessage != ""){
					Kjs.modelPopUp.displayServiceError(result.errorMessage);
				}else{
					$(".box-loading, .box-overlay").hide();
				   	$(".Banner"+N_id).remove();
				   	$(".Banner-msg-"+N_id).remove();
				   	if ($(".list-all-notifications .system-notification").length==0) {
				   		$("#noNotification").show();
				   	}
				   	if ($("#loadHeader .banner-containner-header .Banner-notification-msg").length>0) {
					   	if ($(".banner-containner-header .Banner-notification-msg").length>0) {
			    			var bannerheight = $(".banner-containner-header").slice(0).height();
							$("#loadHeader").css("height",bannerheight+20+"px");
						}else{
							$("#loadHeader").css("height","65px");
							$(".banner-containner-header").hide();
						}
					}
				}
			}else{
				Kjs.vpAjax.hideLoaderonEmptyResponse();
			}    	
		},
		_errorCallBack = function(){
			$(".box-loading, .box-overlay").hide();
		};
	var url = location.origin + "/user/deleteBannerNotification?_id="+N_id;
	Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
}
function _handleAddSystemNotification(argument) {
		var $this = $(this);
	var banner_id = "";
	if ($(this).parents(".btn-container").length>0) {
		banner_id = $(this).parents(".btn-container").attr("notification-id");
	}else if ($(this).parents(".banner-noti-msg-buttons").length>0) {
		banner_id = $(this).parents(".banner-noti-msg-buttons").attr("banner-id");
	}				
	if (banner_id!="") {
		var listdata = [];
		$.each(Kjs.allBannerNotifications.bannerNotification,function(i,v){
			if (banner_id==v["_id"]) {
				listdata = v;
				return false;
			}
		});
	}else{
		var listdata = {"creationTime":"",
									"endTime":"",
									"message":"",
									"notifier":"",
									"startTime":"",
									"subject":"",
									"viaEmail":"",
									"viaNotification":"",
									"_id":""
						}
		}
		var d = new Date();				
		var shortDate = d.toString().substr(0,15).replace(d.toString().substr(0,3),d.toString().substr(0,3)+",");
			listdata['display_date'] = shortDate;
			listdata['display_time'] = d.toLocaleTimeString().replace(/:\d+ /, ' ');
						
	var tmpl = $.templates("#Banner-notification-tpl");	
	var _renderit = tmpl.render({"List":listdata});
	$box.open({
		fancybox : {
		'content' : _renderit,
		'showCloseButton':true,
		'centerOnScroll' : true,
		'onClosed':function(){	
	 	},
		onComplete: function(){	
			if (banner_id=="") {
				_initializeDate();
			}else{
				_initializeDate();
				_initializeDateUpdate(listdata.startTime,listdata.endTime);
					if($this.hasClass('add-icon')){
				}
				else{ 	
					var startTime = listdata.startTime
					var endtime = listdata.endTime;
					if(startTime.indexOf("00:00:00") >= 0 && endtime.indexOf("23:59:59") >= 0){
						$('.banner-user-from-time').hide();
						$('.banner-user-to-time').hide();
						$('.banner-all-day input').prop('checked',true);
					}
				}
				if (listdata.viaEmail && listdata.viaNotification) {
					$(".radio-btn-both").prop("checked", true);
				}else if (listdata.viaEmail) {
					$(".radio-btn-email").prop("checked", true);
				}else if (listdata.viaNotification) {
					$(".radio-btn-notification").prop("checked", true);
				}
							
			}						
			$(".banner-send-btn").off('click',_bannersendbtn);
			$(".banner-send-btn").on('click',_bannersendbtn);				
			$(".banner-all-day label").off('click',_bannerallday);
			$(".banner-all-day label").on('click',_bannerallday);							
				$('input.banner-subject-title-name,textarea.banner-subject-title-name').on('keyup',_enablesend);	
				$('.user-date input').on('change',_enablesend);		
				$('.user-time select').on('change',_enablesend);     
				$(".banner-check-box").on('click',_enablesend);
				$("input[name*='Sendvia']").on('click',_enablesend);				
		}	
	}
	});	
}
function _enablesend(){
	var textvalue,messagevalue,datevalue,timeval,sendVia; 
	if($('input.banner-subject-title-name').val()!=""){
		textvalue=true;
	}
	else{
		textvalue=false;
	}
	if($('textarea.banner-subject-title-name').val()!=""){
		messagevalue=true;
	}
	else{
		messagevalue=false;
	}
	if($('.user-date input').val()!= ""){
		datevalue=true;
	}
	if($('.banner-user-from-time').val()!=""){
		timeval=true;
	}
	var all_day = $(".banner-check-box").is(':checked'); 
	if (all_day) {
	 all_day=true;
	}else {
		if($(".banner-user-from-time").val()!="" && $(".banner-user-to-time").val()!=""){
			all_day=true;
		}
		else{
			all_day=false;
		}
	}
		if ($("input[name*='Sendvia']:checked").length==0) {
		sendVia=false;
	}else{
		sendVia=true;
	}
	
	if(textvalue == true && messagevalue == true && datevalue == true && all_day == true && sendVia == true){
		$('.banner-send-btn').prop('disabled',false);
	}
	else{
		$('.banner-send-btn').prop('disabled',true);
	}
}
function _initializeDate(){
	var d = new Date();				
	var shortDate = d.toString().substr(0,15).replace(d.toString().substr(0,3),d.toString().substr(0,3)+",");
	$(".datepicker").datepicker({
		minDate: +0,
		dateFormat: "D, M dd yy"
	});
	$(".datepicker").val(shortDate);
}
function _initializeDateUpdate(startTime,endTime){
	var d = new Date(startTime);				
	var shortDate = d.toString().substr(0,15).replace(d.toString().substr(0,3),d.toString().substr(0,3)+",");
	$("input[name*='banner-user-from-date']").val(shortDate);
	$(".banner-user-from-time").find('option[value="'+startTime.split(" ")[1]+'"]').prop('selected',true);
	var d = new Date(endTime);				
	var shortDate = d.toString().substr(0,15).replace(d.toString().substr(0,3),d.toString().substr(0,3)+",");
	$("input[name*='banner-user-to-date']").val(shortDate);
	$(".banner-user-to-time").find('option[value="'+endTime.split(" ")[1]+'"]').prop('selected',true);
}
function _bannerallday(){
	var all_day = $(".banner-check-box").is(':checked');
	if (all_day) {
		$(".banner-user-from-time").hide();
		$(".banner-user-to-time").hide();
		// $(".banner-user-from-time").find("option[value='00:00:00']").prop("selected",true);
		// $(".banner-user-to-time").find("option[value='23:30:00']").prop("selected",true);
	}else{
		$(".banner-user-from-time").show();
		$(".banner-user-to-time").show();
	}
}			
function _bannersendbtn(){
	var title = $("input[class*='banner-subject-title-name']").val();
	var message = $("textarea[class*='banner-subject-title-name']").val();
	var all_day = $(".banner-check-box").is(':checked');
	var sendvia = $("input[name*='Sendvia']:checked").val();

	var fromdate = $("input[name*='banner-user-from-date']").val(); 
	var fromtime = $("select[class*='banner-user-from-time']").val(); 
	var todate = $("input[name*='banner-user-to-date']").val(); 
	var totime = $("select[class*='banner-user-to-time']").val(); 
	var _id = $(this).attr("Banner-id");


	if (all_day) {
		totime ="23:59:59";
		fromtime = "00:00:00";
	}
	
	var d = new Date(fromdate+" "+fromtime);
	var fromtimecheck = d;
	var mm = d.getMonth()+1;
	var dd = d.getDate()<10 ? "0"+d.getDate() : d.getDate();
	var mmm = mm<10 ? "0"+mm : mm;
	var fromnew =d.getFullYear()+"-"+mmm+"-"+dd+" "+fromtime;
			
	var d = new Date(todate+" "+totime);
	var totimecheck = d;
	var mm = d.getMonth()+1;
	var dd = d.getDate()<10 ? "0"+d.getDate() : d.getDate();
	var mmm = mm<10 ? "0"+mm : mm;
	var tonew =d.getFullYear()+"-"+mmm+"-"+dd+" "+totime;
				
	var d = new Date();
	var currenttimecheck = d;
	var mm = d.getMonth()+1;
	var dd = d.getDate()<10 ? "0"+d.getDate() : d.getDate();
	var mmm = mm<10 ? "0"+mm : mm;
	var currenttime =d.getFullYear()+"-"+mmm+"-"+dd+" "+d.toString().split(" ")[4];
				
	var viaEmail = true;
	var viaNotification = true;

	if (sendvia=='Notification') {
		var viaEmail = false;
		var viaNotification = true;
	}else if (sendvia=='Email') {
		var viaEmail = true;
		var viaNotification = false;
	}

	if (Kjs.storage.getData('userInfo').userName==undefined && Kjs.storage.getData('userInfo').userName==null) {
		var user_name = "";
	}else{
		var user_name = Kjs.storage.getData('userInfo').userName;
	}

	if (_id=="") {
		var bannerjson = {"notifier":user_name,"creationTime":currenttime,"subject":title,"message":message,"startTime":fromnew,"endTime":tonew,"viaEmail":viaEmail,"viaNotification":viaNotification}
	}else{
		var bannerjson = {"notifier":user_name,"creationTime":currenttime,"subject":title,"message":message,"startTime":fromnew,"endTime":tonew,"viaEmail":viaEmail,"viaNotification":viaNotification,"_id":_id}
	}
			
	if ($("input[name*='Sendvia']:checked").length==0) {
		$(".banner-send-via .send-via-msg").css("color","#ff0000");
	}else{
		$(".banner-send-via .send-via-msg").css("color","#000");
	}
	if (title=="") {
		$("input[class*='banner-subject-title-name']").css("border-color","#ff0000");
	}else{
		$("input[class*='banner-subject-title-name']").css("border-color","#e2e2e2");
	}
	if (message=="") {
		$("textarea[class*='banner-subject-title-name']").css("border-color","#ff0000");
	}else{
		$("textarea[class*='banner-subject-title-name']").css("border-color","#e2e2e2");
	}

	if (fromnew==tonew || totimecheck<currenttimecheck || fromtimecheck>totimecheck) {
		var date_validate = 0;
		$(".date-format-error").show();
	}else{
		var date_validate = 1;
		$(".date-format-error").hide();
	}

	if ($("input[name*='Sendvia']:checked").length>0 && date_validate==1 && title!="" && message!="") {
		Kjs.modelPopUp.alertConfirmModelPopUp(function(){_saveBannerData(bannerjson)},function(){},{title:"",message:"Are you sure you want to Send",okbtn:"YES",noText:"NO"});
	}
}
function _saveBannerData(bannerjson){
	$(".box-overlay, .box-loading").show();
		$(".banner-containner").css("opacity","0.5");
		var _successCallBack = function(response){
			if(response != null && response != undefined){
				if(response.errorMessage != undefined && response.errorMessage != ""){
					Kjs.modelPopUp.displayServiceError(response.errorMessage);
				}else{
					$(".box-overlay, .box-loading").hide();
					$(".banner-containner").css("opacity","1");
					$box.close();							
					_getNotificationlogic();
					var urltext = window.location.href; 
					if(urltext.indexOf("kohlsUserDashboard") >= 0){
						_getNotificationList();	
					}
				}
			}else{
				Kjs.vpAjax.hideLoaderonEmptyResponse();
			}
		},
		_errorCallBack = function(){
			Kjs.vpAjax.hideLoaderonEmptyResponse();		
		};
		var url = "/user/saveBannerNotification";
		Kjs.vpAjax.post(url, JSON.stringify(bannerjson), _successCallBack, _errorCallBack);
	}
function _getNotificationlogic(){
	_getNotificationCall(300);
	setInterval(function(){ _getNotificationCall(new Date().getMinutes()+""+new Date().getSeconds()); }, 1000);
}
function _getNotificationCall(Minutes){
	if (Minutes==00 || Minutes==300) { // every 30 min once only it will go inside the if condition for getting the banner notification details
		$(".banner-containner-header .Banner-notification-msg").remove();
		var bannerjson = "";	
		var _successCallBack = function(response){
				if(response != null && response != undefined){
				if (response.errorMessage == "" && response.responseData!="" && response.responseData.bannerNotification!=undefined && response.responseData.bannerNotification.length>0) {
					Kjs.allBannerNotifications = response.responseData;
					// display Current Notification Top of the page
					var userOktaDetailsObj = (Kjs.storage.getData('userOktaDetails') != null && JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData != undefined ) ?JSON.parse(Kjs.storage.getData('userOktaDetails')).responseData.userInfoData :null;
					var tmpl = $.templates("#Banner-Notification-Msg-Tmpl");
    				var _renderit = tmpl.render({"List":response.responseData});
    				$(".banner-containner-header").slice(0).html(_renderit);
    				$(".banner-containner-header").each(function(i,v){ 
						if(i!=0){
							$(this).remove();
						}
					});
    				if ($("#loadHeader .banner-containner-header .Banner-notification-msg").length>0) {
    				if ($(".banner-containner-header .Banner-notification-msg").length>0) {
    					var bannerheight = $(".banner-containner-header").slice(0).height();

    					$("#loadHeader").css("height",bannerheight+20+"px");
    				}else{
    					$("#loadHeader").css("height","65px");
    					$(".banner-containner-header").hide();
    				}
    				}
    				if (userOktaDetailsObj!=null && userOktaDetailsObj.admin && userOktaDetailsObj.role!="VU" && userOktaDetailsObj.role!="VA" && userOktaDetailsObj.role!="Vendor") {
    					$(".banner-containner-header .banner-noti-msg-buttons").show();
    				}else{
    					$(".banner-containner-header .banner-noti-msg-buttons").hide();
    				}
    				$(".banner-containner-header").show();	    				
    				$(".banner-noti-msg-delete").off('click',_handleDeleteNotification);	
    				$(".banner-noti-msg-delete").on('click',_handleDeleteNotification);	
					$(".banner-noti-msg-edit").off('click',_handleAddSystemNotification);
					$(".banner-noti-msg-edit").on('click',_handleAddSystemNotification);
					}else{
						$(".banner-containner-header").hide();
						$("#loadHeader").css("height","65px");
					}
				}else{
					Kjs.vpAjax.hideLoaderonEmptyResponse();
					$(".banner-containner-header").hide();
					$("#loadHeader").css("height","65px");
				}
			},
			_errorCallBack = function(){
				Kjs.vpAjax.hideLoaderonEmptyResponse();			
			};
		var url = "/user/getBannerNotifications?fetchActive=true";
		Kjs.vpAjax.get(url,"", _successCallBack, _errorCallBack);
	}
}
function getNotificationHeight(){
	var urltext = window.location.href;  
	var height = 0;
	var merchantAttributesMaintenancePage = "merchandising/merchantAttributePage";
		if(typeof(refactorCodeFlag) != "undefined" && refactorCodeFlag){
			merchantAttributesMaintenancePage = "maintenance/v1/merchantAttributePage"
		}
	if (!(urltext.indexOf("merchandising/merchantAttributeMassUpdatePage") >= 0) && 
		!(urltext.indexOf(merchantAttributesMaintenancePage) >= 0) && 
		!(urltext.indexOf("merchandising/vendorGridEditViewAttributeList") >= 0)) {
		if ($(".banner-containner-header").is(':visible')) {
			height = $(".banner-containner-header").outerHeight();
		}
	}
	return height;
}
function setImageDueDate(){
	$("input[name='imageSampleDueDate']").each(function(){ 
		var _this = $(this);
	    $(this).addClass('attributeDatePicker VPAS-customer-choice-image-sample-due-date');
	    var date = new Date();
	    var formattedDate = ('0' + date.getDate()).slice(-2);
	    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
	    var formattedYear = date.getFullYear();
	    var dateString = formattedMonth + '/' + formattedDate + '/' + formattedYear;
	    $(this).datepicker({
		 dateFormat: "mm/dd/yy",
		 minDate: dateString
	    });
	    if(Kjs.storage.getData('userInfo').role != 'Merchandise Specialist'){
		 _this.attr("disabled","true");
		 _this.css("cursor","not-allowed");
	    }
	    _this.attr('readonly',true);
	});
}
function noRoundDecimalNormalBrand2Decimal(num){
	var cost = num.toString();
	var actualAmt = cost;
	if(cost.split('.')[1]!= undefined){
		if(cost.split('.')[1].length >= 7){
			actualAmt = cost.slice(0, -4);
		}else if(cost.split('.')[1].length >= 6){
			actualAmt = cost.slice(0, -3);
		}else if(cost.split('.')[1].length >= 5){
			actualAmt = cost.slice(0, -2);
		}else if (cost.split('.')[1].length >= 4){
			actualAmt = cost.slice(0, -1);
		}else if(cost.split('.')[1].length == 3 || cost.split('.')[1].length == 2){
			actualAmt = cost;		
		}else if(cost.split('.')[1].length == 2){
			actualAmt = cost;
		}else if(cost.split('.')[1].length == 1){
			cost = cost + '0';
			actualAmt = cost;
		}else{			
			var lastchar =cost.slice(-1);			
			if(lastchar == '.'){
				cost = cost + '00';
			}else {
				cost = cost + '.00';
			}			
			actualAmt = cost;
		}	
	} else {
		cost = cost + '.00';
		actualAmt = cost;
	}
	return actualAmt;
 }

function noRoundDecimalNormalBrand(num){
	var cost = num.toString();
	var actualAmt = cost;
	if(cost.split('.')[1]!= undefined){
		if(cost.split('.')[1].length >= 7){
			actualAmt = cost.slice(0, -4);
		}else if(cost.split('.')[1].length >= 6){
			actualAmt = cost.slice(0, -3);
		}else if(cost.split('.')[1].length >= 5){
			actualAmt = cost.slice(0, -2);
		}else if (cost.split('.')[1].length >= 4){
			actualAmt = cost.slice(0, -1);
		}else if(cost.split('.')[1].length == 3 || cost.split('.')[1].length == 2){
			actualAmt = cost;		
		}else if(cost.split('.')[1].length == 2){
			actualAmt = cost;
		}else if(cost.split('.')[1].length == 1){
			cost = cost + '0';
			actualAmt = cost;
		}else{			
			var lastchar =cost.slice(-1);			
			if(lastchar == '.'){
				cost = cost + '00';
			}else {
				cost = cost + '.00';
			}			
			actualAmt = cost;
		}	
	} else {
		cost = cost + '.00';
		actualAmt = cost;
	}
	return actualAmt;
 }


function noRoundDecimalNormalBrandinitnum(num){
	var cost = num.toString();
	var actualAmt = cost;
	if(cost.split('.')[1]!= undefined){
		if(cost.split('.')[1].length >= 7){
			actualAmt = cost.slice(0, -5);
		}else if(cost.split('.')[1].length >= 6){
			actualAmt = cost.slice(0, -4);
		}else if(cost.split('.')[1].length >= 5){
			actualAmt = cost.slice(0, -3);
		}else if (cost.split('.')[1].length >= 4){
			actualAmt = cost.slice(0, -2);
		}else if(cost.split('.')[1].length == 3){
			actualAmt = cost.slice(0, -1);		
		}else if(cost.split('.')[1].length == 2){
			actualAmt = cost;
		}else if(cost.split('.')[1].length == 1){
			cost = cost + '0';
			actualAmt = cost;
		}else{			
			var lastchar =cost.slice(-1);			
			if(lastchar == '.'){
				cost = cost + '00';
			}else {
				cost = cost + '.00';
			}			
			actualAmt = cost;
		}	
	} else {
		cost = cost + '.00';
		actualAmt = cost;
	}
	return actualAmt;
 }
function addZerosonLoad(defaultValue){
	if(defaultValue.split('.')[1] == undefined){
		defaultValue = defaultValue + '.000';
	}else if(defaultValue.split('.')[1].length == 0){
		defaultValue = defaultValue + '000';
	}else if(defaultValue.split('.')[1].length == 1){
		defaultValue = defaultValue + '00';
	}else if(defaultValue.split('.')[1].length == 2){
		defaultValue = defaultValue + '0';
	}
	return defaultValue;
}
function UnlockMerchantGroup(mgId){
	var merchantGroupId = encodeURIComponent(mgId);	
	var url = location.origin + '/merchandising/unlockMerchantGroupFromEdit?merchantGroupId='+merchantGroupId,
	_success = function(response){},
	_error = function(){};
	Kjs.vpAjax.get(url,"",_success,_error);
}

function ValidateVSID(str){	
    var reg=/[^A-Za-z0-9.+!\/@$^&()-=<>{ }]+/;
    var res = !reg.test(str);
    if (str.indexOf("*") > -1 || str.indexOf(":") > -1 || str.indexOf(";") > -1){
    	res = false;
    }
    return res;
}
var  isMaintenanceStyleHeirarchyUpdated = function(){
	var path = window.location.href;
	var maintenanceFlag = (path.search("maintenanceFlag=true")!=-1 )? true: false;
	var styleHeirarchyUpdateFlag = (path.search("heirarchyUpdated=true")!=-1 )? true: false;
		if(maintenanceFlag && styleHeirarchyUpdateFlag){
			return true;
		}
		return false;
}




var reportingLabelMassUpdateValidation = function(){
	errorLabel = false;
	if(Kjs.storage.getData('userInfo').role == 'Merchandise Specialist'){
		var displayReprtingError = function(){
			$('.RPTG_LBL_CDE').parents('td').addClass("hasError");
			$('.RPTG_LBL_CDE').parents('td').find('.errmsg').text('Please select two values for Reporting Label, one starting with A1 and one starting with A2.').show();
		};
		if($('body').find('.RPTG_LBL_CDE').length > 0 && !$(".RPTG_LBL_CDE .selected_val_Label").prop("disabled") && !$(".RPTG_LBL_CDE .selected_val_Label").hasClass("hasChanged") && $(".RPTG_LBL_CDE .selected_val_Label").val() != "Mixed Value"){
			var options = $(".RPTG_LBL_CDE .selected_val_Label").val().split(",");
			if(options.length != 2){
				displayReprtingError();
				errorLabel = true;
			}else if(options.length == 2){
				for(var optionData in options){
					options[optionData] = options[optionData].split("-")[0];
				}
				if(options[0] == options[1]){
					errorLabel = true;
				}
				if(errorLabel){
					displayReprtingError();
				}
			}
			
		}										
		
	}
	return errorLabel;
}

function editAllStatusUserSpecificAttributes(callBack){
	var userRole = Kjs.storage.getData('userInfo').role;
	if(userRole == 'IP' || userRole == 'DM'){
		var _successCallBack = function(response){
			if(response.errorMessage != undefined && response.errorMessage != ""){
				Kjs.modelPopUp.displayServiceError(response.errorMessage);
			}else{
				var found = false;
				for (var key in response) {
					if (key == userRole){
						for (var i=0; i<response[key].length; i++) {
							var attrKey = response[key][i];
							var inputElem = $('input[name="'+attrKey+'"]');
							if(inputElem.length > 0)
								found = true;
							inputElem.each(function(i,v){
								if($(v).hasClass('singleAttributeCode')){
									$(v).removeAttr('disabled');
									$(v).siblings('.singleAttributeDesc').removeAttr('disabled').removeClass('readonly');
								}else if($(v).hasClass('selected_val')){
									$(v).siblings('.selected_val_Label').removeAttr('disabled').removeClass('readonly');
								}else{
									$(v).removeAttr('disabled').removeClass('readonly');
								}
							});
						}
						break;
					}
				}
				callBack(found);
			}
		},
		_errorCallBack = function(response){
			if(response.errorMessage != undefined && response.errorMessage != ""){
				Kjs.modelPopUp.displayServiceError(response.errorMessage);
			}
		},
		transactionId = Kjs.vpAjax.randomString(),
		url = location.origin + '/v1/vendorstyle/anyStatusEditableAttributes';
		Kjs.vpAjax.get(url, "", _successCallBack, _errorCallBack, transactionId);
	}else{
		callBack();
	}
}

function validateCPDDimensions(event, el) {
	var _this = el;
	var value = (event.target.value);
	var charCode = (event.which) ? event.which : event.charCode;	
	var keyvalue = String.fromCharCode(event.charCode=="0"?event.keyCode:event.charCode);
    var selStart = $(event.target)[0].selectionStart;
    var selEnd = $(event.target)[0].selectionEnd;
    var notAllowedKeyCode = charCode > 31 && (charCode < 48 || charCode > 57) ;
    var maxNumber = event.target.className.indexOf("cpd_volume") != -1 ? 999999.9 : 9999.999;
    if(!isNaN(keyvalue) || notAllowedKeyCode){
    	if((selStart == 0 && selEnd > 0)){
			var  newValue = value; 
		}else{
			var newValue = value.slice(0, selStart) + keyvalue + value.slice(selStart,value.length);
		}
		if(newValue == "Mixed Value"){
			var newValue = keyvalue;
		}
		if(!(newValue <= maxNumber) || hasDecimalPlace(newValue, event.target.className.indexOf("cpd_volume")==-1?4:2) 
		 || (notAllowedKeyCode && charCode != 46)){
				event.preventDefault();
		}
	}
}
function hasDecimalPlace(value, x) {
	var pointIndex = value.indexOf('.');
	if(value.indexOf('\t') !== -1){
		return false;
	}
	return pointIndex >= 0 && pointIndex < value.length - x;
}
function verifyConsumerPackageWidth(_this, heightValue, widthValue, depthValue, heightEle, widthEle, depthEle){
	if(heightValue == '' && widthValue == '' && depthValue == ''){
		heightEle.removeClass('hasError');
		widthEle.removeClass('hasError');
		depthEle.removeClass('hasError');
	}else{
		if(widthValue != '' && depthValue != ''){
			widthEle.removeClass('hasError');
			depthEle.removeClass('hasError');
			if(parseFloat(widthValue) > parseFloat(depthValue)){
				widthEle.addClass('hasError');
			}
			if(_this.className.indexOf('pog')>-1){
				widthEle.removeClass('hasError');
			}
		}else{
			if(widthValue == ''){
				widthEle.addClass('hasError');
			}else{
				widthEle.removeClass('hasError');
			}
			if(depthValue == ''){
				depthEle.addClass('hasError');
			}else{
				depthEle.removeClass('hasError');
			}
		}
		if(heightValue == ''){
			heightEle.addClass('hasError');
		}else{
			heightEle.removeClass('hasError');
		}
	}
}
function validateConsumerPackageWidth(el){
	var _this = el, height_val = '', width_val = '', depth_val = '', height_ele, width_ele, depth_ele;
	var attrPrefix;
	if(_this[0].className.indexOf('pog')>-1){
		attrPrefix = 'pog';
	}else{
		attrPrefix = 'cpd';
	}
	if(_this.closest('tr').hasClass('rowSelected') && _this.closest('table').find('tbody tr.rowSelected').length > 1){
		$('.tablesorter-scroller-table:visible').eq(1).find('tbody tr.rowSelected').each(function(i,v){
			height_val = $(v).find('.'+attrPrefix+'_height').val();
			width_val = $(v).find('.'+attrPrefix+'_width').val();
			depth_val = $(v).find('.'+attrPrefix+'_depth').val();
			height_ele = $(v).find('.'+attrPrefix+'_height').parent('div');
			width_ele = $(v).find('.'+attrPrefix+'_width').parent('div');
			depth_ele = $(v).find('.'+attrPrefix+'_depth').parent('div');
			verifyConsumerPackageWidth(_this[0], height_val, width_val, depth_val, height_ele, width_ele, depth_ele);
		}); 
	}else{
		if(_this.hasClass(attrPrefix+'_height')){
	        height_val = _this.val();
	        width_val = _this.closest('tr').find('.'+attrPrefix+'_width').val();
	        depth_val = _this.closest('tr').find('.'+attrPrefix+'_depth').val();
	    }else if(_this.hasClass(attrPrefix+'_width')){
	        width_val = _this.val();
	        height_val = _this.closest('tr').find('.'+attrPrefix+'_height').val();
	        depth_val = _this.closest('tr').find('.'+attrPrefix+'_depth').val();
	    }else{
	        depth_val = _this.val();
	        height_val = _this.closest('tr').find('.'+attrPrefix+'_height').val();
	        width_val = _this.closest('tr').find('.'+attrPrefix+'_width').val();
	    }
	    height_ele = _this.closest('tr').find('.'+attrPrefix+'_height').parent('div');
		width_ele = _this.closest('tr').find('.'+attrPrefix+'_width').parent('div');
		depth_ele = _this.closest('tr').find('.'+attrPrefix+'_depth').parent('div');
	    verifyConsumerPackageWidth(_this[0], height_val, width_val, depth_val, height_ele, width_ele, depth_ele);
	}
}
function defaultConsumerPackageVolume(heightValue, widthValue, depthValue, volumeEle){
	if(heightValue != '' && widthValue != '' && depthValue != ''){
    	var volume_val = parseFloat(heightValue) * parseFloat(widthValue) * parseFloat(depthValue);
    	if(volume_val > 999999.9){
    		volume_val = 999999.9;
    		volumeEle.val(volume_val);
    	}else{
    		if(volume_val != undefined && volume_val.toString().indexOf('.') != -1){
    			volumeEle.val(parseFloat(volume_val).toFixed(1));
    		}else{
    			if(!isNaN(volume_val)){
    				if(volume_val == 0){
    					volumeEle.val('');
    				}else{
    					volumeEle.val(volume_val);
    				}
    			}
    		}
    	}
    }else{
    	volumeEle.val('');
    }
}
function setDefaultConsumerPackageVolume(_this){
	var height_val = '', width_val = '', depth_val = '', volume_ele;
    if(_this.closest('tr').hasClass('rowSelected') && _this.closest('table').find('tbody tr.rowSelected').length > 1){
		$('.tablesorter-scroller-table:visible').eq(1).find('tbody tr.rowSelected').each(function(i,v){
			height_val = $(v).find('.cpd_height').val();
			width_val = $(v).find('.cpd_width').val();
			depth_val = $(v).find('.cpd_depth').val();
			volume_ele = $(v).find(".cpd_volume");
			defaultConsumerPackageVolume(height_val, width_val, depth_val, volume_ele);
		});
    }else{
    	if(_this.hasClass('cpd_height')){
	        height_val = _this.val();
	        width_val = _this.closest('tr').find('.cpd_width').val();
	        depth_val = _this.closest('tr').find('.cpd_depth').val();
	    }else if(_this.hasClass('cpd_width')){
	        width_val = _this.val();
	        height_val = _this.closest('tr').find('.cpd_height').val();
	        depth_val = _this.closest('tr').find('.cpd_depth').val();
	    }else{
	        depth_val = _this.val();
	        height_val = _this.closest('tr').find('.cpd_height').val();
	        width_val = _this.closest('tr').find('.cpd_width').val();
	    }
	    volume_ele = _this.closest('tr').find('.cpd_volume');
	    defaultConsumerPackageVolume(height_val, width_val, depth_val, volume_ele);
    }
}
function disableCopyPasteInput(e){
	e.preventDefault();
}
function showConsumerPackageErrorTooltip(e, _this){
	if(e.type == "mouseenter"){
		var errorMessage = '', errorTarget = _this, top = 0, left = 0;
		if(errorTarget != undefined && errorTarget.length){
			top = errorTarget.offset().top - 30;
			left = errorTarget.offset().left - 200;
		}
		if(_this.hasClass('popOver') && _this.find('.disable_dimension').length > 0 && _this.find('.disable_dimension').is(':disabled')){
			errorMessage = "Manual Updates to Consumer Package Dimensions are not allowed - Accuracy Level is Already High";
			$(".cpd-tooltip-message").html(errorMessage).show().css('opacity',0);
			$(".cpd-tooltip-message").append('<div class="arrow"></div>');
			var arrowLeft = 250;
			if(left < 0){
				arrowLeft = (errorTarget.offset().left + (errorTarget.width() / 2)) - 10;
				$(".cpd-tooltip-message .arrow").css("left", arrowLeft + "px");
				$(".cpd-tooltip-message").css({"top":top+"px","left":"5px","right":"auto","opacity":1});
			}else{
				$(".cpd-tooltip-message .arrow").css("left", arrowLeft + "px");
				$(".cpd-tooltip-message").css({"top":top+"px","left":left+"px","right":"auto","opacity":1});
			}
		}else{
			if(!_this.hasClass('popOver') && _this.closest('td').find('.hasError').length > 0){
				if(_this.hasClass('cpd_width') || _this.hasClass('pog_width')){
					if(_this.val() == ''){
						errorMessage = "Either input or clear all 3 of Height, Width and Depth";
					}else{
						errorMessage = "Consumer Package Width must be less than or equal to the Consumer Package Depth Dimension";
						if(_this.hasClass('pog_width')){
							errorMessage = "";
						}
					}
				}else if(_this.hasClass('cpd_depth') || _this.hasClass('pog_depth') ){
					if(_this.val() == ''){
						errorMessage = "Either input or clear all 3 of Height, Width and Depth";
					}
				}else if(_this.hasClass('cpd_height') || _this.hasClass('pog_height')){
					if(_this.val() == ''){
						errorMessage = "Either input or clear all 3 of Height, Width and Depth";
					}
				}
				if(errorMessage != ''){
					if (location.pathname=="/maintenance/skuAttribute") {
						$(".cpd-tooltip-message").html(errorMessage).show().css('opacity',0);
						$(".cpd-tooltip-message").append('<div class="arrow"></div>');
						$(".cpd-tooltip-message .arrow").css("left", "60px");
						left = left+200;
						$(".cpd-tooltip-message").css({"top":top+"px","left":left+"px","right":"auto","opacity":1});
					}else{
						$(".cpd-tooltip-message").html(errorMessage).show().css('opacity',0);
						$(".cpd-tooltip-message").append('<div class="arrow"></div>');
						$(".cpd-tooltip-message .arrow").css("left", "250px");
						$(".cpd-tooltip-message").css({"top":top+"px","left":left+"px","right":"auto","opacity":1});
					}
				}
			}
		}
	}else{
		$('.cpd-tooltip-message').hide();
	}
}

function reportingLabelValueValidation(){
	errorLabel = false;
	var displayReprtingError = function(){
		if($('body').find('#massUpdateContainer').length > 0){
			$('.RPTG_LBL_CDE').parents('td').addClass("hasError");
			$('.RPTG_LBL_CDE').parents('td').find('.errmsg').text('Please select two values for Reporting Label, one starting with A1 and one starting with A2.').show();
		} else {
			$('.RPTG_LBL_CDE').parents('.input-row').addClass("hasError");
			$('.RPTG_LBL_CDE').parents('.input-row').find('.errmsg').text('Please select two values for Reporting Label, one starting with A1 and one starting with A2.').show();
		}
	};
	if(Kjs.storage.getData('userInfo').role == 'Merchandise Specialist'){
		if($('body').find('.RPTG_LBL_CDE').length > 0 && !$(".RPTG_LBL_CDE .selected_val_Label").prop("disabled") && !$(".RPTG_LBL_CDE .selected_val_Label").hasClass("hasChanged") && $(".RPTG_LBL_CDE .selected_val_Label").val() != "Mixed Value"){
			var options = $(".RPTG_LBL_CDE .selected_val_Label").val().split(",");
			if(options.length > 0 && options.indexOf("Please select the value") == -1){
				if(options.length == 2){
					for(var optionData in options){
						options[optionData] = options[optionData].split("-")[0];
					}
					if(options[0] == options[1]){
						errorLabel = true;
						displayReprtingError();
					}
				} else {
					errorLabel = true;
					displayReprtingError();
				}
			}
			
		}
	}
	return errorLabel;
}
function roundOffCPDDimensions(_this){
	if(_this.hasClass('singleAttributeDesc'))
		return;
	if(_this.val() != "Mixed Value"){
		if(isNaN(Number(_this.val()))){
			_this.val('');
		}else{
			_this.val(Number(_this.val()).toString());
		}
	}
	var value = _this.val();
	if(value != undefined && value != ''){
		var index = value.indexOf('.');
		if(index != -1){			
			var result = value.split('.');
			if(result[1] != undefined && result[1].length == 0){
				_this.val(result[0]);
			}
		}else{
			if(!isNaN(Number(value))){
				if(_this.hasClass('cpd_volume')){
						_this.val(value.substring(0,6));
				}else{
					_this.val(value.substring(0,4));
				}
			}
		}
	}
	
	if(_this.closest('tr').hasClass('rowSelected') && _this.closest('table').find('tbody tr.rowSelected').length > 1){
		$('.tablesorter-scroller-table:visible').eq(1).find('tbody tr.rowSelected input.cp_dimension').each(function(i,v){
			if($(v).val() <= 0){
				$(v).val("");
			}
		});
	}else if(value <= 0){
		_this.val("");
	}
}
function isNumericOnly(str) {
	if (str.indexOf(".") > -1) {
		str = str.split(".")[0];
	}
 return /^[0-9]+$/.test(str);
}
function isNumberNumericOnly(str) {
	if (str!=undefined && str!="") {
 		return /^[0-9]+$/.test(str);
	}else{
		return false;
	}
}

function setDefaultSeasonYear(){
	var seasonYearElem = $('[name="seasonYear"]').not('[value="no value"]');
	var seasonYearVal = seasonYearElem.val();
	if (seasonYearVal != undefined && seasonYearVal.trim() == "") {
		seasonYearElem.val('no value');
	}
}
function checkDecimalDegit(inputname,defaultname){
	var flagName = false;
	if (inputname.indexOf(".") > -1 && defaultname.indexOf(".") > -1) {
		if (inputname.split(".")[1].length<=defaultname.split(".")[1].length) {
			flagName = false;
		}else{
			flagName = true;
		}
	}
	return flagName;
}
function profileGroupNameText(){
	var str = $(this).val();
	if (str!=undefined && str!=null && str!="") {
		$(this).val(str.replace(/[^a-zA-Z 0-9]+/g,''));
	}
}
