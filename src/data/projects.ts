import { Project, Lang } from "@/lib/types";

const projectsEn: Project[] = [
  {
    slug: "surescripts",
    featured: true,
    tag: "tag-orange",
    tagText: "React · Next.js · CMS",
    name: "Surescripts Website",
    desc: "Full-cycle development for the largest health information network in the US — responsive, high-performance UI serving pharmacies, providers, and patients nationwide.",
    imgType: "img",
    imgKey: "surescript",
    pills: ["React.js", "JavaScript ES6+", "CSS/SCSS", "CMS Workflows", "REST APIs"],
    cs: {
      tag: "Healthcare Technology · React · CMS",
      title: "Surescripts Website",
      subtitle: "Full-cycle development for a leading healthcare technology network. Building responsive, performant UI that serves millions across the US healthcare system.",
      meta: [
        { lbl: "Role", val: "Front-End Developer" },
        { lbl: "Client", val: "Surescripts via Clear Digital" },
        { lbl: "Stack", val: "React, JS ES6+, CSS, CMS" },
        { lbl: "Type", val: "Ongoing Development" },
      ],
      sections: [
        {
          slabel: "The Challenge",
          stitle: "A healthcare platform needing reliability at scale",
          stext: "Surescripts connects the entire US healthcare system. Their website needed to communicate trust, handle complex content architecture, and remain performant for a professional audience.",
          callout: "<strong>Core requirement:</strong> Every update must meet strict QA, accessibility, and performance standards before deployment.",
          boxes: [
            { cls: "b1", title: "🏢 Business Challenge", text: "Complex information architecture needs to feel simple without losing depth — for a regulated, high-stakes industry." },
            { cls: "b2", title: "👤 User Challenge", text: "Healthcare professionals need fast, authoritative information. Any friction in navigation directly affects trust." },
          ],
        },
        {
          slabel: "My Role",
          stitle: "Full-cycle development with direct client collaboration",
          stext: "Worked directly with Surescripts stakeholders to gather requirements and implement UI updates.",
          role: {
            text: "Translating requirements into production React components — from feature development through QA and deployment.",
            items: ["Built responsive React component architecture", "Integrated CMS workflows for editorial team autonomy", "Connected REST APIs for dynamic data", "Performance profiling and Lighthouse optimizations", "Cross-browser testing and bug resolution", "Agile sprint delivery"],
          },
        },
        {
          slabel: "Outcomes",
          stitle: "Reliable delivery, improved performance",
          stext: "Performance optimizations improved load times and Lighthouse scores. Clear communication reduced revision cycles and kept delivery on schedule.",
        },
      ],
    },
  },
  {
    slug: "hoover",
    featured: false,
    tag: "tag-blue",
    tagText: "JS · PHP · HTML5",
    name: "Hoover Institution",
    desc: "Frontend engineering for Stanford's premier policy research center — new modules, cross-browser reliability, and long-term stability for a prestigious academic audience.",
    imgType: "img",
    imgKey: "hoover",
    pills: ["HTML5", "CSS3", "JavaScript", "PHP"],
    cs: {
      tag: "Research Institution · JavaScript · PHP",
      title: "Hoover Institution Website",
      subtitle: "Frontend engineering for Stanford's Hoover Institution — new feature modules, long-term stability, and cross-browser reliability for a global policy research audience.",
      meta: [
        { lbl: "Role", val: "Front-End Developer" },
        { lbl: "Client", val: "Hoover Institution via Clear Digital" },
        { lbl: "Stack", val: "HTML5, CSS3, JavaScript, PHP" },
        { lbl: "Type", val: "Feature Dev & Maintenance" },
      ],
      sections: [
        {
          slabel: "The Challenge",
          stitle: "Maintaining a prestigious institution's digital presence",
          stext: "The Hoover Institution requires a web presence that matches its stature — authoritative, accessible, and meticulously maintained.",
          callout: "<strong>Key constraint:</strong> New modules must integrate cleanly without disrupting editorial workflows.",
          boxes: [
            { cls: "b1", title: "🏢 Business Challenge", text: "New features and editorial flexibility needed without creating technical debt on a site serving a global audience." },
            { cls: "b2", title: "👤 User Challenge", text: "Researchers and policy readers expect fast, navigable content — any degradation undermines institutional credibility." },
          ],
        },
        {
          slabel: "My Role",
          stitle: "New modules, cross-browser reliability, content stability",
          stext: "Implemented new content modules, maintained existing pages, and resolved technical issues while collaborating with client stakeholders.",
          role: {
            text: "Built and maintained frontend modules balancing new functionality with long-term stability.",
            items: ["New content modules with HTML5/CSS3/JS", "PHP-driven template integration", "Cross-browser testing across all major browsers", "Bug resolution and performance hotfixes", "Content update support for editorial workflows", "Long-term code stability"],
          },
        },
        {
          slabel: "Outcomes",
          stitle: "A stable, evolving platform for global research audiences",
          stext: "New features delivered on schedule, zero disruption to editorial workflows, and improved cross-browser support across all major platforms.",
        },
      ],
    },
  },
  {
    slug: "stanford",
    featured: false,
    tag: "tag-navy",
    tagText: "JS · Modern CSS · Accessibility",
    name: "Stanford University",
    desc: "High-traffic academic pages for Stanford's Emerging Technology Review — accessible, responsive layouts built in close collaboration with university stakeholders.",
    imgType: "img",
    imgKey: "stanford",
    pills: ["JavaScript", "Modern CSS", "Accessibility", "HTML5", "Performance"],
    cs: {
      tag: "Higher Education · JavaScript · Accessibility",
      title: "Stanford University Website",
      subtitle: "Frontend development and updates for Stanford's high-traffic academic pages — delivering accessible, responsive layouts for one of the world's most recognized universities.",
      meta: [
        { lbl: "Role", val: "Front-End Developer" },
        { lbl: "Client", val: "Stanford University via Clear Digital" },
        { lbl: "Stack", val: "JavaScript, Modern CSS Frameworks" },
        { lbl: "Type", val: "Frontend Development" },
      ],
      sections: [
        {
          slabel: "The Challenge",
          stitle: "Academic excellence meets web performance",
          stext: "Stanford's web properties serve students, faculty, researchers, and the global public — requiring strict accessibility standards, mobile-first responsiveness, and performance at scale.",
          callout: "<strong>Standard:</strong> WCAG 2.1 AA accessibility compliance is non-negotiable for public university websites.",
          boxes: [
            { cls: "b1", title: "🏢 Business Challenge", text: "Multiple stakeholder teams, complex content requirements, and a global audience demanding fast, consistent experiences." },
            { cls: "b2", title: "👤 User Challenge", text: "Students and researchers worldwide expect an authoritative, accessible digital presence that doesn't get in the way." },
          ],
        },
        {
          slabel: "My Role",
          stitle: "Accessible, responsive layouts with university stakeholders",
          stext: "Led frontend development working in close collaboration with Stanford's design and content teams.",
          role: {
            text: "Delivering production-quality pages that meet Stanford's rigorous quality and accessibility standards.",
            items: ["Responsive layouts with modern CSS frameworks", "JavaScript-driven interactive components", "WCAG accessibility compliance", "Performance optimization for global users", "Stakeholder collaboration", "Cross-team code reviews"],
          },
        },
        {
          slabel: "Outcomes",
          stitle: "High-quality academic pages at scale",
          stext: "Delivered responsive, accessible pages on time while meeting Stanford's strict quality standards — contributing to a digital presence serving millions worldwide.",
        },
      ],
    },
  },
  {
    slug: "apexanalytix",
    featured: false,
    tag: "tag-green",
    tagText: "jQuery · WordPress · UI",
    name: "Apexanalytix",
    desc: "Interactive UI components and WordPress CMS integration for a supplier risk analytics platform — improving UX and editorial autonomy for a B2B enterprise audience.",
    imgType: "img",
    imgKey: "apex",
    pills: ["HTML", "CSS", "jQuery", "WordPress", "PHP"],
    cs: {
      tag: "B2B Analytics · jQuery · WordPress",
      title: "Apexanalytix Website",
      subtitle: "Interactive UI components and WordPress CMS integration for a supplier risk analytics platform — elevating UX and editorial independence for an enterprise B2B audience.",
      meta: [
        { lbl: "Role", val: "Front-End Developer" },
        { lbl: "Client", val: "Apexanalytix via Clear Digital" },
        { lbl: "Stack", val: "HTML, CSS, jQuery, WordPress" },
        { lbl: "Type", val: "Development & Maintenance" },
      ],
      sections: [
        {
          slabel: "The Challenge",
          stitle: "B2B platform needing better UX and editorial control",
          stext: "Apexanalytix serves enterprise clients managing supplier risk. The site needed interactive components and a CMS setup that gave marketing editorial autonomy without engineering bottlenecks.",
          callout: "<strong>Key constraint:</strong> Improve UX without disrupting the WordPress CMS workflow the marketing team relies on daily.",
          boxes: [
            { cls: "b1", title: "🏢 Business Challenge", text: "Marketing needed editorial independence from engineering for routine updates while the site needed more interactive, engaging UI." },
            { cls: "b2", title: "👤 User Challenge", text: "Enterprise decision-makers expect polished, professional UI — rough edges undermine trust in the analytics product itself." },
          ],
        },
        {
          slabel: "My Role",
          stitle: "UI components, CMS integration, performance",
          stext: "Developed interactive UI components and optimized WordPress integration working closely with PMs and backend team.",
          role: {
            text: "Translating design concepts into HTML/CSS/jQuery components while keeping the CMS stable and editor-friendly.",
            items: ["Interactive jQuery components for data storytelling", "Responsive layouts matching brand guidelines", "WordPress theme development & customization", "REST API integration for dynamic content", "Performance optimization", "PM and backend team collaboration"],
          },
        },
        {
          slabel: "Outcomes",
          stitle: "Better experience, measurable gains",
          stext: "Performance improved through targeted optimizations. CMS integration gave marketing greater editorial independence — reducing reliance on engineering for routine updates.",
        },
      ],
    },
  },
  {
    slug: "virtana",
    featured: false,
    tag: "tag-purple",
    tagText: "PHP · HTML · CSS · CMS",
    name: "Virtana Website",
    desc: "Responsive dashboards and marketing pages for an IT infrastructure intelligence platform — improving usability, load performance, and visual polish.",
    imgType: "gradient",
    imgGrad: "linear-gradient(90deg, #031C60 23%, #FF00E3 100%)",
    pills: ["HTML", "CSS", "PHP", "CMS Integrations", "Performance"],
    cs: {
      tag: "IT Infrastructure · PHP · Dashboards",
      title: "Virtana Website",
      subtitle: "Responsive dashboards and marketing pages for an IT infrastructure intelligence platform — improving usability, load performance, and visual consistency.",
      meta: [
        { lbl: "Role", val: "Front-End Developer" },
        { lbl: "Client", val: "Virtana via Clear Digital" },
        { lbl: "Stack", val: "HTML, CSS, PHP, CMS" },
        { lbl: "Type", val: "Development & Maintenance" },
      ],
      sections: [
        {
          slabel: "The Challenge",
          stitle: "Performance and usability for an IT audience",
          stext: "Virtana serves IT professionals managing hybrid infrastructure. Their marketing site needed responsive dashboards and landing pages that communicated complex product value clearly.",
          callout: "<strong>Focus:</strong> Load performance and visual clarity for technical decision-makers evaluating enterprise software.",
          boxes: [
            { cls: "b1", title: "🏢 Business Challenge", text: "Communicating complex infrastructure analytics capabilities to IT buyers through marketing pages that convert." },
            { cls: "b2", title: "👤 User Challenge", text: "IT professionals need clarity and speed — they don't tolerate slow, cluttered marketing pages." },
          ],
        },
        {
          slabel: "My Role",
          stitle: "Responsive dashboards and optimized marketing pages",
          stext: "Built responsive dashboards and marketing pages using HTML, CSS, PHP, and CMS integrations.",
          role: {
            text: "Focused on usability and load performance throughout the frontend build.",
            items: ["Responsive dashboard UI components", "Marketing landing pages with CMS integration", "PHP backend template integration", "Image optimization and load performance", "Cross-browser testing", "Design-to-code translation"],
          },
        },
        {
          slabel: "Outcomes",
          stitle: "Improved usability and load performance",
          stext: "Load performance improved through targeted optimization. Responsive layouts delivered a consistent experience across devices for Virtana's technical audience.",
        },
      ],
    },
  },
  {
    slug: "modeln",
    featured: false,
    tag: "tag-blue",
    tagText: "React · TypeScript · Modern Web",
    name: "Model N",
    desc: "Modern frontend development for a revenue management platform — building performant, scalable UI for enterprise clients in life sciences and high-tech industries.",
    imgType: "gradient",
    imgGrad: "linear-gradient(90deg, #0069AA 0%, #00A5D9 100%)",
    pills: ["React.js", "TypeScript", "CSS", "REST APIs", "Agile"],
    cs: {
      tag: "Revenue Management · React · Enterprise",
      title: "Model N Website",
      subtitle: "Modern frontend development for a leading revenue management platform serving enterprise clients in life sciences and high-tech — building performant, scalable UI.",
      meta: [
        { lbl: "Role", val: "Front-End Developer" },
        { lbl: "Client", val: "Model N via Clear Digital" },
        { lbl: "Stack", val: "React.js, TypeScript, CSS" },
        { lbl: "Type", val: "Frontend Development" },
      ],
      sections: [
        {
          slabel: "The Challenge",
          stitle: "Enterprise-grade frontend for revenue management",
          stext: "Model N serves enterprise clients in regulated industries — life sciences and high-tech — where their web presence must convey precision, compliance, and credibility.",
          callout: "<strong>Requirement:</strong> Enterprise-level polish and performance for a B2B audience with high expectations.",
          boxes: [
            { cls: "b1", title: "🏢 Business Challenge", text: "Communicating complex revenue management capabilities through a site that builds confidence with enterprise buyers." },
            { cls: "b2", title: "👤 User Challenge", text: "C-suite and procurement buyers evaluating revenue tools need authoritative, fast, and well-structured information." },
          ],
        },
        {
          slabel: "My Role",
          stitle: "Modern, scalable UI components",
          stext: "Built React components and modern frontend architecture for Model N's web presence.",
          role: {
            text: "Delivering enterprise-quality UI that met Model N's performance and brand standards.",
            items: ["React.js and TypeScript component architecture", "Responsive layouts for enterprise audiences", "REST API integrations", "Performance optimization", "Agile sprint delivery", "Design-to-code translation"],
          },
        },
        {
          slabel: "Outcomes",
          stitle: "Polished, performant enterprise web presence",
          stext: "Delivered modern frontend experiences that aligned with Model N's brand positioning in the enterprise revenue management space.",
        },
      ],
    },
  },
  {
    slug: "brooklyn",
    featured: false,
    tag: "tag-navy",
    tagText: "jQuery · HTML5 · CSS3 · PHP",
    name: "Brooklyn College",
    desc: "Enterprise-grade web interfaces for a major CUNY campus — ensuring scalable performance, accessibility, and seamless content updates for a diverse student body.",
    imgType: "gradient",
    imgGrad: "linear-gradient(135deg, #8B0000 0%, #CC1A1A 60%, #FF6900 100%)",
    pills: ["jQuery", "HTML5", "CSS3", "PHP", "Accessibility"],
    cs: {
      tag: "Higher Education · jQuery · Enterprise",
      title: "Brooklyn College Website",
      subtitle: "Enterprise-grade web interfaces for Brooklyn College — ensuring scalable performance, accessibility, and seamless content updates for a large, diverse campus community.",
      meta: [
        { lbl: "Role", val: "Front-End Developer" },
        { lbl: "Client", val: "Brooklyn College via Clear Digital" },
        { lbl: "Stack", val: "jQuery, HTML5, CSS3, PHP" },
        { lbl: "Type", val: "Development & Maintenance" },
      ],
      sections: [
        {
          slabel: "The Challenge",
          stitle: "Scalable, accessible interfaces for a major campus",
          stext: "Brooklyn College serves a large, diverse student body and faculty — their web interfaces need to be accessible, performant, and maintainable at campus scale.",
          callout: "<strong>Priority:</strong> Accessibility and cross-browser compatibility for a diverse, global student population.",
          boxes: [
            { cls: "b1", title: "🏢 Business Challenge", text: "Enterprise-scale web interfaces requiring consistent performance, cross-team collaboration, and long-term maintainability." },
            { cls: "b2", title: "👤 User Challenge", text: "Students and faculty from diverse backgrounds need fast, accessible, and intuitive web experiences to support their academic lives." },
          ],
        },
        {
          slabel: "My Role",
          stitle: "Enterprise interfaces, speed, and accessibility",
          stext: "Developed and maintained enterprise-grade web interfaces using jQuery, HTML5, CSS3, and PHP.",
          role: {
            text: "Collaborating with cross-functional teams to implement features and improve UI/UX and site performance.",
            items: ["Enterprise-grade jQuery UI components", "HTML5/CSS3 responsive layouts", "PHP-driven template maintenance", "Accessibility improvements (WCAG)", "Cross-browser compatibility", "Site speed and performance enhancements"],
          },
        },
        {
          slabel: "Outcomes",
          stitle: "Faster, more accessible campus web experience",
          stext: "Delivered new features and improvements that enhanced site speed, accessibility, and usability — supporting Brooklyn College's diverse campus community.",
        },
      ],
    },
  },
];

