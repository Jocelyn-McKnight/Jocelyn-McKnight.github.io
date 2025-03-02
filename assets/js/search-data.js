// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of past and present projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-getting-the-lay-of-the-land",
      
        title: "Getting the Lay of the Land",
      
      description: "A first blog post to test the waters",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/lay-of-land/";
        
      },
    },{id: "post-the-missing-letters-of-old-english",
      
        title: "The missing Letters of Old English",
      
      description: "A posters for Old English 3450",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/missing-letters/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-the-visionary-cross-project",
          title: 'The Visionary Cross Project',
          description: "Research Assistant",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-pushing-the-boundaries-of-digital-philology",
          title: 'Pushing the Boundaries of Digital Philology',
          description: "Independent Study",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-humanities-innovation-lab",
          title: 'Humanities Innovation Lab',
          description: "Research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-combinatory-phonetics",
          title: 'Combinatory Phonetics',
          description: "Independent Study",
          section: "Projects",handler: () => {
              window.location.href = "/projects/anglfren/";
            },},{id: "projects-instructional-design",
          title: 'Instructional Design',
          description: "Ignite Centre for eLearning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ignite/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%63%65%6C%79%6E.%6D%63%6B%6E%69%67%68%74@%75%6C%65%74%68.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Jocelyn-McKnight", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jocelyn-mcknight", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-5636-2854", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22McKnight%2C%20Jocelyn%22&l=list&p=1&s=10&sort=bestmatch", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
