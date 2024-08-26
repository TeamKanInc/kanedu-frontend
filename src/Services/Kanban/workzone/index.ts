import { kanEduApi } from "../../../api";
import { createWorkzoneDto } from "../../../models";

export const CreateWorkzone = async (workzone:createWorkzoneDto)=>{

    const {data}= await kanEduApi.post("/work-zones", workzone);
    return data;
}