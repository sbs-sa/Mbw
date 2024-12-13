"use client";

import {
  LocateIcon,
  Mail,
  PhoneCall,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
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
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactUsPage() {
  const form = useForm();
  const contact = useTranslations("Contact Form");
  return (
    <div className="w-full h-full space-y-10">
      <div className="relative bg-blue-900 bg-opacity-70 h-[60vh] rounded-b-[30%]">
        <Image
          alt="contact-us"
          src="/assets/pages/contact-us/contact-us.jpg"
          width={500}
          height={500}
          className="h-full w-full opacity-80 object-cover rounded-b-[30%]"
        />
        <div className="absolute h-full p-40 space-y-10 flex flex-col items-center justify-center rounded-b-3xl text-white top-0 w-full">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase">
            Contact Us
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-center">
            Have questions or need assistance? Reach out to our friendly support
            team by filling out the form below, <br /> and we’ll get back to you
            as soon as possible.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 p-10">
        <div className="flex items-center justify-center">
          <Card className="w-1/2 text-center">
            <CardHeader className="items-center space-y-5">
              <PhoneCall size={40} />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>+91 91375 33373</CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          <Card className="w-1/2 text-center">
            <CardHeader className="items-center space-y-5">
              <Mail size={40} />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>info@reliution.com</CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <Card className="w-1/2 text-center">
            <CardHeader className="items-center space-y-5">
              <LocateIcon size={40} />
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              601 - Corporate Levels 150 ft. Ring Road, Ayodhya Chowk, Rajkot,
              Gujarat 360006
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-20">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold uppercase">Our Location</h1>
          <iframe
            style={{
              border: 0,
              height: "85%",
              width: "100%",
            }}
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDhYZtzu1Cc0kzS7dN2pLKnBPua6zf-RtY&q=Space+Needle,Seattle+WA"
          ></iframe>
          <div className="mt-5 lg:flex items-center space-x-5 text-white w-full hidden">
            <GithubIcon className="h-14 w-14 bg-blue-900 p-4 rounded-t-3xl rounded-br-3xl" />
            <LinkedinIcon className="h-14 w-14 bg-blue-900 p-4 rounded-t-3xl rounded-br-3xl" />
            <FacebookIcon className="h-14 w-14 bg-blue-900 p-4 rounded-t-3xl rounded-br-3xl" />
            <InstagramIcon className="h-14 w-14 bg-blue-900 p-4 rounded-t-3xl rounded-br-3xl" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase mb-10">
            Send us a message
          </h1>
          <Form {...form}>
            <form className="space-y-5">
              <FormField
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contact("Name")}</FormLabel>
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
                    <FormLabel>{contact("Email")}</FormLabel>
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
                    <FormLabel>{contact("Phone")}</FormLabel>
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
                    <FormLabel>{contact("Company Name")}</FormLabel>
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
                    <FormLabel>{contact("Subject")}</FormLabel>
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
                    <FormLabel>{contact("Message")}</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size="lg" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
