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
      ],
    },
  ],
};
