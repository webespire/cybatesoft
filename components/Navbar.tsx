"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "@/components/navbar.module.css";

import MobileServicesMenu, {
 SubMenu, ServiceMenu, TechnologyMenu, IndustriesMenu, IntegrationsMenu, SolutionsMenu, StoriesMenu
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
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Power Apps ",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Power Automate ",
                link: "/services/erp-solutions/integration"
              },
              {
                title: "Power Virtual Agents",
                link: "/services/erp-solutions/customization",
              },
              
            ],
          },
           {
            title: "Microsoft Enterprise Capabilities",
            icon: "/images/icon/technology.png",
            sub: [
              {
                title: "Financial Management & Accounting",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Supply Chain Optimization & Inventory Management",
                link: "/services/erp-solutions/dynamics-365-implementation",
              },
              {
                title: "Human Resources & Payroll",
                link: "/services/erp-solutions/integration"
              },
              {
                title: "Customer Engagement & CRM",
                link: "/services/erp-solutions/customization"
              },
               {
                title: "Manufacturing & Production Planning",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
               {
                title: "Project Operations & Service Management",
                link: "/services/erp-solutions/dynamics-365-implementation"
              },
               {
                title: "Analytics & Dashboards (via Power BI)",
                link: "/services/erp-solutions/integration"
              },
               {
                title: "Business Process Automation (via Power Apps and Power Automate)",
                link: "/services/erp-solutions/customization"
              },
              {
                title: "AI-powered Chatbots (via Power Virtual Agents)",
                link: "/services/erp-solutions/customization"
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
          { title: "User Interface (UI) Design", link: "/services/web-and-mobile-development/ui-design" },
          { title: "User Experience (UX) Design", link: "/services/web-and-mobile-development/ux-design" },
          { title: "Responsive Web Design", link: "/services/web-and-mobile-development/responsive-design" },
          { title: "Mobile-Friendly Web Design", link: "/services/web-and-mobile-development/mobile-friendly-web-design" },
        ]
       },
     { title: "Website & Portal Development", icon: "",
         sub: [
          { title: "Corporate Website Development", link: "/services/web-and-mobile-development/corporate-website-development" },
          { title: "Web Portal Development", link: "/services/web-and-mobile-development/web-portals" },
          { title: "Custom Web Applications", link: "/services/web-and-mobile-development/custom-web-apps" },
          
        ]
       },
      { title: "Content Management Systems (CMS)", icon: "",
         sub: [
          { title: "WordPress Development", link: "/" },
          { title: "Joomla Development", link: "/" },
          { title: "Drupal Development", link: "/" },
        ]
       },
       { title: "Backend Development Technologies", icon: "",
         sub: [
          { title: "PHP Development", link: "/portfolio-php" },
          { title: "Python Development", link: "/" },
          { title: "Node.js Development", link: "/" },
          { title: "Java Development", link: "/" },
          { title: ".NET Core Development", link: "/portfolio-net" },
        ]
       },
       { title: "Frameworks & Application Development", icon: "",
         sub: [
          { title: "PHP Frameworks", icon: "" ,
            sub: [
              { title: "Laravel Framework Development", link: "/" },
              { title: "Symfony Framework Development", link: "/" },
              { title: "Zend Framework Development", link: "/zend-framework-development" },
            ]

          },
          { title: "Python Frameworks", icon: "" ,
            sub: [
              { title: "Django Framework Development", link: "/" },
              { title: "Flask Framework Development", link: "" },
            ]

          }
        ]
       },
       { title: "eCommerce Development Services", icon: "",
         sub: [
          { title: "eCommerce Platforms", icon: "" ,
            sub: [
              { title: "Magento Development", link: "/" },
              { title: "OpenCart Development", link: "/" },
              { title: "Zen Cart Development", link: "/" },
              { title: "Shopify Development", link: "/" },
              { title: "WooCommerce Development", link: "/" },
            ]

          },
          { title: "eCommerce Design & User Experience", icon: "" ,
            sub: [
              { title: "eCommerce Portal Design", link: "/" },
              { title: "Responsive & Mobile-Friendly Store Design", link: "/services/web-and-mobile-development/responsive-design" },
            ]

          },
          { title: "Store Setup & Customization", icon: "" ,
            sub: [
              { title: "Online Store Setup and Customization", link: "/" },
              { title: "Shopping Cart Customization", link: "/services/erp-solutions/customization" },
            ]

          },
          { title: "Advanced eCommerce Solutions", icon: "" ,
            sub: [
              { title: "Multi-Vendor Marketplace Development", link: "/" },
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
          { title: "Native iOS App Development", link: "/" },
          { title: "Native Android App Development", link: "/" },
        ]
      },
      { title: "Cross-Platform Mobile App Development", icon: "" ,
        sub: [
          { title: "Cross-Platform Mobile App Development", link: "/" },
          { title: "Flutter App Development", link: "technologies/mobile-development/flutter" },
           { title: "React Native App Development", link: "/" },
          { title: "PhoneGap / Cordova App Development", link: "/" },
        ]
      },
      { title: "Enterprise & System Integrations", icon: "" ,
        sub: [
          { title: "Mobile App Integration with ERP and eCommerce", link: "/" },
          
        ]
      },
      { title: "Industry-Specific Mobile Solutions", icon: "" ,
        sub: [
          { title: "Barcode and QR Code Mobile Apps", link: "/" },
          { title: "Field Service and Logistics Mobile Apps", link: "/" },
           { title: "Inventory and Asset Management Mobile Apps", link: "/" },
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
          { title: "Search Engine Optimization (SEO)", link: "/" },
          { title: "Search Engine Marketing (SEM) / Google Ads", link: "/" },
          { title: "Performance Marketing", link: "/" },
          { title: "Conversion Rate Optimization (CRO)", link: "/" },
        ]
      },
      { title: "Social Media & Brand Growth", icon: "" ,
        sub: [
          { title: "Social Media Marketing (SMM)", link: "/" },
          { title: "Brand Management", link: "web-design-branding" },
        ]
      },
      { title: "Content & Strategy", icon: "" ,
        sub: [
          { title: "Content Marketing Strategy", link: "/" },
          
        ]
      },
      { title: "Marketing Automation & CRM", icon: "" ,
        sub: [
          { title: "Marketing Automation", link: "/" },
          { title: "HubSpot Implementation", link: "/" },
           { title: "ActiveCampaign Automation", link: "/" },
        ]
      },
       { title: "Email Marketing Campaigns", icon: "" ,
        sub: [
          { title: "MailChimp Campaigns", link: "/" },
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
        { title: "Microsoft Azure Cloud Services", link: "/" },
        { title: "Amazon Web Services (AWS) Cloud", link: "/" },
        { title: "Google Cloud Platform (GCP) Services", link: "/" },
        { title: "Oracle Cloud Infrastructure (OCI)", link: "/" },
        { title: "SAP Cloud Platform Services", link: "/" },
      ]
      },
      {
      title: "Cloud Migration & Modernization",
      icon: "",
      sub: [
        { title: "Cloud Application Modernization", link: "/" },
        { title: "Cloud Migration Planning and Execution", link: "/" },
        { title: "Database Migration", link: "/" },
      ]
      },
      {
      title: "Infrastructure & Cloud Management",
      icon: "",
      sub: [
        { title: "Virtual Machine Setup and Management", link: "/" },
        { title: "Cloud Infrastructure Design & Optimization", link: "/" },
      ]
      },
      {
      title: "DevOps & Continuous Delivery",
      icon: "",
      sub: [
        { title: "CI/CD Pipelines Setup", link: "/" },
        { title: "GitHub / GitLab Integration", link: "/" },
        { title: "Azure DevOps Implementation", link: "/" },
      ]
      },
       {
      title: "Containerization & Orchestration",
      icon: "",
      sub: [
        { title: "Docker Containerization", link: "/" },
        { title: "Kubernetes Orchestration", link: "/" },
      ]
      },
       {
      title: "Infrastructure Automation & IaC",
      icon: "",
      sub: [
        { title: "Infrastructure as Code (IaC) using Terraform", link: "/" },
        { title: "Automation with Ansible", link: "/" },
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
          {title: "Network Security Implementation", link: "/"},
          {title: "Endpoint Security Solutions", link: "/"},
          {title: "Anti-Malware and Threat Protection", link: ""},
        ]
       },
       { title: "Cloud Security & Identity Management",
        icon: "",
        sub: [
          {title: "Cloud Security and Identity Access Management (IAM)", link: "/"},
        ]
       },
        { title: "Threat Detection & Response",
        icon: "",
        sub: [
          {title: "Security Operations Center (SOC) Monitoring", link: "/"},
          {title: "Ransomware Prevention", link: "/"},
          {title: "Data Loss Prevention (DLP)", link: "/"},
        ]
       },
        { title: "Security Testing & Risk Management",
        icon: "",
        sub: [
          {title: "Vulnerability Assessment", link: "/"},
          {title: "Penetration Testing (VAPT)", link: "/"},
          {title: "Security Audits and Risk Assessment", link: "/"},
        ]
       },
       { title: "Compliance & Regulatory Services",
        icon: "",
        sub: [
          {title: "Compliance Services (ISO, SOC 2, GDPR, HIPAA)", link: "/"},
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
          { title: "Artificial Intelligence Solutions", link: "/" },
          { title: "Generative AI Solutions", link: "/" },
        ]
       },

        {
        title: "Machine Learning & Advanced Analytics",
        icon: "",
        sub: [
          { title: "Machine Learning Models", link: "/" },
          { title: "Predictive Analytics", link: "/" },
          { title: "Demand Forecasting using AI/ML", link: "/" },
          { title: "Anomaly Detection", link: "/" },
        ]
      },
       {
        title: "Conversational AI",
        icon: "",
        sub: [
          { title: "AI-Powered Chatbots", link: "/" },
          { title: "Virtual Assistants", link: "/" },
        ]
      },
      {
        title: "Intelligent & Business Process Automation",
        icon: "",
        sub: [
          { title: "Intelligent Automation", link: "/" },
          { title: "Workflow Automation", link: "/" },
        ]
      },
       {
        title: "Robotic Process Automation (RPA)",
        icon: "",
        sub: [
          { title: "Robotic Process Automation (RPA) using UiPath", link: "/" },
          { title: "Robotic Process Automation using Power Automate", link: "/services/power" },
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
          { title: "Manual Testing", link: "/testing-and-qa-services" },
          { title: "Automated Testing", link: "/" },
         
        ]
       },

        {
        title: "Functional & Non-Functional Testing",
        icon: "",
        sub: [
          { title: "Functional Testing", link: "/testing-and-qa-services" },
          { title: "Regression Testing", link: "/" },
          { title: "Performance Testing", link: "/testing-and-qa-services" },
          { title: "Security Testing", link: "/" },
          
        ]
      },
       {
        title: "Application & Platform Testing",
        icon: "",
        sub: [
          { title: "Mobile App Testing (iOS and Android)", link: "/testing-and-qa-services" },
          { title: "ERP Testing", link: "/" },
          { title: "eCommerce Testing", link: "/industry/e-commerce" },
        ]
      },
      {
        title: "Test Automation & Performance Tools",
        icon: "",
        sub: [
          { title: "Selenium Automation", link: "/" },
          { title: "Appium Mobile Automation", link: "/" },
          { title: "JMeter Load and Performance Testing", link: "/" },
          { title: "LoadRunner Performance Testing", link: "/" }
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
          { title: "ERP System Integration", link: "/erp-machine" },
          { title: "eCommerce Platform Integration", link: "/industry/e-commerce" },
          { title: "Payment Gateway Integration", link: "/industry/banking" },
          { title: "Shipping Carrier Integration (FedEx, UPS, DHL, USPS, LTL Carriers)", link: "/courier-management" },
        ]
       },

        {
        title: "API Design & Development",
        icon: "",
        sub: [
          { title: "Third-Party API Development", link: "/" },
          { title: "Custom REST API Development", link: "/" },
          { title: "Custom SOAP API Development", link: "/" },
          
        ]
      },
       {
        title: "Middleware & Integration Platforms",
        icon: "",
        sub: [
          { title: "Middleware Integration using MuleSoft", link: "/" },
          { title: "Middleware Integration using Dell Boomi", link: "/" },
          { title: "Middleware Integration using Azure Logic Apps", link: "/" },
        ]
      },
      {
        title: "Event-Driven & Messaging Solutions",
        icon: "",
        sub: [
          { title: "Kafka Messaging and Event Streaming", link: "/" }
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
    link: "/web-design-branding"
   
  },
  {
    title: "Cloud & DevOps",
    icon: "/images/icon/middleware.png",
    link: "/"
   
  },
  {
    title: "Testing & QA",
    icon: "/images/icon/middleware.png",
    link: "/testing-and-qa-services",
   
  },
  {
    title: "Cybersecurity Tools & Technologies",
    icon: "/images/icon/middleware.png",
    link: "/technologies/erp-platforms/scm",
   
  },
   {
    title: "AI / ML & Analytics",
    icon: "/images/icon/middleware.png",
    link: "/",
   
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
    link: "/",
    icon: "/images/icon/mobapp.png",
    
  },
  {
    title: "Finance & Banking",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Healthcare & Pharma",
     link: "/",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Education & Public Sector",
     link: "/solutions/end-to-end-digital-transformation",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Hospitality & Travel",
     link: "/solutions/custom-development-solutions/tailored-mobile",
    icon: "/images/icon/mobapp.png",
   
  },
   {
    title: "Energy & Utilities",
     link: "/solutions/custom-development-solutions/web-apps-for-business",
    icon: "/images/icon/mobapp.png",
   
  },
  {
    title: "Construction & Projects",
     link: "/",
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
    link: "/solutions/custom-development-solutions/tailored-mobile",
    icon: "/images/icon/mobapp.png",
  },
  {
    title: "Shipping & Carriers",
    link: "/courier-management",
    icon: "/images/icon/mobapp.png",
    
  },
  {
    title: "Payment Gateways",
     link: "/solutions/custom-development-solutions/web-apps-for-business/",
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
     link: "/courier-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "Mail Room",
     link: "/pharmacy-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "Courier",
     link: "/courier-management",
    icon: "/images/icon/pharmacy.png",
   
  },
   {
    title: "Weapon",
     link: "/weapon-tracking",
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




// ─────────────────────────────────────────────────────────────
//  ChevronIcon
// ─────────────────────────────────────────────────────────────
function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
//  MultiLevelPanel  — renders col1 + up to 3 sub-columns
//  All state is local so each menu is independent
// ─────────────────────────────────────────────────────────────
function MultiLevelPanel({ menu }: { menu: SubMenu[] }) {
  const [l1, setL1] = useState(0);
  const [l2, setL2] = useState<number | null>(null);
  const [l3, setL3] = useState<number | null>(null);

  const handleL1 = (i: number) => { setL1(i); setL2(null); setL3(null); };
  const handleL2 = (i: number) => { setL2(i); setL3(null); };
  const handleL3 = (i: number) => { setL3(i); };

  const l1Item  = menu[l1];
  const l2Items = l1Item?.sub ?? null;
  const l2Item  = l2 !== null ? l2Items?.[l2] : null;
  const l3Items = l2Item?.sub ?? null;
  const l3Item  = l3 !== null ? l3Items?.[l3] : null;
  const l4Items = l3Item?.sub ?? null;

  return (
    <>
      {/* ── Column 1 ── */}
      <div className={styles.col1}>
        {menu.map((item, i) => (
          <button
            key={i}
            className={`${styles.item} ${l1 === i ? styles.itemActive : ""}`}
            onMouseEnter={() => handleL1(i)}
            onClick={() => item.link && (window.location.href = item.link)}
            aria-expanded={l1 === i}
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt=""
                width={15}
                height={15}
                className={styles.itemIcon}
              />
            )}
            <span className={styles.itemLabel}>{item.title}</span>
            {item.sub && <ArrowIcon className={styles.itemArrow} />}
          </button>
        ))}
      </div>

      {/* ── Column 2 (L2) ── */}
      {l2Items && (
        <div className={styles.col}>
          {l2Items.map((item, i) => (
            <button
              key={i}
              className={`${styles.item} ${l2 === i ? styles.itemActive : ""}`}
              onMouseEnter={() => handleL2(i)}
              onClick={() => item.link && (window.location.href = item.link)}
            >
              <span className={styles.itemLabel}>{item.title}</span>
              {item.sub && <ArrowIcon className={styles.itemArrow} />}
            </button>
          ))}
        </div>
      )}

      {/* ── Column 3 (L3) ── */}
      {l3Items && (
        <div className={styles.col}>
          {l3Items.map((item, i) => (
            <button
              key={i}
              className={`${styles.item} ${l3 === i ? styles.itemActive : ""}`}
              onMouseEnter={() => handleL3(i)}
              onClick={() => item.link && (window.location.href = item.link)}
            >
              <span className={styles.itemLabel}>{item.title}</span>
              {item.sub && <ArrowIcon className={styles.itemArrow} />}
            </button>
          ))}
        </div>
      )}

      {/* ── Column 4 (L4 — leaf links) ── */}
      {l4Items && (
        <div className={styles.col}>
          {l4Items.map((item, i) => (
            <Link
              key={i}
              href={item.link ?? "#"}
              className={styles.item}
            >
              <span className={styles.itemLabel}>{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
//  FlatPanel  — single column list (no sub-levels)
// ─────────────────────────────────────────────────────────────
function FlatPanel({ menu }: { menu: SubMenu[] }) {
  return (
    <div className={styles.col1} style={{ minWidth: 240 }}>
      {menu.map((item, i) => (
        <Link
          key={i}
          href={item.link ?? "#"}
          className={styles.item}
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt=""
              width={15}
              height={15}
              className={styles.itemIcon}
            />
          )}
          <span className={styles.itemLabel}>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  DropdownItem  —  a single top-level nav entry with panel
// ─────────────────────────────────────────────────────────────
interface DropdownItemProps {
  label: string;
  isOpen: boolean;
  onEnter: () => void;
  onLeave: () => void;
  flipRight?: boolean;
  children: React.ReactNode;
}

function DropdownItem({
  label,
  isOpen,
  onEnter,
  onLeave,
  flipRight,
  children,
}: DropdownItemProps) {
  return (
    <li
      className={`${styles.navItem} ${isOpen ? styles.open : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <button className={styles.trigger} aria-expanded={isOpen} aria-haspopup="true">
        {label}
        <ChevronIcon className={styles.chevron} />
      </button>

      <div
        className={`${styles.panel} ${flipRight ? styles.panelRight : ""}`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {children}
      </div>
    </li>
  );
}

// ─────────────────────────────────────────────────────────────
//  MobileAccordion  — collapsible section for mobile drawer
// ─────────────────────────────────────────────────────────────
function MobileAccordion({
  label,
  menu,
  link,
}: {
  label: string;
  menu?: SubMenu[];
  link?: string;
}) {
  const [open, setOpen] = useState(false);

  if (!menu || menu.length === 0) {
    return (
      <div className={styles.mobileNavItem}>
        <Link href={link ?? "#"} className={styles.mobileTrigger}>
          {label}
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.mobileNavItem}>
      <button
        className={styles.mobileTrigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <ChevronIcon
          className={styles.chevron}
          
        />
      </button>
      <div className={`${styles.mobileSub} ${open ? styles.mobileSubOpen : ""}`}>
        {menu.map((item, i) => (
          <Link
            key={i}
            href={item.link ?? "#"}
            className={styles.mobileSubItem}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  NAVBAR  — main component
// ─────────────────────────────────────────────────────────────
type MenuKey =
  | "services"
  | "technologies"
  | "industries"
  | "integrations"
  | "products"
  | "stories"
  | null;

export default function Navbar() {
  const pathname = usePathname();

  const [openMenu,   setOpenMenu]   = useState<MenuKey>(null);
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── close everything on route change ──
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // ── scroll shadow ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── close on outside click ──
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(`.${styles.navItem}`)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── hover handlers ──
  const handleEnter = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }, []);

  // helper for building enter/leave props
  const hoverProps = (key: MenuKey) => ({
    isOpen:  openMenu === key,
    onEnter: () => handleEnter(key),
    onLeave: handleLeave,
  });

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>

          {/* ── LOGO ── */}
          <Link href="/" className={styles.logo}>
           
            <Image
              src="/media/logo/logo.png"
              alt="CybateSoft"
              width={155}
              height={55}
              className="img-responsive img-logo"
              priority
            />
           
          </Link>

          {/* ── DESKTOP NAV ── */}
          <ul className={styles.navList} role="menubar">

            {/* SERVICES */}
            <DropdownItem label="Services" {...hoverProps("services")}>
              <MultiLevelPanel menu={servicesMenu} />
            </DropdownItem>

            {/* TECHNOLOGIES */}
            <DropdownItem label="Technologies" {...hoverProps("technologies")}>
              <MultiLevelPanel menu={technologyMenu} />
            </DropdownItem>

            {/* INDUSTRIES */}
            <DropdownItem label="Industries" {...hoverProps("industries")}>
              <FlatPanel menu={industriesMenu} />
            </DropdownItem>

            {/* INTEGRATIONS */}
            <DropdownItem label="Integrations" {...hoverProps("integrations")}>
              <FlatPanel menu={integrationsMenu} />
            </DropdownItem>

            {/* PRODUCTS */}
            <DropdownItem
              label="Cyabte Products"
              flipRight
              {...hoverProps("products")}
            >
              <FlatPanel menu={solutionsMenu} />
            </DropdownItem>

            {/* SUCCESS STORIES */}
            <DropdownItem
              label="Success Stories"
              flipRight
              {...hoverProps("stories")}
            >
              <FlatPanel menu={storiesMenu} />
            </DropdownItem>

          </ul>

          {/* ── CONTACT CTA ── */}
          <div className={styles.ctaWrap}>
            <Link href="/contact-us" className={styles.cta}>
              Contact Us
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen : ""}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen : ""}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen : ""}`} />
          </button>

        </div>

        {/* ── MOBILE DRAWER ── */}
        <div
          className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ""}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <MobileAccordion label="Services"       menu={servicesMenu.map(i => ({ title: i.title, link: i.link ?? "#" }))} />
          <MobileAccordion label="Technologies"   menu={technologyMenu} />
          <MobileAccordion label="Industries"     menu={industriesMenu} />
          <MobileAccordion label="Integrations"   menu={integrationsMenu} />
          <MobileAccordion label="Cyabte Products"       menu={solutionsMenu} />
          <MobileAccordion label="Success Stories"menu={storiesMenu} />
          <div className={styles.mobileNavItem}>
            <Link href="/contact-us" className={styles.mobileCta}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
