"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileServicesMenu, {
  ServiceMenu, TechnologyMenu, IndustriesMenu, IntegrationsMenu, SolutionsMenu, StoriesMenu
} from "@/components/MobileServicesMenu";


const servicesMenu: ServiceMenu[] = [
  {
    title: "ERP & Enterprise Solutions",
    icon: "/images/icon/webdesign.png",
    sub: [
      {
        title: "Microsoft",
        icon: "/images/icon/erp.png",
        sub: [
          {
            title: "Microsoft Platforms",
            icon: "/images/icon/technology.png",
            sub: [
              {
                title: "Microsoft Dynamics 365 Finance & Operations",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Microsoft Dynamics 365 Business Central",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Microsoft Dynamics 365 Customer Engagement",
                link: "/services/erp-solutions/integration"
              },
              {
                title: "Microsoft Dynamics NAV modernization",
                link: "/services/erp-solutions/customization",
              },
              {
                title: "Microsoft Dynamics GP modernization",
                link: "/services/erp-solutions/customization",
              },
            ],
          },
            {
            title: "Microsoft Power Platform",
            icon: "/images/icon/technology.png",
            sub: [
              {
                title: "Power BI ",
                link: "/services/erp-solutions/",
              },
              {
                title: "Power Apps ",
                link: "/services/erp-solutions/",
              },
              {
                title: "Power Automate ",
                link: "/services/erp-solutions/power-automate"
              },
              {
                title: "Power Virtual Agents",
                link: "/services/erp-solutions/power-automate",
              },
              
            ],
          },
           {
            title: "Microsoft Enterprise Capabilities",
            icon: "/images/icon/technology.png",
            sub: [
              {
                title: "Financial Management & Accounting",
                link: "/services/erp-solutions/",
              },
              {
                title: "Supply Chain Optimization & Inventory Management",
                link: "/services/erp-solutions/",
              },
              {
                title: "Human Resources & Payroll",
                link: "/services/erp-solutions/human-resources-payroll"
              },
              {
                title: "Customer Engagement & CRM",
                link: "/services/erp-solutions/customer-engagement-crm"
              },
               {
                title: "Manufacturing & Production Planning",
                link: "/services/erp-solutions/manufacturing-production-planning"
              },
               {
                title: "Project Operations & Service Management",
                link: "/services/erp-solutions/project-operations-service-management"
              },
               {
                title: "Analytics & Dashboards (via Power BI)",
                link: "/services/erp-solutions/analytics-dashboards-power-bi"
              },
               {
                title: "Business Process Automation (via Power Apps and Power Automate)",
                link: "/services/erp-solutions/project-operations-service-management"
              },
              {
                title: "AI-powered Chatbots (via Power Virtual Agents)",
                link: "/services/erp-solutions/ai-powered-chatbots-power-virtual-agents"
              },
              
            ],
          },
        ],
      },
      {
        title: "Sage",
        icon: "/images/icon/erp.png",
       
         sub: [
          {
            title: "Sage Platforms",
            icon: "/images/icon/technology.png",
            sub: [
              {
                title: "Sage X3",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Sage 300",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Sage 100",
                link: "/services/erp-solutions/integration"
              },
              {
                title: "Sage Intacct",
                link: "/services/erp-solutions/customization",
              },
            
            ],
          },
          {
             title: "Sage Enterprise Capabilities",
            icon: "/images/icon/technology.png",
            sub:[ 
              {
                title: "Financial Management",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Accounting & Reporting",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
              {
                title: "Supply Chain Management",
                link: "/services/erp-solutions/integration"
              },
              {
                title: "Inventory & Warehouse Management",
                link: "/services/erp-solutions/customization"
              },
              {
                title: "Manufacturing & Production",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
              {
                title: "Human Resources Management(HR)",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
               {
                title: "Customer Relationship Management (CRM)",
                link: "/services/erp-solutions/integration"
              },
               {
                title: "Analytics & Business Intelligence)",
                link: "/services/erp-solutions/dynamics-365-implementation"
              }
            ],

       },
        ],
      },
      {
        title: "Unit4",
        icon: "/images/icon/erp.png",
        sub: [
          {
            title: "Unit4 Platforms",
            icon: "/images/icon/technology.png",
            sub: [
              {
                title: "Unit4 ERP",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Unit4 Financials",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Unit4 Human Capital Management (HCM)",
                link: "/services/erp-solutions/integration"
              },
              {
                title: "Unit4 Projects & Services",
                link: "/services/erp-solutions/customization",
              },
               {
                title: "Unit4 Student Management",
                link: "/services/erp-solutions/customization",
              },
            
            ],
          },
          {
             title: "Unit4 Enterprise Capabilities",
            icon: "/images/icon/technology.png",
            sub:[ 
              {
                title: "Financial Management & Accounting",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Human Capital Management (HR, Payroll, Talent)",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
              {
                title: "Procurement & Supply Chain Management",
                link: "/services/erp-solutions/customization"
              },
              {
                title: "Analytics & Reporting",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
              {
                title: "Student Management (Higher Education Sector)",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
              {
                title: "Compliance & Regulatory Reporting",
                link: "/services/erp-solutions/integration"
              }
            ],

       },
        ],
      },
    ],
  },
  {
    title: "Web Development & Digital Services",
    icon: "/images/icon/webdesign.png",
    sub: [
      { title: "Web Design & User Experience", icon: "",
         sub: [
          { title: "User Interface (UI) Design", link: "" },
          { title: "User Experience (UX) Design", link: "" },
          { title: "Responsive Web Design", link: "/service/web-and-mobile-development/responsive-design" },
          { title: "Mobile-Friendly Web Design", link: "" },
        ]
       },
     { title: "Website & Portal Development", icon: "",
         sub: [
          { title: "Corporate Website Development", link: "" },
          { title: "Web Portal Development", link: "" },
          { title: "Custom Web Applications", link: "/service/web-and-mobile-development/custom-web-apps" },
          
        ]
       },
      { title: "Content Management Systems (CMS)", icon: "",
         sub: [
          { title: "WordPress Development", link: "" },
          { title: "Joomla Development", link: "" },
          { title: "Drupal Development", link: "" },
        ]
       },
       { title: "Backend Development Technologies", icon: "",
         sub: [
          { title: "PHP Development", link: "" },
          { title: "Python Development", link: "" },
          { title: "Node.js Development", link: "" },
          { title: "Java Development", link: "" },
          { title: ".NET Core Development", link: "" },
        ]
       },
       { title: "Frameworks & Application Development", icon: "",
         sub: [
          { title: "PHP Frameworks", icon: "" ,
            sub: [
              { title: "Laravel Framework Development", link: "" },
              { title: "Symfony Framework Development", link: "" },
              { title: "Zend Framework Development", link: "" },
            ]

          },
          { title: "Python Frameworks", icon: "" ,
            sub: [
              { title: "Django Framework Development", link: "" },
              { title: "Flask Framework Development", link: "" },
            ]

          }
        ]
       },
       { title: "eCommerce Development Services", icon: "",
         sub: [
          { title: "eCommerce Platforms", icon: "" ,
            sub: [
              { title: "Magento Development", link: "" },
              { title: "OpenCart Development", link: "" },
              { title: "Zen Cart Development", link: "" },
              { title: "Shopify Development", link: "" },
              { title: "WooCommerce Development", link: "" },
            ]

          },
          { title: "eCommerce Design & User Experience", icon: "" ,
            sub: [
              { title: "eCommerce Portal Design", link: "" },
              { title: "Responsive & Mobile-Friendly Store Design", link: "" },
            ]

          },
          { title: "Store Setup & Customization", icon: "" ,
            sub: [
              { title: "Online Store Setup and Customization", link: "" },
              { title: "Shopping Cart Customization", link: "" },
            ]

          },
          { title: "Advanced eCommerce Solutions", icon: "" ,
            sub: [
              { title: "Multi-Vendor Marketplace Development", link: "" },
            ]

          }
        ]
       },
    ],
  },
  {
    title: "Mobile Application Development",
    icon: "/images/icon/webdesign.png",
    sub: [
      { title: "Native Mobile App Development", icon: "" ,
        sub: [
          { title: "Native iOS App Development", link: "" },
          { title: "Native Android App Development", link: "" },
        ]
      },
      { title: "Cross-Platform Mobile App Development", icon: "" ,
        sub: [
          { title: "Cross-Platform Mobile App Development", link: "" },
          { title: "Flutter App Development", link: "" },
           { title: "React Native App Development", link: "" },
          { title: "PhoneGap / Cordova App Development", link: "" },
        ]
      },
      { title: "Enterprise & System Integrations", icon: "" ,
        sub: [
          { title: "Mobile App Integration with ERP and eCommerce", link: "" },
          
        ]
      },
      { title: "Industry-Specific Mobile Solutions", icon: "" ,
        sub: [
          { title: "Barcode and QR Code Mobile Apps", link: "" },
          { title: "Field Service and Logistics Mobile Apps", link: "" },
           { title: "Inventory and Asset Management Mobile Apps", link: "" },
        ]
      },
      
    ],
  },
  {
    title: "Digital Marketing & SEO",
    icon: "/images/icon/webdesign.png",
     sub: [
      { title: "Search & Performance Marketing", icon: "" ,
        sub: [
          { title: "Search Engine Optimization (SEO)", link: "" },
          { title: "Search Engine Marketing (SEM) / Google Ads", link: "" },
          { title: "Performance Marketing", link: "" },
          { title: "Conversion Rate Optimization (CRO)", link: "" },
        ]
      },
      { title: "Social Media & Brand Growth", icon: "" ,
        sub: [
          { title: "Social Media Marketing (SMM)", link: "" },
          { title: "Brand Management", link: "" },
        ]
      },
      { title: "Content & Strategy", icon: "" ,
        sub: [
          { title: "•	Content Marketing Strategy", link: "" },
          
        ]
      },
      { title: "Marketing Automation & CRM", icon: "" ,
        sub: [
          { title: "Marketing Automation", link: "" },
          { title: "HubSpot Implementation", link: "" },
           { title: "ActiveCampaign Automation", link: "" },
        ]
      },
       { title: "Email Marketing Campaigns", icon: "" ,
        sub: [
          { title: "MailChimp Campaigns", link: "" },
        ]
      },
      
    ],
   
  },
  {
    title: "Cloud Computing & DevOps",
    icon: "/images/icon/webdesign.png",
    sub: [
      {
      title: "Cloud Platforms & Providers",
      icon: "",
      sub: [
        { title: "Microsoft Azure Cloud Services", link: "" },
        { title: "Amazon Web Services (AWS) Cloud", link: "" },
        { title: "Google Cloud Platform (GCP) Services", link: "" },
        { title: "Oracle Cloud Infrastructure (OCI)", link: "" },
        { title: "SAP Cloud Platform Services", link: "" },
      ]
      },
      {
      title: "Cloud Migration & Modernization",
      icon: "",
      sub: [
        { title: "Cloud Application Modernization", link: "" },
        { title: "Cloud Migration Planning and Execution", link: "" },
        { title: "Database Migration", link: "" },
      ]
      },
      {
      title: "Infrastructure & Cloud Management",
      icon: "",
      sub: [
        { title: "Virtual Machine Setup and Management", link: "" },
        { title: "Cloud Infrastructure Design & Optimization", link: "" },
      ]
      },
      {
      title: "DevOps & Continuous Delivery",
      icon: "",
      sub: [
        { title: "CI/CD Pipelines Setup", link: "" },
        { title: "GitHub / GitLab Integration", link: "" },
        { title: "Azure DevOps Implementation", link: "" },
      ]
      },
       {
      title: "Containerization & Orchestration",
      icon: "",
      sub: [
        { title: "Docker Containerization", link: "" },
        { title: "Kubernetes Orchestration", link: "" },
      ]
      },
       {
      title: "Infrastructure Automation & IaC",
      icon: "",
      sub: [
        { title: "Infrastructure as Code (IaC) using Terraform", link: "" },
        { title: "Automation with Ansible", link: "" },
      ]
      }
    ]
   
  },
  {
    title: "Cybersecurity & Compliance",
    icon: "/images/icon/webdesign.png",
    sub: [
      { title: "Infrastructure & Network Security",
        icon: "",
        sub: [
          {title: "Network Security Implementation", link: ""},
          {title: "Endpoint Security Solutions", link: ""},
          {title: "Anti-Malware and Threat Protection", link: ""},
        ]
       },
       { title: "Cloud Security & Identity Management",
        icon: "",
        sub: [
          {title: "Cloud Security and Identity Access Management (IAM)", link: ""},
        ]
       },
        { title: "Threat Detection & Response",
        icon: "",
        sub: [
          {title: "Security Operations Center (SOC) Monitoring", link: ""},
          {title: "Ransomware Prevention", link: ""},
          {title: "Data Loss Prevention (DLP)", link: ""},
        ]
       },
        { title: "Security Testing & Risk Management",
        icon: "",
        sub: [
          {title: "Vulnerability Assessment", link: ""},
          {title: "Penetration Testing (VAPT)", link: ""},
          {title: "Security Audits and Risk Assessment", link: ""},
        ]
       },
       { title: "Compliance & Regulatory Services",
        icon: "",
        sub: [
          {title: "Compliance Services (ISO, SOC 2, GDPR, HIPAA)", link: ""},
        ]
       },
    ]
   
  },
  {
    title: "AI / ML & Automation",
    icon: "/images/icon/webdesign.png",
    sub: [
      {
        title: "Artificial Intelligence & Generative AI",
        icon: "",
        sub: [
          { title: "Artificial Intelligence Solutions", link: "" },
          { title: "Generative AI Solutions", link: "" },
        ]
       },

        {
        title: "Machine Learning & Advanced Analytics",
        icon: "",
        sub: [
          { title: "Machine Learning Models", link: "" },
          { title: "Predictive Analytics", link: "" },
          { title: "Demand Forecasting using AI/ML", link: "" },
          { title: "Anomaly Detection", link: "" },
        ]
      },
       {
        title: "Conversational AI",
        icon: "",
        sub: [
          { title: "AI-Powered Chatbots", link: "" },
          { title: "Virtual Assistants", link: "" },
        ]
      },
      {
        title: "Intelligent & Business Process Automation",
        icon: "",
        sub: [
          { title: "Intelligent Automation", link: "" },
          { title: "Workflow Automation", link: "" },
        ]
      },
       {
        title: "Robotic Process Automation (RPA)",
        icon: "",
        sub: [
          { title: "Robotic Process Automation (RPA) using UiPath", link: "" },
          { title: "Robotic Process Automation using Power Automate", link: "" },
        ]
      }

    ]
   
  },

     
   {
    title: "Testing & Quality Assurance (QA)",
    icon: "/images/icon/webdesign.png",
    sub: [
      {
        title: "Manual & Automated Testing",
        icon: "",
        sub: [
          { title: "Manual Testing", link: "" },
          { title: "Automated Testing", link: "" },
         
        ]
       },

        {
        title: "Functional & Non-Functional Testing",
        icon: "",
        sub: [
          { title: "Functional Testing", link: "" },
          { title: "Regression Testing", link: "" },
          { title: "Performance Testing", link: "" },
          { title: "Security Testing", link: "" },
          
        ]
      },
       {
        title: "Application & Platform Testing",
        icon: "",
        sub: [
          { title: "Mobile App Testing (iOS and Android)", link: "" },
          { title: "ERP Testing", link: "" },
          { title: "eCommerce Testing", link: "" },
        ]
      },
      {
        title: "Test Automation & Performance Tools",
        icon: "",
        sub: [
          { title: "Selenium Automation", link: "" },
          { title: "Appium Mobile Automation", link: "" },
          { title: "JMeter Load and Performance Testing", link: "" },
          { title: "LoadRunner Performance Testing", link: "" }
        ]
      },
       
    ]
   
  },
  {
    title: "Integrations & API Development",
    icon: "/images/icon/webdesign.png",
     sub: [
      {
        title: "Enterprise & Platform Integrations",
        icon: "",
        sub: [
          { title: "ERP System Integration", link: "" },
          { title: "eCommerce Platform Integration", link: "" },
          { title: "Payment Gateway Integration", link: "" },
          { title: "Shipping Carrier Integration (FedEx, UPS, DHL, USPS, LTL Carriers)", link: "" },
        ]
       },

        {
        title: "API Design & Development",
        icon: "",
        sub: [
          { title: "Third-Party API Development", link: "" },
          { title: "Custom REST API Development", link: "" },
          { title: "Custom SOAP API Development", link: "" },
          
        ]
      },
       {
        title: "Middleware & Integration Platforms",
        icon: "",
        sub: [
          { title: "Middleware Integration using MuleSoft", link: "" },
          { title: "Middleware Integration using Dell Boomi", link: "" },
          { title: "Middleware Integration using Azure Logic Apps", link: "" },
        ]
      },
      {
        title: "Event-Driven & Messaging Solutions",
        icon: "",
        sub: [
          { title: "Kafka Messaging and Event Streaming", link: "" }
        ]
      },
       
    ]
   
  },
];


const technologyMenu: TechnologyMenu[] = [
  {
    title: "ERP Platforms",
    icon: "/images/icon/middleware.png",
    sub: [
      {
        title: "Dynamics 365 F&O",
        link: "/technologies/erp-platforms/dynamics-365",    
      },
      {
        title: "SCM",
        link: "/technologies/erp-platforms/scm",   
      },
      {
        title: "Power Platform",
        link: "/technologies/erp-platforms/power-platform",   
      },
      
    ],
  },
  {
    title: "Web & Frameworks",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "React", link: "/technologies/web-development/react" },
      { title: "Angular", link: "/technologies/web-development/angular" },
      { title: "Node.js", link: "/technologies/web-development/nodejs" },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "iOS", link: "/technologies/mobile-development/ios" },
      { title: "Android", link: "/technologies/mobile-development/android" },
      { title: "Flutter", link: "/technologies/mobile-development/flutter" },
    ],
  },
  {
    title: "eCommerce & CMS Platforms",
    icon: "/images/icon/middleware.png",
   
  },
  {
    title: "Cloud & DevOps",
    icon: "/images/icon/middleware.png",
   
  },
  {
    title: "Testing & QA",
    icon: "/images/icon/middleware.png",
   
  },
  {
    title: "Cybersecurity Tools & Technologies",
    icon: "/images/icon/middleware.png",
   
  },
   {
    title: "AI / ML & Analytics",
    icon: "/images/icon/middleware.png",
   
  }
];


const industriesMenu: IndustriesMenu[] = [
  {
    title: "Manufacturing",
    icon: "/images/icon/mobapp.png",
    sub: [
      {
        title: "Manufacturing",
        link: "/solutions/industry-specific-erp-solutions/manufacturing",    
      },
      {
        title: "Retail",
        link: "/solutions/industry-specific-erp-solutions/retail",   
      },
      {
        title: "SCM",
        link: "/solutions/industry-specific-erp-solutions/scm",   
      },
      
    ],
  },
  {
    title: "Retail & eCommerce",
    icon: "/images/icon/mobapp.png",
    sub: [
      { title: "Tailored mobile", link: "/solutions/custom-development-solutions/tailored-mobile" },
      { title: "Web apps for business", link: "/solutions/custom-development-solutions/web-apps-for-business" },
      
    ],
  },
  {
    title: "Distribution & Wholesale",
    link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
    
  },
  {
    title: "Finance & Banking",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Healthcare & Pharma",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Education & Public Sector",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Hospitality & Travel",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
   {
    title: "Energy & Utilities",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Construction & Projects",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  }
];


const integrationsMenu: IntegrationsMenu[] = [
  {
    title: "ERP Integrations",
    link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
  },
  {
    title: "eCommerce & Marketplaces",
    link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
  },
  {
    title: "Shipping & Carriers",
    link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
    
  },
  {
    title: "Payment Gateways",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Cloud & Middleware",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
 
];


const solutionsMenu: SolutionsMenu[] = [
  {
    title: "WMS Suite",
    link: "/courier-management",
    icon: "/images/icon/mobapp.png",
  },
  {
    title: "Fleet Management",
    link: "/weapon-tracking",
    icon: "/images/icon/weapon.png",
  },
  {
    title: "Teleshopping Solutions",
    link: "/erp-machine",
    icon: "/images/icon/erp.png",
    
  },
  {
    title: "E-SCOP",
     link: "/hospital-management",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "ESSMS",
     link: "/retail-management",
    icon: "/images/icon/retail.png",
   
  },

   {
    title: "DMS",
     link: "/human-resource-management",
    icon: "/images/icon/hr.png",
   
  },
   {
    title: "HR/Payroll",
     link: "/automobile-management",
    icon: "/images/icon/retail.png",
   
  },
   {
    title: "Dispatch",
     link: "/pharmacy-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "International Courier",
     link: "/pharmacy-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "Mail Room",
     link: "/pharmacy-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "Courier",
     link: "/pharmacy-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "Weapon",
     link: "/pharmacy-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "Agency Management",
     link: "/pharmacy-management",
    icon: "/images/icon/pharmacy.png",
   
  },
 
];

const storiesMenu: StoriesMenu[] = [
  {
    title: "ERP Modernization",
    link: "/technology-portfolio",
    icon: "/images/icon/technology.png",
  },
  {
    title: "Warehouse & Supply Chain Automation",
    link: "/industry-portfolio",
    icon: "/images/icon/industry.png",
  },
  {
    title: "Custom Web & Mobile Apps",
    link: "/technology-portfolio",
    icon: "/images/icon/technology.png",
    
  },
  {
    title: "Digital Marketing & Growth",
     link: "/industry-portfolio",
    icon: "/images/icon/industry.png",
   
  },
  {
    title: "Cybersecurity & Compliance",
     link: "/technology-portfolio",
    icon: "/images/icon/technology.png",
   
  },

   {
    title: "Cloud Migration & DevOps",
     link: "/industry-portfolio",
    icon: "/images/icon/industry.png",
   
  }
 
];







/* ===== COMPONENT ===== */

export default function Navbar() {
  // const [megaOpen, setMegaOpen] = useState(false);
  // const [active, setActive] = useState(0);

  // const [subActive, setSubActive] = useState<number | null>(null);
  // const [subSubActive, setSubSubActive] = useState<number | null>(null);

  /* ===== WHICH MEGA OPEN ===== */
const [megaOpen, setMegaOpen] = useState<string | null>(null);

/* ===== LEVEL STATES ===== */
const [active, setActive] = useState<Record<string, number>>({});
const [subActive, setSubActive] = useState<
  Record<string, number | null>
>({});
const [subSubActive, setSubSubActive] = useState<
  Record<string, number | null>
>({});


  

  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ===== STICKY NAV ===== */
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== HOVER ===== */

  // const handleEnter = () => {
  //   if (closeTimer.current) clearTimeout(closeTimer.current);
  //   setMegaOpen(true);
  // };

  // const handleLeave = () => {
  //   closeTimer.current = setTimeout(() => {
  //     setMegaOpen(false);
  //     setSubActive(null);
  //     setSubSubActive(null);
  //   }, 250);
  // };

  const handleEnter = (key: string) => {
  if (closeTimer.current) clearTimeout(closeTimer.current);

  setMegaOpen(key);

  setActive((prev) => ({ ...prev, [key]: 0 }));
  setSubActive((prev) => ({ ...prev, [key]: null }));
  setSubSubActive((prev) => ({ ...prev, [key]: null }));
};

const handleLeave = () => {
  closeTimer.current = setTimeout(() => {
    setMegaOpen(null);
  }, 250);
};

const setLevel1 = (key: string, index: number) => {
  setActive((prev) => ({ ...prev, [key]: index }));
  setSubActive((prev) => ({ ...prev, [key]: null }));
  setSubSubActive((prev) => ({ ...prev, [key]: null }));
};

const setLevel2 = (key: string, index: number) => {
  setSubActive((prev) => ({ ...prev, [key]: index }));
  setSubSubActive((prev) => ({ ...prev, [key]: null }));
};

const setLevel3 = (key: string, index: number) => {
  setSubSubActive((prev) => ({ ...prev, [key]: index }));
};


  return (
    <nav className={`navbar navbar-default ${isFixed ? "navbar-fixed-top" : ""}`}>
      <div className="container">
        
        {/* ===== LOGO ===== */}
        <div className="navbar-header">
          <Link className="navbar-brand" href="/">
            <Image
              src="/media/logo/logo.png"
              alt="logo"
              width={155}
              height={55}
              className="img-responsive img-logo"
            />
          </Link>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        {/* ===== NAV ===== */}
       {/* ===== NAV ===== */}
<div id="navbar" className={`collapse navbar-collapse ${isOpen ? "in" : ""}`}>

  <ul className="nav navbar-nav navbar-right desktop-menu">

    {/* ===== SERVICES DESKTOP ===== */}
    <li
      className="dropdown hidden-xs"
      // onMouseEnter={handleEnter}
      onMouseEnter={() => handleEnter("services")}

      onMouseLeave={handleLeave}
    >
      <Link href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        SERVICES <span className="caret"></span>
      </Link>

      {/* ===== MEGA MENU DESKTOP ===== */}
      <ul
      className={`mega ${megaOpen === "services" ? "show" : ""}`}
        onMouseEnter={() => handleEnter("services")}
        // className={`mega ${megaOpen ? "show" : ""}`}
        // onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="mega-inner container">

          {/* LEVEL 1 */}
          <div className="mega-parent">
            {servicesMenu.map((item, i) => (
              <Link
                key={i}
                href={item.link || "#"}   // if no link → prevent error
                className={active["services"] === i ? "active" : ""}
                onMouseEnter={() => setLevel1("services", i)}
              >
                <Image src={item.icon} alt="" width={13} height={13} />
                {item.title}
                {item.sub && <span className="arrow">›</span>}
              </Link>
            ))}
          </div>

          {servicesMenu[active["services"] || 0]?.sub && (
            <div className="mega-sub">
              {servicesMenu[active["services"] || 0].sub!.map((s, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setLevel2("services", i)}
                >
                  <Link href={s.link || "#"}>
                    {s.title}
                    {s.sub && <span className="arrow">›</span>}
                  </Link>
                </div>
              ))}
            </div>
          )}


          {/* LEVEL 3 */}
          {subActive["services"] !== null &&
  servicesMenu[active["services"] || 0]
    ?.sub?.[subActive["services"]!]?.sub && (
    <div className="mega-sub">
      {servicesMenu[active["services"] || 0]
        .sub![subActive["services"]!]
        .sub!.map((s2, i) => (
          <div
            key={i}
            onMouseEnter={() =>
              setLevel3("services", i)
            }
          >
            <Link href={s2.link || "#"}>
              {s2.title}
              {s2.sub && (
                <span className="arrow">›</span>
              )}
            </Link>
          </div>
        ))}
    </div>
)}


          {/* LEVEL 4 */}
         {subActive["services"] !== null &&
  subSubActive["services"] !== null &&
  servicesMenu[active["services"] || 0]
    ?.sub?.[subActive["services"]!]
    ?.sub?.[subSubActive["services"]!]?.sub && (
    <div className="mega-sub">
      {servicesMenu[active["services"] || 0]
        .sub![subActive["services"]!]
        .sub![subSubActive["services"]!]
        .sub!.map((s3, i) => (
          <Link key={i} href={s3.link || "#"}>
            {s3.title}
          </Link>
        ))}
    </div>
)}

        </div>
      </ul>
    </li>

    {/* ===== SERVICES MOBILE ===== */}
   <MobileServicesMenu
  title="SERVICES"
  menu={servicesMenu}
/>

    {/* OTHER MENU */}
     <li
      className="dropdown hidden-xs"
      // onMouseEnter={handleEnter}
        onMouseEnter={() => handleEnter("technology")}
      onMouseLeave={handleLeave}
    >
      <Link href="#" className="dropdown-toggle">
        TECHNOLOGIES <span className="caret"></span>
      </Link>

      {/* ===== MEGA MENU DESKTOP ===== */}
      <ul
       className={`mega ${megaOpen === "technology" ? "show" : ""}`}

        // onMouseEnter={handleEnter}
          onMouseEnter={() => handleEnter("technology")}
        onMouseLeave={handleLeave}
      >
        <div className="mega-inner container">

          {/* LEVEL 1 */}
        <div className="mega-parent">
            {technologyMenu.map((item, i) => (
              <Link
                key={i}
                href={item.link || "#"}   // if no link → prevent error
                className={active["technology"] === i ? "active" : ""}
                onMouseEnter={() => setLevel1("technology", i)}
              >
                <Image src={item.icon} alt="" width={13} height={13} />
                {item.title}
                {item.sub && <span className="arrow">›</span>}
              </Link>
            ))}
          </div>


          {/* LEVEL 2 */}
         {technologyMenu[active["technology"] || 0]?.sub && (
  <div className="mega-sub">
    {technologyMenu[
      active["technology"] || 0
    ].sub!.map((s, i) => (
      <div
        key={i}
        className={
          subActive["technology"] === i
            ? "active"
            : ""
        }
        onMouseEnter={() =>
          setLevel2("technology", i)
        }
      >
        <Link href={s.link || "#"}>
          {s.title}
          {s.sub && (
            <span className="arrow">›</span>
          )}
        </Link>
      </div>
    ))}
  </div>
)}


          {/* LEVEL 3 */}
          {subActive["technology"] !== null &&
  technologyMenu[active["technology"] || 0]
    ?.sub?.[subActive["technology"]!]?.sub && (
    <div className="mega-sub">
      {technologyMenu[active["technology"] || 0]
        .sub![subActive["technology"]!]
        .sub!.map((s2, i) => (
          <div
            key={i}
            className={
              subSubActive["technology"] === i
                ? "active"
                : ""
            }
            onMouseEnter={() =>
              setLevel3("technology", i)
            }
          >
            <Link href={s2.link || "#"}>
              {s2.title}
              {s2.sub && (
                <span className="arrow">›</span>
              )}
            </Link>
          </div>
        ))}
    </div>
)}


          {/* LEVEL 4 */}
         {subActive["technology"] !== null &&
  subSubActive["technology"] !== null &&
  technologyMenu[active["technology"] || 0]
    ?.sub?.[subActive["technology"]!]
    ?.sub?.[subSubActive["technology"]!]?.sub && (
    <div className="mega-sub">
      {technologyMenu[active["technology"] || 0]
        .sub![subActive["technology"]!]
        .sub![subSubActive["technology"]!]
        .sub!.map((s3, i) => (
          <Link key={i} href={s3.link || "#"}>
            {s3.title}
          </Link>
        ))}
    </div>
)}

        </div>
      </ul>
    </li>
    <MobileServicesMenu
  title="TECHNOLOGIES"
  menu={technologyMenu}
/>


      <li
      className="dropdown hidden-xs"
      // onMouseEnter={handleEnter}
      onMouseEnter={() => handleEnter("industries")}

      onMouseLeave={handleLeave}
    >
      <Link href="#" className="dropdown-toggle">
        Industries <span className="caret"></span>
      </Link>

      {/* ===== MEGA MENU DESKTOP ===== */}
      <ul
      className={`mega ${megaOpen === "industries" ? "show" : ""}`}
        onMouseEnter={() => handleEnter("industries")}
        // className={`mega ${megaOpen ? "show" : ""}`}
        // onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="mega-inner container">

          {/* LEVEL 1 */}
          {/* <div className="mega-parent">
            {industriesMenu.map((item, i) => (
              <button
                key={i}
                
                className={active["industries"] === i ? "active" : ""}
                onMouseEnter={() => setLevel1("industries", i)}

              >
                <Image src={item.icon} alt="" width={13} height={13} />
                {item.title}
                {item.sub && <span className="arrow">›</span>}
              </button>
            ))}
          </div> */}
          <div className="mega-parent">
            {industriesMenu.map((item, i) => (
              <Link
                key={i}
                href={item.link || "#"}   // if no link → prevent error
                className={active["industries"] === i ? "active" : ""}
                onMouseEnter={() => setLevel1("industries", i)}
              >
                <Image src={item.icon} alt="" width={13} height={13} />
                {item.title}
                {item.sub && <span className="arrow">›</span>}
              </Link>
            ))}
          </div>


          {/* LEVEL 2 */}
          {/* {servicesMenu[active["services"] || 0]?.sub && (

            <div className="mega-sub">
              {servicesMenu[active].sub!.map((s, i) => (
                <div
                
                  key={i}
                  // onMouseEnter={() => {
                  //   setSubActive(i);
                  //   setSubSubActive(null);
                  // }}
                  onMouseEnter={() => setLevel2("services", i)}
                  

                >
                  <Link href={s.link || "#"}>
                    {s.title}
                    {s.sub && <span className="arrow">›</span>}
                  </Link>
                </div>
              ))}
            </div>
          )} */}

          {industriesMenu[active["industries"] || 0]?.sub && (
            <div className="mega-sub">
              {industriesMenu[active["industries"] || 0].sub!.map((s, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setLevel2("industries", i)}
                >
                  <Link href={s.link || "#"}>
                    {s.title}
                    {s.sub && <span className="arrow">›</span>}
                  </Link>
                </div>
              ))}
            </div>
          )}


          {/* LEVEL 3 */}
          {subActive["industries"] !== null &&
  industriesMenu[active["industries"] || 0]
    ?.sub?.[subActive["industries"]!]?.sub && (
    <div className="mega-sub">
      {industriesMenu[active["industries"] || 0]
        .sub![subActive["industries"]!]
        .sub!.map((s2, i) => (
          <div
            key={i}
            onMouseEnter={() =>
              setLevel3("industries", i)
            }
          >
            <Link href={s2.link || "#"}>
              {s2.title}
              {s2.sub && (
                <span className="arrow">›</span>
              )}
            </Link>
          </div>
        ))}
    </div>
)}


          {/* LEVEL 4 */}
         {subActive["industries"] !== null &&
  subSubActive["industries"] !== null &&
  industriesMenu[active["industries"] || 0]
    ?.sub?.[subActive["industries"]!]
    ?.sub?.[subSubActive["industries"]!]?.sub && (
    <div className="mega-sub">
      {industriesMenu[active["industries"] || 0]
        .sub![subActive["industries"]!]
        .sub![subSubActive["industries"]!]
        .sub!.map((s3, i) => (
          <Link key={i} href={s3.link || "#"}>
            {s3.title}
          </Link>
        ))}
    </div>
)}

        </div>
      </ul>
    </li>

  <MobileServicesMenu
  title="INDUSTRIES"
  menu={industriesMenu}
/>

    <li
      className="dropdown hidden-xs"
      onMouseEnter={() => handleEnter("integrations")}
      onMouseLeave={handleLeave}>
      <Link href="#" className="dropdown-toggle">
        Integrations <span className="caret"></span>
      </Link>

      {/* ===== MEGA MENU DESKTOP ===== */}
      <ul
      className={`mega ${megaOpen === "integrations" ? "show" : ""}`}
        onMouseEnter={() => handleEnter("integrations")}
        onMouseLeave={handleLeave}
      >
        <div className="mega-inner container">
          <div className="mega-parent">
            {integrationsMenu.map((item, i) => (
              <Link
                key={i}
                href={item.link || "#"}   // if no link → prevent error
                className={active["integrations"] === i ? "active" : ""}
                onMouseEnter={() => setLevel1("integrations", i)}
              >
                <Image src={item.icon} alt="" width={13} height={13} />
                {item.title}
                {item.sub && <span className="arrow">›</span>}
              </Link>
            ))}
          </div>

          {integrationsMenu[active["integrations"] || 0]?.sub && (
            <div className="mega-sub">
              {integrationsMenu[active["integrations"] || 0].sub!.map((s, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setLevel2("integrations", i)}
                >
                  <Link href={s.link || "#"}>
                    {s.title}
                    {s.sub && <span className="arrow">›</span>}
                  </Link>
                </div>
              ))}
            </div>
          )}


          {/* LEVEL 3 */}
          {subActive["integrations"] !== null &&
        integrationsMenu[active["integrations"] || 0]
          ?.sub?.[subActive["integrations"]!]?.sub && (
          <div className="mega-sub">
            {integrationsMenu[active["integrations"] || 0]
              .sub![subActive["integrations"]!]
              .sub!.map((s2, i) => (
                <div
                  key={i}
                  onMouseEnter={() =>
                    setLevel3("integrations", i)
                  }
                >
                  <Link href={s2.link || "#"}>
                    {s2.title}
                    {s2.sub && (
                      <span className="arrow">›</span>
                    )}
                  </Link>
                </div>
              ))}
          </div>
        )}

          {/* LEVEL 4 */}
         {subActive["integrations"] !== null &&
          subSubActive["integrations"] !== null &&
          integrationsMenu[active["integrations"] || 0]
            ?.sub?.[subActive["integrations"]!]
            ?.sub?.[subSubActive["integrations"]!]?.sub && (
            <div className="mega-sub">
              {integrationsMenu[active["integrations"] || 0]
                .sub![subActive["integrations"]!]
                .sub![subSubActive["integrations"]!]
                .sub!.map((s3, i) => (
                  <Link key={i} href={s3.link || "#"}>
                    {s3.title}
                  </Link>
                ))}
            </div>
        )}

        </div>
      </ul>
    </li>

   <MobileServicesMenu
  title="INTEGRATIONS"
  menu={integrationsMenu}
/>
     
    <li
      className="dropdown hidden-xs"
      onMouseEnter={() => handleEnter("solutions")}
      onMouseLeave={handleLeave}>
      <Link href="#" className="dropdown-toggle">
        Cybate Products <span className="caret"></span>
      </Link>

      {/* ===== MEGA MENU DESKTOP ===== */}
      <ul
        className={`mega ${megaOpen === "solutions" ? "show" : ""}`}
        onMouseEnter={() => handleEnter("solutions")}
        onMouseLeave={handleLeave}
       >
        <div className="mega-inner container">
          <div className="mega-parent">
            {solutionsMenu.map((item, i) => (
              <Link
                key={i}
                href={item.link || "#"}   // if no link → prevent error
                className={active["integrations"] === i ? "active" : ""}
                onMouseEnter={() => setLevel1("integrations", i)}
              >
                <Image src={item.icon} alt="" width={13} height={13} />
                {item.title}
                {item.sub && <span className="arrow">›</span>}
              </Link>
            ))}
          </div>

          {solutionsMenu[active["integrations"] || 0]?.sub && (
            <div className="mega-sub">
              {solutionsMenu[active["integrations"] || 0].sub!.map((s, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setLevel2("integrations", i)}
                >
                  <Link href={s.link || "#"}>
                    {s.title}
                    {s.sub && <span className="arrow">›</span>}
                  </Link>
                </div>
              ))}
            </div>
          )}


          {/* LEVEL 3 */}
          {subActive["integrations"] !== null &&
        solutionsMenu[active["integrations"] || 0]
          ?.sub?.[subActive["integrations"]!]?.sub && (
          <div className="mega-sub">
            {solutionsMenu[active["integrations"] || 0]
              .sub![subActive["integrations"]!]
              .sub!.map((s2, i) => (
                <div
                  key={i}
                  onMouseEnter={() =>
                    setLevel3("integrations", i)
                  }
                >
                  <Link href={s2.link || "#"}>
                    {s2.title}
                    {s2.sub && (
                      <span className="arrow">›</span>
                    )}
                  </Link>
                </div>
              ))}
          </div>
        )}

          {/* LEVEL 4 */}
         {subActive["integrations"] !== null &&
          subSubActive["integrations"] !== null &&
          solutionsMenu[active["integrations"] || 0]
            ?.sub?.[subActive["integrations"]!]
            ?.sub?.[subSubActive["integrations"]!]?.sub && (
            <div className="mega-sub">
              {solutionsMenu[active["integrations"] || 0]
                .sub![subActive["integrations"]!]
                .sub![subSubActive["integrations"]!]
                .sub!.map((s3, i) => (
                  <Link key={i} href={s3.link || "#"}>
                    {s3.title}
                  </Link>
                ))}
            </div>
        )}

        </div>
      </ul>
    </li>

     <MobileServicesMenu
  title="PRODUCTS & SOLUTIONS"
  menu={solutionsMenu}
/> 

    <li
      className="dropdown hidden-xs"
      onMouseEnter={() => handleEnter("stories")}
      onMouseLeave={handleLeave}>
      <Link href="#" className="dropdown-toggle">
       Success Stories <span className="caret"></span>
      </Link>

      {/* ===== MEGA MENU DESKTOP ===== */}
      <ul
      className={`mega ${megaOpen === "stories" ? "show" : ""}`}
        onMouseEnter={() => handleEnter("stories")}
        onMouseLeave={handleLeave}
      >
        <div className="mega-inner container">
          <div className="mega-parent">
            {storiesMenu.map((item, i) => (
              <Link
                key={i}
                href={item.link || "#"}   // if no link → prevent error
                className={active["stories"] === i ? "active" : ""}
                onMouseEnter={() => setLevel1("stories", i)}
              >
                <Image src={item.icon} alt="" width={13} height={13} />
                {item.title}
                {item.sub && <span className="arrow">›</span>}
              </Link>
            ))}
          </div>

          {storiesMenu[active["stories"] || 0]?.sub && (
            <div className="mega-sub">
              {storiesMenu[active["stories"] || 0].sub!.map((s, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setLevel2("stories", i)}
                >
                  <Link href={s.link || "#"}>
                    {s.title}
                    {s.sub && <span className="arrow">›</span>}
                  </Link>
                </div>
              ))}
            </div>
          )}


          {/* LEVEL 3 */}
          {subActive["stories"] !== null &&
        storiesMenu[active["stories"] || 0]
          ?.sub?.[subActive["stories"]!]?.sub && (
          <div className="mega-sub">
            {storiesMenu[active["stories"] || 0]
              .sub![subActive["stories"]!]
              .sub!.map((s2, i) => (
                <div
                  key={i}
                  onMouseEnter={() =>
                    setLevel3("stories", i)
                  }
                >
                  <Link href={s2.link || "#"}>
                    {s2.title}
                    {s2.sub && (
                      <span className="arrow">›</span>
                    )}
                  </Link>
                </div>
              ))}
          </div>
        )}

          {/* LEVEL 4 */}
         {subActive["stories"] !== null &&
          subSubActive["stories"] !== null &&
          storiesMenu[active["stories"] || 0]
            ?.sub?.[subActive["stories"]!]
            ?.sub?.[subSubActive["stories"]!]?.sub && (
            <div className="mega-sub">
              {storiesMenu[active["stories"] || 0]
                .sub![subActive["stories"]!]
                .sub![subSubActive["stories"]!]
                .sub!.map((s3, i) => (
                  <Link key={i} href={s3.link || "#"}>
                    {s3.title}
                  </Link>
                ))}
            </div>
        )}

        </div>
      </ul>
    </li>

        <MobileServicesMenu
  title="SUCCESS STORIES"
  menu={storiesMenu}
/> 

   <li className="hidden-xs"><Link href="/contact-us">Contact Us</Link></li>

    <li className="visible-xs mobile-services"><Link href="/contact-us">Contact Us</Link></li>

  </ul>
</div>

      </div>
    </nav>
  );
}
