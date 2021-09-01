export const state = () => ({
  cards: [
    {
      name: 'Первая',
      description: 'Первая карточка работает нормально Первая карточка работает нормально Первая карточка работает нормально Первая карточка работает нормально',
      url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/46/1479382352-fitness.jpg?resize=480:*',
      price: 10000
    },
    {
      name: 'Вторая',
      description: 'Вторая карточка работает нормально Вторая карточка работает нормальноВторая карточка работает нормальноВторая карточка работает нормально',
      url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/46/1479382352-fitness.jpg?resize=480:*',
      price: 10000
    },
    {
      name: 'Первая',
      description: 'Первая карточка работает нормально Первая карточка работает нормально Первая карточка работает нормально Первая карточка работает нормально',
      url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/46/1479382352-fitness.jpg?resize=480:*',
      price: 10000
    },
    {
      name: 'Вторая',
      description: 'Вторая карточка работает нормально Вторая карточка работает нормальноВторая карточка работает нормальноВторая карточка работает нормально',
      url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/46/1479382352-fitness.jpg?resize=480:*',
      price: 10000
    },
    {
      name: 'Первая',
      description: 'Первая карточка работает нормально Первая карточка работает нормально Первая карточка работает нормально Первая карточка работает нормально',
      url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/46/1479382352-fitness.jpg?resize=480:*',
      price: 10000
    },
    {
      name: 'Вторая',
      description: 'Вторая карточка работает нормально Вторая карточка работает нормальноВторая карточка работает нормальноВторая карточка работает нормально',
      url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/46/1479382352-fitness.jpg?resize=480:*',
      price: 10000
    },
    {
      name: 'Последняя',
      description: 'Последняя карточка работает нормально Последняя карточка работает нормальноПоследняя карточка работает нормальноПоследняя карточка работает нормально',
      url: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/16/46/1479382352-fitness.jpg?resize=480:*',
      price: 10000
    }
  ]
})

export const mutations = {
  add (state, payload) {
    state.cards.push(payload)
  },
  remove (state, payload) {
    const ind = state.cards.findIndex(i => i === payload)
    state.cards.splice(ind, 1)
  },
  sortCard (state, name) {
    switch (name) {
      case 'По цене min':
        state.cards.sort((a, b) => a.price - b.price)
        break
      case 'По цене max':
        state.cards.sort((a, b) => b.price - a.price)
        break
      case 'По наимен.':
        state.cards.sort((a, b) => a.name > b.name ? 1 : -1)
        break
    }
  }
}