// French version — same structure, translated content
const projectsFr: Project[] = projectsEn.map((p) => {
  const frMap: Record<string, Partial<Project>> = {
    surescripts: {
      name: "Site Surescripts",
      desc: "Développement complet pour le plus grand réseau d'information de santé aux États-Unis — interface réactive et performante au service des pharmacies, prestataires et patients.",
      tagText: "React · Next.js · CMS",
      cs: {
        tag: "Technologie de santé · React · CMS",
        title: "Site Surescripts",
        subtitle: "Développement complet pour un réseau de technologie de santé de premier plan. Construction d'une interface réactive et performante servant des millions d'utilisateurs.",
        meta: [{ lbl: "Rôle", val: "Développeur Front-End" }, { lbl: "Client", val: "Surescripts via Clear Digital" }, { lbl: "Stack", val: "React, JS ES6+, CSS, CMS" }, { lbl: "Type", val: "Développement continu" }],
        sections: [
          { slabel: "Le défi", stitle: "Une plateforme de santé nécessitant fiabilité à grande échelle", stext: "Surescripts connecte l'ensemble du système de santé américain. Leur site devait inspirer confiance, gérer une architecture de contenu complexe et rester performant.", callout: "<strong>Exigence principale :</strong> Chaque mise à jour doit respecter des normes strictes de QA, d'accessibilité et de performance avant déploiement.", boxes: [{ cls: "b1", title: "🏢 Défi commercial", text: "L'architecture d'information complexe doit paraître simple sans perdre en profondeur — dans un secteur réglementé à enjeux élevés." }, { cls: "b2", title: "👤 Défi utilisateur", text: "Les professionnels de santé ont besoin d'informations rapides et fiables. Tout friction dans la navigation affecte directement la confiance." }] },
          { slabel: "Mon rôle", stitle: "Développement complet en collaboration directe", stext: "Travaillé directement avec les parties prenantes de Surescripts pour recueillir les besoins et implémenter les mises à jour d'interface.", role: { text: "Traduction des exigences en composants React prêts pour la production.", items: ["Architecture de composants React responsive", "Intégration des flux CMS", "Connexion aux APIs REST", "Profilage de performance", "Tests multi-navigateurs", "Livraison en sprints Agile"] } },
          { slabel: "Résultats", stitle: "Livraison fiable, performance améliorée", stext: "Les optimisations de performance ont amélioré les temps de chargement et les scores Lighthouse." },
        ],
      },
    },
    hoover: {
      name: "Hoover Institution",
      desc: "Ingénierie frontend pour le principal centre de recherche politique de Stanford — nouveaux modules, compatibilité multi-navigateurs et stabilité à long terme.",
      tagText: "JS · PHP · HTML5",
      cs: {
        tag: "Institution de recherche · JavaScript · PHP",
        title: "Site Hoover Institution",
        subtitle: "Ingénierie frontend pour la Hoover Institution de Stanford — nouveaux modules, stabilité à long terme et fiabilité multi-navigateurs pour un public mondial.",
        meta: [{ lbl: "Rôle", val: "Développeur Front-End" }, { lbl: "Client", val: "Hoover Institution via Clear Digital" }, { lbl: "Stack", val: "HTML5, CSS3, JavaScript, PHP" }, { lbl: "Type", val: "Développement & Maintenance" }],
        sections: [
          { slabel: "Le défi", stitle: "Maintenir la présence numérique d'une institution prestigieuse", stext: "La Hoover Institution requiert une présence web à la hauteur de son statut — faisant autorité, accessible, et méticuleusement entretenue.", callout: "<strong>Contrainte clé :</strong> Les nouveaux modules doivent s'intégrer proprement sans perturber les flux de travail éditoriaux.", boxes: [{ cls: "b1", title: "🏢 Défi commercial", text: "Nouvelles fonctionnalités et flexibilité éditoriale sans créer de dette technique." }, { cls: "b2", title: "👤 Défi utilisateur", text: "Les chercheurs et lecteurs politiques attendent un contenu rapide et navigable." }] },
          { slabel: "Mon rôle", stitle: "Nouveaux modules, fiabilité multi-navigateurs, stabilité", stext: "Implémentation de nouveaux modules de contenu, maintenance des pages existantes et résolution des problèmes techniques.", role: { text: "Construction et maintenance de modules frontend équilibrant nouvelles fonctionnalités et stabilité.", items: ["Nouveaux modules de contenu HTML5/CSS3/JS", "Intégration de templates PHP", "Tests multi-navigateurs", "Résolution de bugs", "Support des mises à jour éditoriales", "Stabilité du code à long terme"] } },
          { slabel: "Résultats", stitle: "Plateforme stable pour les publics de recherche mondiaux", stext: "Nouvelles fonctionnalités livrées dans les délais, zéro perturbation des flux éditoriaux, et amélioration de la compatibilité multi-navigateurs." },
        ],
      },
    },
    stanford: {
      name: "Université Stanford",
      desc: "Pages académiques à fort trafic pour la Revue de technologie émergente de Stanford — mises en page accessibles et responsive en collaboration étroite avec les parties prenantes.",
      tagText: "JS · CSS moderne · Accessibilité",
      cs: {
        tag: "Enseignement supérieur · JavaScript · Accessibilité",
        title: "Site Université Stanford",
        subtitle: "Développement frontend et mises à jour pour les pages académiques à fort trafic de Stanford — livraison de mises en page accessibles et responsive.",
        meta: [{ lbl: "Rôle", val: "Développeur Front-End" }, { lbl: "Client", val: "Stanford University via Clear Digital" }, { lbl: "Stack", val: "JavaScript, Frameworks CSS modernes" }, { lbl: "Type", val: "Développement frontend" }],
        sections: [
          { slabel: "Le défi", stitle: "Excellence académique et performance web", stext: "Les propriétés web de Stanford servent étudiants, professeurs, chercheurs et le public mondial — exigeant des normes strictes d'accessibilité.", callout: "<strong>Norme :</strong> La conformité WCAG 2.1 AA est non négociable pour les sites universitaires publics.", boxes: [{ cls: "b1", title: "🏢 Défi commercial", text: "Plusieurs équipes de parties prenantes, exigences de contenu complexes et public mondial." }, { cls: "b2", title: "👤 Défi utilisateur", text: "Étudiants et chercheurs du monde entier attendent une présence numérique accessible." }] },
          { slabel: "Mon rôle", stitle: "Mises en page accessibles et responsive", stext: "Direction du développement frontend en étroite collaboration avec les équipes de design et de contenu de Stanford.", role: { text: "Livraison de pages de qualité production répondant aux normes rigoureuses de Stanford.", items: ["Mises en page responsive", "Composants interactifs JavaScript", "Conformité WCAG", "Optimisation des performances", "Collaboration avec les parties prenantes", "Révisions de code"] } },
          { slabel: "Résultats", stitle: "Pages académiques de haute qualité à grande échelle", stext: "Pages accessibles et responsive livrées dans les délais tout en répondant aux normes strictes de Stanford." },
        ],
      },
    },
    apexanalytix: {
      name: "Apexanalytix",
      desc: "Composants UI interactifs et intégration CMS WordPress pour une plateforme d'analyse des risques fournisseurs — amélioration de l'UX et de l'autonomie éditoriale.",
      tagText: "jQuery · WordPress · Interface",
      cs: {
        tag: "Analytique B2B · jQuery · WordPress",
        title: "Site Apexanalytix",
        subtitle: "Composants UI interactifs et intégration CMS WordPress pour une plateforme d'analyse des risques fournisseurs — élévation de l'UX et de l'indépendance éditoriale.",
        meta: [{ lbl: "Rôle", val: "Développeur Front-End" }, { lbl: "Client", val: "Apexanalytix via Clear Digital" }, { lbl: "Stack", val: "HTML, CSS, jQuery, WordPress" }, { lbl: "Type", val: "Développement & Maintenance" }],
        sections: [
          { slabel: "Le défi", stitle: "Plateforme B2B nécessitant meilleure UX et contrôle éditorial", stext: "Apexanalytix sert des clients entreprise gérant les risques fournisseurs. Le site nécessitait des composants interactifs et une configuration CMS.", callout: "<strong>Contrainte clé :</strong> Améliorer l'UX sans perturber le flux CMS WordPress.", boxes: [{ cls: "b1", title: "🏢 Défi commercial", text: "Le marketing avait besoin d'indépendance éditoriale pour les mises à jour courantes." }, { cls: "b2", title: "👤 Défi utilisateur", text: "Les décideurs d'entreprise attendent une UI soignée et professionnelle." }] },
          { slabel: "Mon rôle", stitle: "Composants UI, intégration CMS, performance", stext: "Développement de composants UI interactifs et optimisation de l'intégration WordPress.", role: { text: "Traduction des concepts de design en composants HTML/CSS/jQuery.", items: ["Composants jQuery interactifs", "Mises en page responsive", "Développement de thème WordPress", "Intégration API REST", "Optimisation des performances", "Collaboration avec PMs et équipe backend"] } },
          { slabel: "Résultats", stitle: "Meilleure expérience, gains mesurables", stext: "Performance améliorée grâce à des optimisations ciblées. L'intégration CMS a donné au marketing une plus grande indépendance éditoriale." },
        ],
      },
    },
    virtana: {
      name: "Site Virtana",
      desc: "Tableaux de bord responsive et pages marketing pour une plateforme d'intelligence d'infrastructure IT — amélioration de l'utilisabilité et des performances.",
      tagText: "PHP · HTML · CSS · CMS",
      cs: {
        tag: "Infrastructure IT · PHP · Tableaux de bord",
        title: "Site Virtana",
        subtitle: "Tableaux de bord responsive et pages marketing pour une plateforme d'intelligence d'infrastructure IT.",
        meta: [{ lbl: "Rôle", val: "Développeur Front-End" }, { lbl: "Client", val: "Virtana via Clear Digital" }, { lbl: "Stack", val: "HTML, CSS, PHP, CMS" }, { lbl: "Type", val: "Développement & Maintenance" }],
        sections: [
          { slabel: "Le défi", stitle: "Performance et utilisabilité pour un public IT", stext: "Virtana sert des professionnels IT gérant des infrastructures hybrides. Leur site marketing nécessitait des tableaux de bord responsive.", callout: "<strong>Priorité :</strong> Performance de chargement et clarté visuelle pour les décideurs techniques.", boxes: [{ cls: "b1", title: "🏢 Défi commercial", text: "Communiquer des capacités analytiques d'infrastructure complexes aux acheteurs IT." }, { cls: "b2", title: "👤 Défi utilisateur", text: "Les professionnels IT ont besoin de clarté et de rapidité." }] },
          { slabel: "Mon rôle", stitle: "Tableaux de bord responsive et pages marketing optimisées", stext: "Construction de tableaux de bord responsive et de pages marketing en HTML, CSS, PHP et intégrations CMS.", role: { text: "Centré sur l'utilisabilité et les performances de chargement.", items: ["Composants UI de tableaux de bord responsive", "Pages d'atterrissage marketing avec CMS", "Intégration de templates PHP backend", "Optimisation des images et performances", "Tests multi-navigateurs", "Traduction design-en-code"] } },
          { slabel: "Résultats", stitle: "Utilisabilité améliorée et gains de performance", stext: "Performance de chargement améliorée grâce à un travail d'optimisation ciblé." },
        ],
      },
    },
    modeln: {
      name: "Model N",
      desc: "Développement frontend moderne pour une plateforme de gestion des revenus — construction d'une UI performante et évolutive pour des clients entreprise.",
      tagText: "React · TypeScript · Web moderne",
      cs: {
        tag: "Gestion des revenus · React · Entreprise",
        title: "Site Model N",
        subtitle: "Développement frontend moderne pour une plateforme de gestion des revenus de premier plan servant des clients entreprise.",
        meta: [{ lbl: "Rôle", val: "Développeur Front-End" }, { lbl: "Client", val: "Model N via Clear Digital" }, { lbl: "Stack", val: "React.js, TypeScript, CSS" }, { lbl: "Type", val: "Développement frontend" }],
        sections: [
          { slabel: "Le défi", stitle: "Frontend de qualité entreprise pour la gestion des revenus", stext: "Model N sert des clients entreprise dans des industries réglementées où leur présence web doit dégager précision, conformité et crédibilité.", callout: "<strong>Exigence :</strong> Finition et performance de niveau entreprise pour un public B2B.", boxes: [{ cls: "b1", title: "🏢 Défi commercial", text: "Communiquer des capacités complexes de gestion des revenus via un site qui inspire confiance." }, { cls: "b2", title: "👤 Défi utilisateur", text: "Les acheteurs de niveau C ont besoin d'informations autorité, rapides et bien structurées." }] },
          { slabel: "Mon rôle", stitle: "Composants UI modernes et évolutifs", stext: "Construction de composants React et d'une architecture frontend moderne pour Model N.", role: { text: "Livraison d'une UI de qualité entreprise.", items: ["Architecture React.js et TypeScript", "Mises en page responsive", "Intégrations d'APIs REST", "Optimisation des performances", "Livraison en sprints Agile", "Traduction design-en-code"] } },
          { slabel: "Résultats", stitle: "Présence web entreprise soignée et performante", stext: "Livraison d'expériences frontend modernes alignées avec le positionnement de marque de Model N." },
        ],
      },
    },
    brooklyn: {
      name: "Brooklyn College",
      desc: "Interfaces web de qualité entreprise pour un important campus CUNY — performances évolutives, accessibilité et mises à jour de contenu fluides.",
      tagText: "jQuery · HTML5 · CSS3 · PHP",
      cs: {
        tag: "Enseignement supérieur · jQuery · Entreprise",
        title: "Site Brooklyn College",
        subtitle: "Interfaces web de qualité entreprise pour Brooklyn College — performances évolutives, accessibilité et mises à jour de contenu fluides.",
        meta: [{ lbl: "Rôle", val: "Développeur Front-End" }, { lbl: "Client", val: "Brooklyn College via Clear Digital" }, { lbl: "Stack", val: "jQuery, HTML5, CSS3, PHP" }, { lbl: "Type", val: "Développement & Maintenance" }],
        sections: [
          { slabel: "Le défi", stitle: "Interfaces évolutives et accessibles pour un grand campus", stext: "Brooklyn College sert un grand corps étudiant et professoral diversifié — leurs interfaces web doivent être accessibles et performantes.", callout: "<strong>Priorité :</strong> Accessibilité et compatibilité multi-navigateurs pour une population étudiante diverse.", boxes: [{ cls: "b1", title: "🏢 Défi commercial", text: "Interfaces web à l'échelle entreprise nécessitant performance cohérente et maintainabilité." }, { cls: "b2", title: "👤 Défi utilisateur", text: "Étudiants et professeurs d'horizons divers ont besoin d'expériences web rapides et accessibles." }] },
          { slabel: "Mon rôle", stitle: "Interfaces entreprise, rapidité et accessibilité", stext: "Développement et maintenance d'interfaces web de qualité entreprise en jQuery, HTML5, CSS3 et PHP.", role: { text: "Collaboration avec des équipes pluridisciplinaires pour implémenter des fonctionnalités.", items: ["Composants UI jQuery de qualité entreprise", "Mises en page responsive HTML5/CSS3", "Maintenance de templates PHP", "Améliorations de l'accessibilité (WCAG)", "Compatibilité multi-navigateurs", "Améliorations des performances"] } },
          { slabel: "Résultats", stitle: "Expérience web campus plus rapide et accessible", stext: "Nouvelles fonctionnalités et améliorations livrées qui ont renforcé la vitesse, l'accessibilité et l'utilisabilité." },
        ],
      },
    },
  };

  const fr = frMap[p.slug];
  if (!fr) return p;
  return { ...p, ...fr } as Project;
});

export const projectsData: Record<Lang, Project[]> = {
  en: projectsEn,
  fr: projectsFr,
};
