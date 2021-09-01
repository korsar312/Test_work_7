<template>
  <header>
    <h1>Добавление товара</h1>
    <div />
    <div class="button">
      <div @click="btnOpen = !btnOpen" class="buttonText">{{nowSort}}<div :class="{arrow: true, arrowActive: btnOpen}" /> </div>
      <div :class="{sortList: true, sortListActive: btnOpen}">
        <div v-for="i in sort" :key="i" class="buttonText" @click="sortCard(i)">{{i}}</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      nowSort: 'По умолчанию',
      btnOpen: false,
      sort: [
        'По цене min',
        'По цене max',
        'По наимен.'
      ]
    }
  },
  methods: {
    sortCard (name) {
      this.$store.commit('sortCard', name)
      this.nowSort = name
      this.btnOpen = false
    }
  }
}
</script>

<style scoped lang="scss">
  header{
    display: flex;
    margin: 8px;
  h1,div,button{
    flex: 1;
  }
    .button, .sortList{
      height: 36px;
      max-width: 121px;
      border-radius: 4px;
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
      background: rgba(255, 254, 251, 1);
      font-family: Source Sans Pro;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0em;
      color: rgba(180, 180, 180, 1);
      text-align: center;
      position: relative;
      cursor: pointer;
      z-index: 10;
      .sortList{
        top: 30px;
        height: 0px;
        overflow: hidden;
        transition: ease-in-out 0.2s;
        .buttonText{
          top: 10px;
          transform: translate(0, 0);
          margin: 0px 0 20px 0;
        }
      }
      .sortListActive{
        height: 110px;
      }
      .buttonText{
        top: 50%;
        transform: translate(0%, -50%);
        margin: 0 10px 0 0;
        position: relative;
        &:hover{
          color: red;
        }
      }
      .arrow{
        width: 4.59px;
        height: 4.59px;
        top: 50%;
        right: 5px;
        transform: translate(0%, -50%) rotateZ(45deg);
        position: absolute;
        border-bottom: 1px solid rgba(180, 180, 180, 1);
        border-right: 1px solid rgba(180, 180, 180, 1);
        box-sizing: border-box;
        transition: ease-in-out 0.2s;
      }
      .arrowActive{
        transform: translate(0%, 0%) rotateZ(-135deg);
      }
    }
  }
  .title{
    display: flex;
  }
  h1{
    color: #3F3F3F;
    font-family: Source Sans Pro;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    padding: 0;
  }
</style>
