import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import CustomStudioNavbar from "./components/studio/navbar.studio.component";
import { CustomStudioLogo } from "./components/studio/logo.studio.components";

export default defineConfig({
  basePath: "/studio",
  name: "kennyhoft_studio",
  title: "Kenny Hoft Studio",

  projectId: "ylwllkb5",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: CustomStudioLogo,
      navbar: CustomStudioNavbar,
    },
  },
});
