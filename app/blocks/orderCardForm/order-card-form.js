var orderCard = new Vue({
  el: '#order-card-form',
  data: {
    fio: '',
    email: '',
    phone: '',
    citizenship: '',
    fioStatus: false,
    emailStatus: false,
    phoneStatus: false,
    citizenshipStatus: false,
    checkbox: false,
    checkForm: false
  },
  methods: {
    closeForm(){
      document.querySelector('.all .content').style.display = 'block'
      document.querySelector('.order-card-form').classList.remove('show')
    },
    labelClick(e){
      e.target.previousElementSibling.focus()
    },
    checkboxClick(){
      this.checkbox = !this.checkbox
    },
    focusInput(){
      document.querySelector('.dropdown').classList.add('show')
      document.querySelector('.dropdown-icon').classList.add('rotate')
    },
    blurInput(){
      document.querySelector('.dropdown').classList.remove('show')
      document.querySelector('.dropdown-icon').classList.remove('rotate')
    }
  }
})