#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Menus
#! Menus are agregators of actions that are represented here by <C>Callbacks</C>.
#! Menus can have SubMenus, and are constituted by a Title and a Callback.
#! <P/>
#! Please see Francy-JS for client implementation.


#! @Section Categories
#! In this section we show all Francy Menu Categories.

#! @Description
#! Identifies <C>Menu</C> objects.
DeclareCategory("IsMenu", IsFrancyObject);


#! @Section Families
#! In this section we show all Francy Menu Families.

#! @Description
#! This Family identifies all <C>Menu</C> objects
#! @Returns <C>MenuFamily</C>
BindGlobal("MenuFamily", NewFamily("MenuFamily", IsMenu));


#! @Section Representations
#! In this section we show all Francy Menu Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Menu</C> internal representation.
DeclareRepresentation("IsMenuRep", IsComponentObjectRep, [], IsMenu);

#! @Description
#! Creates a new type for <C>Menu/C> objects.
BindGlobal("MenuObjectType", NewType(MenuFamily, IsMenu and IsMenuRep));


#! @Section Operations
#! In this section we show all Francy Menu Operations.

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
#DeclareOperation("Add", [IsMenu, IsMenu]);

#! @Description
#! Remove <C>Menu</C> from a specific <C>Menu</C>.
#! The client should be able to handle this.
#! @Arguments IsMenu, [IsMenu, List(IsMenu)]
#! @Returns <C>Menu</C>
#DeclareOperation("Remove", [IsMenu, IsMenu]);


#! @Section Attributes
#! In this section we show all Francy Core Attributes

#! @Description
#! A title on a <C>Menu</C> is used to identify the menu entry.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("Title", IsMenu);
InstallMethod(Title, "menu", [IsMenu], o -> o!.title);
#! @Description
#! Sets the title of the <C>Menu</C>.
#! @Arguments IsMenu, IsString
InstallMethod(SetTitle, "menu, string", [IsMenu, IsString], function(o, s) o!.title := s; end);
