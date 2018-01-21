#############################################################################
##
#W  menu.gd                    FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Menus
#! Menus are agregators of actions that are represented here by <C>Callbacks</C>.
#! Menus can have SubMenus, and are constituted by a Title and a Callback.
#! <P/>
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Menu Categories.

#! @Description
#! Identifies <C>Menu</C> objects.
DeclareCategory("IsMenu", IsFrancyObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy Menu Families.

#! @Description
#! This Family identifies all <C>Menu</C> objects
#! @Returns <C>MenuFamily</C>
BindGlobal("MenuFamily", NewFamily("MenuFamily", IsMenu));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy Menu Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Menu</C> internal representation.
DeclareRepresentation("IsMenuRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "title", "callback", "menus"], IsMenu);
  
BindGlobal("MenuObjectType", NewType(MenuFamily, IsMenu and IsMenuRep));


#############################################################################
##
#! @Section Operations
#! In this section we show the Francy Menu Operations.

#! @Description
#! Creates a Menu for a <C>Callback</C>
#! Is up to the client implementation to sort out the Menu and invoke the <C>Callback</C>
#! @Arguments IsString(title), [IsCallback]
#! @Returns <C>Menu</C>
DeclareOperation("Menu", [IsString, IsCallback]);

#! @Description
#! Add <C>Menu</C> to a specific <C>Menu</C> creating a Submenu.
#! Is up to the client implementation to handle this.
#! @Arguments IsMenu, [IsMenu, List(IsMenu)]
#! @Returns <C>Menu</C>
DeclareOperation("Add", [IsMenu, IsMenu]);

#! @Description
#! Remove <C>Menu</C> from a specific <C>Menu</C>.
#! The client should be able to handle this.
#! @Arguments IsMenu, [IsMenu, List(IsMenu)]
#! @Returns <C>Menu</C>
DeclareOperation("Remove", [IsMenu, IsMenu]);
