<template>
  <div
    class="modal"
    v-show="isOpened"
  >
    <slot></slot>
  </div>
</template>

<style>
.modal {
}
</style>

<script>

export default {
  name: 'Modal',
  props: {
  },

  data () {
    return {
      tingle: null,
      modal: null,
      isOpened: false
    }
  },

  created () {
    if (process.client) {
      this.tingle = require('tingle.js');
    }
  },

  methods: {
    open () {
      this.setupModal()
      this.renderModal();
    },

    setupModal () {
      var vm = this
      this.modal = new this.tingle.modal({
        footer: false,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        onOpen () {
          vm.isOpened = true;
        },
        onClose () {
          vm.isOpened = false;
        },
        beforeClose () {
          // return false if you want
          // to prevent modal closing
          return true
        }
      });
    },

    renderModal () {
      this.modal.setContent(this.$el)
      this.modal.open();
    }
  }
}
</script>
