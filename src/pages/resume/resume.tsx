import { useParams } from "react-router-dom";
import { ResumeV1 } from "./v1";
import { ResumeAyush } from "./ayush";
import { ResumeDivyanshu } from "./diyanshu";
import { ResumePriyanshu } from "./priyanshu";

export function Resume() {
    let { version } = useParams<{ version: string }>();
    let ResumeComponent;
    switch (version) {
        case 'v1':
            ResumeComponent = ResumeV1;
            break;
        case 'ayush':
            ResumeComponent = ResumeAyush;
            break;
        case 'divyanshu':
            ResumeComponent = ResumeDivyanshu;
            break;
        case 'priyanshu':
            ResumeComponent = ResumePriyanshu;
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