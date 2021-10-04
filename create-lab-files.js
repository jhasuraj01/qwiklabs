const labs = [
    {
        LAB_ID: "GSP100",
        LAB_DESCRIPTION: "Google Kubernetes Engine provides a managed environment for deploying, managing, and scaling your containerized applications using Google infrastructure. This hands-on lab shows you how deploy a containerized application with Kubernetes Engine. Watch the short video Manage Containerized Apps with Kubernetes Engine.",
        LAB_TITLE: "Kubernetes Engine: Qwik Start",
        LAB_LINK: "https://google.qwiklabs.com/focuses/878?parent=catalog",
        LAB_VIDEO: "kzAYpwVHiEs",
    },
    {
        LAB_ID: "GSP007",
        LAB_DESCRIPTION: "In this hands-on lab, you'll learn how setup both network load balancers and HTTP load balancers for your application running in Compute Engine virtual machines.",
        LAB_TITLE: "Set Up Network and HTTP Load Balancers",
        LAB_LINK: "https://google.qwiklabs.com/focuses/12007?parent=catalog",
        LAB_VIDEO: "kzAYpwVHiEs",
    },
]

const fs = require("fs").promises

const  createFiles = () => {
    labs.forEach(async lab => {
        let template = await fs.readFile("lab-template.md", "utf-8")
        template = template.replace(/LAB_ID/g, lab.LAB_ID)
        template = template.replace(/LAB_DESCRIPTION/g, lab.LAB_DESCRIPTION)
        template = template.replace(/LAB_TITLE/g, lab.LAB_TITLE)
        template = template.replace(/LAB_LINK/g, lab.LAB_LINK)
        template = template.replace(/LAB_VIDEO/g, lab.LAB_VIDEO)
        await fs.writeFile(`./docs/${lab.LAB_ID}.mdx`, template)
    })
}

// createFiles()