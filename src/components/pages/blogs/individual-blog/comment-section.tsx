"use client";

import { useTranslations } from "next-intl";
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

export const CommentSection: FC = () => {
  const form = useForm();
  const comment = useTranslations("Comment Section");
  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-4xl font-bold uppercase">Leave a comment</h1>
      <Form {...form}>
        <form className="space-y-5">
          <div className="w-full flex items-center justify-between gap-5">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>{comment("Name")}</FormLabel>
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
                <FormItem className="w-full">
                  <FormLabel>{comment("Email")}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{comment("Message")}</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-end justify-end w-full">
            <Button size="lg" className="w-full md:w-fit">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
