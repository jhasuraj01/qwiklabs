# GSP313 Create and Manage Cloud Resources: Challenge Lab

## Setup
Set Default Compute Zone and Region
```bash
gcloud config set compute/zone us-east1-b
gcloud config set compute/region us-east1
```

## Task 1: Create a project jumphost instance

Create an instance with command line
```bash
gcloud compute instances create nucleus-jumphost \
  --machine-type f1-micro
```

## Task 2: Create a Kubernetes service cluster

### Create a GKE cluster
```bash
gcloud container clusters create my-cluster
```

### Get authentication credentials for the cluster
```bash
gcloud container clusters get-credentials my-cluster
```

### Deploy an application to the cluster
```bash
kubectl create deployment hello-server --image=gcr.io/google-samples/hello-app:2.0
```

### Expose your application to external traffic
```bash
kubectl expose deployment hello-server --type=LoadBalancer --port 8080
```

### Check if service is up and running
```bash
kubectl get service
```

## Task 3: Set up an HTTP load balancer
