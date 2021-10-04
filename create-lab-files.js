const labs = [
    {
        LAB_ID: "",
        LAB_DESCRIPTION: "",
        LAB_TITLE: "",
        LAB_LINK: ""
    },
]

const fs = require("fs").promises

const  createFiles = () => {
    labs.forEach(async lab => {
        let template = await fs.readFile("template.md", "utf-8")
        template = template.replace(/LAB_ID/g, lab.LAB_ID)
        template = template.replace(/LAB_DESCRIPTION/g, lab.LAB_DESCRIPTION)
        template = template.replace(/LAB_TITLE/g, lab.LAB_TITLE)
        template = template.replace(/LAB_LINK/g, lab.LAB_LINK)
        await fs.writeFile(`./docs/${lab.LAB_ID}.mdx`, template)
    })
}

// createFiles()