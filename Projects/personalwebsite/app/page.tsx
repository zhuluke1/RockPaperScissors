import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Stripe integration.",
      image: "/modern-ecommerce-interface.png",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "/clean-task-management-dashboard.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with interactive charts and forecasts.",
      image: "/weather-dashboard.png",
      tags: ["Vue.js", "Chart.js", "API Integration", "CSS Grid"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio website showcasing clean design principles.",
      image: "/minimalist-portfolio.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive"],
      link: "#",
    },
  ]

  const testimonials = [
    {
      quote: "Exceptional work quality and attention to detail. Delivered exactly what we needed on time.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
    },
    {
      quote: "Great communication throughout the project. The final result exceeded our expectations.",
      author: "Michael Chen",
      role: "Startup Founder",
    },
    {
      quote: "Professional, reliable, and creative. Would definitely work together again.",
      author: "Emily Rodriguez",
      role: "Design Director",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-foreground">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Hi, I'm <span className="text-primary">Alex Johnson</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            A passionate full-stack developer creating beautiful, functional web experiences that solve real-world
            problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating modern, responsive
                applications using the latest technologies. I'm passionate about clean code, user experience, and
                solving complex problems.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or enjoying the outdoors with my camera.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/professional-developer-portrait.png"
                alt="Alex Johnson - Full Stack Developer"
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group bg-transparent">
                      View Project
                      <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take my word for it - here's what my clients have to say about working with me.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
          <div className="space-y-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <p className="text-sm text-muted-foreground">
              Or email me directly at{" "}
              <a href="mailto:alex@example.com" className="text-primary hover:underline">
                alex@example.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Alex Johnson. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
