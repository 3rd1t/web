variable "nomad_addr" {
  type = string
  default = "http://localhost:4646"
}

provider "nomad" {
  address = var.nomad_addr
}



resource "nomad_job" "website" {
  jobspec = file("${path.module}/jobs/website.hcl")
}

resource "nomad_job" "app" {
  jobspec = file("${path.module}/jobs/app.hcl")
}

