resource "google_monitoring_uptime_check_config" "site_uptime" {
  display_name = "${local.app_name}-check"
  timeout      = "10s"
  period       = "60s"
  project      = data.google_project.iqz_apps.project_id

  http_check {
    path         = "/"
    port         = "443"
    use_ssl      = true
    validate_ssl = false // Should be false for Let's Encrypt certs
  }

  monitored_resource {
    type = "uptime_url"
    labels = {
      project_id = data.google_project.iqz_apps.project_id
      host       = local.app_host_name
    }
  }
}

data "google_monitoring_notification_channel" "dev_team_channel" {
  display_name = "dev-team-channel"
  project      = data.google_project.iqz_apps.project_id
}

resource "google_monitoring_alert_policy" "site_uptime_alert_policy" {
  display_name = "${google_monitoring_uptime_check_config.site_uptime.display_name}-failure"
  project      = data.google_project.iqz_apps.project_id

  combiner = "OR"
  conditions {
    display_name = "failure of ${google_monitoring_uptime_check_config.site_uptime.display_name}"
    condition_threshold {
      filter     = "resource.type = \"uptime_url\" AND metric.type = \"monitoring.googleapis.com/uptime_check/check_passed\" AND metric.labels.check_id = ${google_monitoring_uptime_check_config.site_uptime.display_name}"
      duration   = "60s"
      comparison = "COMPARISON_GT"
      aggregations {
        alignment_period     = "1200s"
        per_series_aligner   = "ALIGN_NEXT_OLDER"
        cross_series_reducer = "REDUCE_COUNT_FALSE"
        group_by_fields      = ["resource.label.*"]
      }
      trigger {
        count = 1
      }
    }
  }

  notification_channels = [
    data.google_monitoring_notification_channel.dev_team_channel.name
  ]
}
