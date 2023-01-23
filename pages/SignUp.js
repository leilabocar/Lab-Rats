import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SignUp from "../components/SignUp";
import { useRouter } from "next/router";

export default function signup() {
  return (
    <div>
      <SignUp />

  </div>
  );
}
