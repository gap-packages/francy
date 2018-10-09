#
# francy: Interactive Discrete Mathematics in GAP
#
# This file contains package meta data. For additional information on
# the meaning and correct usage of these fields, please consult the
# manual of the "Example" package as well as the comments in its
# PackageInfo.g file.
#

SetPackageInfo(rec(

  PackageName := "francy",
  Subtitle    := "Framework for Interactive Discrete Mathematics",
  Version     := "0.12.2",
  Date        := "07/10/2018",

  Persons := [
    rec(
      LastName      := "Martins",
      FirstNames    := "Manuel",
      IsAuthor      := true,
      IsMaintainer  := true,
      Email         := "manuelmachadomartins@gmail.com",
      WWWHome       := "http://github.com/mcmartins",
      PostalAddress := "Departamento de Ciências e Tecnologia da Universidade Aberta | Faculdade de Ciências e Tecnologia da Universidade de Coimbra",
      Institution   := "Departamento de Ciências e Tecnologia da Universidade Aberta | Faculdade de Ciências e Tecnologia da Universidade de Coimbra",
      Place         := "Lisbon, Coimbra - PT"
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
    URL  := Concatenation( "https://github.com/gap-packages/", ~.PackageName ),
  ),
  IssueTrackerURL := Concatenation(~.SourceRepository.URL, "/issues"),
  PackageWWWHome  := Concatenation("https://gap-packages.github.io/", ~.PackageName),
  PackageInfoURL  := Concatenation(~.PackageWWWHome, "/PackageInfo.g"),
  README_URL      := Concatenation(~.PackageWWWHome, "/README.md"),
  ArchiveURL      := Concatenation(~.SourceRepository.URL, "/archive/v", ~.Version),
  ArchiveFormats  := ".tar.gz",

  AbstractHTML :=
  "The <span class=\"pkgname\">Francy</span> package allows to use graphics in GAP.",

  PackageDoc := rec(
    BookName         := "Francy",
    ArchiveURLSubset := ["doc"],
    HTMLStart        := "doc/chap0.html",
    PDFFile          := "doc/manual.pdf",
    SixFile          := "doc/manual.six",
    LongTitle        := "FRANCY - A Framework for Interactive Discrete Mathematics"
  ),

  Dependencies := rec(
    GAP                    := ">=4.10",
    NeededOtherPackages    := [["GAPDoc", ">= 1.6.1"],
                              ["json", ">= 2.0.0"],
                              ["JupyterKernel", ">= 1.0"]],
    SuggestedOtherPackages := [],
    ExternalConditions     := []
  ),

  AvailabilityTest := ReturnTrue,

  TestFile := "tst/testall.g",

  Keywords := ["Jupyter", "User Interface", "Interactive", "Graphics", "Charts", "Graphs"]

));
