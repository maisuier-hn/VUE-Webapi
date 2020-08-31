<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
     <div>
        <table id="table" border="1">
          <thead>
                 <tr>
                    <th>编号</th>
                     <th>姓名</th>
                     <th>年龄</th>
                 </tr>
            </thead><tbody>
                  <tr v-for="(user,index) in stu" :id="index" :key="index">
                    <td>{{index+1}}</td>
                     <td>{{user.age}}</td>
                      <td>{{user.name}}</td>
                  </tr>
                  </tbody>
        </table>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      user: {name: '', age: ''},
      stu: [
        {'name': '张三', 'age': 17},
        {'name': '里斯', 'age': 18},
        {'name': '王五', 'age': 19}
      ]
    }
  },
  mounted () {
    this.send()
  },
  methods: {
    send () {
      var res = ''
      axios.get('/source/database').then(response => {
        console.log(response.data)
        res = response.data
        this.msg = res
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
