<template>
<div>
  <div id="modal1" class="modal">
    <div class="modal-content center">
      <p>All changes will be discarded</p>
      <a @click="$emit('discard')" class="modal-action modal-close waves-effect waves-light green btn">Confirm</a>
      <a class="modal-action modal-close waves-effect waves-light red btn">Cancel</a>
    </div>
  </div>
  <div id="modal2" class="modal">
    <div class="modal-content center">
      <p>You sure you want to unsubscribe?</p>
      <a @click="$emit('unsub')" class="modal-action modal-close waves-effect waves-light green btn">Confirm</a>
      <a class="modal-action modal-close waves-effect waves-light red btn">Cancel</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProfileUtils',
  mounted() {
    M.Modal.init(document.querySelectorAll('.modal'))
  },
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
