<template>
  <ul>
    <li v-for="(u, i) in users">
      <div class="image-container">
        <img src="https://random.imagecdn.app/500/150" :alt="`user-pfp-${i}`">
      </div>
      <div class="info-container">
        <div class="top-row">
          <div class="name">{{ u.code }} {{ u.phone }}</div>
          <div class="time">{{ u.time }}</div>
        </div>
        <div class="bottom-row">
          UUID: {{ u.uuid }}
        </div>
      </div>
    </li>
    <li></li>
  </ul>
</template>
<script lang="ts">
import request from '~~/utility/request';

import { User } from '~~/utility/interfaces';
import { formatDate } from '~~/utility/date';

export default {
  data() {
    return {
      users: [] as Array<User>,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    formatDate,
    async getUsers(){
      request.get<User[]>('messaging/users').then(data => {
        this.users = data.data.map(item => {
          item.time = 1680009327;
          return item;
        });
      });
    },
  },
};
</script>
<style lang="css" scoped>
ul{
  background-color: white;
  padding: 0;
  margin: 0;
  list-style: none;
  border-top: 1px solid #f0f2f5;
}

ul > li{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #f0f2f5;
  cursor: pointer;
}

ul > li:hover{
  background-color: #f5f6f6;
}

.image-container{
  width: 77px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container > img{
  height: 49px;
  width: 49px;
}

.info-container{
  flex-grow: 1;
  padding-right: 15px;
}

.top-row{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.name{
  flex-grow: 1;
  color: #111b21;
  font-size: 17px;
}

.time{
  margin-top: 3px;
  margin-left: 6px;
  line-height: 14px;
  font-size: 12px;
  text-overflow: ellipsis;
  color: #667781;
}

.bottom-row{
  flex-grow: 1;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #667781;
}
  
</style>