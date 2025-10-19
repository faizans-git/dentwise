import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"; 
import AdminDasboardClient from "./AdminDasboardClient";

 async function AdminPage() {
  const user = await currentUser();
  if (!user) redirect('/');

  const adminEmail = process.env.ADMIN_EMAIL;
  const userEmail = user.emailAddresses[0]?.emailAddress;

  if (!adminEmail || userEmail !== adminEmail) redirect('/dashboard')


  return (
    <AdminDasboardClient />
  )
}
export default AdminPage