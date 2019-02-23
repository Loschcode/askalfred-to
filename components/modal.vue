<template>
  <div>
    <!-- Blank slate, keep it this way -->
  </div>
</template>

<style lang="scss">
.tingle-modal-box__content {
  padding: 1em;
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

  mounted () {
    this.setupModal()
  },

  watch: {
    content (next, prev) {
      this.modal.setContent(next)
    }
  },

  methods: {
    open () {
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

    renderModal () {
      this.modal.open()
    },

    unloadModal () {
      this.modal.close()
    },

    setWithContentOf (context, ref) {
      this.content = context.$refs[ref]
    }
  }
}
</script>
