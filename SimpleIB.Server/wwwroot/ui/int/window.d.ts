import { Application } from "../application";

declare global {
    interface Window {
        app: Application;
    }
}
