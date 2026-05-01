"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

// ─── Types ───────────────────────────────────────────────────
export interface MenuItem {
  title: string;
  link?: string;
  icon?: string;
  sub?: MenuItem[];
}

type MenuKey =
  | "services"
  | "technologies"
  | "industries"
  | "integrations"
  | "products"
  | "stories"
  | null;

// ─── Nav items config ─────────────────────────────────────────
const NAV_ITEMS: { key: NonNullable<MenuKey>; label: string }[] = [
  { key: "services",     label: "Services" },
  { key: "technologies", label: "Technologies" },
  { key: "industries",   label: "Industries" },
  { key: "integrations", label: "Integrations" },
  { key: "products",     label: "Cybate Products" },
  { key: "stories",      label: "Success Stories" },
];

const RIGHT_ALIGNED_KEYS = new Set<NonNullable<MenuKey>>(["products", "stories"]);
const MULTI_PANEL_KEYS   = new Set<NonNullable<MenuKey>>(["services", "technologies", "integrations", "industries"]);

// ─── Menu Data (extracted from component) ────────────────────
export const NAV_MENUS: Record<NonNullable<MenuKey>, MenuItem[]> = {
  services: [
    {
      title: "ERP & Enterprise Solutions",
      icon: "/images/icon/SERVICES/ERP & ENTERPRISE SOLUTIONS.jpg",
      link: "/services/erp-solutions/dynamics-365-implementation",
      sub: [
        {
          title: "Microsoft",
          icon: "/images/icon/SERVICES/ERP/SUB MENU MICROSOFT.jpg",
          sub: [
            {
              title: "Microsoft Platforms",
              icon: "/images/icon/SERVICES/erp-microsoft/Microsoft Platform.jpg",
              sub: [
                { title: "Microsoft Dynamics 365 Finance & Operations",    link: "/services/erp-solutions/dynamics-365-implementation",      icon: "/images/icon/SERVICES/erp-microsoft-microsoft platform/microsoft dynamics 365 finance & operations.jpg" },
                { title: "Microsoft Dynamics 365 Business Central",        link: "/services/erp-solutions/dynamics-365-business-central",     icon: "/images/icon/SERVICES/erp-microsoft-microsoft platform/microsoft dynamics 365 business central.jpg" },
                { title: "Microsoft Dynamics 365 Customer Engagement",     link: "/services/erp-solutions/dynamics-365-customer-engagement",  icon: "/images/icon/SERVICES/erp-microsoft-microsoft platform/microsoft dynamics 365 customer engagement.jpg" },
                { title: "Microsoft Dynamics NAV modernization",           link: "/services/erp-solutions/dynamics-nav-modernization",        icon: "/images/icon/SERVICES/erp-microsoft-microsoft platform/microsoft dynamics NAV modernization.jpg" },
                { title: "Microsoft Dynamics GP modernization",            link: "/services/erp-solutions/dynamics-gp-modernization",         icon: "/images/icon/SERVICES/erp-microsoft-microsoft platform/microsoft dynamics GP modernization.jpg" },
              ],
            },
            {
              title: "Microsoft Power Platform",
              icon: "/images/icon/SERVICES/erp-microsoft/microsoft power platform.jpg",
              sub: [
                { title: "Power BI",              link: "/services/erp-solutions/power-bi",              icon: "/images/icon/SERVICES/MICROSOFT POWER PLATFORM/POWER BI.jpg" },
                { title: "Power Apps",            link: "/services/erp-solutions/power-app",             icon: "/images/icon/SERVICES/MICROSOFT POWER PLATFORM/POWER APPS.jpg" },
                { title: "Power Automate",        link: "/services/erp-solutions/power-automate",        icon: "/images/icon/SERVICES/MICROSOFT POWER PLATFORM/POWER AUTOMATE.jpg" },
                { title: "Power Virtual Agents",  link: "/services/erp-solutions/power-virtual-agents",  icon: "/images/icon/SERVICES/MICROSOFT POWER PLATFORM/POWER VIRTUAL AGENTS.jpg" },
              ],
            },
            {
              title: "Microsoft Enterprise Capabilities",
              icon: "/images/icon/SERVICES/erp-microsoft/microsoft enterprise capabilites.jpg",
              sub: [
                { title: "Financial Management & Accounting",                          link: "/services/erp-solutions/financial-management-and-accounting", icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/FINANCIAL MANAGEMENT & ACCOUNTING.jpg" },
                { title: "Supply Chain Optimization & Inventory Management",           link: "/services/erp-solutions/dynamics-365-implementation",          icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/SUPPLU CHAIN OPTIMIZATION & INVENTORY MANAGEMENT.jpg" },
                { title: "Human Resources & Payroll",                                  link: "/services/erp-solutions/integration",                          icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/HUMAN RESOURCE AND PAYROLL.jpg" },
                { title: "Customer Engagement & CRM",                                  link: "/services/erp-solutions/customization",                        icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/CUSTOMER ENGAGEMENT & CRM.jpg" },
                { title: "Manufacturing & Production Planning",                         link: "/services/erp-solutions/dynamics-365-implementation",          icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/MANUFACTURING & PRODUCTION PLANNING.jpg" },
                { title: "Project Operations & Service Management",                    link: "/services/erp-solutions/dynamics-365-implementation",          icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/PROJECT OPERATIONS AND SERVICE MANAGEMENT.jpg" },
                { title: "Analytics & Dashboards (via Power BI)",                      link: "/services/erp-solutions/integration",                          icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/ANALYTICS & DASHBOARDS (VIA POWER BI).jpg" },
                { title: "Business Process Automation (via Power Apps and Automate)",  link: "/services/erp-solutions/customization",                        icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/BUSINESS PROCESS AUTOMATION (VIA APPS AND POWER AUTOMATE)).jpg" },
                { title: "AI-powered Chatbots (via Power Virtual Agents)",             link: "/services/erp-solutions/customization",                        icon: "/images/icon/SERVICES/MICROSOFT ENTERPRISE CAPABILITES/AI POWER CHATBOTS.jpg" },
              ],
            },
          ],
        },
        {
          title: "Sage",
          icon: "/images/icon/SERVICES/ERP/SUB MENU SAGE.jpg",
          sub: [
            {
              title: "Sage Platforms",
              icon: "/images/icon/SERVICES/SAGE/SAGE PLATFORM.jpg",
              sub: [
                { title: "Sage X3",     link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/SAGE-SAGE PLATFORM/SAGE X3.jpg" },
                { title: "Sage 300",    link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/SAGE-SAGE PLATFORM/SAGE 300.jpg" },
                { title: "Sage 100",    link: "/services/erp-solutions/integration",                 icon: "/images/icon/SERVICES/SAGE-SAGE PLATFORM/SAGE 100.jpg" },
                { title: "Sage Intacct",link: "/services/erp-solutions/customization",               icon: "/images/icon/SERVICES/SAGE-SAGE PLATFORM/SAGE INTACCT.jpg" },
              ],
            },
            {
              title: "Sage Enterprise Capabilities",
              icon: "/images/icon/SERVICES/SAGE/SAGE ENTERPRISE CAPABILITES.jpg",
              sub: [
                { title: "Financial Management",              link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/FINANCIAL MANAGEMENT.jpg" },
                { title: "Accounting & Reporting",            link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/ACCOUNTING & REPORTING.jpg" },
                { title: "Supply Chain Management",           link: "/services/erp-solutions/integration",                 icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/SUPPLY CHAIN MANAGEMENT.jpg" },
                { title: "Inventory & Warehouse Management",  link: "/services/erp-solutions/customization",               icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/INVENTORY & WAREHOUSE MANAGEMENT.jpg" },
                { title: "Manufacturing & Production",        link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/MANUFACTURING & PRODUCTION.jpg" },
                { title: "Human Resources Management (HR)",   link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/HUMAN RESOURCE MANAGEMENT HR.jpg" },
                { title: "Customer Relationship Management",  link: "/services/erp-solutions/integration",                 icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/CUSTOMER RELATIONSHIP MANAGEMENT.jpg" },
                { title: "Analytics & Business Intelligence", link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/SAGE-SAGE ENTERPRISE CAPABILITES/You said ANALYTICS AND BUSINESS INTELLIGENCE.jpg" },
              ],
            },
          ],
        },
        {
          title: "Unit4",
          icon: "/images/icon/SERVICES/ERP/SUB MENU UNIT 4.jpg",
          sub: [
            {
              title: "Unit4 Platforms",
              icon: "/images/icon/SERVICES/unit 4/UNIT4 PLATFORMS.jpg",
              sub: [
                { title: "Unit4 ERP",                              link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/unit 4 platforms/UNIT ERP.jpg" },
                { title: "Unit4 Financials",                       link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/unit 4 platforms/unit 4 financials.jpg" },
                { title: "Unit4 Human Capital Management (HCM)",   link: "/services/erp-solutions/integration",                 icon: "/images/icon/SERVICES/unit 4 platforms/unit 4 human capital management.jpg" },
                { title: "Unit4 Projects & Services",              link: "/services/erp-solutions/customization",               icon: "/images/icon/SERVICES/unit 4 platforms/unit 4 projects and services.jpg" },
                { title: "Unit4 Student Management",               link: "/services/erp-solutions/customization",               icon: "/images/icon/SERVICES/unit 4 platforms/unit 4 student management.jpg" },
              ],
            },
            {
              title: "Unit4 Enterprise Capabilities",
              icon: "/images/icon/SERVICES/unit 4/UNIT 4 ENTERPRISE CAPABILITES.jpg",
              sub: [
                { title: "Financial Management & Accounting",              link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/UNIT 4 ENTERPRISE CAPABILITES/FINANCIAL MANAGEMENT AND ACCOUNTING.jpg" },
                { title: "Human Capital Management (HR, Payroll, Talent)", link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/UNIT 4 ENTERPRISE CAPABILITES/HUMAN CAPITAL MANAGEMENT.jpg" },
                { title: "Procurement & Supply Chain Management",          link: "/services/erp-solutions/customization",               icon: "/images/icon/SERVICES/UNIT 4 ENTERPRISE CAPABILITES/PROCUREMENT AND SUPPLY CHAIN.jpg" },
                { title: "Analytics & Reporting",                          link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/UNIT 4 ENTERPRISE CAPABILITES/ANALYTICS AND REPORTING.jpg" },
                { title: "Student Management (Higher Education Sector)",   link: "/services/erp-solutions/dynamics-365-implementation", icon: "/images/icon/SERVICES/UNIT 4 ENTERPRISE CAPABILITES/STUDENT MANAGEMENT.jpg" },
                { title: "Compliance & Regulatory Reporting",              link: "/services/erp-solutions/integration",                 icon: "/images/icon/SERVICES/UNIT 4 ENTERPRISE CAPABILITES/COMPLIANCE AND REGULATORY REPORTING.jpg" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Web Development & Digital Services",
      icon: "/images/icon/SERVICES/WEB DEVELOPMENT & DIGITAL SERVICES.jpg",
      sub: [
        {
          title: "Web Design & User Experience",
          icon: "/images/icon/SERVICES/WEB DEVELOPMENT/web design and user experience.jpg",
          sub: [
            { title: "User Interface (UI) Design",   link: "/services/web-and-mobile-development/ui-design",                icon: "/images/icon/SERVICES/WEB DESIGN AND USER EXP/UI DESIGN.jpg" },
            { title: "User Experience (UX) Design",  link: "/services/web-and-mobile-development/ux-design",               icon: "/images/icon/SERVICES/WEB DESIGN AND USER EXP/UX DESIGN.jpg" },
            { title: "Responsive Web Design",        link: "/services/web-and-mobile-development/responsive-design",       icon: "/images/icon/SERVICES/WEB DESIGN AND USER EXP/RESPONSIVE WEB DESIGN.jpg" },
            { title: "Mobile-Friendly Web Design",   link: "/services/web-and-mobile-development/mobile-friendly-web-design", icon: "/images/icon/SERVICES/WEB DESIGN AND USER EXP/MOBILE FRIENDLY WEB DESIGN.jpg" },
          ],
        },
        {
          title: "Website & Portal Development",
          icon: "/images/icon/SERVICES/WEB DEVELOPMENT/website and portal development.jpg",
          sub: [
            { title: "Corporate Website Development", link: "/services/web-and-mobile-development/corporate-website-development", icon: "/images/icon/SERVICES/WEBSITE AND PORTAL DEVELOPMENT/CORPORATE WEBSITE DEVELOPMENT.jpg" },
            { title: "Web Portal Development",        link: "/services/web-and-mobile-development/web-portals",                   icon: "/images/icon/SERVICES/WEBSITE AND PORTAL DEVELOPMENT/WEB DEVELOPMENT PORTAL.jpg" },
            { title: "Custom Web Applications",       link: "/services/web-and-mobile-development/custom-web-apps",               icon: "/images/icon/SERVICES/WEBSITE AND PORTAL DEVELOPMENT/CUSTOM WEB APPLICATION.jpg" },
          ],
        },
        {
          title: "Content Management Systems (CMS)",
          icon: "/images/icon/SERVICES/WEB DEVELOPMENT/cms.jpg",
          sub: [
            { title: "WordPress Development", link: "/", icon: "/images/icon/SERVICES/WEB DEVELOPMENT-CMS/WORDPRESS DEVELOPMENT.jpg" },
            { title: "Joomla Development",    link: "/", icon: "/images/icon/SERVICES/WEB DEVELOPMENT-CMS/JOOMLA DEVELOPMENT.jpg" },
            { title: "Drupal Development",    link: "/", icon: "/images/icon/SERVICES/WEB DEVELOPMENT-CMS/DRUPAL DEVELOPMENT.jpg" },
          ],
        },
        {
          title: "Backend Development Technologies",
          icon: "/images/icon/SERVICES/WEB DEVELOPMENT/backend development.jpg",
          sub: [
            { title: "PHP Development",    link: "/portfolio-php",  icon: "/images/icon/SERVICES/BACKEND DEVELOPMENT/PHP DEVELOPMENT.jpg" },
            { title: "Python Development", link: "/",               icon: "/images/icon/SERVICES/BACKEND DEVELOPMENT/PYTHON DEVELOPMENT.jpg" },
            { title: "Node.js Development",link: "/",               icon: "/images/icon/SERVICES/BACKEND DEVELOPMENT/NODE.JS DEVELOPMENT.jpg" },
            { title: "Java Development",   link: "/",               icon: "/images/icon/SERVICES/BACKEND DEVELOPMENT/JAVA DEVELOPMENT.jpg" },
            { title: ".NET Core Development", link: "/portfolio-net",icon: "/images/icon/SERVICES/BACKEND DEVELOPMENT/NET DEVELOPMENT.jpg" },
          ],
        },
        {
          title: "Frameworks & Application Development",
          icon: "/images/icon/SERVICES/WEB DEVELOPMENT/FRAMEWORKS & APPLICATION DEVELOPMENT.jpg",
          sub: [
            {
              title: "PHP Frameworks",
              icon: "/images/icon/SERVICES/FRAMEWORK/PHP FRAMEWORK.jpg",
              sub: [
                { title: "Laravel Framework Development",  link: "/" },
                { title: "Symfony Framework Development",  link: "/" },
                { title: "Zend Framework Development",     link: "/zend-framework-development" },
              ],
            },
            {
              title: "Python Frameworks",
              icon: "/images/icon/SERVICES/FRAMEWORK/PYTHON FRAMEWORK.jpg",
              sub: [
                { title: "Django Framework Development", link: "/" },
                { title: "Flask Framework Development",  link: "" },
              ],
            },
          ],
        },
        {
          title: "eCommerce Development Services",
          icon: "/images/icon/SERVICES/WEB DEVELOPMENT/E COMMERCE DEVELOPMENT.jpg",
          sub: [
            {
              title: "eCommerce Platforms",
              icon: "/images/icon/SERVICES/E COMMERCE DEVELOPMENT/E COMMERCE PLATFORM.jpg",
              sub: [
                { title: "Magento Development",    link: "/" },
                { title: "OpenCart Development",   link: "/" },
                { title: "Zen Cart Development",   link: "/" },
                { title: "Shopify Development",    link: "/" },
                { title: "WooCommerce Development",link: "/" },
              ],
            },
            {
              title: "eCommerce Design & User Experience",
              icon: "/images/icon/SERVICES/E COMMERCE DEVELOPMENT/E COMMERCE DESIGN AND USER EXPERIENCE.jpg",
              sub: [
                { title: "eCommerce Portal Design",                link: "/" },
                { title: "Responsive & Mobile-Friendly Store Design", link: "/services/web-and-mobile-development/responsive-design" },
              ],
            },
            {
              title: "Store Setup & Customization",
              icon: "/images/icon/SERVICES/E COMMERCE DEVELOPMENT/STORE SETUP AND CUSTOMIZATION.jpg",
              sub: [
                { title: "Online Store Setup and Customization", link: "/" },
                { title: "Shopping Cart Customization",          link: "/services/erp-solutions/customization" },
              ],
            },
            {
              title: "Advanced eCommerce Solutions",
              icon: "/images/icon/SERVICES/E COMMERCE DEVELOPMENT/ADVANCED E COMMERCE SOLUTIONS.jpg",
              sub: [
                { title: "Multi-Vendor Marketplace Development", link: "/" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Mobile Application Development",
      icon: "/images/icon/SERVICES/MOBILE APPLICATION DEVELOPMENT.jpg",
      sub: [
        {
          title: "Native Mobile App Development",
          icon: "/images/icon/SERVICES/MOBILE APPLICATION DEVELOPMENT/NATIVE MOBILE APP DEVELOPMENT.jpg",
          sub: [
            { title: "Native iOS App Development",     link: "/", icon: "/images/icon/SERVICES/NATIVE MOBILE APP DEVELOPMENT/NATIVE IOS APP DEVELOPMENT.jpg" },
            { title: "Native Android App Development", link: "/", icon: "/images/icon/SERVICES/NATIVE MOBILE APP DEVELOPMENT/NATIVE ANDROID APP DEVELOPMENT.jpg" },
          ],
        },
        {
          title: "Cross-Platform Mobile App Development",
          icon: "/images/icon/SERVICES/MOBILE APPLICATION DEVELOPMENT/CROSS PLATFORM MOBILE APP DEVELOPMENT.jpg",
          sub: [
            { title: "Cross-Platform Mobile App Development", link: "/",                                          icon: "/images/icon/SERVICES/CROSS PLATFORM MOBILE APP DEVELOPMENT/CROSS PLATFROM MOBILE APP DEVELOPMENT.jpg" },
            { title: "Flutter App Development",               link: "technologies/mobile-development/flutter",    icon: "/images/icon/SERVICES/CROSS PLATFORM MOBILE APP DEVELOPMENT/FLUTTER APP DEVELOPMENT.jpg" },
            { title: "React Native App Development",          link: "/",                                          icon: "/images/icon/SERVICES/CROSS PLATFORM MOBILE APP DEVELOPMENT/REACT NATIVE APP DEVELOPMENT.jpg" },
            { title: "PhoneGap / Cordova App Development",    link: "/",                                          icon: "/images/icon/SERVICES/CROSS PLATFORM MOBILE APP DEVELOPMENT/PHONEGAP_ CORDOVA APP DEVELOPMENT.jpg" },
          ],
        },
        {
          title: "Enterprise & System Integrations",
          icon: "/images/icon/SERVICES/MOBILE APPLICATION DEVELOPMENT/ENTERPRISE SYSTEM INTEGRATIONS.jpg",
          sub: [
            { title: "Mobile App Integration with ERP and eCommerce", link: "/" },
          ],
        },
        {
          title: "Industry-Specific Mobile Solutions",
          icon: "/images/icon/SERVICES/MOBILE APPLICATION DEVELOPMENT/INDUSTRY SPECIFIC MOBILE SOLUTIONS.jpg",
          sub: [
            { title: "Barcode and QR Code Mobile Apps",            link: "/", icon: "/images/icon/SERVICES/INDUSTRY SPECIFIC MOBILE SOLUTIONS/BARCODE AND QR CODE MOBILE APPS.jpg" },
            { title: "Field Service and Logistics Mobile Apps",    link: "/", icon: "/images/icon/SERVICES/INDUSTRY SPECIFIC MOBILE SOLUTIONS/FIELD SERVICE AND LOGISTICS MOBILE APPS.jpg" },
            { title: "Inventory and Asset Management Mobile Apps", link: "/", icon: "/images/icon/SERVICES/INDUSTRY SPECIFIC MOBILE SOLUTIONS/INVENTORY AND ASSET MANAGEMENT MOBILE APPS.jpg" },
          ],
        },
      ],
    },
    {
      title: "Digital Marketing & SEO",
      icon: "/images/icon/SERVICES/DIGITAL MARKETING SEO.jpg",
      sub: [
        {
          title: "Search & Performance Marketing",
          icon: "/images/icon/SERVICES/DIGITAL MARKETING & SEO/SEARCH AND PERFORMANCE MARKETING.jpg",
          sub: [
            { title: "Search Engine Optimization (SEO)",          link: "/", icon: "/images/icon/SERVICES/SEARCH & PERFORMANCE MARKETING/SEARCH ENGINE OPTIMIZATION.jpg" },
            { title: "Search Engine Marketing (SEM) / Google Ads",link: "/", icon: "/images/icon/SERVICES/SEARCH & PERFORMANCE MARKETING/SEARCH ENGINE MARKETING SEM GOOGLE ADS.jpg" },
            { title: "Performance Marketing",                      link: "/", icon: "/images/icon/SERVICES/SEARCH & PERFORMANCE MARKETING/PERFORMANCE MARKETING.jpg" },
            { title: "Conversion Rate Optimization (CRO)",        link: "/", icon: "/images/icon/SERVICES/SEARCH & PERFORMANCE MARKETING/CONVERSION RATE OPTIMIZATION.jpg" },
          ],
        },
        {
          title: "Social Media & Brand Growth",
          icon: "/images/icon/SERVICES/DIGITAL MARKETING & SEO/SOCIAL MEDIA AND BRAND GROWTH.jpg",
          sub: [
            { title: "Social Media Marketing (SMM)", link: "/",                    icon: "/images/icon/SERVICES/SOCIAL MEDIA & BRAND GROWTH/SOCIAL MEDIA MARKETING.jpg" },
            { title: "Brand Management",             link: "web-design-branding",  icon: "/images/icon/SERVICES/SOCIAL MEDIA & BRAND GROWTH/BRAND MANAGEMENT.jpg" },
          ],
        },
        {
          title: "Content & Strategy",
          icon: "/images/icon/SERVICES/DIGITAL MARKETING & SEO/CONTENT AND STRATEGY.jpg",
          sub: [
            { title: "Content Marketing Strategy", link: "/" },
          ],
        },
        {
          title: "Marketing Automation & CRM",
          icon: "/images/icon/SERVICES/DIGITAL MARKETING & SEO/MARKETING AUTOMATION AND CRM.jpg",
          sub: [
            { title: "Marketing Automation",        link: "/", icon: "/images/icon/SERVICES/MARKETING & CRM/MARKETING AUTOMATION.jpg" },
            { title: "HubSpot Implementation",      link: "/", icon: "/images/icon/SERVICES/MARKETING & CRM/HUBSPOT IMPLEMENTATION.jpg" },
            { title: "ActiveCampaign Automation",   link: "/", icon: "/images/icon/SERVICES/MARKETING & CRM/ACTIVECAMPAIGN AUTOMATION.jpg" },
          ],
        },
        {
          title: "Email Marketing Campaigns",
          icon: "/images/icon/SERVICES/DIGITAL MARKETING & SEO/EMAIL MARKETING CAMPAIGNS.jpg",
          sub: [
            { title: "MailChimp Campaigns", link: "/" },
          ],
        },
      ],
    },
    {
      title: "Cloud Computing & DevOps",
      icon: "/images/icon/SERVICES/CLOUD COMPUTING & DEVOPS.jpg",
      sub: [
        {
          title: "Cloud Platforms & Providers",
          icon: "/images/icon/SERVICES/CLOUDE COMPUTING & DEVOPS/CLOUD PLATFORMS & PROVIDERS.jpg",
          sub: [
            { title: "Microsoft Azure Cloud Services",          link: "/", icon: "/images/icon/SERVICES/CLOUD PLATFORMS & PROVIDERS/MICROSOFT AZURE CLOUD SERVICES.jpg" },
            { title: "Amazon Web Services (AWS) Cloud",         link: "/", icon: "/images/icon/SERVICES/CLOUD PLATFORMS & PROVIDERS/AMAZON WEB SERVICES (AWS CLOUD)).jpg" },
            { title: "Google Cloud Platform (GCP) Services",    link: "/", icon: "/images/icon/SERVICES/CLOUD PLATFORMS & PROVIDERS/GOOGLE CLOUD PLATFORM (GCP)SERVICES).jpg" },
            { title: "Oracle Cloud Infrastructure (OCI)",       link: "/", icon: "/images/icon/SERVICES/CLOUD PLATFORMS & PROVIDERS/ORACLE CLOUD INFRASTRUCTURE.jpg" },
            { title: "SAP Cloud Platform Services",             link: "/", icon: "/images/icon/SERVICES/CLOUD PLATFORMS & PROVIDERS/SAP CLOUD PLATFORM SERVICES.jpg" },
          ],
        },
        {
          title: "Cloud Migration & Modernization",
          icon: "/images/icon/SERVICES/CLOUDE COMPUTING & DEVOPS/CLOUD MIGRATION & MODERNIZATION.jpg",
          sub: [
            { title: "Cloud Application Modernization",         link: "/", icon: "/images/icon/SERVICES/CLOUDE MIGRATION & MODERNIZATION/CLOUD APPLICATION MODERNIZATION.jpg" },
            { title: "Cloud Migration Planning and Execution",  link: "/", icon: "/images/icon/SERVICES/CLOUDE MIGRATION & MODERNIZATION/CLOUD MIGRATION PLANNING AND EXECUTION.jpg" },
            { title: "Database Migration",                      link: "/", icon: "/images/icon/SERVICES/CLOUDE MIGRATION & MODERNIZATION/DATABASE MIGRATION.jpg" },
          ],
        },
        {
          title: "Infrastructure & Cloud Management",
          icon: "/images/icon/SERVICES/CLOUDE COMPUTING & DEVOPS/INFRASTRUCTURE & CLOUD MANAGEMENT.jpg",
          sub: [
            { title: "Virtual Machine Setup and Management",          link: "/", icon: "/images/icon/SERVICES/INFRASTRUCTURE & CLOUDE MANAGEMENT/VIRTUAL MACHINE SETUP AND MANGEMENT.jpg" },
            { title: "Cloud Infrastructure Design & Optimization",    link: "/", icon: "/images/icon/SERVICES/INFRASTRUCTURE & CLOUDE MANAGEMENT/CLOUD INFRASTRUCTURE DESIGN AND OPTIMIZATION.jpg" },
          ],
        },
        {
          title: "DevOps & Continuous Delivery",
          icon: "/images/icon/SERVICES/CLOUDE COMPUTING & DEVOPS/DEVOPS & CONTINOUS DELIVERY.jpg",
          sub: [
            { title: "CI/CD Pipelines Setup",          link: "/", icon: "/images/icon/SERVICES/DEVOPS & CONTINUOUS DELIVERY/CI_CD PIPLINES SETUP.jpg" },
            { title: "GitHub / GitLab Integration",    link: "/", icon: "/images/icon/SERVICES/DEVOPS & CONTINUOUS DELIVERY/GITHUB_GITLAB INTEGRATION.jpg" },
            { title: "Azure DevOps Implementation",    link: "/", icon: "/images/icon/SERVICES/DEVOPS & CONTINUOUS DELIVERY/AZURE DEVOPS IMPLEMENTATION.jpg" },
          ],
        },
        {
          title: "Containerization & Orchestration",
          icon: "/images/icon/SERVICES/CLOUDE COMPUTING & DEVOPS/CONTAINERIZATION & ORCHESTRATION.jpg",
          sub: [
            { title: "Docker Containerization",  link: "/", icon: "/images/icon/SERVICES/CONTAINERIZATION & ORCHESTRATION/DOCKER CONTAINERIZATION.jpg" },
            { title: "Kubernetes Orchestration", link: "/", icon: "/images/icon/SERVICES/CONTAINERIZATION & ORCHESTRATION/KUBERNETES ORCHESTRATION.jpg" },
          ],
        },
        {
          title: "Infrastructure Automation & IaC",
          icon: "/images/icon/SERVICES/CLOUDE COMPUTING & DEVOPS/INFRASTRUCTURE AUTOMATION &  IAC.jpg",
          sub: [
            { title: "Infrastructure as Code (IaC) using Terraform", link: "/", icon: "/images/icon/SERVICES/INFRASTRUCTURE AUTOMATION & IAC/INFRASTRUCTURE AS CODE (LAC)USING TERRAFORM).jpg" },
            { title: "Automation with Ansible",                       link: "/", icon: "/images/icon/SERVICES/INFRASTRUCTURE AUTOMATION & IAC/AUTOMATION WITH ANSIBLE.jpg" },
          ],
        },
      ],
    },
    {
      title: "Cybersecurity & Compliance",
      icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE.jpg",
      sub: [
        {
          title: "Infrastructure & Network Security",
          icon: "/images/icon/SERVICES/CYBERSECURITY/INFRASTRUCTURE & NETWORK SECURITY.jpg",
          sub: [
            { title: "Network Security Implementation",  link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/NEWTWORK SECURITY IMPLEMENTATION.jpg" },
            { title: "Endpoint Security Solutions",      link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/ENDPOINT SECURITY SOLUTIONS.jpg" },
            { title: "Anti-Malware and Threat Protection", link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/ANTI-MALWARE AND THREAT PROTECTION.jpg" },
          ],
        },
        {
          title: "Cloud Security & Identity Management",
          icon: "/images/icon/SERVICES/CYBERSECURITY/CLOUD SECURITY & IDENTITY MANAGEMENT.jpg",
          sub: [
            { title: "Cloud Security and Identity Access Management (IAM)", link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/CLOUD SECURITY AND IDENTITY ACCESS MANAGEMENT (IAM)).jpg" },
          ],
        },
        {
          title: "Threat Detection & Response",
          icon: "/images/icon/SERVICES/CYBERSECURITY/THREAT DETECTION & RESPONSE.jpg",
          sub: [
            { title: "Security Operations Center (SOC) Monitoring", link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/SECURITY OPERATIONS CENTER.jpg" },
            { title: "Ransomware Prevention",                        link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/RANSOMWARE PREVENTION.jpg" },
            { title: "Data Loss Prevention (DLP)",                   link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/DATA LOSS PREVENTION (DLP).jpg" },
          ],
        },
        {
          title: "Security Testing & Risk Management",
          icon: "/images/icon/SERVICES/CYBERSECURITY/SECURITY TESTING & RISK MANGEMENT.jpg",
          sub: [
            { title: "Vulnerability Assessment",           link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/VULNERABILITY ASSESSMENT.jpg" },
            { title: "Penetration Testing (VAPT)",         link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/PENETRATION (VAPT).jpg" },
            { title: "Security Audits and Risk Assessment",link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/SECURITY AUDITS AND RISK ASSESSMENT.jpg" },
          ],
        },
        {
          title: "Compliance & Regulatory Services",
          icon: "/images/icon/SERVICES/CYBERSECURITY/COMPLIANCE & REGULATORY SERVICES.jpg",
          sub: [
            { title: "Compliance Services (ISO, SOC 2, GDPR, HIPAA)", link: "/", icon: "/images/icon/SERVICES/CYBERSECURITY & COMPLIANCE/COMPLIANCE SERVICES (ISO,SOC2,GDPR,HIPAA)).jpg" },
          ],
        },
      ],
    },
    {
      title: "AI / ML & Automation",
      icon: "/images/icon/SERVICES/AI_ML AUTOMATION.jpg",
      sub: [
        {
          title: "Artificial Intelligence & Generative AI",
          icon: "/images/icon/SERVICES/Automation/ARTIFICAL INTELLIGENCE & GENERATIVE AI.jpg",
          sub: [
            { title: "Artificial Intelligence Solutions", link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/ARTIFICIAL INTELLIGENCE SOLUTIONS.jpg" },
            { title: "Generative AI Solutions",           link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/GENERATIVE AI SOLUTIONS.jpg" },
          ],
        },
        {
          title: "Machine Learning & Advanced Analytics",
          icon: "/images/icon/SERVICES/Automation/MACHINE LEARNING & ADVANCED ANALYTICS.jpg",
          sub: [
            { title: "Machine Learning Models",        link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/MACHINE LEARNING MODELS.jpg" },
            { title: "Predictive Analytics",           link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/PREDICTIVE ANALYTICS.jpg" },
            { title: "Demand Forecasting using AI/ML", link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/DEMAND FORECASTING USING AI_ML.jpg" },
            { title: "Anomaly Detection",              link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/ANOMALY DETECTION.jpg" },
          ],
        },
        {
          title: "Conversational AI",
          icon: "/images/icon/SERVICES/Automation/CONVERSATION AI.jpg",
          sub: [
            { title: "AI-Powered Chatbots", link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/AI POWERED CHATBOTS.jpg" },
            { title: "Virtual Assistants",  link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/VIRTUAL ASSISTANTS.jpg" },
          ],
        },
        {
          title: "Intelligent & Business Process Automation",
          icon: "/images/icon/SERVICES/Automation/INTELLIGENT & BUSINESS PROCESS AUTOMATION.jpg",
          sub: [
            { title: "Intelligent Automation", link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/INTELLIGENT AUTOMATION.jpg" },
            { title: "Workflow Automation",     link: "/", icon: "/images/icon/SERVICES/Automation SUB MENU/WORKFLOW AUTOMATION.jpg" },
          ],
        },
        {
          title: "Robotic Process Automation (RPA)",
          icon: "/images/icon/SERVICES/Automation/ROBOTIC PROCESS AUTOMATION (RPA).jpg",
          sub: [
            { title: "RPA using UiPath",          link: "/",               icon: "/images/icon/SERVICES/Automation SUB MENU/ROBOTIC PROCESS AUTOMATION(RPA) USING PATH.jpg" },
            { title: "RPA using Power Automate",  link: "/services/power", icon: "/images/icon/SERVICES/Automation SUB MENU/ROBOTIC PROCESS AUTOMATION USING POWER AUTOMATE.jpg" },
          ],
        },
      ],
    },
    {
      title: "Testing & Quality Assurance (QA)",
      icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE.jpg",
      sub: [
        {
          title: "Manual & Automated Testing",
          icon: "/images/icon/SERVICES/TESTING/MANUAL & AUTOMATED TESTING.jpg",
          sub: [
            { title: "Manual Testing",    link: "/testing-and-qa-services", icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/MANUAL TESTING.jpg" },
            { title: "Automated Testing", link: "/",                        icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/AUTOMATED TESTING.jpg" },
          ],
        },
        {
          title: "Functional & Non-Functional Testing",
          icon: "/images/icon/SERVICES/TESTING/FUNCTIONAL & NON FUNCTIONAL TESTING.jpg",
          sub: [
            { title: "Functional Testing",  link: "/testing-and-qa-services", icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/FUNCTIONAL TESTING.jpg" },
            { title: "Regression Testing",  link: "/",                        icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/REGRESSION TESTING.jpg" },
            { title: "Performance Testing", link: "/testing-and-qa-services", icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/PERFORMANCE TESTING.jpg" },
            { title: "Security Testing",    link: "/",                        icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/SECURITY TESTING.jpg" },
          ],
        },
        {
          title: "Application & Platform Testing",
          icon: "/images/icon/SERVICES/TESTING/APPLICATION & PLATFORM TESTING.jpg",
          sub: [
            { title: "Mobile App Testing (iOS and Android)", link: "/testing-and-qa-services", icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/MOBILE APP TESTING (IOS AND ANDRIOD ).jpg" },
            { title: "ERP Testing",                          link: "/",                        icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/ERP TESTING.jpg" },
            { title: "eCommerce Testing",                    link: "/industry/e-commerce",     icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/ECOMMERCE TESTING.jpg" },
          ],
        },
        {
          title: "Test Automation & Performance Tools",
          icon: "/images/icon/SERVICES/TESTING/TEST AUTOMATION & PERFORMANCE TOOLS.jpg",
          sub: [
            { title: "Selenium Automation",               link: "/", icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/SELENIUM AUTOMATION.jpg" },
            { title: "Appium Mobile Automation",          link: "/", icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/APPIUM MOBILE AUTOMATION.jpg" },
            { title: "JMeter Load and Performance Testing",link: "/",icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/JMETER LOAD AND PERFORMANCE TESTING.jpg" },
            { title: "LoadRunner Performance Testing",    link: "/", icon: "/images/icon/SERVICES/TESTING & QUALITY ASSURANCE/LOADRUNNER PERFORMANCE.jpg" },
          ],
        },
      ],
    },
    {
      title: "Integrations & API Development",
      icon: "/images/icon/SERVICES/INTEGRATIONS & API DEVELOPMENT.jpg",
      sub: [
        {
          title: "Enterprise & Platform Integrations",
          icon: "/images/icon/SERVICES/INTEGRATIONS AND API DEVELOPMENT/ENTERPRISE & PLATFORM INTEGRATIONS.jpg",
          sub: [
            { title: "ERP System Integration",                                    link: "/erp-machine",          icon: "/images/icon/SERVICES/INTEGRATIONS AND API/ERP SYSTEM INTEGRATION.jpg" },
            { title: "eCommerce Platform Integration",                            link: "/industry/e-commerce",  icon: "/images/icon/SERVICES/INTEGRATIONS AND API/E COMMERCE PLATFORM INTEGRATION.jpg" },
            { title: "Payment Gateway Integration",                               link: "/industry/banking",     icon: "/images/icon/SERVICES/INTEGRATIONS AND API/PAYMENT GATEWAY INTEGRATION.jpg" },
            { title: "Shipping Carrier Integration (FedEx, UPS, DHL, USPS, LTL)",link: "/courier-management",   icon: "/images/icon/SERVICES/INTEGRATIONS AND API/SHIPPING CARRIER INTEGRATION.jpg" },
          ],
        },
        {
          title: "API Design & Development",
          icon: "/images/icon/SERVICES/INTEGRATIONS AND API DEVELOPMENT/ENTERPRISE & PLATFORM INTEGRATIONS.jpg",
          sub: [
            { title: "Third-Party API Development",  link: "/", icon: "/images/icon/SERVICES/INTEGRATIONS AND API/THIRD PARTY API DEVELOPMENT.jpg" },
            { title: "Custom REST API Development",  link: "/", icon: "/images/icon/SERVICES/INTEGRATIONS AND API/CUSTOM REST API DEVELOPMENT.jpg" },
            { title: "Custom SOAP API Development",  link: "/", icon: "/images/icon/SERVICES/INTEGRATIONS AND API/CUSTOM SOAP API DEVELOPMENT.jpg" },
          ],
        },
        {
          title: "Middleware & Integration Platforms",
          icon: "/images/icon/SERVICES/INTEGRATIONS AND API DEVELOPMENT/MIDDLEWARE & INTEGRATION PLATFORM.jpg",
          sub: [
            { title: "Middleware Integration using MuleSoft",       link: "/", icon: "/images/icon/SERVICES/INTEGRATIONS AND API/MIDDLEWARE INTEGRATION USING MULESOFT.jpg" },
            { title: "Middleware Integration using Dell Boomi",     link: "/", icon: "/images/icon/SERVICES/INTEGRATIONS AND API/MIDDLEWARE INTEGRATION USING DELL BOOMI.jpg" },
            { title: "Middleware Integration using Azure Logic Apps",link: "/", icon: "/images/icon/SERVICES/INTEGRATIONS AND API/MIDDLEWARE INTEGRATION USING AZURE LOGIC APPS.jpg" },
          ],
        },
        {
          title: "Event-Driven & Messaging Solutions",
          icon: "/images/icon/SERVICES/INTEGRATIONS AND API DEVELOPMENT/EVENT DRIVEN MESSAGING SOLUTIONS.jpg",
          sub: [
            { title: "Kafka Messaging and Event Streaming", link: "/", icon: "/images/icon/SERVICES/INTEGRATIONS AND API/KAFKA MESSAGING AND EVENT STREAMING.jpg" },
          ],
        },
      ],
    },
  ],

  technologies: [
    {
      title: "ERP Platforms",
      icon: "/images/icon/TECHNOLOGIES ICONS/ERP.jpg",
      sub: [
        {
          title: "Microsoft Dynamics 365 Finance and Operations",
          sub: [
            { title: "Finance",                   link: "/technologies/erp-platforms/dynamics-365" },
            { title: "Supply Chain Management",   link: "/technologies/erp-platforms/dynamics-365" },
            { title: "Production Control",        link: "/technologies/erp-platforms/dynamics-365" },
            { title: "Inventory Management",      link: "/technologies/erp-platforms/dynamics-365" },
            { title: "Procurement and Sourcing",  link: "/technologies/erp-platforms/dynamics-365" },
          ],
        },
        {
          title: "Microsoft Dynamics 365 Supply Chain Management",
          sub: [
            { title: "Warehouse Management (WMS / AWMS)", link: "/technologies/erp-platforms/scm" },
            { title: "Transportation Management",         link: "/technologies/erp-platforms/scm" },
            { title: "Master Planning",                   link: "/technologies/erp-platforms/scm" },
            { title: "Order Fulfillment",                 link: "/technologies/erp-platforms/scm" },
            { title: "Logistics Automation",              link: "/technologies/erp-platforms/scm" },
          ],
        },
        {
          title: "Microsoft Dynamics 365 Business Central",
          sub: [
            { title: "Financial Management",           link: "/technologies/erp-platforms/power-platform" },
            { title: "Sales & Customer Management",    link: "/technologies/erp-platforms/power-platform" },
            { title: "Inventory and Supply Planning",  link: "/technologies/erp-platforms/power-platform" },
            { title: "Purchasing and Vendor Management",link: "/technologies/erp-platforms/power-platform" },
            { title: "Project Accounting",             link: "/technologies/erp-platforms/power-platform" },
            { title: "Reporting and Analytics",        link: "/technologies/erp-platforms/power-platform" },
          ],
        },
        {
          title: "Microsoft Dynamics 365 Customer Engagement",
          sub: [
            { title: "Sales Automation",      link: "/technologies/erp-platforms/power-platform" },
            { title: "Customer Service",      link: "/technologies/erp-platforms/power-platform" },
            { title: "Marketing Automation",  link: "/technologies/erp-platforms/power-platform" },
            { title: "Customer Insights",     link: "/technologies/erp-platforms/power-platform" },
            { title: "Field Service",         link: "/technologies/erp-platforms/power-platform" },
          ],
        },
        {
          title: "Sage ERP",
          sub: [
            {
              title: "Sage X3",
              sub: [
                { title: "Financial Management",         link: "/technologies/erp-platforms/power-platform" },
                { title: "Supply Chain Management",      link: "/technologies/erp-platforms/power-platform" },
                { title: "Manufacturing",                link: "/technologies/erp-platforms/power-platform" },
                { title: "Inventory and Distribution",   link: "/technologies/erp-platforms/power-platform" },
              ],
            },
            {
              title: "Sage Intacct",
              sub: [
                { title: "Financial Reporting",           link: "/technologies/erp-platforms/power-platform" },
                { title: "Accounting Automation",         link: "/technologies/erp-platforms/power-platform" },
                { title: "Cloud Financial Management",    link: "/technologies/erp-platforms/power-platform" },
              ],
            },
          ],
        },
        {
          title: "Unit4 ERP",
          sub: [
            { title: "Financial Management",             link: "/technologies/erp-platforms/power-platform" },
            { title: "Procurement & Supplier Management",link: "/technologies/erp-platforms/power-platform" },
            { title: "Project & Resource Management",    link: "/technologies/erp-platforms/power-platform" },
            { title: "HR & Payroll",                     link: "/technologies/erp-platforms/power-platform" },
          ],
        },
      ],
    },
    {
      title: "Web & Frameworks",
      icon: "/images/icon/TECHNOLOGIES ICONS/WEB AND FRAMEWORKS.jpg",
      sub: [
        {
          title: "Frontend Technologies",
          icon: "/images/icon/TECHNOLOGIES ICONS/FRONT-END,BACK-END,FRAMEWORK/9.jpg",
          sub: [
            { title: "HTML5",       link: "/technologies/web-development/react" },
            { title: "CSS3",        link: "/technologies/web-development/react" },
            { title: "JavaScript",  link: "/technologies/web-development/react" },
          ],
        },
        {
          title: "Frontend Frameworks & Libraries",
          icon: "/images/icon/TECHNOLOGIES ICONS/FRONT-END,BACK-END,FRAMEWORK/10.jpg",
          sub: [
            { title: "Bootstrap",     link: "/technologies/web-development/angular" },
            { title: "Tailwind CSS",  link: "/technologies/web-development/angular" },
            { title: "React.js",      link: "/technologies/web-development/angular" },
            { title: "Angular",       link: "/technologies/web-development/angular" },
            { title: "Vue.js",        link: "/technologies/web-development/angular" },
          ],
        },
        {
          title: "Backend Technologies",
          icon: "/images/icon/TECHNOLOGIES ICONS/FRONT-END,BACK-END,FRAMEWORK/11.jpg",
          sub: [
            {
              title: "PHP Ecosystem",
              sub: [
                { title: "PHP",              link: "/technologies/web-development/angular" },
                { title: "Zend Framework",   link: "/technologies/web-development/angular" },
                { title: "Laravel",          link: "/technologies/web-development/angular" },
                { title: "Symfony",          link: "/technologies/web-development/angular" },
              ],
            },
            {
              title: "Python Ecosystem",
              sub: [
                { title: "Python", link: "/technologies/web-development/angular" },
                { title: "Django", link: "/technologies/web-development/angular" },
                { title: "Flask",  link: "/technologies/web-development/angular" },
              ],
            },
            {
              title: "JavaScript Runtime",
              sub: [
                { title: "Node.js", link: "/technologies/web-development/nodejs" },
              ],
            },
            {
              title: "Enterprise Backend Platforms",
              sub: [
                { title: "Java",      link: "/technologies/web-development/angular" },
                { title: ".NET Core", link: "/technologies/web-development/angular" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Mobile & Cross-Platform",
      icon: "/images/icon/TECHNOLOGIES ICONS/MOBILE AND CROSS PLATFORM.jpg",
      sub: [
        { title: "iOS Native Apps",          link: "/technologies/mobile-development/ios" },
        { title: "Android Native Apps",      link: "/technologies/mobile-development/android" },
        { title: "Flutter Apps",             link: "/technologies/mobile-development/flutter" },
        { title: "React Native Apps",        link: "/technologies/mobile-development/ios" },
        { title: "PhoneGap / Cordova Apps",  link: "/technologies/mobile-development/android" },
      ],
    },
    {
      title: "eCommerce & CMS Platforms",
      icon: "/images/icon/TECHNOLOGIES ICONS/E COMMERCE AND CMS.jpg",
      sub: [
        { title: "Magento",     link: "/web-design-branding" },
        { title: "OpenCart",    link: "/web-design-branding" },
        { title: "Zen Cart",    link: "/web-design-branding" },
        { title: "Shopify",     link: "/web-design-branding" },
        { title: "WooCommerce", link: "/web-design-branding" },
        { title: "WordPress",   link: "/web-design-branding" },
        { title: "Joomla",      link: "/web-design-branding" },
        { title: "Drupal",      link: "/web-design-branding" },
      ],
    },
    {
      title: "Cloud & DevOps Technologies",
      icon: "/images/icon/TECHNOLOGIES ICONS/CLOUDE.jpg",
      sub: [
        { title: "Microsoft Azure",              link: "/web-design-branding" },
        { title: "AWS Cloud",                    link: "/web-design-branding" },
        { title: "Google Cloud Platform",        link: "/web-design-branding" },
        { title: "Oracle Cloud",                 link: "/web-design-branding" },
        { title: "SAP Cloud Platform",           link: "/web-design-branding" },
        { title: "Docker",                       link: "/web-design-branding" },
        { title: "Kubernetes",                   link: "/web-design-branding" },
        { title: "CI/CD Pipelines",              link: "/web-design-branding" },
        { title: "Terraform",                    link: "/web-design-branding" },
        { title: "Ansible",                      link: "/web-design-branding" },
        { title: "GitHub / GitLab / Azure DevOps",link: "/web-design-branding" },
      ],
    },
    {
      title: "Cybersecurity Tools",
      icon: "/images/icon/TECHNOLOGIES ICONS/CYBERSECURITY.jpg",
      sub: [
        { title: "Firewalls",                   link: "/technologies/erp-platforms/scm" },
        { title: "SIEM Systems",                link: "/technologies/erp-platforms/scm" },
        { title: "Endpoint Protection",         link: "/technologies/erp-platforms/scm" },
        { title: "CrowdStrike",                 link: "/technologies/erp-platforms/scm" },
        { title: "SentinelOne",                 link: "/technologies/erp-platforms/scm" },
        { title: "Azure Defender",              link: "/technologies/erp-platforms/scm" },
        { title: "Vulnerability Scanning Tools",link: "/technologies/erp-platforms/scm" },
        { title: "Penetration Testing Tools",   link: "/technologies/erp-platforms/scm" },
      ],
    },
    {
      title: "AI / ML & Analytics",
      icon: "/images/icon/TECHNOLOGIES ICONS/AI-ML.jpg",
      sub: [
        { title: "Power BI",                  link: "/technologies/erp-platforms/scm" },
        { title: "Tableau",                   link: "/technologies/erp-platforms/scm" },
        { title: "SAP Analytics Cloud",       link: "/technologies/erp-platforms/scm" },
        { title: "Python & R",                link: "/technologies/erp-platforms/scm" },
        { title: "Machine Learning Libraries",link: "/technologies/erp-platforms/scm" },
      ],
    },
    {
      title: "Testing & QA",
      icon: "/images/icon/TECHNOLOGIES ICONS/TESTING AND QA.jpg",
      sub: [
        { title: "Selenium",   link: "/testing-and-qa-services" },
        { title: "Appium",     link: "/testing-and-qa-services" },
        { title: "JMeter",     link: "/testing-and-qa-services" },
        { title: "LoadRunner", link: "/testing-and-qa-services" },
        { title: "Manual QA",  link: "/testing-and-qa-services" },
      ],
    },
  ],

  industries: [
    { title: "Manufacturing",             icon: "/images/icon/INDUSTRIES ICONS/MANUFACTURING.jpg",             sub: [{ title: "Manufacturing", link: "/solutions/industry-specific-erp-solutions/manufacturing" }, { title: "Retail", link: "/solutions/industry-specific-erp-solutions/retail" }, { title: "SCM", link: "/solutions/industry-specific-erp-solutions/scm" }] },
    { title: "Retail & eCommerce",        icon: "/images/icon/INDUSTRIES ICONS/RETAILS&COMM.jpg",              sub: [{ title: "Tailored mobile", link: "/solutions/custom-development-solutions/tailored-mobile" }, { title: "Web apps for business", link: "/solutions/custom-development-solutions/web-apps-for-business" }] },
    { title: "Distribution & Wholesale",  icon: "/images/icon/INDUSTRIES ICONS/DISTRIBUTION AND WHOLESHALE.jpg", link: "/" },
    { title: "Finance & Banking",         icon: "/images/icon/INDUSTRIES ICONS/FINANCE AND BANKING.jpg",       link: "/solutions/end-to-end-digital-transformation" },
    { title: "Healthcare & Pharma",       icon: "/images/icon/INDUSTRIES ICONS/HEALTHCARE AND PHARMA.jpg",     link: "/" },
    { title: "Education & Public Sector", icon: "/images/icon/INDUSTRIES ICONS/EDUCATION AND PUBLIC SECTOR.jpg", link: "/solutions/end-to-end-digital-transformation" },
    { title: "Hospitality & Travel",      icon: "/images/icon/INDUSTRIES ICONS/HOSPITALITY AND TRAVEL.jpg",    link: "/solutions/custom-development-solutions/tailored-mobile" },
    { title: "Energy & Utilities",        icon: "/images/icon/INDUSTRIES ICONS/ENERGY AND.jpg",               link: "/solutions/custom-development-solutions/web-apps-for-business" },
    { title: "Construction & Projects",   icon: "/images/icon/INDUSTRIES ICONS/CONSTRUCTIONS AND PROJECTS.jpg", link: "/" },
  ],

  integrations: [
    { title: "ERP Integrations",                    icon: "/images/icon/INTEGRATIONS/Erp.jpg",                              sub: [{ title: "Microsoft Dynamics 365 Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "SAP Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Oracle Fusion Cloud ERP Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "NetSuite Integration", link: "/solutions/end-to-end-digital-transformation" }] },
    { title: "E-Commerce Platform Integrations",    icon: "/images/icon/INTEGRATIONS/E-COMMERCE PLATFORM INTEGRATION.jpg", sub: [{ title: "Magento Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "OpenCart Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Zen Cart Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Shopify Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "WooCommerce Integration", link: "/solutions/end-to-end-digital-transformation" }] },
    { title: "Marketplace Integrations",            icon: "/images/icon/INTEGRATIONS/MARKETPLACE INTEGRATION.jpg",         sub: [{ title: "Amazon Marketplace Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Walmart Marketplace Integration", link: "/solutions/end-to-end-digital-transformation" }] },
    { title: "Shipping & Logistics Integrations",   icon: "/images/icon/INTEGRATIONS/You said SHIPPING AND LOGISTICS.jpg", sub: [{ title: "FedEx Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "UPS Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "DHL Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "USPS Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "LTL Carrier Integration", link: "/solutions/end-to-end-digital-transformation" }] },
    { title: "Payment Gateway Integrations",        icon: "/images/icon/INTEGRATIONS/PAYMENT AND GATEWAY.jpg",             sub: [{ title: "Stripe Payment Gateway Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "PayPal Payment Gateway Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Razorpay Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Square Integration", link: "/solutions/end-to-end-digital-transformation" }] },
    { title: "Middleware & Integration Platforms",  icon: "/images/icon/INTEGRATIONS/Middleware.jpg",                      sub: [{ title: "MuleSoft Middleware Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Dell Boomi Middleware Integration", link: "/solutions/end-to-end-digital-transformation" }, { title: "Azure Logic Apps Integration", link: "/solutions/end-to-end-digital-transformation" }] },
    { title: "Event Streaming & Data Integration",  icon: "/images/icon/INTEGRATIONS/EVENT SCREAMING AND DATA.jpg",        sub: [{ title: "Apache Kafka Event Streaming", link: "/solutions/end-to-end-digital-transformation" }] },
  ],

  products: [
    { title: "WMS Suite",             link: "/courier-management",        icon: "/images/icon/PRODUCTS AND SOLUTIONS/wms suit.jpg" },
    { title: "Fleet Management",      link: "/weapon-tracking",           icon: "/images/icon/PRODUCTS AND SOLUTIONS/FLEET MANAGEMENT.jpg" },
    { title: "Teleshopping Solutions",link: "/erp-machine",               icon: "/images/icon/PRODUCTS AND SOLUTIONS/TELESHOPPING SOLUTIONS.jpg" },
    { title: "E-SCOP",                link: "/hospital-management",       icon: "/images/icon/PRODUCTS AND SOLUTIONS/E-SCOPE.jpg" },
    { title: "ESSMS",                 link: "/retail-management",         icon: "/images/icon/PRODUCTS AND SOLUTIONS/ESSMS.jpg" },
    { title: "DMS",                   link: "/human-resource-management", icon: "/images/icon/PRODUCTS AND SOLUTIONS/DMS.jpg" },
    { title: "HR/Payroll",            link: "/automobile-management",     icon: "/images/icon/PRODUCTS AND SOLUTIONS/HR_PAYROLL.jpg" },
    { title: "Dispatch",              link: "/pharmacy-management",       icon: "/images/icon/PRODUCTS AND SOLUTIONS/DISPATCH.jpg" },
    { title: "International Courier", link: "/courier-management",        icon: "/images/icon/PRODUCTS AND SOLUTIONS/iNTERNATIONAL COURIER.jpg" },
    { title: "Mail Room",             link: "/pharmacy-management",       icon: "/images/icon/PRODUCTS AND SOLUTIONS/MAIL ROOM.jpg" },
    { title: "Courier",               link: "/courier-management",        icon: "/images/icon/PRODUCTS AND SOLUTIONS/COURIER.jpg" },
    { title: "Weapon",                link: "/weapon-tracking",           icon: "/images/icon/PRODUCTS AND SOLUTIONS/WEAPON.jpg" },
    { title: "Agency Management",     link: "/pharmacy-management",       icon: "/images/icon/PRODUCTS AND SOLUTIONS/AGENCY MANAGEMENT.jpg" },
  ],

  stories: [
    { title: "ERP Modernization",                      link: "/technology-portfolio",  icon: "/images/icon/SUCCESS STORIES/ERP.jpg" },
    { title: "Warehouse & Supply Chain Automation",    link: "/industry-portfolio",    icon: "/images/icon/SUCCESS STORIES/WAREHOUSE.jpg" },
    { title: "Custom Web & Mobile Apps",               link: "/technology-portfolio",  icon: "/images/icon/SUCCESS STORIES/CUSTOM WEB AND MOBILE APPS.jpg" },
    { title: "Digital Marketing & Growth",             link: "/industry-portfolio",    icon: "/images/icon/SUCCESS STORIES/DIGITAL MARKETING GROWTH.jpg" },
    { title: "Cybersecurity & Compliance",             link: "/technology-portfolio",  icon: "/images/icon/SUCCESS STORIES/CYBERSECURITY.jpg" },
    { title: "Cloud Migration & DevOps",               link: "/industry-portfolio",    icon: "/images/icon/SUCCESS STORIES/CLOUDE MIGRATION.jpg" },
  ],
};

// ─── Icons (stable, no props recreated each render) ──────────
function ChevronDown({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M2 4l4 4 4-4" />
    </svg>
  );
}
function ChevronRight({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 2l4 4-4 4" />
    </svg>
  );
}
function ChevronLeft({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} width="16" height="16" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M8 2L4 6l4 4" />
    </svg>
  );
}

// ─── Stable style constants (declared once, never recreated) ──
const COL_STYLE: React.CSSProperties = {
  borderRight: "1px solid #f0f0f0",
  minWidth: 220,
  maxWidth: 270,
  padding: "6px 0",
};
const LINK_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "7px 14px",
  fontSize: 13,
  color: "#333",
  textDecoration: "none",
  transition: "background 0.15s, color 0.15s",
};
const MOBILE_ITEM_BASE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "15px 20px",
  fontSize: 14.5,
  fontWeight: 400,
  color: "#1a1a1a",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #f5f5f5",
  cursor: "pointer",
  textDecoration: "none",
  textAlign: "left",
  lineHeight: 1.4,
  transition: "background 0.15s",
};

// ─── Desktop: Multi-column dropdown panel ─────────────────────
function MultiPanel({ items }: { items: MenuItem[] }) {
  const [l1, setL1] = useState(0);
  const [l2, setL2] = useState<number | null>(null);
  const [l3, setL3] = useState<number | null>(null);
  const router = useRouter();

  const col2 = items[l1]?.sub ?? null;
  const col3 = l2 !== null ? col2?.[l2]?.sub ?? null : null;
  const col4 = l3 !== null ? col3?.[l3]?.sub ?? null : null;

  // Batch state resets to a single render
  const handleL1 = useCallback((i: number) => {
    setL1(i);
    setL2(null);
    setL3(null);
  }, []);
  const handleL2 = useCallback((i: number) => {
    setL2(i);
    setL3(null);
  }, []);

  const navigate = useCallback((link?: string) => {
    if (link) router.push(link);
  }, [router]);

  return (
    <div style={{ display: "flex", gap: 0, minWidth: 220 }}>
      {/* Column 1 */}
      <div style={COL_STYLE}>
        {items.map((item, i) => (
          <button
            key={item.title}
            style={{ display: "flex", alignItems: "center", width: "100%", padding: "7px 14px", fontSize: 13, color: l1 === i ? "#0066cc" : "#333", background: l1 === i ? "#f0f6ff" : "transparent", border: "none", cursor: "pointer", gap: 4, transition: "background 0.15s, color 0.15s" }}
            onMouseEnter={() => handleL1(i)}
            onClick={() => navigate(item.link)}
          >
            {item.icon && <Image src={item.icon} alt="" width={24} height={24} style={{ marginRight: 5 }} />}
            <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
            {item.sub && <ChevronRight />}
          </button>
        ))}
      </div>

      {/* Column 2 */}
      {col2 && (
        <div style={COL_STYLE}>
          {col2.map((item, i) => (
            <button
              key={item.title}
              style={{ display: "flex", alignItems: "center", width: "100%", padding: "7px 14px", fontSize: 13, color: l2 === i ? "#0066cc" : "#333", background: l2 === i ? "#f0f6ff" : "transparent", border: "none", cursor: "pointer", gap: 4, transition: "background 0.15s, color 0.15s" }}
              onMouseEnter={() => handleL2(i)}
              onClick={() => navigate(item.link)}
            >
              {item.icon && <Image src={item.icon} alt="" width={24} height={24} style={{ marginRight: 5 }} />}
              <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
              {item.sub && <ChevronRight />}
            </button>
          ))}
        </div>
      )}

      {/* Column 3 */}
      {col3 && (
        <div style={COL_STYLE}>
          {col3.map((item, i) => (
            <button
              key={item.title}
              style={{ display: "flex", alignItems: "center", width: "100%", padding: "7px 14px", fontSize: 13, color: l3 === i ? "#0066cc" : "#333", background: l3 === i ? "#f0f6ff" : "transparent", border: "none", cursor: "pointer", gap: 4, transition: "background 0.15s, color 0.15s" }}
              onMouseEnter={() => setL3(i)}
              onClick={() => navigate(item.link)}
            >
              {item.icon && <Image src={item.icon} alt="" width={20} height={20} style={{ marginRight: 5 }} />}
              <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
              {item.sub && <ChevronRight />}
            </button>
          ))}
        </div>
      )}

      {/* Column 4 — leaf links */}
      {col4 && (
        <div style={COL_STYLE}>
          {col4.map((item) => (
            <Link key={item.title} href={item.link ?? "#"} className="cs-dropdown-link" style={LINK_STYLE}>
              {item.icon && <Image src={item.icon} alt="" width={22} height={22} style={{ marginRight: 5 }} />}
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Desktop: Flat single-column panel ────────────────────────
function FlatPanel({ items }: { items: MenuItem[] }) {
  return (
    <div style={{ ...COL_STYLE, minWidth: 220 }}>
      {items.map((item) => (
        <Link key={item.title} href={item.link ?? "#"} className="cs-dropdown-link" style={LINK_STYLE}>
          {item.icon && <Image src={item.icon} alt="" width={24} height={24} style={{ marginRight: 5 }} />}
          {item.title}
        </Link>
      ))}
    </div>
  );
}

// ─── Mobile Drawer ─────────────────────────────────────────────
interface DrillLevel {
  title: string;
  items: MenuItem[];
}

// Root level built once as a stable constant
const ROOT_LEVEL: DrillLevel = {
  title: "Menu",
  items: [
    ...NAV_ITEMS.map(({ key, label }) => ({
      title: label,
      sub: NAV_MENUS[key],
    })),
    { title: "Contact Us", link: "/contact-us" },
  ],
};

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [stack, setStack] = useState<DrillLevel[]>([ROOT_LEVEL]);
  const router = useRouter();

  // Reset to root when drawer closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setStack([ROOT_LEVEL]), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const current = stack[stack.length - 1];
  const canGoBack = stack.length > 1;

  const drillInto = useCallback((item: MenuItem) => {
    if (item.sub?.length) {
      setStack((s) => [...s, { title: item.title, items: item.sub! }]);
    } else if (item.link) {
      router.push(item.link);
      onClose();
    }
  }, [router, onClose]);

  const goBack = useCallback(() => setStack((s) => s.slice(0, -1)), []);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1200,
          opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        style={{
          position: "fixed", top: 0, left: 0, bottom: 0,
          width: "min(85vw, 360px)", background: "#fff", zIndex: 1300,
          display: "flex", flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: open ? "4px 0 32px rgba(0,0,0,0.18)" : "none",
          overflowX: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", padding: "0 16px", height: 64, borderBottom: "1px solid #f0f0f0", background: "#fff", flexShrink: 0, gap: 8 }}>
          {canGoBack ? (
            <button onClick={goBack} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", padding: "8px 8px 8px 0", color: "#0066cc", fontSize: 14, fontWeight: 600, flexShrink: 0 }}>
              <ChevronLeft />
              Back
            </button>
          ) : (
            <Link href="/" onClick={onClose} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image src="/media/logo/logo.png" alt="CybateSoft" width={120} height={38} priority />
            </Link>
          )}
          <div style={{ flex: 1 }} />
          <button onClick={onClose} aria-label="Close menu" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 8, background: "#f5f5f5", border: "none", cursor: "pointer", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#555" strokeWidth="2.2" aria-hidden>
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </div>

        {/* Breadcrumb */}
        {canGoBack && (
          <div style={{ padding: "12px 20px 8px", fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase", background: "#fafafa", borderBottom: "1px solid #f0f0f0", flexShrink: 0 }}>
            {current.title}
          </div>
        )}

        {/* Menu list */}
        <div style={{ flex: 1, overflowY: "auto", WebkitOverflowScrolling: "touch" }}>
          {current.items.map((item) => {
            const hasChildren = !!item.sub?.length;

            if (!hasChildren && item.link) {
              return (
                <Link key={item.title} href={item.link} onClick={onClose} className="cs-mobile-item" style={MOBILE_ITEM_BASE}>
                  {item.icon && <Image src={item.icon} alt="" width={16} height={16} style={{ marginRight: 10, opacity: 0.7 }} />}
                  <span style={{ flex: 1 }}>{item.title}</span>
                </Link>
              );
            }

            return (
              <button key={item.title} onClick={() => drillInto(item)} className="cs-mobile-item" style={MOBILE_ITEM_BASE}>
                {item.icon && <Image src={item.icon} alt="" width={16} height={16} style={{ marginRight: 10, opacity: 0.7 }} />}
                <span style={{ flex: 1, textAlign: "left" }}>{item.title}</span>
                {hasChildren && <ChevronRight style={{ color: "#bbb", flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on route change
  useEffect(() => { setOpen(null); setMobileOpen(false); }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const enter = useCallback((key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(key);
  }, []);

  const leave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  return (
    <>
      <style>{`
        .cs-nav-item:hover .cs-trigger { color: #0066cc; }
        .cs-dropdown-link:hover { background: #f0f6ff !important; color: #0066cc !important; }
        .cs-mobile-item:hover { background: #f0f6ff !important; }
        .cs-contact-link:hover { color: #0066cc !important; border-bottom-color: #0066cc !important; }
        .cs-hamburger-line { display: block; width: 22px; height: 2px; background: #222; border-radius: 2px; transition: all 0.25s cubic-bezier(0.4,0,0.2,1); }
        @media (max-width: 1024px) { .cs-desktop-nav { display: none !important; } .cs-mobile-btn { display: flex !important; } }
        @media (min-width: 1025px) { .cs-mobile-btn { display: none !important; } }
      `}</style>

      <nav style={{ position: "sticky", top: 0, zIndex: 1000, background: "#fff", boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.10)" : "0 1px 0 #e8e8e8", transition: "box-shadow 0.2s" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px", display: "flex", alignItems: "center", height: 64 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Image src="/media/logo/logo.png" alt="CybateSoft" width={140} height={44} priority />
          </Link>

          {/* Desktop Nav */}
          <ul className="cs-desktop-nav" style={{ display: "flex", alignItems: "center", listStyle: "none", margin: 0, padding: 0, gap: 2, flex: 1, justifyContent: "flex-end" }}>
            {NAV_ITEMS.map(({ key, label }) => (
              <li key={key} className="cs-nav-item" style={{ position: "relative" }} onMouseEnter={() => enter(key)} onMouseLeave={leave}>
                <button
                  className="cs-trigger"
                  aria-expanded={open === key}
                  aria-haspopup="true"
                  style={{ display: "flex", alignItems: "center", gap: 4, padding: "0 12px", height: 64, fontSize: 13.5, fontWeight: 600, color: open === key ? "#0066cc" : "#222", background: "transparent", border: "none", cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.15s", borderBottom: open === key ? "2px solid #0066cc" : "2px solid transparent" }}
                >
                  {label}
                  <ChevronDown style={{ transition: "transform 0.2s", transform: open === key ? "rotate(180deg)" : "none" }} />
                </button>

                {open === key && (
                  <div
                    style={{ position: "absolute", top: "100%", left: RIGHT_ALIGNED_KEYS.has(key) ? "auto" : 0, right: RIGHT_ALIGNED_KEYS.has(key) ? 0 : "auto", background: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,0.13)", border: "1px solid #e8e8e8", borderRadius: 6, minWidth: 220, overflow: "hidden", zIndex: 999 }}
                    onMouseEnter={() => enter(key)}
                    onMouseLeave={leave}
                  >
                    {MULTI_PANEL_KEYS.has(key)
                      ? <MultiPanel items={NAV_MENUS[key]} />
                      : <FlatPanel  items={NAV_MENUS[key]} />}
                  </div>
                )}
              </li>
            ))}

            <li>
              <Link href="/contact-us" className="cs-contact-link" style={{ display: "flex", alignItems: "center", padding: "0 12px", height: 64, fontSize: 13.5, fontWeight: 600, color: "#222", textDecoration: "none", whiteSpace: "nowrap", borderBottom: "2px solid transparent", transition: "color 0.15s, border-color 0.15s" }}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile spacer */}
          <div style={{ flex: 1 }} className="cs-mobile-btn" />

          {/* Hamburger */}
          <button
            className="cs-mobile-btn"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{ display: "none", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, width: 44, height: 44, marginLeft: 8, background: mobileOpen ? "#f0f6ff" : "transparent", border: "1px solid", borderColor: mobileOpen ? "#d0e4ff" : "#e8e8e8", borderRadius: 8, cursor: "pointer", padding: 0, transition: "background 0.2s, border-color 0.2s", flexShrink: 0 }}
          >
            <span className="cs-hamburger-line" style={{ transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span className="cs-hamburger-line" style={{ opacity: mobileOpen ? 0 : 1, transform: mobileOpen ? "scaleX(0)" : "none" }} />
            <span className="cs-hamburger-line" style={{ transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </nav>

      <MobileDrawer open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
