
variable "nomad" {
  description = "Address and secret id for nomad"
  type = object({
    address = string
    token   = string
  })
  sensitive = true
}

variable "tag" {
  description = "docker image tag"
  type = string
  default = "latest"
}