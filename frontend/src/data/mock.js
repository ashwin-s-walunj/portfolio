export const portfolioData = {
        personal: {
            name: "Ashwin Shahaji Walunj",
            title: "Software Engineer",
            headline: "Building scalable platforms with 2+ years of full-stack expertise",
            bio: "Software Engineer and M.Sc. candidate with 2+ years of full-stack experience building high-availability, scalable platforms. Passionate about end-to-end ownership, from translating complex financial regulations into scalable microservices to shipping responsive UIs. Thrives in fast-paced environments, driving rapid deployment and high-quality, production-ready code.",
            email: "ashwinwalunj@gmail.com",
            phone: "+49 155 1024 4310",
            phoneIndia: "+91 8412889476",
            location: "Berlin, Germany (Open to Re-location)",
            linkedin: "https://linkedin.com/in/ashwin-walunj",
            github: "https://github.com/ashwinwalunj",
            image: "https://customer-assets.emergentagent.com/job_ashwin-showcase/artifacts/svq56oto_Generated%20Image%20September%2018%2C%202025%20-%2010_46AM.png"
        },

        experience: [{
            id: 1,
            company: "TechVerito",
            role: "Software Developer",
            location: "India",
            period: "Jul 2023 - Aug 2025",
            startDate: "2023-07",
            endDate: "2025-08",
            achievements: ["Architected event-driven microservices using Kafka, ensuring high availability and fault tolerance for distributed transactional services", "Optimized Kafka message queue performance to handle high-volume, real-time data streams, ensuring low-latency processing", "Built and operated critical transactional systems with High Availability using Prometheus/Grafana monitoring", "Led full-stack development of high-priority web applications using Next.js and React, translating business needs into responsive features", "Implemented Test-Driven Development (TDD) and defensive coding strategies, creating robust test scenarios for high-volume data streams"],
            projects: [{
                name: "Vinyl Equity Platform",
                period: "Jul 2024 - Aug 2025",
                description: "Financial equity platform handling sensitive user data",
                highlights: ["Accelerated iteration cycles by architecting AWS infrastructure using Terraform and Docker CI/CD pipelines, reducing deployment time by 60%", "Assumed end-to-end ownership, translating complex financial regulations into scalable, production-grade TypeScript microservices"]
            }, {
                name: "Vendor Management System",
                period: "Sep 2023 - Jul 2024",
                description: "Enterprise vendor management platform",
                highlights: ["Architected robust microservices using Dependency Injection and Repository Pattern for maintainability and high availability", "Optimized backend data retrieval logic for high-volume vendor data, ensuring low-latency responses", "Spearheaded frontend architecture using ReactJS, creating data-rich dashboards with dynamic reporting"]
            }]
        }],

        education: [{
            id: 1,
            degree: "M.Sc. Software Engineering",
            institution: "University of Europe for Applied Sciences",
            location: "Potsdam, Germany",
            period: "Sep 2025 - Aug 2026",
            status: "Expected"
        }, {
            id: 2,
            degree: "B.E. Computer Engineering",
            institution: "Pimpri Chinchwad College of Engineering",
            location: "Pune, India",
            period: "Jun 2018 - Apr 2022",
            grade: "9.32/10 | 1.3 DE Scale"
        }],

        skills: {
            frontend: ["React.js", "Next.js", "Context API", "HTML5", "CSS3", "MUI"],
            backend: ["Python", "Node.js", "TypeScript", "Java", "Spring Boot", "Microservices", "REST APIs", "Shell Scripting"],
            databases: ["PostgreSQL", "MySQL", "Redis", "DynamoDB"],
            cloud: ["AWS", "Kubernetes", "Docker", "Terraform", "Terragrunt", "Lambda", "Route53", "CloudFront"],
            testing: ["TDD", "JUnit", "Mockito", "Selenium", "Unit Testing", "Integration Testing"],
            tools: ["Git", "Kafka", "GraphQL", "Grafana", "Prometheus", "Sentry"],
            concepts: ["Event-Driven Architecture", "Distributed Systems", "CI/CD", "System Design", "Microservices", "OOP"],
            ai: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "LangChain", "Hugging face", "Vibe Coding"]
        },

        recommendations: [{
            id: 1,
            name: "Ankit Wadhwana",
            linkedIn:"https://www.linkedin.com/in/awadhwana/",
            title: "Technical Lead @Vinyl Equity",
            relationship: "Direct Manager",
            date: "September 24, 2025",
            text: "I had the pleasure of working with Ashwin for over a year as his project lead at Techverito, and he consistently demonstrated exceptional performance that set him apart. He not only met every deadline but often delivered ahead of schedule while maintaining outstanding quality standards. Ashwin's ability to adapt quickly, embrace continuous learning, and maintain meticulous attention to detail made him an invaluable team member. What truly impressed me was his openness to feedback and remarkable ability to immediately implement suggestions into his workflow, making collaboration both productive and enjoyable. Any organization seeking a reliable, growth-oriented professional would greatly benefit from Ashwin's expertise and work ethic."
        }, {
            id: 2,
            name: "Karthik Bokkesam",
            title: "Technical Lead @Vinyl Equity",
            linkedIn:"https://www.linkedin.com/in/karthik-bokkesam/",
            relationship: "Colleague",
            date: "September 18, 2025",
            text: "I had the pleasure of working with Ashwin for over a year, during which he consistently demonstrated professionalism, diligence, and punctuality. He brings a strong work ethic, pays exceptional attention to detail, and is a quick learner. Given that our product operates in the financial domain, he quickly picked up the necessary domain knowledge and contributed effectively across multiple verticals, showcasing great adaptability. Ashwin is also open to feedback and accepts criticism with maturity, using it as an opportunity to improve. What I enjoyed most about working with him was the positivity and can-do attitude he brought to the team every day. I am confident that Ashwin would be an excellent fit for any team seeking a talented, self-motivated, hardworking, and positive individual."
        }],

        projects: [
            {
                id: 1,
                name: "ASL Fingerspelling Recognition",
                description:
                    "Rapidly prototyped and engineered a multimodal ASL recognition system from scratch, integrating ML models to solve complex analytical challenges.",
                technologies: ["Deep Learning", "Convolutional Neural Network", "Python", "TensorFlow", "OpenCV", "Statistical Analysis"],
                achievements: ["Built CNN-EfficientNet-MediaPipe ensemble model: 98.2% accuracy, +6-9% vs. Traditional models.", "Solved complex analytical challenges in ASL recognition by implementing trust mechanisms to resolve confusable data points, reducing error rates from 35.6% to 8.3%"],
                github:
                    "https://github.com/ashwinwalunj/asl-recognition",
                featured: true
            }
        ],

        languages: [
            {name: "English", proficiency: "Business Level Fluency"},
            {
                name:
                    "Hindi", proficiency: "Native"
            },
            {
                name:
                    "Marathi", proficiency: "Native"
            },
            {
                name: "Germany", proficiency: "Beginner"
            }
        ],

        achievements: [
            {
                id: 1,
                title: "Educational Content Creator",
                description:
                    "Creator of educational Data Structures & Algorithms (DSA) content, simplifying complex technical concepts for a developer community",
                icon:
                    "award"
            },
            {
                id: 2,
                title: "Kafka Masterclass Host",
                description:
                    "Hosted a Kafka Masterclass for 40+ developers, demonstrating deep understanding of distributed messaging systems and data streaming architecture",
                icon:
                    "users"
            }
            ,
            {
                id: 3,
                title: "LeetCode Problem Solver",
                description:
                    "Solved 500+ LeetCode problems, showcasing strong algorithmic thinking and problem-solving skills",
                icon:
                    "code"
            }
        ],

        stats: [{label: "Years Experience", value: "2+"}, {
            label: "Projects Delivered",
            value: "10+"
        }, {label: "Technologies", value: "25+"}, {label: "Deployment Time Reduced", value: "60%"}]
    }
;
