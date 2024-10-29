"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {formSchema} from "../../../schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

function CardForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      percent: "",
    },
  });

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <Form {...form}>
      <form className="space-y-6 px-96" onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="space-y-2">
          <CardHeader>
            <CardTitle>Cupones de Descuento</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="percent"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Porcentaje de descuento</FormLabel>
                  <FormControl>
                    <Input placeholder="percent" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </CardContent>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

export default CardForm;
/*
    <Card>
      <CardHeader>
        <CardTitle>Cupones de Descuento</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Correo electrónico</p>
        <Input id="email" placeholder="Email" type="email" />
        <p>Porcentaje de descuento</p>
        <Input id="descuento" placeholder="Descuento" type="descuento" />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
*/
