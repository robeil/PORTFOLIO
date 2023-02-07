import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "How to build and deploy fullstack react node.js app using Amplify to AWS",
      commentor: "Robeil Aregawi ",
      date: "07 February 2023",
      tag: `Amplify, CloudFormation, API Gateway, lambda, S3, SNS, CloudFront, DynamoDB, GitHub, CI/CD`,
      description1:
        "In this post, I'll show you how to build a full-stack react node.js application using Amplify, CloudFormation and CICD with GitHub. We'll go over each step of the process, from creating your CloudFormation templates to setting up your CICD pipeline. By the end, you'll have everything you need to deploy your own full-stack application on AWS. CloudFormation is a tool that allows you to provision and manage AWS resources, and CICD is a process that automates the software development lifecycle. Together, these two tools will help you build and deploy your application quickly and easily. So let's get started!",
      description2:
        ` - CloudFormation templates 
- GitHub repository 
- CICD pipeline 
- Amplify
`,
      description3:
        "We'll start by looking at the CloudFormation templates. These templates define the infrastructure for our application. Next, we'll take a look at the GitHub repository. This is where our application code will live. Finally, we'll look at the CICD pipeline. This is how our application will be built and deployed.",
      description4:
"GitHub is a web-based version-control and collaboration platform for software developers. It is a great platform for Amplify full-stack applications because it provides a central place for developers to track changes to their code, share code with other developers, and create a historical record of their work. In addition, GitHub makes it easy to set up a continuous integration and continuous deployment (CI/CD) pipeline for Amplify applications. In this article, we will show you how to set up a CI/CD pipeline for an Amplify full-stack application using GitHub. We will also provide a step-by-step guide on how to build and deploy an Amplify application using GitHub.",
      description5:
        "Amplify is a toolchain for front-end and full-stack JavaScript applications. It is designed to make it easy to build and deploy applications with a robust set of features, including: - A build system for front-end and full-stack JavaScript applications - A CLI for creating and managing Amplify projects - A user interface for managing Amplify projects - A set of JS libraries for building Amplify applications Amplify is open source and available on GitHub. In this guide, I will show you how to use Amplify to build a full-stack React, Node.js application and how to set up Continuous Integration and Continuous Delivery (CI/CD) with GitHub.  ",
      description6:
        `Getting started with amplify we will assume we have working react frontend app.
        Getting started with amplify we will assume we have working react frontend app.

        First install amplify CLI => npm install -g @aws-amplify/cli
        Then => amplify configure then it will redirect you to you AWS console to configure amplify user and other needed requirements.
        -	You have to create a user
        -	A role 
        -	And policy
        After that we have to initialize a new backend =>  amplify init
        After giving basic names for the resource 
        We have install the aws-Amplify library => npm install aws-amplify
        
        
        Then we have to import aws-apmlify in our frontend in the index.js 
        import { Amplify } from 'aws-amplify';
        import awsExports from './aws-exports';
        Amplify.configure(awsExports);
        
        After that we can able to add API to our backend by running => amplify add api
        
        We can go with the default naming convection, or we can give our desired name for each resource
        We will get prompt to choose the technology and name 
        After choosing all the options we will receive a table to review 
        After giving basic names for the resource 
        We have install the aws-Amplify library => npm install aws-amplify
        
        
        Then we have to import aws-apmlify in our frontend in the index.js 
        import { Amplify } from 'aws-amplify';
        import awsExports from './aws-exports';
        Amplify.configure(awsExports);
        
        After that we can able to add API to our backend by running => amplify add api
        
        We can go with the default naming convection, or we can give our desired name for each resource
        We will get prompt to choose the technology and name 
        After choosing all the options we will receive review 
        
        Then we have to push our local code to cloud by => amplify push
        It will ask us to confirm one more times and deploy successfully .
        
        Next is registering domain and request Amazon certificate.
        
        And our full stack app should be up and running I AWS
        
`
    },

    // {
    //   id: 2,
    //   img: img2,
    //   title: "Top 10 Toolkits for Deep Learning in 2022",
    //   commentor: "Santhan ",
    //   date: "14 January 2022",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   description2:
    //     "If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Notebook hand-lettered design for a poster. Quote is Notebook Building 8 VP’s Regina Dugan—and mine. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 3,
    //   img: img3,
    //   title: "Everything You Need to Know About Web Accessibility",
    //   commentor: "steve ",
    //   date: "9 January 2020",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 4,
    //   img: img4,
    //   title: "How to Inject Humor & Comedy Into Your Brand",
    //   commentor: "Beker ",
    //   date: "15 March 2022",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 5,
    //   img: img5,
    //   title: "Women in Web Design: How To Achieve Success",
    //   commentor: "Janntul ",
    //   date: "9 January 2021",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
    // {
    //   id: 6,
    //   img: img6,
    //   title: "Evergreen versus topical content: An overview",
    //   commentor: "Hasan ",
    //   date: "9 January 2022",
    //   tag: `wordpress, business, economy, design`,
    //   description1:
    //     "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //   description2:
    //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
    //   description3:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    //   description4:
    //     "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
