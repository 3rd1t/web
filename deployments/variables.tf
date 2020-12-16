
variable "web_analytics" {
  description = "The host and port of the analytics website"
  type = object({
    host = string
    port = number
  })
  default = {
    host = "perfolio-web-analytics"
    port = 43002
  }

}


variable "web_core" {
  description = "The host and port of the core website"
  type = object({
    host = string
    port = number
  })
  default = {
    host = "perfolio-web-core"
    port = 43001
  }

}
variable "auth0" {
  description = "auth0 settings"
  type = object({
    client_id     = string
    client_secret = string
    domain        = string
    redirect_url  = string
    logout_url    = string
  })


}

variable "cookie_secret" {
  description = "Secret key to sign cookies"
  type        = string
}

variable "tag" {
  description = "Docker image tag, use `prod` for production"
  type = string
  default = "latest"
}