// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
import newLogo from "./images/SFLogo.jpg"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "Stevility";

// Navbar Logo image
export const navLogo = newLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

// Blog link icon - https://icon-sets.iconify.design/
export const BlogLinkedIn = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
    "I enjoy creating all sorts of projects that people will love. Mainly focused on code that governs the behavior, interactions, and decision-making of the main characters in a digital environment.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
    {
        id: 1,
        skill: <Icon icon="simple-icons:unrealengine" className="display-4" />,
        name: "Unreal Engine c++",
    },
    {
        id: 2,
        skill: <Icon icon="devicon-plain:unity-wordmark" className="display-4" />,
        name: "Unity C#",
    },
    {
        id: 3,
        skill: <Icon icon="mdi:microsoft-visual-studio" className="display-4" />,
        name: "Visual Studios",
    },
    //{
    //    id: 4,
    //    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    //    name: "BootStrap",
    //},
    //{
    //    id: 5,
    //    skill: <Icon icon="mdi:react" className="display-4" />,
    //    name: "React",
    //},
    //{
    //    id: 6,
    //    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    //    name: "Styled Components",
    //},
    //{
    //    id: 7,
    //    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    //    name: "Redux",
    //},
    //{
    //    id: 8,
    //    skill: <Icon icon="bi:git" className="display-4" />,
    //    name: "Git",
    //},
    //{
    //    id: 9,
    //    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    //    name: "GitHub",
    //},
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
    {
        name: "example-1",
        image: Logo,
    },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xayraodb";
