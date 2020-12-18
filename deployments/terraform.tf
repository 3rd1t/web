terraform {
  backend "remote" {
    organization = "perfolio"

    workspaces {
      name = "web"
    }
  }
}