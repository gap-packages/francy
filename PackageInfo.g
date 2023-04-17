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
  Version     := "2.0.3",
  Date        := "16/04/2023", # dd/mm/yyyy format
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
                                    "Lisboa, Portugal"),
      Institution   := Concatenation("Departamento de Ciências e Tecnologia da Universidade Aberta", "\n", 
                                    "Lisboa, Portugal"),
      Place         := "Lisbon - PT"
    )
  ],

  Status := "deposited",

  SourceRepository := rec(
    Type := "git",
    URL  := Concatenation( "https://github.com/gap-packages/", ~.PackageName ),
  ),
  IssueTrackerURL := Concatenation( ~.SourceRepository.URL, "/issues" ),
  PackageWWWHome  := Concatenation( "https://gap-packages.github.io/", ~.PackageName ),
  README_URL      := Concatenation( ~.PackageWWWHome, "/README.md" ),
  PackageInfoURL  := Concatenation( ~.PackageWWWHome, "/PackageInfo.g" ),
  ArchiveURL      := Concatenation( ~.SourceRepository.URL,
                                 "/releases/download/v", ~.Version,
                                 "/", ~.PackageName, "-", ~.Version ),
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
                              ["uuid", ">= 0.7"],
                              ["JupyterKernel", ">= 1.4.1"]],
    SuggestedOtherPackages := [],
    ExternalConditions     := []
  ),

  AvailabilityTest := ReturnTrue,

  TestFile := "tst/testall.g",

  Keywords := ["Jupyter", "User Interface", "Interactive", "Graphics", "Charts", "Graphs"]

));
