job "website" {
  datacenters = ["dc1"]
  type        = "service"

  update {
    auto_revert  = true
    auto_promote = true
    canary       = 1
  }

  group "website" {
    count = 1

    network {
      port "http" {
        to = 3000
      }
    }

    task "website" {
      driver = "docker"

      config {
        image      = "perfolio/web-website:[[ .image_tag ]]"
        ports      = ["http"]
        force_pull = true
      }

      service {
        name = "website"
        port = "http"

        tags = [
          "traefik.enable=true",
          "traefik.http.routers.website.rule=Host(`perfol.io`)||Host(`www.perfol.io`)",
        ]
      }

      resources {
        cpu    = 200
        memory = 150
      }
    }
  }
}
