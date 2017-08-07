import { Section } from "app/models/Site/Section";

export class Page {
    id:string;
    title:string;
    description:string;
    sections:Array<Section>;

    constructor(title:string, description:string, sections:Array<Section>) {
        this.title = title;
        this.description = description;
        this.sections = sections;
    }
}