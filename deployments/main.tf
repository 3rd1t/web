provider "nomad" {
  address   = var.nomad.address
  secret_id = var.nomad.token
}


// Adding the docker images here to check for a change.
// If we wouldn't do it, terraform could not detect a change and would not run the nomad jobs.

data "docker_registry_image" "website" {
  name = "perfolio/web-website"
}
resource "docker_image" "website" {
  name          = data.docker_registry_image.website.name
  pull_triggers = [data.docker_registry_image.website.sha256_digest]
}

data "docker_registry_image" "app" {
  name = "perfolio/web-app"
}
resource "docker_image" "app" {
  name          = data.docker_registry_image.app.name
  pull_triggers = [data.docker_registry_image.app.sha256_digest]
}
resource "nomad_job" "website" {
  jobspec = templatefile("${path.module}/jobs/website.hcl", { hash = docker_image.website.latest })
}

resource "nomad_job" "app" {
    jobspec = templatefile("${path.module}/jobs/app.hcl", { hash = docker_image.app.latest })

}