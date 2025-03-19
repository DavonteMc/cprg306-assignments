"use client"

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user } = useUserAuth();

    if (!user) {
        return <h1>Access Denied</h1>;
    }
}
