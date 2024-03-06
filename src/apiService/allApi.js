//video addd
//get all video
//catogory add
//get catogory

import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonStructure"

//addd video
export const addVideoApi=async(bodyData)=>{
   return await commonApi('POST',`${BASE_URL}/videos`,bodyData)
}

//get all video
export const getVideoApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})
 }

 //delete video
 export const deleteVideoApi=async(id)=>{
   return await commonApi('DELETE',`${BASE_URL}/videos/${id}`)
}


//  catogory add
 export const addCatoApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/Catogories`,bodyData)
 }
 
 //get catogory
 export const getCatoApi=async()=>{
   return await commonApi(`GET`,`${BASE_URL}/Catogories`,{})
}

//delete catogory
export const deleteCatoApi=async(id)=>{
   return await commonApi('DELETE',`${BASE_URL}/Catogories/${id}`,{})
}

//get single video

export const getVideo=async(id)=>{
   return await commonApi('GET',`${BASE_URL}/videos/${id}`,{})
}
//add video to cat video
export const updateCatApi=async(id,bodyData)=>{
   return await commonApi('PUT',`${BASE_URL}/Catogories/${id}`,bodyData)
}

//add history video
export const addHistoryApi=async(bodyData)=>{
   return await commonApi('POST',`${BASE_URL}/histories`,bodyData)
}

//get history video
export const getHistoryApi=async(bodyData)=>{
   return await commonApi('GET',`${BASE_URL}/histories`,bodyData)
}
//delete history
export const delHistoryApi=async(id)=>{
   return await commonApi('DELETE',`${BASE_URL}/histories/${id}`,{})
}
//delete catogory data
export const delCatDataApi=async(id)=>{
   return await commonApi('DELETE',`${BASE_URL}/Catogories/videos/${id}`,{})
}


//add video to cat video
export const getCatVideos=async(id,bodyData)=>{
   return await commonApi('GET',`${BASE_URL}/Catogories/videos/${id}`,bodyData)
}


export const VideoTest=async()=>{
   return await commonApi('GET',`${BASE_URL}/Catogories/videos`,{})
}
