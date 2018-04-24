<template>
    <div class="profile">
      <div class="col s12">
        <div class="card-panel grey lighten-5 z-depth-1">

          <template v-if="mode === 'view'">
            <a @click="mode = 'edit'" class="waves-effect waves grey lighten-5 black-text btn edit-button eb-edit z-depth-1"><i class="material-icons left">mode_edit</i>Edit</a>
            <div class="row">
              <div class="col offset-s5 s2">
                <img :src="img" alt="" class="circle responsive-img">
              </div>
            </div>
            <div class="row center">
              <h3>
                {{firstName}} {{lastName}}
              </h3> 
              <h5>{{phoneMain}}{{phoneSecond}}</h5>
              <h5>{{email}}</h5>
            </div>
          </template>

          <template v-else>
            <!-- Modals -->
            <profile-utils @discard="discardChanges" @unsub="unsubscribe"></profile-utils>
            
            <a @click.prevent="submitEditting" class="waves-effect waves green btn edit-button eb-save z-depth-1">Save</a>
            <a class="waves-effect waves blue btn edit-button eb-cancel z-depth-1 modal-trigger" href="#modal1">Cancel</a>
            <div class="row">
              <div class="col offset-s5 s2">
                <img :src="img" alt="" class="circle responsive-img">
              </div>
              <div class="file-field input-field upload-photo">
                <div class="btn green">
                  <span>Upload photo</span>
                  <input type="file">
                </div>
                <div class="file-path-wrapper hide">
                  <input class="file-path" type="text">
                </div>
              </div>
            </div>

            <div class="row edit-form">
              <form class="col offset-s6 s12">
                <div class="row">
                  <div class="input-field col s6">
                    <input id="first_name" type="text" v-model="firstName">
                    <label class="active text-green" for="first_name"><span class="required-field">First Name</span></label>
                  </div>
                  <div class="input-field col s6">
                    <input id="last_name" type="text" v-model="lastName">
                    <label class="active" for="last_name"><span class="required-field">Last Name</span></label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                    <input id="first_phone" type="text" v-model="phoneMain">
                    <label class="active text-green" for="first_phone"><span class="required-field">Phone number</span></label>
                  </div>
                  <div class="input-field col s6">
                    <input id="secondary_phone" type="text" v-model="phoneSecond">
                    <label for="secondary_phone">Phone number</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input id="email" type="email" v-model="email">
                    <label class="active" for="email"><span class="required-field">Email</span></label>
                  </div>
                </div>
                <div class="chip red white-text">
                  Tag
                  <i class="close material-icons">close</i>
                </div>
                <div class="chip red white-text">
                  Moderator
                  <i class="close material-icons">close</i>
                </div>
              </form>
            </div>
          <a class="waves-effect waves blue darken-2 btn edit-button eb-unsub z-depth-1 modal-trigger" href="#modal2">Unsubscribe</a>
          </template>
        </div>
      </div>
    </div>
</template>

<script>
import Layout from '../layout/Layout.vue'
import ProfileUtils from './ProfileUtils.vue'
import { mapActions } from 'vuex';
const url = "https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/1-medium-layered-haircut-for-square-face.jpg?w=500&ssl=1";

export default {
  name: 'Profile',
  data () {
    return {
      mode: 'view',
      img: url,
      firstName: 'Helen',
      lastName: 'Kuraw',
      phoneMain: '+375291965627',
      phoneSecond: '',
      email: 'helenkuraw@gmail.com',
    }
  },
  methods: {
    ...mapActions([
      'signOut'
    ]),
    submitEditting() {
      this.mode = 'view';
    },
    discardChanges() {
      this.mode = 'view';
    },
    unsubscribe() {
      //Delete user
      this.signOut();
    }
  },
  components: {
    Layout,
    ProfileUtils
  }
}
</script>

<style>
.profile {
  height: 100%;
}
.card-panel {
  position: relative;
}
.edit-button {
  position: absolute;
  width: 100px;
}
.eb-edit, .eb-save, .eb-cancel {
  top: 10px;
  right: 10px;
}
.eb-cancel {
  top: 50px;
}
.eb-unsub {
  bottom: 10px;
  right: 10px;
  width: 130px;
}
.edit-form {
  width: 50%;
}
.required-field::after {
  content: " *";
  color: red;
  font-size: 0.8em;
}
.upload-photo {
  position: relative;
  bottom: -130px;
}

</style>

