job "website" {
  datacenters = ["dc1"]
  type        = "service"

  update {
    max_parallel      = 1
    min_healthy_time  = "10s"
    healthy_deadline  = "3m"
    progress_deadline = "10m"
    auto_revert       = true
    canary            = 1
  }

  group "website" {
    count = 2

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
        image = "${image}"
        ports = ["http"]
      }

      service {
        name = "website"
        port = "http"

        tags = [
          "traefik.enable=true",
          "traefik.http.routers.website.rule=Host(`perfol.io`)",
        ]
      }
    }
  }
}
