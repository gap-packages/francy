# This is the first example from the XGAP manual:
# The dihedral group of order 8.
SetInfoLevel(InfoPackageLoading,4);

LoadPackage("francy");

printObject := function(obj)
    local p;
        for p in NamesOfComponents(obj) do
            #if Length(KnownAttributesOfObject(obj!.(p))) > 0 then
            #    printObject(obj!.(p));
            #else
                AppendTo("teste",p); AppendTo("teste",": "); AppendTo("teste",obj!.(p)); AppendTo("teste","\n");
            #fi;
        od;
end;

d8 := DihedralGroup(8);
SetName(d8,"d8");
s := GraphicSubgroupLattice(d8);

for i in s!.objects do
    for j in NamesOfComponents(i) do
        Print(i); Print("\t"); Print(j); Print("\t"); Print(i!.(j)); Print("\n");
    od;
od;
for i in s!.objects do
    for j in NamesOfComponents(i!.sheet) do
        AppendTo("export", j); AppendTo("export", ":\t"); AppendTo("export", i!.sheet!.(j)); AppendTo("export", "\n\n");
    od;
    break;
od;
for i in s!.objects do
    for k in NamesOfComponents(i!.sheet) do
        for l in i!.sheet!.objects do
            for j in NamesOfComponents(l) do
                AppendTo("export2", j); AppendTo("export2", ":\t"); AppendTo("export2", l!.(j)); AppendTo("export2", "\n\n");
            od;
            AppendTo("export2", "\n\n");
        od;
        break;
    od;
    break;
od;