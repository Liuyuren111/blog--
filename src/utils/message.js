import {ElMessage} from "element-plus";
import 'element-plus/es/components/message/style/css'

export const message = (message,type) =>{
    ElMessage({
        message,
        grouping: true,
        type,
    })
}