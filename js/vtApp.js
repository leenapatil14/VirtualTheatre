angular.module('vtStarter', ["ui.router"])
.config(function($stateProvider){
    $stateProvider
    .state("home", {
        url:"/home",
        templateUrl : "VTHome/home.html",
        controller: "homeCtrl",
        params: {
            args: null,
            prevState:null
        }
    })
    .state("register", {
        url:"/register",
        templateUrl : "Register/Register.html",
        controller: "registerCtrl",
        params: {
            args: null,
            prevState:null
        }
    })
    .state("screen", {
        url:"/screen",
        templateUrl : "Screen/Screen.html",
        controller: "screenCtrl",
        params: {
            args: null,
            prevState:null
        }
    })
    .state("PaymentConfirmation", {
        url:"/PaymentConfirmation",
        templateUrl : "PaymentConfirmation/PaymentConfirmation.html",
        controller: "paymentConfirmationCtrl",
        params: {
            args: null,
            prevState:null
        }
    })
    .state("MovieBook", {
        url:"/MovieBook",
        templateUrl : "MovieBook/MovieBook.html",
        controller: "movieBookCtrl",
        params: {
            args: null,
            prevState:null
        }
    })
    .state("Login", {
        url:"/Login",
        templateUrl : "Login/Login.html",
        controller: "loginCtrl",
        params: {
            args: null,
            prevState:null
        }
    })

})
.controller('vtStarterCtrl', function ($scope, $state, $rootScope,$stateParams) {

    $rootScope.currenttab='homeTab';
    $state.go("home");
    $rootScope.gotoPage=function(pageName,args,prevState){
        $state.go(pageName,{args:args,prevState:prevState});
    }
    $rootScope.goBack=function(pageName){
        $state.go(pageName);
    }

})
.controller('loginCtrl', function ($scope, $state, $rootScope,$stateParams) {

    $rootScope.currenttab='login';
    //$state.go("home");
    $scope.prevPage=$stateParams.prevState;
    $scope.selectedMovie=$stateParams.args;
    $state.loginData={};
    

})
.controller('homeCtrl', function ($scope, $state, $rootScope, $filter,$stateParams) {

    $rootScope.currenttab="homeTab";
    $scope.prevPage=$stateParams.prevState;
    console.log("inside home")
    $scope.showDescription=true;
    $scope.closeFilters=true;
    $scope.movies=[
        {'title':'ABCD','description':'The next day, we continued our road trip. By the time we left our hotel rooms, the plan was to visit Shanivar Wada, by the time we had breakfast, the destination changed to Tulsi Bagh, and at no surprise, we finally departed for the fort Sinhagad. The fort, previously know as Kondhana, is famous for many battles, one of which is associated with a famous anecdote, when in one of the battle, a brave soldier Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words ‘Gad ala pan Sinha gela’ (Fort is captured but the loin is lost).','time':'today, 2:30 PM','duration':'2 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'Hindi','year':'2010','rating':'4','ratings':['Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words']},
        {'title':'ABCD','description':'The next day, we continued our road trip. By the time we left our hotel rooms, the plan was to visit Shanivar Wada, by the time we had breakfast, the destination changed to Tulsi Bagh, and at no surprise, we finally departed for the fort Sinhagad. The fort, previously know as Kondhana, is famous for many battles, one of which is associated with a famous anecdote, when in one of the battle, a brave soldier Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words ‘Gad ala pan Sinha gela’ (Fort is captured but the loin is lost).','time':'today, 2:30 PM','duration':'2 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'Hindi','year':'2010','rating':'4','ratings':['Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words']},
        {'title':'ABCD','description':'The next day, we continued our road trip. By the time we left our hotel rooms, the plan was to visit Shanivar Wada, by the time we had breakfast, the destination changed to Tulsi Bagh, and at no surprise, we finally departed for the fort Sinhagad. The fort, previously know as Kondhana, is famous for many battles, one of which is associated with a famous anecdote, when in one of the battle, a brave soldier Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words ‘Gad ala pan Sinha gela’ (Fort is captured but the loin is lost).','time':'today, 2:30 PM','duration':'2 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'Hindi','year':'2010','rating':'4','ratings':['Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words']},
        {'title':'ABCD','description':'The next day, we continued our road trip. By the time we left our hotel rooms, the plan was to visit Shanivar Wada, by the time we had breakfast, the destination changed to Tulsi Bagh, and at no surprise, we finally departed for the fort Sinhagad. The fort, previously know as Kondhana, is famous for many battles, one of which is associated with a famous anecdote, when in one of the battle, a brave soldier Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words ‘Gad ala pan Sinha gela’ (Fort is captured but the loin is lost).','time':'today, 2:30 PM','duration':'2 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'Hindi','year':'2010','rating':'4','ratings':['Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words']},
        {'title':'ABCD','description':'The next day, we continued our road trip. By the time we left our hotel rooms, the plan was to visit Shanivar Wada, by the time we had breakfast, the destination changed to Tulsi Bagh, and at no surprise, we finally departed for the fort Sinhagad. The fort, previously know as Kondhana, is famous for many battles, one of which is associated with a famous anecdote, when in one of the battle, a brave soldier Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words ‘Gad ala pan Sinha gela’ (Fort is captured but the loin is lost).','time':'today, 2:30 PM','duration':'2 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'Hindi','year':'2010','rating':'4','ratings':['Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words']},
        {'title':'ABCD444','description':'The next day, we continued our road trip. By the time we left our hotel rooms, the plan was to visit Shanivar Wada, by the time we had breakfast, the destination changed to Tulsi Bagh, and at no surprise, we finally departed for the fort Sinhagad. The fort, previously know as Kondhana, is famous for many battles, one of which is associated with a famous anecdote, when in one of the battle, a brave soldier Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words ‘Gad ala pan Sinha gela’ (Fort is captured but the loin is lost).','time':'today, 2:30 PM','duration':'3 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'English','year':'2012','rating':'4','ratings':['Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words','Tanaji Malusare, sacrificed his life, Chatrapati Shivaji Maharaj, the founder of Swarajya and the Maratha Empire, is said to have expressed his repentance with the words']}
    ];
    $scope.selectedLang=[];
    $scope.languages=[{'name':'English','isChecked':'false'},
    {'name':'Hindi','isChecked':'false'},
    {'name':'Marathi','isChecked':'false'}
];
    $scope.genres=[{'name':'Comedy','isChecked':'false'},
    {'name':'action','isChecked':'false'},
    {'name':'Drama','isChecked':'false'}];
    $scope.open_description=function(movie){
        $scope.showDescription=false;
        $scope.detailedDesc=movie;
    }
    $scope.close_description=function(){
        $scope.detailedDesc={}
        $scope.showDescription=true;
        
    }
    $scope.showFilters=function(){
        $scope.closeFilters=!$scope.closeFilters;
    }
    
    $scope.selectLang = function (name) {
        if($scope.selectedLang.indexOf(name) == -1){
            $scope.selectedLang.push(name);
        }
        else{
            $scope.selectedLang.splice($scope.selectedLang.indexOf(name),1);
        }
        //console.log($scope.selectedLang);
  
    }
    $scope.selectedGenre=[];
    $scope.selectGenre = function (name) {
        if($scope.selectedGenre.indexOf(name) == -1){
            $scope.selectedGenre.push(name);
        }
        else{
            $scope.selectedGenre.splice($scope.selectedGenre.indexOf(name),1);
        }
        //console.log($scope.selectedGenre);
  
    }
    

    $scope.checkedFilter = function (item) {
        if($scope.selectedLang.length>0){
            return $scope.selectedLang.indexOf(item.language) !== -1;
        }
        else{
            return true
        }
        
      };

      $scope.checkedGenreFilter = function (item) {
        if($scope.selectedGenre.length>0){
            return $scope.selectedGenre.indexOf(item.genre) !== -1;
        }
        else{
            return true
        }
        
      };
    
  

})
.controller('registerCtrl', function ($scope, $state, $rootScope,$stateParams) {

    $rootScope.currenttab="regTab";
    $scope.prevPage=$stateParams.prevState;
    console.log("inside reg");
    


})
.controller('screenCtrl', function ($scope, $state, $rootScope,$stateParams) {

    $rootScope.currenttab="screenTab";
    $scope.prevPage=$stateParams.prevState;
    console.log("inside screenCtrl");
    $scope.showDescription=true;
    $scope.movies=[
        {'title':'ABCD444','upcoming':'true','time':'today, 2:30 PM','duration':'3 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'English','year':'2012'},
        {'title':'ABCD444','upcoming':'true','time':'today, 2:30 PM','duration':'3 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'English','year':'2012'},
        {'title':'ABCD444','upcoming':'true','time':'today, 2:30 PM','duration':'3 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'English','year':'2012'},
        {'title':'ABCD444','upcoming':'true','time':'today, 2:30 PM','duration':'3 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'English','year':'2012'},
        {'title':'ABCD444','upcoming':'true','time':'today, 2:30 PM','duration':'3 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'English','year':'2012'},
        {'title':'ABCD444','upcoming':'true','time':'today, 2:30 PM','duration':'3 hr 30 mins','frontImg':'images/pune/lonavala.jpeg','backImg':'images/pune/lonavala.jpeg','genre':'Comedy','language':'English','year':'2012'}
    ];
    $scope.open_screen=function(movie){
        $scope.showDescription=false;
        $scope.detailedDesc=movie;
    }
    $scope.close_screen=function(){
        $scope.detailedDesc={}
        $scope.showDescription=true;
        
    }

})
.controller('paymentConfirmationCtrl', function ($scope, $state, $rootScope,$stateParams) {

    $rootScope.currenttab="movieCtrlbook";
    $scope.bookedMovie=$stateParams.args;
    console.log("inside movieCtrlbook")

})
.controller('movieBookCtrl', function ($scope, $state, $rootScope,$stateParams) {

    $rootScope.currenttab="movieBookCtrl";
    $scope.prevPage=$stateParams.prevState;
    $scope.selectedMovie=$stateParams.args;
    $state.bookingData={};

})