/**
 * Bootstrap Vertical Navtabs
 * 
 */
var verticalNavtabs = (function() {

	function init() {
		setHeight();
	}

	function setHeight() {
		var $tabPane = $('.vertical-navtabs .tab-pane'),
			$tabHeight = $('.vertical-navtabs .nav-tabs').height();

		$tabPane.css({
			height: $tabHeight
		});
	}

	$(init);
})();