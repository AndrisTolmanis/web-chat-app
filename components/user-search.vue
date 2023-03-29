<template>
  <div class="container">
    <div class="input-container">
      <button>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
      <input type="text" placeholder="Search or start new chart">
    </div>
    <button class="filter-button">
      <font-awesome-icon :icon="['fas', 'filter']" />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  
}
</script>
<style lang="css" scoped>
.container{
  background-color: white;
  padding: 0 0 0 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: ; */

  height: 50px;
  border-bottom: 1px solid white;
}

.input-container{
  flex-grow: 1;
  background-color: #f0f2f5;
  height: 35px;
  padding-right: 32px;
  padding-left: 65px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
}
.input-container > input{
  width: 100%;
  height: 22px;

  border: none;
  background-color: transparent;
  outline: none;
  font-size: 14px;
}
.input-container > button{
  position: absolute;
  left: 12px;

  border: none;
  background-color: transparent;
  outline: none;
}
.filter-button{
  margin: 0 8px;
  border: none;
  background-color: transparent;
  text-align: center;
  color: #8696a0;
}
</style>