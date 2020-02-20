var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/home.html",
        // controller: "defaultController" 
        controller: "homeController",
        activetab: "home"
    })
    .when("/tent", {
        templateUrl: "views/tent.html",
        controller: "tentController",
        activetab: "tent"
    })
    .when("/store", {
        templateUrl: "views/store.html",
        controller: "storeController",
        activetab: "store"
    })
    .when("/about", {
        templateUrl: "views/about.html",
        controller: "aboutController",
        activetab: "about"
    })
    .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "contactController",
        activetab: "contact"
    })
})


app.controller("homeController", function($scope) {
    // section 1 on landingpage
    $scope.backgroundImage= "mountan2.png"
    $scope.title= "Tältet ELBRUS är äntligen här!"
    $scope.info= "Ett helt nytt revolutionerande tält som kommer förändra tältandet värden över. Med hjälp av teknik från den senaste nobelpristagaren  inom textil. "
    $scope.button="knapp"

    // section 2 on landingpage
    $scope.tents = [
        { image: "tent-green.png", title: "Elbrus - Grön", text: "Det underbart gröna tältet för den som gillar sommarens gröna färg med ett skydd som svalkar." },
        { image: "tent-orange.png", title: "Elbrus - Orange", text: "Den heta äldiga oranga färgen för den som vill synas samt att få känna på de heta strålarna som kommer igenom" },
        { image: "tent-yellow.png", title: "Elbrus - Gul", text: "Den glada sommar-dagens färg som lyser upp området när solen är frånvarande och färgar omgivningen" },
    ]
 
 
})
app.controller("tentController", function($scope) {
    $scope.pageTitle= "Tält"
})
app.controller("storeController", function($scope) {
    $scope.pageTitle= "Store"
})
app.controller("aboutController", function($scope) {
    $scope.pageTitle= "About"
})
app.controller("contactController", function($scope) {
    $scope.pageTitle= "Contact"
})

// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        // template: '<header><nav class="navbar navbar-expand-lg navbar-light bg-light"><div class="container"><a class="navbar-brand" href="#">Navbar</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span> </button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="#/!">Tältet <span class="sr-only">(current)</span></a></li> <li class="nav-item"><a class="nav-link" href="#!products">Products</a></li><li class="nav-item"><a class="nav-link" href="#!contact">Contact</a> </li> </ul></div></div></nav></header>'
        template: '<header><nav><a href="#!"><img src="images/size H128.png" alt="logo" class="logo"></a><ul class="nav__links"><li><a href="#!tent">Tält</a></li><li><a href="#!store">Butik</a></li><li><a href="#!about">Om oss</a></li><li><a href="#!contact">Kontakt</a></li></ul><a href="#!store" class="btnPosition"><button class="btnPrimary">Beställ</button></a></nav></header>'
    }
})
app.directive("appfooter", function() {
    return {
        template: '<footer><div class="footerItem"><img src="images/size H128.png" alt="logo" class="logo"><div id="item-b"><h2 class="h2">Besök oss</h2><p class="p1">Elbrus AB</p><p class="p1">Port Anders gata 9</p><p class="p1">722 12</p></div><div id="item-c"><h2 class="h2">Kontakta oss</h2><p class="p1">ja@elbrus.se</p><p class="p1">+46(0)72-2092552</p></div></div></footer>'
    }
})
