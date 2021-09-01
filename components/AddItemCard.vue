<template>
  <div>
    <div class="container wrapperCard">
      <form>
        <div class="inputRow">
          <span class="titleInput">Наименование товара</span><span class="round" />
          <input v-model="form.name" placeholder="Введите наименование товара">
        </div>

        <div class="inputRow">
          <span class="titleInput">Описание товара</span>
          <textarea v-model="form.description" class="textarea" placeholder="Введите описание товара" />
        </div>

        <div class="inputRow">
          <span class="titleInput">Сcылка на изображение товара</span><span class="round" />
          <input v-model="form.url" placeholder="Введите ссылку">
        </div>

        <div class="inputRow">
          <span class="titleInput">Цена товара</span><span class="round" />
          <input v-model="form.price" placeholder="Введите цену">
        </div>

        <div class="inputRow">
          <button type="button" :class="{activeBtn: valid}" @click="add">
            Добавить товар
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddItemCard',
  data () {
    return {
      form: {
        name: '',
        description: '',
        url: '',
        price: ''
      }
    }
  },
  computed: {
    valid () {
      return [this.form.name, this.form.url, this.form.price].every(i => !!i === true)
    }
  },
  methods: {
    add () {
      if (!this.valid) { return }
      const obj = {}
      Object.entries(this.form).forEach((i) => {
        obj[i[0]] = i[1]
      })

      this.$store.commit('add', obj)
    }
  }
}
</script>

<style scoped lang="scss">
  .textInInput{
    font-family: Source Sans Pro;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
  }
  .wrapperCard{
    width: 332px;
    background: #FFFEFB;
    overflow: hidden;
  }

  form{
    margin: 24px;
    .inputRow{
      margin-bottom: 16px;
      padding: 0;
      position: relative;
      .titleInput{
        font-family: Source Sans Pro;
        font-size: 10px;
        letter-spacing: -0.02em;
        top: -4px;
        position: relative;
      }
      .round{
        position: absolute;
        background: rgba(255, 132, 132, 1);
        border-radius: 100%;
        width: 4px;
        height: 4px;
      }
      .textarea{
        padding: 10px;
        height: 88px;
        resize: none;
      }
      input,textarea{
        padding: 0px 10px;
        width: calc(100% - 20px);
        min-height: 36px;
        border-radius: 4px;
        background: rgba(255, 254, 251, 1);
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
        &::placeholder {
          color: rgba(180, 180, 180, 1);
          @extend .textInInput
        }
        @extend .textInInput
      }
    }
  }
  button{
    height: 36px;
    border-radius: 10px;
    width: 100%;
    margin-top: 8px;
    font-family: Inter;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: rgba(180, 180, 180, 1);
    transition: ease-in-out 0.2s;
    @extend .textInInput
  }
  .activeBtn{
    background: rgba(123, 174, 115, 1);
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    &:hover{
      transform: scale(1.015);
    }
    &:active{
      transform: scale(0.98);
    }
  }

  @media all and (max-width: 730px) {
    .wrapperCard{
      width: auto;
    }
  }
</style>
