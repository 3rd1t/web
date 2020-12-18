
variable "nomad" {
  description = "Address and secret id for nomad" 
  type = object({
    address = string
    token = string
  })
}