<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style>
.modal-placeholder {
  display: none;
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
    }
  },

  methods: {
    open () {
      this.makeModal();
    },

    makeModal () {
      var vm = this
      var tingle = require('tingle.js');

      var modal = new tingle.modal({
        footer: false,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        // cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function () {
          console.log('modal open');
        },
        onClose: function () {
          console.log('modal closed');
        },
        beforeClose: function () {
          // here's goes some logic
          // e.g. save content before closing the modal
          return true; // close the modal
          return false; // nothing happens
        }
      });

      modal.setContent(vm.$el)
      modal.open();
    }
  },

  // watch: {
  //   open (val) {
  //     if (val === true) {
  //       this.makeModal();
  //       // this.$nextTick(() => this.tingle.open())
  //       return
  //     }

  //     this.tingle.close()
  //   }
  // },

  mounted () {
    if (process.client) {

      // WORKING
      // var vm = this
      // var tingle = require('tingle.js');

      // var modal = new tingle.modal({
      //   footer: false,
      //   stickyFooter: false,
      //   closeMethods: ['overlay', 'button', 'escape'],
      //   closeLabel: "Close",
      //   // cssClass: ['custom-class-1', 'custom-class-2'],
      //   onOpen: function () {
      //     console.log('modal open');
      //   },
      //   onClose: function () {
      //     console.log('modal closed');
      //   },
      //   beforeClose: function () {
      //     // here's goes some logic
      //     // e.g. save content before closing the modal
      //     return true; // close the modal
      //     return false; // nothing happens
      //   }
      // });

      // modal.setContent(vm.$el)
      // modal.open();
      // DONE WORKING

      // // add a button
      // modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
      //     // here goes some logic
      //     modal.close();
      // });

      // // add another button
      // modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
      //     // here goes some logic
      //     modal.close();
      // });

      // // open modal

      // // close modal
      // modal.close();

      //   this.tingle = new tingle.modal({
      //     footer: vm.buttons.length > 0,
      //     onOpen () {
      //       if (typeof vm.onopen === 'function') {
      //         vm.onopen.call(vm)
      //       }
      //     },
      //     onBeforeClose () {
      //       if (typeof vm.onbeforeclose === 'function') {
      //         vm.onbeforeclose.call(vm)
      //       }
      //     },
      //     onClose () {
      //       if (typeof vm.onclose === 'function') {
      //         vm.onclose.call(vm)
      //         vm.tingle.destroy()
      //       }
      //     }
      //   })

      //   this.tingle.setContent(this.$el)

      //   this.buttons.forEach(button => {
      //     this.tingle.addFooterBtn(button.text, button.class || 'tingle-btn', button.action)
      //   })
      // }
    }

    // if (process.client) {
    //   var vm = this
    //   var tingle = require('tingle.js');

    //   this.tingle = new tingle.modal({
    //     footer: vm.buttons.length > 0,
    //     onOpen () {
    //       if (typeof vm.onopen === 'function') {
    //         vm.onopen.call(vm)
    //       }
    //     },
    //     onBeforeClose () {
    //       if (typeof vm.onbeforeclose === 'function') {
    //         vm.onbeforeclose.call(vm)
    //       }
    //     },
    //     onClose () {
    //       if (typeof vm.onclose === 'function') {
    //         vm.onclose.call(vm)
    //         vm.tingle.destroy()
    //       }
    //     }
    //   })

    //   this.tingle.setContent(this.$el)

    //   this.buttons.forEach(button => {
    //     this.tingle.addFooterBtn(button.text, button.class || 'tingle-btn', button.action)
    //   })
    // }
  }
}
</script>
