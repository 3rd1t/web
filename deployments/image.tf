resource "docker_registry_image" "web_analytics" {
  name = "perfolio/web-analytics:${var.tag}"
}
resource "docker_image" "web_analytics" {
  name          = docker_registry_image.web-analytics.name
  pull_triggers = [docker_registry_image.web-analytics.sha256_digest]
}


resource "docker_registry_image" "web_core" {
  name = "perfolio/web-core:${var.tag}"
}
resource "docker_image" "web_core" {
  name          = docker_registry_image.web-core.name
  pull_triggers = [docker_registry_image.web-core.sha256_digest]
}