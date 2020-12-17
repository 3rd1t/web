provider "nomad" {}



resource "nomad_job" "website" {
  jobspec = file("${path.module}/jobs/website.hcl")
}

resource "nomad_job" "app" {
  jobspec = file("${path.module}/jobs/app.hcl")
}



// resource "random_id" "app_id" {
//   keepers = {
//     image_hash = data.docker_registry_image.web_app.sha256_digest
//   }
//   byte_length = 8
// }
// resource "random_integer" "app_port" {
//   min = 10000
//   max = 65535
//   keepers = {
//     image_hash = data.docker_registry_image.web_app.sha256_digest
//   }
// }

// resource "docker_container" "perfolio_web_app" {
//   name     = "perfolio-web-app-${random_id.app_id.hex}"
//   image    = docker_image.web_app.name
//   hostname = var.web_app.host

//   restart = "always"
//   ports {
//     internal = 4200
//     external = random_integer.app_port.result
//   }
//   labels {
//     label = "traefik.enable"
//     value = true
//   }
//   labels {
//     label = "traefik.http.routers.app.rule"
//     value = "Host(`app.perfol.io`)"
//   }
//   env = [
//     "AUTH0_CLIENT_ID=${var.auth0.client_id}",
//     "AUTH0_CLIENT_SECRET=${var.auth0.client_secret}",
//     "AUTH0_DOMAIN=${var.auth0.domain}",
//     "AUTH0_REDIRECT_URI=${var.auth0.redirect_url}",
//     "AUTH0_POST_LOGOUT_REDIRECT_URI=${var.auth0.logout_url}",
//     "COOKIE_SECRET=${var.cookie_secret}",
//   ]

//   lifecycle {
//     create_before_destroy = true
//   }


// }

// resource "random_id" "website_id" {
//   keepers = {
//     image_hash = data.docker_registry_image.web_website.sha256_digest
//   }
//   byte_length = 8
// }
// resource "random_integer" "website_port" {
//   min = 10000
//   max = 65535
//   keepers = {
//     image_hash = data.docker_registry_image.web_website.sha256_digest
//   }
// }
// resource "docker_container" "perfolio_web_website" {
//   name     = "perfolio-web-website-${random_id.website_id.hex}"
//   image    = docker_image.web_website.name
//   hostname = var.web_website.host

//   restart = "always"
//   ports {
//     internal = 4200
//     external = random_integer.website_port.result
//   }
//   labels {
//     label = "traefik.enable"
//     value = true
//   }
//   labels {
//     label = "traefik.http.routers.website.rule"
//     value = "Host(`perfol.io`)"
//   }
// lifecycle {
//     create_before_destroy = true
//   }

// }