<template>
  <ul>
    <li>
      <font-awesome-icon :icon="['fas', 'users']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fas', 'circle']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fas', 'message']" />
    </li>
    <li>
      <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </li>
  </ul>
</template>
<script lang="ts">
export default {
  
}
</script>
<style lang="css" scoped>
ul{
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
}

ul > li {
  display: inline-block;

  width: 24px;
  height: 24px;
  margin: 0 !important;
  line-height: 24px;
  padding: 13px;
  text-align: center;
  cursor: pointer;

  color: #54656f;
  font-size: 18px;
}
  
</style>