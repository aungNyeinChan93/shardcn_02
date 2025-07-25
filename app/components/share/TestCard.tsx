import React from "react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import TestBreadcrumb from "./TestBreadcrumb";

export const getProducts = async () => {
  const response = await fetch(`https://dummyjson.com/products`);
  const { products } = await response.json();
  return products;
};

const TestCard = async () => {
  const products = await getProducts();
  return (
    <React.Fragment>
      <TestBreadcrumb current="Products Page" />
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 ">
        {products &&
          Array.isArray(products) &&
          products?.map((product) => (
            <Card
              key={product.id}
              className=" shadow hover:shadow-lg hover:shadow-indigo-300 transition ease-in "
            >
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>
                  {product.description.substring(0, 100) + ". . ."}
                </CardDescription>
                <CardAction>
                  <Button variant={"outline"} className=" rounded-full">
                    <ShoppingCart size={32} strokeWidth={1.5} />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <img
                  className="w-60 h-60 object-center "
                  src={product?.thumbnail}
                  alt={product.id}
                />
              </CardContent>
              <CardFooter>
                <Button
                  className="bg-indigo-500 w-full"
                  size={"lg"}
                  variant={"default"}
                >
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
      </section>
    </React.Fragment>
  );
};

export default TestCard;
