variable "deployment_image_name" {
  type        = string
  sensitive   = false
  description = "The name of the image to be deployed in the K8s deployment."
}