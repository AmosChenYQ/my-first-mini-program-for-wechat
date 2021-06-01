// components/movie-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['movie-list-class'],

  properties: {
    title: {
      type: String,
      value: "In Theaters Now"
    },
    movies: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    moreMoviesType: {
      "In Theaters Now": "in_theaters",
      "Coming Soon": "coming_soon",
      "Douban Top 250": "top250",
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNavigateToMoreMovies(event) {
      let type = this.data.moreMoviesType[this.properties.title];
      wx.navigateTo({
        url: `/pages/more-movies/more-movies?type=${type}`,
      });
    }
  }
})