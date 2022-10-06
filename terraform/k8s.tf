resource "kubernetes_namespace_v1" "iqz_plus_website_ns" {
  metadata {
    name = local.app_name
    labels = {
      app = local.app_name
    }
  }
}

resource "kubernetes_deployment_v1" "iqz_plus_website_dep" {
  metadata {
    name      = local.app_name
    namespace = kubernetes_namespace_v1.iqz_plus_website_ns.metadata[0].name
    labels = {
      app = local.app_name
    }
  }

  spec {
    selector {
      match_labels = {
        app = local.app_name
      }
    }
    strategy {
      type = "RollingUpdate"
      rolling_update {
        max_surge       = "25%"
        max_unavailable = 0
      }
    }
    replicas = 1

    template {
      metadata {
        labels = {
          app = local.app_name
        }
      }
      spec {
        node_selector = {
          "cloud.google.com/gke-nodepool" = "prod-nodes"
        }
        container {
          image = var.deployment_image_name
          name  = "${local.app_name}-app"

          port {
            container_port = 8080
          }

          resources {
            limits = {
              cpu    = "200m"
              memory = "200Mi"
            }
            requests = {
              cpu    = "100m"
              memory = "100Mi"
            }
          }

          liveness_probe {
            http_get {
              path = "/"
              port = 8080
            }
            initial_delay_seconds = 3
            period_seconds        = 3
          }
          readiness_probe {
            http_get {
              path = "/"
              port = 8080
            }
            initial_delay_seconds = 3
            period_seconds        = 3
          }
        }
      }
    }
  }
}

resource "kubernetes_service_v1" "iqz_plus_website_svc" {
  metadata {
    name      = local.app_name
    namespace = kubernetes_namespace_v1.iqz_plus_website_ns.metadata[0].name
    labels = {
      app = local.app_name
    }
  }
  spec {
    selector = {
      app = local.app_name
    }

    port {
      port        = 8080
      protocol    = "TCP"
      target_port = 8080
    }

    type = "ClusterIP"
  }
}

resource "kubernetes_ingress_v1" "iqz_website_ing" {
  metadata {
    name      = local.app_name
    namespace = kubernetes_namespace_v1.iqz_plus_website_ns.metadata[0].name
    annotations = {
      "cert-manager.io/cluster-issuer"                   = "letsencrypt-nginx"
      "kubernetes.io/tls-acme"                           = "true"
      "nginx.ingress.kubernetes.io/from-to-www-redirect" = "true"
      "acme.cert-manager.io/http01-edit-in-place"        = "true"
      "nginx.ingress.kubernetes.io/server-alias"         = local.app_host_name
    }
  }

  spec {
    ingress_class_name = "nginx"
    rule {
      host = local.app_host_name
      http {
        path {
          backend {
            service {
              name = kubernetes_service_v1.iqz_plus_website_svc.metadata.0.name
              port {
                number = 8080
              }
            }
          }

          path = "/"
        }
      }
    }

    tls {
      hosts = [
        local.app_host_name,
        "www.${local.app_host_name}",
      ]
      secret_name = "${local.app_name}-tls"
    }
  }
}
