#
# francy: Interactive Discrete Mathematics in GAP
#
# This file is a script which compiles the package manual.
#

if fail = LoadPackage("AutoDoc", "2016.02.16") then
    Error("AutoDoc version 2016.02.16 or newer is required.");
fi;

AutoDoc(rec(autodoc := true, 
            scaffold := rec(includes := ["intro.xml"],
                            entities := rec(Jupyter := "<URL Text=\"Jupyter\">https://jupyter.org</URL>",
                                            SubgroupLattice := "<URL Text=\"SubgroupLattice\">https://github.com/mcmartins/subgroup-lattice</URL>",
                                            FrancyMonoids := "<URL Text=\"FrancyMonoids\">https://github.com/gap-packages/FrancyMonoids</URL>",
                                            JupyterKernel := "<Package>JupyterKernel</Package>",
                                            json := "<Package>json</Package>",
                                            uuid := "<Package>uuid</Package>"))));

QUIT;
