<template>
	<div>
		<div class="modal-placeholder">
			<h1>A modal</h1>
		</div>
	</div>
</template>

<style>
	.modal-placeholder {
		display: none;
	}
</style>

<script>

export default {
	name: 'TingleModal',
	props: {
		open: Boolean,
		onopen: Function,
		onbeforeclose: Function,
		onclose: Function,
		context: Object
	},

	data() {
		return {
			tingle: null
		}
	},

	watch: {
		open(val) {
			if(val === true) {
				this.makeModal()
				this.$nextTick(() => this.tingle.open())

				return
			}

			this.tingle.close()
		}
	},

	mounted() {
	},

	methods: {
		makeModal() {
			if (process.client) {
				var vm = this
				var tingle = require('tingle.js');

				this.tingle = new tingle.modal({
					footer: vm.buttons.length > 0,
					onOpen() {
						if (typeof vm.onopen === 'function') {
								vm.onopen.call(vm)
							}
						},
					onBeforeClose() {
						if (typeof vm.onbeforeclose === 'function') {
							vm.onbeforeclose.call(vm)
						}
					},
					onClose() {
						if(typeof vm.onclose === 'function') {
							vm.onclose.call(vm)
							vm.tingle.destroy()
						}
					}
				})

				this.tingle.setContent(this.$el)

				this.buttons.forEach(button => {
					this.tingle.addFooterBtn(button.text, button.class || 'tingle-btn', button.action)
				})
			}
		}
	}
}
</script>
