<template>
  <div
    class="modal"
    v-show="isOpened"
  >
    <slot></slot>
  </div>
</template>

<style>
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
        // cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function () {
          vm.isOpened = true;
        },
        onClose: function () {
          vm.isOpened = false;
        },
        beforeClose: function () {
          // here's goes some logic
          // e.g. save content before closing the modal
          return true; // close the modal
          return false; // nothing happens
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
