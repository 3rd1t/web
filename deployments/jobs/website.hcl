job "website" {
  datacenters = ["dc1"]
  type        = "service"

  update {
    max_parallel      = 1
    min_healthy_time  = "10s"
    healthy_deadline  = "3m"
    progress_deadline = "10m"
    auto_revert       = true
    canary            = 0
  }

  group "website" {
    count = 1

    network {
      port "http" {
        to = 3000
      }
    }

    restart {
      attempts = 2
      interval = "30m"
      delay    = "15s"
      mode     = "fail"
    }

    task "website" {
      driver = "docker"

      config {
        image = "perfolio/web-website:prod"
        ports = ["http"]
      }

      service {
        name = "website"

        tags = [
          "public",
          "web",
          "traefik.enable=true",
          "traefik.http.routers.website.rule=Host(`perfol.io`)",
        ]
      }
    }
  }
}
