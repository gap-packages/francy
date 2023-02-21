#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Menus
#! Menus are lists of actions that are rendered on the GUI. Menus can have SubMenus,
#! and are constituted by a label Title and an action defined as a <C>Callback</C>.
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
#! This Family identifies all <C>Menu</C> objects.
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
#! Creates a Menu with a label title and an action <C>Callback</C>.
#! Is up to the client implementation to sort out the Menu and invoke the <C>Callback</C>.
#! Examples:
#! <P/>
#! Create a <C>FrancyMenu</C>:
#! @InsertChunk Example_Create_Menu_1
#! <P/>
#! @Arguments IsString(title), [IsCallback]
#! @Returns <C>Menu</C>
DeclareOperation("Menu", [IsString, IsCallback]);

#! @Description
#! Add one <C>Menu</C> to a specific <C>Menu</C> creating a Submenu.
#! Is up to the client implementation to handle this.
#! @Arguments IsMenu, [IsMenu, List(IsMenu)]
#! @Returns <C>Menu</C>
#DeclareOperation("Add", [IsMenu, IsMenu]);

#! @Description
#! Remove a <C>Menu</C> from a specific <C>Menu</C>.
#! Is up to the client implementation to handle this.
#! @Arguments IsMenu, [IsMenu, List(IsMenu)]
#! @Returns <C>Menu</C>
#DeclareOperation("Remove", [IsMenu, IsMenu]);


#! @Section Attributes
#! In this section we show all Francy Core Attributes

#! @Description
#! A label title on a <C>Menu</C> is used to identify what action it is about on a menu entry.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("Title", IsMenu);
InstallMethod(Title, "menu", [IsMenu], o -> o!.title);
#! @Description
#! Sets the title of the <C>Menu</C>.
#! @Arguments IsMenu, IsString
InstallMethod(SetTitle, "menu, string", [IsMenu, IsString], function(o, s) o!.title := s; end);
