var orderCard = new Vue({
  el: '#order-card-form',
  data: {

  },
  methods: {
    closeForm(){
      document.querySelector('.all .content').style.display = 'block'
      document.querySelector('.order-card-form').classList.remove('show')
    }
  }
})