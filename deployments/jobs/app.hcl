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

    task "app" {
      driver = "docker"


      template {
        data      = <<EOH
            AUTH0_CLIENT_ID=2fG5w743qzoG0tgTbV9FFki0jC4dc666
            AUTH0_CLIENT_SECRET=LALNcOMBAn8CAzN5KIgnrpZYL2eSvMVfARbIPl6fplkEhmGqz7PQBicn3sXYtz7c
            AUTH0_DOMAIN=perfolio.eu.auth0.com
            AUTH0_REDIRECT_URI=https://app.perfol.io/api/callback
            AUTH0_POST_LOGOUT_REDIRECT_URI=https://perfol.io/
            COOKIE_SECRET=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        EOH
        destination = "secrets/.env"
        env         = true
        change_mode = "restart"
      }

      config {
        image = "perfolio/web-app:prod"
        ports = ["http"]
      }

      service {
        name = "app"

        tags = [
          "public",
          "web",
          "traefik.enable=true",
          "traefik.http.routers.app.rule=Host(`app.perfol.io`)",
        ]
      }
    }
  }
}
