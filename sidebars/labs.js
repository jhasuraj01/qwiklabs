/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


module.exports = {
  sidebar: [
    {
      type: 'category',
      label: '30 Days of Google Cloud 2021',
      items: [
        'intro',
        {
          type: "category",
          label: 'Track 1: Cloud Engineering Track',
          items: [
            {
              type: 'category',
              label: 'Create And Manage Cloud Resources',
              items: [
                "GSP313",
              ],
            },
            {
              type: 'category',
              label: 'Perform Foundational Infrastructure Tasks in Google Cloud',
              items: [
                "GSP315",
              ],
            },
            {
              type: 'category',
              label: 'Set Up and Configure a Cloud Environment in Google Cloud',
              items: [
                "GSP321",
              ],
            },
            {
              type: 'category',
              label: 'Deploy and Manage Cloud Environments with Google Cloud',
              items: [
                "GSP314",
              ],
            },
            {
              type: 'category',
              label: 'Build and Secure Networks in Google Cloud',
              items: [
                "GSP322",
              ],
            },
            {
              type: 'category',
              label: 'Deploy to Kubernetes in Google Cloud',
              items: [
                "GSP318",
              ],
            },
          ]
        },
        {
          type: "category",
          label: 'Track 2: Data Science & Machine Learning Track',
          items: [
            {
              type: 'category',
              label: 'Create and Manage Cloud Resources',
              items: [
                "GSP313",
              ],
            },
            {
              type: 'category',
              label: 'Perform Foundational Data, ML, and AI Tasks in Google Cloud',
              items: [
                "GSP323",
              ],
            },
            {
              type: 'category',
              label: 'Insights from Data with BigQuery',
              items: [
                "GSP787",
              ],
            },
            {
              type: 'category',
              label: 'Engineer Data in Google Cloud',
              items: [
                "GSP327",
              ],
            },
            {
              type: 'category',
              label: 'Integrate with Machine Learning APIs',
              items: [
                "GSP329",
              ],
            },
            {
              type: 'category',
              label: 'Explore Machine Learning Models with Explainable AI',
              items: [
                "GSP324",
              ],
            },
          ]
        },
      ],
    },
  ],
};
