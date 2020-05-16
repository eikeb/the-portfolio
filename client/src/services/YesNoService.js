import YesNoApi from '@/services/YesNoApi'

export default {
  getAnswer () {
    return YesNoApi().get('/api')
  }
}
