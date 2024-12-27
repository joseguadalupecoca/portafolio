import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Sección de contacto */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>cocachavezjoseguadalupe@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Queretaro, México</span>
                </div>
                <Button asChild variant="outline" className="w-full md:w-auto">
                  <a href="/cv.pdf" download>Descargar CV</a>
                </Button>
              </div>
            </div>

            {/* Sección de redes sociales */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-xl mb-4">Redes Sociales</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/joseguadalupecoca" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:contacto@jgc.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center text-muted-foreground mt-8">
            © 2024 José Guadalupe Coca. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

