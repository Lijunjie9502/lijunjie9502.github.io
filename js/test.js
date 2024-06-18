new Vue({
  components: { 'vue-cal': vuecal },
  el: '#app',
  data: () => ({
    events: [
      {
          start: '2019-07-20 09:00',
          end: '2019-07-20 10:00',
          title: '星巴克召开交互设计会议',
          class: 'leisure',
          content: '带好笔记本电脑'
        },
        {
          start: '2019-07-20 10:00',
          end: '2019-07-20 12:00',
          title: '部门2019 上半年总 结，下半 年工作计 划',
          class: 'health',
          content: '待好秘书'
        },
        {
          start: '2019-07-20 10:00',
          end: '2019-07-20 12:00',
          title: '项目会议',
          class: 'sport',
          content: 'B017会议室'
        },
        {
          start: '2019-07-20 10:30',
          end: '2019-07-20 12:00',
          title: '私下啊的美女约会',
          class: 'work',
          content: '买东西'
        },
        {
          start: '2019-07-20 10:30',
          end: '2019-07-20 12:40',
          title: '项目会议1',
          class: 'meeting'
        },
        {
          start: '2019-07-20 11:00',
          end: '2019-07-20 13:00',
          title: '打跑跑到卡丁车',
          class: 'work'
        },
        {
          start: '2019-07-20 14:30',
          end: '2019-07-20 17:30',
          title: '公司年会',
          class: 'meeting'
        }
    ]
  }),
  filters: {
    addZero (val) {
      return val < 10 ? '0' : ''
    }
  },
  methods: {
    addEvent () {
      this.events.push({
        start: '2018-11-20 12:00',
        end: '2018-11-20 17:00',
        title: 'A new event',
        class: 'blue-event'
      })
    }
  }
})
