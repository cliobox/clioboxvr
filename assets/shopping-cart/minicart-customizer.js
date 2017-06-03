/**
 * Minicart PayPal-link interception
 * 05.04.2016
 * 
 * [ 	Minicart.js is modified - disabled cart-window popup when adding/changeing items;
 * 		html/css theme changed. ]
 * 		
 * Insert these lines in HTML
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
 * <script src="plugins/minicart/dist/minicart.js"></script>
 * <script src="minicart-customizer.js"></script> 
 * 
 */
(function(){function f(a){var b=0;paypal.minicart.cart.items().forEach(function(a){b+=a._data.quantity});1==a&&$("#mc-shopcart").find("span").fadeTo("fast",.25).fadeTo("fast",1).fadeTo("fast",.25).fadeTo("fast",1);0<b?($("#mc-shopcart").fadeIn(),$("#mc-shopcart-qty").text(b?b:"")):($("#mc-shopcart-qty").fadeOut(),$("#mc-shopcart").fadeOut())}function n(a){var b={};decodeURIComponent(a).split("&").forEach(function(a){a=a.split("=");b[a[0]]=(a[1]||"").replace(/\+/g," ")});return b}function k(){var c;
c=window.innerWidth<=a.site_width?a.side_offset:(window.innerWidth-a.site_width)/2+a.side_offset;switch(g){case 0:d.css({left:c+"px",right:"initial"});break;case 1:d.css({left:"initial",right:c+"px"})}}function p(){if(!l&&document.body){switch(a.shopcart_position){case "left":g=0;break;case "right":g=1;break;default:console.log("Shopcart position (orientation) is wrong");return}paypal.minicart.render();window.location.href==a.returnURL&&(paypal.minicart.reset(),window.location=window.location.origin+
window.location.pathname);$("body").append(a.shopcartHtml);d=$("#mc-shopcart");d.css({top:a.shopcart_top_offset+"px","font-size":a.shopcart_icon_size+"px",color:a.shopcart_icon_color,"background-color":a.shopcart_back_color});d.find("span").css({"font-size":a.sc_count_size+"px",color:a.sc_count_color,"background-color":a.sc_count_back_color});d.outerWidth();k();$("body").append("<style>#giftcard-to-shopcart {font-size: "+a.gift_icon_size+"px; color: "+a.gift_icon_color+"; background-color: "+a.gift_back_color+
"}</style>");l=!0;$(window).resize(function(){k()});f();$("#mc-shopcart").click(function(a){a.stopPropagation();paypal.minicart.view.show();paypal.minicart.view.redraw()});$('a[href*="www.paypal.com/cgi-bin/webscr"]').filter('[href*="cmd=_cart"]').click(function(c){c.stopPropagation();c.preventDefault();h=!0;var b=$(this).prop("href"),b=n(b.substring(b.indexOf("?")+1));console.log(b);result=paypal.minicart.cart.add({amount:b.amount,bn:b.bn,business:b.business,currency_code:b.currency_code,item_name:b.item_name,
item_number:b.item_number,shipping:b.shipping,shipping2:b.shipping2,"return":a.returnURL,cancel_return:a.cancel_returnURL,notifyURL:a.notifyURL});if(!1!==result&&d){d.fadeIn();$("body").append(a.giftCardHtml);var e=$("body i#giftcard-to-shopcart").offset({top:c.pageY-10,left:c.pageX-10}).animate({top:d.offset().top+25,left:d.offset().left+20},1800,"easeInOutCubic").fadeOut(function(){f(!0);$(e).detach()})}h=!1});paypal.minicart.cart.on("change",function(a){h||f(!0)});paypal.minicart.cart.on("remove",
function(){f(!0)})}}function e(c){for(var b in c)m.hasOwnProperty(b)&&(a[b]=c[b])}var m={shopcart_position:"right",site_width:1150,side_offset:20,shopcart_top_offset:120,gift_icon_color:"#FFF",gift_back_color:"#2b8e00",gift_icon_size:15,shopcart_icon_color:"#FFF",shopcart_back_color:"#000",shopcart_icon_size:50,sc_count_color:"#FFF",sc_count_back_color:"#2b8e00",sc_count_size:12,returnURL:window.location.origin+window.location.pathname+"?success",cancel_returnURL:window.location.origin+window.location.pathname+
"?failure",shopcartCSSLink:'<link rel="stylesheet" href="minicart-theme.css" type="text/css">',giftCardHtml:'<i id="giftcard-to-shopcart" class="shoppingcart-icons">&#xe308;</i>',shopcartHtml:'<i id="mc-shopcart" role="button" class="shoppingcart-icons">&#xe1df;<span id="mc-shopcart-qty"></span></div></i>'},a=m,l=!1,h=!1,d,g;if("undefined"===typeof paypal||"undefined"===typeof paypal.minicart)return-1;window.mcShopcartOptions&&e(window.mcShopcartOptions);$('a[href*="www.paypal.com/cgi-bin/webscr"]').length&&
$(window).load(function(){p()});"function"===typeof define&&define.amd?define(function(){return e}):"object"==typeof exports?module.exports=e:window.mcShopcart=e})(jQuery);
