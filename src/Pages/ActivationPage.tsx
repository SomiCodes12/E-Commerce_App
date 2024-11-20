import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { verificationToken } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (verificationToken) {
        console.log("here is the token : " , verificationToken);
        
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/activate`, {
            verificationToken
          });
          console.log("res", res);
        } catch (err: any) {
          console.log(err);
          setError(true)
        }
      };
      activationEmail();
    }
  }, [verificationToken]);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        {
            error ? "Hurray!!.... Your Token is expired" : "Your account has been activated"
        }
    </div>
  );
};

export default ActivationPage;
