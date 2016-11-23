# This is the first example from the XGAP manual:
# The dihedral group of order 8.
#SetInfoLevel(InfoPackageLoading,4);
#LoadPackage("francy");
d8 := DihedralGroup(8);
SetName(d8,"d8");
s := GraphicSubgroupLattice(d8);
