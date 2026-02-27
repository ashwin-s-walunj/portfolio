import React, { useState } from 'react';
import { portfolioData } from '../data/mock';
import Navbar from '../components/Navbar';
import ExperienceCard from '../components/ExperienceCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Cloud,
  TestTube,
  Wrench,
  GraduationCap,
  Quote
} from 'lucide-react';

const Home = () => {
  const { toast } = useToast();
  const [currentRecommendation, setCurrentRecommendation] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const nextRecommendation = () => {
    setCurrentRecommendation((prev) =>
      prev === portfolioData.recommendations.length - 1 ? 0 : prev + 1
    );
  };

  const prevRecommendation = () => {
    setCurrentRecommendation((prev) =>
      prev === 0 ? portfolioData.recommendations.length - 1 : prev - 1
    );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const skillCategories = [
    { title: 'Frontend', icon: <Code2 className="w-5 h-5" />, skills: portfolioData.skills.frontend },
    { title: 'Backend', icon: <Code2 className="w-5 h-5" />, skills: portfolioData.skills.backend },
    { title: 'Databases', icon: <Database className="w-5 h-5" />, skills: portfolioData.skills.databases },
    { title: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" />, skills: portfolioData.skills.cloud },
    { title: 'Testing & QA', icon: <TestTube className="w-5 h-5" />, skills: portfolioData.skills.testing },
    { title: 'Tools & Concepts', icon: <Wrench className="w-5 h-5" />, skills: [...portfolioData.skills.tools, ...portfolioData.skills.concepts] }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              Available for Opportunities
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-medium">
            {portfolioData.personal.title}
          </p>
          
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
            {portfolioData.personal.headline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg glow-effect"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#0f0f11]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start mb-12">
            {/* Profile Picture */}
            <div className="mx-auto md:mx-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src={portfolioData.personal.image}
                  alt={portfolioData.personal.name}
                  className="relative w-full aspect-square object-cover rounded-2xl border-2 border-cyan-500/30"
                />
              </div>
            </div>

            {/* Bio and Contact Info */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                {portfolioData.personal.bio}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-cyan-400 transition-colors">
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-cyan-400 transition-colors">
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {portfolioData.stats.map((stat, idx) => (
              <Card key={idx} className="bg-[#151518] border-cyan-500/20 hover:border-cyan-500/40 transition-all hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.education.map((edu) => (
                <Card key={edu.id} className="bg-[#151518] border-cyan-500/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{edu.location}</span>
                      <span>{edu.period}</span>
                    </div>
                    {edu.grade && (
                      <p className="text-sm text-gray-300 mt-2 font-medium">Grade: {edu.grade}</p>
                    )}
                    {edu.status && (
                      <Badge className="mt-2 bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {edu.status}
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {portfolioData.experience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0f0f11]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <Card key={idx} className="bg-[#151518] border-cyan-500/20 hover:border-cyan-500/40 transition-all hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-cyan-400">{category.icon}</div>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <Badge
                        key={sIdx}
                        className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What People <span className="gradient-text">Say</span>
          </h2>
          
          <div className="relative">
            <Card className="bg-[#151518] border-cyan-500/20">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-cyan-400/30 mb-6" />
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {portfolioData.recommendations[currentRecommendation].text}
                </p>
                
                <div className="border-t border-cyan-500/20 pt-6">
                  <h4 className="text-white font-bold text-lg">
                    {portfolioData.recommendations[currentRecommendation].name}
                  </h4>
                  <p className="text-cyan-400">
                    {portfolioData.recommendations[currentRecommendation].title}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {portfolioData.recommendations[currentRecommendation].date}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={prevRecommendation}
                variant="outline"
                size="icon"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {portfolioData.recommendations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentRecommendation(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentRecommendation
                        ? 'bg-cyan-400 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextRecommendation}
                variant="outline"
                size="icon"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0f0f11]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <Card className="bg-[#151518] border-cyan-500/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-[#0a0a0b] border-cyan-500/30 text-white focus:border-cyan-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-[#0a0a0b] border-cyan-500/30 text-white focus:border-cyan-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-[#0a0a0b] border-cyan-500/30 text-white focus:border-cyan-400"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6 text-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-500/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
