import { Linkedin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:praptisaxena009@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  praptisaxena009@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+918273672676"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  8273672676
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/prapti-saxena-028b20268/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
