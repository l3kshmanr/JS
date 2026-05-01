
// ***** THIS IS A GENERATED SCRIPT. DO NOT MODIFY! *****
//
// For questions regarding the UI framework, contact the UI team.

/*!
 * commonjssection.js
 * Consolidation of most of the scripts required for the myAccount, Sale Event, Generic Content, Content Page, Egiftcard Landing, Rebate, prdNotAvaiable and Kohls_javascript pages.
 */

// ***** THIS IS A GENERATED SCRIPT. DO NOT MODIFY! *****
//
// For questions regarding the UI framework, contact the UI team.

/*!
 * ***** THIS IS A GENERATED SCRIPT. DO NOT MODIFY! *****
 * overlay.js
 * Combination of fancybox plug-in, plus messaging plugins for inter-frame communication.
 */
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function($) {
	var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right,

		selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [],

		ajaxLoader = null, imgPreloader = new Image(), imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i,

		loadingTimer, loadingFrame = 1,

		titleHeight = 0, titleStr = '', start_pos, final_pos, busy = false, fx = $.extend($('<div/>')[0], { prop: 0 }),

		isIE6 = $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest,

		/*
		 * Private methods 
		 */

		_abort = function() {
			loading.hide();

			imgPreloader.onerror = imgPreloader.onload = null;

			if (ajaxLoader) {
				ajaxLoader.abort();
			}

			tmp.empty();
		},

		_error = function() {
			if (false === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts)) {
				loading.hide();
				busy = false;
				return;
			}

			selectedOpts.titleShow = false;

			selectedOpts.width = 'auto';
			selectedOpts.height = 'auto';

			tmp.html( '<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>' );

			_process_inline();
		},

		_start = function() {
			var obj = selectedArray[ selectedIndex ],
				href, 
				type, 
				title,
				str,
				emb,
				ret;

			_abort();

			selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data('fancybox') == 'undefined' ? selectedOpts : $(obj).data('fancybox')));

			ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts);

			if (ret === false) {
				busy = false;
				return;
			} else if (typeof ret == 'object') {
				selectedOpts = $.extend(selectedOpts, ret);
			}

			title = selectedOpts.title || (obj.nodeName ? $(obj).attr('title') : obj.title) || '';

			if (obj.nodeName && !selectedOpts.orig) {
				selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
			}

			if (title === '' && selectedOpts.orig && selectedOpts.titleFromAlt) {
				title = selectedOpts.orig.attr('alt');
			}

			href = selectedOpts.href || (obj.nodeName ? $(obj).attr('href') : obj.href) || null;

			if ((/^(?:javascript)/i).test(href) || href == '#') {
				href = null;
			}

			if (selectedOpts.type) {
				type = selectedOpts.type;

				if (!href) {
					href = selectedOpts.content;
				}

			} else if (selectedOpts.content) {
				type = 'html';

			} else if (href) {
				if (href.match(imgRegExp)) {
					type = 'image';

				} else if (href.match(swfRegExp)) {
					type = 'swf';

				} else if ($(obj).hasClass("iframe")) {
					type = 'iframe';

				} else if (href.indexOf("#") === 0) {
					type = 'inline';

				} else {
					type = 'ajax';
				}
			}

			if (!type) {
				_error();
				return;
			}

			if (type == 'inline') {
				obj	= href.substr(href.indexOf("#"));
				type = $(obj).length > 0 ? 'inline' : 'ajax';
			}

			selectedOpts.type = type;
			selectedOpts.href = href;
			selectedOpts.title = title;

			if (selectedOpts.autoDimensions) {
				if (selectedOpts.type == 'html' || selectedOpts.type == 'inline' || selectedOpts.type == 'ajax') {
					selectedOpts.width = 'auto';
					selectedOpts.height = 'auto';
				} else {
					selectedOpts.autoDimensions = false;	
				}
			}

			if (selectedOpts.modal) {
				selectedOpts.overlayShow = true;
				selectedOpts.hideOnOverlayClick = false;
				selectedOpts.hideOnContentClick = false;
				selectedOpts.enableEscapeButton = false;
				selectedOpts.showCloseButton = false;
			}

			selectedOpts.padding = parseInt(selectedOpts.padding, 10);
			selectedOpts.margin = parseInt(selectedOpts.margin, 10);

			tmp.css('padding', (selectedOpts.padding + selectedOpts.margin));

			$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
				$(this).replaceWith(content.children());				
			});

			switch (type) {
				case 'html' :
					tmp.html( selectedOpts.content );
					_process_inline();
				break;

				case 'inline' :
					if ( $(obj).parent().is('#fancybox-content') === true) {
						busy = false;
						return;
					}

					$('<div class="fancybox-inline-tmp" />')
						.hide()
						.insertBefore( $(obj) )
						.bind('fancybox-cleanup', function() {
							$(this).replaceWith(content.children());
						}).bind('fancybox-cancel', function() {
							$(this).replaceWith(tmp.children());
						});

					$(obj).appendTo(tmp);

					_process_inline();
				break;

				case 'image':
					busy = false;

					$.fancybox.showActivity();

					imgPreloader = new Image();

					imgPreloader.onerror = function() {
						_error();
					};

					imgPreloader.onload = function() {
						busy = true;

						imgPreloader.onerror = imgPreloader.onload = null;

						_process_image();
					};

					imgPreloader.src = href;
				break;

				case 'swf':
					selectedOpts.scrolling = 'no';

					str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
					emb = '';

					$.each(selectedOpts.swf, function(name, val) {
						str += '<param name="' + name + '" value="' + val + '"></param>';
						emb += ' ' + name + '="' + val + '"';
					});

					str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';

					tmp.html(str);

					_process_inline();
				break;

				case 'ajax':
					busy = false;

					$.fancybox.showActivity();

					selectedOpts.ajax.win = selectedOpts.ajax.success;

					ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {
						url	: href,
						data : selectedOpts.ajax.data || {},
						error : function(XMLHttpRequest, textStatus, errorThrown) {
							if ( XMLHttpRequest.status > 0 ) {
								_error();
							}
						},
						success : function(data, textStatus, XMLHttpRequest) {
							var o = typeof XMLHttpRequest == 'object' ? XMLHttpRequest : ajaxLoader;
							if (o.status == 200) {
								if ( typeof selectedOpts.ajax.win == 'function' ) {
									ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest);

									if (ret === false) {
										loading.hide();
										return;
									} else if (typeof ret == 'string' || typeof ret == 'object') {
										data = ret;
									}
								}

								tmp.html( data );
								_process_inline();
							}
						}
					}));

				break;

				case 'iframe':
					_show();
				break;
			}
		},

		_process_inline = function() {
			var
				w = selectedOpts.width,
				h = selectedOpts.height;

			if (w.toString().indexOf('%') > -1) {
				w = parseInt( ($(window).width() - (selectedOpts.margin * 2)) * parseFloat(w) / 100, 10) + 'px';

			} else {
				w = w == 'auto' ? 'auto' : w + 'px';	
			}

			if (h.toString().indexOf('%') > -1) {
				h = parseInt( ($(window).height() - (selectedOpts.margin * 2)) * parseFloat(h) / 100, 10) + 'px';

			} else {
				h = h == 'auto' ? 'auto' : h + 'px';	
			}

			tmp.wrapInner('<div style="width:' + w + ';height:' + h + ';overflow: ' + (selectedOpts.scrolling == 'auto' ? 'auto' : (selectedOpts.scrolling == 'yes' ? 'scroll' : 'hidden')) + ';position:relative;"></div>');

			selectedOpts.width = tmp.width();
			selectedOpts.height = tmp.height();

			_show();
		},

		_process_image = function() {
			selectedOpts.width = imgPreloader.width;
			selectedOpts.height = imgPreloader.height;

			$("<img />").attr({
				'id' : 'fancybox-img',
				'src' : imgPreloader.src,
				'alt' : selectedOpts.title
			}).appendTo( tmp );

			_show();
		},

		_show = function() {
			var pos, equal;

			loading.hide();

			if (wrap.is(":visible") && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
				$.event.trigger('fancybox-cancel');

				busy = false;
				return;
			}

			busy = true;

			$(content.add( overlay )).unbind();

			$(window).unbind("resize.fb scroll.fb");
			$(document).unbind('keydown.fb');

			if (wrap.is(":visible") && currentOpts.titlePosition !== 'outside') {
				wrap.css('height', wrap.height());
			}

			currentArray = selectedArray;
			currentIndex = selectedIndex;
			currentOpts = selectedOpts;

			if (currentOpts.overlayShow) {
				overlay.css({
					'background-color' : currentOpts.overlayColor,
					//'opacity' : currentOpts.overlayOpacity,
					'cursor' : currentOpts.hideOnOverlayClick ? 'pointer' : 'auto',
					'height' : $(document).height()
				});

				if (!overlay.is(':visible')) {
					if (isIE6) {
						$('select:not(#fancybox-tmp select)').filter(function() {
							return this.style.visibility !== 'hidden';
						}).css({'visibility' : 'hidden'}).one('fancybox-cleanup', function() {
							this.style.visibility = 'inherit';
						});
					}

					overlay.show();
				}
			} else {
				overlay.hide();
			}

			final_pos = _get_zoom_to();

			_process_title();

			if (wrap.is(":visible")) {
				$( close.add( nav_left ).add( nav_right ) ).hide();

				pos = wrap.position(),

				start_pos = {
					top	 : pos.top,
					left : pos.left,
					width : wrap.width(),
					height : wrap.height()
				};

				equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);

				content.fadeTo(currentOpts.changeFade, 0.3, function() {
					var finish_resizing = function() {
						content.html( tmp.contents() ).fadeTo(currentOpts.changeFade, 1, _finish);
					};

					$.event.trigger('fancybox-change');

					content
						.empty()
						.removeAttr('filter')
						.css({
							'border-width' : currentOpts.padding,
							'width'	: final_pos.width - currentOpts.padding * 2,
							'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
						});

					if (equal) {
						finish_resizing();

					} else {
						fx.prop = 0;

						$(fx).animate({prop: 1}, {
							 duration : currentOpts.changeSpeed,
							 easing : currentOpts.easingChange,
							 step : _draw,
							 complete : finish_resizing
						});
					}
				});

				return;
			}

			wrap.removeAttr("style");

			content.css('border-width', currentOpts.padding);

			if (currentOpts.transitionIn == 'elastic') {
				start_pos = _get_zoom_from();

				content.html( tmp.contents() );

				wrap.show();

				if (currentOpts.opacity) {
					final_pos.opacity = 0;
				}

				fx.prop = 0;

				$(fx).animate({prop: 1}, {
					 duration : currentOpts.speedIn,
					 easing : currentOpts.easingIn,
					 step : _draw,
					 complete : _finish
				});

				return;
			}

			if (currentOpts.titlePosition == 'inside' && titleHeight > 0) {	
				title.show();	
			}

			content
				.css({
					'width' : final_pos.width - currentOpts.padding * 2,
					'height' : selectedOpts.autoDimensions ? 'auto' : final_pos.height - titleHeight - currentOpts.padding * 2
				})
				.html( tmp.contents() );

			wrap
				.css(final_pos)
				.fadeIn( currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish );
		},

		_format_title = function(title) {
			if (title && title.length) {
				if (currentOpts.titlePosition == 'float') {
					return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>';
				}

				return '<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + '</div>';
			}

			return false;
		},

		_process_title = function() {
			titleStr = currentOpts.title || '';
			titleHeight = 0;

			title
				.empty()
				.removeAttr('style')
				.removeClass();

			if (currentOpts.titleShow === false) {
				title.hide();
				return;
			}

			titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr);

			if (!titleStr || titleStr === '') {
				title.hide();
				return;
			}

			title
				.addClass('fancybox-title-' + currentOpts.titlePosition)
				.html( titleStr )
				.appendTo( 'body' )
				.show();

			switch (currentOpts.titlePosition) {
				case 'inside':
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'marginLeft' : currentOpts.padding,
							'marginRight' : currentOpts.padding
						});

					titleHeight = title.outerHeight(true);

					title.appendTo( outer );

					final_pos.height += titleHeight;
				break;

				case 'over':
					title
						.css({
							'marginLeft' : currentOpts.padding,
							'width'	: final_pos.width - (currentOpts.padding * 2),
							'bottom' : currentOpts.padding
						})
						.appendTo( outer );
				break;

				case 'float':
					title
						.css('left', parseInt((title.width() - final_pos.width - 40)/ 2, 10) * -1)
						.appendTo( wrap );
				break;

				default:
					title
						.css({
							'width' : final_pos.width - (currentOpts.padding * 2),
							'paddingLeft' : currentOpts.padding,
							'paddingRight' : currentOpts.padding
						})
						.appendTo( wrap );
				break;
			}

			title.hide();
		},

		_set_navigation = function() {
			if (currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) {
				$(document).bind('keydown.fb', function(e) {
					if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
						e.preventDefault();
						$.fancybox.close();

					} else if ((e.keyCode == 37 || e.keyCode == 39) && currentOpts.enableKeyboardNav && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'SELECT') {
						e.preventDefault();
						$.fancybox[ e.keyCode == 37 ? 'prev' : 'next']();
					}
				});
			}

			if (!currentOpts.showNavArrows) { 
				nav_left.hide();
				nav_right.hide();
				return;
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex !== 0) {
				nav_left.show();
			}

			if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length -1)) {
				nav_right.show();
			}
		},

		_finish = function () {
			if (!$.support.opacity) {
				content.get(0).style.removeAttribute('filter');
				wrap.get(0).style.removeAttribute('filter');
			}

			if (selectedOpts.autoDimensions) {
				content.css('height', 'auto');
			}

			wrap.css('height', 'auto');

			if (titleStr && titleStr.length) {
				title.show();
			}

			if (currentOpts.showCloseButton) {
				close.show();
			}

			_set_navigation();
	
			if (currentOpts.hideOnContentClick)	{
				content.bind('click', $.fancybox.close);
			}

			if (currentOpts.hideOnOverlayClick)	{
				overlay.bind('click', $.fancybox.close);
			}

			$(window).bind("resize.fb", $.fancybox.resize);

			if (currentOpts.centerOnScroll) {
				$(window).bind("scroll.fb", $.fancybox.center);
			}

			if (currentOpts.type == 'iframe') {
				$('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : '') + ' scrolling="' + selectedOpts.scrolling + '" src="' + currentOpts.href + '"></iframe>').appendTo(content);
			}

			wrap.show();

			busy = false;

			$.fancybox.center();

			currentOpts.onComplete(currentArray, currentIndex, currentOpts);

			_preload_images();
		},

		_preload_images = function() {
			var href, 
				objNext;

			if ((currentArray.length -1) > currentIndex) {
				href = currentArray[ currentIndex + 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}

			if (currentIndex > 0) {
				href = currentArray[ currentIndex - 1 ].href;

				if (typeof href !== 'undefined' && href.match(imgRegExp)) {
					objNext = new Image();
					objNext.src = href;
				}
			}
		},

		_draw = function(pos) {
			var dim = {
				width : parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10),
				height : parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10),

				top : parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10),
				left : parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)
			};

			if (typeof final_pos.opacity !== 'undefined') {
				dim.opacity = pos < 0.5 ? 0.5 : pos;
			}

			wrap.css(dim);

			content.css({
				'width' : dim.width - currentOpts.padding * 2,
				'height' : dim.height - (titleHeight * pos) - currentOpts.padding * 2
			});
		},

		_get_viewport = function() {
			return [
				$(window).width() - (currentOpts.margin * 2),
				$(window).height() - (currentOpts.margin * 2),
				$(document).scrollLeft() + currentOpts.margin,
				$(document).scrollTop() + currentOpts.margin
			];
		},

		_get_zoom_to = function () {
			var view = _get_viewport(),
				to = {},
				resize = currentOpts.autoScale,
				double_padding = currentOpts.padding * 2,
				ratio;

			if (currentOpts.width.toString().indexOf('%') > -1) {
				to.width = parseInt((view[0] * parseFloat(currentOpts.width)) / 100, 10);
			} else {
				to.width = currentOpts.width + double_padding;
			}

			if (currentOpts.height.toString().indexOf('%') > -1) {
				to.height = parseInt((view[1] * parseFloat(currentOpts.height)) / 100, 10);
			} else {
				to.height = currentOpts.height + double_padding;
			}

			if (resize && (to.width > view[0] || to.height > view[1])) {
				if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
					ratio = (currentOpts.width ) / (currentOpts.height );

					if ((to.width ) > view[0]) {
						to.width = view[0];
						to.height = parseInt(((to.width - double_padding) / ratio) + double_padding, 10);
					}

					if ((to.height) > view[1]) {
						to.height = view[1];
						to.width = parseInt(((to.height - double_padding) * ratio) + double_padding, 10);
					}

				} else {
					to.width = Math.min(to.width, view[0]);
					to.height = Math.min(to.height, view[1]);
				}
			}

			to.top = parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - to.height - 40) * 0.5)), 10);
			to.left = parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - to.width - 40) * 0.5)), 10);

			return to;
		},

		_get_obj_pos = function(obj) {
			var pos = obj.offset();

			pos.top += parseInt( obj.css('paddingTop'), 10 ) || 0;
			pos.left += parseInt( obj.css('paddingLeft'), 10 ) || 0;

			pos.top += parseInt( obj.css('border-top-width'), 10 ) || 0;
			pos.left += parseInt( obj.css('border-left-width'), 10 ) || 0;

			pos.width = obj.width();
			pos.height = obj.height();

			return pos;
		},

		_get_zoom_from = function() {
			var orig = selectedOpts.orig ? $(selectedOpts.orig) : false,
				from = {},
				pos,
				view;

			if (orig && orig.length) {
				pos = _get_obj_pos(orig);

				from = {
					width : pos.width + (currentOpts.padding * 2),
					height : pos.height + (currentOpts.padding * 2),
					top	: pos.top - currentOpts.padding - 20,
					left : pos.left - currentOpts.padding - 20
				};

			} else {
				view = _get_viewport();

				from = {
					width : currentOpts.padding * 2,
					height : currentOpts.padding * 2,
					top	: parseInt(view[3] + view[1] * 0.5, 10),
					left : parseInt(view[2] + view[0] * 0.5, 10)
				};
			}

			return from;
		},

		_animate_loading = function() {
			if (!loading.is(':visible')){
				clearInterval(loadingTimer);
				return;
			}

			$('div', loading).css('top', (loadingFrame * -40) + 'px');

			loadingFrame = (loadingFrame + 1) % 12;
		};

	/*
	 * Public methods 
	 */

	$.fn.fancybox = function(options) {
		if (!$(this).length) {
			return this;
		}

		$(this)
			.data('fancybox', $.extend({}, options, ($.metadata ? $(this).metadata() : {})))
			.unbind('click.fb')
			.bind('click.fb', function(e) {
				e.preventDefault();

				if (busy) {
					return;
				}

				busy = true;

				$(this).blur();

				selectedArray = [];
				selectedIndex = 0;

				var rel = $(this).attr('rel') || '';

				if (!rel || rel == '' || rel === 'nofollow') {
					selectedArray.push(this);

				} else {
					selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "]");
					selectedIndex = selectedArray.index( this );
				}

				_start();

				return;
			});

		return this;
	};

	$.fancybox = function(obj) {
		var opts;

		if (busy) {
			return;
		}

		busy = true;
		opts = typeof arguments[1] !== 'undefined' ? arguments[1] : {};

		selectedArray = [];
		selectedIndex = parseInt(opts.index, 10) || 0;

		if ($.isArray(obj)) {
			for (var i = 0, j = obj.length; i < j; i++) {
				if (typeof obj[i] == 'object') {
					if (obj[i] instanceof HTMLElement) {	// Kohls mod
						$(obj[i]).data('fancybox', $.extend({}, opts));
					} else {
						$(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
					}
				} else {
					obj[i] = $({}).data('fancybox', $.extend({content : obj[i]}, opts));
				}
			}

			selectedArray = jQuery.merge(selectedArray, obj);

		} else {
			if (typeof obj == 'object') {
				if (obj instanceof HTMLElement) {	// Kohls mod
					$(obj).data('fancybox', $.extend({}, opts));
				} else {
					$(obj).data('fancybox', $.extend({}, opts, obj));
				}
			} else {
				obj = $({}).data('fancybox', $.extend({content : obj}, opts));
			}

			selectedArray.push(obj);
		}

		if (selectedIndex > selectedArray.length || selectedIndex < 0) {
			selectedIndex = 0;
		}

		_start();
	};

	$.fancybox.showActivity = function() {
		clearInterval(loadingTimer);

		loading.show();
		loadingTimer = setInterval(_animate_loading, 66);
	};

	$.fancybox.hideActivity = function() {
		loading.hide();
	};

	$.fancybox.next = function() {
		return $.fancybox.pos( currentIndex + 1);
	};

	$.fancybox.prev = function() {
		return $.fancybox.pos( currentIndex - 1);
	};

	$.fancybox.pos = function(pos) {
		if (busy) {
			return;
		}

		pos = parseInt(pos);

		selectedArray = currentArray;

		if (pos > -1 && pos < currentArray.length) {
			selectedIndex = pos;
			_start();

		} else if (currentOpts.cyclic && currentArray.length > 1) {
			selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1;
			_start();
		}

		return;
	};

	$.fancybox.cancel = function() {
		if (busy) {
			return;
		}

		busy = true;

		$.event.trigger('fancybox-cancel');

		_abort();

		selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);

		busy = false;
	};

	// Note: within an iframe use - parent.$.fancybox.close();
	$.fancybox.close = function() {
		if (busy || wrap.is(':hidden')) {
			return;
		}

		busy = true;

		if (currentOpts && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
			busy = false;
			return;
		}

		_abort();

		$(close.add( nav_left ).add( nav_right )).hide();

		$(content.add( overlay )).unbind();

		$(window).unbind("resize.fb scroll.fb");
		$(document).unbind('keydown.fb');

		content.find('iframe').attr('src', isIE6 && /^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank');

		if (currentOpts.titlePosition !== 'inside') {
			title.empty();
		}

		wrap.stop();

		function _cleanup() {
			overlay.fadeOut('fast');

			title.empty().hide();
			wrap.hide();

			$.event.trigger('fancybox-cleanup');

			content.empty();

			currentOpts.onClosed(currentArray, currentIndex, currentOpts);

			currentArray = selectedOpts	= [];
			currentIndex = selectedIndex = 0;
			currentOpts = selectedOpts	= {};

			busy = false;
		}

		if (currentOpts.transitionOut == 'elastic') {
			start_pos = _get_zoom_from();

			var pos = wrap.position();

			final_pos = {
				top	 : pos.top ,
				left : pos.left,
				width :	wrap.width(),
				height : wrap.height()
			};

			if (currentOpts.opacity) {
				final_pos.opacity = 1;
			}

			title.empty().hide();

			fx.prop = 1;

			$(fx).animate({ prop: 0 }, {
				 duration : currentOpts.speedOut,
				 easing : currentOpts.easingOut,
				 step : _draw,
				 complete : _cleanup
			});

		} else {
			wrap.fadeOut( currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
		}
	};

	$.fancybox.resize = function() {
		if (overlay.is(':visible')) {
			overlay.css('height', $(document).height());
		}

		$.fancybox.center(true);
	};

	$.fancybox.center = function() {
		var view, align;

		if (busy) {
			return;	
		}

		align = arguments[0] === true ? 1 : 0;
		view = _get_viewport();

		if (!align && (wrap.width() > view[0] || wrap.height() > view[1])) {
			return;	
		}

		wrap
			.stop()
			.animate({
				'top' : parseInt(Math.max(view[3] - 20, view[3] + ((view[1] - content.height() - 40) * 0.5) - currentOpts.padding)),
				'left' : parseInt(Math.max(view[2] - 20, view[2] + ((view[0] - content.width() - 40) * 0.5) - currentOpts.padding))
			}, typeof arguments[0] == 'number' ? arguments[0] : 200);
	};

	$.fancybox.init = function() {
		if ($("#fancybox-wrap").length) {
			return;
		}

		$('body').append(
			tmp	= $('<div id="fancybox-tmp"></div>'),
			loading	= $('<div id="fancybox-loading"><div></div></div>'),
			overlay	= $('<div id="fancybox-overlay"></div>'),
			wrap = $('<div id="fancybox-wrap"></div>')
		);

		outer = $('<div id="fancybox-outer"></div>')
			.append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>')
			.appendTo( wrap );

		outer.append(
			content = $('<div id="fancybox-content"></div>'),
			close = $('<a id="fancybox-close"></a>'),
			title = $('<div id="fancybox-title"></div>'),

			nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
			nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
		);

		close.click($.fancybox.close);
		loading.click($.fancybox.cancel);

		nav_left.click(function(e) {
			e.preventDefault();
			$.fancybox.prev();
		});

		nav_right.click(function(e) {
			e.preventDefault();
			$.fancybox.next();
		});

		if ($.fn.mousewheel) {
			wrap.bind('mousewheel.fb', function(e, delta) {
				if (busy) {
					e.preventDefault();

				} else if ($(e.target).get(0).clientHeight == 0 || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) {
					e.preventDefault();
					$.fancybox[ delta > 0 ? 'prev' : 'next']();
				}
			});
		}

		if (!$.support.opacity) {
			wrap.addClass('fancybox-ie');
		}

		if (isIE6) {
			loading.addClass('fancybox-ie6');
			wrap.addClass('fancybox-ie6');

			$('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || '') ? 'javascript:void(false)' : 'about:blank' ) + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer);
		}
	};

	$.fn.fancybox.defaults = {
		padding : 10,
		margin : 40,
		opacity : false,
		modal : false,
		cyclic : false,
		scrolling : 'auto',	// 'auto', 'yes' or 'no'

		width : 560,
		height : 340,

		autoScale : true,
		autoDimensions : true,
		centerOnScroll : false,

		ajax : {},
		swf : { wmode: 'transparent' },

		hideOnOverlayClick : true,
		hideOnContentClick : false,

		overlayShow : true,
		overlayOpacity : 0.7,
		overlayColor : 'rgba(0,0,0,0.5)',

		titleShow : true,
		titlePosition : 'float', // 'float', 'outside', 'inside' or 'over'
		titleFormat : null,
		titleFromAlt : false,

		transitionIn : 'fade', // 'elastic', 'fade' or 'none'
		transitionOut : 'fade', // 'elastic', 'fade' or 'none'

		speedIn : 300,
		speedOut : 300,

		changeSpeed : 300,
		changeFade : 'fast',

		easingIn : 'swing',
		easingOut : 'swing',

		showCloseButton	 : true,
		showNavArrows : true,
		enableEscapeButton : true,
		enableKeyboardNav : true,

		onStart : function(){},
		onCancel : function(){},
		onComplete : function(){},
		onCleanup : function(){},
		onClosed : function(){},
		onError : function(){}
	};

	$(document).ready(function() {
		$.fancybox.init();
	});

})(jQuery);
/*!
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery postMessage: Cross-domain scripting goodness
//
// *Version: 0.5, Last updated: 9/11/2009*
// 
// Project Home - http://benalman.com/projects/jquery-postmessage-plugin/
// GitHub       - http://github.com/cowboy/jquery-postmessage/
// Source       - http://github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.js
// (Minified)   - http://github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.min.js (0.9kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates one
// way in which this plugin can be used.
// 
// Iframe resizing - http://benalman.com/code/projects/jquery-postmessage/examples/iframe/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with and what browsers it has been tested in.
// 
// jQuery Versions - 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 3, Safari 3-4, Chrome, Opera 9.
// 
// About: Release History
// 
// 0.5 - (9/11/2009) Improved cache-busting
// 0.4 - (8/25/2009) Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  // A few vars used in non-awesome browsers.
  var interval_id,
    last_hash,
    cache_bust = 1,
    
    // A var used in awesome browsers.
    rm_callback,
    
    // A few convenient shortcuts.
    window = this,
    FALSE = !1,
    
    // Reused internal strings.
    postMessage = 'postMessage',
    addEventListener = 'addEventListener',
    
    p_receiveMessage,
    
    // I couldn't get window.postMessage to actually work in Opera 9.64!
    has_postMessage = window[postMessage] && !$.browser.opera;
  
  // Protect against multiple loading
  if (!$[postMessage]) {
  
  // Method: jQuery.postMessage
  // 
  // This method will call window.postMessage if available, setting the
  // targetOrigin parameter to the base of the target_url parameter for maximum
  // security in browsers that support it. If window.postMessage is not available,
  // the target window's location.hash will be used to pass the message. If an
  // object is passed as the message param, it will be serialized into a string
  // using the jQuery.param method.
  // 
  // Usage:
  // 
  // > jQuery.postMessage( message, target_url [, target ] );
  // 
  // Arguments:
  // 
  //  message - (String) A message to be passed to the other frame.
  //  message - (Object) An object to be serialized into a params string, using
  //    the jQuery.param method.
  //  target_url - (String) The URL of the other frame this window is
  //    attempting to communicate with. This must be the exact URL (including
  //    any query string) of the other window for this script to work in
  //    browsers that don't support window.postMessage.
  //  target - (Object) A reference to the other frame this window is
  //    attempting to communicate with. If omitted, defaults to `parent`.
  // 
  // Returns:
  // 
  //  Nothing.
  
  $[postMessage] = function( message, target_url, target ) {
    if ( !target_url ) { return; }
    
    // Serialize the message if not a string. Note that this is the only real
    // jQuery dependency for this script. If removed, this script could be
    // written as very basic JavaScript.
    message = typeof message === 'string' ? message : $.param( message );
    
    // Default to parent if unspecified.
    target = target || parent;
    
    if ( has_postMessage ) {
      // The browser supports window.postMessage, so call it with a targetOrigin
      // set appropriately, based on the target_url parameter.
      target[postMessage]( message, target_url.replace( /([^:]+:\/\/[^\/]+).*/, '$1' ) );
      
    } else if ( target_url ) {
      // The browser does not support window.postMessage, so set the location
      // of the target to target_url#message. A bit ugly, but it works! A cache
      // bust parameter is added to ensure that repeat messages trigger the
      // callback.
      target.location = target_url.replace( /#.*$/, '' ) + '#' + (+new Date) + (cache_bust++) + '&' + message;
    }
  };
  
  // Method: jQuery.receiveMessage
  // 
  // Register a single callback for either a window.postMessage call, if
  // supported, or if unsupported, for any change in the current window
  // location.hash. If window.postMessage is supported and source_origin is
  // specified, the source window will be checked against this for maximum
  // security. If window.postMessage is unsupported, a polling loop will be
  // started to watch for changes to the location.hash.
  // 
  // Note that for simplicity's sake, only a single callback can be registered
  // at one time. Passing no params will unbind this event (or stop the polling
  // loop), and calling this method a second time with another callback will
  // unbind the event (or stop the polling loop) first, before binding the new
  // callback.
  // 
  // Also note that if window.postMessage is available, the optional
  // source_origin param will be used to test the event.origin property. From
  // the MDC window.postMessage docs: This string is the concatenation of the
  // protocol and "://", the host name if one exists, and ":" followed by a port
  // number if a port is present and differs from the default port for the given
  // protocol. Examples of typical origins are https://example.org (implying
  // port 443), http://example.net (implying port 80), and http://example.com:8080.
  // 
  // Usage:
  // 
  // > jQuery.receiveMessage( callback [, source_origin ] [, delay ] );
  // 
  // Arguments:
  // 
  //  callback - (Function) This callback will execute whenever a <jQuery.postMessage>
  //    message is received, provided the source_origin matches. If callback is
  //    omitted, any existing receiveMessage event bind or polling loop will be
  //    canceled.
  //  source_origin - (String) If window.postMessage is available and this value
  //    is not equal to the event.origin property, the callback will not be
  //    called.
  //  source_origin - (Function) If window.postMessage is available and this
  //    function returns false when passed the event.origin property, the
  //    callback will not be called.
  //  delay - (Number) An optional zero-or-greater delay in milliseconds at
  //    which the polling loop will execute (for browser that don't support
  //    window.postMessage). If omitted, defaults to 100.
  // 
  // Returns:
  // 
  //  Nothing!
  
  $.receiveMessage = p_receiveMessage = function( callback, source_origin, delay ) {
    if ( has_postMessage ) {
      // Since the browser supports window.postMessage, the callback will be
      // bound to the actual event associated with window.postMessage.
      
      if ( callback ) {
        // Unbind an existing callback if it exists.
        rm_callback && p_receiveMessage();
        
        // Bind the callback. A reference to the callback is stored for ease of
        // unbinding.
        rm_callback = function(e) {
          if ( ( typeof source_origin === 'string' && e.origin !== source_origin )
            || ( $.isFunction( source_origin ) && source_origin( e.origin ) === FALSE ) ) {
            return FALSE;
          }
          callback( e );
        };
      }
      
      if ( window[addEventListener] ) {
        window[ callback ? addEventListener : 'removeEventListener' ]( 'message', rm_callback, FALSE );
      } else {
        window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );
      }
      
    } else {
      // Since the browser sucks, a polling loop will be started, and the
      // callback will be called whenever the location.hash changes.
      
      interval_id && clearInterval( interval_id );
      interval_id = null;
      
      if ( callback ) {
        delay = typeof source_origin === 'number'
          ? source_origin
          : typeof delay === 'number'
            ? delay
            : 100;
        
        interval_id = setInterval(function(){
          var hash = document.location.hash,
            re = /^#?\d+&/;
          if ( hash !== last_hash && re.test( hash ) ) {
            last_hash = hash;
            callback({ data: hash.replace( re, '' ) });
          }
        }, delay );
      }
    }
  };
  
  } // End outer conditional to protect against multiple loading
})(jQuery);
/*!
 * kohls.frame.js
 * ***** THIS WILL EVENTUALLY BE RENAMED TO kohls.box.js TO REPLACE EXISTING kohls.box.js *****
 * FancyBox API with cross-frame communication support
 * Copyright 2015, Kohl's Corporation
 * Author: Bill Hubbard
 */
