"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// ─── Types ───────────────────────────────────────────────────
interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
  sub?: MenuItem[];
}

type MenuKey = "services" | "technologies" | "industries" | "integrations" | "products" | "stories" | null;

// ─── Menu Data ───────────────────────────────────────────────
const NAV_MENUS: Record<string, MenuItem[]> = {
  services: [
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
  ],

  technologies: [
   {
    title: "ERP Platforms",
    icon: "/images/icon/middleware.png",
    sub: [
      {
        title: "Microsoft Dynamics 365 Finance and Operations",
        // link: "/technologies/erp-platforms/dynamics-365",  
        icon: "",
        sub: [
          { title: "Finance", link: "/technologies/erp-platforms/dynamics-365" },
          { title: "Supply Chain Management", link: "/technologies/erp-platforms/dynamics-365" },
          { title: "Production Control", link: "/technologies/erp-platforms/dynamics-365"},
          { title: "Inventory Management", link: "/technologies/erp-platforms/dynamics-365"},
          { title: "Procurement and Sourcing", link: "/technologies/erp-platforms/dynamics-365"},

        ]  
      },
      {
        title: "Microsoft Dynamics 365 Supply Chain Management",
        //link: "/technologies/erp-platforms/scm",  
        icon: "",
        sub: [
          { title: "Warehouse Management (WMS / AWMS)", link: "/technologies/erp-platforms/scm" },
          { title: "Transportation Management", link: "/technologies/erp-platforms/scm" },
          { title: "Master Planning", link: "/technologies/erp-platforms/scm" },
          { title: "Order Fulfillment", link: "/technologies/erp-platforms/scm" },
          { title: "Logistics Automation", link: "/technologies/erp-platforms/scm" }
        ]  
      },
      {
        title: "Microsoft Dynamics 365 Business Central",
        //link: "/technologies/erp-platforms/power-platform",   
        icon: "",
        sub: [
          { title: "Financial Management", link: "/technologies/erp-platforms/power-platform" },
          { title: "Sales & Customer Management", link: "/technologies/erp-platforms/power-platform" },
          { title: "Inventory and Supply Planning", link: "/technologies/erp-platforms/power-platform" },
          { title: "Purchasing and Vendor Management", link: "/technologies/erp-platforms/power-platform" },
          { title: "Project Accounting", link: "/technologies/erp-platforms/power-platform" },
          { title: "Reporting and Analytics", link: "/technologies/erp-platforms/power-platform" }
        ] 
      },
      {
        title: "Microsoft Dynamics 365 Customer Engagement",
        //link: "/technologies/erp-platforms/power-platform",   
        icon: "",
        sub: [
          { title: "Sales Automation", link: "/technologies/erp-platforms/power-platform" },
          { title: "Customer Service", link: "/technologies/erp-platforms/power-platform" },
          { title: "Marketing Automation", link: "/technologies/erp-platforms/power-platform" },
          { title: "Customer Insights", link: "/technologies/erp-platforms/power-platform" },
          { title: "Field Service", link: "/technologies/erp-platforms/power-platform" }
        ] 
      },
      {
        title: "Sage ERP",
        //link: "/technologies/erp-platforms/power-platform",   
        icon: "",
        sub: [
          { title: "Sage X3", icon: "", 
            sub: [
              { title: "Financial Management", link: "/technologies/erp-platforms/power-platform" },
              { title: "Supply Chain Management", link: "/technologies/erp-platforms/power-platform" },
              { title: "Manufacturing", link: "/technologies/erp-platforms/power-platform" },
              { title: "Inventory and Distribution", link: "/technologies/erp-platforms/power-platform" }
            ]
          },  
          { title: "Sage Intacct", icon: "", 
            sub: [
              { title: "Financial Reporting", link: "/technologies/erp-platforms/power-platform" },
              { title: "Accounting Automation", link: "/technologies/erp-platforms/power-platform" },
              { title: "Cloud Financial Management", link: "/technologies/erp-platforms/power-platform" },
              
            ]
          },
        ] 
      },
      {
        title: "Unit4 ERP",
        //link: "/technologies/erp-platforms/power-platform",   
        icon: "",
        sub: [
          { title: "Financial Management", link: "/technologies/erp-platforms/power-platform" },
          { title: "Procurement & Supplier Management", link: "/technologies/erp-platforms/power-platform" },
          { title: "Project & Resource Management", link: "/technologies/erp-platforms/power-platform" },
          { title: "HR & Payroll", link: "/technologies/erp-platforms/power-platform" },
          
        ] 
      },
      
    ],
  },
  {
    title: "Web & Frameworks",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "Frontend Technologies", 
        icon: "/images/icon/middleware.png" ,
        sub: [
          { title: "HTML5", link: "/technologies/web-development/react" },
          { title: "CSS3", link: "/technologies/web-development/react" },
          { title: "JavaScript", link: "/technologies/web-development/react" },
        ]
      },
      { title: "Frontend Frameworks & Libraries", 
        icon: "/images/icon/middleware.png" ,
        sub: [
          { title: "Bootstrap", link: "/technologies/web-development/angular" },
          { title: "Tailwind CSS", link: "/technologies/web-development/angular" },
          { title: "React.js", link: "/technologies/web-development/angular" },
          { title: "Angular", link: "/technologies/web-development/angular" },
          { title: "Vue.js", link: "/technologies/web-development/angular" },
        ]
      },
      { title: "Backend Technologies", 
        icon: "/images/icon/middleware.png" ,
        sub: [
          { title: "PHP Ecosystem", icon: "/images/icon/middleware.png" ,
            sub: [
              { title: "PHP", link: "/technologies/web-development/angular" },
              { title: "Zend Framework", link: "/technologies/web-development/angular" },
              { title: "Laravel", link: "/technologies/web-development/angular" },
              { title: "Symfony", link: "/technologies/web-development/angular" },
            ]
          },
         { title: "Python Ecosystem", icon: "/images/icon/middleware.png" ,
            sub: [
              { title: "Python", link: "/technologies/web-development/angular" },
              { title: "Django", link: "/technologies/web-development/angular" },
              { title: "Flask", link: "/technologies/web-development/angular" },
            ]
          },
         { title: "JavaScript Runtime", icon: "/images/icon/middleware.png" ,
            sub: [
              { title: "Node.js", link: "/technologies/web-development/nodejs" },
            ]
          },
           { title: "Enterprise Backend Platforms", icon: "/images/icon/middleware.png" ,
            sub: [
              { title: "Java", link: "/technologies/web-development/angular" },
              { title: ".NET Core", link: "/technologies/web-development/angular" },
            ]
          },
        ]
      },
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "iOS Native Apps", link: "/technologies/mobile-development/ios" },
      { title: "Android Native Apps", link: "/technologies/mobile-development/android" },
      { title: "Flutter Apps", link: "/technologies/mobile-development/flutter" },
      { title: "React Native Apps", link: "/technologies/mobile-development/ios" },
      { title: "PhoneGap / Cordova Apps", link: "/technologies/mobile-development/android" },
      
    ],
  },
  {
    title: "eCommerce & CMS Platforms",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "Magento", link: "/web-design-branding" },
      { title: "OpenCart", link: "/web-design-branding" },
      { title: "Zen Cart", link: "/web-design-branding" },
      { title: "Shopify", link: "/web-design-branding" },
      { title: "WooCommerce", link: "/web-design-branding" },
      { title: "WordPress", link: "/web-design-branding" },
      { title: "Joomla", link: "/web-design-branding" },
      { title: "Drupal", link: "/web-design-branding" },
      
    ],
   
  },
  {
    title: "Cloud & DevOps Technologies",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "Microsoft Azure", link: "/web-design-branding" },
      { title: "AWS Cloud", link: "/web-design-branding" },
      { title: "Google Cloud Platform", link: "/web-design-branding" },
      { title: "Oracle Cloud", link: "/web-design-branding" },
      { title: "SAP Cloud Platform", link: "/web-design-branding" },
      { title: "Docker", link: "/web-design-branding" },
      { title: "Kubernetes", link: "/web-design-branding" },
      { title: "CI/CD Pipelines", link: "/web-design-branding" },
      { title: "Terraform•	Docker", link: "/web-design-branding" },
      { title: "Ansible", link: "/web-design-branding" },
      { title: "GitHub / GitLab / Azure DevOps", link: "/web-design-branding" },
      
    ],
   
  },
  {
    title: "Cybersecurity Tools",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "Firewalls", link: "/technologies/erp-platforms/scm" },
      { title: "SIEM Systems", link: "/technologies/erp-platforms/scm" },
      { title: "Endpoint Protection", link: "/technologies/erp-platforms/scm" },
      { title: "CrowdStrike", link: "/technologies/erp-platforms/scm" },
      { title: "SentinelOne", link: "/technologies/erp-platforms/scm" },
      { title: "Azure Defender", link: "/technologies/erp-platforms/scm" },
      { title: "Vulnerability Scanning Tools", link: "/technologies/erp-platforms/scm" },
      { title: "Penetration Testing Tools", link: "/technologies/erp-platforms/scm" },   
    ],
   
  },
   {
    title: "AI / ML & Analytics",
    icon: "/images/icon/middleware.png",
     sub: [
      { title: "Power BI", link: "/technologies/erp-platforms/scm" },
      { title: "Tableau", link: "/technologies/erp-platforms/scm" },
      { title: "SAP Analytics Cloud", link: "/technologies/erp-platforms/scm" },
      { title: "Python & R", link: "/technologies/erp-platforms/scm" },
      { title: "Machine Learning Libraries ", link: "/technologies/erp-platforms/scm" },  
    ],
   
  },
  {
    title: "Testing & QA",
    icon: "/images/icon/middleware.png",
    sub: [
      { title: "Selenium", link: "/testing-and-qa-services" },
      { title: "Appium", link: "/testing-and-qa-services" },
      { title: "JMeter", link: "/testing-and-qa-services" },
      { title: "LoadRunner", link: "/testing-and-qa-services" },
      { title: "Manual QA", link: "/testing-and-qa-services" },
      
    ],
   
  },
  
  
],

  industries: [
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
],

  integrations: [
    {
    title: "ERP Integrations",
    icon: "/images/icon/mobapp.png",
    sub: [
      {title: "Microsoft Dynamics 365 Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "SAP Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Oracle Fusion Cloud ERP Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "NetSuite Integration", link: "/solutions/end-to-end-digital-transformation"},
    ]
  },
  {
    title: "E-Commerce Platform Integrations",
    icon: "/images/icon/mobapp.png",
    sub: [
      {title: "Magento Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "OpenCart Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Zen Cart Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Shopify Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "WooCommerce Integration", link: "/solutions/end-to-end-digital-transformation"},
    ]
  },
  {
    title: "Marketplace Integrations",
    icon: "/images/icon/mobapp.png",
    sub: [
      {title: "Amazon Marketplace Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Walmart Marketplace Integration", link: "/solutions/end-to-end-digital-transformation"},
    ]
    
  },
  {
    title: "Shipping & Logistics Integrations",
    icon: "/images/icon/mobapp.png",
    sub: [
      {title: "FedEx Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "UPS Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "DHL Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "United States Postal Service Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "LTL Carrier Integration", link: "/solutions/end-to-end-digital-transformation"},
    ]
   
  },
  {
    title: "Payment Gateway Integrations",
    icon: "/images/icon/mobapp.png",
    sub: [
      {title: "Stripe Payment Gateway Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "PayPal Payment Gateway Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Razorpay Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Square Integration", link: "/solutions/end-to-end-digital-transformation"},
    ]
   
  },
  {
    title: "Middleware & Integration Platforms",
    icon: "/images/icon/mobapp.png",
    sub: [
      {title: "MuleSoft Middleware Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Dell Boomi Middleware Integration", link: "/solutions/end-to-end-digital-transformation"},
      {title: "Azure Logic Apps Integration", link: "/solutions/end-to-end-digital-transformation"},
    ]
   
  },
  {
    title: "Event Streaming & Data Integration",
    icon: "/images/icon/mobapp.png",
    sub: [
      {title: "Apache Kafka Event Streaming", link: "/solutions/end-to-end-digital-transformation"},
    ]
   
  },
 
],

  products: [
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
 
],

  stories: [
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
 
],
};

