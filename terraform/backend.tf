terraform {
  backend "gcs" {
    # This will be over-ridden by backend configuration variables in pipeline.
    #
    # This provider gets its authentication credentials from the GOOGLE_BACKEND_CREDENTIALS
    # or GOOGLE_CREDENTIALS environment variable. This variable should be a path pointing to
    # the location of the service account JSON key.
    #
    # Ideally this credential needs to be different from the one used for authenticating with
    # the Google provider. However, in our case, we are using Google for both backend storage
    # as well as a provider and as a result we can use the same service account JSON key for
    # both by setting just the GOOGLE_CREDENTIALS environment variable.
    bucket = "iqz-apps"
    prefix = "iqz-plus"
  }
}
