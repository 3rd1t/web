provider "nomad" {
  address   = var.nomad.address
  secret_id = var.nomad.token
}


// Adding the docker images here to check for a change.
// If we wouldn't do it, terraform could not detect a change and would not run the nomad jobs.

data "docker_registry_image" "website" {
  name = "perfolio/web-website:latest"
}
resource "docker_image" "website" {
  name          = data.docker_registry_image.website.name
  pull_triggers = [data.docker_registry_image.website.sha256_digest]
}

data "docker_registry_image" "app" {
  name = "perfolio/web-app:latest"
}
resource "docker_image" "app" {
  name          = data.docker_registry_image.app.name
  pull_triggers = [data.docker_registry_image.app.sha256_digest]
}
resource "nomad_job" "website" {
  jobspec = templatefile("${path.module}/jobs/website.hcl", { image = docker_image.website.name })
}

resource "nomad_job" "app" {
  jobspec = templatefile("${path.module}/jobs/app.hcl", { image = docker_image.app.name })
}

