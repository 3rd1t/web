
variable "nomad" {
  description = "Address and secret id for nomad"
  type = object({
    address = string
    token   = string
  })
  sensitive = true
}


variable "package_version" {
  type        = string
  description = "Semantic version"

}