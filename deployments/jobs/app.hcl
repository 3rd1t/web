job "app" {
  datacenters = ["dc1"]
  type        = "service"

  update {
    auto_revert  = true
    auto_promote = true
    canary       = 1
  }

  group "app" {
    count = 2

    network {
      port "http" {
        to = 3000
      }
    }

    task "app" {
      driver = "docker"

      config {
        image      = "perfolio/web-app"
        ports      = ["http"]
        force_pull = true
      }

      service {
        name = "app"
        port = "http"

        tags = [
          "traefik.enable=true",
          "traefik.http.routers.app.rule=Host(`app.perfol.io`)",
        ]
      }

      resources {
        cpu    = 200
        memory = 150
      }
    }
  }
}