/*
	This is intended to replace kohls.iframeMgr.js and kohls.box.js.
	
	KJS dependencies:
	  - Kjs namespace
	  - Kjs.global
	  - Kjs.extend
	  - Kjs.descend
	  - Kjs.bind
	  - Kjs.bindEx
	  - Kjs._

	All of the above are included in kohls.guts.js.
	
	Unit Test Harness:
	
	Unit test will define $module('frame', {unitTest: true}) before loading this module.
	Therefore, env.unitTest will be true, which will enable unit test history entries.
	
	POTENTIAL ISSUES:
	
	- Edge Case:
		There is a delay when closing a box before the child listener is removed (1 second).
		This was added to allow unload trace messages to be received from the child frame for
		the unit test harness. This delay is bypassed in the wizard scenario to avoid this
		potential issue. However, if a box is closed and a new box is opened, within this
		one-second delay, this could theoretically cause the child listener for the new box
		to be removed after the delay fires. 
*/
$module('frame', function(log, env, module, Kjs) {
	var
		_slice = Array.prototype.slice,
		_history = Kjs.history,
	
    	// Flag to indicate if this is a (child) frame
		_isChild = (window.parent != window),	// Determine if running in a frame
    	
		// Frame properties
		_currentFrame = {},	// Properties of the current frame
		_parentFrame = {},	// Properties of parent frame & its connection, if any
		_childFrame = {},	// Properties of child frame & its connection, if any
		
		// Common strings
		_selClose = 'a#fancybox-close',
		
		_idTabStart = 'frame-tab-start',
		_idTabEnd = 'frame-tab-end',
		_selTabStart = '#' + _idTabStart,
		_selTabEnd = '#' + _idTabEnd,
		
    	// onClosed handler checks for this to see if opening a new fancybox
    	_openCfg,
		
		// Message listener registry, keyed by origin
		_listeners = {},

		// Fancybox default config for everything except iframe type
		_defFancy = {
			autoScale: false,
			width: 480,
			titleShow: false,
			hideOnOverlayClick: false,
			transitionIn: 'none',
			transitionOut: 'none'
		},

		// Fancybox default config for iframe type
		_defFancyIFrame = {
			autoScale: false,
			width: 480,
			titleShow: false,
			hideOnOverlayClick: false,
			transitionIn: 'none',
			transitionOut: 'none',
			scrolling: 'no',
			autoDimensions: false
		},
		
		// Default $box options
		_defBox = {
			openTimeout: 2000,		// Default maximum timeout wait for iframe fancybox to open
			onFrameLoadDelay: 200,	// Default delay between iframe onload and making fancybox visible
			useCustomCSS: true		// Whether to override certain CSS classes
		},
		
		// Unit test harness to record unit test entries
		// _trace gets defined by default in child windows, and if env.unitTest is true.
		// Parent responds to identify request from child frame to nullify this if
		// env.unitTest is not true, or to forward trace calls in the child frame to the parent.
		// Child frame will also send accumulated trace history following receipt of identity message.
		// _trace(src, info, obj)
		// _trace(src, obj)
		// _trace(obj)
		// src = Method name or other id to identify origin of entry
		// info = Information string describing the entry
		// data = Any additional data (object)
		_trace = (_isChild || env.unitTest) ? function(src, info, data) {
			// Normalize params
			if (typeof data == 'object') {
				data = Kjs.descend(data, {
					info: info,
					src: src
				});
			} else if (typeof info == 'object') {
				data = Kjs.descend(info, {
					src: src
				});
			} else if (typeof src == 'object') {
				data = Kjs.descend(src);
			} else {
				data = {
					src: src,
					info: info||src
				}
			}
			// Normalize data object
			data = Kjs.extend({
				isChild: _isChild,
				src: data.src||'unknown',
				info: data.info||''
			}, data);
			// Report trace event to any listeners
			Kjs.message.send('trace', module, data);
			// Record entry into history log
			return _history.add(_history.hType.unit, {
				module: module,
				data: data
			});
		} : null,
				
		// Set document domain if not in IP or localhost environment (i.e. if in production)
		_setDomain = function() {
			Kjs.errors.exec(function _$exec_setdomain() {
		    	var 
		    		ipRE = new RegExp('^[0-9]+\.[0-9]+\.[0-9]+\.[0.9]+'),
					lpRE = new RegExp('^localhost+'),
					host = window.location.host,
					href = window.location.href,
					ref = document.referrer||'',
					domainName = document.domain,
					pathArray, arrLength
				;
		    	//[*] Not sure if quickview check is needed, as this may be antiquated, but was borrowed from custom.js
				if (!ipRE.test(host) && !lpRE.test(host) && href.indexOf('quickview') == -1 && ref.indexOf('quickview') == -1) {
					pathArray = host.split('.');
			        arrLength = pathArray.length;
			        domainName = pathArray.slice(arrLength - 2, arrLength).join('.');
				}
				document.domain = domainName;	// Firefox needs it to be set to itself for some reason.
    			if (_trace) _trace('_setDomain', 'document.domain = ' + domainName, {domainName: domainName});
			}, {
				//[*] Define failure handler to log host, href, ref and domainName values
				info: 'frame._setDomain to establish document.domain on load'
			});
		},
		
		// Extracts protocol and domain from origin, otherwise returns '*'
		_getDomain = function(origin) {
			var domain;
			if (origin) {
				domain = origin.match(/(^https?\:\/\/)([^\/:?#]+)(?:[\/:?#]|$)/i);
				domain = domain ? (domain[1] + domain[2]) : '*';
			} else {
				domain = '*';
			}
			return domain;
		},

		// Invoke listener(s) targeted for a specified origin.
		// Also invokes any listener(s) registered for '*' origin, whether specific origin listeners exist or not.
		// This gets called from the central listener, and also gets called directly (from _postMsg) in the child 
		// frame in same-origin configuration when direct access is possible.
		// data = data object to pass to listener(s)
		// origin = origin of *sender*
		_post = function(data, origin) {
			// For specified origin:
			origin = _getDomain(origin);
			var ftns = [].concat(_listeners[origin]||[]), listener;
			if (!ftns.length && log.info.enabled) log.info('No message listener registered for origin ' + origin + ' (' + (data||{}).cmd + ')');
			while (ftns.length) {
				listener = ftns.shift();
    			if (_trace && data.cmd != 'trace') _trace('_post', $s('Calling listener ${n} for message from ${origin} = ${cmd}',{n:ftns.length, origin: origin, cmd: data.cmd}), {cmd: data.cmd});
				listener.call(this, data);
			}
			// For '*' origin:
			ftns = [].concat(_listeners['*']||[]);
			if (ftns.length && log.info.enabled) log.info('Invoking listeners for "*" origin for message from ' + origin);
			while (ftns.length) {
				listener = ftns.shift();
    			if (_trace && data.cmd != 'trace') _trace('_post', 'Calling listener for "*" origin for message from ' + origin, {cmd: data.cmd});
				listener.call(this, data);
			}
		},

		// Central channel for posting a message to parent frame.
		// If the parent is directly accessible, the parent API is called,
		// otherwise the postMessage plug-in is utilized and data is sent as JSON string.
		// NOTE: _postMsg calls _post IN THE OTHER FRAME, via its box API
		// NOTE: Cannot call _trace from this function, as _trace may be defined to post a message
		//       to the parent frame, in which case, it would circle back here ... endlessly.
		_postMsg = function(frame, data, origin) {
			//[*] For some reason, closing and re-opening a fancybox breaks communication when parent and child are in the same origin.
			//    Forcing to always use Web Messaging works, but may not be desirable.
			//    UPDATE: Code restored - not sure what breaks communication
			if (frame.box) {
				// Direct call TO OTHER FRAME
				Kjs._(function() {
//	    			if (_trace) _trace('_postMsg', 'Making same-origin call to post message ' + data.cmd, {cmd: data.cmd}); //[*] This will create infinite recursion
					frame.box.post(data, _currentFrame.origin);
				});
			} else if (frame.frame) {
				// Send via message to other frame
				origin = origin||frame.origin;
				if (origin == '*') {
					log.warn('Sending message to "*" origin', JSON.stringify(data));
				}
//    			if (_trace) _trace('_postMsg', 'Making cross-origin call to post message ' + data.cmd, {cmd: data.cmd}); //[*] This will create infinite recursion
				$.postMessage(JSON.stringify(data), origin, frame.frame);
			} else {
				var which = (frame == _parentFrame) ? 'parent' : 'child';
				log.warn({msg: 'Attempt to send a message to ${which} frame, but no link has been established.', which: which}, data);
			}
		},
		
		// Convenient _postMsg wrapper for posting a message to parent frame.
		_parentMsg = function(data, origin) {
			_postMsg(_parentFrame, data, origin);
		},

		// Convenient _postMsg wrapper for posting a message to child frame.
		_childMsg = function(data, origin) {
			_postMsg(_childFrame, data, origin);
		},
		
		// ----
		
		// Removes a previously registered listener
		// listener = listener function previously registered with _listener
		// origin = origin from which to accept messages (default = '*')
		_removeListener = function(listener, origin) {
			origin = _getDomain(origin);
			var ftns = _listeners[origin]||[], idx = ftns.length;
			while (idx--) {
				if (ftns[idx] == listener) {
					ftns.splice(idx, 1);
				}
			}
			_listeners[origin] = ftns;
		},
		
		// Registers a listener for messages from a specific origin.
		// Allows multiple listeners per origin
		// Listeners are bound to a specified origin, so only get called if a message arrives
		// from the specified origin. If no origin is specified, '*' is the default, which
		// allows the listener to get called for messages arriving from any origin.
		// listener = listener function, with calling signature listener(event, data)
		// origin = origin from which to accept messages (default = '*')
		_listener = function(listener, origin) {
			origin = _getDomain(origin);
			var ftns = _listeners[origin]||[], dupe;
			$.each(ftns, function(idx, value) {
				dupe = (value == listener);
				return !dupe;
			});
			if (dupe) {
				log.warn('Duplicate listener assigned to origin ' + origin + ' - ignored');
			} else {
				if (ftns.length) {
					log.warn('Multiple listeners assigned to origin ' + origin);
				}
				ftns.push(listener);
				_listeners[origin] = ftns;
			}
		},
    	
		//[*] Why is this needed? -- REMOVE INLINE STYLE! CONVERT TO CSS CLASS
		_addModalFancyboxClasses = function() {
		    $('#fancybox-content').addClass('modal-fancybox-content');
		    $(_selClose).addClass('modal-fancybox-close').addClass('custom_fancybox_close_btn').attr('title','Close overlay');
		},

		//[*] Why is this needed?
		_removeModalFancyboxClasses = function() {
		    $('#fancybox-content').removeClass('modal-fancybox-content');
		    $(_selClose).removeClass('modal-fancybox-close').removeClass('custom_fancybox_close_btn').attr('title','');
		},
		
		// Fancybox open timer
		// When a fancybox is opened, the onStart event starts a 2-second (configurable) timer
		// to eventually fire an onBoxLoaded event which will display the fancybox. This is a fail-safe
		// to kick in if the content does not send an identify message. If an identify message is
		// received, the timer is cancelled and the onBoxLoaded event is fired to display the fancybox.
		// The original fancybox implementation set a static 2-second timer, but this method will
		// allow the content to display sooner if it reports ready before the timeout.
		// This applies to all fancybox types
		_openTimeout = (function() {
			var
				_t, _opt,

				// Fires onBoxLoaded event, if defined
				_onLoaded = function(opt) {
					if (_trace) _trace('_openTimeout._onLoaded', 'triggers _onBoxLoaded');
					$.fancybox.hideActivity();
					if (opt._onBoxLoaded) {
						Kjs._(function() {
							opt._onBoxLoaded.call(opt);							
						});
					}
				},
				
				_isRunning = function() {
					return !!_t;
				},
				
				// Cancels fancybox open timeout, averting onBoxLoaded event
				_cancel = function() {
					var cancelled = _isRunning();
					if (cancelled) {
						clearTimeout(_t);
						_t = null;
						if (_trace) _trace('_openTimeout._cancel', 'cancelled');
					}
					return cancelled;
				},
				
				// Clears fancybox open timeout, invoking onBoxLoaded event
				_clear = function() {
					if (_trace) _trace('_openTimeout.clear');
					var cancelled = _cancel(); 
					if (cancelled) {
						_onLoaded(_opt);
					}
					return cancelled;
				},
				
				// Timeout execution 
				_timeout = function(event) {
					log.warn('Fancybox open timeout expired.');
					if (_trace) _trace('_openTimeout._timeout', 'expired');
					_clear();
				},
				
				// Sets fancybox open timeout
				_set = function(opt) {
					_cancel();
					_opt = opt;
					_t = setTimeout(_timeout, opt.openTimeout);
					if (_trace) _trace('_openTimeout.set');
				}
			;
			
			return {
				set: _set,				// Set the timeout
				clear: _clear,			// Clear the timeout and fire onBoxLoaded event
				cancel: _cancel,		// Cancel the timeout without firing onBoxLoaded event
				isRunning: _isRunning	// Reports if timeout is running or not
			};
		})(),
		
		// Timeout timer when establishing communication link from child to parent
		// on startup.
		_linkTimeout = (function() {
			var
				_t,
				_pending,
				_clear = function(restart) {
					if (_t) {
						clearTimeout(_t);
						_t = null;
						if (!restart && _pending) {
							$sync(0, '$box _linkTimeout.clear');
							_pending = false;
							if (_trace) _trace('_linkTimeout.clear');
						}
						_pending = false;
					}
				},
				_timeout = function() {
					log.warn('Link timeout expired.');
					if (_trace) _trace('_linkTimeout._timeout', 'expired');
					_clear();
				},
				_set = function() {
					_clear(true);
					if (!_pending) {
						$sync(1, '$box _linkTimeout.set');
						_pending = true;
					}
					_t = setTimeout(_timeout, 1000);
					if (_trace) _trace('_linkTimeout.set');
				}
			;
			return {
				set: _set,
				clear: _clear
			};
		})(),

		// =========== Wrappers for fancybox event handlers ==============

    	// Custom handler to respond to iframe content loading after receiving identify request from frame.
		// This gets called when the fancybox open timer expires or is reset by an identify request.
    	// For iframe fancyboxes only
		// This handler does not carry any additional arguments normally found in fancybox event handlers
    	_onBoxLoaded = function(fb) {
			if (_trace) _trace('_onBoxLoaded');
    		var opt = this;
			try {
				_childFrame.box = _childFrame.frame.$box;
			} catch(e) {
				// Ignore any exception
			}
    		if (opt.onLoad) {
    			if (_trace) _trace('_onBoxLoaded', 'calling opt.onLoad');
    			opt.onLoad.call(opt, fb);
    		}
    		// Request size information from child frame
    		//[*] Issue: When child frame uses $box API, this event occurs before _onBoxFrameLoad.
    		//    This also occurs before size information is received from the child frame.
    		//    Therefore, revealing here may be premature, but may be necessary to get necessary
    		//    size information as revealing here may affect that.
    		if (opt.onSize) {
    			if (_trace) _trace('_onBoxLoaded', 'Sending size request to child');
    			_child.size();
    		} else {
    			$('#fancybox-outer').show();
    		}
    	},
		
    	// Proxy for fancybox onStart handler
    	// fb = fancybox options
    	// Additional arguments are received from fancybox event and passed along to onStart handlers
    	// Full calling signature: _onBoxStart(fb, selectedArray, selectedIndex, selectedOpts) - context = opt
    	// onStart(selectedArray, selectedIndex, selectedOpts) - context = fb
    	_onBoxStart = function(fb, elems, idx) {
			if (_trace) _trace('_onBoxStart');
    		var opt = this, rtn;

    		// Call any onStart handler defined in fancybox config
			if (opt.fancybox.onStart) {
				if (_trace) _trace('_onBoxStart', 'calling opt.fancybox.onStart');
				rtn = opt.fancybox.onStart.apply(fb, _slice.call(arguments, 1));
			}
			if (rtn !== false) {
	    		// Some custom mods
				if (opt.useCustomCSS) {
					_addModalFancyboxClasses();
				}
			}
			return rtn;
    	},
    	
    	// This event occurs on iframe type only and when the load event fires on the iframe.
    	// This is the window.load from the iframe content. If the child frame uses the $box
    	// API, it is likely it will report ready, first, thus _onBoxLoaded will fire first.
    	// But it's a bit of a tug-of-war to determine when to reveal the fancybox, as ideally
    	// that should happen after size information has been received, which may or may not
    	// come before _onBoxFrameLoad, and may not come at all of no onSize handler is given.
    	// So, the reveal will remain here as well as in _onBoxLoaded. If a size adjustment
    	// occurs, then a size adjustment occurs. The user will just have to be subjected to it.
    	_onBoxFrameLoad = function(event, fb) {
			if (_trace) _trace('_onBoxFrameLoad');
    		var opt = this;
    		Kjs._(function() {
    			if (_trace) _trace('_onBoxFrameLoad', 'after delay', {onFrameLoad: !!opt.onFrameLoad});
    			if (!_openTimeout.clear()) {
    				$('#fancybox-outer').show();
    				if (_trace) _trace('_onBoxFrameLoad', 'Show fancybox');
    			}
    			// Call onFrameLoad handler if defined
        		if (opt.onFrameLoad) {
        			if (_trace) _trace('_onBoxFrameLoad', 'onFrameLoad');
        			opt.onFrameLoad.call(opt, fb, $('#fancybox-frame').get(0));
        		}
    		}, opt.onFrameLoadDelay);
    		$('#fancybox-frame').off('load', opt._onBoxFrameLoad);
    		delete opt._onBoxFrameLoad;
    	},
    	
    	// Event handler for tabbing in and out of close button
    	_onCloseKeyDown = function(event, fb) {
    		var opt = this;
    		if ((event.keyCode||event.which) == 9) {
    			event.preventDefault();
    		//	event.stopPropagation();
    			$(event.target).blur();
    			if (event.shiftKey) {
    				if (opt.fancybox.type == 'iframe') {
    					_child.tabBackward();	//[*] Pass in opt?
    				} else {
    					$(_selTabEnd).focus();
    				}
    			} else {
    				if (opt.fancybox.type == 'iframe') {
    					_child.tabForward();	//[*] Pass in opt?
    				} else {
    					$(_selTabStart).focus();
    				}
    			}
    		}
    		if ((event.keyCode||event.which) == 13) {
    			event.preventDefault();
    		//	event.stopPropagation();
    			Kjs._(function() {
    				$(event.target).click(); 
    			});
    		}
    	},

		// Responds to keydown for iframe tab ordering on the first input field in the frame
		_onTabStartKeydown = function(event) {
    		var opt = this;
			if ((event.keyCode||event.which) == 9 && event.shiftKey) {
				event.preventDefault();
				$(opt.selClose||_selClose).focus();
			}
		},

		// Responds to keydown for iframe tab ordering on the last input field in the frame
		_onTabEndKeydown = function(event) {
    		var opt = this;
			if ((event.keyCode||event.which) == 9 && !event.shiftKey) {
				event.preventDefault();
				$(opt.selClose||_selClose).focus();
			}
		},

		// onComplete handler
    	// fb = fancybox options
    	// Additional arguments are received from fancybox event and passed along to onComplete handlers
		_onBoxComplete = function(fb, elems, idx) {
    		var opt = this;
			if (_trace) _trace('_onBoxComplete');
   			// Install tab key handler on close button for ADA
    		opt._onCloseKeyDown = Kjs.bindEvent(opt, _onCloseKeyDown, fb);
   			$(opt.selClose||_selClose).on('keydown', opt._onCloseKeyDown).attr('tabindex','0');
    		// For iframe type, install any onFrameLoad handler and define child frame info
    		if (fb.type == 'iframe') {
    			// Identify child frame 
				Kjs.extend(_childFrame, {
	    			frame: $('iframe#fancybox-frame')[0].contentWindow,
	    			href: fb.href,
	    			origin: _origin(fb.href)
				});
				try {
					_childFrame.box = _childFrame.frame.$box;
				} catch(e) {
					// Ignore any error - if failure, communication will occur through Web Messaging
				}
				// Install message receiver handler to listen to messages from child frame
	 			_child.listen(opt);
	 			// Start open timer
	    		_openTimeout.set(opt);
	    		// Provide onBoxLoaded handler - fired on open timeout or when timeout is cancelled by receipt of identify message
    			opt._onBoxLoaded = Kjs.bind(opt, _onBoxLoaded, fb);
    			// Hide box during initial load - gets shown in onBoxLoaded event in openTimeout
    			$('#fancybox-outer').hide();
    			// Install onBoxFrameLoad handler - fired on iframe load event
    			opt._onBoxFrameLoad = Kjs.bindEvent(opt, _onBoxFrameLoad, fb);
       			$('#fancybox-frame').on('load', opt._onBoxFrameLoad);
        		// By default, set focus on the close button, initially
       			$(opt.selClose||_selClose).focus(); 
    		} else {
    			var htmlMarkerImg = '<img alt="inactive marker" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" style="display:block;line-height:0;height:1px;width:1px;"/>';
				$('<a href="javascript:void(0)" id="' + _idTabStart + '" tabindex="0" style="position:absolute;top:0;">&nbsp;' + htmlMarkerImg + '</a>').prependTo('#fancybox-content');
				$('<a href="javascript:void(0)" id="' + _idTabEnd + '" tabindex="0" style="position:absolute;top:0;">&nbsp;' + htmlMarkerImg + '</a>').appendTo('#fancybox-content');
				opt._onTabStartKeydown = Kjs.bindEvent(opt, _onTabStartKeydown);
				opt._onTabEndKeydown = Kjs.bindEvent(opt, _onTabEndKeydown);
				$(_selTabStart).on('keydown', opt._onTabStartKeydown);
				$(_selTabEnd).on('keydown', opt._onTabEndKeydown);
				$(_selTabStart).focus();
			}
    		// Call any onComplete handler defined in fancybox config
			if (opt.fancybox.onComplete) {
				if (_trace) _trace('_onBoxComplete', 'calling opt.fancybox.onComplete');
				opt.fancybox.onComplete.apply(fb, _slice.call(arguments, 1));
			}
		},
    	
    	// onClosed handler
    	// fb = fancybox options
    	// Additional arguments are received from fancybox event and passed along to onClosed handlers.
		// Additional arguments are not passed to onConclude handler.
		// This fires two close events. onClosed is called whenever a fancybox is closed, regardless
		// of whether another box is about to be opened.
		// onConclude will fire only if the fancybox is closing with no open pending.
    	_onBoxClosed = function(fb, elems, idx) {
			if (_trace) _trace('_onBoxClosed');
    		var opt = this, elem;
    		// Remove custom mods
    		if (opt.useCustomCSS) {
    			_removeModalFancyboxClasses();
    		}
    		// Remove tab key handler
   			$(opt.selClose||_selClose).off('keydown', opt._onCloseKeyDown);
   			delete opt._onCloseKeyDown;
    		// Call any onClosed handler defined in fancybox config
			if (opt.fancybox.onClosed) {
				if (_trace) _trace('_onBoxClosed', 'calling opt.fancybox.onClosed');
				opt.fancybox.onClosed.apply(fb, _slice.call(arguments, 1));
			}
    		// For iframe type, stop listening for messages from child
    		if (fb.type == 'iframe') {
    			//[*] I'm suspicious that this may be a problem in _parent.open() (wizard) scenario, as
    			//    _child.silence(opt) may silence the new listener for the next page being opened.
    			//    Therefore, the listener is removed immediately if openCfg is defined.
    			if (_openCfg) {
    				_child.silence(opt);
    			} else {
	    			Kjs._(function() {
	        			_child.silence(opt);    				
	    			}, 1000); // Time to capture unload trace messages from child
    			}
    		}
    		// If an open was specified, open a new fancybox, otherwise fire onConclude event
    		if (_openCfg) {
    			// Prevent overlay from hiding
    			if (fb.overlayShow) {
    				$('#fancybox-overlay').stop().show();
    			}
    			// New config is applied on top of existing config. This will retain
    			// original event handlers, since no handlers can be specified from child.
    			// It also means child should be as explicit as possible if it wants to
    			// display a completely different fancybox.
    			Kjs.extend(opt.fancybox, _openCfg);
    			// Discard
    			_openCfg = null;
    			_open(opt);
    		} else {
				if (opt.onConclude) {
					if (_trace) _trace('_onBoxClosed', 'calling opt.onConclude');
					opt.onConclude.call(opt, fb, elems, idx);
				}
    		}
			// Attempt to set focus on the link that opened the box.
    		// Whether this succeeds or fails depends partly on whether the link that opened the box
    		// gets removed or updated in the DOM after the box closes.
    		if (idx >= 0 && elems[idx]) {
    			elem = elems[idx];
    			Kjs._(function() {
    				if (elem && elem instanceof Element && $(elem).length) {
    					$(elem).focus();
    				} else if (opt.selBlur) {
    					$(opt.selBlur).focus();
    				}
    			}, 100);
    		} else if (opt.selBlur) {
	    		Kjs._(function() {
		    		$(opt.selBlur).focus();
	    		}, 100);
	    	}
    	},
    	
    	_onBoxCleanup = function(fb, elems, idx) {
			if (_trace) _trace('_onBoxCleanup');
    		var opt = this, rtn;
    		// Call any onCleanup handler defined in fancybox config
			if (opt.fancybox.onCleanup) {
				if (_trace) _trace('_onBoxCleanup', 'calling opt.fancybox.onCleanup');
				rtn = opt.fancybox.onCleanup.apply(fb, _slice.call(arguments, 1));
			}
			if (rtn !== false) {
				if (opt._onTabStartKeydown) {
					$(_selTabStart).off('click', opt._onTabStartKeydown).remove();
					delete opt._onTabStartKeydown;
				}
				if (opt._onTabEndKeydown) {
					$(_selTabEnd).off('click', opt._onTabEndKeydown).remove();
					delete opt._onTabEndKeydown;
				}
			}
			return rtn;
    	},
    	
    	// Error handler
//    	_onError = function(fb) {
//    		// Return false or nothing here to prevent the default fancybox
//    		// from appearing
//    		return true;
//    	},
    	
    	// ================================================================

    	// Compute the origin of a URL -- [*] Perhaps move to another module?
    	// If full URL is specified, origin is extracted from it.
    	// For partial URL, protocol is assume to be the same as current href.
    	// Note: port is excluded as, at Kohl's, if port differs, so will protocol (http vs. https)
		_origin = function(url) {
			var loc = Kjs.global.location;
			url = url||loc.origin||loc.href.match(/(^.*?\/\/.*?)\//)[1];
			if (url && url[0] == '/') {
				url = loc.host + url;
			} 
			if (!url.match(/^http.*?:\/\//)) {
				url = loc.protocol + '//' + url;
			}
			return url.match(/(^.*?\/\/.*?)(\/|$)/)[1];
		},
		
    	// Retrieve complete fancybox config based on provided options
    	// opt = $box.open options - bound to fancybox event handlers, also carries fancybox config options
    	_fancyboxCfg = function(opt) {
			var def = (opt.fancybox.type=='iframe') ? _defFancyIFrame : _defFancy;
    		return Kjs.descend(def, opt.fancybox, {
				onStart: Kjs.bindEx(opt, _onBoxStart),			// Before fancybox renders
				onComplete: Kjs.bindEx(opt, _onBoxComplete),	// After fancybox renders
				onCleanup: Kjs.bindEx(opt, _onBoxCleanup),		// Before fancybox closes
				onClosed: Kjs.bindEx(opt, _onBoxClosed)			// After fancybox closes
//				onError: _onError
//				onCancel: 
    		});
    	},
    	
		// Defines id info for parent frame - only gets called if Web Messaging is used
		_setParentId = function(data) {
    		if (_trace) _trace('_setParentId', 'Parent id established.');
    		var opt = this;
    		// Stop listening to messages from parent
    		_parent.silence(opt);
    		// Update parent frame info
			Kjs.extend(_parentFrame, {
				href: data.href,
				origin: data.origin,
				frame: _parentFrame.frame||parent
			});
			// Start listening to messages from parent
			_parent.listen(opt);
    	},
    	
    	// Defines id info for child frame - only gets called if Web Messaging is used
    	_setChildId = function(data) {
    		if (_trace) _trace('_setChildId', 'Child id established.');
    		var opt = this;
    		// Stop listening to messages from child
    		_child.silence(opt);
    		// Update child frame info
			Kjs.extend(_childFrame, {
				href: data.href,
				origin: data.origin
				// frame is previously defined in open command
			});
			try {
				if (_childFrame.origin == _currentFrame.origin) {
					_childFrame.box = _childFrame.frame.$box;
				}
			} catch(e) {
				// Ignore any failure
			}
			// Start listening to messages from child
			_child.listen(opt);
    	},
    	
		// ----- Parent API - for controlling parent frame -----
		_parent = {
    		// Remove listener to no longer receive messages from parent
			silence: function(opt) {
				if (_trace && opt._parentListener) _trace('_parent.silence', 'Deactivating parent message listener for child origin ' + (_parentFrame.origin||'*'));
				_removeListener(opt._parentListener, _parentFrame.origin);
			},
			
			// Assign message listener to listen to messages from parent
			// The opt options object provided here is bound to the _parentListener in a binding
			// that gets added to opt as opt._parentListener. This bound options object then becomes
			// available to all parent listener functions. In a child frame, however, there is not
			// options object available from the open command (which is in the parent frame), so if opt
			// is undefined here, a new, empty object is created. Since opt is returned from this function,
			// this object is attainable from the caller, if needed.
			listen: function(opt) {
				opt = opt||{};
				if (_trace) _trace('_parent.listen', 'Activating parent message listener for child origin ' + (_parentFrame.origin||'*'));
				opt._parentListener = Kjs.bindEx(opt, _parentListener); 
			    _listener(opt._parentListener, _parentFrame.origin);
			    return opt;
    		},

			// Add a custom parent listener
			listener: function(listener) {
				_listener(listener, _parentFrame.origin);
			},
			
			// Remove a custom parent listener
			removeListener: function(listener) {
				_removeListener(listener, _parentFrame.origin);
			},
			
			// Request id info from parent frame
			identify: function(opt) {
				if (opt) {
					// If opt is provided, no call is made to the parent - assume the supplied values, instead
					// Normalize params
					if (typeof opt == 'string') {
						opt = {href: opt};
					}
					if (opt.href && !opt.origin) {
						opt.origin = _origin(opt.href);
					}
					// Apply options provided to parent frame identity
					Kjs.extend(_parentFrame, {
						href: opt.href||_parentFrame.href,
						origin: opt.origin||_parentFrame.origin,
						frame: _parentFrame.frame||parent
					});
				} else {
					if (_trace) _trace('_parent.identify', 'Sending identify request to parent');
					_parentFrame.identityRequested = true;
					// No opt was provided, so send identify request to parent.
					// The identify request includes href and origin of current frame
//					if (_trace) _trace ('Child sending identify request to parent');
	    			_parentMsg({
	    				cmd: 'identify',
	    				href: _currentFrame.href,
	    				origin: _currentFrame.origin
	    			});
				}
			},
			
			// Send child document dimensions to parent
			size: function() {
				var
					doc = document.documentElement,
					body = document.body,
					size = {
						cmd: 'size',
						doc: {
							scrollHeight: doc.scrollHeight,
							clientHeight: doc.clientHeight,
							offsetHeight: doc.offsetHeight,
							scrollWidth: doc.scrollWidth,
							clientWidth: doc.clientWidth,
							offsetWidth: doc.offsetWidth
						},
						body: {
							scrollHeight: body.scrollHeight,
							clientHeight: body.clientHeight,
							offsetHeight: body.offsetHeight,
							scrollWidth: body.scrollWidth,
							clientWidth: body.clientWidth,
							offsetWidth: body.offsetWidth
						},
						height: Math.max(body.scrollHeight, doc.scrollHeight, body.clientHeight, doc.clientHeight, body.offsetHeight, doc.offsetHeight),
						width: Math.max(body.scrollWidth, doc.scrollWidth, body.clientWidth, doc.clientWidth, body.offsetWidth, doc.offsetWidth)
					}
				;
				if (_trace) _trace('_parent.size', 'Sending size dimensions to parent');
				_parentMsg(size);
			},
				
			// Commands the parent frame to adjust the iframe to specified or default settings.
			//[*] Revisit
			resize: function(opt) {
				var msg = {cmd: 'resize'};
				if (opt.height) msg.height = opt.height;
				if (opt.width) msg.width = opt.width;
				_parentMsg(msg);
			},
	
			// Commands the parent to close the current fancybox
			close: function() {
				if (_trace) _trace('_parent.close', 'Commanding parent to close');
				_parentMsg({cmd: 'close'});
			},
	
			// Commands the parent to close current fancybox and open a new one
			open: function(opt) {
				if (_trace) _trace('_parent.open', 'Commanding parent to open a new child');
				_parentMsg(Kjs.extend({cmd: 'open'}, opt));
			},
	
			// Commands the parent to navigate to a new location
			// url is the URL to which to navigate
			// cmd get set to 'link'
			link: function(url) {
				_parentMsg({cmd: 'link', url: url});
			},

			// Commands the parent to respond to forward tab arrival for input focus
			tabForward: function() {
				_parentMsg({cmd: 'tabForward'});
			},
			
			// Command the parent to respond to back-tab arrival for input focus
			tabBackward: function() {
				_parentMsg({cmd: 'tabBackward'});
			},

			// Send a custom message to the parent frame
			message: function(msg) {
				_parentMsg(msg);
			}

		},
		
		// ----- Child API - for controlling child frame -----
		_child = {
			// De-installs message listener to no longer receive messages from child
			silence: function(opt) {
				if (_trace && opt._childListener) _trace ('_child.silence', 'Deactivating message listener for messages from child origin ' + (_childFrame.origin||'*'));
	   			_removeListener(opt._childListener, _childFrame.origin);
			},

			// Installs message listener to receive messages from child
			listen: function(opt) {
				if (_trace) _trace('_child.listen', 'Activating message listener for messages from child origin ' + (_childFrame.origin||'*'));
				opt._childListener = Kjs.bindEx(opt, _childListener); 
			    _listener(opt._childListener, _childFrame.origin);
			    return opt;
			},
			
			// Add a custom child listener
			listener: function(listener) {
				_listener(listener, _childFrame.origin);
			},
			
			// Remove a custom child listener
			removeListener: function(listener) {
				_removeListener(listener, _childFrame.origin);
			},
			
			// Request size info from child
			size: function() {
    			if (_trace) _trace('_child.size', 'Sending size request to child');				
				_childMsg({cmd: 'size'});
			},
			
			// Request id info from child frame
			identify: function() {
    			if (_trace) _trace('_child.identify', 'Sending identify request to child');
				_childFrame.identityRequested = true;
    			_childMsg({
    				cmd: 'identify',
    				href: _currentFrame.href,
    				origin: _currentFrame.origin
    			}, '*');
			},

			// Request child respond to forward tab arrival for input focus
			tabForward: function() {
				_childMsg({cmd: 'tabForward'});
			},
			
			// Request child respond to back-tab arrival for input focus
			tabBackward: function () {
				_childMsg({cmd: 'tabBackward'});
			},

			// Send a custom message to the child frame
			message: function(msg) {
				_childMsg(msg);
			}
		},

	    // Fancybox communication listener to receive messages from child frame
		// event = message event object
		//[*] Fire onChildMessage even for known messages? With ability to override default behavior?
	    _childListener = function _$childlistener(event, data) {
    		data = Kjs.descend(data);
	    	var cmd = data.cmd, opt = this;
	    	delete data.cmd;
	    	switch (cmd) {
	    		// Child requests identity update
	    		case 'identify':
	    			if (_trace) _trace('_childListener', 'Identify message received from child');
	    			// Update child frame info
	    			_setChildId.call(opt, data);
	    			// Report current frame info to child. If env.unitTest is true,
	    			// this will trigger a history response for unit test history.
	    			if (_trace) _trace('_childListener', 'Reporting parent id to child');
	    			_childMsg({
	    				cmd: 'identity',
	    				href: _currentFrame.href,
	    				origin: _currentFrame.origin,
	    				unitTest: !!env.unitTest
	    			});
	    			// Trigger onBoxLoaded event if open timer is running
	    			_openTimeout.clear();
	    			break;
	    		// Child has provided identity info
	    		case 'identity':
	    			if (_childFrame.identityRequested) {
	    				delete _childFrame.identityRequested;
		    			if (_trace) _trace('_childListener', 'Identity message received from child');
		    			_setChildId.call(opt, data);
	    			} else {
	    				log.warn('Unsolicited identity request received from child - ignored');
	    			}
	    			break;
	    		// Child requests a new fancybox
		    	case 'open':
	    			if (_trace) _trace('_childListener', 'Open message received from child');
					_openCfg = data;	// Prepare config for fancybox to open
		    		_close(); 			// Close handler will trigger open - do not pass in opt, to avoid selBlur focus
		    		break;
		    	// Child has delivered dimension/size data
		    	case 'size':
		    		if (_trace) _trace('_childListener', 'Size message received from child');
		    		// Fire onSize event
		    		if (opt.onSize) {
//		    			opt.onSize.call(opt, event, data, $('#fancybox-frame').get(0));
		    			opt.onSize.call(opt, data, $('#fancybox-frame').get(0));
		    		}
					$('#fancybox-outer').show();
		    		break;
		    	// Child requests resize
		    	case 'resize':
	    			if (_trace) _trace('_childListener', 'Resize message received from child');
		        	_resize(data);
		        	break;
		        // Child requests fancybox to be closed
		    	case 'close':
	    			if (_trace) _trace('_childListener', 'Close message received from child');
		    		_close(opt);
		    		break;
		    	// Child requests navigation within same fancybox (new url)
		    	case 'link':
	    			if (_trace) _trace('_childListener', 'Link message received from child');
		    		setTimeout(function() { location.href = data.url; }, 25);
		    		_close(opt);
		    		break;
		    	case 'tabForward':
//		    		log.info('Tab forward message received from child - set focus on close button');
		    		if (opt.fancybox.showCloseButton === false) {
		    			_child.tabForward();
		    		} else {
		    			Kjs._(function() { $(opt.selClose||_selClose).focus(); });
		    		}
		    		break;
		    	case 'tabBackward':
//		    		log.info('Tab backward message received from child - set focus on close button');
		    		if (opt.fancybox.showCloseButton === false) {
		    			_child.tabForward();
		    		} else {
		    			Kjs._(function() { $(opt.selClose||_selClose).focus(); });
		    		}
		    		break;
		    	case 'history':
		    		// Unit test history received from child
		    		if (_trace) {
		    			_trace('_childListener', 'History received from child');
		    			$.each(data.history, function(i, entry) {
		    				_history.add(_history.hType.unit, entry);
		    			});
		    		}
		    		break;
		    	case 'trace':
		    		// Unit test trace entry received from child
		    		if (_trace) _trace(data.src, data.info, data.data);
		    		break;
		    	default:
//		    		log.info('Unrecognized command received from child: ' + cmd);
		    	 	data.cmd = cmd;
		    	 	if (opt.onChildMessage) {
//		    			log.info('Calling onChildMessage');
		    			opt.onChildMessage.call(opt, event, data);
		    		}
		    		break;
	    	}
	    },

	    // Fancybox communication listener to receive messages from parent frame
		// event = message event object
		//[*] Fire onParentMessage even for known messages? With ability to override default behavior?
	    _parentListener = function _$parentlistener(event, data) {
	    	data = Kjs.descend(data);
	    	var cmd = data.cmd, opt = this;
	    	delete data.cmd;
	    	switch (cmd) {
	    		// Parent requests identity update
	    		case 'identify':
	    			if (_trace) _trace('_parentListener', 'Identify message received from parent');
	    			_setParentId.call(opt, data);
	    			if (_trace) _trace('_parentListener', 'Reporting child id to parent');
	    			_parentMsg({
	    				cmd: 'identity',
	    				href: _currentFrame.href,
	    				origin: _currentFrame.origin
	    			});
	    			break;
	    		// Identity update received from parent
	    		case 'identity':
	    			if (_parentFrame.identityRequested) {
	    				delete _parentFrame.identityRequested;
	    				// Nullify unit test trace function in child if unit test is disabled in parent
		    			if (_trace) _trace('_parentListener', 'Identity message received from parent');
	    				if (!data.unitTest) {
	    					// Unit test trace is disabled
	    					_trace = null;
	    				} else if (_trace) {
	    					// Unit test trace is enabled
	    					// Send trace history to parent
	    					_parentMsg({
	    						cmd: 'history',
	    						history: _history.get([Kjs.history.hType.unit])
	    					});
	    					// Close the trace log in child frame and redirect trace to parent log
    						//[*] The question remains as to whether to keep the child log open.
			    			if (_trace) _trace('_parentListener', 'Child frame trace log closed');
	    					_trace = function(src, info, data) {
	    						_parentMsg({
	    							cmd: 'trace',
	    							src: src,
	    							info: info,
	    							data: Kjs.extend(data, {isChild: true})
	    						});
	    					};
	    				}
//		    			if (_trace) _trace('_parentListener', '_trace now redirected to parent');
		    			_linkTimeout.clear();
		    			_setParentId.call(opt, data);
	    			} else {
	    				log.warn('Unsolicited identity request received from parent - ignored');
	    			}
	    			break;
	    		// Parent requests size information from child
	    		case 'size':
	    			if (_trace) _trace('_parentListener', 'Size information requested from parent');
	    			_parent.size(); // Send size info to parent
	    			break;
		    	case 'tabForward':
//		    		log.info('Tab forward message received from parent');
		    		if (opt.onTabForward) {
		    			opt.onTabForward.call(opt);
		    		}
		    		break;
		    	case 'tabBackward':
//		    		log.info('Tab backward message received from parent');
		    		if (opt.onTabBackward) {
		    			opt.onTabBackward.call(opt);
		    		}
		    		break;
		    	default:
//		    		log.info('Unrecognized command received from parent: ' + cmd);
		    		data.cmd = cmd;
		    		if (opt.onParentMessage) {
//		    			log.info('Calling onParentMessage');
		    			opt.onParentMessage.call(opt, event, data);
		    		}
		    		break;
	    	}
	    },

	    // ----
	    
		// Close any opened fancybox in current frame
		_close = function _$close(opt) {
	    	if (_trace) _trace('_close');
	    	opt = opt||{};
	    	//[*] If no fancybox has been opened, and this is a child frame,
	    	//    call _parent.close(), instead?
			$.fancybox.close();
		},

		// Resize opened fancybox in current frame
		_resize = function _$resize(opt) {
	    	if (_trace) _trace('_resize');
			//[*] Pick up predefined sizes?
			//[*] If no fancybox has been opened, and this is a child frame,
			//    call _parent.resize(opt), instead?
			if (opt) {
	        	$('#fancybox-content').css(opt);
	        	if (opt.width) {
	        		$('#fancybox-wrap').width((+opt.width)+20);
	        	}
			}
			$.fancybox.resize();
		},
		
		// Creates and opens a fancybox from url and config options provided.
		_open = function _$open(url, opt) {
			if (_trace) _trace('_open', 'Opening a child fancybox');
			// Normalize params
			if (typeof url == 'object') {			// In case url is opt
				opt = url;
				url = undefined;
			}
			opt = opt||{fancybox: {}};			// In case opt is null
			opt.fancybox = opt.fancybox||{};	// In case fancybox is undefined
			url = url||(opt.fancybox.href);		// In case url is undefined
			opt.fancybox.href = url;			// In case href is undefined

			opt = Kjs.descend(_defBox, opt);
			
	    	if (opt.selBlur) {
	    		$(opt.selBlur).blur();
	    	}
 			// Opens fancybox iframe with url
		    Kjs._(function() {
		    	$.fancybox( _fancyboxCfg(opt) ); 
		    }, 10);
		},
		
		// Wrapper for fancybox center method
		_center = function() {
			$.fancybox.center();
		},
		
		// Convenient method to reload the page
		// force - controls whether to get from server (true) or from cache (false) - default == false
		_reloadPage = function(force) {
			window.location.reload(!!force);
		},

		// Responds to keydown for iframe tab ordering on the first input field in the frame
		_onFirstKeydown = function(event) {
			if ((event.keyCode||event.which) == 9 && event.shiftKey) {
				event.preventDefault();
			//	event.stopPropagation();
				$(event.target).blur();
				_parent.tabBackward();
			}
		},

		// Responds to keydown for iframe tab ordering on the last input field in the frame
		_onLastKeydown = function(event) {
			if ((event.keyCode||event.which) == 9 && !event.shiftKey) {
				event.preventDefault();
			//	event.stopPropagation();
				$(event.target).blur();
				_parent.tabForward();
			}
		},

		// Apply event listener to first & last input fields in iframe tab order of child frame
		_tabFields = function(selFirst, selLast) {
			if (_trace) _trace('_tabFields');
			var
				// Define default tab listener to respond to tab in and out of the close button
				tabListener = Kjs.bindEx({
					onTabForward: function() {
						$(selFirst).focus();
					},
					onTabBackward: function() {
						$(selLast).focus();
					}
				}, _parentListener),

				// Create unload function to refer to selFirst & selLast in closure
				// This gets registered as an $unload handler, but can be called directly.
				// If called directly, it will not be removed from the $unload queue.
				// Therefore, a flag is used to determine if it has run yet or not.
				unload = function _$unload_frame_firstkeydown() {
					if (!unload.done) {
						$(document).off('keydown', selFirst, _onFirstKeydown);
						$(document).off('keydown', selLast, _onLastKeydown);
						if (_isChild) {
						    _parent.removeListener(unload.tabListener);	//[*] For some reason, tabListener is not accessible in the closure, so was added to unload
						}
						unload.done = true;
						if (_trace) _trace('_tabFields unload', 'Previous tabFields handlers unloaded');
					}
				}
			;
			// If any previous unload function was saved, call it to remove previous handlers
			if (_tabFields.unload) {
				_tabFields.unload();
				delete _tabFields.unload;
			}
			// Install new handlers
			$(document).on('keydown', selFirst, _onFirstKeydown);
			$(document).on('keydown', selLast, _onLastKeydown);
			if (_isChild) {
			    _parent.listener(tabListener);
			    unload.tabListener = tabListener; //[*] For some reason, tabListener is not accessible in closure from unload
			}
			// Set initial focus on first element
			Kjs.ready(function _$ready_frame_tabfields($) {
				$(selFirst).focus();
			});
			// Install unload handler
			Kjs.unload(unload);
			// Save current unload handler in case of subsequent calls
			_tabFields.unload = unload;
		},

		// ============= CENTRAL MESSAGE LISTENER ==============
		
		// Central message listener - delegates to registered listeners
		// This won't get called unless listeners[event.origin] exists (see _registered)
		_messageListener = function(event) {
			_post.call(event, JSON.parse(event.data), event.origin);
		},
		
		// Validator for source origin, called by ba-postMessage plug-in, to
		// verify that the sender has a listener registered for it (or for '*').
		_registered = function(origin) {
			//origin = origin||'*'; //[*] Merge notes: This line is removed
			origin = _getDomain(origin);
			return !!_listeners['*'] || !!_listeners[origin] ;
		},
		
		// Installs the central message listener with the postMessage plug-in
		_install = function(j$) {
			if (j$ !== $) {
				log.error('jQuery is loaded twice! This will cause $box API to fail to work properly!');
				if (j$.receiveMessage) $ = j$;	//[*] Bold move here - setting the global $ to be the correct $
			}
			$.receiveMessage(_messageListener, _registered);
			if (_trace) _trace('_install', 'central listener');
		},
		
		// Called on unload to remove central listener
		_unload = function($) {
			if (_trace) _trace('_unload');
			$.receiveMessage($.noop);	// Remove central message handler
			_listeners = {};			// Dispose of any listeners
			_abductAjax.restore();		// Remove jQuery Ajax override
		},

		// =====================================================
		
		// Abduct jQuery Ajax API to finaggle fancybox error handling.
		_abductAjax = (function() {
			var 
				// Save original reference
				savAjax = $.ajax,
				
				// Restore jQuery Ajax API
				_restore = function() {
					$.ajax = savAjax;
					if (_trace) _trace('_abductAjax _restore');
				},

				// Abduct jQuery Ajax API to get around fancybox error bypass
				// Use case: Someone tries to open an iframe fancybox but forgets to specify type: 'iframe'.
				// Fancybox will attempt an Ajax load, which will fail if request is cross-origin.
				// A cross-origin failure will result in the XHR status code getting set to zero (0).
				// Fancybox only calls its error handler if the Ajax error handler reports a status code
				// greater than zero. And fancybox does not allow options to specify a custom error handler
				// for Ajax calls. So, the trick here, is to intercept jQuery Ajax calls and wrap any
				// error handler specified in our own wrapper, which will check for status === 0 and change
				// it before forwarding the call to the original error handler, which will now see status > 0
				// and call the normal fancybox error handler as expected.  The failure code is set to 403 to
				// indicate forbidden, which isn't entirely accurate, but there was no code to indicate a
				// failure due to CORS.
				$abduct = function($) {
					//[*] Looks like a candidate for Kjs.bindF
					$.ajax = function(opt) {
						if (_openTimeout.isRunning() && opt.error) {
							var savError = opt.error;
							opt.error = function(xhr, status, err) {
								if (xhr.status === 0) {
									xhr.status = 403;
									log.error('Ajax type fancybox failed to load - did you intend to use an iframe type, instead?', err);
								}
								$err.handled(xhr);
								return savError.apply(this, arguments);
//								return savError.call(this, xhr, status, err);
							};
						}
						return savAjax.apply(this, arguments);
					};
					if (_trace) _trace('_abductAjax');
				}
			;
			return Kjs.extend($abduct, {
				restore: _restore
			});
		})(),
		
		// Establish load-time settings
		_establish = function() {
			// [TRQA-961]
			if (!window.location.origin) {
				window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
			}

			// Set document domain if not in IP or localhost environment (i.e. if in production)
			// and parent frame is inaccessible
			try {
				// Safari will block access to parent if in another origin and report a message
				// in the console, but not throw an exception - doc will be undefined. Other browsers
				// should throw an exception. Either way, if doc does not get defined, _setDomain() 
				// gets called, either here or in the catch block.
			    var doc = parent.document;
			    if (!doc) {
			    	_setDomain();
			    }
			} catch(e) {
				_setDomain(); 
			}
			if (_trace) _trace('_establish', {origin: location.origin, domain: document.domain});
		},

		_init = function _$init_box($) {
			// Establish current frame
			Kjs.extend(_currentFrame, {
				frame: window,
				box: $box,
				href: location.href,
				origin: _origin(location.href)
			});
			if (_trace) _trace('_init', 'Defined _currentFrame');

			// Abduct jQuery Ajax API to get around fancybox error handing issue when Ajax call fails
			_abductAjax($);
			// Install Web Messaging core handler
			_install($);

			var
				//[ATG-7912] - This gets called for secure frames
				setFromReferrer = function() {
					var origin = document.referrer||'*';
					Kjs.extend(_parentFrame, {
						frame: parent,
						href: origin,
						origin: _origin(origin)
					});
					log.debug('Child frame established default cross-origin link');
					if (_trace) _trace('_init setFromReferrer', 'parentFrame for cross-origin link');
				}
			;
			
			// Establish link to parent, if accessible
			if (_isChild) {
				try {
					//[ATG-7912]
					if (!parent.$box) { 	// Should trigger exception in cross-origin situation in browsers other than Safari
						setFromReferrer();	// And this is for Safari
					} else {
						Kjs.extend(_parentFrame, {
							frame: parent,							// Reference frame
							box: parent.$box,						// Reference to parent $box - will throw exception if cross-origin
							href: parent.location.href,				// URL of parent frame (full)
							origin: _origin(parent.location.href)	// Origin of parent frame
						});
						log.debug('Child frame established direct same-origin link');
						if (_trace) _trace('_init', '_parentFrame for same-origin link');
					}
				} catch(e) {
					//[ATG-7912]
					setFromReferrer();		// And this is for non-Safari browsers that throw an exception as expected
				}
				// If in a frame, send "identify" request to parent. This serves to notify
				// parent frame that initialization is complete, and parent will report id info.
				_linkTimeout.set();
				// Need to install a parent listener, but since child frame does not have any options object
				// associated with it, so no object is passed in. _parent.listen() will create a new object.
				_parent.listen();
				// Request parent identity, late in init
				$init(function _$init_box_identify($) {
					_parent.identify();
				}, {
					inQueue: true
				});
			}
			if (_trace) _trace('_init done');
		},

		// Primary function
		$box = function _$box(sel, opt) {
			if (_trace) _trace('$box', 'binding to ' + sel);
			var 
				d = $(sel),
				_triggerBlur = function(opt) {
					Kjs._(function() {
						if (_trace) _trace('$box _triggerBlur', 'Blurring trigger');
						$(opt.selBlur).blur();
					});
				},
				installBlur = function(opt) {
					$(document).off('click.box', opt.selBlur).on('click.box', opt.selBlur, function(event) {
						_triggerBlur(opt);
					});
				},
				bindLive = function(opt) {
					if (_trace) _trace('$box', 'live binding to ' + sel);
					$(document).off('click.box', sel).on('click.box', sel, function(event) {
						_triggerBlur(opt);
						$.fancybox($(this)[0], _fancyboxCfg(opt));
					});
				}
			;
			opt = opt||{fancybox: {}};			// In case opt is null
			opt.fancybox = opt.fancybox||{};	// In case fancybox is undefined
			opt = Kjs.descend(_defBox, opt);	// Must be descend, not extend, to avoid extending _defBox
			
			opt.selBlur = sel;
			
			if (opt.live) {
				bindLive(opt);
			} else {
				// Install live handler to lose focus on trigger after it is clicked - Accessibility
				installBlur(opt);
				if (d.length) {
					// Bind to element if it exists
					d.fancybox(_fancyboxCfg(opt));
				} else {
					// Attempt to bind to element if it gets rendered in $ready
					if (_trace) _trace('$box', $s('Deferring binding to ${sel} until $ready', {sel:sel}));
					$ready(function _$ready_box_defer($) {
						var d = $(sel);
						if (d.length) {
							// Bind to element
							d.fancybox(_fancyboxCfg(opt));
							if (_trace) _trace('$box', $s('Directly bound to ${sel}', {sel:sel}));
						} else {
							// Bind as live event
							log.warn('DOM element "' + sel + '" does not exist. It is possibly a dynamic element that has not been created, yet - binding to live event.');
							bindLive(opt);
						}
						return {msg: sel}; // Gets applied to history entry
					}, {inQueue: true});
				}
			}
			
			d = null; // No DOM reference hanging around in the closure
		}
	;

	// Load-time initialization
	// Determines if is child, identifies current frame and parent frame (if any)
	// Computes location.origin and document.domain
	_establish();

	// Run-time initialization
	$init(_init);

	// Page unload handler
	$unload(_unload);

	// Kjs.iframeMgr API
	return Kjs.extend($box, {
		inFrame: function() { 	// Report whether in a frame or not
			return _isChild; 
		},
		origin: _origin,		// Utility function to compute origin from a url
		post: _post,			// Post command directly
		listener: _listener,	// Install command listener
		removeListener: _removeListener, // Remove command listener
		parent: _parent,		// API to command parent frame
		child: _child,			// API to command child frame
		open: _open,			// Opens a fancybox in current frame
		close: _close,			// Closes fancybox in current frame
		resize: _resize,		// Resizes fancybox in current frame
		center: _center,		// Wrapper for fancybox center method
		tabFields: _tabFields,	// Registers the first & last input fields in the tab order in current frame
		reloadPage: _reloadPage	// Convenient method to reload the current page
	});
});

if (Kjs.globalDef) {
	Kjs.globalDef('$box', Kjs.frame);
} else {
	$box = Kjs.frame;
}

//----- End of kohls.frame.js -----

// ***** THIS IS A GENERATED SCRIPT. DO NOT MODIFY! *****
//
// For questions regarding the UI framework, contact the UI team.

/*!
 * ***** THIS IS A GENERATED SCRIPT. DO NOT MODIFY! *****
 * global.js
 * Assembled from pieces broken out from original global.js.
 * Part of initial roll-out of JavaScript packaging framework.
 * Eventually, this should go away in favor of a more consolidated
 * script that includes this content.
 * 
 * Changes to this file need to go into javascript/src/lib/, either directly into
 * the global.js file that is there, or create a new file and add its name to
 * javascript/build/global.lst.  For questions, contact the UI team.
 */
/*jshint eqnull:true */
/*!
 * jQuery Cookie Plugin v1.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($, document) {

	var pluses = /\+/g;
	function raw(s) {
		return s;
	}
	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	$.cookie = function(key, value, options) {

		// key and at least value given, set cookie...
		if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value == null)) {
			options = $.extend({}, $.cookie.defaults, options);

			if (value == null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// key and possibly options given, get cookie...
		options = value || $.cookie.defaults || {};
		var decode = options.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}
		return null;
	};

	$.cookie.defaults = {};

})(jQuery, document);

(function($) {
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// if e.type == "mouseenter"
			if (e.type == "mouseenter") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "mouseleave"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);
	};
})(jQuery);

;(function($, undefined) {
"use strict";

var ver = '3.0.3';

function debug(s) {
	if ($.fn.cycle.debug)
		log(s);
}		
function log() {
	/*global console */
	try {
		if (window.console && console.log) {
			console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
		}
	} catch(e) {
		//[*] Firefox throws access exception on console in certain conditions [SBB-15]
	}
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
};

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;
		this.cycleStop = 0; // issue #108

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards);}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	if (!opts)
		return;
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop === undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			if (opts.elements)
				$(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(cont, opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			if (typeof arg2 == 'string') 
				opts.oneTimeFx = arg2;
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		}
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
}

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
}

// unbind event handlers
function destroy(cont, opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	$(cont).unbind('mouseenter.cycle mouseleave.cycle');
	if (opts.destroy) // callback
		opts.destroy(opts);
}

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	var startingSlideSpecified;
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide !== undefined) {
		opts.startingSlide = parseInt(opts.startingSlide,10);
		if (opts.startingSlide >= els.length || opts.startSlide < 0)
			opts.startingSlide = 0; // catch bogus input
		else 
			startingSlideSpecified = true;
	}
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;
	else
		opts.startingSlide = 0;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		if (startingSlideSpecified) {
			// try to find the specified starting slide and if found set start slide index in the map accordingly
			for ( var cnt = 0; cnt < els.length; cnt++ ) {
				if ( opts.startingSlide == opts.randomMap[cnt] ) {
					opts.randomIndex = cnt;
				}
			}
		}
		else {
			opts.randomIndex = 1;
			opts.startingSlide = opts.randomMap[1];
		}
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z);
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
				"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
			});
		});
	}
		
	// stretch container
	var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (opts.containerResize && maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
		if (opts.containerResizeHeight && maxh > 0)
			$cont.css({height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.bind('mouseenter.cycle', function(){
			pauseFlag = true;
			this.cyclePause++;
			triggerPause(cont, true);
		}).bind('mouseleave.cycle', function(){
				if (pauseFlag)
					this.cyclePause--;
				triggerPause(cont, true);
		});

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loading) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options);}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide === 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);

	exposeAddSlide(opts, els);

	return opts;
}

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
}

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (var p in txs) {
			if (txs.hasOwnProperty(p)) {
				tx = txs[p];
				if (txs.hasOwnProperty(p) && $.isFunction(tx))
					opts.fxs.push(p);
			}
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
}

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		// add the slide to the random map and resort
		if (opts.random) {
			opts.randomMap.push(opts.slideCount-1);
			opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		}

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
		clearTimeout(p.cycleTimeout);
	}

	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}


	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
			if (!p.cycleStop) {
				// queue next transition
				queueNext();
			}
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}
	else {
		queueNext();
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		var roll;
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length) {
				opts.randomIndex = 0;
				opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
			}
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	function queueNext() {
		// stage the next transition
		var ms = 0, timeout = opts.timeout;
		if (opts.timeout && !opts.continuous) {
			ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
         if (opts.fx == 'shuffle')
            ms -= opts.speedOut;
      }
		else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
			ms = 10;
		if (ms > 0)
			p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards); }, ms);
	}
}

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
}

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
}

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
}

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	
	var pagerFn = function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	};
	
	if ( /mouseenter|mouseover/i.test(opts.pagerEvent) ) {
		$a.hover(pagerFn, function(){/* no-op */} );
	}
	else {
		$a.bind(opts.pagerEvent, pagerFn);
	}
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var cont = opts.$cont[0];
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				cont.cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				if (pauseFlag)
					cont.cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	}
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	}
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
}

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animInDelay = opts.animInDelay, animOutDelay = opts.animOutDelay;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
    activePagerClass: 'activeSlide', // class name used for the active pager link
    after:            null,     // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
    allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
    animIn:           null,     // properties that define how the slide animates in
    animInDelay:      0,        // allows delay before next slide transitions in	
    animOut:          null,     // properties that define how the slide animates out
    animOutDelay:     0,        // allows delay before current slide transitions out
    aspect:           false,    // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
    autostop:         0,        // true to end slideshow after X transitions (where X == slide count)
    autostopCount:    0,        // number of transitions (optionally used with autostop to define X)
    backwards:        false,    // true to start slideshow at last slide and move backwards through the stack
    before:           null,     // transition callback (scope set to element to be shown):     function(currSlideElement, nextSlideElement, options, forwardFlag)
    center:           null,     // set to true to have cycle add top/left margin to each slide (use with width and height options)
    cleartype:        !$.support.opacity,  // true if clearType corrections should be applied (for IE)
    cleartypeNoBg:    false,    // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
    containerResize:  1,        // resize container to fit largest slide
    containerResizeHeight:  0,  // resize containers height to fit the largest slide but leave the width dynamic
    continuous:       0,        // true to start next transition immediately after current one completes
    cssAfter:         null,     // properties that defined the state of the slide after transitioning out
    cssBefore:        null,     // properties that define the initial state of the slide before transitioning in
    delay:            0,        // additional delay (in ms) for first transition (hint: can be negative)
    easeIn:           null,     // easing for "in" transition
    easeOut:          null,     // easing for "out" transition
    easing:           null,     // easing method for both in and out transitions
    end:              null,     // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
    fastOnEvent:      0,        // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
    fit:              0,        // force slides to fit container
    fx:               'fade',   // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
    fxFn:             null,     // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
    height:           'auto',   // container height (if the 'fit' option is true, the slides will be set to this height as well)
    manualTrump:      true,     // causes manual transition to stop an active transition instead of being ignored
    metaAttr:         'cycle',  // data- attribute that holds the option data for the slideshow
    next:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
    nowrap:           0,        // true to prevent slideshow from wrapping
    onPagerEvent:     null,     // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
    onPrevNextEvent:  null,     // callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
    pager:            null,     // element, jQuery object, or jQuery selector string for the element to use as pager container
    pagerAnchorBuilder: null,   // callback fn for building anchor links:  function(index, DOMelement)
    pagerEvent:       'click.cycle', // name of event which drives the pager navigation
    pause:            0,        // true to enable "pause on hover"
    pauseOnPagerHover: 0,       // true to pause when hovering over pager link
    prev:             null,     // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
    prevNextEvent:    'click.cycle',// event which drives the manual transition to the previous or next slide
    random:           0,        // true for random, false for sequence (not applicable to shuffle fx)
    randomizeEffects: 1,        // valid when multiple effects are used; true to make the effect sequence random
    requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
    requeueTimeout:   250,      // ms delay for requeue
    rev:              0,        // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
    shuffle:          null,     // coords for shuffle animation, ex: { top:15, left: 200 }
    skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
    slideExpr:        null,     // expression for selecting slides (if something other than all children is required)
    slideResize:      1,        // force slide width/height to fixed size before every transition
    speed:            1000,     // speed of the transition (any valid fx speed value)
    speedIn:          null,     // speed of the 'in' transition
    speedOut:         null,     // speed of the 'out' transition
    startingSlide:    undefined,// zero-based index of the first slide to be displayed
    sync:             1,        // true if in/out transitions should occur simultaneously
    timeout:          4000,     // milliseconds between slide transitions (0 to disable auto advance)
    timeoutFn:        null,     // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
    updateActivePagerLink: null,// callback fn invoked to update the active pager link (adds/removes activePagerClass style)
    width:            null      // container width (if the 'fit' option is true, the slides will be set to this width as well)
};

})(jQuery);



