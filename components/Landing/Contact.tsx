import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { useToast } from '../ui/use-toast';
import axios from 'axios';

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	service: z.string(),
	message: z.string(),
});

const Contact = () => {
	const [submitting, setSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			service: '',
			message: '',
		},
	});

	const { toast } = useToast();

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setSubmitting(true);
		try {
			const response = await axios.post('/api/contact', { ...values });
			console.log(response);
			if (response.status === 200) {
				form.reset();
				toast({
					title: 'Success',
					description:
						"Contact details submitted, I'll get back to you soon!",
				});
			}
		} catch (e) {
			toast({
				variant: 'destructive',
				title: 'Error',
				description: 'Unable to send contact message, try again later',
			});
		} finally {
			setSubmitting(false);
		}
	}

	return (
        <section id="contact" className="bg-white text-primary">
            <div className="w-full flex flex-col md:flex-col lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-8 lg:mb-12">
                    Let&apos;s Talk
                    <p className="text-base md:text-lg mt-2 text-slate-500">
                        Be it anything, I&apos;m always open to discuss new
                        ideas and projects.
                    </p>
                </h1>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col md:flex-row gap-4"
                    >
                        <div className="flex flex-col md:w-1/2 gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                disabled={submitting}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Name"
                                                className="border-slate-500"
                                                type="text"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                disabled={submitting}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Email"
                                                className="border-slate-500"
                                                type="email"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="service"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            What are you looking for? *
                                        </FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue="Website"
                                            required
                                            disabled={submitting}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full border-slate-500">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Website">
                                                    Website
                                                </SelectItem>
                                                <SelectItem value="Web Application">
                                                    Web Application
                                                </SelectItem>
                                                <SelectItem value="Website Redesign">
                                                    Website Redesign
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col items-end md:w-1/2 gap-4">
                            <FormField
                                control={form.control}
                                name="message"
                                disabled={submitting}
                                render={({ field }) => (
                                    <FormItem className="grid w-full gap-1.5">
                                        <FormLabel>Your Message *</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="What is your project about"
                                                className="h-56 md:max-h-[15.65rem] md:min-h-[15.65rem] border-slate-500"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full md:w-fit">
                                <button
                                    className={`${
                                        submitting
                                            ? "shadow-inner"
                                            : "hover:shadow-none hover:translate-y-1 shadow-[4px_4px_#000000]"
                                    } w-full md:w-fit h-full rounded-lg font-medium text-center border border-primary transition-all bg-secondary px-8 py-4 duration-300 -translate-y-1`}
                                    type="submit"
                                    disabled={submitting}
                                >
                                    {submitting ? "Sending..." : "Just Send"}
                                </button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default Contact;
