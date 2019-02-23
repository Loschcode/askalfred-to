<template>
  <div
    class="modal"
    v-show="isOpened"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
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
      isOpened: false,
      content: ''
    }
  },

  created () {
    if (process.client) {
      this.tingle = require('tingle.js');
    }
  },

  watch: {
    content (next, prev) {
      this.modal.setContent(next)
    }
  },

  methods: {
    open () {
      this.setupModal()
      this.renderModal()
    },

    close () {
      this.unloadModal()
    },

    setupModal () {
      var vm = this
      this.modal = new this.tingle.modal({
        closeMethods: ['overlay', 'button', 'escape'],
        onOpen () {
          vm.isOpened = true
        },
        onClose () {
          vm.isOpened = false
        },
        beforeClose () {
          return true
        }
      });
    },

    setContentWithSlot () {
      this.content = this.$el
    },

    renderModal () {
      this.setContentWithSlot();
      this.modal.open()
    },

    unloadModal () {
      this.modal.close()
    }
  }
}
</script>
