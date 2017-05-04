let superHeroData = [
  {
    name: 'Batman',
    number: '555-2286',
    comic: 'DC',
    img_url: 'https://cdn.traileraddict.com/article/wp-content/uploads/2016/10/Adam-West-Batman-60s-1280x721.jpg'
  },
  {
    name: 'Superman',
    number: '555-7873',
    comic: 'DC',
    img_url: 'http://cdn3-www.craveonline.com/assets/uploads/2017/01/Feature-1.jpg'
  },
  {
    name: 'Wonder Woman',
    number: '555-9875',
    comic: 'DC',
    img_url: 'https://static.comicvine.com/uploads/scale_medium/8/80280/2715010-wonderwoman1940.jpg'
  },
  {
    name: 'Spiderman',
    number: '555-4531',
    comic: 'Marvel',
    img_url: 'https://i.ytimg.com/vi/js9hghdd_x8/hqdefault.jpg'
  },
  {
    name: 'Ironman',
    number: '555-8932',
    comic: 'Marvel',
    img_url: 'http://pre05.deviantart.net/ffe5/th/pre/i/2015/134/7/2/iron_man_vintage_by_krypog-d8tcmww.jpg'
  },
  {
    name: 'Captain America',
    number: '555-6611',
    comic: 'Marvel',
    img_url: 'https://s-media-cache-ak0.pinimg.com/originals/2a/fb/18/2afb18e22ec1e6169a6dcc9123c59ecb.jpg'
  }
]

angular
  .module('superhero', [])
  .controller('SuperHeroesController', [
    SuperHeroesControllerFunction
  ])

function SuperHeroesControllerFunction () {
  this.superhero = superHeroData
  this.showHero = function(){
    
  }
}
