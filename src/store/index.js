import { createStore } from 'vuex'

// https://next.vuex.vuejs.org/ja/guide/#%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AA%E3%82%B9%E3%83%88%E3%82%A2
const store = createStore({
  state () {
    return {
      draggingCard: null,
      selectMode: false, // カードを重ねるときに使用。
      workSpace: {
        active: false,
        cards: [],
        zone: '',
        player: '',
        minimal: false,
      },
      settings: {
        dropdownTriggers: ['click'],
      },
    }
  },
  mutations: {
    setDraggingCard(state, card) {
      state.draggingCard = card
    },
    setSelectMode(state, boolVal) {
      state.selectMode = boolVal
    },
    openWorkSpace(state, {cards, zone, player, single=false}) {
      state.workSpace = {
        cards,
        zone,
        player,
        active: true,
        single,
      }
    },
    closeWorkSpace(state) {
      state.workSpace = {
        cards: [],
        zone: '',
        player: '',
        active: false,
      }
    },
    updateSettings(state, settings) {
      state.settings = {
        ...state.settings,
        ...settings,
      }
    }
  },
})

export default store
