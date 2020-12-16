data "docker_registry_image" "web_analytics" {
  name = "perfolio/web-analytics:${var.tag}"
}
resource "docker_image" "web_analytics" {
  name          = data.docker_registry_image.web-analytics.name
  pull_triggers = [data.docker_registry_image.web-analytics.sha256_digest]
}


data "docker_registry_image" "web_website" {
  name = "perfolio/web-website:${var.tag}"
}
resource "docker_image" "web_website" {
  name          = data.docker_registry_image.web-website.name
  pull_triggers = [data.docker_registry_image.web-website.sha256_digest]
}