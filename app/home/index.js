import { Text, Card, Button} from "@rneui/base";
import { View, TextInput } from "react-native";
import { Link } from "expo-router";
import { UI } from '../ui'

import { CiteCard } from "../../src/components/CiteCard";
import { Searcher } from "../../src/components/Searcher";
import { TitlePage } from "../../src/components/TitlePage";


export default function Home() {

  return (
    <UI>
     
     <TitlePage title='Citas' />

     <Searcher/>

      <CiteCard/>

        <Link href="/userprofile" asChild>
          <Button containerStyle={{ marginTop: 20, width: "80%" }}>
            Login
          </Button>
        </Link>
    </UI>
  );
}