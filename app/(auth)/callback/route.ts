import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { type CookieOptions, createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {

  // The `/(auth)/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  
	const { searchParams, origin } = new URL(request.url);
	const code = searchParams.get("code");
	const redirectTo = searchParams.get("redirect_to") || "/reset-password"; // Default to /reset-password

	if (code) {
		const cookieStore = cookies();
		const supabase = createServerClient(
			process.env.NEXT_PUBLIC_SUPABASE_URL!,
			process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
			{
				cookies: {
					get(name: string) {return cookieStore.get(name)?.value;},
					set(name: string, value: string, options: CookieOptions) {cookieStore.set({ name, value, ...options });},
					remove(name: string, options: CookieOptions) {cookieStore.delete({ name, ...options });},
				},
			}
		);
		const { error } = await supabase.auth.exchangeCodeForSession(code);
		if (!error) return NextResponse.redirect(`${origin}${redirectTo}`);
		else console.error("Error exchanging code for session:", error.message);
	}

	// return the user to an error page with instructions
	return NextResponse.redirect(`${origin}/auth-code-error`);
}
