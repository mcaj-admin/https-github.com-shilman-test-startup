import { addDecorator } from "@storybook/client-api";
import { withStartup } from "./startup/makeDecorator";

addDecorator(withStartup);
