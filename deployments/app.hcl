job "app" {
  datacenters = ["dc1"]
  type        = "service"

  update {
    auto_revert  = true
    auto_promote = true
    canary       = 1
  }

  group "app" {
    count = 1

    network {
      port "http" {
        to = 3000
      }
    }

    task "app" {
      driver = "docker"

      config {
        image      = "perfolio/web-app:[[ .image_tag ]]"
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

      vault {
        policies = ["apps"]
      }
      template {
        data = <<EOF
AUTH0_DOMAIN={{with secret "prod/auth0/application"}}{{.Data.domain}}{{end}}
AUTH0_CLIENT_ID={{with secret "prod/auth0/application"}}{{.Data.clientId}}{{end}}
AUTH0_CLIENT_SECRET={{with secret "prod/auth0/application"}}{{.Data.clientSecret}}{{end}}
AUTH0_REDIRECT_URI={{with secret "prod/auth0/application"}}{{.Data.redirectUri}}{{end}}
AUTH0_POST_LOGOUT_REDIRECT_URI={{with secret "prod/auth0/application"}}{{.Data.postLogoutRedirectUri}}{{end}}
AUTH0_AUDIENCE={{with secret "prod/auth0/api"}}{{.Data.audience}}{{end}}
COOKIE_SECRET={{with secret "prod/cookies"}}{{.Data.secret}}{{end}}
API_ADDR=https://api.perfol.io
        EOF
        destination = "secrets/.env"
        env = true
      }
      resources {
        cpu    = 200
        memory = 150
      }
    }
  }
}
