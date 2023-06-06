import * as angular from "angular";

angular
  .module("codecraft")
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("list", {
        url: "/",
        views: {
          main: {
            // templateUrl: "templates/list.html",
            // controller: "PersonListController"
            template: "<person-list></person-list>",
          },
          search: {
            template: "<search></search>",
          },
        },
      })
      .state("edit", {
        url: "/edit/:email",
        views: {
          main: {
            template: "<person-edit></person-edit>",
          },
        },
      })
      .state("create", {
        url: "/create",
        views: {
          main: {
            template: "<person-create></person-create>",
          },
        },
      });

    $urlRouterProvider.otherwise("/");
  });
