// This module is not used directly to deploy this repository.
// It is only deployed when `perfolio/deploy` imports it and issues a deployment.

// Continuous deployment of the web repository is done by scheduling nomad jobs directly.
// This is necessary because terraform does not pick up on changes in the docker image and
// would not run the jobs.
// To fix this we would need to tag the docker images with a version every time but that is not
// really compatible with our deployments yet.


provider "nomad" {
  address   = var.nomad.address
  secret_id = var.nomad.token
}

resource "nomad_job" "website" {
  jobspec = "${path.module}/jobs/website.hcl"
}

resource "nomad_job" "app" {
  jobspec = "${path.module}/jobs/app.hcl"

}