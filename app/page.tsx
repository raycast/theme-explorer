import React from "react";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/peduarte/red");
  return <h1>hello</h1>;
}
