
variable "web_app" {
  description = "The host and port of the app website"
  type = object({
    host = string
    port = number
  })
  default = {
    host = "perfolio-web-app"
    port = 43002
  }

}


variable "web_website" {
  description = "The host and port of the website"
  type = object({
    host = string
    port = number
  })
  default = {
    host = "perfolio-web-website"
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
  type        = string
  default     = "latest"
}