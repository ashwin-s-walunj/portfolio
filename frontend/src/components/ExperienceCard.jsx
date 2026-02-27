import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceCard = ({ experience }) => {
  return (
    <Card className="bg-[#151518] border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-2">
              <div className="bg-cyan-500/10 p-2 rounded-lg mt-1">
                <Briefcase className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                <p className="text-cyan-400 font-medium">{experience.company}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 ml-14">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Achievements:</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0">▪</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        {experience.projects && experience.projects.length > 0 && (
          <div className="mt-6 space-y-4">
            <h4 className="text-sm font-semibold text-gray-300">Notable Projects:</h4>
            {experience.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0b]/50 border border-cyan-500/10 rounded-lg p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h5 className="text-white font-semibold">{project.name}</h5>
                  <span className="text-xs text-gray-500">{project.period}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                <ul className="space-y-1.5">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-cyan-500 mt-1 flex-shrink-0">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
