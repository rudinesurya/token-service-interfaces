export interface ITokenDecodeResponse {
    status: number;
    system_message: string;
    data: { user_id: string } | null;
    errors: { [key: string]: any } | null;
}