import type {ProjectCategory} from "./ProjectCategory";
import type {Language} from "./Language";

export default class {
    name: string;
    repoUrl: string;
    imageUrl: string;
    smallDescription: string;
    description: string;
    language: Language;
    category: ProjectCategory;
}