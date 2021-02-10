const app = new Vue({
  el: "#app",
  data: {
    message: "hello world",
  },
});

const app2 = new Vue({
  el: "#app-2",
  data: {
    message: "Вы загрузили эту страницу: " + new Date().toLocaleString(),
  },
});

const app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true,
  },
});

const app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ name: 1 }, { name: 2 }, { name: 3 }],
  },
});

const app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Привет, Мир!",
  },
  methods: {
    reverse: function () {
      this.message = this.message.split(",").reverse().join(", ");
    },
  },
});

const app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello",
  },
});

Vue.component("todo-item", {
  template: "<li>Todo item</li>",
});

const app7 = new Vue({
  el: "#app-7",
});

Vue.component("todo-item2", {
  props: ["todo"],
  template: "<li>{{todo.val}} - {{todo.name}}</li>",
});

const app8 = new Vue({
  el: "#app-8",
  data: {
    todos: [
      { id: 1, val: 123, name: 123213 },
      { id: 2, val: 232, name: 12312312 },
      { id: 3, val: "fewf", name: "wefwefwef" },
    ],
  },
});
