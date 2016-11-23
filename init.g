#############################################################################
##
#W  init.g                      FRANCY library                   Frank Celler
##
#Y  Copyright (C) 1993,  Lehrstuhl D fuer Mathematik,  RWTH, Aachen,  Germany
##

last := 0;    # to make GAP happy when this package is autoloaded

#############################################################################
##
#X  declaration part
##
ReadPackage( "francy", "lib/color.gd"   );
ReadPackage( "francy", "lib/font.gd"    );
ReadPackage( "francy", "lib/sheet.gd"   );
ReadPackage( "francy", "lib/gobject.gd" );
ReadPackage( "francy", "lib/menu.gd"    );
ReadPackage( "francy", "lib/poset.gd"   );
ReadPackage( "francy", "lib/ilatgrp.gd" );
ReadPackage( "francy", "lib/meataxe.gd" );

#############################################################################
##
#X  interface to `WindowCmd' override
##
ReadPackage( "francy", "lib/idgenerator.g" );
ReadPackage( "francy", "lib/window.g"   );

#############################################################################
##
#X  implementation part
##
ReadPackage( "francy", "lib/color.gi"   );
ReadPackage( "francy", "lib/font.gi"    );
ReadPackage( "francy", "lib/sheet.gi"   );
ReadPackage( "francy", "lib/gobject.gi" );
ReadPackage( "francy", "lib/menu.gi"    );
ReadPackage( "francy", "lib/poset.gi"   );
ReadPackage( "francy", "lib/ilatgrp.gi" );
ReadPackage( "francy", "lib/meataxe.gi" );

#############################################################################
##

#E  init.g  . . . . . . . . . . . . . . . . . . . . . . . . . . . . ends here

