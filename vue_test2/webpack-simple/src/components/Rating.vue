<template>
  <div>
    <ul>
      <li><icon name="star"/></li>
      <li><icon name="star"/></li>
      <li><icon name="star"/></li>
      <li><icon name="star-o"/></li>
      <li><icon name="star-o"/></li>
    </ul>
    <span>3 of 5</span>
  </div>
</template>

<script>
import 'vue-awesome/icons/star'
import Icon from 'vue-awesome/components/Icon'
export default {
  components: { Icon }
}
</script>

<style>
*{
color: red;
}
</style>
