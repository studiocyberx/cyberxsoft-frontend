import { Button } from "@/components/ui/button";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

async function getStrapiData(endpoint: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + endpoint);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <Button asChild variant="secondary" className="">
        <Link href="/">Go Back</Link>
      </Button>
    </>
  );
};

export default UsersPage;
