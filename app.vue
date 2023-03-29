<template>
  <div class="app-container">
    <div class="left-column">
      <div class="header">
        <profile-picture />
        <user-profile-menu />
      </div>
      <user-search />
      <span class="chat-border"></span>
      <channel-list />
    </div>
    <div class="right-column">
      <div class="header">
        <profile-picture />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import UserProfileMenu from './components/user-profile-menu.vue';
import ProfilePicture from './components/profile-picture.vue';
import ChannelList from './components/channel-list.vue';
import UserSearch from './components/user-search.vue';

export default {
  components: {
    UserProfileMenu,
    ProfilePicture,
    ChannelList,
    UserSearch,
  },
  data() {
    return {
      csrfToken: null,
      registerCode: '+371',
      registerPhone: null,
      cookie: null,
      // socket: new WebSocket("ws://192.168.1.11:8090"),

      messageInput: '',

      userActivated: '',
      users: [
        'ada0467f-f8fd-443e-9f53-5458f720b4ae',
        'cc7eaee9-573b-4936-9718-18d8c3dc343b',
        'f09b1a79-3cbe-4808-a15b-8469c4fb1a79',
      ],
    }
  },
  mounted() {
    document.title = `What's a Fake App?`;
    // this.socket.onopen = this.onOpen;
    // this.socket.onmessage = this.onMessage;
  },
  methods: {
    // onRegister(){
    //   const url = 'http://192.168.1.11:8001/thalia/register';

    //   const data = {
    //     code: this.registerCode,
    //     phone: this.registerPhone,
    //   };

    //   request.post(url, data).then(response => {
    //     console.log(response);
    //   });
    // },
    // onGetUserData(){
    //   const url = 'http://192.168.1.11:8001/thalia/user';

    //   request.get(url).then(response => {
    //     console.log(response);
    //   });
    // },

    // onOpen(e: any){
    //   console.log('%cSocket connection succ!', 'color: green;');
    // },
    // onMessage(e: any){
    //   console.log(e);
    // },
    
    // establishChannel(uuid:string){
    //   this.userActivated = uuid;

    //   const url = 'http://192.168.1.11:8001/thalia/messages/join-channel';

    //   const data = {
    //     channelUUID: localStorage.getItem('channel-uuid'),
    //     addUser: 'ada0467f-f8fd-443e-9f53-5458f720b4ae',
    //   };

    //   request.post(url, data).then((response:any) => {
    //     localStorage.setItem('channel-uuid', response.data.uuid);
    //     console.log('%cJoined chat channel: ', 'color: green;', response.data.uuid);
    //   });
    // },

    // sendMessage(){
    //   const url = 'http://192.168.1.11:8001/thalia/messages/send';
    //   console.log(this.messageInput);

    //   const data = {
    //     message: this.messageInput,
    //     channel: 'ur_mum',
    //   };

    //   request.post(url, data).then(response => {
    //     console.log(response);
    //   });

    //   this.messageInput = '';
    // },
  },
};
</script>
<style lang="css">
body{
  color: #3b4a54;
  background-image: linear-gradient(#00a884 13%, #eae6df 13%);
  margin: 0;
  padding: 0;

  height: 100vh;
  width: 100vw;
  position: relative;
}
.app-container{
  background-color: #f0f2f5;
  box-shadow: 0 6px 18px rgba(11, 20, 26, .05);
  border-radius: 0;

  position: absolute;

  top: 19px;
  bottom: 19px;
  left: 135.5px;
  right: 135.5px;

  display: grid;
  grid-template-columns: 30% 70%;
}
.left-column{
  border-right: 1px solid #d1d7db;
  height: 100%;
}
.right-column{
  width: 100%;
}

/* Header! */
.header{
  padding: 10px 16px;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f2f5;
}
</style>
