import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MasterclassFormSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        toast({
            title: "Application Received",
            description: "We will review your application and get back to you shortly.",
        });
    };

    return (
        <section className="section-padding bg-secondary/5" id="apply">
            <div className="container-luxury max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="section-subheader block mb-4">Apply Now</span>
                    <h2 className="section-header mb-6">Secure Your Seat</h2>
                    <p className="body-elegant max-w-2xl mx-auto">
                        This masterclass is designed for serious professionals ready to elevate their career.
                        Please fill out the form below to apply for the next cohort.
                    </p>
                </motion.div>

                {!isSubmitted ? (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-8 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-border/50"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">First Name</label>
                                <Input required placeholder="Jane" className="bg-secondary/5 border-border/50 focus:border-champagne" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Last Name</label>
                                <Input required placeholder="Doe" className="bg-secondary/5 border-border/50 focus:border-champagne" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                                <Input required type="email" placeholder="jane@example.com" className="bg-secondary/5 border-border/50 focus:border-champagne" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Phone</label>
                                <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-secondary/5 border-border/50 focus:border-champagne" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Experience Level</label>
                            <Select>
                                <SelectTrigger className="bg-secondary/5 border-border/50 focus:border-champagne">
                                    <SelectValue placeholder="Select your experience level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                                    <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                                    <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                                    <SelectItem value="expert">Expert (10+ years)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Why do you want to join?</label>
                            <Textarea
                                required
                                placeholder="Tell us about your goals and what you hope to achieve..."
                                className="min-h-[150px] bg-secondary/5 border-border/50 focus:border-champagne resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full btn-gold py-6 text-base"
                        >
                            {isSubmitting ? "Submitting Application..." : "Submit Application"}
                        </Button>
                    </motion.form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16 bg-white rounded-lg border border-border/50"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-champagne/10 flex items-center justify-center">
                            <span className="text-4xl">✨</span>
                        </div>
                        <h3 className="font-display text-3xl text-foreground mb-4">Application Received</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            Thank you for applying. Our team will review your details and contact you within 48 hours with the next steps.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default MasterclassFormSection;
