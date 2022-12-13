package com.c820ftjavareact.ecommerce.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
@Service
public class CloudinaryService {
    @Getter
    @Setter
    Cloudinary cloudinary;
    private Map<String, String> valuesMap = new HashMap<>();

    public CloudinaryService() {
        valuesMap.put("cloud_name", "dxsfutbfx");
        valuesMap.put("api_key", "815998767991621");
        valuesMap.put("api_secret", "JtDvdKF5vbsM79r30CkfXfvfBes");
        cloudinary = new Cloudinary(valuesMap);
    }
    public Map upload(MultipartFile multipartFile) throws IOException {
        File file = convert(multipartFile);
        Map result = cloudinary.uploader().upload(file, ObjectUtils.emptyMap());
        file.delete();
        return result;
    }
    public Map delete(String id) throws IOException {
        Map result = cloudinary.uploader().destroy(id,ObjectUtils.emptyMap());
        return  result;
    }
    private  File convert(MultipartFile multipartFile) throws IOException{
        File file = new File(multipartFile.getOriginalFilename());
        FileOutputStream fo = new FileOutputStream(file);
        fo.write(multipartFile.getBytes());
        fo.close();
        return file;
    }
}