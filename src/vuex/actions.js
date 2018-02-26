export default{
  changeCount: function (context, data) {
    console.log(data.v)
    context.commit('add', data)
  }
}
