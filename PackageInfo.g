#
# francy: Interactive Discrete Mathematics in GAP
#
# This file contains package meta data. For additional information on
# the meaning and correct usage of these fields, please consult the
# manual of the "Example" package as well as the comments in its
# PackageInfo.g file.
#
SetPackageInfo( rec(

PackageName := "francy",
Subtitle := "Interactive Discrete Mathematics in GAP",
Version := "0.1",
Date := "24/01/2017", # dd/mm/yyyy format

Persons := [
  rec(
    IsAuthor := true,
    IsMaintainer := true,
    FirstNames := "Manuel",
    LastName := "Martins",
    WWWHome := "http://github.com/mcmartins",
    Email := "manuelmachadomartins@gmail.com",
    PostalAddress := "TODO",
    Place := "Lisbon, PT",
    Institution := "Universidade Aberta",
  ),
],

SourceRepository := rec(
    Type := "git",
    URL := Concatenation( "https://github.com/mcmartins/", ~.PackageName ),
),
IssueTrackerURL := Concatenation( ~.SourceRepository.URL, "/issues" ),
#SupportEmail := "TODO",
PackageWWWHome := "https://mcmartins.github.io/francy/",
PackageInfoURL := Concatenation( ~.PackageWWWHome, "PackageInfo.g" ),
README_URL := Concatenation( ~.PackageWWWHome, "README.md" ),
ArchiveURL := Concatenation( ~.SourceRepository.URL,
                             "/releases/download/v", ~.Version,
                             "/", ~.PackageName, "-", ~.Version ),

ArchiveFormats := ".tar.gz",

##  Status information. Currently the following cases are recognized:
##    "accepted"      for successfully refereed packages
##    "submitted"     for packages submitted for the refereeing
##    "deposited"     for packages for which the GAP developers agreed
##                    to distribute them with the core GAP system
##    "dev"           for development versions of packages
##    "other"         for all other packages
##
Status := "dev",

AbstractHTML   :=  "",

PackageDoc := rec(
  BookName := "francy",
  ArchiveURLSubset := ["doc"],
  HTMLStart := "doc/chap0.html",
  PDFFile := "doc/manual.pdf",
  SixFile := "doc/manual.six",
  LongTitle := "Interactive Discrete Mathematics in GAP",
),

Dependencies := rec(
  GAP := ">= 4.8",
  NeededOtherPackages := [ [ "GAPDoc", ">= 1.5" ]
                         , [ "json", ">= 1.0.1" ] ],
  SuggestedOtherPackages := [ ],
  ExternalConditions := [ ],
),

AvailabilityTest := function()
        return true;
    end,

TestFile := "tst/testall.g",

Keywords := [ "Graphics", "Interactive" ],

));


