import { useRouter } from "next/router";

export default function Details() {
    const router = useRouter();
    console.log(router);

    return "detail";
}