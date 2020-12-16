data "docker_registry_image" "web_app" {
  name = "perfolio/web-app:${var.tag}"
}
resource "docker_image" "web_app" {
  name          = data.docker_registry_image.web_app.name
  pull_triggers = [data.docker_registry_image.web_app.sha256_digest]
}
data "docker_registry_image" "web_website" {
  name = "perfolio/web-website:${var.tag}"
}
resource "docker_image" "web_website" {
  name          = data.docker_registry_image.web_website.name
  pull_triggers = [data.docker_registry_image.web_website.sha256_digest]
}