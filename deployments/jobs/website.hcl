job "website" {
  datacenters = ["dc1"]
  type        = "service"

  update {
    auto_revert  = true
    auto_promote = true
    canary       = 2
  }

  group "website" {
    count = 2

    network {
      port "http" {
        to = 3000
      }
    }

    task "website" {
      driver = "docker"

      config {
        image      = "perfolio/web-website:${tag}"
        ports      = ["http"]
        force_pull = true
      }

      service {
        name = "website"
        port = "http"

        tags = [
          "traefik.enable=true",
          "traefik.http.routers.website.rule=Host(`perfol.io`)",
        ]
      }

      resources {
        cpu    = 200
        memory = 150
      }
    }
  }
}
