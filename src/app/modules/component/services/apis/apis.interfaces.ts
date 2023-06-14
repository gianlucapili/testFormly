export interface ApiDescriptor {
    [key: string]: {
        verb?: string;
        method: string;
        params: { [key: string]: any };
    };
};

export interface ApiContainer {
    [key: string]: any;
};

export interface ApiEvent {
    name: string | null;
    success: boolean;
    data: any;
}