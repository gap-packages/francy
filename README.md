# FRANCY

FRANCY is a Framework for Interactive Discrete Mathematics package for GAP.

Is entirely based on XGAP but with no dependencies to X11 or any other Graphical Windowing system.

This package is responsible for the generation of Semantic Graphical Objects that can be used to produce Graphical UIs.

# Usage

```bash
mcmartins@localhost :~/Programs/gap4r8/bin$ ./gap.sh 
 ┌───────┐   GAP 4.8.5, 25-Sep-2016, build of 2016-11-10 12:51:45 (GMT)
 │  GAP  │   http://www.gap-system.org
 └───────┘   Architecture: x86_64-pc-linux-gnu-gcc-default64
 Libs used:  gmp
 Loading the library and packages ...
 Components: trans 1.0, prim 2.1, small* 1.0, id* 1.0
 Packages:   AClib 1.2, Alnuth 3.0.0, AtlasRep 1.5.1, AutPGrp 1.6, CRISP 1.4.4, Cryst 4.1.12, 
             CrystCat 1.1.6, CTblLib 1.2.2, FactInt 1.5.3, FGA 1.3.1, GAPDoc 1.5.1, IRREDSOL 1.3.1, 
             LAGUNA 3.7.0, Polenta 1.3.6, Polycyclic 2.11, RadiRoot 2.7, ResClasses 4.5.0, 
             Sophus 1.23, SpinSym 1.5, TomLib 1.2.5, Utils 0.40
 Try '??help' for help. See also '?copyright', '?cite' and '?authors'
gap>
gap> LoadPackage("francy");
-----------------------------------------------------------------------------------------------------
Loading  FRANCY 0.1 (FRANCY - A Framework for Interactive Discrete Mathematics)
by Manuel Martins (http://github.com/mcmartins).
Homepage: https://github.com/mcmartins/francy
-----------------------------------------------------------------------------------------------------
true
gap>
gap> d8 := DihedralGroup(8);
<pc group of size 8 with 3 generators>
gap>
gap> SetName(d8,"d8");
gap>
gap> s := GraphicSubgroupLattice(d8);
<graphic subgroup lattice "GraphicSubgroupLattice of d8">
gap> 
```