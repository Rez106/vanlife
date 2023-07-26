import { redirect } from "react-router";

export const requireAuth = async (request) => {
    const url = new URL(request.url);

    const isLoggedIn = localStorage.getItem("isLoggedIn") || false;

    if (!isLoggedIn) {
        throw redirect(`/login?redirectTo=${url.pathname}`);
    }


    return null;
} 