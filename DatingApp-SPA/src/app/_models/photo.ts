import { BlockingProxy } from "blocking-proxy";

export interface Photo {
    id: number;
    url: string;
    description: string;
    datesAdded: Date;
    isMain: boolean;
}
