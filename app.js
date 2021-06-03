App(
  {
    onLaunch() {
      console.log("mini program starts");
    },
    glocalProp: "This is global property",
    gIsPlayingMusic: false,
    gPlayingMusicId: -1,
    gBaseUrl: "http://t.talelin.com/v2/movie/",
    gMoviesPerPage: 15
  }
)