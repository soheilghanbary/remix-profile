import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { FC } from "react";

interface UserProps {
  id: 7;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const loader: LoaderFunction = async () => {
  const { data } = await axios.get("https://reqres.in/api/users");
  return data.data;
};

const UsersPage = () => {
  const users = useLoaderData<UserProps[]>();
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

const Card: FC<UserProps> = ({ email, avatar, first_name, last_name }) => (
  <div className="bg-darker p-10 rounded-xl flex gap-8 shadow-md items-center xl:flex-row lg:flex-row md:flex-row flex-col text-center">
    <div className="w-24 bg-darken rounded-full p-2">
      <img src={avatar} className="w-full rounded-full" />
    </div>
    <div>
      <h2 className="text-lg text-white font-medium">{`${first_name} ${last_name}`}</h2>
      <h3 className="mb-4 text-sm leading-7">{email}</h3>
      <button className="py-2 active:scale-90 hover:bg-primary duration-200 hover:border-primary hover:text-white px-8 rounded-full leading-6 border border-zinc-600 text-zinc-300">
        Follow
      </button>
    </div>
  </div>
);

export default UsersPage;
