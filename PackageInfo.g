#
# francy: Interactive Discrete Mathematics in GAP
#
# This file contains package meta data. For additional information on
# the meaning and correct usage of these fields, please consult the
# manual of the "Example" package as well as the comments in its
# PackageInfo.g file.
#

SetPackageInfo(rec(

  PackageName := "Francy",
  Subtitle    := "Framework for Interactive Discrete Mathematics",
  Version     := "1.2.5",
  Date        := "05/09/2022", # dd/mm/yyyy format
  License     := "MIT",

  Persons := [
    rec(
      LastName      := "Martins",
      FirstNames    := "Manuel",
      IsAuthor      := true,
      IsMaintainer  := true,
      Email         := "manuelmachadomartins@gmail.com",
      WWWHome       := "http://github.com/mcmartins",
      PostalAddress := Concatenation("Departamento de Ciências e Tecnologia da Universidade Aberta", "\n", 
                                    "Lisboa, Portugal", "\n", 
                                    "Faculdade de Ciências e Tecnologia da Universidade de Coimbra", "\n", 
                                    "Coimbra, Portugal"),
      Institution   := Concatenation("Departamento de Ciências e Tecnologia da Universidade Aberta", "\n", 
                                    "Lisboa, Portugal", "\n", 
                                    "Faculdade de Ciências e Tecnologia da Universidade de Coimbra", "\n", 
                                    "Coimbra, Portugal"),
      Place         := "Lisbon, Coimbra - PT"
    )
  ],

  Status := "deposited",

  SourceRepository := rec(
    Type := "git",
    URL  := Concatenation( "https://github.com/gap-packages/", ~.PackageName ),
  ),
  IssueTrackerURL := Concatenation(~.SourceRepository.URL, "/issues"),
  PackageWWWHome  := "https://gap-packages.github.io/francy",
  PackageInfoURL  := Concatenation(~.PackageWWWHome, "/PackageInfo.g"),
  README_URL      := Concatenation(~.PackageWWWHome, "/README.md"),
  ArchiveURL      := Concatenation("https://github.com/gap-packages/francy/",
                                "releases/download/v", ~.Version,
                                "/francy-", ~.Version),
  ArchiveFormats  := ".tar.gz",

  AbstractHTML :=
  "The <span class=\"pkgname\">Francy</span> package allows to use graphics in GAP.",

  PackageDoc := rec(
    BookName         := "Francy",
    ArchiveURLSubset := ["doc"],
    HTMLStart        := "doc/chap0_mj.html",
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
