import { ResultItem } from './resultItem';

export interface Result {
    title: string;
    link: string;
    description: string;
    modified: string;
    generator: string;
    items: ResultItem[];
}
