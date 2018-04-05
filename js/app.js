(function(){
  'use strict';
  angular.module('AppModul2Solution',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShareDataService', ShareDataService);

  function ShareDataService(){
    var service = this;
    var items = [];

    service.getItems = function (){
      return items;
    };
    service.addItem = function (itemName,quantity){
      var item = {
        name: itemName,
        quantity : quantity
      };
    items.push(item);
    console.log(" Item pushed into ShareDataService Items: ", " Done");

    };
  }

  ToBuyController.$inject = ['ShareDataService'];
  function ToBuyController(ShareDataService){
    var vm = this;
    vm.shoppingList =[
      {
        name: 'Cookies',
        quantity: 1
      },
      {
        name: 'Salad',
        quantity: 2
      },
      {
        name: 'Muffin',
        quantity: 5
      }
    ];
    vm.sendList = function (s1, s2){
      ShareDataService.addItem(s1,s2);
      console.log(" Item pushed into ShareDataService listItems_: ", " Done");
    };
  };

  AlreadyBoughtController.$inject = ['ShareDataService'];
  function AlreadyBoughtController(ShareDataService){
    var vm = this;
    vm.ListSelected =[];
    vm.getShoppingList = function (){
      return ShareDataService.getItems();
    };


  }
})();
