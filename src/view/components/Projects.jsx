import { PROJECTS } from "../../app/constants";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg: justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img 
                src={project.image} 
                width={300} 
                height={300} 
                alt={project.title} 
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="flex flex-col w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-2 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <div className="mb-2" key={index}>
                  <span  className="bg-neutral-900 rounded p-1  text-purple-800 font-medium text-sm mb-2">
                    • {tech}
                  </span>
                </div>
                
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      
    </div>
  );
}