// my-component.ts
export default {
  data() {
    return { count: 0 }
  },
  template: `<div>
  <button @click="count++">
    count is {{ count }}
  </button>`
}
