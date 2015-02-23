(function(){
  var app = angular.module(
    'hohApp', ['ngAnimate']
    );

  app.controller('HohController', function($scope){

    $scope.hipsters = hipsters;
    $scope.outcasts = outcasts;


    var randomHipsterIndex = Math.floor(Math.random()*hipsters.length)
    $scope.randomHipster = hipsters[randomHipsterIndex];

    var randomOutcastIndex = Math.floor(Math.random()*outcasts.length)
    $scope.randomOutcast = outcasts[randomOutcastIndex];

    $scope.randoms = shuffle([$scope.randomOutcast, $scope.randomHipster]);

    $scope.reloadPage = function(){
      console.log("reload");
      // location.reload();
      // $scope.hipsters = $scope.hipsters;
      // $scope.outcasts = $scope.outcasts;
      var randomHipsterIndex = Math.floor(Math.random()*hipsters.length)
      $scope.randomHipster = hipsters[randomHipsterIndex];

      var randomOutcastIndex = Math.floor(Math.random()*outcasts.length)
      $scope.randomOutcast = outcasts[randomOutcastIndex];

      $scope.randoms = shuffle([$scope.randomOutcast, $scope.randomHipster]);

    };

    function shuffle(array){ 
        for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
        return array;
    };

  });

    hipsters = [{
      name: 'Hipster',
      imageUrl: 'http://i.imgur.com/DMuYkOd.jpg',
    },
    {
      name: 'Hipster',
      imageUrl: 'http://i.imgur.com/p2bkMj5.jpg',
    },
    {
      name: 'Hipster',
      imageUrl: 'http://i.imgur.com/miv9xKc.jpg',
    },
    {
      name: 'Hipster',
      imageUrl: 'http://i.imgur.com/2Pz3qqr.jpg'
    },
    {
      name: 'Hipster',
      imageUrl: 'http://i.imgur.com/chiLKgN.jpg'
    },
    {
      name: 'Hipster/homeless..',
      imageUrl: 'http://i.imgur.com/N2JRx87.jpg'
    },
    {
      name: 'Hipster',
      imageUrl: 'http://i.imgur.com/uvo7AzH.jpg'
    }
    ];

    outcasts = [{
      name: 'Homeless',
      imageUrl: 'http://fashionsup.com/wp-content/uploads/2013/05/Homeless-like-clothes-2-387x500.jpg',
    },
    {
      name: 'Homeless',
      imageUrl: 'http://www.chap-at-the-door.org.uk/Education/images/Homeless%20Person.jpg',
    },
    {
     name: 'Homeless',
     imageUrl: 'http://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-580x288/public/news/research/news/140402-homeless.jpg?itok=yAXdyGPA',
    },
    {
      name: 'Homeless',
      imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQCijJ67zxzclZPSDR--y6OhM9lVyspgmJClGYT0xZFRc8N0fOgig',
    },
    {
    name: 'Homeless',
    imageUrl: 'http://api.ning.com/files/kV4MbYiv7oTNUmLfz7bTNiklob770Y0TageA4G8*-L93SJjLSIxi3Q7dXj7YsWPQxI8g39BYK1j3axx9m7XF7HgZBp3HEegl/1082039826.jpeg',
    },


    {
    name: 'Homeless',
    imageUrl: 'http://4.bp.blogspot.com/-WjdO5YaxfLg/UDEmQgB_g9I/AAAAAAAAMWw/BmCDX_BXUlc/s1600/1.jpeg',
    },
    {
    name: 'Homeless',
    imageUrl: 'http://1.bp.blogspot.com/-Amn9ZdaT5lA/UE33wnrlapI/AAAAAAAA9B8/umYEye6bjT4/s1600/yohjihomeless1.jpg',
    },
    {
    name: 'Homeless',
    imageUrl: 'http://www.thenanfang.com/blog/wp-content/uploads/2014/07/luoyang-old-hipster-header.jpg',
    },
    {
    name: 'Homeless gerry',
    imageUrl: 'https://scontent-b-lhr.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1549464_10204790740664837_644675982784413275_n.jpg?oh=96f4c0833cbbc0c9d38729a69d211002&oe=556D1A1A',
    }
    ];


})();
