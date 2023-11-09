export interface product {
    objectID: string;
    name: string;
    unit_cost: number;
    description: string;
    images: Array<{
        url: string;
    }>;
}