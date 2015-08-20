(function ($) {

	$.fn.iOSModal = function (action) {
		if(action === "open") {
			openModal(this)
		} else if (action === "close") {
			closeModal(this)
		} else {
			console.log("no parameters passed")
		}
	}

	function openModal(selector) {
		selector.click(function (event) {
			var windowHeight = $(window).height()
			var map = $(".modal-window")

			//set the properties for the window
			map.css('display', 'block')
			map.css("top", windowHeight)
			map.css("height", windowHeight)
			map.animate({
				top: 0
			}, 200)

		})
	}

	function closeModal(selector) {
		selector.click(function (event) {
			var windowHeight = $(window).height()

			var map = $(".modal-window")
			map.animate({
				top: windowHeight
			}, 200)
			setTimeout(function () {
				map.css("height", 0)
			}, 210)

			event.preventDefault()
		})
	}
	return this
}(jQuery));
