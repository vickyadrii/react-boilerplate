import { useEffect, useState } from "react";

const HomeCard = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("user-data");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-primary to-[#186b80] rounded-lg shadow-lg text-white">
      <div className="flex flex-col items-start gap-3">
        <h3 className="md:text-3xl text-xl font-bold">Halo, {username}</h3>
        <div className="flex flex-col">
          <p className="font-medium md:text-base text-sm">
            This is your dashboard where you can manage your profile and view your activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
