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
    checkForm: false,
    obj: {},
    form: true,
    result: false
  },
  methods: {
    closeForm(){
      document.querySelector('.all .content').style.display = 'block'
      document.querySelector('.order-card-form').classList.remove('show')
    },
    labelClick(e){
      e.target.previousElementSibling.focus()
    },
    dropdownIconClick(e){
      e.target.previousElementSibling.click()
    },
    checkboxClick(){
      this.checkbox = !this.checkbox
    },
    focusInput(){
      document.querySelector('.dropdown').classList.add('show')
      document.querySelector('.dropdown-icon').classList.add('rotate')
    },
    clickOutside(e){
      var el = document.querySelector('#select')
      if(!el.contains(e.target)){
        document.querySelector('.dropdown').classList.remove('show')
        document.querySelector('.dropdown-icon').classList.remove('rotate')
      };
    },
    selectItem(e){
      this.citizenship = e.target.innerHTML
    },
    orderCard(){
      this.checkForm = true
      // just a simple validation
      this.fio.length > 0 ? this.fioStatus = true : this.fioStatus = false
      this.email.length > 0 ? this.emailStatus = true : this.emailStatus = false
      this.phone.length > 0 ? this.phoneStatus = true : this.phoneStatus = false
      this.citizenship.length > 0 ? this.citizenshipStatus = true : this.citizenshipStatus = false

      if (this.fioStatus && this.emailStatus && this.phoneStatus && this.citizenshipStatus) {
        // send data to backend
        this.obj = {
          fio: this.fio,
          email: this.email,
          phone: this.phone,
          citizenship: this.citizenship
        }
        // axios
        // code...
        this.form = false
        this.result = true
      } else {
        return false
      }
    }
  },
  created(){
    document.addEventListener('click', this.clickOutside)
  }
})