(function($) {
"use strict";


$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (rev !== true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (rev !== true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++) {
				if (fwd)
					opts.els.push(opts.els.shift());
				else
					opts.els.unshift(opts.els.pop());
			}
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssAfter.display = '';
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);

(function($) {
	$.fn.cyclePagination = function(n) {
		if (!!$.fn.cycle) {
			n = $.extend({
				activePagerClass: "cycle-pager-active",
				fx: "fade",
				timeout: 4000,
				speed: 500,
				pause: true
			}, n);
			var m = this, l = $('<ul class="cycle-pager"></ul>'), k = [], f, e, o, g = this.children(), j, h;
			if (n.id) {
				l.attr("id", n.id);
			}
			h = g.length;
			for (j = 0; j<h; j++) {
				k.push('<li><a href="#" class="cycle-pager-index"><span>Slide </span>'+(j+1)+"</a></li>");
			}
			l.html(k.join(""));
			if (n.hideSlideLabel) {
				l.find("span").addClass("visually-hidden");
			}
			if (n.hideAllText) {
				switch (n.hideAllText) {
					case "hide":
						o = "visually-hidden";
						break;
					case "replace":
						o = "ir";
						break;
					default:
						o = "";
				}
				if (o) {
					l.find("a").addClass(o);
				}
			}
			m.cycle($.extend(n, {pager:l}));
			l.insertBefore(m);
			f = l.children("a");
			f.hide();
			e = l.children("li");
			e.on("click", function(p) {
				p.preventDefault();
				var i = e.index(this);
				f.eq(i).trigger("click");
				m.cycle("pause");
			});
		}
		return this;
	};
})(jQuery);

// ---- End of kohls.jquery.cyclepagination.js ----
/*!
 * jQuery InputPlaceholder
 *
 * [ LEGACY ]
 */
(function() {
    jQuery.fn.extend({
        placehold: function() {
            var $query = this;
            var placeholdOptions = arguments[0] || {};
            var $inputs = $query.filter(":text, :password");
            $inputs.each(function() {
                var $this = jQuery(this);
                this.placeholdValue = placeholdOptions.placeholdValue || $.trim($this.val());
                $this.val(this.placeholdValue);
                $this.addClass(placeholdOptions.blurClass || "")
            }).bind("focus", function() {
                var $this = jQuery(this);
                var val = $.trim($this.val());
                if (val == this.placeholdValue || val == "") {
                    $this.val("").removeClass(placeholdOptions.blurClass || "").addClass(placeholdOptions.focusClass || "")
                }
            }).bind("blur", function() {
                var $this = jQuery(this);
                var val = $.trim($this.val());
                if (val == this.placeholdValue || val == "") {
                    $this.val(this.placeholdValue).addClass(placeholdOptions.blurClass || "").removeClass(placeholdOptions.focusClass || "")
                }
            });
            return $query
        }
    })
})();


(function($) {

	/**
	 * helper variables and function
	 */
	$.ifixpng = function(customPixel) {
		$.ifixpng.pixel = customPixel;
	};
	
	$.ifixpng.getPixel = function() {
		return $.ifixpng.pixel || 'images/pixel.gif';
	};
	
	var hack = {
		ltie7  : $.browser.msie && $.browser.version < 7,
		filter : function(src) {
			return "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=crop,src='"+src+"')";
		}
	};
	

	 
	$.fn.ifixpng = hack.ltie7 ? function() {
    	return this.each(function() {
			var $$ = $(this);
			// in case rewriting urls
			var base = $('base').attr('href');
			if (base) {
				// remove anything after the last '/'
				base = base.replace(/\/[^\/]+$/,'/');
			}
			if ($$.is('img') || $$.is('input')) { // hack image tags present in dom
				if ($$.attr('src')) {
					if ($$.attr('src').match(/.*\.png([?].*)?$/i)) { // make sure it is png image
						// use source tag value if set 
						var source = (base && $$.attr('src').search(/^(\/|http:)/i)) ? base + $$.attr('src') : $$.attr('src');
						// apply filter
						$$.css({filter:hack.filter(source), width:$$.width(), height:$$.height()})
						  .attr({src:$.ifixpng.getPixel()})
						  .positionFix();
					}
				}
			} else { // hack png css properties present inside css
				var image = $$.css('backgroundImage');
				if (image.match(/^url\(["']?(.*\.png([?].*)?)["']?\)$/i)) {
					image = RegExp.$1;
					image = (base && image.substring(0,1)!='/') ? base + image : image;
					$$.css({backgroundImage:'none', filter:hack.filter(image)})
					  .children().children().positionFix();
				}
			}
		});
	} : function() { return this; };
	

	 
	$.fn.iunfixpng = hack.ltie7 ? function() {
    	return this.each(function() {
			var $$ = $(this);
			var src = $$.css('filter');
			if (src.match(/src=["']?(.*\.png([?].*)?)["']?/i)) { // get img source from filter
				src = RegExp.$1;
				if ($$.is('img') || $$.is('input')) {
					$$.attr({src:src}).css({filter:''});
				} else {
					$$.css({filter:'', background:'url('+src+')'});
				}
			}
		});
	} : function() { return this; };
	
	/**
	 * positions selected item relatively
	 */
	 
	$.fn.positionFix = function() {
		return this.each(function() {
			var $$ = $(this);
			var position = $$.css('position');
			if (position != 'absolute' && position != 'relative') {
				$$.css({position:'relative'});
			}
		});
	};

})(jQuery);
/*!
 * AC_RunActiveContent.js // v1.0
 * Copyright 2006 Adobe Systems, Inc. All rights reserved.
 *
 * [ LEGACY ] [ DEPRECATED ]
 *
 * TODO: REMOVE SCRIPT BY EOY 2013.
 */

function AC_AddExtension(src, ext) {
	if (src.indexOf("?") != -1) {
		return src.replace(/\?/, ext + "?")
	} else {
		return src + ext
	}
}

function AC_Generateobj(objAttrs, params, embedAttrs) {
	var str = "<object ";
	for (var i in objAttrs) {
		str += i + '="' + objAttrs[i] + '" '
	}
	str += ">";
	for (var i in params) {
		str += '<param name="' + i + '" value="' + params[i] + '" /> '
	}
	str += "<embed ";
	for (var i in embedAttrs) {
		str += i + '="' + embedAttrs[i] + '" '
	}
	str += " ></embed></object>";
	document.write(str)
}

function AC_FL_RunContent() {
	var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
	AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs)
}

function AC_SW_RunContent() {
	var ret = AC_GetArgs(arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000", null);
	AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs)
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
	var ret = new Object();
	ret.embedAttrs = new Object();
	ret.params = new Object();
	ret.objAttrs = new Object();
	for (var i = 0; i < args.length; i = i + 2) {
		var currArg = args[i].toLowerCase();
		switch (currArg) {
			case "classid":
				break;
			case "pluginspage":
				ret.embedAttrs[args[i]] = args[i + 1];
				break;
			case "src":
			case "movie":
				args[i + 1] = AC_AddExtension(args[i + 1], ext);
				ret.embedAttrs.src = args[i + 1];
				ret.params[srcParamName] = args[i + 1];
				break;
			case "onafterupdate":
			case "onbeforeupdate":
			case "onblur":
			case "oncellchange":
			case "onclick":
			case "ondblClick":
			case "ondrag":
			case "ondragend":
			case "ondragenter":
			case "ondragleave":
			case "ondragover":
			case "ondrop":
			case "onfinish":
			case "onfocus":
			case "onhelp":
			case "onmousedown":
			case "onmouseup":
			case "onmouseover":
			case "onmousemove":
			case "onmouseout":
			case "onkeypress":
			case "onkeydown":
			case "onkeyup":
			case "onload":
			case "onlosecapture":
			case "onpropertychange":
			case "onreadystatechange":
			case "onrowsdelete":
			case "onrowenter":
			case "onrowexit":
			case "onrowsinserted":
			case "onstart":
			case "onscroll":
			case "onbeforeeditfocus":
			case "onactivate":
			case "onbeforedeactivate":
			case "ondeactivate":
			case "type":
			case "codebase":
				ret.objAttrs[args[i]] = args[i + 1];
				break;
			case "width":
			case "height":
			case "align":
			case "vspace":
			case "hspace":
			case "class":
			case "title":
			case "accesskey":
			case "name":
			case "id":
			case "tabindex":
				ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
				break;
			default:
				ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1]
		}
	}
	ret.objAttrs.classid = classid;
	if (mimeType) {
		ret.embedAttrs.type = mimeType
	}
	return ret
};

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();


