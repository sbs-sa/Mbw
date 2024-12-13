"use client";

import { LocateIcon, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export const ContactForm: FC = () => {
  const form = useForm();
  const contact = useTranslations("Contact Form");

  return (
    <div className="w-full px-10 md:px-20 py-10">
      <h1 className="text-4xl font-bold uppercase">Get In touch</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 lg:mt-20 px-0 lg:px-32">
        <div>
          <p>
            Thank you for reaching out to Reliution! Please fill the form right.
            Our team will contact you shortly.
          </p>
          <div className="flex flex-col p-4 col-span-2">
            <div className="space-y-5 mt-10">
              <Link
                href="mailto:test@gmail.com"
                className="flex items-center space-x-2"
              >
                <Mail className="h-10 w-10 bg-green-400 text-black p-2 rounded-md" />
                <p>test@gmail.com</p>
              </Link>
              <Link
                href="tel:+919876543210"
                className="flex items-center space-x-2"
              >
                <Phone className="h-10 w-10 bg-green-400 text-black p-2 rounded-md" />
                <p>+919876543210</p>
              </Link>
              <Link
                href="mailto:test@gmail.com"
                className="flex items-center space-x-2"
              >
                <LocateIcon className="h-10 w-10 bg-green-400 text-black p-2 rounded-md" />
                <p>Address</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-10">
          <h1 className="text-4xl font-bold uppercase">Send us a message</h1>
          <Form {...form}>
            <form className="space-y-5">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-end justify-end w-full">
                <Button size="lg">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
