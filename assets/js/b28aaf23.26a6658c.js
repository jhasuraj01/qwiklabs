"use strict";(self.webpackChunkqwiklabs=self.webpackChunkqwiklabs||[]).push([[442],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(a),g=n,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2033:function(e,t,a){a.d(t,{I:function(){return r}});var r=function(e){return[].concat(e.split(",").map((function(e){return e.trim()})),["Google Cloud Ready","GCP","Qwiklabs","GoogleCloudReady","30DaysOfGoogleCloud","Cloud","Qwiklab","Qwiklabs Google Cloud","web","google cloud","Google Cloud Platform","Google Events","Free Google Swag","Google Cloud ready facilitator program","Google Cloud Ready Program","30 days of google cloud","Google Cloud Ready Program Prizes","Challenge Lab Qwiklabs","Learn to Earn Cloud Challenge"]).join(",")}},4155:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],c={id:"GSP313",title:"GSP313 Challenge Lab",hide_title:!0,description:"This challenge lab tests your skills and knowledge from the labs in the Create and Manage Cloud Resources quest. You should be familiar with the content of the labs before attempting this lab.\n",tags:["Qwiklabs"]},s=void 0,i={unversionedId:"GSP313",id:"GSP313",isDocsHomePage:!1,title:"GSP313 Challenge Lab",description:"This challenge lab tests your skills and knowledge from the labs in the Create and Manage Cloud Resources quest. You should be familiar with the content of the labs before attempting this lab.\n",source:"@site/docs/GSP313.mdx",sourceDirName:".",slug:"/GSP313",permalink:"/qwiklabs/labs/GSP313",editUrl:"https://github.com/jhasuraj01/qwiklabs/tree/main/docs/GSP313.mdx",tags:[{label:"Qwiklabs",permalink:"/qwiklabs/labs/tags/qwiklabs"}],version:"current",lastUpdatedAt:1633329755,formattedLastUpdatedAt:"10/4/2021",frontMatter:{id:"GSP313",title:"GSP313 Challenge Lab",hide_title:!0,description:"This challenge lab tests your skills and knowledge from the labs in the Create and Manage Cloud Resources quest. You should be familiar with the content of the labs before attempting this lab.\n",tags:["Qwiklabs"]},sidebar:"sidebar",previous:{title:"Compute Engine: Qwik Start - Windows",permalink:"/qwiklabs/labs/GSP093"},next:{title:"GSP315 Challenge Lab",permalink:"/qwiklabs/labs/GSP315"}},u=[{value:"Setup",id:"setup",children:[]},{value:"Task 1: Create a project jumphost instance",id:"task-1-create-a-project-jumphost-instance",children:[]},{value:"Task 2: Create a Kubernetes service cluster",id:"task-2-create-a-kubernetes-service-cluster",children:[{value:"Create a GKE cluster",id:"create-a-gke-cluster",children:[]},{value:"Get authentication credentials for the cluster",id:"get-authentication-credentials-for-the-cluster",children:[]},{value:"Deploy an application to the cluster",id:"deploy-an-application-to-the-cluster",children:[]},{value:"Expose your application to external traffic",id:"expose-your-application-to-external-traffic",children:[]},{value:"Check if service is up and running",id:"check-if-service-is-up-and-running",children:[]}]},{value:"Task 3: Set up an HTTP load balancer",id:"task-3-set-up-an-http-load-balancer",children:[{value:"Create Startup Script",id:"create-startup-script",children:[]},{value:"Create Instance Template",id:"create-instance-template",children:[]},{value:"Create Managed Instance Group",id:"create-managed-instance-group",children:[]},{value:"Firewall rule",id:"firewall-rule",children:[]},{value:"Create a health check",id:"create-a-health-check",children:[]},{value:"Set Named Port",id:"set-named-port",children:[]},{value:"Create a backend service",id:"create-a-backend-service",children:[]},{value:"Attach the managed instance group to a backend service",id:"attach-the-managed-instance-group-to-a-backend-service",children:[]},{value:"Create a URL map",id:"create-a-url-map",children:[]},{value:"Target the HTTP proxy to route requests to your URL map",id:"target-the-http-proxy-to-route-requests-to-your-url-map",children:[]},{value:"Forwarding Rule",id:"forwarding-rule",children:[]},{value:"Get a list of Forwarding Rules",id:"get-a-list-of-forwarding-rules",children:[]}]}],p={toc:u};function d(e){var t=e.components,c=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("head",null,(0,l.kt)("meta",{name:"keywords",content:a(2033).I("GSP313")})),(0,l.kt)("h1",{id:"gsp313-create-and-manage-cloud-resources-challenge-lab"},"GSP313 Create and Manage Cloud Resources: Challenge Lab"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Challenge Lab: ",(0,l.kt)("a",{parentName:"p",href:"https://google.qwiklabs.com/focuses/10258?parent=catalog"},"https://google.qwiklabs.com/focuses/10258?parent=catalog"))),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Set Default Compute Zone and Region"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set compute/zone us-east1-b\ngcloud config set compute/region us-east1\n")),(0,l.kt)("h2",{id:"task-1-create-a-project-jumphost-instance"},"Task 1: Create a project jumphost instance"),(0,l.kt)("p",null,"Create an instance with command line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instances create nucleus-jumphost \\\n  --machine-type f1-micro\n")),(0,l.kt)("h2",{id:"task-2-create-a-kubernetes-service-cluster"},"Task 2: Create a Kubernetes service cluster"),(0,l.kt)("h3",{id:"create-a-gke-cluster"},"Create a GKE cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create my-cluster\n")),(0,l.kt)("h3",{id:"get-authentication-credentials-for-the-cluster"},"Get authentication credentials for the cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials my-cluster\n")),(0,l.kt)("h3",{id:"deploy-an-application-to-the-cluster"},"Deploy an application to the cluster"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create deployment hello-server --image gcr.io/google-samples/hello-app:2.0\n")),(0,l.kt)("h3",{id:"expose-your-application-to-external-traffic"},"Expose your application to external traffic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl expose deployment hello-server --type LoadBalancer --port 8080\n")),(0,l.kt)("h3",{id:"check-if-service-is-up-and-running"},"Check if service is up and running"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get service\n")),(0,l.kt)("h2",{id:"task-3-set-up-an-http-load-balancer"},"Task 3: Set up an HTTP load balancer"),(0,l.kt)("h3",{id:"create-startup-script"},"Create Startup Script"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > startup.sh\n#! /bin/bash\napt-get update\napt-get install -y nginx\nservice nginx start\nsed -i -- 's/nginx/Google Cloud Platform - '\"\\$HOSTNAME\"'/' /var/www/html/index.nginx-debian.html\nEOF\n")),(0,l.kt)("h3",{id:"create-instance-template"},"Create Instance Template"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instance-templates create nginx-server-template \\\n  --metadata-from-file startup-script=startup.sh \\\n  --network nucleus-vpc \\\n  --machine-type f1-micro\n")),(0,l.kt)("h3",{id:"create-managed-instance-group"},"Create Managed Instance Group"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instance-groups managed create nginx-server-group \\\n  --base-instance-name nginx-server \\\n  --size 2 \\\n  --template nginx-server-template\n")),(0,l.kt)("h3",{id:"firewall-rule"},"Firewall rule"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute firewall-rules create nginx-server-firewall \\\n  --allow tcp:80 \\\n  --network nucleus-vpc\n")),(0,l.kt)("h3",{id:"create-a-health-check"},"Create a health check"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute http-health-checks create http-basic-check\n")),(0,l.kt)("h3",{id:"set-named-port"},"Set Named Port"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instance-groups managed \\\n  set-named-ports nginx-server-group \\\n  --named-ports http:80\n")),(0,l.kt)("h3",{id:"create-a-backend-service"},"Create a backend service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute backend-services create nginx-server-backend \\\n  --protocol HTTP \\\n  --http-health-checks http-basic-check \\\n  --global\n")),(0,l.kt)("h3",{id:"attach-the-managed-instance-group-to-a-backend-service"},"Attach the managed instance group to a backend service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute backend-services add-backend nginx-server-backend \\\n  --instance-group nginx-server-group \\\n  --global\n")),(0,l.kt)("h3",{id:"create-a-url-map"},"Create a URL map"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute url-maps create nginx-server-map \\\n  --default-service nginx-server-backend\n")),(0,l.kt)("h3",{id:"target-the-http-proxy-to-route-requests-to-your-url-map"},"Target the HTTP proxy to route requests to your URL map"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute target-http-proxies create http-lb-proxy \\\n  --url-map nginx-server-map\n")),(0,l.kt)("h3",{id:"forwarding-rule"},"Forwarding Rule"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute forwarding-rules create http-content-rule \\\n  --global \\\n  --target-http-proxy http-lb-proxy \\\n  --ports 80\n")),(0,l.kt)("h3",{id:"get-a-list-of-forwarding-rules"},"Get a list of Forwarding Rules"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute forwarding-rules list\n")))}d.isMDXComponent=!0}}]);