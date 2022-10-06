terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.25.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.11.0"
    }
  }
}

provider "google" {
  project = "iqz-terraform"
  region  = "us-east1"
  zone    = "us-east1-b"
}

# https://github.com/terraform-google-modules/terraform-google-kubernetes-engine/tree/master/modules/auth
module "gke_auth" {
  source = "terraform-google-modules/kubernetes-engine/google//modules/auth"

  project_id   = "iqz-apps"
  cluster_name = "prod-cluster"
  location     = "us-east1"
}

provider "kubernetes" {
  host                   = module.gke_auth.host
  token                  = module.gke_auth.token
  cluster_ca_certificate = module.gke_auth.cluster_ca_certificate
}

data "google_project" "iqz_apps" {
  project_id = "iqz-apps"
}

locals {
  app_name      = "iqz-plus-website"
  app_host_name = "iqzplus.com"
}

resource "google_storage_bucket" "iqz_plus_website_bucket" {
  name     = local.app_name
  project  = data.google_project.iqz_apps.project_id
  location = "us"

  labels = {
    "app"     = local.app_name
    "project" = data.google_project.iqz_apps.project_id
  }
}
