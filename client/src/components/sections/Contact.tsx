import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUn1CIeAD5AJxR1os4K8aaQTxYnMMpC6Jhj2gqtXIJBGT5KEH1TCp-B4wnDeHc_ROj/exec";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

 async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // 1. Using FormData is more reliable for Google Apps Script
      const formData = new FormData();
      formData.append("Name", values.name);
      formData.append("Email", values.email);
      formData.append("Phone Number", values.phone);
      formData.append("Company", values.company || "");
      formData.append("Message", values.message);

      // 2. Perform the request
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Keeps it simple and avoids browser blocks
        body: formData,  // Sending FormData directly
      });

      // 3. Feedback
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });

      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-accent uppercase mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Let’s Start a Conversation</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to unlock value and drive growth together?<br />
            Contact us today to discuss how we can support your business goals
          </p>
        </div>

        <div className="bg-secondary/30 p-8 md:p-12 rounded-sm shadow-sm border border-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" className="bg-white rounded-none h-12 border-gray-200 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Official mail address" className="bg-white rounded-none h-12 border-gray-200 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your mobile number" className="bg-white rounded-none h-12 border-gray-200 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-medium">Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your organization name" className="bg-white rounded-none h-12 border-gray-200 focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-medium">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us how we can help you..." 
                        className="bg-white rounded-none min-h-[150px] border-gray-200 focus-visible:ring-primary resize-none" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none w-full md:w-auto px-10 h-12 text-base">
                  Send Message
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
