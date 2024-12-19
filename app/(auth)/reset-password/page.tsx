import { resetPasswordAction } from "@/actions/authActions";
import { FormMessage, Message } from "@/components/forms/form-message";
import { SubmitButton } from "@/components/forms/submit-button";
import { Input } from "@/components/ui/form/input";
import { Label } from "@/components/ui/form/label";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
<form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4 mx-auto mt-10">
      <h1 className="flex justify-center items-center text-2xl font-medium">Reset password</h1>
      <p className="flex justify-center items-center text-sm text-foreground/60 mb-10">
        Please enter your new password below.
      </p>
      <Label htmlFor="password">New password</Label>
      <Input
        type="password"
        name="password"
        placeholder="New password"
        required
      />
      <Label htmlFor="confirmPassword">Confirm password</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>
        Reset password
      </SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
