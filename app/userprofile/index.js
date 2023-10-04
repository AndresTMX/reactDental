import { Button } from "@rneui/base";
import { Link } from "expo-router";

export default function userprofile () {
    return ( 
        <>
          <Link href="/" asChild>
          <Button containerStyle={{ marginTop: 20, width: "80%" }}>
            Login
          </Button>
        </Link>
        </>
     );
}

