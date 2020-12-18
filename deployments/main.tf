
provider "nomad" {
  address = var.nomad.address
  secret_id = var.nomad.token
}
resource "nomad_job" "website" {
  jobspec = file("${path.module}/jobs/website.hcl")
}

resource "nomad_job" "app" {
  jobspec = file("${path.module}/jobs/app.hcl")
}

