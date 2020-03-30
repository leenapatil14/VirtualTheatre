﻿
// //create firebase database reference

angular.module('vtStarter', ["ui.router",'firebase'] )

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
    $rootScope.isLoggedin=false;
    
    $rootScope.gotoPage=function(pageName,args,prevState){
        $state.go(pageName,{args:args,prevState:prevState});
    }
    $rootScope.goBack=function(pageName){
        $state.go(pageName);
    }

})
.controller('loginCtrl', function ($scope, $state, $rootScope,$stateParams, $firebase) {

    $rootScope.currenttab='login';
    //$state.go("home");
    $scope.prevPage=$stateParams.prevState;
    $scope.selectedMovie=$stateParams.args;
    $state.registrationData={};
    $scope.isNew=false;
    $state.loginData={};
    
    $scope.login=function(){
        var config = {
            apiKey: "AIzaSyAgvsOC1ZzJlrJ3Jfl3NV4jPqq_Q2izk_Y",
            authDomain: "covid-19-c798b.firebaseapp.com",
            databaseURL: "https://covid-19-c798b.firebaseio.com",
            projectId: "covid-19-c798b",
            storageBucket: "covid-19-c798b.appspot.com",
            messagingSenderId: "528065569193",
            appId: "1:528065569193:web:604cc965450e048bab24b8",
            measurementId: "G-90L9M26GWC"
          };
        const r = firebase.initializeApp(config);
        var dbRef = r.database();
        var contactsRef = dbRef.ref('Users/Details/'+$scope.email);
        contactsRef.on("value", function(snapshot) {
            console.log(snapshot.val());
            if(snapshot.val().password == $scope.password)
                $state.go("home");

          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
          
    }
    
    $scope.toggleRegister=function(){
        $scope.isNew=!$scope.isNew;
    }

    $scope.save=function(){
        var config = {
            apiKey: "AIzaSyAgvsOC1ZzJlrJ3Jfl3NV4jPqq_Q2izk_Y",
            authDomain: "covid-19-c798b.firebaseapp.com",
            databaseURL: "https://covid-19-c798b.firebaseio.com",
            projectId: "covid-19-c798b",
            storageBucket: "covid-19-c798b.appspot.com",
            messagingSenderId: "528065569193",
            appId: "1:528065569193:web:604cc965450e048bab24b8",
            measurementId: "G-90L9M26GWC"
          };
        const r = firebase.initializeApp(config);
        var dbRef = r.database();
        var contactsRef = dbRef.ref('Users/Details/'+$scope.email);
        contactsRef.set({
            name: $scope.customer_name,
            password: $scope.password,
            email: $scope.email
        });
        $state.go("home");
    }

})
.controller('homeCtrl', function ($scope, $state, $rootScope, $filter,$stateParams) {

    $rootScope.currenttab="homeTab";
    $scope.prevPage=$stateParams.prevState;
    console.log("inside home")
    $scope.showDescription=true;
    $scope.closeFilters=true;
    $scope.selectedGenre=[];
    $scope.selectedLang=[];
    $scope.filters_applied=$scope.selectedLang.length+$scope.selectedGenre.length;
    
    $scope.movies;
    var data = [];
   
    
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=b9ac7a00&s=Batman',
        async: false,
        dataType: 'json',
        success: function (json) {
          mydata = json.Search;
          $scope.movies = json.Search;
        }
      });

    console.log($scope.movies)


    
    
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
        $scope.filters_applied=$scope.selectedLang.length+$scope.selectedGenre.length;
  
    }
    
    $scope.selectGenre = function (name) {
        if($scope.selectedGenre.indexOf(name) == -1){
            $scope.selectedGenre.push(name);
        }
        else{
            $scope.selectedGenre.splice($scope.selectedGenre.indexOf(name),1);
        }
        //console.log($scope.selectedGenre);
        $scope.filters_applied=$scope.selectedLang.length+$scope.selectedGenre.length;
  
    }
    

    $scope.checkedFilter = function (item) {
        if($scope.selectedLang.length>0){
            $scope.filters_applied=$scope.selectedLang.length+$scope.selectedGenre.length;
            return $scope.selectedLang.indexOf(item.language) !== -1;
        }
        else{
            return true
        }
        
      };

      $scope.checkedGenreFilter = function (item) {
        if($scope.selectedGenre.length>0){
            $scope.filters_applied=$scope.selectedLang.length+$scope.selectedGenre.length;
            return $scope.selectedGenre.indexOf(item.genre) !== -1;
        }
        else{
            return true
        }
        
      };
    
  

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
    $scope.showMovieFn=function(movie){
        $scope.showMovie=!$scope.showMovie;
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