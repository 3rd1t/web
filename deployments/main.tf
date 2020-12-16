
provider "docker" {
  # host = "tcp://127.0.0.1:2376"
  # host = "ssh://chronark@perfol.io"
}



resource "docker_container" "perfolio_web_app" {
  name     = "perfolio-web-app-${data.docker_registry_image.web_app.sha256_digest}"
  image    = docker_image.web_app.name
  hostname = var.web_app.host

  restart = "always"
  ports {
    internal = 4200
    external = var.web_app.port
  }
  labels {
    label = "traefik.enable"
    value = true
  }
  labels {
    label = "traefik.http.routers.app.rule"
    value = "Host(`app.perfol.io`)"
  }
  env = [
    "AUTH0_CLIENT_ID=${var.auth0.client_id}",
    "AUTH0_CLIENT_SECRET=${var.auth0.client_secret}",
    "AUTH0_DOMAIN=${var.auth0.domain}",
    "AUTH0_REDIRECT_URI=${var.auth0.redirect_url}",
    "AUTH0_POST_LOGOUT_REDIRECT_URI=${var.auth0.logout_url}",
    "COOKIE_SECRET=${var.cookie_secret}",
  ]

  lifecycle {
    create_before_destroy = true
  }


}


resource "docker_container" "perfolio_web_website" {
  name     = "perfolio-web-website-${data.docker_registry_image.web_website.sha256_digest}"
  image    = docker_image.web_website.name
  hostname = var.web_website.host

  restart = "always"
  ports {
    internal = 4200
    external = var.web_website.port
  }
  labels {
    label = "traefik.enable"
    value = true
  }
  labels {
    label = "traefik.http.routers.website.rule"
    value = "Host(`perfol.io`)"
  }
lifecycle {
    create_before_destroy = true
  }

}