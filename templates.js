app.run(['$templateCache', function($templateCache){  'use strict';

  $templateCache.put('views/carte-category-list.html',
    "<div id=carte-category-list ng-controller=CarteCategoryListCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>CARTE</div></div><div image-rotor=\"\" image-url=imageUrl><a class=img-click ng-click=displayProductList(selectedElement)></a></div><div ng-list-scroll=\"\" class=category-list items=\"cat in categories\" order-by=NUM_ORDER property-id=CATEGORY_ID ng-model=selectedElement><a ng-click=displayProductList(cat.CATEGORY_ID)><div class=row><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=\"col100 has-right-icon\">{{cat.NAME}}</div></div></a></div></div>"
  );


  $templateCache.put('views/carte-product-list.html',
    "<div id=carte-product-list ng-controller=CarteProductListCtrl><div class=header><div class=nav-left><a ng-click=backToCategory()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>{{categoryTitle}}</div></div><div image-rotor=\"\" image-url=imageUrl><a class=img-click ng-click=displayProduct(selectedElement)></a><div class=product-order><div order-counter=\"\" element=selectedProduct color=black><a ng-click=goToOrder()><span class=icon-shopping-cart-black></span></a></div></div></div><div ng-list-scroll=\"\" class=product-list items=\"prod in products\" order-by=NUM_ORDER property-id=PRODUCT_ID ng-model=selectedElement><a ng-click=displayProduct(prod.PRODUCT_ID)><div class=row><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=\"col100 has-right-icon\"><div product-description=\"\" product=prod></div></div></div></a></div></div>"
  );


  $templateCache.put('views/carte-product.html',
    "<div id=carte-product ng-controller=CarteProductCtrl><div class=header><div class=nav-left><a ng-click=back()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>{{categoryTitle}}</div></div><div ng-iscroll=109 refresh=refresh><div id=scroller><div image-rotor=\"\" image-url=imageUrl></div><div class=product-description><div id=title><ul class=listview><li><div class=row><a><div product-description=\"\" product=product></div></a></div></li></ul><p ng-bind-html=product.DESCRIPTION></p></div></div></div></div><div class=\"space-full commander\"><div order-counter=\"\" element=product><a ng-click=toogleFavorite()><span ng-hide=isFavorite() class=icon-favorite-inactive></span> <span ng-show=isFavorite() class=icon-favorite-active></span></a> <a ng-click=goToOrder()><span class=icon-shopping-cart-white></span></a></div></div></div>"
  );


  $templateCache.put('views/carte.html',
    "<div id=carte ng-controller=CarteCtrl><div class=page-swipe page-swipe=pageIndex scrollend=scrollEnd><div id=pageScroller><div class=page><div ng-include=\"'views/carte-category-list.html'\"></div></div><div class=page><div ng-include=\"'views/carte-product-list.html'\"></div></div><div class=page><div ng-include=\"'views/carte-product.html'\"></div></div></div></div></div>"
  );


  $templateCache.put('views/directives/address-display.html',
    "<div class=address-display ng-style=getImage()><div>{{addressDisplay.STREET_NAME}}&nbsp;{{addressDisplay.STREET_NB}}</div><div>{{addressDisplay.BELL}}</div><div>{{addressDisplay.POSTCODE}}&nbsp;{{addressDisplay.CITY}}</div></div>"
  );


  $templateCache.put('views/directives/address-list.html',
    "<ul class=listview><li ng-repeat=\"address in addresses\"><div class=\"row green-text\"><div class=col-right-icon><a ng-click=askRemoveAddress(address)><i class=\"fa fa-times\"></i></a></div><div class=\"col100 has-right-icon\"><a ng-click=addressList(address)><div address-display=address></div></a></div></div></li></ul>"
  );


  $templateCache.put('views/directives/ng-iscroll-list.html',
    "<div><div id=scroller><ul class=listview><li ng-transclude=\"\" last-repeat=false></li></ul><div class=gap></div></div></div>"
  );


  $templateCache.put('views/directives/ng-iscroll.html',
    "<div><div id=scroller><ul class=listview><div ng-transclude=\"\" last-repeat=false></div></ul></div></div>"
  );


  $templateCache.put('views/directives/order-counter.html',
    "<div class=order-counter><div class=extra-icons ng-transclude=\"\"></div><div class=reduce-quantity ng-hide=\"getQuantity()==0\"><a ng-click=removeOne()><span ng-class=icon.minus></span></a> <span class=quantity>{{getQuantity()}}</span></div><a ng-click=addOne()><span ng-class=icon.plus></span></a></div>"
  );


  $templateCache.put('views/directives/product-description.html',
    "<div class=product-description-price><span class=pcs>{{product.PIECES}} pc |</span> <span price=product.PRICE></span></div><div class=product-description-name>{{product.NAME}}</div>"
  );


  $templateCache.put('views/directives/profil-auth.html',
    "<div class=\"btn-group btn-group-justified space-hz\" ng-hide=isAuth()><a class=\"btn btn-rounded\" ng-click=displayAuth()>S'identifier</a></div><div class=\"btn-group btn-group-justified space-full\" ng-hide=isAuth()><a class=\"btn btn-rounded\" ng-click=displaySave()>Sauvegarder données</a></div><div class=\"btn-group btn-group-justified space-hz\" ng-show=isAuth()><a class=\"btn btn-rounded\" ng-click=signout()><i class=\"fa fa-sign-out\"></i> Se déconnecter</a></div>"
  );


  $templateCache.put('views/favorite-list.html',
    "<div id=favorite-list ng-controller=FavoriteListCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>FAVORIS</div></div><div class=favorite-empty ng-show=isFavoriteEmpty()><i class=\"fa fa-heart-o fa-4x\"></i><p>Vous n'avez pas de favoris</p></div><div ng-hide=isFavoriteEmpty()><div image-rotor=\"\" image-url=imageUrl><a class=img-click ng-click=displayProduct(selectedElement)></a><div class=product-order><div order-counter=\"\" element=selectedProduct color=black><a ng-click=goToOrder()><span class=icon-shopping-cart-black></span></a></div></div></div><div ng-list-scroll=\"\" class=product-list items=\"prod in products\" property-id=PRODUCT_ID ng-model=selectedElement><a ng-click=displayProduct(prod.PRODUCT_ID)><div class=row><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=\"col100 has-right-icon\"><div product-description=\"\" product=prod></div></div></div></a></div></div></div>"
  );


  $templateCache.put('views/favorite.html',
    "<div id=carte ng-controller=FavoriteCtrl><div class=page-swipe page-swipe=pageIndex scrollend=scrollEnd><div id=pageScroller><div class=page><div ng-include=\"'views/favorite-list.html'\"></div></div><div ng-show=showDetails class=page><div ng-include=\"'views/carte-product.html'\"></div></div></div></div></div>"
  );


  $templateCache.put('views/menu.html',
    "<div class=main-menu ng-controller=MenuCtrl ng-iscroll=0 refresh=refresh><div id=scroller><div><a class=menu-carte ng-click=\"changePage('carte.html')\"></a></div><div><a class=menu-favoris ng-click=\"changePage('favorite.html')\"></a></div><div><a class=menu-commande ng-click=\"changePage('order.html')\"></a></div><div><a class=menu-boutiques ng-click=\"changePage('shop.html')\"></a></div><div><a class=menu-profil ng-click=\"changePage('profil.html')\"></a></div><div ng-show=refresh><a class=menu-closer ng-click=closeMenu()></a></div></div></div>"
  );


  $templateCache.put('views/order-step1.html',
    "<div class=order-step1 ng-controller=OrderStep1Ctrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>COMMANDE 1/4</div></div><div ng-iscroll=171><div id=scroller><div><div class=order-empty ng-show=isOrderEmpty()><i class=\"fa fa-shopping-cart fa-4x\"></i><p>Vous n'avez pas encore sélectionné de plats</p></div><div ng-hide=isOrderEmpty()><ul class=\"listview short-bottom\"><li ng-repeat=\"prod in products\"><div class=row><div class=col100><div product-description=\"\" product=prod></div><div order-counter=\"\" element=prod><a ng-click=goToProduct(prod.PRODUCT_ID)><span class=icon-search-white></span></a> <a ng-click=removeAll(prod.PRODUCT_ID)><span class=icon-delete-white></span></a></div></div></div></li></ul></div></div></div></div><div ng-hide=isOrderEmpty() class=total-price><ul class=listview><li><div class=row><div class=product-description-price><span class=pcs>{{getTotalPieces()}} pc |</span><span price=getTotalMoney()></span></div><div class=product-description-name>Total</div></div></li></ul><div class=space-full><a class=\"btn btn-rounded\" ng-click=command()>Commander <i class=\"fa fa-chevron-right\"></i></a></div></div></div>"
  );


  $templateCache.put('views/order-step2.html',
    "<div ng-controller=OrderStep2Ctrl><div class=header><div class=nav-left><a ng-click=backToStep1()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>COMMANDE 2/4</div></div><div class=btn-group-tab><a class=btn ng-click=setDelivery(true)><span class=tab-btn ng-class=\"{'active': isDelivery}\"><i class=\"fa fa-truck\"></i> Livraison</span></a> <a class=btn ng-click=setDelivery(false)><span class=tab-btn ng-class=\"{'active': !isDelivery}\"><i class=\"fa fa-home\"></i> A emporter</span></a></div><div class=animate-show-container><div ng-show=isDelivery class=animate-hide><div class=space-full><a class=\"btn btn-invert\" ng-click=pickProfilAddress()><div ng-show=\"selectedProfilAddress==null\">Choisissez votre addresse</div><div ng-hide=\"selectedProfilAddress==null\" class=green-text><div address-display=selectedProfilAddress></div></div></a></div><div class=\"space-hz grey-droid center\" ng-hide=canDeliver()>Votre commande doit atteindre {{client.DELIVERY_THRESHOLD}}€ pour pouvoir être livrée.</div></div><div ng-hide=isDelivery class=animate-show><div class=space-full><a class=\"btn btn-invert\" ng-click=pickShopAddress()><div ng-show=\"selectedShop==null\">Choisissez un magasin</div><div ng-hide=\"selectedShop==null\" class=green-text><div>{{selectedShop.NAME}}</div><div address-display=selectedShop.address></div></div></a></div></div></div><div class=fixed-bottom><ul class=listview ng-show=isDeliveryRule(2)><li><div class=row><div class=product-description-price><span price=getDeliveryCost()></span></div><div class=product-description-name>Livraison (gratuit au delà de {{client.DELIVERY_THRESHOLD}} €)</div></div></li><li><div class=row><div class=product-description-price><span class=pcs>{{getTotalPieces()}} pc |</span><span price=getTotalMoney()></span></div><div class=product-description-name>Total</div></div></li></ul><div class=space-full><a ng-show=isStepOk() class=\"btn btn-rounded\" ng-click=gotoStep3()>Suivant <i class=\"fa fa-chevron-right\"></i></a></div></div></div>"
  );


  $templateCache.put('views/order-step3.html',
    "<div ng-controller=OrderStep3Ctrl class=order-step3><div class=header><div class=nav-left><a ng-click=backToStep2()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>COMMANDE 3/4</div></div><div class=\"space-full grey-droid\"><p ng-bind=firstParagraph>Je viendrai chercher ma commande</p></div><div class=space-hz><div class=form-group><div class=styled-select><select ng-model=selectedDay name=select-day id=select-day ng-change=setSelectedDay() ng-options=\"opt.LABEL for opt in days\"></select></div></div></div><div class=space-full><div class=form-group><div class=styled-select><select ng-model=selectedTime name=select-time id=select-time ng-change=setSelectedTime() ng-options=\"opt.LABEL for opt in timeList\"></select></div></div></div><div ng-show=isOrderReady() class=\"space-full fixed-bottom\"><a class=\"btn btn-rounded\" ng-click=gotoStep4()>Suivant <i class=\"fa fa-chevron-right\"></i></a></div></div>"
  );


  $templateCache.put('views/order-step4.html',
    "<div ng-controller=OrderStep4Ctrl class=order-step4><div class=header><div class=nav-left><a ng-click=backToStep3()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>COMMANDE 4/4</div></div><div ng-iscroll=45><div id=scroller><form id=orderStep4Form ng-submit=validCoords()><input type=submit value=Envoyer><div class=space-full><p class=grey-droid>Email de confirmation</p><div class=form-group><div class=row><input type=email id=email ng-model=profil.EMAIL placeholder=Email ng-disabled=checkLogin></div></div><p class=grey-droid>Vos coordonnées</p><div class=form-group><div class=row><input id=nom ng-model=profil.NOM placeholder=Nom></div><div class=row><input id=prenom ng-model=profil.PRENOM placeholder=Prénom></div><div class=row><input id=gsm ng-model=profil.PHONE_NUM placeholder=\"GSM *\"></div></div></div></form><div class=space-full><a class=\"btn btn-rounded\" ng-click=validate()><i class=\"fa fa-check\"></i> Valider</a></div><div profil-auth=\"\" action=saveProfil></div></div></div></div>"
  );


  $templateCache.put('views/order-step5.html',
    "<div ng-controller=OrderStep5Ctrl class=order-step5><div class=header><div class=title-alone>COMMANDE</div></div><br><br><br><br><br><p class=center>Merci,</p><p class=center>VOTRE COMMANDE</p><p class=center>EST BIEN ENVOYÉE</p><div class=fixed-bottom><div class=space-full><a class=\"btn btn-rounded\" ng-click=backToMenu()>OK</a></div></div></div>"
  );


  $templateCache.put('views/order.html',
    "<div id=order ng-controller=OrderCtrl><div class=page-swipe page-swipe=pageIndex scrollstart=scrollStart scrollend=scrollEnd><div id=pageScroller><div class=page><div ng-include=\"'views/order-step1.html'\"></div></div><div class=page><div ng-include=\"'views/order-step2.html'\"></div></div><div class=page><div ng-include=\"'views/order-step3.html'\"></div></div><div class=page><div ng-include=\"'views/order-step4.html'\"></div></div></div></div></div>"
  );


  $templateCache.put('views/popup/authentication.html',
    "<div ng-show=visibility class=\"fixed-full ng-hide\" ng-controller=AuthenticationCtrl><div class=space-full><form id=authentication><input type=submit value=Envoyer><div class=form-group><div class=row><input type=email name=email ng-model=email placeholder=\"Adresse e-mail\" autocomplete=off></div><div class=row><input type=password id=password ng-model=password placeholder=\"Mot de passe\" autocomplete=off></div></div></form></div><div class=\"btn-group btn-group-justified space-hz\"><a class=\"btn btn-rounded\" ng-click=auth()>S'identifier</a> <a class=\"btn btn-rounded\" ng-click=cancel()>Annuler</a></div><div class=\"btn-group btn-group-justified space-full\"><a class=\"btn btn-rounded\" ng-click=openForgotPassword()>Mot de passe oublié ?</a></div></div>"
  );


  $templateCache.put('views/popup/carte-product-popup.html',
    "<div ng-show=visibility class=\"fixed-full ng-hide\" id=carte-product ng-controller=CarteProductPopupCtrl><div class=header><div class=title>{{categoryTitle}}</div></div><div ng-iscroll=109><div id=scroller><div image-rotor=\"\" image-url=imageUrl></div><div class=product-description><div id=title><ul class=listview><li><div class=row><a><div product-description=\"\" product=product></div></a></div></li></ul><p ng-bind-html=product.DESCRIPTION></p></div></div></div></div><div class=\"space-full fixed-bottom\"><a class=\"btn btn-rounded\" ng-click=back()>OK</a></div></div>"
  );


  $templateCache.put('views/popup/delivered-communes.html',
    "<div ng-show=visibility class=\"fixed-full ng-hide\" ng-controller=DeliveredCommunesCtrl><div class=header><div class=title-alone>Communes livrées</div></div><div ng-iscroll=114 refresh=refresh bounce=true><div id=scroller><ul class=listview><li ng-repeat=\"commune in list\" class=row><div class=row>{{commune.POSTCODE}} {{commune.CITY}}</div></li></ul></div></div><div class=fixed-bottom><div class=space-full><a class=\"btn btn-rounded\" ng-click=close()>OK</a></div></div></div>"
  );


  $templateCache.put('views/popup/forgot-password.html',
    "<div ng-show=visibility class=\"fixed-full ng-hide\" ng-controller=ForgotPasswordCtrl><div class=\"grey-droid space-full\">Envoyez-moi un lien via e-mail pour réinitialiser mon mot de passe :</div><div class=space-hz><form id=forgotPasswordForm><input type=submit value=Envoyer><div class=form-group><div class=row><input type=email name=email ng-model=email placeholder=\"Adresse e-mail\" autocomplete=off></div></div></form></div><div class=\"btn-group btn-group-justified space-full\"><a class=\"btn btn-rounded\" ng-click=action()>M'envoyer un e-mail</a></div><div class=\"btn-group btn-group-justified space-hz\"><a class=\"btn btn-rounded\" ng-click=cancel()>Annuler</a></div></div>"
  );


  $templateCache.put('views/popup/pick-profil-address.html',
    "<div ng-show=visibility class=\"fixed-full ng-hide\" ng-controller=PickProfilAddressCtrl><h3>Choisissez une adresse :</h3><div address-list=selectAddress></div><div class=\"btn-group btn-group-justified space-full\"><a class=\"btn btn-rounded\" ng-click=addAddress()><i class=\"fa fa-plus\"></i> Ajouter</a> <a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div><div ng-show=showProfilUpdateAddress ng-include=\"'views/profil-update-address.html'\" class=fixed-full></div></div>"
  );


  $templateCache.put('views/popup/pick-shop.html',
    "<div ng-show=visibility class=\"fixed-full ng-hide\" ng-controller=PickShopAddressCtrl><h3>Choisissez une adresse :</h3><ul class=listview><li ng-repeat=\"shop in shops\"><div class=row><a ng-click=selectAddress(shop)><div class=shop-name>{{shop.NAME}}</div><div address-display=shop.address></div></a></div></li></ul></div>"
  );


  $templateCache.put('views/popup/save-online.html',
    "<div ng-show=visibility class=\"fixed-full ng-hide\" ng-controller=SaveOnlineCtrl><form id=saveOnlineForm novalidate><input type=submit value=Envoyer><div class=space-full><div class=form-group><div class=row><input type=email name=email ng-model=profil.EMAIL placeholder=E-mail autocomplete=off></div><div class=row><input type=password name=password ng-model=passwordSave placeholder=\"Mot de passe\" autocomplete=off></div></div></div></form><div class=\"btn-group btn-group-justified space-hz\"><a class=\"btn btn-rounded\" ng-click=save()>Sauvegarder</a> <a class=\"btn btn-rounded\" ng-click=cancel()>Annuler</a></div></div>"
  );


  $templateCache.put('views/profil-update-address.html',
    "<div ng-controller=ProfilUpdateAddressCtrl id=profil-update-address><div class=space-full><form id=updateAddressForm><input type=submit value=Envoyer><div class=form-group><div class=row><input id=street-name ng-model=address.STREET_NAME placeholder=\"Rue *\"></div><div class=row><input id=street-nb ng-model=address.STREET_NB placeholder=\"Numéro + Boite *\"></div><div class=row><input id=bell ng-model=address.BELL placeholder=Sonnette></div><div class=row><input id=postcode ng-model=address.POSTCODE placeholder=\"Code postal *\" ng-change=refreshCity(true)></div><div class=row><div class=styled-select><input ng-hide=legitPostcode placeholder=\"Ville *\" disabled><select ng-show=legitPostcode ng-model=address.CITY name=city id=city ng-options=\"elt.CITY for elt in cityList\"></select></div></div></div></form></div><div class=\"space-hz btn-group\"><a class=\"btn btn-rounded\" ng-click=validAddress()><i class=\"fa fa-check\"></i> <span ng-show=\"address.LOCAL_ID==null\">Créer</span><span ng-hide=\"address.LOCAL_ID==null\">Modifier</span></a> <a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div></div>"
  );


  $templateCache.put('views/profil-update-password.html',
    "<div ng-controller=ProfilUpdatePasswordCtrl><form class=form-horizontal name=form><div class=space-full><form id=updatePasswordForm ng-submit=validPassword()><input type=submit value=Envoyer><div class=form-group><div class=row><input type=password id=old-password ng-model=password.OLDPWD placeholder=\"Ancien mot de passe\"></div><div class=row><input type=password name=newPassword id=new-password ng-model=password.NEWPWD placeholder=\"Nouveau mot de passe\"></div><div class=row><input type=password id=confirm-password ng-model=password.CONFIRMPWD placeholder=\"Confirmer mot de passe\"></div></div></form></div><div class=\"space-hz btn-group\"><a class=\"btn btn-rounded\" ng-click=validPassword()><i class=\"fa fa-check\"></i> Modifier</a> <a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div></form></div>"
  );


  $templateCache.put('views/profil-update.html',
    "<div ng-controller=ProfilUpdateCtrl class=fixed-full ng-show=visibility><div class=space-full><form id=updateProfilForm novalidate><input type=submit value=Envoyer><div class=form-group><div class=row><input id=prenom ng-model=profil.PRENOM placeholder=Prénom maxlength=50></div><div class=row><input id=nom ng-model=profil.NOM placeholder=Nom maxlength=50></div><div class=row><input type=email id=email ng-model=profil.EMAIL placeholder=E-mail maxlength=100></div><div class=row><input type=tel id=tel ng-model=profil.PHONE_NUM placeholder=\"N° de téléphone\" maxlength=20></div><div class=row><input id=company ng-model=profil.COMPANY placeholder=Société maxlength=50></div><div class=row><input id=tva ng-model=profil.NUM_TVA placeholder=\"N° de TVA\" maxlength=14></div></div></form></div><div class=\"space-hz btn-group\"><a class=\"btn btn-rounded\" ng-click=validProfil()><i class=\"fa fa-check\"></i> Modifier</a> <a class=\"btn btn-rounded\" ng-click=close()><i class=\"fa fa-times\"></i> Annuler</a></div></div>"
  );


  $templateCache.put('views/profil.html',
    "<div ng-controller=ProfilCtrl class=main-profil><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>PROFIL</div></div><div ng-iscroll=45 refresh=refresh><div id=scroller><ul class=listview><li><a ng-click=displayUpdateProfil()><div class=row><div class=col-right-icon><i class=\"fa fa-edit\"></i></div><div class=\"col100 has-right-icon\"><div class=col1>Nom:</div><div class=col2>{{profil.PRENOM}} {{profil.NOM}}</div><div class=col1>E-mail:</div><div class=col2>{{profil.EMAIL}}</div><div class=col1>Telephone:</div><div class=col2>{{profil.PHONE_NUM}}</div><div ng-show=isCompanyFilled()><div class=col1>Société:</div><div class=col2>{{profil.COMPANY}}</div><div class=col1>N° TVA:</div><div class=col2>{{profil.NUM_TVA}}</div></div></div></div></a></li><li ng-show=isAuth()><a ng-click=displayUpdatePassword()><div class=row><div class=col-right-icon><i class=\"fa fa-edit\"></i></div><div class=\"col100 has-right-icon\"><div class=col1>Mot de passe:</div><div class=col2>**********</div></div></div></a></li></ul><h3>Adresses :</h3><div address-list=displayUpdateAddress></div><div class=\"btn-group btn-group-justified space-full\"><a class=\"btn btn-rounded\" ng-click=displayUpdateAddress(null)><i class=\"fa fa-plus\"></i> Ajouter une adresse</a></div><div profil-auth=\"\"></div><div class=space-vt ng-include=\"'views/profil-update.html'\"></div><div ng-show=profilUpdateAddressVisible ng-include=\"'views/profil-update-address.html'\" class=fixed-full></div><div ng-show=profilUpdatePasswordVisible ng-include=\"'views/profil-update-password.html'\" class=fixed-full></div></div></div></div>"
  );


  $templateCache.put('views/shop-details.html',
    "<div class=shop ng-controller=ShopDetailsCtrl id=shop-details><div class=header><div class=nav-left><a ng-click=backToShopList()><i class=\"fa fa-arrow-left fa-22px\"></i></a></div><div class=title>BOUTIQUES</div></div><div map=\"\" lat=shop.LAT lng=shop.LNG activate=mapVisible class=map-container></div><div ng-iscroll=235 snap-top=snap><div id=scroller><ul class=listview><li><div class=row><div class=col100><div class=shop-name>{{shop.NAME}}</div><div class=address>{{shop.address.STREET_NAME}} {{shop.address.STREET_NB}}<br>{{shop.address.POSTCODE}} {{shop.address.CITY}}</div><div class=shop-dist>{{getDistance(shop.address)}}</div></div></div></li></ul><h2>Horaires du magasin</h2><p><span class=day>Lundi:</span><span class=schedule>{{getSchedule('day0')}}</span><br><span class=day>Mardi:</span><span class=schedule>{{getSchedule('day1')}}</span><br><span class=day>Mercredi:</span><span class=schedule>{{getSchedule('day2')}}</span><br><span class=day>Jeudi:</span><span class=schedule>{{getSchedule('day3')}}</span><br><span class=day>Vendredi:</span><span class=schedule>{{getSchedule('day4')}}</span><br><span class=day>Samedi:</span><span class=schedule>{{getSchedule('day5')}}</span><br><span class=day>Dimanche:</span><span class=schedule>{{getSchedule('day6')}}</span></p><h2>Horaires de livraison</h2><p><span class=day>Lundi:</span><span class=schedule>{{getSchedule('day7')}}</span><br><span class=day>Mardi:</span><span class=schedule>{{getSchedule('day8')}}</span><br><span class=day>Mercredi:</span><span class=schedule>{{getSchedule('day9')}}</span><br><span class=day>Jeudi:</span><span class=schedule>{{getSchedule('day10')}}</span><br><span class=day>Vendredi:</span><span class=schedule>{{getSchedule('day11')}}</span><br><span class=day>Samedi:</span><span class=schedule>{{getSchedule('day12')}}</span><br><span class=day>Dimanche:</span><span class=schedule>{{getSchedule('day13')}}</span><br><br><br><br></p></div></div></div>"
  );


  $templateCache.put('views/shop-list.html',
    "<div class=shop-list ng-controller=ShopListCtrl><div class=header><div class=nav-left><a ng-click=showMenu()><i class=\"fa fa-bars fa-22px\"></i></a></div><div class=title>BOUTIQUES</div></div><ul class=listview><li ng-repeat=\"shop in shops\"><div class=row><a ng-click=selectShop(shop.SHOP_ID)><div class=col-right-icon><i class=\"fa fa-chevron-right\"></i></div><div class=col100><div class=shop-name>{{shop.NAME}}</div><div class=shop-tel>Tel: {{shop.TELEPHONE}}</div><div class=shop-tel>GSM: {{shop.GSM}}</div><div class=shop-dist>{{getDistance(shop.address)}}</div></div></a></div></li></ul><div class=fixed-bottom><div class=space-full><a class=\"btn btn-rounded\" ng-click=openPopup()>Communes livrées</a></div></div></div>"
  );


  $templateCache.put('views/shop.html',
    "<div id=carte ng-controller=ShopCtrl><div class=page-swipe page-swipe=pageIndex scrollend=scrollEnd><div id=pageScroller><div class=page><div ng-include=\"'views/shop-list.html'\"></div></div><div class=page><div ng-include=\"'views/shop-details.html'\"></div></div></div></div></div>"
  );
}]);