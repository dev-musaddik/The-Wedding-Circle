import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <FloatingNav />
            <main>
                <section className="pt-32 pb-24 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-6xl font-serif mb-6">Get in Touch</h1>
                            <p className="text-xl text-muted-foreground">We'd love to hear about your upcoming celebration.</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-serif mb-2">General Inquiries</h3>
                                    <p className="text-muted-foreground">hello@bespokevisions.com</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif mb-2">Office</h3>
                                    <p className="text-muted-foreground">
                                        123 Luxury Lane<br />
                                        Beverly Hills, CA 90210
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif mb-2">Follow Us</h3>
                                    <div className="flex gap-4 text-muted-foreground">
                                        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                                        <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
                                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                                    </div>
                                </div>
                            </div>

                            <form className="space-y-6 bg-secondary/5 p-8 rounded-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                        <Input id="firstName" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                        <Input id="lastName" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="jane@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Tell us about your event..." className="min-h-[150px]" />
                                </div>
                                <Button className="w-full bg-primary text-white hover:bg-primary/90">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
