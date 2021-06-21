// components/movie/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event) {
      this.triggerEvent('tap-on-movie', {
        movieId: this.properties.movie.id
      }, {
        bubbles: true,
        composed: true
      });
    }
  }
})