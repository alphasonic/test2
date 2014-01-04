app.run(['$templateCache', function($templateCache){  'use strict';

  $templateCache.put('views/carte-category-list.html',
    "<div id=carte-category-list ng-controller=CarteCategoryListCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>CARTE</div></div><div image-rotor=\"\" image-url=imageUrl><a class=img-click ng-click=displayProductList(selectedElement)></a></div><div ng-list-scroll=\"\" class=category-list items=\"cat in categories\" order-by=NUM_ORDER property-id=CATEGORY_ID ng-model=selectedElement><a ng-click=displayProductList(cat.CATEGORY_ID)><div class=row><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=\"col100 has-right-icon\">{{cat.NAME}}</div></div></a></div></div>"
  );


  $templateCache.put('views/carte-product-list.html',
    "<div id=carte-product-list ng-controller=CarteProductListCtrl><div class=header><div class=nav-left><a ng-click=backToCategory()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>{{categoryTitle}}</div></div><div image-rotor=\"\" image-url=imageUrl><a class=img-click ng-click=displayProduct(selectedElement)></a><div class=product-order><div order-counter=\"\" element=selectedProduct><a ng-click=goToOrder()><i class=\"fa fa-shopping-cart fa-30px\"></i></a></div></div></div><div ng-list-scroll=\"\" class=product-list items=\"prod in products\" order-by=NUM_ORDER property-id=PRODUCT_ID ng-model=selectedElement><a ng-click=displayProduct(prod.PRODUCT_ID)><div class=row><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=\"col100 has-right-icon\"><div product-description=\"\" product=prod></div></div></div></a></div></div>"
  );


  $templateCache.put('views/carte-product.html',
    "<div id=carte-product ng-controller=CarteProductCtrl><div class=header><div class=nav-left><a ng-click=back()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>{{categoryTitle}}</div></div><div image-rotor=\"\" image-url=imageUrl></div><div class=product-description><div id=title><ul class=listview><li><div class=row><a><div product-description=\"\" product=product></div></a></div></li></ul><p ng-bind-html=product.DESCRIPTION></p></div><div id=description></div><div class=product-order><div order-counter=\"\" element=product><a ng-click=toogleFavorite()><i ng-hide=isFavorite() class=\"fa fa-heart-o fa-40px\"></i> <i ng-show=isFavorite() class=\"fa fa-heart fa-40px\"></i></a><a ng-click=goToOrder()><i class=\"fa fa-shopping-cart fa-40px\"></i></a></div></div></div></div>"
  );


  $templateCache.put('views/carte.html',
    "<div id=carte ng-controller=CarteCtrl><ul class=carousel rn-carousel=\"\" rn-carousel-index=carouselIndex><li ng-include=\"'views/carte-category-list.html'\"></li><li ng-include=\"'views/carte-product-list.html'\"></li><li ng-include=\"'views/carte-product.html'\"></li></ul></div>"
  );


  $templateCache.put('views/directives/address-display.html',
    "<div class=address-display ng-style=getImage()><div>{{addressDisplay.STREET_NAME}}<span ng-hide=isStreetName2Null()><br>{{addressDisplay.STREET_NAME2}}</span>{{addressDisplay.STREET_NB}} {{addressDisplay.BELL}}</div><div>{{addressDisplay.POSTCODE}} {{addressDisplay.CITY}}</div></div>"
  );


  $templateCache.put('views/directives/ng-iscroll-list.html',
    "<div><div id=scroller><ul class=listview><li ng-transclude=\"\" last-repeat=false></li></ul><div class=gap></div></div></div>"
  );


  $templateCache.put('views/directives/ng-iscroll.html',
    "<div><div id=scroller><ul class=listview><div ng-transclude=\"\" last-repeat=false></div></ul></div></div>"
  );


  $templateCache.put('views/directives/order-counter.html',
    "<div class=order-counter><div class=extra-icons ng-transclude=\"\"></div><span ng-hide=\"getQuantity()==0\"><a ng-click=removeOne()><i class=\"fa fa-minus-circle\"></i></a><span class=quantity>{{getQuantity()}}</span></span><a ng-click=addOne()><i class=\"fa fa-plus-circle\"></i></a></div>"
  );


  $templateCache.put('views/directives/product-description.html',
    "<div class=product-description-price><span class=pcs>{{product.PIECES}} pc |</span> <span class=price>{{product.PRICE | currency:'€'}}</span></div><div class=product-description-name>{{product.NAME}}</div>"
  );


  $templateCache.put('views/favorite-list.html',
    "<div class=favorite-list ng-controller=FavoriteListCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>FAVORIS</div></div><div class=favorite-empty ng-show=isFavoriteEmpty()><i class=\"fa fa-heart-o fa-4x\"></i><p>Vous n'avez pas de favoris</p></div><div ng-hide=isFavoriteEmpty()><div image-rotor=\"\" image-url=imageUrl><div class=product-order><div order-counter=\"\" element=selectedProduct><a ng-click=goToOrder()><i class=\"fa fa-shopping-cart fa-30px\"></i></a></div></div></div><div ng-list-scroll=\"\" class=product-list items=\"prod in products\" property-id=PRODUCT_ID ng-model=selectedElement><a ng-click=displayProduct(prod.PRODUCT_ID)><div class=row><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=\"col100 has-right-icon\"><div product-description=\"\" product=prod></div></div></div></a></div></div></div>"
  );


  $templateCache.put('views/login.html',
    "<div ng-controller=LoginCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>Login</div></div><div class=space-full><form name=signup ng-submit=login()><input type=submit value=Envoyer><div class=form-group><div class=row><input name=phone_num ng-model=profil.PHONE_NUM placeholder=\"Numéro de téléphone\" required></div><div class=row><input type=password id=password ng-model=profil.PASSWORD placeholder=\"Mot de passe\"></div><div class=row ng-show=newUser><input type=password id=confirm-password ng-model=confirmPwd placeholder=\"Confirmer Mot de passe\"></div></div></form></div><div class=space-hz><a class=\"btn btn-rounded\" ng-click=login()><span ng-hide=newUser><i class=\"fa fa-sign-in\"></i> Login</span><span ng-show=newUser><i class=\"fa fa-sign-in\"></i> Créer mon profil</span></a></div><div class=space-full><a class=\"btn btn-rounded\" ng-click=switchNew()><span ng-hide=newUser><i class=\"fa fa-user\"></i> S'inscrire</span><span ng-show=newUser><i class=\"fa fa-times\"></i> Annuler</span></a></div></div>"
  );


  $templateCache.put('views/menu.html',
    "<div class=main-menu ng-controller=MenuCtrl ng-iscroll=0><div id=scroller><div><a class=menu-carte ng-click=\"changePage('carte-category-list.html')\"></a></div><div><a class=menu-favoris ng-click=\"changePage('favorite-list.html')\"></a></div><div><a class=menu-commande ng-click=\"changePage('order-step1.html')\"></a></div><div><a class=menu-boutiques ng-click=\"changePage('shop-list.html')\"></a></div><div><a class=menu-profil ng-click=\"changePage('profil.html')\"></a></div><div ng-hide=pageEmpty()><a class=menu-closer ng-click=closeMenu()></a></div></div></div>"
  );


  $templateCache.put('views/order-step1.html',
    "<div class=order-step1 ng-controller=OrderStep1Ctrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>COMMANDE</div></div><div class=order-empty ng-show=isOrderEmpty()><i class=\"fa fa-shopping-cart fa-4x\"></i><p>Vous n'avez pas encore sélectionné de plats</p></div><div ng-hide=isOrderEmpty()><ul class=listview><li ng-repeat=\"prod in products\"><div class=row><div class=col100><div product-description=\"\" product=prod></div><div order-counter=\"\" element=prod><a ng-click=goToProduct(prod.PRODUCT_ID)><span class=fa-stack><i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-search fa-stack-1x\"></i></span></a><a ng-click=removeAll(prod.PRODUCT_ID)><span class=fa-stack><i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-times fa-stack-1x\"></i></span></a></div></div></div></li><li><div class=row><div class=product-description-price>{{getTotalPieces()}} pcs | {{getTotalMoney() | currency:'€'}}</div><div class=product-description-name>Total</div></div></li></ul><br><div class=space-hz><a class=\"btn btn-rounded\" ng-click=command()>Commander...</a></div></div></div>"
  );


  $templateCache.put('views/order-step2.html',
    "<div ng-controller=OrderStep2Ctrl><div class=header><div class=nav-left><a ng-click=backToStep1()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>COMMANDE</div></div><div class=btn-group-tab><a class=btn ng-click=setDelivery(true)><span class=tab-btn ng-class=\"{'active': isDelivery}\"><i class=\"fa fa-truck\"></i> Livraison</span></a><a class=btn ng-click=setDelivery(false)><span class=tab-btn ng-class=\"{'active': !isDelivery}\"><i class=\"fa fa-home\"></i> A emporter</span></a></div><div class=animate-show-container><div ng-show=isDelivery class=animate-hide><div class=space-full><a class=\"btn btn-invert\" ng-click=pickProfilAddress()><div ng-show=\"selectedProfilAddress==null\">Choisissez votre addresse</div><div ng-hide=\"selectedProfilAddress==null\"><div address-display=selectedProfilAddress></div></div></a><div class=space-vt><a ng-show=isDeliveryStepOk() class=\"btn btn-rounded\" ng-click=gotoStep3()>Suivant <i class=\"fa fa-chevron-right\"></i></a></div></div></div><div ng-hide=isDelivery class=animate-show><div class=space-full><a class=\"btn btn-invert\" ng-click=pickShopAddress()><div ng-show=\"selectedShop==null\">Choisissez un magasin</div><div ng-hide=\"selectedShop==null\"><div>{{selectedShop.NAME}}</div><div address-display=selectedShop.address></div></div></a><div class=space-vt><a ng-show=isTakeAwayStepOk() class=\"btn btn-rounded\" ng-click=gotoStep3()>Suivant <i class=\"fa fa-chevron-right\"></i></a></div></div></div></div></div>"
  );


  $templateCache.put('views/order-step3.html',
    "<div ng-controller=OrderStep3Ctrl><div class=header><div class=nav-left><a ng-click=backToStep2()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>COMMANDE</div></div><div class=space-full><div class=form-group><div class=styled-select><select ng-model=selectedDay name=select-day id=select-day data-native-menu=false ng-change=setSelectedDay()><option value=0>Aujourd'hui</option><option value=1>Demain</option><option value=2>Après demain</option></select></div></div></div><div class=space-hz><div class=form-group><div class=styled-select><select ng-model=selectedTime name=select-time id=select-time data-native-menu=false ng-change=setSelectedTime() ng-options=\"opt.LABEL for opt in timeList\"></select></div></div></div><div ng-show=isOrderReady() class=space-full><a class=\"btn btn-rounded\" ng-click=validate()><i class=\"fa fa-check\"></i> Envoyer</a></div></div>"
  );


  $templateCache.put('views/pick-profil-address.html',
    "<div ng-controller=PickProfilAddressCtrl><h3>Choisissez une adresse :</h3><ul class=listview><li ng-repeat=\"address in addresses\"><div class=row><div class=\"col100 has-right-icon\"><a ng-click=selectAddress(address)><div address-display=address></div><div ng-hide=isDelivered(address)>Cette addresse n'est pas déservie</div></a></div><div class=col-right-icon><a ng-click=removeAddress(address.ADDRESS_ID)><i class=\"fa fa-times\"></i></a></div></div></li></ul><div class=\"btn-group btn-group-justified space-full\"><a class=\"btn btn-rounded\" ng-click=addAddress()><i class=\"fa fa-plus\"></i> Ajouter</a><a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div></div>"
  );


  $templateCache.put('views/pick-shop.html',
    "<div ng-controller=PickShopAddressCtrl><h3>Choisissez une adresse :</h3><ul class=listview><li ng-repeat=\"shop in shops\"><div class=row><a ng-click=selectAddress(shop)><div>{{shop.NAME}}</div><div address-display=shop.address></div></a></div></li></ul></div>"
  );


  $templateCache.put('views/profil-update-address.html',
    "<div ng-controller=ProfilUpdateAddressCtrl id=profil-update-address><form class=form-horizontal role=form><div class=space-full><form ng-submit=validAddress()><input type=submit value=Envoyer><div class=form-group><div class=row><input id=street-name ng-model=address.STREET_NAME placeholder=\"Rue ligne 1\"></div><div class=row><input id=street-name2 ng-model=address.STREET_NAME2 placeholder=\"Rue ligne 2 (optionnel)\"></div><div class=row><input id=street-nb ng-model=address.STREET_NB placeholder=Numéro></div><div class=row><input id=bell ng-model=address.BELL placeholder=Sonnette></div><div class=row><input id=postcode ng-model=address.POSTCODE placeholder=\"Code postal\" ng-change=refreshCity(true)></div><div class=row><div class=styled-select><input ng-hide=legitPostcode placeholder=Ville disabled><select ng-show=legitPostcode ng-model=address.CITY name=city id=city ng-options=\"elt.CITY for elt in cityList\"></select></div></div></div></form></div><div class=\"space-hz btn-group\"><a class=\"btn btn-rounded\" ng-click=validAddress()><i class=\"fa fa-check\"></i> <span ng-show=\"address.ADDRESS_ID==null\">Créer</span><span ng-hide=\"address.ADDRESS_ID==null\">Modifier</span></a> <a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div></form></div>"
  );


  $templateCache.put('views/profil-update-password.html',
    "<div ng-controller=ProfilUpdatePasswordCtrl><form class=form-horizontal name=form><div class=space-full><form ng-submit=validPassword()><input type=submit value=Envoyer><div class=form-group><div class=row><input type=password id=old-password ng-model=password.OLDPWD placeholder=\"Ancien Mot de passe\"></div><div class=row><input type=password name=newPassword id=new-password ng-model=password.NEWPWD placeholder=\"Nouveau mot de passe\" ng-minlength=5><span class=error ng-show=form.newPassword.$error.minlength>Mot de passe trop court</span><br></div><div class=row><input type=password id=confirm-password ng-model=password.CONFIRMPWD placeholder=\"Confirmer mot de passe\"></div></div></form></div><div class=\"space-hz btn-group\"><a class=\"btn btn-rounded\" ng-click=validPassword()><i class=\"fa fa-check\"></i> Modifier</a><a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div></form></div>"
  );


  $templateCache.put('views/profil-update.html',
    "<div ng-controller=ProfilUpdateCtrl class=space-top><form class=form-horizontal role=form><div class=space-full><form ng-submit=validProfil()><input type=submit value=Envoyer><div class=form-group><div class=row><input id=prenom ng-model=profil.PRENOM placeholder=Prénom></div><div class=row><input id=nom ng-model=profil.NOM placeholder=Nom></div><div class=row><input id=prenom ng-model=profil.EMAIL placeholder=E-mail></div><div class=row><input id=prenom ng-model=profil.PHONE_NUM placeholder=\"N° de téléphone\"></div></div></form></div><div class=\"space-hz btn-group\"><a class=\"btn btn-rounded\" ng-click=validProfil()><i class=\"fa fa-check\"></i> Modifier</a> <a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div></form></div>"
  );


  $templateCache.put('views/profil.html',
    "<div ng-controller=ProfilCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>PROFIL</div></div><ul class=listview><li><a ng-click=displayUpdateProfil()><div class=row><div class=col-right-icon><i class=\"fa fa-edit\"></i></div><div class=\"col100 has-right-icon\"><div class=col1>Nom:</div><div class=col2>{{profil.PRENOM}} {{profil.NOM}}</div><div class=col1>E-mail:</div><div class=col2>{{profil.EMAIL}}</div><div class=col1>Telephone:</div><div class=col2>{{profil.PHONE_NUM}}</div></div></div></a></li><li><a ng-click=displayUpdatePassword()><div class=row><div class=col-right-icon><i class=\"fa fa-edit\"></i></div><div class=\"col100 has-right-icon\"><div class=col1>Mot de passe:</div><div class=col2>**********</div></div></div></a></li></ul><h3>Adresses :</h3><ul class=listview><li ng-repeat=\"address in profil.addresses\"><div class=row><div class=col-right-icon><a ng-click=askRemoveAddress(address)><i class=\"fa fa-times\"></i></a></div><div class=\"col100 has-right-icon\"><a ng-click=displayUpdateAddress(address)><div address-display=address></div></a></div></div></li></ul><div class=\"btn-group btn-group-justified space-full\"><a class=\"btn btn-rounded\" ng-click=displayUpdateAddress(null)><i class=\"fa fa-plus\"></i> Ajouter une adresse</a></div><div class=\"btn-group btn-group-justified space-full\"><a class=\"btn btn-rounded\" ng-click=signout(null)><i class=\"fa fa-sign-out\"></i> Se déconnecter</a></div></div>"
  );


  $templateCache.put('views/shop-list.html',
    "<div class=shop-list ng-controller=ShopListCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>BOUTIQUES</div></div><ul class=listview><li ng-repeat=\"shop in shops\"><div class=row><a ng-click=selectShop(shop.SHOP_ID)><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=col100><div class=shop-name>{{shop.NAME}}</div><div class=shop-tel>Tel: {{shop.TELEPHONE}}</div><div class=shop-tel>GSM: {{shop.GSM}}</div><div class=shop-dist>{{getDistance(shop.address)}}</div></div></a></div></li></ul></div>"
  );


  $templateCache.put('views/shop.html',
    "<div class=shop ng-controller=ShopCtrl><div class=header><div class=nav-left><a ng-click=backToShopList()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>BOUTIQUES</div></div><div map=\"\" lat=shop.LAT lng=shop.LNG></div><ul class=listview><li><div class=row><div class=col100><div class=shop-name>{{shop.NAME}}</div><div class=address>{{shop.address.STREET_NAME}} {{shop.address.STREET_NB}}<br>{{shop.address.POSTCODE}} {{shop.address.CITY}}</div><div class=shop-dist>{{getDistance(shop.address)}}</div></div></div></li></ul><p><span class=day>Lundi:</span><span class=schedule>{{getSchedule('day0')}}</span><br><span class=day>Mardi:</span><span class=schedule>{{getSchedule('day1')}}</span><br><span class=day>Mercredi:</span><span class=schedule>{{getSchedule('day2')}}</span><br><span class=day>Jeudi:</span><span class=schedule>{{getSchedule('day3')}}</span><br><span class=day>Vendredi:</span><span class=schedule>{{getSchedule('day4')}}</span><br><span class=day>Samedi:</span><span class=schedule>{{getSchedule('day5')}}</span><br><span class=day>Dimanche:</span><span class=schedule>{{getSchedule('day6')}}</span><br></p></div>"
  );
}]);