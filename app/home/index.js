import { useState } from "react";
import { Text, Card, Button, Tab, TabView } from "@rneui/base";
import { Link } from "expo-router";
import { UI } from '../ui'

export default function Home() {
  return (
    <UI>
      <Card>
        <Text>Texto juasjuas</Text>
        <Link href="/" asChild>
          <Button containerStyle={{ marginTop: 20, width: "80%" }}>
            Login
          </Button>
        </Link>
      </Card>
    </UI>
  );
}