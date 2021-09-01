<template>
  <main>
    <transition-group class="main" name="list-complete" tag="div">
      <ItemCard v-for="(item,index) in $store.state.cards" :key="index" :item="item"/>
    </transition-group>
  </main>
</template>

<script>
import ItemCard from '~/components/ItemCard'
export default {
  name: 'OutputItemCard',
  components: {
    ItemCard
  }
}
</script>

<style scoped>
  main{
    flex:1;
    display: flex;
    justify-content: center;
  }
  .main{
    display: flex;
    justify-content: center;
    margin: 0;
    flex-wrap: wrap;
  }
  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active до версии 2.1.8 */ {
    transform: scale(0.2);
    opacity: 0;
  }
  .list-complete-leave-active {
    position: absolute;
  }

</style>
