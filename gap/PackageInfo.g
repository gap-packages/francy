#############################################################################
##  
##  PackageInfo.g for the GAP package FRANCY
##

SetPackageInfo(rec(

  PackageName := "Francy",
  Subtitle    := "Framework for Interactive Discrete Mathematics",
  Version     := "0.9.0",
  Date        := "11/03/2018",

  Persons := [
    rec(
      LastName     := "Martins",
      FirstNames   := "Manuel",
      IsAuthor     := true,
      IsMaintainer := true,
      Email        := "manuelmachadomartins@gmail.com",
      WWWHome      := "http://github.com/mcmartins",
      Institution  := "Universidade Aberta",
      Place        := "Lisbon, PT"
    )
  ],

  ##  Status information. Currently the following cases are recognized:
  ##  "accepted"    for successfully refereed packages
  ##  "submitted"   for packages submitted for the refereeing
  ##  "deposited"   for packages for which the GAP developers agreed
  ##          to distribute them with the core GAP system
  ##  "dev"       for development versions of packages
  ##  "other"     for all other packages
  ##

  Status           := "dev",
  CommunicatedBy   := "TBD",
  SourceRepository := rec(
    Type := "git",
    URL  := "https://github.com/mcmartins/francy",
  ),
  IssueTrackerURL := Concatenation(~.SourceRepository.URL, "/issues"),
  PackageWWWHome  := "https://github.com/mcmartins/francy",
  README_URL      := Concatenation(~.PackageWWWHome, "/README.md"),
  PackageInfoURL  := Concatenation(~.PackageWWWHome, "/PackageInfo.g"),
  ArchiveURL      := Concatenation(~.SourceRepository.URL, "/releases/download/v",
                                    ~.Version, "/francy-", ~.Version),
  ArchiveFormats  := ".tar.gz",

  AbstractHTML :=
  "The <span class=\"pkgname\">Francy</span> package allows to use graphics in GAP.",

  PackageDoc := rec(
    BookName         := "Francy",
    ArchiveURLSubset := ["htm","doc"],
    HTMLStart        := "doc/chapters.htm",
    PDFFile          := "doc/manual.pdf",
    SixFile          := "doc/manual.six",
    LongTitle        := "FRANCY - A Framework for Interactive Discrete Mathematics"
  ),

  Dependencies := rec(
    GAP                    := ">=4.9",
    NeededOtherPackages    := [["GAPDoc", ">= 1.5"],
                              ["json", ">= 1.1.0"],
                              ["JupyterKernel", ">= 0.99999"]],
    SuggestedOtherPackages := [],
    ExternalConditions     := []
  ),

  AvailabilityTest := function() return true; end,

  TestFile := "tst/testall.g",

  Keywords := ["Interactive", "Graphics", "Charts", "Graphs"]

));
