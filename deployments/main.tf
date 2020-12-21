provider "nomad" {
  address   = var.nomad.address
  secret_id = var.nomad.token
}
resource "nomad_job" "website" {
  jobspec = templatefile("${path.module}/jobs/website.hcl", { tag = var.tag })
}

resource "nomad_job" "app" {
    jobspec = templatefile("${path.module}/jobs/app.hcl", { tag = var.tag })

}