"use strict";(self.webpackChunkqwiklabs=self.webpackChunkqwiklabs||[]).push([[310],{6454:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=t(7462),n=t(3366),c=(t(7294),t(3905)),l=["components"],s={id:"GSP313",title:"GSP313 Challenge Lab",sidebar_position:7},o="GSP313 Create and Manage Cloud Resources: Challenge Lab",i={unversionedId:"create-and-manage-cloud-resources/GSP313",id:"create-and-manage-cloud-resources/GSP313",isDocsHomePage:!1,title:"GSP313 Challenge Lab",description:"Setup",source:"@site/docs/create-and-manage-cloud-resources/GSP313.md",sourceDirName:"create-and-manage-cloud-resources",slug:"/create-and-manage-cloud-resources/GSP313",permalink:"/qwiklabs/docs/create-and-manage-cloud-resources/GSP313",editUrl:"https://github.com/jhasuraj01/qwiklabs/tree/main/docs/create-and-manage-cloud-resources/GSP313.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"GSP313",title:"GSP313 Challenge Lab",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Google Qwiklabs Solved Labs",permalink:"/qwiklabs/docs/intro"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Task 1: Create a project jumphost instance",id:"task-1-create-a-project-jumphost-instance",children:[]},{value:"Task 2: Create a Kubernetes service cluster",id:"task-2-create-a-kubernetes-service-cluster",children:[{value:"Create a GKE cluster",id:"create-a-gke-cluster",children:[]},{value:"Get authentication credentials for the cluster",id:"get-authentication-credentials-for-the-cluster",children:[]},{value:"Deploy an application to the cluster",id:"deploy-an-application-to-the-cluster",children:[]},{value:"Expose your application to external traffic",id:"expose-your-application-to-external-traffic",children:[]},{value:"Check if service is up and running",id:"check-if-service-is-up-and-running",children:[]}]},{value:"Task 3: Set up an HTTP load balancer",id:"task-3-set-up-an-http-load-balancer",children:[{value:"Create Instance Template",id:"create-instance-template",children:[]},{value:"Create a target pool",id:"create-a-target-pool",children:[]},{value:"Create Managed Instance Group",id:"create-managed-instance-group",children:[]},{value:"Set Target Pool",id:"set-target-pool",children:[]},{value:"Firewall rule",id:"firewall-rule",children:[]},{value:"Create a health check",id:"create-a-health-check",children:[]},{value:"Create a backend service",id:"create-a-backend-service",children:[]},{value:"Attach the managed instance group to a backend service",id:"attach-the-managed-instance-group-to-a-backend-service",children:[]},{value:"Create a URL map",id:"create-a-url-map",children:[]},{value:"Target the HTTP proxy to route requests to your URL map",id:"target-the-http-proxy-to-route-requests-to-your-url-map",children:[]},{value:"Create External IP Address",id:"create-external-ip-address",children:[]},{value:"Forwarding Rule",id:"forwarding-rule",children:[]},{value:"Get a list of Forwarding Rules",id:"get-a-list-of-forwarding-rules",children:[]}]}],p={toc:u};function d(e){var a=e.components,t=(0,n.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"gsp313-create-and-manage-cloud-resources-challenge-lab"},"GSP313 Create and Manage Cloud Resources: Challenge Lab"),(0,c.kt)("h2",{id:"setup"},"Setup"),(0,c.kt)("p",null,"Set Default Compute Zone and Region"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set compute/zone us-east1-b\ngcloud config set compute/region us-east1\n")),(0,c.kt)("h2",{id:"task-1-create-a-project-jumphost-instance"},"Task 1: Create a project jumphost instance"),(0,c.kt)("p",null,"Create an instance with command line"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instances create nucleus-jumphost \\\n  --machine-type f1-micro\n")),(0,c.kt)("h2",{id:"task-2-create-a-kubernetes-service-cluster"},"Task 2: Create a Kubernetes service cluster"),(0,c.kt)("h3",{id:"create-a-gke-cluster"},"Create a GKE cluster"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create my-cluster\n")),(0,c.kt)("h3",{id:"get-authentication-credentials-for-the-cluster"},"Get authentication credentials for the cluster"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials my-cluster\n")),(0,c.kt)("h3",{id:"deploy-an-application-to-the-cluster"},"Deploy an application to the cluster"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create deployment hello-server --image gcr.io/google-samples/hello-app:2.0\n")),(0,c.kt)("h3",{id:"expose-your-application-to-external-traffic"},"Expose your application to external traffic"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose deployment hello-server --type LoadBalancer --port 8080\n")),(0,c.kt)("h3",{id:"check-if-service-is-up-and-running"},"Check if service is up and running"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service\n")),(0,c.kt)("h2",{id:"task-3-set-up-an-http-load-balancer"},"Task 3: Set up an HTTP load balancer"),(0,c.kt)("h3",{id:"create-instance-template"},"Create Instance Template"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instance-templates create nginx-web-server-template \\\n  --network default \\\n  --subnet default \\\n  --image-family debian-9 \\\n  --image-project debian-cloud \\\n  --tags nginx-web-server \\\n  --machine-type f1-micro \\\n  --metadata startup-script \"#! /bin/bash\n    apt-get update\n    apt-get install -y nginx\n    service nginx start\n    sed -i -- 's/nginx/Google Cloud Platform - '\"\\$HOSTNAME\"'/' /var/www/html/index.nginx-debian.html\"\n")),(0,c.kt)("h3",{id:"create-a-target-pool"},"Create a target pool"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute http-health-checks create basic-check\ngcloud compute target-pools create nginx-web-server-pool \\\n  --http-health-check basic-check\n")),(0,c.kt)("h3",{id:"create-managed-instance-group"},"Create Managed Instance Group"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instance-groups managed create nginx-web-servers \\\n    --size 2 \\\n    --template nginx-web-server-template\n")),(0,c.kt)("h3",{id:"set-target-pool"},"Set Target Pool"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instance-groups managed set-target-pools nginx-web-servers \\\n  --target-pools nginx-web-server-pool\n")),(0,c.kt)("h3",{id:"firewall-rule"},"Firewall rule"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute firewall-rules create nginx-web-server-health-check \\\n  --network default \\\n  --action allow \\\n  --direction ingress \\\n  --source-ranges 130.211.0.0/22,35.191.0.0/16 \\\n  --target-tags nginx-web-server \\\n  --rules tcp:80\n")),(0,c.kt)("h3",{id:"create-a-health-check"},"Create a health check"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute health-checks create http http-basic-check \\\n  --port 80\n")),(0,c.kt)("h3",{id:"create-a-backend-service"},"Create a backend service"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute backend-services create web-backend-service \\\n  --protocol HTTP \\\n  --port-name http \\\n  --health-checks http-basic-check \\\n  --global\n")),(0,c.kt)("h3",{id:"attach-the-managed-instance-group-to-a-backend-service"},"Attach the managed instance group to a backend service"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute backend-services add-backend web-backend-service \\\n  --instance-group nginx-web-servers \\\n  --global\n")),(0,c.kt)("h3",{id:"create-a-url-map"},"Create a URL map"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute url-maps create web-map-http \\\n  --default-service web-backend-service\n")),(0,c.kt)("h3",{id:"target-the-http-proxy-to-route-requests-to-your-url-map"},"Target the HTTP proxy to route requests to your URL map"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute target-http-proxies create http-lb-proxy \\\n  --url-map web-map-http\n")),(0,c.kt)("h3",{id:"create-external-ip-address"},"Create External IP Address"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute addresses create nginx-server-ip\n")),(0,c.kt)("h3",{id:"forwarding-rule"},"Forwarding Rule"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute forwarding-rules create nginx-web-server-forwarding-rule \\\n  --global \\\n  --ports 80 \\\n  --address nginx-server-ip\n  --target-http-proxy http-lb-proxy\n")),(0,c.kt)("h3",{id:"get-a-list-of-forwarding-rules"},"Get a list of Forwarding Rules"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute forwarding-rules list\n")))}d.isMDXComponent=!0}}]);