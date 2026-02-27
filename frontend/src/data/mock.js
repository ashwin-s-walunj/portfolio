export const portfolioData = {
  personal: {
    name: "Ashwin Shahaji Walunj",
    title: "Software Engineer",
    headline: "Building scalable platforms with 2+ years of full-stack expertise",
    bio: "Software Engineer and M.Sc. candidate with 2+ years of full-stack experience building high-availability, scalable platforms. Passionate about end-to-end ownership, from translating complex financial regulations into scalable microservices to shipping responsive UIs. Thrives in fast-paced environments, driving rapid deployment and high-quality, production-ready code.",
    email: "ashwinwalunj@gmail.com",
    phone: "+49 155 1024 4310",
    location: "Berlin, Germany",
    linkedin: "https://linkedin.com/in/ashwin-walunj",
    github: "https://github.com/ashwinwalunj",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  
  experience: [
    {
      id: 1,
      company: "TechVerito",
      role: "Software Developer",
      location: "India",
      period: "Jul 2023 - Aug 2025",
      startDate: "2023-07",
      endDate: "2025-08",
      achievements: [
        "Architected event-driven microservices using Kafka, ensuring high availability and fault tolerance for distributed transactional services",
        "Optimized Kafka message queue performance to handle high-volume, real-time data streams, ensuring low-latency processing",
        "Built and operated critical transactional systems with High Availability using Prometheus/Grafana monitoring",
        "Led full-stack development of high-priority web applications using Next.js and React, translating business needs into responsive features",
        "Implemented Test-Driven Development (TDD) and defensive coding strategies, creating robust test scenarios for high-volume data streams"
      ],
      projects: [
        {
          name: "Vinyl Equity Platform",
          period: "Jul 2024 - Aug 2025",
          description: "Financial equity platform handling sensitive user data",
          highlights: [
            "Accelerated iteration cycles by architecting AWS infrastructure using Terraform and Docker CI/CD pipelines, reducing deployment time by 60%",
            "Assumed end-to-end ownership, translating complex financial regulations into scalable, production-grade TypeScript microservices"
          ]
        },
        {
          name: "Vendor Management System",
          period: "Sep 2023 - Jul 2024",
          description: "Enterprise vendor management platform",
          highlights: [
            "Architected robust microservices using Dependency Injection and Repository Pattern for maintainability and high availability",
            "Optimized backend data retrieval logic for high-volume vendor data, ensuring low-latency responses",
            "Spearheaded frontend architecture using ReactJS, creating data-rich dashboards with dynamic reporting"
          ]
        }
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "M.Sc. Software Engineering",
      institution: "University of Europe for Applied Sciences",
      location: "Potsdam, Germany",
      period: "Sep 2025 - Aug 2026",
      status: "Expected"
    },
    {
      id: 2,
      degree: "B.E. Computer Engineering",
      institution: "Pimpri Chinchwad College of Engineering",
      location: "Pune, India",
      period: "Jun 2018 - Apr 2022",
      grade: "9.32/10 | 1.3 DE Scale"
    }
  ],
  
  skills: {
    frontend: ["React.js", "Next.js", "Context API", "HTML5", "CSS3", "MUI"],
    backend: ["Python", "Node.js", "TypeScript", "Java", "Spring Boot", "Microservices", "REST APIs"],
    databases: ["PostgreSQL", "MySQL", "Redis", "DynamoDB"],
    cloud: ["AWS", "Kubernetes", "Docker", "Terraform", "Terragrunt", "Lambda", "Route53", "CloudFront"],
    testing: ["TDD", "JUnit", "Mockito", "Selenium", "Unit Testing", "Integration Testing"],
    tools: ["Git", "Kafka", "GraphQL", "Grafana", "Prometheus", "Sentry"],
    concepts: ["Event-Driven Architecture", "Distributed Systems", "CI/CD", "System Design", "Microservices", "OOP"]
  },
  
  recommendations: [
    {
      id: 1,
      name: "Ankit Wadhwana",
      title: "Technical Lead @ Vinyl Equity",
      relationship: "Direct Manager",
      date: "September 24, 2025",
      text: "I had the pleasure of working with Ashwin for over a year as his project lead at Techverito, and he consistently demonstrated exceptional performance that set him apart. He not only met every deadline but often delivered ahead of schedule while maintaining outstanding quality standards. Ashwin's ability to adapt quickly, embrace continuous learning, and maintain meticulous attention to detail made him an invaluable team member. What truly impressed me was his openness to feedback and remarkable ability to immediately implement suggestions into his workflow, making collaboration both productive and enjoyable. Any organization seeking a reliable, growth-oriented professional would greatly benefit from Ashwin's expertise and work ethic."
    },
    {
      id: 2,
      name: "Karthik Bokkesam",
      title: "Technical Lead at Vinyl Equity",
      relationship: "Colleague",
      date: "September 18, 2025",
      text: "I had the pleasure of working with Ashwin for over a year, during which he consistently demonstrated professionalism, diligence, and punctuality. He brings a strong work ethic, pays exceptional attention to detail, and is a quick learner. Given that our product operates in the financial domain, he quickly picked up the necessary domain knowledge and contributed effectively across multiple verticals, showcasing great adaptability. Ashwin is also open to feedback and accepts criticism with maturity, using it as an opportunity to improve. What I enjoyed most about working with him was the positivity and can-do attitude he brought to the team every day. I am confident that Ashwin would be an excellent fit for any team seeking a talented, self-motivated, hardworking, and positive individual."
    }
  ],
  
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Delivered", value: "10+" },
    { label: "Technologies", value: "25+" },
    { label: "Deployment Time Reduced", value: "60%" }
  ]
};