// ─── Icons ───────────────────────────────────────────────────
function ChevronDown({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}
function ChevronRight({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 2l4 4-4 4" />
    </svg>
  );
}

// ─── Multi-column dropdown panel ─────────────────────────────
function MultiPanel({ items }: { items: MenuItem[] }) {
  const [l1, setL1] = useState(0);
  const [l2, setL2] = useState<number | null>(null);
  const [l3, setL3] = useState<number | null>(null);

  const col1 = items;
  const col2 = col1[l1]?.sub ?? null;
  const col3 = l2 !== null ? col2?.[l2]?.sub ?? null : null;
  const col4 = l3 !== null ? col3?.[l3]?.sub ?? null : null;

  return (
    <div style={{ display: "flex", gap: 0, minWidth: 220 }}>
      {/* Column 1 */}
      <div style={colStyle}>
        {col1.map((item, i) => (
          <button
            key={i}
            style={itemStyle(l1 === i)}
            onMouseEnter={() => { setL1(i); setL2(null); setL3(null); }}
            onClick={() => item.link && (window.location.href = item.link)}
          >
            {item.icon && <img src={item.icon} alt="" style={{ width: 14, height: 14, marginRight: 7 }} />}
            <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
            {item.sub && <ChevronRight />}
          </button>
        ))}
      </div>

      {/* Column 2 */}
      {col2 && (
        <div style={colStyle}>
          {col2.map((item, i) => (
            <button
              key={i}
              style={itemStyle(l2 === i)}
              onMouseEnter={() => { setL2(i); setL3(null); }}
              onClick={() => item.link && (window.location.href = item.link)}
            >
              {item.icon && <img src={item.icon} alt="" style={{ width: 14, height: 14, marginRight: 7 }} />}
              <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
              {item.sub && <ChevronRight />}
            </button>
          ))}
        </div>
      )}

      {/* Column 3 */}
      {col3 && (
        <div style={colStyle}>
          {col3.map((item, i) => (
            <button
              key={i}
              style={itemStyle(l3 === i)}
              onMouseEnter={() => setL3(i)}
              onClick={() => item.link && (window.location.href = item.link)}
            >
              <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
              {item.sub && <ChevronRight />}
            </button>
          ))}
        </div>
      )}

      {/* Column 4 — leaf links */}
      {col4 && (
        <div style={colStyle}>
          {col4.map((item, i) => (
            <Link key={i} href={item.link ?? "#"} style={linkStyle}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Flat single-column panel ────────────────────────────────
function FlatPanel({ items }: { items: MenuItem[] }) {
  return (
    <div style={{ ...colStyle, minWidth: 220 }}>
      {items.map((item, i) => (
        <Link key={i} href={item.link ?? "#"} style={linkStyle}>
          {item.icon && <img src={item.icon} alt="" style={{ width: 14, height: 14, marginRight: 7 }} />}
          {item.title}
        </Link>
      ))}
    </div>
  );
}

// ─── Shared inline styles ────────────────────────────────────
const colStyle: React.CSSProperties = {
  borderRight: "1px solid #f0f0f0",
  minWidth: 220,
  maxWidth: 260,
  padding: "6px 0",
};

const itemStyle = (active: boolean): React.CSSProperties => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "9px 16px",
  fontSize: 13,
  color: active ? "#0066cc" : "#333",
  background: active ? "#f0f6ff" : "transparent",
  border: "none",
  cursor: "pointer",
  gap: 4,
  transition: "background 0.15s, color 0.15s",
});

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "9px 16px",
  fontSize: 13,
  color: "#333",
  textDecoration: "none",
  transition: "background 0.15s, color 0.15s",
};

// ─── Mobile accordion ────────────────────────────────────────
function MobileSection({ label, items, link }: { label: string; items?: MenuItem[]; link?: string }) {
  const [open, setOpen] = useState(false);
  if (!items?.length) {
    return (
      <Link href={link ?? "#"} style={mobileLinkStyle}>
        {label}
      </Link>
    );
  }
  return (
    <div>
      <button style={mobileTriggerStyle} onClick={() => setOpen(v => !v)}>
        {label}
        <ChevronDown style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <div style={{ background: "#f9f9f9", borderTop: "1px solid #eee" }}>
          {items.map((item, i) => (
            <Link key={i} href={item.link ?? "#"} style={{ ...mobileLinkStyle, paddingLeft: 28, fontSize: 13, color: "#555" }}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const mobileLinkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "13px 20px",
  fontSize: 14,
  color: "#222",
  textDecoration: "none",
  borderBottom: "1px solid #eee",
};

const mobileTriggerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "13px 20px",
  fontSize: 14,
  fontWeight: 600,
  color: "#222",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #eee",
  cursor: "pointer",
};

// ─── Main Navbar ─────────────────────────────────────────────
const NAV_ITEMS: { key: MenuKey; label: string }[] = [
  { key: "services",     label: "Services" },
  { key: "technologies", label: "Technologies" },
  { key: "industries",   label: "Industries" },
  { key: "integrations", label: "Integrations" },
  { key: "products",     label: "Products & Solutions" },
  { key: "stories",      label: "Success Stories" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setOpen(null); setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const enter = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  }, []);

  const leave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  }, []);

  const isMulti = (key: MenuKey) =>
    key === "services" || key === "technologies" || key === "integrations";

  return (
    <>
      <style>{`
        .cs-nav-item:hover .cs-trigger { color: #0066cc; }
        .cs-dropdown-link:hover { background: #f0f6ff; color: #0066cc !important; }
        .cs-mobile-item:hover { background: #f5f5f5; }
        .cs-contact-link:hover { color: #0066cc !important; border-bottom-color: #0066cc !important; }
        @media (max-width: 1024px) { .cs-desktop-nav { display: none !important; } .cs-mobile-btn { display: flex !important; } }
        @media (min-width: 1025px) { .cs-mobile-btn { display: none !important; } .cs-mobile-drawer { display: none !important; } }
      `}</style>

      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#fff",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "0 1px 0 #e8e8e8",
        transition: "box-shadow 0.2s",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", marginRight: 32, flexShrink: 0 }}>
            <Image src="/media/logo/logo.png" alt="CybateSoft" width={140} height={44} priority />
          </Link>

          {/* Desktop Nav */}
          <ul className="cs-desktop-nav" style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0, gap: 2, flex: 1, justifyContent: "flex-end" }}>
            {NAV_ITEMS.map(({ key, label }) => (
              <li
                key={key}
                className="cs-nav-item"
                style={{ position: "relative" }}
                onMouseEnter={() => enter(key)}
                onMouseLeave={leave}
              >
                <button
                  className="cs-trigger"
                  aria-expanded={open === key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "0 12px",
                    height: 64,
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: open === key ? "#0066cc" : "#222",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s",
                    borderBottom: open === key ? "2px solid #0066cc" : "2px solid transparent",
                  }}
                >
                  {label}
                  <ChevronDown style={{ transition: "transform 0.2s", transform: open === key ? "rotate(180deg)" : "none" }} />
                </button>

                {open === key && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: key === "products" || key === "stories" ? "auto" : 0,
                      right: key === "products" || key === "stories" ? 0 : "auto",
                      background: "#fff",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
                      border: "1px solid #e8e8e8",
                      borderRadius: 6,
                      minWidth: 220,
                      overflow: "hidden",
                      zIndex: 999,
                    }}
                    onMouseEnter={() => enter(key)}
                    onMouseLeave={leave}
                  >
                    {isMulti(key)
                      ? <MultiPanel items={NAV_MENUS[key!]} />
                      : <FlatPanel items={NAV_MENUS[key!]} />}
                  </div>
                )}
              </li>
            ))}

            {/* Contact Us - plain nav item matching others */}
            <li>
              <Link href="/contact-us" className="cs-contact-link" style={{
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                height: 64,
                fontSize: 13.5,
                fontWeight: 600,
                color: "#222",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderBottom: "2px solid transparent",
                transition: "color 0.15s, border-color 0.15s",
              }}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="cs-mobile-btn"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              marginLeft: 16,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 6,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#222",
                borderRadius: 2,
                transition: "all 0.2s",
                transform: mobileOpen
                  ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                  : "scaleX(0)"
                  : "none",
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className="cs-mobile-drawer" style={{
          borderTop: "1px solid #eee",
          maxHeight: mobileOpen ? "80vh" : 0,
          overflow: "hidden auto",
          transition: "max-height 0.3s ease",
        }}>
          {NAV_ITEMS.map(({ key, label }) => (
            <MobileSection
              key={key}
              label={label}
              items={NAV_MENUS[key!].map(i => ({ title: i.title, link: i.link ?? "#" }))}
            />
          ))}
          <MobileSection label="Contact Us" link="/contact-us" />
        </div>
      </nav>
    </>
  );
}
