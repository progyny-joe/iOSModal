#iOSModal Plugin
Creates an open window effect similar to the modal windows in iOS

Requires:

- jQuery

Setup:

- Include iOSModal.css in your header
- Call function on selector to open window
- Call function on selector to close window
- Profit


Using the plugin:

    <button class="open-modal">Open</button>
	<div class="modal-window">
       	<button class="close-modal">Close</a>
	</div>

	<script>
		$(".open-modal").iOSModal('open');
		$(".close").iOSModal('close');
	</script>


$(selector).iOSModal(options)

Options:

- open
- close

TODO:

- Add ability to have variable height and width
- Add ability to be visible from different directions
