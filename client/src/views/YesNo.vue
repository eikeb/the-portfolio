<template>
  <div class="home">
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>
      <img :src="answer.image">
    </p>
    <p>{{ answer.message }}</p>
  </div>
</template>

<script>
import YesNoService from '@/services/YesNoService'
import _ from 'lodash'

export default {
  name: 'YesNo',
  data () {
    return {
      question: '',
      answer: {
        image: '',
        message: 'You have to ask a question first!'
      }
    }
  },
  created () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer () {
      if (this.question.indexOf('?') < 0) {
        this.answer.message = 'Questions usually contain a ? ;)'
        return
      }

      const vm = this
      YesNoService
        .getAnswer()
        .then(response => {
          vm.answer.image = response.data.image
          vm.answer.message = response.data.answer
        })
    }
  },
  watch: {
    question (value) {
      this.answer.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  }
}
</script>
