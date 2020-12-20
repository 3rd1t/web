job "app" {
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

  group "app" {
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

    task "app" {
      driver = "docker"

      template {
        source      = "/home/terraform/deploy/.env"
        destination = "secrets/.env"
        env         = true
        change_mode = "restart"
      }

      config {
        image = "${image}"

        ports = ["http"]
      }

      service {
        name = "app"
        port = "http"

        tags = [
          "traefik.enable=true",
          "traefik.http.routers.app.rule=Host(`app.perfol.io`)",
        ]
         check {
         type = "http"
         port = "http"
         path = "/"
interval = "5s"
timeout = "2s"
      }
      }
      resources {
        cpu = 100
        memory = 100
      }
     
    }
  }
}
