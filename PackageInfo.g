#############################################################################
##  
##  PackageInfo.g for the GAP package FRANCY
##  

SetPackageInfo( rec(

PackageName := "FRANCY",
Subtitle := "A Framework for Interactive Discrete Mathematics",
Version := "0.1",
Date := "20/11/2016",

Persons := [
  rec( 
    LastName      := "Martins",
    FirstNames    := "Manuel",
    IsAuthor      := true,
    IsMaintainer  := true,
    Email         := "manuelmachadomartins@gmail.com",
    WWWHome       := "http://github.com/mcmartins",
    Institution   := "Universidade Aberta",
    Place         := "Lisbon, PT"
  )
],

##  Status information. Currently the following cases are recognized:
##    "accepted"      for successfully refereed packages
##    "submitted"     for packages submitted for the refereeing
##    "deposited"     for packages for which the GAP developers agreed
##                    to distribute them with the core GAP system
##    "dev"           for development versions of packages
##    "other"         for all other packages
##
Status := "dev",
CommunicatedBy := "TBD",

SourceRepository := rec(
    Type := "git",
    URL := "https://github.com/mcmartins/francy",
),
IssueTrackerURL := Concatenation( ~.SourceRepository.URL, "/issues" ),
PackageWWWHome  := ~.PackageWWWHome,
README_URL      := Concatenation( ~.PackageWWWHome, "/README.md" ),
PackageInfoURL  := Concatenation( ~.PackageWWWHome, "/PackageInfo.g" ),
ArchiveURL      := Concatenation( ~.SourceRepository.URL,
                                 "/releases/download/v", ~.Version,
                                 "/francy-", ~.Version ),
ArchiveFormats := ".tar.gz",

AbstractHTML := 
  "The <span class=\"pkgname\">FRANCY</span> package allows to use graphics in GAP.",

PackageDoc := rec(
  BookName  := "FRANCY",
  ArchiveURLSubset := ["htm","doc"],
  HTMLStart := "htm/chapters.htm",
  PDFFile   := "doc/manual.pdf",
  SixFile   := "doc/manual.six",
  LongTitle := "FRANCY - A Framework for Interactive Discrete Mathematics",
  Autoload  := true
),


Dependencies := rec(
  GAP := ">=4.7",
  NeededOtherPackages := [],
  SuggestedOtherPackages := [],
  ExternalConditions := []
),

AvailabilityTest := function() return true; end,

Keywords := ["Interactive", "Graphics"]

));
