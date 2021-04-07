import { db } from '@/firebase/db'
export default {
  async ADD_MESSAGE ({ commit }, data) {
    await db.collection('message').add(data)
    await db.collection('message').get().then(res => {
      const arr = []
      res.forEach(item => {
        arr.push(item.data())
      })
      commit('SETLIST_MESSAGE', arr)
    })
  }
}
