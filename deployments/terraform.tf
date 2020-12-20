terraform {
  backend "remote" {
    organization = "perfolio"

    workspaces {
      name = "web"
    }
  }
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}