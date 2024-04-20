import { useParams } from "react-router-dom";
import { ResumeV1 } from "./v1";

export function Resume() {
    let { version } = useParams<{ version: string }>();
    let ResumeComponent;
    switch (version) {
        case 'v1':
            ResumeComponent = ResumeV1;
            break;
        // add more cases as needed
        default:
            ResumeComponent = NotFound;
    }
    return <ResumeComponent />;
}



function NotFound() {
    return <h1>Resume version not found</h1>;
}