import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, and digital consulting. Our team of experts works closely with you to deliver tailored solutions that meet your specific business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex application could take 3-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is flexible and depends on project requirements. We offer both fixed-price packages for standard projects and hourly rates for ongoing work. After understanding your needs, we provide a detailed quote with transparent pricing and no hidden fees.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! We offer comprehensive support and maintenance packages to ensure your project continues to run smoothly. This includes regular updates, security patches, bug fixes, and technical support. We're here to help your business grow long after launch.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply reach out through our contact form or schedule a free consultation call. We'll discuss your project goals, timeline, and budget, then create a customized proposal outlining how we can bring your vision to life.",
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            <span className="text-black">Frequently Asked </span>
            <span style={{ color: "#240645" }}>Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about our services and how we can help
            your business.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
              className="border-0 bg-gray-50 rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="text-left py-6 px-6 hover:no-underline transition-all duration-300 ease-in-out [&[data-state=open]>div>.chevron]:rotate-180">
                <div className="flex items-center gap-4 w-full">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: "#240645" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-lg font-semibold text-black flex-1 pr-4">{faq.question}</span>
                  <ChevronDown className="chevron h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pl-[88px] text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
