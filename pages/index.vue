<template>
  <div class="main">
    <div class="wrapper">
      <Header/>
      <div class="content">
        <AddItemCard/>
        <OutputItemCard/>
      </div>
    </div>
  </div>
</template>

<script>
import AddItemCard from '~/components/AddItemCard'
import OutputItemCard from '~/components/OutputItemCard'
import Header from '~/components/Header'
export default {
  components: {
    Header,
    OutputItemCard,
    AddItemCard
  }
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
  .main{
    display: flex;
    justify-content: center;
    overflow: auto;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #faf9f7;
  }
  .wrapper{
    margin: 24px;
    width: 1392px;
  }

  .content{
    display: flex;
  }

  @media all and (max-width: 1456px) {
    .wrapper{
      width: 1044px;
    }
  }
  @media all and (max-width: 1108px) {
    .wrapper{
      width: 697px;
    }
  }
  @media all and (max-width: 730px) {
    .wrapper{
      width: 409px;
    }
    .content{
      display: block;
    }
  }

</style>
