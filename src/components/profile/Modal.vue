<template>
  <div id="confirm" class="modal">
    <div class="modal-content center">
      <p>{{title}}</p>
      <a @click="$emit('confirm')" class="modal-action modal-close waves-effect waves-light green btn">{{confirm}}</a>
      <a @click="$emit('cancel')" class="modal-action modal-close waves-effect waves-light red btn">{{cancel}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      modalInstance: null,
    }
  },
  props: {
    title: {
      type: String,
    },
    confirm: {
      type: String,
      default: 'Confirm',
    },
    cancel: {
      type: String,
      default: 'Cancel',
    }
  },
  mounted() {
    this.modalInstance = M.Modal.init(document.querySelector('.modal'))
  },
  methods: {
    openModal(next) {
      this.$data.modalInstance.open()
    }
  }
}
</script>

<style>
.modal {
  width: 400px;
}
.modal-content p {
  font-size: 1.3em;
  font-weight: bold;
}
.modal-content a {
  margin: 10px;
}
</style>
